<script>
	import Directory from '$lib/components/Directory.svelte';

	// Curated metadata. Spine first. Strays → Legacy (not peer to Home).
	// Routes not listed still appear in More — except HIDE.
	const META = {
		// ── Core spine ──────────────────────────────────────────
		'/': { title: 'Home', category: 'Core', emoji: '🏠', description: 'The Context Standard for AI', order: 0 },
		'/about': { title: 'About', category: 'Core', emoji: '📖', description: 'What .faf is and why it exists', order: 1 },
		'/guides': { title: 'Guides', category: 'Core', emoji: '🧭', description: 'New project · dogfooding', order: 2 },
		'/guides/new-project': { title: 'New Project', category: 'Core', emoji: '🚀', description: 'init → auto → go', order: 3 },
		'/try': { title: 'Try It', category: 'Core', emoji: '⚡', description: 'Try .faf right now', order: 4 },
		'/cli': { title: 'faf-cli', category: 'Core', emoji: '⌨️', description: 'The CLI for the .faf format', order: 5 },
		'/docs': { title: 'Docs', category: 'Core', emoji: '📚', description: 'Redirects to docs.faf.one', order: 6 },
		'/downloads': { title: 'Downloads', category: 'Core', emoji: '⬇️', description: 'Get the tools', order: 7 },
		'/spec': { title: 'Spec', category: 'Core', emoji: '📐', description: 'The .faf specification', order: 8 },
		'/ecosystem': { title: 'Ecosystem', category: 'Core', emoji: '🌍', description: 'Tools catalog', order: 9 },
		'/6ws': { title: '6Ws', category: 'Core', emoji: '❓', description: 'Author README / context', order: 10 },
		'/agent': { title: 'Agent', category: 'Core', emoji: '🎙️', description: 'Talk to the FAF agent', order: 11 },
		'/agents': { title: 'Agents', category: 'Core', emoji: '📋', description: 'AGENTS.md — field guide for agents', order: 12 },
		'/pro': { title: 'FAF Pro', category: 'Core', emoji: '⭐', description: 'Full access. Every tool.', order: 13 },

		// ── Tools ───────────────────────────────────────────────
		'/calculators': { title: 'Calculators', category: 'Tools', emoji: '🧮', description: 'ROI · automation · incident · risk', order: 1 },
		'/calculator': { title: 'ROI Calculator', category: 'Tools', emoji: '📊', description: 'Context cost ROI', order: 2 },
		'/bench': { title: 'Bench', category: 'Tools', emoji: '🏁', description: 'AI-grounding benchmark', order: 3 },
		'/sync': { title: 'Sync demo', category: 'Tools', emoji: '🔄', description: 'bi-sync demo → try the CLI', order: 4 },

		// ── Ecosystem (AI on-ramps) ──────────────────────────────
		'/mcp': { title: 'MCP', category: 'Ecosystem', emoji: '🔌', description: 'Model Context Protocol', order: 1 },
		'/claude': { title: 'Claude', category: 'Ecosystem', emoji: '🧠', description: 'Anthropic Claude', order: 2 },
		'/grok': { title: 'Grok', category: 'Ecosystem', emoji: '🤖', description: 'xAI / Grok', order: 3 },
		'/codex': { title: 'Codex', category: 'Ecosystem', emoji: '💻', description: 'OpenAI Codex', order: 4 },
		'/chrome': { title: 'Chrome', category: 'Ecosystem', emoji: '🧩', description: 'Chrome extension', order: 5 },
		'/git': { title: 'Git', category: 'Ecosystem', emoji: '🌿', description: 'faf git', order: 6 },
		'/rust': { title: 'Rust SDK', category: 'Ecosystem', emoji: '🦀', description: 'Rust-native compiler', order: 7 },
		'/pypi': { title: 'PyPI', category: 'Ecosystem', emoji: '🐍', description: 'Python packages', order: 8 },
		'/mcpaas': { title: 'MCPaaS', category: 'Ecosystem', emoji: '📡', description: 'MCP as a Service', order: 9 },
		'/voice': { title: 'Voice', category: 'Ecosystem', emoji: '🎙️', description: 'FAF Voice', order: 10 },
		'/memory': { title: 'Memory', category: 'Ecosystem', emoji: '🐘', description: '.fafm permanent memory', order: 11 },
		'/zeph': { title: 'ZEPH', category: 'Ecosystem', emoji: '⚡', description: 'ZEPH fast path', order: 12 },
		'/n8n': { title: 'n8n', category: 'Ecosystem', emoji: '🔗', description: 'n8n automation', order: 13 },
		'/migrate': { title: 'Migrate', category: 'Ecosystem', emoji: '➡️', description: 'Keep context when moving tools', order: 14 },

		// ── Standards ───────────────────────────────────────────
		'/wjttc': { title: 'WJTTC', category: 'Standards', emoji: '🏆', description: 'MCP testing certification', order: 1 },

		// ── Community ───────────────────────────────────────────
		'/sponsors': { title: 'Sponsors', category: 'Community', emoji: '💛', description: 'Support the project', order: 1 },
		'/membership': { title: 'Foundation', category: 'Community', emoji: '🏛️', description: 'Stewardship → foundation.faf.one', order: 2 },
		'/support': { title: 'Support', category: 'Community', emoji: '🆘', description: 'Get help', order: 3 },
		'/press': { title: 'Press', category: 'Community', emoji: '📰', description: 'Press kit · releases · media', order: 4 },
		'/updates': { title: 'Updates', category: 'Community', emoji: '📝', description: 'Release notes', order: 5 },

		// ── Legal ───────────────────────────────────────────────
		'/privacy': { title: 'Privacy', category: 'Legal', emoji: '🔒', description: 'Privacy policy', order: 1 },
		'/terms': { title: 'Terms', category: 'Legal', emoji: '📜', description: 'Terms of use', order: 2 },

		// ── Legacy (demoted — still live, not spine peers) ───────
		'/loop': { title: 'Loop', category: 'Legacy', emoji: '🔁', description: 'Loop essay → see New Project', order: 1 },
		'/context': { title: 'Context', category: 'Legacy', emoji: '🧬', description: 'Context layer → see Guides', order: 2 },
		'/uniqueness': { title: 'Uniqueness', category: 'Legacy', emoji: '🎯', description: 'Research archive → Spec', order: 3 },
		'/press-center': { title: 'Press Center', category: 'Legacy', emoji: '📰', description: '→ /press', order: 4 },
		'/press-release': { title: 'Press Release', category: 'Legacy', emoji: '📣', description: '→ /press', order: 5 },
		'/68-minutes': { title: '68 Minutes', category: 'Legacy', emoji: '⏱️', description: 'Story → /press', order: 6 },
		'/automation-calculator': { title: 'Automation Calculator', category: 'Legacy', emoji: '⚙️', description: '→ /calculators', order: 7 },
		'/incident-calculator': { title: 'Incident Calculator', category: 'Legacy', emoji: '🚨', description: '→ /calculators', order: 8 },
		'/risk-assessment': { title: 'Risk Assessment', category: 'Legacy', emoji: '📊', description: '→ /calculators', order: 9 },
		'/daaft': { title: 'DAAFT', category: 'Legacy', emoji: '📉', description: 'Context cost narrative', order: 10 },
		'/drift': { title: 'Drift', category: 'Legacy', emoji: '🌊', description: 'Context-drift teaching', order: 11 },
		'/apps': { title: 'Apps', category: 'Legacy', emoji: '📦', description: '→ /ecosystem', order: 12 },
		'/demos': { title: 'Demos', category: 'Legacy', emoji: '🎬', description: 'GIF gallery', order: 13 },
		'/glory': { title: 'Glory', category: 'Legacy', emoji: '🏅', description: 'Merit wall', order: 14 },
		'/ideas': { title: 'Ideas', category: 'Legacy', emoji: '💡', description: 'App-idea form', order: 15 },
		'/survival': { title: 'Survival', category: 'Legacy', emoji: '🛟', description: 'Thin → daaft', order: 16 },
		'/trinity': { title: 'Trinity', category: 'Legacy', emoji: '🔺', description: 'Shell page', order: 17 },
		'/3ws': { title: '3Ws', category: 'Legacy', emoji: '3️⃣', description: 'Superseded by 6Ws', order: 18 },
		'/v4': { title: 'v4 site', category: 'Legacy', emoji: '🕰️', description: 'Historical mini-site', order: 19 },
		'/guides/dogfooding': { title: 'Dogfooding', category: 'Core', emoji: '🐕', description: 'Greenfield discipline', order: 3.5 }
	};

	// Never list on the map (internal / render / drafts already excluded by EXCLUDE)
	const HIDE = new Set([
		'/logo-demo',
		'/og/agent',
		'/og/daaft',
		'/diagrams/og-agent',
		'/diagrams/voice-api-banner'
	]);

	const CATEGORY_ORDER = [
		'Core',
		'Tools',
		'Ecosystem',
		'Standards',
		'Community',
		'Directories',
		'Legal',
		'Legacy',
		'More'
	];
	const CATEGORY_EMOJI = {
		Core: '🏎️',
		Tools: '🛠️',
		Ecosystem: '🌐',
		Standards: '📋',
		Community: '🤝',
		Directories: '📚',
		Legal: '⚖️',
		Legacy: '🗄️',
		More: '📂'
	};

	const POINTERS = [
		{ url: '/blog', title: 'Blog', category: 'Directories', emoji: '📝', description: 'Articles & release editions' },
		{ url: '/diagrams', title: 'Diagrams', category: 'Directories', emoji: '📊', description: 'Architecture diagrams' },
		{ url: '/links', title: 'External Links', category: 'Directories', emoji: '🔗', description: 'Off-site resources', external: false }
	];

	const PAGES = import.meta.glob('/src/routes/**/+page.svelte');
	const PRESET = new Set(['/blog', '/diagrams', '/links', '/map']);
	const toPath = (k) => {
		const p = k.replace('/src/routes', '').replace('/+page.svelte', '');
		return p === '' ? '/' : p;
	};
	const pretty = (p) =>
		p
			.replace(/^\//, '')
			.split('/')
			.pop()
			.split('-')
			.map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
			.join(' ');
	// Exclude blog/diagrams/og leaves, api, drafts, calculators children listed as Legacy when nested
	const EXCLUDE = /^\/(blog|diagrams|og)\/.|^\/api(\/|$)|^\/v4\//;

	const discovered = Object.keys(PAGES)
		.map(toPath)
		.filter((p) => !EXCLUDE.test(p) && !PRESET.has(p) && !HIDE.has(p))
		.map((p) =>
			META[p]
				? { url: p, ...META[p] }
				: { url: p, title: pretty(p), category: 'More', emoji: '📄' }
		);

	const entries = [...discovered, ...POINTERS];
</script>

<svelte:head>
	<title>Site Map | FAF</title>
	<meta name="description" content="Every page on faf.one — the full site directory." />
</svelte:head>

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
			<p class="map-sub">
				Spine first. Legacy is still live — not the main path.
				<a href="/links">External links →</a> · <a href="/blog">Blog →</a> ·
				<a href="/guides">Guides →</a>
			</p>
		</header>

		<Directory
			{entries}
			config={{
				defaultView: 'section',
				categoryOrder: CATEGORY_ORDER,
				categoryEmoji: CATEGORY_EMOJI,
				unit: 'pages'
			}}
		/>
	</main>
</div>

<style>
	.map-root {
		min-height: 100vh;
		background: var(--faf-page-bg);
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
