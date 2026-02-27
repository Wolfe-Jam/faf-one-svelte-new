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
	<title>December 2025: Anthropic Owns Bun, MCP Goes Linux Foundation | FAF</title>
	<meta name="description" content="Three major announcements validate FAF's ecosystem bet: Anthropic acquires Bun, MCP joins Linux Foundation, Google launches MCP servers." />
	<meta property="og:title" content="December 2025: We Bet on the Right Stack" />
	<meta property="og:description" content="Anthropic owns Bun. MCP goes to Linux Foundation. Google joins. FAF was already there." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / December 2025 Ecosystem
		</div>
		<h1>We Bet on the Right Stack</h1>
		<p class="subtitle">December 2025: Three announcements that validate FAF's position</p>
		<div class="meta">
			<time datetime="2025-12-28">December 28, 2025</time>
			<span class="separator">•</span>
			<span class="category">Ecosystem</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				Three major announcements in December 2025 changed the AI infrastructure landscape. FAF was already positioned in each one.
			</p>
		</section>

		<section class="announcement">
			<h2>1. Anthropic Acquires Bun</h2>
			<div class="date-badge">December 2, 2025</div>
			<p>
				Anthropic acquired <a href="https://bun.sh" target="_blank" rel="noopener">Bun</a>, the high-performance JavaScript runtime. Claude Code now runs on Bun. The acquisition puts Bun at the center of Anthropic's developer tooling strategy.
			</p>
			<div class="faf-position">
				<h3>FAF Was There</h3>
				<p>
					We launched <a href="/blog/bun-sticky-launch"><strong>bun-sticky-faf</strong></a> on December 22 - a zero-dependency FAF scoring CLI built entirely on Bun APIs. 333 tests. Pure TypeScript.
				</p>
				<div class="copy-box" onclick={() => copyText('bun add -g bun-sticky-faf', 'bun-install')}>
					<code class="copy-code">bun add -g bun-sticky-faf</code>
					<button class="copy-btn">{copiedId === 'bun-install' ? 'Copied!' : 'Copy'}</button>
				</div>
				<div class="copy-box" onclick={() => copyText('bun-sticky score', 'bun-score')}>
					<code class="copy-code">bun-sticky score</code>
					<button class="copy-btn">{copiedId === 'bun-score' ? 'Copied!' : 'Copy'}</button>
				</div>
			</div>
		</section>

		<section class="announcement">
			<h2>2. MCP Joins Linux Foundation</h2>
			<div class="date-badge">December 9, 2025</div>
			<p>
				Anthropic <a href="https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation" target="_blank" rel="noopener">donated the Model Context Protocol</a> to the newly established Agentic AI Foundation (AAIF) under the Linux Foundation.
			</p>
			<div class="founders-grid">
				<div class="founder-group">
					<h4>Co-Founders</h4>
					<ul>
						<li>Anthropic</li>
						<li>OpenAI</li>
						<li>Block</li>
					</ul>
				</div>
				<div class="founder-group">
					<h4>Supporters</h4>
					<ul>
						<li>Google</li>
						<li>Microsoft</li>
						<li>AWS</li>
						<li>Cloudflare</li>
						<li>Bloomberg</li>
					</ul>
				</div>
			</div>
			<p class="stats">
				MCP now has <strong>97 million monthly SDK downloads</strong> and <strong>10,000+ active servers</strong>.
			</p>
			<div class="faf-position">
				<h3>FAF Was There</h3>
				<p>
					<strong>claude-faf-mcp</strong> is an Anthropic-approved MCP server, merged to the official registry (PR #2759, October 17, 2025). We were MCP before MCP went mainstream.
				</p>
			</div>
		</section>

		<section class="announcement">
			<h2>3. Google Launches Managed MCP Servers</h2>
			<div class="date-badge">December 10, 2025</div>
			<p>
				Google <a href="https://techcrunch.com/2025/12/10/google-is-going-all-in-on-mcp-servers-agent-ready-by-design/" target="_blank" rel="noopener">launched fully managed MCP servers</a> for their services, following the Gemini 3 release.
			</p>
			<div class="services-grid">
				<span class="service">Google Maps</span>
				<span class="service">BigQuery</span>
				<span class="service">Compute Engine</span>
				<span class="service">Kubernetes Engine</span>
			</div>
			<div class="faf-position">
				<h3>What This Means</h3>
				<p>
					Every major AI company - Anthropic, OpenAI, Google, Microsoft, AWS - has now adopted MCP. The protocol FAF was built on is now the industry standard.
				</p>
			</div>
		</section>

		<section class="summary">
			<h2>The Stack We Bet On</h2>
			<div class="stack-table">
				<div class="stack-row">
					<span class="stack-item">Bun</span>
					<span class="stack-status owned">Owned by Anthropic</span>
				</div>
				<div class="stack-row">
					<span class="stack-item">MCP</span>
					<span class="stack-status foundation">Linux Foundation</span>
				</div>
				<div class="stack-row">
					<span class="stack-item">.faf</span>
					<span class="stack-status iana">IANA-Registered</span>
				</div>
			</div>
			<p class="summary-text">
				20k+ ecosystem downloads. Anthropic-approved. Building on infrastructure that's now industry standard.
			</p>
		</section>

		<section class="links-section">
			<h2>Resources</h2>
			<div class="links">
				<a href="https://www.npmjs.com/package/bun-sticky-faf" class="link-button bun-button" target="_blank">
					bun-sticky-faf
				</a>
				<a href="https://www.npmjs.com/package/claude-faf-mcp" class="link-button mcp-button" target="_blank">
					claude-faf-mcp
				</a>
				<a href="https://www.npmjs.com/package/faf-cli" class="link-button cli-button" target="_blank">
					faf-cli
				</a>
			</div>
		</section>

		<section class="conclusion">
			<p class="tagline">
				<strong>Right stack. Right time. Right position.</strong>
			</p>
		</section>
	</article>

	<footer class="post-footer">
		<div class="author">
			<p>Published by <strong>wolfejam</strong></p>
			<p class="tagline-footer">F1-Inspired Software Engineering</p>
		</div>
	</footer>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-cyan-dark);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: var(--faf-orange);
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #666;
		margin: 0.5rem 0;
		font-weight: 400;
	}

	.meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.875rem;
		color: #666;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.separator {
		color: #ccc;
	}

	.category {
		color: var(--faf-cyan-dark);
		font-weight: 500;
	}

	.post-content {
		font-size: 1.125rem;
	}

	.intro {
		margin-bottom: 3rem;
	}

	.lead {
		font-size: 1.25rem;
		color: #333;
		margin: 1rem 0;
		font-weight: 400;
	}

	section.announcement {
		margin: 3rem 0;
		padding: 2rem;
		background: #fafafa;
		border-radius: 12px;
		border-left: 4px solid var(--faf-orange);
	}

	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: #1a1a1a;
	}

	h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 1rem 0 0.5rem;
		color: var(--faf-orange);
	}

	h4 {
		font-size: 0.875rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.date-badge {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 600;
		color: #666;
		background: #e5e5e5;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		margin-bottom: 1rem;
	}

	a {
		color: var(--faf-cyan-dark);
	}

	.faf-position {
		margin-top: 1.5rem;
		padding: 1.5rem;
		background: white;
		border-radius: 8px;
		border: 2px solid var(--faf-orange);
	}

	.faf-position h3 {
		margin-top: 0;
	}

	.code-block {
		background: #1a1a1a;
		color: var(--faf-cyan-dark);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		margin: 1rem 0 0 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.code-block code {
		background: none;
		padding: 0;
		color: inherit;
	}

	.founders-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.founder-group ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.founder-group li {
		padding: 0.25rem 0;
		font-weight: 500;
	}

	.stats {
		font-size: 1rem;
		color: #666;
		font-style: italic;
	}

	.services-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.service {
		background: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 500;
		border: 1px solid #e5e5e5;
	}

	.summary {
		margin: 3rem 0;
	}

	.stack-table {
		margin: 1.5rem 0;
	}

	.stack-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: #fafafa;
		border-radius: 8px;
		margin-bottom: 0.5rem;
	}

	.stack-item {
		font-weight: 700;
		font-size: 1.125rem;
	}

	.stack-status {
		font-size: 0.875rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
	}

	.stack-status.owned {
		background: #FF6B35;
		color: white;
	}

	.stack-status.foundation {
		background: #1a1a1a;
		color: white;
	}

	.stack-status.iana {
		background: var(--faf-cyan-dark);
		color: white;
	}

	.summary-text {
		text-align: center;
		color: #666;
		margin-top: 1.5rem;
	}

	.links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.link-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.bun-button {
		background: #FBF0DF;
		color: #1a1a1a;
		border: 2px solid #1a1a1a;
	}

	.mcp-button {
		background: var(--faf-orange);
	}

	.cli-button {
		background: var(--faf-cyan-dark);
	}

	.link-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.conclusion {
		margin-top: 3rem;
		text-align: center;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(12, 192, 223, 0.05) 100%);
		border-radius: 12px;
	}

	.tagline {
		font-size: 1.5rem;
		color: #1a1a1a;
		margin: 0;
	}

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
	}

	.author {
		text-align: center;
	}

	.author p {
		margin: 0.5rem 0;
	}

	.tagline-footer {
		color: #666;
		font-size: 0.875rem;
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
	.copy-code-multi {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
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

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		section.announcement {
			padding: 1.5rem;
		}

		.founders-grid {
			grid-template-columns: 1fr;
		}

		.links {
			flex-direction: column;
		}

		.link-button {
			display: block;
			width: 100%;
			text-align: center;
		}
	}
</style>
