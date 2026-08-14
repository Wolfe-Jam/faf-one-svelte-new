import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { isAllowed, normEmail, passwordFor } from '$lib/fafb-drive-auth';

let resend: Resend | null = null;
function getResend(): Resend | null {
	if (!resend && env.RESEND_API_KEY) {
		resend = new Resend(env.RESEND_API_KEY);
	}
	return resend;
}

export const POST: RequestHandler = async ({ request }) => {
	let body: { email?: string; website?: string };
	try {
		body = await request.json();
	} catch {
		return json({ success: false, error: 'Invalid JSON' }, { status: 400 });
	}

	if (body.website) return json({ success: true });

	const email = normEmail(body.email || '');
	if (!email) {
		return json({ success: false, error: 'Need a real email.' }, { status: 400 });
	}

	// Same reply either way. Do not leak the list.
	const ok = isAllowed(email) && !!env.RESEND_API_KEY;
	if (ok) {
		try {
			const pw = await passwordFor(email);
			const client = getResend();
			if (client) {
				await client.emails.send({
					from: 'James @ FAF <team@faf.one>',
					to: email,
					bcc: 'team@faf.one',
					subject: 'Your FAFb 0.9 password',
					text: `Your password for faf.one/fafb-drive\n\n${pw}\n\nSame password if you ask again.\n\n— James`,
					html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0">
<tr><td style="font-size:18px;font-weight:700;color:#111;padding-bottom:12px;">FAFb 0.9</td></tr>
<tr><td style="font-size:15px;color:#444;line-height:1.6;padding-bottom:16px;">Your password for faf.one/fafb-drive</td></tr>
<tr><td style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:22px;letter-spacing:0.12em;font-weight:700;color:#111;background:#FEFCF8;border:1px solid #E8E4DC;padding:16px;border-radius:8px;">${pw}</td></tr>
<tr><td style="font-size:13px;color:#888;padding-top:16px;">Same password if you ask again.</td></tr>
<tr><td style="font-size:14px;color:#888;padding-top:20px;">— James</td></tr>
</table></td></tr></table></body></html>`
				});
			}
		} catch (e) {
			console.error('fafb-drive request', e);
		}
	}

	return json({ success: true });
};
