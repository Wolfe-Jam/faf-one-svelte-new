const NPM_PACKAGES = ['faf-cli', 'claude-faf-mcp', 'faf-mcp', 'bun-sticky', 'wjttc', 'grok-faf-mcp', 'faf-wasm-sdk', 'faf-wasm', 'bun-sticky-faf'];

// PyPI + crates.io: API doesn't give reliable all-time, so we set a known floor
// and let npm (which auto-updates) pull the total up. Update these periodically.
// Last verified: 2026-03-25
const PYPI_FLOOR = 6_670;   // gemini-faf-mcp + faf-python-sdk
const CRATES_FLOOR = 222;   // faf-rust-sdk

export async function load({ fetch }) {
	let npmTotal = 0;

	await Promise.all(NPM_PACKAGES.map(async (pkg) => {
		try {
			const res = await fetch(`https://api.npmjs.org/downloads/point/2000-01-01:2099-12-31/${pkg}`);
			const data = await res.json();
			npmTotal += data.downloads || 0;
		} catch {
			// silent fail
		}
	}));

	const grandTotal = npmTotal + PYPI_FLOOR + CRATES_FLOOR;

	// Round down to nearest thousand
	const displayK = grandTotal > 0 ? Math.floor(grandTotal / 1000) : 45;

	return { downloadCount: `${displayK}k+` };
}
