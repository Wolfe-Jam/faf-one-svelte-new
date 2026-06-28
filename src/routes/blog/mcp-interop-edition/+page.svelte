<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	let copiedId = $state('');
	onMount(() => { mounted = true; });

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: claude-faf-mcp v4.5.0 — The MCP Interop Edition

61 tools. 4 AI formats. One project.faf. Zero CLI dependency.`;
	const shareUrl = 'https://faf.one/blog/mcp-interop-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>MCP Interop Edition - claude-faf-mcp v4.5.0 | FAF</title>
	<meta name="description" content="61 MCP tools. Define once in project.faf, generate CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md. Zero CLI dependency." />
	<meta property="og:title" content="MCP Interop Edition - claude-faf-mcp v4.5.0" />
	<meta property="og:description" content="61 tools. 4 AI formats. One project.faf. Zero CLI dependency." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / MCP Interop Edition
		</div>

		<h1>MCP Interop Edition</h1>
		<p class="version-tag">claude-faf-mcp v4.5.0</p>
		<p class="subtitle">61 tools. 4 AI formats. One project.faf. Zero CLI dependency.</p>
		<div class="meta">
			<time datetime="2026-02-27">February 27, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category interop">MCP Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp now speaks every AI format. Define your project once in <code>project.faf</code>, and the MCP server generates CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md &mdash; all without touching a CLI. 5 new tools, 7 bundled parsers, 351 tests passing.
			</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>AI Format Interop</h3>
			<p>One <code>project.faf</code>. Every AI instruction format. Generated inside Claude Desktop or Claude Code &mdash; no terminal required.</p>

			<!-- Hub-and-Spoke Interop Diagram -->
			<div class="interop-diagram">
				<div class="hub">
					<div class="hub-icon">&#9881;</div>
					<div class="hub-label">project.faf</div>
					<div class="hub-sub">Single source of truth</div>
				</div>
				<div class="spokes">
					<div class="spoke">
						<div class="spoke-arrow">&rarr;</div>
						<div class="spoke-target claude-target">
							<div class="spoke-file">CLAUDE.md</div>
							<div class="spoke-platform">Anthropic</div>
						</div>
					</div>
					<div class="spoke">
						<div class="spoke-arrow">&rarr;</div>
						<div class="spoke-target agents-target">
							<div class="spoke-file">AGENTS.md</div>
							<div class="spoke-platform">OpenAI / Linux Foundation</div>
						</div>
					</div>
					<div class="spoke">
						<div class="spoke-arrow">&rarr;</div>
						<div class="spoke-target cursor-target">
							<div class="spoke-file">.cursorrules</div>
							<div class="spoke-platform">Cursor IDE</div>
						</div>
					</div>
					<div class="spoke">
						<div class="spoke-arrow">&rarr;</div>
						<div class="spoke-target gemini-target">
							<div class="spoke-file">GEMINI.md</div>
							<div class="spoke-platform">Google Gemini CLI</div>
						</div>
					</div>
				</div>
				<div class="diagram-caption">faf_bi_sync {`{ all: true }`} &mdash; one call, every format</div>
			</div>

			<h3>5 New MCP Tools</h3>

			<ul>
				<li><strong>faf_agents</strong> &mdash; Import/export/sync AGENTS.md (OpenAI Codex, Linux Foundation standard)</li>
				<li><strong>faf_cursor</strong> &mdash; Import/export/sync .cursorrules (Cursor IDE)</li>
				<li><strong>faf_gemini</strong> &mdash; Import/export/sync GEMINI.md (Google Gemini CLI)</li>
				<li><strong>faf_conductor</strong> &mdash; Import/export Google Conductor directory</li>
				<li><strong>faf_git</strong> &mdash; Generate .faf from any public GitHub repo URL</li>
			</ul>

			<h3>Bi-Sync All At Once</h3>
			<p>One call generates every format simultaneously:</p>

			<div class="terminal-block">
				<code>faf_bi_sync {`{ all: true }`}</code>
			</div>

			<p>CLAUDE.md + AGENTS.md + .cursorrules + GEMINI.md &mdash; synced in milliseconds.</p>

			<h3>GitHub Context Extraction</h3>
			<p>Point at any public repo, get instant AI context:</p>

			<div class="terminal-block">
				<code>faf_git {`{ url: "https://github.com/owner/repo" }`}</code>
			</div>

			<p>No clone. No install. 2 seconds to 90%+ AI-readiness.</p>
		</section>

		<section>
			<h2>100% Standalone</h2>

			<div class="insight-box">
				<h3>Zero CLI Dependency</h3>
				<p>7 bundled parsers. All format logic runs inside the MCP server. No faf-cli required.</p>
			</div>

			<p>The parsers &mdash; agents-parser, cursorrules-parser, gemini-parser, conductor-parser, github-extractor, faf-git-generator, slot-counter &mdash; are all bundled directly. Same architecture that made v3.0.4 standalone, now extended to every AI format.</p>
		</section>

		<section>
			<h2>README Upgrade</h2>
			<p>The npm page is the storefront. v4.5.0 ships with a restructured README:</p>
			<ul>
				<li><strong>6 Ws Quick Reference</strong> &mdash; WHO/WHAT/WHERE/WHY/WHEN/HOW at the top</li>
				<li><strong>Navigation bar</strong> &mdash; Jump to any section</li>
				<li><strong>DAAFT economics</strong> &mdash; 91% token waste, $5,460/year per developer</li>
				<li><strong>CLI vs MCP table</strong> &mdash; Same format, different execution layer</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g claude-faf-mcp', 'install')}>
				<code class="copy-code">npm install -g claude-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or add to your MCP config:</p>

			<div class="copy-box" onclick={() => copyText('{\n  "mcpServers": {\n    "faf": {\n      "command": "npx",\n      "args": ["-y", "claude-faf-mcp"]\n    }\n  }\n}', 'config')}>
				<div class="copy-code-multi">{`{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "claude-faf-mcp"]
    }
  }
}`}</div>
				<button class="copy-btn">{copiedId === 'config' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v4.5.0" class="cta-link">v4.5.0 Release</a>
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
				<li><strong>v4.5.0</strong> &mdash; Released February 27, 2026</li>
				<li><strong>351/351</strong> &mdash; Tests passing (95 new)</li>
				<li><strong>61</strong> &mdash; MCP tools (25 core + 36 advanced)</li>
				<li><strong>100%</strong> &mdash; Trophy score</li>
				<li><strong>27,000+</strong> &mdash; npm downloads (ecosystem)</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One file defines your project. Every AI tool reads it in its own language.</p>
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

	.category.interop {
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

	/* Hub-and-Spoke Interop Diagram */
	.interop-diagram {
		background: #0a0a0a;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.hub {
		background: #1a1a1a;
		border: 2px solid #FF6B35;
		border-radius: 12px;
		padding: 1.25rem 2rem;
		text-align: center;
		min-width: 200px;
	}

	.hub-icon {
		font-size: 1.5rem;
		color: #FF6B35;
		margin-bottom: 0.25rem;
	}

	.hub-label {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 1.2rem;
		font-weight: 700;
		color: #FF6B35;
	}

	.hub-sub {
		font-size: 0.75rem;
		color: #888;
		margin-top: 0.25rem;
	}

	.spokes {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		width: 100%;
		max-width: 500px;
	}

	.spoke {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.spoke-arrow {
		color: #555;
		font-size: 1.2rem;
		flex-shrink: 0;
	}

	.spoke-target {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 0.75rem 1rem;
		flex: 1;
		border-left: 3px solid;
	}

	.claude-target { border-left-color: #f59e0b; }
	.agents-target { border-left-color: var(--faf-green-light); }
	.cursor-target { border-left-color: #059669; }
	.gemini-target { border-left-color: #3b82f6; }

	.spoke-file {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
		font-weight: 600;
		color: #f5f5f5;
	}

	.spoke-platform {
		font-size: 0.7rem;
		color: #888;
		margin-top: 0.15rem;
	}

	.diagram-caption {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
		color: #00D4D4;
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
		align-items: flex-start;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.copy-box:hover {
		border-color: #555;
	}

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
		font-size: 0.85rem;
		font-weight: 600;
		line-height: 1.6;
		white-space: pre;
	}

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

	.copy-btn:hover {
		background: rgba(255, 107, 53, 0.3);
		border-color: #ff6b35;
	}

	.copy-btn:active {
		transform: scale(0.95);
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

		.spokes {
			grid-template-columns: 1fr;
		}
	}
</style>
