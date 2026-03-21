const NPM_PACKAGES = ['faf-cli', 'claude-faf-mcp', 'faf-mcp', 'bun-sticky', 'wjttc', 'grok-faf-mcp', 'faf-wasm-sdk', 'faf-wasm', 'bun-sticky-faf'];

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

	// Round down to nearest thousand
	const displayK = npmTotal > 0 ? Math.floor(npmTotal / 1000) : 43;

	return { downloadCount: `${displayK}k+` };
}
