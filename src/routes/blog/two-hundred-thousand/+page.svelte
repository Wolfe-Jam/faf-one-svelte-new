<script lang="ts">
	/**
	 * 200K MILESTONE POST
	 * Crossing figures in the prose are FROZEN (the day it crossed):
	 *   200,070 = npm 181,923 · PyPI 14,589 (without_mirrors) · crates.io 3,558
	 *   36 packages, /downloads live run + data refresh 2ad49bf, 2026-11-03.
	 * The tables are FED from #lib/data/packages.js (daily auto-refresh).
	 * The share text is the X post for Nov 5 (Bonfire Night).
	 */
	import {
		npmPackages,
		pypiPackages,
		cratesPackages,
		npmTotal,
		pypiTotal,
		cratesTotal,
		grandTotal
	} from '#lib/data/packages.js';
	import { buildShareIntent } from '#lib/shareIntent.js';
	const fmt = (n: number) => n.toLocaleString('en-US');

	const shareText = `Fireworks came early: FAF crossed 200,000 downloads on 3 November.

36 packages across npm, PyPI and crates.io.

npm 181,923 · PyPI 14,589 · crates.io 3,558

Counted straight: PyPI without mirrors, no bots.

Thank you to everyone installing it, filing issues and building with it.

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/two-hundred-thousand';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>200,000 Downloads | FAF</title>
	<meta
		name="description"
		content="FAF crossed 200,000 downloads on November 3, 2026: 200,070 across 36 packages on npm, PyPI and crates.io, counted with PyPI without mirrors."
	/>
	<meta property="og:title" content="200,000 Downloads | FAF" />
	<meta
		property="og:description"
		content="200,070 across 36 packages on npm, PyPI and crates.io. Counted straight."
	/>
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/two-hundred-thousand-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/two-hundred-thousand-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 200,000 Downloads
		</div>
		<h1>200,000 Downloads</h1>
		<p class="subtitle">36 packages. 3 registries. Counted straight.</p>
		<div class="meta">
			<time datetime="2026-11-03">November 3, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="hero-image">
			<img
				src="/blog/two-hundred-thousand-hero.png"
				alt="200,000 Downloads: 200,070 on November 3, 2026. npm 181,923, PyPI 14,589, crates.io 3,558."
			/>
		</section>

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> On November 3 the FAF packages crossed 200,000 downloads:
				<strong>200,070</strong> across 36 packages on npm, PyPI and crates.io. Thank you to
				everyone installing FAF, filing issues and building with it.
			</p>
		</section>

		<section class="celebration">
			<div class="big-number">200,070</div>
			<div class="big-label">
				downloads on November 3 · <a href="/downloads">faf.one/downloads</a>
			</div>
		</section>

		<section>
			<h2>Fireworks came early</h2>
			<div class="video-frame">
				<video
					src="/blog/two-hundred-thousand-night.mp4"
					poster="/blog/two-hundred-thousand-night-poster.jpg"
					controls
					muted
					playsinline
					preload="metadata"
					aria-label="12-second film: fireworks over a night sky while a counter rolls to 200,070 downloads, with npm 181,923, PyPI 14,589 and crates.io 3,558"
				></video>
			</div>
			<p class="caption">Two days early for Bonfire Night, November 5.</p>
		</section>

		<section>
			<h2>How we found out</h2>
			<p>
				It was an accident. I asked Claude for our downloads, meaning the new TAF Receipt Printer
				(<code>faf-taf-git</code>, 1,912 at the time). Claude counted everything instead, every
				package on all three registries, and came back with <strong>200,070</strong>.
			</p>
			<p>
				At the heart of it is <a href="https://github.com/Wolfe-Jam/faf-cli">faf-cli</a>, the
				free, MIT-licensed context engine. The FAF MCP servers for Claude and Grok run on it.
			</p>
		</section>

		<section>
			<h2>Counted straight</h2>
			<pre class="heartbeat"><code
					>{`counted   2026-11-03   200,070   36 packages
npm        181,923   20 packages
PyPI        14,589    6 packages   without mirrors
crates.io    3,558   10 crates`}</code
				></pre>
			<p>
				npm and crates.io counts are as each registry reports them. PyPI is
				<code>without_mirrors</code> only, so mirror and bot traffic is left out. PyPI's public
				stats also cover only about the last 180 days, so our older Python packages are undercounted.
			</p>
		</section>

		<section>
			<h2>From 150k</h2>
			<p>
				150,000 landed on <a href="/blog/hundred-fifty-thousand">September 25</a>, at 150,149.
			</p>
			<pre class="heartbeat"><code
					>{`150k → 200k   +49,921 in 39 days   1,280/day
