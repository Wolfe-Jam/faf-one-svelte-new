<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

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

	// Rich X share — pre-fill the crafted post, not just the URL.
	// FAF formula: 🏁 Just shipped: <pkg> v<ver> — <Edition> / headline
	const shareText = `🏁 Just shipped: faf-cli v3.4.7 — Google Gemini Edition

FAF now speaks Gemini. Full interoperability with GEMINI.md, Antigravity, and Conductor. One .faf file. Every AI platform.`;
	const shareUrl = 'https://faf.one/blog/google-gemini-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Google Gemini Edition - faf-cli v3.4.7 | FAF</title>
	<meta name="description" content="Full interoperability with the Google Gemini ecosystem. One .faf file now works with Gemini CLI, Antigravity IDE, and Conductor extensions." />
	<meta property="og:title" content="Google Gemini Edition - faf-cli v3.4.7" />
	<meta property="og:description" content="FAF now speaks Gemini. Full interoperability with GEMINI.md, Antigravity, and Conductor." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Google Gemini Edition
		</div>

		<h1>✦ Google Gemini Edition</h1>
		<p class="subtitle">One .faf file. Every AI platform. Zero friction.</p>
		<div class="meta">
			<time datetime="2026-01-13">January 13, 2026</time>
			<span class="separator">•</span>
			<span class="category gemini">Interop</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli v3.4.7 adds full bidirectional interop with the Google Gemini ecosystem. Import from GEMINI.md, export to Conductor format, sync with Antigravity IDE. Your .faf file is now the universal translator between Claude and Gemini.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>You use Claude Code. Your teammate uses Gemini CLI. Another uses Antigravity IDE. Everyone has their own AI context format:</p>

			<ul>
				<li><code>CLAUDE.md</code> - Claude Code's context file</li>
				<li><code>GEMINI.md</code> - Gemini CLI's context file</li>
				<li><code>~/.gemini/GEMINI.md</code> - Antigravity IDE's global config</li>
				<li><code>conductor/</code> - Gemini Conductor extension format</li>
			</ul>

			<p>Four formats. Zero interoperability. Context drift is inevitable.</p>

			<div class="insight-box">
				<h3>The Question</h3>
				<p>What if one format could speak to all of them?</p>
			</div>
		</section>

		<section>
			<h2>The Solution</h2>

			<p>.faf is now the universal interchange format:</p>

			<table class="platform-table">
				<thead>
					<tr>
						<th>Platform</th>
						<th>Format</th>
						<th>FAF Command</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Claude Code</strong></td>
						<td><code>CLAUDE.md</code></td>
						<td><code>faf bi-sync</code></td>
					</tr>
					<tr class="gemini-row">
						<td><strong>Gemini CLI</strong></td>
						<td><code>GEMINI.md</code></td>
						<td><code>faf gemini</code></td>
					</tr>
					<tr class="gemini-row">
						<td><strong>Antigravity IDE</strong></td>
						<td><code>~/.gemini/GEMINI.md</code></td>
						<td><code>faf gemini --global</code></td>
					</tr>
					<tr class="gemini-row">
						<td><strong>Conductor Extension</strong></td>
						<td><code>conductor/</code></td>
						<td><code>faf conductor</code></td>
					</tr>
				</tbody>
			</table>

			<p>Write once in .faf. Export to any format. Import from any format. Round-trip without loss.</p>
		</section>

		<section>
			<h2>New Commands</h2>

			<h3>faf gemini</h3>
			<p>Bidirectional sync with GEMINI.md for Gemini CLI and Antigravity IDE:</p>

			<div class="copy-box" onclick={() => copyText('faf gemini import', 'gemini-import')}>
				<code class="copy-code">faf gemini import</code>
				<button class="copy-btn">{copiedId === 'gemini-import' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf gemini export', 'gemini-export')}>
				<code class="copy-code">faf gemini export</code>
				<button class="copy-btn">{copiedId === 'gemini-export' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf gemini sync', 'gemini-sync')}>
				<code class="copy-code">faf gemini sync</code>
				<button class="copy-btn">{copiedId === 'gemini-sync' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf gemini import --global', 'gemini-import-global')}>
				<code class="copy-code">faf gemini import --global</code>
				<button class="copy-btn">{copiedId === 'gemini-import-global' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf gemini export --global', 'gemini-export-global')}>
				<code class="copy-code">faf gemini export --global</code>
				<button class="copy-btn">{copiedId === 'gemini-export-global' ? 'Copied!' : 'Copy'}</button>
			</div>

			<h3>faf conductor</h3>
			<p>Import/export Google's Conductor extension format:</p>

			<div class="copy-box" onclick={() => copyText('faf conductor import', 'conductor-import')}>
				<code class="copy-code">faf conductor import</code>
				<button class="copy-btn">{copiedId === 'conductor-import' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf conductor export', 'conductor-export')}>
				<code class="copy-code">faf conductor export</code>
				<button class="copy-btn">{copiedId === 'conductor-export' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf conductor sync', 'conductor-sync')}>
				<code class="copy-code">faf conductor sync</code>
				<button class="copy-btn">{copiedId === 'conductor-sync' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Conductor format includes <code>product.md</code>, <code>tech-stack.md</code>, <code>workflow.md</code>, and <code>product-guidelines.md</code>.</p>
		</section>

		<section>
			<h2>How It Works</h2>

			<div class="flow-diagram">
				<div class="flow-row">
					<div class="flow-box claude">CLAUDE.md</div>
					<div class="flow-arrow">↔</div>
					<div class="flow-box faf">.faf</div>
					<div class="flow-arrow">↔</div>
					<div class="flow-box gemini">GEMINI.md</div>
				</div>
				<div class="flow-center">
					<div class="flow-arrow-down">↕</div>
				</div>
				<div class="flow-row">
					<div class="flow-box conductor">conductor/</div>
				</div>
			</div>

			<p>.faf sits at the center. Bidirectional conversion to any format. Your project DNA travels with you regardless of which AI you use.</p>
		</section>

		<section>
			<h2>Real Example</h2>

			<p>Start with a GEMINI.md file:</p>

			<pre><code>{`# My Project

## General Instructions
- Use TypeScript
- Write tests for everything
- Follow best practices

## Coding Style
- 2 spaces for indentation
- Prefer const over let`}</code></pre>

			<p>Import to .faf:</p>

			<pre><code>{`$ faf gemini import

🚀 Importing GEMINI.md...
   Source: ./GEMINI.md

☑️ Sections imported:
   - General Instructions
   - Coding Style

☑️ Created: ./project.faf

🏆 GEMINI.md import complete!`}</code></pre>

			<p>Now you have a .faf file that works with Claude, and you can export back to GEMINI.md anytime.</p>
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
						<td>Maintain separate context files per AI</td>
						<td>One .faf file, export to any format</td>
					</tr>
					<tr>
						<td>Manual copy-paste between formats</td>
						<td>Automated bidirectional sync</td>
					</tr>
					<tr>
						<td>Context drift between Claude and Gemini</td>
						<td>Single source of truth</td>
					</tr>
					<tr>
						<td>Team locked to one AI vendor</td>
						<td>Freedom to use any AI platform</td>
					</tr>
				</tbody>
			</table>

			<p><strong>Universal AI context portability. No vendor lock-in.</strong></p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@3.4.7', 'install')}>
				<code class="copy-code">npm install -g faf-cli@3.4.7</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or with Homebrew:</p>

			<div class="copy-box" onclick={() => copyText('brew upgrade faf-cli', 'brew')}>
				<code class="copy-code">brew upgrade faf-cli</code>
				<button class="copy-btn">{copiedId === 'brew' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Then in your project:</p>

			<div class="copy-box" onclick={() => copyText('faf gemini import\nfaf conductor export', 'try-commands')}>
				<div class="copy-code-multi">faf gemini import<br/>faf conductor export</div>
				<button class="copy-btn">{copiedId === 'try-commands' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>View the source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v3.4.7" class="cta-link">v3.4.7 Release</a>
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
				<li><strong>v3.4.7</strong> - Released January 13, 2026</li>
				<li><strong>574/574</strong> - Tests passing (0 skipped)</li>
				<li><strong>Full interop</strong> - Claude, Gemini CLI, Antigravity, Conductor format</li>
				<li><strong>2 new commands</strong> - <code>faf gemini</code>, <code>faf conductor</code></li>
				<li><strong>21,000+</strong> - npm downloads</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Universal AI context for everyone. 🏎️
			</p>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid transparent;
		border-image: linear-gradient(90deg, #4285F4 0%, #9B72CB 50%, #D96570 100%) 1;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #4285F4;
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

	.category.gemini {
		background: linear-gradient(135deg, #4285F4 0%, #9B72CB 50%, #D96570 100%);
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f0f4ff;
		border-radius: 8px;
		border-left: 4px solid #4285F4;
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
		background: linear-gradient(135deg, rgba(66, 133, 244, 0.1) 0%, rgba(155, 114, 203, 0.1) 50%, rgba(217, 101, 112, 0.1) 100%);
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #4285F4 0%, #9B72CB 50%, #D96570 100%) 1;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.insight-box h3 {
		background: linear-gradient(90deg, #4285F4 0%, #9B72CB 50%, #D96570 100%);
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

	.platform-table .gemini-row {
		background: linear-gradient(90deg, rgba(66, 133, 244, 0.08) 0%, transparent 100%);
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

	.flow-box {
		padding: 1rem 1.5rem;
		border-radius: 8px;
		font-family: 'SF Mono', monospace;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.flow-box.claude {
		background: #FF6B35;
		color: white;
	}

	.flow-box.faf {
		background: #1a1a1a;
		color: #00ff88;
		border: 2px solid gold;
	}

	.flow-box.gemini {
		background: linear-gradient(135deg, #4285F4 0%, #9B72CB 50%, #D96570 100%);
		color: white;
	}

	.flow-box.conductor {
		background: #34A853;
		color: white;
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
		border: 2px solid #4285F4;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #4285F4;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #4285F4;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
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
		color: #4285F4;
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

		.flow-row {
			flex-direction: column;
		}

		.flow-arrow {
			transform: rotate(90deg);
		}
	}
</style>
