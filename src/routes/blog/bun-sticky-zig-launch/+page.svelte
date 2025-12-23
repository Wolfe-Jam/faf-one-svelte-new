<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>bun-sticky-zig: Native FAF Scoring in Bun's Language | FAF</title>
	<meta name="description" content="Introducing bun-sticky-zig - Zig-native FAF CLI. 77KB binary. Zero runtime dependencies. 136 tests. Built in Bun's language." />
	<meta property="og:title" content="bun-sticky-zig: Native FAF Scoring in Bun's Language" />
	<meta property="og:description" content="Zig-native FAF CLI. 77KB binary. Zero runtime dependencies. Sub-millisecond cold start." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<div class="hero-banner">
		<pre><span class="bun-orange">   ▄▄</span>       <span class="white">▄▀▀▀ ▀█▀ █ ▄▀▀ █▄▀ █ █</span>
<span class="bun-orange">  ████</span>      <span class="white">▀▀█▄  █  █ █   █▀▄  █</span>
<span class="bun-orange">██████</span>      <span class="white">▄▄▄▀  █  █ ▀▀▀ █ █  █</span>
<span class="bun-orange">████████</span>
<span class="bun-orange">████████</span>    <span class="bun-dark">█▀▄  █ █ █▀▄</span>   <span class="cyan">▀▀█ █ ▄▀▀</span>
<span class="bun-orange"> ██████</span>     <span class="bun-dark">██▀  █ █ █ █</span>   <span class="cyan">▄ ▀ █ █ ▄ ▄█▄</span>
<span class="bun-orange">   ████</span>     <span class="bun-dark">█▄▀  ▀▄▀ █ █</span>   <span class="cyan">█▄▄ █ ▀▀█  ▀</span>
<span class="bun-orange">     ▀▀</span>

<span class="white">🥐 bun-sticky v1.0.0 [ZIG]</span>
<span class="bun-dark">   Fastest bun under the sum.</span></pre>
	</div>

	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / bun-sticky-zig Launch
		</div>
		<h1>bun-sticky-zig: Native FAF Scoring in Bun's Language</h1>
		<p class="subtitle">77KB. Zero dependencies. Pure Zig.</p>
		<div class="meta">
			<time datetime="2025-12-23">December 23, 2025</time>
			<span class="separator">•</span>
			<span class="category">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>bun-sticky-zig</strong> is now live on GitHub. A Zig-native FAF scoring CLI with zero runtime dependencies, 77KB binary, and 136 championship-grade tests.
			</p>

			<div class="code-block">
				<pre><code>curl -fsSL https://raw.githubusercontent.com/Wolfe-Jam/bun-sticky-zig/main/install.sh | bash
faf score</code></pre>
			</div>
		</section>

		<section class="philosophy">
			<h2>Why Zig?</h2>
			<p>
				<strong>Bun is built on Zig.</strong> This CLI speaks Bun's native language.
			</p>

			<div class="spec-grid">
				<div class="spec-card">
					<h3>77KB</h3>
					<p class="fields">Binary size</p>
				</div>
				<div class="spec-card">
					<h3>0</h3>
					<p class="fields">Dependencies</p>
				</div>
				<div class="spec-card">
					<h3>&lt;1ms</h3>
					<p class="fields">Cold start</p>
				</div>
				<div class="spec-card">
					<h3>136</h3>
					<p class="fields">Tests passing</p>
				</div>
			</div>

			<p>
				No runtime required. No node_modules. No Bun install. Just a single binary.
			</p>
		</section>

		<section class="install">
			<h2>Installation</h2>
			<p>One-liner install (like Bun itself):</p>

			<div class="code-block">
				<pre><code>curl -fsSL https://raw.githubusercontent.com/Wolfe-Jam/bun-sticky-zig/main/install.sh | bash</code></pre>
			</div>

			<p>Or build from source:</p>

			<div class="code-block">
				<pre><code>{`git clone https://github.com/Wolfe-Jam/bun-sticky-zig
cd bun-sticky-zig
zig build -Doptimize=ReleaseFast`}</code></pre>
			</div>
		</section>

		<section class="commands">
			<h2>Commands</h2>

			<div class="code-block">
				<pre><code>{`faf score      # Show FAF score + tier
faf init myapp # Create project.faf
faf sync       # Sync to CLAUDE.md
faf help       # Show commands`}</code></pre>
			</div>
		</section>

		<section class="scoring">
			<h2>Wolfejam Slot-Based Scoring</h2>
			<p>
				Same 21-slot system across the entire FAF ecosystem:
			</p>

			<div class="spec-grid">
				<div class="spec-card">
					<h3>Project</h3>
					<p class="slots">3 slots</p>
				</div>
				<div class="spec-card">
					<h3>Frontend</h3>
					<p class="slots">4 slots</p>
				</div>
				<div class="spec-card">
					<h3>Backend</h3>
					<p class="slots">5 slots</p>
				</div>
				<div class="spec-card">
					<h3>Universal</h3>
					<p class="slots">3 slots</p>
				</div>
				<div class="spec-card">
					<h3>Human</h3>
					<p class="slots">6 slots</p>
				</div>
			</div>

			<p>
				<strong>Type-aware:</strong> CLI projects use 9 slots. Fullstack uses all 21.
			</p>

			<div class="code-block">
				<pre><code>Score = (Filled Slots / Applicable Slots) × 100</code></pre>
			</div>
		</section>

		<section class="testing">
			<h2>136 Championship-Grade Tests</h2>

			<div class="code-block">
				<pre><code>zig build test --summary all
