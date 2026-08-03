<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	// Three pillars for a JVM reader: what · why · what's in it for them.
	// Kill line VERBATIM Doc Gate: pom / gradle alone ≠ type. One brand JVM. No twin talk.
	const shareText = `🏁 faf-cli v7.5.1 — The JVM Edition

What: content-aware JVM for AI context
Why: pom / gradle alone ≠ type
For you: Spring stays Spring · classlibs stay classlibs · Android is a facet

npm i -g faf-cli@7.5.1
cd your-project && faf auto`;
	const shareUrl = 'https://faf.one/blog/jvm-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The JVM Edition - faf-cli v7.5.1 | FAF</title>
	<meta
		name="description"
		content="Content-aware JVM — pom / gradle alone ≠ type. One brand JVM (Java + Kotlin/JVM). Agents get Spring Boot, Quarkus, MCP, CLI, library, or Android — not a guess from the build file alone."
	/>
	<meta property="og:title" content="The JVM Edition - faf-cli v7.5.1" />
	<meta
		property="og:description"
		content="Content-aware JVM — pom / gradle alone ≠ type. One brand JVM."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/jvm-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/jvm-edition-hero.png?v=2" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/jvm-edition-hero.png?v=2" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The JVM Edition — faf-cli v7.5.1 · pom / gradle alone ≠ type" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The JVM Edition - faf-cli v7.5.1" />
	<meta
		name="twitter:description"
		content="Content-aware JVM — pom / gradle alone ≠ type. One brand JVM."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/jvm-edition-hero.png?v=2" />
	<meta name="twitter:image:alt" content="The JVM Edition — faf-cli v7.5.1 · pom / gradle alone ≠ type" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The JVM Edition
		</div>
		<h1>The JVM Edition</h1>
		<p class="version-tag">faf-cli v7.5.1</p>
		<p class="subtitle">
			Content-aware JVM — <code>pom</code> / <code>gradle</code> alone ≠ type
		</p>
		<div class="meta">
			<time datetime="2026-08-03">August 3, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/jvm-edition-hero.png?v=2"
			alt="The JVM Edition — faf-cli v7.5.1. pom / gradle alone ≠ type."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf-cli</code> <strong>7.5.1</strong> understands JVM projects
				the way you do — from plugins, parents, packaging, deps, and version catalogs, not from the
				fact that a <code>pom.xml</code> or <code>build.gradle</code> exists. One brand:
				<strong>JVM</strong> (Java + Kotlin/JVM). Kill line:
				<strong><code>pom</code> / <code>gradle</code> alone ≠ type</strong>
				— and bare files don’t stamp Spring Boot on <code>tech_stack</code> either.
			</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="7.5.1" /> --version</code>
				<code>cd your-project && npx --yes <NpmPkg name="faf-cli" version="7.5.1" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="7.5.1" /> score</code>
			</div>
		</section>

		<section>
			<h2>What it is</h2>
			<p>
				<strong>The JVM Edition</strong> is content-aware Java / Kotlin (JVM) detection in
				<code>faf-cli</code>. You run <code>faf auto</code> in a project with a root-level
				<code>pom.xml</code>, <code>build.gradle</code>, or <code>settings.gradle(.kts)</code>; it
				classifies from build signals you already ship, then writes durable project context into
				<code>project.faf</code> so AI agents know what they’re standing in.
			</p>
			<p>It classifies your project as one of:</p>
			<ul>
				<li>
					<strong>MCP server</strong> — official
					<code>io.modelcontextprotocol.sdk</code>, Spring AI MCP starters, Kotlin MCP SDK
				</li>
				<li>
					<strong>Backend</strong> — Spring Boot (plugin / parent / starters), Quarkus, Micronaut,
					Ktor server
				</li>
				<li>
					<strong>CLI</strong> — Gradle <code>application</code> + mainClass; Picocli; Clikt
				</li>
				<li>
					<strong>Library</strong> — bare Maven jar / aggregator <code>pom</code>,
					<code>java-library</code>, no host signals. Libraries stay libraries.
				</li>
				<li>
					<strong>Mobile</strong> — <code>com.android.application</code> (AGP 9 shape; no
					<code>kotlin-android</code> required). Android is a <em>facet</em>, not a second brand.
				</li>
			</ul>
			<p>
				Also recorded: build tool (Maven / Gradle), main language signal (Java · Kotlin · both),
				framework label, facets (<code>android</code> · <code>multiplatform</code>), and an
				inspectable found-line. Not a black box.
			</p>
		</section>

		<section>
			<h2>Why it exists</h2>
			<p class="thesis">Every JVM project has a pom or a gradle file. Not every JVM project is a Spring service.</p>
			<p>
				Aggregators, pure libraries, Spring Boot apps, MCP servers, Picocli tools, and Android apps all
				ship build files. Filename-only tooling treats them as the same thing — often “some Java
				backend” — and the agent brief invents controllers you don’t have or refactors a jar like an
				API.
			</p>
			<p class="wrong-right">
				<strong>Wrong brief:</strong> “Java web service — add controllers.”<br />
				<strong>Right brief:</strong> <code>library</code> · or <code>backend</code> + Spring Boot ·
				because the build said so.
			</p>
			<p>
				The build already encoded the shape: <strong>plugins</strong>, then
				<strong>parents / packaging</strong>, then <strong>deps and starters</strong>, and on Gradle
				often <strong><code>libs.versions.toml</code></strong> plus a multi-module
				<code>settings</code> graph. The JVM Edition exists so the first fact agents get is the one you
				already declared — <strong>what the project actually is</strong>.
			</p>
		</section>

		<section>
			<h2>What’s in it for JVM devs</h2>
			<ul>
				<li>
					<strong>Agents that match the repo.</strong> Spring stays Spring. Classlibs stay classlibs.
					No invented web host from a bare build file.
				</li>
				<li>
					<strong>Zero new config.</strong> No tags, no extra manifest — it reads the
					<code>pom</code> / Gradle you already ship, including version catalogs.
				</li>
				<li>
					<strong>Honest unknowns.</strong> Unrecognized plugins fall through to
					<code>library</code> — not a fake backend label. One brand JVM; Android / KMP are facets.
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
								<code>org.springframework.boot</code> plugin / Boot parent / web starter
							</td>
							<td><code>backend</code> + Spring Boot</td>
						</tr>
						<tr>
							<td><code>io.quarkus</code> / Quarkus BOM parent</td>
							<td><code>backend</code> + Quarkus</td>
						</tr>
						<tr>
							<td>
								<code>io.modelcontextprotocol.sdk:mcp</code> / Spring AI MCP starters
							</td>
							<td><code>mcp</code></td>
						</tr>
						<tr>
							<td>
								<code>application</code> plugin + mainClass · Picocli · Clikt
							</td>
							<td><code>cli</code></td>
						</tr>
						<tr>
							<td>
								<code>com.android.application</code> (AGP 9; no <code>kotlin-android</code>
								required)
							</td>
							<td><code>mobile</code> + facet <code>android</code></td>
						</tr>
						<tr>
							<td>
								<code>org.jetbrains.kotlin.multiplatform</code> (no Android app)
							</td>
							<td><code>library</code> + facet <code>multiplatform</code></td>
						</tr>
						<tr>
							<td>
								Bare <code>pom</code> / <code>java-library</code> / aggregator packaging
							</td>
							<td><code>library</code> — stays a library</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h2>Try it</h2>
			<p>Needs Node (or Bun). No account for the CLI. Pin <strong>7.5.1</strong> — don’t rely on a stale global.</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="7.5.1" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="7.5.1" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="7.5.1" /> score</code>
			</div>
			<p>
				Open <code>project.faf</code> — read <code>project.type</code> and the
				<code># found:</code> line:
				<strong>bare library / aggregator → <code>library</code></strong>
				(and <code>tech_stack</code> stays Java, not Spring).
				<strong>Boot plugin or parent → <code>backend</code> + Spring Boot</strong>.
			</p>
			<p>
				<strong>RED or Yellow score</strong> on a new repo is normal — human slots empty. Detection ≠
				Trophy. Shape first; fill who/what/why when you want ✪ 100%.
			</p>
			<p class="muted-note">
				Daily use: <code>npm install -g <NpmPkg name="faf" version="7.5.1" /></code> (short name) or
				<code><NpmPkg name="faf-cli" version="7.5.1" /></code>, then <code>faf auto && faf score</code>.
				Cold-checked on the public registry for this pin.
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Does:</strong> static classify from root Maven/Gradle + settings modules +
					<code>libs.versions.toml</code> (plugins · parents · packaging · deps). Spring Boot on
					<code>tech_stack</code> only when the file body says so.
				</li>
				<li>
					<strong>Does not:</strong> treat every <code>pom</code> / <code>gradle</code> as Spring ·
					run Gradle · resolve every <code>build-logic</code> convention · know every GAV on Maven
					Central. Unknown → <code>library</code>, not a fake backend.
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>
				Missed a plugin or starter you ship with? Wrong shape on a real multi-module tree? Tell us —
				we will build more. The detection map grows from what JVM developers actually use.
			</p>
			<div class="feedback-actions">
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new?title=JVM%20detection%3A%20&amp;body=pom%20%2F%20gradle%20shape%20%2F%20snippet%20%28redact%20secrets%29%3A%0A%0AExpected%3A%0A%0AGot%3A%0A"
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
			<p>Built with .faf ☑️ pom / gradle alone ≠ type.</p>
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
