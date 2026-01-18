<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Context Intelligence Edition - faf-cli v3.4.8 | FAF</title>
	<meta name="description" content="Bi-sync got brains. It now detects your custom CLAUDE.md and protects it. Tables, code blocks, hand-crafted sections - all safe. Forever." />
	<meta property="og:title" content="Context Intelligence Edition - faf-cli v3.4.8" />
	<meta property="og:description" content="Bi-sync now detects custom content and preserves it. Your hand-crafted CLAUDE.md stays intact." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Context Intelligence Edition
		</div>

		<h1>Context Intelligence Edition</h1>
		<p class="subtitle">Bi-sync got brains. Your custom content is protected forever.</p>
		<div class="meta">
			<time datetime="2026-01-18">January 18, 2026</time>
			<span class="separator">•</span>
			<span class="category sync">Sync</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Bi-sync now detects your custom CLAUDE.md content and preserves it. Tables, code blocks, hand-crafted sections — all safe. The new rule: <em>Score can only improve — never downgrade.</em>
			</p>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>You spent 20 minutes crafting the perfect CLAUDE.md:</p>

			<ul>
				<li>Custom <code>## TOOLS</code> section with your MCP endpoints</li>
				<li>Markdown tables documenting your API</li>
				<li>Bash code blocks for quick commands</li>
				<li>Sections that took real thought</li>
			</ul>

			<p>Then you ran <code>faf bi-sync</code>.</p>

			<div class="warning-box">
				<h3>Gone.</h3>
				<p>Replaced with a generic template. Your work — deleted.</p>
			</div>

			<p>This happened because bi-sync couldn't tell the difference between generated content and custom content. It treated everything the same — and your work paid the price.</p>
		</section>

		<section>
			<h2>The Solution</h2>

			<table>
				<thead>
					<tr>
						<th>Before</th>
						<th>After</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Bi-sync overwrites everything</td>
						<td>Bi-sync detects custom content</td>
					</tr>
					<tr>
						<td>Generic replaces custom</td>
						<td>Custom content preserved</td>
					</tr>
					<tr>
						<td>Fear of running sync</td>
						<td>Confidence in every sync</td>
					</tr>
				</tbody>
			</table>

			<div class="insight-box">
				<h3>The New Rule</h3>
				<p>Score can only improve — never downgrade.</p>
			</div>
		</section>

		<section>
			<h2>New in v3.4.8</h2>

			<h3>Smart Content Detection</h3>
			<p>Bi-sync now recognizes custom markers:</p>

			<pre><code>{`## TOOLS        ← detected
## ENDPOINTS    ← detected
## AUTH         ← detected
## COMMANDS     ← detected
| Tool |        ← detected (tables)
\`\`\`bash        ← detected (code blocks)`}</code></pre>

			<p>If ANY of these exist in your CLAUDE.md, bi-sync knows it's custom.</p>

			<h3>Preservation Engine</h3>

			<div class="flow-diagram">
				<div class="flow-box preserve">
					<strong>CUSTOM CLAUDE.md DETECTED</strong>
					<ol>
						<li>Preserve entire content</li>
						<li>Update sync footer only</li>
						<li>Zero content drift</li>
					</ol>
				</div>
			</div>

			<p>Your content stays. Only the timestamp updates.</p>

			<h3>Under the Hood</h3>
			<ul>
				<li><code>FAFMirror</code> now uses <code>findFafFile()</code> — finds <code>project.faf</code> correctly</li>
				<li>Fixed hardcoded <code>.faf</code> path that ignored the standard location</li>
				<li>12 new WJTTC tests lock this behavior forever</li>
			</ul>
		</section>

		<section>
			<h2>Real Example</h2>

			<p><strong>Before v3.4.8:</strong></p>

			<pre><code>{`$ cat CLAUDE.md
# MCPaaS
## TOOLS (7)
| Tool | Purpose |
|------|---------|
| get_soul | Read context |
...custom content...

$ faf bi-sync

$ cat CLAUDE.md
# 🏎️ CLAUDE.md - Project Context
## PROJECT STATE: GOOD
**Tyre Compound:** ULTRASOFT C5
...generic template... 😱`}</code></pre>

			<p><strong>After v3.4.8:</strong></p>

			<pre><code>{`$ faf bi-sync

$ cat CLAUDE.md
# MCPaaS
## TOOLS (7)
| Tool | Purpose |
|------|---------|
| get_soul | Read context |
...custom content intact...

---
**STATUS: BI-SYNC ACTIVE 🔗**
*Last Sync: 2026-01-18*`}</code></pre>

			<p>Your content. Protected.</p>
		</section>

		<section>
			<h2>Why This Matters</h2>

			<table>
				<thead>
					<tr>
						<th>Before</th>
						<th>After</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Backup before bi-sync</td>
						<td>Just run it</td>
					</tr>
					<tr>
						<td>"Did I lose my docs?"</td>
						<td>"My docs are safe"</td>
					</tr>
					<tr>
						<td>Avoid bi-sync on custom files</td>
						<td>Use bi-sync everywhere</td>
					</tr>
					<tr>
						<td>Trust issues</td>
						<td>Trust restored</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="terminal-block">
				<code>npm install -g faf-cli@3.4.8</code>
			</div>

			<p>Or update:</p>

			<div class="terminal-block">
				<code>npm update -g faf-cli</code>
			</div>

			<p>Then run with confidence:</p>

			<div class="terminal-block">
				<code>faf bi-sync</code>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>View the source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v3.4.8" class="cta-link">v3.4.8 Release</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">faf-cli</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v3.4.8</strong> - Released January 18, 2026</li>
				<li><strong>586/586</strong> - Tests passing (+12 new)</li>
				<li><strong>100%</strong> - Trophy score 🏆</li>
				<li><strong>WJTTC GOLD</strong> - Certified 🥇</li>
				<li><strong>15,000+</strong> - npm downloads</li>
			</ul>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Your context, protected. 🏎️
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

	.category.sync {
		background: #00D4D4;
		color: #000;
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

	.warning-box {
		background: #fff0f0;
		border: 2px solid #ff4444;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.warning-box h3 {
		color: #cc0000;
		margin: 0 0 0.5rem 0;
	}

	.warning-box p {
		margin: 0;
		color: #880000;
	}

	.insight-box {
		background: #f0fff0;
		border: 2px solid #00aa44;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.insight-box h3 {
		color: #00aa44;
		margin: 0 0 0.75rem 0;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 600;
		color: #006622;
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

	.flow-box.preserve {
		background: #1a1a1a;
		color: #00ff88;
		border: 2px solid #00aa44;
	}

	.flow-box strong {
		display: block;
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}

	.flow-box ol {
		margin: 0;
		padding-left: 1.5rem;
		color: #00ff88;
	}

	.flow-box li {
		margin-bottom: 0.25rem;
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
