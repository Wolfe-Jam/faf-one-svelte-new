import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	checkPassword,
	cookieName,
	cookieOpts,
	isAllowed,
	makeSession,
	normEmail
} from '$lib/fafb-drive-auth';

export const POST: RequestHandler = async ({ request, cookies }) => {
	let body: { email?: string; password?: string };
	try {
		body = await request.json();
	} catch {
		return json({ success: false, error: 'Invalid JSON' }, { status: 400 });
	}

	const email = normEmail(body.email || '');
	const password = (body.password || '').trim();
	if (!email || !password) {
		return json({ success: false, error: 'Email and password.' }, { status: 400 });
	}

	if (!isAllowed(email) || !(await checkPassword(email, password))) {
		return json({ success: false, error: 'That did not match.' }, { status: 401 });
	}

	cookies.set(cookieName(), await makeSession(email), cookieOpts());
	return json({ success: true, email });
};
