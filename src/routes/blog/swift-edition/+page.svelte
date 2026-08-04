<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	// Kill line VERBATIM Doc Gate: Package.swift alone ≠ app. No twin talk.
	// One X only — Feedback "Post on X".
	const shareText = `🏁 faf-cli v7.7.0 — The Swift Edition

What: content-aware Swift for AI context
Why: Package.swift alone ≠ app
For you: libraries stay libraries · Vapor stays backend

npm i -g faf-cli@7.7.0
cd your-package && faf auto`;
	const shareUrl = 'https://faf.one/blog/swift-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Swift Edition - faf-cli v7.7.0 | FAF</title>
	<meta
		name="description"
		content="Content-aware Swift — Package.swift alone ≠ app. Agents get MCP, Vapor, CLI, Xcode app, or library — not an iOS brief from every package."
	/>
	<meta property="og:title" content="The Swift Edition - faf-cli v7.7.0" />
	<meta
		property="og:description"
		content="Content-aware Swift — Package.swift alone ≠ app. Bare packages stay libraries."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/swift-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/swift-edition-hero.png?v=1" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/swift-edition-hero.png?v=1" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Swift Edition — faf-cli v7.7.0 · Package.swift alone ≠ app" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Swift Edition - faf-cli v7.7.0" />
	<meta
		name="twitter:description"
		content="Content-aware Swift — Package.swift alone ≠ app. Bare packages stay libraries."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/swift-edition-hero.png?v=1" />
	<meta name="twitter:image:alt" content="The Swift Edition — faf-cli v7.7.0 · Package.swift alone ≠ app" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Swift Edition
		</div>
		<h1>The Swift Edition</h1>
		<p class="version-tag">faf-cli v7.7.0</p>
		<p class="subtitle">
			Content-aware Swift — <code>Package.swift</code> alone ≠ app
		</p>
		<div class="meta">
			<time datetime="2026-08-04">August 4, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/swift-edition-hero.png?v=1"
			alt="The Swift Edition — faf-cli v7.7.0. Package.swift alone ≠ app."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf-cli</code> <strong>7.7.0</strong> understands Swift projects
				the way you do — from products and package dependencies, not from the fact that a
				<code>Package.swift</code> exists. Kill line:
				<strong><code>Package.swift</code> alone ≠ app.</strong> Bare packages stay libraries.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="7.7.0" /> --version</code>
				<code>cd your-package && npx --yes <NpmPkg name="faf-cli" version="7.7.0" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="7.7.0" /> score</code>
			</div>
		</section>

		<section>
			<h2>What it is</h2>
			<p>
				<strong>The Swift Edition</strong> is content-aware Swift detection in
				<code>faf-cli</code>. You run <code>faf auto</code> in a project with a
				<code>Package.swift</code> or an Xcode app target; it classifies from products, package URLs,
				and light layout you already ship, then writes durable context into
				<code>project.faf</code> so AI agents know what they’re standing in.
			</p>
			<p>It classifies your project as one of:</p>
			<ul>
				<li>
					<strong>MCP server</strong> — official
					<code>modelcontextprotocol/swift-sdk</code>, product <code>MCP</code>
				</li>
				<li>
					<strong>Backend</strong> — Vapor or Hummingbird (package URL / product), optional layout
					confirm
				</li>
				<li>
					<strong>CLI</strong> — <code>.executable</code> / <code>.executableTarget</code>,
					ArgumentParser
				</li>
				<li>
					<strong>App</strong> — Xcode application product type (light project file scan — not a full
					parse of your entire graph)
				</li>
				<li>
					<strong>Library</strong> — library product only, no host signals. Packages stay packages.
				</li>
			</ul>
			<p>
				Also recorded: package manager (SPM / Xcode), framework label, and an inspectable found-line.
				Not a black box. Static scan only — the CLI does not run <code>swift build</code> or execute
				your package manifest.
			</p>
		</section>

		<section>
			<h2>Why it exists</h2>
			<p class="thesis">Every Swift package can have a Package.swift. Not every package is an app.</p>
			<p>
				Shareable libraries, command-line tools, Vapor services, MCP servers, and Xcode client apps
				all live in the Swift ecosystem. Filename-only tooling treats “has Package.swift” as “some
				kind of app” — or under-reads everything as a generic library with no shape — and the agent
				brief invents UIKit screens, wrong entry points, or a backend you don’t have.
			</p>
			<p class="wrong-right">
				<strong>Wrong brief:</strong> “iOS app — add a view controller.”<br />
				<strong>Right brief:</strong> <code>library</code> · or <code>backend</code> + Vapor ·
				because the products (or deps) said so.
			</p>
			<p>
				SPM already encoded the shape: <strong>products</strong> (library · executable · plugin),
				<strong>package URLs</strong> and <strong>product names</strong> (Vapor, Hummingbird, MCP,
				ArgumentParser), then light Xcode signals for real client apps. The Swift Edition exists so
				the first fact agents get is <strong>what the project actually is</strong>.
			</p>
		</section>

		<section>
			<h2>What’s in it for Swift devs</h2>
			<ul>
				<li>
					<strong>Agents that match the repo.</strong> A pure SPM library stays a library. Vapor stays
					backend. No invented SwiftUI App lifecycle by default.
				</li>
				<li>
					<strong>Zero new config.</strong> No tags, no extra manifest — it reads the
					<code>Package.swift</code> (and light Xcode signals) you already ship.
				</li>
				<li>
					<strong>Honest unknowns.</strong> Unrecognized packages fall through to
					<code>library</code> — not a fake iOS label.
				</li>
			</ul>

			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Your project looks like…</th>
							<th>What agents get</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>modelcontextprotocol/swift-sdk</code> · product <code>MCP</code>
							</td>
							<td><code>mcp</code></td>
						</tr>
						<tr>
							<td>
								<code>vapor/vapor</code> / product <code>Vapor</code> · Hummingbird
							</td>
							<td><code>backend</code> + that framework</td>
						</tr>
						<tr>
							<td>
								<code>.executable</code> / ArgumentParser · no server host
							</td>
							<td><code>cli</code></td>
						</tr>
						<tr>
							<td>
								<code>.xcodeproj</code> + <code>product-type.application</code>
							</td>
							<td><code>app</code></td>
						</tr>
						<tr>
							<td>
								Bare <code>Package.swift</code> · <code>.library</code> product only
							</td>
							<td><code>library</code> — stays a library</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h2>Try it</h2>
			<p>
				Needs Node (or Bun). No account for the CLI. Pin <strong>7.7.0</strong> — don’t rely on a
				stale global.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="7.7.0" /> --version</code>
				<code>cd your-package</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="7.7.0" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="7.7.0" /> score</code>
			</div>
			<p>
				Open <code>project.faf</code> — read <code>project.type</code> and the
				<code># found:</code> line:
				<strong>bare library → <code>library</code></strong>
				(and <code>tech_stack</code> stays Swift, not Vapor).
				<strong>Vapor product → <code>backend</code> + Vapor</strong>.
			</p>
			<p>
				<strong>RED or Yellow score</strong> on a new package is normal — human slots empty. Detection ≠
				Trophy. Shape first; fill who/what/why when you want ✪ 100%.
			</p>
			<p class="muted-note">
				Daily use: <code>npm install -g <NpmPkg name="faf-cli" version="7.7.0" /></code>, then
				<code>faf auto && faf score</code>. Cold-checked on the public registry for this pin.
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Does:</strong> static classify from Package.swift products / package URLs / product
					names + light Xcode application productType. Does not run <code>swift build</code>.
				</li>
				<li>
					<strong>Does not:</strong> treat every <code>Package.swift</code> as an app · full
					<code>project.pbxproj</code> graph parse · Tuist/XcodeGen first-class · every Apple
					extension target · claim MCP process maturity beyond “official SDK present.”
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>
				Missed a package you ship with? Wrong shape on a real monorepo or Xcode workspace? Tell us —
				we will build more. The detection map grows from what Swift developers actually use.
			</p>
			<div class="feedback-actions">
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new?title=Swift%20detection%3A%20&amp;body=Package.swift%20%2F%20shape%20%2F%20snippet%20%28redact%20secrets%29%3A%0A%0AExpected%3A%0A%0AGot%3A%0A"
					target="_blank"
					rel="noopener"
					class="feedback-btn"
				>
					Open a GitHub issue
				</a>
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn secondary">Post on X</a>
			</div>
		</section>

		<section class="star-cta">
			<p>If this saves you a wrong agent brief, a star helps the next project find it.</p>
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
			<p>Built with .faf ☑️ Package.swift alone ≠ app.</p>
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

	.wrong-right {
		font-size: 1.02rem;
		line-height: 1.55;
		padding: 1rem 1.2rem;
		margin: 0 0 1.25rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #00d4d4;
		color: #1a1a1a;
	}
	.wrong-right code {
		font-size: 0.92em;
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

	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #00d4d4;
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff !important;
	}
	.feedback-btn:hover {
		background: #000;
		text-decoration: none !important;
	}
	.feedback-btn.secondary {
		background: transparent;
		color: #1a1a1a !important;
		border: 2px solid #1a1a1a;
	}
	.feedback-btn.secondary:hover {
		background: #1a1a1a;
		color: #fff !important;
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
