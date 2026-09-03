// Generated sitemap — enumerates every +page.svelte at build time so it
// can never drift from the actual routes. There is no static sitemap.xml.

export const prerender = true;

const SITE = 'https://faf.one';

// import.meta.glob keys are the only thing we need (the route paths).
// Resolved by Vite at build time; modules are never imported.
const PAGE_FILES = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'));

// Routes that exist as pages but must NOT be indexed.
const EXCLUDE = [
	/^\/docs$/, // 301 → docs.faf.one (external canonical)
	/^\/og(\/|$)/, // OpenGraph image render targets
	/^\/blog\/drafts(\/|$)/, // unpublished drafts
	/^\/diagrams\/og-/, // diagram OG render targets
	/^\/diagrams\/.*-banner$/, // diagram banner render targets
	/^\/logo-demo$/, // dev/demo page
	/^\/v4(\/|$)/, // legacy mini-site
	/^\/survival$/, // thin wrapper
	/^\/trinity$/, // shell
	/^\/fafb-drive$/ // private 0.9 test-drive — noindex
];

function routeFor(file) {
	const r = file.replace('/src/routes', '').replace('/+page.svelte', '');
	return r === '' ? '/' : r;
}

function meta(route) {
	if (route === '/') return ['weekly', '1.0'];
	if (route === '/agent' || route === '/try') return ['weekly', '0.95'];
	if (route === '/about' || route === '/privacy' || route === '/terms') return ['yearly', '0.9'];
	if (route === '/blog') return ['weekly', '0.9'];
	if (route.startsWith('/blog/')) return ['monthly', '0.7'];
	if (route === '/updates') return ['weekly', '0.8'];
	if (
		['/voice', '/zeph', '/grok', '/cli', '/rust', '/pro', '/mcp', '/mcpaas',
			'/ecosystem', '/v4', '/wjttc', '/demos', '/aaif', '/agents', '/memory', '/ai-catalog'].includes(route)
	) return ['monthly', '0.85'];
	if (route === '/diagrams') return ['monthly', '0.8'];
	if (route.startsWith('/diagrams/')) return ['monthly', '0.6'];
	if (route.startsWith('/guides/')) return ['monthly', '0.75'];
	return ['monthly', '0.7'];
}

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);

	const routes = PAGE_FILES.map(routeFor)
		.filter((r) => !EXCLUDE.some((re) => re.test(r)))
		.sort();

	const urls = routes
		.map((r) => {
			const [freq, prio] = meta(r);
			return `  <url><loc>${SITE}${r}</loc><lastmod>${lastmod}</lastmod><changefreq>${freq}</changefreq><priority>${prio}</priority></url>`;
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
