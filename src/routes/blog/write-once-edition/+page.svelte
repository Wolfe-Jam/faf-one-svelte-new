<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.9.0 — The Write-Once Edition

A project's birth certificate is written once. Now nothing can reissue it.

faf dna --verify checks it against the commit that first saved it.
Under half the install size: 2.35 MB, was 5.34 MB.

2428 tests · every command documented

npx faf-cli@8.9.0 dna --verify

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/write-once-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Write-Once Edition - faf-cli v8.9.0 | FAF</title>
	<meta
		name="description"
		content="A birth certificate that can't be reissued. faf dna --verify checks it against the commit that first saved it. Plus a lighter install, and every command documented."
	/>
	<meta property="og:title" content="The Write-Once Edition - faf-cli v8.9.0" />
	<meta
		property="og:description"
		content="A birth certificate that can't be reissued, checked against the commit that first saved it."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/write-once-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/write-once-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/write-once-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.9.0, The Write-Once Edition: a birth certificate written once"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Write-Once Edition - faf-cli v8.9.0" />
	<meta
		name="twitter:description"
		content="A birth certificate that can't be reissued, checked against the commit that first saved it."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/write-once-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.9.0, The Write-Once Edition: a birth certificate written once"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Write-Once Edition
		</div>
		<h1>The Write-Once Edition</h1>
		<p class="version-tag">faf-cli v8.9.0</p>
		<p class="subtitle">
			A birth certificate that can't be reissued. <code>faf dna --verify</code> checks it against the
			commit that first saved it. Plus a lighter install, and every command documented.
		</p>
		<div class="meta">
			<time datetime="2026-11-05">November 5, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/write-once-edition-hero.mp4"
			poster="/blog/write-once-edition-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="faf-cli v8.9.0, The Write-Once Edition: the card types in, A birth certificate written once"
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>A birth certificate that can't be reissued. <code>faf dna --verify</code> checks it against the commit that first saved it. Plus a lighter install, and every command documented.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>.faf-dna</code> records a project's first score, its birth
					certificate. It lived in its own file, so editing <code>project.faf</code> never touched it.
					But <code>faf init --force</code> could still write a new one, with a new number.
				</p>
				<p>
					<strong>Fix.</strong> faf writes the certificate once and never again. And because git names
					every commit by the hash of its content, the commit that first saved
					<code>.faf-dna</code> is a copy no one can quietly change. faf now checks against it.
				</p>
				<p>
					<strong>New state.</strong> One certificate per project, written once. Commit it, and
					<code>faf dna --verify</code> tells you whether it is still the original.
				</p>
			</div>
			<div class="terminal-block">
				<code>{`$ faf dna --verify`}</code>
				<code>{`✓ Birth certificate matches the commit that first added .faf-dna`}</code>
				<code>{`  (01f4eca, 2026-11-05).`}</code>
				<code>{` `}</code>
				<code>{`# after a hand edit:`}</code>
				<code>{`$ faf dna --verify`}</code>
				<code>{`× The birth certificate differs from the commit that first added .faf-dna`}</code>
				<code>{`  (01f4eca, 2026-11-05): certificate. The original: git show 01f4eca:.faf-dna`}</code>
			</div>
		</section>

		<section>
			<h2>What 8.9 is</h2>
			<ul>
				<li>
					<strong>Written once.</strong> faf writes <code>.faf-dna</code> only when there is none. With
					one there, in any shape, it writes nothing. <code>faf init --force</code> now works like
					<code>--new</code>: a fresh <code>project.faf</code>, the certificate kept.
				</li>
				<li>
					<strong><code>faf dna --verify</code></strong> compares the certificate with the commit that
					first added <code>.faf-dna</code>. Exit 0 if they match, 1 if they differ, 2 if there is
					nothing to check against yet.
				</li>
				<li>
					<strong>Commit it.</strong> <code>faf init</code> and <code>faf dna</code> say when the
					certificate isn't committed yet, with the exact command. faf never commits for you.
				</li>
				<li>
					<strong>A lighter install.</strong> The package is under half its old size: 2.35 MB unpacked,
					was 5.34 MB. npm no longer installs an unused 6.4 MB copy of the Anthropic SDK.
				</li>
				<li>
					<strong>Every command documented.</strong> The commands the README doesn't cover are on
					<a href="https://docs.faf.one/more-commands" target="_blank" rel="noopener">docs.faf.one/more-commands</a>.
				</li>
				<li>
					<strong>Named skips.</strong> <code>faf taf receipts</code> shows <code>+N newly skipped</code>
					when a receipt names a test that wasn't skipped before (faf-taf-git 2.5.0).
				</li>
				<li>
					<strong>Cleaned up.</strong> Help flags that did nothing are gone, <code>init --output</code>
					keeps <code>.faf-dna</code> beside its file, <code>card init</code> won't overwrite a card
					written during its questions, and <code>faf wjttc</code> sees tiers on
					<code>.skipIf</code> and <code>.each</code> blocks.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.9.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.9.0" /> init</code>
				<code>git add .faf-dna && git commit -m "faf: birth certificate"</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.9.0" /> dna --verify</code>
			</div>
			<p class="muted-note">
				A RED score on a new file is normal; the human slots are yours to fill. In CI, check out the
				full history (<code>fetch-depth: 0</code>): a shallow clone can't show the first commit, and
				faf says so rather than report a match. Or install it:
				<code>npm i -g <NpmPkg name="faf" version="8.9.0" /></code>, then <code>faf init</code>.
				Homebrew has 8.9.0 too.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.9.0 (November 5, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) · Homebrew</li>
				<li><strong>Tests:</strong> 2428 passing</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/dna" target="_blank" rel="noopener">docs.faf.one/dna</a> ·
					<a href="https://docs.faf.one/more-commands" target="_blank" rel="noopener">docs.faf.one/more-commands</a>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.9.0" target="_blank" rel="noopener">v8.9.0</a>
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
			<p>Built with .faf ☑️ Written once. Checked against git. 🏎️</p>
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
	.hero-image video {
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
