<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>I Showed Grok My .faf Format. It Went From Skeptic to Evangelist in One Session. | FAF</title>
	<meta name="description" content="How a 40-line project context file gave xAI's Grok persistent memory and zero context drift - with full demo and code." />
	<meta property="og:title" content="Grok: Skeptic to Evangelist in One Session" />
	<meta property="og:description" content="Persistent AI context with .faf format - demonstrated live on Grok API" />
	<meta property="og:image" content="/blog-assets/grok-faf-mcp-banner.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Grok: Skeptic to Evangelist
		</div>

		<h1>I Showed Grok My .faf Format. It Went From Skeptic to Evangelist in One Session.</h1>
		<p class="subtitle">40 lines of project DNA. Zero context drift. Production code shipped.</p>
		<div class="meta">
			<time datetime="2025-12-30">December 30, 2025</time>
			<span class="separator">•</span>
			<span class="category">Case Study</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> I uploaded a 40-line .faf file to Grok. It instantly understood my entire project. We shipped a production-ready GitHub code reviewer in one session with zero context drift. Grok's own words: "It felt like working with a partner who'd been on the project for months."
			</p>

			<div class="hero-image">
				<img src="/blog-assets/grok-faf-mcp-banner.png" alt="First MCP Server for Grok - 17 Tools, 19ms, Zero Config" />
				<p class="image-caption">grok-faf-mcp: Persistent AI context for xAI's Grok</p>
			</div>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>Every AI coding session starts the same way:</p>

			<blockquote>
				"I'm building a TypeScript project with Hono and Zod. We use Result types instead of throwing. The entry point is src/index.ts. We prefer pure functions. Here's the file structure..."
			</blockquote>

			<p>Ten minutes of context-setting before you write a single line of code. And if you start a new session? Do it again. Context drift kicks in around message 20. By message 50, the AI has forgotten half your constraints.</p>

			<p>I got tired of this. So I built <a href="/">.faf (Foundational AI-context Format)</a> - a simple file format that captures your project's DNA in a way any AI can instantly understand.</p>
		</section>

		<section>
			<h2>The Experiment</h2>

			<p>I wanted to test .faf on Grok. Not through a curated demo, but a real build session. The task: create a GitHub PR code reviewer powered by Grok's API.</p>

			<p>I uploaded this 40-line file:</p>

			<pre><code>{`# grok-code-reviewer.faf
# Foundational AI-Context Format v2.8

[project]
name = "grok-code-reviewer"
version = "0.1.0"
description = "AI-powered code review agent using Grok"

[stack]
language = "TypeScript"
runtime = "Node.js 20+"
framework = "Hono"

[dependencies]
core = ["openai", "hono", "zod", "dotenv"]
github = ["octokit", "@octokit/webhooks"]

[structure]
src/index.ts = "API server entry point"
src/agent.ts = "Core Grok review agent logic"
src/github/ = "GitHub API integration"

[ai_instructions]
validation = "Always use Zod schemas"
style = "Prefer pure functions"
errors = "Use Result types over throwing"
api = "Use Grok-4 model for analysis"`}</code></pre>

			<p>Grok's immediate response:</p>

			<div class="screenshot-showcase">
				<img src="/blog-assets/grok-95-loaded.png" alt="Grok response showing 95/100 FAF score" />
				<p class="image-caption">Grok instantly parsed the .faf file and locked in full project context</p>
			</div>

			<blockquote class="grok-quote">
				"project.faf loaded perfectly - v2.8 format recognized, score estimates ~95/100. I now have complete, persistent context for grok-code-reviewer. This is locked in. No more re-explaining the project - ever."
				<cite>— Grok</cite>
			</blockquote>
		</section>

		<section>
			<h2>What We Built</h2>

			<p>In one continuous session, with zero re-explaining:</p>

			<table>
				<thead>
					<tr>
						<th>Step</th>
						<th>Output</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1. Bootstrap</td>
						<td>Full project skeleton (package.json, tsconfig, .env)</td>
					</tr>
					<tr>
						<td>2. Agent</td>
						<td>Grok-4 review logic with Zod validation</td>
					</tr>
					<tr>
						<td>3. GitHub</td>
						<td>Webhook handler + Octokit integration</td>
					</tr>
					<tr>
						<td>4. Review</td>
						<td>Auto-post reviews with line comments</td>
					</tr>
				</tbody>
			</table>

			<p>Then I reviewed the code. Found 9 issues. Asked Grok to fix them. It did. Found one more. Fixed that too. 10 total. Zero left.</p>

			<div class="screenshot-showcase">
				<img src="/blog-assets/file-tree.png" alt="Final project file tree" />
				<p class="image-caption">9 files. Zero context drift. Production-ready.</p>
			</div>
		</section>

		<section>
			<h2>The Key Insight</h2>

			<p>After the session, I asked Grok what surprised it most about working with .faf:</p>

			<blockquote class="grok-quote highlight">
				"Most AI sessions feel like collaborating with someone who has short-term memory loss - constantly re-onboarding. With .faf, it felt like working with a partner who'd been on the project for months."
				<cite>— Grok</cite>
			</blockquote>

			<p>And the technical takeaway:</p>

			<blockquote class="grok-quote">
				"Stop treating context as ephemeral tokens. Treat it as persistent, structured project memory - because when you do, the human and AI stop fighting friction and start compounding velocity."
				<cite>— Grok</cite>
			</blockquote>

			<div class="insight-box">
				<h3>The Shift</h3>
				<p>.faf doesn't just save time. It unlocks a qualitatively different kind of collaboration - one where the AI is truly <em>inside</em> the project, not outside looking in.</p>
			</div>
		</section>

		<section>
			<h2>Why This Matters</h2>

			<p>Grok has a 2M token context window. That's the <em>hardware</em>. But without structure, those tokens are just a larger bucket for unorganized context to drift around in.</p>

			<p>.faf is the <em>interface</em>. It tells the AI:</p>
			<ul>
				<li>What this project is</li>
				<li>How it's structured</li>
				<li>What conventions to follow</li>
				<li>What the AI should and shouldn't do</li>
			</ul>

			<p><strong>Long context is the hardware. .faf is the OS.</strong></p>

			<p>40 lines. Instant alignment. Zero drift.</p>
		</section>

		<section>
			<h2>Try It Yourself</h2>

			<p>The format is open and works with any AI:</p>

			<ul>
				<li><strong>Claude:</strong> Official MCP server in Anthropic's ecosystem</li>
				<li><strong>Grok:</strong> <a href="https://grok-faf-mcp.vercel.app/sse">grok-faf-mcp</a> server (17 tools, 19ms, zero config)</li>
				<li><strong>Any AI:</strong> Just upload the .faf file - they understand it</li>
			</ul>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>Get Started</h3>
					<p>Create your first .faf file in 2 minutes.</p>
					<a href="/" class="cta-link">Learn More →</a>
				</div>
				<div class="cta-box">
					<h3>View Spec</h3>
					<p>Open format, MIT licensed.</p>
					<a href="https://github.com/Wolfe-Jam/faf" class="cta-link">GitHub →</a>
				</div>
			</div>
		</section>

		<section>
			<h2>Full Conversation</h2>

			<p>The entire build session is public. Watch Grok go from loading the .faf to shipping production code:</p>

			<div class="link-cards">
				<a href="https://x.com/i/grok/share/bWWQ7qHbCjHc2Wx3G9WZUq5ay" class="link-card" target="_blank" rel="noopener">
					<span class="link-icon">💬</span>
					<span class="link-text">View the full Grok conversation</span>
				</a>
				<a href="https://x.com/wolfe_jam/status/2006002338985566436" class="link-card" target="_blank" rel="noopener">
					<span class="link-icon">🐦</span>
					<span class="link-text">@wolfe_jam thread on X</span>
				</a>
			</div>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?url=https://faf.one/blog/grok-skeptic-to-evangelist" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Zero drift. Pure velocity. 🍊
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) { background: var(--faf-cream); }

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
		border-bottom: 2px solid #FF6B35;
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

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f8f8f8;
		border-radius: 8px;
	}

	.hero-image {
		margin: 2rem 0;
		text-align: center;
	}

	.hero-image img {
		max-width: 100%;
		border-radius: 12px;
		border: 2px solid #FF6B35;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.15);
	}

	.image-caption {
		margin-top: 0.75rem;
		color: #666;
		font-size: 0.9rem;
		font-style: italic;
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

	blockquote {
		background: #f8f8f8;
		border-left: 4px solid #ccc;
		padding: 1.25rem 1.5rem;
		margin: 1.5rem 0;
		border-radius: 0 8px 8px 0;
		font-style: italic;
	}

	.grok-quote {
		border-left-color: #00D4D4;
		background: linear-gradient(135deg, #f0fafa 0%, #f8f8f8 100%);
	}

	.grok-quote.highlight {
		border-left-color: #FF6B35;
		background: linear-gradient(135deg, #fff5f0 0%, #f8f8f8 100%);
	}

	.grok-quote cite {
		display: block;
		margin-top: 0.75rem;
		font-style: normal;
		color: var(--faf-cyan-text);
		font-size: 0.9rem;
		font-weight: 600;
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

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
	}

	th, td {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.screenshot-showcase {
		margin: 2rem 0;
		text-align: center;
	}

	.screenshot-showcase img {
		max-width: 100%;
		border-radius: 12px;
		border: 2px solid #eee;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.insight-box {
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 212, 212, 0.1) 100%);
		border: 1px solid #FF6B35;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.insight-box h3 {
		color: #FF6B35;
		margin: 0 0 0.75rem 0;
	}

	.insight-box p {
		margin: 0;
	}

	ul {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
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

	.link-cards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.link-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #f8f8f8;
		border-radius: 8px;
		text-decoration: none;
		color: #333;
		transition: all 0.2s;
		border: 1px solid #eee;
	}

	.link-card:hover {
		background: #FF6B35;
		color: white;
		border-color: #FF6B35;
	}

	.link-icon {
		font-size: 1.5rem;
	}

	.link-text {
		font-weight: 500;
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

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
