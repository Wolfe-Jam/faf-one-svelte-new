<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Shipped this week: Agent Discovery Check v2.0.0

Is this site ready for AI agents? One click tells you.

…and 3 new reads on faf.one, including our first guest post.

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/shipped-this-week-2026-10-23';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Shipped this Week — Oct 23, 2026 | FAF</title>
	<meta name="description" content="One launch and three new reads, October 17–22. The headline: Agent Discovery Check v2.0.0, live on the Chrome Web Store." />
	<meta property="og:title" content="Shipped this Week — Oct 23, 2026" />
	<meta property="og:description" content="One launch and three new reads, October 17–22. The headline: Agent Discovery Check v2.0.0, live on the Chrome Web Store." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/shipped-this-week-2026-10-23" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/shipped-this-week-2026-10-23-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/shipped-this-week-2026-10-23-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Shipped this Week, October 23, 2026" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Shipped this Week — Oct 23, 2026" />
	<meta name="twitter:description" content="One launch and three new reads, October 17–22. The headline: Agent Discovery Check v2.0.0, live on the Chrome Web Store." />
	<meta name="twitter:image" content="https://faf.one/blog/shipped-this-week-2026-10-23-hero.png" />
	<meta name="twitter:image:alt" content="Shipped this Week, October 23, 2026" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Shipped this Week — Oct 23, 2026
		</div>
		<h1>Shipped this Week</h1>
		<p class="version-tag">October 17–22, 2026</p>
		<p class="subtitle">Everything we released this week, one line each.</p>
		<div class="meta">
			<time datetime="2026-10-23">October 23, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/shipped-this-week-2026-10-23-hero.png"
			alt="Shipped this Week, October 23, 2026"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> One launch and three new reads. The one that matters most: Agent
				Discovery Check v2.0.0, free on the Chrome Web Store. Is this site ready for AI agents? One
				click tells you.
			</p>
		</section>

		<section>
			<h2>Agent Discovery Check</h2>
			<p class="ship-line">
				<strong>v2.0.0</strong> — Is this site ready for AI agents? One click tells you.
			</p>
			<p class="ship-notes">
				<a href="/blog/agent-discovery-check">Read the post</a> ·
				<a
					href="https://chromewebstore.google.com/detail/agent-discovery-check/lnecebepmpjpilldfmndnaofbfjkjlkm"
					target="_blank"
					rel="noopener">Free on the Chrome Web Store</a
				>
			</p>
		</section>

		<section>
			<h2>On faf.one</h2>
			<p class="ship-line">
				<strong>A yes is not context</strong> (Guest post) — What an agent should remember about an
				approval. By Arthur Teboul, faf.one's first guest writer.
				<a href="/blog/a-yes-is-not-context">Read it</a>.
			</p>
			<p class="ship-line">
				<strong>How to Shuffle the Pack</strong> (Story) — MCP Server Card census reproduction
				guidance. <a href="/blog/shuffle-the-pack">Read it</a>.
			</p>
			<p class="ship-line">
				<strong>Checked Yours?</strong> (updated) — MCP Server Cards, counted twice, now with the
				October 20 census. <a href="/blog/checked-yours">Read it</a>.
			</p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-chrome-extension/issues/new"
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
