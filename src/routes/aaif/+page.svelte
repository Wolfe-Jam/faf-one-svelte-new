<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>AAIF — Agentic AI Foundation | FAF</title>
	<meta
		name="description"
		content="Founding AAIF Ambassador James Harrison — Agentic AI Foundation at the Linux Foundation. MCP · A2A · goose · AGENTS.md · agentgateway. AAIF-verified public work."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="AAIF — Founding Ambassador | FAF" />
	<meta
		property="og:description"
		content="Celebrating selection as a Founding AAIF Ambassador. Open agent standards · public excellence · AAIF-verified work."
	/>
	<meta property="og:url" content="https://faf.one/aaif" />
	<meta property="og:image" content="https://faf.one/images/aaif/aaif-og.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="AAIF — Founding Ambassador | FAF" />
	<meta
		name="twitter:description"
		content="Founding AAIF Ambassador · open agent standards at the Linux Foundation · AAIF-verified excellence."
	/>
	<meta name="twitter:image" content="https://faf.one/images/aaif/aaif-og.png" />
</svelte:head>

<main class="page">
	<header class="hero">
		<img
			class="aaif-logo"
			src="/images/aaif/aaif-primary-black.png"
			alt="Agentic AI Foundation"
			width="280"
			height="72"
		/>
		<p class="kicker">Agentic AI Foundation · Founding Ambassador</p>
		<h1>Selected for excellence. Shipping open standards.</h1>
		<p class="sub">
			MCP · A2A · goose · AGENTS.md · agentgateway — public work on the open projects.
		</p>
		<div class="heritage">
			<span class="pill">Hosted by the <a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener">Linux Foundation</a></span>
			<span class="pill">
				Heritage:
				<a
					href="https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation"
					target="_blank"
					rel="noopener"
					>Anthropic donated MCP</a
				>
				· AAIF established 2025-11
			</span>
		</div>
	</header>

	<section class="content">
		<h2>What AAIF is</h2>
		<p>
			The <strong>Agentic AI Foundation (AAIF)</strong> is the
			<a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener">Linux Foundation</a>
			home for the open projects shaping agentic AI — neutral governance, shared infrastructure, real standards.
		</p>
		<ul class="projects">
			<li>
				<strong>MCP</strong> — Model Context Protocol (tools and context for agents)
			</li>
			<li>
				<strong>A2A</strong> — Agent2Agent (agent to agent; AAIF-hosted 2026-08-17)
			</li>
			<li><strong>goose</strong> — open agent runtime</li>
			<li><strong>AGENTS.md</strong> — the agent instruction file for a repo</li>
			<li><strong>agentgateway</strong> — gateway for agent traffic</li>
		</ul>
		<p class="links-row">
			<a href="https://aaif.io" target="_blank" rel="noopener">aaif.io</a>
			·
			<a href="https://aaif.io/brand" target="_blank" rel="noopener">Brand</a>
			·
			<a href="https://github.com/aaif" target="_blank" rel="noopener">github.com/aaif</a>
		</p>
	</section>

	<section class="content ambassador">
		<div class="ambassador-row">
			<div class="ambassador-copy">
				<h2>Founding Ambassador</h2>
				<p>
					<strong>James Harrison</strong> (WolfeJam) is a
					<strong>Founding AAIF Ambassador</strong> — inaugural cohort, 2026. Selected to help developers
					adopt the open standards agentic AI is built on: public guides, tutorials, tools, and code.
				</p>
				<p>
					Ambassadors earn standing through <strong>public, project-based excellence</strong> — work that
					ships, teaches, and gets amplified by the foundation.
				</p>
				<p class="links-row">
					<a href="/blog/aaif-ambassador">Read the announcement</a>
				</p>
			</div>
			<img
				class="badge"
				src="/images/aaif/aaif-ambassador-badge.png"
				alt="AAIF Ambassador badge 2026 — Agentic AI Foundation, hosted by the Linux Foundation"
				width="160"
				height="160"
			/>
		</div>
	</section>

	<section class="content">
		<h2>AAIF-verified</h2>
		<p>
			<strong>AAIF-verified</strong> marks public work that completed the Ambassador excellence path:
		</p>
		<ol class="verified-steps">
			<li>Shipped on an AAIF project (MCP · A2A · goose · AGENTS.md · agentgateway · education)</li>
			<li>Submitted through the Ambassador program</li>
			<li>Reviewed (including automated review) and scored by the program — leadership-scored when it rises</li>
		</ol>
		<p>
			Appointed Ambassador · public craft · formal review · scored. That is the bar — and the badge of work that
			cleared it.
		</p>
	</section>

	<section class="content">
		<h2>Public work</h2>
		<table class="contrib">
			<thead>
				<tr>
					<th>Work</th>
					<th>Project</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<a href="https://dev.to/wolfejam/series/41937" target="_blank" rel="noopener"
							>AGENTS.md education stack</a
						>
						— series (field guide → wrap), LinkedIn explainer, and
						<a href="https://github.com/Wolfe-Jam/agents-md-facts" target="_blank" rel="noopener"
							>agents-md-facts</a
						>
					</td>
					<td>AGENTS.md</td>
				</tr>
				<tr>
					<td>
						<a href="https://github.com/aaif-goose/goose/pull/10618" target="_blank" rel="noopener"
							>goose #10618</a
						>
						— Cursor composer-2.5 models
					</td>
					<td>goose</td>
				</tr>
				<tr>
					<td>
						<a href="https://github.com/Wolfe-Jam/mcp-better" target="_blank" rel="noopener"
							>mcp-better</a
						>
						— 7/28 textbook MCP (Rust)
					</td>
					<td>MCP</td>
				</tr>
			</tbody>
		</table>
		<p class="muted-note">
			Featured by AAIF:
			<a href="https://x.com/AgenticAIFdn/status/2077377737258369345" target="_blank" rel="noopener">@AgenticAIFdn</a>
			·
			<a
				href="https://www.linkedin.com/posts/agentic-ai-foundation_mcp728-activity-7483143434686476288-qTV3"
				target="_blank"
				rel="noopener">LinkedIn</a
			>.
		</p>
	</section>

	<section class="content">
		<h2>Further reading</h2>
		<ul class="further">
			<li><a href="/agents">faf.one/agents</a> — AGENTS.md field guide · MCP / A2A hop</li>
			<li><a href="/mcp">faf.one/mcp</a> — MCP + .faf</li>
			<li>
				<a href="https://aaif.io/blog/a2a-joins-aaif" target="_blank" rel="noopener">A2A joins AAIF</a>
				·
				<a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener">A2A spec</a>
			</li>
			<li><a href="/blog/mcp-better">mcp-better release note</a></li>
			<li><a href="/blog/aaif-ambassador">AAIF Ambassador announcement</a></li>
			<li>
				<a
					href="https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation"
					target="_blank"
					rel="noopener">Anthropic: donating MCP &amp; establishing AAIF</a
				>
			</li>
		</ul>
	</section>

	<section class="content footer-section">
		<img
			class="symbol"
			src="/images/aaif/aaif-symbol-black.svg"
			alt=""
			width="40"
			height="40"
			aria-hidden="true"
		/>
		<p class="footer-tagline">Open standards. Public excellence.</p>
		<p class="footer-meta">
			AAIF · Linux Foundation ·
			<a href="https://aaif.io" target="_blank" rel="noopener">aaif.io</a>
		</p>
		<PageActions
			headline="Founding AAIF Ambassador — open agent standards."
			point1="Selected for excellence. Shipping MCP · A2A · goose · AGENTS.md · agentgateway."
			point2="Public work. AAIF-verified. Linux Foundation home."
			url="https://faf.one/aaif"
			hashtags="AAIF,MCP,A2A,AGENTS,opensource"
		/>
	</section>
