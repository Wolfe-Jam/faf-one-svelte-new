<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Relentless Edition — claude-faf-mcp v5.4.0 | FAF</title>
	<meta name="description" content="Type /faf in Claude Desktop. Your project goes to 100%. Relentlessly. One command. FAF defines. MD instructs. AI codes." />
	<meta property="og:title" content="The Relentless Edition — claude-faf-mcp v5.4.0" />
	<meta property="og:description" content="Type /faf in Claude Desktop. Your project goes to 100%. Relentlessly. One command." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/relentless-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/relentless-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Relentless Edition
		</div>
		<div class="version-tag">v5.4.0</div>
		<h1>The Relentless Edition</h1>
		<p class="subtitle">One command. Relentless pursuit of 100%. Claude Desktop now sings.</p>
		<div class="meta">
			<time datetime="2026-04-13">April 13, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/relentless-hero.png" alt="FAF is relentless. 100% or nothing. — The Relentless Edition v5.4.0" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Type <code>/faf</code> in Claude Desktop. It checks your project, scores it, drives it to 100%, syncs to CLAUDE.md and MEMORY.md, and locks. Relentlessly. One command. Your AI is now optimized.
			</p>
		</section>

		<section>
			<h2>The Problem We Solved</h2>

			<p>FAF has always been about one thing: getting your project context to 100% so your AI is fully optimized. But doing it required knowing the tools — <code>faf_auto</code>, <code>faf_score</code>, <code>faf_go</code>, <code>faf_tri_sync</code>. Steps. Sequence. Effort.</p>

			<p>This is what wolfejam does every time he starts a project. Get to 100%. Sync. Code. Every session is great because Claude is optimized. That workflow IS the product.</p>

			<p>The Relentless Edition captures that workflow in a single command.</p>
		</section>

		<section>
			<h2>Introducing <code>/faf</code></h2>

			<p>Open Claude Desktop. Type <code>/faf</code>. Watch it work.</p>

			<div class="flow-diagram">
				<div class="flow-box conductor">
					<strong>The /faf Flow</strong>
					<ol>
						<li>Check — does project.faf exist?</li>
						<li>Auto — create it if not</li>
						<li>Score — what's missing?</li>
						<li>Go — fill gaps, relentlessly</li>
						<li>Sync — .faf ↔ CLAUDE.md ↔ MEMORY.md</li>
						<li>Lock — 🏆 100%. Done.</li>
					</ol>
				</div>
			</div>

			<p>FAF is relentless in its pursuit of 100% persistent project context — one source of truth that every AI and every MD can benefit from. The <code>/faf</code> prompt doesn't stop until the score is Trophy. No exceptions.</p>

			<div class="insight-box">
				<h3>FAF defines. MD instructs. AI codes.</h3>
				<p>That's the whole system. One command gets you there.</p>
			</div>
		</section>

		<section>
			<h2>What Is a MCP Prompt?</h2>

			<p>MCP has three primitives: Tools (actions), Resources (data), and Prompts (workflows). Until now, FAF only used Tools.</p>

			<p>Prompts appear as <code>/slash</code> commands in Claude Desktop. When you type <code>/faf</code>, Claude receives a detailed workflow instruction and executes it using the 32 FAF tools — automatically, in sequence, without you having to know which tool does what.</p>

			<p>It's the difference between knowing how to drive and having a chauffeur.</p>
		</section>

		<section>
			<h2>The Parallel: <code>bunx faf</code> on Desktop</h2>

			<p>On the CLI, <code>bunx faf</code> runs <code>faf auto</code> — zero to context in one command. Fast. Zero install. Just works.</p>

			<p><code>/faf</code> is that for Claude Desktop. Same philosophy. Same result. Different execution layer.</p>

			<div class="terminal-block">
				<code># CLI</code>
				<code>bunx faf</code>
				<code></code>
				<code># Claude Desktop</code>
				<code>/faf</code>
			</div>

			<p>One source of truth. Every AI. Every session.</p>
		</section>

		<section>
			<h2>Also in v5.4.0</h2>

			<ul>
				<li><strong>32 tools</strong> — removed <code>faf_what</code> (redundant with <code>faf_about</code>). Zero redundancy.</li>
				<li><strong>tri-sync is free</strong> — carried from v5.3.1. <code>.faf ↔ CLAUDE.md ↔ MEMORY.md</code> for all developers. Pro feature. Now free. Teams &amp; Enterprise: <a href="https://faf.one/pro" class="cta-link">faf.one/pro</a> (plans).</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>

			<p>If you already have FAF installed, restart Claude Desktop to pick up v5.4.0. Then open any project and type:</p>

			<div class="terminal-block">
				<code>/faf</code>
			</div>

			<p>If you don't have FAF yet:</p>

			<div class="terminal-block">
				<code>npm install -g claude-faf-mcp</code>
			</div>

			<p>Then add to your <code>claude_desktop_config.json</code>:</p>

			<pre><code>{`{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "claude-faf-mcp"]
    }
  }
}`}</code></pre>

			<p>Restart Claude Desktop. Type <code>/faf</code>.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.4.0</strong> — Released April 13, 2026</li>
				<li><strong>391/391</strong> — Tests passing across 12 suites, 6 platforms</li>
				<li><strong>32 tools + 1 prompt</strong> — Zero redundancy</li>
				<li><strong>🏆 100%</strong> — Trophy score, synced</li>
				<li><strong>50k+</strong> — Downloads across npm, PyPI, crates.io</li>
			</ul>
		</section>

		<section class="share-section">
			<a
				href="https://twitter.com/intent/tweet?text=claude-faf-mcp+v5.4.0+%E2%80%94+The+Conductor+Edition%0A%0AType+%2Ffaf+in+Claude+Desktop.+Your+project+goes+to+100%25.+Relentlessly.%0A%0AFAF+defines.+MD+instructs.+AI+codes.&url=https%3A%2F%2Ffaf.one%2Fblog%2Frelentless"
				target="_blank"
				rel="noopener noreferrer"
				class="share-btn"
			>
				Share on X →
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ FAF is relentless in its pursuit of 100%. One source of truth. 🏎️</p>
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
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
		color: #333;
	}

	.hero-image {
		margin: 1.5rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.breadcrumb {
		font-size: 0.85rem;
		color: #888;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
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

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
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

	.separator { color: #ccc; }

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release { background: #00B8B8; }

	.post-content { font-size: 1.1rem; }

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

	p { margin-bottom: 1.25rem; }

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li { margin-bottom: 0.5rem; }

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

	.insight-box {
		background: var(--faf-surface)5f0;
		border: 2px solid #FF6B35;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #FF6B35;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.1rem;
		color: #333;
	}

	.flow-diagram {
		background: #f8f8f8;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		text-align: center;
	}

	.flow-box {
		display: inline-block;
		padding: 1.5rem 2rem;
		border-radius: 8px;
		text-align: left;
	}

	.flow-box.conductor {
		background: #1a1a1a;
		color: #00ff88;
		border: 2px solid #00D4D4;
	}

	.flow-box strong {
		display: block;
		margin-bottom: 1rem;
		font-size: 1.1rem;
		color: #00D4D4;
	}

	.flow-box ol {
		margin: 0;
		padding-left: 1.5rem;
		color: #00ff88;
	}

	.flow-box li { margin-bottom: 0.4rem; }

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
		font-size: 1rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
	}

	a { color: #FF6B35; }

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover { text-decoration: underline; }

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: #000;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: background 0.2s;
	}

	.share-btn:hover { background: #333; }

	.footer-note {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		color: #888;
		font-size: 0.95rem;
		text-align: center;
	}
</style>
