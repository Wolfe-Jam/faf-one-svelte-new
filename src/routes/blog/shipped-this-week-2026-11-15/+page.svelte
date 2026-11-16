<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	// Cloudflare Scrape Shield mangles package@version as "email" — always use NpmPkg in HTML.
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Shipped this week: AI suggests, you confirm

FAF no longer writes your project's goal or six W's. It suggests each one with its source; only what you confirm is written.

Now in faf-cli 8.10.0, claude-faf-mcp 7.2 and faf-mcp 4.2. Plus gemini-faf-mcp 3.3.0 (The Antigravity Edition).

8 releases, 4 apps.

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/shipped-this-week-2026-11-15';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Shipped this Week — Nov 15, 2026 | FAF</title>
	<meta name="description" content="8 releases across 4 apps, November 6 – 15. The headline: AI suggests, you confirm — FAF no longer writes your project's goal or six W's." />
	<meta property="og:title" content="Shipped this Week — Nov 15, 2026" />
	<meta property="og:description" content="8 releases across 4 apps, November 6 – 15. The headline: AI suggests, you confirm — FAF no longer writes your project's goal or six W's." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/shipped-this-week-2026-11-15" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/shipped-this-week-2026-11-15-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/shipped-this-week-2026-11-15-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Shipped this Week, November 15, 2026: 8 releases across 4 apps" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Shipped this Week — Nov 15, 2026" />
	<meta name="twitter:description" content="8 releases across 4 apps, November 6 – 15. The headline: AI suggests, you confirm — FAF no longer writes your project's goal or six W's." />
	<meta name="twitter:image" content="https://faf.one/blog/shipped-this-week-2026-11-15-hero.png" />
	<meta name="twitter:image:alt" content="Shipped this Week, November 15, 2026: 8 releases across 4 apps" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Shipped this Week — Nov 15, 2026
		</div>
		<h1>Shipped this Week</h1>
		<p class="version-tag">November 6 – 15, 2026</p>
		<p class="subtitle">New this week.</p>
		<div class="meta">
			<time datetime="2026-11-15">November 15, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/shipped-this-week-2026-11-15-hero.mp4"
			poster="/blog/shipped-this-week-2026-11-15-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="Shipped this Week, November 6 to 15: one column per app, faf-cli, claude-faf-mcp, faf-mcp and gemini-faf-mcp; each release drops into its column in the order it shipped, to 8."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> 8 releases across 4 apps. The one that matters most:
				<strong>AI suggests, you confirm.</strong> FAF no longer writes your project's goal or six W's.
			</p>
		</section>

		<section>
			<h2>AI suggests, you confirm</h2>
			<p>
				The goal and the six W's (who, what, why, where, when, how) are yours to say. FAF now suggests
				each one with where it came from (<code>README.md § Why</code>,
				<code>package.json description</code>), and only what you confirm is written.
			</p>
			<p>This week that became the same in three FAF tools:</p>
			<ul class="rule-list">
				<li><strong>faf-cli</strong> 8.10.0 (npm)</li>
				<li><strong>claude-faf-mcp</strong> 7.2.0 (npm)</li>
				<li><strong>faf-mcp</strong> 4.2.0 (npm)</li>
			</ul>
			<p>
				The latest release of each app below was installed cold from its registry before it went on
				this list.
			</p>
		</section>

		<section>
			<h2>faf-cli</h2>
			<p class="ship-line">
				<strong>v8.10.0</strong> — The Human Slots Edition — AI suggests, you confirm. faf no longer
				writes your project's goal or six W's: it suggests them, and you confirm each one in
				<code>faf go</code>.
			</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="8.10.0" /></code>
			</div>
			<p class="ship-notes"><a href="/blog/human-slots-edition">Read the post</a></p>
		</section>

		<section>
			<h2>claude-faf-mcp</h2>
			<p class="ship-line">
				<strong>v7.2.1</strong> — <code>faf_go</code>'s closing line no longer calls the goal and six
				W's "no fact in repo": they are the user's to give.
			</p>
			<p class="ship-line">
				<strong>v7.2.0</strong> — The Human Slots Edition — Claude suggests, you confirm.
				claude-faf-mcp no longer writes your project's goal or six W's: faf_go shows each suggestion
				with its source, and only what you confirm is written.
			</p>
			<div class="terminal-block">
				<code>claude mcp add faf -- npx --yes <NpmPkg name="claude-faf-mcp" version="7.2.1" /></code>
			</div>
			<p class="ship-notes"><a href="/blog/claude-human-slots-edition">Read the post</a></p>
		</section>

		<section>
			<h2>faf-mcp</h2>
			<p class="ship-line">
				<strong>v4.2.0</strong> — The Human Slots Edition — AI suggests, you confirm. faf-mcp no longer
				writes your project's goal or six W's: faf_go shows each suggestion with its source, and only
				what you confirm is written.
			</p>
			<p class="ship-line">
				<strong>v4.1.3</strong> — The Instructions Edition — faf-mcp now says what faf-cli's writer
				did: the note when faf's block goes above older faf text, and each file it could not write.
			</p>
			<div class="terminal-block">
				<code>claude mcp add faf-mcp -- npx --yes <NpmPkg name="faf-mcp" version="4.2.0" /></code>
			</div>
			<p class="ship-notes"><a href="/blog/faf-mcp-human-slots-edition">Read the post</a></p>
		</section>

		<section>
			<h2>gemini-faf-mcp</h2>
			<p class="ship-line">
				<strong>v3.3.0</strong> — The Antigravity Edition — gemini-faf-mcp comes to Antigravity CLI:
				install it as a plugin and it works in your project. Simple.
				<a href="/blog/gemini-antigravity-edition">Read the post</a>.
			</p>
			<p class="ship-line">
				<strong>v3.2.1</strong> — The Straight Answers Edition — lifts gemini-faf-mcp into Antigravity
				CLI: it installs as a plugin and works in your project.
			</p>
			<p class="ship-line">
				<strong>v3.2.0</strong> — The Straight Answers Edition — Every gemini-faf-mcp failure now
				reaches your client as an error: MCP's isError is set, the reason text is unchanged, and
				/faf:setup checks before it creates.
				<a href="/blog/gemini-straight-answers-edition">Read the post</a>.
			</p>
			<div class="terminal-block">
				<code>agy plugin install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
			</div>
		</section>

		<section>
			<h2>Thank you</h2>
			<p>
				FAF is over 218,000 downloads. Every install, star and comment helps.
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
	.hero-image img,
	.hero-image video {
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
	.ship-para {
		margin: 0.25rem 0 0.6rem;
	}
	.rule-list,
	.patch-list {
		margin: 0 0 1rem;
		padding-left: 1.4rem;
		line-height: 1.75;
	}
	.patch-list li {
		margin-bottom: 0.35rem;
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
