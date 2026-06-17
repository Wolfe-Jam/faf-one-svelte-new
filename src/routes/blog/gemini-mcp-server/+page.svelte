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
	const shareText = `🏁 Just shipped: gemini-faf-mcp v2.1.1 — The MCP Server Edition

Native FastMCP server with 12 tools for Gemini CLI. Auto-detect your stack. IANA-registered .faf project context.`;
	const shareUrl = 'https://faf.one/blog/gemini-mcp-server';
	const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>The MCP Server Edition - gemini-faf-mcp v2.1.1 | FAF</title>
	<meta name="description" content="gemini-faf-mcp v2.1.1: Native FastMCP server with 12 tools including faf_auto stack detection. Read, validate, score, and auto-detect .faf project DNA from Gemini CLI." />
	<meta property="og:title" content="The MCP Server Edition - gemini-faf-mcp v2.1.1" />
	<meta property="og:description" content="Native FastMCP server with 12 tools for Gemini CLI. Auto-detect your stack. IANA-registered .faf project context." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The MCP Server Edition
		</div>

		<h1>The MCP Server Edition</h1>
		<p class="version-tag">gemini-faf-mcp v2.1.1</p>
		<p class="subtitle">A real MCP server for Gemini CLI. 12 tools. Auto-detect your stack. Native Python.</p>
		<div class="meta">
			<time datetime="2026-03-08">March 8, 2026</time>
			<span class="separator">-</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> gemini-faf-mcp v2.1.1 ships 12 MCP tools powered by <a href="https://pypi.org/project/faf-python-sdk/">faf-python-sdk</a>, built on <a href="https://github.com/jlowin/fastmcp">FastMCP</a>. The headline: <code>faf_auto</code> scans your project, detects your stack from manifest files, and generates a .faf — zero to project DNA in one tool call. Install from the Gemini Extensions Gallery or PyPI.
			</p>
		</section>

		<section>
			<h2>faf_auto: Zero to Project DNA</h2>
			<p>The new <code>faf_auto</code> tool scans your project directory, reads manifest files, and detects your stack automatically. No manual input. No guessing.</p>

			<div class="detection-grid">
				<div class="detection-box">
					<h3>Detects From</h3>
					<ul>
						<li><code>pyproject.toml</code> — Python, build system, deps</li>
						<li><code>package.json</code> — JavaScript/TypeScript, framework</li>
						<li><code>Cargo.toml</code> — Rust, cargo</li>
						<li><code>go.mod</code> — Go, go modules</li>
						<li><code>requirements.txt</code> — Python fallback</li>
						<li><code>Gemfile</code> — Ruby, bundler</li>
						<li><code>composer.json</code> — PHP, composer</li>
					</ul>
				</div>
				<div class="detection-box">
					<h3>Outputs</h3>
					<ul>
						<li>Language, framework, build tool</li>
						<li>Package manager, database, API type</li>
						<li>Score and tier</li>
						<li>New .faf or updated existing</li>
					</ul>
				</div>
			</div>

			<p>In Gemini CLI, just say:</p>

			<pre><code>{`> Auto-detect my project and create a .faf file`}</code></pre>

			<p>Gemini calls <code>faf_auto</code>. Your project gets a scored, validated .faf. Done.</p>
		</section>

		<section>
			<h2>The Tools</h2>

			<div class="tools-table">
				<table>
					<thead>
						<tr>
							<th>Tool</th>
							<th>What It Does</th>
						</tr>
					</thead>
					<tbody>
						<tr class="highlight">
							<td><code>faf_auto</code></td>
							<td>Auto-detect stack and generate/update .faf</td>
						</tr>
						<tr>
							<td><code>faf_init</code></td>
							<td>Create a starter .faf file</td>
						</tr>
						<tr>
							<td><code>faf_read</code></td>
							<td>Parse a .faf file into structured data</td>
						</tr>
						<tr>
							<td><code>faf_validate</code></td>
							<td>Validate — score, tier, errors, warnings</td>
						</tr>
						<tr>
							<td><code>faf_score</code></td>
							<td>Quick score check (0-100%) with tier</td>
						</tr>
						<tr>
							<td><code>faf_discover</code></td>
							<td>Find .faf files in the project tree</td>
						</tr>
						<tr>
							<td><code>faf_stringify</code></td>
							<td>Convert FAF data back to YAML</td>
						</tr>
						<tr>
							<td><code>faf_context</code></td>
							<td>Gemini-optimized context from .faf</td>
						</tr>
						<tr>
							<td><code>faf_gemini</code></td>
							<td>Export GEMINI.md</td>
						</tr>
						<tr>
							<td><code>faf_agents</code></td>
							<td>Export AGENTS.md</td>
						</tr>
						<tr>
							<td><code>faf_model</code></td>
							<td>100% Trophy-scored example .faf for 15 project types</td>
						</tr>
						<tr>
							<td><code>faf_about</code></td>
							<td>FAF format info, IANA registration</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>Every tool delegates to <code>faf-python-sdk</code> for parsing, validation, and discovery. The server is pure Python — no shelling out, no Node dependencies.</p>
		</section>

		<section>
			<h2>Using with Gemini CLI</h2>
			<p>No commands to memorize. Just talk to it:</p>

			<pre><code>{`> Auto-detect my project and create a .faf file
> Read my project DNA
> What's the FAF score for this project?
> Export a GEMINI.md
> Show me a 100% example for a web app
> Create an AGENTS.md for this project`}</code></pre>

			<p>Gemini picks the right tool. You get the result.</p>
		</section>

		<section>
			<h2>Architecture</h2>

			<pre><code>{`gemini-faf-mcp v2.1.1
├── server.py              → FastMCP MCP server (12 tools)
├── models.py              → 15 Trophy-scored .faf examples
├── main.py                → Cloud Run REST API (GET/POST/PUT)
└── src/gemini_faf_mcp/    → Python SDK (FAFClient, parser)`}</code></pre>

			<p>The MCP server handles local .faf operations. The Cloud Run API handles live badges, multi-agent context brokering, and voice-to-FAF mutations. Both ship in the same package.</p>

			<p>Built on <a href="https://github.com/jlowin/fastmcp">FastMCP</a>. Powered by <a href="https://pypi.org/project/faf-python-sdk/">faf-python-sdk</a>.</p>
		</section>

		<section>
			<h2>Install</h2>

			<div class="copy-box" onclick={() => copyText('gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp', 'gallery')}>
				<code class="copy-code">gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'gallery' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or from PyPI:</p>

			<div class="copy-box" onclick={() => copyText('pip install gemini-faf-mcp', 'pip')}>
				<code class="copy-code">pip install gemini-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'pip' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>PyPI</h3>
					<p>Install the latest version.</p>
					<a href="https://pypi.org/project/gemini-faf-mcp/" class="cta-link">gemini-faf-mcp</a>
				</div>
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source, tests, and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/releases/tag/v2.1.1" class="cta-link">v2.1.1 Release</a>
				</div>
			</div>
		</section>

		<section>
			<h2>Testing</h2>
			<p>183 tests across two suites:</p>
			<ul>
				<li><strong>126 MCP server tests</strong> — WJTTC 9-tier championship suite (Brake, Engine, Aero, Scoring, Exports, Safety, Contract, Roundtrip, Gallery)</li>
				<li><strong>57 Cloud Function tests</strong> — 7 tiers + integration</li>
			</ul>

			<pre><code>{`pip install -e ".[dev]"
python -m pytest tests/ -v`}</code></pre>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v2.1.1</strong> — Released March 8, 2026</li>
				<li><strong>183/183</strong> — Tests passing</li>
				<li><strong>12</strong> — MCP tools</li>
				<li><strong>7</strong> — Manifest file types detected</li>
				<li><strong>15</strong> — Trophy-scored example .faf models</li>
				<li><strong>Python 3.10+</strong> — Works anywhere pip does</li>
			</ul>
		</section>

		<section>
			<h2>The Ecosystem</h2>

			<div class="ecosystem-table">
				<table>
					<thead>
						<tr>
							<th>Package</th>
							<th>Platform</th>
							<th>Registry</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><a href="https://npmjs.com/package/claude-faf-mcp">claude-faf-mcp</a></td>
							<td>Anthropic</td>
							<td>npm + MCP #2759</td>
						</tr>
						<tr class="highlight">
							<td><a href="https://pypi.org/project/gemini-faf-mcp/">gemini-faf-mcp</a></td>
							<td>Google</td>
							<td>PyPI</td>
						</tr>
						<tr>
							<td><a href="https://npmjs.com/package/grok-faf-mcp">grok-faf-mcp</a></td>
							<td>xAI</td>
							<td>npm</td>
						</tr>
						<tr>
							<td><a href="https://crates.io/crates/rust-faf-mcp">rust-faf-mcp</a></td>
							<td>Rust</td>
							<td>crates.io</td>
						</tr>
						<tr>
							<td><a href="https://npmjs.com/package/faf-cli">faf-cli</a></td>
							<td>Universal</td>
							<td>npm</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Media type: <code>application/vnd.faf+yaml</code></p>
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
		background: #FF6B35;
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
		margin: 0 0 1rem 0;
		color: #FF6B35;
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

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	.tools-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.detection-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.detection-box {
		background: #f8f8f8;
		border: 1px solid #eee;
		padding: 1.5rem;
		border-radius: 8px;
	}

	.detection-box ul {
		margin: 0.5rem 0 0 1.25rem;
	}

	.detection-box li {
		margin-bottom: 0.35rem;
		font-size: 0.95rem;
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

	.ecosystem-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}

	th {
		background: #f8f8f8;
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 2px solid #ddd;
		font-weight: 600;
	}

	td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #eee;
	}

	tr.highlight {
		background: #fff5f0;
		font-weight: 600;
	}

	tr.highlight td {
		border-bottom: 2px solid #FF6B35;
	}

	table a {
		color: #FF6B35;
		text-decoration: none;
	}

	table a:hover {
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

		.cta-grid, .detection-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
