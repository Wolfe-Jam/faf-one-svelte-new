<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>Memory Paper Published on Zenodo | FAF</title>
	<meta name="description" content="The .fafm Memory paper is on Zenodo. Multi-profile AI agent memory format, IANA-registered, CC BY 4.0. Permanent Memory. Instant Recall." />
	<meta property="og:title" content="Memory Paper Published on Zenodo" />
	<meta property="og:description" content="The .fafm Memory paper is on Zenodo. Multi-profile AI agent memory format. Permanent Memory. Instant Recall." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/permanent-memory" />
	<meta property="og:image" content="https://faf.one/blog/permanent-memory-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/permanent-memory-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Permanent Memory
		</div>
		<span class="badge">RESEARCH</span>
		<h1>Memory Paper Published on Zenodo</h1>
		<p class="subtitle">Permanent Memory. Instant Recall.</p>
		<div class="meta">
			<time datetime="2026-05-22">May 22, 2026</time>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				The <code>.fafm</code> Memory paper is now live on <strong>CERN's Zenodo</strong>. It is the multi-profile sibling to <a href="/blog/zenodo-paper"><code>.faf</code></a> — the first formal standard for how AI agents remember reliably, portably, and across vendors.
			</p>
		</section>

		<section class="paper">
			<div class="paper-card">
				<h2>Permanent Memory and Instant Recall</h2>
				<p class="paper-subtitle">The .fafm Standard for Multi-Profile AI Agent Memory</p>

				<div class="paper-meta">
					<div class="meta-item">
						<span class="meta-label">Author</span>
						<span class="meta-value">James Wolfe</span>
					</div>
					<div class="meta-item">
						<span class="meta-label">ORCID</span>
						<a href="https://orcid.org/0009-0007-0801-3841" class="meta-value link" target="_blank">0009-0007-0801-3841</a>
					</div>
					<div class="meta-item">
						<span class="meta-label">DOI</span>
						<a href="https://doi.org/10.5281/zenodo.20348942" class="meta-value link" target="_blank">10.5281/zenodo.20348942</a>
					</div>
					<div class="meta-item">
						<span class="meta-label">License</span>
						<span class="meta-value">CC BY 4.0</span>
					</div>
				</div>

				<a href="https://doi.org/10.5281/zenodo.20348942" class="paper-button" target="_blank">Read on Zenodo</a>
			</div>
		</section>

		<section>
			<h2>What's in the paper</h2>
			<p>Five things the paper formalizes — each one a thread the full read picks up:</p>
			<ul class="teaser-list">
				<li><strong>IANA-registered format</strong> — <code>application/vnd.fafm+yaml</code> is an official Internet media type (RT #1451393, May 2026).</li>
				<li><strong>Two profiles, one core parser</strong> — <em>voice</em> (Voice Memory Layer) and <em>knowledge</em> (typed cross-linked facts) share the same etch / recall / forget semantics. Anti-fork by design.</li>
				<li><strong>Permanent Memory + Instant Recall</strong> — a binary Recall Integrity Check (RIC) plus a graded Memory Quality Score (MQS). Deterministic. Falsifiable. Dashboarded live.</li>
				<li><strong>Lifecycle-aware family</strong> — memory accretes, then selectively promotes enduring facts into <code>.faf</code> context. Two formats. Two lifecycles. One ecosystem.</li>
				<li><strong>Safety baked in</strong> — voice-deletion-prohibited, namepoint (soul) isolation, untrusted-input handling, no secrets by design.</li>
			</ul>
		</section>

		<section>
			<h2>Reference implementations</h2>
			<p>Two profiles, two shipping reference impls plus a live backend:</p>
			<ul class="teaser-list">
				<li><strong><code>grok-faf-voice</code></strong> — voice profile · PyPI · LiveKit-enabled.</li>
				<li><strong><code>claude-fafm-sdk</code></strong> — knowledge profile · PyPI · Claude Code memory class.</li>
				<li><strong><code>memory.faf.one</code></strong> — live MCP backend for namepoint storage and cross-vendor reads.</li>
			</ul>
		</section>

		<section class="cite">
			<h2>Cite This Paper</h2>
			<div class="cite-box">
				<code>Wolfe, J. (2026). Permanent Memory and Instant Recall: The .fafm Standard for Multi-Profile AI Agent Memory. Zenodo. https://doi.org/10.5281/zenodo.20348942</code>
			</div>
		</section>

		<section class="cta">
			<h2>Learn More</h2>
			<div class="links">
				<a href="https://doi.org/10.5281/zenodo.20348942" class="link-button zenodo-button" target="_blank">Read Paper</a>
				<a href="/blog/zenodo-paper" class="link-button companion-button">Companion Paper (.faf)</a>
				<a href="https://github.com/Wolfe-Jam/faf/blob/main/MEMORY-FORMAT.md" class="link-button github-button" target="_blank">Specification</a>
			</div>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?url=https://faf.one/blog/permanent-memory&text=Permanent%20Memory.%20Instant%20Recall.%20The%20.fafm%20paper%20is%20on%20Zenodo." target="_blank" rel="noopener" class="share-btn">Post on X</a>
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
		color: #1a1a1a;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #00BC61;
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
		color: #1a1a1a;
		margin: 0.5rem 0;
		font-weight: 700;
	}

	.meta {
		font-size: 0.875rem;
		color: #1a1a1a;
		margin-top: 1rem;
	}

	.lead {
		font-size: 1.2rem;
		color: #1a1a1a;
	}

	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 2.5rem 0 1rem;
		color: #1a1a1a;
	}

	.paper-card {
		background: #FAFAF7;
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #00BC61;
		margin: 2rem 0;
	}

	.paper-card h2 {
		margin: 0 0 0.5rem;
		color: #1a1a1a;
	}

	.paper-subtitle {
		color: #1a1a1a;
		font-size: 1.1rem;
		margin: 0 0 1.5rem;
		font-weight: 500;
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
		color: #1a1a1a;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 700;
	}

	.meta-value {
		font-weight: 600;
		color: #1a1a1a;
	}

	.meta-value.link {
		color: #00BC61;
		text-decoration: none;
	}

	.paper-button {
		display: inline-block;
		background: #00BC61;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
	}

	.post-content a {
		color: #FF6B35;
	}

	.post-content a:hover {
		text-decoration: underline;
	}

	.post-content .link-button,
	.post-content .paper-button,
	.post-content .share-btn,
	.post-content .meta-value.link {
		color: white;
	}

	.post-content .meta-value.link {
		color: #00BC61;
	}

	.teaser-list {
		padding-left: 1.25rem;
	}

	.teaser-list li {
		margin: 0.75rem 0;
		color: #1a1a1a;
	}

	.teaser-list li strong {
		color: #1a1a1a;
	}

	code {
		background: #f5f5f5;
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
		font-size: 0.95em;
		color: #1a1a1a;
		font-family: 'Monaco', 'Courier New', monospace;
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
		color: #1a1a1a;
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
	.companion-button { background: #FF6B35; }
	.github-button { background: #1a1a1a; }

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
		color: #1a1a1a;
	}

	.post-footer a {
		color: #00BC61;
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

	@media (max-width: 768px) {
		h1 { font-size: 1.75rem; }
		.paper-meta { grid-template-columns: 1fr; }
		.links { flex-direction: column; }
		.link-button { width: 100%; text-align: center; }
	}
</style>
