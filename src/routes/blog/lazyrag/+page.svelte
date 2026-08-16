<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `Lazy RAG is home.

Built for Grok Collections.
Works with any RAG.
Latest path built with Grok-Build.

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://lazyrag.faf.one';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Lazy RAG is home | FAF</title>
	<meta
		name="description"
		content="The home for Lazy RAG. Built for Grok Collections. Works with any RAG. Latest path built with Grok-Build."
	/>
	<meta property="og:title" content="Lazy RAG is home" />
	<meta
		property="og:description"
		content="Built for Grok Collections. Works with any RAG. Latest path built with Grok-Build."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/lazyrag" />
	<meta property="og:image" content="https://faf.one/blog/lazyrag-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Lazy RAG is home" />
	<meta
		name="twitter:description"
		content="Built for Grok Collections. Works with any RAG. Latest path built with Grok-Build."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/lazyrag-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Lazy RAG
		</div>
		<h1>Lazy RAG is home</h1>
		<p class="subtitle">Built for Grok Collections. Works with any RAG.</p>
		<div class="meta">
			<time datetime="2026-08-16">August 16, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/lazyrag-hero.png"
			alt="Lazy RAG — home. Built for Grok Collections."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>Home:</strong>
				<a href="https://lazyrag.faf.one">lazyrag.faf.one</a>
			</p>
		</section>

		<section>
			<h2>What it is</h2>
			<p>
				Structure-first retrieval for IANA-registered <code>.faf</code>. A dotted path returns the
				whole section — not a size-split chunk. The store stays theirs.
			</p>
			<p>Built for Grok Collections. Sits beside any other RAG the same way.</p>
			<p>The latest path was built with Grok-Build itself.</p>
		</section>

		<section>
			<h2>See it</h2>
			<p>
				<a href="https://lazyrag.faf.one">lazyrag.faf.one</a>
				·
				<a href="https://github.com/Wolfe-Jam/xai-faf-rag-public">About</a>
				·
				<a href="https://faf.one">faf.one</a>
			</p>
			<p>Contact: <a href="mailto:team@faf.one">team@faf.one</a></p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — help guide what we build.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ The store stays theirs. 🏎️</p>
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
	.category.launch {
		background: #ff6b35;
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

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}
</style>
