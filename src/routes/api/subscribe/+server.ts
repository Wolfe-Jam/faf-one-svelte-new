/**
 * 📧 Email Subscribe Endpoint
 *
 * Adds subscribers to Resend Audience for blog broadcasts.
 * Requires: RESEND_API_KEY (full-access), RESEND_AUDIENCE_ID
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

let resend: Resend | null = null;
function getResend(): Resend | null {
	if (!resend && env.RESEND_API_KEY) {
		resend = new Resend(env.RESEND_API_KEY);
	}
	return resend;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, source } = await request.json();

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		const client = getResend();
		const audienceId = env.RESEND_AUDIENCE_ID;

		if (!client || !audienceId) {
			console.error('❌ RESEND_API_KEY or RESEND_AUDIENCE_ID not configured');
			return json({ error: 'Email service not configured' }, { status: 500 });
		}

		const { error } = await client.contacts.create({
			audienceId,
			email,
			unsubscribed: false,
		});

		if (error) {
			// Resend returns 409 for duplicate contacts — treat as success
			if ((error as any).statusCode === 409 || error.message?.includes('already exists')) {
				console.log(`ℹ️ Already subscribed: ${email}`);
				return json({ message: 'Already subscribed', subscribed: true });
			}
			console.error('❌ Subscribe error:', error);
			return json({ error: error.message }, { status: 500 });
		}

		console.log(`✅ New subscriber: ${email} from ${source || 'unknown'}`);
		return json({ message: 'Subscribed!', subscribed: true });

	} catch (error) {
		console.error('❌ Subscribe error:', error);
		return json({ error: 'Failed to subscribe' }, { status: 500 });
	}
};
