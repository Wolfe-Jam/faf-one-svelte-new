import { redirect } from '@sveltejs/kit';

/** Legacy /docs mirror retired — canonical manual lives at docs.faf.one */
export function load() {
	redirect(301, 'https://docs.faf.one');
}