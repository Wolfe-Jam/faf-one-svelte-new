import { grandTotal, formatTotal } from '$lib/data/packages';

// Header banner downloads counter reads from the SAME source of truth
// as the /downloads page (src/lib/data/packages.ts). One source, two
// surfaces, no divergence. Numbers refresh via:
//   • /downloads skill (manual: `/downloads` in this repo)
//   • scripts/refresh-downloads.mjs (auto: daily GH Action)
//
// Previously this file did its own live npm fetch + hardcoded PyPI/crates
// floors. That diverged from /downloads page numbers (the floors went
// stale) and undercounted by ~15k. Rewired 2026-05-12.

export function load() {
	return { downloadCount: formatTotal(grandTotal) };
}
