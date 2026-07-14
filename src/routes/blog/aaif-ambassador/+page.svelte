<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — FAF-free, mission-first.
	const shareText = `Now an Ambassador for the Agentic AI Foundation — the Linux Foundation home for open agent standards (MCP · goose · AGENTS.md · agentgateway).

Helping developers actually use them, starting with AGENTS.md.`;
	const shareUrl = 'https://faf.one/blog/aaif-ambassador';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });

	const fieldGuide = 'https://dev.to/wolfejam/agentsmd-the-one-file-that-makes-ai-coding-agents-actually-useful-ckj';
	const buildAlong = 'https://dev.to/wolfejam/agentsmd-hands-on-build-one-step-by-step-and-watch-an-agent-use-it-3g27';
</script>

<svelte:head>
	<title>AAIF Ambassador</title>
	<meta name="description" content="Now an Ambassador for the Agentic AI Foundation — helping developers adopt the open standards agentic AI is being built on: MCP, goose, AGENTS.md, agentgateway." />
	<meta property="og:title" content="AAIF Ambassador" />
	<meta property="og:description" content="Helping developers adopt the open standards agentic AI is being built on." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/aaif-ambassador-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/aaif-ambassador-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / AAIF Ambassador
		</div>

		<h1>AAIF Ambassador</h1>
		<p class="subtitle">Open standards for AI agents, at the Linux Foundation.</p>
		<div class="meta">
			<time datetime="2026-07-04">July 4, 2026</time>
			<span class="separator">•</span>
			<span class="category foundation">Foundation</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/aaif-ambassador-hero.png" alt="AAIF Ambassador — Agentic AI Foundation, hosted by the Linux Foundation" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> I've joined the <strong>Agentic AI Foundation (AAIF)</strong> as an Ambassador. AAIF — hosted by the Linux Foundation — is the vendor-neutral home for the open standards agentic AI is being built on: MCP, goose, AGENTS.md, and agentgateway.
			</p>
		</section>

		<section>
			<h2>The role</h2>
			<p>Ambassadors contribute public, project-based education that helps developers understand and use these standards — guides, tutorials, and community help.</p>
		</section>

		<section>
			<h2>Where I started — AGENTS.md</h2>
			<p>The single file that tells any AI coding agent how to work in your repo: build, test, conventions, guardrails.</p>

			<div class="post-cards">
				<a class="post-card" href={fieldGuide} target="_blank" rel="noopener">
					<div class="pc-text">
						<div class="pc-title">The Field Guide</div>
						<div class="pc-desc">What belongs in an AGENTS.md, the anti-patterns, and how to keep it current.</div>
					</div>
					<span class="pc-arrow">Read on dev.to →</span>
				</a>

				<a class="post-card" href={buildAlong} target="_blank" rel="noopener">
					<div class="pc-text">
						<div class="pc-title">The Hands-On Build-Along</div>
						<div class="pc-desc">Write one for a real project step by step, then point an agent at it and watch it ship a tested change.</div>
					</div>
					<span class="pc-arrow">Read on dev.to →</span>
				</a>
			</div>
		</section>

		<section>
			<h2>Questions?</h2>
			<p>The projects are all public. If you're building with AI agents, ask me anything — happy to help or point you to the right place.</p>
			<div class="cta-box">
				<h3>Agentic AI Foundation</h3>
				<p>Explore the open projects and get involved.</p>
				<a href="https://github.com/aaif" target="_blank" rel="noopener" class="cta-link">github.com/aaif →</a>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<div class="closing-badge">
			<img src="/blog/aaif-ambassador-badge.png" alt="AAIF Ambassador badge — Agentic AI Foundation, hosted by the Linux Foundation" />
		</div>

		<section class="footer-note">
			<p>Open standards, in the open.</p>
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
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
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

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator {
		color: #ccc;
	}

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.foundation {
		background: #1D8348;
		color: #fff;
	}

	.hero-image {
		margin: 0 0 2.5rem 0;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
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
		color: #1a1a1a;
	}

	h2 {
		font-size: 1.8rem;
		margin: 2.5rem 0 1rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 0 0 0.5rem 0;
		color: #000;
	}

	p {
		margin-bottom: 1.25rem;
		color: #1a1a1a;
	}

	.post-cards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.post-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1.25rem 1.5rem;
		background: var(--faf-surface);
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		text-decoration: none;
		transition: border-color 0.2s, transform 0.1s;
	}

	.post-card:hover {
		border-color: #FF6B35;
		transform: translateY(-1px);
	}

	.pc-title {
		font-size: 1.15rem;
		font-weight: 700;
		color: #000;
		margin-bottom: 0.25rem;
	}

	.pc-desc {
		font-size: 0.95rem;
		color: #1a1a1a;
		line-height: 1.5;
	}

	.pc-arrow {
		flex-shrink: 0;
		font-size: 0.9rem;
		font-weight: 600;
		color: #FF6B35;
		white-space: nowrap;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
		margin: 1.5rem 0;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #000;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #1a1a1a;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
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

	.closing-badge {
		text-align: center;
		margin: 3.5rem 0 0 0;
	}

	.closing-badge img {
		width: 100%;
		max-width: 360px;
		height: auto;
		display: inline-block;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #1a1a1a;
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

		.post-card {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
