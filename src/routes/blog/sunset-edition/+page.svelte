<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Sunset Edition — faf-cli v5.2.5 | FAF</title>
	<meta name="description" content="The final v5 release. 21 slots, 1,232 tests, 53K lines. Thank you, v5. v6 is here." />
	<meta property="og:title" content="The Sunset Edition — faf-cli v5.2.5" />
	<meta property="og:description" content="The final v5 release. Thank you, v5. v6 is here." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Sunset Edition
		</div>

		<h1>The Sunset Edition</h1>
		<p class="version-tag">faf-cli v5.2.5</p>
		<p class="subtitle">The final v5 release. Thank you for everything.</p>
		<div class="meta">
			<time datetime="2026-03-27">March 27, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli v5.2.5 is the final v5 release. 21-slot Mk3.1 scoring engine. 1,232 tests. Your <code>.faf</code> files are 100% compatible with v6 — no migration needed.
			</p>
		</section>

		<section>
			<h2>What v5 Built</h2>

			<p>v5 was the foundation. It proved that AI needs a format for context, not just prose. It shipped:</p>

			<ul>
				<li><strong>IANA registration</strong> — <code>application/vnd.faf+yaml</code> (October 2025)</li>
				<li><strong>Anthropic MCP #2759</strong> — merged into the official registry</li>
				<li><strong>45,000+ downloads</strong> — across npm, PyPI, and crates.io</li>
				<li><strong>Bi-sync</strong> — <code>.faf</code> ↔ <code>CLAUDE.md</code> in 8ms</li>
				<li><strong>153+ formats</strong> — TURBO-CAT detected them all</li>
				<li><strong>CERN publication</strong> — Zenodo #18251362</li>
			</ul>

			<p>From August 2025 to March 2026 — seven months of shipping. Solo. Self-funded. MIT forever.</p>
		</section>

		<section>
			<h2>What's Next</h2>

			<p>v6 is a ground-up Bun-native rewrite. Same format, same files, everything faster and smaller:</p>

			<ul>
				<li><strong>89% code reduction</strong> — 53K lines → 3.2K lines</li>
				<li><strong>33 Mk4 slots</strong> — up from 21</li>
				<li><strong>WASM scoring kernel</strong> — Rust-compiled, deterministic</li>
				<li><strong>94 KB package</strong> — down from 850 KB</li>
				<li><strong>26 focused commands</strong> — down from 50+</li>
				<li><strong>4 runtime deps</strong> — down from 10+</li>
			</ul>

			<div class="terminal-block">
				<code>npm install -g faf-cli@6</code>
			</div>

			<p>Your <code>.faf</code> files work unchanged. No migration. Just upgrade.</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<div class="comparison">
				<div class="comparison-row">
					<div class="comp-label">Version</div>
					<div class="comp-v5">v5.2.5</div>
					<div class="comp-v6">v6.0</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Source lines</div>
					<div class="comp-v5">53,214</div>
					<div class="comp-v6">3,182</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Package size</div>
					<div class="comp-v5">850 KB</div>
					<div class="comp-v6">94 KB</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Slots</div>
					<div class="comp-v5">21 (Mk3.1)</div>
					<div class="comp-v6">33 (Mk4)</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Runtime deps</div>
					<div class="comp-v5">10+</div>
					<div class="comp-v6">4</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Scoring</div>
					<div class="comp-v5">TypeScript</div>
					<div class="comp-v6">WASM (Rust)</div>
				</div>
			</div>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=faf-cli%20v5.2.5%20%E2%80%94%20The%20Sunset%20Edition.%20Final%20v5%20release.%20v6%20is%20a%20ground-up%20Bun-native%20rewrite.%2089%25%20code%20reduction.%20Same%20format%2C%20everything%20faster.&url=https://faf.one/blog/sunset-edition" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Thank you, v5. You earned your rest. 🏎️</p>
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
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
		color: white;
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

	.comparison {
		background: #f8f8f8;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.comparison-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
	}

	.comparison-row:last-child {
		border-bottom: none;
	}

	.comp-label {
		font-weight: 600;
		color: #666;
	}

	.comp-v5 {
		text-align: center;
		color: #999;
	}

	.comp-v6 {
		text-align: center;
		font-weight: 600;
		color: #00B8B8;
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

		.comparison-row {
			font-size: 0.9rem;
		}
	}
</style>
