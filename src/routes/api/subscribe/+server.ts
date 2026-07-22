/**
 * 📧 Email Subscribe Endpoint
 *
 * Primary: Formspree (same form as /downloads — proven live).
 * Optional: Resend Audience when RESEND_API_KEY + RESEND_AUDIENCE_ID are valid.
 *
 * 2026-07-22: Resend key on CF was invalid (contact + subscribe both 500
 * "API key is invalid"). Formspree restores the blog/footer capture.
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

/** Same Formspree form as downloads/+page.svelte — do not invent a second form. */
const FORMSPREE_URL = 'https://formspree.io/f/xnngaegg';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let resend: Resend | null = null;
function getResend(): Resend | null {
	if (!resend && env.RESEND_API_KEY) {
		resend = new Resend(env.RESEND_API_KEY);
	}
	return resend;
}

async function subscribeFormspree(email: string, source: string): Promise<{ ok: boolean; error?: string }> {
	const res = await fetch(FORMSPREE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			email,
			type: 'Blog / Newsletter Signup',
			source: source || 'faf.one/subscribe',
			timestamp: new Date().toISOString()
		})
	});

	if (!res.ok) {
		const text = await res.text().catch(() => '');
		return { ok: false, error: text || `Formspree HTTP ${res.status}` };
	}
	return { ok: true };
}

async function subscribeResend(email: string): Promise<{ ok: boolean; skip?: boolean; error?: string }> {
	const client = getResend();
	const audienceId = env.RESEND_AUDIENCE_ID;
	if (!client || !audienceId) {
		return { ok: false, skip: true };
	}

	const { error } = await client.contacts.create({
		audienceId,
		email,
		unsubscribed: false
	});

	if (error) {
		// Duplicate → success
		if (
			(error as { statusCode?: number }).statusCode === 409 ||
			error.message?.includes('already exists')
		) {
			return { ok: true };
		}
		// Invalid/expired key → fall through to Formspree (don't 500 the user)
		if (
			error.message?.toLowerCase().includes('api key') ||
			error.message?.toLowerCase().includes('invalid') ||
			(error as { statusCode?: number }).statusCode === 401
		) {
			console.error('❌ Resend key unusable, falling back to Formspree:', error.message);
			return { ok: false, skip: true, error: error.message };
		}
		return { ok: false, error: error.message };
	}
	return { ok: true };
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const email = typeof body.email === 'string' ? body.email.trim() : '';
		const source = typeof body.source === 'string' ? body.source : 'faf.one/subscribe';

		if (!email || !EMAIL_RE.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		// Prefer Resend Audience when it works; Formspree is the reliable path.
		const resendResult = await subscribeResend(email);
		if (resendResult.ok) {
			console.log(`✅ New subscriber (Resend): ${email} from ${source}`);
			return json({ message: 'Subscribed!', subscribed: true, via: 'resend' });
		}
		if (!resendResult.skip && resendResult.error) {
			console.error('❌ Resend subscribe error:', resendResult.error);
			// still try Formspree rather than hard-fail
		}

		const fs = await subscribeFormspree(email, source);
		if (!fs.ok) {
			console.error('❌ Formspree subscribe error:', fs.error);
			return json({ error: 'Failed to subscribe' }, { status: 500 });
		}

		console.log(`✅ New subscriber (Formspree): ${email} from ${source}`);
		return json({ message: 'Subscribed!', subscribed: true, via: 'formspree' });
	} catch (error) {
		console.error('❌ Subscribe error:', error);
		return json({ error: 'Failed to subscribe' }, { status: 500 });
	}
};
