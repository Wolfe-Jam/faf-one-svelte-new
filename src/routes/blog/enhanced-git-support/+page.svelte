<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>Enhanced Git Support Edition - faf-cli v4.4.4 | FAF</title>
	<meta name="description" content="Complete rewrite of faf git output. Accurate language detection. Compact, PR-ready .faf files. The version that scored a Hundred Famous Repos." />
	<meta property="og:title" content="Enhanced Git Support Edition - faf-cli v4.4.4" />
	<meta property="og:description" content="Accurate language detection. Compact .faf output. The version that scored a Hundred Famous Repos." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Enhanced Git Support Edition
		</div>

		<h1>Enhanced Git Support Edition</h1>
		<p class="version-tag">faf-cli v4.4.4</p>
		<p class="subtitle">The version that scored a Hundred Famous Repos.</p>
		<div class="meta">
			<time datetime="2026-02-18">February 18, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We ran <code>faf git</code> against 100 of the most famous repositories on GitHub &mdash; React, Bitcoin, PyTorch, Linux, VS Code. Every single one got an accurate, compact <code>project.faf</code>. Language detection, install method, build system &mdash; all correct. That's the bar now.
			</p>
		</section>

		<section>
			<h2>What Changed</h2>

			<h3>Compact Output</h3>
			<p>The old <code>faf git</code> produced ~130 lines of YAML. Most of it was noise &mdash; empty slots, placeholder values, internal directives that should never have been in the output.</p>
			<p>v4.4.4 produces ~35 lines. Only the fields that matter. Clean header, real data, nothing else.</p>

			<div class="comparison">
				<div class="compare-box before">
					<strong>Before (v4.4.2)</strong>
					<pre><code>{`main_language: Unknown
slotignored: true
context:
  how: npm install (see README)
  # ...130 lines of noise`}</code></pre>
				</div>
				<div class="compare-box after">
					<strong>After (v4.4.4)</strong>
					<pre><code>{`# project.faf — Machine-readable project context
project:
  name: react
  description: The library for web UIs
  language: JavaScript
  type: library
stack:
  runtime: Node.js
  build: Rollup
  test: Jest
  package_manager: npm`}</code></pre>
				</div>
			</div>

			<h3>Language Detection That Actually Works</h3>
			<p>The GitHub API returns languages sorted by byte count. v4.4.4 uses the <em>primary</em> language (first in the sorted array) instead of pattern-matching. React is JavaScript, not TypeScript. Bitcoin is C++, not Shell. Linux is C, not Assembly.</p>

			<p>17 languages supported with correct runtime mapping:</p>

			<div class="lang-grid">
				<span class="lang-tag">TypeScript</span>
				<span class="lang-tag">JavaScript</span>
				<span class="lang-tag">Python</span>
				<span class="lang-tag">Rust</span>
				<span class="lang-tag">Go</span>
				<span class="lang-tag">C++</span>
				<span class="lang-tag">C</span>
				<span class="lang-tag">Java</span>
				<span class="lang-tag">Ruby</span>
				<span class="lang-tag">Swift</span>
				<span class="lang-tag">Kotlin</span>
				<span class="lang-tag">Zig</span>
				<span class="lang-tag">Lua</span>
				<span class="lang-tag">Dart</span>
				<span class="lang-tag">PHP</span>
				<span class="lang-tag">Scala</span>
				<span class="lang-tag">Elixir</span>
			</div>

			<h3>Language-Aware Install Detection</h3>
			<p>The install command now reflects the actual ecosystem:</p>

			<div class="terminal-block">
				<code>Python: pip install (see README)</code>
				<code>Rust: cargo install (see README)</code>
				<code>Go: go install (see README)</code>
				<code>Node.js: npm install (see README)</code>
				<code>Docker: docker pull (see README)</code>
			</div>
		</section>

		<section>
			<h2>The Hundred Repos</h2>

			<p>We generated <code>project.faf</code> files for 100 top GitHub repositories. Every one was verified for accuracy:</p>

			<div class="repo-showcase">
				<div class="repo-item"><strong>react</strong> <span class="lang-small">JavaScript</span></div>
				<div class="repo-item"><strong>bitcoin</strong> <span class="lang-small">C++</span></div>
				<div class="repo-item"><strong>pytorch</strong> <span class="lang-small">Python</span></div>
				<div class="repo-item"><strong>linux</strong> <span class="lang-small">C</span></div>
				<div class="repo-item"><strong>vscode</strong> <span class="lang-small">TypeScript</span></div>
				<div class="repo-item"><strong>rust</strong> <span class="lang-small">Rust</span></div>
				<div class="repo-item"><strong>tensorflow</strong> <span class="lang-small">C++</span></div>
				<div class="repo-item"><strong>kubernetes</strong> <span class="lang-small">Go</span></div>
			</div>

			<p class="repo-note">...and 92 more. All correct. All compact. All PR-ready.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@4.4.4', 'install')}>
				<code class="copy-code">npm install -g faf-cli@4.4.4</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Generate a .faf for any GitHub repo:</p>

			<div class="copy-box" onclick={() => copyText('faf git facebook/react', 'git-react')}>
				<code class="copy-code">faf git facebook/react</code>
				<button class="copy-btn">{copiedId === 'git-react' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf git bitcoin/bitcoin', 'git-bitcoin')}>
				<code class="copy-code">faf git bitcoin/bitcoin</code>
				<button class="copy-btn">{copiedId === 'git-bitcoin' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf git torvalds/linux', 'git-linux')}>
				<code class="copy-code">faf git torvalds/linux</code>
				<button class="copy-btn">{copiedId === 'git-linux' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v4.4.4" class="cta-link">v4.4.4 Release</a>
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
				<li><strong>v4.4.4</strong> - Released February 18, 2026</li>
				<li><strong>885/885</strong> - Tests passing (+86 new)</li>
				<li><strong>100</strong> - Famous repos scored</li>
				<li><strong>17</strong> - Languages detected</li>
				<li><strong>~35 lines</strong> - Average output (was ~130)</li>
			</ul>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Compact is just... correct. 🏎️
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

	.category.release {
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
		margin: 1rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	.comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.compare-box {
		border-radius: 8px;
		overflow: hidden;
	}

	.compare-box strong {
		display: block;
		padding: 0.5rem 1rem;
		font-size: 0.9rem;
	}

	.compare-box.before strong {
		background: #ff3333;
		color: white;
	}

	.compare-box.after strong {
		background: #00D4D4;
		color: #000;
	}

	.compare-box pre {
		margin: 0;
		border-radius: 0 0 8px 8px;
		font-size: 0.8rem;
	}

	.lang-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1.5rem 0;
	}

	.lang-tag {
		background: #1a1a1a;
		color: #00D4D4;
		padding: 0.3rem 0.75rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.85rem;
		font-weight: 600;
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

	.repo-showcase {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
		margin: 1.5rem 0;
	}

	.repo-item {
		background: #f8f8f8;
		border: 1px solid #eee;
		padding: 0.75rem;
		border-radius: 6px;
		font-size: 0.95rem;
	}

	.lang-small {
		display: block;
		color: #00D4D4;
		font-size: 0.8rem;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		margin-top: 0.25rem;
	}

	.repo-note {
		text-align: center;
		color: #888;
		font-style: italic;
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

		.comparison {
			grid-template-columns: 1fr;
		}

		.repo-showcase {
			grid-template-columns: repeat(2, 1fr);
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
