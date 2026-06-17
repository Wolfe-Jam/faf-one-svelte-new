<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 The Mk4 Championship Engine

One Rust engine, 33 slots, 596 tests. Claude, Gemini, OpenAI, and Grok finally speak the same language.

One engine. Four frontiers. Zero context drift.`;
	const shareUrl = 'https://faf.one/blog/mk4-engine';
	const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>The Mk4 Championship Engine | FAF</title>
	<meta name="description" content="One Rust engine, 33 slots, 596 tests. The Frontier 4 finally speak the same language. CLAUDE.md, GEMINI.md, AGENTS.md, GROK.md — unified." />
	<meta property="og:title" content="The Mk4 Championship Engine" />
	<meta property="og:description" content="One Rust engine, 33 slots, 596 tests. Claude, Gemini, OpenAI, and Grok finally speak the same language." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/mk4-engine-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/mk4-engine-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Mk4 Championship Engine
		</div>

		<h1>The Mk4 Championship Engine</h1>
		<p class="rusty-subtitle">the Rusty engine</p>
		<p class="version-tag">Unified Scoring IP</p>
		<p class="subtitle">One engine. Four frontiers. Zero context drift.</p>
		<div class="meta">
			<time datetime="2026-03-12">March 12, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/mk4-engine-hero.png" alt="The chaos of Context funneling into a single point of light — .faf" />
		<p class="hero-caption">In September 2025 we produced this vision. Today we delivered on it.</p>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We built one Rust scoring engine that works identically across Node, Python, and Rust tools. 33 slots define your entire project DNA. Claude, Gemini, OpenAI, and Grok now score the same file the same way. 596/596 tests. Zero parity drift.
			</p>
		</section>

		<section>
			<h2>The Problem: Context-Impairment</h2>

			<p>Most developers think their AI is "fine" because it knows the code. But partial context is a silent ROI killer.</p>

			<p>When your AI misses your conventions, unstated goals, or architectural blind spots, it doesn't stop &mdash; it <strong>hallucinates with high confidence</strong>.</p>

			<a href="/daaft" class="insight-link">
				<div class="insight-box danger">
					<h3>$5,460/year per developer</h3>
					<p>The cost of re-explaining your project every session.</p>
				</div>
			</a>

			<p>We call this <strong>Context-Impairment</strong>. And today, the FAF-1 team is shipping the cure.</p>
		</section>

		<section>
			<h2>The Frontier 4 &mdash; Unified</h2>

			<p>For the first time, four major AI platforms share one scoring standard:</p>

			<div class="frontier-grid">
				<div class="frontier-card claude">
					<span class="frontier-icon">C</span>
					<span class="frontier-name">CLAUDE.md</span>
				</div>
				<div class="frontier-link">&harr;</div>
				<div class="frontier-card gemini">
					<span class="frontier-icon">G</span>
					<span class="frontier-name">GEMINI.md</span>
				</div>
				<div class="frontier-link">&harr;</div>
				<div class="frontier-card openai">
					<span class="frontier-icon">A</span>
					<span class="frontier-name">AGENTS.md</span>
				</div>
				<div class="frontier-link">&harr;</div>
				<div class="frontier-card grok">
					<span class="frontier-icon">G</span>
					<span class="frontier-name">GROK.md</span>
				</div>
			</div>

			<p>One <code>project.faf</code> file. One score. Every AI. The IANA-registered standard that ends context fragmentation.</p>
		</section>

		<section>
			<h2>Under the Hood</h2>

			<h3>Unified Rust Brain</h3>
			<p>One scoring engine compiled to native, WASM, or embedded. 100% parity across every runtime. No more "works in Node but scores differently in Python."</p>

			<h3>33-Slot Enterprise DNA</h3>
			<p>Every project slot is explicitly defined:</p>

			<pre><code>{`Base (21 slots)
├── Project Meta (3)    name, goal, main_language
├── Human Context (6)   who, what, why, where, when, how
├── Frontend Stack (4)  framework, css, ui_library, state
├── Backend Stack (5)   backend, api, runtime, db, connection
└── Universal Stack (3) hosting, build, cicd

