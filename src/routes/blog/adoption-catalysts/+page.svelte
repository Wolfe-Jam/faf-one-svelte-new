<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Adoption Catalysts Edition - claude-faf-mcp v4.1.0 | FAF</title>
	<meta name="description" content="Two new features make AI-readiness instant: 6Ws Builder integration and automatic README extraction. Zero manual work required." />
	<meta property="og:title" content="Adoption Catalysts Edition - claude-faf-mcp v4.1.0" />
	<meta property="og:description" content="6Ws Builder integration and automatic README extraction make AI-readiness instant." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Adoption Catalysts Edition
		</div>

		<h1>Adoption Catalysts Edition</h1>
		<p class="version-tag">claude-faf-mcp v4.1.0</p>
		<p class="subtitle">Two paths to Gold Code. Zero manual work required.</p>
		<div class="meta">
			<time datetime="2026-02-09">February 9, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp v4.1.0 adds two features designed to re-engage adoption: <code>faf_human_add</code> for web form integration (faf.one/6ws) and <code>faf_readme</code> for automatic README extraction. Both deliver +25-35% AI-readiness score boosts with zero manual work.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>
			<p>Adoption slowed. Users wanted context but building it felt like work.</p>

			<p><strong>Two friction points:</strong></p>
			<ul>
				<li><strong>Starting from scratch</strong> - Empty .faf files, manual entry, slow</li>
				<li><strong>Existing projects</strong> - Already have READMEs, why type it twice?</li>
			</ul>

			<p>We needed catalysts. Features that make AI-readiness <em>instant</em>.</p>
		</section>

		<section>
			<h2>The Solution: Two Paths to Gold Code</h2>

			<h3>Path 1: 6Ws Builder + <code>faf_human_add</code></h3>
			<p>For projects starting fresh or developers who prefer guided workflows.</p>

			<div class="workflow">
				<div class="step">
					<strong>1. Visit faf.one/6ws</strong>
					<p>Answer 6 questions in a clean web form</p>
				</div>
				<div class="arrow">→</div>
				<div class="step">
					<strong>2. Copy YAML</strong>
					<p>One-click copy to clipboard</p>
				</div>
				<div class="arrow">→</div>
				<div class="step">
					<strong>3. Paste to Claude</strong>
					<p>Claude uses <code>faf_human_add</code> tool</p>
				</div>
				<div class="arrow">→</div>
				<div class="step">
					<strong>4. Context merged</strong>
					<p>Score jumps +25-35% instantly</p>
				</div>
			</div>

			<p><strong>What <code>faf_human_add</code> does:</strong></p>
			<ul>
				<li>Merges YAML from web form into project.faf</li>
				<li>Sets individual fields (who/what/where/why/when/how)</li>
				<li>Non-interactive bundled command (MK3 engine)</li>
				<li>Works in Claude Desktop headless environment</li>
			</ul>

			<h3>Path 2: Automatic README Extraction + <code>faf_readme</code></h3>
			<p>For projects that already have a README.md.</p>

			<p><strong>User:</strong> "Extract context from my README"</p>
			<p><strong>Claude:</strong> Uses <code>faf_readme</code> tool</p>

			<div class="terminal-block">
				<code>{`📄 README Context

README: /path/to/README.md
Confidence: 82%
Fields found: 5/6

WHO: developers using AI assistants
WHAT: Creates persistent AI context
WHERE: Terminal, Browser, CI/CD
WHY: AI needs context to perform well
HOW: npm install -g faf-cli

Next steps:
1. Run faf_readme { merge: true } to merge into project.faf
2. Fill missing field at faf.one/6ws
3. Your context is now available to all AI assistants`}</code>
			</div>

			<p><strong>What <code>faf_readme</code> does:</strong></p>
			<ul>
				<li>Intelligent pattern matching for 6 Ws extraction (309 lines from faf-cli v4.3.0)</li>
				<li>Confidence scoring per field</li>
				<li>Extract-only mode (preview) or auto-merge to project.faf</li>
				<li>Handles 20+ README patterns (bold subtitles, blockquotes, Quick Start sections)</li>
				<li>Same +25-35% score boost as manual entry</li>
			</ul>
		</section>

		<section>
			<h2>The Architecture</h2>
			<p>Both features use the <strong>MK3 Bundled Engine</strong> pattern:</p>

			<ul>
				<li><strong>Zero CLI dependencies</strong> - Commands bundled directly in MCP server</li>
				<li><strong>Non-interactive</strong> - Designed for Claude Desktop headless environment</li>
				<li><strong>16.2x faster</strong> - No process spawning, direct function calls</li>
				<li><strong>Championship testing</strong> - 44 new tests (212 → 256 total)</li>
			</ul>

			<p><strong>Test coverage breakdown:</strong></p>
			<ul>
				<li>21 tests for <code>human-context.test.ts</code> (YAML merge, field validation, edge cases)</li>
				<li>23 tests for <code>readme-extraction.test.ts</code> (pattern matching, confidence scoring, merge behavior)</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>

			<p><strong>Install or update:</strong></p>
			<div class="terminal-block">
				<code>npm install -g claude-faf-mcp@4.1.0</code>
			</div>

			<p><strong>Path 1 - Web Form:</strong></p>
			<ol>
				<li>Visit <a href="https://faf.one/6ws" target="_blank">faf.one/6ws</a></li>
				<li>Fill 6 questions</li>
				<li>Copy YAML</li>
				<li>Paste to Claude → "Add this to my project"</li>
			</ol>

			<p><strong>Path 2 - README Extraction:</strong></p>
			<ol>
				<li>Open Claude Desktop in your project</li>
				<li>Say: "Extract context from my README"</li>
				<li>Review extracted fields</li>
				<li>Say: "Merge it" to add to project.faf</li>
			</ol>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v4.1.0</strong> - Released February 9, 2026</li>
				<li><strong>256/256</strong> - Tests passing (Championship Grade)</li>
				<li><strong>52 MCP tools</strong> - Complete context management suite</li>
				<li><strong>21,000+</strong> - npm downloads</li>
				<li><strong>+25-35%</strong> - Typical score boost from either path</li>
				<li><strong>19ms</strong> - Average tool execution time</li>
			</ul>
		</section>

		<section>
			<h2>What Changed</h2>

			<h3>Added</h3>
			<ul>
				<li><code>faf_human_add</code> tool - Complete 6Ws Builder workflow</li>
				<li><code>faf_readme</code> tool - Automatic README context extraction</li>
				<li>44 new tests (21 human-context + 23 readme-extraction)</li>
				<li>3 new bundled commands in MK3 engine</li>
			</ul>

			<h3>Infrastructure</h3>
			<ul>
				<li>Updated faf-cli dependency: v3.2.6 → v4.3.0</li>
				<li>1,706 lines of new production code</li>
				<li>IANA-registered format features</li>
			</ul>
		</section>

		<section>
			<h2>Why This Matters</h2>
			<p>Adoption was the bottleneck. Not understanding, not trust — just friction.</p>

			<p><strong>Before v4.1.0:</strong></p>
			<ul>
				<li>Manual .faf file creation</li>
				<li>Copying README content by hand</li>
				<li>Incomplete context = low scores</li>
			</ul>

			<p><strong>After v4.1.0:</strong></p>
			<ul>
				<li>Web form or automatic extraction</li>
				<li>Zero manual copying</li>
				<li>Instant path to 🥉 Bronze (85%+)</li>
			</ul>

			<p>Two paths. Same destination. Zero friction.</p>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Championship testing. Professional execution. 🏎️</p>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.6;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 1rem;
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
		margin: 0 0 0.5rem 0;
		color: #000;
	}

	.version-tag {
		font-family: 'SF Mono', monospace;
		font-size: 0.9rem;
		color: #FF6B35;
		margin: 0 0 0.5rem 0;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0 0 1rem 0;
	}

	.meta {
		font-size: 0.9rem;
		color: #999;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.separator {
		color: #ddd;
	}

	.category {
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-weight: 600;
	}

	.category.release {
		background: #e8f5e9;
		color: #2e7d32;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.intro {
		background: #f8f9fa;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		margin-bottom: 2rem;
	}

	.lead {
		margin: 0;
		font-size: 1.1rem;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 1.8rem;
		margin: 2rem 0 1rem 0;
		color: #000;
	}

	h3 {
		font-size: 1.4rem;
		margin: 1.5rem 0 1rem 0;
		color: #333;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'SF Mono', monospace;
		font-size: 0.9em;
		color: #c7254e;
	}

	.terminal-block {
		background: #1a1a1a;
		color: #f5f5f5;
		padding: 1.5rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 1rem 0;
	}

	.terminal-block code {
		background: none;
		color: #f5f5f5;
		padding: 0;
		white-space: pre-wrap;
		display: block;
		line-height: 1.5;
	}

	.workflow {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
		background: #f8f9fa;
		border-radius: 8px;
		margin: 2rem 0;
		flex-wrap: wrap;
	}

	.step {
		flex: 1;
		min-width: 150px;
		padding: 1rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	.step strong {
		color: #FF6B35;
		display: block;
		margin-bottom: 0.5rem;
	}

	.step p {
		margin: 0;
		font-size: 0.9rem;
		color: #666;
	}

	.arrow {
		font-size: 1.5rem;
		color: #FF6B35;
		font-weight: bold;
	}

	ul {
		line-height: 1.8;
	}

	ol {
		line-height: 1.8;
	}

	a {
		color: #FF6B35;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.footer-note {
		background: #fff8f0;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
		border: 2px solid #FF6B35;
	}

	.footer-note p {
		margin: 0;
		color: #666;
	}

	@media (max-width: 768px) {
		.blog-post {
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		.workflow {
			flex-direction: column;
		}

		.arrow {
			transform: rotate(90deg);
		}
	}
</style>
