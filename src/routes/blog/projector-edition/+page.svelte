<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v7.8.0 — The Projector Edition

One command writes the host cards from your .faf.

one projector, every door
Does not invent a door

bunx faf-cli@7.8.0 cards --help

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/projector-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Projector Edition - faf-cli v7.8.0 | FAF</title>
	<meta
		name="description"
		content="faf cards projects .faf + .fafa onto A2A, MCP, registry, and catalog — one context block, every door."
	/>
	<meta property="og:title" content="The Projector Edition - faf-cli v7.8.0" />
	<meta
		property="og:description"
		content="faf cards projects .faf + .fafa onto A2A, MCP, registry, and catalog — one context block, every door."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/projector-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/projector-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/projector-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Projector Edition — faf-cli v7.8.0 · one projector, every door"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Projector Edition - faf-cli v7.8.0" />
	<meta
		name="twitter:description"
		content="faf cards projects .faf + .fafa onto A2A, MCP, registry, and catalog — one context block, every door."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/projector-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Projector Edition — faf-cli v7.8.0 · one projector, every door"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Projector Edition
		</div>
		<h1>The Projector Edition</h1>
		<p class="version-tag">faf-cli v7.8.0</p>
		<p class="subtitle">one projector, every door</p>
		<div class="meta">
			<time datetime="2026-08-18">August 18, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/projector-edition-hero.png"
			alt="The Projector Edition — faf-cli v7.8.0. one projector, every door."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong>
				<code>faf cards</code> projects <code>.faf</code> + <code>.fafa</code> onto A2A, MCP,
				registry, and catalog — one context block, every door.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="7.8.0" /> cards --help</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="7.8.0" /> cards --check</code>
			</div>
		</section>

		<section>
			<h2>What's New</h2>
			<p>
				Author <code>.faf</code> (context) and <code>.fafa</code> (identity, skills, endpoints).
				<code>faf cards</code> writes the host cards. Complementary — it does not replace A2A or MCP.
			</p>
			<ul>
				<li>
					<strong>A2A Agent Card</strong> — <code>/.well-known/agent-card.json</code>. Extension URI
					is <code>https://faf.one/context</code>.
				</li>
				<li><strong>MCP Server Card</strong> — the same block under <code>_meta["one.faf/context"]</code>.</li>
				<li>
					<strong>Registry <code>server.json</code></strong> — same block under
					<code>publisher-provided</code>.
				</li>
				<li><strong>AI Catalog</strong> — upserts rows. Leaves host showcase entries alone.</li>
			</ul>
			<p>
				<code>--door-url</code> supplies a door when <code>.fafa</code> has no A2A endpoint. Authored
				endpoints still win. No door and no flag: it refuses. It will not invent a door or an agent.
			</p>
			<p>
				<code>faf server-card</code> still exists. It now wraps the same projector’s registry target.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.8.0" /></code>
				<code>faf cards --target a2a --check</code>
			</div>
			<p class="muted-note">
				Same version on the short name: <code>bunx</code>
				<NpmPkg name="faf" version="7.8.0" />
			</p>
			<p>
				claude-faf-mcp <strong>5.22.0</strong> pins this floor — the A2A mapper uses
				<code>faf cards</code> instead of copying raw provenance.
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Does:</strong> project one <code>fafContextBlock()</code> onto every door you
					already have.
				</li>
				<li>
					<strong>Does not:</strong> invent a door · invent an agent · replace A2A or MCP · bake a
					score into the card.
				</li>
			</ul>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v7.8.0</strong> — August 18, 2026</li>
				<li><strong>1340/1340</strong> tests</li>
				<li><strong>✪ 100%</strong> Trophy</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Help guide what we build — comments and suggestions welcome.</p>
			<div class="feedback-actions">
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
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
			<p>If this saves a drifted card, a star helps the next project find it.</p>
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="star-btn">
				<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"
					><path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/></svg
				>
				Star faf-cli
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf + .fafa ☑️ one projector, every door.</p>
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
