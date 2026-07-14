<script lang="ts">
	import { onMount } from 'svelte';
	import PageActions from '$lib/components/PageActions.svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>MCPaaS - MCP as a Service | FAF</title>
	<meta name="description" content="MCPaaS: Model Context Protocol as a Service. Zero-install MCP servers via URL. First defined by FAF." />
	<meta property="og:title" content="MCPaaS - MCP as a Service" />
	<meta property="og:description" content="Zero-install MCP servers. Point to a URL. Done." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mcpaas-page">
	<header class="hero">
		<div class="breadcrumb">
			<a href="/">Home</a> / MCPaaS
		</div>
		<div class="badge">NEW CATEGORY</div>
		<h1>MCPaaS</h1>
		<p class="tagline">Model Context Protocol as a Service</p>
		<p class="subtitle">Zero-install MCP servers. Point to a URL. Done.</p>
	</header>

	<section class="definition">
		<h2>What is MCPaaS?</h2>
		<div class="definition-card">
			<p class="lead">
				<strong>MCPaaS</strong> (MCP as a Service) is a new category of cloud-hosted MCP servers that require <strong>zero installation</strong>.
				Instead of <code>npm install</code>, you point your MCP client to a URL.
			</p>
		</div>
	</section>

	<section class="comparison">
		<h2>Traditional MCP vs MCPaaS</h2>
		<div class="comparison-grid">
			<div class="comparison-card traditional">
				<h3>Traditional MCP</h3>
				<ul>
					<li><code>npm install -g package</code></li>
					<li>Local runtime required</li>
					<li>Per-machine installation</li>
					<li>Version management</li>
					<li>Dependency conflicts</li>
				</ul>
			</div>
			<div class="comparison-card mcpaas">
				<h3>MCPaaS</h3>
				<ul>
					<li>Point to URL</li>
					<li>Edge-deployed globally</li>
					<li>Works anywhere instantly</li>
					<li>Always latest version</li>
					<li>Zero dependencies</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="proof">
		<h2>Proof It Works</h2>
		<div class="proof-card">
			<div class="proof-logo">🍊</div>
			<h3>grok-faf-mcp</h3>
			<p class="proof-tagline">The first MCPaaS implementation</p>
			<p>
				First MCP for Grok. First URL-based MCP. Deployed on Vercel Edge.
				382 npm downloads from people who didn't need to download it — because it just works via URL.
			</p>
			<div class="proof-links">
				<a href="https://grok-faf-mcp.vercel.app" class="btn primary" target="_blank">Try It Now</a>
				<a href="/blog/grok-faf-mcp" class="btn secondary">Read the Story</a>
			</div>
		</div>
	</section>

	<section class="how-it-works">
		<h2>How MCPaaS Works</h2>
		<div class="steps">
			<div class="step">
				<div class="step-number">1</div>
				<h3>Deploy Once</h3>
				<p>MCP server runs on edge infrastructure (Vercel, Cloudflare, etc.)</p>
			</div>
			<div class="step">
				<div class="step-number">2</div>
				<h3>Share URL</h3>
				<p>Users get an endpoint URL — no package manager needed</p>
			</div>
			<div class="step">
				<div class="step-number">3</div>
				<h3>Connect</h3>
				<p>Point any MCP client to the URL. Instant access to all tools.</p>
			</div>
		</div>
	</section>

	<section class="config-example">
		<h2>Configuration</h2>
		<p>Add to your MCP config — that's it:</p>
		<div class="code-block">
			<pre><code>{`{
  "mcpServers": {
    "grok-faf": {
      "url": "https://grok-faf-mcp.vercel.app/sse"
    }
  }
}`}</code></pre>
		</div>
		<p class="code-note">No npm. No install. No dependencies. Just works.</p>
	</section>

	<section class="future">
		<h2>MCPaaS Ecosystem</h2>
		<p>URL-based MCPs for every platform:</p>
		<div class="ecosystem-grid">
			<div class="ecosystem-card live">
				<div class="status">LIVE</div>
				<h3>grok-faf-mcp</h3>
				<p>For xAI Grok</p>
				<a href="https://grok-faf-mcp.vercel.app" target="_blank">grok-faf-mcp.vercel.app</a>
			</div>
			<div class="ecosystem-card coming">
				<div class="status">COMING</div>
				<h3>claude-faf-mcp</h3>
				<p>For Anthropic Claude</p>
				<span class="coming-soon">URL edition coming</span>
			</div>
			<div class="ecosystem-card coming">
				<div class="status">COMING</div>
				<h3>gemini-faf-mcp</h3>
				<p>For Google Gemini</p>
				<span class="coming-soon">In development</span>
			</div>
		</div>
	</section>

	<section class="cta">
		<h2>Get Started</h2>
		<div class="cta-buttons">
			<a href="https://grok-faf-mcp.vercel.app" class="btn primary" target="_blank">Try grok-faf-mcp</a>
			<a href="https://foundation.faf.one" class="btn secondary" target="_blank">FAF Foundation</a>
			<a href="https://github.com/Wolfe-Jam/grok-faf-mcp" class="btn tertiary" target="_blank">GitHub</a>
		</div>
		<PageActions
			headline="MCP servers with zero install."
			point1="Point to a URL. Done."
			point2="MCPaaS — Model Context Protocol as a Service."
			url="https://faf.one/mcpaas"
			hashtags="AI,MCP"
		/>
	</section>

	<footer class="page-footer">
		<p class="coined">MCPaaS — first defined by <a href="https://foundation.faf.one">FAF Foundation</a>, January 2026</p>
	</footer>
