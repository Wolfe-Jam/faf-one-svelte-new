<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedIndex = $state(-1);

	function copyCommand(text: string, index: number) {
		navigator.clipboard.writeText(text);
		copiedIndex = index;
		setTimeout(() => { copiedIndex = -1; }, 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-cli v5.0.5 — The faf auto Edition

One command. Zero to 100%. Smart Metadata Extraction makes faf auto even smarter.

faf auto`;
	const shareUrl = 'https://faf.one/blog/faf-auto-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The faf auto Edition - faf-cli v5.0.5 | FAF</title>
	<meta name="description" content="One command. Zero to 100%. faf auto now pulls your project name, goal, and version from manifest files automatically." />
	<meta property="og:title" content="The faf auto Edition - faf-cli v5.0.5" />
	<meta property="og:description" content="One command. Zero to 100%. Smart Metadata Extraction makes faf auto even smarter." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The faf auto Edition
		</div>
		<h1>The faf auto Edition</h1>
		<p class="subtitle">One command. Zero to 100%. Now even smarter.</p>
		<div class="meta">
			<time datetime="2026-03-12">March 12, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
			<span class="separator">•</span>
			<span class="version-tag">v5.0.5</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf auto</code> now pulls your project name, goal, and version from your manifest files automatically. One command runs the full pipeline — init, detect, extract, sync, score. No questions, no prompts, no manual entry.
			</p>
		</section>

		<section>
			<h2>The One Command</h2>

			<div class="copy-box" onclick={() => copyCommand('bunx faf-cli auto', 0)}>
				<code class="copy-code">bunx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 0 ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box alt" onclick={() => copyCommand('npx faf-cli auto', 1)}>
				<code class="copy-code">npx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 1 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>That's it. No install required. Run it in any project directory and watch:</p>

<pre><code>{`faf auto
├── 1. Init        → Creates project.faf (or enhances existing)
├── 2. Detect      → TURBO-CAT discovers your stack (199 formats)
├── 3. Extract     → Pulls name, goal, version from manifests
├── 4. Sync        → Generates CLAUDE.md (bi-sync)
└── 5. Score       → Reports AI-readiness with before/after delta`}</code></pre>
		</section>

		<section>
			<h2>What's New in v5.0.5</h2>

			<h3>Smart Metadata Extraction (v5.0.4)</h3>
			<p><code>faf auto</code> now reads your manifest files and fills in the blanks:</p>

			<ul>
				<li><strong>package.json</strong> → project name, description, version</li>
				<li><strong>Cargo.toml</strong> → crate name, description, version</li>
				<li><strong>pyproject.toml</strong> → package name, description, version</li>
			</ul>

			<p>Before this, <code>faf auto</code> would leave placeholder values like <code>name: my-project</code> that you had to fill in manually. Now it reads your actual project metadata and fills them in for you.</p>

			<h3>CLI Detection Fix (v5.0.5)</h3>
			<p>Restored proper CLI detection in the <code>init</code> command. The FrameworkDetector was incorrectly overriding the project type — fixed with safe fallbacks and no crashes on missing fields.</p>
		</section>

		<section>
			<h2>Why faf auto Matters</h2>

			<p>Every developer using AI coding assistants has the same problem: the AI doesn't know your project. It guesses. It asks. It assumes. Every session.</p>

			<p><code>faf auto</code> fixes this in one command:</p>

			<ul>
				<li><strong>Before:</strong> AI working blind — guessing your stack, your goals, your conventions</li>
				<li><strong>After:</strong> AI has structured context — scored, validated, synced to CLAUDE.md</li>
			</ul>

			<div class="insight-box">
				<h3>91% token reclaim out the gate</h3>
				<p>Relentless pursuit to 100% <code>faf auto</code></p>
			</div>
		</section>

		<section>
			<h2>The Full Pipeline</h2>

			<div class="copy-box" onclick={() => copyCommand('faf auto', 2)}>
				<code class="copy-code">faf auto</code>
				<button class="copy-btn">{copiedIndex === 2 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>For existing projects — already have a <code>project.faf</code>? <code>faf auto</code> enhances it. Detects what's missing, fills it in, re-scores. Idempotent — run it as many times as you want.</p>

			<div class="copy-box" onclick={() => copyCommand('faf bi-sync', 3)}>
				<code class="copy-code">faf bi-sync</code>
				<button class="copy-btn">{copiedIndex === 3 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Keep CLAUDE.md synchronized. 8ms. Deterministic. No string surgery.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyCommand('bunx faf-cli auto', 4)}>
				<code class="copy-code">bunx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 4 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>No install. No clone. One command. Your project gets a <code>project.faf</code>, a synced <code>CLAUDE.md</code>, and a score. Done.</p>

			<p>For daily use:</p>

			<div class="copy-box" onclick={() => copyCommand('bun install -g faf-cli', 5)}>
				<code class="copy-code">bun install -g faf-cli</code>
				<button class="copy-btn">{copiedIndex === 5 ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box alt" onclick={() => copyCommand('npm install -g faf-cli', 6)}>
				<code class="copy-code">npm install -g faf-cli</code>
				<button class="copy-btn">{copiedIndex === 6 ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.0.5</strong> — Released March 12, 2026</li>
				<li><strong>1,108/1,108</strong> — Tests passing (49 suites)</li>
				<li><strong>100%</strong> — Trophy score (Gold Code)</li>
				<li><strong>199</strong> — TURBO-CAT format detection</li>
				<li><strong>64</strong> — CLI commands</li>
				<li><strong>8ms</strong> — Bi-sync speed</li>
			</ul>
		</section>

		<section>
			<h2>Related</h2>
			<p><a href="/blog/claude-md-not-a-foundation">Your CLAUDE.md Is Not a Foundation</a> — why structured context beats prose, and why <code>faf auto</code> is the answer.</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One file to define them all. ✍️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg) !important;
		color: #333 !important;
	}

	:global(html) {
		background: var(--faf-page-bg) !important;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
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
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.version-tag {
		display: inline-block;
		background: #1a2744;
		color: white;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00D4D4;
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
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
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

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00D4D4;
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

	.insight-box {
		background: #f0fffe;
		border: 2px solid #00D4D4;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00B8B8;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.2rem;
		color: #008B8B;
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

	.copy-box:hover {
		border-color: #555;
	}

	.copy-box.alt {
		background: #222;
		border-color: #2a2a2a;
		margin-top: -0.25rem;
	}

	.copy-box.alt .copy-code {
		color: #888;
	}

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

	.copy-btn {
		padding: 0.5rem 1rem;
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}

	.copy-btn:hover {
		background: var(--faf-orange); color: var(--faf-on-accent);
		border-color: #ff6b35;
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
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
