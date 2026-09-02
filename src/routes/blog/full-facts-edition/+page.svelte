<!-- pubblog — Release model (matching-client gold). faf-cli CYAN card identity.
     faf-cli 7.10.0 — The Full-Facts Edition. -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v7.10.0 — The Full-Facts Edition

faf git reads the tree it clones — not the README.

Polyglot repo → fullstack + real languages, not library / JavaScript.
docker-compose services · Makefile targets · .env → real stack facts.

bunx faf git <any-repo>

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/full-facts-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Full-Facts Edition - faf-cli v7.10.0 | FAF</title>
	<meta
		name="description"
		content="faf git reads the tree it clones — docker-compose services, Makefile targets, sibling app dirs — instead of leaning on the README. A polyglot repo stops reporting library / JavaScript."
	/>
	<meta property="og:title" content="The Full-Facts Edition - faf-cli v7.10.0" />
	<meta
		property="og:description"
		content="faf git reads the tree it clones — not the README. A polyglot repo stops reporting library / JavaScript."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/full-facts-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/full-facts-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/full-facts-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Full-Facts Edition — faf-cli v7.10.0 · faf git reads the tree it clones"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Full-Facts Edition - faf-cli v7.10.0" />
	<meta
		name="twitter:description"
		content="faf git reads the tree it clones — not the README. A polyglot repo stops reporting library / JavaScript."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/full-facts-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Full-Facts Edition — faf-cli v7.10.0 · faf git reads the tree it clones"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Full-Facts Edition
		</div>
		<h1>The Full-Facts Edition</h1>
		<p class="version-tag">faf-cli v7.10.0 · faf v7.10.0</p>
		<p class="subtitle">faf git reads the tree it clones — not the README.</p>
		<div class="meta">
			<time datetime="2026-09-02">September 2, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/full-facts-edition-hero.png"
			alt="The Full-Facts Edition — faf-cli v7.10.0 · faf git reads the tree it clones"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf git &lt;url&gt;</code> now reads the tree it clones —
				<code>docker-compose</code> services, <code>Makefile</code> targets, sibling app dirs —
				instead of leaning on the README. A polyglot repo (Django + React + Go, no npm workspace)
				stops reporting <code>type: library</code> / <code>main_language: JavaScript</code>.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Point <code>faf git</code> at a repo whose real code lives
					in folders — <code>backend/</code>, <code>frontend/</code>, <code>gateway/</code> — and
					it only looked at the root. The root was a <code>package.json</code> with husky in it.
					So: "it's a JavaScript library." On a Django + React + Go platform, every line was wrong.
				</p>
				<p>
					<strong>Fix.</strong> It walks one level in. Sibling dirs, each with their own manifest,
					become <code>type: fullstack</code> with the real languages and a
					<code>#&nbsp;found: polyglot:</code> line that shows its work. It reads
					<code>docker-compose.yml</code> for the services that are actually running, and the
					<code>Makefile</code> for the real test command.
				</p>
				<p>
					<strong>New state.</strong> Point it at a real repo and the <code>.faf</code> is facts,
					not a guess.
				</p>
			</div>
			<div class="terminal-block">
				<code>bunx faf git future-agi/future-agi</code>
			</div>
		</section>

		<section>
			<h2>Before → after</h2>
			<p>Same command, same repo (<code>future-agi/future-agi</code> — Django + React + Go):</p>
			<div class="ba-table">
				<div class="ba-row ba-head"><span>slot</span><span>7.9.0</span><span>7.10.0</span></div>
				<div class="ba-row">
					<span><code>type</code></span><span class="old">library</span
					><span class="new">fullstack</span>
				</div>
				<div class="ba-row">
					<span><code>main_language</code></span><span class="old">JavaScript</span
					><span class="new">Python (Django · backend); Go (backend); TypeScript (React · frontend)</span>
				</div>
				<div class="ba-row">
					<span><code>stack.database</code></span><span class="old">—</span
					><span class="new">PostgreSQL · ClickHouse</span>
				</div>
				<div class="ba-row">
					<span><code>commands.test</code></span><span class="old">—</span
					><span class="new">cd futureagi &amp;&amp; make test</span>
				</div>
				<div class="ba-row">
					<span><code>goal</code></span><span class="old">"Repo-level tooling…"</span
					><span class="new">""&nbsp;<small>(honest — left for a human)</small></span>
				</div>
			</div>
			<p class="muted-note">
				<code>#&nbsp;found: polyglot: agentcc-gateway/ (Go), fi-collector/ (Go), frontend/
				(TypeScript), futureagi/ (Python)</code> — the CLI shows why it classified the way it did.
			</p>
		</section>

		<section>
			<h2>What 7.10.0 reads</h2>
			<ul>
				<li>
					<strong>Sibling app dirs</strong> — ≥2 folders each with their own language manifest, a
					frontend and a backend among them → <code>fullstack</code>, aggregated
					<code>main_language</code>, polyglot rationale. No new project type — monorepo /
					enterprise slots are a separate tool.
				</li>
				<li>
					<strong><code>docker-compose*.yml</code></strong> — service images →
					<code>stack.database</code> (postgres / clickhouse / mysql), <code>cache</code> (redis),
					<code>storage</code> (minio), <code>search</code> (elasticsearch / qdrant / weaviate),
					<code>runtime</code> (kafka / rabbitmq / temporal).
				</li>
				<li>
					<strong><code>Makefile</code> / <code>justfile</code> / <code>Taskfile</code></strong> —
					targets → <code>commands.test</code> / <code>build</code> / <code>lint</code>. Finds a
					nested one (<code>cd futureagi &amp;&amp; make test</code>) and prefers the primary
					backend's.
				</li>
				<li>
					<strong><code>.env.example</code></strong> → <code>security.secrets</code> +
					<code>security.example</code>.
				</li>
				<li>
					<strong>README, better</strong> — HTML comment blocks (asset notes, TODO markers) are
					stripped before extraction; a row of roadmap links no longer lands in a slot.
				</li>
			</ul>
			<p>
				File-facts win over prose and over presence-only guesses. The README is still read — for
				the parts a file can't tell you.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Any GitHub repo</strong> — no clone, no config:</p>
			<div class="terminal-block">
				<code>bunx faf git facebook/react</code>
				<code>bunx faf git future-agi/future-agi</code>
			</div>
			<p><strong>Pin the version:</strong></p>
			<div class="terminal-block">
				<code>bunx <NpmPkg name="faf-cli" version="7.10.0" /> git &lt;owner/repo&gt;</code>
			</div>
			<p class="muted-note">
				Both <code>faf</code> and <code>faf-cli</code> are on npm at 7.10.0 — same bits.
				<code>brew install wolfe-jam/faf/faf-cli</code> for a kept install.
			</p>
		</section>

		<section>
			<h2>Where it came from</h2>
			<p>
				<a
					href="https://github.com/future-agi/future-agi/issues/2443"
					target="_blank"
					rel="noopener">future-agi/future-agi#2443</a
				> — a contributor asked for an <code>AGENTS.md</code> authored from a
				<code>project.faf</code>. Running <code>faf git</code> on that repo returned
				<code>library</code> / <code>JavaScript</code> / no stack — a wrong answer, on the free CLI,
				about a real platform. <strong>FAF don't lie.</strong> The fix was to stop looking only at
				the root.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.10.0 (September 2, 2026) — <code>faf-cli</code> + <code>faf</code></li>
				<li><strong>Tests:</strong> 1384 / 1384</li>
				<li><strong>Score:</strong> ✪ Trophy 100% (dogfooded)</li>
				<li>
					<strong>New readers:</strong> <code>docker-compose</code>, <code>Makefile</code> /
					<code>justfile</code> / <code>Taskfile</code>, <code>.env.example</code>, sibling-dir
					manifests
				</li>
				<li>
					<strong>Not in scope:</strong> a <code>monorepo</code> project type, 33-slot always-on,
					structured per-package fields — a separate tool
				</li>
				<li><strong>Platforms:</strong> CI matrix ubuntu + macOS</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ FAF defines. AGENTS.md instructs. AI codes. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
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
		color: #00b8b8;
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
		color: #00b8b8;
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
		border-left: 4px solid #00b8b8;
	}

	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8b5a2b;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
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

	.muted-note {
		font-size: 0.9rem;
		color: #555;
	}

	.ba-table {
		margin: 1.25rem 0;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		overflow: hidden;
		font-size: 0.9rem;
	}
	.ba-row {
		display: grid;
		grid-template-columns: 130px 1fr 1.4fr;
		gap: 0.75rem;
		padding: 0.6rem 0.9rem;
		border-bottom: 1px solid #eee;
	}
	.ba-row:last-child {
		border-bottom: 0;
	}
	.ba-head {
		background: #f2f2f0;
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.72rem;
		letter-spacing: 0.04em;
	}
	.ba-row .old {
		color: #999;
		text-decoration: line-through;
	}
	.ba-row .new {
		color: #00868b;
		font-weight: 600;
	}
	.ba-row .new small {
		color: #777;
		font-weight: 400;
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
		border-left: 4px solid #00b8b8;
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
		text-decoration: none !important;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}

	@media (max-width: 640px) {
		.ba-row {
			grid-template-columns: 1fr;
			gap: 0.2rem;
		}
		.ba-head {
			display: none;
		}
	}
</style>
