/**
 * FAF downloads — the counter, for any app
 *
 * Public GET. The download meter as numbers: the total (the same as the header
 * banner and /api/downloads.json) and each registry's share. npm and crates.io
 * as reported; PyPI pypistats without_mirrors only. Refreshed daily.
 */

import type { RequestHandler } from './$types';
import {
	allPackages,
	cratesTotal,
	formatTotal,
	grandTotal,
	npmTotal,
	pypiTotal
} from '#lib/data/packages.js';

export const GET: RequestHandler = () =>
	Response.json(
		{
			total: grandTotal,
			display: formatTotal(grandTotal),
			registries: { npm: npmTotal, pypi: pypiTotal, crates: cratesTotal },
			packages: allPackages.length,
			source: 'https://faf.one/downloads'
		},
		{ headers: { 'Cache-Control': 'public, max-age=3600', 'Access-Control-Allow-Origin': '*' } }
	);
