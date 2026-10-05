<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Just shipped: grok-faf-mcp v2.1.0 — The New Era Edition

Context Over MCP: your project's context, served to Grok over a URL.

Glass-box tools: every Grok tool now says if it reads, writes or rewrites.
Its own card · a new look

npx grok-faf-mcp

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/grok-new-era-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The New Era Edition - grok-faf-mcp v2.1.0 | FAF</title>
	<meta
		name="description"
		content="FAF, the IANA-registered format for persistent project context, now delivers Context Over MCP. Fully compatible with AGENTS.md. grok-faf-mcp v2.1.0: glass-box tools, its own card, a new look."
	/>
	<meta property="og:title" content="The New Era Edition - grok-faf-mcp v2.1.0" />
	<meta
		property="og:description"
		content="Glass-box tools: every Grok tool now says what it does — reads, writes or rewrites."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/grok-new-era-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/grok-new-era-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/grok-new-era-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The New Era Edition — grok-faf-mcp v2.1.0 · every Grok tool says what it does"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The New Era Edition - grok-faf-mcp v2.1.0" />
	<meta
		name="twitter:description"
		content="Glass-box tools: every Grok tool now says what it does — reads, writes or rewrites."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/grok-new-era-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The New Era Edition — grok-faf-mcp v2.1.0 · every Grok tool says what it does"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The New Era Edition
		</div>
		<h1>The New Era Edition</h1>
		<p class="version-tag">grok-faf-mcp v2.1.0 · Context Over MCP · glass-box tools · its own card</p>
		<p class="subtitle">
			Glass-box tools: every Grok tool now says what it does — reads, writes or rewrites — so your
			client knows when to ask first. New card, new look at <a href="https://grok.faf.one">grok.faf.one</a>.
		</p>
		<div class="meta">
			<time datetime="2026-10-05">October 5, 2026</time>
			<span class="separator">•</span>
			<span class="category grok">Grok</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/grok-new-era-edition-hero.png"
			alt="The New Era Edition — grok-faf-mcp v2.1.0 · every Grok tool says what it does"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>FAF, the IANA-registered format for persistent project context, now delivers Context
				Over MCP.</strong> Fully compatible with AGENTS.md. grok-faf-mcp v2.1.0 brings it to Grok:
				your project's context over a URL, 20 tools that say what they do, its own card, and a new
				look.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> An agent that connects over MCP has no filesystem. It never
					sees your project files, so every session starts from zero.
				</p>
				<p>
					<strong>Fix.</strong> Your project's context travels over MCP itself: one
					<code>project.faf</code>, served to Grok from a URL, scored the same everywhere.
				</p>
				<p>
					<strong>New state.</strong> Grok knows your stack, your goal and your rules from the first
					prompt. AGENTS.md keeps instructing; FAF defines.
				</p>
			</div>
			<div class="terminal-block">
				<code>npx grok-faf-mcp</code>
			</div>
			<p class="muted-note">
				Or hosted, one line in <code>~/.grok/config.toml</code>:
				<code>url = "https://mcpaas.live/grok/mcp/v1"</code>
			</p>
		</section>

		<section>
			<h2>Since the Always33 Edition</h2>
			<p>
				v2.0.0 gave Grok the same score as every FAF app: one engine, always-33 (<a
					href="/blog/gemini-grok-always33-edition">Part IV</a
				>).
			</p>
			<p>v2.1.0 keeps that engine and makes the whole server easy to see into.</p>
		</section>

		<section>
			<h2>Why it is a new era</h2>
			<p>
				<strong>Context Over MCP.</strong> MCP carries tools. FAF makes it carry your project too,
				so any agent that speaks MCP can be grounded, with or without a filesystem (<a
					href="https://dev.to/wolfejam/context-over-mcp-part-vi-context-you-can-see-1daa"
					target="_blank"
					rel="noopener">the Context Over MCP series</a
				>).
			</p>
			<p>
				<strong>Fully compatible with AGENTS.md.</strong> FAF defines, AGENTS.md instructs, AI
				codes. <code>faf_sync</code> writes your context into AGENTS.md, CLAUDE.md, GEMINI.md and
				.cursorrules, and keeps your own text.
			</p>
			<p>
				<strong>Servers that describe themselves.</strong> Every tool says what it does, and Grok
				FAF's <a href="https://grok.faf.one/.well-known/fafa">FAF passport</a>, <a href="https://grok.faf.one/.well-known/ai-catalog.json">AI Catalog</a> and
				<a href="https://grok.faf.one/.well-known/ard.json">ARD</a> entries say what it is and where it runs. An agent can know Grok FAF
				before it connects.
			</p>
		</section>

		<section>
			<h2>What makes Grok FAF different</h2>
			<ul>
				<li>
					<strong>The first MCP server for Grok.</strong> Grok asked for MCP on a URL. This is it,
					and the first FAF MCP online.
				</li>
				<li>
					<strong>Hosted or local, one score.</strong> One line in Grok's config, or
					<code>npx grok-faf-mcp</code>. Both give the always-33 score faf-cli gives.
				</li>
				<li>
					<strong>Re-grounding, built for Grok on request.</strong> <code>refresh_faf</code>,
					<code>refresh_fafm</code> and <code>refresh_blend</code> pull a long session back to the
					truth in your <code>project.faf</code> and <code>.fafm</code> memory.
				</li>
				<li>
					<strong>An advisor, not an autopilot.</strong> <code>faf_orchestrate_recommendation</code>
					reads the drift signals and recommends a refresh. It never runs one by itself.
				</li>
				<li>
					<strong>LAZY-RAG on xAI Collections.</strong> <code>rag_query</code> asks with retrieved
					context, cached for speed.
				</li>
				<li>
					<strong>Built in public with @grok.</strong> The first v0.2-conformant reader of the
					<a
						href="https://github.com/Wolfe-Jam/faf/blob/main/CONTEXT-INGESTION.md"
						target="_blank"
						rel="noopener">FAF Context Ingestion Contract</a
					>.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 2.1.0 brings</h2>
			<ul>
				<li>
					<strong>Glass-box tools.</strong> All 20 tools carry
					<a href="https://modelcontextprotocol.io/specification/2025-06-18/server/tools" target="_blank" rel="noopener">MCP tool annotations</a>: read only,
					writes, or can overwrite. <strong>Benefit:</strong> clients that read the labels can let
					reads just run and ask before writes. Less clicking, more coding, you stay in charge.
				</li>
				<li>
					<strong>Every write named.</strong> The refresh and FRC tools keep a small receipt of each
					run in your project folder, and their labels say so. <strong>Benefit:</strong> you can
					see what changed, and when.
				</li>
				<li>
					<strong>Its own card.</strong> A FAF passport (<code>agent.fafa</code>) at
					<a href="https://grok.faf.one/.well-known/fafa">grok.faf.one/.well-known/fafa</a>, with <a href="https://grok.faf.one/.well-known/ai-catalog.json">AI Catalog</a>
					and <a href="https://grok.faf.one/.well-known/ard.json">ARD</a> entries that point to it. <strong>Benefit:</strong> agents and
					directories can find Grok FAF on their own.
				</li>
				<li>
					<strong>A new look.</strong> <a href="https://grok.faf.one">grok.faf.one</a>, redesigned
					with the current facts.
				</li>
				<li><strong>Node 22 or later</strong>, like faf-cli and the rest of the FAF family.</li>
			</ul>
			<figure class="page-shot">
				<a href="https://grok.faf.one">
					<img
						src="/blog/grok-new-era-edition-page.png"
						alt="The new grok.faf.one: Your project, known to Grok. Every session."
						width="1200"
						height="900"
						loading="lazy"
						decoding="async"
					/>
				</a>
				<figcaption>The new look: <a href="https://grok.faf.one">grok.faf.one</a></figcaption>
			</figure>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Local</strong> (12 tools by default, the rest with <code>FAF_TOOLS=all</code>):</p>
			<div class="terminal-block">
				<code>npx grok-faf-mcp</code>
			</div>
			<p>
				<strong>Hosted</strong> (19 tools on the edge,
				<a href="https://mcpaas.live/grok/mcp/v1/info">live list</a>):
			</p>
			<div class="terminal-block">
				<code>[mcp_servers.grok-faf-mcp]</code>
				<code>url = "https://mcpaas.live/grok/mcp/v1"</code>
			</div>
			<p class="muted-note">
				More:
				<a href="https://grok.faf.one">grok.faf.one</a>
				·
				<a href="https://docs.faf.one/grok-faf-mcp">docs</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/grok-faf-mcp/releases/tag/v2.1.0"
					target="_blank"
					rel="noopener">release notes</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 2.1.0 (October 5, 2026)</li>
				<li>
					<strong>Identity:</strong>
					<a
						href="https://registry.modelcontextprotocol.io/v0.1/servers/one.faf%2Fgrok-faf-mcp/versions/latest"
						><code>one.faf/grok-faf-mcp</code></a
					> on the MCP Registry
				</li>
				<li>
					<strong>Package:</strong>
					<a href="https://www.npmjs.com/package/grok-faf-mcp">grok-faf-mcp on npm</a>
				</li>
				<li>
					<strong>Format:</strong>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
						><code>application/vnd.faf+yaml</code></a
					>, IANA-registered
				</li>
				<li><strong>Tools:</strong> 20 in all · 12 by default locally · 19 hosted</li>
				<li>
					<strong>Passport:</strong> <code>application/vnd.fafa+yaml</code> at
					<a href="https://grok.faf.one/.well-known/fafa"><code>/.well-known/fafa</code></a>
				</li>
				<li><strong>Scoring:</strong> always-33, the same number faf-cli gives</li>
				<li><strong>Tests:</strong> 611 pass, 0 fail</li>
				<li><strong>Runtime:</strong> Node 22 or later</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Tell us what you think</h2>
			<p>
				What should Grok FAF do next? What would you change? Tell us. Your answer steers the next
				version.
			</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/grok-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
			<p class="muted-note">
				<strong>Bookmark us</strong> for later: <a href="https://grok.faf.one">grok.faf.one</a> ·
				this page (⌘D, or Ctrl+D). <strong>Tell others</strong> who use Grok: Post on X shares this
				post. Let's go.
			</p>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Context Over MCP, for Grok. 🏎️</p>
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
	.category.grok {
		background: #111;
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
