<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Just shipped: gemini-faf-mcp v3.1.0 — The New Era Edition

Your project, known to Gemini. Every session.

13 tools, each saying if it reads, writes or rewrites.
In Gemini CLI and Google Antigravity.

uvx gemini-faf-mcp

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/gemini-new-era-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The New Era Edition - gemini-faf-mcp v3.1.0 | FAF</title>
	<meta name="description" content="Glass-box tools: every Gemini tool now says what it does — reads, writes or rewrites — so your client knows when to ask first. In Gemini CLI and Google Antigravity." />
	<meta property="og:title" content="The New Era Edition - gemini-faf-mcp v3.1.0" />
	<meta property="og:description" content="Your project, known to Gemini. 13 tools that say what they do, in Gemini CLI and Google Antigravity." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/gemini-new-era-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/gemini-new-era-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/gemini-new-era-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="gemini-faf-mcp v3.1.0, The New Era Edition — Your project, known to Gemini" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The New Era Edition - gemini-faf-mcp v3.1.0" />
	<meta name="twitter:description" content="Your project, known to Gemini. 13 tools that say what they do, in Gemini CLI and Google Antigravity." />
	<meta name="twitter:image" content="https://faf.one/blog/gemini-new-era-edition-hero.png" />
	<meta name="twitter:image:alt" content="gemini-faf-mcp v3.1.0, The New Era Edition — Your project, known to Gemini" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The New Era Edition (Gemini)
		</div>
		<h1>The New Era Edition, for Gemini</h1>
		<p class="version-tag">gemini-faf-mcp v3.1.0 · Context Over MCP · Gemini CLI · Google Antigravity</p>
		<p class="subtitle">Glass-box tools: every Gemini tool now says what it does — reads, writes or rewrites — so your client knows when to ask first. In Gemini CLI and Google Antigravity.</p>
		<div class="meta">
			<time datetime="2026-10-06">October 6, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/gemini-new-era-edition-hero.png"
			alt="gemini-faf-mcp v3.1.0, The New Era Edition — Your project, known to Gemini. 13 tools. Each one says what it does."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>Your project, known to Gemini. Every session.</strong> gemini-faf-mcp v3.1.0 brings
				FAF's Context Over MCP to Gemini: your IANA-registered <code>project.faf</code> read at the
				start of every session, 13 tools that say what they do, in Gemini CLI and Google
				Antigravity. Fully compatible with AGENTS.md.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Every Gemini session starts cold. You re-explain your stack,
					your goal and your rules, every time.
				</p>
				<p>
					<strong>Fix.</strong> One <code>project.faf</code> holds them. Gemini reads it at the
					start of every session, in the CLI or in Antigravity.
				</p>
				<p>
					<strong>New state.</strong> Gemini already knows your project, and every tool says
					whether it reads, writes or rewrites, so your client knows when to ask you first.
				</p>
			</div>
			<div class="terminal-block">
				<code>gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
			</div>
			<p class="muted-note">
				Or any MCP client: <code>uvx gemini-faf-mcp</code>. Then <code>/faf:setup</code> in Gemini
				CLI.
			</p>
		</section>

		<section>
			<h2>Why it is a new era</h2>
			<p>
				<strong>Context Over MCP.</strong> An agent that connects over MCP never sees your project
				files. FAF delivers the context over MCP itself (<a
					href="https://dev.to/wolfejam/context-over-mcp-part-vi-context-you-can-see-1daa"
					target="_blank"
					rel="noopener">the Context Over MCP series</a
				>), and gemini-faf-mcp carries it into Gemini.
			</p>
			<p>
				<strong>Fully compatible with AGENTS.md.</strong> FAF defines, AGENTS.md instructs, AI
				codes. <code>faf_gemini</code> and <code>faf_agents</code> write GEMINI.md and AGENTS.md from
				your <code>project.faf</code>, and keep your own text. Gemini CLI reads GEMINI.md by default, and
				AGENTS.md too with one setting:
			</p>
			<div class="terminal-block">
				<code>{`{ "context": { "fileName": ["AGENTS.md", "GEMINI.md"] } }`}</code>
			</div>
			<p class="muted-note">
				In <code>.gemini/settings.json</code>, per the
				<a
					href="https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md"
					target="_blank"
					rel="noopener">Gemini CLI docs</a
				>.
			</p>
		</section>

		<section>
			<h2>What 3.1.0 brings</h2>
			<ul>
				<li>
					<strong>Glass-box tools.</strong> All 13 tools carry
					<a href="https://modelcontextprotocol.io/specification/2025-06-18/server/tools" target="_blank" rel="noopener">MCP tool annotations</a>: 8 read only, 4
					write without losing anything, and <code>faf_migrate</code> rewrites the file.
					<span class="benefit"
						><strong>Benefit:</strong> reads can just run; writes ask first. Less clicking, you stay
						in charge.</span
					>
				</li>
				<li>
					<strong>Works in Google Antigravity.</strong> Local with <code>uvx</code>, or hosted with
					one <code>serverUrl</code>.
					<span class="benefit"
						><strong>Benefit:</strong> the same project context in Gemini CLI and in Antigravity.</span
					>
				</li>
				<li>
					<strong>Its own card.</strong> A refreshed FAF passport (<code>agent.fafa</code>) and MCP
					Server Card, with all 13 tools and FAF's context.
					<span class="benefit"
						><strong>Benefit:</strong> agents and directories can find Gemini FAF and know what it
						does.</span
					>
				</li>
				<li>
					<strong>A new look.</strong> <a href="https://wolfe-jam.github.io/gemini-faf-mcp/">The gemini-faf-mcp page</a>, redesigned to
					feel at home for Google developers.
					<span class="benefit"
						><strong>Benefit:</strong> install in three steps, both Antigravity configs, every tool
						at a glance.</span
					>
				</li>
			</ul>
			<figure class="page-shot">
				<a href="https://wolfe-jam.github.io/gemini-faf-mcp/">
					<img
						src="/blog/gemini-new-era-edition-page.png"
						alt="The new gemini-faf-mcp page: Your project, known to Gemini."
						width="1200"
						height="900"
						loading="lazy"
						decoding="async"
					/>
				</a>
				<figcaption>The new look: <a href="https://wolfe-jam.github.io/gemini-faf-mcp/">wolfe-jam.github.io/gemini-faf-mcp</a></figcaption>
			</figure>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Gemini CLI</strong> (adds the MCP server and the <code>/faf</code> commands):</p>
			<div class="terminal-block">
				<code>gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
				<code>/faf:setup</code>
				<code>/faf:score</code>
			</div>
			<p><strong>Google Antigravity</strong>, in <code>~/.gemini/config/mcp_config.json</code>:</p>
			<div class="terminal-block">
				<code>{`{ "mcpServers": { "gemini-faf": { "command": "uvx", "args": ["gemini-faf-mcp"] } } }`}</code>
			</div>
			<p class="muted-note">
				Hosted instead: <code>"serverUrl": "https://mcpaas.live/gemini/mcp/v1"</code>. More:
				<a href="https://wolfe-jam.github.io/gemini-faf-mcp/">the gemini-faf-mcp page</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/gemini-faf-mcp/releases/tag/v3.1.0"
					target="_blank"
					rel="noopener">release notes</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 3.1.0 (October 6, 2026)</li>
				<li>
					<strong>Package:</strong>
					<a href="https://pypi.org/project/gemini-faf-mcp/">gemini-faf-mcp on PyPI</a> · Python
					3.11 or later
				</li>
				<li>
					<strong>Identity:</strong>
					<a
						href="https://registry.modelcontextprotocol.io/v0.1/servers/one.faf%2Fgemini-faf-mcp/versions/latest"
						><code>one.faf/gemini-faf-mcp</code></a
					> on the MCP Registry
				</li>
				<li>
					<strong>Format:</strong>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
						><code>application/vnd.faf+yaml</code></a
					>, IANA-registered
				</li>
				<li><strong>Tools:</strong> 13, all labelled</li>
				<li><strong>Scoring:</strong> always-33, the same number faf-cli gives</li>
				<li><strong>Tests:</strong> 275 pass, 0 fail</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Tell us what you think</h2>
			<p>
				What should Gemini FAF do next? What would you change? Tell us. Your answer steers the next
				version.
			</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/gemini-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
			<p class="muted-note">
				<strong>Bookmark us</strong> for later: <a href="https://wolfe-jam.github.io/gemini-faf-mcp/">the gemini-faf-mcp page</a> · this
				page (⌘D, or Ctrl+D). <strong>Tell others</strong> who use Gemini: Post on X shares this
				post. Let's go.
			</p>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Your project, known to Gemini. 🏎️</p>
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
