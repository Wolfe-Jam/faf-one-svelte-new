<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>.FAF: 10,500+ downloads: 5,800 CLI: 4,700 MCP - Persistent project context is Real | FAF</title>
	<meta name="description" content="From desktop frustration to Anthropic approval - .FAF reaches 10,500+ downloads (5,800 CLI + 4,700 MCP) as the Foundational AI context format gains ecosystem traction." />
	<meta property="og:title" content=".FAF: 10,500+ downloads: 5,800 CLI: 4,700 MCP - Persistent project context is Real" />
	<meta property="og:description" content="From desktop frustration to Anthropic approval - Official MCP steward reaches 10,500+ downloads with Foundational AI context format." />
	<meta property="og:image" content="https://cdn.jsdelivr.net/npm/faf-cli@latest/assets/ai-human-balance-50-50.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / 10k Milestone
		</div>
		<h1>.FAF: 10.5k+ downloads: 5,800 CLI: 4,700 MCP - Persistent project context is Real</h1>
		<p class="subtitle">From desktop frustration to Anthropic approval - the Foundational AI context format gains traction</p>
		<div class="meta">
			<time datetime="2025-10-29">October 29, 2025</time>
			<span class="separator">•</span>
			<span class="milestone">10.5k+ Downloads</span>
			<span class="separator">•</span>
			<span class="category">Milestone</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>.FAF (Foundational AI-context Format)</strong> has crossed 10.5k+ downloads on npm (5,800 CLI + 4,700 MCP). It's an actual file format - not a tool, not a product - the first persistent project context standard in the AI development ecosystem.
			</p>

			<blockquote class="creator-quote">
				"AI context needed a file format, it got one"
				<footer>— .faf creator</footer>
			</blockquote>

			<blockquote class="creator-quote">
				"README evolution for AI era"
				<footer>— Google Gemini CLI</footer>
			</blockquote>
		</section>

		<section class="validation">
			<h2>Massive Validation: Anthropic Adopts YAML</h2>
			<p>
				<strong>Breaking:</strong> Anthropic just launched Agent Skills with YAML frontmatter in their SKILL.md specification. A $183BN company independently reached the same conclusion as .faf creator - YAML is the language for AI context.
			</p>

			<div class="code-block">
				<pre><code>{`---
name: skill-name
description: What this skill does
---`}</code></pre>
			</div>

			<p class="code-caption">Anthropic's SKILL.md YAML frontmatter - currently 2 fields only</p>

			<blockquote class="validation-quote">
				"Anthropic uses YAML for frontmatter metadata (2 fields: name, description). Mark my words: YAML is coming, exactly like .faf already uses it. Why not adopt the format, guys?"
				<footer>— .faf creator, October 2025</footer>
			</blockquote>

			<p>
				.faf chose full YAML from day one. Not because it was trendy, but because it works. Now Anthropic validates that YAML is the right choice. The question isn't IF YAML will be adopted more broadly - it's WHY reinvent it when .faf already exists.
			</p>

			<h2>Four Platform Validation Points</h2>
			<p>
				Beyond format validation, this milestone reflects ecosystem adoption across multiple platforms:
			</p>

			<div class="validation-grid">
				<div class="validation-card">
					<div class="validation-badge">
						<img src="/mcp-logo.png" alt="Model Context Protocol" class="mcp-logo-badge" />
					</div>
					<h3>Anthropic MCP Approval</h3>
					<p>
						<strong>First and only persistent project context server</strong> in the official Anthropic MCP ecosystem. PR #2759 merged with validation by Anthropic engineering team.
					</p>
					<p class="validation-stat">4,700 total MCP downloads</p>
				</div>

				<div class="validation-card">
					<div class="validation-badge">
						<img src="/chrome-web-store-badge-medium.png" alt="Available in the Chrome Web Store" class="chrome-store-badge" />
					</div>
					<h3>Google Chrome Web Store</h3>
					<p>
						Chrome extension passed rigorous Google security review and is live in the Chrome Web Store - validation by Google engineering standards.
					</p>
					<p class="validation-stat">Google-approved</p>
				</div>

				<div class="validation-card">
					<div class="validation-icon">🍺</div>
					<h3>Homebrew Distribution</h3>
					<p>
						Available via <code>brew install faf-cli</code> for macOS and Linux users, providing native package management integration.
					</p>
					<p class="validation-stat">5,800 total CLI downloads</p>
				</div>

				<div class="validation-card">
					<div class="validation-icon">📦</div>
					<h3>npm Registry</h3>
					<p>
						Published to npm as <code>faf-cli</code> and <code>claude-faf-mcp</code> - universal JavaScript package manager reaching developers worldwide.
					</p>
					<p class="validation-stat validation-stat-highlight">10.5k+ combined downloads</p>
				</div>
			</div>
		</section>

		<section class="ecosystem">
			<h2>The .FAF Ecosystem</h2>
			<p>
				What started as a devOps tool has evolved into a complete format ecosystem:
			</p>

			<ul>
				<li><strong>fafdev.tools</strong> - Original web based .faf scoring Engine</li>
				<li><strong>faf-cli</strong> - Universal CLI for project initialization and context generation</li>
				<li><strong>claude-faf-mcp</strong> - Official Model Context Protocol server (33 tools)</li>
				<li><strong>.faf format</strong> - We speak YAML and add noodles 🍜 for Claude/AI</li>
			</ul>

			<p>
				All components share a common goal: eliminate the setup tax for AI-augmented development.
			</p>
		</section>

		<section class="why-matters">
			<h2>.faf Is NOT Claude.md (It Makes Claude.md Better)</h2>
			<p>
				<strong>Important:</strong> .faf is not trying to replace claude.md (tools.md) or any AI-specific instruction files. It's complementary.
			</p>

			<p>
				<strong>What they do differently:</strong>
			</p>

			<ul>
				<li><strong>claude.md / tools.md:</strong> Instructions for Claude on HOW to work (tool usage, style preferences, custom instructions)</li>
				<li><strong>.faf:</strong> Facts ABOUT your project that Claude needs to work with (files, structure, dependencies, tech stack)</li>
			</ul>

			<p>
				Think of it this way: claude.md tells Claude how to drive. .faf gives Claude the map.
			</p>

			<p>
				.faf exists to enhance Claude (and Cursor, and Gemini) by giving them structured project context. When Claude has .faf, it can do a better job with whatever instructions you've given it in claude.md.
			</p>

			<h2>Why Not Just package.json?</h2>
			<p>
				The common pushback: "All I need is package.json."
			</p>

			<p>
				<strong>Wrong.</strong>
			</p>

			<blockquote class="creator-quote">
				"package.json wasn't built for this, .faf was"
				<footer>— .faf Inventor</footer>
			</blockquote>

			<blockquote class="creator-quote">
				"package.json gives me a list of dependencies,<br/>.faf shows me how to use them"
				<footer>— Claude Code (Anthropic)</footer>
			</blockquote>

			<p>
				package.json tells you WHAT libraries are installed. .faf tells you WHY they're there, HOW they work together, and WHERE to find the code that matters. That's the difference between a dependency list and project DNA.
			</p>

			<h2>Why Not Just YAML?</h2>
			<p>
				The inevitable question: "It's YAML, why do we need a format?"
			</p>

			<blockquote class="author-analogy">
				Just because you speak English doesn't make you an author. Just because you write YAML doesn't mean you understand how to structure AI context effectively.
			</blockquote>

			<p>
				<strong>.faf isn't just YAML - it's what you DO with YAML:</strong>
			</p>

			<ul>
				<li><strong>Specification:</strong> Tested patterns for AI consumption</li>
				<li><strong>Interconnected structure:</strong> Noodles 🍜, not flat data</li>
				<li><strong>Tested & Proven across 10,000+ projects:</strong> Real-world validation</li>
				<li><strong>BIG-3 AI tested:</strong> Claude, Gemini, OpenAI compatibility verified</li>
				<li><strong>Anthropic-approved:</strong> Official MCP steward for the format</li>
			</ul>

			<p>
				.faf leverages YAML the same way great authors leverage English - it's not about the language, it's about what you build with it.
			</p>
		</section>

		<section class="persistence">
			<h2>Measurable AI-Readiness (0-100%)</h2>
			<p>
				Most AI tools give you a black box - you don't know if your project context is good or garbage. .faf makes it measurable.
			</p>

			<div class="code-block">
				<pre><code>cd your-project
