<script>
	import { onMount } from 'svelte';

	let isVisible = $state(true);

	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>FAF Links - Complete URL Registry</title>
	<meta name="description" content="All official FAF links - npm packages, GitHub repos, MCP registry, directories, and more." />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">←</a>
</div>

<div class="links-container" class:visible={isVisible}>
	<section class="hero-section">
		<div class="container">
			<h1 class="page-title"><span class="faf-highlight">.faf</span> Links</h1>
			<p class="tagline">Complete URL Registry</p>
			<p class="last-updated">Last Updated: 2026-05-22</p>

			<nav class="quick-nav">
				<a href="#iana" class="nav-pill">Standards</a>
				<a href="#github" class="nav-pill">GitHub</a>
				<a href="#mcp" class="nav-pill">MCP</a>
				<a href="#packages" class="nav-pill">Packages</a>
				<a href="#homebrew" class="nav-pill">Homebrew</a>
				<a href="#skills" class="nav-pill">Skills</a>
				<a href="#grokipedia" class="nav-pill">Grokipedia</a>
				<a href="#radio" class="nav-pill">Radio</a>
				<a href="#wjttc" class="nav-pill">WJTTC</a>
				<a href="#websites" class="nav-pill">Websites</a>
			</nav>
		</div>
	</section>

	<!-- 1. IANA - TOP (Establishes Credibility) -->
	<section class="links-section" id="iana">
		<div class="container">
			<div class="card highlight-card">
				<h2>🏛️ Official Standards & Research</h2>
				<div class="links-grid">
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">IANA Registration</span>
						<span class="link-desc">application/vnd.faf+yaml — Foundational Context Layer</span>
						<span class="link-stat">Oct 30, 2025</span>
					</a>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.fafm+yaml" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">IANA Registration</span>
						<span class="link-desc">application/vnd.fafm+yaml — Voice Memory Layer (VML)</span>
						<span class="link-stat status-live">☑️ May 13, 2026</span>
					</a>
					<a href="https://mailarchive.ietf.org/arch/msg/media-types/4m9epGYthb2NukVyWCFEYLEiLD0/" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">IETF Mail Archive</span>
						<span class="link-desc">Media type registration thread</span>
					</a>
					<a href="https://datatracker.ietf.org/doc/draft-wolfe-faf-format/" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">IETF Internet-Draft</span>
						<span class="link-desc">draft-wolfe-faf-format-00 (application/faf+yaml)</span>
						<span class="link-stat status-live">☑️ ACTIVE</span>
					</a>
					<a href="https://www.iana.org/form/media-types" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">IANA FAFb Submission</span>
						<span class="link-desc">application/vnd.fafb (binary format)</span>
						<span class="link-stat status-pending">Enterprise-Grade</span>
					</a>
					<a href="https://doi.org/10.5281/zenodo.18251362" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">CERN/Zenodo Paper</span>
						<span class="link-desc">Format-Driven AI Context Architecture (.faf)</span>
						<span class="link-stat">DOI: 10.5281/zenodo.18251362</span>
					</a>
					<a href="https://doi.org/10.5281/zenodo.20348942" target="_blank" rel="noopener" class="link-item iana-link">
						<span class="link-name">CERN/Zenodo Paper</span>
						<span class="link-desc">Permanent Memory and Instant Recall</span>
						<span class="link-stat status-live">☑️ DOI: 10.5281/zenodo.20348942</span>
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
						<span class="link-desc">Anthropic-merged MCP server (#2759)</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-mcp</span>
						<span class="link-desc">Universal MCP server</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">gemini-faf-mcp</span>
						<span class="link-desc">Google Gemini MCP server</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/FAF" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">FAF</span>
						<span class="link-desc">Format specification</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/faf-taf-git" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-taf-git</span>
						<span class="link-desc">Git-native receipt printer (TAF)</span>
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
						<span class="link-stat">npm install</span>
					</a>
					<a href="https://npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">claude-faf-mcp</span>
						<span class="link-desc">Anthropic-merged (#2759)</span>
						<span class="link-stat">8,200+ downloads</span>
					</a>
					<a href="https://npmjs.com/package/grok-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">grok-faf-mcp</span>
						<span class="link-desc">MCP server for Grok</span>
						<span class="link-stat">500+ downloads</span>
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

	<!-- POPULAR: Homebrew -->
	<section class="links-section" id="homebrew">
		<div class="container">
			<div class="card">
				<h2>🍺 Homebrew</h2>
				<p class="section-note">brew tap wolfe-jam/faf</p>
				<div class="links-grid">
					<a href="https://github.com/Wolfe-Jam/homebrew-faf" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">homebrew-faf</span>
						<span class="link-desc">Homebrew tap — 8 formulas, auto-updating</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/faf-cli.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-cli</span>
						<span class="link-desc">brew install wolfe-jam/faf/faf-cli</span>
						<span class="link-stat">v4.5.0</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/claude-faf-mcp.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">claude-faf-mcp</span>
						<span class="link-desc">brew install wolfe-jam/faf/claude-faf-mcp</span>
						<span class="link-stat">v5.1.0</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/faf-mcp.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-mcp</span>
						<span class="link-desc">brew install wolfe-jam/faf/faf-mcp</span>
						<span class="link-stat">v1.3.1</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/grok-faf-mcp.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">grok-faf-mcp</span>
						<span class="link-desc">brew install wolfe-jam/faf/grok-faf-mcp</span>
						<span class="link-stat">v1.1.1</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/rust-faf-cli.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">rust-faf-cli</span>
						<span class="link-desc">brew install wolfe-jam/faf/rust-faf-cli</span>
						<span class="link-stat">v1.2.0</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/wjttc.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">wjttc</span>
						<span class="link-desc">brew install wolfe-jam/faf/wjttc</span>
						<span class="link-stat">v1.3.0</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/faf-taf-git.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-taf-git</span>
						<span class="link-desc">brew install wolfe-jam/faf/faf-taf-git</span>
						<span class="link-stat">v2.0.4</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/homebrew-faf/blob/main/Formula/rust-faf-mcp.rb" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">rust-faf-mcp</span>
						<span class="link-desc">brew install wolfe-jam/faf/rust-faf-mcp</span>
						<span class="link-stat">v0.1.0</span>
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
					<a href="https://registry.modelcontextprotocol.io/v0.1/servers/io.github.Wolfe-Jam%2Fgemini-faf-mcp/versions" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">gemini-faf-mcp</span>
						<span class="link-desc">v2.1.2</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://registry.modelcontextprotocol.io/v0.1/servers/io.github.Wolfe-Jam%2Fgrok-faf-mcp/versions" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">grok-faf-mcp</span>
						<span class="link-desc">v1.3.1</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://registry.modelcontextprotocol.io/v0.1/servers/io.github.Wolfe-Jam%2Frust-faf-mcp/versions" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">rust-faf-mcp</span>
						<span class="link-desc">v0.2.2</span>
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
					<a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener" class="link-item featured">
						<span class="link-name">Anthropic/servers #2759</span>
						<span class="link-desc">Official MCP Registry — Anthropic-merged</span>
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
					<a href="https://smithery.ai/server/wolfe-jam/faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">Smithery</span>
						<span class="link-desc">faf-mcp</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://github.com/punkpeye/awesome-mcp-servers/pull/1612" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">punkpeye/awesome-mcp</span>
						<span class="link-desc">PR #1612</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://github.com/rohitg00/awesome-devops-mcp-servers/pull/20" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">rohitg00/awesome-devops</span>
						<span class="link-desc">PR #20</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://glama.ai/mcp/servers" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">Glama</span>
						<span class="link-desc">Auto-syncs from punkpeye</span>
						<span class="link-stat status-live">☑️ LIVE</span>
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
					<a href="https://memory.faf.one" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">memory.faf.one</span>
						<span class="link-desc">Nelly Never Forgets — portable AI memory</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://radiofaf.com" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">radiofaf.com</span>
						<span class="link-desc">Don't follow. Tune in.</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://mcpaas.live" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">mcpaas.live</span>
						<span class="link-desc">MCP as a Service — Cloudflare Edge</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://faf-voice.vercel.app" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">FAF Voice</span>
						<span class="link-desc">Multi-AI voice crews (Grok + Claude + Gemini)</span>
						<span class="link-stat status-live">☑️ LIVE</span>
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
					<a href="/wjttc" class="link-item featured">
						<span class="link-name">WJTTC Product</span>
						<span class="link-desc">Championship-grade testing framework</span>
						<span class="link-stat">🏎️</span>
					</a>
					<a href="https://npmjs.com/package/wjttc" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">wjttc</span>
						<span class="link-desc">npm package</span>
						<span class="link-stat">v1.1.0</span>
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
				</div>
			</div>
		</div>
	</section>

	<!-- FLEX: Skills Directories -->
	<section class="links-section" id="skills">
		<div class="container">
			<div class="card">
				<h2>🎯 Skills Directories</h2>
				<div class="links-grid">
					<a href="https://github.com/anthropics/skills/pull/190" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">anthropics/skills</span>
						<span class="link-desc">4 skills: faf-expert, n8n-builder, n8n-debugger, wjttc-tester</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://github.com/travisvn/awesome-claude-skills/pull/35" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">travisvn/awesome-claude-skills</span>
						<span class="link-desc">4 skills</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://github.com/sickn33/antigravity-awesome-skills" target="_blank" rel="noopener" class="link-item featured">
						<span class="link-name">Antigravity Awesome Skills</span>
						<span class="link-desc">1,344+ skills library — 30k+ GitHub stars</span>
						<span class="link-stat">V9.5.1</span>
					</a>
					<a href="https://github.com/rohitg00/awesome-claude-code-toolkit" target="_blank" rel="noopener" class="link-item featured">
						<span class="link-name">Awesome Claude Code Toolkit</span>
						<span class="link-desc">135 agents, 35 skills (+400k via SkillKit), 150+ plugins</span>
						<span class="link-stat">Most comprehensive</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Grokipedia (Encyclopedia) -->
	<section class="links-section" id="grokipedia">
		<div class="container">
			<div class="card highlight-card">
				<h2>📖 Grokipedia</h2>
				<div class="links-grid">
					<a href="https://grokipedia.com/page/faf-file-format" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">FAF File Format</span>
						<span class="link-desc">Dedicated encyclopedia article</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
					<a href="https://grokipedia.com/page/ai-context" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">AI Context</span>
						<span class="link-desc">FAF featured in Standardized AI Context Formats</span>
						<span class="link-stat status-live">☑️ LIVE</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Radio SDKs -->
	<section class="links-section" id="radio">
		<div class="container">
			<div class="card highlight-card">
				<h2>📻 Radio SDKs (FM Protocol)</h2>
				<div class="links-grid">
					<a href="https://crates.io/crates/faf-radio-rust" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-radio-rust</span>
						<span class="link-desc">Rust radio client (crates.io)</span>
						<span class="link-stat">46/46 tests</span>
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
					<a href="https://pypi.org/project/gemini-faf-mcp/" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">gemini-faf-mcp</span>
						<span class="link-desc">Gemini MCP server (PyPI)</span>
						<span class="link-stat">v1.1.0</span>
					</a>
					<a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">claude-fafm-sdk</span>
						<span class="link-desc">Portable .fafm AI memory (PyPI)</span>
						<span class="link-stat status-live">☑️ v0.1.0</span>
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
					<a href="https://crates.io/crates/faf" target="_blank" rel="noopener" class="link-item featured">
						<span class="link-name">faf</span>
						<span class="link-desc">Meta-crate — cargo add faf</span>
						<span class="link-stat">v0.1.0</span>
					</a>
					<a href="https://crates.io/crates/faf-rust-sdk" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-rust-sdk</span>
						<span class="link-desc">Parse, validate, compile .faf files</span>
						<span class="link-stat">v1.2.0 · 108 downloads</span>
					</a>
					<a href="https://crates.io/crates/faf-radio-rust" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">faf-radio-rust</span>
						<span class="link-desc">Radio Protocol client for MCPaaS</span>
						<span class="link-stat">v0.1.0</span>
					</a>
					<a href="https://crates.io/crates/rust-faf-mcp" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">rust-faf-mcp</span>
						<span class="link-desc">Rust MCP server for .faf</span>
						<span class="link-stat">v0.1.0 · 10 downloads</span>
					</a>
					<a href="https://github.com/Wolfe-Jam/rust-faf-cli" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">rust-faf-cli</span>
						<span class="link-desc">Pre-built binaries (Homebrew)</span>
						<span class="link-stat">v1.2.0</span>
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
					<a href="https://github.com/Wolfe-Jam/bun-sticky-zig" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">bun-sticky-zig</span>
						<span class="link-desc">Zig-native FAF CLI</span>
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
						<span class="link-desc">Google-approved — Chrome Web Store</span>
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

	<!-- Author -->
	<section class="links-section" id="author">
		<div class="container">
			<div class="card">
				<h2>👤 Author</h2>
				<div class="links-grid">
					<a href="https://wolfejam.dev" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">wolfejam.dev</span>
						<span class="link-desc">Developer portfolio</span>
					</a>
					<a href="https://wolfejames.com" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">wolfejames.com</span>
						<span class="link-desc">Personal site</span>
					</a>
					<a href="https://orcid.org/0009-0007-0801-3841" target="_blank" rel="noopener" class="link-item">
						<span class="link-name">ORCID</span>
						<span class="link-desc">0009-0007-0801-3841</span>
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
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
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
		background: var(--faf-cream);
		min-height: 100vh;
	}

	.links-container.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-section {
		text-align: center;
		padding: 3rem 2rem 2rem;
		background: var(--faf-cream);
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
	}

	.faf-highlight {
		color: #FF6B35;
	}

	.tagline {
		font-size: 1.2rem;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.last-updated {
		font-size: 0.9rem;
		color: var(--faf-dark);
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
		background: var(--faf-white);
		border: 1px solid var(--faf-light-gray);
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 1rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.highlight-card {
		background: var(--faf-gray-light);
		border-color: rgba(255, 107, 53, 0.4);
		box-shadow: 0 4px 20px rgba(255, 107, 53, 0.1);
	}

	.card h2 {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.section-note {
		font-size: 0.85rem;
		color: var(--faf-dark);
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
		background: var(--faf-gray-light);
		border: 1px solid var(--faf-light-gray);
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.link-item:hover {
		background: var(--faf-gray-light);
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
		color: var(--faf-black);
		font-size: 0.9rem;
	}

	.link-stat {
		font-size: 0.8rem;
		color: var(--faf-dark);
		white-space: nowrap;
	}

	.status-live {
		color: var(--faf-black);
		font-weight: 600;
	}

	.status-pending {
		color: var(--faf-black);
		font-weight: 600;
	}

	.iana-link {
		background: var(--faf-gray-light);
		border-color: var(--faf-light-gray) !important;
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
