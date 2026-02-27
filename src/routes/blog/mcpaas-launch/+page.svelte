<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>MCPaaS: The Endpoint for Context | FAF</title>
	<meta name="description" content="Serverless AI context delivery. One endpoint. Any AI. Eternal memory. Built on Cloudflare Workers with a 2.7KB Zig-WASM scoring engine." />
	<meta property="og:title" content="MCPaaS: The Endpoint for Context" />
	<meta property="og:description" content="Serverless AI context delivery at 300+ global edge locations. Sub-millisecond cold starts." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / MCPaaS Launch
		</div>

		<h1>MCPaaS: The Endpoint for Context</h1>
		<p class="version-tag">MCP as a Service</p>
		<p class="subtitle">One endpoint. Any AI. Eternal memory.</p>
		<div class="meta">
			<time datetime="2026-01-20">January 20, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> MCPaaS delivers persistent AI context through the Model Context Protocol. Built on Cloudflare Workers with a 2.7KB Zig-WASM engine. 300+ edge locations. Sub-millisecond cold starts. Your project DNA, available to any AI that asks.
			</p>
		</section>

		<section>
			<h2>The Problem We're Solving</h2>

			<p>Every AI conversation starts from zero.</p>

			<p>You open Claude. You explain your project. The stack. The architecture. The constraints. The AI helps you solve a problem. Session ends.</p>

			<p>Next day, you open Claude again. You explain your project. Again. The stack. Again. The architecture. Again.</p>

			<p>This isn't a minor inconvenience. It's a fundamental infrastructure gap.</p>

			<ul>
				<li><strong>Developers</strong> re-explain projects dozens of times per week</li>
				<li><strong>Teams</strong> duplicate onboarding for every AI tool</li>
				<li><strong>Enterprises</strong> can't standardize AI context across platforms</li>
				<li><strong>AI assistants</strong> forget everything between sessions</li>
			</ul>

			<p>Context is trapped. In chat windows. In session storage. In platform silos.</p>
		</section>

		<!-- BEFORE/AFTER DIAGRAM -->
		<section class="diagram-section">
			<div class="diagram-container">
				<div class="diagram-column">
					<h3 class="diagram-title problem-title">Before MCPaaS</h3>
					<div class="diagram-content problem-bg">
						<div class="session-box">
							<div class="session-label">Session 1</div>
							<div class="session-status success">AI knows context</div>
						</div>
						<div class="arrow-down">→</div>
						<div class="session-box">
							<div class="session-label">Session 2</div>
							<div class="session-status failure">AI knows NOTHING</div>
						</div>
						<div class="arrow-down">→</div>
						<div class="session-box">
							<div class="session-label">Session 3</div>
							<div class="session-status failure">AI knows NOTHING</div>
						</div>
						<div class="diagram-footer problem-footer">
							<strong>No Persistence</strong>
							<span>Context dies with each session.</span>
						</div>
					</div>
				</div>

				<div class="diagram-column">
					<h3 class="diagram-title solution-title">After MCPaaS</h3>
					<div class="diagram-content solution-bg">
						<div class="session-box connected">
							<div class="session-label">Session 1</div>
							<div class="session-status success">Calls MCPaaS</div>
						</div>
						<div class="connector-line"></div>
						<div class="session-box connected">
							<div class="session-label">Session 2</div>
							<div class="session-status success">Calls MCPaaS</div>
						</div>
						<div class="connector-line"></div>
						<div class="session-box connected">
							<div class="session-label">Session 3</div>
							<div class="session-status success">Calls MCPaaS</div>
						</div>
						<div class="connector-line"></div>
						<div class="mcpaas-box">
							<div class="mcpaas-label">.faf</div>
							<div class="mcpaas-sublabel">Your Context</div>
						</div>
						<div class="diagram-footer solution-footer">
							<strong>.faf Format Foundation</strong>
							<div class="badge-row">
								<span class="badge">IANA-Registered</span>
								<span class="badge">Persistent</span>
								<span class="badge">Universal</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h2>The Solution: Context as a Service</h2>

			<p>MCPaaS makes context an endpoint.</p>

			<p>Your project DNA—the things that make your project <em>your project</em>—lives at a URL. Any MCP-compatible AI can request it. Context persists across sessions, platforms, and time.</p>

			<p>From chat-bound context to endpoint-accessible context. From session memory to eternal memory. From platform lock-in to universal portability.</p>
		</section>

		<section>
			<h2>What is MCP?</h2>

			<p>MCP (Model Context Protocol) is Anthropic's open standard for connecting AI assistants to external data sources and tools. Think of it as USB for AI—a universal interface that lets any compatible AI talk to any compatible service.</p>

			<p>Released in late 2024, MCP is now supported by:</p>

			<ul>
				<li>Claude Desktop and Claude Code</li>
				<li>Various IDE integrations</li>
				<li>A growing ecosystem of third-party tools</li>
			</ul>

			<p>MCPaaS is an MCP server that serves one thing: your project context. But it serves it from the edge, globally, with sub-millisecond latency.</p>
		</section>

		<section>
			<h2>The Architecture</h2>

			<div class="tech-table">
				<table>
					<tbody>
						<tr><td><strong>Runtime</strong></td><td>Cloudflare Workers (V8 isolates)</td></tr>
						<tr><td><strong>Scoring Engine</strong></td><td>Zig compiled to WebAssembly (2.7KB)</td></tr>
						<tr><td><strong>Storage</strong></td><td>Cloudflare KV (globally replicated)</td></tr>
						<tr><td><strong>Authentication</strong></td><td>OAuth 2.0 via Auth0</td></tr>
						<tr><td><strong>Protocol</strong></td><td>MCP (Model Context Protocol)</td></tr>
						<tr><td><strong>Format</strong></td><td>FAF (IANA <code>application/vnd.faf+yaml</code>)</td></tr>
						<tr><td><strong>Edge Locations</strong></td><td>300+ worldwide</td></tr>
					</tbody>
				</table>
			</div>

			<!-- ARCHITECTURE DIAGRAM -->
			<div class="arch-diagram">
				<div class="arch-row">
					<div class="arch-box ai-box">
						<div class="arch-icon">🤖</div>
						<div class="arch-label">Claude</div>
					</div>
					<div class="arch-box ai-box">
						<div class="arch-icon">🍊</div>
						<div class="arch-label">Grok</div>
					</div>
					<div class="arch-box ai-box">
						<div class="arch-icon">💎</div>
						<div class="arch-label">Gemini</div>
					</div>
				</div>
				<div class="arch-connector">
					<span>MCP Protocol</span>
				</div>
				<div class="arch-row">
					<div class="arch-box edge-box">
						<div class="arch-label-main">Cloudflare Edge</div>
						<div class="arch-sublabel">300+ locations</div>
						<div class="arch-inner">
							<div class="arch-component">
								<strong>Worker</strong>
								<span>V8 Isolate</span>
							</div>
							<div class="arch-component zig">
								<strong>Zig-WASM</strong>
								<span>2.7KB Engine</span>
							</div>
						</div>
					</div>
				</div>
				<div class="arch-connector">
					<span>Read/Write</span>
				</div>
				<div class="arch-row">
					<div class="arch-box storage-box">
						<div class="arch-label-main">Cloudflare KV</div>
						<div class="arch-sublabel">Global Replication</div>
						<div class="faf-file">
							<span class="faf-icon">📄</span>
							<span>project.faf</span>
						</div>
					</div>
				</div>
			</div>

			<h3>Why Zig-WASM?</h3>

			<p>Serverless has a dirty secret: cold starts. The first request to a dormant function can take hundreds of milliseconds while the runtime initializes. For context that AI needs <em>immediately</em>, that's unacceptable.</p>

			<p>Our solution: compile the scoring engine in Zig and ship it as WebAssembly.</p>

			<ul>
				<li><strong>2.7KB total binary size</strong> — loads instantly</li>
				<li><strong>No JavaScript runtime overhead</strong> — pure computation</li>
				<li><strong>No Node.js dependencies</strong> — no node_modules, no bundling</li>
				<li><strong>Deterministic performance</strong> — same speed every time</li>
			</ul>

			<p class="quote">"Mass was always the enemy." — The Zig philosophy</p>

			<p>The result: sub-millisecond cold starts. Your AI gets context before the user finishes typing.</p>

			<h3>Why Cloudflare Workers?</h3>

			<p>Traditional serverless (Lambda, Cloud Functions) runs in a few regions. Your users in Tokyo wait for a round-trip to us-east-1. Cloudflare Workers run at the edge—300+ locations worldwide. Context is served from the nearest point of presence.</p>

			<ul>
				<li><strong>Zero-scale infrastructure</strong> — pay only for invocations</li>
				<li><strong>No capacity planning</strong> — scales to zero, scales to millions</li>
				<li><strong>Global by default</strong> — deployed everywhere automatically</li>
				<li><strong>V8 isolates</strong> — lighter than containers, faster than VMs</li>
			</ul>

			<p>The context follows the user, not the other way around.</p>
		</section>

		<section>
			<h2>How It Works</h2>

			<h3>1. Store Your Context</h3>

			<p>Upload your <code>.faf</code> file—a YAML document containing your project's DNA:</p>

			<div class="code-block">
				<pre><code>{`# project.faf - Your project DNA
project:
  name: "my-awesome-app"
  goal: "Real-time collaboration platform"
  main_language: "TypeScript"

stack:
  frontend: "React 18"
  backend: "Node.js + Express"
  database: "PostgreSQL"
  hosting: "Vercel"

human_context:
  who: "3-person startup team"
  what: "Building Figma for spreadsheets"
  why: "Excel is stuck in 1995"
  how: "WebSocket sync, CRDT conflict resolution"`}</code></pre>
			</div>

			<h3>2. AI Requests Context</h3>

			<p>Any MCP-compatible AI can request your context via the standard MCP protocol:</p>

			<div class="code-block">
				<pre><code>{`// MCP tool call
{
  "tool": "get_context",
  "arguments": {
    "project_id": "my-awesome-app"
  }
}`}</code></pre>
			</div>

			<h3>3. Context Delivered</h3>

			<p>MCPaaS returns your full project context, scored and validated:</p>

			<div class="code-block">
				<pre><code>{`{
  "context": { ... },      // Your .faf content
  "score": 94,             // AI-readiness score (0-100)
  "tier": "gold",          // Trophy tier
  "validated": true,       // Format compliance
  "latency_ms": 0.8        // Edge delivery
}`}</code></pre>
			</div>

			<p>The AI now knows your project. No re-explaining. No context loss. Just work.</p>
		</section>

		<section>
			<h2>Who It's For</h2>

			<h3>AI Tool Builders</h3>
			<p>Building Claude integrations, Grok applications, or multi-model orchestration? MCPaaS provides the context layer. One integration gives you persistent memory across all sessions. Stop building bespoke context management—use the standard.</p>

			<h3>Developer Teams</h3>
			<p>Onboarding AI to your codebase shouldn't take 20 minutes of pasting README files. MCPaaS serves your <code>project.faf</code> to any AI that asks. New team member? New AI tool? Same context, instantly.</p>

			<h3>Enterprise Architects</h3>
			<p>Evaluating MCP for production? MCPaaS is reference-grade infrastructure. IANA-registered format. USPTO trademark filed. Already submitted to the official Anthropic MCP Registry (PR #2759). This isn't a weekend project—it's infrastructure you can build on.</p>

			<h3>Platform Engineers</h3>
			<p>Need context delivery without managing infrastructure? MCPaaS is zero-scale by design. No Kubernetes. No container orchestration. No cold start tuning. It just works.</p>
		</section>

		<section>
			<h2>The Credentials</h2>

			<p>We're not asking you to trust a random npm package. MCPaaS is built on a foundation of verified credentials:</p>

			<ul>
				<li><strong>MCP Registry</strong> — PR #2759 submitted to modelcontextprotocol/servers</li>
				<li><strong>IANA Registration</strong> — <code>application/vnd.faf+yaml</code> is an official media type</li>
				<li><strong>USPTO Trademark</strong> — Serial No. 99596802 (filed January 15, 2026)</li>
				<li><strong>FAF Foundation</strong> — Published at foundation.faf.one</li>
				<li><strong>21,000+ npm downloads</strong> — faf-cli, claude-faf-mcp, faf-mcp, grok-faf-mcp</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>MCPaaS Live</h3>
					<p>Production endpoint</p>
					<a href="https://mcpaas.live" class="cta-link">mcpaas.live</a>
				</div>
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source code</p>
					<a href="https://github.com/Wolfe-Jam/faf-mcpaas" class="cta-link">faf-mcpaas</a>
				</div>
				<div class="cta-box">
					<h3>FAF CLI</h3>
					<p>Create .faf files</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">npm install -g faf-cli</a>
				</div>
				<div class="cta-box">
					<h3>Documentation</h3>
					<p>Full spec</p>
					<a href="https://faf.one" class="cta-link">faf.one</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<div class="stats-grid">
				<div class="stat-box">
					<div class="stat-number">300+</div>
					<div class="stat-label">Edge locations</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">2.7KB</div>
					<div class="stat-label">Zig-WASM binary</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">&lt;1ms</div>
					<div class="stat-label">Cold start</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">20K+</div>
					<div class="stat-label">npm downloads</div>
				</div>
			</div>
		</section>

		<section>
			<h2>What's Next</h2>

			<p>MCPaaS is live and production-ready. Coming soon:</p>

			<ul>
				<li><strong>Team workspaces</strong> — shared context across organizations</li>
				<li><strong>Version history</strong> — context evolution over time</li>
				<li><strong>Analytics</strong> — see how AI uses your context</li>
				<li><strong>More MCP tools</strong> — beyond context retrieval</li>
			</ul>

			<p>We're also working with early adopters building voice interfaces, multi-model orchestration, and enterprise AI deployments. If you're pushing the boundaries of what MCP can do, <a href="https://github.com/Wolfe-Jam/faf-mcpaas/issues">we want to hear from you</a>.</p>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ The endpoint for context. 🏎️
			</p>
			<p class="footer-links">
				<a href="https://mcpaas.live">mcpaas.live</a> ·
				<a href="https://github.com/Wolfe-Jam/faf-mcpaas">GitHub</a> ·
				<a href="https://faf.one">faf.one</a>
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

	.category.launch {
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

	.quote {
		font-style: italic;
		color: #666;
		border-left: 3px solid #00D4D4;
		padding-left: 1rem;
		margin: 1.5rem 0;
	}

	/* BEFORE/AFTER DIAGRAM */
	.diagram-section {
		margin: 3rem 0;
	}

	.diagram-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 12px;
	}

	.diagram-column {
		display: flex;
		flex-direction: column;
	}

	.diagram-title {
		text-align: center;
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		padding-bottom: 0.5rem;
		border-bottom: 3px solid;
	}

	.problem-title {
		color: #dc2626;
		border-color: #dc2626;
	}

	.solution-title {
		color: #16a34a;
		border-color: #16a34a;
	}

	.diagram-content {
		flex: 1;
		padding: 1.5rem;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.problem-bg {
		background: #fef2f2;
		border: 1px solid #fecaca;
	}

	.solution-bg {
		background: #f0fdf4;
		border: 1px solid #bbf7d0;
	}

	.session-box {
		background: white;
		padding: 0.75rem 1.25rem;
		border-radius: 6px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.1);
		text-align: center;
		width: 100%;
		max-width: 160px;
	}

	.session-box.connected {
		border-left: 3px solid #16a34a;
	}

	.session-label {
		font-weight: 600;
		font-size: 0.9rem;
		color: #333;
	}

	.session-status {
		font-size: 0.8rem;
		margin-top: 0.25rem;
	}

	.session-status.success {
		color: #16a34a;
	}

	.session-status.failure {
		color: #dc2626;
	}

	.arrow-down {
		color: #dc2626;
		font-size: 1.2rem;
	}

	.connector-line {
		width: 2px;
		height: 12px;
		background: #16a34a;
	}

	.mcpaas-box {
		background: #1a1a1a;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-align: center;
	}

	.mcpaas-label {
		font-weight: 700;
		font-family: 'SF Mono', monospace;
	}

	.mcpaas-sublabel {
		font-size: 0.75rem;
		color: #aaa;
	}

	.diagram-footer {
		margin-top: auto;
		padding: 1rem;
		border-radius: 6px;
		text-align: center;
		width: 100%;
	}

	.problem-footer {
		background: #fecaca;
		color: #991b1b;
	}

	.problem-footer span {
		display: block;
		font-size: 0.85rem;
	}

	.solution-footer {
		background: #16a34a;
		color: white;
	}

	.badge-row {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		margin-top: 0.5rem;
		flex-wrap: wrap;
	}

	.badge {
		background: white;
		color: #16a34a;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	/* ARCHITECTURE DIAGRAM */
	.arch-diagram {
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
	}

	.arch-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.arch-box {
		padding: 1rem 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.ai-box {
		background: white;
		border: 2px solid #e5e7eb;
		min-width: 100px;
	}

	.arch-icon {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.arch-label {
		font-weight: 600;
		font-size: 0.9rem;
	}

	.edge-box {
		background: #FF6B35;
		color: white;
		min-width: 280px;
	}

	.arch-label-main {
		font-weight: 700;
		font-size: 1.1rem;
	}

	.arch-sublabel {
		font-size: 0.8rem;
		opacity: 0.9;
		margin-bottom: 0.75rem;
	}

	.arch-inner {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
	}

	.arch-component {
		background: rgba(255,255,255,0.2);
		padding: 0.5rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
	}

	.arch-component strong {
		display: block;
	}

	.arch-component.zig {
		background: #f7a41d;
		color: #000;
	}

	.storage-box {
		background: #00D4D4;
		color: #000;
		min-width: 200px;
	}

	.faf-file {
		background: white;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		margin-top: 0.5rem;
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
	}

	.faf-icon {
		margin-right: 0.25rem;
	}

	.arch-connector {
		text-align: center;
		padding: 0.75rem 0;
		color: #666;
		font-size: 0.85rem;
	}

	.arch-connector span {
		background: #e5e7eb;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
	}

	/* CODE BLOCKS */
	.code-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.25rem;
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
	}

	.code-block code {
		display: block;
		color: #00ff88;
		background: none;
		padding: 0;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	/* TABLES */
	.tech-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.tech-table table {
		width: 100%;
		border-collapse: collapse;
		background: #f8f8f8;
		border-radius: 8px;
		overflow: hidden;
	}

	.tech-table td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #eee;
	}

	.tech-table tr:last-child td {
		border-bottom: none;
	}

	.tech-table td:first-child {
		width: 40%;
		background: #f0f0f0;
	}

	/* CTA GRID */
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
		font-size: 1.1rem;
	}

	.cta-box p {
		margin: 0 0 0.75rem 0;
		font-size: 0.9rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	/* STATS GRID */
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.stat-box {
		background: #1a1a1a;
		padding: 1.5rem 1rem;
		border-radius: 8px;
		text-align: center;
	}

	.stat-number {
		font-size: 1.8rem;
		font-weight: 700;
		color: #00D4D4;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.stat-label {
		font-size: 0.85rem;
		color: #888;
		margin-top: 0.25rem;
	}

	/* FOOTER */
	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	.footer-links {
		margin-top: 1rem;
		font-size: 0.9rem;
	}

	.footer-links a {
		color: #FF6B35;
		text-decoration: none;
	}

	.footer-links a:hover {
		text-decoration: underline;
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
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-code-multi {
		flex: 1;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		color: #00d4d4;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.6;
	}
	.code-comment { color: #666; font-weight: 400; }
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

	/* RESPONSIVE */
	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.diagram-container {
			grid-template-columns: 1fr;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.blog-post {
			padding: 1rem;
		}

		.arch-row {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
