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
</style>
