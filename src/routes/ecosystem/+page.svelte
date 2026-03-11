<script>
	let { data } = $props();

	const servers = [
		{
			name: 'claude-faf-mcp',
			platform: 'Claude',
			lang: 'TypeScript',
			tools: 33,
			registry: 'npm',
			url: 'https://www.npmjs.com/package/claude-faf-mcp',
			github: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
			install: 'npx -y claude-faf-mcp',
			tests: 391
		},
		{
			name: 'faf-mcp',
			platform: 'Universal',
			lang: 'TypeScript',
			tools: 17,
			registry: 'npm',
			url: 'https://www.npmjs.com/package/faf-mcp',
			github: 'https://github.com/Wolfe-Jam/faf-mcp',
			install: 'npx -y faf-mcp'
		},
		{
			name: 'grok-faf-mcp',
			platform: 'Grok',
			lang: 'TypeScript',
			tools: 21,
			registry: 'npm',
			url: 'https://www.npmjs.com/package/grok-faf-mcp',
			github: 'https://github.com/Wolfe-Jam/grok-faf-mcp',
			install: 'npx -y grok-faf-mcp'
		},
		{
			name: 'gemini-faf-mcp',
			platform: 'Gemini',
			lang: 'Python',
			tools: 12,
			registry: 'PyPI',
			url: 'https://pypi.org/project/gemini-faf-mcp/',
			github: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
			install: 'pip install gemini-faf-mcp'
		},
		{
			name: 'rust-faf-mcp',
			platform: 'Rust',
			lang: 'Rust',
			tools: 8,
			registry: 'crates.io',
			url: 'https://crates.io/crates/rust-faf-mcp',
			github: 'https://github.com/Wolfe-Jam/rust-faf-mcp',
			install: 'cargo install rust-faf-mcp'
		}
	];

	const cli = {
		name: 'faf-cli',
		description: 'The universal CLI. init, auto, go, bi-sync, tri-sync.',
		url: 'https://www.npmjs.com/package/faf-cli',
		github: 'https://github.com/Wolfe-Jam/faf-cli',
		install: 'npm install -g faf-cli'
	};

	function fmt(n) {
		if (!n) return '—';
		if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
		return n.toLocaleString();
	}
</script>

