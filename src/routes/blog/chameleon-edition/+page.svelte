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
	<title>The Chameleon Edition - gemini-faf-mcp v2.4.0 | FAF</title>
	<meta name="description" content="One command, both modes. gemini-faf-mcp auto-selects its transport: stdio locally, Streamable HTTP on Cloud Run. Same binary, 12 tools, zero config." />
	<meta property="og:title" content="The Chameleon Edition - gemini-faf-mcp v2.4.0" />
	<meta property="og:description" content="One binary that's a local MCP server and a hosted one, decided by its environment. Drops straight into Google Antigravity." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/chameleon-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/chameleon-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Chameleon Edition
		</div>

		<h1>The Chameleon Edition</h1>
		<p class="version-tag">gemini-faf-mcp v2.4.0</p>
		<p class="subtitle">One command, both modes.</p>
		<div class="meta">
			<time datetime="2026-06-07">June 7, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/chameleon-edition-hero.png" alt="gemini-faf-mcp v2.4.0 The Chameleon Edition — dotFaf hub between two chameleons, one path to a terminal (stdio, local), one to a cloud (Streamable HTTP, Cloud Run), with Google, Gemini, Antigravity, Python and MCP marks." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> gemini-faf-mcp now auto-selects its transport &mdash; <strong>stdio</strong> locally, <strong>Streamable HTTP</strong> on Cloud Run. Same binary, 12 tools, zero config. One binary that's a local MCP server and a hosted one, decided by its environment.
			</p>
		</section>

		<section>
			<h2>One Command, Both Modes</h2>

			<p>gemini-faf-mcp reads its environment and adapts. Run it locally and it speaks <strong>stdio</strong> &mdash; the transport <code>uvx</code> and MCP clients expect. Set a <code>PORT</code> (as Google Cloud Run does) and the same binary serves modern <strong>Streamable HTTP</strong>: stateless, JSON, no SSE. No flags. No second package. No config. The server decides.</p>

			<pre><code>{`uvx gemini-faf-mcp        →  stdio   (local / MCP client)
PORT=8080  →  python app  →  Streamable HTTP  (Cloud Run)`}</code></pre>

			<p>Twelve tools either way. Identical behavior. The only thing that changes is the door it answers.</p>
		</section>

		<section>
			<h2>Why a Chameleon</h2>

			<p>A chameleon doesn't change what it is &mdash; it changes how it meets its surroundings. Same here: one codebase, 12 tools, one <code>main()</code> shared by the console script and the container. What shifts is the transport, chosen by where it runs.</p>

			<p>Under the hood, the entry point passes the transport <strong>explicitly</strong> (<code>transport="stdio"</code> when local), instead of leaning on a framework default. The payoff is real: a strict MCP client that used to stall mid-handshake now connects cleanly &mdash; <code>initialize</code>, <code>tools/list</code>, <code>tools/call</code>, every time.</p>
		</section>

		<section>
			<h2>Drop It Into Google Antigravity</h2>

			<p>Google's agentic IDE, <strong>Antigravity</strong>, reads one MCP config file &mdash; and it accepts <em>both</em> of gemini-faf-mcp's modes. This is where "decided by its environment" stops being a metaphor.</p>

			<p>Local (stdio) &mdash; in <code>~/.gemini/config/mcp_config.json</code>:</p>

			<pre><code>{`{
  "mcpServers": {
    "gemini-faf": { "command": "uvx", "args": ["gemini-faf-mcp"] }
  }
}`}</code></pre>

			<p>Hosted (Streamable HTTP) &mdash; same file, the running endpoint:</p>

			<pre><code>{`{
  "mcpServers": {
    "gemini-faf": { "serverUrl": "https://mcpaas.live/gemini/mcp/v1" }
  }
}`}</code></pre>

			<p>One gotcha worth knowing: Antigravity expects <code>serverUrl</code> &mdash; not <code>url</code>, not <code>httpUrl</code>. The same config also works in the Gemini CLI, which converges into the Antigravity CLI. Local devs point at <code>uvx</code>; agentic and remote setups point at the URL. Same server, the environment picks.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('uvx gemini-faf-mcp', 'install')}>
				<code class="copy-code">uvx gemini-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or point any MCP client at the hosted endpoint &mdash; tools execute on Google Cloud Run, fronted at the edge:</p>

			<div class="copy-box" onclick={() => copyText('https://mcpaas.live/gemini/mcp/v1', 'url')}>
				<code class="copy-code">https://mcpaas.live/gemini/mcp/v1</code>
				<button class="copy-btn">{copiedId === 'url' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>PyPI</h3>
					<p>Install the package.</p>
					<a href="https://pypi.org/project/gemini-faf-mcp/" class="cta-link">gemini-faf-mcp</a>
				</div>
				<div class="cta-box">
					<h3>MCP Registry</h3>
					<p>Official listing.</p>
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp" class="cta-link">gemini-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v2.4.0</strong> &mdash; Released June 7, 2026</li>
				<li><strong>12 tools</strong> &mdash; identical across both transports</li>
				<li><strong>221/221</strong> &mdash; tests passing (FastMCP 3.4)</li>
				<li><strong>2 transports, 1 binary</strong> &mdash; stdio + Streamable HTTP</li>
				<li><strong>Google Cloud Run</strong> &mdash; tools execute hosted (us-east1)</li>
				<li><strong>PyPI + MCP Registry + Gemini Extensions</strong> &mdash; all on 2.4.0</li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=gemini-faf-mcp%20v2.4.0%20%E2%80%94%20The%20Chameleon%20Edition.%20One%20command%2C%20both%20modes%3A%20stdio%20locally%2C%20Streamable%20HTTP%20on%20Cloud%20Run.%20Drops%20into%20Google%20Antigravity.&url=https://faf.one/blog/chameleon-edition" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; Same binary. Right skin for where it lives. 🏎️</p>
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
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: -1rem 0 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
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
		color: #1a1a1a;
		font-weight: 600;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator {
		color: #1a1a1a;
	}

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
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
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #1a1a1a;
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

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: var(--faf-page-bg);
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
		color: #1a1a1a;
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
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #1a1a1a;
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
		color: #FF6B35;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
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

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
