<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Antigravity Edition - faf-cli v3.5.0 | FAF</title>
	<meta name="description" content="Global AI context for Google's Antigravity IDE. Your .faf file now powers every project in your IDE." />
	<meta property="og:title" content="Antigravity Edition - faf-cli v3.5.0" />
	<meta property="og:description" content="FAF meets Antigravity. Global context for Google's AI-powered IDE." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Antigravity Edition
		</div>

		<h1>🚀 Antigravity Edition</h1>
		<p class="subtitle">Global AI context. Every project. One config.</p>
		<div class="meta">
			<time datetime="2026-01-XX">January XX, 2026</time>
			<span class="separator">•</span>
			<span class="category antigravity">IDE Integration</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli v3.5.0 adds deep integration with Google's Antigravity IDE. Export your .faf to the global <code>~/.gemini/GEMINI.md</code> config - your coding standards, preferences, and context follow you across every project automatically.
			</p>
		</section>

		<section>
			<h2>What is Antigravity?</h2>

			<p>Antigravity is Google's AI-powered IDE built on the Gemini foundation. It reads a global config from <code>~/.gemini/GEMINI.md</code> that applies to every project you open.</p>

			<div class="insight-box">
				<h3>The Power of Global Context</h3>
				<p>Your coding style, preferred libraries, naming conventions - defined once, applied everywhere.</p>
			</div>

			<p>Until now, this global config was separate from your project-level .faf files. No more.</p>
		</section>

		<section>
			<h2>Global Sync</h2>

			<p>The <code>--global</code> flag connects your .faf to Antigravity's global context:</p>

			<pre><code>{`# Export your .faf to Antigravity's global config
faf gemini export --global

# Import Antigravity's global config to .faf
faf gemini import --global

# Bidirectional sync with global config
faf gemini sync --global`}</code></pre>

			<p>Your <code>~/.gemini/GEMINI.md</code> now stays in sync with your .faf ecosystem.</p>
		</section>

		<section>
			<h2>The Architecture</h2>

			<div class="flow-diagram">
				<div class="flow-row">
					<div class="flow-box project">project.faf</div>
					<div class="flow-arrow">↔</div>
					<div class="flow-box global">~/.gemini/GEMINI.md</div>
				</div>
				<div class="flow-center">
					<div class="flow-arrow-down">↓</div>
				</div>
				<div class="flow-row">
					<div class="flow-box antigravity">Antigravity IDE</div>
				</div>
				<div class="flow-center">
					<div class="flow-arrow-down">↓</div>
				</div>
				<div class="flow-row bottom-row">
					<div class="flow-box project-a">Project A</div>
					<div class="flow-box project-b">Project B</div>
					<div class="flow-box project-c">Project C</div>
				</div>
			</div>

			<p>One global config. Inherited by every project. Managed through .faf.</p>
		</section>

		<section>
			<h2>Use Cases</h2>

			<h3>Personal Defaults</h3>
			<p>Your coding style travels with you:</p>

			<pre><code>{`# Your master preferences
faf init --template personal
faf gemini export --global

# Now every Antigravity project inherits:
# - Your preferred indentation
# - Your naming conventions
# - Your documentation style
# - Your testing philosophy`}</code></pre>

			<h3>Team Standards</h3>
			<p>Distribute team conventions:</p>

			<pre><code>{`# Team lead creates the standard
faf init --template team-standards
faf gemini export --global

# Share with team
# Each dev imports to their global config
faf gemini import --global --from team-standards.faf`}</code></pre>

			<h3>Context Layering</h3>
			<p>Global + project-specific context stack:</p>

			<ul>
				<li><strong>Global</strong>: Your universal preferences (<code>~/.gemini/GEMINI.md</code>)</li>
				<li><strong>Project</strong>: Project-specific context (<code>./GEMINI.md</code>)</li>
				<li>Antigravity merges both, project-specific overrides global</li>
			</ul>
		</section>

		<section>
			<h2>Real Example</h2>

			<p>Start with your personal preferences:</p>

			<pre><code>{`# ~/.gemini/GEMINI.md (via faf gemini export --global)

# Personal Coding Standards

## Style
- TypeScript strict mode always
- Prefer composition over inheritance
- Tests live next to source files

## Naming
- camelCase for functions
- PascalCase for types
- SCREAMING_SNAKE for constants

## Philosophy
- Ship small, ship often
- Every PR under 400 lines
- Comments explain "why", not "what"`}</code></pre>

			<p>Now every project in Antigravity inherits these defaults. Project-specific .faf files can override when needed.</p>
		</section>

		<section>
			<h2>The Full Stack</h2>

			<p>v3.5.0 completes the Gemini integration:</p>

			<table class="platform-table">
				<thead>
					<tr>
						<th>Scope</th>
						<th>Location</th>
						<th>Command</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Project</strong></td>
						<td><code>./GEMINI.md</code></td>
						<td><code>faf gemini</code></td>
					</tr>
					<tr class="highlight-row">
						<td><strong>Global (Antigravity)</strong></td>
						<td><code>~/.gemini/GEMINI.md</code></td>
						<td><code>faf gemini --global</code></td>
					</tr>
					<tr>
						<td><strong>Conductor Extension</strong></td>
						<td><code>conductor/</code></td>
						<td><code>faf conductor</code></td>
					</tr>
				</tbody>
			</table>

			<p>Project, global, and extension - all managed through one .faf source of truth.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="terminal-block">
				<code>npm install -g faf-cli@3.5.0</code>
			</div>

			<p>Or with Homebrew:</p>

			<div class="terminal-block">
				<code>brew upgrade faf-cli</code>
			</div>

			<p>Then set up your global context:</p>

			<div class="terminal-block">
				<code>faf gemini export --global</code>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>View the source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v3.5.0" class="cta-link">v3.5.0 Release</a>
				</div>
				<div class="cta-box">
					<h3>Antigravity</h3>
					<p>Google's AI-powered IDE.</p>
					<a href="https://developers.google.com/gemini" class="cta-link">Learn More</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v3.5.0</strong> - Antigravity Edition</li>
				<li><strong>XXX/XXX</strong> - Tests passing</li>
				<li><strong>--global</strong> - New flag for global config sync</li>
				<li><strong>~/.gemini/</strong> - Antigravity's config directory</li>
			</ul>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf - Universal AI context for everyone. 🚀
			</p>
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
		border-bottom: 3px solid transparent;
		border-image: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%) 1;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #667eea;
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

	.category.antigravity {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
		border-radius: 8px;
		border-left: 4px solid #667eea;
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
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 50%, rgba(240, 147, 251, 0.1) 100%);
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) 1;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.insight-box h3 {
		background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 0.75rem 0;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.1rem;
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

	.platform-table .highlight-row {
		background: linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%);
	}

	.flow-diagram {
		background: #f8f8f8;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		text-align: center;
	}

	.flow-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.bottom-row {
		gap: 0.5rem;
	}

	.flow-box {
		padding: 1rem 1.5rem;
		border-radius: 8px;
		font-family: 'SF Mono', monospace;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.flow-box.project {
		background: #FF6B35;
		color: white;
	}

	.flow-box.global {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.flow-box.antigravity {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
		color: white;
		padding: 1.25rem 2rem;
		font-size: 1.1rem;
	}

	.flow-box.project-a,
	.flow-box.project-b,
	.flow-box.project-c {
		background: #e0e0e0;
		color: #333;
		padding: 0.75rem 1rem;
		font-size: 0.85rem;
	}

	.flow-arrow {
		font-size: 1.5rem;
		color: #666;
	}

	.flow-center {
		margin: 1rem 0;
	}

	.flow-arrow-down {
		font-size: 1.5rem;
		color: #666;
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
		font-size: 1rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #667eea;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #667eea;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #667eea;
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
		color: #667eea;
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

		.flow-row {
			flex-direction: column;
		}

		.flow-arrow {
			transform: rotate(90deg);
		}

		.bottom-row {
			flex-direction: row;
		}
	}
</style>
