import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { cookieName, cookieOpts } from '$lib/fafb-drive-auth';

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete(cookieName(), { path: cookieOpts().path });
	return json({ success: true });
};
