<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	// Rich X share — formula + cold open; OG card carries description/image.
	const shareText = `🏁 Just shipped: faf-cli v7.2.1 — Dart/Flutter knowledge v2

pubspec ≠ Flutter. Content-aware Dart AI can trust.

Pure Dart stays Dart · one JSON, CLI + SDKs compose
Community receipt · Riverpod · Beamer · Jaspr · MCP

npm i -g faf-cli@7.2.1`;
	const shareUrl = 'https://faf.one/blog/dart-knowledge-v2';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Dart/Flutter knowledge v2 - faf-cli v7.2.1 | FAF</title>
	<meta
		name="description"
		content="pubspec ≠ Flutter. faf-cli v7.2.1 refreshes Dart/Flutter detection knowledge on the content-aware Dart Edition architecture — pure Dart stays Dart, one JSON composed by CLI and SDKs."
	/>
	<meta property="og:title" content="Dart/Flutter knowledge v2 - faf-cli v7.2.1" />
	<meta
		property="og:description"
		content="pubspec ≠ Flutter. Content-aware Dart AI can trust. Knowledge v2 — same architecture, fresher map."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/dart-knowledge-v2" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/dart-knowledge-v2-hero.png?v=1" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/dart-knowledge-v2-hero.png?v=1" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Dart/Flutter knowledge v2 — faf-cli v7.2.1 · pubspec ≠ Flutter"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Dart/Flutter knowledge v2 - faf-cli v7.2.1" />
	<meta
		name="twitter:description"
		content="pubspec ≠ Flutter. Content-aware Dart AI can trust."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/dart-knowledge-v2-hero.png?v=1" />
	<meta
		name="twitter:image:alt"
		content="Dart/Flutter knowledge v2 — faf-cli v7.2.1 · pubspec ≠ Flutter"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Dart/Flutter knowledge v2
		</div>
		<h1>Dart/Flutter knowledge v2</h1>
		<p class="version-tag">faf-cli v7.2.1 · community receipt · ✪</p>
		<p class="subtitle">
			<strong>pubspec ≠ Flutter.</strong> Content-aware Dart AI can trust — same architecture as
			<a href="/blog/dart-edition">The Dart Edition</a>, fresher knowledge map.
		</p>
		<div class="meta">
			<time datetime="2026-08-01">August 1, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/dart-knowledge-v2-hero.png?v=1"
			alt="Dart/Flutter knowledge v2 — faf-cli v7.2.1. pubspec ≠ Flutter. Content-aware Dart AI can trust."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf-cli</code> <strong>7.2.1</strong> ships
				<strong>Dart/Flutter knowledge v2</strong> — an Aug 2026 community receipt on top of the
				<a href="/blog/dart-edition">6.13.0 Dart Edition</a>. Architecture unchanged. Knowledge
				fresher. Your <code>pubspec.yaml</code> is still classified by what it
				<em>contains</em>, not by the filename alone.
			</p>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.2.1</code>
				<code>cd your-dart-or-flutter-repo && faf auto</code>
			</div>
		</section>

		<section>
			<p class="thesis">Why the Dart Edition exists</p>
			<p>
				Most tools see <code>pubspec.yaml</code> and shout “Flutter.” That’s a lie often enough to
				matter. Pure Dart packages, CLIs, Shelf servers, Serverpod backends, Dart Frog apps, and
				MCP servers all ship a pubspec — and none of them are Flutter just because the file is named
				that way.
			</p>
			<p>
				When AI context is wrong at the root, everything downstream is wrong: the
				<code>.faf</code>, the agent brief, the export. The Dart Edition fixed the root —
				<strong>content-aware classification</strong> — so AI gets the project you actually built.
			</p>
		</section>

		<section>
			<h2>The benefits (still the point)</h2>
			<ul>
				<li>
					<strong>Flutter only when it’s Flutter.</strong> The <code>flutter</code> SDK dep is the
					signal — not the filename. Pure Dart stays Dart.
				</li>
				<li>
					<strong>Real project shape, not a single bucket.</strong> Flutter app vs reusable package ·
					Dart server · CLI · MCP · library — so the <code>.faf</code> reads like an engineer who
					opened the repo.
				</li>
				<li>
					<strong>Stack signals that matter.</strong> State (Riverpod, Bloc, Hooks…), routing
					(go_router, Beamer…), server frameworks (Serverpod, Dart Frog, Shelf, Jaspr…) — written
					into context the agent can use.
				</li>
				<li>
					<strong>One knowledge file, many surfaces.</strong>
					<code>src/detect/dart-detection.json</code> is the single source. Logic lives in
					<code>dart.ts</code>. faf-cli imports it; SDKs and MCPs compose it. No forked parsers
					drifting apart.
				</li>
				<li>
					<strong>Parity, not vibes.</strong> Twenty shared fixtures —
					<code>faf-cli</code> ↔ <code>faf-python-sdk</code> — same pubspecs, same answers. If the
					engines diverge, a suite goes red.
				</li>
			</ul>
			<p>
				That’s the beef. Knowledge v2 doesn’t replace it — it keeps the map honest as the ecosystem
				moves.
			</p>
		</section>

		<section>
			<h2>What’s new in v2</h2>
			<p>
				Same architecture. Fresher detection knowledge. High-signal deps the community actually
				ships with:
			</p>
			<ul>
				<li><strong>State:</strong> <code>riverpod_annotation</code>, <code>flutter_hooks</code></li>
				<li><strong>Routing:</strong> <code>beamer</code>, <code>routemaster</code></li>
				<li><strong>Servers:</strong> <code>jaspr</code>, <code>relic</code></li>
				<li><strong>MCP:</strong> <code>dart_mcpserver</code></li>
			</ul>
			<p>
				Edit the JSON once — composed surfaces inherit. No new detector fork. No “this MCP knows
				Beamer but that one doesn’t.”
			</p>
		</section>

		<section>
			<h2>Composition pattern</h2>
			<p>
				This is how FAF bolsters a language without rewriting kernels: a
				<strong>content-aware detector</strong> + a <strong>single-source knowledge map</strong> +
				<strong>parity fixtures</strong>. Dart was the proof. The same shape is how the next host
				languages get honest detection — not five hand-maintained greps.
			</p>
			<p>
				Origin story (the public grep that found the gap):
				<a href="/blog/dart-edition">Run It, Don't Grep It — The Dart Edition</a>.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.2.1</code>
				<code># dual publish works too:</code>
				<code>npm install -g faf@7.2.1</code>
				<code>faf auto</code>
				<code>faf score</code>
			</div>
			<p>
				Point it at a Flutter app, a pure Dart package, a Shelf server, or a Dart MCP — the
				<code>.faf</code> should say what the pubspec actually describes.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v7.2.1</strong> — released August 1, 2026</li>
				<li><strong>Dart/Flutter knowledge v2</strong> — community receipt on 6.13.0 architecture</li>
				<li><strong>20 shared fixtures</strong> — CLI ↔ Python SDK parity</li>
				<li><strong>Single-source JSON</strong> — edit once, compose everywhere</li>
				<li><strong>npm</strong> — <code>faf-cli@7.2.1</code> · <code>faf@7.2.1</code></li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>If you like our work, consider a star on the repo — it helps others find us too.</p>
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="star-btn">
				<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"
					><path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/></svg
				>
				Star faf-cli
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ pubspec ≠ Flutter. Pure Dart stays Dart. 🏎️</p>
		</section>
	</article>
