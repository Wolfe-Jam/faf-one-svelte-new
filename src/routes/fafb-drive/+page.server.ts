import { cookieName, readSession } from '#lib/fafb-drive-auth.js';
import { FAFB_DRIVE_OPEN } from '#lib/fafb-drive-switch.js';

export const prerender = false;

export async function load({ cookies }) {
	const email = await readSession(cookies.get(cookieName()));
	return {
		pinBanner: true,
		open: FAFB_DRIVE_OPEN,
		authed: FAFB_DRIVE_OPEN && !!email,
		email: email || ''
	};
}