</main>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem 3rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		color: #111;
		line-height: 1.65;
	}

	.hero {
		text-align: center;
		padding: 3rem 0 2rem;
		border-bottom: 1px solid #e8e8e8;
		margin-bottom: 2rem;
	}

	.aaif-logo {
		display: block;
		margin: 0 auto 1.25rem;
		max-width: min(280px, 80vw);
		height: auto;
	}

	.kicker {
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #555;
		margin: 0 0 0.5rem;
	}

	.hero h1 {
		font-size: clamp(1.45rem, 4vw, 1.85rem);
		font-weight: 800;
		line-height: 1.25;
		margin: 0 0 0.75rem;
		color: #000;
	}

	.sub {
		font-size: 1.05rem;
		color: #333;
		margin: 0 0 1.25rem;
	}

	.heritage {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.pill {
		display: inline-block;
		font-size: 0.82rem;
		line-height: 1.4;
		padding: 0.35rem 0.7rem;
		border: 1px solid #ddd;
		border-radius: 999px;
		background: #fafafa;
		color: #333;
	}

	.pill a {
		color: #000;
		font-weight: 600;
		text-underline-offset: 2px;
	}

	.content {
		margin-bottom: 2.25rem;
	}

	.content h2 {
		font-size: 1.25rem;
		font-weight: 800;
		margin: 0 0 0.75rem;
		color: #000;
		border-bottom: 2px solid #ff6b35;
		padding-bottom: 0.35rem;
		display: inline-block;
	}

	.content p {
		margin: 0 0 0.85rem;
	}

	.projects {
		margin: 0.5rem 0 1rem 1.1rem;
		padding: 0;
	}

	.projects li {
		margin-bottom: 0.35rem;
	}

	.links-row {
		font-size: 0.95rem;
	}

	.links-row a,
	.further a,
	.contrib a {
		color: #000;
		font-weight: 600;
		text-underline-offset: 2px;
	}

	.links-row a:hover,
	.further a:hover,
	.contrib a:hover {
		color: #ff6b35;
	}

	.ambassador-row {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.ambassador-copy {
		flex: 1;
		min-width: 0;
	}

	.badge {
		flex-shrink: 0;
		width: 140px;
		height: 140px;
		object-fit: contain;
		border-radius: 12px;
	}

	.verified-steps {
		margin: 0.5rem 0 1rem 1.15rem;
		padding: 0;
	}

	.verified-steps li {
		margin-bottom: 0.4rem;
	}

	.muted-note {
		font-size: 0.88rem;
		color: #555;
		line-height: 1.55;
	}

	.contrib {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.92rem;
		margin: 0.75rem 0 0.75rem;
	}

	.contrib th,
	.contrib td {
		text-align: left;
		padding: 0.55rem 0.4rem;
		border-bottom: 1px solid #e8e8e8;
		vertical-align: top;
	}

	.contrib th {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #666;
		font-weight: 700;
	}

	.contrib td:nth-child(2),
	.contrib th:nth-child(2) {
		white-space: nowrap;
	}

	.further {
		margin: 0.5rem 0 0 1.1rem;
		padding: 0;
	}

	.further li {
		margin-bottom: 0.4rem;
	}

	.footer-section {
		text-align: center;
		padding-top: 1rem;
		border-top: 1px solid #e8e8e8;
	}

	.symbol {
		display: block;
		margin: 0 auto 0.75rem;
		opacity: 0.9;
	}

	.footer-tagline {
		font-weight: 800;
		font-size: 1.05rem;
		margin: 0 0 0.35rem !important;
	}

	.footer-meta {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 1.25rem !important;
	}

	.footer-meta a {
		color: #000;
		font-weight: 600;
	}

	@media (max-width: 560px) {
		.ambassador-row {
			flex-direction: column-reverse;
			align-items: center;
			text-align: center;
		}

		.badge {
			width: 120px;
			height: 120px;
		}

	}
</style>