</div>

<style>
	/* Light theme — plain :global(body), no !important (prevents nav flash) */
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		color: #1a1a1a;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
	}

	.post-header {
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		color: #333;
	}
	.breadcrumb a {
		color: #00d4d4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #1a1a1a;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.subtitle a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.subtitle a:hover {
		text-decoration: underline;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator {
		color: #1a1a1a;
	}
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.release {
		background: #00b8b8;
	}

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.7rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: #1a1a1a;
		letter-spacing: -0.01em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.post-content a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.thesis {
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		line-height: 1.3;
		margin: 0 0 1.25rem;
		color: #1a1a1a;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.65rem;
		color: #1a1a1a;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.95rem;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}
	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.5rem;
		border-radius: 6px;
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.share-btn:hover {
		background: #000;
	}

	.star-cta {
		margin-top: 2.5rem;
		text-align: center;
	}
	.star-cta p {
		color: #333;
		margin: 0 0 1rem;
	}
	.star-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 0.9rem;
		border-radius: 6px;
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.star-btn svg {
		display: block;
	}
	.star-btn:hover {
		background: #000;
	}

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
	}
	.footer-note p {
		color: #333;
		font-weight: 600;
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 1.9rem;
		}
		h2 {
			font-size: 1.4rem;
		}
		.thesis {
			font-size: 1.25rem;
		}
	}
</style>
