<script lang="ts">
	/**
	 * ── 150K MILESTONE POST ─────────────────────────────────────────────
	 * Answers /blog/countdown-150k (posted 2026-09-24, "150k on September 25").
	 * Crossing figures in the prose are FROZEN (the day it crossed):
	 *   150,149 = npm 136,030 · PyPI 12,187 (without_mirrors) · crates 1,932
	 *   meter commit 6337cf2, 2026-09-25.
	 * Tables below are FED from $lib/data/packages.ts (daily auto-refresh).
	 * ───────────────────────────────────────────────────────────────────
	 */
	import {
		npmPackages, pypiPackages, cratesPackages,
		npmTotal, pypiTotal, cratesTotal, grandTotal
	} from '$lib/data/packages';
	import { buildShareIntent } from '$lib/shareIntent.js';
	const fmt = (n: number) => n.toLocaleString('en-US');

	const shareText = `150,000 downloads. Predicted the day before, crossed on the day.

Forecast ~150,089. Counted 150,149.
Hard floor: npm + PyPI (no mirrors) + crates.io.

Paste either into your terminal or AI:
bunx faf-cli auto`;
	const shareUrl = 'https://faf.one/blog/hundred-fifty-thousand';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>150,000 Downloads | FAF</title>
	<meta name="description" content="The FAF ecosystem crossed 150,000 downloads on September 25, the day we predicted the day before. Forecast ~150,089, counted 150,149, on a hard-floor meter across npm, PyPI and crates.io." />
	<meta property="og:title" content="150,000 Downloads — FAF Ecosystem" />
	<meta property="og:description" content="Predicted the day before. Crossed on the day. Forecast ~150,089, counted 150,149." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/hundred-fifty-thousand-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/hundred-fifty-thousand-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 150,000 Downloads
		</div>

		<h1>150,000 Downloads</h1>
		<p class="subtitle">Predicted the day before. Crossed on the day.</p>
		<div class="meta">
			<time datetime="2026-09-25">September 25, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog/hundred-fifty-thousand-hero.png" alt="150,000 Downloads. Predicted the day before, crossed on the day: predicted about 150,089, counted 150,149." />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Yesterday we posted a dated prediction:
				<a href="/blog/countdown-150k">150,000 downloads on September 25</a>. Today the FAF
				ecosystem crossed it, at <strong>150,149</strong> across npm, PyPI and crates.io, 60 above
				the forecast. Thank you to everyone who installed FAF, and everyone who shared it.
			</p>
		</section>

		<section class="celebration">
			<img class="trophy" src="/faf-trophy.png" alt="FAF trophy" />
			<div class="big-number">150,149</div>
			<div class="big-label">
				downloads on September 25 &mdash; hard floor ·
				<a href="/downloads">faf.one/downloads</a>
			</div>
		</section>

		<section>
			<h2>The Prediction, Checked</h2>

			<pre class="heartbeat"><code>{`predicted  2026-09-24   150,000 on 2026-09-25
forecast                ~150,089
counted    2026-09-25   150,149   (+60)

npm 136,030 · PyPI 12,187 · crates 1,932`}</code></pre>

			<p>
				The countdown gave the date, the arithmetic and the number it would be checked against. All
				three held. The count is the same hard floor as before: npm and crates.io as reported, PyPI as
				<code>without_mirrors</code> only.
			</p>
		</section>

		<section>
			<h2>One Thing We Got Wrong</h2>

			<p>
				The countdown said the meter refreshes at 09:00 UTC. That is when the job is scheduled. In
				practice GitHub has started it between about 13:45 and 15:30 UTC every day this week.
			</p>

			<p>
				Today's run started at 14:15 UTC and read <strong>149,461</strong>: short of 150,000. The
				reason was npm, not the downloads. npm publishes each day's counts late, and at 14:15 it had
				not yet published September 24. PyPI and crates.io had updated; npm still showed the day
				before.
			</p>

			<pre class="heartbeat"><code>{`14:15 UTC  scheduled refresh   149,461   npm day not yet published
later      npm publishes Sep 24
23:27 UTC  manual refresh      150,149   commit 6337cf2`}</code></pre>

			<p>
				Once npm caught up, we re-ran the refresh by hand and deployed it. The banner has read 150.1k
				since. The number itself did not move; only the time it became visible did.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">{fmt(npmTotal)}</div>
					<div class="stat-label">npm</div>
					<div class="stat-detail">{npmPackages.length} packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">{fmt(pypiTotal)}</div>
					<div class="stat-label">PyPI</div>
					<div class="stat-detail">{pypiPackages.length} packages</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">{fmt(cratesTotal)}</div>
					<div class="stat-label">crates.io</div>
					<div class="stat-detail">{cratesPackages.length} crates</div>
				</div>
			</div>

			<p class="fed-note">
				These tiles and the tables below are live: {fmt(grandTotal)} today, from the same
				daily-refreshed source that feeds the site banner. The figures in the text above are frozen
				at the crossing. Truth page: <a href="/downloads">faf.one/downloads</a>.
			</p>
		</section>

		<section>
			<h2>From 133k</h2>

			<p>133,000 landed on <a href="/blog/hundred-thirty-three-thousand">August 31</a>.</p>

			<pre class="heartbeat"><code>{`60k  → 100k    +40,000 in 51 days    784/day
100k → 133k    +33,000 in 72 days    458/day
133k → 150k    +17,149 in 25 days    686/day`}</code></pre>

			<p>No launch, no campaign and no marketing spend behind any of it.</p>
		</section>

		<section>
			<h2>The Packages</h2>

			<h3 class="registry-header">npm</h3>
			<div class="package-table">
				<div class="pkg-row pkg-header">
					<span>Package</span>
					<span>Downloads</span>
				</div>
				{#each [...npmPackages].sort((a, b) => b.downloads - a.downloads) as p}
					<div class="pkg-row">
						<span><strong>{p.name}</strong></span>
						<span>{fmt(p.downloads)}</span>
					</div>
				{/each}
			</div>

			<h3 class="registry-header">PyPI</h3>
			<div class="package-table">
				{#each [...pypiPackages].sort((a, b) => b.downloads - a.downloads) as p}
					<div class="pkg-row">
						<span><strong>{p.name}</strong></span>
						<span>{fmt(p.downloads)}</span>
					</div>
				{/each}
			</div>

			<h3 class="registry-header">crates.io</h3>
			<div class="package-table">
				{#each [...cratesPackages].sort((a, b) => b.downloads - a.downloads) as p}
					<div class="pkg-row">
						<span><strong>{p.name}</strong></span>
						<span>{fmt(p.downloads)}</span>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h2>Try It</h2>
			<p>Paste either into your terminal or AI:</p>
			<pre><code>{`bunx faf-cli auto         try it
npm i -g faf-cli          install it`}</code></pre>
			<div class="star-links">
				<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">&#9733; bookmark repo</a>
				<span class="star-note">github.com/Wolfe-Jam/faf-cli</span>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; 150k. Predicted, then counted. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-locked-dark) !important;
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

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #e5e5e5;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FFD700;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #999;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0.5rem 0;
		color: #fff;
		line-height: 1.3;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #aaa;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #999;
	}

	.separator {
		color: #555;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.milestone {
		background: #FFD700;
		color: #000;
		font-weight: 600;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.celebration {
		text-align: center;
		padding: 3rem 0;
		margin: 2rem 0;
	}

	.trophy {
		width: 64px;
		height: 64px;
		display: block;
		margin: 0 auto 1.25rem auto;
	}

	.big-number {
		font-size: 5rem;
		font-weight: 900;
		color: #FFD700;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		letter-spacing: -0.02em;
		line-height: 1;
	}

	.big-label {
		font-size: 1.1rem;
		color: #888;
		margin-top: 0.75rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #1a1a1a;
		border-radius: 8px;
		border-left: 4px solid #FFD700;
		color: #e5e5e5;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #fff;
		border-bottom: 1px solid #333;
		padding-bottom: 0.5rem;
	}

	h3.registry-header {
		font-size: 1rem;
		color: #FFD700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin: 2rem 0 0.75rem 0;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.stat-card {
		background: #1a1a1a;
		color: white;
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
		border: 1px solid #333;
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 900;
		color: #FFD700;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.stat-label {
		font-size: 0.9rem;
		color: #ccc;
		margin-top: 0.25rem;
	}

	.stat-detail {
		font-size: 0.8rem;
		color: #888;
		margin-top: 0.25rem;
	}

	.package-table {
		margin: 0.75rem 0 1.5rem 0;
		border: 1px solid #333;
		border-radius: 8px;
		overflow: hidden;
	}

	.pkg-row {
		display: grid;
		grid-template-columns: 1fr 120px 1fr;
		gap: 0 1rem;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #333;
		font-size: 0.95rem;
		color: #ccc;
	}

	.pkg-row:last-child {
		border-bottom: none;
	}

	.pkg-header {
		background: #1a1a1a;
		color: #999;
		font-weight: 600;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.pkg-row span:nth-child(2) {
		text-align: right;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
		color: #FFD700;
	}

	.star-links {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		margin: 0.5rem 0;
		flex-wrap: wrap;
	}

	.star-links a {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.95rem;
		font-weight: 600;
		color: #FFD700;
		text-decoration: none;
	}

	.star-links a:hover {
		text-decoration: underline;
	}

	.star-note {
		font-size: 0.9rem;
		color: #888;
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
		border: 1px solid #333;
		transition: all 0.2s;
	}

	.share-btn:hover {
		border-color: #FFD700;
		color: #fff;
		text-decoration: none;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #333;
		font-size: 0.95rem;
		color: #999;
		text-align: center;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.big-number {
			font-size: 3.5rem;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.pkg-row {
			grid-template-columns: 1fr 80px 1fr;
			font-size: 0.85rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}

	.fed-note {
		font-style: italic;
		font-size: 0.95rem;
		margin-top: 1rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
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

	pre.heartbeat {
		font-size: 1.05rem;
		line-height: 1.9;
		padding: 1.75rem 2rem;
		border: 1px solid #333;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		pre.heartbeat {
			font-size: 0.8rem;
			padding: 1.25rem 1rem;
		}
	}
</style>
