<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — ship line, cold open, receipts, install CTA, feedback CTA.
	const shareText = `🏁 Just shipped: claude-faf-mcp v5.21.0 — The Compose Edition

Six language Editions, inherited — not reinvented.

Pin faf-cli ^7.7.0 and Core faf_auto composes the CLI's rail by construction: Dart · Go · C# · JVM · Ruby · Swift.
faf_enhance retired — no more silent DNA clobber.

12 Core tools · 592 tests · 0 forked detectors

npm install -g claude-faf-mcp@5.21.0

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/compose-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Compose Edition - claude-faf-mcp v5.21.0 | FAF</title>
	<meta
		name="description"
		content="claude-faf-mcp composes faf-cli's language rail instead of reimplementing it. Pin faf-cli ^7.7.0 and Core faf_auto inherits Dart, Go, C#, JVM, Ruby, and Swift — by construction, not a forked detector."
	/>
	<meta property="og:title" content="The Compose Edition - claude-faf-mcp v5.21.0" />
	<meta
		property="og:description"
		content="Six language Editions, inherited — not reinvented. Pin faf-cli ^7.7.0 and Core faf_auto composes the CLI's rail by construction."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/compose-edition-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/compose-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Compose Edition
		</div>

		<h1>The Compose Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.21.0</p>
		<p class="subtitle">Six language Editions, inherited — not reinvented.</p>
		<div class="meta">
			<time datetime="2026-08-11">August 11, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/compose-edition-hero.png" alt="The Compose Edition — claude-faf-mcp v5.21.0 composes faf-cli's language detection rail" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp now <em>composes</em> faf-cli's language-detection rail instead of reimplementing it. Pin faf-cli <code>^7.7.0</code> and Core <code>faf_auto</code> inherits every language Edition already shipped on the CLI &mdash; Dart, Go, C#, JVM, Ruby, Swift &mdash; <strong>by construction</strong>, no forked detectors.
			</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>Composition, not reimplementation</h3>

			<p>Six language Editions shipped on faf-cli over the past few weeks &mdash; each one teaching the CLI to tell a real app from a bare library, a backend from a package manifest. claude-faf-mcp doesn't reimplement any of that detection logic. It <strong>composes</strong> it: bump the pinned faf-cli floor, and <code>faf_auto</code> / <code>faf_formats</code> inherit the whole rail.</p>

			<div class="copy-box" onclick={() => copyText('Compose faf-cli ^7.7.0 (was ^7.2.0)', 'pin')}>
				<code class="copy-code">Compose faf-cli ^7.7.0 (was ^7.2.0)</code>
				<button class="copy-btn">{copiedId === 'pin' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>What that one version bump carries in:</p>

			<ul>
				<li><strong>7.2.1</strong> &mdash; Dart/Flutter knowledge v2</li>
				<li><strong>7.3</strong> &mdash; Go</li>
				<li><strong>7.4</strong> &mdash; C#</li>
				<li><strong>7.5 / 7.5.1</strong> &mdash; JVM</li>
				<li><strong>7.6</strong> &mdash; Ruby</li>
				<li><strong>7.7</strong> &mdash; Swift</li>
			</ul>

			<p>Every kill line the CLI already learned applies here too &mdash; <code>go.mod</code> alone doesn't mean backend, <code>Package.swift</code> alone doesn't mean app. claude-faf-mcp doesn't get its own opinion about that; it inherits the CLI's. One rail, one place it can go wrong, one place it gets fixed.</p>

			<h3>faf_enhance retired</h3>

			<p>AI-rewriting an already-filled <code>project.faf</code> was a silent DNA clobber &mdash; a tool that could overwrite what a human had confirmed, without telling you. It's gone. Stack detection and human-confirmed fields stay exactly where they belong: <code>faf_auto</code> for the facts, <code>faf_go</code> for the parts only you can answer. Core tier is now <strong>12 tools</strong>.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g claude-faf-mcp@5.21.0', 'install')}>
				<code class="copy-code">npm install -g <NpmPkg name="claude-faf-mcp" version="5.21.0" /></code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Already on claude-faf-mcp? Bumping to 5.21.0 is enough &mdash; the language rail arrives with the pin, nothing else to configure.</p>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
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
				<li><strong>v5.21.0</strong> &mdash; Released August 11, 2026</li>
				<li><strong>12 Core tools</strong> &mdash; 34 total via <code>FAF_TOOLS=all</code></li>
				<li><strong>592 tests</strong> &mdash; 0 fail</li>
				<li><strong>~20,000</strong> &mdash; npm downloads for claude-faf-mcp to date</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; Composed, not reinvented. &#127950;&#65039;</p>
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
		margin-bottom: 2rem;
		border-bottom: 3px solid #000000;
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
		background: #00B8B8;
	}

	.hero-image {
		margin: 0 -1rem 2rem -1rem;
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
		background: #f8f8f8;
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
		color: #1a1a1a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
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
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.25);
		color: #fff;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 255, 255, 0.2); border-color: #fff; }
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
