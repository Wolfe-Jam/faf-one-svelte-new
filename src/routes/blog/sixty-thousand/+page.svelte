<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>60,000 Downloads | FAF</title>
	<meta name="description" content="FAF ecosystem crosses 60,000 downloads across npm, PyPI, and crates.io. 16 packages. 27 days from 50k. The biggest monthly jump yet." />
	<meta property="og:title" content="60,000 Downloads — FAF Ecosystem" />
	<meta property="og:description" content="60,000+ downloads. 16 packages. 3 registries. +24k in 30 days — biggest monthly jump yet." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/sixty-thousand-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/sixty-thousand-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 60,000 Downloads
		</div>

		<h1>60,000 Downloads</h1>
		<p class="subtitle">+24k in 30 days. Biggest monthly jump yet.</p>
		<div class="meta">
			<time datetime="2026-04-30">April 30, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog/sixty-thousand-hero.png" alt="FAF Adoption: Cumulative Installs chart, Sep 2025 to April 2026, climbing from 0.25k to 60k+ with +24k in 30 days subtitle." />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF ecosystem just crossed 60,000 downloads.
				27 days after 50k. The Mar &rarr; Apr jump alone is +24k &mdash; the biggest
				calendar month on the chart. Same 16 packages. Same 3 registries. Same zero
				marketing budget. The format keeps spreading because the format keeps working.
			</p>
		</section>

		<section class="celebration">
			<div class="big-number">60,000+</div>
			<div class="big-label">downloads across the entire ecosystem</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">48,365</div>
					<div class="stat-label">npm</div>
					<div class="stat-detail">9 packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">10,233</div>
					<div class="stat-label">PyPI</div>
					<div class="stat-detail">2 packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">589</div>
					<div class="stat-label">crates.io</div>
					<div class="stat-detail">5 crates</div>
				</div>
			</div>
		</section>

		<section>
			<h2>The Packages</h2>

			<h3 class="registry-header">npm</h3>
			<div class="package-table">
				<div class="pkg-row pkg-header">
					<span>Package</span>
					<span>Downloads</span>
					<span>What</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-cli</strong></span>
					<span>25,187</span>
					<span>The CLI</span>
				</div>
				<div class="pkg-row">
					<span><strong>claude-faf-mcp</strong></span>
					<span>12,460</span>
					<span>Anthropic MCP #2759</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-mcp</strong></span>
					<span>3,750</span>
					<span>Core MCP server</span>
				</div>
				<div class="pkg-row">
					<span><strong>grok-faf-mcp</strong></span>
					<span>1,836</span>
					<span>xAI Grok MCP</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-scoring-kernel</strong></span>
					<span>1,723</span>
					<span>Mk4 WASM scorer</span>
				</div>
				<div class="pkg-row">
					<span><strong>bun-sticky</strong></span>
					<span>1,509</span>
					<span>Bun scoring</span>
				</div>
				<div class="pkg-row">
					<span><strong>wjttc</strong></span>
					<span>1,156</span>
					<span>Test certification</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-wasm-sdk</strong></span>
					<span>509</span>
					<span>Browser runtime</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-wasm</strong></span>
					<span>235</span>
					<span>WASM scorer</span>
				</div>
			</div>

			<h3 class="registry-header">PyPI</h3>
			<div class="package-table">
				<div class="pkg-row pkg-header">
					<span>Package</span>
					<span>Downloads</span>
					<span>What</span>
				</div>
				<div class="pkg-row">
					<span><strong>gemini-faf-mcp</strong></span>
					<span>6,019</span>
					<span>Google Gemini MCP</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-python-sdk</strong></span>
					<span>4,214</span>
					<span>Python SDK</span>
				</div>
			</div>

			<h3 class="registry-header">crates.io</h3>
			<div class="package-table">
				<div class="pkg-row pkg-header">
					<span>Package</span>
					<span>Downloads</span>
					<span>What</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-rust-sdk</strong></span>
					<span>337</span>
					<span>Rust SDK</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-radio-rust</strong></span>
					<span>98</span>
					<span>Radio Protocol</span>
				</div>
				<div class="pkg-row">
					<span><strong>rust-faf-mcp</strong></span>
					<span>63</span>
					<span>Rust MCP server</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf</strong></span>
					<span>48</span>
					<span>Meta-crate</span>
				</div>
				<div class="pkg-row">
					<span><strong>mcpaas</strong></span>
					<span>43</span>
					<span>Radio Protocol (parked)</span>
				</div>
			</div>
		</section>

		<section>
			<h2>From 50k to 60k</h2>
			<p>Twenty-seven days. Here's what shipped:</p>
			<ul>
				<li><strong>/slash</strong> &mdash; Token optimization for context engineers. 4.8 KB WASM. Routes, evaluates, aborts. Saved $477 in a day.</li>
				<li><strong>RadioFAF Episodes 12&ndash;15</strong> &mdash; The Token Tax, Nelly Wants to Sing, Nelly Tries to Rap, Grok Unfiltered. Live AI radio, every episode different.</li>
				<li><strong>faf-cli v6.1&ndash;6.3</strong> &mdash; Go/Rust/Python detection, /faf-go reimagined, desktop notifications via OSC 9.</li>
				<li><strong>claude-faf-mcp v5.5</strong> &mdash; Desktop Extension (.mcpb). One-click install. No JSON, no terminal.</li>
				<li><strong>faf-scoring-kernel</strong> &mdash; Mk4 WASM kernel embedded across the ecosystem. The Foundry compounding.</li>
				<li><strong>The Ghostty-Inspired Edition</strong> &mdash; Trophy unlocks pop in macOS Notification Center. 10 lines of code.</li>
			</ul>
		</section>

		<section>
			<h2>The Trajectory</h2>
			<div class="timeline">
				<div class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<strong>10k</strong> &mdash; First milestone. Mostly faf-cli.
					</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<strong>20k</strong> &mdash; MCP servers hit. Multi-package ecosystem.
					</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<strong>30k</strong> &mdash; Three registries. PyPI and crates.io join.
					</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<strong>50k</strong> &mdash; Three languages. One format. One count.
					</div>
				</div>
				<div class="timeline-item active">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<strong>60k</strong> &mdash; +24k in 30 days. Biggest monthly jump yet.
					</div>
				</div>
			</div>
		</section>

		<section>
			<h2>What's Compounding</h2>
			<p><strong>faf-scoring-kernel</strong> &mdash; six weeks old, 1,723 downloads, last calendar week up 70% on the prior. The Mk4 WASM scorer ships embedded across the CLI, the MCPs, and direct integrators. Every consumer of the kernel is another point of leverage on the .faf compiled-output contract.</p>
			<p>The binary is the spec. The score is baked in at compile time. Every install of the kernel widens the floor under everything else.</p>
		</section>

		<section>
			<h2>One Count</h2>
			<p>Same rule as 50k. We don't pick a registry &mdash; we count them all.</p>
			<p>FAF ships in TypeScript, Python, and Rust. It runs on npm, PyPI, and crates.io.
			The downloads are real no matter which registry they come from.</p>
			<p><strong>60k+.</strong> One count. All platforms. Same number everywhere.</p>
		</section>

		<section>
			<h2>What's Next</h2>
			<p>IETF engagement live. RadioFAF live with caller-radio chaos. Slash routing every Grok call. The Foundry kernel embedding wider every week.</p>
			<p>The format keeps spreading because the format keeps working.</p>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=.faf%20just%20crossed%2060%2C000%20downloads.%20%2B24k%20in%2030%20days%20%E2%80%94%20biggest%20monthly%20jump%20yet.&url=https://faf.one/blog/sixty-thousand" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; The format speaks for itself. &#127950;</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #0a0a0a !important;
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
		border-bottom: 3px solid #FFD700;
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
		font-size: 2.5rem;
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
		background: #FFD700;
		color: #000;
		font-weight: 600;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.celebration {
		text-align: center;
		padding: 3rem 0;
		margin: 2rem 0;
	}

	.big-number {
		font-size: 5rem;
		font-weight: 900;
		color: #FFD700;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		letter-spacing: -0.02em;
		line-height: 1;
	}

	.big-label {
		font-size: 1.1rem;
		color: #888;
		margin-top: 0.75rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #1a1a1a;
		border-radius: 8px;
		border-left: 4px solid #FFD700;
		color: #e5e5e5;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #fff;
		border-bottom: 1px solid #333;
		padding-bottom: 0.5rem;
	}

	h3.registry-header {
		font-size: 1rem;
		color: #FFD700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin: 2rem 0 0.75rem 0;
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
		border: 1px solid #333;
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 900;
		color: #FFD700;
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
		margin: 0.75rem 0 1.5rem 0;
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
		color: #FFD700;
	}

	.timeline {
		margin: 2rem 0;
		padding-left: 2rem;
		border-left: 2px solid #333;
	}

	.timeline-item {
		position: relative;
		padding: 0 0 1.5rem 1.5rem;
	}

	.timeline-item:last-child {
		padding-bottom: 0;
	}

	.timeline-marker {
		position: absolute;
		left: -2rem;
		top: 0.35rem;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #555;
		transform: translateX(-5px);
	}

	.timeline-item.active .timeline-marker {
		background: #FFD700;
		box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
	}

	.timeline-item.active .timeline-content strong {
		color: #FFD700;
	}

	.timeline-content {
		color: #aaa;
	}

	.timeline-content strong {
		color: #ccc;
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
		border: 1px solid #333;
		transition: all 0.2s;
	}

	.share-btn:hover {
		border-color: #FFD700;
		color: #fff;
		text-decoration: none;
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
			font-size: 2rem;
		}

		.big-number {
			font-size: 3.5rem;
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
