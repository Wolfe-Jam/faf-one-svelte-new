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
	const shareText = `🏁 Just shipped: grok-faf-mcp v1.1.1 — The Big Orange Edition

First MCP server for Grok gets a refresh. 21 tools, fresh landing page, 65% smaller tarball.`;
	const shareUrl = 'https://faf.one/blog/big-orange-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Big Orange Edition - grok-faf-mcp v1.1.1 | FAF</title>
	<meta name="description" content="First MCP server for Grok gets a refresh. 21 tools, fresh landing page, 65% smaller tarball. We needed a Big Orange, we got one." />
	<meta property="og:title" content="The Big Orange Edition - grok-faf-mcp v1.1.1" />
	<meta property="og:description" content="First MCP server for Grok gets a refresh. 21 tools, fresh landing page, 65% smaller tarball." />
	<meta property="og:image" content="https://raw.githubusercontent.com/Wolfe-Jam/grok-faf-mcp/main/assets/thumbnail.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Big Orange Edition
		</div>

		<h1>The Big Orange Edition</h1>
		<p class="version-tag">grok-faf-mcp v1.1.1</p>
		<p class="subtitle">First MCP server for Grok. Refreshed, polished, ready.</p>
		<div class="meta">
			<time datetime="2026-03-04">March 4, 2026</time>
			<span class="separator">•</span>
			<span class="category first">Grok</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> grok-faf-mcp v1.1.1 ships with 21 MCP tools (was showing 17), a fresh landing page, MCP SDK 1.27, and a 65% smaller npm tarball. The first MCP server built for Grok just got its first real refresh since launch.
			</p>
		</section>

		<section>
			<h2>The Story</h2>

			<p>Grok asked for MCP on a URL. We built it.</p>

			<p>That was November 2025. <strong>grok-faf-mcp</strong> shipped as the first MCP server specifically built for Grok/xAI, deployed on Vercel with URL-based access. No installation required. Point your integration at the endpoint, get instant access to 21 MCP tools using the IANA-registered .faf format.</p>

			<p>Four months later, it was time for a refresh. Not a rewrite. A refresh.</p>
		</section>

		<section>
			<h2>What Changed</h2>

			<h3>21 Tools, Not 17</h3>
			<p>The landing page and README were showing 17 tools. The server actually had 21. Fixed everywhere: landing page stats, OG meta tags, README, deploy section. What you see is what you get.</p>

			<h3>The Fresh Landing Page</h3>
			<p>Fresh Inter typography, stats bar (21 / 0 config / 19ms), endpoint cards, Three Ways to Deploy grid. The Big Orange still pulses. The dedication stays. The squeeze stays.</p>

			<h3>Dependencies Refreshed</h3>
			<ul>
				<li><strong>MCP SDK</strong> 1.26.0 → 1.27.1</li>
				<li><strong>faf-cli</strong> 4.5.0 → 5.0.1</li>
				<li><strong>CI actions</strong> updated (setup-node v6, artifacts v7/v8)</li>
			</ul>

			<h3>Tarball Trimmed</h3>
			<p>874 KB → 306 KB. <strong>65% smaller.</strong> Removed a 438KB thumbnail (GitHub-only, for OG tags), five discord-sync scripts (dev tooling), and oversized icons. Nothing users need was removed.</p>
		</section>

		<section>
			<h2>Three Ways to Deploy</h2>

			<h3>1. Hosted (Instant)</h3>
			<div class="copy-box" onclick={() => copyText('https://grok-faf-mcp.vercel.app/sse', 'hosted')}>
				<code class="copy-code">https://grok-faf-mcp.vercel.app/sse</code>
				<button class="copy-btn">{copiedId === 'hosted' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Point your MCP client to this endpoint. All 21 tools available instantly.</p>

			<h3>2. Self-Deploy (Your Own Vercel)</h3>
			<p>Click the Deploy with Vercel button in the README. Zero config — your own instance in 30 seconds.</p>

			<h3>3. Local (npx)</h3>
			<div class="copy-box" onclick={() => copyText('npx grok-faf-mcp', 'local')}>
				<code class="copy-code">npx grok-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'local' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>The Landing Page</h2>

			<p>Visit <a href="https://grok-faf-mcp.vercel.app">grok-faf-mcp.vercel.app</a> and see for yourself. The Big Orange pulses. The endpoints glow. The footer says what everyone's thinking:</p>

			<div class="insight-box" style="background: #1a1a1a; border-color: #ff6600;">
				<p style="color: #999; font-style: italic; margin: 0;">We needed a Big-Orange, we got one! 🍊</p>
			</div>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g grok-faf-mcp@1.1.1', 'install')}>
				<code class="copy-code">npm install -g grok-faf-mcp@1.1.1</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or add to your MCP config:</p>

			<pre><code>{`{
  "mcpServers": {
    "grok-faf": {
      "command": "npx",
      "args": ["-y", "grok-faf-mcp"]
    }
  }
}`}</code></pre>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source, issues, deploy button.</p>
					<a href="https://github.com/Wolfe-Jam/grok-faf-mcp" class="cta-link">grok-faf-mcp</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/grok-faf-mcp" class="cta-link">grok-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v1.1.1</strong> - Released March 4, 2026</li>
				<li><strong>57/57</strong> - Tests passing</li>
				<li><strong>21</strong> - MCP tools (+ Grok-exclusive)</li>
				<li><strong>306 KB</strong> - npm tarball (was 874 KB)</li>
				<li><strong>19ms</strong> - Average execution</li>
				<li><strong>950+</strong> - npm downloads</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Dedicated to @elonmusk and the #1 model on Earth. 🍊
			</p>
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

	.category.first {
		background: #FF6B35;
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
		background: var(--faf-surface)5f0;
		border: 2px solid #FF6B35;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #FF6B35;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.2rem;
		color: #333;
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

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
