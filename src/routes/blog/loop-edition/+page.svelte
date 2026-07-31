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
	const shareText = `🏁 Just shipped: faf-cli v6.14.0 — The Loop Edition

faf loop drives any repo to 🏆 100% or the honest human wall — sourcing every slot it can with provenance, asking only what only you know, never inventing.

Try it → bunx faf loop`;
	const shareUrl = 'https://faf.one/blog/loop-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Loop Edition - faf-cli v6.14.0 | FAF</title>
	<meta name="description" content="faf loop drives any repo to 100% or the honest human wall — sourcing every slot it can with provenance, asking only what only you know, never inventing." />
	<meta property="og:title" content="The Loop Edition - faf-cli v6.14.0" />
	<meta property="og:description" content="faf loop drives any repo to 100% or the honest human wall — sourcing every slot it can with provenance, never inventing." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/loop-edition-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/loop-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Loop Edition
		</div>

		<h1>The Loop Edition</h1>
		<p class="version-tag">faf-cli v6.14.0</p>
		<p class="subtitle">100% or the honest human wall.</p>
		<div class="meta">
			<time datetime="2026-06-22">June 22, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/loop-edition-hero.png" alt="The Loop Edition — faf-cli v6.14.0" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf loop</code> drives any repo to &#127942; 100% or the honest human wall &mdash; sourcing every slot it can with provenance, asking only what only you know, never inventing.
			</p>
		</section>

		<section>
			<h2>One Command, Three Honest Endings</h2>

			<p>Getting a project to a full <code>.faf</code> used to be a back-and-forth. <code>faf loop</code> closes it. It runs the whole arc &mdash; <code>init</code> &rarr; <code>auto</code> &rarr; <code>score</code> &mdash; sourcing everything detection can prove, then hands you what's left as plain questions.</p>

			<p>It stops at one of three honest terminals. It never invents a slot to fake a win.</p>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>Terminal</th><th>What it means</th></tr>
					</thead>
					<tbody>
						<tr><td><code>done</code></td><td>&#127942; 100%. Everything sourced, nothing left to ask.</td></tr>
						<tr><td><code>needs-human</code></td><td>Asks only the slots <em>only a human</em> can answer.</td></tr>
						<tr><td><code>stuck</code></td><td>Sourced everything sourceable &mdash; nothing left for a human to add.</td></tr>
					</tbody>
				</table>
			</div>

			<p>That's the whole promise: drive to 100% <em>or</em> reach the honest wall and tell you exactly which wall it is.</p>
		</section>

		<section>
			<h2>Provenance, Not Guesses</h2>

			<p>Every sourced 6W value now carries where it came from. <code>relentlessContext</code> seeds each slot as <code>&#123;value, source, confidence&#125;</code> &mdash; a <strong>confirm-or-edit suggestion</strong>, never an auto-confirmed guess.</p>

			<pre><code>{`{
  "who":  { "value": "Backend teams", "source": "README", "confidence": "high" },
  "where":{ "value": "Published on npm", "source": "package.json", "confidence": "high" }
}`}</code></pre>

			<p>You see the value <em>and</em> its receipt. Confirm it or correct it &mdash; faf never confirms it for you. The Table-of-8 seeds the same way, from the project goal and the detailed README form, each carrying its source and confidence.</p>
		</section>

		<section>
			<h2>The Interview-16 Lock</h2>

			<p>The boundary between what a human answers and what the repo sources is now typed at the Truth. <code>SIX_WS_INTERVIEW</code> (the 6Ws &mdash; human) and <code>STACK_INTERVIEW</code> (sourced from manifests) carry distinct slot-path types.</p>

			<p>Mix a sourced slot into the human interview and it's a <strong>compile error</strong>. The machine can no longer ask you a question it already knows the answer to &mdash; the line between &quot;only you know this&quot; and &quot;the repo already said this&quot; is enforced at build time, not by good intentions.</p>
		</section>

		<section>
			<h2>Relentless, Fixed</h2>

			<p>Dogfooding the loop on real repos caught three heuristics being too eager or too shy. All three fixed:</p>

			<ul>
				<li><strong>WHO</strong> now catches an optional qualifier &mdash; &quot;Built for backend teams&quot;.</li>
				<li><strong>WHERE</strong> accepts short platform names &mdash; &quot;Published on npm&quot;.</li>
				<li><strong>WHY</strong> no longer over-matches a bare &quot;goal&quot; mid-sentence.</li>
			</ul>

			<p>Smaller signals, caught. The relentless extractor reads what your repo actually says &mdash; and now reads it more honestly.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@6.14.0', 'install')}>
				<code class="copy-code">npm install -g faf-cli@6.14.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or run it with no install:</p>

			<div class="copy-box" onclick={() => copyText('bunx faf loop', 'loop')}>
				<code class="copy-code">bunx faf loop</code>
				<button class="copy-btn">{copiedId === 'loop' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf" class="cta-link">faf-cli</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">faf-cli</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v6.14.0</strong> &mdash; Released June 22, 2026</li>
				<li><strong>962/962</strong> &mdash; Tests passing, 0 fail</li>
				<li><strong>3</strong> &mdash; Honest terminals (done / needs-human / stuck)</li>
				<li><strong>&#123;value, source, confidence&#125;</strong> &mdash; Provenance on every sourced 6W</li>
				<li><strong>0</strong> &mdash; Slots ever invented to reach 100%</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; Source what you can. Ask only what you must. 🏎️</p>
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
		margin-bottom: 3rem;
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
		margin: -1rem -1rem 2rem -1rem;
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
		color: #1a1a1a;
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
		color: #00ff88;
		padding: 0;
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
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
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
