// Google Search Console site verification.
// Served via a route, NOT static/, because Cloudflare Pages 308-redirects
// every *.html static asset to its extensionless path — which makes
// Google's file check fail (308 -> 404). A dynamic route at this exact
// path is not a static asset, so the .html redirect never applies.
export const prerender = false;

const TOKEN = 'google-site-verification: google4f32e90be20e6b0a.html';

export function GET() {
	return new Response(TOKEN, {
		headers: { 'Content-Type': 'text/html; charset=utf-8' }
	});
}
