<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>V6 New Era — The Standard for AI Context | FAF</title>
	<meta name="description" content="faf-cli v6 — ground-up Bun-native rewrite. MCP server detection, Python/Rust support, format 3.0. Three letters to AI context." />
	<meta property="og:title" content="V6 New Era — The Standard for AI Context" />
	<meta property="og:description" content="Ground-up rewrite. 94% smaller. MCP detection. Three letters to AI context." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / V6 New Era
		</div>

		<h1>V6 New Era</h1>
		<p class="version-tag">faf-cli v6</p>
		<p class="subtitle">The Standard for AI Context</p>
		<div class="meta">
			<time datetime="2026-03-28">March 28, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli v6 is a ground-up Bun-native rewrite. 94% smaller. MCP server detection for 10 frameworks. Python and Rust support. Format version 3.0. And now — three letters is all it takes.
			</p>
		</section>

		<section>
			<h2>Three Letters</h2>

			<div class="terminal-block">
				<code>faf</code>
			</div>

			<p>That's it. No arguments. No flags. <code>faf</code> auto-detects your project, creates or enriches your <code>.faf</code> file, and scores it. From any directory. In any project.</p>

			<ul>
				<li><strong>No .faf?</strong> Creates one.</li>
				<li><strong>Has .faf?</strong> Enriches it.</li>
				<li><strong>Never overwrites.</strong></li>
			</ul>

			<p><code>bunx faf</code> (7 chars). <code>npx faf</code> (6 chars). From anywhere.</p>
		</section>

		<section>
			<h2>The Rewrite</h2>

			<p>v6 is not an upgrade. It's a rebuild. Same format, everything else new.</p>

			<div class="comparison">
				<div class="comparison-row">
					<div class="comp-label"></div>
					<div class="comp-v5">v5</div>
					<div class="comp-v6">v6</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Source</div>
					<div class="comp-v5">53,214 lines</div>
					<div class="comp-v6">3,182 lines</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Package</div>
					<div class="comp-v5">850 KB</div>
					<div class="comp-v6">95 KB</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Files in tarball</div>
					<div class="comp-v5">728</div>
					<div class="comp-v6">6</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Slots</div>
					<div class="comp-v5">21 (Mk3.1)</div>
					<div class="comp-v6">33 (Mk4)</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Scoring</div>
					<div class="comp-v5">TypeScript</div>
					<div class="comp-v6">WASM (Rust)</div>
				</div>
				<div class="comparison-row">
					<div class="comp-label">Runtime deps</div>
					<div class="comp-v5">10+</div>
					<div class="comp-v6">4</div>
				</div>
			</div>
		</section>

		<section>
			<h2>MCP Server Detection</h2>

			<p>10 MCP frameworks. Auto-detected. Your MCP server gets the right type, backend, and framework sub-type.</p>

			<pre><code>{`project:
  type: mcp
  framework: fastmcp
stack:
  backend: FastMCP
  api_type: MCP (stdio/SSE)`}</code></pre>

			<p>Tested against real repos:</p>

			<ul>
				<li><strong>claude-faf-mcp</strong> — 44% cli → <strong>59% mcp</strong></li>
				<li><strong>grok-faf-mcp</strong> — 44% cli → <strong>59% mcp</strong></li>
				<li><strong>gemini-faf-mcp</strong> — 33% library → <strong>41% mcp</strong></li>
			</ul>
		</section>

		<section>
			<h2>Python & Rust</h2>

			<p>Project name, description, and dependencies read from <code>pyproject.toml</code> and <code>Cargo.toml</code>. FastAPI, Django, Flask, SQLAlchemy, rmcp — all detected from manifests.</p>

			<p>Next.js now supersedes React. Nuxt supersedes Vue. SvelteKit supersedes Svelte. Meta-frameworks win.</p>
		</section>

		<section>
			<h2>Why We Sunset v5</h2>

			<p>v5 did its job. It proved the format, got the IANA registration, shipped 45k+ downloads, and earned Anthropic's MCP #2759 merge. But it was carrying weight from every pivot and experiment along the way.</p>

			<ul>
				<li><strong>53,214 lines</strong> for a CLI that generates a YAML file</li>
				<li><strong>10+ runtime dependencies</strong> — webpack configs pointing to files that didn't exist</li>
				<li><strong>850 KB package</strong> with 728 files in the tarball</li>
				<li><strong>Jest test runner</strong> fighting with Bun's single-process model</li>
			</ul>

			<p>The architecture served its purpose. The format won. The code needed to go. <a href="/blog/sunset-edition">Read the Sunset Edition post →</a></p>
		</section>

		<section>
			<h2>What's New in v6</h2>

			<h3>MCP Server Detection</h3>
			<p>10 MCP frameworks architected. Your MCP server gets the right project type, backend slot, and framework sub-type — automatically. <code>@modelcontextprotocol/sdk</code>, <code>fastmcp</code>, <code>mcp</code> (Python), <code>rmcp</code> (Rust), plus Go, .NET, and more queued.</p>

			<h3>Format Version 3.0</h3>
			<p>All generated <code>.faf</code> files now use <code>faf_version: "3.0"</code>. Cascades to migrate, TAF receipts, and share URLs. Your existing files still work — the WASM kernel accepts any version.</p>

			<h3>Python & Rust Support</h3>
			<p>Project name and description from <code>pyproject.toml</code> and <code>Cargo.toml</code>. Dependencies parsed for stack detection — FastAPI, Django, Flask, SQLAlchemy, rmcp, all detected from manifests.</p>

			<h3>Meta-Framework Supersede</h3>
			<p>Next.js beats React. Nuxt beats Vue. SvelteKit beats Svelte. When a meta-framework is detected alongside its base, the meta-framework wins.</p>

			<h3>Safe Sync</h3>
			<p>Sync never overwrites existing CLAUDE.md. Stamps a <code>&lt;!-- faf: ... --&gt;</code> meta tag at line 1 — invisible to renderers, visible to AI. Idempotent. Your hand-crafted content is sacred.</p>

			<h3>Pre-Commit Lint</h3>
			<p>Lint errors blocked at commit time. Warnings pass. No more red CI from a missing semicolon.</p>

			<h3>Three Letters</h3>
			<p><code>faf</code> with no arguments runs <code>faf auto</code>. Creates or enriches. Never overwrites. Three letters to AI context.</p>
		</section>

		<section>
			<h2>33 Slots — Solo to Fortune 500</h2>

			<p>Mk4 scores 33 slots across 8 categories. A solo dev's CLI tool uses 9 active slots. An enterprise full-stack monorepo uses all 33. Same format, same engine, same score — the slots that don't apply are <code>slotignored</code>.</p>

			<p>From a weekend project to a Fortune 500 codebase. One format scales.</p>
		</section>

		<section>
			<h2>FAFb — The Compiled Binary</h2>

			<p><code>faf compile</code> turns your <code>.faf</code> into a sealed <code>.fafb</code> binary. 32-byte header, CRC32 checksum, priority-ordered sections. The score is baked in at compile time — no re-scoring, no divergence.</p>

			<p>YAML is source code. FAFb is compiled output. WASM is the compiler. The Triangle of Trust.</p>
		</section>

		<section>
			<h2>Why Does AI Need Context?</h2>

			<p>Without context, AI guesses. It suggests the wrong framework, the wrong patterns, the wrong conventions. It hallucinates architecture. It introduces bugs you won't find until production.</p>

			<p>With context, AI knows. Your stack. Your conventions. Your architecture. Every session. Every tool. No re-explaining.</p>

			<p>That context needs a format. Not prose — structure. Not a README — a machine-readable file that any AI can parse in milliseconds.</p>

			<p>AI likes structured data. Give it the facts in YAML — your stack, your conventions, your architecture. Then use your tokens on custom instructions that actually matter. Don't waste them explaining that you use Next.js for the hundredth time.</p>
		</section>

		<section>
			<h2>What is WASM?</h2>

			<p>WebAssembly. The same Rust scoring engine runs in your terminal, in your browser, at the edge, in Node, in Bun. One binary, any platform. The score is deterministic — Claude, Gemini, Grok, Cursor all score the same file the same way.</p>

			<p>No server. No API calls. No network dependency. The compiler runs locally. 284 microseconds per score.</p>
		</section>

		<section>
			<h2>Why FAF is Different</h2>

			<p>CLAUDE.md is instructions. AGENTS.md is agent config. .cursorrules is Cursor-specific. Every AI tool invented its own context file. None of them are portable. None of them are scorable. None of them are registered standards.</p>

			<p>FAF is the format layer underneath all of them. IANA-registered. Machine-readable. Universal. One <code>.faf</code> file syncs to CLAUDE.md, AGENTS.md, GEMINI.md, and .cursorrules. Define once, use everywhere.</p>

			<p>Why not just use CLAUDE.md? Because it only works with Claude. GEMINI.md only works with Gemini. AGENTS.md only works with agent frameworks. .cursorrules only works with Cursor. Conductor only works with Conductor.</p>

			<p><code>.faf</code> works with all of them. And it generates them. <code>faf export --agents --cursor --gemini</code> — one source, every format.</p>

			<p>The others are instructions. FAF is infrastructure.</p>
		</section>

		<section>
			<h2>Why It Matters</h2>

			<p>Every AI tool starts from zero. You open Claude, explain your stack, describe your architecture, list your conventions. Next session — same thing. New tool — same thing.</p>

			<p>10 lines of structured YAML gives AI more context than 550 lines of prose. That's not a feature. That's a format.</p>

			<p><code>project.faf</code> sits next to <code>package.json</code>. It versions with your code. Every clone, every fork, every checkout — full AI context. No setup, no drift, no re-explaining.</p>

			<p>Markdown wasn't built to define schema for AI. YAML was. That's why <code>package.json</code> isn't a <code>package.md</code>. That's why <code>tsconfig.json</code> isn't a <code>tsconfig.md</code>. And that's why AI context shouldn't live in a markdown file either.</p>

			<p><strong>FAF defines. CLAUDE.md instructs. AI consumes.</strong></p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="terminal-block">
				<code>bunx faf-cli auto</code>
			</div>

			<p>Or just:</p>

			<div class="terminal-block">
				<code>faf</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v6.0.10</strong> — Released March 28, 2026</li>
				<li><strong>375/375</strong> — Tests passing</li>
				<li><strong>100%</strong> — Trophy score (faf-cli scores itself)</li>
				<li><strong>45,000+</strong> — Downloads across npm, PyPI, crates.io</li>
				<li><strong>IANA registered</strong> — <code>application/vnd.faf+yaml</code></li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=faf-cli%20v6%20%E2%80%94%20The%20Standard%20for%20AI%20Context.%20Ground-up%20rewrite.%2094%25%20smaller.%20MCP%20detection.%20Three%20letters%20to%20AI%20context.&url=https://faf.one/blog/v6-new-era" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ FAF defines. AI consumes. 🏎️</p>
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
		font-size: 2.5rem;
		margin: 0.5rem 0;
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
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.3rem;
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
		font-weight: 600;
	}

	.category.launch {
		background: #FF6B35;
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

	p {
		margin-bottom: 1.25rem;
	}

	ul {
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
		font-size: 0.9rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
		color: #00D4D4;
	}

	.terminal-block {
		background: #1a1a1a;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.terminal-block code {
		display: block;
		color: #00ff88;
		background: none;
		padding: 0.25rem 0;
		font-size: 1.1rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
	}

	.comparison {
		background: #f8f8f8;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.comparison-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
	}

	.comparison-row:first-child {
		font-weight: 700;
	}

	.comparison-row:last-child {
		border-bottom: none;
	}

	.comp-label {
		font-weight: 600;
		color: #666;
	}

	.comp-v5 {
		text-align: center;
		color: #999;
	}

	.comp-v6 {
		text-align: center;
		font-weight: 600;
		color: #00B8B8;
	}

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

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.blog-post {
			padding: 1rem;
		}

		.comparison-row {
			font-size: 0.9rem;
		}
	}
</style>
