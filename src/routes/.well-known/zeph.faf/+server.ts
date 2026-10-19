/**
 * ZEPH's project.faf, served from faf.one with its registered media type.
 *
 * The AI Catalog lists it (urn:air:faf.one:context:zeph). GitHub's raw host serves every file as
 * text/plain, which breaks the catalog's "served with the type its entry declares". The source of
 * truth stays the xai-faf-zeph repo: this route reads it on request (edge-cached), so there is no
 * second copy to drift.
 */

import type { RequestHandler } from './$types';

const SOURCE = 'https://raw.githubusercontent.com/Wolfe-Jam/xai-faf-zeph/main/project.faf';

export const GET: RequestHandler = async ({ fetch }) => {
	const upstream = await fetch(SOURCE, { cf: { cacheTtl: 3600, cacheEverything: true } } as RequestInit);
	if (!upstream.ok) {
		return new Response('project.faf is not available right now', {
			status: 502,
			headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
		});
	}
	return new Response(await upstream.text(), {
		headers: {
			'Content-Type': 'application/vnd.faf+yaml; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
