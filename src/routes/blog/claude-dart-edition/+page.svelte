<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	// FAF formula: 🏁 Just shipped: <pkg> v<ver> — <Edition> / headline / hook / install
	const shareText = `🏁 Just shipped: claude-faf-mcp v5.10.0 — The Dart Edition

Now reads Dart & Flutter. Knows a Flutter app from a pure-Dart CLI — by composition, not a forked parser.

Zero-Config. One-click .mcpb.

npm i -g claude-faf-mcp`;
	const shareUrl = 'https://faf.one/blog/claude-dart-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Dart Edition - claude-faf-mcp v5.10.0 | FAF</title>
	<meta name="description" content="claude-faf-mcp now reads Dart & Flutter — it knows a Flutter app from a pure-Dart CLI. Detection by composition, not a forked parser. Zero-Config." />
	<meta property="og:title" content="The Dart Edition - claude-faf-mcp v5.10.0" />
	<meta property="og:description" content="claude-faf-mcp now reads Dart & Flutter — it knows a Flutter app from a pure-Dart CLI. Zero-Config." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/claude-dart-edition-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/claude-dart-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Dart Edition
		</div>

		<h1>The Dart Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.10.0</p>
		<p class="subtitle">Reads Dart &amp; Flutter — by composition, not a fork.</p>
		<div class="meta">
			<time datetime="2026-06-17">June 17, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/claude-dart-edition-hero.png" alt="claude-faf-mcp v5.10.0 — The Dart Edition: now reads Dart & Flutter, knows a Flutter app from a pure-Dart CLI. Zero-Config." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp now reads <strong>Dart &amp; Flutter</strong> — it knows a Flutter app from a pure-Dart CLI, and doesn't guess. The detection arrives <em>by composition</em>: no forked <code>pubspec</code> parser, just the single-source classifier from <code>faf-cli</code> 6.13.0. <strong>Zero-Config</strong> — one-click <code>.mcpb</code>, no terminal, no JSON config.
			</p>
		</section>

		<section>
			<h2>It Knows the Difference</h2>

			<p>A Dart project isn't automatically a Flutter project. The old behaviour over-read every <code>pubspec.yaml</code> as Flutter. v5.10.0 reads the content and tells them apart:</p>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>Project</th><th>What FAF sees</th></tr>
					</thead>
					<tbody>
						<tr><td>A Flutter app</td><td>Flutter — with state (Riverpod/Bloc) and routing detected</td></tr>
						<tr><td>A pure-Dart CLI</td><td>Dart — <strong>not</strong> mis-flagged as Flutter</td></tr>
						<tr><td>A Dart MCP server</td><td>surfaces <code>api_type: MCP</code></td></tr>
						<tr><td>A Dart backend</td><td>surfaces the backend framework (Serverpod / Dart Frog / Shelf)</td></tr>
					</tbody>
				</table>
			</div>

			<p>Sourced or honestly empty — never guessed.</p>
		</section>

		<section>
			<h2>By Composition, Not a Fork</h2>

			<p>This is the payoff of <a href="/blog/dart-edition">The Sourced Edition</a>. claude-faf-mcp doesn't carry its own detector — it <strong>composes faf-cli's Turbo-Cat</strong>. So when <code>faf-cli</code> 6.13.0 shipped a content-aware, <code>pubspec</code>-driven Dart classifier, claude-faf-mcp got it <em>by construction</em>. No forked parser to drift. One classifier, one source of truth, every surface.</p>

			<pre><code>{`faf-cli  →  Turbo-Cat (the one classifier)
                 ↑ composed by
claude-faf-mcp   grok-faf-mcp   gemini-faf-mcp`}</code></pre>

			<p>The fix that ships in this release is the same fix everywhere FAF detects a stack — because there's only one place it lives.</p>
		</section>

		<section>
			<h2>Zero-Config</h2>

			<p>Two words, because they're true: one-click <code>.mcpb</code>, no terminal, no JSON config. Double-click, and 35 tools are live in 10 seconds. Your project context is just there — every session.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g claude-faf-mcp', 'install')}>
				<code class="copy-code">npm install -g claude-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>One-click install</h3>
					<p>Download the Desktop Extension.</p>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/latest" class="cta-link">claude-faf-mcp-5.10.0.mcpb</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v5.10.0</strong> &mdash; Released June 17, 2026</li>
				<li><strong>572 tests</strong> &mdash; 26 suites, 0 fail (+5 Dart cases)</li>
				<li><strong>35 MCP tools</strong> &mdash; unchanged (Dart is a composition change)</li>
				<li><strong>100% 🏆</strong> &mdash; Trophy AI-readiness score</li>
				<li><strong>0 vulnerabilities</strong> &mdash; npm audit clean</li>
				<li><strong>faf-cli ^6.13.0</strong> &mdash; the composed classifier</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; FAF defines. MD instructs. AI codes. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
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
		margin-bottom: 2rem;
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
		background: #00B8B8;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
	}

	.hero-image {
		margin: 0 0 2.5rem 0;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
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
		background: var(--faf-surface)5f0;
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

	.api-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.api-table table {
		width: 100%;
		border-collapse: collapse;
	}

	.api-table th, .api-table td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	.api-table th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.api-table td code {
		font-size: 0.85em;
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
		color: #00ff88;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

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
	}
</style>
