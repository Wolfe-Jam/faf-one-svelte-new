import { redirect } from '@sveltejs/kit';

/** Renamed to /blog/your-files-stay-yours-rust — keep this URL alive as a hop. */
export function load() {
	throw redirect(301, '/blog/your-files-stay-yours-rust');
}
