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
</script>

<svelte:head>
	<title>The Desktop Edition - claude-faf-mcp v5.0 + v5.1 | FAF</title>
	<meta name="description" content="33 MCP tools. Tool annotations. Nelly tri-sync (Pro). 3Ws for non-developers. One-click Desktop Extensions install." />
	<meta property="og:title" content="The Desktop Edition - claude-faf-mcp v5.0 + v5.1" />
	<meta property="og:description" content="33 MCP tools. Nelly tri-sync for persistent AI memory. 3Ws — answer 3 questions and your AI stops guessing." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Desktop Edition
		</div>

		<h1>The Desktop Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.0 + v5.1</p>
		<p class="subtitle">One-click install. Nelly never forgets. No terminal required.</p>
		<div class="meta">
			<time datetime="2026-03-04">March 4, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> v5.0 added tool annotations to all 32 MCP tools, privacy policy, and Desktop Extensions manifest. v5.1 adds tool #33 &mdash; <code>faf_tri_sync</code> &mdash; Nelly&#x1F418; makes your AI remember across sessions. Answer 3 questions (the 3Ws) and your AI stops guessing.
			</p>
		</section>

		<section>
			<h2>Why v5</h2>

			<p>FAF has been in the MCP ecosystem since <a href="https://github.com/modelcontextprotocol/servers/pull/2759">PR #2759</a>. But installing it still meant opening a terminal and editing <code>claude_desktop_config.json</code>. That's fine for developers. Not fine for everyone else.</p>

			<p>Desktop Extensions change that. One click in Claude Desktop &rarr; Settings &rarr; Extensions. Done.</p>

			<p>Anthropic requires specific things for approval. v5 delivers all of them.</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>Tool Annotations (All 32 Tools &rarr; 33 in v5.1)</h3>
			<p>Every tool now declares what it does &mdash; read-only, write, or destructive &mdash; so Claude Desktop can show users what's happening before it happens.</p>

			<pre><code>{`// Read-only: 16 tools
{ readOnlyHint: true, openWorldHint: false }

// Write/modify: 15 tools
{ readOnlyHint: false, destructiveHint: false }

// Destructive: 1 tool (faf_clear)
{ readOnlyHint: false, destructiveHint: true }`}</code></pre>

			<p>This is the #1 reason Desktop Extensions get rejected. Not us.</p>

			<h3>Privacy Policy</h3>
			<p>FAF processes everything locally. No data leaves your machine. No analytics, no telemetry, no tracking, no accounts. Now it's written down in <a href="https://github.com/Wolfe-Jam/claude-faf-mcp/blob/main/PRIVACY.md">PRIVACY.md</a> &mdash; the #2 rejection reason, handled.</p>

			<h3>Desktop Extensions Manifest</h3>
			<p>Clean <code>manifest.json</code> (v0.3) with all 33 tools listed, privacy policy linked, 512px icon. Validated with <code>mcpb validate</code>, packed at 63KB.</p>

			<h3>Non-Developer Section</h3>
			<p>New README section for people who've never opened a terminal:</p>

			<div class="insight-box">
				<h3>3 Steps</h3>
				<p>1. Install from Claude Desktop &rarr; Settings &rarr; Extensions<br/>
				2. Tell Claude about your project<br/>
				3. Claude creates your project DNA</p>
			</div>
		</section>

		<section>
			<h2>v5.1 &mdash; Nelly Edition &#x1F418;&#x1F9E1;</h2>

			<p>Same day, one more tool. Meet Nelly.</p>

			<h3>The 3Ws &mdash; Start Here</h3>
			<p>Answer 3 questions. That's all your AI needs.</p>

			<div class="ws-grid">
				<div class="w-card">
					<span class="w-label">&#x1F465; WHO</span>
					<p>Who is it for? Not you &mdash; them.</p>
				</div>
				<div class="w-card">
					<span class="w-label">&#x1F4E6; WHAT</span>
					<p>What do they get? Not features &mdash; the outcome.</p>
				</div>
				<div class="w-card">
					<span class="w-label">&#x1F3AF; WHY</span>
					<p>What's broken today? Why must this exist?</p>
				</div>
			</div>

			<p>Tell Claude your 3Ws and FAF turns them into project DNA that never drifts. <a href="https://faf.one/ideas">Build yours &rarr;</a></p>

			<h3>Tool #33: faf_tri_sync (Pro)</h3>
			<p>bi-sync keeps <code>.faf</code> and <code>CLAUDE.md</code> aligned &mdash; free forever. tri-sync adds RAM: your AI remembers across sessions via <code>MEMORY.md</code>.</p>

			<pre><code>{`  bi-sync  = ROM (.faf) ↔ CLAUDE.md           ← free forever
  tri-sync = ROM ↔ CLAUDE.md ↔ RAM (MEMORY.md) ← Pro`}</code></pre>

			<p>14-day free trial, no signup. Then a dime a day ($3/mo) or a nickel a day ($19/yr). $29/yr Global covers both CLI + MCP.</p>

			<p><a href="https://faf.one/pro">Friends of FAF &rarr;</a></p>

			<h3>&#x1F418; Feed Nelly &mdash; She Never Forgets</h3>
			<p>Nelly is the tri-sync mascot. She remembers what your AI forgets between sessions. Feed her a dime a day and she'll never let your context drift.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npx claude-faf-mcp@5.1.0', 'install')}>
				<code class="copy-code">npx claude-faf-mcp@5.1.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or tell Claude:</p>

			<div class="copy-box" onclick={() => copyText('Score my project\'s AI-readiness and tell me how to improve.', 'prompt')}>
				<code class="copy-code">Score my project's AI-readiness and tell me how to improve.</code>
				<button class="copy-btn">{copiedId === 'prompt' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v5.1.0" class="cta-link">v5.1.0 Release</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v5.0 + v5.1</strong> &mdash; Released March 4, 2026</li>
				<li><strong>351/351</strong> &mdash; Tests passing</li>
				<li><strong>33/33</strong> &mdash; Tools annotated</li>
				<li><strong>100%</strong> &mdash; Trophy score</li>
				<li><strong>33,000+</strong> &mdash; npm downloads (ecosystem)</li>
			</ul>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; Orange Smiley in the menu. That's the goal. &#127950;</p>
		</section>
	</article>
</div>

<style>
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
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #FF6B35;
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
		background: #f0fff0;
		border: 2px solid #00aa44;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00aa44;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.2rem;
		color: #006622;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
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

	.ws-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 1.5rem 0;
	}
	.w-card {
		background: #fff5f0;
		border: 2px solid #FF6B35;
		border-radius: 8px;
		padding: 1rem;
		text-align: center;
	}
	.w-label {
		display: block;
		font-weight: 700;
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
		color: #FF6B35;
	}
	.w-card p {
		margin: 0;
		font-size: 0.95rem;
		color: #555;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}
		.ws-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
