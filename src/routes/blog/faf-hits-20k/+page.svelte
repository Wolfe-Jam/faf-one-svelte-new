<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>.FAF: 20,000+ Downloads + CERN/Zenodo Whitepaper Published | FAF</title>
	<meta name="description" content="FAF format surpasses 20,000 downloads across 4 npm packages. Academic whitepaper published on CERN/Zenodo with DOI. grok-faf-mcp becomes first MCP for xAI Grok." />
	<meta property="og:title" content=".FAF: 20,000+ Downloads + CERN/Zenodo Whitepaper Published" />
	<meta property="og:description" content="FAF format surpasses 20,000 downloads. Academic whitepaper published on CERN/Zenodo. First MCP for Grok launches." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 20k Milestone
		</div>
		<h1>.FAF: 20,000+ Downloads + CERN/Zenodo Whitepaper</h1>
		<p class="subtitle">Academic validation meets real-world adoption</p>
		<div class="meta">
			<time datetime="2026-01-14">January 14, 2026</time>
			<span class="separator">•</span>
			<span class="milestone">20,342 Downloads</span>
			<span class="separator">•</span>
			<span class="category">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>.FAF (Foundational AI-context Format)</strong> has crossed 20,000 downloads on npm and published its first academic whitepaper on CERN's Zenodo repository. The IANA-registered format now has both real-world adoption and peer-citable academic validation.
			</p>

			<blockquote class="creator-quote">
				"AI context needed a file format, it got one — .faf"
				<footer>— wolfejam</footer>
			</blockquote>
		</section>

		<section class="downloads">
			<h2>Verified Download Numbers</h2>
			<p>
				All numbers verified via <code>api.npmjs.org</code> on January 14, 2026:
			</p>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">9,613</div>
					<div class="stat-label">faf-cli</div>
					<a href="https://www.npmjs.com/package/faf-cli" class="stat-link" target="_blank">npm</a>
				</div>
				<div class="stat-card">
					<div class="stat-number">8,439</div>
					<div class="stat-label">claude-faf-mcp</div>
					<a href="https://www.npmjs.com/package/claude-faf-mcp" class="stat-link" target="_blank">npm</a>
				</div>
				<div class="stat-card">
					<div class="stat-number">1,908</div>
					<div class="stat-label">faf-mcp</div>
					<a href="https://www.npmjs.com/package/faf-mcp" class="stat-link" target="_blank">npm</a>
				</div>
				<div class="stat-card highlight">
					<div class="stat-number">382</div>
					<div class="stat-label">grok-faf-mcp</div>
					<div class="stat-badge">First MCP for Grok</div>
					<a href="https://www.npmjs.com/package/grok-faf-mcp" class="stat-link" target="_blank">npm</a>
				</div>
			</div>

			<div class="total-card">
				<div class="total-number">20,342</div>
				<div class="total-label">Total Downloads</div>
				<div class="total-source">Source: api.npmjs.org | January 14, 2026</div>
			</div>
		</section>

		<section class="grok-mcp">
			<h2>grok-faf-mcp: Three Industry Firsts</h2>
			<p>
				<strong>grok-faf-mcp</strong> launched and immediately set three records:
			</p>

			<div class="firsts-grid">
				<div class="first-card">
					<div class="first-number">1</div>
					<h3>First MCP for Grok</h3>
					<p>No other Model Context Protocol server exists for xAI's Grok. grok-faf-mcp is the first.</p>
				</div>
				<div class="first-card">
					<div class="first-number">2</div>
					<h3>First Web-Based MCP</h3>
					<p>Live at <a href="https://grok-faf-mcp.vercel.app" target="_blank">grok-faf-mcp.vercel.app</a> — no installation required.</p>
				</div>
				<div class="first-card">
					<div class="first-number">3</div>
					<h3>Fastest Growing</h3>
					<p>280 to 380+ downloads in 24 hours — 36% single-day growth. Hockey-stick adoption curve.</p>
				</div>
			</div>
		</section>

		<section class="cern">
			<h2>Academic Whitepaper on CERN/Zenodo</h2>
			<p>
				A peer-citable technical whitepaper has been published on CERN's Zenodo research repository:
			</p>

			<div class="paper-card">
				<h3>Format-Driven AI Context Architecture: The .faf Standard for Persistent Project Understanding</h3>
				<div class="paper-meta">
					<p><strong>Author:</strong> James Wolfe Harrison</p>
					<p><strong>ORCID:</strong> <a href="https://orcid.org/0009-0007-0801-3841" target="_blank">0009-0007-0801-3841</a></p>
					<p><strong>DOI:</strong> <a href="https://doi.org/10.5281/zenodo.18251362" target="_blank">10.5281/zenodo.18251362</a></p>
					<p><strong>License:</strong> CC BY 4.0</p>
				</div>
				<a href="https://doi.org/10.5281/zenodo.18251362" class="paper-button" target="_blank">Read on Zenodo</a>
			</div>

			<p>
				The paper presents empirical validation across 10,000+ projects and three major AI systems, demonstrating 99.7% faster context reconstruction compared to traditional documentation approaches.
			</p>
		</section>

		<section class="recognition">
			<h2>Official Recognition</h2>
			<p>
				The .faf format has achieved recognition from major standards bodies and platforms:
			</p>

			<div class="recognition-grid">
				<div class="recognition-card">
					<div class="recognition-icon">IANA</div>
					<h3>IANA/IETF</h3>
					<p>Registered media type: <code>application/vnd.faf+yaml</code></p>
				</div>
				<div class="recognition-card">
					<div class="recognition-icon">CERN</div>
					<h3>CERN/Zenodo</h3>
					<p>Published whitepaper with permanent DOI</p>
				</div>
				<div class="recognition-card">
					<div class="recognition-icon">MCP</div>
					<h3>Anthropic</h3>
					<p>Official MCP #2759 in ecosystem</p>
				</div>
				<div class="recognition-card">
					<div class="recognition-icon">xAI</div>
					<h3>xAI/Grok</h3>
					<p>First MCP server for Grok</p>
				</div>
				<div class="recognition-card">
					<div class="recognition-icon">Rust</div>
					<h3>crates.io</h3>
					<p>Owns "ai-context" keyword</p>
				</div>
				<div class="recognition-card">
					<div class="recognition-icon">Chrome</div>
					<h3>Google</h3>
					<p>Chrome Web Store approved (2x)</p>
				</div>
			</div>
		</section>

		<section class="links-section">
			<h2>Resources</h2>
			<div class="links">
				<a href="https://doi.org/10.5281/zenodo.18251362" class="link-button zenodo-button" target="_blank">
					CERN/Zenodo Paper
				</a>
				<a href="https://foundation.faf.one" class="link-button foundation-button" target="_blank">
					FAF Foundation
				</a>
				<a href="https://github.com/Wolfe-Jam/faf" class="link-button github-button" target="_blank">
					GitHub Spec
				</a>
				<a href="https://grok-faf-mcp.vercel.app" class="link-button grok-button" target="_blank">
					Grok MCP Web App
				</a>
			</div>
		</section>

		<section class="conclusion">
			<p class="tagline">
				<strong>IANA-Registered. CERN-Published. 20,000+ Downloads.</strong>
			</p>
			<p class="brand">
				Format Authority for AI Context<br />
				Official Anthropic MCP Steward<br />
				First MCP for Grok<br />
				Open Source MIT
			</p>
		</section>
	</article>

	<footer class="post-footer">
		<div class="author">
			<p>Published by <strong>wolfejam</strong></p>
			<p class="tagline-footer">Format Authority for AI Context</p>
		</div>
		<div class="share">
			<p>Share this milestone:</p>
			<div class="share-buttons">
				<a href="https://twitter.com/intent/tweet?text=.FAF%3A%2020%2C000%2B%20Downloads%20%2B%20CERN%2FZenodo%20Whitepaper%20Published&url=https://faf.one/blog/faf-hits-20k" target="_blank">Twitter</a>
				<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://faf.one/blog/faf-hits-20k" target="_blank">LinkedIn</a>
			</div>
		</div>
	</footer>
