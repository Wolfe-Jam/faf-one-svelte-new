<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Glass-Hood Edition - faf-cli v6.5.1 | FAF</title>
	<meta name="description" content="When faf-cli classifies your project, it tells you why. The cli shows its work — refute by inspection." />
	<meta property="og:title" content="The Glass-Hood Edition - faf-cli v6.5.1" />
	<meta property="og:description" content="When faf-cli classifies your project, it tells you why. The cli shows its work — refute by inspection." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/glass-hood-edition-hero.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/glass-hood-edition-hero.jpg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Glass-Hood Edition
		</div>

		<h1>The Glass-Hood Edition</h1>
		<p class="version-tag">faf-cli v6.5.1</p>
		<p class="subtitle">The cli shows its work.</p>
		<div class="meta">
			<time datetime="2026-05-09">May 9, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/glass-hood-edition-hero.jpg" alt="The Glass-Hood Edition — orange smiley with right half shown in glass cutaway revealing internal gears, surrounded by file icons (package.json, Cargo.toml, pyproject.toml, build.zig, server.json, go.mod)" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> When <code>faf-cli</code> classifies your project, it tells you <em>why</em>. A single YAML comment next to <code>type:</code> reveals the evidence it used. Read the rationale, agree or disagree. No opaque hood &mdash; you can see the engine bay.
			</p>
		</section>

		<section>
			<h2>What you see</h2>

			<p>Run <code>bunx faf</code> on a fresh project. Open the generated <code>project.faf</code>:</p>

			<pre><code>{`project:
  name: my-tool
  type: cli  # found: package.json bin
  main_language: TypeScript`}</code></pre>

			<p>That YAML comment is the receipt. The cli classified this as <code>cli</code> because <code>package.json</code> had a <code>bin</code> field. Nothing invented, nothing editorialised &mdash; just the observable evidence.</p>

			<p>Other shapes get other receipts:</p>

			<pre><code>{`type: sdk         # found: package.json keywords contains "sdk"
type: wasm        # found: Cargo.toml has cdylib + wasm-bindgen
type: mcpaas      # found: server.json + npm-package/server.json
type: mobile      # found: app.json (Expo) + package.json react-native
type: monorepo-root  # found: pnpm-workspace.yaml + 18 packages/`}</code></pre>
		</section>

		<section>
			<h2>Why this matters</h2>

			<p>Most AI tools tell you <em>what</em> they decided. Glass-Hood tells you <em>why</em>. The difference: you can argue with the second one.</p>

			<p>If <code>faf-cli</code> says your project is a <code>library</code> but you know it's an <code>sdk</code>, the <code>#&nbsp;found:</code> line tells you exactly which signal misfired. Fix the signal &mdash; add an <code>"sdk"</code> keyword to <code>package.json</code>, rename the binary &mdash; and the next run reclassifies. Or override the type manually; the rationale becomes a footnote, not a black box.</p>

			<p><strong>FAF prints what it sees.</strong> No padding, no editorialising, no "I think this might be a..." prose. Either the signal is there or it isn't.</p>
		</section>

		<section>
			<h2>The doctrine, two surfaces</h2>

			<p>Glass-Hood is a doctrine, not a feature. It shows up in different places across the FAF family:</p>

			<ul>
				<li><strong>faf-cli</strong> ships Glass-Hood as the <code>#&nbsp;found:</code> rationale on type detection.</li>
				<li><strong>xai-faf-rust</strong> ships Glass-Hood as a weighted score-breakdown view: Completeness &times; 40%, Clarity &times; 35%, &hellip;</li>
			</ul>

			<p>Same idea, different surface: <em>don't hide your reasoning</em>.</p>
		</section>

		<section>
			<h2>Try it</h2>

			<pre><code>bunx faf</code></pre>

			<p>Or install:</p>

			<pre><code>npm install -g faf-cli@6.5.1</code></pre>

			<p>Open the resulting <code>project.faf</code>. Find the <code>#&nbsp;found:</code> line. That's the receipt.</p>
		</section>

		<section>
			<h2>The numbers</h2>

			<ul>
				<li><strong>faf-cli v6.5.1</strong> &mdash; npm + Homebrew, May 9, 2026</li>
				<li><strong>658 / 0 / 53 files</strong> &mdash; tests pass / fail / suites</li>
				<li><strong>FAFB v1.0 byte-parity</strong> &mdash; cli output is byte-identical to <code>xai-faf-rust</code> reference impl, gate-tested</li>
				<li><strong>19 project types</strong> &mdash; each emits its own <code>#&nbsp;found:</code> rationale</li>
			</ul>
		</section>

		<section class="share">
			<a
				class="share-x"
				href="https://twitter.com/intent/tweet?text=The%20Glass-Hood%20Edition%20%E2%80%94%20faf-cli%20v6.5.1.%20The%20cli%20shows%20its%20work.&url=https%3A%2F%2Ffaf.one%2Fblog%2Fglass-hood-edition"
				target="_blank"
				rel="noopener noreferrer"
			>
				Share on X
			</a>
		</section>

		<section class="footer-note">
			<p><strong>FAF defines. MD instructs. AI codes.</strong></p>
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
		color: #333;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: 0 0 3rem 0;
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
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		color: white;
	}

	.category.release {
		background: #00B8B8;
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
		border-bottom: 1px solid #eee;
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
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
		color: inherit;
	}

	.share {
		margin-top: 2.5rem;
		text-align: center;
	}

	.share-x {
		display: inline-block;
		padding: 0.5rem 1.25rem;
		border: 2px solid #000;
		border-radius: 6px;
		background: #fff;
		color: #000;
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
		transition: background 0.15s ease;
	}

	.share-x:hover {
		background: #000;
		color: #fff;
	}

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		text-align: center;
		font-size: 1.1rem;
		color: #666;
	}

	.footer-note strong {
		color: #FF6B35;
	}
</style>
