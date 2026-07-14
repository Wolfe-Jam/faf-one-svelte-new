<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🎉 30,000 Downloads — the FAF ecosystem just crossed 30k.

9 npm packages, 2 PyPI, 1 crate. 3 registries. Zero marketing budget. From 20k to 30k in 2026.`;
	const shareUrl = 'https://faf.one/blog/thirty-thousand';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>30,000 Downloads | FAF</title>
	<meta name="description" content="FAF ecosystem crosses 30,000 downloads. 9 npm packages, 2 PyPI, 1 crate. 3 registries. Zero marketing budget. From 20k to 30k in 2026." />
	<meta property="og:title" content="30,000 Downloads — FAF Ecosystem" />
	<meta property="og:description" content="9 npm packages. 3 registries. Zero marketing budget. From 20k to 30k in 2026." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 30,000 Downloads
		</div>

		<h1>30,000 Downloads</h1>
		<p class="subtitle">9 packages. 3 registries. Zero marketing budget.</p>
		<div class="meta">
			<time datetime="2026-02-27">February 27, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog-assets/30k-downloads.png" alt="30,000+ Downloads — AI-Context Champion 2025/26 Season" />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF ecosystem crossed 30,000 npm downloads today.
				From 20k to 30k in 2026. No ads, no paid promotion. Just the work.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">30,435</div>
					<div class="stat-label">npm downloads</div>
					<div class="stat-detail">9 packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">3,073</div>
					<div class="stat-label">PyPI downloads</div>
					<div class="stat-detail">2 packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">61</div>
					<div class="stat-label">crates.io</div>
					<div class="stat-detail">1 crate</div>
				</div>
			</div>

			<p style="text-align: center; color: #999; margin-top: 1rem; font-size: 0.9rem;">
				Grand total: <strong>33,569</strong> across 3 registries. We report <strong>30k+</strong> (npm only).
			</p>
		</section>

		<section>
			<h2>The Packages</h2>

			<div class="package-table">
				<div class="pkg-row pkg-header">
					<span>Package</span>
					<span>Downloads</span>
					<span>What</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-cli</strong></span>
					<span>14,148</span>
					<span>The CLI</span>
				</div>
				<div class="pkg-row">
					<span><strong>claude-faf-mcp</strong></span>
					<span>9,868</span>
					<span>Anthropic MCP #2759</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-mcp</strong></span>
					<span>2,849</span>
					<span>Core MCP server</span>
				</div>
				<div class="pkg-row">
					<span><strong>bun-sticky</strong></span>
					<span>980</span>
					<span>Bun scoring</span>
				</div>
				<div class="pkg-row">
					<span><strong>wjttc</strong></span>
					<span>934</span>
					<span>Test certification</span>
				</div>
				<div class="pkg-row">
					<span><strong>grok-faf-mcp</strong></span>
					<span>887</span>
					<span>xAI Grok MCP</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-wasm-sdk</strong></span>
					<span>328</span>
					<span>Browser runtime</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-wasm</strong></span>
					<span>223</span>
					<span>WASM scorer</span>
				</div>
			</div>

			<p>Plus <strong>faf-python-sdk</strong> (1,936) and <strong>gemini-faf-mcp</strong> (1,137) on PyPI.
			<strong>faf-rust-sdk</strong> (61) on crates.io.</p>
		</section>

		<section>
			<h2>What Changed in 6 Weeks</h2>
			<ul>
				<li><strong>faf-cli v4.5.0</strong> &mdash; AGENTS.md + .cursorrules interop. Define once, generate all four AI formats.</li>
				<li><strong>claude-faf-mcp v4.5.0</strong> &mdash; 61 MCP tools. 7 bundled parsers. Zero CLI dependency.</li>
				<li><strong>faf-wasm-sdk</strong> &mdash; FAF in the browser. People are actually running it client-side.</li>
				<li><strong>RadioFAF</strong> &mdash; radiofaf.com launched. The consumer face of the ecosystem.</li>
				<li><strong>"Beyond the Bloat"</strong> &mdash; ArXiv proves prose context hurts. FAF provides the structured fix.</li>
				<li><strong>wjttc v1.3.0</strong> &mdash; Self-hosting. Championship testing for everyone.</li>
			</ul>
		</section>

		<section>
			<h2>Where They Come From</h2>
			<p>GitHub traffic shows people finding FAF from:</p>
			<ul>
				<li><strong>github.com</strong> and <strong>npmjs.com</strong> &mdash; the obvious ones</li>
				<li><strong>registry.modelcontextprotocol.io</strong> &mdash; the official MCP registry</li>
				<li><strong>Google Search</strong> &mdash; organic discovery</li>
				<li><strong>reddit.com</strong> and <strong>t.co</strong> (X/Twitter) &mdash; community sharing</li>
				<li><strong>perplexity.ai</strong> &mdash; AI-powered search recommending FAF</li>
				<li><strong>mcpserverfinder.com</strong> &mdash; MCP directory</li>
			</ul>
			<p>413 unique cloners for faf-cli alone in the last 14 days. Real people, building real things.</p>
		</section>

		<section>
			<h2>The Full Ecosystem</h2>
			<p>9 npm packages. 2 PyPI packages. 1 Rust crate. 3 registries.</p>
			<p>IANA-registered. Anthropic MCP #2759.
			Chrome Extension approved. Academic paper on Zenodo with DOI.</p>
			<p>No VC. No marketing team. No growth hacks. Just ship good software and the numbers follow.</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; The format speaks for itself. &#127950;</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-locked-dark) !important;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #e5e5e5;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #999;
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
		color: #fff;
		line-height: 1.3;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #aaa;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #999;
	}

	.separator {
		color: #555;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.milestone {
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
		background: #1a1a1a;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		color: #e5e5e5;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #fff;
		border-bottom: 1px solid #333;
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
		background: #2a2a2a;
		color: #00D4D4;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.stat-card {
		background: #1a1a1a;
		color: white;
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 900;
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.stat-label {
		font-size: 0.9rem;
		color: #ccc;
		margin-top: 0.25rem;
	}

	.stat-detail {
		font-size: 0.8rem;
		color: #888;
		margin-top: 0.25rem;
	}

	.package-table {
		margin: 1.5rem 0;
		border: 1px solid #333;
		border-radius: 8px;
		overflow: hidden;
	}

	.pkg-row {
		display: grid;
		grid-template-columns: 1fr 120px 1fr;
		gap: 0 1rem;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #333;
		font-size: 0.95rem;
		color: #ccc;
	}

	.pkg-row:last-child {
		border-bottom: none;
	}

	.pkg-header {
		background: #1a1a1a;
		color: #999;
		font-weight: 600;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.pkg-row span:nth-child(2) {
		text-align: right;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
		color: #FF6B35;
	}

	.hero-image {
		margin: 0 0 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
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
		border-top: 1px solid #333;
		font-size: 0.95rem;
		color: #999;
		text-align: center;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.pkg-row {
			grid-template-columns: 1fr 80px 1fr;
			font-size: 0.85rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
