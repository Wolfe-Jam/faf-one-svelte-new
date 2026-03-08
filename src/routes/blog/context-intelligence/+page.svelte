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
		<p class="version-tag">faf-cli v3.4.8</p>
		<p class="subtitle">From the only format for Context, an even better Mirror.</p>
		<div class="meta">
			<time datetime="2026-01-18">January 18, 2026</time>
			<span class="separator">•</span>
			<span class="category sync">Enhancement</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Claude Code keeps evolving — and so does FAF. We took all the new Claude features (yep, they're keeping us busy!) and built an even better mirror to reflect CLAUDE.md for 2026. New detection engine, new preservation mode, 12 new tests.
			</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>Smart Content Detection</h3>
			<p>Bi-sync now recognizes custom markers in CLAUDE.md files:</p>

			<pre><code>{`## TOOLS        ← detected
## ENDPOINTS    ← detected
## AUTH         ← detected
## COMMANDS     ← detected
| Tool |        ← markdown table
\`\`\`bash        ← code block`}</code></pre>

			<p>When these markers appear, bi-sync knows the file has been customized.</p>

			<h3>Preservation Mode</h3>
			<p>For custom files, bi-sync switches to preservation mode:</p>

			<div class="flow-diagram">
				<div class="flow-box preserve">
					<strong>CUSTOM CONTENT DETECTED</strong>
					<ol>
						<li>Preserve entire CLAUDE.md</li>
						<li>Update sync footer only</li>
						<li>Maintain full context link</li>
					</ol>
				</div>
			</div>

			<p>Your hand-crafted documentation stays intact. The sync footer confirms the link to your <code>.faf</code> file.</p>

			<h3>Improved Path Resolution</h3>
			<p><code>FAFMirror</code> now uses <code>findFafFile()</code> for smarter path resolution — correctly locating <code>project.faf</code> in all scenarios.</p>
		</section>

		<section>
			<h2>The Rule</h2>

			<div class="insight-box">
				<h3>Score Can Only Improve</h3>
				<p>Context quality goes up. Never down.</p>
			</div>
		</section>

		<section>
			<h2>Use Cases</h2>

			<h3>Standard Workflow</h3>
			<p>The classic flow works exactly as before:</p>

			<div class="copy-box" onclick={() => copyText('faf init && faf auto && faf bi-sync', 'workflow')}>
				<div class="copy-code-multi">faf init<br/>faf auto<br/>faf bi-sync</div>
				<button class="copy-btn">{copiedId === 'workflow' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Full bidirectional sync. Your <code>.faf</code> and <code>CLAUDE.md</code> stay perfectly mirrored.</p>

			<h3>Power User Workflow</h3>
			<p>For custom MCP servers, API documentation, or specialized tooling:</p>

			<div class="copy-box" onclick={() => copyText('faf init\n# Customize CLAUDE.md with tables, endpoints, etc.\nfaf bi-sync', 'power-workflow')}>
				<div class="copy-code-multi">faf init<br/><span class="code-comment"># Customize CLAUDE.md with tables, endpoints, etc.</span><br/>faf bi-sync</div>
				<button class="copy-btn">{copiedId === 'power-workflow' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Bi-sync detects your customizations and preserves them.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@3.4.8', 'install')}>
				<code class="copy-code">npm install -g faf-cli@3.4.8</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or update:</p>

			<div class="copy-box" onclick={() => copyText('npm update -g faf-cli', 'update')}>
				<code class="copy-code">npm update -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'update' ? 'Copied!' : 'Copy'}</button>
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
	.copy-code-multi {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.6;
	}
	.code-comment { color: #666; font-weight: 400; }
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
