<script>
	import PageActions from '#lib/components/PageActions.svelte';

	let copied = $state('');
	function copy(text) {
		try {
			navigator.clipboard.writeText(text).then(() => {
				copied = text;
				setTimeout(() => (copied = ''), 1600);
			});
		} catch (e) {}
	}
</script>

<svelte:head>
	<title>Claude + .faf — your project, known to Claude</title>
	<meta
		name="description"
		content="Claude graded its own grounding on faf-cli: 1/9 without context, 8/9 with the .faf. claude-faf-mcp brings your project.faf to Claude Code, Claude Desktop and claude.ai. IANA-registered, 150k+ downloads."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&display=swap"
		rel="stylesheet"
	/>

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Your project, known to Claude." />
	<meta
		property="og:description"
		content="Claude graded its own grounding on faf-cli: 1/9 without context, 8/9 with the .faf. Measure yours: npx faf-cli bench"
	/>
	<meta property="og:url" content="https://www.faf.one/claude" />
	<meta property="og:image" content="https://www.faf.one/cards/claude-faf-cli.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Your project, known to Claude." />
	<meta
		name="twitter:description"
		content="Claude graded its own grounding: 1/9 without context, 8/9 with the .faf. Measure yours in one command."
	/>
	<meta name="twitter:image" content="https://www.faf.one/cards/claude-faf-cli.png" />
</svelte:head>