Enterprise (+12 slots = 33 total)
├── Infra (5)    monorepo_tool, pkg_manager, workspaces...
├── App (4)      admin, cache, search, storage
└── Ops (3)      versioning, shared_configs, remote_cache`}</code></pre>

			<h3>Three States. No Ambiguity.</h3>
			<p>Every slot is one of:</p>
			<ul>
				<li><strong>Populated</strong> &mdash; Valid, project-specific data</li>
				<li><strong>Empty</strong> &mdash; Missing or placeholder (honest zero)</li>
				<li><strong>Slotignored</strong> &mdash; Not applicable to this project type</li>
			</ul>

			<p>A CLI app doesn't have a frontend. That's 12 slotignored. Score: <code>9/9 = 100%</code>, not <code>9/21 = 43%</code>. The math is honest.</p>

			<h3>Placeholder Rejection</h3>
			<p>The engine rejects filler. <code>"null"</code>, <code>"unknown"</code>, <code>"n/a"</code>, <code>"describe your project goal"</code> &mdash; all score as Empty. No gaming the system.</p>
		</section>

		<section>
			<h2>The Score Formula</h2>

			<div class="formula-box">
				<code>score = populated / (total - slotignored) &times; 100</code>
			</div>

			<p>That's it. Transparent. Deterministic. The same YAML scores identically whether Claude, Gemini, or Grok reads it.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@latest', 'install')}>
				<code class="copy-code">npm install -g faf-cli@latest</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('faf auto', 'auto')}>
				<code class="copy-code">faf auto</code>
				<button class="copy-btn">{copiedId === 'auto' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>One command. Zero to AI-optimized. The Mk4 engine scores your project and syncs context to every AI you use.</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>596/596</strong> &mdash; Tests passing (27 Mk4 engine + 569 existing)</li>
				<li><strong>33 slots</strong> &mdash; Enterprise DNA map</li>
				<li><strong>21 slots</strong> &mdash; Base tier (free forever)</li>
				<li><strong>4 platforms</strong> &mdash; Claude, Gemini, OpenAI, Grok</li>
				<li><strong>1 engine</strong> &mdash; Rust, compiled once, runs everywhere</li>
				<li><strong>91%</strong> &mdash; Token reclaim out the gate. Measured. Not claimed. Relentless pursuit to 100% <code>faf auto</code>.</li>
			</ul>
		</section>

		<section>
			<h2>Why Rust?</h2>

			<p>Because scoring engines don't get to be slow, wrong, or platform-dependent.</p>

			<ul>
				<li><strong>WASM</strong> &mdash; One compile target for browser, edge, and CLI. Same binary, every runtime.</li>
				<li><strong>xAI momentum</strong> &mdash; Grok's infrastructure runs Rust. So does Cloudflare. So does the industry.</li>
				<li><strong>Zero ambiguity</strong> &mdash; No garbage collector. No runtime surprises. The score is the score.</li>
				<li><strong>In Rust We Trust</strong> &mdash; When the engine defines parity across four AI platforms, it needs to be correct by construction. Not by hope.</li>
			</ul>

			<p>TypeScript built the ecosystem. Rust <em>is</em> the engine.</p>
		</section>

		<section>
			<h2>FAF &mdash; Format for AI Context</h2>

			<p>FAF is the specification layer for AI-readable repositories. It doesn't replace your docs. It defines what your docs can't.</p>

			<pre><code>{`src/            → implementation
package.json    → runtime metadata
README.md       → human documentation
project.faf     → AI context`}</code></pre>

			<p class="layer-rule"><strong>MD prose explains. FAF defines. AI consumes.</strong></p>

			<p>CLAUDE.md, GEMINI.md, AGENTS.md, GROK.md &mdash; they're all sync targets. FAF is the source. One file writes them all.</p>
		</section>

		<section>
			<h2>What Changes</h2>

			<p>Before Mk4, each runtime had its own scoring logic. Small divergences crept in. A project could score 95% in one tool and 92% in another.</p>

			<p>After Mk4: <strong>one engine, one truth</strong>. The Rust implementation compiles to WASM for browser/edge, links natively for CLI tools, and runs identically everywhere. Parity isn't aspirational &mdash; it's tested.</p>

			<div class="insight-box">
				<h3>Context-Impairment: Cured</h3>
				<p>Define once in <code>.faf</code>. Score everywhere. Sync to every AI.</p>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				AI needed a Standard for Context. It just got one.
			</p>
			<p>
				Built with .faf ☑️ One file to define them all. ✍️
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8 !important;
		color: #333 !important;
	}

	:global(html) {
		background: #FEFCF8 !important;
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
		line-height: 1.3;
	}

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.hero-caption {
		text-align: center;
		font-size: 0.95rem;
		font-style: italic;
		color: #666;
		margin: 0.75rem 0 0 0;
		padding: 0 1rem;
	}

	.rusty-subtitle {
		font-size: 1.4rem;
		color: #000;
		font-weight: 600;
		font-style: italic;
		margin: 0.25rem 0 0.75rem 0;
	}

	.version-tag {
		display: inline-block;
		background: #1a2744;
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
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.launch {
		background: #00D4D4;
		color: white;
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

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
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
		color: #00D4D4;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	.insight-box {
		background: #f0fffe;
		border: 2px solid #00D4D4;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00B8B8;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.2rem;
		color: #008B8B;
	}

	.insight-box.danger {
		background: #f0fffe;
		border-color: #00D4D4;
	}

	.insight-box.danger h3 {
		color: var(--faf-cyan-text);
	}

	.insight-box.danger p {
		color: #008B8B;
	}

	/* Frontier 4 Grid */
	.frontier-grid {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin: 2rem 0;
		flex-wrap: wrap;
	}

	.frontier-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 1.25rem;
		border-radius: 12px;
		background: #1a1a1a;
		min-width: 100px;
	}

	.frontier-icon {
		font-size: 1.5rem;
		font-weight: 800;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		margin-bottom: 0.25rem;
	}

	.frontier-name {
		font-size: 0.75rem;
		font-weight: 600;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.frontier-card.claude {
		border: 2px solid #FF6B35;
		color: #FF6B35;
	}

	.frontier-card.gemini {
		border: 2px solid #4285F4;
		color: #4285F4;
	}

	.frontier-card.openai {
		border: 2px solid #10A37F;
		color: #10A37F;
	}

	.frontier-card.grok {
		border: 2px solid #ffffff;
		color: #ffffff;
	}

	.frontier-link {
		font-size: 1.5rem;
		color: #999;
		font-weight: 300;
	}

	/* Formula Box */
	.formula-box {
		background: #1a1a1a;
		padding: 1.5rem 2rem;
		border-radius: 8px;
		text-align: center;
		margin: 2rem 0;
	}

	.formula-box code {
		color: #00D4D4;
		background: none;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.layer-rule {
		text-align: center;
		font-size: 1.15rem;
		color: #000;
		margin: 2rem 0;
	}

	/* Copy boxes */
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

	.insight-link {
		text-decoration: none;
	}

	.insight-link:hover .insight-box {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.insight-link .insight-box {
		transition: all 0.2s;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}

		.frontier-grid {
			gap: 0.25rem;
		}

		.frontier-card {
			min-width: 70px;
			padding: 0.75rem;
		}

		.frontier-name {
			font-size: 0.65rem;
		}

		.frontier-link {
			font-size: 1rem;
		}
	}
</style>
