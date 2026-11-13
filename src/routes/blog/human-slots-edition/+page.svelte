<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.10.0 — The Human Slots Edition

AI suggests, you confirm.

faf no longer writes your project's goal or six W's.
It suggests them in gray, with the source; Enter confirms each one.

2714 tests · Homebrew too

npx faf-cli@8.10.0 go

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/human-slots-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Human Slots Edition - faf-cli v8.10.0 | FAF</title>
	<meta
		name="description"
		content="AI suggests, you confirm. faf no longer writes your project's goal or six W's: it suggests them, and you confirm each one in faf go."
	/>
	<meta property="og:title" content="The Human Slots Edition - faf-cli v8.10.0" />
	<meta
		property="og:description"
		content="AI suggests, you confirm. faf suggests your project's goal and six W's; you confirm each one in faf go."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/human-slots-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/human-slots-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/human-slots-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.10.0, The Human Slots Edition: AI suggests. You confirm."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Human Slots Edition - faf-cli v8.10.0" />
	<meta
		name="twitter:description"
		content="AI suggests, you confirm. faf suggests your project's goal and six W's; you confirm each one in faf go."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/human-slots-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.10.0, The Human Slots Edition: AI suggests. You confirm."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Human Slots Edition
		</div>
		<h1>The Human Slots Edition</h1>
		<p class="version-tag">faf-cli v8.10.0</p>
		<p class="subtitle">
			AI suggests, you confirm. faf no longer writes your project's goal or six W's: it suggests
			them, and you confirm each one in <code>faf go</code>.
		</p>
		<div class="meta">
			<time datetime="2026-11-13">November 13, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/human-slots-edition-hero.png"
			alt="faf-cli v8.10.0, The Human Slots Edition: AI suggests. You confirm."
			width="1200"
			height="630"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>AI suggests, you confirm. faf no longer writes your project's goal or six W's: it suggests
					them, and you confirm each one in <code>faf go</code>.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>project.faf</code> holds two kinds of facts. The stack
					(language, framework, build) is in the repo, and faf detects it. The goal and the six W's
					(who, what, why, where, when, how) are yours: why the project exists, who it's for. faf
					filled those from the README and package.json too: on a small test repo, 8.9.0 wrote the
					install line under <code>## How to install</code> into <code>how</code>, and the repository
					field into <code>where</code>.
				</p>
				<p>
					<strong>Fix.</strong> Those seven are human slots. AI can suggest them; only a person
					confirms them.
				</p>
				<p>
					<strong>New state.</strong> <code>faf init</code> and <code>faf auto</code> leave them empty
					and say how many suggestions are waiting. <code>faf go</code> shows each one in gray, with
					where it came from. Enter confirms it, Tab edits it, <code>skip</code> leaves the slot empty.
				</p>
			</div>
			<div class="terminal-block">
				<code>{`$ faf init`}</code>
				<code>{`  3 suggestions for the goal and the six W's (README.md, package.json) — confirm them in 'faf go'`}</code>
				<code>{` `}</code>
				<code>{`$ faf go`}</code>
				<code>{`  suggested from README.md § Why`}</code>
				<code>{`  Why does it exist? (one line, every word earns its place)`}</code>
				<code>{`  Hand-rolled config parsing breaks on edge cases and gives you untyped data.`}</code>
				<code>{`  (suggested · Tab to edit · Enter to confirm)`}</code>
			</div>
		</section>

		<section>
			<h2>What 8.10 is</h2>
			<ul>
				<li>
					<strong>Suggestions in gray.</strong> <code>faf go</code> shows a suggestion for the goal and
					each W, with its source (<code>README.md § Why</code>, <code>package.json description</code>).
					A slot with no suggestion shows what a good answer holds, between <code>‹ ›</code>. That help
					is never written.
				</li>
				<li>
					<strong>Only facts are suggested.</strong> One check rejects markup, link and label rows,
					callouts, greetings, install lines and fragments. A notice (deprecated, sponsored by,
					requires…) is never the goal. A long first paragraph gives its first sentence, whole.
				</li>
				<li>
					<strong>The README leads the goal,</strong> then the package.json description, then
					Cargo.toml.
				</li>
				<li>
					<strong>faf-facts.</strong> The six W's ask for one line where every word earns its place.
					<code>how</code> is how it works: the mechanism, and the choice that shapes the code.
					<code>when</code> is the stage it is at, and since when.
				</li>
				<li>
					<strong>Your words stay.</strong> Files you already have are not changed. A fresh
					<code>faf init</code> scores lower than before, because the score counts only what is in
					<code>project.faf</code>.
				</li>
				<li>
					<strong><code>faf go</code> input.</strong> Backspace removes a whole character (emoji,
					CJK), and piped answers are read in order.
				</li>
				<li>
					<strong>For library users (breaking):</strong> <code>assembleFreshFaf</code>,
					<code>updateExistingFaf</code> and <code>authorFafFromRepo</code> return the goal and six W's
					empty. <code>suggestIntent</code> returns the suggestions with their sources.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.10.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.10.0" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.10.0" /> score</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.10.0" /> go      # confirm the suggested goal and six W's</code>
			</div>
			<p class="muted-note">
				A RED score on a new repo is normal: the human slots are yours to fill. Or install it:
				<code>npm i -g <NpmPkg name="faf" version="8.10.0" /></code>, then <code>faf auto</code>.
				Homebrew has 8.10.0 too.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.10.0 (November 13, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) · Homebrew</li>
				<li><strong>Tests:</strong> 2714 passing</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/export" target="_blank" rel="noopener">docs.faf.one/export</a>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.10.0" target="_blank" rel="noopener">v8.10.0</a>
				</li>
			</ul>
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
			<p>Built with .faf ☑️ AI suggests. You confirm. 🏎️</p>
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
