<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.6.0 — The Birth Certificate Edition

A project gets one birth certificate: its first score. faf keeps it.

init --new rebuilds project.faf, birth untouched.
go and edit record every climb.

faf dna --json · 2272 tests

npx faf-cli@8.6.0 dna

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/birth-certificate-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Birth Certificate Edition - faf-cli v8.6.0 | FAF</title>
	<meta
		name="description"
		content="One birth certificate per project, protected: init --new rebuilds project.faf without touching it, go and edit record every climb, and faf dna --json shows the lineage."
	/>
	<meta property="og:title" content="The Birth Certificate Edition - faf-cli v8.6.0" />
	<meta
		property="og:description"
		content="A project gets one birth certificate: its first score. faf keeps it, and records every climb since."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/birth-certificate-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/birth-certificate-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/birth-certificate-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.6.0, The Birth Certificate Edition: one birth certificate per project"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Birth Certificate Edition - faf-cli v8.6.0" />
	<meta
		name="twitter:description"
		content="A project gets one birth certificate: its first score. faf keeps it, and records every climb since."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/birth-certificate-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.6.0, The Birth Certificate Edition: one birth certificate per project"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Birth Certificate Edition
		</div>
		<h1>The Birth Certificate Edition</h1>
		<p class="version-tag">faf-cli v8.6.0</p>
		<p class="subtitle">
			A project gets one birth certificate: its first score. faf keeps it, and records every climb
			since.
		</p>
		<div class="meta">
			<time datetime="2026-10-31">October 31, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/birth-certificate-edition-hero.png"
			alt="faf-cli v8.6.0, The Birth Certificate Edition: one birth certificate per project"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>One birth certificate per project, protected: <code>init --new</code> rebuilds project.faf without touching it, <code>go</code> and <code>edit</code> record every climb, and <code>faf dna --json</code> shows the lineage.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>.faf-dna</code> records a project's first score, like a
					baby's birth weight. But rebuilding a stale project.faf took <code>--force</code>, which
					started a new birth. And <code>faf go</code>, the guided climb, never showed up in the
					record.
				</p>
				<p>
					<strong>Fix.</strong> A way to rebuild that leaves the birth alone, and every command that
					fills slots now writes the climb down.
				</p>
				<p>
					<strong>New state.</strong> One birth certificate, kept. <code>faf dna</code> shows the
					whole journey, and <code>--json</code> hands it to anything that wants to read it.
				</p>
			</div>
			<div class="terminal-block">
				<code>{`$ faf dna --json`}</code>
				<code>{`{`}</code>
				<code>{`  "born": "2026-10-31T06:00:56.525Z",`}</code>
				<code>{`  "birth_dna": 17,`}</code>
				<code>{`  "certificate": "FAF-2026-YOURPROJ-9STA",`}</code>
				<code>{`  "current": 25,`}</code>
				<code>{`  "version": "v1.0.1",`}</code>
				<code>{`  "growth": 8,`}</code>
				<code>{`  "peak": 25,`}</code>
				<code>{`  "journey": "17% → 25%",`}</code>
				<code>{`  "versions": [ … "Birth — initial context" … "faf edit human_context.who" … ],`}</code>
				<code>{`  "gitignored": false,`}</code>
				<code>{`  "faf_written": true,`}</code>
				<code>{`  …`}</code>
				<code>{`}`}</code>
			</div>
		</section>

		<section>
			<h2>What 8.6 is</h2>
			<ul>
				<li>
					<strong><code>faf init --new</code></strong> replaces a stale project.faf with a fresh one
					from the repo. <code>.faf-dna</code> stays exactly as it is, byte for byte.
				</li>
				<li>
					<strong><code>faf go</code> and <code>faf edit</code> record every climb</strong>, alongside
					<code>faf auto</code> and <code>faf refresh</code>. A version is added only when the score
					moves.
				</li>
				<li>
					<strong><code>faf dna --json</code></strong> gives the lineage as data: birth, certificate,
					current score, growth, peak, every version, and any earlier lives. The same file gives the
					same JSON.
				</li>
				<li>
					<strong>Gitignored? faf says so.</strong> A gitignored <code>.faf-dna</code> is lost on a
					fresh clone. <code>faf init</code> and <code>faf dna</code> name the rule. Put your reason
					in a <code>#</code> comment above it, and faf stays quiet.
				</li>
				<li>
					<strong>Protected.</strong> A <code>.faf-dna</code> faf didn't write is read and left as it
					is. faf no longer suggests replacing it.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.6.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.6.0" /> init</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.6.0" /> dna</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.6.0" /> dna --json</code>
			</div>
			<p class="muted-note">
				A RED score on a new file is normal; the human slots are yours to fill. Commit
				<code>.faf-dna</code> with the rest of the repo. Or install it:
				<code>npm i -g <NpmPkg name="faf" version="8.6.0" /></code>, then <code>faf init</code>.
				Homebrew has 8.6.0 too.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.6.0 (October 30, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) · Homebrew</li>
				<li><strong>Tests:</strong> 2272 passing</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/dna" target="_blank" rel="noopener">docs.faf.one/dna</a>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.6.0" target="_blank" rel="noopener">v8.6.0</a>
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
			<p>Built with .faf ☑️ One birth certificate. Every climb since. 🏎️</p>
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
