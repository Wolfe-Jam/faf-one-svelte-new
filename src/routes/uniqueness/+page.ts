import { redirect } from '@sveltejs/kit';

/** Page moved to /ai-catalog — keep this URL alive as a hop. */
export function load() {
	throw redirect(301, '/ai-catalog');
}
