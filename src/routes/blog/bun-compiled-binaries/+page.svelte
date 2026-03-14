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
	<title>Compiled Binaries Edition - faf-cli v5.0.6 | FAF</title>
	<meta name="description" content="faf-cli now ships as standalone binaries. Zero runtime dependencies. One download, it works. Same pattern as Claude Code." />
	<meta property="og:title" content="Compiled Binaries Edition - faf-cli v5.0.6" />
	<meta property="og:description" content="Standalone binaries for macOS, Linux, and Windows. Zero runtime dependencies." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/bun-compiled-binaries-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/bun-compiled-binaries-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Compiled Binaries Edition
		</div>
		<h1>Compiled Binaries Edition</h1>
		<p class="version-tag">faf-cli v5.0.6</p>
		<p class="subtitle">One download. It works. Zero runtime dependencies.</p>
		<div class="meta">
			<time datetime="2026-03-14">March 14, 2026</time>
			<span class="separator">•</span>
			<span class="category">Milestone</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/bun-compiled-binaries-hero.png" alt="Rust defines, Bun delivers, WASM runs everywhere — DotFaf at center with platform icons" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli now compiles to standalone binaries for macOS, Linux, and Windows. No Node.js. No Bun. No npm. Download the binary, run it. Same distribution model as Claude Code.
			</p>
		</section>

		<section>
			<h2>What Changed</h2>
			<p>Bun's <code>bun build --compile</code> takes 800 modules of TypeScript and produces a single executable. The entire faf-cli — all 64 commands, the Mk3.1 scoring engine, bi-sync, TURBO-CAT, everything — in one file.</p>

			<div class="platform-grid">
				<div class="platform-card">
					<div class="platform-icon">&#63743;</div>
					<strong>macOS ARM64</strong>
					<span class="size">60 MB</span>
					<span class="arch">Apple Silicon</span>
				</div>
				<div class="platform-card">
					<div class="platform-icon">&#63743;</div>
					<strong>macOS x64</strong>
					<span class="size">66 MB</span>
					<span class="arch">Intel</span>
				</div>
				<div class="platform-card">
					<div class="platform-icon">&#128039;</div>
					<strong>Linux x64</strong>
					<span class="size">102 MB</span>
					<span class="arch">x86_64</span>
				</div>
				<div class="platform-card">
					<div class="platform-icon">&#9638;</div>
					<strong>Windows x64</strong>
					<span class="size">113 MB</span>
					<span class="arch">x86_64</span>
				</div>
			</div>
		</section>

		<section>
			<h2>Why This Matters</h2>
			<p>Before today, faf-cli required Node.js or Bun installed on your machine. That's a runtime dependency. It means:</p>
			<ul>
				<li>CI/CD pipelines need Node.js configured</li>
				<li>Docker images need a runtime layer</li>
				<li>New developers need to install npm first</li>
			</ul>
			<p>Now? Download the binary. Run it. Done.</p>

			<div class="insight-box">
				<h3>The Claude Code Pattern</h3>
				<p>Claude Code ships as a Bun compiled binary. faf-cli now does the same. Same toolchain, same distribution model, same developer experience.</p>
			</div>
		</section>

		<section>
			<h2>Verified</h2>
			<p>Every command was smoke-tested against the compiled binary:</p>

			<div class="check-grid">
				<div class="check-item"><span class="check">&#9745;</span> <code>faf init</code></div>
				<div class="check-item"><span class="check">&#9745;</span> <code>faf git &lt;url&gt;</code></div>
				<div class="check-item"><span class="check">&#9745;</span> <code>faf auto</code></div>
				<div class="check-item"><span class="check">&#9745;</span> <code>faf go</code></div>
				<div class="check-item"><span class="check">&#9745;</span> <code>faf bi-sync</code></div>
				<div class="check-item"><span class="check">&#9745;</span> <code>faf score</code></div>
			</div>

			<p>All six produce identical output to <code>bunx faf-cli</code>. The full test suite — 1,143 tests across 50 suites — passes clean.</p>
		</section>

		<section>
			<h2>Get It</h2>

			<p>Download from GitHub Release:</p>
			<div class="copy-box" onclick={() => copyText('curl -L https://github.com/Wolfe-Jam/faf-cli/releases/download/v5.0.6-bun/faf-darwin-arm64 -o faf && chmod +x faf', 'download')}>
				<code class="copy-code-multi">curl -L https://github.com/Wolfe-Jam/faf-cli/releases/<br/>download/v5.0.6-bun/faf-darwin-arm64 -o faf && chmod +x faf</code>
				<button class="copy-btn">{copiedId === 'download' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or install the traditional way:</p>
			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli', 'npm')}>
				<code class="copy-code">npm install -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'npm' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('bunx faf-cli auto', 'bunx')}>
				<code class="copy-code">bunx faf-cli auto</code>
				<button class="copy-btn">{copiedId === 'bunx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub Release</h3>
					<p>Download binaries for your platform.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v5.0.6-bun" class="cta-link">v5.0.6-bun Release</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install via package manager.</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">faf-cli</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.0.6</strong> — Released March 14, 2026</li>
				<li><strong>1,143/1,143</strong> — Tests passing</li>
				<li><strong>4 platforms</strong> — macOS ARM64/x64, Linux x64, Windows x64</li>
				<li><strong>800 modules</strong> — Bundled into one executable</li>
				<li><strong>100%</strong> — Trophy score</li>
			</ul>
		</section>

		<section>
			<h2>The Roadmap</h2>
			<p>This is Phase 2 of the Bun alignment strategy:</p>
			<ul>
				<li><strong>Phase 1</strong> — <code>bunx faf-cli auto</code> verified (done)</li>
				<li><strong>Phase 2</strong> — Compiled binaries (done, you're reading it)</li>
				<li><strong>Phase 3</strong> — <code>bun:ffi</code> to call Rust Mk4 natively</li>
				<li><strong>Phase 4</strong> — WASM Mk4 parity everywhere</li>
			</ul>
			<p>Rust defines. Bun delivers. WASM runs everywhere.</p>
		</section>

		<section class="share-section">
			<h2>Share</h2>
			<div class="share-buttons">
				<a href="https://twitter.com/intent/tweet?text=faf-cli%20now%20ships%20as%20standalone%20binaries.%20Zero%20runtime%20dependencies.%20Same%20pattern%20as%20Claude%20Code.&url=https://faf.one/blog/bun-compiled-binaries" target="_blank" rel="noopener" class="share-btn share-x">Post on X</a>
				<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://faf.one/blog/bun-compiled-binaries" target="_blank" rel="noopener" class="share-btn share-linkedin">Share on LinkedIn</a>
				<button class="share-btn share-copy" onclick={() => copyText('https://faf.one/blog/bun-compiled-binaries', 'share-link')}>
					{copiedId === 'share-link' ? 'Copied!' : 'Copy Link'}
				</button>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One download. It works. 🏎️</p>
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
		background: #FFD700;
		color: #111;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
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

	.platform-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.platform-card {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.25rem;
		text-align: center;
		color: #fff;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.platform-icon {
		font-size: 2rem;
		margin-bottom: 0.25rem;
	}

	.platform-card strong {
		font-size: 0.9rem;
	}

	.size {
		color: #00D4D4;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.arch {
		color: #888;
		font-size: 0.8rem;
	}

	.check-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
		margin: 1.5rem 0;
	}

	.check-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
	}

	.check {
		color: #00aa44;
		font-size: 1.2rem;
	}

	.check-item code {
		font-size: 0.85rem;
	}

	.insight-box {
		background: #f0fff0;
		border: 2px solid #00aa44;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00aa44;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.1rem;
		color: #006622;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
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
		font-size: 0.85rem;
		font-weight: 600;
		line-height: 1.6;
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
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	.share-section {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}

	.share-section h2 {
		font-size: 1.4rem;
		margin: 0 0 1rem 0;
		border: none;
		padding: 0;
	}

	.share-buttons {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: opacity 0.2s;
		border: none;
		font-family: inherit;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
	}

	.share-x {
		background: #000;
		color: #fff;
	}

	.share-linkedin {
		background: #0A66C2;
		color: #fff;
	}

	.share-copy {
		background: #f0f0f0;
		color: #333;
		border: 1px solid #ddd;
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

		.platform-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.check-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
