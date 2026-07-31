<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

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

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-wasm-sdk v2.0.0 — The Compiler is the Spec

322KB of WASM. No server. No API calls. The same Rust compiler runs everywhere.`;
	const shareUrl = 'https://faf.one/blog/compiler-is-the-spec';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Compiler is the Spec — faf-wasm-sdk v2.0.0 | FAF</title>
	<meta name="description" content="322KB of WASM. No server. No API calls. The same Rust compiler runs in your browser, at the edge, in Node, in Bun. One source of truth." />
	<meta property="og:title" content="The Compiler is the Spec — faf-wasm-sdk v2.0.0" />
	<meta property="og:description" content="322KB of WASM. No server. No API calls. The same Rust compiler runs everywhere." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Compiler is the Spec
		</div>

		<h1>The Compiler is the Spec</h1>
		<p class="version-tag">faf-wasm-sdk v2.0.0</p>
		<p class="subtitle">322KB. Everywhere.</p>
		<div class="meta">
			<time datetime="2026-03-19">March 19, 2026</time>
			<span class="separator">•</span>
			<span class="category foundation">Foundation</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> One Rust codebase. 322KB of WASM. No server. No API calls. No dependencies. The same code that runs on the CLI runs in your browser tab, in a Cloudflare Worker, in Node, in Bun. One source of truth. No reimplementation. No drift.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>You write a spec. Then you implement it in JavaScript. Then someone implements it in Python. Then Go. Each implementation diverges. Edge cases get interpreted differently. Bugs get fixed in one language but not another. The spec says one thing, three implementations do three slightly different things.</p>

			<p>We refused to do that.</p>
		</section>

		<section>
			<h2>The Solution</h2>

			<p>The FAF compiler is written once, in Rust. It compiles to WASM. That 322KB binary runs identically in every environment — browser, edge, server, CLI. The WASM binary doesn't interpret the spec. It IS the spec.</p>

			<p>Same YAML in. Same binary out. Same score. Every runtime. Every time.</p>

			<div class="insight-box">
				<h3>SQLite embedded the database.</h3>
				<p>We embedded the compiler.</p>
			</div>
		</section>

		<section>
			<h2>Where It Runs</h2>

			<h3>Browser</h3>
			<div class="copy-box" onclick={() => copyText('npm install faf-wasm-sdk', 'install')}>
				<code class="copy-code">npm install faf-wasm-sdk</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<pre><code>{`import init, { compile_fafb, score_faf } from 'faf-wasm-sdk';

await init();
const bytes = compile_fafb(yamlContent);   // Uint8Array
const score = score_faf(yamlContent);      // JSON string`}</code></pre>

			<h3>Edge (Cloudflare Workers, Vercel Edge, Deno Deploy)</h3>
			<pre><code>{`export default {
  async fetch(request) {
    await init();
    const score = score_faf(yamlContent);
    return Response.json(JSON.parse(score));
  }
};`}</code></pre>

			<h3>Node / Bun</h3>
			<p>Same import. Same output. No special build.</p>

			<h3>CLI</h3>
			<p>Via <a href="https://crates.io/crates/faf-rust-sdk">faf-rust-sdk</a> — native Rust, same engine, same results.</p>
		</section>

		<section>
			<h2>8 Exports. 0 Classes.</h2>

			<p>Pure functions. JSON in, JSON out.</p>

			<pre><code>{`sdk_version()          // "2.0.0"
score_faf(yaml)        // Score against 21 base slots
score_faf_enterprise(yaml)  // Score against 33 enterprise slots
validate_faf(yaml)     // true if valid YAML mapping
compile_fafb(yaml)     // YAML → FAFb binary (Uint8Array)
decompile_fafb(bytes)  // FAFb binary → JSON
score_fafb(bytes)      // Score from compiled binary
fafb_info(bytes)       // Metadata only (no content)`}</code></pre>
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

			<p><strong>sdk</strong> is the compiler. <strong>core</strong> wraps it behind an interface. <strong>bun-sticky</strong> embeds core. <strong>builder.faf.one</strong> runs both Rust and Zig in the browser.</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>322KB</strong> — compressed WASM binary</li>
				<li><strong>138/138</strong> — tests passing (unit + stress + integration)</li>
				<li><strong>Sub-2ms</strong> — compile + score performance</li>
				<li><strong>8 exports</strong> — pure functions, no classes</li>
				<li><strong>CRC32 sealed</strong> — deterministic, tamper-evident</li>
				<li><strong>MIT</strong> — free, open, forever</li>
			</ul>
		</section>

		<section>
			<h2>The Links</h2>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install it now.</p>
					<a href="https://www.npmjs.com/package/faf-wasm-sdk" class="cta-link">faf-wasm-sdk</a>
				</div>
				<div class="cta-box">
					<h3>crates.io</h3>
					<p>The Rust SDK underneath.</p>
					<a href="https://crates.io/crates/faf-rust-sdk" class="cta-link">faf-rust-sdk</a>
				</div>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>IANA</h3>
					<p>Registered media type.</p>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" class="cta-link">application/vnd.faf+yaml</a>
				</div>
				<div class="cta-box">
					<h3>Zenodo</h3>
					<p>Academic paper.</p>
					<a href="https://doi.org/10.5281/zenodo.18251362" class="cta-link">DOI 10.5281/zenodo.18251362</a>
				</div>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ The compiler is the spec. 322KB. Everywhere. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
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

	.category.foundation {
		background: #1D8348;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--faf-surface)5f0;
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
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #FF6B35; }
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
		background: var(--faf-surface)5f0;
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
