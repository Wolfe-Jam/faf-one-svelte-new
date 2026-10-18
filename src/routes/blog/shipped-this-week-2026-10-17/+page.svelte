<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Shipped this week: faf-cli v8.3 — The Business Card Edition

Your repo's business card says what the repo is.

…and 8 more releases: faf-mcp, gemini-faf-mcp, agent-business-card and slash-tokens.

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/shipped-this-week-2026-10-17';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Shipped this Week — Oct 17, 2026 | FAF</title>
	<meta
		name="description"
		content="10 releases across 5 apps, October 10–16. The headline: faf-cli v8.3, The Business Card Edition."
	/>
	<meta property="og:title" content="Shipped this Week — Oct 17, 2026" />
	<meta
		property="og:description"
		content="10 releases across 5 apps. The headline: faf-cli v8.3, The Business Card Edition."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/shipped-this-week-2026-10-17" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/shipped-this-week-2026-10-17-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/shipped-this-week-2026-10-17-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Shipped this Week, October 17, 2026" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Shipped this Week — Oct 17, 2026" />
	<meta
		name="twitter:description"
		content="10 releases across 5 apps. The headline: faf-cli v8.3, The Business Card Edition."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/shipped-this-week-2026-10-17-hero.png" />
	<meta name="twitter:image:alt" content="Shipped this Week, October 17, 2026" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Shipped this Week — Oct 17, 2026
		</div>
		<h1>Shipped this Week</h1>
		<p class="version-tag">October 10–16, 2026</p>
		<p class="subtitle">Everything we released this week, one line each.</p>
		<div class="meta">
			<time datetime="2026-10-17">October 17, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/shipped-this-week-2026-10-17-hero.png"
			alt="Shipped this Week, October 17, 2026"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> 10 releases across 5 apps. The one that matters most: faf-cli v8.3,
				The Business Card Edition. Your repo's business card now says what the repo is.
			</p>
		</section>

		<section>
			<h2>faf-cli</h2>
			<p class="ship-line">
				<strong>v8.3.1</strong> — <code>faf cards</code> gives MCP cards to a project.faf alone only
				when its type is mcp.
			</p>
			<p class="ship-line">
				<strong>v8.3.0 · The Business Card Edition</strong> — Business cards say what the repo is: a
				package can be a CLI or a library, from npm, PyPI or crates.io, and only an MCP server gets
				MCP cards.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.3.1" /> card init</code>
			</div>
			<p class="ship-notes">
				<a href="/blog/business-card-edition">Read the post</a> · 8.3.2 followed on Friday and is in
				the post too.
			</p>
		</section>

		<section>
			<h2>faf-mcp</h2>
			<p class="ship-line">
				<strong>v4.0.1</strong> — <code>faf-mcp --version</code> and <code>--help</code> answer and
				exit. Before, both started the server.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-mcp" version="4.0.1" /></code>
			</div>
			<p class="ship-notes">
				<a href="https://github.com/Wolfe-Jam/faf-mcp/releases/tag/v4.0.1" target="_blank" rel="noopener"
					>Release notes</a
				>
			</p>
		</section>

		<section>
			<h2>gemini-faf-mcp</h2>
			<p class="ship-line">
				<strong>v3.1.1</strong> — <code>gemini-faf-mcp --version</code> and <code>--help</code>
				answer and exit. Before, both started the server.
			</p>
			<div class="terminal-block">
				<code>uvx gemini-faf-mcp==3.1.1</code>
			</div>
			<p class="ship-notes">
				<a
					href="https://github.com/Wolfe-Jam/gemini-faf-mcp/releases/tag/v3.1.1"
					target="_blank"
					rel="noopener">Release notes</a
				>
			</p>
		</section>

		<section>
			<h2>agent-business-card</h2>
			<p class="ship-line">
				<strong>v0.2.0 · The Headshot Edition</strong> — A business card can now show a picture: give
				it an https link and it's drawn in the logo spot, with the monogram as a fallback.
			</p>
			<p class="ship-line">
				<strong>v0.1.1</strong> — Links read on a dark business card.
			</p>
			<p class="ship-line">
				<strong>v0.1.0</strong> — The first release: the business-card renderer, moved out of
				mcp-context-card so other readers can draw cards too.
			</p>
			<div class="terminal-block">
				<code>npm install <NpmPkg name="agent-business-card" version="0.2.0" /></code>
			</div>
			<p class="ship-notes">
				<a
					href="https://github.com/Wolfe-Jam/agent-business-card/releases/tag/v0.2.0"
					target="_blank"
					rel="noopener">Release notes</a
				>
				·
				<a href="https://wolfe-jam.github.io/agent-business-card/" target="_blank" rel="noopener"
					>Print a repo's card</a
				>
			</p>
		</section>

		<section>
			<h2>slash-tokens</h2>
			<p class="ship-line">
				<strong>v1.8.1 · The Merge Gate Edition</strong> — Count what ships: the scan and diff measure
				the code you deploy, not your tests.
			</p>
			<p class="ship-line">
				<strong>v1.8.0 · The Merge Gate Edition</strong> — Know what a change will cost before it
				merges.
			</p>
			<p class="ship-line">
				<strong>v1.7.1 · The Hired Agent Edition</strong> — The scan counts each real LLM request
				once.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="slash-tokens" version="1.8.1" /> --help</code>
			</div>
			<p class="ship-notes">
				<a
					href="https://github.com/Wolfe-Jam/slash-tokens/releases/tag/v1.8.1"
					target="_blank"
					rel="noopener">Release notes</a
				>
			</p>
		</section>

		<section>
			<h2>On faf.one</h2>
			<p class="ship-line">
				<strong>Checked Yours?</strong> (Story) — MCP Server Cards went final on October 6. We checked all 26,105 remote endpoints in the MCP Registry: about 2% publish a valid card. Then we checked our own, and it failed two CORS rules.
				<a href="/blog/checked-yours">Read it</a>.
			</p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Every release, every week. 🏎️</p>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: var(--faf-black);
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 1.5rem;
	}
	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-header h1 {
		font-size: 2.6rem;
		margin: 0 0 0.5rem;
		color: var(--faf-black);
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: var(--faf-black);
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 2.5rem;
	}
	.separator {
		color: var(--faf-dark);
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff; /* literal-ok: Release pill text, paired with its category bg */
	}
	.category.release {
		background: #00b8b8; /* literal-ok: Release category colour */
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

	/* The site-wide section rule adds 96px top and bottom; short sections need none. */
	.post-content section {
		padding: 0;
		margin-bottom: 2.5rem;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.post-content a {
		color: var(--faf-cyan-text);
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-left: 4px solid #00b8b8; /* literal-ok: Release category accent border */
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}
	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--faf-black);
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		line-height: 1.9;
		padding-left: 1.25rem;
	}

	.post-content code {
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.terminal-block {
		background: var(--faf-solid-bg);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.25rem 0;
		overflow-x: auto;
	}
	.terminal-block code {
		display: block;
		background: none;
		border: none; /* the site-wide code pill adds a hairline border */
		color: #00ff88; /* literal-ok: terminal-green inside the solid terminal block */
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
		white-space: pre;
	}

	.muted-note {
		font-size: 0.95rem;
		color: var(--faf-dark);
	}

	.ship-line {
		margin: 0 0 0.6rem;
	}
	.ship-notes {
		margin-top: 0.4rem;
	}
	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border-radius: 10px;
		border-left: 4px solid #00b8b8; /* literal-ok: Release category accent border */
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
	.post-content a.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border: 2px solid var(--faf-solid-bg);
	}
	.post-content a.feedback-btn:hover {
		opacity: 0.85;
	}
	.post-content a.feedback-btn.secondary {
		background: transparent;
		color: var(--faf-black);
		border: 2px solid var(--faf-black);
	}

	.footer-note {
		text-align: center;
		color: var(--faf-dark);
		font-size: 0.95rem;
		border-top: 1px solid var(--faf-border);
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
	}
</style>
