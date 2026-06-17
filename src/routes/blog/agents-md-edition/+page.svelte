<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	let copiedId = $state('');
	onMount(() => { mounted = true; });

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-cli v4.5.0 — The AGENTS.md Edition

One project.faf generates AGENTS.md, .cursorrules, CLAUDE.md, and GEMINI.md. Define once, sync everywhere.

npm i -g faf-cli`;
	const shareUrl = 'https://faf.one/blog/agents-md-edition';
	const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>The AGENTS.md Edition - faf-cli v4.5.0 | FAF</title>
	<meta name="description" content="One project.faf, every format. Full AGENTS.md and .cursorrules interop. Define once, sync everywhere with faf bi-sync --all." />
	<meta property="og:title" content="The AGENTS.md Edition - faf-cli v4.5.0" />
	<meta property="og:description" content="One project.faf generates AGENTS.md, .cursorrules, CLAUDE.md, and GEMINI.md. Define once, sync everywhere." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The AGENTS.md Edition
		</div>

		<h1>The AGENTS.md Edition</h1>
		<p class="version-tag">faf-cli v4.5.0</p>
		<p class="subtitle">One file defines your project. Every AI tool reads it in its own language.</p>
		<div class="meta">
			<time datetime="2026-02-24">February 24, 2026</time>
			<span class="separator">•</span>
			<span class="category interop">Interop</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf bi-sync --all</code> now generates AGENTS.md, .cursorrules, CLAUDE.md, and GEMINI.md from a single <code>project.faf</code>. Define your project once. Every AI tool reads it natively. 87 new championship tests. 3 cross-platform bugs caught before you ever would.
			</p>
		</section>

		<section class="hero-image">
			<img src="/blog-assets/md-chaos-into-yaml.jpg" alt="Markdown chaos on the left transforming into structured YAML on the right" />
		</section>

		<!-- ============================================ -->
		<!-- DIAGRAM 1: The Hub — .faf at Center -->
		<!-- ============================================ -->
		<section>
			<h2>The Picture</h2>
			<p>This is what v4.5.0 looks like:</p>

			<div class="hub-diagram">
				<div class="hub-ring">
					<div class="spoke spoke-top">
						<div class="spoke-line spoke-line-top"></div>
						<div class="format-node node-agents">
							<span class="node-icon">📋</span>
							<span class="node-label">AGENTS.md</span>
							<span class="node-detail">OpenAI Codex &bull; 20+ tools</span>
						</div>
					</div>
					<div class="spoke spoke-right">
						<div class="spoke-line spoke-line-right"></div>
						<div class="format-node node-claude">
							<span class="node-icon">🤖</span>
							<span class="node-label">CLAUDE.md</span>
							<span class="node-detail">Anthropic &bull; Claude Code</span>
						</div>
					</div>
					<div class="spoke spoke-bottom">
						<div class="spoke-line spoke-line-bottom"></div>
						<div class="format-node node-cursor">
							<span class="node-icon">📐</span>
							<span class="node-label">.cursorrules</span>
							<span class="node-detail">Cursor IDE</span>
						</div>
					</div>
					<div class="spoke spoke-left">
						<div class="spoke-line spoke-line-left"></div>
						<div class="format-node node-gemini">
							<span class="node-icon">✦</span>
							<span class="node-label">GEMINI.md</span>
							<span class="node-detail">Google &bull; Gemini CLI</span>
						</div>
					</div>
					<div class="hub-center">
						<span class="hub-emoji">🏎️</span>
						<span class="hub-label">project.faf</span>
						<span class="hub-detail">Define Once</span>
					</div>
				</div>
				<p class="diagram-caption">One source of truth. Four native formats. Zero drift.</p>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- WHY BOTHER? Section -->
		<!-- ============================================ -->
		<section>
			<h2>Why Bother?</h2>

			<p>Every AI tool invented its own config format. None of them talk to each other.</p>

			<div class="comparison-diagram">
				<div class="compare-side compare-before">
					<h3 class="compare-title">Without FAF</h3>
					<div class="file-stack">
						<div class="file-item file-manual">AGENTS.md <span class="file-tag">write by hand</span></div>
						<div class="file-item file-manual">.cursorrules <span class="file-tag">write by hand</span></div>
						<div class="file-item file-manual">CLAUDE.md <span class="file-tag">write by hand</span></div>
						<div class="file-item file-manual">GEMINI.md <span class="file-tag">write by hand</span></div>
					</div>
					<div class="compare-result bad">
						<strong>4 files. 4 formats. 4 chances to drift.</strong>
						<p>Update one, forget another. Context rot starts day one.</p>
					</div>
				</div>
				<div class="compare-arrow">
					<span>vs</span>
				</div>
				<div class="compare-side compare-after">
					<h3 class="compare-title">With FAF</h3>
					<div class="file-stack">
						<div class="file-item file-faf">project.faf <span class="file-tag">source of truth</span></div>
					</div>
					<div class="terminal-inline">
						<code>faf bi-sync --all</code>
					</div>
					<div class="compare-result good">
						<strong>1 file. 1 command. 4 outputs.</strong>
						<p>Always in sync. Always accurate. Always current.</p>
					</div>
				</div>
			</div>

			<div class="insight-box">
				<h3>The Real Cost</h3>
				<p>Every minute you spend maintaining duplicate context files is a minute you're not shipping code. <code>project.faf</code> is 30-40 lines of YAML. The generated files are 50-100 lines each. That's 200+ lines you never write again.</p>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- DIAGRAM 2: Three Layers -->
		<!-- ============================================ -->
		<section>
			<h2>Three Layers, Three Jobs</h2>

			<div class="layers-diagram">
				<div class="layer layer-foundation">
					<div class="layer-number">1</div>
					<div class="layer-content">
						<h4>.faf <span class="layer-verb">defines</span></h4>
						<p>Structured YAML. Machine-readable. IANA-registered. The single source of truth.</p>
					</div>
				</div>
				<div class="layer-connector">
					<span class="connector-arrow">generates</span>
				</div>
				<div class="layer layer-instruction">
					<div class="layer-number">2</div>
					<div class="layer-content">
						<h4>.md files <span class="layer-verb">instruct</span></h4>
						<p>AGENTS.md, CLAUDE.md, GEMINI.md, .cursorrules. Prose for each tool. Generated from .faf.</p>
					</div>
				</div>
				<div class="layer-connector">
					<span class="connector-arrow">consumed by</span>
				</div>
				<div class="layer layer-ai">
					<div class="layer-number">3</div>
					<div class="layer-content">
						<h4>AI <span class="layer-verb">interprets</span></h4>
						<p>Claude, Codex, Cursor, Gemini. Each reads its native format. No translation layer needed.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- What's New -->
		<!-- ============================================ -->
		<section>
			<h2>What's New</h2>

			<h3>AGENTS.md Interop</h3>
			<p>Full bidirectional support for OpenAI's AGENTS.md format. Import existing AGENTS.md files. Export from .faf. Keep both in sync.</p>

			<div class="terminal-block">
				<code>faf agents import</code>
				<code>faf agents export</code>
				<code>faf agents sync</code>
			</div>

			<p>Supports the full spec: Project Overview, Tech Stack, Code Style, Build Commands, Architecture sections. Detects AGENTS.md, agents.md, and Agents.md (case-insensitive).</p>

			<h3>.cursorrules Interop</h3>
			<p>Same treatment for Cursor IDE's .cursorrules format. Import rules, export from .faf, bidirectional sync.</p>

			<div class="terminal-block">
				<code>faf cursor import</code>
				<code>faf cursor export</code>
				<code>faf cursor sync</code>
			</div>

			<h3>One Command, Every Format</h3>
			<p>The headline feature:</p>

			<div class="terminal-block highlight">
				<code>faf bi-sync --all</code>
			</div>

			<p>Generates CLAUDE.md + AGENTS.md + .cursorrules + GEMINI.md in one pass. Or pick your targets:</p>

			<div class="terminal-block">
				<code>faf bi-sync --agents</code>
				<code>faf bi-sync --cursor</code>
				<code>faf bi-sync --all</code>
			</div>

			<h3>Bugs We Killed</h3>
			<p>The WJTTC championship test suite found 3 cross-platform bugs before any user could hit them:</p>

			<div class="bugs-grid">
				<div class="bug-card">
					<div class="bug-icon">🪟</div>
					<div class="bug-text">
						<strong>Windows \r\n</strong>
						<p>Line endings broke H1/H2 detection. Every VS Code user on Windows would have hit this.</p>
					</div>
				</div>
				<div class="bug-card">
					<div class="bug-icon">📝</div>
					<div class="bug-text">
						<strong>UTF-8 BOM</strong>
						<p>BOM marker before <code>#</code> made the first heading invisible. Silent corruption.</p>
					</div>
				</div>
				<div class="bug-card">
					<div class="bug-icon">🍎</div>
					<div class="bug-text">
						<strong>Classic Mac \r</strong>
						<p>Pre-OS X line endings unhandled. Edge case? Yes. But we test edges.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- The Format Matrix -->
		<!-- ============================================ -->
		<section>
			<h2>The Format Matrix</h2>

			<div class="format-table-wrapper">
				<table class="format-table">
					<thead>
						<tr>
							<th>Command</th>
							<th>Format</th>
							<th>Ecosystem</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>faf bi-sync</code></td>
							<td>CLAUDE.md</td>
							<td>Anthropic / Claude Code</td>
							<td class="status-shipped">v3.0+</td>
						</tr>
						<tr>
							<td><code>faf gemini</code></td>
							<td>GEMINI.md</td>
							<td>Google / Gemini CLI</td>
							<td class="status-shipped">v3.4.7+</td>
						</tr>
						<tr class="row-new">
							<td><code>faf agents</code></td>
							<td>AGENTS.md</td>
							<td>OpenAI / Codex / 20+ tools</td>
							<td class="status-new">v4.5.0</td>
						</tr>
						<tr class="row-new">
							<td><code>faf cursor</code></td>
							<td>.cursorrules</td>
							<td>Cursor IDE</td>
							<td class="status-new">v4.5.0</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- Try It -->
		<!-- ============================================ -->
		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@4.5.0', 'install')}>
				<code class="copy-code">npm install -g faf-cli@4.5.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or update:</p>

			<div class="copy-box" onclick={() => copyText('npm update -g faf-cli', 'update')}>
				<code class="copy-code">npm update -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'update' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Then in any project with a <code>project.faf</code>:</p>

			<div class="copy-box" onclick={() => copyText('faf bi-sync --all', 'bisync')}>
				<code class="copy-code">faf bi-sync --all</code>
				<button class="copy-btn">{copiedId === 'bisync' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v4.5.0" class="cta-link">v4.5.0 Release</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">faf-cli</a>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- The Numbers -->
		<!-- ============================================ -->
		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v4.5.0</strong> - Released February 24, 2026</li>
				<li><strong>1,051/1,051</strong> - Tests passing (+87 new)</li>
				<li><strong>100%</strong> - Trophy score</li>
				<li><strong>WJTTC GOLD</strong> - Certified</li>
				<li><strong>27,000+</strong> - npm downloads (ecosystem)</li>
				<li><strong>4 formats</strong> - CLAUDE.md + AGENTS.md + .cursorrules + GEMINI.md</li>
				<li><strong>1 command</strong> - <code>faf bi-sync --all</code></li>
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

	.category.interop {
		background: #00D4D4;
		color: #000;
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

	/* ======================================== */
	/* Hero Image */
	/* ======================================== */
	.hero-image {
		margin: 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
	}

	/* ======================================== */
	/* Hub Diagram */
	/* ======================================== */
	.hub-diagram {
		background: #0d1117;
		border-radius: 16px;
		padding: 3rem 2rem;
		margin: 2rem 0;
		position: relative;
		overflow: hidden;
	}

	.hub-ring {
		position: relative;
		width: 100%;
		max-width: 600px;
		height: 420px;
		margin: 0 auto;
	}

	.hub-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: linear-gradient(135deg, #FF6B35 0%, #FF914D 100%);
		border-radius: 50%;
		width: 140px;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 40px rgba(255, 107, 53, 0.4), 0 0 80px rgba(255, 107, 53, 0.15);
		z-index: 2;
	}

	.hub-emoji {
		font-size: 2rem;
		line-height: 1;
	}

	.hub-label {
		color: white;
		font-weight: 800;
		font-size: 0.95rem;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.hub-detail {
		color: rgba(255,255,255,0.8);
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.format-node {
		background: #161b22;
		border: 2px solid #30363d;
		border-radius: 12px;
		padding: 0.75rem 1rem;
		text-align: center;
		min-width: 150px;
		z-index: 2;
		position: relative;
	}

	.node-icon {
		display: block;
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.node-label {
		display: block;
		color: #e6edf3;
		font-weight: 700;
		font-size: 0.9rem;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.node-detail {
		display: block;
		color: #8b949e;
		font-size: 0.7rem;
		margin-top: 0.15rem;
	}

	.node-agents { border-color: #58a6ff; }
	.node-claude { border-color: #00D4D4; }
	.node-cursor { border-color: #f0883e; }
	.node-gemini { border-color: #9B72CB; }

	/* Spoke positioning */
	.spoke {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	.spoke-top {
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		flex-direction: column;
	}

	.spoke-right {
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		flex-direction: row-reverse;
	}

	.spoke-bottom {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		flex-direction: column-reverse;
	}

	.spoke-left {
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		flex-direction: row;
	}

	/* Spoke lines */
	.spoke-line {
		position: absolute;
		z-index: 0;
	}

	.spoke-line-top {
		width: 2px;
		height: 80px;
		top: 80px;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(to bottom, #58a6ff, rgba(88,166,255,0.1));
	}

	.spoke-line-right {
		height: 2px;
		width: 80px;
		top: 50%;
		right: 160px;
		transform: translateY(-50%);
		background: linear-gradient(to left, #00D4D4, rgba(0,212,212,0.1));
	}

	.spoke-line-bottom {
		width: 2px;
		height: 80px;
		bottom: 80px;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(to top, #f0883e, rgba(240,136,62,0.1));
	}

	.spoke-line-left {
		height: 2px;
		width: 80px;
		top: 50%;
		left: 160px;
		transform: translateY(-50%);
		background: linear-gradient(to right, #9B72CB, rgba(155,114,203,0.1));
	}

	.diagram-caption {
		text-align: center;
		color: #8b949e;
		font-size: 0.9rem;
		margin: 1.5rem 0 0 0;
		font-style: italic;
	}

	/* ======================================== */
	/* Comparison Diagram (Before/After) */
	/* ======================================== */
	.comparison-diagram {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1rem;
		margin: 2rem 0;
		align-items: start;
	}

	.compare-side {
		background: #f8f8f8;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.compare-before {
		border: 2px solid #e74c3c;
	}

	.compare-after {
		border: 2px solid #00aa44;
	}

	.compare-title {
		text-align: center;
		margin: 0 0 1rem 0 !important;
		font-size: 1.1rem !important;
	}

	.compare-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		font-weight: 800;
		color: #999;
		padding-top: 3rem;
	}

	.file-stack {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.file-item {
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.85rem;
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.file-manual {
		background: #fff0f0;
		border: 1px solid #f5c6cb;
		color: #721c24;
	}

	.file-faf {
		background: #fff5f0;
		border: 2px solid #FF6B35;
		color: #FF6B35;
		font-size: 1rem;
		padding: 0.75rem 1rem;
	}

	.file-tag {
		font-size: 0.7rem;
		font-weight: 400;
		opacity: 0.7;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.terminal-inline {
		background: #1a1a1a;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		margin-bottom: 1rem;
	}

	.terminal-inline code {
		color: #00ff88;
		background: none;
		font-size: 0.9rem;
	}

	.terminal-inline code::before {
		content: '$ ';
		color: #888;
	}

	.compare-result {
		padding: 0.75rem;
		border-radius: 6px;
		font-size: 0.9rem;
	}

	.compare-result strong {
		display: block;
		margin-bottom: 0.25rem;
	}

	.compare-result p {
		margin: 0;
		font-size: 0.8rem;
		opacity: 0.8;
	}

	.compare-result.bad {
		background: #fce4e4;
		color: #a71d2a;
	}

	.compare-result.good {
		background: #e6f9e6;
		color: #155724;
	}

	/* ======================================== */
	/* Layers Diagram */
	/* ======================================== */
	.layers-diagram {
		margin: 2rem 0;
	}

	.layer {
		display: flex;
		align-items: stretch;
		gap: 1rem;
		padding: 1.25rem;
		border-radius: 12px;
		margin-bottom: 0;
	}

	.layer-foundation {
		background: linear-gradient(135deg, #fff5f0, #ffe8d6);
		border: 2px solid #FF6B35;
	}

	.layer-instruction {
		background: linear-gradient(135deg, #f0f8ff, #d6eaff);
		border: 2px solid #58a6ff;
	}

	.layer-ai {
		background: linear-gradient(135deg, #f0fff0, #d6ffd6);
		border: 2px solid #00aa44;
	}

	.layer-number {
		background: #1a1a1a;
		color: white;
		width: 36px;
		height: 36px;
		min-width: 36px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		font-size: 1rem;
	}

	.layer-content {
		flex: 1;
	}

	.layer-content h4 {
		margin: 0 0 0.25rem 0;
		font-size: 1.15rem;
		color: #000;
	}

	.layer-verb {
		font-weight: 400;
		color: #666;
		font-style: italic;
	}

	.layer-content p {
		margin: 0;
		font-size: 0.9rem;
		color: #555;
		line-height: 1.5;
	}

	.layer-connector {
		display: flex;
		justify-content: center;
		padding: 0.5rem 0;
	}

	.connector-arrow {
		color: #999;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		position: relative;
		padding: 0 1rem;
	}

	.connector-arrow::before {
		content: '↓';
		position: absolute;
		left: -0.5rem;
		top: 0;
		color: #ccc;
		font-size: 1rem;
	}

	/* ======================================== */
	/* Bugs Grid */
	/* ======================================== */
	.bugs-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.bug-card {
		display: flex;
		gap: 1rem;
		padding: 1.25rem;
		background: #f8f8f8;
		border-radius: 8px;
		border-left: 4px solid #e74c3c;
		align-items: flex-start;
	}

	.bug-icon {
		font-size: 1.5rem;
		line-height: 1;
	}

	.bug-text strong {
		display: block;
		margin-bottom: 0.25rem;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.bug-text p {
		margin: 0;
		font-size: 0.9rem;
		color: #666;
	}

	/* ======================================== */
	/* Format Table */
	/* ======================================== */
	.format-table-wrapper {
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	.format-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}

	.format-table th {
		background: #1a1a1a;
		color: white;
		padding: 0.75rem 1rem;
		text-align: left;
		font-weight: 600;
	}

	.format-table td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #eee;
	}

	.format-table code {
		font-size: 0.85em;
	}

	.row-new {
		background: #fffbf0;
	}

	.status-shipped {
		color: #666;
		font-weight: 500;
	}

	.status-new {
		color: #FF6B35;
		font-weight: 700;
	}

	.status-new::after {
		content: ' NEW';
		font-size: 0.7rem;
		background: #FF6B35;
		color: white;
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
		margin-left: 0.5rem;
		vertical-align: middle;
	}

	/* ======================================== */
	/* Shared Components */
	/* ======================================== */
	.insight-box {
		background: #f0fff0;
		border: 2px solid #00aa44;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00aa44;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.1rem;
		color: #006622;
	}

	.terminal-block {
		background: #1a1a1a;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.terminal-block.highlight {
		border: 2px solid #FF6B35;
		box-shadow: 0 0 20px rgba(255, 107, 53, 0.15);
	}

	.terminal-block code {
		display: block;
		color: #00ff88;
		background: none;
		padding: 0.25rem 0;
		font-size: 1rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
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

	.copy-box:hover {
		border-color: #555;
	}

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

	.copy-btn:hover {
		background: rgba(255, 107, 53, 0.3);
		border-color: #ff6b35;
	}

	.copy-btn:active {
		transform: scale(0.95);
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

	/* ======================================== */
	/* Responsive */
	/* ======================================== */
	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}

		.comparison-diagram {
			grid-template-columns: 1fr;
		}

		.compare-arrow {
			padding-top: 0;
			transform: rotate(90deg);
		}

		.hub-ring {
			height: 500px;
		}

		.hub-center {
			width: 110px;
			height: 110px;
		}

		.format-node {
			min-width: 120px;
			padding: 0.5rem 0.75rem;
		}

		.node-label {
			font-size: 0.8rem;
		}
	}
</style>
