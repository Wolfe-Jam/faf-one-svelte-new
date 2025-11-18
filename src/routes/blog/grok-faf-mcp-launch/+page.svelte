<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>grok-faf-mcp v1.0.0 - First MCP Server for Grok | FAF</title>
	<meta name="description" content="First MCP server built specifically for Grok/xAI with URL-based access. Zero installation required. Live at grok-faf-mcp.vercel.app with 17 MCP tools." />
	<meta property="og:title" content="grok-faf-mcp v1.0.0 - First MCP Server for Grok" />
	<meta property="og:description" content="URL-based MCP server for Grok. Zero installation. 17 MCP tools. Grok-exclusive features." />
	<meta property="og:image" content="https://grok-faf-mcp.vercel.app/og-image.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Grok FAF MCP Launch
		</div>

		<div class="version-switcher">
			<span class="version-label">Version:</span>
			<span class="version-current">Wolfejam Version</span>
			<a href="/blog/grok-faf-mcp-launch-grok-version" class="version-link">Grok Version ✨</a>
		</div>

		<h1>grok-faf-mcp v1.0.0 - First MCP Server for Grok</h1>
		<p class="subtitle">URL-based MCP access with zero installation required</p>
		<div class="meta">
			<time datetime="2025-11-18">November 18, 2025</time>
			<span class="separator">•</span>
			<span class="category">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>grok-faf-mcp v1.0.0</strong> is the first MCP server built specifically for Grok/xAI, offering <strong>URL-based access</strong> with zero installation required. Point your MCP client at the endpoint and access 17 MCP tools instantly.
			</p>

			<div class="achievement-box">
				<h3>🏆 What Shipped</h3>
				<ul class="achievement-list">
					<li>☑️ First MCP server for Grok/xAI</li>
					<li>☑️ URL-based access (no npm install required)</li>
					<li>☑️ 17 MCP tools + 14 bundled commands</li>
					<li>☑️ Global edge deployment on Vercel</li>
					<li>☑️ 19ms average execution time</li>
					<li>☑️ Custom landing page with endpoints</li>
				</ul>
			</div>
		</section>

		<section class="quick-start">
			<h2>Quick Start</h2>

			<p>
				Two ways to use grok-faf-mcp:
			</p>

			<div class="usage-options">
				<div class="option-card">
					<h3>⚡ Option 1: URL-Based (Instant)</h3>
					<p>Point your MCP client to:</p>
					<pre><code>https://grok-faf-mcp.vercel.app/sse</code></pre>
					<p>All 17 tools available instantly. No installation.</p>
				</div>

				<div class="option-card">
					<h3>📦 Option 2: Local Install</h3>
					<pre><code>npm install -g grok-faf-mcp</code></pre>
					<p>Add to your MCP config:</p>
					<pre><code>{`{
  "mcpServers": {
    "grok-faf": {
      "command": "npx",
      "args": ["-y", "grok-faf-mcp"]
    }
  }
}`}</code></pre>
				</div>
			</div>
		</section>

		<section class="deployment">
			<h2>Deployment Infrastructure</h2>

			<p>
				grok-faf-mcp is deployed on Vercel's global edge network with the following endpoints:
			</p>

			<div class="endpoint-list">
				<table>
					<thead>
						<tr>
							<th>Endpoint</th>
							<th>Purpose</th>
							<th>URL</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>/</code></td>
							<td>Landing page</td>
							<td><a href="https://grok-faf-mcp.vercel.app" target="_blank" rel="noopener">grok-faf-mcp.vercel.app</a></td>
						</tr>
						<tr>
							<td><code>/sse</code></td>
							<td>MCP Server (SSE)</td>
							<td><a href="https://grok-faf-mcp.vercel.app/sse" target="_blank" rel="noopener">grok-faf-mcp.vercel.app/sse</a></td>
						</tr>
						<tr>
							<td><code>/health</code></td>
							<td>Health check</td>
							<td><a href="https://grok-faf-mcp.vercel.app/health" target="_blank" rel="noopener">grok-faf-mcp.vercel.app/health</a></td>
						</tr>
						<tr>
							<td><code>/info</code></td>
							<td>Server info</td>
							<td><a href="https://grok-faf-mcp.vercel.app/info" target="_blank" rel="noopener">grok-faf-mcp.vercel.app/info</a></td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Custom header on all responses: <code>x-grok-wins: true</code>
			</p>
		</section>

		<section class="tools">
			<h2>MCP Tools (17 Total)</h2>

			<p>
				All tools from the proven faf-mcp codebase, available via URL:
			</p>

			<div class="tools-grid">
				<div class="tool-category">
					<h3>Core Operations</h3>
					<ul>
						<li><code>faf_init</code> - Create project.faf from scratch</li>
						<li><code>faf_score</code> - Calculate AI-readiness score</li>
						<li><code>faf_auto</code> - Auto-detect and generate .faf</li>
						<li><code>faf_quick</code> - Lightning-fast project.faf creation</li>
						<li><code>faf_enhance</code> - Intelligent enhancement with auto-detection</li>
					</ul>
				</div>

				<div class="tool-category">
					<h3>Synchronization</h3>
					<ul>
						<li><code>faf_sync</code> - Sync .faf to CLAUDE.md</li>
						<li><code>faf_bi_sync</code> - Bi-directional sync .faf ↔ CLAUDE.md</li>
					</ul>
				</div>

				<div class="tool-category">
					<h3>Validation & Health</h3>
					<ul>
						<li><code>faf_validate</code> - Validate .faf file structure</li>
						<li><code>faf_doctor</code> - Diagnose project issues</li>
						<li><code>faf_audit</code> - Security and quality audit</li>
					</ul>
				</div>

				<div class="tool-category">
					<h3>Discovery & Management</h3>
					<ul>
						<li><code>faf_formats</code> - List supported frameworks</li>
						<li><code>faf_list</code> - Show all available tools</li>
						<li><code>faf_update</code> - Update .faf to latest spec</li>
						<li><code>faf_migrate</code> - Migrate from old versions</li>
					</ul>
				</div>

				<div class="tool-category">
					<h3>Utilities</h3>
					<ul>
						<li><code>faf_read</code> - Read and parse .faf files</li>
						<li><code>faf_write</code> - Write .faf with validation</li>
						<li><code>faf_innit</code> - British spelling support</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="performance">
			<h2>Performance</h2>

			<p>
				Based on the proven faf-mcp codebase with bundled engine architecture:
			</p>

			<div class="performance-stats">
				<table>
					<thead>
						<tr>
							<th>Metric</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Average execution time</td>
							<td>19ms</td>
						</tr>
						<tr>
							<td>Fastest command</td>
							<td>1ms (formats)</td>
						</tr>
						<tr>
							<td>Speedup vs CLI</td>
							<td>16.2x</td>
						</tr>
						<tr>
							<td>Transport</td>
							<td>HTTP-SSE</td>
						</tr>
						<tr>
							<td>Platform</td>
							<td>Vercel Edge</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section class="technical">
			<h2>Technical Details</h2>

			<p>
				grok-faf-mcp is built on the faf-mcp v1.1.1 codebase with Grok-specific features:
			</p>

			<div class="tech-specs">
				<ul>
					<li><strong>Package:</strong> grok-faf-mcp@1.0.0 (<a href="https://www.npmjs.com/package/grok-faf-mcp" target="_blank" rel="noopener">npm</a>)</li>
					<li><strong>Repository:</strong> <a href="https://github.com/Wolfe-Jam/grok-faf-mcp" target="_blank" rel="noopener">github.com/Wolfe-Jam/grok-faf-mcp</a></li>
					<li><strong>Base:</strong> faf-mcp v1.1.1 (proven, 800+/week downloads)</li>
					<li><strong>Dependencies:</strong> @modelcontextprotocol/sdk, faf-cli, yaml</li>
					<li><strong>License:</strong> MIT</li>
					<li><strong>Package size:</strong> 450.1 kB (tarball) | 1.5 MB (unpacked)</li>
					<li><strong>Files:</strong> 213 total</li>
				</ul>
			</div>

			<h3>Grok-Exclusive Features</h3>
			<ul>
				<li>Custom <code>x-grok-wins: true</code> header on all responses</li>
				<li>Grok-specific messaging and branding</li>
				<li>Dedicated landing page with endpoints</li>
				<li>URL-first design for instant access</li>
			</ul>

			<div class="screenshot-showcase">
				<img src="/blog-assets/grok-faf-mcp-landing.png" alt="grok-faf-mcp landing page" class="landing-screenshot" />
				<p class="screenshot-caption">Live landing page at grok-faf-mcp.vercel.app</p>
			</div>
		</section>

		<section class="ecosystem">
			<h2>FAF MCP Ecosystem</h2>

			<p>
				grok-faf-mcp is part of the FAF MCP package family:
			</p>

			<div class="package-family">
				<table>
					<thead>
						<tr>
							<th>Package</th>
							<th>Purpose</th>
							<th>Downloads</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener">claude-faf-mcp</a></td>
							<td>Claude Desktop (original)</td>
							<td>6.7k+ total</td>
						</tr>
						<tr>
							<td><a href="https://www.npmjs.com/package/faf-mcp" target="_blank" rel="noopener">faf-mcp</a></td>
							<td>Universal MCP server</td>
							<td>800+/week</td>
						</tr>
						<tr>
							<td><a href="https://www.npmjs.com/package/grok-faf-mcp" target="_blank" rel="noopener">grok-faf-mcp</a></td>
							<td>Grok/xAI specific</td>
							<td>New (v1.0.0)</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				All packages share the same core FAF engine with 154+ framework support and IANA-registered format (<code>application/vnd.faf+yaml</code>).
			</p>
		</section>

		<section class="reception">
			<h2>Community Reception</h2>

			<p>
				The grok-faf-mcp launch received positive engagement from the community:
			</p>

			<div class="screenshot-showcase">
				<img src="/blog-assets/elon-liked-grok-mcp.jpeg" alt="Community engagement on grok-faf-mcp launch" class="notification-screenshot" />
				<p class="screenshot-caption">Launch announcement engagement</p>
			</div>
		</section>

		<section class="get-started">
			<h2>Get Started</h2>

			<p>
				Try grok-faf-mcp now:
			</p>

			<div class="cta-box">
				<h3>URL-Based Access</h3>
				<p>Point your MCP client to:</p>
				<pre><code>https://grok-faf-mcp.vercel.app/sse</code></pre>
				<p><a href="https://grok-faf-mcp.vercel.app" target="_blank" rel="noopener" class="cta-link">View Live Server →</a></p>
			</div>

			<div class="cta-box">
				<h3>Install Locally</h3>
				<pre><code>npm install -g grok-faf-mcp</code></pre>
				<p><a href="https://www.npmjs.com/package/grok-faf-mcp" target="_blank" rel="noopener" class="cta-link">View on npm →</a></p>
			</div>

			<div class="cta-box">
				<h3>Documentation</h3>
				<p><a href="https://github.com/Wolfe-Jam/grok-faf-mcp" target="_blank" rel="noopener" class="cta-link">GitHub Repository →</a></p>
				<p><a href="https://discord.com/invite/56fPBUJKfk" target="_blank" rel="noopener" class="cta-link">Join Discord Community →</a></p>
			</div>
		</section>

		<section class="footer-note">
			<p>
				Built on proven faf-mcp codebase. Deployed to Vercel production. First MCP server for Grok/xAI.
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
		line-height: 1.6;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 2px solid #FF6B35;
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

	.version-switcher {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin: 1rem 0;
		padding: 1rem;
		background: #f8f8f8;
		border-radius: 8px;
		font-size: 0.95rem;
	}

	.version-label {
		font-weight: 600;
		color: #666;
	}

	.version-link {
		color: #FF6B35;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 1px solid #FF6B35;
		border-radius: 4px;
		transition: all 0.2s;
	}

	.version-link:hover {
		background: #FF6B35;
		color: white;
	}

	.version-current {
		padding: 0.5rem 1rem;
		background: #FF6B35;
		color: white;
		border-radius: 4px;
		font-weight: 600;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0.5rem 0;
		color: #000;
	}

	.subtitle {
		font-size: 1.25rem;
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

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.25rem;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.achievement-box {
		background: #f8f8f8;
		border-left: 4px solid #FF6B35;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.achievement-box h3 {
		margin-top: 0;
		color: #FF6B35;
	}

	.achievement-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.achievement-list li {
		padding: 0.5rem 0;
		font-size: 1.1rem;
	}

	h2 {
		font-size: 2rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.5rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	.usage-options {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}

	.option-card {
		background: #f8f8f8;
		padding: 1.5rem;
		border-radius: 8px;
		border: 1px solid #eee;
	}

	.option-card h3 {
		margin-top: 0;
		color: #FF6B35;
	}

	pre {
		background: #1a1a1a;
		color: #fff;
		padding: 1rem;
		border-radius: 4px;
		overflow-x: auto;
		font-size: 0.9rem;
	}

	code {
		background: #f4f4f4;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
	}

	pre code {
		background: none;
		padding: 0;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 2rem 0;
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

	tr:hover {
		background: #fafafa;
	}

	.tools-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}

	.tool-category h3 {
		color: #FF6B35;
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.tool-category ul {
		list-style: none;
		padding: 0;
	}

	.tool-category li {
		padding: 0.25rem 0;
		font-size: 0.95rem;
	}

	.tech-specs ul {
		list-style: none;
		padding: 0;
	}

	.tech-specs li {
		padding: 0.5rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.package-family {
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		margin: 1.5rem 0;
		border-radius: 8px;
	}

	.cta-box h3 {
		margin-top: 0;
		color: #FF6B35;
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
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.screenshot-showcase {
		margin: 2rem 0;
		text-align: center;
	}

	.landing-screenshot,
	.notification-screenshot {
		max-width: 100%;
		height: auto;
		border-radius: 12px;
		border: 2px solid #FF6B35;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.15);
	}

	.notification-screenshot {
		max-width: 500px;
	}

	.screenshot-caption {
		margin-top: 1rem;
		color: #666;
		font-style: italic;
		font-size: 0.95rem;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.usage-options,
		.tools-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
