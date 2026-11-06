<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	// Cloudflare Scrape Shield mangles package@version as "email" — always use NpmPkg in HTML.
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Shipped this week: one rule, five FAF tools

faf replaces only what it can prove it wrote.

Same rule in faf-cli, faf-mcp, grok-faf-mcp, gemini-faf-mcp and rust-faf-mcp: TypeScript, Python and Rust, on npm, PyPI and crates.io.

…and 21 releases in all, including faf-cli 8.9.0 (The Write-Once Edition) and faf-taf-git 2.6.0 (Safe Receipts).

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/shipped-this-week-2026-11-06';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Shipped this Week — Nov 6, 2026 | FAF</title>
	<meta name="description" content="21 releases across 10 apps, October 30 – November 5. The headline: one rule, now the same in five FAF tools — faf replaces only what it can prove it wrote." />
	<meta property="og:title" content="Shipped this Week — Nov 6, 2026" />
	<meta property="og:description" content="21 releases across 10 apps, October 30 – November 5. The headline: one rule, now the same in five FAF tools — faf replaces only what it can prove it wrote." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/shipped-this-week-2026-11-06" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/shipped-this-week-2026-11-06-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/shipped-this-week-2026-11-06-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Shipped this Week, November 6, 2026" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Shipped this Week — Nov 6, 2026" />
	<meta name="twitter:description" content="21 releases across 10 apps, October 30 – November 5. The headline: one rule, now the same in five FAF tools — faf replaces only what it can prove it wrote." />
	<meta name="twitter:image" content="https://faf.one/blog/shipped-this-week-2026-11-06-hero.png" />
	<meta name="twitter:image:alt" content="Shipped this Week, November 6, 2026" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Shipped this Week — Nov 6, 2026
		</div>
		<h1>Shipped this Week</h1>
		<p class="version-tag">October 30 – November 5, 2026</p>
		<p class="subtitle">New this week.</p>
		<div class="meta">
			<time datetime="2026-11-06">November 6, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/shipped-this-week-2026-11-06-hero.png"
			alt="Shipped this Week, November 6, 2026"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> 21 releases across 10 apps. The one that matters most: one rule,
				now the same in five FAF tools — <strong>faf replaces only what it can prove it wrote.</strong>
			</p>
		</section>

		<section>
			<h2>One rule, five tools</h2>
			<p>
				Your hand-written files and your project's birth certificate are yours. Where faf can't
				prove it wrote a file, it leaves the file alone and says what it couldn't write.
			</p>
			<p>This week that rule became the same everywhere faf writes:</p>
			<ul class="rule-list">
				<li><strong>faf-cli</strong> (TypeScript, npm)</li>
				<li><strong>faf-mcp</strong> (TypeScript, npm)</li>
				<li><strong>grok-faf-mcp</strong> (TypeScript, npm)</li>
				<li><strong>gemini-faf-mcp</strong> (Python, PyPI)</li>
				<li><strong>rust-faf-mcp</strong> (Rust, crates.io and npm)</li>
			</ul>
			<p>Each release below was installed cold from its registry before it went on this list.</p>
		</section>

		<section>
			<h2>faf-cli</h2>
			<p class="ship-line">
				<strong>v8.9.0</strong> — The Write-Once Edition — A birth certificate that can't be
				reissued. <code>faf dna --verify</code> checks it against the commit that first saved it.
				Plus a lighter install, and every command documented.
				<a href="/blog/write-once-edition">Read the post</a>.
			</p>
			<p class="ship-line">
				<strong>v8.8.0</strong> — The Polyglot Edition — <code>faf taf setup</code> writes the Test
				Receipt workflow for Rust, Java (Maven, Gradle) and .NET too: each run joins its reports
				into one JUnit file, and faf-taf-git counts it.
			</p>
			<p class="ship-para">
				Rust runs <code>cargo nextest</code>, Maven and Gradle join their per-class reports into one
				file, and .NET adds a JUnit logger in CI only: your project files are not changed. Every
				language is checked in faf-cli's own CI, with a fixture of 2 passing, 1 failing and 1
				skipped test, against the runner's own counts. One known gap: nextest leaves
				<code>#[ignore]</code> tests out of its JUnit file, so their skips are not on the receipt.
				It's all in 8.9.0:
			</p>
			<div class="terminal-block">
				<code>npx faf-cli taf setup</code>
			</div>
			<p class="ship-line">
				<strong>v8.7.1</strong> — <code>faf taf setup</code> writes the test step for node:test and
				mocha, and installs Python test extras; colour follows <code>FORCE_COLOR</code> and stderr.
			</p>
			<p class="ship-line">
				<strong>v8.7.0</strong> — The Receipts Edition — Your Test Receipts, in your terminal:
				<code>faf taf receipts</code> shows them, <code>taf setup</code> writes the recipe for
				JavaScript (Jest, Vitest, Bun), Python and Go, and every test run on your default branch
				gets one, red ones too. <a href="/blog/receipts-edition">Read the post</a>.
			</p>
			<p class="ship-line">
				<strong>v8.6.0</strong> — The Birth Certificate Edition — One birth certificate per
				project, protected: <code>init --new</code> rebuilds project.faf without touching it,
				<code>go</code> and <code>edit</code> record every climb, and <code>faf dna --json</code>
				shows the lineage. <a href="/blog/birth-certificate-edition">Read the post</a>.
			</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="8.9.0" /></code>
			</div>
		</section>

		<section>
			<h2>faf-mcp</h2>
			<p class="ship-line">
				<strong>v4.1.2</strong> — The Instructions Edition — faf_write can no longer overwrite the
				birth certificate or your context files, and faf_dna never issues a second one.
			</p>
			<div class="terminal-block">
				<code>claude mcp add faf-mcp -- npx --yes <NpmPkg name="faf-mcp" version="4.1.2" /></code>
			</div>
			<p class="ship-notes"><a href="/blog/birth-certificate-never-reissued">Read the post</a></p>
		</section>

		<section>
			<h2>grok-faf-mcp</h2>
			<p class="ship-line">
				<strong>v2.2.4</strong> — The Instructions Edition — faf_sync keeps your hand-written files,
				writes the context files it names, and tells you what it couldn't write.
			</p>
			<p class="ship-line">
				<strong>v2.2.3</strong> — The Instructions Edition — faf_write can no longer overwrite the
				birth certificate or your context files.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="grok-faf-mcp" version="2.2.4" /></code>
			</div>
			<p class="ship-notes"><a href="/blog/your-files-stay-yours">Read the post</a></p>
		</section>

		<section>
			<h2>gemini-faf-mcp</h2>
			<p class="ship-line">
				<strong>v3.1.2</strong> — The New Era Edition — faf_gemini and faf_agents keep your
				hand-written GEMINI.md and AGENTS.md, and tell you what they couldn't write.
			</p>
			<div class="terminal-block">
				<code>uvx gemini-faf-mcp==3.1.2</code>
			</div>
			<p class="ship-notes"><a href="/blog/gemini-md-stays-yours">Read the post</a></p>
		</section>

		<section>
			<h2>rust-faf-mcp</h2>
			<p class="ship-line">
				<strong>v0.9.0</strong> — The Your-Files-Stay-Yours Edition — <code>faf_sync</code> keeps
				your hand-written CLAUDE.md, refuses what it can't write safely, and says so.
			</p>
			<div class="terminal-block">
				<code
					>cargo install rust-faf-mcp --version 0.9.0
