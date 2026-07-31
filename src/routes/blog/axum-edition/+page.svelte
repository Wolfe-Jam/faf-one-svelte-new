<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-rust-sdk v1.3.0 — The Axum Edition

One line to inject FAF project context into any Axum server. Feature-gated, parse once, inject everywhere.`;
	const shareUrl = 'https://faf.one/blog/axum-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Axum Edition - faf-rust-sdk v1.3.0 | FAF</title>
	<meta name="description" content="One line to inject FAF project context into any Axum server. Feature-gated, parse once, inject everywhere." />
	<meta property="og:title" content="The Axum Edition - faf-rust-sdk v1.3.0" />
	<meta property="og:description" content="One line to inject FAF project context into any Axum server. Feature-gated, parse once, inject everywhere." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Axum Edition
		</div>

		<h1>The Axum Edition</h1>
		<p class="version-tag">faf-rust-sdk v1.3.0</p>
		<p class="subtitle">Parse once, inject everywhere.</p>
		<div class="meta">
			<time datetime="2026-03-07">March 7, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> One line to add FAF project context to any Axum server. Feature-gated behind <code>axum</code> &mdash; zero impact when off. Your <code>.faf</code> is parsed once at startup, shared via Arc. Per-request cost: one atomic increment.
			</p>
		</section>

		<section>
			<h2>The One-Liner</h2>

			<pre><code>{`use axum::{Router, routing::get};
use faf_rust_sdk::axum::{FafLayer, FafContext};

let app = Router::new()
    .route("/", get(handler))
    .layer(FafLayer::new());

async fn handler(faf: FafContext) -> String {
    format!("Project: {}", faf.project_name())
}`}</code></pre>

			<p>That's it. Every route in your app now has access to your project DNA.</p>
		</section>

		<section>
			<h2>No Feature Is the Feature</h2>

			<p>The Axum integration is behind a Cargo feature flag:</p>

			<pre><code>{`[features]
default = []
axum = ["dep:axum", "dep:tower", "dep:http"]`}</code></pre>

			<p><code>default = []</code>. If you just want to parse <code>.faf</code> files, you get zero extra dependencies. The entire Axum module compiles out. This is how sqlx, reqwest, and tracing do it &mdash; the Rust ecosystem convention.</p>

			<p>When you opt in:</p>

			<div class="copy-box" onclick={() => copyText('faf-rust-sdk = { version = "1.3", features = ["axum"] }', 'dep')}>
				<code class="copy-code">{`faf-rust-sdk = { version = "1.3", features = ["axum"] }`}</code>
				<button class="copy-btn">{copiedId === 'dep' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>You get <code>FafContext</code>, <code>FafLayer</code>, <code>FafLayerBuilder</code> &mdash; ~240 lines of code. Not because the problem is simple, but because the foundation is solid. The SDK already handles discovery, parsing, validation, and compression. The Axum layer is a thin Arc wrapper around what already works.</p>
		</section>

		<section>
			<h2>What You Get</h2>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>Type</th><th>What</th></tr>
					</thead>
					<tbody>
						<tr><td><code>FafContext</code></td><td>Axum extractor &mdash; delegates <code>.project_name()</code>, <code>.score()</code>, <code>.data()</code>, etc.</td></tr>
						<tr><td><code>FafLayer</code></td><td>Tower Layer &mdash; injects context into every request via Extension</td></tr>
						<tr><td><code>FafLayerBuilder</code></td><td>Builder with <code>.dir()</code>, <code>.compression()</code>, <code>.validate()</code></td></tr>
					</tbody>
				</table>
			</div>

			<p><code>FafLayer::new()</code> discovers and parses your <code>.faf</code> at startup. If it's missing, the server panics immediately &mdash; fail at boot, not at request time. Use <code>FafLayer::builder().try_build()</code> for graceful error handling.</p>
		</section>

		<section>
			<h2>The Builder</h2>

			<p>For more control:</p>

			<pre><code>{`use faf_rust_sdk::axum::FafLayer;
use faf_rust_sdk::CompressionLevel;

let layer = FafLayer::builder()
    .dir("./my-project")
    .compression(CompressionLevel::Minimal)
    .try_build()?;`}</code></pre>

			<p>Pre-compute compressed context at startup. Serve minimal tokens per request. The builder pattern Rust devs expect.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('cargo add faf-rust-sdk --features axum', 'install')}>
				<code class="copy-code">cargo add faf-rust-sdk --features axum</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-rust-sdk" class="cta-link">faf-rust-sdk</a>
				</div>
				<div class="cta-box">
					<h3>crates.io</h3>
					<p>Install the latest version.</p>
					<a href="https://crates.io/crates/faf-rust-sdk" class="cta-link">faf-rust-sdk</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v1.3.0</strong> &mdash; Released March 7, 2026</li>
				<li><strong>145/145</strong> &mdash; Tests passing (+8 Axum integration)</li>
				<li><strong>~240 lines</strong> &mdash; Entire middleware module</li>
				<li><strong>1 Arc::clone</strong> &mdash; Per-request cost</li>
				<li><strong>0 deps added</strong> &mdash; When feature is off</li>
			</ul>
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
		background: #FF6B35;
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

	.api-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.api-table table {
		width: 100%;
		border-collapse: collapse;
	}

	.api-table th, .api-table td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	.api-table th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.api-table td code {
		font-size: 0.85em;
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

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
