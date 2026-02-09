<script>
	const diagrams = [
		{
			slug: '6ws-flow',
			title: '6Ws Flow - Universal AI Context',
			description: 'Answer 6 questions → Better READMEs + AI-ready context → Standard emerges',
			category: 'FAF Core'
		},
		{
			slug: 'builder-double-whammy',
			title: 'builder.faf.one - DOUBLE-WHAMMY',
			description: 'Rust WASM (211KB, 3ms) + Zig WASM (2.7KB, 14μs) in-browser architecture',
			category: 'FAF Core'
		},
		{
			slug: 'mcpaas-before-after',
			title: 'MCPaaS Before/After',
			description: 'Context persistence comparison - session memory vs eternal memory',
			category: 'MCPaaS'
		},
		{
			slug: 'mcpaas-architecture',
			title: 'MCPaaS Architecture',
			description: 'Cloudflare Edge → Zig-WASM → KV storage flow',
			category: 'MCPaaS'
		},
		{
			slug: 'faf-voice-flow',
			title: 'FAF-Voice Flow',
			description: 'Browser → MCPaaS → xAI Grok voice architecture',
			category: 'FAF-Voice'
		},
		{
			slug: 'faf-interop',
			title: 'FAF Interoperability',
			description: '.faf ↔ CLAUDE.md ↔ GEMINI.md ↔ conductor/ sync',
			category: 'FAF Core'
		},
		{
			slug: 'faf-agents-foundation',
			title: 'FAF Foundation Architecture',
			description: '.faf as source of truth for Agents.md, CLAUDE.md, GEMINI.md',
			category: 'FAF Core'
		},
		{
			slug: 'faf-agents-foundation-light',
			title: 'FAF Foundation (Light/Print)',
			description: 'Light mode version for print and white backgrounds',
			category: 'FAF Core'
		}
	];
</script>

<svelte:head>
	<title>Diagrams | FAF</title>
	<meta name="description" content="FAF architecture diagrams - screenshot-ready, reusable visual assets" />
</svelte:head>

<div class="diagrams-page">
	<header class="page-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / Diagrams
		</div>
		<h1>Diagrams</h1>
		<p class="subtitle">Screenshot-ready architecture diagrams. Click to view full-size.</p>
	</header>

	<div class="diagrams-grid">
		{#each diagrams as diagram}
			<a href="/diagrams/{diagram.slug}" class="diagram-card">
				<div class="diagram-category">{diagram.category}</div>
				<h2>{diagram.title}</h2>
				<p>{diagram.description}</p>
				<span class="view-link">View Diagram →</span>
			</a>
		{/each}
	</div>

	<section class="usage-note">
		<h2>Usage</h2>
		<p>These diagrams are designed for:</p>
		<ul>
			<li><strong>Screenshots</strong> — Open diagram, screenshot at any resolution</li>
			<li><strong>Blog posts</strong> — Embed or link directly</li>
			<li><strong>Social media</strong> — Share URLs or screenshot as PNG</li>
			<li><strong>Documentation</strong> — Always up-to-date visuals</li>
		</ul>
	</section>
</div>

<style>
	.diagrams-page {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.page-header {
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
		font-size: 2.5rem;
		margin: 0.5rem 0;
		color: #000;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 0 0;
	}

	.diagrams-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.diagram-card {
		background: #f8f9fa;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
	}

	.diagram-card:hover {
		border-color: #FF6B35;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.15);
	}

	.diagram-category {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.diagram-card h2 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem 0;
		color: #000;
	}

	.diagram-card p {
		font-size: 0.95rem;
		color: #666;
		margin: 0 0 1rem 0;
		line-height: 1.5;
	}

	.view-link {
		color: #FF6B35;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.usage-note {
		background: #f8f9fa;
		border-radius: 12px;
		padding: 2rem;
	}

	.usage-note h2 {
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
		color: #000;
	}

	.usage-note p {
		margin: 0 0 1rem 0;
		color: #666;
	}

	.usage-note ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.usage-note li {
		margin-bottom: 0.5rem;
		color: #333;
	}

	@media (max-width: 768px) {
		.diagrams-grid {
			grid-template-columns: 1fr;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
