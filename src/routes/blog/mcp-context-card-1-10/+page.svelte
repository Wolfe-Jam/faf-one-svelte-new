<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: mcp-context-card v1.10.2

An agent that reaches a project over MCP has no working directory. This server hands it the AGENTS.md, the memory and the identity.

AI Catalog v0.9 ids.
Discovery names only a host the operator vouches for.

10 tools · light or dark card · npm + MCP Registry

npx mcp-context-card card

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/mcp-context-card-1-10';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>mcp-context-card v1.10.2 - context, memory and identity over MCP | FAF</title>
	<meta
		name="description"
		content="MCP server for a project's context (AGENTS.md), memory, and identity — base or drop-in extension. v1.10.2: AI Catalog v0.9 ids, and discovery that names only a host the operator vouches for."
	/>
	<meta property="og:title" content="mcp-context-card v1.10.2 - context, memory and identity over MCP" />
	<meta
		property="og:description"
		content="AI Catalog v0.9 ids, and discovery that names only a host the operator vouches for. 10 tools, a light or dark card."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/mcp-context-card-1-10" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/mcp-context-card-1-10-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The mcp-context-card business card at v1.10.2, light and dark, side by side"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="mcp-context-card v1.10.2 - context, memory and identity over MCP" />
	<meta
		name="twitter:description"
		content="AI Catalog v0.9 ids, and discovery that names only a host the operator vouches for. 10 tools, a light or dark card."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/mcp-context-card-1-10-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The mcp-context-card business card at v1.10.2, light and dark, side by side"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / mcp-context-card 1.10
		</div>
		<h1>mcp-context-card 1.10</h1>
		<p class="version-tag">mcp-context-card v1.10.2</p>
		<p class="subtitle">
			MCP server for a project's context (AGENTS.md), memory, and identity — base or drop-in
			extension.
		</p>
		<div class="meta">
			<time datetime="2026-11-28">November 28, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/mcp-context-card-1-10.mp4"
			poster="/blog/mcp-context-card-1-10-hero.png"
			autoplay
			muted
			loop
			playsinline
			aria-label="The business card in light and dark, flipping in turn to its About side, then the light card's About, Context and Memory tabs"
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> mcp-context-card serves a project's <code>AGENTS.md</code>, memory
				and identity to any MCP client, and shows them as a business card in light or dark. 1.10
				follows AI Catalog v0.9, and 1.10.2 names only a host the operator vouches for.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>AGENTS.md</code> is a file in a repo. An agent that
					reaches the project over MCP has no folder to look in, so it can't find it.
				</p>
				<p>
					<strong>Fix.</strong> One MCP server that hands the agent the instructions, the facts it
					remembered last session, and who the project is.
				</p>
				<p>
					<strong>New state.</strong> Any MCP client can read all three, and people see the same
					thing as a card.
				</p>
			</div>
			<div class="terminal-block">
				<code>npx mcp-context-card card</code>
			</div>
			<p class="note">Run it in your project folder: it writes the card and opens it in your browser.</p>
		</section>

		<section>
			<h2>Since 1.0</h2>
			<p>
				The last post here was <a href="/blog/mcp-context-card">v1.0.0</a>, in September. 23
				releases since, each on npm and the MCP Registry:
			</p>
			<ul>
				<li><strong>The card</strong>: drawn in the chat by MCP Apps hosts, Markdown elsewhere (1.2.0, 1.9.0)</li>
				<li><strong>No config</strong>: the project found through MCP roots (1.3.0)</li>
				<li><strong>Discovery</strong>: a Server Card and an AI Catalog (1.5.0)</li>
				<li><strong>MCP 2026-07-28</strong> alongside 2025, on the MCP SDK v2 (1.8.0)</li>
				<li><strong>10 tools</strong>, all annotated, 7 read-only (9 at 1.0.0)</li>
			</ul>
		</section>

		<section>
			<h2>What 1.10 is</h2>
			<ul>
				<li>
					<strong>AI Catalog v0.9 ids.</strong> Each entry is
					<code>urn:air:&#123;domain&#125;:&#123;name&#125;-&#123;kind&#125;</code>. One segment
					after the domain can't be read the wrong way round: v0.9 reads it as a name with no kind.
				</li>
				<li>
					<strong>Only a host you vouch for.</strong> Over HTTP, the card and catalog name the
					server's address only when it is loopback on a local bind or listed in
					<code>MCP_CONTEXT_CARD_ALLOWED_HOSTS</code>. A request header can't set it.
				</li>
				<li>
					<strong>Every catalog URL resolves.</strong> Only files the server serves are listed.
				</li>
			</ul>
			<p class="note">
				Upgrading a deploy reached by a public name? List that name in
				<code>MCP_CONTEXT_CARD_ALLOWED_HOSTS</code>. Without it, the card and catalog name no host.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>See your project's card:</strong></p>
			<div class="terminal-block">
				<code>npx <NpmPkg name="mcp-context-card" version="1.10.2" /> card</code>
			</div>
			<p><strong>Add it to Claude Code</strong>, then say <em>show context card</em>:</p>
			<div class="terminal-block">
				<code>claude mcp add contextcard -- npx -y mcp-context-card</code>
			</div>
			<p class="note">
				goose, Cursor and HTTP setup:
				<a href="https://github.com/Wolfe-Jam/mcp-context-card#wire-it-into-a-host" target="_blank" rel="noopener">README</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 1.10.2 (November 28, 2026)</li>
				<li><strong>Identity:</strong> <code>io.github.Wolfe-Jam/mcp-context-card</code></li>
				<li><strong>Tools:</strong> 10, plus the prompt <code>show</code></li>
				<li><strong>Transports:</strong> stdio · Streamable HTTP (local by default)</li>
				<li><strong>Tests:</strong> 281, on Linux, macOS and Windows</li>
				<li><strong>Licence:</strong> MIT</li>
			</ul>
			<p class="note">
				<a href="https://github.com/Wolfe-Jam/mcp-context-card/releases/tag/v1.10.2" target="_blank" rel="noopener">Release notes</a>
				·
				<a href="https://github.com/Wolfe-Jam/mcp-context-card" target="_blank" rel="noopener">Repo</a>
			</p>
		</section>

		<section class="coming-soon">
			<h2>Coming soon</h2>
			<p>A deep dive on the cards, on wolfejam's engineering blog.</p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/mcp-context-card/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Context, memory and identity over MCP. 🏎️</p>
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
		font-size: 1.2rem;
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
		margin-bottom: 2rem;
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
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
		background: #f4f4f4; /* literal-ok: media frame, the film's own background */
	}
	.hero-image video {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: 1200 / 630;
	}

	/* The site-wide section rule adds 96px top and bottom; posts need none. */
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

	.note {
		font-size: 0.95rem;
		color: var(--faf-dark);
	}

	.terminal-block {
		background: var(--faf-solid-bg);
		border-radius: 8px;
		padding: 1.1rem 1.4rem;
		margin: 1rem 0;
		overflow-x: auto;
	}
	.terminal-block code {
		background: none;
		color: #00ff88;
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
		border: none; /* the site-wide code pill adds a hairline border */
	}

	.post-content section.coming-soon {
		padding: 1.25rem 1.35rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border-radius: 10px;
	}
	.coming-soon h2 {
		font-size: 1.2rem;
		margin-bottom: 0.4rem;
	}
	.coming-soon p {
		margin: 0;
	}

	.post-content section.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-radius: 10px;
		border-left: 4px solid var(--faf-cyan-text);
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
	}
	.post-content a.feedback-btn.secondary {
		background: transparent;
		color: var(--faf-black);
		border: 2px solid var(--faf-black);
	}
	.post-content a.feedback-btn:hover {
		opacity: 0.85;
	}

	.post-content section.footer-note {
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
