import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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
