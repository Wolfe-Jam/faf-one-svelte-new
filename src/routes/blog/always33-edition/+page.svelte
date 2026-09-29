<!-- pubblog Release — faf-cli v8.0.0, The Always33 Edition. Post 1 of the Always33 series
     (overview: /blog/always33). Chrome copied from the mcp-better-matching-client gold. -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	// Cloudflare Scrape Shield mangles package@version as "email" — always use NpmPkg in HTML.
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.0.0 — The Always33 Edition

One engine, one number.

faf score now counts all 33 slots, the same score every FAF tool gives.
Upgrading? Run faf auto: 56 → 100 on the v7 files we tested.

Verified on 80 repos · 2075 tests · npm + Homebrew

npx faf-cli auto

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/always33-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Always33 Edition - faf-cli v8.0.0 | FAF</title>
	<meta
		name="description"
		content="One engine, one number: faf-cli v8 scores all 33 slots with the always-33 kernel. Run faf auto after upgrading and the score returns."
	/>
	<meta property="og:title" content="The Always33 Edition - faf-cli v8.0.0" />
	<meta
		property="og:description"
		content="One engine, one number: faf-cli v8 scores all 33 slots with the always-33 kernel."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/always33-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/always33-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/always33-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="faf-cli v8.0.0, The Always33 Edition: now scores all 33 slots. One engine, one number." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Always33 Edition - faf-cli v8.0.0" />
	<meta
		name="twitter:description"
		content="One engine, one number: faf-cli v8 scores all 33 slots with the always-33 kernel."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/always33-edition-hero.png" />
	<meta name="twitter:image:alt" content="faf-cli v8.0.0, The Always33 Edition: now scores all 33 slots. One engine, one number." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Always33 Edition
		</div>
		<h1>The Always33 Edition</h1>
		<p class="version-tag">faf-cli v8.0.0 · Always33 series, part 1</p>
		<p class="subtitle">
			One engine, one number: faf-cli v8 scores all 33 slots with the always-33 kernel — the same
			score faf-kernel, faf-rust-sdk and rust-faf-mcp give.
		</p>
		<div class="meta">
			<time datetime="2026-09-29">September 29, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/always33-edition-hero.png"
			alt="faf-cli v8.0.0, The Always33 Edition: now scores all 33 slots. One engine, one number."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf score</code> now counts all 33 slots, with the same
				always-33 kernel the rest of FAF uses. Scores can move when you upgrade. Run
				<code>faf auto</code> and they come back.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Through v7.16, <code>faf score</code> counted 21 slots. The
					always-33 scorers counted 33. The same file could get two different numbers.
				</p>
				<p>
					<strong>Fix.</strong> faf-cli now scores with the always-33 kernel. Slots that are not
					applicable to a project are marked <code>slotignored</code>, and do not score.
				</p>
				<p>
					<strong>New state.</strong> One number. faf-cli gives your file the same score as every
					other FAF tool.
				</p>
			</div>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="8.0.0" /></code>
				<code>faf auto</code>
			</div>
			<p class="muted-note">
				Homebrew: <code>brew install wolfe-jam/faf/faf-cli</code>. To try it without installing:
				<code>npx faf-cli auto</code>.
			</p>
		</section>

		<section>
			<h2>What happened since Discoverable</h2>
			<p>
				One blog, one arc. The last faf-cli write-up was
				<a href="/blog/discoverable-edition">v7.16 The Discoverable Edition</a>. Short tour to
				today:
			</p>
			<ul>
				<li>
					<strong>v7.16.2</strong>: <code>faf compile</code> emits FAFb wire v2, the same bytes as
					the faf-fafb golden. Not a blog.
				</li>
				<li>
					<strong>v8.0.0</strong>: The Always33 Edition. This is the log entry for the stretch.
				</li>
			</ul>
			<p>
				This post opens the Always33 series, one release at a time. The overview is
				<a href="/blog/always33">The Always33 Suite</a>.
			</p>
		</section>

		<section>
			<h2>What v8 is</h2>
			<p>
				<strong>The always-33 engine.</strong> faf-cli scores every <code>.faf</code> against all 33
				slots with the vendored scoring kernel (Rust, compiled to WASM). Through v7.16,
				<code>faf score</code> counted only slots 1 to 21. We checked it against the reference
				always-33 scorer on the <code>project.faf</code> of all 80 FAF repos: same score on every
				one.
			</p>
			<p>
				<strong>Your 21 slots, and the 12 enterprise slots in view.</strong> faf-cli fills the 21
				base slots. <code>faf init</code>, <code>faf auto</code> and <code>faf git</code> mark the
				12 enterprise slots (infra, app, ops) <code>slotignored</code> unless your app type uses
				them, and <code>faf score</code> lists all 33.
			</p>
			<h3>Upgrading: scores can move</h3>
			<p>
				This is the breaking part. A <code>.faf</code> without the 12 enterprise markers now counts
				them as empty: 21 filled is 21 of 33, which is 64%. Run <code>faf auto</code>. It writes the
				markers and the score returns. We tested four v7 files:
			</p>
			<div class="terminal-block">
				<code>56 → 100 · 56 → 100 · 58 → 100 · 52 → 100</code>
			</div>
			<p>
				Anything that gates on <code>faf score</code>, such as a CI threshold, should re-check its
				number after upgrading.
			</p>
			<h3>Also in v8</h3>
			<ul>
				<li>
					<code>tbd</code> and <code>todo</code>, in any case, are placeholders. They count as
					empty.
				</li>
				<li>
					<strong>A command can carry its own note.</strong> In <code>project.faf</code>,
					<code>build: bun run build — clean, bundle cli+index, then tsc</code> becomes a command
					with a <code>#</code> comment in <code>AGENTS.md</code>. The note never ends up in a line
					someone would run.
				</li>
				<li>
					<strong><code>init --force</code> keeps the life it ends.</strong> A reset writes the old
					birth record into <code>priorLineage</code>, and <code>faf dna</code> prints each earlier
					life.
				</li>
				<li>
					Older <code>.faf-dna</code> files that carry <code>birthWeight</code> now read as the
					birth score. The file is never rewritten.
				</li>
				<li><code>faf demo</code> writes its sample with all 33 slots and scores ✪ 100%.</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong> (npm or Homebrew):</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="8.0.0" /></code>
				<code>brew install wolfe-jam/faf/faf-cli</code>
			</div>
			<p><strong>Then, in your project:</strong></p>
			<div class="terminal-block">
				<code>faf auto</code>
				<code>faf score</code>
			</div>
			<p class="muted-note">
				More depth:
				<a href="/blog/always33">The Always33 Suite</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/blob/main/CHANGELOG.md"
					target="_blank"
					rel="noopener">CHANGELOG</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.0.0 (September 26, 2026)</li>
				<li><strong>Edition:</strong> The Always33 Edition</li>
				<li><strong>Scoring:</strong> all 33 slots, always-33 kernel (Rust → WASM)</li>
				<li><strong>Verified:</strong> same score as the reference scorer on 80 FAF repos</li>
				<li><strong>Tests:</strong> 2075</li>
				<li><strong>Packages:</strong> npm <code>faf-cli</code> · Homebrew <code>wolfe-jam/faf/faf-cli</code></li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions: guide the next version. Tell us what you want to see.</p>
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
			<p>Built with .faf ☑️ One engine, one number. 🏎️</p>
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

	.post-content section > h3 {
		font-size: 1.3rem;
		font-weight: 800;
		color: #1a1a1a;
		margin: 2rem 0 0.75rem;
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
		border-left: 4px solid #00b8b8;
	}

	.intro .lead + .lead {
		margin-top: 2rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #1a1a1a;
	}
	/* In Plain English is black and white */
	.lead.plain-english {
		border-left-color: #1a1a1a;
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
		color: #333;
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
		border: none; /* the global code rule adds a hairline */
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
		color: #333;
	}
</style>
