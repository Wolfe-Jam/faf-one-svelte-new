import type { RequestHandler } from './$types';
import {
	checkPassword,
	cookieName,
	cookieOpts,
	isAllowed,
	makeSession,
	normEmail
} from '#lib/fafb-drive-auth.js';
import { FAFB_DRIVE_OPEN, FAFB_DRIVE_PAUSED } from '#lib/fafb-drive-switch.js';

export const POST: RequestHandler = async ({ request, cookies }) => {
	if (!FAFB_DRIVE_OPEN) {
		return Response.json({ success: false, error: FAFB_DRIVE_PAUSED }, { status: 503 });
	}
	let body: { email?: string; password?: string };
	try {
		body = await request.json();
	} catch {
		return Response.json({ success: false, error: 'Invalid JSON' }, { status: 400 });
	}

	const email = normEmail(body.email || '');
	const password = (body.password || '').trim();
	if (!email || !password) {
		return Response.json({ success: false, error: 'Email and password.' }, { status: 400 });
	}

	if (!isAllowed(email) || !(await checkPassword(email, password))) {
		return Response.json({ success: false, error: 'That did not match.' }, { status: 401 });
	}

	cookies.set(cookieName(), await makeSession(email), cookieOpts());
	return Response.json({ success: true, email });
};
