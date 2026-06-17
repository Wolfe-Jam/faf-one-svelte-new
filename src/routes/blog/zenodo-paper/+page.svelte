<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `📄 New paper: FAF Whitepaper Published on CERN/Zenodo

Peer-citable academic paper on the .faf standard. Published on CERN's Zenodo, used by NASA and NIH.

DOI: 10.5281/zenodo.18251362`;
	const shareUrl = 'https://faf.one/blog/zenodo-paper';
	const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>FAF Whitepaper Published on CERN/Zenodo | FAF</title>
	<meta name="description" content="FAF academic whitepaper published on CERN's Zenodo repository with DOI. Peer-citable research on format-driven AI context architecture." />
	<meta property="og:title" content="FAF Whitepaper Published on CERN/Zenodo" />
	<meta property="og:description" content="Peer-citable academic paper on the .faf standard. Published on CERN's Zenodo, used by NASA and NIH." />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Zenodo Paper
		</div>
		<span class="badge">RESEARCH</span>
		<h1>FAF Whitepaper Published on CERN/Zenodo</h1>
		<p class="subtitle">Peer-citable academic validation</p>
		<div class="meta">
			<time datetime="2026-01-14">January 14, 2026</time>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				The FAF format now has academic validation. A peer-citable technical whitepaper has been published on <strong>CERN's Zenodo</strong> — the open research repository used by NASA, NIH, and major universities worldwide.
			</p>
		</section>

		<section class="paper">
			<div class="paper-card">
				<h2>Format-Driven AI Context Architecture</h2>
				<p class="paper-subtitle">The .faf Standard for Persistent Project Understanding</p>

				<div class="paper-meta">
					<div class="meta-item">
						<span class="meta-label">Author</span>
						<span class="meta-value">James Wolfe Harrison</span>
					</div>
					<div class="meta-item">
						<span class="meta-label">ORCID</span>
						<a href="https://orcid.org/0009-0007-0801-3841" class="meta-value link" target="_blank">0009-0007-0801-3841</a>
					</div>
					<div class="meta-item">
						<span class="meta-label">DOI</span>
						<a href="https://doi.org/10.5281/zenodo.18251362" class="meta-value link" target="_blank">10.5281/zenodo.18251362</a>
					</div>
					<div class="meta-item">
						<span class="meta-label">License</span>
						<span class="meta-value">CC BY 4.0</span>
					</div>
				</div>

				<a href="https://doi.org/10.5281/zenodo.18251362" class="paper-button" target="_blank">Read on Zenodo</a>
			</div>
		</section>

		<section class="findings">
			<h2>Key Findings</h2>
			<p>The paper presents empirical validation across real-world usage:</p>

			<div class="findings-grid">
				<div class="finding-card">
					<div class="finding-number">10,000+</div>
					<div class="finding-label">Projects tested</div>
				</div>
				<div class="finding-card">
					<div class="finding-number">99.7%</div>
					<div class="finding-label">Faster context reconstruction</div>
				</div>
				<div class="finding-card">
					<div class="finding-number">3</div>
					<div class="finding-label">Major AI systems validated</div>
				</div>
			</div>
		</section>

		<section class="why-zenodo">
			<h2>Why Zenodo?</h2>
			<p>
				Zenodo is CERN's open research repository — the same infrastructure that supports particle physics research. It's used by:
			</p>
			<ul>
				<li><strong>NASA</strong> — Space research publications</li>
				<li><strong>NIH</strong> — Medical research data</li>
				<li><strong>DOE</strong> — Energy department labs</li>
				<li><strong>Major universities</strong> — MIT, Stanford, and more</li>
			</ul>
			<p>
				Every paper gets a permanent DOI (Digital Object Identifier) — the same citation system used by Nature, Science, and peer-reviewed journals.
			</p>
		</section>

		<section class="cite">
			<h2>Cite This Paper</h2>
			<div class="cite-box">
				<code>Harrison, J.W. (2026). Format-Driven AI Context Architecture: The .faf Standard for Persistent Project Understanding. Zenodo. https://doi.org/10.5281/zenodo.18251362</code>
			</div>
		</section>

		<section class="cta">
			<h2>Learn More</h2>
			<div class="links">
				<a href="https://doi.org/10.5281/zenodo.18251362" class="link-button zenodo-button" target="_blank">Read Paper</a>
				<a href="https://foundation.faf.one" class="link-button foundation-button" target="_blank">FAF Foundation</a>
				<a href="https://github.com/Wolfe-Jam/faf" class="link-button github-button" target="_blank">Specification</a>
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
		background: #1a1a1a;
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

	.paper-card {
		background: linear-gradient(135deg, rgba(0, 191, 99, 0.05) 0%, rgba(0, 191, 99, 0.1) 100%);
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #00bf63;
		margin: 2rem 0;
	}

	.paper-card h2 {
		margin: 0 0 0.5rem;
		color: #1a1a1a;
	}

	.paper-subtitle {
		color: #666;
		font-size: 1.1rem;
		margin: 0 0 1.5rem;
	}

	.paper-meta {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.meta-label {
		font-size: 0.8rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.meta-value {
		font-weight: 600;
		color: #1a1a1a;
	}

	.meta-value.link {
		color: #00bf63;
		text-decoration: none;
	}

	.paper-button {
		display: inline-block;
		background: #00bf63;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
	}

	.findings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
		margin: 2rem 0;
	}

	.finding-card {
		background: #f9f9f9;
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
		border: 2px solid #e5e5e5;
	}

	.finding-number {
		font-size: 2rem;
		font-weight: 800;
		color: #00bf63;
	}

	.finding-label {
		font-size: 0.85rem;
		color: #666;
		margin-top: 0.25rem;
	}

	ul {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin: 0.5rem 0;
	}

	.cite-box {
		background: #f5f5f5;
		padding: 1rem;
		border-radius: 8px;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.cite-box code {
		font-family: monospace;
		font-size: 0.9rem;
		color: #333;
		background: none;
		padding: 0;
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

	.zenodo-button { background: #024B7A; }
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
		.paper-meta { grid-template-columns: 1fr; }
		.findings-grid { grid-template-columns: 1fr; }
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
