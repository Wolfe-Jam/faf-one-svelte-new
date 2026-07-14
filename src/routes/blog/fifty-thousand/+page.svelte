<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>50,000 Downloads | FAF</title>
	<meta name="description" content="FAF ecosystem crosses 50,000 downloads across npm, PyPI, and crates.io. 16 packages. 3 registries. 3 languages. Zero marketing budget." />
	<meta property="og:title" content="50,000 Downloads — FAF Ecosystem" />
	<meta property="og:description" content="16 packages. 3 registries. 3 languages. Zero marketing budget. The format speaks for itself." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/fifty-thousand-hero.jpeg" />
	<meta name="twitter:image" content="https://faf.one/blog/fifty-thousand-hero.jpeg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 50,000 Downloads
		</div>

		<h1>50,000 Downloads</h1>
		<p class="subtitle">16 packages. 3 registries. 3 languages. One format.</p>
		<div class="meta">
			<time datetime="2026-04-01">April 1, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog/fifty-thousand-hero.jpeg" alt="50,000+ Downloads — 16 packages, 3 registries, one format. DotFaf smiley with npm, PyPI, and crates.io logos." />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF ecosystem just crossed 50,000 downloads.
				npm, PyPI, crates.io &mdash; three registries, three languages, one format.
				No ads. No growth hacks. Just good software finding its people.
			</p>
		</section>

		<section class="celebration">
			<div class="big-number">50,134</div>
			<div class="big-label">downloads across the entire ecosystem</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">41,518</div>
					<div class="stat-label">npm</div>
					<div class="stat-detail">9 packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">8,156</div>
					<div class="stat-label">PyPI</div>
					<div class="stat-detail">2 packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">460</div>
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
					<span>21,930</span>
					<span>The CLI</span>
				</div>
				<div class="pkg-row">
					<span><strong>claude-faf-mcp</strong></span>
					<span>11,098</span>
					<span>Anthropic MCP #2759</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-mcp</strong></span>
					<span>3,353</span>
					<span>Core MCP server</span>
				</div>
				<div class="pkg-row">
					<span><strong>grok-faf-mcp</strong></span>
					<span>1,674</span>
					<span>xAI Grok MCP</span>
				</div>
				<div class="pkg-row">
					<span><strong>bun-sticky</strong></span>
					<span>1,406</span>
					<span>Bun scoring</span>
				</div>
				<div class="pkg-row">
					<span><strong>wjttc</strong></span>
					<span>1,124</span>
					<span>Test certification</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-wasm-sdk</strong></span>
					<span>480</span>
					<span>Browser runtime</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-wasm</strong></span>
					<span>227</span>
					<span>WASM scorer</span>
				</div>
				<div class="pkg-row">
					<span><strong>bun-sticky-faf</strong></span>
					<span>226</span>
					<span>Bun FAF variant</span>
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
					<span>4,841</span>
					<span>Google Gemini MCP</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-python-sdk</strong></span>
					<span>3,315</span>
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
					<span>246</span>
					<span>Rust SDK</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf-radio-rust</strong></span>
					<span>65</span>
					<span>Radio Protocol</span>
				</div>
				<div class="pkg-row">
					<span><strong>rust-faf-mcp</strong></span>
					<span>62</span>
					<span>Rust MCP server</span>
				</div>
				<div class="pkg-row">
					<span><strong>faf</strong></span>
					<span>45</span>
					<span>Meta-crate</span>
				</div>
				<div class="pkg-row">
					<span><strong>mcpaas</strong></span>
					<span>42</span>
					<span>Radio Protocol (parked)</span>
				</div>
			</div>
		</section>

		<section>
			<h2>From 30k to 50k</h2>
			<p>The last milestone post was February 27. Five weeks later:</p>
			<ul>
				<li><strong>faf-cli v6.0</strong> &mdash; Ground-up Bun-native rewrite. 94% smaller. 33 Mk4 slots.</li>
				<li><strong>gemini-faf-mcp</strong> &mdash; Crossed 4,800 on PyPI. Google's AI needs FAF too.</li>
				<li><strong>grok-faf-mcp</strong> &mdash; 161 downloads in 7 days. xAI interest accelerating.</li>
				<li><strong>faf-wasm-sdk v2.0</strong> &mdash; Mk4 Championship Engine. Triangle of Trust.</li>
				<li><strong>Mk4 Parity</strong> &mdash; Same engine, same scores across Rust, TypeScript, and Python.</li>
				<li><strong>4 awesome-lists</strong> &mdash; Accepted into awesome-ai-devtools, awesome-mcp-servers, and more.</li>
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
				<div class="timeline-item active">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<strong>50k</strong> &mdash; Three languages. One format. One count.
					</div>
				</div>
			</div>
		</section>

		<section>
			<h2>One Count</h2>
			<p>We used to report npm only. Not anymore.</p>
			<p>FAF ships in TypeScript, Python, and Rust. It runs on npm, PyPI, and crates.io.
			The downloads are real no matter which registry they come from.</p>
			<p><strong>50k+.</strong> One count. All platforms. Same number everywhere.</p>
		</section>

		<section>
			<h2>What's Next</h2>
			<p>IANA registered. IETF in progress. Chrome Extension live. Academic paper published.
			Four awesome-lists. MCP servers for Claude, Gemini, and Grok.</p>
			<p>The format keeps spreading because the format keeps working.</p>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=.faf%20just%20crossed%2050%2C000%20downloads.%2016%20packages.%203%20registries.%203%20languages.%20One%20format.&url=https://faf.one/blog/fifty-thousand" target="_blank" rel="noopener" class="share-btn">Post on X</a>
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
