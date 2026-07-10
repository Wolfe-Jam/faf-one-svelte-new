<script>
	import FafLogo from '$lib/components/FafLogo.svelte';
	import ScrollRevealText from '$lib/components/ScrollRevealText.svelte';
	import PageActions from '$lib/components/PageActions.svelte';

	let activeTab = 'cursor';
</script>

<svelte:head>
	<title>MCP - Model Context Protocol + .faf | Universal AI Context</title>
	<meta name="description" content="Official MCP documentation for the .faf format — persistent AI context for Claude, Grok, Gemini, Cursor, Windsurf, Cline, VS Code. IANA-registered, in Anthropic's MCP Registry (#2759)." />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">←</a>
</div>

<div class="mcp-page">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="container">
			<div class="logo-wrapper">
				<FafLogo size="small" color="black" />
			</div>
			<h1 class="page-title">Model Context Protocol + .faf</h1>
			<p class="subtitle">We are the 'C' in MCP • Universal AI Context</p>
			<p class="hero-desc">The official MCP documentation for .faf — persistent project context across Claude, Grok, Gemini, Cursor, Windsurf, Cline, VS Code, and every MCP-compatible platform.</p>
			<div class="hero-receipts">
				<a class="receipt-chip" href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener noreferrer">
					<span class="receipt-key">IANA</span>
					<span class="receipt-val">application/vnd.faf+yaml</span>
				</a>
				<a class="receipt-chip" href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener noreferrer">
					<span class="receipt-key">MCP Registry</span>
					<span class="receipt-val">merged #2759</span>
				</a>
			</div>
		</div>
	</section>

	<div class="content-section">
		<div class="container">

			<!-- What is MCP + .faf? -->
			<ScrollRevealText threshold={0.3}>
				<div class="intro-block">
					<h2>What is MCP + .faf?</h2>
					<p>The Model Context Protocol (MCP) is an open protocol that connects AI assistants to external context. The <strong>.faf format</strong> is the IANA-registered context format (<code>application/vnd.faf+yaml</code>) that makes MCP work universally across every model and tool.</p>
					<p><code>.faf</code> owns the <strong>write</strong> side — one structured source, IANA-registered. The <strong>Context-Ingestion contract</strong> owns the <strong>read</strong> side — how any agent projects that context live. The <a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener noreferrer">faf-cli</a> is the Claude-first on-ramp that authors it.</p>
				</div>
			</ScrollRevealText>

			<!-- MCP Breakdown Table -->
			<ScrollRevealText threshold={0.3} delay={100}>
				<div class="mcp-breakdown">
					<h3>The Trinity: Model → Context → Protocol</h3>
					<div class="breakdown-table">
						<div class="breakdown-header">
							<div class="breakdown-col">Model / Tool</div>
							<div class="breakdown-col highlight">Context</div>
							<div class="breakdown-col">Protocol</div>
						</div>

						<div class="breakdown-group">Models</div>
						<div class="breakdown-row">
							<div class="breakdown-col">Claude</div>
							<div class="breakdown-col highlight">.faf</div>
							<div class="breakdown-col">MCP</div>
						</div>
						<div class="breakdown-row">
							<div class="breakdown-col">Grok</div>
							<div class="breakdown-col highlight">.faf</div>
							<div class="breakdown-col">MCP</div>
						</div>
						<div class="breakdown-row">
							<div class="breakdown-col">Gemini</div>
							<div class="breakdown-col highlight">.faf</div>
							<div class="breakdown-col">MCP</div>
						</div>

						<div class="breakdown-group">Tools &amp; IDEs</div>
						<div class="breakdown-row">
							<div class="breakdown-col">Cursor</div>
							<div class="breakdown-col highlight">.faf</div>
							<div class="breakdown-col">MCP</div>
						</div>
						<div class="breakdown-row">
							<div class="breakdown-col">Windsurf</div>
							<div class="breakdown-col highlight">.faf</div>
							<div class="breakdown-col">MCP</div>
						</div>
						<div class="breakdown-row">
							<div class="breakdown-col">Cline</div>
							<div class="breakdown-col highlight">.faf</div>
							<div class="breakdown-col">MCP</div>
						</div>
						<div class="breakdown-row">
							<div class="breakdown-col">VS Code</div>
							<div class="breakdown-col highlight">.faf</div>
							<div class="breakdown-col">MCP</div>
						</div>

						<div class="breakdown-row final-row">
							<div class="breakdown-col">Any LLM</div>
							<div class="breakdown-col highlight">IANA Format</div>
							<div class="breakdown-col">Open Protocol</div>
						</div>
					</div>
					<p class="breakdown-caption">.faf is the <strong>universal Context</strong> layer for any Model using the MCP Protocol</p>

					<div class="prime-messaging">
						<p><strong>We are the 'C' in MCP.</strong></p>
						<p>IANA .FAF Format is AI context foundation.</p>
						<p>Format foundation is non-negotiable.</p>
						<p class="facts">Formats = facts.</p>
					</div>
				</div>
			</ScrollRevealText>

			<!-- MCP Packages Section -->
			<ScrollRevealText threshold={0.3} delay={200}>
				<div class="packages-section">
					<h2>The MCP Family</h2>
					<p class="packages-intro">One IANA-registered format. A server for every model — plus the CLI that authors it.</p>

					<!-- claude-faf-mcp — Claude-first, carries the #2759 receipt -->
					<div class="package-card featured">
						<div class="package-header">
							<span class="package-icon">📦</span>
							<h3>claude-faf-mcp <span class="badge dedicated">Claude</span></h3>
						</div>
						<p class="package-desc">The Claude-first MCP server — persistent <code>.faf</code> context for Claude Desktop and Claude Code.</p>
						<ul class="package-features">
							<li>☑️ Claude-first — Desktop + Claude Code</li>
							<li>☑️ In Anthropic's MCP Registry — <a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener noreferrer">merged #2759</a></li>
							<li>☑️ bi-sync <code>.faf</code> ↔ <code>CLAUDE.md</code></li>
							<li>☑️ IANA-registered — <code>application/vnd.faf+yaml</code></li>
						</ul>
						<div class="package-install">
							<code>npx claude-faf-mcp</code>
						</div>
						<div class="package-links">
							<a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener noreferrer">npm →</a>
							<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener noreferrer">GitHub →</a>
						</div>
					</div>

					<!-- faf-mcp — core / universal -->
					<div class="package-card">
						<div class="package-header">
							<span class="package-icon">📦</span>
							<h3>faf-mcp <span class="badge">Universal</span></h3>
						</div>
						<p class="package-desc">The core, universal MCP server for Cursor, Windsurf, Cline, VS Code, and any MCP-compatible client.</p>
						<ul class="package-features">
							<li>☑️ Core / universal MCP server</li>
							<li>☑️ Cursor, Windsurf, Cline, VS Code — any MCP client</li>
							<li>☑️ bi-sync <code>.faf</code> ↔ your context files</li>
							<li>☑️ In the official MCP Registry</li>
						</ul>
						<div class="package-install">
							<code>npx faf-mcp</code>
						</div>
						<div class="package-links">
							<a href="https://www.npmjs.com/package/faf-mcp" target="_blank" rel="noopener noreferrer">npm →</a>
							<a href="https://github.com/Wolfe-Jam/faf-mcp" target="_blank" rel="noopener noreferrer">GitHub →</a>
						</div>
					</div>

					<!-- grok-faf-mcp — Grok -->
					<div class="package-card">
						<div class="package-header">
							<span class="package-icon">📦</span>
							<h3>grok-faf-mcp <span class="badge">Grok</span></h3>
						</div>
						<p class="package-desc">The MCP server for xAI Grok — the same <code>.faf</code> context, read by Grok.</p>
						<ul class="package-features">
							<li>☑️ MCP server for xAI Grok</li>
							<li>☑️ Same IANA <code>.faf</code> format</li>
							<li>☑️ In the official MCP Registry</li>
							<li>☑️ Cross-vendor context, one file</li>
						</ul>
						<div class="package-install">
							<code>npx grok-faf-mcp</code>
						</div>
						<div class="package-links">
							<a href="https://www.npmjs.com/package/grok-faf-mcp" target="_blank" rel="noopener noreferrer">npm →</a>
							<a href="https://github.com/Wolfe-Jam/grok-faf-mcp" target="_blank" rel="noopener noreferrer">GitHub →</a>
						</div>
					</div>

					<!-- gemini-faf-mcp — Gemini (Python / PyPI) -->
					<div class="package-card">
						<div class="package-header">
							<span class="package-icon">📦</span>
							<h3>gemini-faf-mcp <span class="badge">Gemini</span></h3>
						</div>
						<p class="package-desc">The MCP server for Google Gemini — Python, published to PyPI. Reference implementation of the Zenodo Context paper.</p>
						<ul class="package-features">
							<li>☑️ MCP server for Google Gemini</li>
							<li>☑️ Python — <code>uvx gemini-faf-mcp</code> (PyPI)</li>
							<li>☑️ Reference implementation of the Zenodo Context paper</li>
							<li>☑️ Same IANA <code>.faf</code> format</li>
						</ul>
						<div class="package-install">
							<code>uvx gemini-faf-mcp</code>
						</div>
						<div class="package-links">
							<a href="https://pypi.org/project/gemini-faf-mcp/" target="_blank" rel="noopener noreferrer">PyPI →</a>
							<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp" target="_blank" rel="noopener noreferrer">GitHub →</a>
						</div>
					</div>

					<!-- WJTTC — testing -->
					<div class="package-card">
						<div class="package-header">
							<span class="package-icon">📦</span>
							<h3>WJTTC <span class="badge">Testing</span></h3>
						</div>
						<p class="package-desc">Championship-grade MCP testing. If a server passes WJTTC, it works.</p>
						<ul class="package-features">
							<li>☑️ Championship-grade MCP testing</li>
							<li>☑️ GitHub Action included</li>
							<li>☑️ Verifies MCP servers actually work</li>
							<li>☑️ In the official MCP Registry</li>
						</ul>
						<div class="package-install">
							<code>npx wjttc</code>
						</div>
						<div class="package-links">
							<a href="https://www.npmjs.com/package/wjttc" target="_blank" rel="noopener noreferrer">npm →</a>
							<a href="https://github.com/Wolfe-Jam/wjttc" target="_blank" rel="noopener noreferrer">GitHub →</a>
						</div>
					</div>

					<!-- faf-cli — the CLI on-ramp -->
					<div class="package-card">
						<div class="package-header">
							<span class="package-icon">📦</span>
							<h3>faf-cli <span class="badge">CLI</span></h3>
						</div>
						<p class="package-desc">The CLI on-ramp — author, score, and sync your <code>.faf</code> from any terminal. Claude-first, works cross-vendor.</p>
						<ul class="package-features">
							<li>☑️ The on-ramp — <code>faf init</code>, <code>faf score</code>, <code>faf sync</code></li>
							<li>☑️ Claude-first, works cross-vendor</li>
							<li>☑️ bi-sync <code>.faf</code> ↔ <code>CLAUDE.md</code></li>
							<li>☑️ Free forever · open source</li>
						</ul>
						<div class="package-install">
							<code>npm install -g faf-cli</code>
						</div>
						<div class="package-install">
							<code>brew install wolfe-jam/faf/faf-cli</code>
						</div>
						<div class="package-links">
							<a href="https://www.npmjs.com/package/faf-cli" target="_blank" rel="noopener noreferrer">npm →</a>
							<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener noreferrer">GitHub →</a>
						</div>
					</div>

					<p class="family-note">Also in the family: <a href="https://github.com/Wolfe-Jam/rust-faf-mcp" target="_blank" rel="noopener noreferrer">rust-faf-mcp</a> (Rust · crates.io) — <strong>six FAF servers</strong> total in the official MCP Registry.</p>

					<div class="tool-count-note">
						<p><strong>Tools:</strong> each server ships a core toolset (~12–14 tools); the family spans ~29–33 tools in total. Exact counts live in each server's README — that's the source of truth.</p>
					</div>
				</div>
			</ScrollRevealText>

			<!-- Platform Installation Tabs -->
			<ScrollRevealText threshold={0.3} delay={300}>
				<div class="installation-section">
					<h2>Installation by Platform</h2>

					<div class="tabs">
						<button class="tab" class:active={activeTab === 'cursor'} onclick={() => activeTab = 'cursor'}>Cursor</button>
						<button class="tab" class:active={activeTab === 'windsurf'} onclick={() => activeTab = 'windsurf'}>Windsurf</button>
						<button class="tab" class:active={activeTab === 'cline'} onclick={() => activeTab = 'cline'}>Cline</button>
						<button class="tab" class:active={activeTab === 'vscode'} onclick={() => activeTab = 'vscode'}>VS Code</button>
						<button class="tab" class:active={activeTab === 'claude'} onclick={() => activeTab = 'claude'}>Claude</button>
					</div>

					<div class="tab-content">
						{#if activeTab === 'cursor'}
							<div class="platform-guide">
								<h3>Cursor IDE Setup</h3>
								<div class="step">
									<div class="step-number">1</div>
									<div class="step-content">
										<h4>Install faf-mcp</h4>
										<div class="code-block"><code>npm install -g faf-mcp</code></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">2</div>
									<div class="step-content">
										<h4>Add to ~/.cursor/mcp.json</h4>
										<div class="code-block"><pre>{`{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "faf-mcp"]
    }
  }
}`}</pre></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">3</div>
									<div class="step-content">
										<h4>Restart Cursor</h4>
										<p>Then start prompting: <strong>"Use FAF to initialize your project"</strong></p>
									</div>
								</div>
								<a href="https://docs.cursor.com/context/model-context-protocol" target="_blank" rel="noopener noreferrer" class="external-link">Cursor MCP Documentation →</a>
							</div>
						{/if}

						{#if activeTab === 'windsurf'}
							<div class="platform-guide">
								<h3>Windsurf Editor Setup</h3>
								<div class="step">
									<div class="step-number">1</div>
									<div class="step-content">
										<h4>Install faf-mcp</h4>
										<div class="code-block"><code>npm install -g faf-mcp</code></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">2</div>
									<div class="step-content">
										<h4>Add to ~/.codeium/windsurf/mcp_config.json</h4>
										<div class="code-block"><pre>{`{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "faf-mcp"]
    }
  }
}`}</pre></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">3</div>
									<div class="step-content">
										<h4>Restart Windsurf</h4>
										<p>Then start prompting: <strong>"Use FAF to initialize your project"</strong></p>
									</div>
								</div>
								<a href="https://docs.windsurf.com/windsurf/cascade/mcp" target="_blank" rel="noopener noreferrer" class="external-link">Windsurf Cascade MCP Docs →</a>
							</div>
						{/if}

						{#if activeTab === 'cline'}
							<div class="platform-guide">
								<h3>Cline Setup</h3>
								<div class="step">
									<div class="step-number">1</div>
									<div class="step-content">
										<h4>Install faf-mcp</h4>
										<div class="code-block"><code>npm install -g faf-mcp</code></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">2</div>
									<div class="step-content">
										<h4>Add via Cline's MCP settings</h4>
										<p>Or manually add to Cline config file</p>
									</div>
								</div>
								<div class="step">
									<div class="step-number">3</div>
									<div class="step-content">
										<h4>Restart Cline</h4>
										<p>Then start prompting: <strong>"Use FAF to initialize your project"</strong></p>
									</div>
								</div>
							</div>
						{/if}

						{#if activeTab === 'vscode'}
							<div class="platform-guide">
								<h3>VS Code Setup</h3>
								<div class="step">
									<div class="step-number">1</div>
									<div class="step-content">
										<h4>Install faf-mcp</h4>
										<div class="code-block"><code>npm install -g faf-mcp</code></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">2</div>
									<div class="step-content">
										<h4>Install MCP extension for VS Code</h4>
										<p>Search for MCP extension in VS Code marketplace</p>
									</div>
								</div>
								<div class="step">
									<div class="step-number">3</div>
									<div class="step-content">
										<h4>Add faf-mcp server via extension settings</h4>
										<p>Then start prompting: <strong>"Use FAF to initialize your project"</strong></p>
									</div>
								</div>
							</div>
						{/if}

						{#if activeTab === 'claude'}
							<div class="platform-guide">
								<h3>Claude Desktop Setup</h3>
								<p class="platform-note">For Claude Desktop, we recommend using the dedicated <strong>claude-faf-mcp</strong> package for optimized integration.</p>
								<div class="step">
									<div class="step-number">1</div>
									<div class="step-content">
										<h4>Install claude-faf-mcp</h4>
										<div class="code-block"><code>npm install -g claude-faf-mcp</code></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">2</div>
									<div class="step-content">
										<h4>Add to claude_desktop_config.json</h4>
										<div class="code-block"><pre>{`{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "claude-faf-mcp"]
    }
  }
}`}</pre></div>
									</div>
								</div>
								<div class="step">
									<div class="step-number">3</div>
									<div class="step-content">
										<h4>Restart Claude Desktop</h4>
										<p>Then start prompting: <strong>"Use FAF to initialize your project"</strong></p>
									</div>
								</div>
								<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener noreferrer" class="external-link">Full claude-faf-mcp Documentation →</a>
							</div>
						{/if}
					</div>
				</div>
			</ScrollRevealText>

			<!-- The "Use FAF" Pattern -->
			<ScrollRevealText threshold={0.3} delay={400}>
				<div class="pattern-section">
					<h2>The "Use FAF" Pattern</h2>
					<p class="pattern-intro">Universal onboarding across all platforms - just start your prompts with <strong>"Use FAF"</strong></p>

					<div class="pattern-comparison">
						<div class="pattern-old">
							<h4>❌ The old way</h4>
							<p>"Can you help me set up AI context for my React TypeScript project with Tailwind CSS?"</p>
							<span class="time-badge">20 minutes of questions</span>
						</div>
						<div class="pattern-new">
							<h4>✅ The FAF way</h4>
							<p>"Use FAF to initialize your project"</p>
							<span class="time-badge success">30 seconds</span>
						</div>
					</div>

					<div class="pattern-examples">
						<h4>Example commands:</h4>
						<ul>
							<li><code>Use FAF to initialize your project</code></li>
							<li><code>Use FAF to sync my project.faf to all platforms</code></li>
							<li><code>Use FAF to score my AI-readiness</code></li>
							<li><code>Use FAF to enhance my context</code></li>
						</ul>
					</div>
				</div>
			</ScrollRevealText>

			<!-- CTA Section -->
			<ScrollRevealText threshold={0.3} delay={600}>
				<div class="cta-section">
					<h2>Ready to Get Started?</h2>
					<div class="cta-buttons">
						<a href="https://www.npmjs.com/package/faf-mcp" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
							Install faf-mcp →
						</a>
						<a href="https://github.com/Wolfe-Jam/faf-mcp" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
							⭐ GitHub
						</a>
					</div>
					<PageActions
						headline="One context format, every MCP tool."
						point1="Cursor, Windsurf, Cline, VS Code — all read the same .faf."
						point2="IANA-registered. No per-tool reinvention."
						url="https://faf.one/mcp"
						hashtags="AI,MCP,DevTools"
					/>
				</div>
			</ScrollRevealText>

		</div>
	</div>
</div>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
		transform: translateX(-2px);
	}

	.mcp-page {
		min-height: 100vh;
		background: var(--faf-cream);
	}

	.hero-section {
		padding: 4rem 0 3rem;
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(0, 243, 255, 0.05) 100%);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.logo-wrapper {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.page-title {
		font-size: 3rem;
		font-weight: 900;
		text-align: center;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.subtitle {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-orange);
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.hero-desc {
		text-align: center;
		font-size: 1.125rem;
		color: var(--faf-gray-dark);
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.hero-receipts {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
	}

	.receipt-chip {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		background: white;
		border: 1px solid var(--faf-light-gray);
		border-left: 3px solid var(--faf-orange);
		border-radius: 0 8px 8px 0;
		padding: 0.6rem 1rem;
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.receipt-chip:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.receipt-key {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--faf-gray-dark);
	}

	.receipt-val {
		font-family: 'Roboto Mono', monospace;
		font-size: 1rem;
		font-weight: 700;
		color: var(--faf-orange);
	}

	.content-section {
		padding: 4rem 0;
	}

	.intro-block {
		max-width: 800px;
		margin: 0 auto 4rem;
		text-align: center;
	}

	.intro-block h2 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		color: var(--faf-black);
	}

	.intro-block p {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--faf-gray-dark);
	}

	.intro-block code {
		background: rgba(255, 107, 53, 0.1);
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-size: 1.1rem;
		color: var(--faf-orange);
		font-weight: 600;
	}

	.mcp-breakdown {
		max-width: 700px;
		margin: 4rem auto;
		text-align: center;
	}

	.mcp-breakdown h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--faf-black);
	}

	.breakdown-table {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
		margin-bottom: 1.5rem;
	}

	.breakdown-header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		background: var(--faf-black);
		padding: 1rem;
		font-weight: 700;
		color: var(--faf-white);
		font-size: 1.125rem;
	}

	.breakdown-group {
		background: rgba(0, 0, 0, 0.04);
		padding: 0.5rem 1rem;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--faf-gray-dark);
		text-align: left;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.breakdown-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 1rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		transition: background 0.2s ease;
	}

	.breakdown-row:last-child {
		border-bottom: none;
	}

	.breakdown-row.final-row {
		background: rgba(255, 107, 53, 0.05);
		font-weight: 600;
	}

	.breakdown-row:hover {
		background: rgba(0, 212, 212, 0.05);
	}

	.breakdown-col {
		padding: 0.5rem;
		font-size: 1.125rem;
		color: var(--faf-gray-dark);
	}

	.breakdown-col.highlight {
		color: var(--faf-orange);
		font-weight: 700;
		font-size: 1.25rem;
	}

	.breakdown-caption {
		font-size: 1rem;
		color: var(--faf-gray);
		font-style: italic;
	}

	.breakdown-caption strong {
		color: var(--faf-orange);
	}

	.prime-messaging {
		margin-top: 2rem;
		padding: 1.5rem;
		background: linear-gradient(135deg, #F9F9F9 0%, #F0F0F0 100%);
		border-left: 4px solid var(--faf-orange);
		border-radius: 4px;
		text-align: center;
	}

	.prime-messaging p {
		margin: 0.5rem 0;
		font-size: 1.1rem;
		color: var(--faf-black);
	}

	.prime-messaging p:first-child {
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}

	.prime-messaging .facts {
		margin-top: 1rem;
		font-style: italic;
		color: var(--faf-orange);
		font-weight: 600;
	}

	/* Packages Section */
	.packages-section {
		margin: 4rem 0;
	}

	.packages-section h2 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 0.75rem;
		color: var(--faf-black);
	}

	.packages-intro {
		text-align: center;
		font-size: 1.125rem;
		color: var(--faf-gray-dark);
		max-width: 640px;
		margin: 0 auto 3rem;
		line-height: 1.6;
	}

	.family-note {
		text-align: center;
		font-size: 1rem;
		color: var(--faf-gray-dark);
		margin: 1.5rem 0 0.5rem;
	}

	.family-note a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	.family-note a:hover {
		text-decoration: underline;
	}

	.tool-count-note {
		max-width: 720px;
		margin: 1.5rem auto 0;
		padding: 1rem 1.5rem;
		background: rgba(0, 212, 212, 0.05);
		border-left: 4px solid var(--faf-orange);
		border-radius: 4px;
	}

	.tool-count-note p {
		margin: 0;
		font-size: 1rem;
		color: var(--faf-gray-dark);
		line-height: 1.6;
	}

	.package-features li a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	.package-features li a:hover {
		text-decoration: underline;
	}

	.package-card {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.package-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.package-card.featured {
		border: 3px solid var(--faf-orange);
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.02) 0%, white 100%);
	}

	.package-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.package-icon {
		font-size: 2rem;
	}

	.package-header h3 {
		font-size: 1.75rem;
		color: var(--faf-black);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
	}

	.badge {
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		background: var(--faf-orange);
		color: white;
		font-weight: 700;
	}

	.badge.dedicated {
		background: var(--faf-black);
	}

	.package-desc {
		font-size: 1.125rem;
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.package-features {
		list-style: none;
		padding: 0;
		margin-bottom: 1.5rem;
	}

	.package-features li {
		padding: 0.5rem 0;
		font-size: 1rem;
		color: var(--faf-gray-dark);
	}

	.package-install {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		margin-bottom: 1rem;
		font-family: 'Roboto Mono', monospace;
	}

	.package-install code {
		color: white !important;
		background: transparent;
	}

	.package-links {
		display: flex;
		gap: 1rem;
	}

	.package-links a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
		transition: opacity 0.3s ease;
	}

	.package-links a:hover {
		opacity: 0.7;
	}

	/* Installation Tabs */
	.installation-section {
		margin: 4rem 0;
	}

	.installation-section h2 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 2rem;
		color: var(--faf-black);
	}

	.tabs {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.tab {
		padding: 0.75rem 1.5rem;
		background: var(--faf-white);
		border: 2px solid var(--faf-light-gray);
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		color: var(--faf-dark);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.tab:hover {
		border-color: var(--faf-orange);
		color: var(--faf-orange);
	}

	.tab.active {
		background: var(--faf-orange);
		border-color: var(--faf-orange);
		color: white;
	}

	.tab-content {
		background: var(--faf-white);
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.platform-guide h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--faf-black);
	}

	.platform-note {
		background: rgba(255, 107, 53, 0.1);
		padding: 1rem;
		border-radius: 8px;
		margin-bottom: 2rem;
		border-left: 4px solid var(--faf-orange);
	}

	.step {
		display: flex;
		align-items: flex-start;
		margin-bottom: 2rem;
		gap: 1.5rem;
	}

	.step-number {
		width: 40px;
		height: 40px;
		background: var(--faf-orange);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		font-weight: bold;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-content h4 {
		font-size: 1.25rem;
		margin-bottom: 0.75rem;
		color: var(--faf-black);
	}

	.step-content p {
		color: var(--faf-gray);
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.code-block {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		font-family: 'Roboto Mono', monospace;
		font-size: 0.95rem;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
		color: white !important;
	}

	.code-block code {
		color: white !important;
		background: transparent;
	}

	.external-link {
		display: inline-block;
		margin-top: 1rem;
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
		transition: opacity 0.3s ease;
	}

	.external-link:hover {
		opacity: 0.7;
	}

	/* Pattern Section */
	.pattern-section {
		margin: 4rem 0;
		background: white;
		padding: 3rem 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.pattern-section h2 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.pattern-intro {
		text-align: center;
		font-size: 1.125rem;
		color: var(--faf-gray-dark);
		margin-bottom: 3rem;
	}

	.pattern-comparison {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.pattern-old, .pattern-new {
		padding: 2rem;
		border-radius: 8px;
		border: 2px solid;
	}

	.pattern-old {
		border-color: rgba(255, 0, 0, 0.2);
		background: rgba(255, 0, 0, 0.02);
	}

	.pattern-new {
		border-color: var(--faf-orange);
		background: rgba(255, 107, 53, 0.02);
	}

	.pattern-old h4, .pattern-new h4 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.pattern-old p, .pattern-new p {
		font-size: 1rem;
		color: var(--faf-gray-dark);
		font-style: italic;
		margin-bottom: 1rem;
	}

	.time-badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.875rem;
		font-weight: 600;
		background: rgba(255, 0, 0, 0.1);
		color: #d32f2f;
	}

	.time-badge.success {
		background: rgba(255, 107, 53, 0.1);
		color: var(--faf-orange);
	}

	.pattern-examples {
		background: rgba(0, 212, 212, 0.05);
		padding: 2rem;
		border-radius: 8px;
	}

	.pattern-examples h4 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.pattern-examples ul {
		list-style: none;
		padding: 0;
	}

	.pattern-examples li {
		padding: 0.75rem 0;
		font-size: 1.125rem;
	}

	.pattern-examples code {
		background: #1a1a1a;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-family: 'Roboto Mono', monospace;
	}

	/* CTA Section */
	.cta-section {
		text-align: center;
		margin: 4rem 0 2rem;
	}

	.cta-section h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: var(--faf-black);
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-block;
		padding: 1rem 2rem;
		font-size: 1.125rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 8px;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.btn-primary {
		background: var(--faf-orange);
		color: white;
	}

	.btn-primary:hover {
		background: var(--faf-orange-dark);
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		color: var(--faf-black);
		border-color: var(--faf-black);
	}

	.btn-secondary:hover {
		background: var(--faf-black);
		color: var(--faf-white);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.page-title {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.hero-desc {
			font-size: 1rem;
		}

		.tabs {
			justify-content: flex-start;
			overflow-x: auto;
		}

		.step {
			flex-direction: column;
			align-items: flex-start;
		}

		.pattern-comparison {
			grid-template-columns: 1fr;
		}
	}
</style>
