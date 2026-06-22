<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: claude-faf-mcp v5.12.0 — The Proof Edition

faf_bench proves FAF's grounding lift in-session — a cold-vs-.faf benchmark with a mechanical ✪ receipt.

Proof you can run, not a pitch.

npm install -g claude-faf-mcp@5.12.0`;
	const shareUrl = 'https://faf.one/blog/proof-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Proof Edition - claude-faf-mcp v5.12.0 | FAF</title>
	<meta name="description" content="faf_bench proves FAF's grounding lift in-session — a cold-vs-.faf benchmark with a mechanical ✪ receipt — and faf_go now bootstraps from a cold repo (init → auto → 6Ws)." />
	<meta property="og:title" content="The Proof Edition - claude-faf-mcp v5.12.0" />
	<meta property="og:description" content="faf_bench proves FAF's grounding lift in-session — a cold-vs-.faf benchmark with a mechanical ✪ receipt — and faf_go now bootstraps from a cold repo." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/proof-edition-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/proof-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Proof Edition
		</div>

		<h1>The Proof Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.12.0</p>
		<p class="subtitle">Proof you can run, not a pitch.</p>
		<div class="meta">
			<time datetime="2026-06-22">June 22, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/proof-edition-hero.png" alt="The Proof Edition — claude-faf-mcp v5.12.0, faf_bench grounding benchmark with a mechanical ✪ receipt" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf_bench</code> proves FAF's grounding lift in-session &mdash; a cold-vs-<code>.faf</code> benchmark with a mechanical <code>&#10026;</code> receipt &mdash; and <code>faf_go</code> now bootstraps from a cold repo (init &rarr; auto &rarr; 6Ws).
			</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>faf_bench &mdash; proof, not pitch</h3>

			<p>Everyone claims context helps the model. <code>faf_bench</code> makes you <em>show it</em>, in the same session, on your own repo. It's the new lead tool of the Core tier.</p>

			<p>Here's the loop. It derives a question set from your <code>.faf</code>, asks the model those questions <strong>cold</strong> &mdash; no context &mdash; then asks the same questions <strong>with the <code>.faf</code> loaded</strong>. The grading is mechanical: there's no LLM judge, because the <code>.faf</code> is the answer key. The output is a <code>&#10026;</code> receipt showing the grounding delta between the two passes.</p>

			<ul>
				<li><strong>Cold pass</strong> &mdash; the model answers blind, with no project context.</li>
				<li><strong>Grounded pass</strong> &mdash; the same questions, with the <code>.faf</code> in hand.</li>
				<li><strong>Mechanical grade</strong> &mdash; no judge model, no vibes. The <code>.faf</code> is the answer key.</li>
				<li><strong><code>&#10026;</code> receipt</strong> &mdash; the grounding delta, written down. Proof you can run.</li>
			</ul>

			<h3>/faf-bench &mdash; the honest two-pass prompt</h3>

			<p>Paired with the tool is the <code>/faf-bench</code> session protocol: cold-blind first, never inventing token counts, and never presenting the cold pass alone as a verdict. The honesty is the point &mdash; a benchmark that flatters the result isn't proof.</p>

			<h3>faf_go now bootstraps a cold repo</h3>

			<p>If there's no <code>project.faf</code> yet, <code>faf_go</code> no longer asks you to go set one up first. It runs <code>faf_init</code> &rarr; <code>faf_auto</code> to lay the foundation, <em>then</em> walks the 6Ws. One call takes a bare repo to a real score.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g claude-faf-mcp@5.12.0', 'install')}>
				<code class="copy-code">npm install -g claude-faf-mcp@5.12.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Then, in a Claude session on any repo, run <code>faf_bench</code> &mdash; or the <code>/faf-bench</code> prompt for the full honest two-pass protocol. The <code>&#10026;</code> receipt comes back in-session. Zero-Config &mdash; one-click <code>.mcpb</code>, no terminal, no JSON config.</p>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v5.12.0</strong> &mdash; Released June 22, 2026</li>
				<li><strong>36 tools</strong> &mdash; 13 Core (advertised by default), the rest Extended via <code>FAF_TOOLS=all</code></li>
				<li><strong>569/569</strong> &mdash; Tests passing, 0 fail</li>
				<li><strong>faf_bench</strong> &mdash; the new lead of the Core tier</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; Proof, not pitch. &#127950;&#65039;</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
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
		border-bottom: 3px solid #000000;
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
		background: #fff5f0;
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
		color: #1a1a1a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.api-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.api-table table {
		width: 100%;
		border-collapse: collapse;
	}

	.api-table th, .api-table td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	.api-table th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.api-table td code {
		font-size: 0.85em;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
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

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00ff88;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.25);
		color: #fff;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 255, 255, 0.2); border-color: #fff; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
