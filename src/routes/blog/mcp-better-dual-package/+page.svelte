<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 mcp-better v0.4.2 — Dual Package Edition

Cargo first · npx now available option
Same Rust binary either way.

cargo install mcp-better --version 0.4.2
npx mcp-better

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/mcp-better-dual-package';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Dual Package Edition - mcp-better v0.4.2 | FAF</title>
	<meta
		name="description"
		content="Cargo first · npx now available option. Same Rust binary. Catch-up since mcp-better 0.2.0."
	/>
	<meta property="og:title" content="Dual Package Edition - mcp-better v0.4.2" />
	<meta
		property="og:description"
		content="Cargo first · npx now available option. Same Rust binary either way."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/mcp-better-dual-package" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/mcp-better-dual-package-hero.png?v=1" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/mcp-better-dual-package-hero.png?v=1"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Dual Package Edition — mcp-better v0.4.2 · cargo first · npx now available option"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Dual Package Edition - mcp-better v0.4.2" />
	<meta
		name="twitter:description"
		content="Cargo first · npx now available option. Same Rust binary either way."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/mcp-better-dual-package-hero.png?v=1" />
	<meta
		name="twitter:image:alt"
		content="Dual Package Edition — mcp-better v0.4.2 · cargo first · npx now available option"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Dual Package Edition
		</div>
		<h1>Dual Package Edition</h1>
		<p class="version-tag">mcp-better v0.4.2 · BETTER textbook · AGENTS.md · 7/28</p>
		<p class="subtitle">Cargo first · npx now available option</p>
		<div class="meta">
			<time datetime="2026-08-08">August 8, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/mcp-better-dual-package-hero.png?v=1"
			alt="Dual Package Edition — mcp-better v0.4.2"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Catch-up since the
				<a href="/blog/mcp-better">v0.2.0 post</a>. <code>mcp-better</code> is
				<strong>0.4.2</strong> — still the small BETTER textbook for modern MCP
				(<strong>AGENTS.md</strong> · <strong>NONE | GOOD | [BETTER] | BEST</strong>).
				<strong>Cargo first · npx now available option</strong> — same Rust binary either way.
			</p>
			<div class="terminal-block">
				<code>cargo install mcp-better --version 0.4.2</code>
				<code>npx <NpmPkg name="mcp-better" version="0.4.2" /></code>
			</div>
		</section>

		<section>
			<h2>What happened since 0.2.0</h2>
			<p>
				One blog, one arc — no post per patch. Short tour from the last write-up to today:
			</p>
			<ul>
				<li><strong>0.3</strong> — tighter tests and a real textbook tree shipped with the app</li>
				<li>
					<strong>0.4</strong> — dual package: cargo first, npm added as a second path to the same
					binary
				</li>
				<li><strong>0.4.1 / 0.4.2</strong> — registry dual clean · OIDC releases (no long-lived tokens)</li>
			</ul>
			<p>
				Still <strong>7/28</strong>, still <code>health</code> + <code>echo</code>, still stdio by
				default. Cargo path unchanged; npx is the new option for hosts that already speak npm.
			</p>
		</section>

		<section>
			<h2>Why add npx?</h2>
			<p>
				<strong>Cargo first</strong> — always was. Lots of MCP docs only show <code>npx</code>, though.
				Dual-package means that path starts the <strong>same native binary</strong>, not a rewrite in
				JavaScript.
			</p>
			<p>
				If you live in cargo-land, keep using cargo. If your host only knows npm, you have an option
				now.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>cargo install mcp-better --version 0.4.2</code>
				<code>mcp-better --help</code>
				<code>npx <NpmPkg name="mcp-better" version="0.4.2" /></code>
			</div>
			<p class="muted-note">
				More depth:
				<a
					href="https://github.com/Wolfe-Jam/mcp-better/blob/main/docs/DUAL-PACKAGE-FOR-RUST-MCP.md"
					target="_blank"
					rel="noopener">why dual-package</a
				>
				·
				<a
					href="https://github.com/Wolfe-Jam/mcp-better/blob/main/docs/DUAL-PACKAGE-RUST-MCP.md"
					target="_blank"
					rel="noopener">how to ship one</a
				>
				·
				<a href="/blog/mcp-better">origin post (v0.2)</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 0.4.2 (August 8, 2026)</li>
				<li><strong>Protocol:</strong> 2026-07-28 (7/28)</li>
				<li><strong>Identity:</strong> <code>io.github.Wolfe-Jam/mcp-better</code></li>
				<li><strong>Packages:</strong> crates.io + npm <code>mcp-better</code> (same version)</li>
				<li><strong>Tools @ 0.4.2:</strong> <code>health</code>, <code>echo</code></li>
				<li><strong>Transports:</strong> stdio default · <code>--http</code> local demo only</li>
				<li>
					<strong>0.4.0:</strong> npm shim downloads GH Release binary · dual
					<code>server.json</code> · three-file lockstep
				</li>
				<li><strong>0.4.1:</strong> npm <code>mcpName</code> for dual registry publish</li>
				<li><strong>0.4.2:</strong> OIDC Trusted Publishing (crates + npm on tag)</li>
				<li>
					<strong>Ladder:</strong> NONE | GOOD | <strong>[BETTER]</strong> | BEST — textbook for
					<strong>AGENTS.md</strong>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>
				Questions, nits, suggestions — guide the next version. Tell us what you want to see.
			</p>
			<div class="feedback-actions">
				<a
					href="https://github.com/Wolfe-Jam/mcp-better/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn"
				>
					Open a GitHub issue
				</a>
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn secondary">Post on X</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Same binary either way. 🏎️</p>
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

	.thesis {
		font-size: 1.35rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		line-height: 1.3;
		margin: 0 0 1.25rem;
		color: #1a1a1a;
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

	.table-wrap {
		overflow-x: auto;
		margin: 0 0 1.25rem;
		border-radius: 8px;
		border: 1px solid #e5e5e5;
	}
	.post-content table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}
	.post-content th,
	.post-content td {
		text-align: left;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #e5e5e5;
		vertical-align: top;
		color: #1a1a1a;
	}
	.post-content th {
		background: #f7f5f0;
		font-weight: 700;
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}
	.post-content tr:last-child td {
		border-bottom: none;
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
