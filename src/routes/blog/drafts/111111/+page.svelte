<script lang="ts">
	/**
	 * ── 111,111 MILESTONE POST — STAGED DRAFT ──────────────────────────────
	 * Prepped 2026-06-24 at 103.5k+. The tables below are FED from
	 * $lib/data/packages.ts (daily auto-refresh) — they can never go stale.
	 *
	 * LANDING RITUAL (when grandTotal ≥ 111,111):
	 *  1. This page already shows live numbers — verify the big number reads 111,111+.
	 *  2. Fill the TWO frozen slots below (search "LAND:"):
	 *     - the <time> datetime + display date (the day it crossed)
	 *     - days-from-100k in the subtitle + journey line (100k landed 2026-06-20)
	 *  3. git mv src/routes/blog/drafts/111111 src/routes/blog/111111
	 *  4. Generate/replace hero (flash-card style), at
	 *     static/blog/111111-hero.png (placeholder staged separately).
	 *  5. Add index card (top of posts[]) — snippet:
	 *     { slug: 'blog/111111', title: '111,111 Downloads',
	 *       date: '<Month DD, YYYY>', timestamp: '<YYYY-MM-DD>',
	 *       excerpt: 'The FAF ecosystem crosses 111,111 downloads across npm, PyPI and crates.io. Lucky numbers. Real receipts. The format keeps spreading because the format keeps working.',
	 *       emoji: '🏆', category: 'Milestone' }
	 *  6. Just Shipped popup: Milestone card (optional, gold). 7. Build, push, verify 200.
	 * ─────────────────────────────────────────────────────────────────────
	 */
	import {
		npmPackages, pypiPackages, cratesPackages,
		npmTotal, pypiTotal, cratesTotal, grandTotal
	} from '$lib/data/packages';
	const fmt = (n: number) => n.toLocaleString('en-US');
</script>

<svelte:head>
	<title>111,111 Downloads | FAF</title>
	<meta name="description" content="The FAF ecosystem crosses 111,111 downloads across npm, PyPI, and crates.io. Lucky numbers. Real receipts. The format keeps spreading because the format keeps working." />
	<meta property="og:title" content="111,111 Downloads — FAF Ecosystem" />
	<meta property="og:description" content="111,111 downloads. Lucky numbers. Real receipts. Zero marketing budget. The format keeps spreading because the format keeps working." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/111111-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/111111-hero.png" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 111,111 Downloads
		</div>

		<h1>111,111 Downloads</h1>
		<p class="subtitle">Lucky numbers. Real receipts. Zero marketing budget.</p>
		<div class="meta">
			<!-- LAND: set the real crossing date -->
			<time datetime="YYYY-MM-DD">Month DD, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog/111111-hero.png" alt="FAF 111,111 downloads — flash-card style milestone." />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF ecosystem just crossed <strong>111,111 downloads</strong>
				across npm, PyPI, and crates.io.
				<!-- LAND: X days after 100k (100k = 2026-06-20) -->
				From 100k to 111,111 in X days. Same packages. Same three registries. Same zero
				marketing budget. The format keeps spreading because the format keeps working.
			</p>
		</section>

		<section class="celebration">
			<div class="big-number">{fmt(grandTotal)}</div>
			<div class="big-label">downloads across the entire ecosystem &mdash; live count, fed daily</div>
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

			<p class="fed-note">These numbers are live &mdash; the same daily-refreshed source that feeds the site banner. No hand-typed stats on this page.</p>
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
			<h2>From 100k to 111,111</h2>
			<p>
				100k landed June 20. The eleven thousand that followed weren't a campaign &mdash;
				they were the compound return on format quality. Every new MCP server, every SDK
				update, every registry that picked up .faf reinforced the same simple bet: good
				context tooling spreads on its own.
				<!-- LAND: tighten/expand this paragraph with anything notable between prep and landing -->
			</p>
		</section>

		<section>
			<h2>What 111,111 Means</h2>
			<p>
				Six ones. Lucky numbers &mdash; but the count is fed, not wished for.
				No ads, no growth team, no tricks &mdash; just <code>project.faf</code> doing
				its job across five MCP servers, a CLI, and every registry that would have us.
				Thank you for every single install. 🧡
			</p>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; 111,111. FAF don&apos;t lie &mdash; and the count is fed, not typed. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-locked-dark);
		color: #e5e5e5;
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
		background: var(--faf-locked-dark-elevated);
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
		background: var(--faf-locked-dark-elevated);
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
		background: var(--faf-locked-dark-elevated);
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
</style>
