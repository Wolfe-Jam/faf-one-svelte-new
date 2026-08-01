<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	// Rich X share — Go-native voice (no cross-language twin talk).
	// Core claim matches CHANGELOG kill line: go.mod alone ≠ backend.
	const shareText = `🏁 Just shipped: faf-cli v7.3.0 — The Go Edition

Content-aware Go — go.mod alone ≠ backend.

MCP · Gin/Echo · Cobra/cmd · library
Pure modules stay pure

npm i -g faf-cli@7.3.0`;
	const shareUrl = 'https://faf.one/blog/go-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Go Edition - faf-cli v7.3.0 | FAF</title>
	<meta
		name="description"
		content="Content-aware Go — go.mod alone ≠ backend. faf-cli v7.3.0 classifies MCP · Gin/Echo/Fiber/Chi · Cobra/cmd · library from requires + layout."
	/>
	<meta property="og:title" content="The Go Edition - faf-cli v7.3.0" />
	<meta
		property="og:description"
		content="Content-aware Go — go.mod alone ≠ backend. Pure modules stay pure."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/go-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/go-edition-hero.png?v=1" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/go-edition-hero.png?v=1" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Go Edition — faf-cli v7.3.0 · go.mod alone ≠ backend" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Go Edition - faf-cli v7.3.0" />
	<meta
		name="twitter:description"
		content="Content-aware Go — go.mod alone ≠ backend."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/go-edition-hero.png?v=1" />
	<meta name="twitter:image:alt" content="The Go Edition — faf-cli v7.3.0 · go.mod alone ≠ backend" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Go Edition
		</div>
		<h1>The Go Edition</h1>
		<p class="version-tag">faf-cli v7.3.0 · ✪</p>
		<p class="subtitle">
			<strong>Content-aware Go</strong> — <code>go.mod</code> alone ≠ backend.
		</p>
		<div class="meta">
			<time datetime="2026-08-01">August 1, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/go-edition-hero.png?v=1"
			alt="The Go Edition — faf-cli v7.3.0. Content-aware Go — go.mod alone ≠ backend."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf-cli</code> <strong>7.3.0</strong> — <strong>The Go Edition</strong>.
				<strong>Content-aware Go</strong> — <code>go.mod</code> alone ≠ backend. Reads
				<code>require</code> paths and light layout, then classifies MCP · server · CLI · library.
			</p>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.3.0</code>
				<code>cd your-go-module && faf auto</code>
			</div>
		</section>

		<section>
			<p class="thesis">go.mod is not a type</p>
			<p>
				Most tools see <code>go.mod</code> and assume a service. Libraries, CLIs, HTTP servers, and
				MCP servers all ship a module file — none of them are “backend” because the file is named
				<code>go.mod</code>.
			</p>
			<p>
				Wrong shape at the root means wrong AI context: the <code>.faf</code>, the agent brief, the
				export. The Go Edition classifies from <strong>requires + light layout</strong> — so the context
				matches the module you built.
			</p>
		</section>

		<section>
			<h2>What it classifies</h2>
			<ul>
				<li>
					<strong>MCP</strong> — e.g. <code>github.com/mark3labs/mcp-go</code>,
					<code>github.com/modelcontextprotocol/go-sdk</code> → <code>app_type: mcp</code>
				</li>
				<li>
					<strong>Backend</strong> — Gin, Echo, Fiber, Chi, gRPC, Connect, and peers →
					<code>backend</code> + framework name
				</li>
				<li>
					<strong>CLI</strong> — Cobra, urfave/cli, <code>cmd/</code> layout, root
					<code>package main</code>
				</li>
				<li>
					<strong>Library</strong> — pure module, no server/CLI/MCP signal. Pure modules stay pure.
				</li>
			</ul>
			<p>
				Priority: MCP over Gin when both are present; server over Cobra; layout only when deps don’t
				already decide.
			</p>
		</section>

		<section>
			<h2>How it works</h2>
			<p>
				One knowledge map of high-signal module paths, one classifier. Edit the map once; detection
				stays consistent. No “every <code>go.mod</code> is a service” shortcut.
			</p>
			<p>
				Proven by sixteen classification fixtures plus a brake suite that fails if a pure module is
				forced to backend.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.3.0</code>
				<code>npm install -g faf@7.3.0</code>
				<code>faf auto && faf score</code>
			</div>
			<p>
				Point it at a Gin API, a Cobra tool, an MCP server, or a plain library —
				<code>project.faf</code> should say what the module actually is (e.g.
				<code>type: backend</code>, <code>backend: Gin</code>).
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v7.3.0</strong> — The Go Edition · August 1, 2026</li>
				<li><strong>16 fixtures</strong> — classification contract</li>
				<li><strong>npm</strong> — <code>faf-cli@7.3.0</code> · <code>faf@7.3.0</code></li>
			</ul>
		</section>

		<section>
			<h2>Non-claims</h2>
			<p>
				We claim content-aware project-type classification from <code>go.mod</code> (+ light layout),
				proven by the fixture suite. We do <strong>not</strong> claim every module path in the ecosystem
				is known, or that <code>package main</code> alone proves a production service.
			</p>
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
			<p>Built with .faf ☑️ go.mod alone ≠ backend. 🏎️</p>
		</section>
	</article>
</div>

<style>
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
	.subtitle code {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		background: #e5e5e5;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
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
