<script lang="ts">
	import { onMount } from 'svelte';

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
</script>

<svelte:head>
	<title>cargo add faf — The Rust Ecosystem | FAF</title>
	<meta name="description" content="FAF goes Rust. One crate, full ecosystem. Parse .faf files, stream context via Radio Protocol, run MCP servers. 232 tests across 5 crates." />
	<meta property="og:title" content="cargo add faf — The Rust Ecosystem" />
	<meta property="og:description" content="FAF goes Rust. One crate, full ecosystem. 232 tests, 5 crates, IANA-registered." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / cargo add faf
		</div>
		<h1>cargo add faf</h1>
		<p class="subtitle">One crate. Full ecosystem.</p>
		<div class="meta">
			<time datetime="2026-03-06">March 6, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category launch">Launch</span>
			<span class="separator">&bull;</span>
			<span class="reading-time">3 min read</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				FAF has a Rust ecosystem now. Five crates on crates.io, one meta-crate to rule them all.
				Parse .faf files, stream context via Radio Protocol, run MCP servers — all in Rust.
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

			<p>Need the Radio Protocol too?</p>

			<div class="install-block">
				<code>cargo add faf --features radio</code>
				<button onclick={() => copyText('cargo add faf --features radio', 'radio')} class="copy-btn">
					{copiedId === 'radio' ? 'Copied' : 'Copy'}
				</button>
			</div>
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
					<span class="crate-desc">Parse, validate, score, compile .faf files</span>
					<span class="crate-stat">137 tests</span>
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

			<p class="total-tests">232 tests across the ecosystem. All passing.</p>
		</section>

		<section>
			<h2>What You Can Build</h2>

			<div class="use-case-grid">
				<div class="use-case">
					<h4>Parse project DNA</h4>
					<p>Read any <code>.faf</code> file. Score it. Validate it. The same IANA-registered format used by 33,000+ projects.</p>
				</div>
				<div class="use-case">
					<h4>Stream context to every AI</h4>
					<p>Radio Protocol — broadcast your project context once, Claude + Grok + Gemini all receive it. Real-time WebSocket.</p>
				</div>
				<div class="use-case">
					<h4>Run an MCP server</h4>
					<p>Serve .faf context over Model Context Protocol. Same spec, Rust performance.</p>
				</div>
				<div class="use-case">
					<h4>Compile to FAFb binary</h4>
					<p>32-byte header, CRC32 integrity, 11 section types. The binary format for edge deployment.</p>
				</div>
			</div>
		</section>

		<section>
			<h2>Also: A Binary CLI</h2>

			<p>
				If you want the CLI rather than the library, there's a pre-built binary via Homebrew:
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
			<h2>Why It Matters</h2>
			<p>
				Every AI tool you use forgets you between sessions. Claude, Grok, Gemini — they all start from zero.
				You re-explain your stack, your architecture, your conventions. Every. Single. Time.
			</p>
			<p>
				FAF fixes that with a single file: <code>project.faf</code>. IANA-registered, 33,000+ downloads across the ecosystem,
				Anthropic MCP #2759. Your project DNA, readable by any AI.
			</p>
			<p>
				But the format is only half the story. The infrastructure — parsing at the edge, streaming context
				via Radio Protocol, serving over MCP — that needs to be fast. Really fast.
				That's why Rust.
			</p>
		</section>

		<section>
			<h2>Why Rust</h2>
			<p>
				FAF started in TypeScript. 51 versions, 14,000+ downloads. Free forever.
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
				<code>cargo add faf</code> is the starting line.
			</p>
		</section>

		<section>
			<h2>What Do You Want Next?</h2>
			<p>
				The Rust ecosystem is fresh. We're building what Rust developers actually need.
			</p>
			<p>
				Tower middleware? Axum extractors? <code>no_std</code> embedded support?
				A <code>faf!</code> proc macro? Tell us.
			</p>
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
				<li><a href="https://crates.io/crates/faf-rust-sdk">crates.io/crates/faf-rust-sdk</a> — SDK</li>
				<li><a href="https://crates.io/crates/faf-radio-rust">crates.io/crates/faf-radio-rust</a> — Radio Protocol</li>
				<li><a href="https://crates.io/crates/rust-faf-mcp">crates.io/crates/rust-faf-mcp</a> — MCP server</li>
				<li><a href="https://faf.one/pro">faf.one/pro</a> — FAF Pro (includes Rust CLI)</li>
				<li><a href="https://faf.one/downloads">faf.one/downloads</a> — All packages, all registries</li>
			</ul>
		</section>

		<section class="footer-note">
			<p class="closing-quote">RUST they said. FAF we replied. They are Grok. We delivered.</p>
			<p class="closing-tagline">FAF defines. AI interprets.</p>
		</section>
	</article>
</div>

<style>
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
		margin-bottom: 1.5rem;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
		color: #111;
		font-family: monospace;
	}

	.subtitle {
		font-size: 1.3rem;
		color: #555;
		margin-bottom: 1rem;
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
		background: rgba(255, 107, 53, 0.1);
		color: #FF6B35;
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
		color: #FF6B35;
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
		background: #fafafa;
		padding: 1.25rem;
		border-left: 4px solid #FF6B35;
		border-radius: 0 8px 8px 0;
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
		color: #00D4D4;
		padding: 0;
		font-size: 1rem;
	}

	.copy-btn {
		background: #FF6B35;
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
		background: #ff8555;
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
		border-left-color: #d7875f;
		transform: translateX(4px);
	}

	.crate-card.meta {
		border-left-color: #FF6B35;
		background: #fff8f4;
	}

	.crate-card.meta:hover {
		background: #fff0e8;
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
		background: #FF6B35;
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
		background: #fafafa;
		border: 1px solid #eee;
		border-radius: 8px;
		margin-top: 1rem;
	}

	.cta-link {
		background: #FF6B35;
		color: white !important;
		padding: 0.6rem 1.2rem;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none !important;
		transition: background 0.2s;
	}

	.cta-link:hover {
		background: #ff8555;
	}

	.cta-or {
		color: #999;
		font-size: 0.9rem;
	}

	/* Footer */
	.footer-note {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}

	.closing-quote {
		font-size: 1.2rem;
		font-weight: 700;
		color: #b87333;
		margin-bottom: 0.5rem;
		letter-spacing: 0.02em;
	}

	.closing-tagline {
		font-style: italic;
		color: #888;
		font-size: 1.1rem;
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
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
	}
</style>
