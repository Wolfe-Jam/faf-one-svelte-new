<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🦀 In Rust We Trust — FAF Goes All-In

5 crates, 240 tests, Axum middleware, FAFb binary, Radio Protocol.

One install: cargo add faf`;
	const shareUrl = 'https://faf.one/blog/in-rust-we-trust';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>In Rust We Trust — FAF Goes All-In | FAF</title>
	<meta name="description" content="FAF goes all-in on Rust. 5 crates, 240 tests, Axum middleware, FAFb binary, Radio Protocol. One install: cargo add faf." />
	<meta property="og:title" content="In Rust We Trust — FAF Goes All-In" />
	<meta property="og:description" content="5 crates, 240 tests, Axum middleware, FAFb binary. One install: cargo add faf." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="hero-banner">
	<div class="hero-content">
		<div class="hero-icons"><span class="hero-crab">🦀</span><img src="/images/dotfaf.png" alt="DotFaf" class="hero-dotfaf" /></div>
		<h1 class="hero-title">In Rust We Trust</h1>
		<p class="hero-subtitle">.FAF Goes All-In</p>
		<div class="hero-stats">
			<span class="stat">5 crates</span>
			<span class="stat-dot"></span>
			<span class="stat">240 tests</span>
			<span class="stat-dot"></span>
			<span class="stat">0 failures</span>
		</div>
	</div>
</div>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / In Rust We Trust
		</div>
		<div class="meta">
			<time datetime="2026-03-07">March 7, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category launch">Launch</span>
			<span class="separator">&bull;</span>
			<span class="reading-time">4 min read</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				FAF has a Rust ecosystem now. Five crates on crates.io, one meta-crate to rule them all.
				Parse .faf files, stream context via Radio Protocol, inject into Axum servers, run MCP servers — all in Rust.
			</p>
		</section>

		<section>
			<h2>One Install</h2>

			<div class="install-block">
				<code>cargo add faf</code>
				<button onclick={() => copyText('cargo add faf', 'install')} class="copy-btn">
					{copiedId === 'install' ? 'Copied' : 'Copy'}
				</button>
			</div>

			<p>That gives you the full SDK — parse, validate, score, and compile <code>.faf</code> files.</p>

			<p>Need more?</p>

			<div class="install-block">
				<code>cargo add faf --features axum</code>
				<button onclick={() => copyText('cargo add faf --features axum', 'axum')} class="copy-btn">
					{copiedId === 'axum' ? 'Copied' : 'Copy'}
				</button>
			</div>

			<p>Need even more?</p>

			<div class="install-block">
				<code>cargo add faf --features radio</code>
				<button onclick={() => copyText('cargo add faf --features radio', 'radio')} class="copy-btn">
					{copiedId === 'radio' ? 'Copied' : 'Copy'}
				</button>
			</div>

			<p>Feature flags. Pay for what you use. Zero deps when off.</p>
		</section>

		<section>
			<h2>The Ecosystem</h2>

			<div class="crate-grid">
				<a href="https://crates.io/crates/faf" target="_blank" rel="noopener" class="crate-card meta">
					<span class="crate-name">faf</span>
					<span class="crate-desc">Meta-crate — one install, full ecosystem</span>
					<span class="crate-badge">start here</span>
				</a>
				<a href="https://crates.io/crates/faf-rust-sdk" target="_blank" rel="noopener" class="crate-card">
					<span class="crate-name">faf-rust-sdk</span>
					<span class="crate-desc">Parse, validate, score, compile + Axum middleware</span>
					<span class="crate-stat">145 tests</span>
				</a>
				<a href="https://crates.io/crates/faf-radio-rust" target="_blank" rel="noopener" class="crate-card">
					<span class="crate-name">faf-radio-rust</span>
					<span class="crate-desc">Radio Protocol — broadcast once, every AI receives</span>
					<span class="crate-stat">46 tests</span>
				</a>
				<a href="https://crates.io/crates/rust-faf-mcp" target="_blank" rel="noopener" class="crate-card">
					<span class="crate-name">rust-faf-mcp</span>
					<span class="crate-desc">MCP server for .faf — Model Context Protocol</span>
					<span class="crate-stat">49 tests</span>
				</a>
			</div>

			<p class="total-tests">240 tests across the ecosystem. All passing. &#9745;</p>
		</section>

		<section>
			<h2>&#9889; Just Shipped: Axum Middleware</h2>

			<p>One line to inject FAF project context into any Axum server:</p>

			<pre><code>{`.layer(FafLayer::new())`}</code></pre>

			<p>
				Feature-gated behind <code>axum</code>. Your <code>.faf</code> is parsed once at startup,
				shared via Arc. Per-request cost: one atomic increment. ~240 lines of strategically-placed code.
			</p>

			<p><a href="/blog/axum-edition">Read the full Axum Edition post &rarr;</a></p>
		</section>

		<section>
			<h2>What You Can Build</h2>

			<div class="use-case-grid">
				<div class="use-case">
					<h4>🔍 Parse project DNA</h4>
					<p>Read any <code>.faf</code> file. Score it. Validate it. The same IANA-registered format used by 33,000+ projects.</p>
				</div>
				<div class="use-case">
					<h4>📡 Stream context to every AI</h4>
					<p>Radio Protocol — broadcast your project context once, Claude + Grok + Gemini all receive it. Real-time WebSocket.</p>
				</div>
				<div class="use-case">
					<h4>🔌 Run an MCP server</h4>
					<p>Serve .faf context over Model Context Protocol. Same spec, Rust performance.</p>
				</div>
				<div class="use-case">
					<h4>📦 Compile to FAFb binary</h4>
					<p>32-byte header, CRC32 integrity, 11 section types. The binary format for edge deployment.</p>
				</div>
				<div class="use-case">
					<h4>🦀 Axum middleware</h4>
					<p>Inject <code>.faf</code> context into every HTTP request. Tower Layer, Axum extractor, builder pattern.</p>
				</div>
				<div class="use-case">
					<h4>🍺 Homebrew CLI</h4>
					<p>Pre-built binary, 569 tests. FAF Pro licensing. Compiles .faf to .fafb. <code>brew install</code> and go.</p>
				</div>
			</div>
		</section>

		<section>
			<h2>The Binary CLI</h2>

			<p>
				If you want the CLI rather than the library:
			</p>

			<div class="install-block">
				<code>brew install Wolfe-Jam/faf/rust-faf-cli</code>
				<button onclick={() => copyText('brew install Wolfe-Jam/faf/rust-faf-cli', 'brew')} class="copy-btn">
					{copiedId === 'brew' ? 'Copied' : 'Copy'}
				</button>
			</div>

			<p>
				569 tests. FAF Pro licensing. Compiles .faf to .fafb binary.
				Same key as the TypeScript CLI — one subscription unlocks everything.
			</p>
		</section>

		<section>
			<h2>Why Rust</h2>
			<p>
				FAF CLI started in TypeScript. 97 versions, 16,000+ downloads. Free forever.
			</p>
			<p>
				But the industry is moving. xAI built Grok's inference stack on Rust.
				Anthropic's MCP servers are being rewritten in Rust. Cloudflare Workers run Rust at 300+ edge locations.
				CLI tools that used to take seconds now start in milliseconds.
			</p>
			<p>
				When Grok needs your project context at inference speed, it won't wait for a Node process to spin up.
				It needs bytes on the wire, now. That's <code>faf-rust-sdk</code> compiling to FAFb binary.
				That's <code>faf-radio-rust</code> streaming over WebSocket. That's the edge.
			</p>
			<p>
				<strong><code>cargo add faf</code></strong> is the starting line.
			</p>
		</section>

		<section>
			<h2>The Compiler Pipeline</h2>

			<pre class="pipeline"><code>{`                     .faf (YAML)
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
     ┌─────────┐    ┌─────────┐    ┌─────────┐
     │  Rust   │    │   Zig   │    │   TS    │
     │  SDK    │    │  WASM   │    │  CLI    │
     └────┬────┘    └────┬────┘    └────┬────┘
          │              │              │
   ┌──────┴──────┐       │              │
   │             │       │              │
   ▼             ▼       ▼              ▼
