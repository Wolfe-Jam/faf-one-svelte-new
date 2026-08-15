<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>grok-faf-mcp — The first MCP for Grok</title>
	<meta name="description" content="The first MCP server built for xAI Grok, and the first FAF MCP online. Persistent project context via IANA-registered .faf. Live at grok-faf-mcp.vercel.app." />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="grok-faf-mcp — The first MCP for Grok" />
	<meta property="og:description" content="Persistent project context for xAI Grok. First MCP for Grok. First FAF MCP online. 137 µs / score on Mk4 WASM." />
	<meta property="og:url" content="https://www.faf.one/grok" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="grok-faf-mcp — The first MCP for Grok" />
	<meta name="twitter:description" content="Persistent project context for xAI Grok. First MCP for Grok. First FAF MCP online." />
</svelte:head>

<main class="page">

	<section class="hero">
		<h1>grok-faf-mcp</h1>
		<p class="sub">Persistent project context for xAI Grok</p>
	</section>

	<section class="content">
		<h2>What it is</h2>
		<p>An MCP server delivering IANA-registered <code>.faf</code> context to xAI Grok over HTTP-SSE. Point your Grok integration at the endpoint, and Grok sees your project DNA — instead of starting every session from zero.</p>
		<p>Two ways to use it: hosted at <code>grok-faf-mcp.vercel.app/sse</code> (zero config) or <code>npx grok-faf-mcp</code> locally.</p>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>Grok asked for MCP on a URL. This is it.</p>
		<p>The first MCP server built specifically for Grok, deployed on Vercel as a URL-first surface. No installation barrier — just a context endpoint Grok can call.</p>
	</section>

	<section class="content">
		<h2>Receipts</h2>
		<ul class="receipts">
			<li><strong>First MCP for Grok</strong> — origin credential, falsifiable by publish timestamps</li>
			<li><strong>First FAF MCP online</strong> — first of the five FAF vendor MCPs to ship via web URL</li>
			<li><strong>137 µs / score · 7,279 ops/sec</strong> — Mk4 WASM kernel, p50, measured on a 2019 iMac</li>
			<li><strong>IANA-registered</strong> — <code>application/vnd.faf+yaml</code> · <code>application/vnd.fafm+yaml</code> · <code>application/vnd.fafa+yaml</code></li>
			<li><strong>Agents paper</strong> — <a href="https://doi.org/10.5281/zenodo.21951641" target="_blank" rel="noopener">Why Agents Need a Passport (DOI 10.5281/zenodo.21951641)</a></li>
			<li><strong>21 core + 34 advanced</strong> MCP tools, HTTP-SSE transport</li>
		</ul>
	</section>

	<section class="content cta-section">
		<h2>Try it</h2>
		<p>Point your Grok integration at the hosted endpoint, or run locally with one command.</p>
		<a class="cta" href="https://mcpaas.live/grok/mcp/v1" target="_blank" rel="noopener">
			Live at mcpaas.live/grok/mcp/v1 →
		</a>
		<p class="smithery">
			Also on Smithery:
			<a href="https://smithery.ai/servers/wolfe-jam/grok-faf-mcp" target="_blank" rel="noopener">
				wolfe-jam/grok-faf-mcp →
			</a>
		</p>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">Grok asked for MCP on a URL. This is it.</p>
		<p class="footer-iana">FAF Ecosystem #2759 · The first MCP for Grok</p>
	</section>

	<PageActions
		headline="Give xAI Grok persistent project context."
		point1="grok-faf-mcp — MCP server, IANA-registered .faf."
		point2="Context that survives the session."
		url="https://www.faf.one/grok"
		hashtags="AI,Grok,xAI,MCP"
	/>

</main>

<style>
	.page {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.hero {
		text-align: center;
		padding: 4rem 0 2rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 2rem;
	}

	.hero h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-gray);
	}

	.content {
		padding: 1.5rem 0;
	}

	.content h2 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
	}

	.content p {
		color: var(--faf-dark);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.receipts {
		list-style: none;
		padding: 0;
	}

	.receipts li {
		padding: 0.5rem 0;
		color: var(--faf-dark);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.receipts li:last-child {
		border-bottom: none;
	}

	.receipts strong {
		color: var(--faf-black);
	}

	code {
		font-family: var(--font-mono);
		background: var(--faf-gray-light);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		color: var(--faf-cyan-text);
	}

	.cta-section {
		text-align: center;
		padding: 2rem 0;
	}

	.cta {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.9rem 1.75rem;
		background: var(--faf-orange);
		color: white;
		text-decoration: none;
		font-weight: 600;
		border-radius: 8px;
		font-size: 1.05rem;
		transition: transform 0.15s ease;
	}

	.cta:hover {
		transform: translateY(-1px);
	}

	.smithery {
		margin-top: 1.25rem;
		font-size: 0.95rem;
		color: var(--faf-gray);
	}

	.smithery a {
		margin-left: 0.35rem;
		color: var(--faf-cyan-text);
		text-decoration: none;
		font-weight: 500;
	}

	.smithery a:hover {
		text-decoration: underline;
	}

	.footer-section {
		text-align: center;
		padding: 3rem 0;
		border-top: 1px solid var(--faf-light-gray);
		margin-top: 2rem;
	}

	.footer-tagline {
		font-weight: 600;
		color: var(--faf-black);
	}

	.footer-iana {
		font-size: 0.8rem;
		color: var(--faf-gray);
		margin-top: 0.5rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.8rem;
		}
	}
</style>
