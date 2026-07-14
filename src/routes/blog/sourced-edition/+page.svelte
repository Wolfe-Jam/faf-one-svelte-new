<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Sourced Edition - claude-faf-mcp v5.9.0 | FAF</title>
	<meta name="description" content="claude-faf-mcp composes faf-cli's single-source engines instead of carrying its own copies. Fills come from real evidence or stay honestly empty — nothing guessed." />
	<meta property="og:title" content="The Sourced Edition - claude-faf-mcp v5.9.0" />
	<meta property="og:description" content="Compose, don't fork. Sourced, not guessed. FAF don't lie, by construction." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/sourced-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/sourced-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Sourced Edition
		</div>

		<h1>The Sourced Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.9.0</p>
		<p class="subtitle">Every answer comes from one source.</p>
		<div class="meta">
			<time datetime="2026-06-12">June 12, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/sourced-edition-hero.png" alt="claude-faf-mcp v5.9.0 — The Sourced Edition" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp now <strong>composes faf-cli's single-source engines</strong> &mdash; the 6Ws interview and Turbo-Cat detection &mdash; instead of carrying its own copies that drift. Fills come from real evidence or stay honestly empty; nothing is guessed. <strong>FAF don't lie, by construction.</strong>
			</p>
		</section>

		<section>
			<h2>Compose, don't fork</h2>
			<p>
				The fastest way for two tools to disagree is to make them each keep their own copy of the same logic. One gets a fix; the other drifts. Over five MCP servers, that's five copies of "what framework is this?" slowly telling you five different things.
			</p>
			<p>
				The Sourced Edition deletes claude-faf-mcp's copies and <strong>composes the real engines from faf-cli</strong> &mdash; the same way it already shares the scoring kernel. One source of truth, every surface.
			</p>
			<ul>
				<li><strong>The interview is single-sourced.</strong> <code>faf_go</code> now pulls its questions from faf-cli's public <code>INTERVIEW</code>; the hand-maintained local question registry is gone. The text and options can no longer drift from the kernel &mdash; and you're only ever asked for slots that are <em>missing and active</em> (anything marked <code>slotignored</code> is skipped).</li>
				<li><strong>Detection is single-sourced.</strong> <code>faf_formats</code> and <code>faf_auto</code> now use faf-cli's Turbo-Cat engine (~200 formats); the local 25-entry copy is deleted. Detection that's <em>correct</em> and can't drift &mdash; an MCP server with an <code>mcpb manifest.json</code> is detected as what it is, not mis-flagged as a Chrome extension.</li>
			</ul>
		</section>

		<section>
			<h2>Sourced, not guessed</h2>
			<p>
				There was a legacy extractor that filled empty human-context slots by <em>inferring</em> them &mdash; guessing your audience from your tech stack, your purpose from your project name. It's gone. In its place: a sourced-or-empty extractor, with a test that proves it <strong>cannot fabricate</strong>.
			</p>
			<p>
				That's the whole edition in one rule: <strong>fill from real evidence, or leave it honestly empty.</strong> An empty slot you hand back to a human is the truth. A guessed one is a lie. No-guess isn't a setting now &mdash; it's structural.
			</p>
		</section>

		<section>
			<h2>A verified 100%</h2>
			<p>
				The <code>/faf</code> prompt drives your project to 100% &mdash; and now <em>proves</em> it. It runs <code>faf_trust</code> to attest the score with a deterministic parity receipt any engine can reproduce, offers to install the session hook so 100% stays fresh, and reports the quiet <code>✪</code> seal. Its lead rule is the edition's: source what it can, hand you only what only you can answer.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<pre><code>npm install -g claude-faf-mcp@5.9.0</code></pre>
			</div>
			<p>Or one-click the <code>.mcpb</code> for Claude Desktop &mdash; no terminal, no JSON config. Then type <code>/faf</code> and watch it work.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.9.0</strong> &mdash; Released June 12, 2026</li>
				<li><strong>567 / 0</strong> &mdash; tests passing</li>
				<li><strong>🏆 100%</strong> &mdash; Trophy score</li>
				<li><strong>35</strong> &mdash; MCP tools</li>
				<li><strong>~200 formats</strong> &mdash; detected via the composed Turbo-Cat engine</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=The%20Sourced%20Edition%20%E2%80%94%20claude-faf-mcp%20v5.9.0.%20Compose%2C%20don%27t%20fork.%20Sourced%2C%20not%20guessed.%20faf_go%20and%20Turbo-Cat%20now%20compose%20faf-cli%27s%20single-source%20engines%20instead%20of%20carrying%20copies%20that%20drift.&url=https%3A//faf.one/blog/sourced-edition" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Compose, don't fork. Sourced, not guessed. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
	}

	.hero-image {
		margin: 0 -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--faf-surface)5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
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

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
