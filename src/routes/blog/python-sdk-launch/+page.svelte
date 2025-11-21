<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>The Tale of Two Crowns and a Snake | FAF</title>
	<meta name="description" content="FAF Python SDK launches on PyPI. Two crowns (IANA + MCP), one snake. Then Grok showed up." />
	<meta property="og:title" content="The Tale of Two Crowns and a Snake - FAF Python SDK Launch" />
	<meta property="og:description" content="Single developer. Two crowns. One snake. Who said we couldn't sync with Python?" />
	<meta property="og:image" content="https://cdn.jsdelivr.net/npm/faf-cli@latest/assets/ai-human-balance-50-50.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Python SDK Launch
		</div>
		<h1>The Tale of Two Crowns and a Snake</h1>
		<p class="subtitle">In which a lone developer brings Python to the kingdom</p>
		<div class="meta">
			<time datetime="2025-11-21">November 21, 2025</time>
			<span class="separator">•</span>
			<span class="category">Press Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				They said it couldn't be done. They said one person couldn't hold both the IANA registration and MCP stewardship while also shipping SDKs.
			</p>

			<p class="lead">
				They forgot about the snake.
			</p>

			<div class="announcement-box">
				<h3>FAF Python SDK — LIVE</h3>
				<code class="install-command">pip install faf-python-sdk</code>
				<p>Two Crowns. One Snake.</p>
			</div>
		</section>

		<section class="grok-arrival">
			<h2>Then Grok Showed Up</h2>
			<p>
				FAF (Foundational AI-context Format) today announces the release of its Python SDK, completing the first leg of a multi-language deployment that nobody asked for but everybody needed.
			</p>
			<p>
				Then Grok showed up.
			</p>
		</section>

		<section class="technical-flex">
			<h2>The Technical Flex (We're Keeping It Humble)</h2>

			<div class="flex-grid">
				<div class="flex-item">
					<div class="flex-icon">🏛️</div>
					<h3>IANA Registered</h3>
					<p><code>application/vnd.faf+yaml</code></p>
				</div>

				<div class="flex-item">
					<div class="flex-icon">🤖</div>
					<h3>MCP Server</h3>
					<p>Official Anthropic registry</p>
				</div>

				<div class="flex-item">
					<div class="flex-icon">🐍</div>
					<h3>Python SDK</h3>
					<p>19 files, zero bloat, 37 tests</p>
				</div>

				<div class="flex-item">
					<div class="flex-icon">⚡️</div>
					<h3>Tomorrow</h3>
					<p>Rust</p>
				</div>
			</div>
		</section>

		<section class="achievement">
			<h2>The Achievement</h2>

			<blockquote class="achievement-quote">
				<p>Single developer. Two crowns. One snake.</p>
				<footer>Who said we couldn't sync with Python?</footer>
			</blockquote>
		</section>

		<section class="install">
			<h2>Install</h2>
			<div class="code-block">
				<code>pip install faf-python-sdk</code>
			</div>
		</section>

		<section class="resources">
			<h2>Links</h2>

			<div class="resources-grid">
				<a href="https://pypi.org/project/faf-python-sdk/" target="_blank" rel="noopener" class="resource-link">
					<strong>PyPI</strong>
					<p>pypi.org/project/faf-python-sdk</p>
				</a>

				<a href="https://github.com/Wolfe-Jam/faf-python-sdk" target="_blank" rel="noopener" class="resource-link">
					<strong>GitHub</strong>
					<p>github.com/Wolfe-Jam/faf-python-sdk</p>
				</a>
			</div>
		</section>

		<section class="about">
			<h2>About FAF</h2>
			<p>
				FAF Foundation — Making AI context universal, one language at a time.
			</p>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		min-height: 100vh;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid var(--faf-orange);
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: var(--faf-orange);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
		line-height: 1.3;
		font-weight: 900;
	}

	.subtitle {
		font-size: 1.3rem;
		color: #666;
		margin-bottom: 1rem;
		font-weight: 500;
		font-style: italic;
	}

	.meta {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		font-size: 0.9rem;
		color: #888;
		margin-top: 1rem;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: var(--faf-black);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.post-content {
		font-size: 1.125rem;
		line-height: 1.8;
		color: #333;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 2rem;
		margin: 2.5rem 0 1.5rem;
		color: var(--faf-black);
		font-weight: 800;
	}

	h3 {
		font-size: 1.4rem;
		margin: 1.5rem 0 1rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.lead {
		font-size: 1.3rem;
		line-height: 1.7;
		color: #222;
		margin-bottom: 1.5rem;
	}

	code {
		background: var(--faf-cream);
		color: var(--faf-orange);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.announcement-box {
		background: linear-gradient(135deg, #fff5f0 0%, #fffbf0 100%);
		border: 3px solid var(--faf-orange);
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		text-align: center;
	}

	.announcement-box h3 {
		margin: 0 0 1rem 0;
		font-size: 1.8rem;
		color: var(--faf-black);
	}

	.install-command {
		display: block;
		font-size: 1.3rem;
		padding: 1rem;
		margin: 1rem 0;
		background: var(--faf-black);
		color: var(--faf-orange);
		border-radius: 8px;
	}

	.announcement-box p {
		margin: 1rem 0 0 0;
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--faf-black);
	}

	.flex-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.flex-item {
		background: #f9f9f9;
		border: 2px solid var(--faf-cream);
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s ease;
	}

	.flex-item:hover {
		border-color: var(--faf-orange);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
	}

	.flex-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.flex-item h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.flex-item p {
		margin: 0;
		font-size: 0.95rem;
		color: #666;
	}

	.flex-item code {
		font-size: 0.8rem;
	}

	.achievement-quote {
		background: var(--faf-black);
		color: white;
		border-left: 6px solid var(--faf-orange);
		padding: 2rem;
		margin: 2rem 0;
		font-size: 1.5rem;
		font-style: normal;
		line-height: 1.6;
		text-align: center;
	}

	.achievement-quote p {
		margin: 0 0 1rem 0;
		font-weight: 700;
	}

	.achievement-quote footer {
		font-size: 1.1rem;
		color: var(--faf-orange);
		font-style: italic;
	}

	.code-block {
		background: var(--faf-black);
		border-radius: 8px;
		padding: 1.5rem;
		margin: 1rem 0;
	}

	.code-block code {
		background: transparent;
		color: var(--faf-orange);
		font-size: 1.2rem;
		padding: 0;
	}

	.resources-grid {
		display: grid;
		gap: 1rem;
		margin: 2rem 0;
	}

	.resource-link {
		display: block;
		background: #f9f9f9;
		border: 2px solid var(--faf-cream);
		border-radius: 8px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.resource-link:hover {
		border-color: var(--faf-orange);
		transform: translateX(4px);
	}

	.resource-link strong {
		color: var(--faf-orange);
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}

	.resource-link p {
		margin: 0;
		font-size: 0.95rem;
		color: #666;
	}

	@media (max-width: 768px) {
		.blog-post {
			padding: 1rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.flex-grid {
			grid-template-columns: 1fr;
		}

		.lead {
			font-size: 1.1rem;
		}

		.post-content {
			font-size: 1rem;
		}
	}
</style>