</div>

<style>
	.mcpaas-page {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.hero {
		text-align: center;
		padding: 3rem 0;
		border-bottom: 1px solid #e5e5e5;
		margin-bottom: 3rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-foundation-green);
		text-decoration: none;
	}

	.badge {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 4rem;
		font-weight: 900;
		margin: 0;
		background: linear-gradient(135deg, #FF6B35 0%, var(--faf-foundation-green) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.tagline {
		font-size: 1.5rem;
		color: #333;
		margin: 0.5rem 0;
		font-weight: 600;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #666;
		margin: 0;
	}

	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 3rem 0 1.5rem;
		color: #1a1a1a;
	}

	.definition-card {
		background: linear-gradient(135deg, rgba(0, 191, 99, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%);
		border: 2px solid var(--faf-foundation-green);
		border-radius: 12px;
		padding: 2rem;
	}

	.lead {
		font-size: 1.25rem;
		margin: 0;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: 0.9em;
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.comparison-card {
		padding: 1.5rem;
		border-radius: 12px;
	}

	.comparison-card.traditional {
		background: #f5f5f5;
		border: 2px solid #ddd;
	}

	.comparison-card.mcpaas {
		background: linear-gradient(135deg, rgba(0, 191, 99, 0.1) 0%, rgba(0, 191, 99, 0.05) 100%);
		border: 2px solid var(--faf-foundation-green);
	}

	.comparison-card h3 {
		margin: 0 0 1rem;
		font-size: 1.25rem;
	}

	.comparison-card ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.comparison-card li {
		margin: 0.5rem 0;
	}

	.proof-card {
		background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
		color: white;
		padding: 2.5rem;
		border-radius: 12px;
		text-align: center;
	}

	.proof-logo {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.proof-card h3 {
		font-size: 2rem;
		margin: 0;
		color: #FF6B35;
	}

	.proof-tagline {
		color: var(--faf-foundation-green);
		font-weight: 600;
		margin: 0.5rem 0 1rem;
	}

	.proof-card p {
		color: #ccc;
		max-width: 500px;
		margin: 0 auto 1.5rem;
	}

	.proof-links {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.btn {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: transform 0.2s;
	}

	.btn:hover {
		transform: translateY(-2px);
	}

	.btn.primary {
		background: #FF6B35;
		color: white;
	}

	.btn.secondary {
		background: var(--faf-foundation-green);
		color: white;
	}

	.btn.tertiary {
		background: #1a1a1a;
		color: white;
	}

	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.step {
		text-align: center;
		padding: 1.5rem;
		background: #f9f9f9;
		border-radius: 12px;
	}

	.step-number {
		width: 50px;
		height: 50px;
		background: #FF6B35;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 auto 1rem;
	}

	.step h3 {
		margin: 0 0 0.5rem;
		font-size: 1.1rem;
	}

	.step p {
		margin: 0;
		color: #666;
		font-size: 0.95rem;
	}

	.code-block {
		background: #1a1a1a;
		padding: 1.5rem;
		border-radius: 8px;
		overflow-x: auto;
	}

	.code-block code {
		color: #00D4D4;
		background: none;
		padding: 0;
		font-size: 0.95rem;
	}

	.code-note {
		text-align: center;
		color: #666;
		font-style: italic;
		margin-top: 1rem;
	}

	.ecosystem-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.ecosystem-card {
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
	}

	.ecosystem-card.live {
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%);
		border: 2px solid #FF6B35;
	}

	.ecosystem-card.coming {
		background: #f9f9f9;
		border: 2px dashed #ddd;
	}

	.ecosystem-card .status {
		font-size: 0.7rem;
		font-weight: 700;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		display: inline-block;
		margin-bottom: 0.5rem;
	}

	.ecosystem-card.live .status {
		background: #FF6B35;
		color: white;
	}

	.ecosystem-card.coming .status {
		background: #ddd;
		color: #666;
	}

	.ecosystem-card h3 {
		margin: 0.5rem 0;
		font-size: 1.1rem;
	}

	.ecosystem-card p {
		margin: 0;
		color: #666;
		font-size: 0.9rem;
	}

	.ecosystem-card a {
		color: #FF6B35;
		font-size: 0.85rem;
	}

	.coming-soon {
		color: #999;
		font-size: 0.85rem;
		font-style: italic;
	}

	.cta {
		text-align: center;
		padding: 3rem 0;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.page-footer {
		text-align: center;
		padding: 2rem 0;
		border-top: 1px solid #e5e5e5;
		margin-top: 3rem;
	}

	.coined {
		color: #666;
		font-size: 0.9rem;
	}

	.coined a {
		color: var(--faf-foundation-green);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		.comparison-grid,
		.steps,
		.ecosystem-grid {
			grid-template-columns: 1fr;
		}

		.proof-links {
			flex-direction: column;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.btn {
			width: 100%;
			text-align: center;
		}
	}
</style>
