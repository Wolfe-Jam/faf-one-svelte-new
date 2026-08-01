<script lang="ts">
	/**
	 * ── 100K MILESTONE POST — STAGED DRAFT ──────────────────────────────
	 * Prepped 2026-06-12 at 91.5k+. The tables below are FED from
	 * $lib/data/packages.ts (daily auto-refresh) — they can never go stale.
	 *
	 * LANDING RITUAL (when grandTotal ≥ 100,000):
	 *  1. This page already shows live numbers — verify the big number reads 100k+.
	 *  2. Fill the TWO frozen slots below (search "LAND:"):
	 *     - the <time> datetime + display date (the day it crossed)
	 *     - days-from-60k in the subtitle + journey line (60k landed 2026-04-30)
	 *  3. git mv src/routes/blog/drafts/hundred-thousand src/routes/blog/hundred-thousand
	 *  4. Generate/replace hero (flash-card style — see Lane-2 prompt in the
	 *     landing notes at PLANET-FAF or regenerate placeholder), at
	 *     static/blog/hundred-thousand-hero.png (placeholder already staged).
	 *  5. Add index card (top of posts[]) — snippet:
	 *     { slug: 'blog/hundred-thousand', title: '100,000 Downloads',
	 *       date: '<Month DD, YYYY>', timestamp: '<YYYY-MM-DD>',
	 *       excerpt: 'The FAF ecosystem crosses 100,000 downloads across npm, PyPI and crates.io. Six figures, zero marketing budget — the format keeps spreading because the format keeps working.',
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
	<title>100,000 Downloads | FAF</title>
	<meta name="description" content="The FAF ecosystem crosses 100,000 downloads across npm, PyPI, and crates.io. Six figures, zero marketing budget — the format keeps spreading because the format keeps working." />
	<meta property="og:title" content="100,000 Downloads — FAF Ecosystem" />
	<meta property="og:description" content="Six figures. Every registry. Zero marketing budget. The format keeps spreading because the format keeps working." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/hundred-thousand-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/hundred-thousand-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 100,000 Downloads
		</div>

		<h1>100,000 Downloads</h1>
		<p class="subtitle">Six figures. Every registry. Zero marketing budget.</p>
		<div class="meta">
			<!-- LAND: set the real crossing date -->
			<time datetime="2026-06-20">June 20, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog/hundred-thousand-hero.png" alt="FAF 100,000 downloads — the dotFaf smiley above 100,000 in monospace, flash-card style." />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF ecosystem just crossed <strong>100,000 downloads</strong>
				across npm, PyPI, and crates.io.
				<!-- LAND: X days after 60k (60k = 2026-04-30) -->
				From 60k to six figures in 51 days. Same packages. Same three registries. Same zero
				marketing budget. The format keeps spreading because the format keeps working.
			</p>
		</section>

		<section class="celebration">
			<div class="big-number">{fmt(grandTotal)}</div>
			<div class="big-label">
				downloads hard floor &mdash; live count, fed daily ·
				<a href="/downloads">faf.one/downloads</a>
			</div>
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
				These numbers are live hard floor (npm + crates + PyPI
				<code>without_mirrors</code>) &mdash; the same daily-refreshed source that feeds the site
				banner. Truth page:
				<a href="/downloads">faf.one/downloads</a>.
			</p>
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
			<h2>From 60k to 100k</h2>
			<p>
				60k landed April 30. Since then the stretch that mattered wasn't marketing — it was
				engineering: a coordinated security disclosure handled with honest credit, the Trust /
				Grounded / Composed / Sourced editions, a benchmark where your own repo grades the
				answers, and every engine consolidated to a single source. The downloads followed the
				receipts.
				<!-- LAND: tighten/expand this paragraph with anything notable between prep and landing -->
			</p>
		</section>

		<section>
			<h2>What 100,000 Means</h2>
			<p>
				A six-figure count for an IANA-registered context format with no ads, no growth team,
				and no tricks &mdash; just <code>project.faf</code> doing its job in five MCP servers,
				a CLI, and every registry that would have us. Thank you for every single install. 🧡
			</p>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; 100k. FAF don&apos;t lie &mdash; and the count is fed, not typed. 🏎️</p>
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

	.timeline {
		margin: 2rem 0;
		padding-left: 2rem;
		border-left: 2px solid #333;
	}

	.timeline-item {
		position: relative;
		padding: 0 0 1.5rem 1.5rem;
	}

	.timeline-item:last-child {
		padding-bottom: 0;
	}

	.timeline-marker {
		position: absolute;
		left: -2rem;
		top: 0.35rem;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #555;
		transform: translateX(-5px);
	}

	.timeline-item.active .timeline-marker {
		background: #FFD700;
		box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
	}

	.timeline-item.active .timeline-content strong {
		color: #FFD700;
	}

	.timeline-content {
		color: #aaa;
	}

	.timeline-content strong {
		color: #ccc;
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
</style>


	/* draft-extra: fed-note */
