<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>Countdown to 100k | FAF</title>
	<meta name="description" content="91,565 downloads. 8,435 to go. The 100k milestone post is already written — and a robot checks every morning whether today's the day. Counts fed, pace derived, nothing typed by hand." />
	<meta property="og:title" content="Countdown to 100k — FAF Ecosystem" />
	<meta property="og:description" content="8,435 to go. The milestone post is already written — a robot checks every morning whether today's the day." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/countdown-100k-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/countdown-100k-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Countdown to 100k
		</div>

		<h1>Countdown to 100k</h1>
		<p class="subtitle">The milestone post is already written. A robot checks every morning whether today's the day.</p>
		<div class="meta">
			<time datetime="2026-06-12">June 12, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/countdown-100k-hero.png" alt="Countdown to 100k flash card — the dotFaf smiley above 8,435 to go, 91,565 down." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Today the FAF ecosystem hit <strong>91,565 downloads</strong> across npm, PyPI, and crates.io. That's <strong>8,435 to go</strong> — and rather than wait around refreshing dashboards, we wrote the 100,000 post in advance, parked it in the drafts folder, and put a robot on watch.
			</p>
		</section>

		<section class="celebration">
			<div class="big-number">8,435</div>
			<div class="big-label">downloads to go</div>
		</section>

		<section>
			<h2>Today's Count</h2>

			<pre class="heartbeat"><code>{`Countdown to 100k
91,565 downloads · 8,435 to go
+734/day since the 60k crossing · ~11 days at this pace
npm 66,442 · PyPI 24,280 · crates 843`}</code></pre>

			<p>Every number above is <em>fed, not typed</em> — the same daily-refreshed source that powers the banner at the top of this site. The pace is derived from git history of the count file, not estimated. House rules.</p>
		</section>

		<section>
			<h2>The Post That Lands Itself</h2>

			<p>Here's the fun part. The 100k milestone post <a href="https://github.com/Wolfe-Jam/faf-one-svelte-new/blob/main/src/routes/blog/drafts/hundred-thousand/%2Bpage.svelte">already exists, in public, in the drafts folder</a> — its tables import the live count, so it can never go stale. Two tiny slots wait to be filled: the crossing date, and the days-from-60k.</p>

			<p>A scheduled agent checks the counter every morning at 9. Below 100,000 &rarr; it emits the day's countdown block and stands down. The day the counter crosses &rarr; it fills the slots, moves the post out of drafts, adds the index card, verifies the build, and opens a pull request titled <code>LAND: 100,000 Downloads</code>. The merge click is the publish button. It never touches the count, and it never pushes to main — the human keeps the GO.</p>

			<p>We rehearsed the whole ritual this morning with a test marker: the agent computed the count independently &mdash; <strong>91,565, matching our local sum exactly</strong> &mdash; filled the dates, built clean, and opened a perfectly-formed <code>[TEST]</code> PR. Closed unmerged, marker removed, armed for the real day.</p>
		</section>

		<section>
			<h2>From 60k, 43 Days Ago</h2>

			<p>60k landed April 30. The +31,565 since then came with zero marketing budget — what shipped instead was a coordinated security disclosure handled with honest credit, the Trust / Grounded / Composed / Sourced editions, a benchmark where your own repo grades the answers, and every engine consolidated to a single source. The downloads follow the receipts.</p>
		</section>

		<section>
			<h2>Move the Number</h2>

			<button class="copy-box" onclick={() => navigator.clipboard.writeText('npx faf-cli auto')}>
				<code class="copy-code">npx faf-cli auto</code>
				<span class="copy-btn">Copy</span>
			</button>

			<p>Every install is one less to go. Watch the banner at the top of this page tick toward six figures — or check back in ~11 days for a post nobody will have typed.</p>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=Countdown%20to%20100k%20%E2%80%94%20today%20the%20FAF%20ecosystem%20hit%2091%2C565%20downloads.%208%2C435%20to%20go.%20The%20milestone%20post%20is%20already%20written%2C%20and%20a%20robot%20checks%20every%20morning%20whether%20today%27s%20the%20day.&url=https%3A%2F%2Ffaf.one%2Fblog%2Fcountdown-100k" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; Counts fed. Pace derived. Nothing typed. 🏎️</p>
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
		background: #fff5f0;
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
