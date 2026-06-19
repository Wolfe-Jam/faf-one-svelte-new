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
	const shareText = `🏁 Just shipped: grok-faf-mcp v1.5.5 — Grok Core-tier

The default tool surface is now the Grok value: re-grounding, RAG, memory. Zero Grok-driven features trimmed.`;
	const shareUrl = 'https://faf.one/blog/grok-core-tier';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Grok Core-tier - grok-faf-mcp v1.5.5 | FAF</title>
	<meta name="description" content="grok-faf-mcp 1.5.5: the default tool surface is now the Grok value — re-grounding, RAG, memory, essentials. Inherited clutter retired; zero Grok-driven features trimmed." />
	<meta property="og:title" content="Grok Core-tier - grok-faf-mcp v1.5.5" />
	<meta property="og:description" content="The default tool surface is now the Grok value — re-grounding, RAG, memory. Zero Grok-driven features trimmed." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/grok-core-tier-hero-white.png" />
	<meta name="twitter:image" content="https://faf.one/blog/grok-core-tier-hero-white.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Grok Core-tier
		</div>

		<h1>Grok Core-tier</h1>
		<p class="version-tag">grok-faf-mcp v1.5.5</p>
		<p class="subtitle">The default surface is the Grok value.</p>
		<div class="meta">
			<time datetime="2026-06-18">June 18, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/grok-core-tier-hero-white.png" alt="Grok Core-tier — grok-faf-mcp v1.5.5: 12 core tools, zero Grok features trimmed" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> grok-faf-mcp 1.5.5 makes the default tool surface the <strong>Grok value</strong> — re-grounding, RAG, and memory — and retires the inherited clutter. Zero Grok-driven features trimmed.
			</p>
		</section>

		<section>
			<h2>What's New</h2>
			<p>The default <code>tools/list</code> now advertises <strong>12 core tools</strong> — the things you actually came to Grok's MCP for:</p>
			<ul>
				<li><strong>Re-grounding</strong> — <code>refresh_faf</code>, <code>refresh_fafm</code>, <code>refresh_blend</code></li>
				<li><strong>LAZY-RAG</strong> — <code>rag_query</code> + cache</li>
				<li><strong>Orchestration substrate</strong> — drift recommendation + policy</li>
				<li><strong>FAF essentials</strong> — <code>faf_init</code>, <code>faf_score</code>, <code>faf_sync</code>, <code>faf_trust</code></li>
			</ul>
			<p>Low-level utilities move behind <code>FAF_TOOLS=all</code> — still callable, just not in the way. Inherited leftovers were retired from the surface, and every tool's description was lifted to definition-grade. Ships with the 1.5.4 non-destructive interop.</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g grok-faf-mcp@1.5.5', 'install')}>
				<code class="copy-code">npm install -g grok-faf-mcp@1.5.5</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Or point your client at the URL — no install: <code>https://mcpaas.live/grok/mcp/v1</code></p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.5.5</strong> &mdash; Released June 18, 2026</li>
				<li><strong>12</strong> &mdash; core tools advertised by default</li>
				<li><strong>531/531</strong> &mdash; tests passing</li>
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