# 136/136 tests passed</code></pre>
			</div>
		</section>

		<section class="zigplus">
			<h2>Want Color?</h2>
			<p>
				<strong>bun-sticky-zig</strong> outputs classic B/W ASCII. <strong>bun-sticky-zig-plus</strong> adds Bun brand colors, bi-directional sync, and JSON output for CI:
			</p>

			<div class="compare-banners">
				<div class="banner-box">
					<div class="banner-label">ZIG (Free)</div>
					<div class="ascii-bw">
						<pre>   ▄▄       ▄▀▀▀ ▀█▀ █ ▄▀▀ █▄▀ █ █
  ████      ▀▀█▄  █  █ █   █▀▄  █
██████      ▄▄▄▀  █  █ ▀▀▀ █ █  █
████████
████████    █▀▄  █ █ █▀▄   ▀▀█ █ ▄▀▀
 ██████     ██▀  █ █ █ █   ▄ ▀ █ █ ▄
   ████     █▄▀  ▀▄▀ █ █   █▄▄ █ ▀▀█
     ▀▀

bun-sticky v1.0.0 [ZIG]</pre>
					</div>
				</div>
				<div class="banner-box">
					<div class="banner-label">ZIG+ (Paid)</div>
					<div class="ascii-color">
						<pre><span class="bun-orange">   ▄▄</span>       <span class="white">▄▀▀▀ ▀█▀ █ ▄▀▀ █▄▀ █ █</span>
<span class="bun-orange">  ████</span>      <span class="white">▀▀█▄  █  █ █   █▀▄  █</span>
<span class="bun-orange">██████</span>      <span class="white">▄▄▄▀  █  █ ▀▀▀ █ █  █</span>
<span class="bun-orange">████████</span>
<span class="bun-orange">████████</span>    <span class="bun-dark">█▀▄  █ █ █▀▄</span>   <span class="cyan">▀▀█ █ ▄▀▀</span>
<span class="bun-orange"> ██████</span>     <span class="bun-dark">██▀  █ █ █ █</span>   <span class="cyan">▄ ▀ █ █ ▄ ▄█▄</span>
<span class="bun-orange">   ████</span>     <span class="bun-dark">█▄▀  ▀▄▀ █ █</span>   <span class="cyan">█▄▄ █ ▀▀█  ▀</span>
<span class="bun-orange">     ▀▀</span>

