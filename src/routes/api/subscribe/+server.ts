/**
 * 📧 Email Subscribe Endpoint
 *
 * Simple model (no Resend Audience): notify team@ via Resend send,
 * optional short auto-reply to the subscriber. Formspree is backup only.
 *
 * Same spine as contact: RESEND_API_KEY + team@faf.one inbox.
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

/** Same Formspree form as downloads — backup if Resend send fails. */
const FORMSPREE_URL = 'https://formspree.io/f/xnngaegg';
const TEAM = 'team@faf.one';
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

/** Notify team@ — one email per signup. Search Gmail for [Subscribe]. */
async function notifyTeam(client: Resend, email: string, source: string): Promise<{ ok: boolean; error?: string }> {
	const { error } = await client.emails.send({
		from: 'FAF Subscribe <team@faf.one>',
		replyTo: email,
		to: TEAM,
		subject: `[Subscribe] ${email}`,
		text: [
			'New signup',
			'',
			`Email: ${email}`,
			`Source: ${source}`,
			`When: ${new Date().toISOString()}`,
			'',
			'Reply-To is the subscriber.'
		].join('\n'),
		html: `
<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#333;max-width:560px;margin:0 auto;padding:20px;">
  <h2 style="color:#FF6B35;margin:0 0 16px;">New signup</h2>
  <p style="margin:0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p style="margin:0 0 8px;"><strong>Source:</strong> ${source}</p>
  <p style="margin:0;color:#888;font-size:13px;">${new Date().toISOString()}</p>
</body></html>`.trim()
	});

	if (error) return { ok: false, error: error.message };
	return { ok: true };
}

function sendAutoReply(client: Resend, email: string): void {
	client.emails
		.send({
			from: 'James @ FAF <team@faf.one>',
			to: email,
			subject: "You're on the list",
			html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0">
      <tr><td style="padding-bottom:24px;">
        <img src="https://faf.one/orange-smiley.svg" width="48" height="48" alt="FAF" style="display:block;" />
      </td></tr>
      <tr><td style="font-size:18px;font-weight:700;color:#111;padding-bottom:12px;">Hey,</td></tr>
      <tr><td style="font-size:15px;color:#444;line-height:1.6;padding-bottom:20px;">
        You're on the list. New posts land when they ship — no spam.<br><br>
        Latest always at <a href="https://faf.one/blog" style="color:#FF6B35;text-decoration:none;">faf.one/blog</a>.
      </td></tr>
      <tr><td style="font-size:14px;color:#888;border-top:1px solid #eee;padding-top:16px;">
        — James<br>
        <span style="color:#bbb;font-size:12px;">faf.one</span>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`
		})
		.catch((err: Error) => console.warn('⚠️ Subscribe auto-reply failed (non-critical):', err.message));
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const email = typeof body.email === 'string' ? body.email.trim() : '';
		const source = typeof body.source === 'string' ? body.source : 'faf.one/subscribe';

		if (!email || !EMAIL_RE.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		const client = getResend();
		if (client) {
			const team = await notifyTeam(client, email, source);
			if (team.ok) {
				sendAutoReply(client, email);
				console.log(`✅ New subscriber (Resend → team@): ${email} from ${source}`);
				return json({ message: 'Subscribed!', subscribed: true, via: 'resend' });
			}
			console.error('❌ Resend subscribe notify failed:', team.error);
		}

		// Backup
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
