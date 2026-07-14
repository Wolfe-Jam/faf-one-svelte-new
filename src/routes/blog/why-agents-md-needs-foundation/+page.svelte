<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `Why AGENTS.md needs a foundation layer.

.faf defines. .md instructs. AI interprets. Three layers, three jobs, no overlap.

AGENTS.md solves the instruction problem. But what defines the project underneath?`;
	const shareUrl = 'https://faf.one/blog/why-agents-md-needs-foundation';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Why AGENTS.md Needs a Foundation Layer | FAF</title>
	<meta name="description" content="AGENTS.md solves the instruction problem. But what defines the project underneath? The missing layer between prose and AI." />
	<meta property="og:title" content="Why AGENTS.md Needs a Foundation Layer" />
	<meta property="og:description" content=".faf defines. .md instructs. AI interprets. Three layers, three jobs, no overlap." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Why AGENTS.md Needs a Foundation Layer
		</div>

		<h1>Why AGENTS.md Needs a Foundation Layer</h1>
		<p class="subtitle">.faf defines. .md instructs. AI interprets.</p>
		<div class="meta">
			<time datetime="2026-02-23">February 23, 2026</time>
			<span class="separator">•</span>
			<span class="category foundation">Foundation</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				Every AI coding tool is solving the same problem: how does the agent understand the project it's working on? AGENTS.md is one answer. CLAUDE.md is another. <code>.cursorrules</code>, <code>CODEX.md</code>, OpenSpec — the list keeps growing. They all solve the instruction problem. None of them solve the definition problem.
			</p>
		</section>

		<section>
			<h2>Instructions vs Definitions</h2>

			<p><strong>An instruction</strong> tells the AI what to do:</p>
			<pre><code>{`"Use async/await for all I/O operations.
Follow the repository pattern for database access."`}</code></pre>

			<p><strong>A definition</strong> tells the AI what the project IS:</p>
			<pre><code>{`stack:
  language: Python
  runtime: Python 3.12
  framework: FastAPI
  build: uv
  database: PostgreSQL
context:
  how: uv run uvicorn src.main:app`}</code></pre>

			<p>Instructions are prose. Definitions are structured data. They serve different purposes.</p>

			<p>AGENTS.md is instructions. It tells agents how to behave. But it doesn't structurally define the project — the stack, the conventions, the entry points, the build system. That information either lives scattered across README, <code>package.json</code>, and config files, or the AI guesses.</p>

			<p>Every session, the AI re-discovers what it already knew.</p>
		</section>

		<section>
			<h2>The Problem With Prose</h2>

			<p>Markdown is great for humans. It's ambiguous for machines.</p>

			<p>When an AI reads "we use React with TypeScript and deploy to Vercel," it has to parse natural language, extract entities, and hope it got it right. There's no schema. No validation. No guarantee that the next AGENTS.md follows the same structure.</p>

			<p><code>package.json</code> solved this for dependencies — structured JSON, predictable fields, machine-parseable. Nobody writes their dependency list in a README and asks npm to figure it out.</p>

			<p>But that's exactly what we're doing with AI project context.</p>
		</section>

		<section>
			<h2>The Three Layers</h2>

			<p>A complete AI context stack has three layers:</p>

			<div class="layer-diagram">
				<div class="layer layer-top">
					<strong>AI Interprets</strong>
					<span>The model reads both layers</span>
				</div>
				<div class="layer layer-mid">
					<strong>.md Instructs</strong>
					<span>AGENTS.md, CLAUDE.md, .cursorrules — prose, tool-specific</span>
				</div>
				<div class="layer layer-bottom">
					<strong>.faf Defines</strong>
					<span>Structured YAML — stack, conventions, entry points — persistent, universal</span>
				</div>
			</div>

			<p>The foundation layer defines what the project IS. The instruction layer tells the AI what to DO. The AI reads both.</p>

			<p>Without a foundation, instruction files float independently. Context gets reinvented per session. Each tool maintains its own copy of the same facts in slightly different prose.</p>

			<p>With a foundation, the structured facts live in one place. Instruction files can focus on what they're good at: tool-specific guidance, team conventions, behavioral rules.</p>
		</section>

		<section>
			<h2>What a Foundation Layer Looks Like</h2>

			<p>~20 lines of YAML:</p>

			<pre><code>{`faf_version: 2.5.0
project:
  name: my-api
  description: REST API for user management
  language: Python
  type: api
  license: MIT
stack:
  language: Python
  runtime: Python 3.12
  framework: FastAPI
  build: uv
  database: PostgreSQL
context:
  what: User management API with OAuth2
  who: Backend team
  how: uv run uvicorn src.main:app`}</code></pre>

			<p>Structured. Predictable. Machine-parseable. No guessing.</p>

			<p>This isn't a replacement for AGENTS.md — it's what AGENTS.md should sit on top of. The foundation handles facts. The instruction file handles behavior.</p>
		</section>

		<section>
			<h2>Bi-Sync, Not Replacement</h2>

			<p>Teams keep their AGENTS.md, CLAUDE.md, whatever they already use. The foundation syncs with them — reads what's there, adds structure alongside it. Nothing gets overwritten. Nothing breaks.</p>

			<p>Over time, structured facts naturally migrate to the foundation layer because that's where they belong. The instruction files get lighter, focused on what prose does best: nuanced guidance that doesn't fit in a schema.</p>

			<p>The foundation is tiny — 1-2KB of YAML. Non-invasive. It earns trust by not breaking anything.</p>
		</section>

		<section>
			<h2>The Format Exists</h2>

			<p>This isn't theoretical. The foundation layer format already exists:</p>

			<ul>
				<li><strong>IANA-registered</strong> MIME type: <code>application/vnd.faf+yaml</code></li>
				<li><strong>27K+ npm downloads</strong> across the <a href="https://www.npmjs.com/package/faf-cli">faf-cli</a>/MCP ecosystem</li>
				<li><strong>MCP servers</strong> for Claude, Gemini, and Grok — all three major AI platforms</li>
				<li><strong>Merged</strong> into the Anthropic MCP registry as a Persistent Project Context Server</li>
			</ul>

			<p>It's called <code>.faf</code> — Foundational AI-context Format. It's been shipping since before AGENTS.md was proposed.</p>
		</section>

		<section>
			<h2>The Real Question</h2>

			<p>The debate shouldn't be "AGENTS.md vs CLAUDE.md vs .cursorrules." Those are all instruction files arguing over which prose format wins.</p>

			<p>The real question is: what defines the project underneath?</p>

			<div class="insight-box">
				<h3>The Three Layer Rule</h3>
				<p><code>.faf</code> defines. <code>.md</code> instructs. AI interprets.</p>
				<p>Three layers. Three jobs. No overlap.</p>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>The <code>.faf</code> format is open, IANA-registered, and free.<br/>
			<a href="https://www.npmjs.com/package/faf-cli">faf-cli on npm</a></p>
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
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.post-header {
		margin-bottom: 3rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #888;
		margin-bottom: 1.5rem;
	}

	.breadcrumb a {
		color: #888;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		color: #FF6B35;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 900;
		color: #000;
		margin: 0 0 0.75rem 0;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
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

	.category.foundation {
		background: var(--faf-foundation-green);
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
		background: var(--faf-surface)5f0;
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
		line-height: 1.7;
	}

	ul {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
		line-height: 1.6;
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
	}

	.layer-diagram {
		margin: 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.layer {
		padding: 1.25rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.layer strong {
		font-size: 1.1rem;
	}

	.layer span {
		font-size: 0.9rem;
		color: #666;
	}

	.layer-top {
		background: #f0f0f0;
		border-radius: 8px 8px 0 0;
		border: 2px solid #ddd;
		border-bottom: 1px dashed #ccc;
	}

	.layer-top strong {
		color: #333;
	}

	.layer-mid {
		background: var(--faf-surface)5f0;
		border-left: 2px solid #ddd;
		border-right: 2px solid #ddd;
		border-bottom: 1px dashed #ccc;
	}

	.layer-mid strong {
		color: #FF6B35;
	}

	.layer-bottom {
		background: #f0fff0;
		border-radius: 0 0 8px 8px;
		border: 2px solid var(--faf-foundation-green);
	}

	.layer-bottom strong {
		color: var(--faf-foundation-green);
	}

	.layer-bottom span {
		color: #006622;
	}

	.insight-box {
		background: #f0fff0;
		border: 2px solid var(--faf-foundation-green);
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: var(--faf-foundation-green);
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0.5rem 0;
		font-size: 1.2rem;
		color: #006622;
	}

	.insight-box code {
		background: #d4f5d4;
		font-size: 1.1em;
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
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}

		.layer {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}
	}
</style>
