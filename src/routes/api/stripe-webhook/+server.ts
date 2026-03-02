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

// Pro tier payment links (tri-sync CLI, Annual, Global)
const PRO_PAYMENT_LINKS = [
    'plink_1T6QXrRt8WbJblnRUqA0GBxW',  // tri-sync CLI $3/mo
    'plink_1T6QhFRt8WbJblnRzClZhAVU',   // tri-sync Annual $19/yr
    'plink_1T6Qu3Rt8WbJblnRYmCdqYVg',   // tri-sync Global $29/yr
];

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

            // Determine tier from payment link
            const isProPaymentLink = session.payment_link && PRO_PAYMENT_LINKS.includes(session.payment_link);
            const tier = session.metadata?.tier || (isProPaymentLink ? 'pro' : 'turbo');

            // Generate license key
            const key = generateLicenseKey();

            console.log(`🔑 Generated ${tier} license: ${key} for ${email}`);

            // Email it
            const license = {
                key,
                email,
                tier: tier as any,
                stripeCustomerId: session.customer || '',
                stripeSubscriptionId: subscriptionId || '',
                status: 'active' as const,
                createdAt: new Date().toISOString()
            };

            const emailResult = await sendLicenseEmail(license);

            if (emailResult.success) {
                console.log(`✅ License emailed: ${key} to ${email}`);
            } else {
                console.error(`⚠️ Email failed: ${emailResult.error}`);
            }

            return json({ received: true, key, tier, email });
        }

        // All other events — acknowledge
        return json({ received: true });

    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('❌ Webhook error:', message);
        return json({ error: 'Webhook handler failed', detail: message }, { status: 500 });
    }
};
