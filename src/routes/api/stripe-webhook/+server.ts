/**
 * 🏎️ Stripe Webhook Handler
 *
 * Listens for checkout.session.completed → generates license key → emails it via Resend.
 * No database dependency. Simple and reliable.
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { generateLicenseKey } from '$lib/license-generator';
import { sendLicenseEmail } from '$lib/emails/send-license-email';
import { storeLicense, getNextLicenseNumber } from '$lib/license-store';

// Pro tier payment links (tri-sync CLI, Annual, Global)
const PRO_PAYMENT_LINKS = [
    'plink_1T6QXrRt8WbJblnRUqA0GBxW',  // tri-sync CLI $3/mo
    'plink_1T6QhFRt8WbJblnRzClZhAVU',   // tri-sync Annual $19/yr
    'plink_1T6Qu3Rt8WbJblnRYmCdqYVg',   // tri-sync Global $29/yr — Friends of FAF
];

// $29/yr All Areas — Friends of FAF (numbered #0001-#0100)
const GLOBAL_PAYMENT_LINK = 'plink_1T6Qu3Rt8WbJblnRYmCdqYVg';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.text();
        const signature = request.headers.get('stripe-signature');

        if (!signature) {
            return json({ error: 'No signature' }, { status: 400 });
        }

        let event;
        try {
            event = JSON.parse(body);
        } catch {
            return json({ error: 'Invalid JSON' }, { status: 400 });
        }

        console.log(`📨 Webhook received: ${event.type}`);

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const email = session.customer_details?.email || session.customer_email;
            const subscriptionId = session.subscription;

            if (!email) {
                console.error('❌ No email in checkout session');
                return json({ error: 'No email' }, { status: 400 });
            }

            // Only process known Pro payment links
            const isProPaymentLink = session.payment_link && PRO_PAYMENT_LINKS.includes(session.payment_link);

            if (!isProPaymentLink && !session.metadata?.tier) {
                console.log(`⏭️ Skipping unknown payment link: ${session.payment_link || 'none'}`);
                return json({ received: true, skipped: true });
            }

            const tier = session.metadata?.tier || 'pro';

            // Generate license key
            const key = generateLicenseKey();

            console.log(`🔑 Generated ${tier} license: ${key} for ${email}`);

            // Assign Friends of FAF number for $29/yr All Areas
            let licenseNumber: number | undefined;
            if (session.payment_link === GLOBAL_PAYMENT_LINK) {
                try {
                    const nextNum = await getNextLicenseNumber();
                    if (nextNum === null) {
                        console.log('⚠️ Friends of FAF cap reached (100)');
                    } else {
                        licenseNumber = nextNum;
                        console.log(`🧡 Friend of FAF #${String(licenseNumber).padStart(4, '0')}`);
                    }
                } catch (numError) {
                    console.error('⚠️ Failed to get license number:', numError);
                }
            }

            const license = {
                key,
                email,
                tier: tier as any,
                stripeCustomerId: session.customer || '',
                stripeSubscriptionId: subscriptionId || '',
                status: 'active' as const,
                createdAt: new Date().toISOString(),
                licenseNumber
            };

            // Email it
            const emailResult = await sendLicenseEmail(license);

            if (emailResult.success) {
                console.log(`✅ License emailed: ${key} to ${email}`);
            } else {
                console.error(`⚠️ Email failed: ${emailResult.error}`);
            }

            // Persist to Supabase
            try {
                await storeLicense(license);
            } catch (storeError) {
                console.error('⚠️ License store failed:', storeError);
                // Don't fail the webhook — email was sent, key is valid
            }

            return json({ received: true, key, tier, email, licenseNumber, emailSent: emailResult.success, emailError: emailResult.error || null });
        }

        // All other events — acknowledge
        return json({ received: true });

    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('❌ Webhook error:', message);
        return json({ error: 'Webhook handler failed', detail: message }, { status: 500 });
    }
};
