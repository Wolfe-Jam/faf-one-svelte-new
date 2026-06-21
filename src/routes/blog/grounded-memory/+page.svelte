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
	const shareText = `🏁 Just shipped: grok-faf-mcp v1.7.0 — The Grounded Memory Edition

The FRC layer above Grok Collections — gate what deserves promotion, retrieve exact sections, query durable memory. Opt-in, core surface unchanged.`;
	const shareUrl = 'https://faf.one/blog/grounded-memory';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Grounded Memory Edition - grok-faf-mcp v1.7.0 | FAF</title>
	<meta name="description" content="grok-faf-mcp 1.7.0: the FRC layer above Grok Collections — faf_gate (promote/hold), faf_section (exact structured retrieval), faf_memory (durable .fafm). Plus ZEPH fast re-grounding. Opt-in via USE_FRC and USE_ZEPH; 12-tool core unchanged." />
	<meta property="og:title" content="The Grounded Memory Edition - grok-faf-mcp v1.7.0" />
	<meta property="og:description" content="The FRC layer above Grok Collections — gate, structured retrieval, durable memory. Opt-in, core surface unchanged." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/grounded-memory-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/grounded-memory-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Grounded Memory Edition
		</div>

		<h1>The Grounded Memory Edition</h1>
		<p class="version-tag">grok-faf-mcp v1.7.0</p>
		<p class="subtitle">Structured context and durable memory, above Grok Collections.</p>
		<div class="meta">
			<time datetime="2026-06-21">June 21, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/grounded-memory-hero.png" alt="The Grounded Memory Edition — grok-faf-mcp v1.7.0: the FRC layer above Grok Collections" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				This release adds the <strong>FRC layer</strong> (FAF-RAG-Collections) — a structured memory layer that sits above Grok Collections. It decides what deserves to be promoted, returns whole structured sections instead of fragmented chunks, and keeps durable project memory queryable.
			</p>
		</section>

		<section>
			<h2>Three new tools</h2>
			<p>All behind a single opt-in flag (<code>USE_FRC</code>):</p>
			<ul>
				<li><strong><code>faf_gate</code></strong> — Scores and evaluates a <code>.faf</code> candidate and returns a deterministic promote/hold verdict before it enters a Collection.</li>
				<li><strong><code>faf_section</code></strong> — Retrieves an exact <code>.faf</code> section by path, preserving structure and relationships (the deterministic complement to blind chunking).</li>
				<li><strong><code>faf_memory</code></strong> — Queries the durable <code>.fafm</code> model by type, tag, or text — structured project memory (decisions, invariants, conventions, and the &ldquo;why&rdquo;).</li>
			</ul>
			<p>Also included: a real Collections client for search and management, available locally and imminently on the edge.</p>
		</section>

		<section>
			<h2>ZEPH fast re-grounding</h2>
			<p>ZEPH (shipped in 1.6.0) remains available behind <code>USE_ZEPH</code>. When enabled, <code>refresh_faf</code> and <code>refresh_blend</code> use the fast ZEPH path (~12&micro;s) while <code>faf-cli</code> stays as the canonical fallback. Both paths are parity-locked in CI.</p>
			<p>Everything is <strong>flag-gated and off by default</strong>. Enable with <code>USE_FRC=1</code> and/or <code>USE_ZEPH=1</code>. The core 12-tool surface is unchanged until you opt in.</p>
		</section>

		<section>
			<h2>Grounded, and it can prove it</h2>
			<p>Every tool runs through the WJTTC discipline. The opt-in contract is test-enforced. ZEPH keeps re-grounding cheap enough that agents can stay continuously grounded across long sessions and subagents. Verified, not asserted.</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g grok-faf-mcp@1.7.0', 'install')}>
				<code class="copy-code">npm install -g grok-faf-mcp@1.7.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Or use it directly at: <code>https://mcpaas.live/grok/mcp/v1</code></p>
			<p>To enable the new layers locally, set <code>USE_FRC=1</code> and/or <code>USE_ZEPH=1</code> in your environment.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>Released</strong> &mdash; June 21, 2026</li>
				<li><strong>3 new tools</strong> &mdash; behind <code>USE_FRC</code></li>
				<li><strong>12-tool core</strong> &mdash; surface unchanged when flags are off</li>
				<li><strong>588</strong> &mdash; tests passing</li>
				<li><strong>Trophy 100%</strong> &mdash; FAF score</li>
				<li><strong>Live</strong> &mdash; npm + MCP Registry</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf + .fafm &#9745; Structured context. Durable memory. 🏎️</p>
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
