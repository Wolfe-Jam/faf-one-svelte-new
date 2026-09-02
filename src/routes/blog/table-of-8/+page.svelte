<!-- pubblog GOLD — default Release model. Locked 2026-08-19. Copy matching-client. -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `🏁 Just shipped: rust-faf-mcp v0.7.0 — The Table-of-8 Edition

Setup and Sweep confirm AI's side of the bargain. The Table-of-8 is human approved.

Setup occupies the tree. Confirm setup (sweeps) walks it.
6Ws score after ☑ · 11 tools

cargo install rust-faf-mcp --version 0.7.0

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/table-of-8';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Table-of-8 Edition - rust-faf-mcp v0.7.0 | FAF</title>
	<meta
		name="description"
		content="Setup and Sweep confirm AI's side of the bargain. The Table-of-8 is human approved. rust-faf-mcp v0.7.0."
	/>
	<meta property="og:title" content="The Table-of-8 Edition - rust-faf-mcp v0.7.0" />
	<meta
		property="og:description"
		content="Setup and Sweep confirm AI's side of the bargain. The Table-of-8 is human approved."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/table-of-8" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/table-of-8-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/table-of-8-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Table-of-8 Edition — rust-faf-mcp v0.7.0 · Setup and Sweep confirm AI's side of the bargain"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Table-of-8 Edition - rust-faf-mcp v0.7.0" />
	<meta
		name="twitter:description"
		content="Setup and Sweep confirm AI's side of the bargain. The Table-of-8 is human approved."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/table-of-8-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Table-of-8 Edition — rust-faf-mcp v0.7.0"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Table-of-8 Edition
		</div>
		<h1>The Table-of-8 Edition</h1>
		<p class="version-tag">rust-faf-mcp v0.7.0 · one.faf/rust-faf-mcp · 11 tools</p>
		<p class="subtitle">
			Setup and Sweep confirm AI's side of the bargain. The Table-of-8 is human approved.
		</p>
		<div class="meta">
			<time datetime="2026-09-02">September 2, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/table-of-8-hero.png"
			alt="The Table-of-8 Edition — rust-faf-mcp v0.7.0 · Setup and Sweep confirm AI's side of the bargain"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Setup and Sweep confirm AI's side of the bargain. The Table-of-8 is
				human approved. rust-faf-mcp v0.7.0 — 11 tools. Cargo is the install.
				<code>npx</code> is try.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Init could rewrite a file you already had. Empty human slots
					got marked not-applicable. The score went up without anyone saying who, what, or why.
				</p>
				<p>
					<strong>Fix.</strong> Setup writes what the tree can prove. Confirm setup (sweeps) walks
					that list — it does not write again. The Table-of-8 is name, goal, and the 6Ws. Those
					six score only after ☑.
				</p>
				<p>
					<strong>New state.</strong> AI confirms the stack. You approve the humans. A low birth
					score is honest. <code>faf_go</code> is how you add Human Context.
				</p>
			</div>
			<div class="terminal-block">
				<code>cargo install rust-faf-mcp --version 0.7.0</code>
				<code>claude mcp add faf rust-faf-mcp</code>
			</div>
			<p class="muted-note">
				<strong>We are Cargo.</strong> That is the install. First hit compiles once; then the binary
				is instant. To skip the compile, <strong>try</strong> with
				<code>npx rust-faf-mcp</code> — that is not the install. Same version on crates.io and npm.
			</p>
		</section>

		<section>
			<h2>What happened since Mk4 Truth</h2>
			<p>
				One blog, one arc — no post per patch. Last write-up was
				<a href="/blog/mk4-truth-edition">v0.5.0 The Mk4 Truth Edition</a>. Short tour to today:
			</p>
			<ul>
				<li>
					<strong>0.5.1</strong> — openssl bump, copy cleanup. Not a blog.
				</li>
				<li>
					<strong>0.6.0</strong> — <code>faf_agents</code>, a 10th tool: AGENTS.md from
					<code>project.faf</code>, non-destructive. Not a blog.
				</li>
				<li>
					<strong>0.7.0</strong> — The Table-of-8 Edition. Setup, Confirm setup (sweeps),
					<code>faf_go</code>. This is the log entry.
				</li>
			</ul>
			<p>
				Still identity <code>one.faf/rust-faf-mcp</code>. Still dual cargo + npm. Still Mk4
				always-33.
			</p>
		</section>

		<section>
			<h2>What 0.7.0 is</h2>
			<p>
				<strong>Lesson:</strong> Setup and Sweep confirm AI's side of the bargain. The Table-of-8 is
				human approved.
			</p>
			<p>
				<code>faf_init</code> will not overwrite. App-type assigns <code>slotignored</code> on
				inactive stack only. Human 6Ws stay empty until you state them.
				<code>faf_go</code> shows the Table-of-8. Suggestions from the goal are ghosts — never
				typed, never scored — until ☑.
			</p>
			<p>
				At 100%, a Courtesy Context Call every 30 days (90 max):
				<code>Time to check your Context.</code> Ignore it and it asks again. The score does not
				change.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong> (Cargo):</p>
			<div class="terminal-block">
				<code>cargo install rust-faf-mcp --version 0.7.0</code>
				<code>claude mcp add faf rust-faf-mcp</code>
			</div>
			<p><strong>Try</strong> (no Rust toolchain — not the install):</p>
			<div class="terminal-block">
				<code>npx rust-faf-mcp</code>
			</div>
			<p class="muted-note">
				Homebrew: <code>brew install Wolfe-Jam/faf/rust-faf-mcp</code>
				·
				<a href="/blog/mk4-truth-edition">Mk4 Truth (v0.5.0)</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/rust-faf-mcp/releases/tag/v0.7.0"
					target="_blank"
					rel="noopener">v0.7.0 release</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/rust-faf-mcp" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 0.7.0 (September 2, 2026)</li>
				<li><strong>Edition:</strong> The Table-of-8 Edition</li>
				<li><strong>Identity:</strong> <code>one.faf/rust-faf-mcp</code></li>
				<li>
					<strong>Packages:</strong> crates.io + npm shim (same version). Cargo is the install.
					<code>npx</code> is try.
				</li>
				<li>
					<strong>Tools:</strong> 11 —
					<code>faf_init</code> · <code>faf_git</code> · <code>faf_read</code> ·
					<code>faf_score</code> · <code>faf_sync</code> · <code>faf_compress</code> ·
					<code>faf_discover</code> · <code>faf_tokens</code> · <code>faf_auto</code> ·
					<code>faf_agents</code> · <code>faf_go</code>
				</li>
				<li><strong>Tests:</strong> 171</li>
				<li><strong>SDK:</strong> faf-rust-sdk 3.1 · rmcp 3.0.1</li>
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
			<p>Built with .faf ☑️ The Table-of-8 is human approved.</p>
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
