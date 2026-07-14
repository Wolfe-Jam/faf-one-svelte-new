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
	<title>The Extension Edition - claude-faf-mcp v5.5.0 | FAF</title>
	<meta name="description" content="One-click install for Claude Desktop. No JSON config, no terminal, no path debugging. Drag, click, done. 32 tools. 118 tests." />
	<meta property="og:title" content="The Extension Edition - claude-faf-mcp v5.5.0" />
	<meta property="og:description" content="One-click install for Claude Desktop. No JSON, no terminal. Drag, click, done." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/extension-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/extension-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Extension Edition
		</div>

		<h1>The Extension Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.5.0</p>
		<p class="subtitle">From JSON config to one click. The install barrier is gone.</p>
		<div class="meta">
			<time datetime="2026-04-15">April 15, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/extension-edition-hero.png" alt="The Extension Edition — JSON config crossed out, FAF orange smiley, .mcpb file with green checkmark. One Click. 32 Tools." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp is now a Desktop Extension. One file, one click, 32 tools ready. No JSON editing, no terminal, no debugging why Claude Desktop ignores your runtime. The old way is dead.
			</p>
		</section>

		<section>
			<h2>The Problem We Killed</h2>

			<p>Every MCP server had the same install story:</p>

			<ol>
				<li>Find <code>claude_desktop_config.json</code></li>
				<li>Edit JSON by hand</li>
				<li>Get the path wrong</li>
				<li>Restart Claude Desktop</li>
				<li>Debug why it says "Server disconnected"</li>
				<li>Discover Claude Desktop uses its own built-in Node.js (undocumented)</li>
				<li>Fix the path again</li>
				<li>Finally works</li>
			</ol>

			<p>That's 8 steps where users give up. We replaced them with one:</p>

			<div class="insight-box">
				<h3>Drag. Click. Done.</h3>
				<p>Desktop Extensions (.mcpb) are Anthropic's new one-click install format. We adopted it before most people knew it existed.</p>
			</div>
		</section>

		<section>
			<h2>What's in v5.5.0</h2>

			<h3>Desktop Extension (.mcpb)</h3>
			<p>A 6.2MB bundle that installs with a double-click. Claude Desktop shows the extension page with all 32 tools, per-tool permission controls, and a single toggle to enable/disable. No config files touched.</p>

			<h3>Full Tool Annotations</h3>
			<p>Every tool now carries <code>readOnlyHint</code>, <code>destructiveHint</code>, and <code>title</code> annotations. Claude Desktop uses these to sort tools into read-only (15) and write/delete (17) groups with granular permissions. Only <code>faf_clear</code> is marked destructive.</p>

			<h3>Tilde Path Fix</h3>
			<p><code>faf_read</code> and <code>faf_write</code> now expand <code>~/</code> paths correctly. Every other tool already did — these were the outliers. Fixed.</p>

			<h3>Security Cleanup</h3>
			<p>Removed an unused file (<code>behavioral-instruction.ts</code>) that contained a prompt instruction wrapper pattern. It was never imported, never called — but its presence in the codebase was a liability for directory review. Gone.</p>

			<h3>Repo Cleanup</h3>
			<p>27 junk files removed. Test debris, Python artifacts from an early prototype, old WJTTC reports, a 28MB copy of the Anthropic servers monorepo, and <code>victory-lap.txt</code>. The repo now looks like what it is: a production MCP server.</p>
		</section>

		<section>
			<h2>118 Tests. Zero Failures.</h2>

			<p>We didn't just test the happy path. We tested what breaks MCP servers in the wild.</p>

			<div class="stats-grid">
				<div class="stat-box">
					<div class="stat-number">67/67</div>
					<div class="stat-label">WJTTC v5.5.0</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">17/17</div>
					<div class="stat-label">Patch Tests</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">25/25</div>
					<div class="stat-label">Adversarial Security</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">9/9</div>
					<div class="stat-label">Live Claude Desktop</div>
				</div>
			</div>

			<p>The adversarial suite was built from real-world MCP vulnerabilities — <a href="https://vulnerablemcp.info/" target="_blank" rel="noopener">vulnerablemcp.info</a>, Snyk Labs, Unit42, and Anthropic's own CVEs (CVE-2025-68143 class). Path traversal, resource exhaustion, prompt injection, information leakage, null/unicode/10K-char edge cases. All blocked.</p>
		</section>

		<section>
			<h2>Ship Status</h2>

			<table class="status-table">
				<thead>
					<tr><th>Check</th><th>Status</th></tr>
				</thead>
				<tbody>
					<tr><td>CI/CD</td><td><span class="check">&#10003;</span> Green — all jobs passing</td></tr>
					<tr><td>Build</td><td><span class="check">&#10003;</span> Clean (tsc)</td></tr>
					<tr><td>Jest Suite</td><td><span class="check">&#10003;</span> 391/391 passing</td></tr>
					<tr><td>FAF Score</td><td><span class="check">&#10003;</span> 100% Trophy (15/15 slots)</td></tr>
					<tr><td>WJTTC</td><td><span class="check">&#10003;</span> 67/67 Championship Grade</td></tr>
					<tr><td>Adversarial Security</td><td><span class="check">&#10003;</span> 25/25 (5 tiers, real CVE patterns)</td></tr>
					<tr><td>Total Tests</td><td><span class="check">&#10003;</span> 118/118 — zero code failures</td></tr>
					<tr><td>npm audit</td><td><span class="check">&#10003;</span> 0 vulnerabilities</td></tr>
					<tr><td>Tool Annotations</td><td><span class="check">&#10003;</span> 32/32 complete</td></tr>
				</tbody>
			</table>

			<table class="status-table" style="margin-top: 1.5rem;">
				<thead>
					<tr><th>Publish</th><th>Status</th></tr>
				</thead>
				<tbody>
					<tr><td>npm</td><td><span class="check">&#10003;</span> claude-faf-mcp@5.5.0 live</td></tr>
					<tr><td>GitHub Release</td><td><span class="check">&#10003;</span> v5.5.0 tagged</td></tr>
					<tr><td>MCP Registry</td><td><span class="check">&#10003;</span> v5.5.0 published</td></tr>
					<tr><td>Desktop Extension</td><td><span class="check">&#10003;</span> .mcpb 6.2MB, one-click install</td></tr>
					<tr><td>Anthropic Directory</td><td><span class="check">&#10003;</span> Submitted</td></tr>
				</tbody>
			</table>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="terminal-block" onclick={() => copyText('npm install -g claude-faf-mcp', 'install')}>
				<code>npm install -g claude-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or download the <code>.mcpb</code> from the <a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v5.5.0" target="_blank" rel="noopener">GitHub Release</a> and drag it into Claude Desktop.</p>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source, releases, and the .mcpb file.</p>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v5.5.0" class="cta-link">v5.5.0 Release</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v5.5.0</strong> — Released April 15, 2026</li>
				<li><strong>118/118</strong> — Tests passing (adversarial + WJTTC + live)</li>
				<li><strong>391/391</strong> — Jest suite passing</li>
				<li><strong>100%</strong> — Trophy score</li>
				<li><strong>32</strong> — MCP tools (15 read-only, 16 write, 1 destructive)</li>
				<li><strong>6.2MB</strong> — Extension bundle size</li>
				<li><strong>36,000+</strong> — Downloads across ecosystem</li>
				<li><strong>PR #2759</strong> — Merged in Anthropic MCP ecosystem (October 2025)</li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=claude-faf-mcp%20v5.5.0%20%E2%80%94%20The%20Extension%20Edition.%20One-click%20install%20for%20Claude%20Desktop.%20No%20JSON%2C%20no%20terminal.%20118%20tests%2C%20zero%20failures.&url=https://faf.one/blog/extension-edition" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf &#9745; The install barrier is gone. The old way is dead.
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
		background: #00B8B8;
		color: white;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--faf-surface)5f0;
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
		margin: 0 0 0.5rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		color: #333;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.stat-box {
		background: var(--faf-surface);
		border: 1px solid #eee;
		border-radius: 8px;
		padding: 1.25rem 0.75rem;
		text-align: center;
	}

	.stat-number {
		font-size: 1.5rem;
		font-weight: 800;
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.stat-label {
		font-size: 0.75rem;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-top: 0.25rem;
	}

	.terminal-block {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1rem 1.25rem;
		border-radius: 8px;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.95rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		margin: 1.5rem 0;
	}

	.terminal-block code {
		background: none;
		color: #00ff88;
		padding: 0;
	}

	.copy-btn {
		background: #333;
		color: #aaa;
		border: 1px solid #444;
		padding: 0.3rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
		cursor: pointer;
	}

	.copy-btn:hover {
		background: #444;
		color: #fff;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: var(--faf-surface);
		border: 1px solid #eee;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.cta-box p {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 0.75rem;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	.share-section {
		text-align: center;
		margin: 3rem 0;
	}

	.share-btn {
		display: inline-block;
		background: #000;
		color: #fff;
		padding: 0.6rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.share-btn:hover {
		background: #333;
	}

	.footer-note {
		text-align: center;
		padding: 2rem 0;
		border-top: 1px solid #eee;
		color: #888;
		font-size: 0.95rem;
	}

	.status-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
		margin: 1.5rem 0;
	}

	.status-table th {
		text-align: left;
		padding: 0.6rem 1rem;
		background: #f5f5f5;
		border-bottom: 2px solid #ddd;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: #666;
	}

	.status-table td {
		padding: 0.5rem 1rem;
		border-bottom: 1px solid #eee;
	}

	.status-table tr:last-child td {
		border-bottom: none;
	}

	.check {
		color: #00aa44;
		font-weight: 700;
		margin-right: 0.3rem;
	}

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	@media (max-width: 600px) {
		h1 { font-size: 1.6rem; }
		.stats-grid { grid-template-columns: repeat(2, 1fr); }
		.cta-grid { grid-template-columns: 1fr; }
	}
</style>