<main class="page">
	<!-- Hero -->
	<section class="hero">
		<div class="hero-text">
			<p class="eyebrow">
				<img src="/logos/claude-starburst-clay.svg" alt="" width="18" height="18" /> For Claude
			</p>
			<h1>Your project, known to Claude.</h1>
			<p class="lede">
				With claude-faf-mcp, Claude reads your <code>project.faf</code>: the stack, the goal and who
				it's for. In Claude Code, Claude Desktop and claude.ai. Keep your <code>CLAUDE.md</code>.
			</p>
			<div class="hero-cta">
				<button class="btn btn-solid" onclick={() => copy('claude mcp add faf -- npx -y claude-faf-mcp')}>
					{copied === 'claude mcp add faf -- npx -y claude-faf-mcp' ? 'Copied' : 'Add to Claude Code'}
				</button>
				<a class="btn btn-outline" href="#measure">Measure the gap</a>
			</div>
		</div>
		<div class="bench-card">
			<p class="bench-title">Claude graded its own grounding on faf-cli</p>
			<div class="bench-pair">
				<div>
					<span class="bench-num">1<span class="denom">/9</span></span>
					<span class="bench-label">without context</span>
				</div>
				<span class="bench-arrow">&rarr;</span>
				<div>
					<span class="bench-num win">8<span class="denom">/9</span></span>
					<span class="bench-label">with context</span>
				</div>
			</div>
			<a class="bench-link" href="/bench">See every receipt &rarr;</a>
		</div>
	</section>

	<!-- Where -->
	<section class="where">
		<p class="where-label">Works where you use Claude</p>
		<div class="tiles">
			<div class="tile">
				<img src="/logos/claude-code-logo.svg" alt="" width="28" height="28" />
				<span class="tile-name">Claude Code</span>
				<code>claude mcp add faf -- npx -y claude-faf-mcp</code>
			</div>
			<div class="tile">
				<img src="/logos/claude-starburst-clay.svg" alt="" width="28" height="28" />
				<span class="tile-name">Claude Desktop</span>
				<code>one-click .mcpb from the release</code>
			</div>
			<div class="tile">
				<img src="/logos/claude-starburst-clay.svg" alt="" width="28" height="28" />
				<span class="tile-name">claude.ai</span>
				<code>mcpaas.live/claude/mcp/v1</code>
			</div>
		</div>
	</section>

	<!-- Blind spot -->
	<section class="block">
		<h2>This is a blind spot.</h2>
		<p class="block-lede">CLAUDE.md is doing your context. There are two lanes, not one.</p>
		<div class="lanes">
			<div class="lane faf">
				<span class="lane-tag">Context</span>
				<span class="lane-file">project.faf</span>
				<p>
					Structured YAML: verified facts, derived from your repo, the human ones approved by you. The
					same on every read: the stack, the goal, who it's for.
				</p>
			</div>
			<div class="lane md">
				<span class="lane-tag">Instructions</span>
				<span class="lane-file">CLAUDE.md</span>
				<p>The agent's playbook: conventions, commands, the house style. CLAUDE.md rules here.</p>
			</div>
		</div>
		<p class="doctrine">FAF defines. CLAUDE.md instructs. Claude codes.</p>
	</section>

	<!-- Context Over MCP -->
	<section class="block">
		<h2>Context Over MCP, in Claude</h2>
		<p class="block-lede">
			claude-faf-mcp brings your project's context to Claude over MCP. One <code>project.faf</code>, the
			same always-33 score faf-cli gives, everywhere Claude runs.
		</p>
		<div class="feature-grid">
			<div class="feature">
				<span class="feature-key">Core 14 tools</span>
				<span class="feature-val">30 with <code>FAF_TOOLS=all</code></span>
			</div>
			<div class="feature">
				<span class="feature-key">Always-33</span>
				<span class="feature-val">one score, the same as faf-cli</span>
			</div>
			<div class="feature">
				<span class="feature-key">v7</span>
				<span class="feature-val">The Always33 Edition</span>
			</div>
		</div>
		<p class="more">
			<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener"
				>claude-faf-mcp on GitHub</a
			>
			·
			<a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener">npm</a>
			·
			<a
				href="https://registry.modelcontextprotocol.io/v0.1/servers/one.faf%2Fclaude-faf-mcp/versions/latest"
				target="_blank"
				rel="noopener">MCP Registry</a
			>
		</p>
	</section>

	<!-- Receipts -->
	<section class="block">
		<h2>Receipts, not adjectives.</h2>
		<div class="receipts">
			<a
				class="receipt"
				href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
				target="_blank"
				rel="noopener"
			>
				<span class="receipt-key">IANA</span>
				<span class="receipt-val">registered media type</span>
			</a>
			<a
				class="receipt"
				href="https://github.com/modelcontextprotocol/servers/pull/2759"
				target="_blank"
				rel="noopener"
			>
				<span class="receipt-key">Anthropic</span>
				<span class="receipt-val">merged Oct 2025 · #2759</span>
			</a>
			<a class="receipt" href="/blog/hundred-fifty-thousand">
				<span class="receipt-key">150k+</span>
				<span class="receipt-val">downloads</span>
			</a>
			<a
				class="receipt"
				href="https://registry.modelcontextprotocol.io/v0.1/servers/one.faf%2Fclaude-faf-mcp/versions/latest"
				target="_blank"
				rel="noopener"
			>
				<span class="receipt-key">MCP Registry</span>
				<span class="receipt-val">one.faf/claude-faf-mcp</span>
			</a>
		</div>
	</section>

	<!-- Measure -->
	<section class="block measure" id="measure">
		<h2>Measure your own, in one command</h2>
		<p class="block-lede">Run the bench on your repo. Keep your <code>CLAUDE.md</code>. Nothing replaced.</p>
		<button class="terminal" onclick={() => copy('npx faf-cli bench')}>
			<code>npx faf-cli bench</code>
			<span class="copy-hint">{copied === 'npx faf-cli bench' ? 'Copied' : 'Copy'}</span>
		</button>
		<p class="note">
			Get your two numbers: cold, and with a <code>.faf</code>. The gap is what your agent has been
			guessing.
		</p>
	</section>

	<!-- FAQ -->
	<section class="block faq">
		<h2>"What does it do that CLAUDE.md doesn't?"</h2>
		<p>
			The fair question, and the honest answer isn't an argument: it's a number. CLAUDE.md is a keeper,
			but why waste tokens and leave context to guesswork? We measured it and fixed it, so you don't have
			to.
		</p>
		<p>
			The <code>.faf</code> adds the structured layer CLAUDE.md was never meant to be: deterministic facts,
			the same every read,
			<a
				href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
				target="_blank"
				rel="noopener">IANA-registered</a
			>. Run the bench, keep both files, and let the gap decide.
		</p>
	</section>

	<section class="block closing">
		<p class="closing-line">Don't argue context. Measure it.</p>
		<p class="closing-sub">Share the number with your team. It's their agent too.</p>
		<p class="credit">Claude and Claude Code marks © Anthropic.</p>
	</section>

	<PageActions
		headline="Claude graded its own grounding: 1/9 without context, 8/9 with the .faf."
		point1="Your CLAUDE.md instructs. The .faf defines. Keep both."
		point2="Measure your repo: npx faf-cli bench"
		url="https://www.faf.one/claude"
		hashtags="Claude,Anthropic,AI,Context"
	/>
