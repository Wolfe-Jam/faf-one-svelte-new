<script>
	import Directory from '$lib/components/Directory.svelte';

	// Curated metadata for the known pages (label · group · emoji · one-liner).
	// Any route NOT listed here is still auto-discovered below and dropped into
	// "More" — so a new page can never silently hide. Re-bucket by editing META.
	const META = {
		'/': { title: 'Home', category: 'Core', emoji: '🏠', description: 'The Context Standard for AI' },
		'/about': { title: 'About', category: 'Core', emoji: '📖', description: 'What .faf is and why it exists', order: 1 },
		'/pro': { title: 'FAF Pro', category: 'Core', emoji: '⭐', description: 'Full access. Every tool.' },
		'/cli': { title: 'faf-cli', category: 'Core', emoji: '⌨️', description: 'The CLI for the .faf format' },
		'/rust': { title: 'Rust SDK', category: 'Core', emoji: '🦀', description: 'Rust-native FAF compiler' },
		'/docs': { title: 'Docs', category: 'Core', emoji: '📚', description: 'Redirects to docs.faf.one' },
		'/downloads': { title: 'Downloads', category: 'Core', emoji: '⬇️', description: 'Get the tools' },
		'/memory': { title: 'Memory', category: 'Core', emoji: '🐘', description: '.fafm persistent memory' },
		'/try': { title: 'Try It', category: 'Core', emoji: '🚀', description: 'Try .faf right now' },
		'/loop': { title: 'faf loop', category: 'Core', emoji: '🔁', description: '100% or the honest human wall' },
		'/ecosystem': { title: 'Ecosystem', category: 'Core', emoji: '🌍', description: 'The FAF ecosystem' },
		'/context': { title: 'Context', category: 'Core', emoji: '🧬', description: 'Context intelligence' },
		'/guides': { title: 'Guides', category: 'Core', emoji: '🧭', description: 'How-to guides' },
		'/6ws': { title: '6Ws', category: 'Core', emoji: '❓', description: 'The six Ws of context', order: 2 },

		'/calculator': { title: 'Calculator', category: 'Tools', emoji: '🧮', description: 'Context cost calculator' },
		'/automation-calculator': { title: 'Automation Calculator', category: 'Tools', emoji: '⚙️', description: 'Automation ROI' },
		'/incident-calculator': { title: 'Incident Calculator', category: 'Tools', emoji: '🚨', description: 'Incident cost' },
		'/risk-assessment': { title: 'Risk Assessment', category: 'Tools', emoji: '📊', description: 'Project risk' },
		'/bench': { title: 'Bench', category: 'Tools', emoji: '🏁', description: 'AI-grounding benchmark' },
		'/demos': { title: 'Demos', category: 'Tools', emoji: '🎬', description: 'Live demos' },
		'/sync': { title: 'Sync', category: 'Tools', emoji: '🔄', description: 'bi-sync / tri-sync' },
		'/trinity': { title: 'Trinity', category: 'Tools', emoji: '🔺', description: 'Context · Memory · Agents — interactive' },

		'/mcp': { title: 'MCP', category: 'Ecosystem', emoji: '🔌', description: 'Model Context Protocol' },
		'/mcpaas': { title: 'MCPaaS', category: 'Ecosystem', emoji: '📡', description: 'MCP as a Service' },
		'/grok': { title: 'Grok', category: 'Ecosystem', emoji: '🤖', description: 'xAI / Grok' },
		'/claude': { title: 'Claude', category: 'Ecosystem', emoji: '🧠', description: 'Anthropic Claude' },
		'/codex': { title: 'Codex', category: 'Ecosystem', emoji: '💻', description: 'OpenAI Codex' },
		'/voice': { title: 'Voice', category: 'Ecosystem', emoji: '🎙️', description: 'FAF Voice' },
		'/chrome': { title: 'Chrome', category: 'Ecosystem', emoji: '🧩', description: 'Chrome extension' },
		'/n8n': { title: 'n8n', category: 'Ecosystem', emoji: '🔗', description: 'n8n automation' },
		'/pypi': { title: 'PyPI', category: 'Ecosystem', emoji: '🐍', description: 'Python packages' },
		'/zeph': { title: 'ZEPH', category: 'Ecosystem', emoji: '⚡', description: 'ZEPH fast path' },

		'/spec': { title: 'Spec', category: 'Standards', emoji: '📐', description: 'The .faf specification' },
		'/wjttc': { title: 'WJTTC', category: 'Standards', emoji: '🏆', description: 'Championship testing' },
		'/uniqueness': { title: 'Uniqueness', category: 'Standards', emoji: '🎯', description: 'What makes .faf unique' },
		'/ideas': { title: 'Ideas', category: 'Standards', emoji: '💡', description: 'Concepts & proposals' },
		'/drift': { title: 'Drift', category: 'Standards', emoji: '🌊', description: 'Context drift' },

		'/sponsors': { title: 'Sponsors', category: 'Community', emoji: '💛', description: 'Support the project' },
		'/membership': { title: 'Membership', category: 'Community', emoji: '🎟️', description: 'Friends of FAF' },
		'/support': { title: 'Support', category: 'Community', emoji: '🆘', description: 'Get help' },
		'/press': { title: 'Press', category: 'Community', emoji: '📰', description: 'Press resources' },
		'/press-center': { title: 'Press Center', category: 'Community', emoji: '📰', description: 'Media kit' },
		'/press-release': { title: 'Press Release', category: 'Community', emoji: '📣', description: 'Announcements' },
		'/68-minutes': { title: '68 Minutes', category: 'Community', emoji: '⏱️', description: 'B&W to Technicolor' },

		'/privacy': { title: 'Privacy', category: 'Legal', emoji: '🔒', description: 'Privacy policy' },
		'/terms': { title: 'Terms', category: 'Legal', emoji: '📜', description: 'Terms of use' }
	};

	const CATEGORY_ORDER = ['Core', 'Tools', 'Ecosystem', 'Standards', 'Community', 'Directories', 'Legal', 'More'];
	const CATEGORY_EMOJI = {
		Core: '🏎️', Tools: '🛠️', Ecosystem: '🌐', Standards: '📋',
		Community: '🤝', Directories: '📚', Legal: '⚖️', More: '📂'
	};

	// Directory pointers — the big indexes link to their own pages, not 100s of entries.
	const POINTERS = [
		{ url: '/blog', title: 'Blog', category: 'Directories', emoji: '📝', description: 'Articles & release editions' },
		{ url: '/diagrams', title: 'Diagrams', category: 'Directories', emoji: '📊', description: 'Architecture diagrams' },
		{ url: '/links', title: 'External Links', category: 'Directories', emoji: '🔗', description: 'Off-site resources', external: false }
	];

	// Auto-discovery: every +page.svelte route. Excludes blog/diagrams/og subpages,
	// api, this map, and the pointer indexes (added curated above).
	const PAGES = import.meta.glob('/src/routes/**/+page.svelte');
	const PRESET = new Set(['/blog', '/diagrams', '/links', '/map']);
	const toPath = (k) => {
		const p = k.replace('/src/routes', '').replace('/+page.svelte', '');
		return p === '' ? '/' : p;
	};
	const pretty = (p) =>
		p.replace(/^\//, '').split('/').pop().split('-')
			.map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(' ');
	const EXCLUDE = /^\/(blog|diagrams|og)\/.|^\/api(\/|$)/;

	const discovered = Object.keys(PAGES)
		.map(toPath)
		.filter((p) => !EXCLUDE.test(p) && !PRESET.has(p))
		.map((p) => (META[p] ? { url: p, ...META[p] } : { url: p, title: pretty(p), category: 'More', emoji: '📄' }));

	const entries = [...discovered, ...POINTERS];
</script>

<svelte:head>
	<title>Site Map | FAF</title>
	<meta name="description" content="Every page on faf.one — the full site directory." />
</svelte:head>

<!-- Scoped full-height wrapper paints the page bg on an ELEMENT, not :global(body).
     Immune to leaked :global(body){dark} from other visited routes (SvelteKit keeps
     their CSS in the document). var(--faf-cream) flips, so it's correct both themes. -->
<div class="map-root">
	<div class="back-nav"><a href="/" class="back-button">←</a></div>

	<main class="map-page">
	<header class="map-header">
		<h1>
			<svg class="title-globe" viewBox="0 0 100 100" fill="none" aria-hidden="true">
				<circle cx="50" cy="50" r="36" stroke="currentColor" stroke-width="8" />
				<ellipse cx="50" cy="50" rx="17" ry="36" stroke="currentColor" stroke-width="6" />
				<line x1="14" y1="50" x2="86" y2="50" stroke="currentColor" stroke-width="6" />
			</svg>Site Map
		</h1>
		<p class="map-sub">Every page on faf.one. <a href="/links">External links →</a> · <a href="/blog">Blog →</a></p>
	</header>

	<Directory
		{entries}
		config={{ defaultView: 'section', categoryOrder: CATEGORY_ORDER, categoryEmoji: CATEGORY_EMOJI, unit: 'pages' }}
	/>
</main>
</div>

<style>
	.map-root {
		min-height: 100vh;
		background: var(--faf-cream);
	}
	.back-nav {
		padding: 1rem 2rem;
	}
	.back-button {
		display: inline-flex;
		color: var(--faf-black);
		text-decoration: none;
		font-size: 1.3rem;
		font-weight: 700;
	}
	.map-page {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 1.5rem 5rem;
	}
	.map-header {
		margin: 0 0 2.5rem;
	}
	.map-header h1 {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 2.2rem;
		font-weight: 900;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}
	.title-globe {
		width: 1em;
		height: 1em;
		flex-shrink: 0;
	}
	.map-sub {
		color: var(--faf-dark);
		font-size: 1rem;
	}
	.map-sub a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}
</style>
