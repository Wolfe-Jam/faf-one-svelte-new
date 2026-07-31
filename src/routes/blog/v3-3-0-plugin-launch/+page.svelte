<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	onMount(() => {
		mounted = true;
	});

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-cli v3.3.0 — Claude Code Plugin Support

Full plugin support, SSH bug fix, and discoverable in 8,500+ plugin registry. 20k+ ecosystem downloads.`;
	const shareUrl = 'https://faf.one/blog/v3-3-0-plugin-launch';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>FAF CLI v3.3.0: Claude Code Plugin Support + SSH Bug Fix | faf.one</title>
	<meta name="description" content="FAF CLI v3.3.0 launches with full Claude Code plugin support, SSH bug workaround, and auto-discovery in the 8,500+ plugin registry." />
	<meta property="og:title" content="FAF CLI v3.3.0: Claude Code Plugin Support" />
	<meta property="og:description" content="Full plugin support, SSH bug fix, and discoverable in 8,500+ plugin registry. 20k+ ecosystem downloads." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / v3.3.0 Plugin Launch
		</div>
		<h1>FAF CLI v3.3.0: Claude Code Plugin Support</h1>
		<p class="subtitle">What We Did. What This Means. What We Fixed.</p>
		<div class="meta">
			<time datetime="2025-12-28">December 28, 2025</time>
			<span class="separator">•</span>
			<span class="version">faf-cli v3.3.0</span>
			<span class="separator">•</span>
			<span class="downloads">20k+ Ecosystem Downloads</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>FAF CLI v3.3.0</strong> ships with full Claude Code plugin support, a workaround for the marketplace SSH bug, and automatic discovery in the 8,500+ plugin registry.
			</p>
		</section>

		<section class="what-we-did">
			<h2>What We Did</h2>
			<ul>
				<li><strong>Claude Code Plugin Structure:</strong> Full plugin at repo root with <code>.claude-plugin/plugin.json</code>, <code>commands/</code>, and <code>skills/</code></li>
				<li><strong>New Command:</strong> <code>faf plugin-install owner/repo</code> installs plugins via HTTPS (the fix)</li>
				<li><strong>WJTTC Test Suite:</strong> 31 tests validating plugin structure and functionality</li>
				<li><strong>Auto-Discovery:</strong> Added <code>claude-code-plugin</code> topic for registry indexing</li>
			</ul>
		</section>

		<section class="what-this-means">
			<h2>What This Means</h2>
			<p>
				FAF is now discoverable among <strong>8,500+ plugins</strong> on <a href="https://claude-plugins.dev" target="_blank" rel="noopener">claude-plugins.dev</a>. The registry auto-indexes every 10 minutes from GitHub.
			</p>
			<p>
				Install directly:
			</p>
			<div class="copy-box" onclick={() => copyText('claude plugin add github:Wolfe-Jam/faf-cli', 'plugin-add')}>
				<code class="copy-code">claude plugin add github:Wolfe-Jam/faf-cli</code>
				<button class="copy-btn">{copiedId === 'plugin-add' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>
				Or use the workaround if you hit the SSH bug:
			</p>
			<div class="copy-box" onclick={() => copyText('npx faf-cli plugin-install Wolfe-Jam/faf-cli', 'plugin-install')}>
				<code class="copy-code">npx faf-cli plugin-install Wolfe-Jam/faf-cli</code>
				<button class="copy-btn">{copiedId === 'plugin-install' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section class="what-we-fixed">
			<h2>What We Fixed</h2>
			<p>
				The Claude Code marketplace has an SSH bug where third-party plugin installs hang indefinitely. We fixed it.
			</p>
			<div class="fix-box">
				<h3>The Problem</h3>
				<p>Marketplace uses HTTPS (works). Third-party install uses SSH (hangs).</p>
				<h3>The Fix</h3>
				<p><code>faf plugin-install</code> forces HTTPS clone with 60-second timeout.</p>
				<h3>GitHub Issues</h3>
				<ul class="issue-links">
					<li><a href="https://github.com/anthropics/claude-code/issues/9297" target="_blank">#9297</a></li>
					<li><a href="https://github.com/anthropics/claude-code/issues/9719" target="_blank">#9719</a></li>
					<li><a href="https://github.com/anthropics/claude-code/issues/9730" target="_blank">#9730</a></li>
					<li><a href="https://github.com/anthropics/claude-code/issues/9740" target="_blank">#9740</a></li>
				</ul>
			</div>
		</section>

		<section class="ecosystem">
			<h2>20k+ Ecosystem Downloads</h2>
			<p>
				Combined downloads across the FAF ecosystem:
			</p>
			<div class="stats-grid">
				<div class="stat">
					<span class="stat-number">8,500+</span>
					<span class="stat-label">faf-cli</span>
				</div>
				<div class="stat">
					<span class="stat-number">8,100+</span>
					<span class="stat-label">claude-faf-mcp</span>
				</div>
				<div class="stat">
					<span class="stat-number">20k+</span>
					<span class="stat-label">Total</span>
				</div>
			</div>
		</section>

		<section class="foundation-preview">
			<h2>FAF Foundation Preview (2026)</h2>
			<p>
				Looking ahead to early 2026:
			</p>
			<ul>
				<li><strong>.faf</strong> = The format (IANA-registered)</li>
				<li><strong>faf</strong> = The tools (CLI, MCP, commands)</li>
				<li><strong>WJTTC</strong> = The certification ("We Test the Testing")</li>
			</ul>
			<p>
				Free for individual developers. Teams and Enterprise pay for validation badges. The tools are free. The stamp costs.
			</p>
			<p>
				<a href="https://foundation.faf.one" target="_blank" rel="noopener">foundation.faf.one</a>
			</p>
		</section>

		<section class="get-started">
			<h2>Get Started</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli', 'install')}>
				<code class="copy-code">npm install -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf init', 'init')}>
				<code class="copy-code">faf init</code>
				<button class="copy-btn">{copiedId === 'init' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('faf plugin-install Wolfe-Jam/faf-cli', 'plugin-install2')}>
				<code class="copy-code">faf plugin-install Wolfe-Jam/faf-cli</code>
				<button class="copy-btn">{copiedId === 'plugin-install2' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section class="links-section">
			<h2>Resources</h2>
			<div class="links">
				<a href="https://github.com/Wolfe-Jam/faf-cli" class="link-button github-button" target="_blank">
					GitHub
				</a>
				<a href="https://www.npmjs.com/package/faf-cli" class="link-button npm-button" target="_blank">
					npm
				</a>
				<a href="https://claude-plugins.dev" class="link-button registry-button" target="_blank">
					Plugin Registry
				</a>
			</div>
		</section>

		<section class="conclusion">
			<p class="tagline">
				<strong>Plugin support. SSH fix. Auto-discovery.</strong>
			</p>
			<p class="brand">
				FAF CLI v3.3.0<br />
				20k+ Ecosystem Downloads<br />
				Free Forever
			</p>
		</section>
		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>
	</article>

	<footer class="post-footer">
		<div class="author">
			<p>Published by <strong>wolfejam</strong></p>
			<p class="tagline-footer">F1-Inspired Software Engineering</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

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

	.version {
		color: var(--faf-cyan-dark);
		font-weight: 500;
	}

	.downloads {
		color: var(--faf-orange);
		font-weight: 600;
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

	section {
		margin: 2.5rem 0;
	}

	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
		color: #1a1a1a;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 1rem 0 0.5rem;
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
		margin: 1.5rem 0;
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

	.fix-box {
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(255, 145, 77, 0.1) 100%);
		padding: 2rem;
		border-radius: 12px;
		border-left: 4px solid var(--faf-orange);
		margin: 1.5rem 0;
	}

	.fix-box h3 {
		color: var(--faf-orange);
		margin-top: 0;
	}

	.fix-box h3:not(:first-child) {
		margin-top: 1.5rem;
	}

	.issue-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 0.5rem;
	}

	.issue-links li {
		padding-left: 0;
	}

	.issue-links li:before {
		display: none;
	}

	.issue-links a {
		color: var(--faf-cyan-dark);
		text-decoration: none;
		font-weight: 500;
	}

	.issue-links a:hover {
		text-decoration: underline;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.stat {
		text-align: center;
		padding: 1.5rem;
		background: #f9f9f9;
		border-radius: 12px;
	}

	.stat-number {
		display: block;
		font-size: 2rem;
		font-weight: 800;
		color: var(--faf-orange);
	}

	.stat-label {
		display: block;
		font-size: 0.875rem;
		color: #666;
		margin-top: 0.5rem;
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

	.github-button {
		background: #1a1a1a;
	}

	.registry-button {
		background: var(--faf-cyan-dark);
	}

	.link-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
	}

	.author {
		text-align: center;
	}

	.author p {
		margin: 0.5rem 0;
	}

	.tagline-footer {
		color: #666;
		font-size: 0.875rem;
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
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.links {
			flex-direction: column;
		}

		.link-button {
			display: block;
			width: 100%;
			text-align: center;
		}
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
</style>