┌───────┐  ┌────────┐ ┌───────┐  ┌─────────┐
│ .fafb │  │  WASM  │ │ WASM  │  │ Node /  │
│Binary │  │ 211KB  │ │ 2.7KB │  │ Browser │
└───────┘  └────────┘ └───────┘  └─────────┘`}</code></pre>

			<p>Three compilers. Four outputs. One format. IANA-registered.</p>
		</section>

		<section>
			<h2>What's Next</h2>
			<p>
				Axum is shipped. The Rust ecosystem is growing. Here's what's on the radar:
			</p>
			<ul>
				<li><code>no_std</code> embedded support — FAF on microcontrollers</li>
				<li>Actix-web / Tonic (gRPC) middleware</li>
				<li><code>faf!</code> proc macro — compile-time .faf validation</li>
				<li>More feature flags, same one-liner install</li>
			</ul>
			<div class="cta-box">
				<a href="https://github.com/Wolfe-Jam/faf-rust-sdk/discussions" target="_blank" rel="noopener" class="cta-link">
					Open a discussion on GitHub
				</a>
				<span class="cta-or">or</span>
				<a href="mailto:team@faf.one" class="cta-link">
					team@faf.one
				</a>
			</div>
		</section>

		<section>
			<h2>Links</h2>
			<ul class="link-list">
				<li><a href="https://crates.io/crates/faf">crates.io/crates/faf</a> — Meta-crate</li>
				<li><a href="https://crates.io/crates/faf-rust-sdk">crates.io/crates/faf-rust-sdk</a> — SDK + Axum</li>
				<li><a href="https://crates.io/crates/faf-radio-rust">crates.io/crates/faf-radio-rust</a> — Radio Protocol</li>
				<li><a href="https://crates.io/crates/rust-faf-mcp">crates.io/crates/rust-faf-mcp</a> — MCP server</li>
				<li><a href="https://faf.one/rust">faf.one/rust</a> — Rust CLI (Pro)</li>
				<li><a href="https://faf.one/downloads">faf.one/downloads</a> — All packages, all registries</li>
				<li><a href="/blog/axum-edition">The Axum Edition</a> — Middleware deep-dive</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p class="closing-quote">🦀 In Rust We Trust ⚡</p>
			<p class="closing-tagline">FAF defines. AI interprets.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	/* Hero Banner */
	.hero-banner {
		background: linear-gradient(135deg, #1a0f0a 0%, #2a1510 30%, #3d1e14 60%, #4a2518 100%);
		padding: 4rem 1.5rem;
		text-align: center;
		margin-bottom: 0;
		border-bottom: 4px solid #d84520;
	}

	.hero-content {
		max-width: 720px;
		margin: 0 auto;
	}

	.hero-icons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 1rem;
	}

	.hero-crab {
		font-size: 3.5rem;
		animation: float 3s ease-in-out infinite;
	}

	.hero-dotfaf {
		width: 80px;
		height: 80px;
		animation: float 3s ease-in-out infinite;
		animation-delay: 0.5s;
		filter: drop-shadow(0 4px 15px rgba(255, 107, 53, 0.4));
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}

	.hero-title {
		font-size: 3rem;
		font-weight: 900;
		color: #d84520;
		margin: 0;
		letter-spacing: 0.03em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		text-shadow: 0 2px 20px rgba(215, 135, 95, 0.3);
	}

	.hero-subtitle {
		font-size: 1.4rem;
		color: #b87333;
		margin: 0.5rem 0 1.5rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.hero-stats {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.stat {
		color: #e8c5a8;
		font-family: monospace;
		font-size: 1rem;
		font-weight: 600;
	}

	.stat-dot {
		width: 6px;
		height: 6px;
		background: #d84520;
		border-radius: 50%;
	}

	/* Blog Post */
	.blog-post {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
	}

	.post-header {
		margin-bottom: 2.5rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #d84520;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #888;
	}

	.separator {
		color: #ccc;
	}

	.category {
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.category.launch {
		background: rgba(215, 135, 95, 0.15);
		color: #d84520;
	}

	.reading-time {
		color: #999;
	}

	.post-content {
		font-size: 1.05rem;
		line-height: 1.7;
		color: #222;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	.post-content h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #111;
	}

	.post-content p {
		margin-bottom: 1rem;
	}

	.post-content a {
		color: #d84520;
		text-decoration: none;
	}

	.post-content a:hover {
		text-decoration: underline;
	}

	.post-content code {
		background: #f4f4f4;
		padding: 0.15rem 0.4rem;
		border-radius: 3px;
		font-size: 0.9em;
		font-family: monospace;
	}

	.intro {
		margin-bottom: 2rem;
	}

	.lead {
		font-size: 1.15rem;
		background: #faf6f2;
		padding: 1.25rem;
		border-left: 4px solid #d84520;
		border-radius: 0 8px 8px 0;
	}

	pre {
		background: #1a1a1a;
		color: #d84520;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
		font-family: monospace;
	}

	pre code {
		background: none;
		padding: 0;
		font-size: inherit;
	}

	pre.pipeline {
		color: #d84520;
		font-size: 0.75rem;
		line-height: 1.4;
	}

	/* Install blocks */
	.install-block {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: #1a1a1a;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		margin-bottom: 1rem;
	}

	.install-block code {
		flex: 1;
		background: none;
		color: #d84520;
		padding: 0;
		font-size: 1rem;
	}

	.copy-btn {
		background: #d84520;
		color: white;
		border: none;
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: 600;
		transition: background 0.2s;
	}

	.copy-btn:hover {
		background: #e09970;
	}

	/* Crate grid */
	.crate-grid {
		display: grid;
		gap: 0.75rem;
		margin: 1rem 0;
	}

	.crate-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.25rem;
		background: #fafafa;
		border: 1px solid #eee;
		border-left: 4px solid #b87333;
		border-radius: 0 8px 8px 0;
		text-decoration: none;
		transition: all 0.2s;
	}

	.crate-card:hover {
		background: #f5f0ec;
		border-left-color: #d84520;
		transform: translateX(4px);
	}

	.crate-card.meta {
		border-left-color: #d84520;
		background: #faf6f2;
	}

	.crate-card.meta:hover {
		background: #f5ece4;
	}

	.crate-name {
		font-weight: 700;
		color: #111;
		min-width: 140px;
		font-family: monospace;
	}

	.crate-desc {
		flex: 1;
		color: #555;
		font-size: 0.9rem;
	}

	.crate-stat {
		font-size: 0.8rem;
		color: #888;
		white-space: nowrap;
	}

	.crate-badge {
		font-size: 0.75rem;
		background: #d84520;
		color: white;
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		font-weight: 600;
		white-space: nowrap;
	}

	.total-tests {
		text-align: center;
		color: #888;
		font-size: 0.95rem;
		font-style: italic;
	}

	/* Use cases */
	.use-case-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 1rem 0;
	}

	.use-case {
		padding: 1.25rem;
		background: #fafafa;
		border: 1px solid #eee;
		border-radius: 8px;
		transition: border-color 0.2s;
	}

	.use-case:hover {
		border-color: #d84520;
	}

	.use-case h4 {
		margin-bottom: 0.5rem;
		color: #111;
		font-size: 1rem;
	}

	.use-case p {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 0;
	}

	/* Link list */
	.link-list {
		list-style: none;
		padding: 0;
	}

	.link-list li {
		padding: 0.5rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.link-list li:last-child {
		border-bottom: none;
	}

	/* CTA box */
	.cta-box {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 1.5rem;
		background: #faf6f2;
		border: 1px solid #e8d5c4;
		border-radius: 8px;
		margin-top: 1rem;
	}

	.cta-link {
		background: #d84520;
		color: white !important;
		padding: 0.6rem 1.2rem;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none !important;
		transition: background 0.2s;
	}

	.cta-link:hover {
		background: #e09970;
	}

	.cta-or {
		color: #999;
		font-size: 0.9rem;
	}

	/* Footer */
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
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}

	.closing-quote {
		font-size: 1.4rem;
		font-weight: 800;
		color: #d84520;
		margin-bottom: 0.5rem;
		letter-spacing: 0.03em;
	}

	.closing-tagline {
		font-style: italic;
		color: #888;
		font-size: 1.1rem;
	}

	@media (max-width: 640px) {
		.hero-title {
			font-size: 2rem;
		}

		.hero-subtitle {
			font-size: 1.1rem;
		}

		.hero-crab {
			font-size: 3rem;
		}

		.crate-card {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}

		.crate-name {
			min-width: auto;
		}

		.use-case-grid {
			grid-template-columns: 1fr;
		}

		.hero-stats {
			flex-direction: column;
			gap: 0.5rem;
		}

		.stat-dot {
			display: none;
		}
	}
</style>