faf init        # Creates .faf file
faf score       # Check AI-readiness (0-100%)</code></pre>
			</div>

			<p>
				<strong>The closer you get to 100%, the better AI knows what you're doing.</strong> Simple as that really.
			</p>

			<p>
				Your .faf file becomes a persistent asset that:
			</p>

			<ul>
				<li>Works in Claude Desktop (via MCP)</li>
				<li>Works in Cursor, VS Code, any editor</li>
				<li>Works in WARP (CLI thrives there)</li>
				<li>Attaches to any AI conversation</li>
				<li>Lives in git with your code</li>
				<li>Shares with your team</li>
			</ul>

			<p>
				The format survives across sessions, tools, and teams. It's project DNA that any AI can read.
			</p>
		</section>

		<section class="technical">
			<h2>Technical Foundation</h2>
			<p>
				The 10k downloads reflect trust in championship-grade engineering:
			</p>

			<ul>
				<li><strong>1,000+ tests:</strong> WJTTC GOLD certified across all tiers</li>
				<li><strong>TypeScript strict mode:</strong> 100% type-safe, zero errors</li>
				<li><strong>Sub-50ms operations:</strong> Average 18ms processing time</li>
				<li><strong>153+ format detections:</strong> TURBO-CAT discovery engine</li>
				<li><strong>BIG-3 validated:</strong> Tested with Claude, Gemini, OpenAI Codex</li>
			</ul>
		</section>

		<section class="get-started">
			<h2>Try It Yourself</h2>

			<p>
				Install via npm (works everywhere) or Homebrew (macOS/Linux):
			</p>

			<div class="code-block">
				<pre><code># npm