</div>

<style>
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

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: #FF6B35;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #666;
		margin: 0.5rem 0;
		font-weight: 400;
	}

	.meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.875rem;
		color: #666;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.separator {
		color: #ccc;
	}

	.milestone {
		color: #FF6B35;
		font-weight: 600;
	}

	.category {
		color: #00bf63;
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
		color: #333;
		margin: 1rem 0;
		font-weight: 400;
	}

	.creator-quote {
		font-size: 1.5rem;
		font-weight: 600;
		font-style: italic;
		color: #FF6B35;
		border-left: 4px solid #00bf63;
		padding-left: 1.5rem;
		margin: 2.5rem 0;
		line-height: 1.4;
	}

	.creator-quote footer {
		font-size: 1rem;
		font-weight: 500;
		font-style: normal;
		color: #666;
		margin-top: 0.75rem;
	}

	section {
		margin: 2.5rem 0;
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
		color: #1a1a1a;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 1rem 0 0.5rem;
		color: #333;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9em;
		color: #00bf63;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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
		color: #666;
		margin-top: 0.25rem;
	}

	.stat-badge {
		font-size: 0.75rem;
		color: #FF6B35;
		font-weight: 600;
		margin-top: 0.5rem;
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

	.firsts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.first-card {
		background: #f9f9f9;
		padding: 1.5rem;
		border-radius: 12px;
		border-left: 4px solid #FF6B35;
	}

	.first-number {
		font-size: 2rem;
		font-weight: 800;
		color: #FF6B35;
	}

	.first-card h3 {
		margin: 0.5rem 0;
	}

	.first-card p {
		font-size: 0.95rem;
		color: #666;
		margin: 0;
	}

	.first-card a {
		color: #00bf63;
	}

	.paper-card {
		background: linear-gradient(135deg, rgba(0, 191, 99, 0.05) 0%, rgba(0, 191, 99, 0.1) 100%);
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #00bf63;
		margin: 2rem 0;
	}

	.paper-card h3 {
		color: #1a1a1a;
		font-size: 1.25rem;
		margin-top: 0;
	}

	.paper-meta {
		margin: 1rem 0;
	}

	.paper-meta p {
		margin: 0.5rem 0;
		font-size: 0.95rem;
	}

	.paper-meta a {
		color: #00bf63;
	}

	.paper-button {
		display: inline-block;
		background: #00bf63;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		margin-top: 1rem;
	}

	.paper-button:hover {
		background: #00a855;
	}

	.recognition-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		margin: 2rem 0;
	}

	.recognition-card {
		background: #f9f9f9;
		padding: 1.25rem;
		border-radius: 12px;
		text-align: center;
		border: 2px solid #e5e5e5;
	}

	.recognition-icon {
		font-size: 0.9rem;
		font-weight: 800;
		color: white;
		background: #1a1a1a;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		display: inline-block;
		margin-bottom: 0.75rem;
	}

	.recognition-card h3 {
		font-size: 1rem;
		margin: 0.5rem 0;
	}

	.recognition-card p {
		font-size: 0.85rem;
		color: #666;
		margin: 0;
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

	.zenodo-button {
		background: #024B7A;
	}

	.foundation-button {
		background: #00bf63;
	}

	.github-button {
		background: #6e5494;
	}

	.grok-button {
		background: #1a1a1a;
	}

	.link-button:hover {
		transform: translateY(-2px);
	}

	.conclusion {
		margin-top: 3rem;
		text-align: center;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(0, 191, 99, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%);
		border-radius: 12px;
	}

	.tagline {
		font-size: 1.5rem;
		color: #1a1a1a;
		margin: 1rem 0;
	}

	.brand {
		font-size: 1rem;
		color: #666;
		margin: 1.5rem 0;
		line-height: 1.8;
	}

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
	}

	.author {
		text-align: center;
		margin-bottom: 2rem;
	}

	.author p {
		margin: 0.5rem 0;
	}

	.tagline-footer {
		color: #666;
		font-size: 0.875rem;
	}

	.share {
		text-align: center;
	}

	.share p {
		margin: 0.5rem 0;
		color: #666;
	}

	.share-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.share-buttons a {
		padding: 0.5rem 1rem;
		background: #f5f5f5;
		color: #333;
		text-decoration: none;
		border-radius: 6px;
		font-size: 0.875rem;
		transition: background 0.2s;
	}

	.share-buttons a:hover {
		background: #00bf63;
		color: white;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.firsts-grid {
			grid-template-columns: 1fr;
		}

		.recognition-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.links {
			flex-direction: column;
		}

		.link-button {
			width: 100%;
			text-align: center;
		}
	}
</style>
