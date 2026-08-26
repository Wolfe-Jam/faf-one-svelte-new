<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `🏁 Just shipped: rust-faf-mcp v0.5.0 — The Mk4 Truth Edition

The score this MCP showed you and the real Mk4 kernel score used to be two different numbers.

Every score now comes straight from the real always-33-slot kernel.
faf://scoring/weights stopped lying about its own model.

Mk4 kernel · 118 tests · MCP Registry caught up 3 versions

cargo install rust-faf-mcp --version 0.5.0

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/mk4-truth-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Mk4 Truth Edition - rust-faf-mcp v0.5.0 | FAF</title>
	<meta
		name="description"
		content="The score this MCP showed you and the real Mk4 kernel score used to be two different numbers. rust-faf-mcp v0.5.0 makes them one."
	/>
	<meta property="og:title" content="The Mk4 Truth Edition - rust-faf-mcp v0.5.0" />
	<meta
		property="og:description"
		content="The score this MCP showed you and the real Mk4 kernel score used to be two different numbers. Now they're one."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/mk4-truth-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/mk4-truth-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/mk4-truth-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Mk4 Truth Edition — rust-faf-mcp v0.5.0 · one kernel, one number"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Mk4 Truth Edition - rust-faf-mcp v0.5.0" />
	<meta
		name="twitter:description"
		content="The score this MCP showed you and the real Mk4 kernel score used to be two different numbers. Now they're one."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/mk4-truth-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Mk4 Truth Edition — rust-faf-mcp v0.5.0 · one kernel, one number"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Mk4 Truth
		</div>
		<h1>The Mk4 Truth Edition</h1>
		<p class="version-tag">rust-faf-mcp v0.5.0</p>
		<p class="subtitle">One kernel. One number. No more drift.</p>
		<div class="meta">
			<time datetime="2026-08-26">August 26, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/mk4-truth-edition-hero.png"
			alt="The Mk4 Truth Edition — rust-faf-mcp v0.5.0 · one kernel, one number"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> rust-faf-mcp's public score is now the real Mk4 kernel score —
				the same always-33-slot model <code>faf-wasm-sdk</code> uses — not a separate, older
				completeness heuristic it was silently calling instead.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> This MCP's <code>faf_score</code> tool quietly computed a
					different percentage than the real Mk4 kernel would for the identical file. Same
					<code>project.faf</code>, two different numbers depending on which tool scored it.
				</p>
				<p>
					<strong>Fix.</strong> Every score now comes straight from <code>faf-rust-sdk</code>'s
					real <code>score()</code> function — the always-33-slot kernel, with
					<code>slotignored</code> correctly shrinking the active denominator.
				</p>
				<p>
					<strong>New state.</strong> The number this MCP shows you is the kernel's number.
					No silent second scorer running underneath.
				</p>
			</div>
			<div class="terminal-block">
				<code>cargo install rust-faf-mcp --version 0.5.0</code>
			</div>
			<p class="muted-note">
				<strong>We are Cargo.</strong> That is the install — a single 4.3 MB stripped binary.
				To skip the Rust toolchain, <strong>try</strong> with <code>npx rust-faf-mcp</code> — not
				the install. First run downloads the native binary from a GitHub Release (roughly
				a minute); every run after that is instant, served from a local cache.
			</p>
		</section>

		<section>
			<h2>What was actually wrong</h2>
			<p>
				<code>rust-faf-mcp</code> depended on <code>faf-rust-sdk 1.3</code> — a version that
				predates the crate's current facade architecture over <code>faf-kernel</code> +
				<code>faf-fafb</code>, and predates the Mk4 always-33-slot scoring model entirely.
				Its <code>faf_score</code> tool was calling <code>validate().score</code> — a separate,
				older completeness heuristic that ships in the same crate for backward compatibility,
				but was never the real model. The <code>faf://scoring/weights</code> resource made it
				worse: it served hardcoded 30/30/15/15/10 category weights and claimed alignment with
				the validator, when neither number was the real one.
			</p>
			<p>
				0.5.0 pins <code>faf-rust-sdk 3</code> and swaps every public-facing score to
				<code>faf_rust_sdk::score()</code> directly. <code>validate()</code> still runs — it
				just stays scoped to genuine structural checks (a missing <code>faf_version</code> or
				<code>project.name</code>), never to the number a user sees. Tier badges moved off the
				retired medal-emoji ladder onto the kernel's own work-surface symbols
				(<code>✪ ★ ◆ ◇ ● ○ ♡</code>). <code>faf_init</code> now writes fresh files that are
				fully Mk4-honest — real values where detected, explicit <code>slotignored</code>
				everywhere else, across all 19 stack, 5 monorepo, and 6 human_context slots.
			</p>
		</section>

		<section>
			<h2>Note, precisely</h2>
			<p>
				This does <strong>not</strong> mean <code>faf-cli</code> now shares this kernel.
				Verified live in <code>cli/src/core/scorer.ts</code> at the time of this release:
				<code>faf-cli</code>'s default <code>faf score</code> still runs a different, older
				21-slot kernel (<code>faf-scoring-kernel</code>'s <code>score_faf</code>). Converging
				<code>faf-cli</code> onto the always-33 model is separate, deliberately-scheduled
				"FAF 6.0" work — not part of this release. One kernel across every FAF surface is the
				direction; it isn't the state today.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong> (Cargo):</p>
			<div class="terminal-block">
				<code>cargo install rust-faf-mcp --version 0.5.0</code>
				<code>rust-faf-mcp</code>
			</div>
			<p><strong>Try</strong> (no Rust toolchain — not the install):</p>
			<div class="terminal-block">
				<code>npx rust-faf-mcp</code>
			</div>
			<p><strong>Then point any MCP client at it</strong> (stdio):</p>
			<div class="terminal-block">
				<code>claude mcp add faf rust-faf-mcp</code>
			</div>
			<p class="muted-note">
				More depth:
				<a href="https://github.com/Wolfe-Jam/rust-faf-mcp/blob/v0.5.0/CHANGELOG.md#050---2026-08-26"
					target="_blank"
					rel="noopener">CHANGELOG</a
				>
				·
				<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
					target="_blank"
					rel="noopener">IANA application/vnd.faf+yaml</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/rust-faf-mcp" target="_blank" rel="noopener"
					>repo</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 0.5.0 (August 26, 2026)</li>
				<li>
					<strong>Dependency:</strong> <code>faf-rust-sdk</code> 1.3 → 3.0 (facade over
					<code>faf-kernel</code> + <code>faf-fafb</code>)
				</li>
				<li>
					<strong>Scoring model:</strong> Mk4 — fixed 33-slot universe,
					<code>slotignored</code> shrinks the active denominator
				</li>
				<li>
					<strong>Tools (9):</strong> <code>faf_init</code> · <code>faf_git</code> ·
					<code>faf_read</code> · <code>faf_score</code> · <code>faf_sync</code> ·
					<code>faf_compress</code> · <code>faf_discover</code> · <code>faf_tokens</code> ·
					<code>faf_auto</code>
				</li>
				<li><strong>Tests:</strong> 118 passing</li>
				<li>
					<strong>Packages:</strong> crates.io + npm shim (downloads native binary from GitHub
					Releases) + MCP Registry <code>one.faf/rust-faf-mcp</code>
				</li>
				<li><strong>Transport:</strong> stdio</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/rust-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One kernel. One number. No more drift. 🏎️</p>
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