npm install -g faf-cli

# Homebrew
brew install faf-cli</code></pre>
			</div>

			<p><strong>Quick start:</strong></p>

			<div class="code-block">
				<pre><code>cd your-project
faf init        # Creates .faf file
faf score       # Check AI-readiness (0-100%)</code></pre>
			</div>

			<p><strong>For Claude Desktop (MCP):</strong></p>

			<p>Add to <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>:</p>

			<div class="code-block">
				<pre><code>{`{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "claude-faf-mcp"]
    }
  }
}`}</code></pre>
			</div>
		</section>

		<section class="links-section">
			<h2>Resources</h2>
			<div class="links">
				<a href="https://github.com/Wolfe-Jam/faf-cli" class="link-button github-button" target="_blank">
					⭐ GitHub CLI
				</a>
				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" class="link-button github-button" target="_blank">
					⭐ GitHub MCP
				</a>
				<a href="https://www.npmjs.com/package/faf-cli" class="link-button npm-button" target="_blank">
					📦 npm CLI
				</a>
				<a href="https://www.npmjs.com/package/claude-faf-mcp" class="link-button npm-button" target="_blank">
					📦 npm MCP
				</a>
			</div>
		</section>

		<section class="conclusion">
			<p class="tagline">
				<strong>Universal. Persistent. Free Forever.</strong>
			</p>
			<p class="brand">
				🏎️⚡ .FAF Format Authority<br />
				🏆 Official Anthropic MCP Steward<br />
				🆓 Open Source MIT
			</p>
			<p class="stats">
				<strong>10.5k+ downloads. 4 platforms. 1 format. 0 vendor lock-in.</strong>
			</p>
		</section>
	</article>

	<footer class="post-footer">
		<div class="author">
			<p>Published by <strong>wolfejam</strong></p>
			<p class="tagline-footer">Format Authority for AI Context 🏎️⚡</p>
		</div>
		<div class="share">
			<p>Share this milestone:</p>
			<div class="share-buttons">
				<a href="https://twitter.com/intent/tweet?text=.FAF%3A%2010.5k%2B%20downloads%3A%205%2C800%20CLI%3A%204%2C700%20MCP%20-%20Persistent%20project%20context%20is%20Real&url=https://faf.one/blog/faf-hits-10k" target="_blank">Twitter</a>
				<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://faf.one/blog/faf-hits-10k" target="_blank">LinkedIn</a>
				<a href="https://news.ycombinator.com/submitlink?u=https://faf.one/blog/faf-hits-10k&t=.FAF%3A%2010.5k%2B%20downloads%3A%205%2C800%20CLI%3A%204%2C700%20MCP%20-%20Persistent%20project%20context%20is%20Real" target="_blank">Hacker News</a>
			</div>
		</div>
	</footer>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-cyan-dark);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: var(--faf-orange);
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #666;
		margin: 0.5rem 0;
		font-weight: 400;
	}

	.meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.875rem;
		color: #666;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.separator {
		color: #ccc;
	}

	.milestone {
		color: var(--faf-orange);
		font-weight: 600;
	}

	.category {
		color: var(--faf-cyan-dark);
		font-weight: 500;
	}

	.post-content {
		font-size: 1.125rem;
	}

	.intro {
		margin-bottom: 3rem;
	}

	.lead {
		font-size: 1.25rem;
		color: #333;
		margin: 1rem 0;
		font-weight: 400;
	}

	.creator-quote {
		font-size: 1.5rem;
		font-weight: 600;
		font-style: italic;
		color: var(--faf-orange);
		border-left: 4px solid var(--faf-cyan-dark);
		padding-left: 1.5rem;
		margin: 2.5rem 0;
		line-height: 1.4;
	}

	.creator-quote footer {
		font-size: 1rem;
		font-weight: 500;
		font-style: normal;
		color: #666;
		margin-top: 0.75rem;
	}

	.author-analogy {
		font-size: 1.25rem;
		font-weight: 500;
		font-style: italic;
		color: #333;
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.08) 0%, rgba(255, 145, 77, 0.08) 100%);
		border-left: 4px solid var(--faf-orange);
		padding: 1.5rem;
		margin: 2rem 0;
		border-radius: 8px;
		line-height: 1.6;
	}

	.validation-quote {
		font-size: 1.25rem;
		font-weight: 600;
		font-style: italic;
		color: #2c3e50;
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.1) 0%, rgba(12, 192, 223, 0.05) 100%);
		border-left: 4px solid var(--faf-cyan-dark);
		padding: 1.5rem;
		margin: 2rem 0;
		border-radius: 8px;
		line-height: 1.6;
	}

	.validation-quote footer {
		font-size: 0.95rem;
		font-weight: 500;
		font-style: normal;
		color: #666;
		margin-top: 0.75rem;
	}

	section {
		margin: 2.5rem 0;
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
		color: #1a1a1a;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 1.5rem 0 0.75rem;
		color: #333;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9em;
		color: var(--faf-cyan-dark);
	}

	.code-block {
		background: #1a1a1a;
		color: var(--faf-cyan-dark);
		padding: 1.5rem;
		border-radius: 8px;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.code-block code {
		background: none;
		padding: 0;
		color: inherit;
	}

	.code-caption {
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		margin-top: -0.5rem;
		margin-bottom: 1.5rem;
	}

	.validation-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.validation-card {
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.05) 0%, rgba(255, 145, 77, 0.05) 100%);
		padding: 1.5rem;
		border-radius: 12px;
		border: 2px solid #e5e5e5;
		transition: transform 0.2s, border-color 0.2s;
	}

	.validation-card:hover {
		transform: translateY(-4px);
		border-color: var(--faf-cyan-dark);
	}

	.validation-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.validation-badge {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.chrome-store-badge {
		height: 50px;
		width: auto;
	}

	.mcp-logo-badge {
		height: 50px;
		width: auto;
	}

	.validation-stat {
		margin-top: 1rem;
		color: var(--faf-orange);
		font-weight: 600;
		font-size: 0.95rem;
	}

	.validation-stat-highlight {
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--faf-orange);
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 145, 77, 0.1) 100%);
		padding: 0.5rem;
		border-radius: 6px;
		margin-top: 1rem;
	}

	.install-options {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin: 2rem 0;
	}

	.install-option h3 {
		color: var(--faf-cyan-dark);
		margin-bottom: 1rem;
	}

	.extension-install {
		margin: 1rem 0;
		color: #666;
		font-size: 0.95rem;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	ul li {
		padding-left: 1.5rem;
		position: relative;
		margin: 0.75rem 0;
	}

	ul li:before {
		content: "▸";
		position: absolute;
		left: 0;
		color: var(--faf-cyan-dark);
		font-weight: bold;
	}

	.links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.link-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.npm-button {
		background: #CB3837;
	}

	.npm-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(203, 56, 55, 0.3);
	}

	.github-button {
		background: #6e5494;
	}

	.github-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(110, 84, 148, 0.3);
	}

	.chrome-button {
		background: #4285f4;
	}

	.chrome-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
	}

	.conclusion {
		margin-top: 3rem;
		text-align: center;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(12, 192, 223, 0.05) 0%, rgba(255, 145, 77, 0.05) 100%);
		border-radius: 12px;
	}

	.tagline {
		font-size: 1.5rem;
		color: #1a1a1a;
		margin: 1rem 0;
	}

	.brand {
		font-size: 1.125rem;
		color: #666;
		margin: 1.5rem 0;
		line-height: 1.8;
	}

	.stats {
		font-size: 1.25rem;
		color: var(--faf-orange);
		margin: 1.5rem 0;
	}

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
	}

	.author {
		text-align: center;
		margin-bottom: 2rem;
	}

	.author p {
		margin: 0.5rem 0;
	}

	.tagline-footer {
		color: #666;
		font-size: 0.875rem;
	}

	.share {
		text-align: center;
	}

	.share p {
		margin: 0.5rem 0;
		color: #666;
	}

	.share-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.share-buttons a {
		padding: 0.5rem 1rem;
		background: #f5f5f5;
		color: #333;
		text-decoration: none;
		border-radius: 6px;
		font-size: 0.875rem;
		transition: background 0.2s;
	}

	.share-buttons a:hover {
		background: var(--faf-cyan-dark);
		color: white;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.post-content {
			font-size: 1rem;
		}

		.lead {
			font-size: 1.125rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.validation-grid {
			grid-template-columns: 1fr;
		}

		.install-options {
			grid-template-columns: 1fr;
		}

		.links {
			flex-direction: column;
		}

		.link-button {
			display: block;
			width: 100%;
		}

		.meta {
			font-size: 0.75rem;
		}
	}
</style>
