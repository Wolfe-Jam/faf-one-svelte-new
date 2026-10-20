import { redirect } from '@sveltejs/kit';

/** Support is a GitHub issue or team@faf.one, written up at docs.faf.one. Old page: tag archive/support-software-club */
export function load() {
	redirect(301, 'https://docs.faf.one', { external: true });
}
