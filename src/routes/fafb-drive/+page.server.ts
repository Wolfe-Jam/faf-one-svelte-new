import { cookieName, readSession } from '#lib/fafb-drive-auth.js';

export const prerender = false;

export async function load({ cookies }) {
	const email = await readSession(cookies.get(cookieName()));
	return {
		pinBanner: true,
		authed: !!email,
		email: email || ''
	};
}
