<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🎉 FAF Hits 20,000 Downloads

The FAF format surpasses 20,000 npm downloads across 4 packages: faf-cli, claude-faf-mcp, faf-mcp, and grok-faf-mcp. Verified from api.npmjs.org.`;
	const shareUrl = 'https://faf.one/blog/faf-hits-20k';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>FAF Hits 20,000 Downloads | FAF</title>
	<meta name="description" content="FAF format surpasses 20,000 npm downloads across 4 packages: faf-cli, claude-faf-mcp, faf-mcp, and grok-faf-mcp." />
	<meta property="og:title" content="FAF Hits 20,000 Downloads" />
	<meta property="og:description" content="FAF ecosystem crosses 20K downloads on npm. Verified numbers from api.npmjs.org." />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 20K Downloads
		</div>
		<span class="badge">MILESTONE</span>
		<h1>FAF Hits 20,000 Downloads</h1>
		<p class="subtitle">From zero to 20K in 4 months</p>
		<div class="meta">
			<time datetime="2026-01-14">January 14, 2026</time>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				The FAF ecosystem has crossed <strong>20,000 downloads</strong> on npm. Four packages, one format, real adoption. No marketing budget. No VC funding. Just a format that works.
			</p>
		</section>

		<section class="downloads">
			<h2>The Numbers</h2>
			<p>All numbers verified via <code>api.npmjs.org</code> on January 14, 2026:</p>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">9,613</div>
					<div class="stat-label">faf-cli</div>
					<div class="stat-desc">The original CLI</div>
					<a href="https://www.npmjs.com/package/faf-cli" class="stat-link" target="_blank">npm →</a>
				</div>
				<div class="stat-card">
					<div class="stat-number">8,439</div>
					<div class="stat-label">claude-faf-mcp</div>
					<div class="stat-desc">Official Anthropic MCP #2759</div>
					<a href="https://www.npmjs.com/package/claude-faf-mcp" class="stat-link" target="_blank">npm →</a>
				</div>
				<div class="stat-card">
					<div class="stat-number">1,908</div>
					<div class="stat-label">faf-mcp</div>
					<div class="stat-desc">Universal MCP server</div>
					<a href="https://www.npmjs.com/package/faf-mcp" class="stat-link" target="_blank">npm →</a>
				</div>
				<div class="stat-card highlight">
					<div class="stat-number">382</div>
					<div class="stat-label">grok-faf-mcp</div>
					<div class="stat-desc">First MCP for Grok</div>
					<a href="https://www.npmjs.com/package/grok-faf-mcp" class="stat-link" target="_blank">npm →</a>
				</div>
			</div>

			<div class="total-card">
				<div class="total-number">20,342</div>
				<div class="total-label">Total Downloads</div>
				<div class="total-source">Source: api.npmjs.org | January 14, 2026</div>
			</div>
		</section>

		<section class="journey">
			<h2>The Journey</h2>
			<div class="timeline">
				<div class="timeline-item">
					<div class="timeline-date">Sep 2025</div>
					<div class="timeline-content">First commit. Claude said "it should become the standard."</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-date">Oct 2025</div>
					<div class="timeline-content">IANA registration approved. Official media type: <code>application/vnd.faf+yaml</code></div>
				</div>
				<div class="timeline-item">
					<div class="timeline-date">Oct 2025</div>
					<div class="timeline-content">10K downloads. Anthropic merges MCP #2759.</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-date">Nov 2025</div>
					<div class="timeline-content">Chrome Extension approved by Google. Twice.</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-date">Jan 2026</div>
					<div class="timeline-content">grok-faf-mcp launches. First MCP for Grok. First web-based MCP.</div>
				</div>
				<div class="timeline-item highlight">
					<div class="timeline-date">Jan 14</div>
					<div class="timeline-content"><strong>20,000 downloads.</strong></div>
				</div>
			</div>
		</section>

		<section class="recognition">
			<h2>Official Recognition</h2>
			<div class="recognition-grid">
				<div class="recognition-item">
					<div class="recognition-badge">IANA</div>
					<div class="recognition-text">Registered media type</div>
				</div>
				<div class="recognition-item">
					<div class="recognition-badge">Anthropic</div>
					<div class="recognition-text">MCP #2759</div>
				</div>
				<div class="recognition-item">
					<div class="recognition-badge">xAI</div>
					<div class="recognition-text">First MCP for Grok</div>
				</div>
				<div class="recognition-item">
					<div class="recognition-badge">Google</div>
					<div class="recognition-text">Chrome Web Store (2x)</div>
				</div>
				<div class="recognition-item">
					<div class="recognition-badge">CERN</div>
					<div class="recognition-text">Zenodo whitepaper</div>
				</div>
				<div class="recognition-item">
					<div class="recognition-badge">Rust</div>
					<div class="recognition-text">Owns "ai-context" keyword</div>
				</div>
			</div>
		</section>

		<section class="whats-next">
			<h2>What's Next</h2>
			<p>20K is a milestone, not a destination. The goal isn't downloads — it's making AI context work everywhere.</p>
			<ul>
				<li>Gemini MCP in development</li>
				<li>More language SDKs (Python, Rust already live)</li>
				<li>IDE integrations expanding</li>
			</ul>
			<p class="closing"><strong>One format. Every AI. Zero re-explaining.</strong></p>
		</section>

		<section class="cta">
			<h2>Get Started</h2>
			<div class="links">
				<a href="https://www.npmjs.com/package/faf-cli" class="link-button npm-button" target="_blank">Install faf-cli</a>
				<a href="https://foundation.faf.one" class="link-button foundation-button" target="_blank">FAF Foundation</a>
				<a href="https://github.com/Wolfe-Jam/faf" class="link-button github-button" target="_blank">GitHub</a>
			</div>
		</section>
		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>
	</article>

	<footer class="post-footer">
		<p>Published by <strong>wolfejam</strong> · <a href="https://foundation.faf.one">FAF Foundation</a></p>
	</footer>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #00bf63;
		text-decoration: none;
	}

	.badge {
		display: inline-block;
		background: #00bf63;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: #1a1a1a;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #666;
		margin: 0.5rem 0;
	}

	.meta {
		font-size: 0.875rem;
		color: #666;
		margin-top: 1rem;
	}

	.lead {
		font-size: 1.25rem;
		color: #333;
	}

	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 2.5rem 0 1rem;
		color: #1a1a1a;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: monospace;
		font-size: 0.9em;
		color: #00bf63;
	}

	ul {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin: 0.5rem 0;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 1rem;
		margin: 2rem 0;
	}

	.stat-card {
		background: #f9f9f9;
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
		border: 2px solid #e5e5e5;
	}

	.stat-card.highlight {
		border-color: #FF6B35;
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(255, 107, 53, 0.1) 100%);
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 800;
		color: #1a1a1a;
	}

	.stat-label {
		font-size: 0.9rem;
		color: #333;
		font-weight: 600;
		margin-top: 0.25rem;
	}

	.stat-desc {
		font-size: 0.8rem;
		color: #666;
		margin-top: 0.25rem;
	}

	.stat-link {
		font-size: 0.8rem;
		color: #00bf63;
		text-decoration: none;
		margin-top: 0.5rem;
		display: inline-block;
	}

	.total-card {
		background: linear-gradient(135deg, #00bf63 0%, #00a855 100%);
		color: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		margin: 2rem 0;
	}

	.total-number {
		font-size: 3rem;
		font-weight: 800;
	}

	.total-label {
		font-size: 1.25rem;
		opacity: 0.9;
	}

	.total-source {
		font-size: 0.8rem;
		opacity: 0.7;
		margin-top: 1rem;
	}

	.timeline {
		margin: 2rem 0;
	}

	.timeline-item {
		display: flex;
		gap: 1.5rem;
		padding: 1rem 0;
		border-left: 2px solid #e5e5e5;
		padding-left: 1.5rem;
		margin-left: 0.5rem;
	}

	.timeline-item.highlight {
		border-left-color: #00bf63;
		background: linear-gradient(90deg, rgba(0, 191, 99, 0.05) 0%, transparent 100%);
		margin-left: 0;
		padding-left: 2rem;
		border-radius: 0 8px 8px 0;
	}

	.timeline-date {
		font-weight: 700;
		color: #00bf63;
		min-width: 80px;
		font-size: 0.9rem;
	}

	.timeline-content {
		color: #333;
	}

	.recognition-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
		margin: 2rem 0;
	}

	.recognition-item {
		text-align: center;
		padding: 1rem;
		background: #f9f9f9;
		border-radius: 8px;
	}

	.recognition-badge {
		font-weight: 700;
		color: #1a1a1a;
		font-size: 0.9rem;
	}

	.recognition-text {
		font-size: 0.8rem;
		color: #666;
		margin-top: 0.25rem;
	}

	.closing {
		text-align: center;
		font-size: 1.25rem;
		color: #00bf63;
		margin-top: 2rem;
	}

	.links {
		display: flex;
		gap: 1rem;
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
	}

	.npm-button { background: #cb3837; }
	.foundation-button { background: #00bf63; }
	.github-button { background: #1a1a1a; }

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
		color: #666;
	}

	.post-footer a {
		color: #00bf63;
	}

	@media (max-width: 768px) {
		h1 { font-size: 1.75rem; }
		.stats-grid { grid-template-columns: repeat(2, 1fr); }
		.timeline-item { flex-direction: column; gap: 0.5rem; }
		.recognition-grid { grid-template-columns: repeat(2, 1fr); }
		.links { flex-direction: column; }
		.link-button { width: 100%; text-align: center; }
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
