<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedIndex = $state(-1);

	function copyCommand(text: string, index: number) {
		navigator.clipboard.writeText(text);
		copiedIndex = index;
		setTimeout(() => { copiedIndex = -1; }, 2000);
	}
</script>

<svelte:head>
	<title>Best Context Under the Bun - faf-cli v5.0.6 | FAF</title>
	<meta name="description" content="bunx faf-cli auto — 0% to 100% AI context in 0.5s. Same toolchain Claude Code ships on. Zero code changes. 35 Bun compatibility tests." />
	<meta property="og:title" content="Best Context Under the Bun - faf-cli v5.0.6" />
	<meta property="og:description" content="bunx faf-cli auto — 0% to 100% AI context in 0.5s. Zero code changes." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/best-context-under-the-bun-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/best-context-under-the-bun-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Best Context Under the Bun
		</div>
		<h1>Best Context Under the Bun</h1>
		<p class="subtitle">bunx faf-cli auto — 0% to 100% in 0.5s</p>
		<div class="meta">
			<time datetime="2026-03-13">March 13, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
			<span class="separator">•</span>
			<span class="version-tag">v5.0.6</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/best-context-under-the-bun-hero.png" alt="Now you can have a bun with your brew — croissant and DotFaf coffee mug" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> CLAUDE.md is prose. <code>project.faf</code> is the specification layer — structured, scored, synced in 10ms. IANA-registered format. Now verified on Bun with 35 compatibility tests. Zero code changes.
			</p>
		</section>

		<section>
			<h2>MD explains. FAF defines. AI consumes.</h2>

			<p>Anthropic bought Bun. Claude Code ships as a Bun single-file executable. <code>faf-cli</code> runs inside Claude Code. We aligned.</p>

			<p>Result: every <code>faf-cli</code> command works through <code>bunx</code> out of the box. The compiled <code>dist/</code> is CommonJS — Bun handles it natively. No code changes. No shims. No polyfills.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyCommand('bunx faf-cli auto', 0)}>
				<code class="copy-code">bunx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 0 ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box alt" onclick={() => copyCommand('npx faf-cli auto', 1)}>
				<code class="copy-code">npx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 1 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>One command: scans your project, creates <code>project.faf</code>, syncs <code>CLAUDE.md</code>, scores AI-readiness. No install.</p>

			<p>More commands:</p>

			<div class="copy-box" onclick={() => copyCommand('bunx faf-cli git https://github.com/facebook/react', 2)}>
				<code class="copy-code">bunx faf-cli git &lt;url&gt;</code>
				<button class="copy-btn">{copiedIndex === 2 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Instant context for any GitHub repo. No clone. 2 seconds.</p>

			<div class="copy-box" onclick={() => copyCommand('bunx faf-cli bi-sync', 3)}>
				<code class="copy-code">bunx faf-cli bi-sync</code>
				<button class="copy-btn">{copiedIndex === 3 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Keeps <code>project.faf</code> ↔ <code>CLAUDE.md</code> in sync. ~10ms.</p>
		</section>

		<section>
			<h2>Three Install Paths</h2>

<pre><code>{`bunx faf-cli auto                  # Bun
npx faf-cli auto                   # npm
brew install faf-cli && faf auto   # Homebrew`}</code></pre>

			<p>All three download from the npm registry. Same package. Same counter.</p>

			<div class="insight-box">
				<h3>Now you can have a bun with your brew.</h3>
				<p>🥐 ☕️</p>
			</div>
		</section>

		<section>
			<h2>The Dog-Food</h2>

			<p>We ran <code>bunx faf-cli auto</code> on faf-cli itself:</p>

			<ul>
				<li><strong>14 formats</strong> detected by TURBO-CAT</li>
				<li><strong>Full stack analysis</strong> — CLI/TypeScript/tsc/npm/Node.js</li>
				<li><strong>100% Trophy</strong> — Gold Code</li>
				<li><strong>0.5 seconds</strong></li>
			</ul>
		</section>

		<section>
			<h2>35 Bun Compatibility Tests</h2>

			<p>WJTTC Bun suite — 5 tiers, all passing:</p>

			<ul>
				<li><strong>Tier 1 (Brake):</strong> Top 6 commands via bunx</li>
				<li><strong>Tier 2 (Engine):</strong> Zero native addons + Node.js API compat</li>
				<li><strong>Tier 3 (Aero):</strong> Sub-second performance on every command</li>
				<li><strong>Tier 4 (Telemetry):</strong> bun.lockb + bunfig.toml detection</li>
				<li><strong>Tier 5 (Championship):</strong> Dog-food — 100% Trophy via Bun</li>
			</ul>

			<p>The only native addon in the entire dependency tree is <code>fsevents</code> — a macOS-only optional dev dependency from Jest. Not a runtime dependency. Not loaded by faf-cli. Waved right past.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.0.6</strong> — Released March 13, 2026</li>
				<li><strong>1,143/1,143</strong> — Tests passing (50 suites)</li>
				<li><strong>35</strong> — Bun compatibility tests (new)</li>
				<li><strong>100%</strong> — Trophy score (Gold Code)</li>
				<li><strong>0.5s</strong> — bunx faf-cli auto (dog-food)</li>
				<li><strong>64</strong> — CLI commands</li>
				<li><strong>0</strong> — Code changes for Bun compat</li>
			</ul>
		</section>

		<section>
			<h2>What's Next</h2>
			<p>Phase 2: <code>bun build --compile</code> → standalone binary. Same way Claude Code ships. Single file, zero dependencies, Homebrew distribution.</p>
		</section>

		<section>
			<h2>Related</h2>
			<p><a href="/blog/faf-auto-edition">The faf auto Edition</a> — the command that started the 0.5s story.</p>
			<p><a href="/blog/claude-md-not-a-foundation">Your CLAUDE.md Is Not a Foundation</a> — why structured context beats prose.</p>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?url=https://faf.one/blog/best-context-under-the-bun" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Best context under the Bun. 🥐 ☕️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8 !important;
		color: #333 !important;
	}

	:global(html) {
		background: #FEFCF8 !important;
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
		background: #fff5f0;
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
		font-size: 1.5rem;
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

	.copy-btn:hover {
		background: rgba(255, 107, 53, 0.3);
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
