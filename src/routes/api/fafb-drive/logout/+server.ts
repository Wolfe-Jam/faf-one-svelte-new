import type { RequestHandler } from './$types';
import { cookieName, cookieOpts } from '#lib/fafb-drive-auth.js';

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete(cookieName(), { path: cookieOpts().path });
	return Response.json({ success: true });
};
