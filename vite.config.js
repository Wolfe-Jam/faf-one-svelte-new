import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			prerender: {
				// Blog has 140+ posts spanning months; a handful reference images that
				// went missing over time (pre-existing rot, unrelated to prerendering
				// itself). Warn instead of hard-failing the build so this surfaces as
				// a visible, fixable list rather than blocking every deploy.
				handleHttpError: 'warn'
			}
		})
	],
	assetsInclude: ['**/*.wasm'],
	server: {
		headers: {
			'Permissions-Policy': 'tools=(self)'
		}
	},
	preview: {
		headers: {
			'Permissions-Policy': 'tools=(self)'
		}
	}
});