<svelte:head>
	<title>FAF Ecosystem - 5 MCP Servers, 1 CLI, 1 Format</title>
	<meta name="description" content="The FAF ecosystem: 5 MCP servers for Claude, Gemini, Grok, Cursor, and Rust. Plus faf-cli. All using IANA-registered .faf format." />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<main class="ecosystem-page">
	<header class="page-header">
		<h1><span class="faf-highlight">.faf</span> Ecosystem</h1>
		<p class="lead">5 MCP servers. 1 CLI. 1 IANA-registered format.</p>
		<p class="subtitle">Live download stats from npm — updated at build time</p>
	</header>

	<section class="stats-bar">
		<div class="stat">
			<span class="stat-value">{fmt(data.totalDownloads)}</span>
			<span class="stat-label">Downloads / month</span>
		</div>
		<div class="stat">
			<span class="stat-value">5</span>
			<span class="stat-label">MCP Servers</span>
		</div>
		<div class="stat">
			<span class="stat-value">91</span>
			<span class="stat-label">Tools (total)</span>
		</div>
		<div class="stat">
			<span class="stat-value">5</span>
			<span class="stat-label">Languages</span>
		</div>
	</section>

	<section class="cli-section">
		<div class="cli-card">
			<div class="cli-header">
				<h2>🏎️ faf-cli</h2>
				<span class="downloads">{fmt(data.packageStats['faf-cli'])} / mo</span>
			</div>
			<p>{cli.description}</p>
			<div class="install-box"><code>{cli.install}</code></div>
			<div class="cli-links">
				<a href={cli.url} target="_blank" rel="noopener">npm</a>
				<a href={cli.github} target="_blank" rel="noopener">GitHub</a>
			</div>
		</div>
	</section>

	<section class="servers-section">
		<h2>MCP Servers</h2>
		<div class="servers-grid">
			{#each servers as s}
				<article class="server-card">
					<div class="server-header">
						<h3>{s.name}</h3>
						<span class="platform-badge">{s.platform}</span>
					</div>
					<div class="server-meta">
						<span>{s.lang}</span>
						<span>{s.tools} tools</span>
						<span>{s.registry}</span>
						{#if s.tests}
							<span>{s.tests} tests</span>
						{/if}
					</div>
					<div class="server-downloads">
						{fmt(data.packageStats[s.name])} downloads / mo
					</div>
					<div class="install-box"><code>{s.install}</code></div>
					<div class="server-links">
						<a href={s.url} target="_blank" rel="noopener">{s.registry}</a>
						<a href={s.github} target="_blank" rel="noopener">GitHub</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<footer class="ecosystem-footer">
		<p>All packages are <strong>open source</strong> (MIT License)</p>
		<p class="built-at">Stats fetched: {new Date(data.builtAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
	</footer>
</main>

<style>
	.back-nav {
		padding: 1rem 2rem;
		border-bottom: 1px solid #e0e0e0;
	}

	.back-button {
		color: var(--faf-dark, #333);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.2s;
	}

	.back-button:hover {
		background: #f5f5f5;
		color: #FF6B35;
	}

	.ecosystem-page {
		max-width: 1100px;
		margin: 0 auto;
		padding: 3rem 2rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.page-header h1 {
		font-size: 2.5rem;
		color: #1a1a1a;
		margin: 0 0 0.5rem;
	}

	.faf-highlight {
		color: #FF6B35;
	}

	.lead {
		font-size: 1.25rem;
		color: #666;
		margin: 0 0 0.25rem;
	}

	.subtitle {
		font-size: 0.9rem;
		color: #999;
	}

	.stats-bar {
		display: flex;
		justify-content: center;
		gap: 3rem;
		padding: 1.5rem 0;
		margin-bottom: 3rem;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		display: block;
		font-size: 1.75rem;
		font-weight: 700;
		color: #FF6B35;
	}

	.stat-label {
		font-size: 0.8rem;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.cli-section {
		margin-bottom: 3rem;
	}

	.cli-card {
		background: #1a1a1a;
		color: white;
		border-radius: 12px;
		padding: 2rem;
	}

	.cli-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.cli-header h2 {
		margin: 0;
		font-size: 1.5rem;
	}

	.downloads {
		color: #FF6B35;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.cli-card p {
		color: #aaa;
		margin: 0 0 1rem;
	}

	.cli-links {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.cli-links a {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.cli-links a:hover {
		text-decoration: underline;
	}

	.servers-section h2 {
		font-size: 1.5rem;
		color: #1a1a1a;
		margin: 0 0 1.5rem;
	}

	.servers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.server-card {
		border: 1px solid #e0e0e0;
		border-radius: 10px;
		padding: 1.5rem;
		transition: border-color 0.2s;
	}

	.server-card:hover {
		border-color: #FF6B35;
	}

	.server-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
	}

	.server-header h3 {
		margin: 0;
		font-size: 1.1rem;
		color: #1a1a1a;
	}

	.platform-badge {
		background: #f0f0f0;
		color: #666;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.server-meta {
		display: flex;
		gap: 0.75rem;
		font-size: 0.8rem;
		color: #888;
		margin-bottom: 0.75rem;
	}

	.server-meta span {
		background: #f8f8f8;
		padding: 0.15rem 0.5rem;
		border-radius: 3px;
	}

	.server-downloads {
		font-size: 0.9rem;
		color: #FF6B35;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.install-box {
		background: #1a1a1a;
		padding: 0.6rem 1rem;
		border-radius: 6px;
	}

	.install-box code {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.85rem;
		color: #27c93f;
	}

	.server-links {
		display: flex;
		gap: 1rem;
		margin-top: 0.75rem;
	}

	.server-links a {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.85rem;
	}

	.server-links a:hover {
		text-decoration: underline;
	}

	.ecosystem-footer {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid #e0e0e0;
		color: #888;
		font-size: 0.9rem;
	}

	.ecosystem-footer p {
		margin: 0.25rem 0;
	}

	.built-at {
		font-size: 0.8rem;
		color: #aaa;
	}

	@media (max-width: 768px) {
		.ecosystem-page { padding: 2rem 1rem; }
		.page-header h1 { font-size: 2rem; }
		.stats-bar { gap: 1.5rem; flex-wrap: wrap; }
		.servers-grid { grid-template-columns: 1fr; }
	}
</style>
