// Server-side load function - fetches docs from GitHub at build time
export async function load({ fetch }) {
	const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/Wolfe-Jam/claude-faf-mcp/main/docs';

	const docs = [
		{ id: 'quickstart', file: 'QUICK_START.md', title: 'Quick Start' },
		{ id: 'faq', file: 'FAQ.md', title: 'FAQ' },
		{ id: 'guide', file: 'USER_GUIDE.md', title: 'User Guide' },
		{ id: 'podium', file: 'PODIUM-SYSTEM.md', title: 'PODIUM System' }
	];

	try {
		const fetchedDocs = await Promise.all(
			docs.map(async (doc) => {
				const res = await fetch(`${GITHUB_RAW_BASE}/${doc.file}`);
				if (!res.ok) throw new Error(`Failed to fetch ${doc.file}`);
				const content = await res.text();
				return { ...doc, content };
			})
		);

		return {
			docs: fetchedDocs,
			lastUpdated: new Date().toISOString()
		};
	} catch (error) {
		console.error('Error fetching docs:', error);
		return {
			docs: [],
			error: 'Failed to load documentation. Please try again later.'
		};
	}
}
