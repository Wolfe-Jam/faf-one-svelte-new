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
	<title>Nelly Never Forgets Edition - claude-faf-mcp v5.3.0 | FAF</title>
	<meta name="description" content="claude-faf-mcp v5.3.0 — now on Smithery and Glama, with persistent analytics via Upstash Redis. The MCP that gives your AI memory now has memory of its own." />
	<meta property="og:title" content="Nelly Never Forgets Edition - claude-faf-mcp v5.3.0" />
	<meta property="og:description" content="Now on Smithery and Glama. Persistent analytics via Upstash Redis. 3 CVEs fixed. The MCP that gives your AI memory now has memory of its own." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/nelly-never-forgets-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/nelly-never-forgets-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Nelly Never Forgets Edition
		</div>
		<h1>🐘 Nelly Never Forgets Edition</h1>
		<p class="subtitle">claude-faf-mcp v5.3.0 — persistent analytics, new discovery points, security hardened</p>
		<div class="meta">
			<time datetime="2026-04-10">April 10, 2026</time>
			<span class="separator">•</span>
			<span class="category">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/nelly-never-forgets-hero.png" alt="Nelly the elephant studying analytics at her desk" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The MCP that gives your AI persistent project memory now has persistent memory of its own. v5.3.0 ships Upstash Redis analytics, new listings on Smithery and Glama, and three security fixes.
			</p>
		</section>

		<section>
			<h2>Nelly Never Forgets</h2>
			<p>
				🐘 Nelly is the FAF mascot for persistence — the idea that your AI should never need re-explaining what your project is. <code>claude-faf-mcp</code> is the tool that makes that real inside Claude Desktop.
			</p>
			<p>
				In v5.3.0, Nelly gets a memory of her own. Upstash Redis now tracks all-time ecosystem analytics — how the MCP is being used across the community. Not user data. Ecosystem health. The kind of signal that tells us where to focus next.
			</p>
		</section>

		<section>
			<h2>New Discovery Points</h2>
			<p>The MCP is now listed in two more places:</p>

			<div class="discovery-grid">
				<div class="discovery-card">
					<div class="discovery-icon">🔨</div>
					<h3>Smithery</h3>
					<p>One of the fastest-growing MCP marketplaces. Browse, preview, and install MCPs directly from <a href="https://smithery.ai" target="_blank" rel="noopener">smithery.ai</a>.</p>
				</div>
				<div class="discovery-card">
					<div class="discovery-icon">✨</div>
					<h3>Glama.ai</h3>
					<p>Auto-indexed from GitHub with ecosystem cross-linking — related FAF servers appear alongside claude-faf-mcp for easier discovery.</p>
				</div>
			</div>

			<p>Combined with the Official MCP Registry, MCP.so, PulseMCP, and awesome-mcp-servers — that's six discovery points for one install command.</p>
		</section>

		<section>
			<h2>Security Hardened</h2>
			<p>Three CVEs resolved in this release:</p>
			<ul>
				<li><strong>path-to-regexp</strong> — ReDoS vulnerability patched</li>
				<li><strong>yaml</strong> — parse vulnerability resolved</li>
				<li><strong>flatted</strong> — prototype pollution (GHSA-rf6f-7fwh-wjgh) fixed</li>
			</ul>
			<p>
				For a tool that lives permanently in your Claude Desktop config, active maintenance matters. These were caught by automated weekly audit — no user action required.
			</p>
		</section>

		<section>
			<h2>Install or Update</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g claude-faf-mcp@latest', 'install')}>
				<code class="copy-code">npm install -g claude-faf-mcp@latest</code>
				<button class="copy-btn">{copiedId === 'install' ? '✓ Copied' : 'Copy'}</button>
			</div>

			<p>Or add to your Claude Desktop config:</p>
			<div class="copy-box" onclick={() => copyText('npx claude-faf-mcp', 'npx')}>
				<code class="copy-code">npx claude-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'npx' ? '✓ Copied' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.3.0</strong> — Released April 10, 2026</li>
				<li><strong>391/391</strong> — Tests passing (12 suites, 2,346 executions per push)</li>
				<li><strong>33 tools</strong> — Project DNA, scoring, sync, tri-sync (Pro)</li>
				<li><strong>52,000+</strong> — FAF ecosystem downloads across all packages</li>
				<li><strong>IANA registered</strong> — <code>application/vnd.faf+yaml</code></li>
			</ul>
		</section>

		<div class="share-section">
			<a
				href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('claude-faf-mcp v5.3.0 — Nelly Never Forgets Edition. Persistent analytics, now on Smithery + Glama, 3 CVEs fixed. The MCP that gives your AI persistent project memory.')}&url=${encodeURIComponent('https://faf.one/blog/nelly-never-forgets')}`}
				target="_blank"
				rel="noopener"
				class="share-btn"
			>
				Share on X
			</a>
		</div>

		<section class="footer-note">
			<p>Built with .faf ☑️ Nelly never forgets. 🐘🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
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

	.breadcrumb a:hover { text-decoration: underline; }

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
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

	.separator { color: #ccc; }

	.category {
		background: #00B8B8;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.post-content { font-size: 1.1rem; }

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
		margin: 1rem 0 0.5rem 0;
		color: #333;
	}

	p { margin-bottom: 1.25rem; }

	ul, ol { margin: 1rem 0 1.5rem 1.5rem; }
	li { margin-bottom: 0.5rem; }

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.discovery-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 1.5rem 0 2rem 0;
	}

	.discovery-card {
		background: var(--faf-surface);
		border: 2px solid #eee;
		border-radius: 10px;
		padding: 1.5rem;
		border-top: 3px solid #FF6B35;
	}

	.discovery-icon {
		font-size: 1.8rem;
		margin-bottom: 0.5rem;
	}

	.discovery-card h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.discovery-card p {
		margin: 0;
		font-size: 0.95rem;
		color: #555;
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
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
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
	.share-btn:hover { opacity: 0.85; text-decoration: none; color: #fff; }

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a { color: #FF6B35; }
	a:hover { text-decoration: none; }

	@media (max-width: 768px) {
		h1 { font-size: 1.75rem; }
		.discovery-grid { grid-template-columns: 1fr; }
		.blog-post { padding: 1rem; }
	}
</style>
