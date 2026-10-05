<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.2.0 — The Ladder Edition

One ladder for every card.

agent.fafa → A2A, MCP Server Card, registry, AI Catalog, ARD.
Add project.faf → the same cards carry your context.

npx faf-cli card init

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/ladder-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Ladder Edition - faf-cli v8.2.0 | FAF</title>
	<meta name="description" content="One ladder for every card: agent.fafa builds the plain cards, and project.faf adds FAF's context. Context Over MCP, carried in the cards themselves." />
	<meta property="og:title" content="The Ladder Edition - faf-cli v8.2.0" />
	<meta property="og:description" content="One ladder for every card: agent.fafa builds the plain cards, and project.faf adds FAF's context." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/ladder-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/ladder-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/ladder-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Ladder Edition — faf-cli v8.2.0 · one ladder for every card" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Ladder Edition - faf-cli v8.2.0" />
	<meta name="twitter:description" content="One ladder for every card: agent.fafa builds the plain cards, and project.faf adds FAF's context." />
	<meta name="twitter:image" content="https://faf.one/blog/ladder-edition-hero.png" />
	<meta name="twitter:image:alt" content="The Ladder Edition — faf-cli v8.2.0 · one ladder for every card" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Ladder Edition
		</div>
		<h1>The Ladder Edition</h1>
		<p class="version-tag">faf-cli v8.2.0 · Cards · Context Over MCP</p>
		<p class="subtitle">One ladder for every card: agent.fafa builds the plain cards, and project.faf adds FAF's context.</p>
		<div class="meta">
			<time datetime="2026-10-05">October 5, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/ladder-edition-hero.png"
			alt="The Ladder Edition — faf-cli v8.2.0: a ladder from NONE to GOOD (AGENTS.md), BETTER (agent.fafa) and BEST (project.faf), beside the A2A card, MCP Server Card, registry identity, AI Catalog and ARD"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>Your agent's cards, from one file. Your project's context, carried in them.</strong>
				faf-cli v8.2.0 writes every discovery card an agent or MCP server needs, and with a
				<code>project.faf</code> the cards carry your context too: Context Over MCP, built into
				MCP's own Server Card and registry entry.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Agents and servers are found through cards: an A2A card, an
					MCP Server Card, a registry entry, catalog rows. Each one is its own format, written by
					hand.
				</p>
				<p>
					<strong>Fix.</strong> Describe your agent once, in an <code>agent.fafa</code>, and faf
					writes every card from it. Add your <code>project.faf</code> and the same cards carry your
					project's context.
				</p>
				<p>
					<strong>New state.</strong> One ladder. Climb to BETTER and you are findable; climb to
					BEST and you are findable and known, with context.
				</p>
			</div>
			<div class="terminal-block">
				<code>npx faf-cli card init</code>
				<code>npx faf-cli cards</code>
			</div>
		</section>

		<section>
			<h2>The ladder</h2>
			<ul>
				<li><strong>NONE.</strong> No context file. Agents guess.</li>
				<li>
					<strong>GOOD: an AGENTS.md.</strong> Instructions an agent reads in your repo.
				</li>
				<li>
					<strong>BETTER: an <code>agent.fafa</code>.</strong> The plain cards its endpoints allow:
					the A2A card, the MCP Server Card, the registry identity, and the AI Catalog and ARD rows.
					Each one written to its own spec, and tested against it. Ready to publish.
				</li>
				<li>
					<strong>BEST: add <code>project.faf</code>.</strong> The same cards, now carrying your
					project's context: verified facts. faf-cli derives them from your code and repo, and you
					approve the human ones. They ride in the A2A
					extension and in the <code>_meta</code> of the Server Card and <code>server.json</code>.
				</li>
			</ul>
			<p>Same identity at both rungs: your <code>agent.fafa</code> is the source of every card, at the BETTER and BEST levels.</p>
		</section>

		<section>
			<h2>Context Over MCP, in the cards</h2>
			<p>
				An agent that connects over MCP has no filesystem, so it never sees your project files.
				FAF delivers your context over MCP itself (<a
					href="https://dev.to/wolfejam/context-over-mcp-part-vi-context-you-can-see-1daa"
					target="_blank"
					rel="noopener">the Context Over MCP series</a
				>). The Ladder Edition takes it one step further: at the BEST level, MCP's own Server Card and
				registry entry carry your context. Whatever finds your server finds your project with it.
			</p>
			<p>
				Fully compatible with AGENTS.md. FAF defines, AGENTS.md instructs, AI codes.
			</p>
		</section>

		<section>
			<h2>What 8.2.0 brings</h2>
			<ul>
				<li>
					<strong>Every card from one file.</strong> <code>faf card init</code> writes an
					<code>agent.fafa</code> from seven answers; <code>faf cards</code> writes the rest.
					<span class="benefit"><strong>Benefit:</strong> one place to change, every card in step.</span>
				</li>
				<li>
					<strong>Context in the cards.</strong> With <code>project.faf</code>, the A2A card, the
					MCP Server Card and <code>server.json</code> carry FAF's context.
					<span class="benefit"><strong>Benefit:</strong> agents that find you know your project from the first call.</span>
				</li>
				<li>
					<strong>The same cards in the browser.</strong> The pack projector (<code>buildPack</code>)
					writes exactly what <code>faf cards</code> writes. <span class="benefit"><strong>Benefit:</strong> build cards in
					a web app or a CI job, same result.</span>
				</li>
				<li>
					<strong>Your published name stays yours.</strong> An existing <code>server.json</code>
					keeps the name it was published under. <span class="benefit"><strong>Benefit:</strong> your registry listing
					never moves without you saying so.</span>
				</li>
				<li>
					<strong>Safe by default.</strong> Every card input is checked: real http(s) addresses,
					real package names, <code>a2a</code> or <code>mcp</code>. <span class="benefit"><strong>Benefit:</strong> the
					cards you publish are cards you can trust.</span>
				</li>
				<li>
					<strong>Clean diffs.</strong> A run that changes nothing writes nothing.
					<span class="benefit"><strong>Benefit:</strong> no noise in your commits.</span>
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx faf-cli card init</code>
				<code>npx faf-cli cards --check</code>
				<code>npx faf-cli cards</code>
			</div>
			<p class="muted-note">
				<code>--check</code> prints the cards and writes nothing. Install:
				<code>npm install -g <NpmPkg name="faf-cli" version="8.2.0" /></code>
				or <code>brew install wolfe-jam/faf/faf-cli</code>.
			</p>
			<p class="muted-note">
				More:
				<a href="https://docs.faf.one/cards">Cards in the docs</a>
				·
				<a href="/blog/pack-of-cards">Pack of Cards, the map</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.2.0"
					target="_blank"
					rel="noopener">release notes</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.2.0 (October 5, 2026)</li>
				<li>
					<strong>Package:</strong>
					<a href="https://www.npmjs.com/package/faf-cli">faf-cli on npm</a> (also as
					<a href="https://www.npmjs.com/package/faf">faf</a>)
				</li>
				<li>
					<strong>Cards:</strong> A2A card · MCP Server Card · registry <code>server.json</code> · AI
					Catalog · ARD
				</li>
				<li>
					<strong>Format:</strong>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
						><code>application/vnd.faf+yaml</code></a
					>, IANA-registered
				</li>
				<li><strong>Tests:</strong> 2160 pass, 0 fail</li>
				<li><strong>Runtime:</strong> Node 22 or later</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Tell us what you think</h2>
			<p>
				Which card should come next? What would you change? Tell us. Your answer steers the next
				version.
			</p>
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
			<p class="muted-note">
				<strong>Bookmark us</strong> for later: <a href="https://faf.one">faf.one</a> · this page
				(⌘D, or Ctrl+D). <strong>Tell others</strong> who build agents: Post on X shares this post.
				Let's go.
			</p>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One ladder for every card. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
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
		color: #fff;
	}

	.page-shot {
		margin: 2rem 0 0;
	}
	.page-shot img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
		border: 1px solid var(--faf-light-gray);
	}
	.page-shot figcaption {
		margin-top: 0.6rem;
		font-size: 0.95rem;
		color: var(--faf-black);
		text-align: center;
	}

	.benefit {
		display: block;
		margin: 0.35rem 0 0 1.25rem;
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

	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8b5a2b;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
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

	.muted-note {
		font-size: 0.9rem;
		color: #555;
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
		text-decoration: none !important;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}
</style>
