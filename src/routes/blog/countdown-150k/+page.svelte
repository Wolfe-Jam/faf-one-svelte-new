<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	const shareText = `We expect to hit 150,000 downloads on September 25.

149,405 today across npm, PyPI and crates.io. 595 to go at +684/day.

Posting the prediction before the fact, so you can check it.
The number is a hard floor: PyPI without_mirrors only, 26 packages, 3 registries.

npx faf-cli auto

Help guide what we build —
Comments · suggestions welcome.`;
	const chartSvg = `<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ct cd" class="faf-chart">
<title id="ct">Cumulative .faf downloads, September 2025 to September 2026</title>
<desc id="cd">A line rising from zero on 16 September 2025 to 149,405 on 24 September 2026, steepening through the year, with a dashed final segment to 150,000 expected on 25 September 2026.</desc>
<style>
.faf-chart{--ink:#1a1a1a;--ink2:#3a352d;--line:#e6e1d6;--ring:#FEFCF8;--faf:#FF6B35;font-family:'Roboto Condensed','Arial Narrow',system-ui,sans-serif}
@media (prefers-color-scheme:dark){.faf-chart:not([data-theme=light]){--ink:#f2f2f2;--ink2:#d8d3ca;--line:#2b2a28;--ring:#0a0a0a}}
.faf-chart[data-theme=dark]{--ink:#f2f2f2;--ink2:#d8d3ca;--line:#2b2a28;--ring:#0a0a0a}
.faf-chart .fc-grid{stroke:var(--line);stroke-width:1}
.faf-chart .fc-ax{fill:var(--ink2);font-size:23px;font-family:'Roboto Mono',ui-monospace,Menlo,monospace}
.faf-chart .fc-ln{fill:none;stroke:var(--faf);stroke-width:3;stroke-linejoin:round;stroke-linecap:round}
.faf-chart .fc-ln-proj{fill:none;stroke:var(--faf);stroke-width:3;stroke-dasharray:8 7;stroke-linecap:round}
.faf-chart .fc-ar{fill:var(--faf);opacity:.10}
.faf-chart .fc-dot{fill:var(--faf);stroke:var(--ring);stroke-width:2.5}
.faf-chart .fc-dot-proj{fill:var(--ring);stroke:var(--faf);stroke-width:3}
.faf-chart .fc-leader{stroke:var(--ink2);stroke-width:1}
.faf-chart .fc-lab{fill:var(--ink);font-size:26px;font-weight:700}
.faf-chart .fc-lab-proj{fill:var(--ink2);font-weight:400;font-style:italic;font-size:23px}
.faf-chart .fc-hd{fill:var(--ink);font-size:33px;font-weight:700}
.faf-chart .fc-sub{fill:var(--ink2);font-size:21px;font-family:'Roboto Mono',ui-monospace,Menlo,monospace}
</style>
<text class="fc-hd" x="112" y="44">Cumulative downloads &#183; npm + PyPI + crates.io</text>
<text class="fc-sub" x="112" y="76">hard floor &#183; PyPI without_mirrors only &#183; 26 packages</text>
<line class="fc-grid" x1="112" y1="1000.0" x2="1028" y2="1000.0"/>
<text class="fc-ax" x="94" y="1008.0" text-anchor="end">0k</text>
<line class="fc-grid" x1="112" y1="850.7" x2="1028" y2="850.7"/>
<text class="fc-ax" x="94" y="858.7" text-anchor="end">25k</text>
<line class="fc-grid" x1="112" y1="701.3" x2="1028" y2="701.3"/>
<text class="fc-ax" x="94" y="709.3" text-anchor="end">50k</text>
<line class="fc-grid" x1="112" y1="552.0" x2="1028" y2="552.0"/>
<text class="fc-ax" x="94" y="560.0" text-anchor="end">75k</text>
<line class="fc-grid" x1="112" y1="402.7" x2="1028" y2="402.7"/>
<text class="fc-ax" x="94" y="410.7" text-anchor="end">100k</text>
<line class="fc-grid" x1="112" y1="253.3" x2="1028" y2="253.3"/>
<text class="fc-ax" x="94" y="261.3" text-anchor="end">125k</text>
<line class="fc-grid" x1="112" y1="104.0" x2="1028" y2="104.0"/>
<text class="fc-ax" x="94" y="112.0" text-anchor="end">150k</text>
<text class="fc-ax" x="148.7" y="1040" text-anchor="start">Oct 2025</text>
<text class="fc-ax" x="374.1" y="1040" text-anchor="middle">Jan 2026</text>
<text class="fc-ax" x="594.5" y="1040" text-anchor="middle">Apr 2026</text>
<text class="fc-ax" x="817.4" y="1040" text-anchor="middle">Jul 2026</text>
<text class="fc-ax" x="1028.0" y="1040" text-anchor="end">Sep 2026</text>
<path class="fc-ar" d="M112.0,1000.0 L217.3,937.3 L405.9,880.5 L513.7,820.8 L594.5,701.3 L665.5,641.6 L690.0,581.9 L790.4,402.7 L966.8,205.5 L1025.6,107.6 L1025.6,1000.0 L112.0,1000.0 Z"/>
<path class="fc-ln" d="M112.0,1000.0 L217.3,937.3 L405.9,880.5 L513.7,820.8 L594.5,701.3 L665.5,641.6 L690.0,581.9 L790.4,402.7 L966.8,205.5 L1025.6,107.6"/>
<path class="fc-ln-proj" d="M1025.6,107.6 L1028.0,104.0"/>
<circle class="fc-dot" cx="112.0" cy="1000.0" r="6"><title>first package published (claude-faf-mcp) &#183; 16 Sep 2025</title></circle>
<circle class="fc-dot" cx="217.3" cy="937.3" r="6"><title>10,500 downloads &#183; 29 Oct 2025</title></circle>
<text class="fc-lab" x="231.3" y="925.3" text-anchor="start">10.5k</text>
<circle class="fc-dot" cx="405.9" cy="880.5" r="6"><title>20,000 downloads &#183; 14 Jan 2026</title></circle>
<circle class="fc-dot" cx="513.7" cy="820.8" r="6"><title>30,000 downloads &#183; 27 Feb 2026</title></circle>
<circle class="fc-dot" cx="594.5" cy="701.3" r="6"><title>50,000 downloads &#183; 1 Apr 2026</title></circle>
<text class="fc-lab" x="580.5" y="695.3" text-anchor="end">50k</text>
<circle class="fc-dot" cx="665.5" cy="641.6" r="6"><title>60,000 downloads &#183; 30 Apr 2026</title></circle>
<circle class="fc-dot" cx="690.0" cy="581.9" r="6"><title>~70,000 (derived, not a published milestone) &#183; 10 May 2026</title></circle>
<circle class="fc-dot" cx="790.4" cy="402.7" r="6"><title>100,000 downloads &#183; 20 Jun 2026</title></circle>
<text class="fc-lab" x="776.4" y="396.7" text-anchor="end">100k</text>
<circle class="fc-dot" cx="966.8" cy="205.5" r="6"><title>133,000 downloads &#183; 31 Aug 2026</title></circle>
<text class="fc-lab" x="952.8" y="199.5" text-anchor="end">133k</text>
<circle class="fc-dot" cx="1025.6" cy="107.6" r="6"><title>149,405 downloads today &#183; 24 Sep 2026</title></circle>
<circle class="fc-dot-proj" cx="1028.0" cy="104.0" r="8"><title>150,000 expected 25 Sep 2026</title></circle>
<line class="fc-leader" x1="1018.0" y1="118.0" x2="1008.0" y2="288.0"/>
<text class="fc-lab" x="1002.0" y="316.0" text-anchor="end">149,405 today</text>
<text class="fc-lab fc-lab-proj" x="1002.0" y="346.0" text-anchor="end">150,000 expected 25 Sep</text>
</svg>`;
	const shareUrl = 'https://faf.one/blog/countdown-150k';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>150k on September 25 | FAF</title>
	<meta name="description" content="149,405 downloads today, 595 to go at 684 a day. We expect to cross 150,000 on September 25 — the prediction posted before the fact, so you can check it. The number is a floor, not a headline." />
	<meta property="og:title" content="We expect 150k on September 25 — FAF Ecosystem" />
	<meta property="og:description" content="149,405 today, 595 to go at +684/day. Prediction posted before the fact. The number is a hard floor: PyPI without_mirrors only, 26 packages, 3 registries." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/countdown-150k-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/countdown-150k-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 150k on September 25
		</div>

		<h1>150k on September 25</h1>
		<p class="subtitle">595 to go at 684 a day. Posting the prediction before the fact, so you can check it.</p>
		<div class="meta">
			<time datetime="2026-09-24">September 24, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/countdown-150k-chart.jpeg" alt="Cumulative .faf downloads from June 2025 to September 2026, rising from 10k in November 2025 through 36k in March 2026, 70k on May 10 and 100k on June 20, to 150k expected on September 25, 2026." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF ecosystem sits at <strong>149,405 downloads</strong> across npm, PyPI and crates.io &mdash; <strong>595 short</strong> of 150,000, running at 684 a day. So we expect to cross on <strong>September 25</strong>, and we are saying so the day before rather than the day after. Check it against <a href="/downloads">/downloads</a> tomorrow. The number is also a <em>floor</em>, not a headline, and that part matters more than the milestone.
			</p>
		</section>

		<section class="celebration">
			<div class="big-number">Sep 25</div>
			<div class="big-label">595 to go &middot; 684 a day</div>
		</section>

		<section>
			<h2>The Prediction</h2>

			<pre class="heartbeat"><code>{`150,000 expected 2026-09-25
149,405 today · 595 to go · +684/day since the 133k crossing
npm 135,347 · PyPI 12,154 · crates 1,904

the meter refreshes 09:00 UTC daily
tomorrow's refresh should read ~150,089`}</code></pre>

			<p>Every number above is <em>fed, not typed</em> &mdash; the same daily-refreshed file that powers the banner at the top of this site and the table on <a href="/downloads">/downloads</a>. One source, three surfaces.</p>

			<p>A forecast is only worth reading if it can be wrong. This one is dated, the arithmetic is above it, and the number it will be checked against is public. If the 25th comes and the meter reads 149,9-something, that is on us and it stays on the page.</p>
		</section>

		<section>
			<h2>The Number Is a Floor</h2>

			<p>149,405 is not the biggest number we could print. It is the biggest one we can defend.</p>

			<p>The meter counts npm and crates.io as reported, and PyPI as <code>without_mirrors</code> only &mdash; real installs, no mirror or bot traffic folded in. The PyPI statistics window runs about 180 days, so every package older than that is <strong>undercounted on purpose</strong>. Twenty-six packages, three registries, one hard floor.</p>

			<p>Counting mirrors would make the number bigger and make it worth less. A milestone you have to explain is not a milestone.</p>
		</section>

		<section>
			<h2>From 133k, 24 Days Ago</h2>

			<p>133,000 landed on <a href="/blog/hundred-thirty-three-thousand">August 31</a> &mdash; that one was +32,000 in 72 days. The 16,405 since arrived in 24.</p>

			<pre class="heartbeat"><code>{`60k  → 100k    +40,000 in 51 days    784/day
100k → 133k    +33,000 in 72 days    458/day
133k → today   +16,405 in 24 days    684/day`}</code></pre>

			<p>The middle stretch was the slow one. The pace since has not quite returned to the run into six figures, but it is close &mdash; and it came with no launch, no campaign and no marketing spend behind it.</p>
		</section>

		<section>
			<h2>Drawn to Scale</h2>

			<p>The same numbers as a chart, on a linear axis from zero to 150,000 with a tick every 25,000. Zero is 16 September 2025 &mdash; the day the first package went up. Hover any point for its figure and date.</p>

			<figure class="chart">
				{@html chartSvg}
				<figcaption>Solid to 149,405 today. The last 595 is dashed, ending in a hollow ring, because it has not happened yet.</figcaption>
			</figure>

			<p>Two things the shape shows that the numbers alone do not: the flat stretch through January and February, and the turn in April that has not let up since.</p>
		</section>

		<section>
			<h2>Move the Number</h2>

			<button class="copy-box" onclick={() => navigator.clipboard.writeText('npx faf-cli auto')}>
				<code class="copy-code">npx faf-cli auto</code>
				<span class="copy-btn">Copy</span>
			</button>

			<p>Every install is one less to go, and 595 is a small enough gap that readers of this post could move it themselves. Watch the banner at the top of this page tick over &mdash; then check <a href="/downloads">/downloads</a> on the 25th and see whether we called it.</p>
		</section>

		<section class="share-section">
			<a class="share-btn" href={xIntent} target="_blank" rel="noopener">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; Counts fed. Pace derived. Nothing typed. 🏎️</p>
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
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: -1rem 0 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
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

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		font-weight: 600;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator {
		color: #1a1a1a;
	}

	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.milestone {
		background: #FFD700;
		color: #000;
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

	.celebration {
		text-align: center;
		margin: 3rem 0;
	}

	.big-number {
		font-size: 4.5rem;
		font-weight: 800;
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		line-height: 1;
	}

	.big-label {
		font-size: 1.1rem;
		color: #1a1a1a;
		font-weight: 600;
		margin-top: 0.5rem;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1.25rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
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
		padding: 0;
	}

	pre.heartbeat {
		font-size: 1.05rem;
		line-height: 1.9;
		padding: 1.75rem 2rem;
		border: 1px solid #333;
		font-weight: 600;
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
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #1a1a1a;
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
		width: 100%;
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
		text-align: left;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: #000;
		border: 1px solid #555;
		color: #fff;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { border-color: #fff; }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}

		.big-number {
			font-size: 3rem;
		}

		pre.heartbeat {
			font-size: 0.8rem;
			padding: 1.25rem 1rem;
		}
	}

	.chart {
		margin: 22px 0 0;
		padding: 0;
	}
	.chart :global(svg) {
		display: block;
		width: 100%;
		max-width: 620px;
		height: auto;
		margin-inline: auto;
	}
	.chart figcaption {
		margin-top: 10px;
		font-size: 0.86rem;
		text-align: center;
	}
</style>
