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
	<title>The Composed Edition - faf-cli v6.10.x | FAF</title>
	<meta name="description" content="Every FAF MCP composes single-source engines, never reimplements them. Turbo-Cat (~200 formats) and the bench engine join the public API — plus the same-day no-guess patch." />
	<meta property="og:title" content="The Composed Edition - faf-cli v6.10.x" />
	<meta property="og:description" content="Turbo-Cat and the bench engine join the public API. One engine each, composed everywhere. And a same-day patch that proves the doctrine polices itself." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/composed-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/composed-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Composed Edition
		</div>

		<h1>The Composed Edition</h1>
		<p class="version-tag">faf-cli v6.10.0 + v6.10.1</p>
		<p class="subtitle">Every FAF MCP composes single-source engines, never reimplements them.</p>
		<div class="meta">
			<time datetime="2026-06-12">June 12, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/composed-edition-hero.png" alt="faf-cli v6.10.x The Composed Edition — dotFaf smiley beside a terminal importing turboCatScan and gradeAnswers from faf-cli, with the MCP mark and ✪ seal." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The engines move to the public API. Turbo-Cat (the ~200-format knowledge base) and the bench engine join scoring and the 6Ws Interview as <strong>composed, single-source engines</strong> — every FAF MCP imports them through the bridge instead of carrying its own drifting copy. And a same-day patch proves the doctrine polices itself.
			</p>
		</section>

		<section>
			<h2>One Engine Each. Composed Everywhere.</h2>

			<p>Before this release, the real Turbo-Cat lived only inside the CLI — so each MCP server ran its own smaller, hand-maintained format map. Same for the bench engine. That's how drift happens: five copies, five trajectories, one truth slowly forking.</p>

			<pre><code>{`import {
  turboCatScan,      // ~200-format detection — per-format breakdown + stack signature
  deriveQuestionSet, // the bench engine — your .faf is the answer key
  publicQuestions,   // questions WITHOUT the answer key (see below)
  gradeAnswers,      // mechanical grading — no judge, no rubric drift
  buildReceipt,      // the ✪ receipt — sha256, third-party re-derivable
} from 'faf-cli';`}</code></pre>

			<p>The servers don't adapt to these — they <strong>delete their local copies</strong>. Detection sourced-only and order-independent. Grading byte-identical across the CLI and every server. The <code>&#10026;</code> receipt is now <strong>one convention</strong> across parity, trust, and bench: sha256 over a canonical projection, re-derivable by anyone.</p>
		</section>

		<section>
			<h2>The Answer Key Stays Locked</h2>

			<p>The bench export came with one integrity-critical clause: <code>deriveQuestionSet</code> returns the answer key (your <code>.faf</code>'s values) so grading can be mechanical. A tool that printed that key would make the benchmark a lie. So the API makes the mistake unmakeable — <code>publicQuestions(qset)</code> is the only shape a "give me the questions" surface hands out. Version, hash, questions. Never answers.</p>
		</section>

		<section>
			<h2>The Same-Day Patch — Doctrine Policing Itself</h2>

			<p>Hours after 6.10.0 shipped, the first consumer caught something: Turbo-Cat's knowledge base asserted a full <em>Chrome Extension</em> stack — JavaScript, Chrome Web Store, the lot — from the filename <code>manifest.json</code> alone. But <code>manifest.json</code> is one of the most overloaded names in software: chrome extension, MCP bundle manifest, PWA, plain config. Asserting a stack from the name is a guess. Sourced-only forbids guessing. <strong>The release that shipped the doctrine was violating it.</strong></p>

			<pre class="heartbeat"><code>{`TS project + an mcpb manifest.json
  6.10.0:  JavaScript · Chrome Extension   ✗ guessed
  6.10.1:  TypeScript · (none)             ✓ sourced`}</code></pre>

			<p>v6.10.1 fixes it the right way: <strong>content decides, never the filename</strong>. Chrome asserts only when <code>manifest_version</code> is a number and a chrome field is present — real extensions still detect, v2 and v3. MCP manifests, PWAs, and anything ambiguous assert nothing. An honest empty beats a guessed stack.</p>

			<p>That's the part worth reading twice: the consumer that caught it verified the fix independently before it shipped. Single-source engines mean one bug, one fix, every surface healed at once — that's the entire argument for composing.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<button class="copy-box" onclick={() => copyText('npm install faf-cli@6.10.1', 'install')}>
				<code class="copy-code">npm install faf-cli@6.10.1</code>
				<span class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</span>
			</button>

			<p>Or <code>bunx faf</code>, or <code>brew install faf-cli</code>. Building on the formats? The engines are right there on the import.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v6.10.0 + v6.10.1</strong> &mdash; Released June 12, 2026</li>
				<li><strong>843 tests, 0 fail</strong> &mdash; 2,746 assertions</li>
				<li><strong>&#127942; 100%</strong> &mdash; Trophy score</li>
				<li><strong>4 composed engines</strong> &mdash; scoring &middot; 6Ws Interview &middot; Turbo-Cat &middot; bench</li>
				<li><strong>23 new contract tests</strong> &mdash; populated-not-present &middot; answer-key-not-leaked &middot; content-not-filename</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=The%20Composed%20Edition%20%E2%80%94%20faf-cli%20v6.10.x.%20Every%20FAF%20MCP%20composes%20single-source%20engines%2C%20never%20reimplements%20them.%20Plus%20a%20same-day%20patch%20that%20proves%20the%20doctrine%20polices%20itself.&url=https%3A%2F%2Ffaf.one%2Fblog%2Fcomposed-edition" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; One engine each. Composed everywhere. &#127950;&#65039;</p>
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

	/* Featured terminal — the before/after IS the story */
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
