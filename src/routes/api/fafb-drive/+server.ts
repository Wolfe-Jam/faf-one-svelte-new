/**
 * FAFb 0.9 test-drive answers → team@faf.one
 * Unlisted. Same Q01–Q22 as the locked cohort set.
 */
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { cookieName, readSession } from '$lib/fafb-drive-auth';

let resend: Resend | null = null;
function getResend(): Resend | null {
	if (!resend && env.RESEND_API_KEY) {
		resend = new Resend(env.RESEND_API_KEY);
	}
	return resend;
}

const IDS = [
	'Q01', 'Q02', 'Q03', 'Q04', 'Q05', 'Q06', 'Q07', 'Q08', 'Q09', 'Q10',
	'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'
] as const;

function esc(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function asText(v: unknown): string {
	if (Array.isArray(v)) return v.map(String).join(', ');
	if (v === null || v === undefined) return '';
	return String(v).trim();
}

export const POST: RequestHandler = async ({ request, cookies }) => {
	const who = await readSession(cookies.get(cookieName()));
	if (!who) {
		return json({ success: false, error: 'Sign in first.' }, { status: 401 });
	}

	if (!env.RESEND_API_KEY) {
		return json({ success: false, error: 'Email service not configured' }, { status: 500 });
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return json({ success: false, error: 'Invalid JSON' }, { status: 400 });
	}

	// Honeypot
	if (asText(body.website)) {
		return json({ success: true });
	}

	const answers: Record<string, string> = {};
	for (const id of IDS) {
		answers[id] = asText(body[id]);
	}

	if (!answers.Q01 || !answers.Q03 || !answers.Q06 || !answers.Q19 || !answers.Q20 || !answers.Q21) {
		return json({ success: false, error: 'Required fields missing' }, { status: 400 });
	}

	const handle = answers.Q01;
	const date = new Date().toISOString().slice(0, 10);
	const md = [
		'# FAFb 0.9 answers',
		'',
		`- handle: ${handle}`,
		`- date: ${date}`,
		`- set: QUESTIONS.md (locked cohort)`,
		`- via: faf.one/fafb-drive`,
		`- signed-in: ${who}`,
		'',
		...IDS.flatMap((id) => [`## ${id}`, '', answers[id] || '_(blank)_', ''])
	].join('\n');

	const html = `
<!DOCTYPE html>
<html><body style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:14px;color:#111;">
<p><strong>FAFb 0.9 answers</strong> · ${esc(handle)} · ${date}</p>
<pre style="white-space:pre-wrap;background:#FEFCF8;padding:16px;border:1px solid #E8E4DC;">${esc(md)}</pre>
</body></html>`.trim();

	const client = getResend();
	if (!client) {
		return json({ success: false, error: 'Email service not configured' }, { status: 500 });
	}

	const { error } = await client.emails.send({
		from: 'FAFb drive <team@faf.one>',
		to: 'team@faf.one',
		subject: `[FAFb 0.9] ${handle}`,
		html,
		text: md
	});

	if (error) {
		return json({ success: false, error: error.message }, { status: 500 });
	}

	return json({ success: true });
};
