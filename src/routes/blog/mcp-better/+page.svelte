<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 mcp-better v0.2.0 — BETTER textbook for MCP 7/28

Rust · rmcp 3 · Discover · stamped tools/list
stdio default · Streamable HTTP (--http) on the road

cargo install mcp-better --version 0.2.0
# first cargo install compiles the ecosystem once — one-time wait

https://faf.one/blog/mcp-better`;
	const shareUrl = 'https://faf.one/blog/mcp-better';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>mcp-better v0.2.0 — BETTER textbook for 7/28 | FAF</title>
	<meta
		name="description"
		content="mcp-better: AAIF-verified modern MCP textbook for protocol 2026-07-28. Rust · rmcp 3 · Discover · stamped list. stdio + Streamable HTTP. crates.io + MCP Registry."
	/>
	<meta property="og:title" content="mcp-better v0.2.0 — BETTER textbook for 7/28" />
	<meta
		property="og:description"
		content="Small honest MCP server built for 7/28 — not bolted onto last year. cargo install mcp-better."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/mcp-better" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:title" content="mcp-better v0.2.0 — BETTER textbook for 7/28" />
	<meta
		name="twitter:description"
		content="Rust · rmcp 3 · Discover · stamped tools/list. First cargo install compiles deps once — one-time wait."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / mcp-better
		</div>
		<h1>mcp-better</h1>
		<p class="version-tag">v0.2.0 · BETTER textbook · built for 7/28 · ✪</p>
		<p class="subtitle">
			A small real MCP server for protocol <strong>2026-07-28</strong> — honest surface, not a legacy
			bolt-on.
		</p>
		<div class="meta">
			<time datetime="2026-07-30">July 30, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>mcp-better</code> is live on
				<strong>crates.io</strong> and the
				<strong>MCP Registry</strong> — a BETTER-tier textbook for the 7/28 model.
				Rust · <code>rmcp</code> 3 · Discover · stamped <code>tools/list</code>. Default
				<strong>stdio</strong>; v0.2 adds opt-in <strong>Streamable HTTP</strong> in the same era.
			</p>
			<div class="terminal-block">
				<code>cargo install mcp-better --version 0.2.0</code>
				<code>mcp-better --help</code>
			</div>
			<p class="install-note">
				First cargo install compiles the ecosystem once (not 100+ of our tools — just Rust deps).
				One-time wait; then you’re done.
			</p>
		</section>

		<section>
			<h2>Why it exists</h2>
			<p>
				When MCP 2026-07-28 landed, the easy paths were: wrap last year’s server, or wait. We took
				<strong>C</strong> — build to the modern model from the start. Lessons from AAIF work kept the
				surface small and claim-honest: only advertise what Discover and <code>tools/list</code>
				actually return.
			</p>
			<p>
				<strong>NONE → GOOD → [BETTER] → BEST.</strong> This repo is the BETTER textbook. BEST
				(persistent project context) lives one hop up at
				<a href="https://faf.one/agents">faf.one/agents</a>.
			</p>
		</section>

		<section>
			<h2>What you get</h2>
			<ul>
				<li>
					<strong>v0.1</strong> — 7/28 over <strong>stdio</strong> (Cursor / Desktop foundation):
					Discover, stamped <code>ttlMs</code> / <code>cacheScope</code>, tools
					<code>health</code> + <code>echo</code>
				</li>
				<li>
					<strong>v0.2</strong> — same era + <strong>Streamable HTTP</strong> (<code>--http</code>),
					routing headers <code>Mcp-Method</code> / <code>Mcp-Name</code>, loopback Host guards
				</li>
				<li>
					<strong>Registry</strong> — package transport is <strong>stdio only by design</strong>
					(<code>cargo install</code> / host spawn). HTTP is a local demo in the same binary.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code># install (crates.io)</code>
				<code>cargo install mcp-better --version 0.2.0</code>
				<code>mcp-better --help</code>
			</div>
			<p class="install-note">
				First cargo install compiles the ecosystem once (not 100+ of our tools — just Rust deps).
				One-time wait; then you’re done.
			</p>
			<div class="terminal-block">
				<code># optional local HTTP demo — no auth; loopback only</code>
				<code>mcp-better --http</code>
				<code># http://127.0.0.1:8787/mcp</code>
			</div>
			<p>
				Release:
				<a
					href="https://github.com/Wolfe-Jam/mcp-better/releases/tag/v0.2.0"
					target="_blank"
					rel="noopener">v0.2.0</a
				>
				· crates:
				<a href="https://crates.io/crates/mcp-better" target="_blank" rel="noopener">mcp-better</a>
				· Registry:
				<code>io.github.Wolfe-Jam/mcp-better</code>
			</p>
		</section>

		<section>
			<h2>Links</h2>
			<ul>
				<li>
					<a href="https://github.com/Wolfe-Jam/mcp-better" target="_blank" rel="noopener"
						>GitHub</a
					>
				</li>
				<li>
					<a href="https://crates.io/crates/mcp-better" target="_blank" rel="noopener"
						>crates.io</a
					>
				</li>
				<li>
					<a href="https://faf.one/agents">BEST — faf.one/agents</a> (one hop up from the textbook)
				</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Small honest surface. Star it if the textbook earns it.</p>
			<a
				href="https://github.com/Wolfe-Jam/mcp-better"
				target="_blank"
				rel="noopener"
				class="star-btn"
			>
				Star mcp-better
			</a>
		</section>

		<section class="footer-note">
			<p>BETTER purity: no project.faf tax. Protocol textbook, not a FAF product install. 🏎️</p>
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
		padding: 2rem 1rem 4rem;
		color: #1a1a1a;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
	}

	.post-header {
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		color: #333;
	}
	.breadcrumb a {
		color: #00d4d4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.6rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #1a1a1a;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.25rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #333;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator {
		color: #1a1a1a;
	}
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.release {
		background: #00b8b8;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.7rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: #1a1a1a;
		letter-spacing: -0.01em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.lead {
		font-size: 1.15rem;
	}

	.install-note {
		font-size: 0.95rem;
		color: #333;
		font-style: italic;
		margin: 0.5rem 0 1.25rem;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.5rem;
		color: #1a1a1a;
	}

	.post-content a {
		color: #00b8b8;
		font-weight: 600;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9rem;
		white-space: pre-wrap;
		word-break: break-word;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}
	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.5rem;
		border-radius: 6px;
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.share-btn:hover {
		background: #000;
	}

	.star-cta {
		margin-top: 2.5rem;
		text-align: center;
	}
	.star-cta p {
		color: #333;
		margin: 0 0 1rem;
	}
	.star-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.65rem 1.25rem;
		border-radius: 6px;
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		background: #fff;
		color: #1a1a1a;
		border: 2px solid #1a1a1a;
	}
	.star-btn:hover {
		background: #f5f5f5;
	}

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
		color: #333;
		font-weight: 600;
	}
</style>
