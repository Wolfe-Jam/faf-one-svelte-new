<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>/slash — Token Optimization for Context Engineers | FAF</title>
	<meta name="description" content="One import. Every LLM call optimized. 4.8 KB WASM. Sub-ms. 90%+ tokens salvaged. From the FAF team." />
	<meta property="og:title" content="/slash — Token Optimization for Context Engineers" />
	<meta property="og:description" content="One import. Every LLM call optimized. 4.8 KB WASM. 90%+ tokens salvaged." />
	<meta property="og:image" content="https://slashtokens.com/og.jpg" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://slashtokens.com/og.jpg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / /slash Launch
		</div>

		<h1>I've Been Here Before</h1>
		<p class="version-tag">slash-tokens v1.2.0</p>
		<p class="subtitle">Token Optimization for Context Engineers</p>
		<div class="meta">
			<time datetime="2026-04-08">April 8, 2026</time>
			<span class="separator">|</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="https://slashtokens.com/og.jpg" alt="The Evaluator — slashing token costs with lightning" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> I built FAF to fix Context. Senior devs shrugged. This time I'm doing Tokens. This time your boss is listening.
			</p>
		</section>

		<section>
			<h2>The Pattern</h2>
			<p>Two years ago I built FAF — a way to give AI context about your project. IANA registered the format. 50,000 downloads across three registries. It works.</p>
			<p>But here's what I learned: <strong>context is philosophical. Tokens are invoices.</strong></p>
			<p>By the time you find out a call was a miss, <span class="red">you already paid.</span></p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<p>I evaluated the top AI repos on GitHub. Combined annual token sunk cost:</p>

			<div class="big-number">$480K/yr</div>
			<p class="big-sub">From 8 public repos. Production is 10-100x that.</p>

			<div class="proof-grid">
				<div class="proof-card">
					<div class="proof-name">microsoft/semantic-kernel</div>
					<div class="proof-stat">387 AI call sites | <span class="red">$116K/yr</span></div>
				</div>
				<div class="proof-card">
					<div class="proof-name">lobehub/lobe-chat</div>
					<div class="proof-stat">420 AI call sites | <span class="red">$114K/yr</span></div>
				</div>
				<div class="proof-card">
					<div class="proof-name">langchain-ai/langchainjs</div>
					<div class="proof-stat">322 AI call sites | <span class="red">$106K/yr</span></div>
				</div>
			</div>

			<p>And none of them are checking token cost before the call goes out. Not one.</p>
		</section>

		<section>
			<h2>The Fix: One Line</h2>

			<div class="copy-box" role="button" tabindex="0" onclick={()=> copyText("import 'slash-tokens/auto'", 'auto')} onkeydown={(e) => e.key === 'Enter' && copyText("import 'slash-tokens/auto'", 'auto')}>
				<code class="copy-code">import 'slash-tokens/auto'</code>
				<button class="copy-btn">{copiedId === 'auto' ? 'Copied' : 'Copy'}</button>
			</div>

			<p>Every LLM API call — Anthropic, OpenAI, xAI, Google — evaluated pre-call. Routes to the cheapest model that can handle it. Same answer. Less cost.</p>

			<ul>
				<li><strong>Opus task?</strong> Stays on Opus.</li>
				<li><strong>Haiku task on Opus?</strong> Routed to Haiku. 80% cheaper.</li>
				<li><strong>Unnecessary call?</strong> Aborted. 100% saved.</li>
			</ul>

			<p>4.8 KB. Sub-millisecond. Zero dependencies. You don't change how you work. Slash changes what you pay.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" role="button" tabindex="0" onclick={() => copyText('bunx slash-tokens', 'try')} onkeydown={(e) => e.key === 'Enter' && copyText('bunx slash-tokens', 'try')}>
				<code class="copy-code">bunx slash-tokens</code>
				<button class="copy-btn">{copiedId === 'try' ? 'Copied' : 'Copy'}</button>
			</div>

			<p>Run it on any project. See the number. Show your boss.</p>
		</section>

		<section>
			<h2>How It Works</h2>
			<p>Evaluates every API call before it goes out. Salvages tokens you didn't need to send. Aborts unnecessary calls. Routes to a cheaper model when one fits.</p>
			<p><strong>Don't go to the corner shop in a Ferrari.</strong></p>
		</section>

		<section>
			<h2>What It Costs</h2>
			<p><strong class="orange">10%</strong> of what you save. You keep 90%. That's it.</p>
			<p>Day one, every day. Never gonna change. Solo to SpaceX. Same deal.</p>

			<div class="example-box">
				<div>Evaluation returns <strong>$50</strong> saving</div>
				<div>Slash 10% = <span class="orange">$5</span></div>
				<div>You keep <span class="green">$45</span></div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.2.0</strong> — Released April 14, 2026</li>
				<li><strong>99/99</strong> — Tests passing</li>
				<li><strong>10</strong> — Models with built-in pricing</li>
				<li><strong>4.8 KB</strong> — Zig-compiled WASM</li>
				<li><strong>Sub-ms</strong> — Evaluation time</li>
			</ul>
		</section>

		<section>
			<h2>Who's First?</h2>
			<p>The leaderboard is all empty today. Every company. Every repo. Nobody's optimizing pre-call.</p>
			<p>Someone's going to be first. Someone's going to tell the story:</p>
			<p><em>"We adopted /slash. Here's what we saved in month one."</em></p>
		</section>

		<section>
			<h2>Further Reading</h2>
			<ul>
				<li><strong>Grok's Meta Moment</strong> — I asked Grok-4.20 how to cut token costs. Slash intercepted it, routed to Grok-4-1-fast. 90% cheaper. Grok described "intelligent model routing" while being routed. <a href="https://x.com/wolfe_jam" target="_blank">Read the full story on X</a></li>
				<li><strong>The $360M Industry View</strong> — 3-5 trillion tokens/day, 40-80% waste, $110-360M/yr recoverable. The full data with charts. <a href="https://x.com/wolfe_jam" target="_blank">Read the article on X</a></li>
				<li><strong>FAQ</strong> — What is Slash? How does it work? What does it cost? Can I cancel? <a href="https://slashtokens.com/faq">slashtokens.com/faq</a></li>
			</ul>
		</section>

		<div class="edition-divider">
			<span class="edition-tag">v1.2.0 — April 14, 2026</span>
		</div>

		<section>
			<div class="ferrari-image">
				<img src="/blog/slash-ferrari.png" alt="Don't go to the corner shop in a Ferrari — tokens spilling out" />
				<p class="ferrari-caption">Don't go to the corner shop in a Ferrari.</p>
			</div>

			<h2>The Next.js Edition</h2>
			<p>Six days in. Here's what shipped in v1.2.0:</p>

			<ul>
				<li><strong>Session summary on exit</strong> — every time you stop your dev server, Slash tells you what you saved that session</li>
				<li><strong>90-day transaction history</strong> — full log in the dashboard, expandable with Show All</li>
				<li><strong>Live feed shows $</strong> — dollars saved per call, not raw token counts</li>
				<li><strong>Balance warnings</strong> — yellow at $3, amber at $2, red at $1</li>
				<li><strong>Low balance email</strong> — fires once per threshold, not on every call</li>
			</ul>

			<div class="terminal-block">
				<code>[slash] Session: 47 calls | 23 routed | $0.89 salvaged — The more you build, the more you save</code>
			</div>

			<p>That's what you see when you hit Ctrl+C. Every session. The number only goes up.</p>
		</section>

		<div class="share-section">
			<a href="https://twitter.com/intent/tweet?text=Token%20Optimization%20for%20Context%20Engineers.%20One%20import.%20Every%20LLM%20call%20optimized.%20%E2%9A%A1%2Fslash&url=https%3A%2F%2Fslashtokens.com" target="_blank" class="share-btn">
				Share on X
			</a>
		</div>

		<section class="footer-note">
			<p>
				<a href="https://slashtokens.com" class="orange">slashtokens.com</a> |
				<a href="https://www.npmjs.com/package/slash-tokens">npm</a> |
				<a href="https://github.com/Wolfe-Jam/slash-tokens">GitHub</a> |
				<a href="https://mcpaas.live/slash/dashboard">Dashboard</a>
			</p>
			<p style="margin-top: 1rem; font-size: 0.8rem; color: #666;">
				Built by the <a href="https://faf.one">FAF</a> team — IANA-registered standard for AI Context
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #0a0a0a;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #e0e0e0;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #FF4400;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #888;
	}

	.breadcrumb a {
		color: #FF4400;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.4rem;
		margin: 0.5rem 0;
		color: #f5f5f5;
		line-height: 1.2;
	}

	.version-tag {
		display: inline-block;
		background: #FF4400;
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
		color: #bbb;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #888;
	}

	.separator { color: #444; }

	.category {
		background: #FF4400;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.launch {
		background: #FF4400;
	}

	.hero-image {
		margin: 0 -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: rgba(255, 68, 0, 0.08);
		border-radius: 8px;
		border-left: 4px solid #FF4400;
	}

	h2 {
		font-size: 1.6rem;
		margin: 3rem 0 1.5rem 0;
		color: #f5f5f5;
		border-bottom: 1px solid #222;
		padding-bottom: 0.5rem;
	}

	p { margin-bottom: 1.25rem; }

	ul, ol { margin: 1rem 0 1.5rem 1.5rem; }

	li { margin-bottom: 0.5rem; }

	a { color: #FF4400; }
	a:hover { text-decoration: none; }

	.red { color: #dc2626; font-weight: 700; }
	.orange { color: #FF4400; font-weight: 700; }
	.green { color: var(--faf-green-light); font-weight: 700; }

	.big-number {
		text-align: center;
		font-size: 3rem;
		font-weight: 900;
		color: #dc2626;
		margin: 1.5rem 0 0.5rem;
	}

	.big-sub {
		text-align: center;
		color: #888;
		font-size: 0.9rem;
		margin-bottom: 2rem;
	}

	.proof-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
		margin: 1.5rem 0;
	}

	.proof-card {
		background: #111;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1rem 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.proof-name {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		color: #f5f5f5;
	}

	.proof-stat {
		font-size: 0.8rem;
		color: #888;
	}

	.example-box {
		background: #111;
		border: 1px solid #222;
		border-radius: 10px;
		padding: 1.2rem 1.5rem;
		margin: 1.5rem 0;
		font-family: 'SF Mono', monospace;
		font-size: 0.95rem;
		line-height: 2;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #111;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #FF4400; }

	.copy-code {
		flex: 1;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		color: #FF4400;
		background: transparent;
		padding: 0;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 0;
	}

	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 68, 0, 0.15);
		border: 1px solid rgba(255, 68, 0, 0.3);
		color: #FF4400;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 68, 0, 0.25); border-color: #FF4400; }

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #f5f5f5;
		color: #0a0a0a;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #0a0a0a;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #222;
		font-size: 0.95rem;
		color: #888;
		text-align: center;
	}

	.edition-divider {
		text-align: center;
		margin: 3rem 0 2rem;
		border-top: 2px solid #FF4400;
		padding-top: 1.5rem;
	}

	.edition-tag {
		background: #FF4400;
		color: white;
		padding: 0.3rem 1rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 700;
		font-family: 'SF Mono', monospace;
	}

	.ferrari-image {
		margin: 0 0 2rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.ferrari-image img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
	}

	.ferrari-caption {
		text-align: center;
		font-size: 0.85rem;
		color: #666;
		margin-top: 0.5rem;
		font-style: italic;
	}

	.terminal-block {
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1rem 1.5rem;
		margin: 1.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.85rem;
		color: var(--faf-green-light);
		overflow-x: auto;
	}

	@media (max-width: 768px) {
		h1 { font-size: 1.75rem; }
		.blog-post { padding: 1rem; }
		.proof-card { flex-direction: column; align-items: flex-start; gap: 0.3rem; }
		.big-number { font-size: 2.2rem; }
	}
</style>
