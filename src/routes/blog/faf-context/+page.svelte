<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 .FAF Context — persistent project context for Cursor, VS Code & every MCP IDE

One .faf in your repo. Every editor's AI reads it. Now on the GitHub MCP Registry.

bunx faf-mcp`;
	const shareUrl = 'https://faf.one/blog/faf-context';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>.FAF Context - faf-mcp for Cursor, VS Code & every IDE | FAF</title>
	<meta name="description" content=".FAF Context is the FAF context server for your editor — Cursor, VS Code, Windsurf, Cline. One .faf in your repo, read by every MCP-compatible IDE. On the GitHub MCP Registry." />
	<meta property="og:title" content=".FAF Context - persistent project context for your IDE" />
	<meta property="og:description" content="One .faf in your repo. Every editor's AI reads it. Cursor, VS Code, Windsurf, Cline — on the GitHub MCP Registry." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/faf-context-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/faf-context-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / .FAF Context
		</div>
		<h1>.FAF Context</h1>
		<p class="version-tag">faf-mcp v2.3.1 · 🏆</p>
		<p class="subtitle">Persistent project context for Cursor, VS Code, and every MCP-compatible IDE.</p>
		<div class="meta">
			<time datetime="2026-07-01">July 1, 2026</time>
			<span class="separator">•</span>
			<span class="category interop">Interop</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/faf-context-hero.png" alt=".FAF Context — faf-mcp for Cursor, VS Code, and every MCP-compatible IDE" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong>.FAF Context</strong> is the FAF context server for your <em>editor</em>. Drop one <code>.faf</code> in your repo and every MCP-compatible IDE — <strong>Cursor, VS Code, Windsurf, Cline</strong> — reads the same scored project DNA. It's on the <strong>GitHub MCP Registry</strong>, and v2.3.1 makes sure it grounds on the project you actually have open.
			</p>
			<div class="terminal-block">
				<code>bunx faf-mcp</code>
			</div>
		</section>

		<section>
			<p class="thesis">One .faf. Every editor's AI, grounded.</p>
			<p>
				Every AI coding session starts from zero — re-reading your stack, re-guessing your conventions, re-learning what the project even is. <strong>.FAF Context</strong> ends that. Your project's context lives in a single IANA-registered <code>.faf</code> file, scored for completeness, and served to whatever editor you're in.
			</p>
			<p>
				Claude has <a href="https://github.com/Wolfe-Jam/claude-faf-mcp">Claude FAF</a>. Grok has <a href="https://github.com/Wolfe-Jam/grok-faf-mcp">Grok FAF</a>. <strong>.FAF Context is the one for your IDE</strong> — the editor surface, not tied to any single assistant.
			</p>
		</section>

		<section>
			<h2>On the GitHub MCP Registry</h2>
			<p>
				.FAF Context is listed on the <strong>GitHub MCP Registry</strong> — the source that powers editor MCP discovery. Search <code>faf</code> and it's right there, so any developer can add it without hunting down a config snippet.
			</p>
		</section>

		<section>
			<h2>Works where you work</h2>
			<p>
				One server, every MCP-compatible editor. Point your IDE at it and the AI reads your <code>.faf</code>:
			</p>
			<ul>
				<li><strong>Cursor</strong> — the AI-native editor</li>
				<li><strong>VS Code</strong> — via the MCP marketplace</li>
				<li><strong>Windsurf · Cline</strong> — and any MCP host</li>
			</ul>
			<p>
				On Claude Desktop, reach for <a href="https://github.com/Wolfe-Jam/claude-faf-mcp">Claude FAF</a> instead — same context, tuned for that surface.
			</p>
		</section>

		<section>
			<h2>v2.3.1 — it scores YOUR project</h2>
			<p>
				The one behaviour that matters in an editor: when you ask for a score, it must score the project you have <em>open</em>. v2.3.1 fixes a working-directory bug where a no-path call could resolve to a default folder instead of your workspace. Now the caller's actual directory wins — your open project, every time.
			</p>
			<p>
				The scorer, the WASM kernel, the number itself were never in question — this was pure path resolution. Deterministic, IANA-spec'd scoring: same <code>.faf</code>, same score, on every surface.
			</p>
		</section>

		<section>
			<h2>Curated by default</h2>
			<p>
				.FAF Context leads with a <strong>curated core toolset</strong> — the tools you actually reach for, up front — instead of a wall of options. Need everything? <code>FAF_TOOLS=all</code> exposes the full set; every tool stays callable by name either way.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>bunx faf-mcp</code>
			</div>
			<p>Or add it to your editor's MCP config:</p>
			<div class="terminal-block">
				<code>{`{"mcpServers": {"faf": {"command": "bunx", "args": ["faf-mcp"]}}}`}</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>faf-mcp v2.3.1</strong> — released July 1, 2026</li>
				<li><strong>.FAF Context</strong> — on the GitHub MCP Registry (<code>one.faf/faf-mcp</code>)</li>
				<li><strong>Cursor · VS Code · Windsurf · Cline</strong> — every MCP-compatible IDE</li>
				<li><strong>🏆 100%</strong> — Trophy-scored context</li>
				<li><strong>IANA-registered</strong> — <code>.faf</code> is <code>application/vnd.faf+yaml</code></li>
				<li><strong><a href="/blog/hundred-thousand">100,000+</a></strong> — downloads across the FAF ecosystem</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>If you like our work, consider a star on the repo — it helps others find us too.</p>
			<a href="https://github.com/Wolfe-Jam/faf-mcp" target="_blank" rel="noopener" class="star-btn">
				<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
				Star faf-mcp
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Define once. Grounded everywhere. 🏎️</p>
		</section>
	</article>
</div>

<style>
	/* Light theme — plain :global(body), no !important (prevents nav flash) */
	:global(body) {
		background: #FEFCF8;
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
		color: #00D4D4;
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
		color: #FF6B35;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #333;
		font-weight: 500;
		margin: 0 0 1rem;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator { color: #1a1a1a; }
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.interop { background: #7D3C98; }

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
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
	/* h2 inline code — keep the command in the heading legible, not a pill */
	h2 code {
		background: transparent;
		color: #FF6B35;
		padding: 0;
		font-size: 0.92em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.lead {
		font-size: 1.15rem;
	}

	/* Thesis pull-quote — the one big line, brand orange, no gradient */
	.thesis {
		font-size: 1.5rem;
		font-weight: 800;
		color: #FF6B35;
		letter-spacing: -0.01em;
		line-height: 1.3;
		margin: 0 0 1.25rem;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.5rem;
		color: #1a1a1a;
	}

	/* Inline code — bg + color paired (theming rule: never inherit text on a styled bg) */
	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}
	.post-content a {
		color: #00D4D4;
		font-weight: 600;
	}

	/* Terminal block — dark bg, terminal-green command text (the one carve-out) */
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
		font-size: 0.95rem;
		word-break: break-all;
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
		padding: 0.45rem 0.9rem;
		border-radius: 6px;
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.star-btn svg {
		display: block;
	}
	.star-btn:hover {
		background: #000;
	}

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
	}
	.footer-note p {
		color: #333;
		font-weight: 600;
	}

	@media (max-width: 640px) {
		h1 { font-size: 2rem; }
		h2 { font-size: 1.4rem; }
		.thesis { font-size: 1.25rem; }
	}
</style>
