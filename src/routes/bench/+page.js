import bundled from '$lib/grounding-receipts.json';

// The collection backend (mcpaas.live = execution/feeder; faf.one = the page).
const ENDPOINT = 'https://mcpaas.live/bench/receipts';

/**
 * SSR the seeded ledger always (instant, SEO-safe), and merge in any live
 * community receipts from the backend. Falls back to the bundled seed if the
 * endpoint is unreachable — so the wall is never empty.
 */
export async function load({ fetch }) {
	let live = [];
	try {
		const ctrl = new AbortController();
		const t = setTimeout(() => ctrl.abort(), 2500);
		const res = await fetch(ENDPOINT, { signal: ctrl.signal });
		clearTimeout(t);
		if (res.ok) {
			const data = await res.json();
			if (Array.isArray(data?.receipts)) live = data.receipts;
		}
	} catch {
		// endpoint not deployed / slow / down → seed-only, no error to the user
	}

	const seen = new Set();
	const receipts = [];
	for (const r of [...bundled.receipts, ...live]) {
		if (!r || typeof r.sha256 !== 'string' || seen.has(r.sha256)) continue;
		seen.add(r.sha256);
		receipts.push(r);
	}
	return { receipts };
}
