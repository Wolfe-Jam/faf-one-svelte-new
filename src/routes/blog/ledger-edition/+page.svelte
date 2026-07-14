<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>The Ledger Edition - faf-cli v6.11.0 | FAF</title>
	<meta name="description" content="faf bench --submit posts your cold-vs-grounded receipt to the public ledger — the context bench goes public, one command." />
	<meta property="og:title" content="The Ledger Edition - faf-cli v6.11.0" />
	<meta property="og:description" content="One command posts your cold-vs-grounded grounding receipt to the public ledger. The context bench goes public." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/ledger-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/ledger-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Ledger Edition
		</div>

		<h1>The Ledger Edition</h1>
		<p class="version-tag">faf-cli v6.11.0</p>
		<p class="subtitle">The grounding bench goes public — one command, one receipt.</p>
		<div class="meta">
			<time datetime="2026-06-14">June 14, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/ledger-edition-hero.png" alt="faf-cli v6.11.0 The Ledger Edition — dotFaf smiley beside a terminal running faf bench --submit, posting a cold-vs-grounded receipt to the public ledger with the ✪ seal." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf bench --submit</code> posts your cold-vs-grounded receipt to the public ledger — the context bench goes public, one command.
			</p>
		</section>

		<section>
			<h2>The Bench Goes Public</h2>

			<p><code>faf bench</code> grades a model twice: <strong>cold</strong> (no project context) and <strong>grounded</strong> (with your <code>.faf</code>). Your <code>.faf</code> is the answer key, so the grading is mechanical — no judge, no rubric drift. The gap between the two scores is the whole point: it's how much context was worth.</p>

			<p>Until now that number lived on your machine. <code>--submit</code> changes that — it posts the full cold-vs-grounded pair, as a re-derivable <code>&#10026;</code> receipt, to the public bench ledger:</p>

			<pre class="heartbeat"><code>{`$ faf bench --submit
  cold       — the model alone, no context
  grounded   — the model + your .faf (the answer key)
  ✪ receipt submitted → mcpaas.live/bench/submit`}</code></pre>

			<p>It's <strong>opt-in and fire-and-forget</strong>: the benchmark runs and prints locally whether or not you submit; <code>--submit</code> simply also posts the receipt (override the target with <code>--endpoint</code>). A private number becomes a shared, verifiable one — the first brick in a public record of how models perform <em>with context versus without it</em>.</p>
		</section>

		<section>
			<h2>Also in 6.11.0</h2>

			<p>Two engine-surface additions ride along, both in service of single-sourcing:</p>

			<ul>
				<li><strong><code>relentlessContext</code> + <code>assembleFreshFaf</code></strong> — exported from the public API, so consumers compose the seed/build path instead of reimplementing it.</li>
				<li><strong><code>buildTableOf8</code></strong> — the interview keystone: Name + Goal + 6Ws, with the goal seeding the 6W slots, shown as the Table-of-8 for approval before anything is built.</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>

			<button class="copy-box" onclick={() => copyText('npm install faf-cli@6.11.0', 'install')}>
				<code class="copy-code">npm install faf-cli@6.11.0</code>
				<span class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</span>
			</button>

			<p>Or <code>bunx faf</code>, or <code>brew install faf-cli</code> — then <code>faf bench --submit</code>. Both <code>npx faf-cli</code> and <code>bunx faf</code> serve 6.11.0.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v6.11.0</strong> &mdash; Released June 14, 2026</li>
				<li><strong>871 tests, 0 fail</strong> &mdash; 2,920 assertions</li>
				<li><strong>&#127942; 100%</strong> &mdash; Trophy score</li>
				<li><strong>faf-cli + faf</strong> &mdash; both at v6.11.0 (<code>npx faf-cli</code> &middot; <code>bunx faf</code> parity)</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=The%20Ledger%20Edition%20%E2%80%94%20faf-cli%20v6.11.0.%20faf%20bench%20--submit%20posts%20your%20cold-vs-grounded%20receipt%20to%20the%20public%20ledger%20%E2%80%94%20the%20context%20bench%20goes%20public%2C%20one%20command.&url=https%3A%2F%2Ffaf.one%2Fblog%2Fledger-edition" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; The bench goes public. &#127950;&#65039;</p>
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
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
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
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
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

	/* Featured terminal — the cold/grounded pair IS the story */
	pre.heartbeat {
		font-size: 1.05rem;
		line-height: 1.8;
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
		color: #00ff88; /* terminal green — go signal */
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
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { border-color: #fff; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}

		pre.heartbeat {
			font-size: 0.85rem;
			padding: 1.25rem 1rem;
		}
	}
</style>
