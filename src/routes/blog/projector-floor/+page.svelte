<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: claude-faf-mcp v5.22.0 — The Projector Floor

A2A params are the same context block as MCP.

https://faf.one/context
Not raw provenance

npm install -g claude-faf-mcp@5.22.0

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/projector-floor';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Projector Floor - claude-faf-mcp v5.22.0 | FAF</title>
	<meta
		name="description"
		content="A2A mapper uses faf cards — https://faf.one/context, same fafContextBlock() as MCP. Not raw provenance."
	/>
	<meta property="og:title" content="The Projector Floor - claude-faf-mcp v5.22.0" />
	<meta
		property="og:description"
		content="A2A mapper uses faf cards — https://faf.one/context, same fafContextBlock() as MCP. Not raw provenance."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/projector-floor" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/projector-floor-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/projector-floor-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Projector Floor — claude-faf-mcp v5.22.0 · same fafContextBlock() as MCP"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Projector Floor - claude-faf-mcp v5.22.0" />
	<meta
		name="twitter:description"
		content="A2A mapper uses faf cards — https://faf.one/context, same fafContextBlock() as MCP. Not raw provenance."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/projector-floor-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Projector Floor — claude-faf-mcp v5.22.0 · same fafContextBlock() as MCP"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Projector Floor
		</div>
		<h1>The Projector Floor</h1>
		<p class="version-tag">claude-faf-mcp v5.22.0</p>
		<p class="subtitle">same fafContextBlock() as MCP. Not raw provenance.</p>
		<div class="meta">
			<time datetime="2026-08-18">August 18, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/projector-floor-hero.png"
			alt="The Projector Floor — claude-faf-mcp v5.22.0. A2A mapper uses faf cards."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> A2A mapper uses faf cards —
				<a href="https://faf.one/context">https://faf.one/context</a>, same
				<code>fafContextBlock()</code> as MCP. Not raw provenance.
			</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="claude-faf-mcp" version="5.22.0" /></code>
			</div>
		</section>

		<section>
			<h2>What's New</h2>
			<p>
				<code>fafaToA2ACard</code> is a thin adapter. The door is the caller’s URL. The context
				block is <code>fafContextBlock()</code> — or <code>generateA2ACard</code> from
				<NpmPkg name="faf-cli" version="7.8.0" />. The A2A extension URI is
				<code>https://faf.one/context</code>. Unofficial <code>provenance.version</code> is dropped.
			</p>
			<p>
				Pin is <code>faf-cli ^7.8.0</code>. Language rail still arrives by composition. Core is still
				<strong>12</strong> tools. Display title stays <strong>Claude FAF</strong>.
			</p>
			<p>
				Complementary. This release does not serve a live A2A endpoint, invent a door, or replace A2A
				or MCP cards.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="claude-faf-mcp" version="5.22.0" /></code>
			</div>
			<p class="muted-note">
				Desktop: <a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v5.22.0">v5.22.0 mcpb</a>
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Does:</strong> put the same context block on the A2A mapper as on MCP
					<code>_meta</code>.
				</li>
				<li>
					<strong>Does not:</strong> serve A2A · invent a door · replace A2A or MCP · bake a score.
				</li>
			</ul>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.22.0</strong> — August 18, 2026</li>
				<li><strong>12</strong> Core tools</li>
				<li><strong>Compose floor</strong> faf-cli ^7.8.0</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Help guide what we build — comments and suggestions welcome.</p>
			<div class="feedback-actions">
				<a
					href="https://github.com/Wolfe-Jam/claude-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn"
				>
					Open a GitHub issue
				</a>
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn secondary">Post on X</a>
			</div>
		</section>

		<section class="star-cta">
			<p>If this stops a drifted A2A extension, a star helps the next project find it.</p>
			<a
				href="https://github.com/Wolfe-Jam/claude-faf-mcp"
				target="_blank"
				rel="noopener"
				class="star-btn"
			>
				<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"
					><path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/></svg
				>
				Star claude-faf-mcp
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ one projector, every door.</p>
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
		font-size: 2.4rem;
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
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #1a1a1a;
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

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.post-content a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.muted-note {
		font-size: 0.9rem;
		color: #555;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.65rem;
		color: #1a1a1a;
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
		font-size: 0.95rem;
	}

	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #00d4d4;
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff !important;
	}
	.feedback-btn:hover {
		background: #000;
		text-decoration: none !important;
	}
	.feedback-btn.secondary {
		background: transparent;
		color: #1a1a1a !important;
		border: 2px solid #1a1a1a;
	}
	.feedback-btn.secondary:hover {
		background: #1a1a1a;
		color: #fff !important;
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
		h1 {
			font-size: 1.9rem;
		}
		h2 {
			font-size: 1.4rem;
		}
	}
</style>
