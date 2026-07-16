export const prerender = true;

const NPM = ['faf-cli', 'claude-faf-mcp', 'faf-mcp', 'grok-faf-mcp', 'wjttc'];

export async function load({ fetch }) {
	const packages = [...NPM, 'faf-wasm'];

	let totalDownloads = 0;
	const packageStats: Record<string, number> = {};
	const versions: Record<string, string> = {};

	await Promise.all(
		packages.map(async (pkg) => {
			try {
				const res = await fetch(`https://api.npmjs.org/downloads/point/last-month/${pkg}`);
				const data = await res.json();
				packageStats[pkg] = data.downloads || 0;
				totalDownloads += data.downloads || 0;
			} catch {
				packageStats[pkg] = 0;
			}
		})
	);

	await Promise.all(
		NPM.map(async (pkg) => {
			try {
				const res = await fetch(`https://registry.npmjs.org/${pkg}/latest`);
				const data = await res.json();
				if (data.version) versions[pkg] = `v${data.version}`;
			} catch {
				/* leave unset */
			}
		})
	);

	return {
		packageStats,
		totalDownloads,
		versions,
		builtAt: new Date().toISOString()
	};
}
