<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The FAFb Edition - faf-cli v5.1.0 | FAF</title>
	<meta name="description" content="faf compile turns your .faf into a sealed binary. Mk4 slot renames, tri-sync topic files, 684→164 line README. Built for solo devs and Fortune 500s alike." />
	<meta property="og:title" content="The FAFb Edition - faf-cli v5.1.0" />
	<meta property="og:description" content="faf compile turns your .faf into a sealed binary. Mk4 canonical names. Tri-sync topic files. Enterprise-ready." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/fafb-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/fafb-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The FAFb Edition
		</div>

		<h1>The FAFb Edition</h1>
		<p class="version-tag">faf-cli v5.1.0</p>
		<p class="subtitle">From solo dev to Fortune 500. One CLI. One format.</p>
		<div class="meta">
			<time datetime="2026-03-19">March 19, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/fafb-edition-hero.png" alt="faf compile flow: YAML .faf through DotFaf to sealed .fafb binary with CRC32. Solo dev to Fortune 500." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf compile</code> is now a first-class CLI command — no external toolchain needed. Plus: Mk4 canonical slot names, tri-sync topic files for Claude Code memory, and a README that went from 684 lines to 164. Built for the solo developer shipping at midnight and the enterprise team shipping at scale.
			</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>faf compile — Binary in One Command</h3>
			<p>
				Your <code>.faf</code> is YAML. Human-readable. AI-consumable. But YAML has overhead — parsing, whitespace, encoding. <code>faf compile</code> turns it into <code>.fafb</code>: a CRC32-sealed binary with a 32-byte header, section table, and deterministic output.
			</p>
			<p>
				Previously this required the Rust toolchain installed separately. Now it runs through the WASM scoring kernel — same compiler, zero dependencies.
			</p>

			<div class="terminal-block">
				<code>faf compile</code>
			</div>
			<div class="terminal-block">
				<code>faf decompile project.fafb</code>
			</div>

			<h3>Mk4 Slot Renames — Enterprise DNA</h3>
			<p>
				Six canonical slot names, aligned with the Mk4 scoring engine that powers every FAF runtime:
			</p>
			<ul>
				<li><code>frontend</code> → <code>framework</code></li>
				<li><code>css_framework</code> → <code>css</code></li>
				<li><code>state_management</code> → <code>state</code></li>
				<li><code>api_type</code> → <code>api</code></li>
				<li><code>database</code> → <code>db</code></li>
				<li><code>package_manager</code> → <code>pkg_manager</code></li>
			</ul>
			<p>
				Full backward compatibility. Old <code>.faf</code> files score identically. New files use the canonical names. The alias map is the single source of truth.
			</p>

			<h3>Tri-sync Topic Files — Claude Code Memory</h3>
			<p>
				<code>faf bi-sync</code> keeps <code>.faf</code> and <code>CLAUDE.md</code> in sync. Now <code>tri-sync</code> adds a third leg: Claude Code's native memory format.
			</p>
			<p>
				Six topic types — project, stack, context, preferences, key_files, state — each written as individual memory files with frontmatter. Your project DNA flows into Claude's persistent memory. Context that survives across conversations.
			</p>

			<h3>README — 684 Lines to 164</h3>
			<p>
				Enterprise documentation doesn't mean enterprise-length READMEs. We moved deep-dive content into <code>docs/</code> — Guide, Scoring, Sync, Testing, Skills, Ecosystem — and kept the README focused: install, commands, links. Same pattern as Vite, Astro, Tailwind.
			</p>
		</section>

		<section>
			<h2>The Enterprise Angle</h2>
			<p>
				FAF started as one developer solving their own problem. Now it scales to any team size:
			</p>
			<ul>
				<li><strong>Solo dev:</strong> <code>faf auto</code> — zero to 100% in one command</li>
				<li><strong>Small team:</strong> <code>faf bi-sync</code> — .faf and CLAUDE.md stay in sync, 8ms</li>
				<li><strong>Enterprise:</strong> Mk4 canonical names, compiled binaries, topic-file memory, structured docs</li>
			</ul>
			<p>
				Same CLI. Same format. Same IANA-registered MIME type. Whether you're shipping a side project or managing 500 repositories.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g faf-cli@5.1.0</code>
			</div>
			<div class="terminal-block">
				<code>bunx faf-cli compile</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.1.0</strong> — Released March 19, 2026</li>
				<li><strong>1,184/1,184</strong> — Tests passing (52 suites)</li>
				<li><strong>100%</strong> — Trophy score</li>
				<li><strong>36,000+</strong> — Downloads across 3 registries</li>
				<li><strong>169&#181;s</strong> — Average scoring engine on a 2017 iMac</li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=faf-cli%20v5.1.0%20%E2%80%94%20The%20FAFb%20Edition.%20faf%20compile%20turns%20.faf%20into%20sealed%20binary.%20Mk4%20slot%20renames.%20Tri-sync%20topic%20files.%201%2C184%20tests.&url=https://faf.one/blog/fafb-edition" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Solo to Fortune 500. One format. 🏎️
			</p>
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
		color: #666;
		margin: 0.5rem 0 1rem 0;
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
		background: #00B8B8;
		color: white;
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

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
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

	.terminal-block {
		background: #1a1a1a;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.terminal-block code {
		display: block;
		color: #00ff88;
		background: none;
		padding: 0.25rem 0;
		font-size: 1rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
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
