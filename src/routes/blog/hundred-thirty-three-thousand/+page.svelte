<script lang="ts">
	/**
	 * ── 133K MILESTONE POST ─────────────────────────────────────────────
	 * The tables + big number below are FED from $lib/data/packages.ts
	 * (daily auto-refresh) — they can never go stale.
	 *
	 * Prepped 2026-08-31 at 132,322 grand total (npm 119,570 · PyPI 11,237
	 * without_mirrors · crates.io 1,515). Combined weekly ~4,900 → 133k
	 * lands within a day. Verify the big number reads 133k+ before ship.
	 * 100k crossed 2026-06-20 → 133k is +32k in 72 days.
	 * ───────────────────────────────────────────────────────────────────
	 */
	import {
		npmPackages, pypiPackages, cratesPackages,
		npmTotal, pypiTotal, cratesTotal, grandTotal
	} from '$lib/data/packages';
	const fmt = (n: number) => n.toLocaleString('en-US');
</script>

<svelte:head>
	<title>133,000 Downloads | FAF</title>
	<meta name="description" content="The FAF ecosystem crosses 133,000 downloads across npm, PyPI, and crates.io. An IANA-registered context format, zero marketing budget — the format keeps spreading because the format keeps working." />
	<meta property="og:title" content="133,000 Downloads — FAF Ecosystem" />
	<meta property="og:description" content="+32,000 in 72 days. Every registry. Zero marketing budget. The downloads followed the work." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/hundred-thirty-three-thousand-hero.jpeg" />
	<meta name="twitter:image" content="https://faf.one/blog/hundred-thirty-three-thousand-hero.jpeg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 133,000 Downloads
		</div>

		<h1>133,000 Downloads</h1>
		<p class="subtitle">+32,000 in 72 days. Every registry. Zero marketing budget.</p>
		<div class="meta">
			<time datetime="2026-08-31">August 31, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img src="/blog/hundred-thirty-three-thousand-hero.jpeg" alt=".FAF adoption — cumulative installs (thousands) from ~0.25k in Nov 2025 to 133k on Aug 31, 2026." />
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF ecosystem just crossed <strong>133,000 downloads</strong>
				across npm, PyPI, and crates.io. From 100k to 133k in 72 days &mdash; +32,000. Same
				packages. Same three registries. Same zero marketing budget. The downloads followed
				the work.
			</p>
		</section>

		<section class="celebration">
			<img class="trophy" src="/faf-trophy.png" alt="FAF trophy" />
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
			<h2>From 100k to 133k</h2>
			<p>100k crossed June 20. What shipped in the 72 days since &mdash; none of it marketing:</p>
			<ul>
				<li><strong>The third IANA media type</strong> &mdash; <code>application/vnd.fafa+yaml</code> (Agent Card). Context, Memory, Agent &mdash; all three registered alongside PDF, JSON, XML.</li>
				<li><strong>The Memory format arc</strong> &mdash; <code>.fafm</code> shipped its full lifecycle: mergeable, sendable, provable, verifiable, forgettable, compactable. Portable agent memory in production.</li>
				<li><strong>Founding AAIF Ambassador</strong> &mdash; accepted into the Agentic AI Foundation (Linux Foundation), July.</li>
				<li><strong>Six language knowledge packs</strong> &mdash; Go, C#, JVM, Ruby, Swift, Dart/Flutter added to faf-cli. Same <code>project.faf</code>, more stacks it understands.</li>
				<li><strong>The Compose Edition</strong> &mdash; one <code>project.faf</code> generates the six assistant instruction files (CLAUDE.md, AGENTS.md, .cursorrules, and the rest), managed blocks, drift-gated.</li>
				<li><strong>The Mk4 Truth Edition</strong> &mdash; rust-faf-mcp: the score the MCP server showed and the real Mk4 kernel score used to be two numbers. Now they're one.</li>
				<li><strong>agents-md-facts</strong> &mdash; a public generator that authors an AGENTS.md which can't drift, because it's built from a typed source.</li>
			</ul>
		</section>

		<section>
			<h2>What 133,000 Means</h2>
			<p>
				Six figures and climbing for an IANA-registered context format with no ads, no growth
				team, and no tricks &mdash; just <code>project.faf</code> doing its job across five MCP
				servers, a CLI, the Python and Rust SDKs, and every registry that would have us. Thank
				you for every single install. 🧡
			</p>
		</section>

		<section>
			<h2>One Ask</h2>
			<p>
				133,000 downloads, a few dozen stars. &#11088; Bookmarks it for you, helps other devs
				find it too.
			</p>
			<div class="star-links">
				<a href="https://github.com/Wolfe-Jam/faf" target="_blank" rel="noopener">&#9733; Wolfe-Jam/faf</a>
				<span class="star-note">the spec</span>
			</div>
			<div class="star-links">
				<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">&#9733; Wolfe-Jam/faf-cli</a>
				<span class="star-note">the CLI</span>
			</div>
			<div class="star-links">
				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener">&#9733; Wolfe-Jam/claude-faf-mcp</a>
				<span class="star-note">the Anthropic-merged MCP server</span>
			</div>
		</section>

		<section class="share-section">
			<a
				href="https://twitter.com/intent/tweet?text=133%2C000%20downloads%20across%20npm%2C%20PyPI%20and%20crates.io.%20An%20IANA-registered%20context%20format%2C%20zero%20marketing%20budget.%20%2B32k%20in%2072%20days%20%E2%80%94%20the%20downloads%20followed%20the%20work.&url=https://faf.one/blog/hundred-thirty-three-thousand"
				target="_blank"
				rel="noopener"
				class="share-btn"
			>Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; 133k. FAF don&apos;t lie &mdash; and the count is fed, not typed. 🏎️</p>
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
</style>
