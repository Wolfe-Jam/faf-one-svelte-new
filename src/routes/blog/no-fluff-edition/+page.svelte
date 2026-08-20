<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: grok-faf-mcp v1.10.0 — The No-Fluff Edition

A project.faf is facts. Empty is honest. Perfume is not DNA.

faf_enhance is gone.
RAG default is grok-4.6.

12 core tools · no fluff

npm i grok-faf-mcp@1.10.0

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/no-fluff-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The No-Fluff Edition - grok-faf-mcp v1.10.0 | FAF</title>
	<meta
		name="description"
		content="No fluff in a project.faf. faf_enhance is gone. RAG default is grok-4.6."
	/>
	<meta property="og:title" content="The No-Fluff Edition - grok-faf-mcp v1.10.0" />
	<meta
		property="og:description"
		content="No fluff in a project.faf. faf_enhance is gone. RAG default is grok-4.6."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/no-fluff-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/no-fluff-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/no-fluff-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The No-Fluff Edition — grok-faf-mcp v1.10.0 · error: no such verb · that’s the edition."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The No-Fluff Edition - grok-faf-mcp v1.10.0" />
	<meta
		name="twitter:description"
		content="No fluff in a project.faf. faf_enhance is gone. RAG default is grok-4.6."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/no-fluff-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The No-Fluff Edition — grok-faf-mcp v1.10.0 · error: no such verb · that’s the edition."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / No-Fluff Edition
		</div>
		<h1>The No-Fluff Edition</h1>
		<p class="version-tag">grok-faf-mcp v1.10.0 · Grok FAF · 12 core tools</p>
		<p class="subtitle">No fluff in a project.faf. faf_enhance is gone. RAG default is grok-4.6.</p>
		<div class="meta">
			<time datetime="2026-08-21">August 21, 2026</time>
			<span class="separator">•</span>
			<span class="category grok">Grok</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/no-fluff-edition-hero.png"
			alt="The No-Fluff Edition — grok-faf-mcp v1.10.0 · $ faf_enhance · error: no such verb · that’s the edition."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> No fluff in a project.faf. <code>faf_enhance</code> is gone. RAG
				default is <code>grok-4.6</code>.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> A leftover tool promised to “enhance” your
					<code>project.faf</code>. The word never meant anything. It could write perfume into
					DNA. Empty slots are honest. Fluff is a lie that scores higher.
				</p>
				<p>
					<strong>Fix.</strong> We dropped it. Same as faf-cli and Claude FAF. Fill is
					<code>faf_auto</code> (the repo) or <code>faf_go</code> (you). RAG talks to
					<code>grok-4.6</code>, not a retired id.
				</p>
				<p>
					<strong>New state.</strong> The door still opens. The file stays facts. If you call
					<code>faf_enhance</code>, you get an error — not a rewrite.
				</p>
			</div>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="grok-faf-mcp" version="1.10.0" /></code>
			</div>
		</section>

		<section>
			<h2>What happened since Grounded Memory</h2>
			<p>
				Last grok-faf-mcp log on this blog was
				<a href="/blog/grounded-memory">1.7.0 Grounded Memory</a>. Short tour:
			</p>
			<ul>
				<li><strong>1.8</strong> — Closed-Loop. Receipts write. Not a blog.</li>
				<li><strong>1.9</strong> — ZEPH Default. Same score, cheaper. Not a blog.</li>
				<li><strong>1.10.0</strong> — No-Fluff. This is the log for the kill.</li>
			</ul>
		</section>

		<section>
			<h2>What 1.10.0 is</h2>
			<p>
				<strong>Lesson:</strong> enhance is not a FAF operation. It has no slot, no source, no
				pass/fail. You cannot point at a line in <code>project.faf</code> and say “that was
				enhanced.”
			</p>
			<p>
				Two honest states only: <strong>sourced</strong> or <strong>empty</strong>. A third state
				called “enhanced” is stuffing. We do not stuff the birth certificate.
			</p>
			<p>
				Default <code>tools/list</code> is still <strong>12</strong> core tools. Hosted URL is
				still the door. This origin is not an A2A agent — the Agent Card path stays 404, with a
				sentence that says so.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong> (npm):</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="grok-faf-mcp" version="1.10.0" /></code>
			</div>
			<p><strong>Hosted</strong> (no install):</p>
			<div class="terminal-block">
				<code>[mcp_servers.grok-faf-mcp]</code>
				<code>url = "https://mcpaas.live/grok/mcp/v1"</code>
			</div>
			<p class="muted-note">
				More:
				<a href="/blog/grounded-memory">Grounded Memory (1.7.0)</a>
				·
				<a href="/blog/zeph-edition">ZEPH (1.6.0)</a>
				·
				<a href="https://github.com/Wolfe-Jam/grok-faf-mcp" target="_blank" rel="noopener">repo</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/grok-faf-mcp/releases/tag/v1.10.0"
					target="_blank"
					rel="noopener">v1.10.0</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 1.10.0 (August 20, 2026)</li>
				<li><strong>Edition:</strong> The No-Fluff Edition</li>
				<li><strong>Identity:</strong> <code>one.faf/grok-faf-mcp</code> · title Grok FAF</li>
				<li><strong>Default tools:</strong> 12 core · no <code>faf_enhance</code></li>
				<li><strong>RAG default:</strong> <code>grok-4.6</code></li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/grok-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ No fluff in a project.faf. 🏎️</p>
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
	.category.grok {
		background: #111;
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
