<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: mcp-context-card v1.0.0

A project's AGENTS.md, memory, and identity — readable by any MCP client.

Nine tools · stdio + Streamable HTTP · MIT

npx mcp-context-card

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/mcp-context-card';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>mcp-context-card v1.0.0 — a project's context over MCP | FAF</title>
	<meta
		name="description"
		content="mcp-context-card v1.0.0: a stable MCP server that serves a project's AGENTS.md, cross-session memory, and identity to any MCP client. Nine tools, dual transport, Server Card + ai-catalog.json discovery. MIT, npm, MCP Registry."
	/>
	<meta property="og:title" content="mcp-context-card v1.0.0 — a project's context over MCP" />
	<meta
		property="og:description"
		content="AGENTS.md, memory, and identity — served over MCP, and rendered as one card you can see. Stable surface at v1.0.0."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/mcp-context-card" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/mcp-context-card-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="mcp-context-card v1.0.0 — AGENTS.md, memory, identity readable by any MCP client"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="mcp-context-card v1.0.0 — a project's context over MCP" />
	<meta
		name="twitter:description"
		content="Nine tools · stdio + Streamable HTTP · Server Card + ai-catalog.json discovery. Stable at v1.0.0."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/mcp-context-card-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / mcp-context-card
		</div>
		<h1>mcp-context-card</h1>
		<p class="version-tag">v1.0.0 · stable surface · ✪</p>
		<p class="subtitle">
			A project's <strong>AGENTS.md</strong>, cross-session <strong>memory</strong>, and
			<strong>identity</strong> — served over MCP, and rendered as one card you can see.
		</p>
		<div class="meta">
			<time datetime="2026-09-05">September 5, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/mcp-context-card-hero.png"
			alt="mcp-context-card v1.0.0 — AGENTS.md, memory, identity readable by any MCP client"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>mcp-context-card</code> is live at
				<strong>v1.0.0</strong> on <strong>npm</strong> and the
				<strong>MCP Registry</strong> (<code>io.github.Wolfe-Jam/mcp-context-card</code>). It serves
				a project's AGENTS.md, memory, and identity to any MCP client — nine tools, stdio +
				stateless Streamable HTTP, discoverable through the Server Card <code>_meta</code> block
				and an <code>ai-catalog.json</code> sibling. v1.0.0 declares the surface settled: no
				functional change from 0.6.2, this is the reference point downstream pins to.
			</p>
			<div class="terminal-block">
				<code>npx mcp-context-card</code>
				<code>npx mcp-context-card card    # the card, no host needed</code>
			</div>
		</section>

		<section>
			<h2>In plain English</h2>
			<p>
				AGENTS.md is the file you write to tell coding agents how your project works — run this
				command, not that one; prices are integer cents; the schema is generated, edit the source.
			</p>
			<p>
				A coding editor reads that file when it opens your repo. An agent that reaches your project
				through an MCP server does not — MCP has no working directory and no convention for "the
				instructions file." It gets your tools and none of your rules.
			</p>
			<p>
				<code>mcp-context-card</code> is a small server that hands that agent your AGENTS.md over
				MCP — the whole file or one section — plus a bit of memory that survives a restart, and an
				identity it can read back. The agent that came in the side door gets the same briefing as
				the one that opened the repo.
			</p>
		</section>

		<section>
			<h2>What it is</h2>
			<p>Three concerns an MCP client can't see for itself:</p>
			<ul>
				<li>
					<strong>Context</strong> — <code>read_agents_md</code> serves AGENTS.md whole or
					section by section; <code>list_agents_md_sections</code> lists what's there;
					<code>author_agents_md</code> drafts one from the repo's real facts when there isn't one.
				</li>
				<li>
					<strong>Memory</strong> — <code>remember</code> / <code>recall</code> /
					<code>forget</code>, file-backed, proven across a real process boundary in the test
					suite.
				</li>
				<li>
					<strong>Identity</strong> — <code>whoami</code>, from the server's own Server Card, with
					a <code>package.json</code> fallback.
				</li>
			</ul>
			<p>
				Then <strong>discovery</strong> — two ways a client finds those three, through mechanisms
				that already exist: the Server Card <code>_meta</code> block and a self-published
				<code>ai-catalog.json</code>, both generated from the same three sources so a CI check
				fails on drift. <code>list_context_sources</code> and <code>render_context_card</code>
				round out the nine tools.
			</p>
			<p>
				Stand it up as a base MCP, or run it alongside a server you already have — it composes,
				nothing to migrate.
			</p>
		</section>

		<section>
			<h2>The card</h2>
			<p>
				<code>render_context_card</code> takes those three sources and renders them as one
				self-contained HTML page — the same context an agent reads over the wire, laid out as
				something a person can look at. Screenshot it into a pull request, pin it to a status page,
				or just check what a client is actually being told.
			</p>
			<div class="hero-image card-shot">
				<img
					src="/blog/mcp-context-card-card.png"
					alt="the context card — identity, AGENTS.md and memory rendered as one page, light and dark"
					width="1280"
					height="640"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<p>
				<code>GET /card</code> on the HTTP transport, the tool, or
				<code>npx mcp-context-card card</code> with no host at all.
			</p>
		</section>

		<section>
			<h2>Where .faf fits</h2>
			<p>
				Context is plain Markdown — <code>AGENTS.md</code>, the de-facto standard. Memory and
				identity have no de-facto standard yet, so the server uses the IANA-registered FAF formats
				as the worked example: <code>project.fafm</code> for memory,
				<code>.well-known/fafa</code> for identity. Both are swappable — the shapes are the point,
				not the filenames. More on the format family:
				<a href="https://faf.one/agents" target="_blank" rel="noopener">faf.one/agents</a>.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code># run it (npm)</code>
				<code>npx mcp-context-card</code>
				<code>npm i -g mcp-context-card</code>
			</div>
			<div class="terminal-block">
				<code># the card — no host, no config</code>
				<code>npx mcp-context-card card &gt; card.html</code>
			</div>
			<div class="terminal-block">
				<code># point it at a real project</code>
				<code>MCP_CONTEXT_CARD_ROOT=/path/to/project npx mcp-context-card</code>
			</div>
			<p>
				Release:
				<a
					href="https://github.com/Wolfe-Jam/mcp-context-card/releases/tag/v1.0.0"
					target="_blank"
					rel="noopener">v1.0.0</a
				>
				· npm:
				<a href="https://www.npmjs.com/package/mcp-context-card" target="_blank" rel="noopener"
					>mcp-context-card</a
				>
				· Registry: <code>io.github.Wolfe-Jam/mcp-context-card</code>. Host setup for Claude Code,
				Cursor and others is in <code>docs/WIRING.md</code>.
			</p>
		</section>

		<section>
			<h2>The numbers</h2>
			<ul>
				<li><strong>v1.0.0</strong> — npm + MCP Registry + GitHub Release</li>
				<li><strong>9 tools</strong> — stable order, three concerns</li>
				<li><strong>2 transports</strong> — stdio, stateless Streamable HTTP</li>
				<li><strong>2 discovery surfaces</strong> — Server Card <code>_meta</code>, <code>ai-catalog.json</code></li>
				<li><strong>104 tests</strong> — Linux / macOS / Windows</li>
				<li>
					<strong>3 independent verifications</strong> — Cursor (10/10), the MCP SDK client over
					stdio (10/10), <code>@modelcontextprotocol/inspector --strict</code> (clean)
				</li>
				<li><strong>MIT</strong></li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>If it earns it.</p>
			<a
				href="https://github.com/Wolfe-Jam/mcp-context-card"
				target="_blank"
				rel="noopener"
				class="star-btn"
			>
				Star mcp-context-card
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Context, memory, identity — over MCP. 🏎️</p>
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

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}
	.card-shot {
		margin: 1.5rem 0 1.25rem;
		border: 1px solid #e5e5e5;
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

	.post-content ul,
	.post-content ol {
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
