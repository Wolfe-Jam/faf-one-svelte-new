<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: grok-faf-mcp v1.6.0 — The ZEPH Edition

ZEPH fast path for re-grounding — microsecond-cheap scoring, flag-gated. Same number, just faster.`;
	const shareUrl = 'https://faf.one/blog/zeph-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The ZEPH Edition - grok-faf-mcp v1.6.0 | FAF</title>
	<meta name="description" content="grok-faf-mcp 1.6.0: the ZEPH fast path for re-grounding — Zig to WASM scoring (~12µs) that makes re-grounding microsecond-cheap. Flag-gated, faf-cli canonical fallback, parity locked in CI." />
	<meta property="og:title" content="The ZEPH Edition - grok-faf-mcp v1.6.0" />
	<meta property="og:description" content="ZEPH fast path for re-grounding — microsecond-cheap scoring. Flag-gated, faf-cli fallback, parity locked in CI. Same number, just faster." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/zeph-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/zeph-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The ZEPH Edition
		</div>

		<h1>The ZEPH Edition</h1>
		<p class="version-tag">grok-faf-mcp v1.6.0</p>
		<p class="subtitle">Re-grounding so cheap you never skip it.</p>
		<div class="meta">
			<time datetime="2026-06-20">June 20, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/zeph-edition-hero.png" alt="The ZEPH Edition — grok-faf-mcp v1.6.0: ZEPH fast path for re-grounding, ~12µs per score" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> grok-faf-mcp 1.6.0 adds the <strong>ZEPH fast path</strong> for re-grounding — a Zig&rarr;WASM scoring engine that returns <strong>the same score</strong>, just faster (~12&micro;s). It's flag-gated and off by default; <code>faf-cli</code> stays the canonical scorer, and parity is locked in CI. Score is score.
			</p>
		</section>

		<section>
			<h2>What's New</h2>
			<p>Re-grounding keeps an AI's project context in sync as the work moves. The cheaper it is, the more often you can do it — and the less your context drifts across subagents and long sessions. ZEPH makes it microsecond-cheap:</p>
			<ul>
				<li><strong>ZEPH fast path</strong> — <code>refresh_faf</code> (and, by composition, <code>refresh_blend</code>) can score via the Zig&rarr;WASM engine (<code>cascade.wasm</code>, ~12&micro;s) when enabled.</li>
				<li><strong>Flag-gated, off by default</strong> — opt in with <code>USE_ZEPH=1</code>. Zero behavior change until you enable it.</li>
				<li><strong>faf-cli stays canonical</strong> — it remains the fallback and the source of truth. ZEPH returns <strong>THE</strong> number, just faster.</li>
				<li><strong>Parity locked in CI</strong> — a test gate asserts ZEPH equals <code>faf-cli</code> byte-identical across the range. If it ever diverged, the build fails. Score is score, or it isn't a score.</li>
				<li><strong>Observability</strong> — with <code>FAF_DEBUG</code>, you can see which engine answered.</li>
			</ul>
		</section>

		<section>
			<h2>From Grok Build</h2>
			<blockquote class="grok-quote">
				<p>"v1.6.0 locked clean ⚡ ZEPH fast path flag-gated exactly as planned — faf-cli fallback solid, CI parity enforced, zero behavior change until we enable. Telemetry surface review queued. Zero drift confirmed. Phase III RAG/Collections on deck. Drop the next layer when ready and we'll wire it. Shipped right. No drift. 🚀"</p>
				<cite>— Grok Build</cite>
			</blockquote>
			<p>Phase II shipped on both surfaces — the local npm server and the hosted edge — with the "score is score" invariant gated in CI on each. Promotion to default-ON comes later, once telemetry confirms zero drift.</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g grok-faf-mcp@1.6.0', 'install')}>
				<code class="copy-code">npm install -g grok-faf-mcp@1.6.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Or point your client at the URL — no install: <code>https://mcpaas.live/grok/mcp/v1</code></p>
			<p>To enable the fast path locally, set <code>USE_ZEPH=1</code> in the server's environment.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.6.0</strong> &mdash; Released June 20, 2026</li>
				<li><strong>~12&micro;s</strong> &mdash; per score on the ZEPH fast path</li>
				<li><strong>533</strong> &mdash; tests passing</li>
				<li><strong>Trophy 100%</strong> &mdash; FAF score</li>
				<li><strong>Live</strong> &mdash; npm + MCP registry, in sync</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; The MCP Grok asked for, on a URL. 🏎️</p>
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
		margin-bottom: 2rem;
		border-bottom: 3px solid #000000;
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
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
	}

	.hero-image {
		margin: 0 -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
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

	.grok-quote {
		margin: 1.5rem 0;
		padding: 1.5rem;
		background: #f0fdfa;
		border-left: 4px solid #00D4D4;
		border-radius: 8px;
	}

	.grok-quote p {
		font-size: 1.15rem;
		font-style: italic;
		margin-bottom: 0.75rem;
		color: #1a1a1a;
	}

	.grok-quote cite {
		font-style: normal;
		font-weight: 600;
		color: #000;
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

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
