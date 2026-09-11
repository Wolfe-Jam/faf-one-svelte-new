export const prerender = true;

/** Own clean page: no site banner, badges, or footer (see +layout.svelte). */
export const load = () => ({ chromeless: true });
