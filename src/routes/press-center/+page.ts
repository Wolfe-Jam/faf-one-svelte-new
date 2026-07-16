import { redirect } from '@sveltejs/kit';

/** Press hub is /press — keep this URL alive as a hop. */
export function load() {
	throw redirect(301, '/press');
}
