<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedIndex = $state(-1);

	function copyCommand(text: string, index: number) {
		navigator.clipboard.writeText(text);
		copiedIndex = index;
		setTimeout(() => { copiedIndex = -1; }, 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: bun-sticky v1.1.0 — The Bunx Edition

The Bun-native FAF scorer. Zero dependencies. 1,100+ organic downloads, zero marketing. Now cross-linked with the full faf-cli toolchain.`;
	const shareUrl = 'https://faf.one/blog/bun-sticky-bunx-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Bunx Edition - bun-sticky v1.1.0 | FAF</title>
	<meta name="description" content="bun-sticky v1.1.0 — Bun-native FAF scorer. Zero dependencies. 1,100+ organic downloads. Now cross-linked with the full faf-cli toolchain." />
	<meta property="og:title" content="Bunx Edition - bun-sticky v1.1.0" />
	<meta property="og:description" content="Bun-native FAF scorer. 1,100+ organic downloads, zero marketing." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Bunx Edition
		</div>
		<h1>Bunx Edition</h1>
		<p class="subtitle">bun-sticky v1.1.0 — the Bun-native FAF scorer</p>
		<div class="meta">
			<time datetime="2026-03-13">March 13, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
			<span class="separator">•</span>
			<span class="version-tag">v1.1.0</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>bun-sticky</code> scores your project's AI-readiness using pure Bun APIs. Zero dependencies. 1,100+ npm downloads with zero marketing. Now cross-linked with the full <code>faf-cli</code> toolchain.
			</p>
		</section>

		<section>
			<h2>Two Packages. Two Languages. One Ecosystem.</h2>

			<p>Bun runs TypeScript. Bun is built on Zig ⚡️. We built both:</p>

			<ul>
				<li><strong><a href="https://npmjs.com/package/bun-sticky">bun-sticky</a></strong> — TypeScript. Pure Bun APIs. What Bun runs.</li>
				<li><strong><a href="https://github.com/Wolfe-Jam/bun-sticky-zig">bun-sticky-zig</a></strong> — Zig-native. 2.7KB WASM. What Bun <em>is</em>.</li>
			</ul>

			<p>TypeScript is what Bun runs. Zig is what Bun is. Both parse <code>.faf</code> files. Both score AI-readiness. Both are zero-dependency.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyCommand('bunx bun-sticky score', 0)}>
				<code class="copy-code">bunx bun-sticky score</code>
				<button class="copy-btn">{copiedIndex === 0 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Scores your <code>project.faf</code> in under 100ms. No install needed.</p>

			<div class="copy-box" onclick={() => copyCommand('bunx bun-sticky init myapp', 1)}>
				<code class="copy-code">bunx bun-sticky init myapp</code>
				<button class="copy-btn">{copiedIndex === 1 ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyCommand('bunx bun-sticky sync', 2)}>
				<code class="copy-code">bunx bun-sticky sync</code>
				<button class="copy-btn">{copiedIndex === 2 ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>1,100 Downloads. Zero Marketing.</h2>

			<p>We dropped <code>bun-sticky</code> on the Bun Discord. That's it. No X campaign. No blog post. No Product Hunt launch.</p>

			<p>1,100+ npm downloads later — all organic. Zig devs don't chat much, but they download.</p>

			<div class="insight-box">
				<h3>Quiet traction is real traction.</h3>
				<p>The Zig community votes with installs, not tweets.</p>
			</div>
		</section>

		<section>
			<h2>What's New in v1.1.0</h2>

			<ul>
				<li><strong>VERSION fix</strong> — was stuck at 1.0.4, now correct</li>
				<li><strong>Cross-link in help</strong> — <code>bunx faf-cli auto</code> in every help output</li>
				<li><strong>14 npm keywords</strong> — <code>bun-native</code>, <code>bunx</code>, <code>iana</code>, <code>project-dna</code>, <code>persistent-context</code></li>
				<li><strong>Homepage → faf.one</strong></li>
				<li><strong>README restructured</strong> — bunx-first, IANA credibility, Zig cross-link</li>
				<li><strong>Two-way cross-ref</strong> — bun-sticky ↔ bun-sticky-zig</li>
			</ul>
		</section>

		<section>
			<h2>Want More?</h2>

			<p><code>bun-sticky</code> scores your project. <a href="/blog/best-context-under-the-bun"><code>faf-cli</code></a> is the full toolchain — 64 commands, 30+ MCP tools, bi-sync, tri-sync.</p>

			<div class="copy-box" onclick={() => copyCommand('bunx faf-cli auto', 3)}>
				<code class="copy-code">bunx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 3 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>0% to 100% AI context in 0.5s. Same toolchain Claude Code ships on.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.1.0</strong> — Released March 13, 2026</li>
				<li><strong>328</strong> — Tests (WJTTC suite)</li>
				<li><strong>1,100+</strong> — npm downloads (organic)</li>
				<li><strong>0</strong> — Dependencies</li>
				<li><strong>&lt;100ms</strong> — Score command</li>
				<li><strong>2</strong> — Languages (TypeScript + Zig)</li>
			</ul>
		</section>

		<section>
			<h2>Related</h2>
			<p><a href="/blog/best-context-under-the-bun">Best Context Under the Bun</a> — faf-cli v5.0.6 Bun alignment.</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Fastest bun under the sum. 🥐</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8 !important;
		color: #333 !important;
	}

	:global(html) {
		background: #FEFCF8 !important;
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

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.version-tag {
		display: inline-block;
		background: #1a2744;
		color: white;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
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

	.insight-box {
		background: #f0fffe;
		border: 2px solid #00D4D4;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00B8B8;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.1rem;
		color: #666;
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

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
