<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	// Go-native share — kill line + shapes a Gopher actually ships.
	const shareText = `🏁 faf-cli v7.3.0 — The Go Edition

go.mod alone ≠ backend.

Reads require + cmd/ · classifies:
MCP · Gin/Echo/Fiber/Chi · Cobra · library

npm i -g faf-cli@7.3.0
cd your-module && faf auto`;
	const shareUrl = 'https://faf.one/blog/go-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Go Edition - faf-cli v7.3.0 | FAF</title>
	<meta
		name="description"
		content="go.mod alone ≠ backend. faf-cli 7.3.0 reads require paths + cmd/ layout and classifies MCP, Gin/Echo/Fiber/Chi/gRPC, Cobra CLI, or pure library for AI context."
	/>
	<meta property="og:title" content="The Go Edition - faf-cli v7.3.0" />
	<meta
		property="og:description"
		content="go.mod alone ≠ backend. Gin stays Gin. Pure modules stay library. Agents get the module you built."
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
		content="go.mod alone ≠ backend. Require paths + cmd/ → MCP · server · CLI · library."
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
		<p class="version-tag">faf-cli v7.3.0</p>
		<p class="subtitle">
			<strong><code>go.mod</code> alone ≠ backend.</strong> AI gets the module you actually built.
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
			alt="The Go Edition — faf-cli v7.3.0. go.mod alone ≠ backend."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Point <code>faf auto</code> at a Go module. It reads your
				<code>go.mod</code> <code>require</code> block and light layout
				(<code>cmd/</code>, root <code>main.go</code>), then writes the right shape into
				<code>project.faf</code> — MCP server, HTTP/RPC backend, CLI, or library. Not “some Go
				service” because a module file exists.
			</p>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.3.0</code>
				<code>cd your-module && faf auto && faf score</code>
			</div>
		</section>

		<section>
			<p class="thesis">Every Go project has a go.mod. Not every Go project is a backend.</p>
			<p>
				Libraries, CLIs, Gin APIs, gRPC services, and MCP servers all start the same way:
				<code>module …</code> and a <code>require</code> block. If tooling only sees the filename, your
				reusable package gets treated like a service — and the agent brief goes wrong from the first
				line.
			</p>
			<p>
				<strong>The Go Edition</strong> classifies from what you already declare: module paths in
				<code>require</code>, plus idiomatic layout when deps don’t decide.
			</p>
		</section>

		<section>
			<h2>What you get in project.faf</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Your module looks like…</th>
							<th>Classification</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>github.com/gin-gonic/gin</code> (or Echo / Fiber / Chi / gRPC / Connect…)
							</td>
							<td><code>backend</code> + framework name (e.g. Gin)</td>
						</tr>
						<tr>
							<td>
								<code>github.com/spf13/cobra</code> or <code>urfave/cli</code>
							</td>
							<td><code>cli</code></td>
						</tr>
						<tr>
							<td><code>cmd/…/*.go</code> layout, or root <code>package main</code></td>
							<td><code>cli</code> (layout when no server dep)</td>
						</tr>
						<tr>
							<td>
								<code>github.com/mark3labs/mcp-go</code> or
								<code>modelcontextprotocol/go-sdk</code>
							</td>
							<td><code>mcp</code></td>
						</tr>
						<tr>
							<td>Module only — deps like <code>golang.org/x/…</code>, no server/CLI/MCP signal</td>
							<td><code>library</code> — pure modules stay pure</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				Also recorded: your <code>module</code> path, and a short found-line (e.g.
				<code>go.mod + github.com/gin-gonic/gin (Go backend)</code>) so the receipt is inspectable,
				not magic.
			</p>
		</section>

		<section>
			<h2>Signals it reads</h2>
			<ul>
				<li>
					<strong>require paths</strong> — single-line and parenthesized blocks; longest match wins
					(<code>echo/v4</code> beats bare <code>echo</code>).
				</li>
				<li>
					<strong>Servers known today</strong> — Gin, Echo, Fiber, Chi, Gorilla Mux, gRPC, Connect,
					Kratos, go-zero, Hertz.
				</li>
				<li>
					<strong>CLI known today</strong> — Cobra, urfave/cli, Kingpin, Kong; else
					<code>cmd/</code> with <code>.go</code> files; else root <code>main.go</code> with
					<code>package main</code>.
				</li>
				<li>
					<strong>MCP known today</strong> — mark3labs/mcp-go, official go-sdk, and a few peers.
				</li>
			</ul>
		</section>

		<section>
			<h2>When signals conflict</h2>
			<p>Priority is fixed and intentional:</p>
			<ol>
				<li><strong>MCP</strong> over HTTP framework (mcp-go + Gin → <code>mcp</code>)</li>
				<li><strong>Server</strong> over Cobra (Gin + Cobra → <code>backend</code>, framework Gin)</li>
				<li><strong>CLI deps</strong> over layout</li>
				<li><strong>Layout</strong> only when requires don’t already decide</li>
				<li>Otherwise <strong>library</strong> — <code>go.mod</code> alone never means backend</li>
			</ol>
		</section>

		<section>
			<h2>Try it on a real module</h2>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.3.0</code>
				<code>cd path/to/your/module</code>
				<code>faf auto</code>
				<code>faf score</code>
			</div>
			<p>
				Open <code>project.faf</code>. For a Gin service you should see backend + Gin — not a
				generic “Go project.” For a package with no server/CLI/MCP signal, you should see library.
			</p>
			<p class="muted-note">
				Same binary also publishes as <code>faf@7.3.0</code> if you prefer the short package name.
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Does:</strong> content-aware type from <code>go.mod</code> + light layout, covered by
					a 16-fixture classification suite.
				</li>
				<li>
					<strong>Does not:</strong> know every module path in the ecosystem. Unknown frameworks fall
					through to layout or library — not a fake “backend.”
				</li>
				<li>
					<strong>Does not:</strong> treat bare <code>package main</code> as proof of a production
					HTTP service (that’s why bare main without a server dep classifies as CLI/tool).
				</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>If this saves you a wrong agent brief, a star helps the next Go module find it.</p>
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
			<p>Built with .faf ☑️ go.mod alone ≠ backend.</p>
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

	.post-content ul,
	.post-content ol {
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

	.table-wrap {
		overflow-x: auto;
		margin: 0 0 1.25rem;
		border-radius: 8px;
		border: 1px solid #e5e5e5;
	}
	.post-content table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}
	.post-content th,
	.post-content td {
		text-align: left;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #e5e5e5;
		vertical-align: top;
		color: #1a1a1a;
	}
	.post-content th {
		background: #f7f5f0;
		font-weight: 700;
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}
	.post-content tr:last-child td {
		border-bottom: none;
	}
	.post-content td code {
		font-size: 0.85em;
		word-break: break-word;
	}

	.muted-note {
		font-size: 0.9rem;
		color: #555;
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
