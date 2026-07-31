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
	const shareText = `🏁 MCPaaS hits crates.io — Radio Protocol for Rust

Persistent AI context for Rust. Broadcast once, every AI receives. 46 tests, championship-grade. Zero drift.`;
	const shareUrl = 'https://faf.one/blog/mcpaas-crates-io';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>MCPaaS Hits crates.io — Radio Protocol for Rust | FAF</title>
	<meta name="description" content="mcpaas is on crates.io — a Rust SDK for persistent AI context. Broadcast once, every AI receives. 46 tests, 3-tier WJTTC coverage." />
	<meta property="og:title" content="MCPaaS Hits crates.io — Radio Protocol for Rust" />
	<meta property="og:description" content="Persistent AI context for Rust. Broadcast once, every AI receives. 46 tests, championship-grade." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / MCPaaS Hits crates.io
		</div>
		<h1>MCPaaS Hits crates.io</h1>
		<p class="subtitle">Radio Protocol for Rust. 46 tests. Zero drift.</p>
		<div class="meta">
			<time datetime="2026-03-04">March 4, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <a href="https://crates.io/crates/mcpaas">mcpaas</a> is on crates.io.
				A Rust SDK for persistent AI context that follows you across Claude, Gemini, and Grok.
				Broadcast once, every AI receives. No more re-explaining your stack every session.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>
			<p>
				You explain your stack to Claude. Switch to Gemini — explain it again.
				Open Cursor — again. Every session. Every tool. Every time.
			</p>
			<p>That's the <strong>drift tax</strong>.</p>
		</section>

		<section>
			<h2>The Fix: Radio Protocol</h2>
			<p>MCPaaS uses the Radio Protocol — broadcast once, every AI receives.</p>

			<pre><code>Traditional (the tax):
  You → Claude  (send 50KB context)
  You → Grok    (send 50KB again)
  You → Gemini  (send 50KB again)
  = 3x cost, 3x latency, context drift

Radio Protocol (the fix):
  You → Broadcast to 91.0 FM (send once)
  Claude  ← tuned to 91.0
  Grok    ← tuned to 91.0
  Gemini  ← tuned to 91.0
  = 1x cost, instant, zero drift</code></pre>
		</section>

		<section>
			<h2>Try It</h2>

			<p>Add to your <code>Cargo.toml</code>:</p>

			<div class="copy-box" role="button" tabindex="0"
				onclick={()=> copyText('mcpaas = "0.1"\ntokio = { version = "1", features = ["full"] }', 'deps')}
				onkeydown={(e) => e.key === 'Enter' && copyText('mcpaas = "0.1"\ntokio = { version = "1", features = ["full"] }', 'deps')}>
				<span class="copy-code-multi">
					<span class="code-comment">[dependencies]</span><br/>
					mcpaas = "0.1"<br/>
					tokio = {`{ version = "1", features = ["full"] }`}
				</span>
				<button class="copy-btn">{copiedId === 'deps' ? 'Copied' : 'Copy'}</button>
			</div>

			<p>Connect and tune:</p>

			<pre><code>use mcpaas::{`{RadioClient, RadioConfig}`};

#[tokio::main]
async fn main() -> Result&lt;(), Box&lt;dyn std::error::Error&gt;&gt; {`{
    let mut radio = RadioClient::new(
        RadioConfig::new("wss://mcpaas.live/beacon/radio")
    );

    radio.connect().await?;
    radio.tune(vec!["91.0".to_string()]).await?;

    // Your context arrives — from any AI, any session
    tokio::time::sleep(tokio::time::Duration::from_secs(30)).await;

    radio.disconnect().await?;
    Ok(())
}`}</code></pre>

			<p>That's it. Your context persists. Zero drift.</p>
		</section>

		<section>
			<h2>Multi-AI in 10 Lines</h2>
			<p>Three AIs, one frequency, shared context:</p>

			<pre><code>let mut claude = RadioClient::new(RadioConfig::new(url));
let mut grok   = RadioClient::new(RadioConfig::new(url));
let mut gemini = RadioClient::new(RadioConfig::new(url));

claude.tune(vec!["91.0".to_string()]).await?;
grok.tune(vec!["91.0".to_string()]).await?;
gemini.tune(vec!["91.0".to_string()]).await?;

// All three AIs now share the same context, in real time</code></pre>
		</section>

		<section>
			<h2>What's Under the Hood</h2>
			<ul>
				<li><strong>Tokio async</strong> — non-blocking WebSocket connections</li>
				<li><strong>Auto-reconnect</strong> — exponential backoff, no manual retries</li>
				<li><strong>Heartbeat</strong> — ping/pong every 30s keeps connections alive</li>
				<li><strong>Frequency validation</strong> — 40.0-108.0 FM range, type-safe</li>
				<li><strong>Rust 2024 edition</strong> — latest and greatest</li>
			</ul>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v0.1.0</strong> — Live on crates.io</li>
				<li><strong>46/46</strong> — Tests passing</li>
				<li><strong>3-tier</strong> — WJTTC Championship-Grade coverage</li>
				<li><strong>T1 BRAKES</strong> — 14 security tests</li>
				<li><strong>T2 ENGINE</strong> — 18 core functionality tests</li>
				<li><strong>T3 AERO</strong> — 12 edge case tests</li>
			</ul>
		</section>

		<section>
			<h2>Links</h2>
			<ul>
				<li><a href="https://crates.io/crates/mcpaas">crates.io/crates/mcpaas</a></li>
				<li><a href="https://github.com/Wolfe-Jam/faf-radio-rust">GitHub</a></li>
				<li><a href="https://docs.rs/mcpaas">docs.rs/mcpaas</a></li>
				<li><a href="https://mcpaas.live">mcpaas.live</a></li>
			</ul>
		</section>

		<section>
			<h2>See Also</h2>
			<p>
				<a href="https://crates.io/crates/faf-rust-sdk">faf-rust-sdk</a> — Parse, validate, and compress .faf files in Rust.
				MCPaaS broadcasts the context; faf-rust-sdk reads the format.
				<strong>One reads, the other delivers.</strong>
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
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
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
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

	.category.launch {
		background: #CE422B;
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
		background: var(--faf-surface)5f0;
		border-radius: 8px;
		border-left: 4px solid #CE422B;
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
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

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