like for like +40,602 in 39 days   1,041/day`}</code
				></pre>
			<p>
				The second line is the fair one. On October 4 we added nine packages that were already
				shipping to the count (among them <code>faf-taf-git</code>, <code>faf-kernel</code> and
				<code>mcp-context-card</code>), and their downloads to that date came to 9,319. That step
				is labelled, not smoothed: take it out and the pace is 1,041 a day.
			</p>
		</section>

		<section>
			<h2>The numbers</h2>
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
				These tiles and the tables below are live: {fmt(grandTotal)} today, from the same daily refresh
				that feeds the site banner. The figures above are frozen at the crossing. Every package:
				<a href="/downloads">faf.one/downloads</a>.
			</p>

			<h3 class="registry-header">npm</h3>
			<div class="package-table">
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
			<h2>Try it</h2>
			<p>Paste either into your terminal or AI:</p>
			<div class="terminal-block">
				<code
					>{`bunx faf-cli auto         try it
npm i -g faf-cli          install it`}</code
				>
			</div>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions: tell us what you want to see next.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ 200k, counted straight. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: var(--faf-black);
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 1.5rem;
	}
	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-header h1 {
		font-size: 2.6rem;
		margin: 0 0 0.5rem;
		color: var(--faf-black);
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 2.5rem;
	}
	.separator {
		color: var(--faf-dark);
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
	}
	.category.milestone {
		background: #ffd700; /* literal-ok: Milestone category pill */
		color: #000; /* literal-ok: Milestone pill text, paired with its gold bg */
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

	/* The site-wide section rule adds 96px top and bottom; posts need none. */
	.post-content section {
		padding: 0;
		margin-bottom: 2.5rem;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.post-content a {
		color: var(--faf-cyan-text);
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-left: 4px solid var(--faf-orange);
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.post-content section.celebration {
		text-align: center;
		padding: 1.5rem 0 0.5rem;
	}
	.big-number {
		font-size: 4.5rem;
		font-weight: 800;
		line-height: 1;
		color: var(--faf-black);
		letter-spacing: -0.03em;
	}
	.big-label {
		margin-top: 0.6rem;
		font-size: 1rem;
		font-weight: 600;
		color: var(--faf-dark);
	}

	.video-frame {
		background: #0a0a0a; /* literal-ok: media frame behind the film */
		border-radius: 12px;
		overflow: hidden;
		max-width: 540px;
		margin: 0 auto;
	}
	.video-frame video {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
	}
	.caption {
		text-align: center;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--faf-dark);
		margin-top: 0.75rem;
	}

	.post-content code {
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.heartbeat,
	.terminal-block {
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border-radius: 8px;
		padding: 1rem 1.25rem;
		overflow-x: auto;
		margin: 0 0 1rem;
	}
	.heartbeat code,
	.terminal-block code {
		display: block;
		white-space: pre;
		background: none;
		color: #00ff88;
		padding: 0;
		font-size: 0.92rem;
		line-height: 1.7;
		border: none; /* the site-wide code pill adds a hairline border */
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 0 0 1rem;
	}
	.stat-card {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 1.1rem;
		text-align: center;
	}
	.stat-number {
		font-size: 1.7rem;
		font-weight: 800;
	}
	.stat-label {
		font-weight: 700;
		margin-top: 0.25rem;
	}
	.stat-detail {
		font-size: 0.9rem;
		color: var(--faf-dark);
	}
	.fed-note {
		font-size: 0.95rem;
	}

	.registry-header {
		font-size: 1.15rem;
		color: var(--faf-black);
		margin: 1.5rem 0 0.5rem;
	}
	.package-table {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 8px;
		overflow: hidden;
	}
	.pkg-row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.5rem 1rem;
		border-top: 1px solid var(--faf-border);
		font-size: 0.95rem;
	}
	.pkg-row:first-child {
		border-top: none;
	}
	.pkg-header {
		background: var(--faf-section-alt);
		color: var(--faf-black);
		font-weight: 700;
	}

	.post-content section.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-radius: 10px;
		border-left: 4px solid #ffd700; /* literal-ok: Milestone category accent border */
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.post-content a.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border: 2px solid var(--faf-solid-bg);
	}
	.post-content a.feedback-btn:hover {
		opacity: 0.85;
	}
	.post-content a.feedback-btn.secondary {
		background: transparent;
		color: var(--faf-black);
		border-color: var(--faf-black);
	}

	.post-content section.footer-note {
		text-align: center;
		color: var(--faf-dark);
		font-size: 0.95rem;
		border-top: 1px solid var(--faf-border);
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
		.big-number {
			font-size: 3.2rem;
		}
		.stats-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
