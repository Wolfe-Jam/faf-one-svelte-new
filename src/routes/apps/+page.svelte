<script>
	let view = $state('table');
	let sortBy = $state('newest');

	const apps = [
		{
			name: 'faf-cli',
			emoji: '🏎️',
			builtWith: 'TypeScript / Bun',
			what: 'Universal CLI',
			why: 'Define, score, sync .faf files from any terminal',
			killer: 'faf git <url> — instant .faf from any GitHub repo, no clone',
			group: 'Core',
			registry: 'npm',
			url: 'https://github.com/Wolfe-Jam/faf-cli',
			links: { github: 'https://github.com/Wolfe-Jam/faf-cli', npm: 'https://npmjs.com/package/faf-cli', blog: '/blog/faf-auto-edition' },
			launched: '2025-10-01',
			date: 'October 2025'
		},
		{
			name: 'faf-wasm-sdk',
			emoji: '🔧',
			builtWith: 'Rust → WASM',
			what: 'Browser/Edge compiler',
			why: 'Run the full Mk4 compiler anywhere — browser, Node, Bun, Deno',
			killer: '322KB — entire compiler in one binary',
			group: 'Compiler',
			registry: 'npm',
			url: 'https://github.com/Wolfe-Jam/faf-wasm-sdk',
			links: { github: 'https://github.com/Wolfe-Jam/faf-wasm-sdk', npm: 'https://npmjs.com/package/faf-wasm-sdk', blog: '/blog/compiler-is-the-spec' },
			launched: '2026-01-20',
			date: 'January 2026'
		},
		{
			name: 'faf-wasm-core',
			emoji: '🔌',
			builtWith: 'TypeScript',
			what: 'Kernel router',
			why: 'One interface, any WASM engine — Rust today, Zig tomorrow',
			killer: 'init("rust") or init("zig") — swap engines, same API',
			group: 'Compiler',
			registry: 'npm',
			url: 'https://github.com/Wolfe-Jam/faf-wasm-core',
			links: { github: 'https://github.com/Wolfe-Jam/faf-wasm-core', npm: 'https://npmjs.com/package/faf-wasm-core', blog: '/blog/kernel-router' },
			launched: '2026-03-20',
			date: 'March 2026'
		},
		{
			name: 'faf-rust-sdk',
			emoji: '🦀',
			builtWith: 'Rust',
			what: 'Native Rust SDK',
			why: 'Rust-native .faf parsing, scoring, and FAFb binary compilation',
			killer: 'CRC32-sealed FAFb binaries — tamper-proof context',
			group: 'Compiler',
			registry: 'crates.io',
			url: 'https://github.com/Wolfe-Jam/faf-rust-sdk',
			links: { github: 'https://github.com/Wolfe-Jam/faf-rust-sdk', crate: 'https://crates.io/crates/faf-rust-sdk', blog: '/blog/in-rust-we-trust' },
			launched: '2026-03-05',
			date: 'March 2026'
		},
		{
			name: 'bun-sticky',
			emoji: '🥐',
			builtWith: 'Bun / TypeScript',
			what: 'Bun CLI',
			why: 'Fastest FAF scoring — Bun-native with embedded WASM kernel',
			killer: '284us per WASM score — benchmarked',
			group: 'CLI',
			registry: 'npm',
			url: 'https://github.com/Wolfe-Jam/bun-sticky-faf',
			links: { github: 'https://github.com/Wolfe-Jam/bun-sticky-faf', npm: 'https://npmjs.com/package/bun-sticky', blog: '/blog/wasm-edition' },
			launched: '2025-12-22',
			date: 'December 2025'
		},
		{
			name: 'xai-faf-zig',
			emoji: '👻',
			builtWith: 'Zig → WASM',
			what: 'Ghost scorer',
			why: 'Smallest possible WASM — pure scoring, nothing else',
			killer: '2.7KB — entire scorer in a ghost binary',
			group: 'Compiler',
			registry: 'GitHub',
			url: 'https://github.com/Wolfe-Jam/xai-faf-zig',
			links: { github: 'private', blog: '/blog/bun-sticky-zig-launch' },
			launched: '2025-12-23',
			date: 'December 2025'
		},
		{
			name: 'claude-faf-mcp',
			emoji: '🤖',
			builtWith: 'TypeScript',
			what: 'Anthropic MCP server',
			why: 'Claude reads .faf natively — 33 tools, tri-sync to CLAUDE.md',
			killer: '33 MCP tools — most comprehensive AI context server',
			group: 'MCP',
			registry: 'npm + MCP',
			url: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
			links: { github: 'https://github.com/Wolfe-Jam/claude-faf-mcp', npm: 'https://npmjs.com/package/claude-faf-mcp', blog: '/blog/nelly-edition' },
			launched: '2025-11-01',
			date: 'November 2025'
		},
		{
			name: 'faf-mcp',
			emoji: '🔗',
			builtWith: 'TypeScript',
			what: 'Core MCP server',
			why: 'Platform-agnostic — works with any MCP host',
			killer: 'Universal — any MCP client, any platform',
			group: 'MCP',
			registry: 'npm + MCP',
			url: 'https://github.com/Wolfe-Jam/faf-mcp',
			links: { github: 'https://github.com/Wolfe-Jam/faf-mcp', npm: 'https://npmjs.com/package/faf-mcp', blog: '/blog/mcp-interop-edition' },
			launched: '2025-11-15',
			date: 'November 2025'
		},
		{
			name: 'grok-faf-mcp',
			emoji: '🍊',
			builtWith: 'TypeScript',
			what: 'xAI Grok MCP server',
			why: 'Grok reads .faf natively — first MCP server for Grok',
			killer: 'Web-native — runs in browser, no install',
			group: 'MCP',
			registry: 'npm + MCP',
			url: 'https://github.com/Wolfe-Jam/grok-faf-mcp',
			links: { github: 'https://github.com/Wolfe-Jam/grok-faf-mcp', npm: 'https://npmjs.com/package/grok-faf-mcp', blog: '/blog/big-orange-edition' },
			launched: '2025-11-18',
			date: 'November 2025'
		},
		{
			name: 'gemini-faf-mcp',
			emoji: '🔷',
			builtWith: 'Python',
			what: 'Google Gemini MCP server',
			why: 'Gemini reads .faf natively — Python-native for Google ecosystem',
			killer: 'PyPI — Python SDK for the Google world',
			group: 'MCP',
			registry: 'PyPI + MCP',
			url: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
			links: { github: 'https://github.com/Wolfe-Jam/gemini-faf-mcp', pypi: 'https://pypi.org/project/gemini-faf-mcp', blog: '/blog/google-gemini-edition' },
			launched: '2026-01-13',
			date: 'January 2026'
		},
		{
			name: 'WJTTC',
			emoji: '🏁',
			builtWith: 'TypeScript',
			what: 'MCP server certification',
			why: 'Championship-grade testing — certify any MCP server',
			killer: '52 tests, 9 tiers — F1-inspired quality gate',
			group: 'Testing',
			registry: 'npm + MCP',
			url: 'https://github.com/Wolfe-Jam/WJTTC',
			links: { github: 'https://github.com/Wolfe-Jam/WJTTC', npm: 'https://npmjs.com/package/wjttc', blog: '/blog/championship-testing' },
			launched: '2025-12-02',
			date: 'December 2025'
		},
		{
			name: 'mcpaas-cf',
			emoji: '🌐',
			builtWith: 'Cloudflare Workers',
			what: 'MCPaaS platform',
			why: 'MCP hosting at the edge — 300+ global locations',
			killer: 'Namepoints — 3-letter premium AI identities',
			group: 'Infrastructure',
			registry: 'Cloudflare',
			url: 'https://mcpaas.live',
			links: { github: 'https://github.com/Wolfe-Jam/mcpaas-cf', live: 'https://mcpaas.live', blog: '/blog/mcpaas-launch' },
			launched: '2026-01-20',
			date: 'January 2026'
		},
		{
			name: 'FAF-Builder',
			emoji: '🏗️',
			builtWith: 'Svelte / WASM',
			what: 'Browser builder',
			why: 'Zero-install .faf creation — build and score in the browser',
			killer: 'Live WASM scoring — no server, no install',
			group: 'Tools',
			registry: 'Web',
			url: 'https://builder.faf.one',
			links: { live: 'https://builder.faf.one', blog: 'coming-soon' },
			launched: '2026-02-01',
			date: 'February 2026'
		},
		{
			name: 'faf.one',
			emoji: '🏠',
			builtWith: 'SvelteKit',
			what: 'Blog + hub',
			why: 'FAF home base — blog, downloads, docs, ecosystem',
			killer: '43k+ downloads tracked across 3 registries',
			group: 'Infrastructure',
			registry: 'Vercel',
			url: 'https://faf.one',
			links: { live: 'https://faf.one', github: 'https://github.com/Wolfe-Jam/faf-one-svelte-new', blog: 'coming-soon' },
			launched: '2025-11-01',
			date: 'November 2025'
		}
	];

	const groupOrder = ['Core', 'Compiler', 'CLI', 'MCP', 'Testing', 'Tools', 'Infrastructure'];

	const groupColor = {
		'Core': '#FF6B35',
		'Compiler': '#CE422B',
		'CLI': '#f8b84e',
		'MCP': '#00B8B8',
		'Testing': '#E74C3C',
		'Tools': '#7D3C98',
		'Infrastructure': '#4A5568'
	};

	let sortedApps = $derived(
		sortBy === 'oldest'
			? [...apps].sort((a, b) => a.launched.localeCompare(b.launched))
			: sortBy === 'abc'
				? [...apps].sort((a, b) => a.name.localeCompare(b.name))
				: sortBy === 'group'
					? [...apps].sort((a, b) => groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group))
					: [...apps].sort((a, b) => b.launched.localeCompare(a.launched))
	);
