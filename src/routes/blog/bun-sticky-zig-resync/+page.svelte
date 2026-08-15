<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	let copiedId = $state('');

	onMount(() => {
		mounted = true;
	});

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — DEFAULT craft. Ship line, cold open, receipts, install CTA, feedback CTA.
	const shareText = `🏁 Just shipped: bun-sticky-zig v1.4.2 — Scoring, Verified

Native Zig CLI for .faf context files — its own score had quietly drifted from the canonical engine.

Same file: 100% here, 57% there. Found it, fixed it, verified both engines agree.

157/157 tests · 3 platforms · zero deps

brew install wolfe-jam/tap/bun-sticky

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/bun-sticky-zig-resync';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>bun-sticky-zig v1.4.2: Scoring, Verified | FAF</title>
	<meta name="description" content="bun-sticky-zig's own score had drifted from faf-cli's canonical scoring — 100% on one engine, 57% on the other, same file. v1.4.2 resyncs the model, fixes a destructive sync bug, and verifies both engines agree." />
	<meta property="og:title" content="bun-sticky-zig v1.4.2: Scoring, Verified" />
	<meta property="og:description" content="Same .faf file. 100% here. 57% in the real engine. Found the drift, fixed the model, verified both engines agree." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/bun-sticky-zig-resync-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/bun-sticky-zig-resync-hero.png" />
</svelte:head>

<div class="blog-post">
	<div class="hero-image">
		<img src="/blog/bun-sticky-zig-resync-hero.png" alt="bun-sticky-zig v1.4.2 — Scoring, Verified. Same file, two scores. Resynced, then proved they agree." />
	</div>

	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / bun-sticky-zig v1.4.2
		</div>
		<h1>bun-sticky-zig v1.4.2: Scoring, Verified</h1>
		<p class="subtitle">Same file, two scores. Resynced, then proved they agree.</p>
		<div class="meta">
			<time datetime="2026-08-14">August 14, 2026</time>
			<span class="separator">•</span>
			<span class="category">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> bun-sticky-zig's own scoring had drifted from the canonical <code>faf-cli</code> engine — a project reading 100% here read 57% there, same file. v1.4.2 resyncs the model, consolidates a tier system that had split into three disagreeing implementations, fixes a bug where <code>faf sync</code> could silently overwrite an existing CLAUDE.md, and verifies the fix live — 157/157 tests, 3 platforms, a real Homebrew install.
			</p>
		</section>

		<section>
			<h2>What Was Wrong</h2>
			<p>
				bun-sticky-zig's scorer was still running the old 21-slot model, where a <code>cli</code>-type project only needed 9 applicable slots — project and human context, nothing else. The live <code>faf-cli</code> engine doesn't do that. Run the same file through both:
			</p>

			<div class="copy-box display-only">
				<code class="copy-code">bun-sticky-zig: 100% Trophy <span class="code-comment"># 9/9 slots</span></code>
			</div>
			<div class="copy-box display-only" style="margin-top: 0.5rem;">
				<code class="copy-code">faf-cli:        57% Yellow <span class="code-comment"># 12/21 slots</span></code>
			</div>

			<p>
				Same <code>project.faf</code>. Two different answers. That's a credibility bug, not a rounding error.
			</p>
		</section>

		<section>
			<h2>What Changed</h2>
			<ul>
				<li><strong>Scoring resynced.</strong> 21 base slots now apply to every project type uniformly — no more 9-slot exemption for CLI-type projects. 12 enterprise slots apply only when a monorepo/enterprise signal is present in the file.</li>
				<li><strong>Tier system consolidated.</strong> The tier ladder had split into three disagreeing implementations across the codebase — one still using the retired medal-emoji set and a score-computed "Big Croissant" honor tier that shouldn't have existed. One source of truth now: 8 tiers, the geometric ladder, the ✪ proof seal at 100%.</li>
				<li><strong><code>faf sync</code> no longer destructive.</strong> It used to overwrite any existing CLAUDE.md unconditionally — no check, no backup. It now refuses unless the file already carries bun-sticky's own signature — closing a gap against a principle <code>faf-cli</code>'s own sync has always followed: block-injected, never clobbered.</li>
				<li><strong>Every score now discloses what it is.</strong> Terminal, JSON, and every card format say it plainly: an approximation of faf-cli's live kernel, not the authoritative number.</li>
			</ul>
		</section>

		<section>
			<h2>Verified, Not Claimed</h2>
			<p>
				The fix shipped through the same pipeline that found the bug — build, test, tag, release, then a real install:
			</p>

			<div class="copy-box" onclick={() => copyText('zig build test --summary all', 'test')}>
				<code class="copy-code">zig build test --summary all <span class="code-comment"># 157/157 tests passed</span></code>
				<button class="copy-btn">{copiedId === 'test' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>
				3 platforms built and released — linux-x64, macos-x64, macos-arm64. Then an actual <code>brew upgrade</code> on a live machine, not a dry run: <code>1.1.1 → 1.4.2</code>, correct architecture, binary confirmed running.
			</p>
		</section>

		<section class="install">
			<h2>Install</h2>

			<div class="copy-box" onclick={() => copyText('brew install wolfe-jam/tap/bun-sticky', 'brew')}>
				<code class="copy-code">brew install wolfe-jam/tap/bun-sticky</code>
				<button class="copy-btn">{copiedId === 'brew' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or the one-liner:</p>

			<div class="copy-box" onclick={() => copyText('curl -fsSL https://raw.githubusercontent.com/Wolfe-Jam/bun-sticky-zig/main/install.sh | bash', 'curl')}>
				<code class="copy-code">curl -fsSL https://raw.githubusercontent.com/Wolfe-Jam/bun-sticky-zig/main/install.sh | bash</code>
				<button class="copy-btn">{copiedId === 'curl' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.4.2</strong> - Released August 14, 2026</li>
				<li><strong>157/157</strong> - Tests passing</li>
				<li><strong>3</strong> - Platforms (linux-x64, macos-x64, macos-arm64)</li>
				<li><strong>21 + 12</strong> - Base slots + conditional enterprise slots</li>
				<li><strong>0</strong> - Runtime dependencies</li>
			</ul>
		</section>

		<section class="links-section">
			<h2>Links</h2>
			<div class="links">
				<a href="https://github.com/Wolfe-Jam/bun-sticky-zig/releases/tag/v1.4.2" class="link-button github-button" target="_blank">
					Release Notes
				</a>
				<a href="https://github.com/Wolfe-Jam/bun-sticky-zig" class="link-button github-button" target="_blank">
					GitHub
				</a>
			</div>
		</section>

		<section class="conclusion">
			<p class="tagline">
				<strong>Deterministic scoring. Zero dependencies. Pure Zig.</strong>
			</p>
			<p class="brand">
				🏎️⚡ FAF Format Authority<br />
				Built in Bun's language<br />
				🆓 Open Source MIT
			</p>
		</section>
		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>
	</article>

	<footer class="post-footer">
		<div class="author">
			<p>Published by <strong>wolfejam</strong></p>
			<p class="tagline-footer">Format Authority for AI Context 🏎️⚡</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		background: var(--faf-locked-dark) !important;
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

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #e5e5e5;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 1px solid #333;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #999;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-cyan-dark);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: var(--faf-orange);
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #999;
		margin: 0.5rem 0;
		font-weight: 400;
	}

	.meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.875rem;
		color: #999;
		margin-top: 1rem;
	}

	.separator {
		color: #ccc;
	}

	.category {
		color: var(--faf-cyan-dark);
		font-weight: 500;
	}

	.post-content {
		font-size: 1.125rem;
	}

	.intro {
		margin-bottom: 3rem;
	}

	.lead {
		font-size: 1.25rem;
		color: #ccc;
		margin: 1rem 0;
	}

	section {
		margin: 2.5rem 0;
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
		color: #fff;
	}

	code {
		background: #2a2a2a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9em;
		color: var(--faf-cyan-dark);
		white-space: nowrap;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.copy-box:hover {
		border-color: #555;
	}

	.copy-box.display-only {
		cursor: default;
	}

	.copy-box.display-only:hover {
		border-color: #333;
	}

	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.9rem;
		font-weight: 600;
		word-break: break-all;
		border-radius: 0;
	}

	.code-comment {
		color: #666;
		font-weight: 400;
	}

	.copy-btn {
		padding: 0.5rem 1rem;
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}

	.copy-btn:hover {
		background: var(--faf-orange); color: var(--faf-on-accent);
		border-color: #ff6b35;
	}

	.copy-btn:active {
		transform: scale(0.95);
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	ul li {
		padding-left: 1.5rem;
		position: relative;
		margin: 0.75rem 0;
	}

	ul li:before {
		content: "▸";
		position: absolute;
		left: 0;
		color: var(--faf-cyan-dark);
		font-weight: bold;
	}

	.links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.link-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.github-button {
		background: #6e5494;
	}

	.github-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(110, 84, 148, 0.3);
	}

	.conclusion {
		margin-top: 3rem;
		text-align: center;
		padding: 2rem;
		background: #1a1a1a;
		border-radius: 12px;
		border: 1px solid #333;
	}

	.tagline {
		font-size: 1.5rem;
		color: #e5e5e5;
		margin: 1rem 0;
	}

	.brand {
		font-size: 1.125rem;
		color: #999;
		margin: 1.5rem 0;
		line-height: 1.8;
	}

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #333;
	}

	.author {
		text-align: center;
	}

	.author p {
		margin: 0.5rem 0;
	}

	.tagline-footer {
		color: #999;
		font-size: 0.875rem;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.post-content {
			font-size: 1rem;
		}

		h2 {
			font-size: 1.5rem;
		}
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
	}
</style>
