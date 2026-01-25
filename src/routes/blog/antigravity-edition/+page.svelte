<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>AntiGravity Edition - FAF v4.0 | FAF</title>
	<meta name="description" content="FAF v4.0 completes the Gemini story. One project.faf, works everywhere - Claude, Gemini CLI, Antigravity IDE. Zero context drift." />
	<meta property="og:title" content="AntiGravity Edition - FAF v4.0" />
	<meta property="og:description" content="Part 2 of the Gemini story. Universal AI context for Claude, Gemini, and Antigravity IDE." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / AntiGravity Edition
		</div>

		<div class="gemini-badge">
			<span class="badge-text">Part 2: Gemini Ecosystem</span>
		</div>

		<h1>AntiGravity Edition</h1>
		<p class="subtitle">One project.faf. Every AI. Zero drift.</p>
		<div class="meta">
			<time datetime="2026-01-25">January 25, 2026</time>
			<span class="separator">•</span>
			<span class="category">IDE Integration</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> FAF v4.0 adds full Gemini CLI and Antigravity IDE support. Your <code>project.faf</code> now exports to <code>GEMINI.md</code> and the global <code>~/.gemini/GEMINI.md</code>. One source of truth. Three ecosystems. Zero context drift.
			</p>
		</section>

		<!-- Part 1 Recap -->
		<section>
			<h2>The Story So Far</h2>

			<p>In December, we shipped <a href="/blog/google-gemini-edition">Google Gemini Edition</a> — FAF's first integration with Google's Conductor extension for Chrome. That was Part 1.</p>

			<p>Today, we're completing the picture with <strong>AntiGravity</strong>: full Gemini CLI and Antigravity IDE support as part of FAF v4.0 Foundation Layer.</p>

			<div class="recap-box">
				<h3>Part 1: Conductor (Dec 2024)</h3>
				<ul>
					<li>Chrome extension integration</li>
					<li><code>faf conductor export/import</code></li>
					<li>Browser-based context for web development</li>
				</ul>
				<h3>Part 2: AntiGravity (Jan 2026)</h3>
				<ul>
					<li>Gemini CLI integration</li>
					<li>Antigravity IDE support</li>
					<li>Global config at <code>~/.gemini/GEMINI.md</code></li>
					<li>Local project context with <code>GEMINI.md</code></li>
				</ul>
			</div>
		</section>

		<!-- The Problem -->
		<section>
			<h2>The Fragmentation Problem</h2>

			<p>The AI assistant market is fragmenting. Claude, Gemini, ChatGPT, Codex — each with their own context file conventions.</p>

			<p>If you're using both Claude and Gemini, you have two context files to maintain. They drift apart. You explain the same things twice. <strong>Context silos waste tokens and time.</strong></p>

			<div class="problem-visual">
				<div class="silo-row">
					<div class="silo-box claude">CLAUDE.md</div>
					<div class="silo-arrow">≠</div>
					<div class="silo-box gemini">GEMINI.md</div>
					<div class="silo-arrow">≠</div>
					<div class="silo-box conductor">conductor/</div>
				</div>
				<p class="silo-label">Before: Three silos. Three maintenance burdens. Inevitable drift.</p>
			</div>

			<p>Developers shouldn't maintain five different context files. That's not sustainable. That's the opposite of productive.</p>
		</section>

		<!-- The Solution -->
		<section>
			<h2>The Solution</h2>

			<p><strong>One project.faf. Export to whatever format each tool needs.</strong></p>

			<div class="architecture-diagram">
				<div class="arch-source">
					<div class="arch-box faf">project.faf</div>
					<span class="arch-label">Single Source of Truth</span>
				</div>
				<div class="arch-arrows">
					<div class="arch-arrow-row">
						<span class="arrow-line">────────</span>
						<span class="arrow-cmd">faf bi-sync</span>
						<span class="arrow-line">────────→</span>
						<div class="arch-box target claude">CLAUDE.md</div>
					</div>
					<div class="arch-arrow-row">
						<span class="arrow-line">────────</span>
						<span class="arrow-cmd">faf gemini</span>
						<span class="arrow-line">────────→</span>
						<div class="arch-box target gemini">GEMINI.md</div>
					</div>
					<div class="arch-arrow-row">
						<span class="arrow-line">────────</span>
						<span class="arrow-cmd">faf conductor</span>
						<span class="arrow-line">────────→</span>
						<div class="arch-box target conductor">conductor/</div>
					</div>
				</div>
			</div>

			<p class="result"><strong>One format. Three ecosystems. Zero drift.</strong></p>
		</section>

		<!-- What is Antigravity -->
		<section>
			<h2>What is Antigravity?</h2>

			<p>Antigravity is Google's AI-powered IDE built on the Gemini foundation. It uses <code>GEMINI.md</code> for project context, similar to how Claude uses <code>CLAUDE.md</code>.</p>

			<div class="insight-box">
				<h3>Global Context</h3>
				<p>Antigravity reads a global config from <code>~/.gemini/GEMINI.md</code> that applies to <em>every project</em> you open. Your coding style, preferred libraries, naming conventions — defined once, applied everywhere.</p>
			</div>

			<p>Until now, this global config was separate from your project-level context. With FAF v4.0, they're unified.</p>
		</section>

		<!-- The Commands -->
		<section>
			<h2>The Commands</h2>

			<h3>Local Project Context</h3>
			<p>Same project-level sync as Claude:</p>

			<pre><code>{`# Export FAF to Gemini format
faf gemini export       # Creates GEMINI.md from project.faf

# Import from existing Gemini context
faf gemini import       # Reads GEMINI.md, updates project.faf

# Bi-directional sync
faf gemini sync         # Keep both aligned`}</code></pre>

			<h3>Global Antigravity Config</h3>
			<p>The <code>--global</code> flag connects to Antigravity's global context:</p>

			<pre><code>{`# Export FAF to global Gemini config
faf gemini export --global   # Creates ~/.gemini/GEMINI.md

# Import global config
faf gemini import --global   # Reads global config

# Sync with global
faf gemini sync --global     # Bidirectional sync`}</code></pre>

			<p>Your <code>~/.gemini/GEMINI.md</code> now stays in sync with your .faf ecosystem.</p>
		</section>

		<!-- Context Layering -->
		<section>
			<h2>Context Layering</h2>

			<p>FAF + Antigravity enables powerful context stacking:</p>

			<div class="layers-visual">
				<div class="layer global">
					<span class="layer-name">Global</span>
					<span class="layer-desc">~/.gemini/GEMINI.md</span>
					<span class="layer-example">Your universal preferences</span>
				</div>
				<div class="layer-plus">+</div>
				<div class="layer project">
					<span class="layer-name">Project</span>
					<span class="layer-desc">./GEMINI.md</span>
					<span class="layer-example">Project-specific context</span>
				</div>
				<div class="layer-equals">=</div>
				<div class="layer merged">
					<span class="layer-name">Merged</span>
					<span class="layer-desc">Antigravity Runtime</span>
					<span class="layer-example">Project overrides global</span>
				</div>
			</div>

			<p>Antigravity merges both layers. Project-specific context overrides global defaults. You maintain one master preferences file, with per-project overrides when needed.</p>
		</section>

		<!-- Real Example -->
		<section>
			<h2>Real Example</h2>

			<p>Start with your personal preferences:</p>

			<pre><code>{`# ~/.gemini/GEMINI.md (via faf gemini export --global)

# Personal Coding Standards

## Style
- TypeScript strict mode always
- Prefer composition over inheritance
- Tests live next to source files

## Naming
- camelCase for functions
- PascalCase for types
- SCREAMING_SNAKE for constants

## Philosophy
- Ship small, ship often
- Every PR under 400 lines
- Comments explain "why", not "what"`}</code></pre>

			<p>Now every project in Antigravity inherits these defaults. Project-specific <code>.faf</code> files override when needed.</p>
		</section>

		<!-- The Full Stack -->
		<section>
			<h2>The Full Stack</h2>

			<p>v4.0 Foundation Layer completes the integration matrix:</p>

			<table class="platform-table">
				<thead>
					<tr>
						<th>Tool</th>
						<th>Scope</th>
						<th>Location</th>
						<th>Command</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Claude Code</strong></td>
						<td>Project</td>
						<td><code>./CLAUDE.md</code></td>
						<td><code>faf bi-sync</code></td>
					</tr>
					<tr class="highlight-row">
						<td><strong>Gemini CLI</strong></td>
						<td>Project</td>
						<td><code>./GEMINI.md</code></td>
						<td><code>faf gemini</code></td>
					</tr>
					<tr class="highlight-row">
						<td><strong>Antigravity IDE</strong></td>
						<td>Global</td>
						<td><code>~/.gemini/GEMINI.md</code></td>
						<td><code>faf gemini --global</code></td>
					</tr>
					<tr>
						<td><strong>Conductor</strong></td>
						<td>Extension</td>
						<td><code>conductor/</code></td>
						<td><code>faf conductor</code></td>
					</tr>
				</tbody>
			</table>

			<p>Project, global, and extension — all managed through one <code>project.faf</code> source of truth.</p>
		</section>

		<!-- Bi-Sync Speed -->
		<section>
			<h2>Bi-Sync Speed</h2>

			<p>All sync operations complete in under 10 milliseconds:</p>

			<div class="bisync-visual">
				<div class="bisync-row">
					<code>project.faf</code>
					<span class="bisync-arrow">←── 8ms ──→</span>
					<code>CLAUDE.md</code>
				</div>
				<div class="bisync-row">
					<code>project.faf</code>
					<span class="bisync-arrow">←── 8ms ──→</span>
					<code>GEMINI.md</code>
				</div>
				<div class="bisync-row">
					<code>project.faf</code>
					<span class="bisync-arrow">←── 8ms ──→</span>
					<code>~/.gemini/GEMINI.md</code>
				</div>
			</div>

			<p>Fast enough to run on every save. Context stays aligned automatically.</p>
		</section>

		<!-- The Vision -->
		<section>
			<h2>The Vision</h2>

			<p>We started FAF because AI context shouldn't be ephemeral.</p>

			<p>AntiGravity extends that vision: <strong>AI context shouldn't be siloed either.</strong></p>

			<p>Whether you use Claude, Gemini, ChatGPT, or all three — your project DNA stays in one place. <code>project.faf</code> is the single source of truth. Everything else is a projection.</p>

			<div class="workflow-box">
				<h3>The Unified Workflow</h3>
				<pre><code>{`# Your workflow
faf auto               # Create project.faf once
faf bi-sync            # Sync to CLAUDE.md
faf gemini             # Sync to GEMINI.md
faf conductor          # Sync to conductor/

# Done. All tools have context. No drift.`}</code></pre>
			</div>
		</section>

		<!-- Get Started -->
		<section>
			<h2>Get Started</h2>

			<div class="terminal-block">
				<code>npm install -g faf-cli@4.0.0</code>
			</div>

			<p>Or with Homebrew:</p>

			<div class="terminal-block">
				<code>brew upgrade faf-cli</code>
			</div>

			<p>Then set up your context:</p>

			<pre><code>{`# Create project.faf if you don't have one
faf auto

# Export to Gemini
faf gemini export

# Set up global Antigravity context
faf gemini export --global

# Verify
cat ~/.gemini/GEMINI.md`}</code></pre>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>Full v4.0</h3>
					<p>See everything in Foundation Layer.</p>
					<a href="/v4" class="cta-link">v4.0 Page</a>
				</div>
				<div class="cta-box">
					<h3>Part 1</h3>
					<p>Read about Conductor integration.</p>
					<a href="/blog/google-gemini-edition" class="cta-link">Gemini Edition</a>
				</div>
			</div>
		</section>

		<!-- Numbers -->
		<section class="numbers">
			<h2>The Numbers</h2>

			<div class="number-grid">
				<div class="number-item">
					<span class="number">4.0</span>
					<span class="label">Foundation Layer</span>
				</div>
				<div class="number-item">
					<span class="number">21k+</span>
					<span class="label">Downloads</span>
				</div>
				<div class="number-item">
					<span class="number">&lt;10ms</span>
					<span class="label">Sync Speed</span>
				</div>
				<div class="number-item">
					<span class="number">3</span>
					<span class="label">Ecosystems</span>
				</div>
			</div>
		</section>

		<section class="footer-note">
			<p>
				<strong>.faf</strong> — The Persistent AI Context Standard<br />
				One format. Every AI. Zero drift.
			</p>
		</section>
	</article>
