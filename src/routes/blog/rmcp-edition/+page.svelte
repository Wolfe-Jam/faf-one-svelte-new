<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	// FAF formula: 🏁 Just shipped: <pkg> v<ver> — <Edition> / headline
	const shareText = `🏁 Just shipped: rust-faf-mcp v0.2.0 — The rmcp Edition

253 lines become 20. Three new tools. 91 tests. One binary.`;
	const shareUrl = 'https://faf.one/blog/rmcp-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The rmcp Edition - rust-faf-mcp v0.2.0 | FAF</title>
	<meta name="description" content="Rust MCP server for FAF migrates to rmcp SDK. 253 lines become 20. Three new tools: compress, discover, tokens. 91 tests, 8 tools, one binary." />
	<meta property="og:title" content="The rmcp Edition - rust-faf-mcp v0.2.0" />
	<meta property="og:description" content="253 lines become 20. Three new tools. 91 tests. One binary." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The rmcp Edition
		</div>

		<h1>The rmcp Edition</h1>
		<p class="version-tag">rust-faf-mcp v0.2.0</p>
		<p class="subtitle">253 lines become 20. The SDK does the rest.</p>
		<div class="meta">
			<time datetime="2026-03-07">March 7, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> rust-faf-mcp migrates from hand-rolled JSON-RPC to the <a href="https://crates.io/crates/rmcp">rmcp</a> SDK. <code>main.rs</code> drops from 253 lines to ~20. Three new tools land: <code>faf_compress</code>, <code>faf_discover</code>, <code>faf_tokens</code>. Tests go from 49 to 91 across 5 files.
			</p>
		</section>

		<section>
			<h2>Why rmcp</h2>

			<p>v0.1.0 shipped with a hand-rolled JSON-RPC stdio loop. It worked &mdash; 49 tests proved it. But it meant maintaining transport, schema generation, and protocol compliance manually. The <a href="https://crates.io/crates/rmcp">rmcp</a> crate (v1.1) provides all of that via <code>#[tool_router]</code> and <code>ServerHandler</code>.</p>

			<p>The migration deletes 230+ lines and replaces them with derive macros:</p>

			<pre><code>{`#[tool(tool_box)]
impl FafServer {
    #[tool(description = "Create or enhance a project.faf file")]
    async fn faf_init(
        &self,
        params: Parameters<PathParams>,
    ) -> Result<String, String> {
        let args = params_to_value(&params.0);
        value_to_string_result(tools::faf_init(&args))
    }
}`}</code></pre>

			<p>Parameter structs get <code>schemars::JsonSchema</code> for automatic schema generation. <code>main.rs</code> becomes ~20 lines:</p>

			<pre><code>{`#[tokio::main(flavor = "current_thread")]
async fn main() {
    let server = server::FafServer;
    let transport = stdio();
    server.serve(transport).await.unwrap();
}`}</code></pre>
		</section>

		<section>
			<h2>Three New Tools</h2>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>Tool</th><th>What</th></tr>
					</thead>
					<tbody>
						<tr><td><code>faf_compress</code></td><td>Compress <code>.faf</code> for token-limited contexts &mdash; minimal, standard, or full</td></tr>
						<tr><td><code>faf_discover</code></td><td>Walk up the directory tree to find the nearest <code>project.faf</code></td></tr>
						<tr><td><code>faf_tokens</code></td><td>Estimate token count at each compression level</td></tr>
					</tbody>
				</table>
			</div>

			<p>All three are powered by <a href="https://crates.io/crates/faf-rust-sdk">faf-rust-sdk</a> v1.3 &mdash; the same SDK that drives the Axum middleware. <code>compress()</code>, <code>find_faf_file()</code>, and <code>estimate_tokens()</code> do the real work. The MCP server adapts them to JSON-RPC.</p>
		</section>

		<section>
			<h2>Architecture</h2>

			<pre><code>{`src/
├── main.rs      # ~20 lines — tokio entry, rmcp stdio transport
├── server.rs    # FafServer: #[tool_router], ServerHandler, resources
└── tools.rs     # Business logic — all 8 tools, pure functions`}</code></pre>

			<p>Tools return <code>serde_json::Value</code>. The server adapts them to <code>Result&lt;String, String&gt;</code> for rmcp's <code>IntoCallToolResult</code>. Business logic stays testable. Protocol concerns stay in the server layer.</p>
		</section>

		<section>
			<h2>91 Tests</h2>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>File</th><th>Tests</th><th>Coverage</th></tr>
					</thead>
					<tbody>
						<tr><td><code>mcp_protocol.rs</code></td><td>9</td><td>Init handshake, tools/list, resources, schema validation</td></tr>
						<tr><td><code>tools_functional.rs</code></td><td>25</td><td>All 8 tools &mdash; happy path, error paths, language detection</td></tr>
						<tr><td><code>tier1_security.rs</code></td><td>12</td><td>Path traversal, null bytes, shell injection, oversized input</td></tr>
						<tr><td><code>tier2_engine.rs</code></td><td>35</td><td>Corrupt YAML, sync, pipelines, dual manifests, legacy filenames</td></tr>
						<tr><td><code>tier3_edge_cases.rs</code></td><td>10</td><td>Unicode, CJK, score boundaries, GitHub URL parsing</td></tr>
					</tbody>
				</table>
			</div>

			<p>Every test spawns the compiled binary as a subprocess and communicates via stdin/stdout JSON-RPC. No mocks. The server under test is the server you install.</p>
		</section>

		<section>
			<h2>Install</h2>

			<div class="copy-box" onclick={() => copyText('cargo install rust-faf-mcp', 'cargo')}>
				<code class="copy-code">cargo install rust-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'cargo' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('brew install Wolfe-Jam/faf/rust-faf-mcp', 'brew')}>
				<code class="copy-code">brew install Wolfe-Jam/faf/rust-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'brew' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Configure for Claude Code:</p>

			<div class="copy-box" onclick={() => copyText('claude mcp add faf rust-faf-mcp', 'claude')}>
				<code class="copy-code">claude mcp add faf rust-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'claude' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or any MCP client (WARP, Cursor, Zed, Claude Desktop):</p>

			<pre><code>{`{
  "mcpServers": {
    "faf": {
      "command": "rust-faf-mcp"
    }
  }
}`}</code></pre>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/rust-faf-mcp" class="cta-link">rust-faf-mcp</a>
				</div>
				<div class="cta-box">
					<h3>crates.io</h3>
					<p>Install the latest version.</p>
					<a href="https://crates.io/crates/rust-faf-mcp" class="cta-link">rust-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v0.2.0</strong> &mdash; Released March 7, 2026</li>
				<li><strong>91/91</strong> &mdash; Tests passing (was 49)</li>
				<li><strong>8 tools</strong> &mdash; Was 5</li>
				<li><strong>4.3 MB</strong> &mdash; Stripped binary</li>
				<li><strong>~20 lines</strong> &mdash; <code>main.rs</code> (was 253)</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;</p>
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
		background: var(--faf-page-bg);
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
		background: #FF6B35;
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

	.api-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.api-table table {
		width: 100%;
		border-collapse: collapse;
	}

	.api-table th, .api-table td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	.api-table th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.api-table td code {
		font-size: 0.85em;
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
