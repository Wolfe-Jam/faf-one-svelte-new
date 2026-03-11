export const prerender = true;

export async function load({ fetch }) {
	const packages = ['faf-cli', 'claude-faf-mcp', 'faf-mcp', 'grok-faf-mcp', 'wjttc', 'faf-wasm'];

	let totalDownloads = 0;
	const packageStats: Record<string, number> = {};

	await Promise.all(packages.map(async (pkg) => {
		try {
			const res = await fetch(`https://api.npmjs.org/downloads/point/last-month/${pkg}`);
			const data = await res.json();
			packageStats[pkg] = data.downloads || 0;
			totalDownloads += data.downloads || 0;
		} catch {
			packageStats[pkg] = 0;
		}
	}));

	return { packageStats, totalDownloads, builtAt: new Date().toISOString() };
}
