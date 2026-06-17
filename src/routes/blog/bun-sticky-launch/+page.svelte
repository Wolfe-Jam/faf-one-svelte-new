<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	let copiedId = $state('');

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	onMount(() => {
		mounted = true;
	});

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: bun-sticky-faf — Zero-Dependency FAF Scoring for Bun

The fastest FAF scoring CLI. Zero dependencies. Pure Bun APIs. TypeScript native. 333 championship-grade tests.`;
	const shareUrl = 'https://faf.one/blog/bun-sticky-launch';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>bun-sticky: Zero-Dependency FAF Scoring for Bun | FAF</title>
	<meta name="description" content="Introducing bun-sticky-faf - the fastest FAF scoring CLI. Zero dependencies. Pure Bun. 333 tests. Built the Anthropic way." />
	<meta property="og:title" content="bun-sticky: Zero-Dependency FAF Scoring for Bun" />
	<meta property="og:description" content="The fastest FAF scoring CLI. Zero dependencies. Pure Bun APIs. TypeScript native. 333 championship-grade tests." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<div class="hero-banner bw">
		<pre>   ▄▄       ▄▀▀▀ ▀█▀ █ ▄▀▀ █▄▀ █ █
  ████      ▀▀█▄  █  █ █   █▀▄  █
██████      ▄▄▄▀  █  █ ▀▀▀ █ █  █
████████
████████    █▀▄  █ █ █▀▄
 ██████     ██▀  █ █ █ █
   ████     █▄▀  ▀▄▀ █ █
     ▀▀

🥐 bun-sticky-faf v1.0.6
   Fastest bun under the sum.</pre>
	</div>

	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / bun-sticky Launch
		</div>
		<h1>bun-sticky: Zero-Dependency FAF Scoring for Bun</h1>
		<p class="subtitle">Fastest bun under the sum. Built the Anthropic way.</p>
		<div class="meta">
			<time datetime="2025-12-22">December 22, 2025</time>
			<span class="separator">•</span>
			<span class="category">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>bun-sticky-faf</strong> is now live on npm. A Bun-native FAF scoring CLI with zero dependencies, pure Bun APIs, and 333 championship-grade tests.
			</p>

			<div class="copy-box" onclick={() => copyText('bunx bun-sticky-faf score', 'bunx-score')}>
				<code class="copy-code">bunx bun-sticky-faf score</code>
				<button class="copy-btn">{copiedId === 'bunx-score' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section class="philosophy">
			<h2>Built the Anthropic Way</h2>
			<p>
				We followed four principles:
			</p>

			<ul>
				<li><strong>First principles:</strong> No frameworks, no abstractions. Just the problem and the solution.</li>
				<li><strong>Zero dependencies:</strong> Pure Bun APIs only. No node_modules. No supply chain risk.</li>
				<li><strong>Native Bun:</strong> TypeScript runs directly. No build step. No transpilation.</li>
				<li><strong>TypeScript native:</strong> Full type safety without the toolchain overhead.</li>
			</ul>

			<p>
				The result: a 25.5 kB package that cold starts in under 50ms and scores your project in under 100ms.
			</p>
		</section>

		<section class="scoring">
			<h2>Wolfejam Slot-Based Scoring</h2>
			<p>
				bun-sticky-faf uses the same scoring system as faf-cli: 21 slots across 5 categories, with type-aware counting.
			</p>

			<div class="spec-grid">
				<div class="spec-card">
					<h3>Project</h3>
					<p class="slots">3 slots</p>
					<p class="fields">name, goal, main_language</p>
				</div>
				<div class="spec-card">
					<h3>Frontend</h3>
					<p class="slots">4 slots</p>
					<p class="fields">frontend, css_framework, ui_library, state_management</p>
				</div>
				<div class="spec-card">
					<h3>Backend</h3>
					<p class="slots">5 slots</p>
					<p class="fields">backend, api_type, runtime, database, connection</p>
				</div>
				<div class="spec-card">
					<h3>Universal</h3>
					<p class="slots">3 slots</p>
					<p class="fields">hosting, build, cicd</p>
				</div>
				<div class="spec-card">
					<h3>Human</h3>
					<p class="slots">6 slots</p>
					<p class="fields">who, what, why, where, when, how</p>
				</div>
			</div>

			<p>
				<strong>Type-aware:</strong> A CLI project only needs 9 slots (project + human). A fullstack app needs all 21. The formula adjusts automatically.
			</p>

			<div class="code-block">
				<pre><code>Score = (Filled Slots / Applicable Slots) × 100</code></pre>
			</div>
		</section>

		<section class="tiers">
			<h2>Tier System</h2>
			<p>
				Your score maps to a tier:
			</p>

			<div class="tier-table">
				<div class="tier-row trophy">
					<span class="tier-emoji">🏆</span>
					<span class="tier-name">Trophy</span>
					<span class="tier-score">100%</span>
				</div>
				<div class="tier-row gold">
					<span class="tier-emoji">🥇</span>
					<span class="tier-name">Gold</span>
					<span class="tier-score">99%+</span>
				</div>
				<div class="tier-row silver">
					<span class="tier-emoji">🥈</span>
					<span class="tier-name">Silver</span>
					<span class="tier-score">95%+</span>
				</div>
				<div class="tier-row bronze">
					<span class="tier-emoji">🥉</span>
					<span class="tier-name">Bronze</span>
					<span class="tier-score">85%+</span>
				</div>
				<div class="tier-row green">
					<span class="tier-emoji">🟢</span>
					<span class="tier-name">Green</span>
					<span class="tier-score">70%+</span>
				</div>
				<div class="tier-row yellow">
					<span class="tier-emoji">🟡</span>
					<span class="tier-name">Yellow</span>
					<span class="tier-score">55%+</span>
				</div>
				<div class="tier-row red">
					<span class="tier-emoji">🔴</span>
					<span class="tier-name">Red</span>
					<span class="tier-score">&lt;55%</span>
				</div>
			</div>

			<p>
				<strong>Bronze (85%+) is the launch threshold.</strong> Below that, your AI context needs work.
			</p>
		</section>

		<section class="testing">
			<h2>333 Championship-Grade Tests</h2>
			<p>
				bun-sticky-faf has a WJTTC-certified test suite covering:
			</p>

			<ul>
				<li><code>test.each</code> - Parametrized tests</li>
				<li><code>test.concurrent</code> - Parallel execution</li>
				<li><code>mock</code>, <code>spyOn</code> - Full mocking</li>
				<li>Lifecycle hooks - beforeAll, afterEach, etc.</li>
				<li>Custom matchers - toBeValidScore(), toBeValidTier()</li>
				<li>Snapshots - Regression protection</li>
			</ul>

			<div class="copy-box" onclick={() => copyText('bun test', 'bun-test')}>
				<code class="copy-code">bun test</code>
				<button class="copy-btn">{copiedId === 'bun-test' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section class="commands">
			<h2>Commands</h2>

			<div class="copy-box" onclick={() => copyText('faf score\nfaf init myapp\nfaf sync\nfaf help', 'faf-cmds')}>
				<div class="copy-code-multi">faf score <span class="code-comment"># Show FAF score + tier</span><br/>faf init myapp <span class="code-comment"># Create project.faf</span><br/>faf sync <span class="code-comment"># Sync to CLAUDE.md</span><br/>faf help <span class="code-comment"># Show commands</span></div>
				<button class="copy-btn">{copiedId === 'faf-cmds' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>
				The <code>sync</code> command now preserves your existing CLAUDE.md content - it only updates the score badge.
			</p>
		</section>

		<section class="install">
			<h2>Installation</h2>

			<div class="copy-box" onclick={() => copyText('bunx bun-sticky-faf score', 'run-direct')}>
				<code class="copy-code">bunx bun-sticky-faf score</code>
				<button class="copy-btn">{copiedId === 'run-direct' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('npm install -g bun-sticky-faf', 'npm-install')}>
				<code class="copy-code">npm install -g bun-sticky-faf</code>
				<button class="copy-btn">{copiedId === 'npm-install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('bun add -g bun-sticky-faf', 'bun-install')}>
				<code class="copy-code">bun add -g bun-sticky-faf</code>
				<button class="copy-btn">{copiedId === 'bun-install' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section class="ecosystem">
			<h2>FAF Ecosystem</h2>
			<p>
				bun-sticky-faf joins the FAF family:
			</p>

			<ul>
				<li><strong>faf-cli</strong> - Node.js CLI (15,000+ downloads)</li>
				<li><strong>claude-faf-mcp</strong> - Official MCP server</li>
				<li><strong>bun-sticky-faf</strong> - Bun-native CLI (you are here)</li>
				<li><strong>bun-sticky-zig</strong> - Zig-native CLI (77KB binary)</li>
			</ul>

			<p>
				Same format. Same scoring. Different runtimes for different needs.
			</p>
		</section>

		<section class="links-section">
			<h2>Links</h2>
			<div class="links">
				<a href="https://github.com/Wolfe-Jam/bun-sticky" class="link-button github-button" target="_blank">
					GitHub
				</a>
				<a href="https://www.npmjs.com/package/bun-sticky-faf" class="link-button npm-button" target="_blank">
					npm
				</a>
			</div>
		</section>

		<section class="conclusion">
			<p class="tagline">
				<strong>Zero dependencies. Pure Bun. 333 tests.</strong>
			</p>
			<p class="brand">
				🏎️⚡ FAF Format Authority<br />
				🥐 Built for Bun<br />
				🆓 Open Source MIT
			</p>
		</section>
		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>
	</article>

	<footer class="post-footer">
		<div class="author">
			<p>Published by <strong>wolfejam</strong></p>
			<p class="tagline-footer">Format Authority for AI Context 🏎️⚡</p>
		</div>
	</footer>
</div>

<style>
	:global(body) { background: var(--faf-cream); }

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.hero-banner {
		background: #1a1a1a;
		padding: 2rem;
		border-radius: 12px;
		margin: 0 -1rem 2rem -1rem;
		overflow-x: auto;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 1rem;
		line-height: 1.3;
		text-align: center;
	}

	.hero-banner pre {
		margin: 0;
		display: inline-block;
		text-align: left;
	}

	.hero-banner .bun-orange {
		color: #f8b84e;
	}

	.hero-banner .bun-dark {
		color: #e89b3c;
	}

	.hero-banner .white {
		color: #ffffff;
	}

	.hero-banner .cyan {
		color: #00d4d4;
	}

	.hero-banner.bw {
		color: #888;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-cyan-dark);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: var(--faf-orange);
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #666;
		margin: 0.5rem 0;
		font-weight: 400;
	}

	.meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.875rem;
		color: #666;
		margin-top: 1rem;
	}

	.separator {
		color: #ccc;
	}

	.category {
		color: var(--faf-cyan-dark);
		font-weight: 500;
	}

	.post-content {
		font-size: 1.125rem;
	}

	.intro {
		margin-bottom: 3rem;
	}

	.lead {
		font-size: 1.25rem;
		color: #333;
		margin: 1rem 0;
	}

	section {
		margin: 2.5rem 0;
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
		color: #1a1a1a;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
		color: var(--faf-orange);
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9em;
		color: var(--faf-cyan-dark);
	}

	.code-block {
		background: #1a1a1a;
		color: var(--faf-cyan-dark);
		padding: 1.5rem;
		border-radius: 8px;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.code-block code {
		background: none;
		padding: 0;
		color: inherit;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	ul li {
		padding-left: 1.5rem;
		position: relative;
		margin: 0.75rem 0;
	}

	ul li:before {
		content: "▸";
		position: absolute;
		left: 0;
		color: var(--faf-cyan-dark);
		font-weight: bold;
	}

	.spec-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.spec-card {
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.05) 0%, rgba(255, 145, 77, 0.05) 100%);
		padding: 1rem;
		border-radius: 8px;
		border: 1px solid #e5e5e5;
	}

	.spec-card .slots {
		font-weight: 600;
		color: var(--faf-cyan-dark);
		margin: 0.25rem 0;
	}

	.spec-card .fields {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
	}

	.tier-table {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 1.5rem 0;
	}

	.tier-row {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border-radius: 6px;
		background: #f9f9f9;
	}

	.tier-emoji {
		font-size: 1.5rem;
	}

	.tier-name {
		flex: 1;
		font-weight: 600;
	}

	.tier-score {
		font-family: 'Monaco', monospace;
		color: #666;
	}

	.links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.link-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.npm-button {
		background: #CB3837;
	}

	.npm-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(203, 56, 55, 0.3);
	}

	.github-button {
		background: #6e5494;
	}

	.github-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(110, 84, 148, 0.3);
	}

	.conclusion {
		margin-top: 3rem;
		text-align: center;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.05) 0%, rgba(255, 145, 77, 0.05) 100%);
		border-radius: 12px;
	}

	.tagline {
		font-size: 1.5rem;
		color: #1a1a1a;
		margin: 1rem 0;
	}

	.brand {
		font-size: 1.125rem;
		color: #666;
		margin: 1.5rem 0;
		line-height: 1.8;
	}

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
	}

	.author {
		text-align: center;
	}

	.author p {
		margin: 0.5rem 0;
	}

	.tagline-footer {
		color: #666;
		font-size: 0.875rem;
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
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-code-multi {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.6;
	}
	.code-comment { color: #666; font-weight: 400; }
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.post-content {
			font-size: 1rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.spec-grid {
			grid-template-columns: 1fr;
		}

		.links {
			flex-direction: column;
		}

		.link-button {
			display: block;
			width: 100%;
			text-align: center;
		}
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
</style>
