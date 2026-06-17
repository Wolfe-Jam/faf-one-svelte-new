<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-mcp v2.0.0 — The Interop MCP for Context

Define once in .faf, sync to .cursorrules, AGENTS.md, GEMINI.md, and CLAUDE.md.

61 tools, 309 tests, 7 bundled parsers.`;
	const shareUrl = 'https://faf.one/blog/interop-mcp';
	const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>The Interop MCP for Context - faf-mcp v2.0.0 | FAF</title>
	<meta name="description" content="Define once in .faf, sync to .cursorrules, AGENTS.md, GEMINI.md, and CLAUDE.md. The dedicated MCP server for Cursor, Windsurf, Cline, and VS Code." />
	<meta property="og:title" content="The Interop MCP for Context - faf-mcp v2.0.0" />
	<meta property="og:description" content="Define once. Sync everywhere. 61 tools, 309 tests, 7 bundled parsers." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/interop-mcp-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/interop-mcp-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Interop MCP for Context
		</div>

		<h1>The Interop MCP for Context</h1>
		<p class="version-tag">faf-mcp v2.0.0</p>
		<p class="subtitle">Define once. Sync everywhere.</p>
		<div class="meta">
			<time datetime="2026-03-07">March 7, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/interop-mcp-hero.png" alt="faf-mcp v2.0.0 - Define once. Sync everywhere. project.faf connecting to Cursor, Windsurf, Cline, and VS Code" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The MCP you didn't realise you needed, or wanted but didn't know who to ask, is here. Building on 36,000+ downloads across Claude and now Gemini, we bring you faf-mcp v2.0.0 to cure your syncing pain and fuel your chosen AI with optimized context, on-demand.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>
			<p>
				You maintain <code>.cursorrules</code>. Your teammate uses <code>AGENTS.md</code>. Someone just switched to Gemini. Every AI tool wants its own context file — and they all say the same thing in different formats.
			</p>
			<p>
				That's context drift. It's silent, cumulative, and it means your AI is guessing instead of knowing.
			</p>
		</section>

		<section>
			<h2>The Fix</h2>

			<div class="interop-diagram">
				<div class="diagram-source">project.faf</div>
				<div class="diagram-arrows">
					<span>|</span>
					<span class="diagram-spread">+--------+--------+--------+</span>
					<span class="diagram-spread">v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v</span>
				</div>
				<div class="diagram-targets">
					<span class="target">CLAUDE.md</span>
					<span class="target">AGENTS.md</span>
					<span class="target">.cursorrules</span>
					<span class="target">GEMINI.md</span>
				</div>
			</div>

			<p>
				One <code>.faf</code> file. Every format your team needs. Updated either side, both stay aligned. Zero manual maintenance.
			</p>
		</section>

		<section>
			<h2>5 New Interop Tools</h2>

			<ul>
				<li><strong>faf_agents</strong> — Import/export/sync AGENTS.md (OpenAI Codex)</li>
				<li><strong>faf_cursor</strong> — Import/export/sync .cursorrules (Cursor IDE)</li>
				<li><strong>faf_gemini</strong> — Import/export/sync GEMINI.md (Google Gemini CLI)</li>
				<li><strong>faf_conductor</strong> — Import/export Conductor directory structure</li>
				<li><strong>faf_git</strong> — Generate .faf from any public GitHub repo URL</li>
			</ul>

			<p>Plus the <code>--all</code> flag for bi-sync:</p>

			<div class="copy-box" onclick={() => copyText('faf bi-sync --all', 'bisync')}>
				<code class="copy-code">faf bi-sync --all</code>
				<button class="copy-btn">{copiedId === 'bisync' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Syncs your <code>.faf</code> to CLAUDE.md + AGENTS.md + .cursorrules + GEMINI.md in one shot.</p>
		</section>

		<section>
			<h2>Who Is This For?</h2>
			<p>
				<strong>faf-mcp is the dedicated MCP server for Cursor, Windsurf, Cline, VS Code, and every non-Claude platform.</strong> If you use Claude Desktop, you want <a href="https://npmjs.com/package/claude-faf-mcp">claude-faf-mcp</a>. If you use anything else — this is yours.
			</p>

			<div class="platform-grid">
				<div class="platform-box">
					<strong>Cursor</strong>
					<code>~/.cursor/mcp.json</code>
				</div>
				<div class="platform-box">
					<strong>Windsurf</strong>
					<code>~/.codeium/windsurf/mcp_config.json</code>
				</div>
				<div class="platform-box">
					<strong>Cline</strong>
					<code>Cline MCP settings</code>
				</div>
				<div class="platform-box">
					<strong>VS Code</strong>
					<code>MCP extension config</code>
				</div>
			</div>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npx faf-mcp', 'npx')}>
				<code class="copy-code">npx faf-mcp</code>
				<button class="copy-btn">{copiedId === 'npx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Add to your MCP config:</p>

			<div class="copy-box" onclick={() => copyText('{"mcpServers": {"faf": {"command": "npx", "args": ["-y", "faf-mcp"]}}}', 'config')}>
				<div class="copy-code-multi">{`{"mcpServers": {"faf": {"command": "npx", "args": ["-y", "faf-mcp"]}}}`}</div>
				<button class="copy-btn">{copiedId === 'config' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-mcp/releases/tag/v2.0.1" class="cta-link">v2.0.1 Release</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/faf-mcp" class="cta-link">faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v2.0.0</strong> — Released March 7, 2026</li>
				<li><strong>309/309</strong> — Tests passing (9 suites)</li>
				<li><strong>61 tools</strong> — 25 core + 36 advanced</li>
				<li><strong>7 bundled parsers</strong> — Zero CLI dependency for interop</li>
				<li><strong>100%</strong> — Trophy score ☑️</li>
				<li><strong>36,000+</strong> — Downloads across the FAF ecosystem</li>
			</ul>
		</section>

		<section>
			<h2>What Changed Under the Hood</h2>

			<h3>v2.0.0 — The Interop MCP</h3>
			<ul>
				<li>5 new MCP tools for cross-platform AI context</li>
				<li>7 bundled parsers (agents, cursorrules, gemini, conductor, github, faf-git, slot-counter)</li>
				<li>WJTTC v2.0.0 Championship Suite — 73 Brake/Engine/Aero tests</li>
				<li>MCP SDK ^1.27.1</li>
				<li>Tier system fix: 100 = Trophy max</li>
			</ul>

			<h3>v2.0.1 — Polish</h3>
			<ul>
				<li>README rewritten for Cursor/Windsurf/Cline devs</li>
				<li>Windows CRLF normalization in conductor-parser, gemini-parser, and tests</li>
				<li>CI pipeline fixed: audit, tolerance for MCP Registry duplicates</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Define once. Sync everywhere. 🏎️
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00D4D4;
		color: #000;
	}

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.interop-diagram {
		background: #1a1a1a;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		text-align: center;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		color: #00D4D4;
		line-height: 1.8;
	}

	.diagram-source {
		font-size: 1.2rem;
		font-weight: 700;
		color: #FF6B35;
		margin-bottom: 0.5rem;
	}

	.diagram-arrows {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #666;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}

	.diagram-spread {
		letter-spacing: 0;
	}

	.diagram-targets {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.target {
		background: rgba(0, 212, 212, 0.15);
		border: 1px solid rgba(0, 212, 212, 0.3);
		padding: 0.4rem 0.8rem;
		border-radius: 6px;
		font-size: 0.85rem;
		color: #00D4D4;
	}

	.platform-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.platform-box {
		background: #f8f8f8;
		border: 1px solid #ddd;
		padding: 1rem;
		border-radius: 8px;
	}

	.platform-box strong {
		display: block;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.platform-box code {
		font-size: 0.8em;
		color: #666;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-code-multi {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.6;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid, .platform-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