</script>

<svelte:head>
	<title>Apps | FAF Ecosystem</title>
	<meta name="description" content="14 apps across 3 registries. The FAF ecosystem — CLIs, compilers, MCP servers, and infrastructure." />
	<meta property="og:title" content="FAF Apps — The Ecosystem" />
	<meta property="og:description" content="14 apps. 5 languages. 3 registries. Zero drift." />
	<meta property="og:type" content="website" />
</svelte:head>

<article class="apps-page">
	<div class="container">
		<h1><span class="apps-text">Apps</span></h1>
		<div class="subtitle">{apps.length} apps across 5 languages, 3 registries</div>

		<div class="toolbar">
			<div class="toggle-group">
				<button class="toggle-btn" class:active={sortBy === 'newest'} onclick={() => sortBy = 'newest'}>Newest</button>
				<button class="toggle-btn" class:active={sortBy === 'oldest'} onclick={() => sortBy = 'oldest'}>Oldest</button>
				<button class="toggle-btn" class:active={sortBy === 'abc'} onclick={() => sortBy = 'abc'}>A-Z</button>
				<button class="toggle-btn" class:active={sortBy === 'group'} onclick={() => sortBy = 'group'}>Group</button>
			</div>
			<div class="toggle-group">
				<button class="toggle-btn" class:active={view === 'table'} onclick={() => view = 'table'}>Table</button>
				<button class="toggle-btn" class:active={view === 'cards'} onclick={() => view = 'cards'}>Cards</button>
				<button class="toggle-btn" class:active={view === 'list'} onclick={() => view = 'list'}>List</button>
			</div>
			<span class="app-count">{apps.length} apps</span>
		</div>

		{#if view === 'table'}
		<div class="table-wrap">
			<table class="apps-table">
				<thead>
					<tr>
						<th>App</th>
						<th>Built With</th>
						<th>What</th>
						<th class="hide-mobile">Why</th>
						<th>Killer Feature</th>
						<th>Links</th>
					</tr>
				</thead>
				<tbody>
					{#if sortBy === 'group'}
						{#each groupOrder as group}
							{@const groupApps = sortedApps.filter(a => a.group === group)}
							{#if groupApps.length > 0}
								<tr class="group-header">
									<td colspan="6">
										<span class="group-pill" style="background: {groupColor[group]}">{group}</span>
										<span class="group-count">{groupApps.length}</span>
									</td>
								</tr>
								{#each groupApps as app}
									<tr>
										<td class="app-name">
											<span class="app-emoji">{app.emoji}</span>
											<a href={app.url} target="_blank" rel="noopener">{app.name}</a>
											<span class="app-registry">{app.registry}</span>
										</td>
										<td class="app-tech">{app.builtWith}</td>
										<td>{app.what}</td>
										<td class="hide-mobile">{app.why}</td>
										<td class="app-killer">{app.killer}</td>
										<td class="app-links">
											{#if app.links.github === 'private'}<span class="link-muted">Private</span>{:else if app.links.github}<a href={app.links.github} target="_blank" rel="noopener">GitHub</a>{/if}
											{#if app.links.npm}<a href={app.links.npm} target="_blank" rel="noopener">npm</a>{/if}
											{#if app.links.pypi}<a href={app.links.pypi} target="_blank" rel="noopener">PyPI</a>{/if}
											{#if app.links.crate}<a href={app.links.crate} target="_blank" rel="noopener">crates</a>{/if}
											{#if app.links.live}<a href={app.links.live} target="_blank" rel="noopener">Live</a>{/if}
											{#if app.links.blog === 'coming-soon'}<span class="link-muted">Blog soon</span>{:else if app.links.blog}<a href={app.links.blog}>Blog</a>{/if}
										</td>
									</tr>
								{/each}
							{/if}
						{/each}
					{:else}
						{#each sortedApps as app}
							<tr>
								<td class="app-name">
									<span class="app-emoji">{app.emoji}</span>
									<a href={app.url} target="_blank" rel="noopener">{app.name}</a>
									<span class="app-registry">{app.registry}</span>
								</td>
								<td class="app-tech">{app.builtWith}</td>
								<td>{app.what}</td>
								<td class="hide-mobile">{app.why}</td>
								<td class="app-killer">{app.killer}</td>
								<td class="app-links">
									{#if app.links.github === 'private'}<span class="link-muted">Private</span>{:else if app.links.github}<a href={app.links.github} target="_blank" rel="noopener">GitHub</a>{/if}
									{#if app.links.npm}<a href={app.links.npm} target="_blank" rel="noopener">npm</a>{/if}
									{#if app.links.pypi}<a href={app.links.pypi} target="_blank" rel="noopener">PyPI</a>{/if}
									{#if app.links.crate}<a href={app.links.crate} target="_blank" rel="noopener">crates</a>{/if}
									{#if app.links.live}<a href={app.links.live} target="_blank" rel="noopener">Live</a>{/if}
									{#if app.links.blog === 'coming-soon'}<span class="link-muted">Blog soon</span>{:else if app.links.blog}<a href={app.links.blog}>Blog</a>{/if}
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>

		{:else if view === 'cards'}
		<div class="cards-grid">
			{#if sortBy === 'group'}
				{#each groupOrder as group}
					{@const groupApps = sortedApps.filter(a => a.group === group)}
					{#if groupApps.length > 0}
						<div class="group-label">
							<span class="group-pill" style="background: {groupColor[group]}">{group}</span>
							<span class="group-count">{groupApps.length}</span>
						</div>
						{#each groupApps as app}
							<div class="app-card" style="border-color: {groupColor[app.group]}">
								<div class="card-top">
									<span class="card-emoji">{app.emoji}</span>
									<span class="card-registry">{app.registry}</span>
								</div>
								<h2>{app.name}</h2>
								<p class="card-tech">{app.builtWith}</p>
								<p class="card-what">{app.what}</p>
								<p class="card-killer">{app.killer}</p>
								<div class="card-links">
									{#if app.links.github === 'private'}<span class="link-muted">Private</span>{:else if app.links.github}<a href={app.links.github} target="_blank" rel="noopener">GitHub</a>{/if}
									{#if app.links.npm}<a href={app.links.npm} target="_blank" rel="noopener">npm</a>{/if}
									{#if app.links.pypi}<a href={app.links.pypi} target="_blank" rel="noopener">PyPI</a>{/if}
									{#if app.links.crate}<a href={app.links.crate} target="_blank" rel="noopener">crates</a>{/if}
									{#if app.links.live}<a href={app.links.live} target="_blank" rel="noopener">Live</a>{/if}
									{#if app.links.blog === 'coming-soon'}<span class="link-muted">Blog soon</span>{:else if app.links.blog}<a href={app.links.blog}>Blog</a>{/if}
								</div>
							</div>
						{/each}
					{/if}
				{/each}
			{:else}
				{#each sortedApps as app}
					<div class="app-card" style="border-color: {groupColor[app.group]}">
						<div class="card-top">
							<span class="card-emoji">{app.emoji}</span>
							<span class="card-registry">{app.registry}</span>
						</div>
						<h2>{app.name}</h2>
						<p class="card-tech">{app.builtWith}</p>
						<p class="card-what">{app.what}</p>
						<p class="card-killer">{app.killer}</p>
						<div class="card-links">
							{#if app.links.github}<a href={app.links.github} target="_blank" rel="noopener">GitHub</a>{/if}
							{#if app.links.npm}<a href={app.links.npm} target="_blank" rel="noopener">npm</a>{/if}
							{#if app.links.pypi}<a href={app.links.pypi} target="_blank" rel="noopener">PyPI</a>{/if}
							{#if app.links.crate}<a href={app.links.crate} target="_blank" rel="noopener">crates</a>{/if}
							{#if app.links.live}<a href={app.links.live} target="_blank" rel="noopener">Live</a>{/if}
							{#if app.links.blog}<a href={app.links.blog}>Blog</a>{/if}
						</div>
					</div>
				{/each}
			{/if}
		</div>

		{:else}
		<div class="apps-list">
			{#if sortBy === 'group'}
				{#each groupOrder as group}
					{@const groupApps = sortedApps.filter(a => a.group === group)}
					{#if groupApps.length > 0}
						<div class="group-label">
							<span class="group-pill" style="background: {groupColor[group]}">{group}</span>
							<span class="group-count">{groupApps.length}</span>
						</div>
						{#each groupApps as app}
							<a href={app.url} target="_blank" rel="noopener" class="list-row">
								<span class="list-dot" style="background: {groupColor[app.group]}"></span>
								<span class="list-emoji">{app.emoji}</span>
								<span class="list-name">{app.name}</span>
								<span class="list-what">{app.what}</span>
								<span class="list-killer">{app.killer}</span>
								<span class="list-group" style="background: {groupColor[app.group]}">{app.group}</span>
							</a>
						{/each}
					{/if}
				{/each}
			{:else}
				{#each sortedApps as app}
					<a href={app.url} target="_blank" rel="noopener" class="list-row">
						<span class="list-dot" style="background: {groupColor[app.group]}"></span>
						<span class="list-emoji">{app.emoji}</span>
						<span class="list-name">{app.name}</span>
						<span class="list-what">{app.what}</span>
						<span class="list-killer">{app.killer}</span>
						<span class="list-group" style="background: {groupColor[app.group]}">{app.group}</span>
					</a>
				{/each}
			{/if}
		</div>
		{/if}

		<div class="footer-stats">
			<div class="stat-row">
				<span class="stat-label">Languages</span>
				<span class="stat-value">TypeScript, Rust, Zig, Python, Svelte</span>
			</div>
			<div class="stat-row">
				<span class="stat-label">Registries</span>
				<span class="stat-value">npm, PyPI, crates.io, MCP Registry, Cloudflare</span>
			</div>
			<div class="stat-row">
				<span class="stat-label">Downloads</span>
				<span class="stat-value">43k+ across 3 package registries</span>
			</div>
		</div>

		<div class="ecosystem-link">
			<a href="/ecosystem">🏎️ View the full Ecosystem — install guides, live stats & get started →</a>
		</div>
	</div>
</article>

<style>

	.apps-page {
		padding: 3rem 0;
		background: var(--faf-white);
		min-height: 80vh;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black, #111);
		font-weight: 900;
	}

	.apps-text {
		color: var(--faf-orange, #FF6B35);
	}

	.subtitle {
		font-size: 1.2rem;
		color: var(--faf-dark);
		margin-bottom: 3rem;
		font-weight: 500;
	}

	/* Toolbar — matches blog */
	.toolbar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.toggle-group {
		display: flex;
		gap: 0.25rem;
	}

	.toggle-btn {
		padding: 0.4rem 1rem;
		border: none;
		background: transparent;
		border-radius: 6px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--faf-dark);
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.toggle-btn.active {
		background: #333;
		color: #fff;
	}

	.app-count {
		font-size: 0.8rem;
		color: var(--faf-dark);
		margin-left: auto;
	}

	/* ── TABLE VIEW ── */
	.table-wrap {
		overflow-x: auto;
		margin-bottom: 3rem;
	}

	.apps-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.apps-table th {
		background: #1a1a1a;
		color: #00ff88;
		padding: 0.75rem 1rem;
		text-align: left;
		font-weight: 600;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		white-space: nowrap;
	}

	.apps-table td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--faf-light-gray);
		vertical-align: top;
	}

	.apps-table tr:hover td {
		background: var(--faf-gray-light);
	}

	.group-header td {
		background: var(--faf-gray-light);
		padding: 0.5rem 1rem;
		border-bottom: 2px solid var(--faf-light-gray);
	}

	.group-header:hover td {
		background: var(--faf-gray-light) !important;
	}

	.group-pill {
		display: inline-block;
		color: white;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.group-count {
		font-size: 0.75rem;
		color: var(--faf-dark);
		margin-left: 0.5rem;
	}

	.app-name {
		white-space: nowrap;
	}

	.app-emoji {
		margin-right: 0.4rem;
	}

	.app-name a {
		color: var(--faf-black);
		text-decoration: none;
		font-weight: 600;
	}

	.app-name a:hover {
		color: var(--faf-orange, #FF6B35);
	}

	.app-registry {
		display: inline-block;
		font-size: 0.65rem;
		color: var(--faf-dark);
		margin-left: 0.5rem;
		font-weight: 500;
	}

	.app-tech {
		color: var(--faf-dark);
		white-space: nowrap;
	}

	.app-killer {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
		color: var(--faf-dark);
	}

	.app-links {
		white-space: nowrap;
	}

	.app-links a {
		display: inline-block;
		font-size: 0.75rem;
		color: var(--faf-orange, #FF6B35);
		text-decoration: none;
		font-weight: 600;
		margin-right: 0.5rem;
	}

	.app-links a:hover {
		text-decoration: underline;
	}

	.link-muted {
		font-size: 0.7rem;
		color: var(--faf-dark);
		font-style: italic;
	}

	/* ── CARDS VIEW ── */
	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.group-label {
		grid-column: 1 / -1;
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.app-card {
		background: var(--faf-gray-light);
		padding: 1.25rem 1.5rem;
		border-radius: 12px;
		border: 1px solid var(--faf-light-gray);
		border-left: 4px solid var(--faf-orange, #FF6B35);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		display: block;
	}

	.app-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.card-emoji {
		font-size: 1.5rem;
	}

	.card-registry {
		font-size: 0.7rem;
		color: var(--faf-dark);
		font-weight: 500;
	}

	.app-card h2 {
		font-size: 1.15rem;
		margin: 0 0 0.25rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.card-tech {
		font-size: 0.8rem;
		color: var(--faf-dark);
		margin: 0 0 0.5rem;
	}

	.card-what {
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin: 0 0 0.5rem;
		font-weight: 600;
	}

	.card-killer {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.78rem;
		color: var(--faf-dark);
		margin: 0 0 0.75rem;
		line-height: 1.4;
	}

	.card-links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--faf-light-gray);
	}

	.card-links a {
		font-size: 0.78rem;
		color: var(--faf-orange, #FF6B35);
		text-decoration: none;
		font-weight: 600;
	}

	.card-links a:hover {
		text-decoration: underline;
	}

	/* ── LIST VIEW ── */
	.apps-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	.list-row {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		text-decoration: none;
		color: inherit;
		border-bottom: 1px solid var(--faf-light-gray);
		transition: background 0.15s;
	}

	.list-row:first-child,
	.group-label + .list-row {
		border-top: 1px solid var(--faf-light-gray);
	}

	.list-row:hover {
		background: var(--faf-gray-light);
	}

	.list-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.list-emoji {
		font-size: 1.2rem;
		flex-shrink: 0;
		width: 1.5rem;
		text-align: center;
	}

	.list-name {
		font-weight: 600;
		color: var(--faf-black);
		font-size: 0.95rem;
		flex-shrink: 0;
		min-width: 8rem;
	}

	.list-row:hover .list-name {
		color: var(--faf-orange, #FF6B35);
	}

	.list-what {
		color: var(--faf-dark);
		font-size: 0.85rem;
		flex-shrink: 0;
		min-width: 8rem;
	}

	.list-killer {
		flex: 1;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.78rem;
		color: var(--faf-dark);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.list-group {
		font-size: 0.65rem;
		color: #fff;
		flex-shrink: 0;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		min-width: 4.5rem;
		text-align: center;
	}

	/* ── FOOTER STATS ── */
	.footer-stats {
		border-top: 2px solid var(--faf-light-gray);
		padding-top: 2rem;
		margin-top: 1rem;
	}

	.stat-row {
		display: flex;
		gap: 1rem;
		padding: 0.5rem 0;
		font-size: 0.9rem;
	}

	.stat-label {
		font-weight: 600;
		color: var(--faf-black);
		min-width: 6rem;
	}

	.stat-value {
		color: var(--faf-dark);
	}

	.ecosystem-link {
		text-align: center;
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--faf-light-gray);
	}

	.ecosystem-link a {
		display: inline-block;
		color: #FF6B35;
		font-weight: 600;
		font-size: 1.05rem;
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		border: 2px solid #FF6B35;
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.ecosystem-link a:hover {
		background: #FF6B35;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	/* ── RESPONSIVE ── */
	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.hide-mobile {
			display: none;
		}

		.apps-table {
			font-size: 0.8rem;
		}

		.cards-grid {
			grid-template-columns: 1fr;
		}

		.list-killer {
			display: none;
		}

		.list-what {
			flex: 1;
			min-width: 0;
		}

		.toolbar {
			gap: 0.5rem;
		}

		.container {
			padding: 0 1rem;
		}
	}
</style>