</div>

<style>
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
		border-bottom: 3px solid transparent;
		border-image: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%) 1;
		padding-bottom: 2rem;
		text-align: center;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #667eea;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.gemini-badge {
		display: inline-block;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
		padding: 0.5rem 1.25rem;
		border-radius: 20px;
		margin-bottom: 1.5rem;
	}

	.gemini-badge .badge-text {
		color: #fff;
		font-weight: 600;
		font-size: 0.9rem;
		letter-spacing: 0.02em;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.3rem;
		color: #555;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.post-content {
		font-size: 1.1rem;
	}

	section {
		margin-bottom: 3rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
		border-radius: 8px;
		border-left: 4px solid #667eea;
	}

	h2 {
		font-size: 1.8rem;
		margin: 0 0 1.5rem 0;
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

	ul {
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

	a {
		color: #667eea;
	}

	a:hover {
		text-decoration: none;
	}

	/* Recap Box */
	.recap-box {
		background: #fafafa;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 1.5rem 0;
		border-left: 4px solid #667eea;
	}

	.recap-box h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
		color: #667eea;
	}

	.recap-box h3:not(:first-child) {
		margin-top: 1.25rem;
	}

	.recap-box ul {
		margin: 0.5rem 0 0 1.5rem;
	}

	.recap-box li {
		margin-bottom: 0.25rem;
		color: #555;
	}

	/* Problem Visual */
	.problem-visual {
		background: linear-gradient(135deg, #1a0a0a 0%, #2a1515 100%);
		border-radius: 12px;
		padding: 2rem;
		margin: 1.5rem 0;
		text-align: center;
	}

	.silo-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.silo-box {
		padding: 0.75rem 1.25rem;
		border-radius: 8px;
		font-family: 'SF Mono', monospace;
		font-weight: 600;
		font-size: 0.9rem;
		color: #fff;
	}

	.silo-box.claude { background: #FF6B35; }
	.silo-box.gemini { background: #667eea; }
	.silo-box.conductor { background: #764ba2; }

	.silo-arrow {
		color: #ff6666;
		font-size: 1.5rem;
		font-weight: 700;
	}

	.silo-label {
		color: #aaa;
		font-size: 0.9rem;
		margin: 1rem 0 0 0;
	}

	/* Architecture Diagram */
	.architecture-diagram {
		background: #f8f8f8;
		border-radius: 12px;
		padding: 2rem;
		margin: 1.5rem 0;
	}

	.arch-source {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.arch-box {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-family: 'SF Mono', monospace;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.arch-box.faf {
		background: linear-gradient(135deg, #FF6B35 0%, #FF8555 100%);
		color: white;
		padding: 1rem 2rem;
		font-size: 1.1rem;
	}

	.arch-label {
		display: block;
		margin-top: 0.5rem;
		font-size: 0.85rem;
		color: #666;
	}

	.arch-arrows {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.arch-arrow-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.arrow-line {
		color: #ccc;
		font-family: 'SF Mono', monospace;
	}

	.arrow-cmd {
		color: #667eea;
		font-family: 'SF Mono', monospace;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.arch-box.target {
		font-size: 0.85rem;
		padding: 0.5rem 1rem;
	}

	.arch-box.target.claude { background: #FF6B35; color: white; }
	.arch-box.target.gemini { background: #667eea; color: white; }
	.arch-box.target.conductor { background: #764ba2; color: white; }

	.result {
		text-align: center;
		font-size: 1.2rem;
		color: #00D4D4;
	}

	/* Insight Box */
	.insight-box {
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 50%, rgba(240, 147, 251, 0.1) 100%);
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) 1;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.insight-box h3 {
		background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 0.75rem 0;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.05rem;
	}

	/* Layers Visual */
	.layers-visual {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 1.5rem 0;
		flex-wrap: wrap;
	}

	.layer {
		background: #f8f8f8;
		border-radius: 8px;
		padding: 1rem;
		text-align: center;
		min-width: 140px;
	}

	.layer.global { border: 2px solid #667eea; }
	.layer.project { border: 2px solid #764ba2; }
	.layer.merged { border: 2px solid #00D4D4; background: #f0ffff; }

	.layer-name {
		display: block;
		font-weight: 700;
		margin-bottom: 0.25rem;
	}

	.layer.global .layer-name { color: #667eea; }
	.layer.project .layer-name { color: #764ba2; }
	.layer.merged .layer-name { color: #00D4D4; }

	.layer-desc {
		display: block;
		font-family: 'SF Mono', monospace;
		font-size: 0.75rem;
		color: #666;
		margin-bottom: 0.5rem;
	}

	.layer-example {
		display: block;
		font-size: 0.8rem;
		color: #888;
		font-style: italic;
	}

	.layer-plus, .layer-equals {
		font-size: 1.5rem;
		font-weight: 700;
		color: #ccc;
	}

	/* Platform Table */
	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
	}

	th, td {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.platform-table .highlight-row {
		background: linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%);
	}

	/* Bi-sync Visual */
	.bisync-visual {
		background: #f8f8f8;
		padding: 1.5rem;
		border-radius: 8px;
		margin: 1rem 0;
	}

	.bisync-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.5rem 0;
		font-family: 'SF Mono', monospace;
	}

	.bisync-arrow {
		color: var(--faf-orange, #FF6B35);
		font-weight: 600;
	}

	/* Workflow Box */
	.workflow-box {
		background: #1a1a1a;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 1.5rem 0;
	}

	.workflow-box h3 {
		color: #00D4D4;
		margin: 0 0 1rem 0;
	}

	.workflow-box pre {
		margin: 0;
		background: none;
		padding: 0;
	}

	/* Terminal Block */
	.terminal-block {
		background: #1a1a1a;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
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

	/* CTA Grid */
	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #667eea;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #667eea;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #667eea;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	/* Numbers */
	.numbers {
		background: #fafafa;
		padding: 2rem;
		border-radius: 12px;
	}

	.numbers h2 {
		text-align: center;
		border-bottom: none;
	}

	.number-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		text-align: center;
	}

	.number-item {
		padding: 1rem;
	}

	.number {
		display: block;
		font-size: 2rem;
		font-weight: 800;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.label {
		display: block;
		font-size: 0.85rem;
		color: #666;
		margin-top: 0.25rem;
	}

	/* Footer */
	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 1rem;
		color: #333;
		text-align: center;
	}

	.footer-note p {
		margin: 0;
		line-height: 1.6;
	}

	/* Responsive */
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

		.silo-row {
			flex-direction: column;
		}

		.silo-arrow {
			transform: rotate(90deg);
		}

		.arch-arrow-row {
			flex-direction: column;
		}

		.layers-visual {
			flex-direction: column;
		}

		.layer-plus, .layer-equals {
			transform: rotate(90deg);
		}

		.number-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
