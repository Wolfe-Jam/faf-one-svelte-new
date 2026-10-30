<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	// Cloudflare Scrape Shield mangles package@version as "email" — always use NpmPkg in HTML.
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Shipped this week: The Instructions Edition

Three MCP servers now tell the model how their tools fit together.

…and 8 more releases, including faf-cli 8.5.0 and skills-ladder.

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/shipped-this-week-2026-10-30';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Shipped this Week — Oct 30, 2026 | FAF</title>
	<meta name="description" content="11 releases across 6 apps, October 23–29. The headline: The Instructions Edition, three MCP servers that now tell the model how their tools fit together." />
	<meta property="og:title" content="Shipped this Week — Oct 30, 2026" />
	<meta property="og:description" content="11 releases across 6 apps, October 23–29. The headline: The Instructions Edition, three MCP servers that now tell the model how their tools fit together." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/shipped-this-week-2026-10-30" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/shipped-this-week-2026-10-30-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/shipped-this-week-2026-10-30-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Shipped this Week, October 30, 2026" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Shipped this Week — Oct 30, 2026" />
	<meta name="twitter:description" content="11 releases across 6 apps, October 23–29. The headline: The Instructions Edition, three MCP servers that now tell the model how their tools fit together." />
	<meta name="twitter:image" content="https://faf.one/blog/shipped-this-week-2026-10-30-hero.png" />
	<meta name="twitter:image:alt" content="Shipped this Week, October 30, 2026" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Shipped this Week — Oct 30, 2026
		</div>
		<h1>Shipped this Week</h1>
		<p class="version-tag">October 23–29, 2026</p>
		<p class="subtitle">New this week.</p>
		<div class="meta">
			<time datetime="2026-10-30">October 30, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/shipped-this-week-2026-10-30-hero.png"
			alt="Shipped this Week, October 30, 2026"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> 11 releases across 6 apps. The one that matters most: The
				Instructions Edition. claude-faf-mcp, faf-mcp and grok-faf-mcp now tell the model how their
				tools fit together.
			</p>
		</section>

		<section>
			<h2>claude-faf-mcp</h2>
			<p class="ship-line">
				<strong>v7.1.0</strong> — The Instructions Edition — claude-faf-mcp now tells Claude how its
				tools fit together: server instructions in initialize (637 characters), plus faf-cli 8.5.0,
				which knows a skills repo when it sees one.
			</p>
			<div class="terminal-block">
				<code>claude mcp add claude-faf-mcp -- npx --yes <NpmPkg name="claude-faf-mcp" version="7.1.0" /></code>
			</div>
			<p class="ship-notes"><a href="/blog/instructions-edition">Read the post</a></p>
		</section>

		<section>
			<h2>faf-mcp</h2>
			<p class="ship-line">
				<strong>v4.1.1</strong> — One rule for project questions: read project.faf first.
			</p>
			<p class="ship-line">
				<strong>v4.1.0</strong> — The Instructions Edition — faf-mcp now tells the model how its
				tools fit together: server instructions in initialize (642 characters), plus faf-cli 8.5.0,
				which knows a skills repo when it sees one.
			</p>
			<div class="terminal-block">
				<code>claude mcp add faf-mcp -- npx --yes <NpmPkg name="faf-mcp" version="4.1.1" /></code>
			</div>
			<p class="ship-notes">
				<a href="/blog/instructions-edition">Read the post</a> ·
				<a href="https://github.com/Wolfe-Jam/faf-mcp/releases/tag/v4.1.1" target="_blank" rel="noopener"
					>v4.1.1 notes</a
				>
			</p>
		</section>

		<section>
			<h2>grok-faf-mcp</h2>
			<p class="ship-line">
				<strong>v2.2.2</strong> — Cleanup: removes leftover two-way sync wording.
			</p>
			<p class="ship-line">
				<strong>v2.2.1</strong> — One rule for project questions: read project.faf first.
			</p>
			<p class="ship-line">
				<strong>v2.2.0</strong> — The Instructions Edition — grok-faf-mcp now tells Grok how its
				tools fit together, context and memory: server instructions in initialize (615 characters),
				plus faf-cli 8.5.0, which knows a skills repo when it sees one.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="grok-faf-mcp" version="2.2.2" /></code>
			</div>
			<p class="ship-notes">
				<a href="/blog/instructions-edition">Read the post</a> ·
				<a href="https://github.com/Wolfe-Jam/grok-faf-mcp/releases/tag/v2.2.1" target="_blank" rel="noopener"
					>v2.2.1 notes</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/grok-faf-mcp/releases/tag/v2.2.2" target="_blank" rel="noopener"
					>v2.2.2 notes</a
				>
			</p>
		</section>

		<section>
			<h2>faf-cli</h2>
			<p class="ship-line">
				<strong>v8.5.0</strong> — The Agent Skills Edition — faf knows a skills repo when it sees
				one, and the skills types name their framework: <code>skills</code> is 10 slots,
				<code>skills-plugin</code> is 14.
				<a href="/blog/agent-skills-edition">Read the post</a>.
			</p>
			<p class="ship-line">
				<strong>v8.4.0</strong> — The Skills Edition — FAF has known Skills for a while; we both
				speak YAML. Now it's official: FAF adds Skills to the CLI.
				<a href="/blog/skills-edition">Read the post</a>.
			</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="8.5.0" /></code>
			</div>
		</section>

		<section>
			<h2>skills-ladder</h2>
			<p class="ship-line">
				<strong>v0.1.1</strong> — Docs only; no change to the checks.
			</p>
			<p class="ship-line">
				<strong>v0.1.0</strong> — First version. Rates every <code>SKILL.md</code> under a path on
				a ladder (GOOD · BETTER · BEST), read-only.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="skills-ladder" version="0.1.1" /> .</code>
			</div>
			<p class="ship-notes"><a href="/blog/skills-ladder">Read the post</a></p>
		</section>

		<section>
			<h2>grok-faf-voice</h2>
			<p class="ship-line">
				<strong>v0.5.0</strong> — The Ask-First Memory Edition — <code>VoiceAgent()</code> opens on
				the memory stored at your namepoint, and only writes the call back when you pass
				<code>etch=True</code>.
			</p>
			<div class="terminal-block">
				<code>pip install grok-faf-voice==0.5.0</code>
			</div>
			<p class="ship-notes">
				<a href="https://github.com/Wolfe-Jam/grok-faf-voice/releases/tag/v0.5.0" target="_blank" rel="noopener"
					>Release notes</a
				>
			</p>
		</section>

		<section>
			<h2>On faf.one</h2>
			<p class="ship-line">
				<strong>Beyond Valid</strong> (Interop) — A skill can pass the validator and still leave an
				agent guessing. Six steps, by hand, from a valid SKILL.md to one an agent can choose, run
				safely and finish. <a href="/blog/beyond-valid">Read it</a>.
			</p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-mcp/issues/new"
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

	.ship-line {
		margin: 0 0 0.6rem;
	}
	.ship-notes {
		margin-top: 0.4rem;
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
