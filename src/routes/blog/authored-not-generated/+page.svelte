<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	let copiedId = $state('');

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — the crafted post, not a bare URL.
	const shareText = `🏁 Just shipped: faf-cli v7.1 — The AGENTS.md Edition

faf export --agents authors a complete, best-in-class AGENTS.md for any repo — detected from your code, non-destructive, never stale.

Authored, not generated.

bunx faf export --agents`;
	const shareUrl = 'https://faf.one/blog/authored-not-generated';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Authored, Not Generated — faf-cli v7.1, The AGENTS.md Edition | FAF</title>
	<meta name="description" content="faf export --agents authors a complete, best-in-class AGENTS.md for any repo — detected from your code, non-destructive, never stale. Authored, not generated: the Concise Context for AI." />
	<meta property="og:title" content="Authored, Not Generated — The AGENTS.md Edition" />
	<meta property="og:description" content="faf export --agents authors a complete AGENTS.md from your real code. Authored, not generated — the Concise Context for AI." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/authored-not-generated-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/authored-not-generated-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Authored, Not Generated
		</div>

		<p class="kicker">CONTEXT, versioned.</p>
		<h1>Authored, Not Generated</h1>
		<p class="version-tag">faf-cli v7.1 — The AGENTS.md Edition</p>
		<p class="subtitle">faf export --agents authors the definitive AGENTS.md — the Concise Context for AI.</p>
		<div class="meta">
			<time datetime="2026-07-10">July 10, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/authored-not-generated-hero.png" alt="faf-cli v7.1 — The AGENTS.md Edition: authored, not generated" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf export --agents</code> authors a complete, best-in-class <code>AGENTS.md</code> for any repo — detected from your code, non-destructive, never stale. Point it at a project; it reads the real stack and writes the definitive file an agent needs. Facts, not bloat.
			</p>
		</section>

		<section>
			<h2>Authored, not generated</h2>
			<p>We used to say faf <em>generated</em> your <code>AGENTS.md</code>. We were doing it a disservice.</p>
			<p>"Generated" is the LLM-slop word — a dumb producer spraying plausible prose. That's the opposite of what faf does. faf <strong>reads your repo, discerns what's true, and authors</strong> the definitions from that intel — the way an editor authors a dictionary entry: considered, curated, verifiable. Every line traces to something real in your code. Nothing invented.</p>
			<p>So we changed the word everywhere. faf doesn't generate. <strong>faf authors.</strong></p>
		</section>

		<section>
			<h2>The Concise Context for AI</h2>
			<p>The model for a good <code>AGENTS.md</code> isn't a blog post. It's the <strong>Concise Oxford</strong> — definitions, not prose.</p>
			<p>That's what faf authors: the <strong>Concise Context for AI</strong>. Orientation, setup, tests, conventions, guardrails — dense with fact, stripped of filler. An agent doesn't need your project narrated; it needs to know what's true, fast. Persistent project context for AI — concise, correct, current.</p>
		</section>

		<section>
			<h2>What it authors</h2>
			<p>Point <code>faf export --agents</code> at any repo and it detects your build/test/lint commands, key files, the conventions toolchain (ESLint · Prettier · strict · ruff · mypy · rustfmt), secrets location, and guardrails — then writes the definitive <code>AGENTS.md</code>:</p>
			<ul>
				<li><strong>Orientation</strong> — type + version, so the agent knows where it landed</li>
				<li><strong>Setup / build / tests</strong> — the commands your project actually uses</li>
				<li><strong>Where things live</strong> — the map, not a tour</li>
				<li><strong>Conventions</strong> — points at your config, never restates your lint rules</li>
				<li><strong>Three-tier guardrails</strong> — Always · Ask-first · Never</li>
				<li><strong>Definition of Done</strong> — composed from your real verification commands</li>
				<li><strong>Secrets &amp; security</strong> — where they are, how they're handled</li>
			</ul>
			<p>Data-gated: if it isn't true, it isn't written. And it's <strong>non-destructive</strong> — your hand-written content is preserved; faf maintains its own labeled block. Run it again next week and the file is current, not stale.</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p>No install — point it at any repo and read the file it authors:</p>
			<div class="copy-box" onclick={() => copyText('bunx faf export --agents', 'run')}>
				<code class="copy-code">bunx faf export --agents</code>
				<button class="copy-btn">{copiedId === 'run' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Or install the CLI:</p>
			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli', 'install')}>
				<code class="copy-code">npm install -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v7.1 — The AGENTS.md Edition</strong> (current: v7.1.3)</li>
				<li><strong>1,146 / 1,146</strong> — tests passing</li>
				<li><strong>100%</strong> — Trophy score</li>
				<li><strong>115,000+</strong> — downloads across the FAF ecosystem</li>
				<li><strong>IANA-registered</strong> · Anthropic-merged (#2759)</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ FAF defines. MD instructs. AI codes. 🏎️</p>
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
		margin-bottom: 2rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.breadcrumb a { color: #FF6B35; text-decoration: none; }
	.breadcrumb a:hover { text-decoration: underline; }

	.kicker {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		color: #FF6B35;
		margin: 0 0 0.25rem 0;
		text-transform: uppercase;
	}

	h1 {
		font-size: 2.4rem;
		margin: 0.25rem 0;
		color: #000;
		line-height: 1.2;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.75rem 0 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator { color: #FF6B35; }

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.category.release { background: #00B8B8; }

	.hero-image {
		margin: 0 0 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img { width: 100%; height: auto; display: block; }

	.post-content { font-size: 1.1rem; }

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
		margin: 3rem 0 1.25rem 0;
		color: #000;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
	}

	p { margin-bottom: 1.25rem; }
	strong { color: #000; }
	em { font-style: italic; }

	ul { margin: 1rem 0 1.5rem 1.5rem; }
	li { margin-bottom: 0.6rem; }

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		color: #1a1a1a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
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
		color: #00ff88;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}

	.copy-code::before { content: '$ '; color: #888; }

	.copy-btn {
		padding: 0.5rem 1rem;
		background: #000;
		border: 1px solid #333;
		color: #fff;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}

	.copy-btn:hover { border-color: #555; }
	.copy-btn:active { transform: scale(0.95); }

	.share-section { margin-top: 3rem; text-align: center; }

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

	.share-btn:hover { opacity: 0.85; color: #fff; }

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #1a1a1a;
		text-align: center;
	}

	a { color: #FF6B35; }
	a:hover { text-decoration: none; }

	@media (max-width: 768px) {
		h1 { font-size: 1.9rem; }
		.blog-post { padding: 1rem; }
	}
</style>
