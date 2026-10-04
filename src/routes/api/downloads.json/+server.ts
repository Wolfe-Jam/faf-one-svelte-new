/**
 * FAF downloads — shields.io endpoint badge
 *
 * Public GET. The meter's total (the same number as the header banner), in
 * the shields.io endpoint schema, so any README shows it live and it never
 * goes stale:
 *
 *   ![FAF downloads](https://img.shields.io/endpoint?url=https://faf.one/api/downloads.json)
 *
 * Exactly the shields fields — shields rejects extra ones. Raw numbers for
 * apps: /api/downloads.
 */

import type { RequestHandler } from './$types';
import { formatTotal, grandTotal } from '#lib/data/packages.js';

export const GET: RequestHandler = () =>
	Response.json(
		{ schemaVersion: 1, label: 'FAF downloads', message: formatTotal(grandTotal), color: '008B8B' },
		{ headers: { 'Cache-Control': 'public, max-age=3600', 'Access-Control-Allow-Origin': '*' } }
	);
