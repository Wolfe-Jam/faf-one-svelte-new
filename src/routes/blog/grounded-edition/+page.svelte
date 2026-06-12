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
	<title>You're Grounded! - The Grounded Edition - faf-cli v6.9.0 | FAF</title>
	<meta name="description" content="Grounding becomes a first-class primitive: faf bench proves it, the 6Ws Interview single-sources it, faf refresh keeps it. The .faf is the answer key." />
	<meta property="og:title" content="You're Grounded! - faf-cli v6.9.0" />
	<meta property="og:description" content="faf bench: your AI without context vs with it — on your own repo, graded by your own .faf. Trouble ahead, expensive trouble." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/grounded-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/grounded-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / You're Grounded!
		</div>

		<h1>You're Grounded!</h1>
		<p class="version-tag">faf-cli v6.9.0 — The Grounded Edition</p>
		<p class="subtitle">Grounding becomes a first-class primitive: <code>faf bench</code> proves it, the 6Ws Interview single-sources it, <code>faf refresh</code> keeps it.</p>
		<div class="meta">
			<time datetime="2026-06-12">June 12, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/grounded-edition-hero.png" alt="faf-cli v6.9.0 You're Grounded! — dotFaf smiley beside a terminal reading drift: 43% ↑ 55% (+12) — re-grounded, with the ✪ seal." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Your AI is either grounded in your project or it's guessing at it. v6.9.0 makes grounding measurable (<code>faf bench</code>), askable (the 6Ws Interview, one registry for every surface), and maintainable (<code>faf refresh</code>). And the benchmark grades itself &mdash; <strong>the .faf is the answer key.</strong>
			</p>
		</section>

		<section>
			<h2>Trouble Ahead, Expensive Trouble</h2>

			<p>Run <code>faf bench</code> on a repo with no context and here's what you learn: the AI is hemorrhaging tokens re-deriving your stack every session &mdash; and the half it can't dig out at any price is your <em>intent</em>. Exploration eventually finds your framework. It never finds your <strong>why</strong>.</p>

			<pre class="heartbeat"><code>{`           without context    with .faf
answers    9/15               15/15
tokens     ~33,492            ~29,426

✪ BENCH RECEIPT
  qset: 15e8cf16c307 · cold 9/15 · faf 15/15`}</code></pre>

			<p>Those are real receipts. We benched our own fleet on day one &mdash; cold runs vs with-faf runs, fresh AI sessions both sides:</p>

			<ul>
				<li><strong>claude-faf-mcp:</strong> 8/15 cold &rarr; <strong>15/15</strong> with .faf &mdash; 3 file reads down to <strong>1</strong>, 41s down to <strong>7s</strong></li>
				<li><strong>grok-faf-mcp:</strong> 9/15 &rarr; <strong>15/15</strong></li>
				<li><strong>faf-mcp:</strong> 8/15 &rarr; <strong>15/15</strong></li>
			</ul>

			<p>Honest footnote: our cold scores are <em>flattering</em> &mdash; these repos have unusually thorough READMEs. A typical repo cold-scores far lower. And the misses cluster exactly where the theory says: the six Ws. The stack is diggable. The intent is not.</p>
		</section>

		<section>
			<h2>The Answer Key Is Your Own Repo</h2>

			<p>Benchmarks usually need a judge. This one doesn't: the questions derive from your <code>project.faf</code>'s populated slots, so grading is mechanical &mdash; normalize, compare, versioned aliases, no rubric drift. The receipt is a sha256 over the run that any third party can re-derive. <strong>FAF don't lie</strong> &mdash; and neither can the benchmark.</p>

			<pre><code>{`faf bench              # the protocol
faf bench questions    # hand them to any AI
faf bench grade cold.json --cold --tokens 33492
faf bench grade faf.json --faf  → the pair + ✪ receipt`}</code></pre>

			<p>A low cold score isn't a verdict on your AI &mdash; it's the diagnosis that your project is under-contextualized. The missing answers are already in your repo. Unstructured. <code>faf init</code> structures them; re-bench and watch the pair.</p>
		</section>

		<section>
			<h2>One Interview, Every Surface</h2>

			<p>The 6Ws Interview &mdash; the 8 questions that capture what machines can't derive (name, goal, and the six Ws) &mdash; now ships on faf-cli's public API: <code>SIX_WS_INTERVIEW</code>, <code>questionForSlot</code>, <code>interviewForMissing</code>. The CLI, the MCP servers, any UI: one registry, identical questions. Question drift between surfaces is now structurally impossible.</p>
		</section>

		<section>
			<h2>drift &rarr; refresh &rarr; re-grounded</h2>

			<p><code>faf refresh</code> is the maintenance half: re-score the live <code>.faf</code>, measure drift against your project's DNA baseline, keep an existing <code>.fafb</code> fast tier compiled current, record the journey.</p>

			<pre class="heartbeat"><code>{`refresh — re-grounding on the live .faf

  drift: 43% ↑ 55% (+12)
  .fafb re-compiled (fast tier current)
  re-grounded: ● 55%`}</code></pre>
		</section>

		<section>
			<h2>Fixed: Your Files Are Enhanced, Never Replaced</h2>

			<p>Straight talk: <code>faf sync</code> and the interop exports used to overwrite AGENTS.md, CLAUDE.md, GEMINI.md, and .cursorrules wholesale. That was a bug, and it's fixed &mdash; a non-destructive injector owns a marked block at the top of the file and preserves everything you've written below. A build-failing write-guard makes the old behavior impossible to reintroduce.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<button class="copy-box" onclick={() => copyText('npx faf-cli@6.9.0 bench', 'install')}>
				<code class="copy-code">npx faf-cli@6.9.0 bench</code>
				<span class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</span>
			</button>

			<p>Or <code>bunx faf</code>, or <code>brew install faf-cli</code> &mdash; all three serve 6.9.0. Run the bench on your own repo. Your numbers, your receipt.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v6.9.0</strong> &mdash; Released June 12, 2026</li>
				<li><strong>820 tests, 0 fail</strong> &mdash; 2,652 assertions</li>
				<li><strong>&#127942; 100%</strong> &mdash; Trophy score</li>
				<li><strong>3 grounding primitives</strong> &mdash; bench &middot; interview &middot; refresh</li>
				<li><strong>npm + Homebrew</strong> &mdash; <code>faf-cli</code> and <code>faf</code>, both 6.9.0</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=You%27re%20Grounded!%20faf-cli%20v6.9.0%20%E2%80%94%20faf%20bench%3A%20your%20AI%20without%20context%20vs%20with%20it%2C%20graded%20by%20your%20own%20.faf.%20Trouble%20ahead%2C%20expensive%20trouble.&url=https%3A%2F%2Ffaf.one%2Fblog%2Fgrounded-edition" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; Measure it. Ask it. Keep it. &#127950;&#65039;</p>
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
		background: #fff5f0;
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

	/* Featured terminal blocks — the receipts ARE the story */
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