npx --yes <NpmPkg name="rust-faf-mcp" version="0.9.0" /></code
				>
			</div>
			<p class="ship-notes">
				<a href="https://github.com/Wolfe-Jam/rust-faf-mcp/releases/tag/v0.9.0" target="_blank" rel="noopener"
					>Release notes</a
				>
			</p>
		</section>

		<section>
			<h2>faf-taf-git</h2>
			<p class="ship-line">
				<strong>v2.6.0</strong> — Safe Receipts Edition — Receipts are never lost, and your
				checkout is never touched.
			</p>
			<p class="ship-line">
				<strong>v2.5.0</strong> — Named Skips Edition — Receipts name the skipped tests, so a
				skipped count that stays the same can't hide a different set.
			</p>
			<p class="ship-line"><strong>v2.4.2 – v2.4.6</strong> — five patches:</p>
			<ul class="patch-list">
				<li>
					<strong>v2.4.6</strong> — The package no longer carries build-machine paths, and a report
					with no tests says "no tests ran" instead of "could not parse".
				</li>
				<li>
					<strong>v2.4.5</strong> — node:test receipts count every test: a failing top-level test
					beside a <code>describe</code> is no longer dropped, and nested <code>describe</code>s are
					counted in full.
				</li>
				<li>
					<strong>v2.4.4</strong> — Receipts tell the truth about skips: a run where every test was
					skipped is recorded as SKIPPED, the badge counts only real passes, and each receipt says
					where it ran.
				</li>
				<li>
					<strong>v2.4.3</strong> — A receipt that loses a push race is retried instead of lost, and
					skipped Go tests count as skipped, not passed.
				</li>
				<li>
					<strong>v2.4.2</strong> — undici 6.29.1 in the Action bundle (security), and the npm
					package ships only the CLI: 34 kB instead of 1.0 MB.
				</li>
			</ul>
			<div class="terminal-block">
				<code>uses: Wolfe-Jam/<NpmPkg name="faf-taf-git" version="v2.6.0" /></code>
			</div>
			<p class="ship-notes">
				<a href="https://github.com/Wolfe-Jam/faf-taf-git/releases/tag/v2.6.0" target="_blank" rel="noopener"
					>v2.6.0 notes</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/faf-taf-git/releases/tag/v2.5.0" target="_blank" rel="noopener"
					>v2.5.0 notes</a
				>
			</p>
		</section>

		<section>
			<h2>claude-fafm-sdk</h2>
			<p class="ship-line">
				<strong>v2.2.0</strong> — The Spec v1.2 Edition — Reads and writes .fafm v1.2: clocks
				compare as instants, and the document writer keeps everything it read.
			</p>
			<div class="terminal-block">
				<code>pip install claude-fafm-sdk==2.2.0</code>
			</div>
			<p class="ship-notes">
				<a href="https://github.com/Wolfe-Jam/claude-fafm-sdk/releases/tag/v2.2.0" target="_blank" rel="noopener"
					>Release notes</a
				>
			</p>
		</section>

		<section>
			<h2>grok-faf-voice</h2>
			<p class="ship-line">
				<strong>v0.6.0</strong> — The Read-Back Edition — Nothing is saved until the holder hears
				it back and says yes.
			</p>
			<div class="terminal-block">
				<code>pip install grok-faf-voice==0.6.0</code>
			</div>
			<p class="ship-notes"><a href="/blog/read-back-edition">Read the post</a></p>
		</section>

		<section>
			<h2>faf-zeph</h2>
			<p class="ship-line">
				<strong>v0.1.0</strong> — The Same Bytes Edition — Loads the ZEPH wasm and calls score,
				validate, tier, and find_section.
			</p>
			<div class="terminal-block">
				<code>npm install <NpmPkg name="faf-zeph" version="0.1.0" /></code>
			</div>
			<p class="ship-notes"><a href="/blog/same-bytes-edition">Read the post</a></p>
		</section>

		<section>
			<h2>wjttc</h2>
			<p class="ship-line">
				<strong>v1.4.2</strong> — <code>wjttc --version</code> prints the installed version, and
				every Dependabot alert is closed.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="wjttc" version="1.4.2" /> --help</code>
			</div>
			<p class="ship-notes">
				<a href="https://github.com/Wolfe-Jam/wjttc/releases/tag/v1.4.2" target="_blank" rel="noopener"
					>Release notes</a
				>
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
