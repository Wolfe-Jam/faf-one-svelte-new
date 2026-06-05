import { redirect } from '@sveltejs/kit';

// /link → /links (the links hub). Handled inside the Cloudflare worker, so it
// fires regardless of _redirects/vercel.json (both ignored in advanced mode).
export const prerender = false;

export function GET() {
	redirect(308, '/links');
}
