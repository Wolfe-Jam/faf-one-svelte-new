<script>
	import { onMount } from 'svelte';

	let isVisible = $state(false);

	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>FAF Links - Complete URL Registry</title>
	<meta name="description" content="All official FAF links - npm packages, GitHub repos, MCP registry, directories, and more." />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="links-container" class:visible={isVisible}>
	<section class="hero-section">
		<div class="container">
			<h1 class="page-title"><span class="faf-highlight">.faf</span> Links</h1>
			<p class="tagline">Complete URL Registry</p>
			<p class="last-updated">Last Updated: 2025-12-31</p>

			<nav class="quick-nav">
				<a href="#iana" class="nav-pill">IANA</a>
				<a href="#github" class="nav-pill">GitHub</a>
				<a href="#mcp" class="nav-pill">MCP</a>
				<a href="#packages" class="nav-pill">Packages</a>
				<a href="#wjttc" class="nav-pill">WJTTC</a>
				<a href="#websites" class="nav-pill">Websites</a>
			</nav>
		</div>
	</section>

	<!-- 1. IANA - TOP (Establishes Credibility) -->
	<section class="links-section" id="iana">
		<div class="container">
			<div class="card highlight-card">
				<h2>🏛️ Official Standards</h2>
				<div class="links-grid">
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">IANA Registration</span>
						<span class="link-desc">application/vnd.faf+yaml</span>
						<span class="link-stat">Oct 30, 2025</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- POPULAR: GitHub Repos -->
	<section class="links-section" id="github">
		<div class="container">
			<div class="card">
				<h2>🐙 GitHub Repos</h2>
				<div class="links-grid">
					<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-cli</span>
						<span class="link-desc">CLI tool for .faf management</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">claude-faf-mcp</span>
						<span class="link-desc">Claude-optimized MCP server</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-mcp</span>
						<span class="link-desc">Universal MCP server</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/FAF" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">FAF</span>
						<span class="link-desc">Format specification</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- POPULAR: NPM Packages -->
	<section class="links-section" id="packages">
		<div class="container">
			<div class="card">
				<h2>📦 NPM Packages</h2>
				<div class="links-grid">
					<a href="https://npmjs.com/package/faf-cli" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-cli</span>
						<span class="link-desc">CLI tool for .faf management</span>
						<span class="link-stat">18k+ downloads</span>
					</a>
					<a href="https://npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">claude-faf-mcp</span>
						<span class="link-desc">MCP server for Claude</span>
						<span class="link-stat">8,200+ downloads</span>
					</a>
					<a href="https://npmjs.com/package/faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-mcp</span>
						<span class="link-desc">Universal MCP server</span>
						<span class="link-stat">1,600+ downloads</span>
					</a>
					<a href="https://npmjs.com/package/faf-wasm" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-wasm</span>
						<span class="link-desc">WASM SDK for browser scoring</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- POPULAR: MCP Registry (Official) -->
	<section class="links-section" id="mcp">
		<div class="container">
			<div class="card">
				<h2>🔌 MCP Registry (Official)</h2>
				<p class="section-note">Published 2025-12-31</p>
				<div class="links-grid">
					<a href="https://registry.modelcontextprotocol.io/v0.1/servers/io.github.Wolfe-Jam%2Fclaude-faf-mcp/versions" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">claude-faf-mcp</span>
						<span class="link-desc">v3.3.7</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://registry.modelcontextprotocol.io/v0.1/servers/io.github.Wolfe-Jam%2Ffaf-mcp/versions" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-mcp</span>
						<span class="link-desc">v1.2.1</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- POPULAR: MCP Directories -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>📋 MCP Directories</h2>
				<div class="links-grid">
					<a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">Anthropic/servers</span>
						<span class="link-desc">PR #2759</span>
						<span class="link-stat status-live">☑️ MERGED</span>
					</a>
					<a href="https://mcpservers.org/servers/wolfe-jam/claude-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">mcpservers.org</span>
						<span class="link-desc">claude-faf-mcp</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://pulsemcp.com" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">PulseMCP</span>
						<span class="link-desc">faf-mcp</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://smithery.ai/server/wolfe-jam/claude-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">Smithery</span>
						<span class="link-desc">claude-faf-mcp</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://github.com/punkpeye/awesome-mcp-servers/pull/1612" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">punkpeye/awesome-mcp</span>
						<span class="link-desc">PR #1612</span>
						<span class="link-stat status-pending">⏳ PENDING</span>
					</a>
					<a href="https://github.com/appcypher/awesome-mcp-servers/pull/208" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">appcypher/awesome-mcp</span>
						<span class="link-desc">PR #208</span>
						<span class="link-stat status-pending">⏳ PENDING</span>
					</a>
					<a href="https://github.com/rohitg00/awesome-devops-mcp-servers/pull/20" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">rohitg00/awesome-devops</span>
						<span class="link-desc">PR #20</span>
						<span class="link-stat status-pending">⏳ PENDING</span>
					</a>
					<a href="https://glama.ai/mcp/servers" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">Glama</span>
						<span class="link-desc">Auto-syncs from punkpeye</span>
						<span class="link-stat status-pending">⏳ PENDING</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- POPULAR: Websites -->
	<section class="links-section" id="websites">
		<div class="container">
			<div class="card">
				<h2>🌐 Websites</h2>
				<div class="links-grid">
					<a href="https://faf.one" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf.one</span>
						<span class="link-desc">Official FAF website</span>
					</a>
					<a href="https://fafdev.tools" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">fafdev.tools</span>
						<span class="link-desc">FAF file generator</span>
					</a>
					<a href="https://foundation.faf.one" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">foundation.faf.one</span>
						<span class="link-desc">FAF Foundation</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- FLEX: WJTTC -->
	<section class="links-section" id="wjttc">
		<div class="container">
			<div class="card highlight-card">
				<h2>🍊 WJTTC - MCP Testing Certification</h2>
				<div class="links-grid">
					<a href="https://npmjs.com/package/wjttc" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">wjttc</span>
						<span class="link-desc">npm package</span>
						<span class="link-stat">v1.1.0</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/wjttc" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">wjttc</span>
						<span class="link-desc">GitHub repo + Action</span>
					</a>
					<a href="https://registry.modelcontextprotocol.io/v0.1/servers/io.github.Wolfe-Jam%2FWJTTC/versions" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">WJTTC</span>
						<span class="link-desc">MCP Registry</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- FLEX: xAI / Grok -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>🚀 xAI / Grok</h2>
				<div class="links-grid">
					<a href="https://github.com/Wolfe-Jam/grok-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">grok-faf-mcp</span>
						<span class="link-desc">First MCP server for Grok</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/xai-cookbook" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">xai-cookbook</span>
						<span class="link-desc">xAI Grok API examples</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/xai-faf-zig" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">xai-faf-zig</span>
						<span class="link-desc">Zig-native FAF for Grok</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/xai-wasm-sdk" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">xai-wasm-sdk</span>
						<span class="link-desc">Rust WASM for browser FAF</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/xai-mcp-server" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">xai-mcp-server</span>
						<span class="link-desc">Rust MCP Server for FAF</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- FLEX: Skills Directories -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>🎯 Skills Directories</h2>
				<div class="links-grid">
					<a href="https://github.com/anthropics/skills/pull/190" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">anthropics/skills</span>
						<span class="link-desc">4 skills: faf-expert, n8n-builder, n8n-debugger, wjttc-tester</span>
						<span class="link-stat status-pending">⏳ PR #190</span>
					</a>
					<a href="https://github.com/travisvn/awesome-claude-skills/pull/35" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">travisvn/awesome-claude-skills</span>
						<span class="link-desc">4 skills</span>
						<span class="link-stat status-pending">⏳ PR #35</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- SDK: Python -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>🐍 Python</h2>
				<div class="links-grid">
					<a href="https://pypi.org/project/faf-python-sdk/" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-python-sdk</span>
						<span class="link-desc">Python SDK (PyPI)</span>
						<span class="link-stat">v1.0.2</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/faf-python-sdk" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-python-sdk</span>
						<span class="link-desc">GitHub repo</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- SDK: Rust -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>🦀 Rust</h2>
				<div class="links-grid">
					<a href="https://crates.io/crates/faf-rust-sdk" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-rust-sdk</span>
						<span class="link-desc">Rust SDK (crates.io)</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/xai-faf-rust" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">xai-faf-rust</span>
						<span class="link-desc">xAI Rust implementation</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- SDK: Zig -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>⚡ Zig</h2>
				<div class="links-grid">
					<a href="https://github.com/Wolfe-Jam/faf-zig" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-zig</span>
						<span class="link-desc">High-performance FAF CLI in Zig</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/bun-sticky-zig" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">bun-sticky-zig</span>
						<span class="link-desc">Zig-native FAF CLI</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/bun-sticky-zig-plus" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">bun-sticky-zig-plus</span>
						<span class="link-desc">Premium Zig-native FAF CLI</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- SDK: Bun -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>🥟 Bun</h2>
				<div class="links-grid">
					<a href="https://npmjs.com/package/bun-sticky-faf" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">bun-sticky-faf</span>
						<span class="link-desc">Fastest Bun FAF CLI (npm)</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/bun-sticky-faf" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">bun-sticky-faf</span>
						<span class="link-desc">GitHub repo</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- SDK: Browser Extensions -->
	<section class="links-section">
		<div class="container">
			<div class="card">
				<h2>🌐 Browser Extensions</h2>
				<div class="links-grid">
					<a href="https://chrome.google.com/webstore/detail/faf" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">Chrome Extension</span>
						<span class="link-desc">FAF for Chrome Web Store</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/faf-chrome-extension" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-chrome-extension</span>
						<span class="link-desc">GitHub repo</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- BOTTOM: 8-Eternal-Cs (Dedication) -->
	<section class="links-section" id="dedication">
		<div class="container">
			<div class="card highlight-card">
				<h2>∞ 8-Eternal-Cs</h2>
				<div class="links-grid">
					<a href="https://fafdev.tools/8-eternal-cs" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">8-eternal-cs</span>
						<span class="link-desc">FAF Zig-WASM Template</span>
					</a>
					<a href="https://fafdev.tools/8cs" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">8Cs Paper</span>
						<span class="link-desc">The 8 Cs methodology</span>
					</a>
					<a href="https://88-eternal-dad.vercel.app/" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">88-eternal-dad</span>
						<span class="link-desc">Memorial app</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	:global(body) {
		background: #0a0a0a;
	}

	.back-nav {
		padding: 1rem 2rem;
		background: #1a1a1a;
		border-bottom: 1px solid #333;
	}

	.back-button {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.2s;
	}

	.back-button:hover {
		color: #ff8c5a;
		text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
	}

	.links-container {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s ease;
		background: #0a0a0a;
		min-height: 100vh;
	}

	.links-container.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-section {
		text-align: center;
		padding: 3rem 2rem 2rem;
		background: linear-gradient(180deg, rgba(255, 107, 53, 0.15) 0%, #0a0a0a 100%);
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		color: white;
	}

	.faf-highlight {
		color: #FF6B35;
	}

	.tagline {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 0.5rem;
	}

	.last-updated {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.5);
	}

	.quick-nav {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
		flex-wrap: wrap;
	}

	.nav-pill {
		padding: 0.5rem 1rem;
		background: rgba(255, 107, 53, 0.1);
		border: 1px solid rgba(255, 107, 53, 0.3);
		border-radius: 20px;
		color: #FF6B35;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 600;
		transition: all 0.2s;
	}

	.nav-pill:hover {
		background: rgba(255, 107, 53, 0.2);
		border-color: #FF6B35;
		box-shadow: 0 0 12px rgba(255, 107, 53, 0.3);
		transform: translateY(-2px);
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.links-section {
		padding: 1rem 0;
	}

	.card {
		background: #111;
		border: 1px solid #222;
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 1rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	}

	.highlight-card {
		background: linear-gradient(135deg, #1a1208 0%, #111 100%);
		border-color: rgba(255, 107, 53, 0.4);
		box-shadow: 0 4px 20px rgba(255, 107, 53, 0.1);
	}

	.card h2 {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: white;
	}

	.section-note {
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 1rem;
	}

	.links-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.link-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		background: #0d0d0d;
		border: 1px solid #1a1a1a;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.link-item:hover {
		background: #151510;
		border-color: #FF6B35;
		transform: translateX(4px);
		box-shadow: 0 0 15px rgba(255, 107, 53, 0.2);
	}

	.link-name {
		font-weight: 600;
		color: #FF6B35;
		min-width: 180px;
	}

	.link-desc {
		flex: 1;
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.9rem;
	}

	.link-stat {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.5);
		white-space: nowrap;
	}

	.status-live {
		color: #4ade80;
		text-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
	}

	.status-pending {
		color: #fbbf24;
		text-shadow: 0 0 8px rgba(251, 191, 36, 0.4);
	}

	.iana-link {
		background: #0f0d08;
		border-color: #332200 !important;
	}

	@media (max-width: 768px) {
		.link-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}

		.link-name {
			min-width: auto;
		}

		.page-title {
			font-size: 2rem;
		}
	}
</style>