</main>

<style>
	/* Theme-locked light page in Anthropic's palette. */
	:global(:root:not([data-theme='dark']) body) {
		background: #faf9f5;
		color: #141413;
	}
	.page {
		--ink: #141413;
		--body: #3d3d3a;
		--muted: #5e5d59;
		--line: #e8e6dc;
		--card: #ffffff;
		--cream: #faf9f5;
		--orange: #ff6b35;
		--code-bg: #f0eee6;
		--solid-bg: #141413;
		--solid-fg: #ffffff;
		--solid-hover: #30302e;
		--outline: #c9c7bd;
		--term-bg: #141413;
		--shadow: rgba(20, 20, 19, 0.05);
		--serif: 'Source Serif 4', Georgia, 'Times New Roman', serif;
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 24px 72px;
		color: var(--ink);
		background: transparent;
	}
	:global([data-theme='dark']) .page {
		--ink: #f5f4ef;
		--body: #d9d7cf;
		--muted: #a9a79f;
		--line: #2f2e2b;
		--card: #1d1c1a;
		--code-bg: #2a2926;
		--solid-bg: #f5f4ef;
		--solid-fg: #141413;
		--solid-hover: #ffffff;
		--outline: #55534d;
		--term-bg: #0b0b0a;
		--shadow: rgba(0, 0, 0, 0.35);
	}
	.page code {
		border: 0;
		box-shadow: none;
		outline: 0;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.88em;
		background: var(--code-bg);
		color: var(--ink);
		padding: 1px 6px;
		border-radius: 5px;
	}

	/* Hero */
	.hero {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		gap: 48px;
		align-items: center;
		padding: 72px 0 48px;
	}
	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 15px;
		font-weight: 500;
		color: var(--muted);
		margin: 0 0 18px;
	}
	h1 {
		font-family: var(--serif);
		font-weight: 400;
		font-size: clamp(44px, 6vw, 68px);
		line-height: 1.05;
		letter-spacing: -0.02em;
		margin: 0 0 22px;
		color: var(--ink);
	}
	.lede {
		font-size: 19px;
		line-height: 1.55;
		color: var(--body);
		margin: 0 0 30px;
		max-width: 520px;
	}
	.hero-cta {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 46px;
		padding: 0 22px;
		border-radius: 8px;
		font-size: 16px;
		font-weight: 500;
		text-decoration: none;
		cursor: pointer;
		font-family: inherit;
	}
	.btn-solid {
		background: var(--solid-bg);
		color: var(--solid-fg);
		border: 1px solid var(--solid-bg);
	}
	.btn-solid:hover {
		background: var(--solid-hover);
	}
	.btn-outline {
		background: transparent;
		color: var(--ink);
		border: 1px solid var(--outline);
	}
	.btn-outline:hover {
		border-color: var(--ink);
	}

	.bench-card {
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: 16px;
		padding: 28px;
		box-shadow: 0 8px 30px var(--shadow);
	}
	.bench-title {
		font-size: 15px;
		color: var(--muted);
		margin: 0 0 18px;
	}
	.bench-pair {
		display: flex;
		align-items: flex-end;
		gap: 22px;
	}
	.bench-pair > div {
		display: flex;
		flex-direction: column;
	}
	.bench-num {
		font-family: var(--serif);
		font-size: 72px;
		line-height: 1;
		color: var(--ink);
	}
	.bench-num.win {
		color: var(--orange);
	}
	.denom {
		font-size: 28px;
		color: var(--muted);
	}
	.bench-label {
		font-size: 14px;
		color: var(--muted);
		margin-top: 6px;
	}
	.bench-arrow {
		font-size: 30px;
		color: var(--muted);
		padding-bottom: 30px;
	}
	.bench-link {
		display: inline-block;
		margin-top: 20px;
		font-size: 15px;
		color: var(--ink);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* Where */
	.where {
		padding: 8px 0 24px;
	}
	.where-label {
		text-align: center;
		font-size: 15px;
		color: var(--muted);
		margin: 0 0 16px;
	}
	.tiles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}
	.tile {
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: 14px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.tile-name {
		font-weight: 600;
		font-size: 17px;
		color: var(--ink);
	}
	.tile code {
		font-size: 13px;
		word-break: break-all;
		background: transparent;
		padding: 0;
		color: var(--muted);
	}

	/* Blocks */
	.block {
		padding: 56px 0 8px;
		max-width: 760px;
		margin: 0 auto;
	}
	h2 {
		font-family: var(--serif);
		font-weight: 400;
		font-size: clamp(30px, 4vw, 42px);
		letter-spacing: -0.015em;
		line-height: 1.15;
		margin: 0 0 14px;
		color: var(--ink);
	}
	.block-lede {
		font-size: 18px;
		line-height: 1.6;
		color: var(--body);
		margin: 0 0 24px;
	}
	.lanes {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
	.lane {
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: 14px;
		padding: 22px;
		border-top-width: 4px;
	}
	.lane.faf {
		border-top-color: var(--orange);
	}
	.lane.md {
		border-top-color: var(--ink);
	}
	.lane-tag {
		display: block;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.lane-file {
		display: block;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 19px;
		font-weight: 700;
		margin: 6px 0 10px;
		color: var(--ink);
	}
	.lane p {
		margin: 0;
		font-size: 15px;
		line-height: 1.55;
		color: var(--body);
	}
	.doctrine {
		text-align: center;
		font-family: var(--serif);
		font-size: 24px;
		margin: 28px 0 0;
		color: var(--ink);
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}
	.feature,
	.receipt {
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: 14px;
		padding: 18px 20px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		text-decoration: none;
	}
	.receipt:hover {
		border-color: var(--outline);
	}
	.feature-key,
	.receipt-key {
		font-weight: 700;
		font-size: 17px;
		color: var(--ink);
	}
	.feature-val,
	.receipt-val {
		font-size: 14px;
		color: var(--muted);
	}
	.more {
		margin: 18px 0 0;
		font-size: 15px;
		color: var(--muted);
	}
	.more a,
	.faq a {
		color: var(--ink);
		text-underline-offset: 3px;
	}
	.receipts {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
	}

	.terminal {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background: var(--term-bg);
		border: 1px solid var(--line);
		border-radius: 12px;
		padding: 18px 20px;
		cursor: pointer;
		font-family: inherit;
	}
	.terminal code {
		background: transparent;
		color: #00ff88;
		font-size: 17px;
		padding: 0;
	}
	.copy-hint {
		color: #ffffff;
		font-size: 13px;
		font-weight: 600;
	}
	.note {
		font-size: 15px;
		color: var(--muted);
		margin: 14px 0 0;
		line-height: 1.55;
	}

	.faq p {
		font-size: 17px;
		line-height: 1.65;
		color: var(--body);
		margin: 0 0 16px;
	}
	.closing {
		text-align: center;
	}
	.closing-line {
		font-family: var(--serif);
		font-size: 30px;
		margin: 0 0 8px;
		color: var(--ink);
	}
	.closing-sub {
		font-size: 16px;
		color: var(--muted);
		margin: 0 0 24px;
	}
	.credit {
		font-size: 13px;
		color: var(--muted);
		margin: 0;
	}

	@media (max-width: 860px) {
		.hero {
			grid-template-columns: 1fr;
			padding-top: 48px;
		}
		.tiles,
		.feature-grid {
			grid-template-columns: 1fr;
		}
		.receipts {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 560px) {
		.page {
			padding: 0 16px 56px;
		}
		.lanes,
		.receipts {
			grid-template-columns: 1fr;
		}
	}
</style>
