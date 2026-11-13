<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: claude-faf-mcp v7.2 — The Human Slots Edition

Claude suggests, you confirm.

claude-faf-mcp no longer writes your project's goal or six W's.
faf_go shows each suggestion with its source; only what you confirm is written.

Core 14 tools · faf-cli 8.10 inside · .mcpb for Claude Desktop

claude mcp add faf -- npx -y claude-faf-mcp

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/claude-human-slots-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Human Slots Edition - claude-faf-mcp v7.2 | FAF</title>
	<meta
		name="description"
		content="Claude suggests, you confirm. claude-faf-mcp no longer writes your project's goal or six W's: faf_go shows each suggestion with its source, and only what you confirm is written."
	/>
	<meta property="og:title" content="The Human Slots Edition - claude-faf-mcp v7.2" />
	<meta
		property="og:description"
		content="Claude suggests, you confirm: faf_go shows each suggestion for your project's goal and six W's with its source."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/claude-human-slots-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/claude-human-slots-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/claude-human-slots-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="claude-faf-mcp v7.2.1, The Human Slots Edition: Claude suggests. You confirm."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Human Slots Edition - claude-faf-mcp v7.2" />
	<meta
		name="twitter:description"
		content="Claude suggests, you confirm: faf_go shows each suggestion for your project's goal and six W's with its source."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/claude-human-slots-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="claude-faf-mcp v7.2.1, The Human Slots Edition: Claude suggests. You confirm."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Human Slots Edition (claude-faf-mcp)
		</div>
		<h1>The Human Slots Edition</h1>
		<p class="version-tag">claude-faf-mcp v7.2.1</p>
		<p class="subtitle">
			Claude suggests, you confirm. claude-faf-mcp no longer writes your project's goal or six W's:
			faf_go shows each suggestion with its source, and only what you confirm is written.
		</p>
		<div class="meta">
			<time datetime="2026-11-13">November 13, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/claude-human-slots-edition-hero.png"
			alt="claude-faf-mcp v7.2.1, The Human Slots Edition: Claude suggests. You confirm."
			width="1200"
			height="630"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>Claude suggests, you confirm. claude-faf-mcp no longer writes your project's goal or six
					W's: faf_go shows each suggestion with its source, and only what you confirm is written.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>project.faf</code> holds your stack, which the repo can
					tell, and your project's goal and six W's (who, what, why, where, when, how), which only you
					can. Some claude-faf-mcp tools filled those from the README: <code>faf_readme</code> with
					<code>apply</code> wrote them straight into the file.
				</p>
				<p>
					<strong>Fix.</strong> Those seven are yours. Claude can suggest them; you confirm them.
					This is the rule <a href="/blog/human-slots-edition">faf-cli 8.10</a> brought in, and
					claude-faf-mcp now runs on it.
				</p>
				<p>
					<strong>New state.</strong> <code>faf_go</code> shows each empty slot with a suggestion and
					where it came from. Claude asks you; only the answers you confirm go into the file.
				</p>
			</div>
			<div class="terminal-block">
				<code>{`faf_init`}</code>
				<code>{`  3 suggestions for the goal and the six W's (README.md, package.json) — confirm them in faf_go`}</code>
				<code>{` `}</code>
				<code>{`faf_go`}</code>
				<code>{`  human_context.why: "Hand-rolled config parsing breaks on edge cases and gives you untyped data."`}</code>
				<code>{`  source: README.md § Why`}</code>
			</div>
		</section>

		<section>
			<h2>What 7.2 is</h2>
			<ul>
				<li>
					<strong>Suggestions with their source.</strong> <code>faf_go</code> offers faf-cli's
					suggestion for each empty goal or W, with where it came from (<code>README.md § Why</code>,
					<code>package.json description</code>). A slot with nothing to suggest is asked plainly.
				</li>
				<li>
					<strong>Nothing written unconfirmed.</strong> <code>faf_init</code>, <code>faf_auto</code>
					and <code>faf_git</code> leave the goal and six W's empty and say how many suggestions are
					waiting. <code>faf_readme</code> lists suggestions and writes nothing.
				</li>
				<li>
					<strong>faf-cli 8.10 inside.</strong> The same suggestions as <code>faf go</code> in the
					terminal: no install lines, link rows or notices offered. A new project.faf scores lower,
					honestly. Files you already have are not changed.
				</li>
				<li>
					<strong>Claude is told the rule.</strong> The server's instructions name all eight human
					slots, and <code>faf_go</code>, <code>faf_human_add</code> and <code>faf_quick</code> take
					text you have confirmed.
				</li>
				<li>
					<strong>7.2.1.</strong> Running the published 7.2.0 by hand found <code>faf_go</code>'s
					last line still calling the goal and W's "no fact in repo". 7.2.1 keeps them apart from
					stack slots: they are yours to give.
				</li>
				<li>
					<strong>CI on the faf-cli users get.</strong> A daily run tests the server against the
					latest faf-cli.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>claude mcp add faf -- npx -y claude-faf-mcp</code>
				<code>{`# or pinned:`}</code>
				<code>claude mcp add faf -- npx --yes <NpmPkg name="claude-faf-mcp" version="7.2.1" /></code>
			</div>
			<p class="muted-note">
				Claude Desktop, one click: open
				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/download/v7.2.1/claude-faf-mcp-7.2.1.mcpb">claude-faf-mcp-7.2.1.mcpb</a>.
				Then pick the <code>faf</code> prompt, or ask Claude to run <code>faf_go</code>. A RED score
				on a new project is normal: the goal and six W's are yours to confirm.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.2.1 (November 13, 2026), a patch to 7.2.0</li>
				<li><strong>Tools:</strong> Core 14; 30 with <code>FAF_TOOLS=all</code></li>
				<li><strong>Built on:</strong> faf-cli ^8.10.0</li>
				<li><strong>Tests:</strong> 540 passing</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/claude-faf-mcp" target="_blank" rel="noopener">docs.faf.one/claude-faf-mcp</a>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v7.2.0" target="_blank" rel="noopener">v7.2.0</a> ·
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v7.2.1" target="_blank" rel="noopener">v7.2.1</a>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/claude-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Claude suggests. You confirm. 🏎️</p>
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

	/* section-qualified: the post-wide `.post-content section { padding: 0 }` would win otherwise. */
	.post-content section.feedback-invite {
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