<span class="white">🥐 bun-sticky v1.1.0 [ZIG+]</span></pre>
					</div>
				</div>
			</div>

			<div class="feature-compare">
				<div class="feature-row">
					<span class="feature-name">Color ASCII</span>
					<span class="feature-free">-</span>
					<span class="feature-paid">☑️</span>
				</div>
				<div class="feature-row">
					<span class="feature-name">Bi-sync</span>
					<span class="feature-free">one-way</span>
					<span class="feature-paid">☑️</span>
				</div>
				<div class="feature-row">
					<span class="feature-name">--json</span>
					<span class="feature-free">-</span>
					<span class="feature-paid">☑️</span>
				</div>
			</div>
		</section>

		<section class="ecosystem">
			<h2>FAF Ecosystem</h2>
			<p>
				bun-sticky-zig joins the FAF family:
			</p>

			<ul>
				<li><strong>faf-cli</strong> - Node.js CLI (16,000+ downloads)</li>
				<li><strong>bun-sticky-faf</strong> - Bun-native CLI (333 tests)</li>
				<li><strong>bun-sticky-zig</strong> - Zig-native CLI (you are here)</li>
				<li><strong>bun-sticky-zig-plus</strong> - Color, bi-sync, --json (paid)</li>
			</ul>

			<p>
				Same format. Same scoring. Different runtimes for different needs.
			</p>
		</section>

		<section class="links-section">
			<h2>Links</h2>
			<div class="links">
				<a href="https://github.com/Wolfe-Jam/bun-sticky-zig" class="link-button github-button" target="_blank">
					GitHub
				</a>
			</div>
		</section>

		<section class="conclusion">
			<p class="tagline">
				<strong>Zero dependencies. Pure Zig. 77KB.</strong>
			</p>
			<p class="brand">
				🏎️⚡ FAF Format Authority<br />
				Built in Bun's language<br />
				🆓 Open Source MIT
			</p>
		</section>
	</article>

	<footer class="post-footer">
		<div class="author">
			<p>Published by <strong>wolfejam</strong></p>
			<p class="tagline-footer">Format Authority for AI Context 🏎️⚡</p>
		</div>
	</footer>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-cyan-dark);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: var(--faf-orange);
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #666;
		margin: 0.5rem 0;
		font-weight: 400;
	}

	.meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.875rem;
		color: #666;
		margin-top: 1rem;
	}

	.separator {
		color: #ccc;
	}

	.category {
		color: var(--faf-cyan-dark);
		font-weight: 500;
	}

	.post-content {
		font-size: 1.125rem;
	}

	.intro {
		margin-bottom: 3rem;
	}

	.lead {
		font-size: 1.25rem;
		color: #333;
		margin: 1rem 0;
	}

	section {
		margin: 2.5rem 0;
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
		color: #1a1a1a;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.25rem;
		color: var(--faf-orange);
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9em;
		color: var(--faf-cyan-dark);
	}

	.hero-banner {
		background: #1a1a1a;
		padding: 2rem;
		border-radius: 12px;
		margin: 0 -1rem 2rem -1rem;
		overflow-x: auto;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 1rem;
		line-height: 1.3;
		text-align: center;
	}

	.hero-banner pre {
		margin: 0;
		display: inline-block;
		text-align: left;
	}

	.hero-banner .bun-orange {
		color: #f8b84e;
	}

	.hero-banner .bun-dark {
		color: #e89b3c;
	}

	.hero-banner .white {
		color: #ffffff;
	}

	.hero-banner .cyan {
		color: #00d4d4;
	}

	.compare-banners {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.banner-box {
		background: #1a1a1a;
		border-radius: 8px;
		overflow: hidden;
	}

	.banner-label {
		background: #333;
		color: #fff;
		padding: 0.5rem 1rem;
		font-weight: 600;
		font-size: 0.875rem;
	}

	.ascii-bw, .ascii-color {
		padding: 1rem;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.65rem;
		line-height: 1.2;
	}

	.ascii-bw {
		color: #888;
	}

	.ascii-bw pre, .ascii-color pre {
		margin: 0;
	}

	.ascii-color .bun-orange {
		color: #f8b84e;
	}

	.ascii-color .bun-dark {
		color: #e89b3c;
	}

	.ascii-color .white {
		color: #ffffff;
	}

	.ascii-color .cyan {
		color: #00d4d4;
	}

	.feature-compare {
		background: #f9f9f9;
		border-radius: 8px;
		padding: 1rem;
		margin: 1.5rem 0;
	}

	.feature-row {
		display: grid;
		grid-template-columns: 1fr auto auto;
		gap: 2rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid #e5e5e5;
	}

	.feature-row:last-child {
		border-bottom: none;
	}

	.feature-name {
		font-weight: 500;
	}

	.feature-free, .feature-paid {
		text-align: center;
		min-width: 60px;
	}

	.feature-free {
		color: #999;
	}

	@media (max-width: 600px) {
		.compare-banners {
			grid-template-columns: 1fr;
		}

		.ascii-bw, .ascii-color {
			font-size: 0.5rem;
		}
	}

	.code-block {
		background: #1a1a1a;
		color: var(--faf-cyan-dark);
		padding: 1.5rem 2rem;
		border-radius: 8px;
		margin: 1rem -1rem;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.code-block code {
		background: none;
		padding: 0;
		color: inherit;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	ul li {
		padding-left: 1.5rem;
		position: relative;
		margin: 0.75rem 0;
	}

	ul li:before {
		content: "▸";
		position: absolute;
		left: 0;
		color: var(--faf-cyan-dark);
		font-weight: bold;
	}

	.spec-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.spec-card {
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.05) 0%, rgba(255, 145, 77, 0.05) 100%);
		padding: 1rem;
		border-radius: 8px;
		border: 1px solid #e5e5e5;
		text-align: center;
	}

	.spec-card .slots {
		font-weight: 600;
		color: var(--faf-cyan-dark);
		margin: 0.25rem 0;
	}

	.spec-card .fields {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
	}

	.links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.link-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.github-button {
		background: #6e5494;
	}

	.github-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(110, 84, 148, 0.3);
	}

	.conclusion {
		margin-top: 3rem;
		text-align: center;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.05) 0%, rgba(255, 145, 77, 0.05) 100%);
		border-radius: 12px;
	}

	.tagline {
		font-size: 1.5rem;
		color: #1a1a1a;
		margin: 1rem 0;
	}

	.brand {
		font-size: 1.125rem;
		color: #666;
		margin: 1.5rem 0;
		line-height: 1.8;
	}

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
	}

	.author {
		text-align: center;
	}

	.author p {
		margin: 0.5rem 0;
	}

	.tagline-footer {
		color: #666;
		font-size: 0.875rem;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.post-content {
			font-size: 1rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.spec-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
