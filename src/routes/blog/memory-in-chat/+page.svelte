<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `🏁 Just shipped: faf-memory-mcp v0.1.1

AI memory that lives in a file your chat can etch and recall.

etch writes the file so memory survives the process.
Plugin install matches live faf-memory@claude-community.

Local .fafm · complementary to the hosted namepoint

uvx faf-memory-mcp

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/memory-in-chat';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Memory in chat - faf-memory-mcp v0.1.1 | FAF</title>
	<meta
		name="description"
		content="etch writes the file so memory survives the process. Plugin install matches live faf-memory on claude-community."
	/>
	<meta property="og:title" content="Memory in chat — faf-memory-mcp v0.1.1" />
	<meta
		property="og:description"
		content="etch writes the file so memory survives the process. Plugin install matches live faf-memory on claude-community."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/memory-in-chat" />
	<meta property="og:image" content="https://faf.one/blog/memory-in-chat-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Memory in chat — faf-memory-mcp v0.1.1" />
	<meta
		name="twitter:description"
		content="etch writes the file so memory survives the process. Plugin install matches live faf-memory on claude-community."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/memory-in-chat-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Memory in chat
		</div>
		<h1>Memory in chat</h1>
		<p class="version-tag">faf-memory-mcp v0.1.1</p>
		<p class="subtitle">etch writes the file so memory survives the process.</p>
		<div class="meta">
			<time datetime="2026-08-15">August 15, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/memory-in-chat-hero.png"
			alt="faf-memory-mcp v0.1.1 — etch writes the file so memory survives the process"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> etch writes the file so memory survives the process. Plugin install
				matches live <code>faf-memory<span>@</span>claude-community</code>.
			</p>
		</section>

		<section>
			<h2>ABC</h2>
			<p>
				<strong>A.</strong> Install — Claude: <code>claude plugin install faf-memory<span>@</span>claude-community</code>.
				Cursor · Grok · any host: same JSON on
				<a href="https://memory.faf.one">memory.faf.one</a>.
			</p>
			<p><strong>B.</strong> Etch — etch writes the file so memory survives the process.</p>
			<p><strong>C.</strong> Recall — next session, same <code>.fafm</code> file.</p>
			<p>
				That’s the local file over MCP. A free namepoint is the hosted path — complementary, not a
				second product.
			</p>
			<p>
				The guide lives on <a href="https://memory.faf.one">memory.faf.one</a>.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>uvx faf-memory-mcp</code>
			</div>
			<p class="muted-note">
				<a href="https://memory.faf.one">memory.faf.one</a>
				·
				<a href="https://pypi.org/project/faf-memory-mcp/0.1.1/">PyPI 0.1.1</a>
				·
				<a href="https://github.com/Wolfe-Jam/faf-memory-mcp">GitHub</a>
			</p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — help guide what we build.</p>
			<div class="feedback-actions">
				<a
					href="https://github.com/Wolfe-Jam/faf-memory-mcp/issues/new"
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
			<p>Built with .faf + .fafm ☑️ etch and forget. 🏎️</p>
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

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
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
