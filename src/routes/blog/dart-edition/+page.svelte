<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>Run It, Don't Grep It — The Dart Edition | FAF</title>
	<meta name="description" content="A Dart and Flutter expert grepped gemini-faf-mcp's source for 'Flutter', found none, and called it. He was right about the gap — and gemini-faf-mcp 2.5.0 closed it." />
	<meta property="og:title" content="Run It, Don't Grep It — The Dart Edition" />
	<meta property="og:description" content="He grepped for 'Flutter' and found nothing. He was right about the gap. Here's the receipt: gemini-faf-mcp 2.5.0 now reads your pubspec." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/dart-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/dart-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Run It, Don't Grep It
		</div>

		<h1>Run It, Don't Grep It</h1>
		<p class="version-tag">The Dart Edition &middot; gemini-faf-mcp 2.5.0 &middot; faf-python-sdk 1.2.0</p>
		<p class="subtitle">A Dart and Flutter expert grepped the source for "Flutter", found none, and called it. He was right — about the gap.</p>
		<div class="meta">
			<time datetime="2026-06-16">June 16, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/dart-edition-hero.png" alt="The Dart Edition — gemini-faf-mcp 2.5.0 reads a pubspec.yaml and writes Dart and Flutter into the .faf." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> A Google Developer Expert in Dart and Flutter searched our server's source for "Flutter", found nothing, and concluded it didn't understand Dart projects. He was right about the gap — and it's now closed. <strong>gemini-faf-mcp now understands Dart and Flutter projects.</strong>
			</p>
		</section>

		<section>
			<h2>The Grep</h2>
			<p>It started on r/google_antigravity. A Dart and Flutter Google Developer Expert — the kind of engineer who reads the source before he trusts a tool — saw gemini-faf-mcp in a showcase and did exactly that. He grepped it for <code>Flutter</code>. Nothing. <code>pubspec</code>? Nothing. Verdict: it knows nothing about Dart or Flutter.</p>
			<p>He wasn't wrong. At that moment, you could point gemini-faf-mcp at a Flutter app and the language slot came back unset — it couldn't tell a Flutter app from a Dart CLI from a plain package. A real gap, found by a real expert, in public.</p>
		</section>

		<section>
			<h2>Two Things Were True</h2>
			<p><strong>First:</strong> the gap was real, and we owned it. No spin.</p>
			<p><strong>Second:</strong> the grep was looking in the wrong place — and that part is worth explaining. FAF doesn't carry a hardcoded table of frameworks to match your repo against. It reads <em>your</em> project and writes down what's actually there. So searching the server's source for "Flutter" was never going to find a verdict — the verdict comes from your <code>pubspec.yaml</code>, at runtime. <strong>Run it, don't grep it.</strong></p>
			<p>And there's a deeper reason "Flutter" wasn't in the server at all: the detection doesn't live in the server. It lives in the SDK every FAF server is built on — one detector, composed by all of them, not five hand-maintained copies drifting apart. That's why the grep came up empty, and it's exactly the design that let us close the gap everywhere at once.</p>
		</section>

		<section>
			<h2>The Receipt</h2>
			<p>So we shipped it.</p>
			<p>Detects Dart/Flutter from a <code>pubspec.yaml</code> — Flutter app vs package &middot; Dart MCP / backend / CLI / library — by composing faf-python-sdk's detector, the shared engine, not a fork. Zero-Config, 12 exact tools.</p>
			<p>The detector ships in <strong>faf-python-sdk 1.2.0</strong>, and it isn't a Python rewrite that drifts from the CLI — it's <strong>parity-tested byte-for-byte against faf-cli's engine on 20 shared fixtures</strong>. Same input, same answer, in both languages, proven by test. <strong>gemini-faf-mcp 2.5.0</strong> composes it. And pure Dart stays Dart — it won't guess Flutter just because it saw a pubspec.</p>
		</section>

		<section>
			<h2>Try It</h2>
			<p>Point it at any Dart or Flutter project and run <code>faf_auto</code> — the <code>.faf</code> comes back knowing what it's looking at:</p>
			<pre><code>uvx gemini-faf-mcp
# or: pip3 install gemini-faf-mcp</code></pre>
		</section>

		<section>
			<h2>The Receipts</h2>
			<ul>
				<li><strong>gemini-faf-mcp 2.5.0</strong> &mdash; The Dart Edition, live on PyPI</li>
				<li><strong>faf-python-sdk 1.2.0</strong> &mdash; the detector, live on PyPI</li>
				<li><strong>20 shared fixtures</strong> &mdash; faf-cli &harr; SDK parity, proven by test, not by eye</li>
				<li><strong>12 tools</strong> &mdash; unchanged; Dart lives inside an existing tool, not a new one</li>
				<li><strong>100% Trophy</strong> &mdash; both packages</li>
				<li><strong>1 expert &middot; 1 public grep &middot; 1 real gap</strong> &mdash; closed</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=Run%20It%2C%20Don%27t%20Grep%20It%20%E2%80%94%20a%20Dart%2FFlutter%20expert%20grepped%20our%20source%2C%20found%20no%20%22Flutter%22%2C%20and%20called%20it.%20He%20was%20right%20about%20the%20gap.%20gemini-faf-mcp%202.5.0%20closed%20it.&url=https%3A%2F%2Ffaf.one%2Fblog%2Fdart-edition" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; Run it, don't grep it. &#127950;&#65039;</p>
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

	.category.story {
		background: #8B5A2B;
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
		font-size: 0.95rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
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

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
