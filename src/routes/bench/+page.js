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

	// Dedup by repo+sha: the receipt sha is a score attestation, so distinct
	// repos can share one. repo+sha keeps different repos, collapses re-submits.
	const seen = new Set();
	const receipts = [];
	for (const r of [...bundled.receipts, ...live]) {
		if (!r || typeof r.sha256 !== 'string') continue;
		const key = `${r.repo}::${r.sha256}`;
		if (seen.has(key)) continue;
		seen.add(key);
		receipts.push(r);
	}
	return { receipts };
}
