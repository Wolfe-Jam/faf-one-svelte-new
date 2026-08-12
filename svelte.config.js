import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			// Blog has 140+ posts spanning months; a handful reference images that
			// went missing over time (pre-existing rot, unrelated to prerendering
			// itself). Warn instead of hard-failing the build so this surfaces as
			// a visible, fixable list rather than blocking every deploy.
			handleHttpError: 'warn'
		}
	}
};

export default config;
