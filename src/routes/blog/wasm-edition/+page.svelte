<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The WASM Edition - bun-sticky v2.0.0 | FAF</title>
	<meta name="description" content="One interface, any kernel. bun-sticky v2.0.0 embeds the Mk4 WASM engine. TS and WASM produce identical scores. 405 tests across 2 packages." />
	<meta property="og:title" content="The WASM Edition - bun-sticky v2.0.0" />
	<meta property="og:description" content="One interface, any kernel. TS and WASM produce identical scores. 284μs per score." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The WASM Edition
		</div>

		<h1>The WASM Edition</h1>
		<p class="version-tag">bun-sticky v2.0.0 + faf-wasm-core v1.0.0</p>
		<p class="subtitle">One interface. Any kernel. Same score.</p>
		<div class="meta">
			<time datetime="2026-03-20">March 20, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> bun-sticky now embeds the Mk4 WASM engine — the same Rust compiler that powers faf-cli, mcpaas.live, and builder.faf.one. One kernel interface. Rust today, Zig Cascade tomorrow. All engines produce identical scores. 284 microseconds per score.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>Four scoring engines. Same algorithm. Four implementations. Score divergence. A CLI tool scores 100% locally but 43% through WASM because the engines disagree on what counts.</p>

			<p>The root cause: type-aware scoring lived in TypeScript. The WASM engine scored flat — all 21 slots, always. A CLI project could never hit 100% through WASM because frontend slots dragged it down.</p>
		</section>

		<section>
			<h2>The Fix</h2>

			<h3>Data-Driven Slotignore</h3>
			<p>
				The .faf file carries the truth. If your project doesn't use frontend slots, they're marked <code>slotignored</code> in the file itself — not inferred at score time by TypeScript.
			</p>

			<pre><code>{`# CLI project — non-applicable slots marked in the file
stack:
  frontend: slotignored
  css_framework: slotignored
  ui_library: slotignored
  state_management: slotignored
  runtime: Bun
  build: bun build`}</code></pre>

			<p>Every engine reads the same file. Every engine skips the same slots. Every engine gets the same score.</p>

			<div class="insight-box">
				<h3>The WASM doesn't care about types.</h3>
				<p>It counts. Populated, empty, slotignored. Fast.</p>
			</div>

			<h3>faf-wasm-core — The Kernel Router</h3>
			<p>
				<a href="https://github.com/Wolfe-Jam/faf-wasm-core">faf-wasm-core</a> is not a rewrite. It's a router. It wraps <code>faf-wasm-sdk</code> (the published, blogged, "compiler is the spec" WASM) behind a <code>FafKernel</code> interface. When Zig Cascade ships, it slots in — same interface, no consumer changes.
			</p>

			<pre><code>{`import { init } from "faf-wasm-core";

const kernel = await init("rust");  // or "zig" when Cascade ships
const result = kernel.score(yaml);  // Same interface. Any engine.

// result.score = 100
// result.populated = 11
// result.ignored = 10
// result.active = 11`}</code></pre>
		</section>

		<section>
			<h2>bun-sticky v2.0.0</h2>

			<p>Three new commands. Same zero dependencies.</p>

			<div class="terminal-block">
				<code>bunx bun-sticky wasm-score</code>
			</div>
			<p>Score via the Mk4 WASM kernel. Shows populated/active slots, powered-by line.</p>

			<div class="terminal-block">
				<code>bunx bun-sticky bench</code>
			</div>
			<p>Benchmark: 100 scores, average time per score. 284 microseconds on a 2017 iMac.</p>

			<div class="terminal-block">
				<code>bunx bun-sticky badge</code>
			</div>
			<p>Get your mcpaas.live badge markdown. Drop it in your README.</p>

			<h3>init writes slotignored</h3>
			<p>
				<code>bunx bun-sticky init my-cli</code> now writes proper <code>slotignored</code> values for non-applicable slots based on project type. CLI projects get frontend/backend slots marked. Fullstack gets all 21 active. The file carries the scoring truth from birth.
			</p>
		</section>

		<section>
			<h2>Parity Proof</h2>

			<pre><code>{`=== TS ===
  🏆 100%  Trophy
  Filled: 11/11 slots

=== WASM ===
  🏆 100%  Trophy
  Filled: 11/11 slots`}</code></pre>

			<p>Same file. Same count. Same score. Same tier. Two engines, one truth.</p>
		</section>

		<section>
			<h2>WASM Roundup</h2>

			<p>The FAF WASM stack, top to bottom:</p>

			<table class="wasm-table">
				<thead>
					<tr>
						<th>Package</th>
						<th>What</th>
						<th>Size</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><a href="https://github.com/Wolfe-Jam/faf-wasm-sdk">faf-wasm-sdk</a></td>
						<td>Rust→WASM compiler (the engine)</td>
						<td>322KB</td>
					</tr>
					<tr>
						<td><a href="https://npmjs.com/package/faf-wasm-core">faf-wasm-core</a></td>
						<td>Kernel router (wraps sdk, FafKernel interface)</td>
						<td>155KB npm</td>
					</tr>
					<tr>
						<td><a href="https://npmjs.com/package/bun-sticky">bun-sticky</a></td>
						<td>Bun CLI (embeds core)</td>
						<td>185KB npm</td>
					</tr>
					<tr>
						<td><a href="https://github.com/Wolfe-Jam/xai-faf-zig">xai-faf-zig</a></td>
						<td>Zig ghost (scorer only, Cascade future)</td>
						<td>2.7KB</td>
					</tr>
				</tbody>
			</table>

			<p><strong>sdk</strong> is the compiler. <strong>core</strong> wraps it behind an interface. <strong>bun-sticky</strong> embeds core. <strong>builder.faf.one</strong> runs both Rust and Zig WASM in the browser.</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>faf-wasm-core v1.0.0</strong> — 36 tests passing</li>
				<li><strong>bun-sticky v2.0.0</strong> — 369 tests passing</li>
				<li><strong>405 total</strong> — across 2 packages, 0 failures</li>
				<li><strong>284μs</strong> — average WASM score (Mk4, Rust)</li>
				<li><strong>322KB</strong> — embedded WASM binary</li>
				<li><strong>0 dependencies</strong> — still zero</li>
			</ul>
		</section>

		<section>
			<h2>The Links</h2>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>bun-sticky</h3>
					<p>v2.0.0 WASM Edition</p>
					<a href="https://github.com/Wolfe-Jam/bun-sticky-faf/releases/tag/v2.0.0" class="cta-link">GitHub Release</a>
				</div>
				<div class="cta-box">
					<h3>faf-wasm-core</h3>
					<p>v1.0.0 Kernel Router</p>
					<a href="https://github.com/Wolfe-Jam/faf-wasm-core/releases/tag/v1.0.0" class="cta-link">GitHub Release</a>
				</div>
			</div>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=bun-sticky%20v2.0.0%20%E2%80%94%20The%20WASM%20Edition.%20Mk4%20kernel%20embedded.%20All%20engines%20produce%20identical%20scores.%20284%C2%B5s%20per%20score.%20405%20tests.&url=https://faf.one/blog/wasm-edition" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One interface. Any kernel. Same score. 🏎️</p>
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
		background: #FF6B35;
		color: white;
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

	.insight-box {
		background: #f0fff0;
		border: 2px solid #00aa44;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00aa44;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.2rem;
		color: #006622;
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

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
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

	.wasm-table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
		font-size: 0.95rem;
	}

	.wasm-table th {
		background: #1a1a1a;
		color: #00ff88;
		padding: 0.75rem 1rem;
		text-align: left;
		font-weight: 600;
	}

	.wasm-table td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #eee;
	}

	.wasm-table tr:hover td {
		background: #fff5f0;
	}

	.wasm-table a {
		font-weight: 600;
	}

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
