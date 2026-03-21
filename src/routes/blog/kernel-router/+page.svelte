<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>The Kernel Router - faf-wasm-core v1.0.0 | FAF</title>
	<meta name="description" content="One interface, any WASM kernel, same score. faf-wasm-core ships as the shared engine for every FAF tool." />
	<meta property="og:title" content="The Kernel Router - faf-wasm-core v1.0.0" />
	<meta property="og:description" content="One interface, any WASM kernel, same score. The shared engine for every FAF tool." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Kernel Router
		</div>

		<h1>The Kernel Router</h1>
		<p class="version-tag">faf-wasm-core v1.0.0</p>
		<p class="subtitle">One interface. Any kernel. Same score.</p>
		<div class="meta">
			<time datetime="2026-03-20">March 20, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-wasm-core is the shared WASM engine that every FAF tool embeds. One <code>FafKernel</code> interface. Rust Mk4 today, Zig Cascade tomorrow. No consumer code changes. 322KB, 284&#956;s per score, zero dependencies.
			</p>
		</section>

		<section>
			<h2>Why This Exists</h2>

			<p>FAF has a Rust WASM compiler (<a href="https://github.com/Wolfe-Jam/faf-wasm-sdk">faf-wasm-sdk</a>). It works. But every consumer — bun-sticky, builder.faf.one, and eventually faf-cli — was wiring up the WASM differently. Loading the binary, calling the bindings, parsing the JSON results. Same boilerplate, every time.</p>

			<p>Worse: when Zig Cascade arrives (2.7KB, sub-microsecond scoring), every consumer would need to add a second loading path. Two kernels, two APIs, divergence.</p>

			<div class="insight-box">
				<h3>The Fix</h3>
				<p>One interface. Route to any kernel behind it.</p>
			</div>
		</section>

		<section>
			<h2>The Interface</h2>

			<p>Every kernel implements <code>FafKernel</code>:</p>

			<pre><code>{`import { init } from "faf-wasm-core";

const kernel = await init("rust");  // or "zig" when Cascade ships
const result = kernel.score(yaml);

// result.score = 100
// result.populated = 11
// result.ignored = 10
// result.active = 11`}</code></pre>

			<p>That's it. The consumer doesn't know or care which WASM binary is running underneath. The interface is the contract.</p>

			<h3>Full Kernel Contract</h3>

			<pre><code>{`interface FafKernel {
  score(yaml: string): ScoreResult;
  scoreEnterprise(yaml: string): ScoreResult;
  validate(yaml: string): boolean;
  compile(yaml: string): Uint8Array;
  decompile(bytes: Uint8Array): FafbInfo;
  scoreBinary(bytes: Uint8Array): ScoreBinaryResult;
  binaryInfo(bytes: Uint8Array): FafbInfo;
  version(): string;
  readonly engine: "rust" | "zig";
  readonly engineVersion: string;
}`}</code></pre>
		</section>

		<section>
			<h2>Capabilities</h2>

			<p>Not every kernel supports every method. Rust Mk4 has the full suite. Zig Cascade (when it ships) will start with scoring only. The rest throws <code>KernelCapabilityError</code>.</p>

			<table class="wasm-table">
				<thead>
					<tr>
						<th>Method</th>
						<th>Rust</th>
						<th>Zig (future)</th>
					</tr>
				</thead>
				<tbody>
					<tr><td>score</td><td>Yes</td><td>Yes</td></tr>
					<tr><td>scoreEnterprise</td><td>Yes</td><td>No</td></tr>
					<tr><td>validate</td><td>Yes</td><td>Yes</td></tr>
					<tr><td>compile</td><td>Yes</td><td>No</td></tr>
					<tr><td>decompile</td><td>Yes</td><td>No</td></tr>
					<tr><td>scoreBinary</td><td>Yes</td><td>No</td></tr>
					<tr><td>binaryInfo</td><td>Yes</td><td>No</td></tr>
				</tbody>
			</table>

			<p>Query capabilities at runtime with <code>capabilities()</code>. No surprises.</p>
		</section>

		<section>
			<h2>Who Embeds This</h2>

			<p>faf-wasm-core is infrastructure. It's not a CLI. It's not a service. It's the engine that other tools embed:</p>

			<ul>
				<li><strong><a href="https://npmjs.com/package/bun-sticky">bun-sticky</a></strong> — Bun CLI, embeds core directly (v2.0.0, shipped same day)</li>
				<li><strong><a href="https://builder.faf.one">builder.faf.one</a></strong> — Browser scorer, runs WASM client-side</li>
				<li><strong>faf-cli</strong> — Universal CLI (next consumer, replacing inline scoring)</li>
				<li><strong>mcpaas.live</strong> — Badge service (future, server-side WASM)</li>
			</ul>

			<p>One kernel. Every tool gets the same score. No divergence.</p>
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
						<td>Rust&#8594;WASM compiler (the engine)</td>
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

			<p><strong>sdk</strong> is the compiler. <strong>core</strong> wraps it behind an interface. <strong>bun-sticky</strong> embeds core. <strong>builder.faf.one</strong> runs both Rust and Zig in the browser.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install faf-wasm-core', 'install')}>
				<code class="copy-code">npm install faf-wasm-core</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and interface contract.</p>
					<a href="https://github.com/Wolfe-Jam/faf-wasm-core" class="cta-link">faf-wasm-core</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the kernel.</p>
					<a href="https://www.npmjs.com/package/faf-wasm-core" class="cta-link">faf-wasm-core</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v1.0.0</strong> — Released March 20, 2026</li>
				<li><strong>36/36</strong> — Tests passing</li>
				<li><strong>284&#956;s</strong> — Per score (Mk4, Rust)</li>
				<li><strong>322KB</strong> — Embedded WASM binary</li>
				<li><strong>0 dependencies</strong> — Zero</li>
				<li><strong>100%</strong> — Trophy score</li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=faf-wasm-core%20v1.0.0%20%E2%80%94%20The%20Kernel%20Router.%20One%20interface%2C%20any%20WASM%20kernel%2C%20same%20score.%20322KB%2C%20284%C2%B5s%2C%20zero%20deps.&url=https://faf.one/blog/kernel-router" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑ One interface. Any kernel. Same score. 🏎</p>
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

	.category.launch {
		background: #FF6B35;
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
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

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
