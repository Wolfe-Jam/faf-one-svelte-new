<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>AAIF — Agentic AI Foundation | FAF</title>
	<meta
		name="description"
		content="AAIF is the Linux Foundation home for open agent standards (MCP · goose · AGENTS.md · agentgateway). James Harrison is a Founding AAIF Ambassador. What AAIF-verified means."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="AAIF — Agentic AI Foundation" />
	<meta
		property="og:description"
		content="Linux Foundation home for open agent standards. Founding AAIF Ambassador · contributions · what AAIF-verified means."
	/>
	<meta property="og:url" content="https://faf.one/aaif" />
	<meta property="og:image" content="https://faf.one/aaif/aaif-og.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="AAIF — Agentic AI Foundation" />
	<meta
		name="twitter:description"
		content="Open agent standards at the Linux Foundation. Founding Ambassador · scorecard · AAIF-verified explained."
	/>
	<meta name="twitter:image" content="https://faf.one/aaif/aaif-og.png" />
	<link rel="canonical" href="https://faf.one/aaif" />
</svelte:head>

<main class="page">
	<header class="hero">
		<img
			class="aaif-logo"
			src="/aaif/aaif-primary-black.svg"
			alt="Agentic AI Foundation"
			width="280"
			height="72"
		/>
		<p class="kicker">Agentic AI Foundation</p>
		<h1>Open agent standards, under the Linux Foundation</h1>
		<p class="sub">
			MCP · goose · AGENTS.md · agentgateway — and the public work that ships them.
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
			The <strong>Agentic AI Foundation (AAIF)</strong> is the vendor-neutral home for the open projects that
			shape agentic AI infrastructure. It is a
			<a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener">Linux Foundation</a>
			project — not a product seal and not a single-vendor forum.
		</p>
		<ul class="projects">
			<li>
				<strong>MCP</strong> — Model Context Protocol (tool/context interface for agents)
			</li>
			<li><strong>goose</strong> — open agent runtime</li>
			<li><strong>AGENTS.md</strong> — the agent instruction file for a repo</li>
			<li><strong>agentgateway</strong> — gateway layer for agent traffic</li>
		</ul>
		<p class="links-row">
			<a href="https://aaif.io" target="_blank" rel="noopener">aaif.io</a>
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
					<strong>Founding AAIF Ambassador</strong> — inaugural cohort, 2026. Ambassadors ship
					<strong>public, project-based contributions</strong> that help developers use AAIF projects:
					guides, tutorials, tools, and code.
				</p>
				<p>
					Program norm: substance over promo. Work is submitted through the Ambassador process, scored,
					and tracked on the public scoreboard.
				</p>
				<p class="links-row">
					<a href="/blog/aaif-ambassador">Announcement</a>
					·
					<a href="https://github.com/aaif/ambassadors" target="_blank" rel="noopener"
						>aaif/ambassadors</a
					>
				</p>
			</div>
			<img
				class="badge"
				src="/aaif/aaif-ambassador-badge.png"
				alt="AAIF Ambassador badge 2026 — Agentic AI Foundation, hosted by the Linux Foundation"
				width="160"
				height="160"
			/>
		</div>
	</section>

	<section class="content">
		<h2>What “AAIF-verified” means here</h2>
		<p>
			On FAF surfaces, <strong>AAIF-verified</strong> is a shorthand for work that has gone through the
			<strong>Ambassador scorecard path</strong>:
		</p>
		<ol class="verified-steps">
			<li>Public contribution to an AAIF project (MCP · goose · AGENTS.md · agentgateway · related education)</li>
			<li>Submitted via the <a href="https://github.com/aaif/ambassadors" target="_blank" rel="noopener">Ambassador submissions</a> process</li>
			<li>Scored and recorded on the Ambassador scoreboard / scorecard</li>
		</ol>
		<p class="note">
			It is <strong>not</strong> a formal foundation product certification, security audit, or LF endorsement of
			a company. It means: the contribution was real, public, and accepted through the Ambassador program.
		</p>
	</section>

	<section class="content">
		<h2>Scoreboard snapshot</h2>
		<p class="scoreline">
			<strong>165 pts</strong> · rank <strong>#4</strong> · <strong>10</strong> contributions
			<span class="as-of">as of 2026-07-30 UTC</span>
		</p>
		<p class="by-project">
			By project: AGENTS.md <strong>135</strong> · goose <strong>15</strong> · MCP <strong>15</strong>
		</p>
		<p class="links-row muted">
			Live board:
			<a href="https://github.com/aaif/ambassadors" target="_blank" rel="noopener">aaif/ambassadors</a>
			(scoreboard in-repo)
		</p>
	</section>

	<section class="content">
		<h2>Contributions (public)</h2>
		<table class="contrib">
			<thead>
				<tr>
					<th>Work</th>
					<th>Project</th>
					<th>Pts</th>
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
					<td>135</td>
				</tr>
				<tr>
					<td>
						<a href="https://github.com/aaif-goose/goose/pull/10618" target="_blank" rel="noopener"
							>goose #10618</a
						>
						— Cursor composer-2.5 models
					</td>
					<td>goose</td>
					<td>15</td>
				</tr>
				<tr>
					<td>
						<a href="https://github.com/Wolfe-Jam/mcp-better" target="_blank" rel="noopener"
							>mcp-better</a
						>
						— 7/28 textbook MCP (Rust)
					</td>
					<td>MCP</td>
					<td>15</td>
				</tr>
			</tbody>
		</table>
		<p class="muted-note">
			Totals follow the Ambassador scoreboard (2026-07-30). Official AAIF amplify of the hands-on tutorial:
			<a href="https://x.com/AgenticAIFdn/status/2077377737258369345" target="_blank" rel="noopener">@AgenticAIFdn</a>
			·
			<a
				href="https://www.linkedin.com/posts/agentic-ai-foundation_mcp728-activity-7483143434686476288-qTV3"
				target="_blank"
				rel="noopener">LinkedIn</a
			>
			(recognition, not extra points).
		</p>
	</section>

	<section class="content">
		<h2>Further reading</h2>
		<ul class="further">
			<li><a href="/agents">faf.one/agents</a> — AGENTS.md field guide (BETTER / BEST)</li>
			<li><a href="/mcp">faf.one/mcp</a> — MCP + .faf</li>
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
			src="/aaif/aaif-symbol-black.svg"
			alt=""
			width="40"
			height="40"
			aria-hidden="true"
		/>
		<p class="footer-tagline">Open standards, in the open.</p>
		<p class="footer-meta">
			AAIF · Linux Foundation ·
			<a href="https://aaif.io" target="_blank" rel="noopener">aaif.io</a>
		</p>
		<PageActions
			headline="Open agent standards at the Linux Foundation."
			point1="AAIF: MCP · goose · AGENTS.md · agentgateway."
			point2="Founding Ambassador work is public and scorecarded."
			url="https://faf.one/aaif"
			hashtags="AAIF,MCP,AGENTS,opensource"
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

	.note {
		padding: 0.85rem 1rem;
		background: #f7f7f7;
		border-left: 3px solid #000;
		font-size: 0.95rem;
	}

	.scoreline {
		font-size: 1.15rem;
		margin-bottom: 0.35rem !important;
	}

	.as-of {
		display: inline-block;
		margin-left: 0.35rem;
		font-size: 0.85rem;
		font-weight: 500;
		color: #666;
	}

	.by-project {
		color: #333;
	}

	.muted {
		color: #555;
		font-size: 0.9rem;
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
	.contrib td:nth-child(3),
	.contrib th:nth-child(2),
	.contrib th:nth-child(3) {
		white-space: nowrap;
	}

	.contrib td:nth-child(3) {
		font-variant-numeric: tabular-nums;
		font-weight: 700;
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

		.contrib td:nth-child(2) {
			display: none;
		}

		.contrib th:nth-child(2) {
			display: none;
		}
	}
</style>
