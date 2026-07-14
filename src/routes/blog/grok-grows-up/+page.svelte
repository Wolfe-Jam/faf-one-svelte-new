<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>Grok Grows Up — grok-faf-mcp v1.3.0 | FAF</title>
	<meta name="description" content="First MCP for Grok matures. Identity restored, comparison framing scrubbed, server-card enriched, real measurement replaces invented numbers. Four surfaces live, all serving the same artifact." />
	<meta property="og:title" content="Grok Grows Up — grok-faf-mcp v1.3.0" />
	<meta property="og:description" content="First MCP for Grok matures. Identity restored, real measurement (137 µs/score), four surfaces live." />
	<meta property="og:image" content="https://faf.one/blog/grok-grows-up-hero.png" />
	<meta property="og:url" content="https://www.faf.one/blog/grok-grows-up" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/grok-grows-up-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Grok Grows Up
		</div>

		<h1>Grok Grows Up</h1>
		<p class="version-tag">grok-faf-mcp v1.3.0</p>
		<p class="subtitle">A teenager in AI versions. Identity restored, real numbers, five surfaces.</p>
		<div class="meta">
			<time datetime="2026-05-14">May 14, 2026</time>
			<span class="separator">•</span>
			<span class="category first">Grok</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/grok-grows-up-hero.png" alt="Grok Grows Up v1.3.0 — Dorothy Faff at center surrounded by xAI Grok, Vercel, Cloudflare, GitHub, and npm logos, with Trophy in the corner" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> grok-faf-mcp v1.3.0 ships as the hallmark online MCP. Identity restored across the stdio path. Comparison framing scrubbed from the wire and page. Server-card enriched for MCP-client discovery. The "3,800% faster" claim — invented, retired — replaced with measured 137 µs/score, methodology disclosed. Five production surfaces live, all serving the same artifact.
			</p>
		</section>

		<section>
			<h2>The Story</h2>

			<p>Grok asked for MCP on a URL. We built it.</p>

			<p>That was November 2025. <strong>grok-faf-mcp</strong> shipped as the first MCP server specifically built for Grok/xAI. URL-first. Vercel-deployed. Point a Grok integration at <code>/sse</code> and persistent <code>.faf</code> context starts flowing.</p>

			<p>It also became the first FAF MCP online — beating the rest of the family (claude, gemini, cursor, rust) to the web-URL form by months. Two credentials, one repo: <em>first MCP for Grok</em> (vendor-axis) and <em>first FAF MCP online</em> (medium-axis).</p>

			<p>Six months later, v1.3.0 closes the gap between what grok-faf-mcp <em>is</em> and how it presents itself.</p>
		</section>

		<section>
			<h2>Identity Restored</h2>

			<p>The repo was forked from <code>claude-faf-mcp</code> at launch — and never fully renamed. The MCP <code>initialize</code> handshake declared <code>name: 'claude-faf-mcp'</code>. The TypeScript class was <code>ClaudeFafMcpServer</code>. The install instructions told users to <code>npm install -g claude-faf-mcp</code> — pointing them at the wrong package.</p>

			<p>v1.3.0 renames every site. 22+ replacements across <code>src/server.ts</code>, <code>src/index.ts</code>, <code>src/cli.ts</code>, <code>src/handlers/</code>, plus the test harness. The handshake now correctly declares <code>name: 'grok-faf-mcp'</code>. <code>Claude Desktop</code>-specific user-facing strings generalized to <code>your MCP host</code>.</p>

			<p>One reference legitimately stays — <code>p.name === 'claude-faf-mcp'</code> in the sibling-project filter. That's the family cross-reference, not residue.</p>
		</section>

		<section>
			<h2>Comparison Framing, Out</h2>

			<p>Earlier versions carried a tribute that drifted into comparison framing: <em>"Dedicated to @elonmusk and the #1 model on Earth."</em> The phrase appeared in <code>/health</code>, <code>/info</code>, the HTML hero, and the <code>grok_go_fast_af</code> tool description — so every MCP client saw it on every health check.</p>

			<p>v1.3.0 keeps the tribute, drops the comparison. The dedication now reads simply: <em>"Dedicated to @elonmusk."</em> An <code>x-grok-wins: true</code> HTTP header is gone — six wire-level sites scrubbed. The <code>/info.description</code> now carries the credential line: <em>"grok-faf-mcp — the first MCP for Grok. Persistent project context for xAI/Grok."</em></p>
		</section>

		<section>
			<h2>Server-Card Grew Up</h2>

			<p>The <code>/.well-known/mcp/server-card.json</code> endpoint existed but carried only four fields. v1.3.0 enriches it for proper MCP-client discovery:</p>

			<ul>
				<li><strong>protocolVersion</strong>: <code>2025-06-18</code></li>
				<li><strong>capabilities</strong> block: resources + tools, matching what <code>Server()</code> init declares</li>
				<li><strong>instructions</strong> field: carries the credential line for AI clients that read this surface</li>
				<li><strong>serverInfo</strong> expanded: description, homepage, repository</li>
				<li><strong>transport</strong>: <code>http-sse</code> declared explicitly</li>
			</ul>

			<p>The endpoint is now advertised in <code>/info.endpoints</code> so clients can find it. Smithery scans it cleanly. Any future MCP-registry surface that reads this will see the full canonical metadata, not a stub.</p>
		</section>

		<section>
			<h2>Real Numbers, Not Invented Ones</h2>

			<p>The landing page claimed <em>"3,800% faster than v1.1.1"</em>. The number wasn't measured. It was AI-generated copy in a previous session that stuck.</p>

			<p>v1.3.0 ships a reproducible bench harness — <code>bench/score.bench.js</code> — that measures the actual Mk4 WASM scoring kernel path. Three batches × 1,000 iterations, 100 warmup each, full hardware + runtime + per-batch distribution captured as a JSON receipt.</p>

			<div class="terminal-block">
				<code>$ npm run bench:score</code>
			</div>

			<div class="receipts-block">
				<p><strong>Cross-batch p50:</strong> 0.1374 ms — <strong>137 µs / score</strong></p>
				<p><strong>Throughput at p50:</strong> 7,279 ops/sec</p>
				<p><strong>Path measured:</strong> <code>kernel.score_faf(yaml)</code> — direct WASM call, no HTTP, no MCP wire overhead</p>
			</div>

			<p>The about-modal on the landing page now carries this: <em>"137 µs/score · 7,279 ops/sec (Mk4 WASM, p50)"</em> — methodology disclosed, falsifiable on any machine that runs <code>npm run bench:score</code>.</p>

			<p>The stats hero ticked from <code>0.5ms</code> to <code>0.2ms</code> — a conservative undersell of the measured 137 µs. Anyone who checks finds the kernel is faster than the headline claims. That gradient earns advocates.</p>
		</section>

		<section>
			<h2>Five Surfaces, One Artifact</h2>

			<p>v1.3.0 closes the ZEPH-pattern surface play. The first MCP for Grok now lives on five production-facing surfaces, all derived from the same source:</p>

			<ul class="receipts">
				<li><strong>npm</strong> — <code>grok-faf-mcp v1.3.0</code> (the distribution surface — <code>npx grok-faf-mcp</code> works anywhere)</li>
				<li><strong>grok-faf-mcp.vercel.app</strong> — Vercel canonical (MCP wire: <code>/sse</code>, <code>/health</code>, <code>/info</code>)</li>
				<li><strong>wolfe-jam.github.io/grok-faf-mcp/</strong> — GitHub Pages mirror (static)</li>
				<li><strong>faf.one/grok</strong> — discovery page (SvelteKit route)</li>
				<li><strong>grok.faf.one</strong> — Cloudflare Worker canonical (CF edge)</li>
			</ul>

			<p>Plus the registry/release surfaces: MCP Registry, GitHub Release, GitHub repo. Eight production touchpoints in total. One artifact, eight consumers.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<p>Two ways. Hosted — zero install:</p>

			<div class="terminal-block">
				<code>https://grok-faf-mcp.vercel.app/sse</code>
			</div>

			<p>Point your Grok integration at the SSE endpoint. Or run locally with npm:</p>

			<div class="terminal-block">
				<code>npx grok-faf-mcp</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v1.3.0</strong> — Released May 14, 2026</li>
				<li><strong>169/169</strong> tests passing across 6 suites</li>
				<li><strong>🏆 Trophy 100%</strong> — project.faf (15/15 slots)</li>
				<li><strong>137 µs/score · 7,279 ops/sec</strong> — Mk4 WASM kernel, p50, 2019 iMac</li>
				<li><strong>314.5 kB</strong> npm tarball, 197 files</li>
				<li><strong>5 production surfaces</strong> live (matching the ZEPH pattern)</li>
			</ul>
		</section>

		<section>
			<h2>The Receipts</h2>

			<ul class="receipts">
				<li><strong>First MCP for Grok</strong> — origin credential (vendor-axis), falsifiable by publish timestamps</li>
				<li><strong>First FAF MCP online</strong> — origin credential (medium-axis), preceded the rest of the FAF MCP family</li>
				<li><strong>IANA-registered</strong> — <code>application/vnd.faf+yaml</code> + <code>application/vnd.fafm+yaml</code></li>
				<li><strong>MCP Registry</strong> — <code>io.github.Wolfe-Jam/grok-faf-mcp</code> v1.3.0</li>
				<li><strong>FAF Ecosystem #2759</strong> — Five Fingers, the MCP family arc</li>
			</ul>

			<p>FAF defines. Grok consumes. <strong>Receipts compound.</strong></p>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text={encodeURIComponent('@grok 🍊 grok-faf-mcp v1.3.0 ships — the first MCP for Grok grew up. 5 surfaces, real measurement (137 µs/score), identity restored.')}&url=https://faf.one/blog/grok-grows-up" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ <code>v1.3.0</code> — Grok Grows Up. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
		color: #333;
	}

	.hero-image {
		margin: 0 -0.5rem 2.5rem -0.5rem;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-header {
		padding: 2rem 0 2.5rem;
		border-bottom: 1px solid #e8e4dc;
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		color: #888;
		margin-bottom: 1.5rem;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-header h1 {
		font-size: 2.4rem;
		font-weight: 800;
		color: #000;
		margin-bottom: 0.5rem;
		letter-spacing: -0.02em;
	}

	.version-tag {
		font-size: 0.95rem;
		color: #FF6B35;
		font-weight: 600;
		margin-bottom: 0.5rem;
		font-family: 'SF Mono', 'Menlo', monospace;
	}

	.subtitle {
		font-size: 1.15rem;
		color: #555;
		margin-bottom: 1.25rem;
		line-height: 1.5;
	}

	.meta {
		font-size: 0.85rem;
		color: #888;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.separator {
		color: #ccc;
	}

	.category {
		display: inline-block;
		padding: 0.2rem 0.7rem;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 600;
		background: #111;
		color: #fff;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.post-content {
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.intro .lead {
		font-size: 1.15rem;
		line-height: 1.6;
		padding: 1.25rem 1.5rem;
		background: #FFF9F0;
		border-left: 3px solid #FF6B35;
		border-radius: 4px;
		margin-bottom: 2rem;
	}

	.intro .lead strong {
		color: #000;
	}

	.post-content section {
		margin-bottom: 2rem;
	}

	.post-content h2 {
		font-size: 1.45rem;
		font-weight: 700;
		color: #000;
		margin: 2rem 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		margin-bottom: 1rem;
		color: #333;
	}

	.post-content ul {
		padding-left: 1.5rem;
		margin-bottom: 1rem;
	}

	.post-content ul li {
		margin-bottom: 0.5rem;
		color: #333;
	}

	.post-content code {
		font-family: 'SF Mono', 'Menlo', monospace;
		background: #f4ede2;
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		color: #c14a18;
	}

	.terminal-block {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1rem 1.25rem;
		border-radius: 6px;
		margin: 1rem 0 1.25rem;
		overflow-x: auto;
		font-family: 'SF Mono', 'Menlo', monospace;
		font-size: 0.95rem;
	}

	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
	}

	.receipts-block {
		background: #FFF9F0;
		border: 1px solid #FFE4CC;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1rem 0 1.5rem;
	}

	.receipts-block p {
		margin: 0.4rem 0;
		font-size: 0.95rem;
	}

	.receipts {
		list-style: none;
		padding: 0;
	}

	.receipts li {
		padding: 0.65rem 0;
		border-bottom: 1px solid #efe9dd;
	}

	.receipts li:last-child {
		border-bottom: none;
	}

	.receipts strong {
		color: #000;
	}

	.share-section {
		text-align: center;
		padding: 2rem 0 1rem;
		margin-top: 1.5rem;
	}

	.share-btn {
		display: inline-block;
		padding: 0.7rem 1.5rem;
		background: #111;
		color: #fff;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.95rem;
		transition: background 0.2s;
	}

	.share-btn:hover {
		background: #FF6B35;
	}

	.footer-note {
		text-align: center;
		padding: 2.5rem 0 1rem;
		border-top: 1px solid #e8e4dc;
		margin-top: 2.5rem;
		color: #666;
		font-size: 0.95rem;
	}

	@media (max-width: 768px) {
		.post-header h1 {
			font-size: 1.8rem;
		}

		.intro .lead {
			font-size: 1.05rem;
			padding: 1rem 1.15rem;
		}
	}
</style>
