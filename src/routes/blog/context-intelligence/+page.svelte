<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Context Intelligence Edition - faf-cli v3.4.8 | FAF</title>
	<meta name="description" content="Bi-sync gets smarter. Now detects custom CLAUDE.md content and handles it intelligently. The best just got better." />
	<meta property="og:title" content="Context Intelligence Edition - faf-cli v3.4.8" />
	<meta property="og:description" content="Bi-sync now detects custom content and handles it intelligently. The best just got better." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Context Intelligence Edition
		</div>

		<h1>Context Intelligence Edition</h1>
		<p class="subtitle">The best just got better. Bi-sync now understands custom content.</p>
		<div class="meta">
			<time datetime="2026-01-18">January 18, 2026</time>
			<span class="separator">•</span>
			<span class="category sync">Enhancement</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Bi-sync already worked flawlessly for the standard workflow (<code>faf init</code> → <code>faf auto</code> → <code>faf bi-sync</code>). Now it's even smarter — detecting hand-crafted CLAUDE.md files and handling them intelligently.
			</p>
		</section>

		<section>
			<h2>The Standard Workflow: Already Perfect</h2>

			<p>For 99% of projects, the FAF workflow is seamless:</p>

			<div class="terminal-block">
				<code>faf init</code>
				<code>faf auto</code>
				<code>faf bi-sync</code>
			</div>

			<p>This creates your <code>project.faf</code>, grows it intelligently, and keeps it synchronized with <code>CLAUDE.md</code>. Zero issues. Championship-grade reliability.</p>

			<p><strong>That hasn't changed. It never will.</strong></p>
		</section>

		<section>
			<h2>What's New: Custom Content Detection</h2>

			<p>Some power users create custom CLAUDE.md files from scratch — hand-crafted documentation for MCP servers, API endpoints, or specialized tooling. These files might include:</p>

			<ul>
				<li><code>## TOOLS</code> sections with endpoint tables</li>
				<li><code>## ENDPOINTS</code> documentation</li>
				<li>Markdown tables (<code>| Tool | Purpose |</code>)</li>
				<li>Bash code blocks for quick commands</li>
			</ul>

			<p>Bi-sync now <strong>detects these markers</strong> and handles custom files intelligently.</p>

			<div class="insight-box">
				<h3>The Enhancement</h3>
				<p>When bi-sync detects custom content, it preserves your file and updates only the sync footer.</p>
			</div>
		</section>

		<section>
			<h2>How It Works</h2>

			<h3>Standard Files (99% of users)</h3>
			<p>Full bidirectional sync. Your <code>.faf</code> and <code>CLAUDE.md</code> stay perfectly mirrored. Same as always.</p>

			<h3>Custom Files (power users)</h3>
			<p>Bi-sync detects custom markers and switches to preservation mode:</p>

			<div class="flow-diagram">
				<div class="flow-box preserve">
					<strong>CUSTOM CONTENT DETECTED</strong>
					<ol>
						<li>Preserve entire CLAUDE.md</li>
						<li>Update sync footer only</li>
						<li>Maintain full context</li>
					</ol>
				</div>
			</div>

			<p>Your hand-crafted documentation stays intact. The sync footer confirms the link to your <code>.faf</code> file.</p>
		</section>

		<section>
			<h2>Custom Markers Detected</h2>

			<pre><code>{`## TOOLS        ← custom section
## ENDPOINTS    ← custom section
## AUTH         ← custom section
## COMMANDS     ← custom section
| Tool |        ← markdown table
\`\`\`bash        ← code block`}</code></pre>

			<p>If any of these appear in your CLAUDE.md, bi-sync knows you've customized it.</p>
		</section>

		<section>
			<h2>Under the Hood</h2>

			<ul>
				<li><code>FAFMirror</code> now uses <code>findFafFile()</code> for correct path resolution</li>
				<li>Custom content detection runs before any sync operation</li>
				<li>12 new WJTTC tests certify this behavior</li>
			</ul>

			<p>The rule is simple: <strong>Score can only improve — never downgrade.</strong></p>
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

			<p>Standard workflow — same as always:</p>

			<div class="terminal-block">
				<code>faf init</code>
				<code>faf auto</code>
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
				Built with .faf ☑️ The best just got better. 🏎️
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
		font-size: 1.1rem;
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
