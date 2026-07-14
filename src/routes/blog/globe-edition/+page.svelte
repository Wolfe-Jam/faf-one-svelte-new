<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Globe Edition — Where Your Code Runs | FAF</title>
	<meta name="description" content="World-first live 3D edge execution globe. 2.7KB of Zig WASM executing at 300+ Cloudflare locations. Watch it live." />
	<meta property="og:title" content="The Globe Edition — Where Your Code Runs" />
	<meta property="og:description" content="2.7KB of Zig WASM. 300+ edge locations. Live 3D globe showing where your code actually executes." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/globe-edition-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/globe-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Globe Edition
		</div>

		<h1>The Globe Edition</h1>
		<p class="subtitle">Where Your Code Runs</p>
		<div class="meta">
			<time datetime="2026-03-27">March 27, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category engineering">Engineering</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog/globe-edition-hero.png" alt="FAF Globe — live 3D edge execution map showing 17 cities across 4 continents" />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We built something nobody has. A live 3D globe showing exactly where your code
				executes on Cloudflare's edge network. 2.7KB of Zig WASM. 17 cities. 4 continents. Real data.
				<a href="https://mcpaas.live/globe">Watch it live &rarr;</a>
			</p>
		</section>

		<section>
			<h2>The question nobody answers</h2>
			<p>
				There are tools that tell you <em>how many times</em> your code ran. Dashboards that show error rates,
				latency percentiles, and CPU time. Datadog charges $50,000 a year for them.
			</p>
			<p>
				But none of them answer the simplest question: <strong>where does my code actually run?</strong>
			</p>
			<p>
				Not which AWS region. Not which availability zone. <em>Where</em> &mdash; on a spinning 3D globe,
				with real dots, in real time.
			</p>
			<p>We checked. Not Cloudflare. Not Datadog. Not Vercel. Not AWS. Nobody.</p>
			<p>So we built it.</p>
		</section>

		<section>
			<h2>The numbers</h2>
			<p>Less than 24 hours since launch:</p>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">1,143</div>
					<div class="stat-label">Executions</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">17</div>
					<div class="stat-label">Cities</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">4</div>
					<div class="stat-label">Continents</div>
				</div>
			</div>

			<p>Atlanta. Paris. Amsterdam. London. New Delhi. Singapore. Hong Kong. Stockholm. Warsaw. And more lighting up every hour.</p>
		</section>

		<section>
			<h2>How it works</h2>
			<p>
				Every request to <a href="https://mcpaas.live">mcpaas.live</a> runs a 2.7KB Zig WASM binary
				on the nearest Cloudflare edge. That's the FAF scoring kernel &mdash; compiled from Zig,
				targeting WASM MVP, no WASI, no bulk-memory. It scores AI context in sub-millisecond time.
			</p>
			<p>When a request hits, one thing happens in the background:</p>
			<div class="code-block">
				<code>const colo = request.cf?.colo; // 'ATL', 'CDG', 'LHR'</code><br/>
				<code>ctx.waitUntil(</code><br/>
				<code>&nbsp;&nbsp;env.KV.get(`globe:$&#123;colo&#125;`).then(v =></code><br/>
				<code>&nbsp;&nbsp;&nbsp;&nbsp;env.KV.put(`globe:$&#123;colo&#125;`, String(Number(v || 0) + 1))</code><br/>
				<code>&nbsp;&nbsp;)</code><br/>
				<code>);</code>
			</div>
			<p>
				One KV read, one KV write, non-blocking. The request isn't slowed. The colo code
				(IATA airport code &mdash; LAX, LHR, NRT) tells us exactly which Cloudflare data center
				processed the request.
			</p>
		</section>

		<section>
			<h2>Two layers, one story</h2>
			<p>The globe shows two types of dots:</p>
			<ul>
				<li><strong style="color: #00D4D4;">Cyan dots</strong> &mdash; every Cloudflare edge location. 175 mapped. The network. The potential. <em>"We can run here."</em></li>
				<li><strong style="color: #FF6B35;">Orange dots</strong> &mdash; locations with real executions. Sized by count. Growing in real time. <em>"We are running here."</em></li>
			</ul>
			<p>
				Auto-rotates. Responds to mouse and touch. Keyboard controls (&larr; &rarr; Space).
				Auto-refreshes every 60 seconds. On load, randomly picks a cinematic entry &mdash;
				zooming out from the busiest dot, or swooping in from deep space.
			</p>
		</section>

		<section>
			<h2>Why Zig?</h2>
			<p>The WASM binary is 2,702 bytes. For comparison:</p>
			<div class="package-table">
				<div class="pkg-row pkg-header">
					<span>Implementation</span>
					<span>Size</span>
					<span>Target</span>
				</div>
				<div class="pkg-row">
					<span>Zig WASM</span>
					<span>2.7KB</span>
					<span>Edge / Cloudflare Workers</span>
				</div>
				<div class="pkg-row">
					<span>Rust WASM</span>
					<span>211KB</span>
					<span>Browser / faf-wasm-sdk</span>
				</div>
				<div class="pkg-row">
					<span>TypeScript</span>
					<span>~300KB</span>
					<span>Node.js / faf-cli</span>
				</div>
			</div>
			<p>
				Zig gets this small because of <code>comptime</code> evaluation &mdash; most of the work happens
				at compile time. The runtime binary is just the hot path. No allocator in the scoring loop,
				no WASI overhead, WASM MVP target only.
			</p>
			<p>Same spec, three implementations, three orders of magnitude difference.</p>
		</section>

		<section>
			<h2>The stack (costs $0/month)</h2>
			<ul>
				<li><strong>Compute:</strong> Cloudflare Workers (free tier)</li>
				<li><strong>Storage:</strong> Cloudflare KV (free tier)</li>
				<li><strong>Binary:</strong> 2.7KB Zig WASM</li>
				<li><strong>Visualization:</strong> globe.gl from CDN</li>
				<li><strong>Coordinates:</strong> 175 IATA locations in a TypeScript file</li>
				<li><strong>Third-party services:</strong> None</li>
			</ul>
			<p>No database. No Redis. No analytics vendor. The entire infrastructure costs nothing.</p>
		</section>

		<section>
			<h2>The product question</h2>
			<p>
				The observability market is $3.35 billion and growing at 15% annually. Datadog makes $2.45 billion a year.
				Grafana crossed $400 million ARR. Teams spend $50,000+ per month on monitoring &mdash; and their monitoring
				costs now exceed their compute costs.
			</p>
			<p>But none of them show you a globe.</p>
			<p>
				We're asking ourselves: is "see where your code runs" a feature or a product? Right now it's a feature
				of MCPaaS. But the reaction in the first 24 hours suggests it might be more.
			</p>
			<p>
				If you run code on Cloudflare Workers, Vercel Edge Functions, or any edge runtime &mdash;
				wouldn't you want to see this for your own code?
			</p>
		</section>

		<section>
			<h2>The leaderboard</h2>
			<div class="package-table">
				<div class="pkg-row pkg-header">
					<span>City</span>
					<span>Executions</span>
					<span>Status</span>
				</div>
				<div class="pkg-row">
					<span>Atlanta ATL</span>
					<span>1,027</span>
					<span style="color: #FF6B35;">&#9679; Leading</span>
				</div>
				<div class="pkg-row">
					<span>Ashburn IAD</span>
					<span>33</span>
					<span style="color: #FF6B35;">&#9679; Active</span>
				</div>
				<div class="pkg-row">
					<span>Paris CDG</span>
					<span>20</span>
					<span style="color: #FF6B35;">&#9679; Active</span>
				</div>
				<div class="pkg-row">
					<span>Columbus CMH</span>
					<span>16</span>
					<span style="color: #FF6B35;">&#9679; Active</span>
				</div>
				<div class="pkg-row">
					<span>Amsterdam AMS</span>
					<span>13</span>
					<span style="color: #FF6B35;">&#9679; Active</span>
				</div>
				<div class="pkg-row">
					<span>New Delhi DEL</span>
					<span>1</span>
					<span style="color: #00D4D4;">&#9679; Just joined</span>
				</div>
				<div class="pkg-row">
					<span>Stockholm ARN</span>
					<span>2</span>
					<span style="color: #00D4D4;">&#9679; Just joined</span>
				</div>
				<div class="pkg-row">
					<span>Singapore SIN</span>
					<span>2</span>
					<span style="color: #00D4D4;">&#9679; Just joined</span>
				</div>
			</div>
			<p style="text-align: center; color: #888; margin-top: 1rem;">
				<em>C'mon Rio. Sydney. Tokyo. Got no devs?</em>
			</p>
		</section>

		<section>
			<h2>Put your city on the map</h2>
			<p>
				The globe is live. The data is collecting. Every MCP connection, every namepoint claim,
				every soul page visit &mdash; it all shows up as a dot.
			</p>
			<p>
				Visit <a href="https://mcpaas.live/globe">mcpaas.live/globe</a> and watch your city light up.
			</p>
		</section>

		<section class="share-section">
			<a
				href="https://twitter.com/intent/tweet?text=2.7KB%20of%20Zig%20WASM.%20Executing%20at%20300%2B%20edge%20locations.%20Watch%20it%20live%20%F0%9F%8C%8D&url=https%3A%2F%2Fmcpaas.live%2Fglobe"
				target="_blank"
				rel="noopener"
				class="share-btn"
			>
				&#120143; Share on X
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &mdash; The Context Standard for AI 🌍</p>
			<p style="font-size: 0.8rem; color: #666;">
				IANA Registered &middot; application/vnd.faf+yaml &middot; <a href="https://faf.one">faf.one</a>
			</p>
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
		border-bottom: 3px solid #00D4D4;
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
		color: #00D4D4;
		margin: 0.5rem 0 1rem 0;
		font-weight: 600;
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

	.category.engineering {
		background: #4A5568;
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
		border-left: 4px solid #00D4D4;
		color: #e5e5e5;
	}

	.lead a {
		color: #00D4D4;
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

	.code-block {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1.25rem;
		margin: 1.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
		line-height: 1.6;
		overflow-x: auto;
	}

	.code-block code {
		background: none;
		padding: 0;
		color: #00ff88;
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
		color: #00D4D4;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.stat-label {
		font-size: 0.9rem;
		color: #ccc;
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
		color: #00D4D4;
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
		border: 1px solid #333;
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
