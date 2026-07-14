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
	const shareText = `🏁 Just shipped: faf-cli v6.8.0 — The Relentless Edition

Birth DNA, 6-W extractor, format-finder — restored. Grok interop, extension App-Type — added. One shared pipeline.`;
	const shareUrl = 'https://faf.one/blog/relentless-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Relentless Edition - faf-cli v6.8.0 | FAF</title>
	<meta name="description" content="Birth DNA, 6-W extractor, format-finder — restored. Grok interop, extension App-Type — added. One shared pipeline. Every faf init, auto, and git fills your .faf relentlessly." />
	<meta property="og:title" content="The Relentless Edition - faf-cli v6.8.0" />
	<meta property="og:description" content="Birth DNA, 6-W extractor, format-finder — restored. Grok interop, extension App-Type — added. One shared pipeline." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Relentless Edition
		</div>

		<h1>The Relentless Edition</h1>
		<p class="version-tag">faf-cli v6.8.0</p>
		<p class="subtitle">Restored. Extended. Unified.</p>
		<div class="meta">
			<time datetime="2026-05-30">May 30, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Birth DNA on every fresh <code>.faf</code>. The Relentless 6-W extractor reads your manifest and README, fills <code>human_context</code> from sources, never fakes. Turbo-Cat detects 200+ formats &mdash; Python, Rust, PHP, all in. <code>faf export --grok</code> closes the Grok interop loop. Browser extensions earn their own App-Type. And <code>init</code>, <code>auto</code>, <code>git</code> now flow through one shared pipeline &mdash; they can't drift.
			</p>
		</section>

		<section>
			<h2>What's Restored</h2>

			<p>Three capabilities went quiet in v6.0. v6.8 brings them back, sharper.</p>

			<p><strong>Birth DNA.</strong> Every fresh <code>.faf</code> now ships with a <code>.faf-dna</code> birth certificate &mdash; a separate file by design, so the certificate can't drift if the score evolves. New <code>faf dna</code> command renders the birth &rarr; growth journey at any point.</p>

			<p><strong>Relentless 6-W extractor.</strong> <code>faf auto</code> now fills the six W's &mdash; <em>who, what, why, where, when, how</em> &mdash; from your <code>package.json</code> and README signals. Sourced-or-empty. No fabricated guesses, no hallucinated context. If the README has it, the slot has it. If the README doesn't, the slot stays empty.</p>

			<p><strong>Turbo-Cat format-finder.</strong> ~200-format manifest detection. Non-npm ecosystems &mdash; Python, Rust, PHP, all of them &mdash; get real <code>main_language</code> and <code>stack.build</code> values instead of <em>"Unknown"</em>. Drop FAF into any repo, it recognizes what you actually built it with.</p>
		</section>

		<section>
			<h2>What's New</h2>

			<p><strong><code>faf export --grok</code></strong> &mdash; wires the hosted Grok MCP into <code>.grok/config.toml</code>. Opt-in, idempotent, non-destructive: existing <code>mcp_servers</code> entries are preserved. The Grok-side interop loop now closes alongside the existing AGENTS / Cursor / Gemini exporters.</p>

			<p><strong><code>extension</code> App-Type.</strong> Browser extensions (Manifest V3, <code>manifest_version</code>) now classify correctly with a 16-slot shape &mdash; no backend, no API type. Previously misclassified as Svelte web apps with phantom REST APIs. Detection fires <em>before</em> framework heuristics now, so this can't happen again.</p>
		</section>

		<section>
			<h2>One Shared Pipeline</h2>

			<p>Three commands used to do their own thing for fresh <code>.faf</code> creation: <code>faf init</code>, <code>faf auto</code>, <code>faf git &lt;url&gt;</code>. Three code paths, three possible drift surfaces. One bug-fix to one would leave the other two behind.</p>

			<p>v6.8 unifies them. A new module &mdash; <code>src/detect/assemble.ts</code> &mdash; exports a single <code>assembleFreshFaf</code> primitive. <code>init</code>, <code>auto</code>, and <code>git</code> all route through it. <strong>Drift between them is now structurally impossible.</strong></p>

			<p>Same command surfaces, richer output: <code>faf init</code> produces a fully-filled <code>.faf</code> instead of a sparse scaffold. <code>faf git &lt;url&gt;</code> fills slots beyond bare manifest detection. <code>faf auto</code>'s the reference behavior; the others match it.</p>
		</section>

		<section>
			<h2>Improved</h2>

			<ul>
				<li><code>exports</code> map &mdash; bun consumers resolve <code>faf-cli</code> cleanly. The downstream FAF MCP servers no longer need a workaround bridge.</li>
				<li>Windows CI &mdash; real test timeout on every invocation. The recurring red is root-caused, not papered over.</li>
				<li>WJTTC spec-conformance &mdash; the shared <code>@faf/specification</code> corpus runs in isolated CI. Real contract drift detection at every push.</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('bunx faf auto', 'bunx')}>
				<code class="copy-code">bunx faf auto</code>
				<button class="copy-btn">{copiedId === 'bunx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or install globally:</p>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@6.8.0', 'install')}>
				<code class="copy-code">npm install -g faf-cli@6.8.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source, release notes, the 18-commit story.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli" class="cta-link">faf-cli</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest. <code>faf-cli</code> + <code>faf</code> shipped in lockstep.</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">faf-cli</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v6.8.0</strong> &mdash; Released May 30, 2026</li>
				<li><strong>762/762</strong> &mdash; Tests passing (was 716 at v6.7.1)</li>
				<li><strong>18 commits</strong> &mdash; Since the last shipped release</li>
				<li><strong>9/9 slots</strong> &mdash; project.faf at 🏆 Trophy 100%</li>
				<li><strong>28,480 + 1,021</strong> &mdash; <code>faf-cli</code> + <code>faf</code> on npm (dual-publish lockstep)</li>
				<li><strong>65,000+</strong> &mdash; FAF ecosystem grand total &middot; ~2&times; faf-cli &middot; 22 packages across npm + PyPI + crates.io</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; Relentless context, by design. 🏎️</p>
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
		font-weight: 700;
	}

	.version-tag {
		font-size: 1rem;
		color: #888;
		margin: 0 0 0.25rem 0;
		font-family: 'Monaco', 'Courier New', monospace;
	}

	.subtitle {
		font-size: 1.15rem;
		color: #555;
		margin: 0.5rem 0 1rem 0;
		font-weight: 500;
	}

	.meta {
		font-size: 0.9rem;
		color: #888;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.separator {
		color: #ccc;
	}

	.category {
		display: inline-block;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.category.release { background: #00B8B8; }

	.post-content h2 {
		font-size: 1.5rem;
		margin: 2.5rem 0 1rem 0;
		color: #000;
		font-weight: 700;
	}

	.post-content p {
		margin: 1rem 0;
	}

	.intro .lead {
		font-size: 1.1rem;
		color: #222;
		padding: 1.25rem 1.5rem;
		background: var(--faf-surface);
		border: 1px solid #f0e6d8;
		border-left: 3px solid #FF6B35;
		border-radius: 6px;
	}

	code {
		background: rgba(255, 107, 53, 0.08);
		padding: 0.15rem 0.35rem;
		border-radius: 3px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.92em;
		color: #c2410c;
	}

	ul {
		padding-left: 1.5rem;
	}

	ul li {
		margin: 0.5rem 0;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.cta-box {
		background: var(--faf-surface);
		border: 1px solid #f0e6d8;
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
	}

	.cta-box h3 {
		font-size: 1rem;
		margin: 0 0 0.25rem 0;
		color: #000;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 700;
	}

	.cta-box p {
		font-size: 0.95rem;
		color: #555;
		margin: 0.25rem 0 0.75rem 0;
	}

	.cta-link {
		font-family: 'Monaco', 'Courier New', monospace;
		color: #FF6B35;
		font-weight: 600;
		text-decoration: none;
		font-size: 0.95rem;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-block;
		padding: 0.65rem 1.5rem;
		background: #FF6B35;
		color: #fff;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 600;
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
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
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
