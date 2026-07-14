<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Token Tax — RadioFAF Episode 12 × /slash × Ahead of 4.3 | FAF</title>
	<meta name="description" content="xAI shipped Grok 4.3 beta on April 17. We shipped RadioFAF Episode 12 'The Token Tax' on April 20 — Grok voices Leo, Sal, Ara, Rex, Eve + Nelly the DJ debate /slash while /slash routes every call. 95.6% cheaper, 5.5× faster, same quality. First-mover receipts since January 10." />
	<meta property="og:title" content="The Token Tax — RadioFAF Episode 12 × /slash" />
	<meta property="og:description" content="Grok 4.3 shipped. We shipped first. Ep12 runs on the stack it describes. 95.6% cheaper. 5.5× faster." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/radiofaf-token-tax-hero.jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/radiofaf-token-tax-hero.jpeg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Token Tax
		</div>

		<h1>The Token Tax</h1>
		<p class="subtitle">xAI shipped Grok 4.3 beta on April 17. We shipped <strong>RadioFAF Episode 12 × /slash</strong> three days later. Ahead of the curve — with receipts.</p>
		<div class="meta">
			<time datetime="2026-04-21">April 21, 2026</time>
			<span class="separator">•</span>
			<span class="category grok">Grok</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/radiofaf-token-tax-hero.jpeg" alt="DJ Nelly the elephant and SLASH the Evaluator in the RadioFAF 69.0 FM broadcast studio, under a neon ON AIR sign — Episode 12: The Token Tax × /slash" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Episode 12 of RadioFAF is live at <a href="https://radiofaf.com/ep12" target="_blank">radiofaf.com/ep12</a>. Five AI voices + Nelly the elephant DJ debate <code>/slash</code> — while <code>/slash</code> gates every Grok call that made the episode. Same prompt, two Grok models: <strong>95.6% cheaper, 5.5× faster, same quality.</strong> Fractal demo. Ahead of 4.3.
			</p>
		</section>

		<section>
			<h2>Grok 4.3 shipped. We shipped first.</h2>
			<p>xAI announced Grok 4.3 beta on April 17, 2026. Over on our side of the room, we'd been building with the xAI voice stack since <strong>January 10</strong>. That's not a footnote — that's three months of receipts before the beta even dropped.</p>

			<div class="timeline">
				<div class="milestone">
					<span class="date">Jan 10, 2026</span>
					<span class="event">First xAI Grok Voice Agent integration — Ara voice via LiveKit</span>
				</div>
				<div class="milestone">
					<span class="date">Jan 25, 2026</span>
					<span class="event">Multi-model integration doc shipped (xAI + Claude + Gemini)</span>
				</div>
				<div class="milestone">
					<span class="date">Mar 16, 2026</span>
					<span class="event">xAI Standalone TTS wired into RadioFAF</span>
				</div>
				<div class="milestone">
					<span class="date">Apr 11, 2026</span>
					<span class="event">All 5 expressive voices live — Leo, Sal, Ara, Rex, Eve</span>
				</div>
				<div class="milestone highlight">
					<span class="date">Apr 17, 2026</span>
					<span class="event">Grok 4.3 beta announced (web-only, SuperGrok Heavy tier)</span>
				</div>
				<div class="milestone highlight">
					<span class="date">Apr 19, 2026</span>
					<span class="event">slash-tokens v1.4.0 shipped — Single-Source-of-Truth Edition</span>
				</div>
				<div class="milestone highlight">
					<span class="date">Apr 20, 2026</span>
					<span class="event">RadioFAF extracted to own repo + Episode 12 dropped</span>
				</div>
			</div>
		</section>

		<section>
			<h2>Episode 12 — "The Token Tax"</h2>
			<p>Five voices + Nelly the elephant DJ debate one question:</p>
			<blockquote class="q">
				What is <code>/slash</code>, really? A feature? A tool? A proxy? A billing layer? By the end, they converge: <strong>a Gate</strong> that sits in front of every AI app. Category, not tool.
			</blockquote>
			<p>The best part: the episode is authored by Grok, voiced by xAI's expressive TTS, and <strong>every Grok call that wrote it was routed by <code>/slash</code></strong>. The episode runs on the stack it describes. Fractal demo.</p>

			<div class="crew">
				<div class="voice leo"><strong>LEO</strong> — Standards champion. Starts sceptical. Ends conceding: "Claude stays Claude. Same-provider-only isn't a limitation. It's a principle."</div>
				<div class="voice rex"><strong>REX</strong> — Shipper. "One import, 95.6% cheaper, done. Why are we still talking?"</div>
				<div class="voice sal"><strong>SAL</strong> — Hype detector. "Grok got slash'd and thanked the robber."</div>
				<div class="voice ara"><strong>ARA</strong> — Roaster. Reads the meta-moment X post verbatim. Can't stop laughing.</div>
				<div class="voice eve"><strong>EVE</strong> — Dev voice. "I just want my Grok bill to not be stupid. /slash does that."</div>
				<div class="voice nelly"><strong>NELLY</strong> — Elephant DJ. Opens with <em>"Always… remember… I never forget."</em> Closes with the Ferrari.</div>
			</div>
		</section>

		<section>
			<h2>The Receipts — Real A/B, Today, On xAI's API</h2>
			<p>Same prompt. Two Grok models. Real calls, not estimates.</p>

			<div class="receipts">
				<div class="receipt">
					<div class="model">grok-4.20-0309-reasoning</div>
					<div class="num red">$0.0055 · 14.38s</div>
					<div class="label">Frontier (where users default)</div>
				</div>
				<div class="vs">→</div>
				<div class="receipt">
					<div class="model">grok-4-1-fast-non-reasoning</div>
					<div class="num green">$0.0002 · 2.63s</div>
					<div class="label">Where /slash routes when the task fits</div>
				</div>
			</div>

			<div class="big-numbers">
				<div class="bn"><span class="n">95.6%</span><span class="l">cheaper</span></div>
				<div class="bn"><span class="n">5.5×</span><span class="l">faster</span></div>
				<div class="bn"><span class="n">Same</span><span class="l">quality</span></div>
			</div>

			<p>Full harness + JSON receipts: <a href="https://github.com/Wolfe-Jam/radiofaf/tree/main/benchmarks" target="_blank">github.com/Wolfe-Jam/radiofaf/benchmarks</a>. Clone, drop your xAI key, reproduce in 20 seconds.</p>
		</section>

		<section>
			<h2>What is /slash?</h2>
			<p><strong><code>/slash</code> is a pre-call Gate.</strong> 4.8 KB Zig-compiled WASM. Sub-millisecond. Zero dependencies. MIT. 10+ models. Sits in front of every LLM API call.</p>

			<div class="gate">
				<div class="outcome"><strong>PREVENT</strong> — duplicate, trivial, context overflow, bloated call detected → blocked pre-cost</div>
				<div class="outcome"><strong>ROUTE</strong> — cheaper <em>same-provider</em> model fits the task → Grok-4.20 → Grok-4.1-Fast, Claude Opus → Haiku</div>
				<div class="outcome"><strong>PASS</strong> — right model, right cost → let it fly</div>
			</div>

			<p><strong>Same-provider only.</strong> Claude stays Claude. OpenAI stays OpenAI. Grok stays Grok. The prompt does <em>not</em> change — the <em>model</em> changes. This is <strong>not</strong> prompt compression.</p>
		</section>

		<section>
			<h2>The Meta-Moment</h2>
			<blockquote class="meta">
				<p>"I asked Grok-4.20 how to reduce token costs at scale.</p>
				<p>My tool intercepted the call. Routed it to Grok-4.1-Fast. 90% cheaper. Same answer.</p>
				<p>Grok replied: <em>'Semantic caching, prompt compression, and intelligent model routing.'</em></p>
				<p>It literally described what was happening to it… while it was happening. 😂"</p>
				<cite>— April 2026, X</cite>
			</blockquote>
			<p>In Episode 12, Ara reads this verbatim. The crew breaks character laughing. Rex recovers first: <em>"That's the entire pitch right there."</em></p>
		</section>

		<section>
			<h2>Try /slash</h2>
			<div class="terminal-block">
				<code>bunx slash-tokens</code>
			</div>
			<p>Or install for the app:</p>
			<div class="terminal-block">
				<code>npm install slash-tokens</code>
			</div>
			<p>Or one-line auto (every <code>fetch</code> checked pre-call):</p>
			<div class="terminal-block">
				<code>import 'slash-tokens/auto'</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>slash-tokens v1.4.1</strong> — live on npm, ~1,500 downloads/month</li>
				<li><strong>4.8 KB</strong> — Zig-compiled WASM, sub-millisecond decision</li>
				<li><strong>96–98%</strong> — Grok tokenizer accuracy (only one in the wild; others drift 15–40%)</li>
				<li><strong>323 tests</strong> — 172 Zig adversarial + 103 TypeScript + 50 API</li>
				<li><strong>10+ models</strong> — Grok, Claude, GPT, Gemini families</li>
				<li><strong>12 episodes</strong> — RadioFAF live on radiofaf.com, auto-generated voice, nothing pre-recorded</li>
				<li><strong>$110–360M/year</strong> — what a 5–10% industry-wide gate would save at current token volume</li>
			</ul>
		</section>

		<section>
			<h2>Listen Now</h2>
			<p>
				<a href="https://radiofaf.com/ep12" target="_blank" class="cta-button">▶ Play Episode 12 — The Token Tax</a>
			</p>
			<p><a href="https://radiofaf.com" target="_blank">radiofaf.com</a> · <a href="https://github.com/Wolfe-Jam/radiofaf" target="_blank">GitHub</a> · <a href="https://slashtokens.com" target="_blank">slashtokens.com</a></p>
		</section>

		<section class="footer-note">
			<p>🏎️ Don't go to the corner shop in a Ferrari.</p>
			<p style="margin-top:0.5rem;font-size:0.85rem;color:#888;">Grok 4.3 shipped. We shipped the receipts first.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-locked-dark);
	}

	.hero-image {
		max-width: 720px;
		margin: 0 auto 2rem;
		padding: 0 1.5rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
		box-shadow: 0 0 40px rgba(233, 30, 158, 0.15);
	}

	.blog-post {
		max-width: 720px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
		color: #e0e0e0;
	}

	.breadcrumb {
		font-size: 0.85rem;
		color: #555;
		margin-bottom: 1.5rem;
	}
	.breadcrumb a { color: #666; text-decoration: none; }
	.breadcrumb a:hover { color: #e0e0e0; }

	h1 {
		font-size: 2.75rem;
		font-weight: 900;
		margin: 0 0 0.5rem 0;
		line-height: 1.1;
		color: #E91E9E;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #aaa;
		margin-bottom: 1rem;
		line-height: 1.5;
	}
	.subtitle strong { color: #fff; }

	.meta {
		font-size: 0.85rem;
		color: #666;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.category {
		padding: 0.15rem 0.6rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #fff;
	}
	.category.grok { background: #111; border: 1px solid #333; }

	.post-content { font-size: 1.1rem; line-height: 1.7; }

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: rgba(132, 255, 0, 0.05);
		border-radius: 8px;
		border-left: 4px solid #84FF00;
	}

	h2 {
		font-size: 1.6rem;
		margin: 3rem 0 1.25rem 0;
		color: #fff;
		border-bottom: 1px solid #222;
		padding-bottom: 0.5rem;
	}

	p { margin-bottom: 1.25rem; }
	ul { margin: 1rem 0 1.5rem 1.5rem; }
	li { margin-bottom: 0.5rem; }
	a { color: #84FF00; }
	a:hover { text-decoration: underline; }

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: rgba(132, 255, 0, 0.08);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		color: #00ff88;
	}

	.terminal-block {
		background: #1a1a1a;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1rem 0;
		font-family: 'SF Mono', monospace;
	}
	.terminal-block code {
		background: none;
		padding: 0;
		color: #00ff88;
		font-size: 1rem;
	}

	.timeline {
		background: #0f0f0f;
		border: 1px solid #1f1f1f;
		border-radius: 10px;
		padding: 1.25rem 1.5rem;
		margin: 1.5rem 0;
	}
	.milestone {
		display: grid;
		grid-template-columns: 130px 1fr;
		gap: 1rem;
		padding: 0.5rem 0;
		border-bottom: 1px dashed #1f1f1f;
		align-items: baseline;
	}
	.milestone:last-child { border-bottom: none; }
	.milestone .date {
		font-family: 'SF Mono', monospace;
		color: #666;
		font-size: 0.85rem;
	}
	.milestone .event {
		color: #ccc;
		font-size: 0.95rem;
	}
	.milestone.highlight .date { color: #84FF00; }
	.milestone.highlight .event { color: #fff; font-weight: 600; }

	blockquote.q {
		border-left: 3px solid #84FF00;
		padding: 0.75rem 1.25rem;
		margin: 1.5rem 0;
		color: #ddd;
		font-style: italic;
		background: rgba(132, 255, 0, 0.03);
	}

	blockquote.meta {
		background: #0f0f0f;
		border: 1px solid #222;
		border-left: 3px solid #FF4400;
		padding: 1.5rem;
		margin: 1.5rem 0;
		border-radius: 4px;
	}
	blockquote.meta p { margin: 0 0 0.5rem 0; }
	blockquote.meta p:last-of-type { margin-bottom: 0; }
	blockquote.meta em { color: #FF4400; }
	blockquote.meta cite {
		display: block;
		margin-top: 0.75rem;
		font-size: 0.85rem;
		color: #666;
		font-style: normal;
	}

	.crew {
		display: grid;
		gap: 0.5rem;
		margin: 1.5rem 0;
	}
	.voice {
		padding: 0.75rem 1rem;
		background: #0f0f0f;
		border-left: 3px solid #333;
		border-radius: 4px;
		font-size: 0.95rem;
		color: #ccc;
	}
	.voice.leo { border-color: #00D4D4; }
	.voice.rex { border-color: #10a37f; }
	.voice.sal { border-color: #d97706; }
	.voice.ara { border-color: #4285f4; }
	.voice.eve { border-color: #7c3aed; }
	.voice.nelly { border-color: #E91E9E; }
	.voice strong { color: #fff; }

	.receipts {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1rem;
		align-items: center;
		margin: 1.5rem 0;
	}
	.receipt {
		background: #0f0f0f;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1.25rem;
		text-align: center;
	}
	.receipt .model {
		font-family: 'SF Mono', monospace;
		color: #888;
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}
	.receipt .num {
		font-size: 1.3rem;
		font-weight: 900;
		margin-bottom: 0.25rem;
		font-family: 'SF Mono', monospace;
	}
	.receipt .num.red { color: #dc2626; }
	.receipt .num.green { color: #84FF00; }
	.receipt .label {
		font-size: 0.8rem;
		color: #666;
	}
	.vs {
		font-size: 2rem;
		color: #555;
	}

	.big-numbers {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
		margin: 1.5rem 0;
	}
	.bn {
		background: #0f0f0f;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1.25rem 0.5rem;
		text-align: center;
	}
	.bn .n {
		display: block;
		font-size: 1.8rem;
		font-weight: 900;
		color: #84FF00;
		margin-bottom: 0.25rem;
	}
	.bn .l {
		display: block;
		font-size: 0.8rem;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.gate {
		display: grid;
		gap: 0.5rem;
		margin: 1.25rem 0;
	}
	.outcome {
		background: #0f0f0f;
		border: 1px solid #222;
		border-radius: 6px;
		padding: 0.75rem 1rem;
		font-size: 0.95rem;
		color: #ccc;
	}
	.outcome strong { color: #84FF00; }

	.cta-button {
		display: inline-block;
		background: #E91E9E;
		color: #fff !important;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 700;
		text-decoration: none;
		transition: all 0.2s;
	}
	.cta-button:hover {
		background: #b8137a;
		text-decoration: none;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #222;
		text-align: center;
		color: #888;
	}
</style>
