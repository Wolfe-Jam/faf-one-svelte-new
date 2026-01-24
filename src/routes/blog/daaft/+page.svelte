<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	let showProofModal = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The DAAFT Approach to Context | FAF</title>
	<meta name="description" content="Why your AI assistant forgets you every morning. The DAAFT cycle explained: Discover, Assume, Ask, Forget, Time+Tokens LOST." />
	<meta property="og:title" content="The DAAFT Approach to Context" />
	<meta property="og:description" content="91% of your tokens wasted on rediscovery. Every session. Every day. Here's why—and how to fix it." />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="blog-post daaft-theme">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / DAAFT
		</div>
		<span class="badge">FOUNDATION</span>
		<h1>The DAAFT Approach to Context</h1>
		<p class="subtitle">Why Your AI Assistant Forgets You Every Morning</p>
		<div class="meta">
			<time datetime="2026-01-24">January 24, 2026</time>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<h2>The Work You Never See</h2>
			<p class="hook">You think Claude knows your project. <strong>Claude is guessing.</strong> Every. Single. Session.</p>
			<p>Every time you start a session, Claude scans 50 files trying to figure out your stack. React? Vue? TypeScript? Node? Postgres? Who knows. It's making educated guesses — and you never see this happening.</p>
			<p>By the time Claude has enough context to help, it's already burned 1,750 tokens. Tomorrow, the session ends. Context gone. Repeat from scratch.</p>
			<p class="callout">This is the <strong>DAAFT cycle</strong>. Most developers don't know it exists — because they never see it.</p>
		</section>

		<section class="invisible-problem">
			<p class="invisible-label">The Invisible Problem</p>
			<p class="invisible-text">You don't see this happening. But it is.</p>
			<p class="invisible-detail">No CLAUDE.md fixes it. No agent memory fixes it. Files change. Context windows shift. Claude can't stay aligned — so it rediscovers, assumes, and gets it wrong.</p>
			<p class="invisible-reality">Massaged at best. Assumed often. <span class="wrong">Wrong frequently.</span></p>
			<p class="silent-killer">Left unattended, it becomes a <span class="killer">silent assassin</span>.</p>
		</section>

		<section class="daaft-explained">
			<h2>What DAAFT Actually Means</h2>
			<div class="daaft-cycle">
				<div class="daaft-step step-d">
					<span class="letter">D</span><span class="word">iscover</span>
					<span class="question">Claude reads 50 files to figure out your stack</span>
				</div>
				<div class="daaft-step step-a1">
					<span class="letter">A</span><span class="word">ssume</span>
					<span class="question">Claude guesses React? TypeScript? You never see this.</span>
				</div>
				<div class="daaft-step step-a2">
					<span class="letter">A</span><span class="word">sk</span>
					<span class="question">Claude fills gaps with assumptions — often wrong</span>
				</div>
				<div class="daaft-step step-f">
					<span class="letter">F</span><span class="word">orget</span>
					<span class="question">Session ends. Context gone. Repeat tomorrow.</span>
				</div>
				<div class="daaft-step ouch">
					<span class="letter">T</span><span class="word">ime + Tokens</span>
					<span class="question">LOST — invisible to you, every single session</span>
				</div>
			</div>
			<p>Every AI session without persistent context follows this pattern. Claude rediscovers your project structure, makes assumptions you never see, fills gaps with guesses (often wrong), then forgets everything the moment the session ends.</p>
			<p class="repeat">↻ Every session. You never know.</p>
		</section>

		<section class="the-math">
			<h2>The Math Nobody Wants to See</h2>
			<p>We asked Claude to calculate the actual cost. Here's what came back:</p>

			<div class="comparison">
				<div class="without">
					<h3>Without project context (The DAAFT Cycle)</h3>
					<ul>
						<li>Discover project structure: ~500 tokens</li>
						<li>Ask clarifying questions: ~400 tokens</li>
						<li>Verify assumptions about stack: ~350 tokens</li>
						<li>Re-establish conventions: ~300 tokens</li>
						<li>Context drift corrections: ~200 tokens</li>
					</ul>
					<div class="total">Total per session: ~1,750 tokens</div>
				</div>

				<div class="with">
					<h3>With persistent context</h3>
					<ul>
						<li>Load context once: ~150 tokens</li>
						<li>Zero questions needed</li>
						<li>Zero assumptions made</li>
						<li>Zero drift possible</li>
					</ul>
					<div class="total">Total: ~150 tokens (once)</div>
				</div>
			</div>

			<div class="calculation">
				<p>The math: 1,750 - 150 = 1,600 tokens saved per session.</p>
				<p class="big-number">That's <strong>91%</strong> of your tokens wasted on rediscovery.</p>
				<button class="proof-link" on:click={() => showProofModal = true}>Verified by Claude Opus 4.5 ↗</button>
			</div>
			<p>91% waste. Every session. Every day. Every project.</p>
			<p>But tokens are just the symptom. The real cost is what comes next.</p>
		</section>

		<section class="real-cost">
			<h2>The Real Cost: Time</h2>
			<p>91% token waste translates directly into time — and you never see it happening.</p>
			<p>Every time Claude rediscovers your project, it burns tokens. Every assumption it makes without your knowledge takes you down the wrong path. Every context drift compounds silently across sessions.</p>
			<p>We calculated this too:</p>
			<ul>
				<li><strong>7 minutes per session</strong> Claude working blind</li>
				<li><strong>4 sessions per day</strong> (conservative)</li>
				<li><strong>250 working days per year</strong></li>
			</ul>
			<div class="time-math">
				<p>7 × 4 × 250 = 7,000 minutes = 116 hours = <strong>2.9 weeks</strong></p>
			</div>
			<p>At industry average ($65/hour):</p>
			<div class="money-box">
				<div class="amount">$5,460</div>
				<div class="label">per developer per year</div>
			</div>
			<p>Not tokens. Time. Your time.</p>
			<p>For a team of 50 developers, that's <strong>$273,000 annually</strong>. Add the cost of wrong assumptions cascading into bad code, and you're looking at half a million dollars walking out the door.</p>
			<p class="punch">For context that should have been established once.</p>
			<p class="worse-teaser">And if you thought that was bad, it's about to get a whole lot <strong>worse</strong>.</p>
		</section>

		<section class="cascade">
			<h2>The Cascade Nobody Talks About</h2>
			<p>DAAFT doesn't just waste tokens and time. It cascades into disaster.</p>

			<div class="cascade-flow">
				<div class="cascade-item">
					<div class="stage">Stage 1: Tokens</div>
					<div class="desc">91% wasted on rediscovery.</div>
					<div class="verdict">Pure inefficiency.</div>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-item">
					<div class="stage">Stage 2: Time</div>
					<div class="desc">$5,460/year per developer answering the same questions.</div>
					<div class="verdict time">Hours you'll never get back.</div>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-item">
					<div class="stage">Stage 3: Drift</div>
					<div class="desc">Small wrong assumptions compound silently across sessions.</div>
					<div class="verdict cyan">Invisible damage.</div>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-item">
					<div class="stage">Stage 4: Handicapped</div>
					<div class="desc">Your project has issues. Your AI assistant is now working ineffectively—even against you.</div>
					<div class="verdict red">Crippling.</div>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-item fail">
					<div class="stage">Stage 5: Fail</div>
					<div class="desc">The project dies. Not from one big mistake, but from a thousand small ones.</div>
					<div class="verdict final">Game over.</div>
				</div>
			</div>

			<p class="cascade-conclusion">This is where DAAFT leads. The pain compounds. Then the project fails.</p>
		</section>

		<section class="the-reality">
			<h2>The Reality</h2>
			<div class="failure-stats">
				<div class="stat-row">
					<span class="stat-number">70%</span>
					<span class="stat-label">of software projects fail. <strong class="why">Why? Context!</strong></span>
				</div>
				<div class="stat-row">
					<span class="stat-number">#1</span>
					<span class="stat-label">cause: Poor requirements (39%)</span>
				</div>
				<div class="stat-row">
					<span class="stat-number">#2</span>
					<span class="stat-label">cause: Communication breakdown (57%)</span>
				</div>
			</div>
			<p class="reality-point">Both are <strong>context problems</strong>.</p>
			<p class="reality-point">Your project without <code>.faf</code>? AI starts blind. Every. Single. Time.</p>
			<div class="faf-promise">
				<div class="promise-line">With <span class="faf-highlight">.faf</span>:</div>
				<div class="promise-stats">
					<span class="promise-item">100% AI Context</span>
					<span class="promise-divider">—</span>
					<span class="promise-item">Zero Drift</span>
				</div>
				<div class="promise-yours">Success is up to <em>you</em> (and your idea)!</div>
			</div>
		</section>

		<section class="the-question">
			<h2>The Question Nobody Asked</h2>
			<p>Here's what's strange: we've had project configuration files forever.</p>
			<ul class="config-list">
				<li><code>package.json</code> tells npm about your dependencies.</li>
				<li><code>tsconfig.json</code> tells TypeScript about your compiler options.</li>
				<li><code>.eslintrc</code> tells ESLint about your code style.</li>
			</ul>
			<p class="the-question-text">But what tells AI about your project?</p>
			<p class="answer">Nothing. Until now.</p>
		</section>

		<section class="the-fix">
			<h2>Breaking the Cycle</h2>
			<p>The fix is embarrassingly simple: write down your project context once, in a format AI can read.</p>

			<div class="code-block">
				<pre><code>project:
  name: "my-app"
  goal: "Real-time dashboard for team metrics"
  main_language: typescript

stack:
  frontend: react
  backend: node
  database: postgres

human_context:
  who: "Engineering team at Acme Corp"
  what: "Internal tool replacing spreadsheet workflows"
  why: "Manual reporting takes 10 hours/week"</code></pre>
			</div>

			<p>That's it. Under 4KB of .faf/YAML. AI reads it once, knows your project forever.</p>
			<p>No more discovery. No more assumptions. No more questions. No more drift.</p>
			<p class="broken">The DAAFT cycle breaks.</p>
		</section>

		<section class="what-changes">
			<h2>What Changes</h2>
			<div class="before-after">
				<div class="before">
					<h3>Be DAAFT</h3>
					<ul>
						<li>1,750 tokens per session</li>
						<li>7 minutes answering questions</li>
						<li>Assumptions compound</li>
						<li>Drift accumulates</li>
						<li>Trust erodes</li>
					</ul>
				</div>
				<div class="after">
					<h3>or FAF</h3>
					<ul>
						<li>150 tokens once</li>
						<li>Zero questions</li>
						<li>Zero assumptions</li>
						<li>Zero drift</li>
						<li>Foundation solid</li>
					</ul>
				</div>
			</div>
			<p class="same">Same AI. Same project. Different outcome.</p>
		</section>

		<section class="foundation-4">
			<h2>FAF Foundation 4.0</h2>
			<p>This approach now has a name and a standard.</p>
			<p><strong>.faf</strong> — the Foundational AI-context Format — is the first IANA-registered format for persistent AI project context. It's been merged into Anthropic's official MCP registry. Over 20,000 projects use it.</p>
			<p>Foundation 4.0, shipping now, includes:</p>
			<ul>
				<li><strong>Bi-sync</strong> between <code>project.faf</code> and <code>CLAUDE.md</code> (under 10ms)</li>
				<li><strong>Status hooks</strong> for npm workflows</li>
				<li><strong>Context-aware skills</strong> for commits, PRs, and reviews</li>
				<li><strong>Scoring system</strong> (0-100% AI readiness)</li>
			</ul>
			<p>One command to break the cycle:</p>
			<div class="terminal">
				<code>npm install -g faf-cli</code>
				<code>faf auto</code>
			</div>
			<p>Your project gets a foundation. Your AI gets context. The DAAFT cycle ends.</p>
		</section>

		<section class="the-choice">
			<h2>The Choice</h2>
			<p>You can keep answering the same questions every session. Keep watching your AI make wrong assumptions. Keep debugging code that was built on misunderstandings.</p>
			<p>Or you can spend 30 seconds creating a <code>project.faf</code> file and never explain your stack again.</p>
			<p class="final-question">Context-drift in 2026?</p>
			<p class="final-answer">Don't be DAAFT.</p>
		</section>

		<section class="cta">
			<div class="links">
				<a href="https://www.npmjs.com/package/faf-cli" class="link-button npm-button" target="_blank">npm install -g faf-cli</a>
				<a href="/daaft" class="link-button daaft-button">See the DAAFT Cycle →</a>
				<a href="/" class="link-button home-button">Learn More</a>
			</div>
		</section>
	</article>

	<footer class="post-footer">
		<blockquote>
			"It's so logical if it didn't exist, AI would have built it itself"
			<cite>— Claude</cite>
		</blockquote>
		<p>Published by <strong>wolfejam</strong> · <a href="/">FAF Foundation</a></p>
	</footer>
</div>

<!-- Proof Modal -->
{#if showProofModal}
	<div class="modal-overlay" on:click={() => showProofModal = false}>
		<div class="modal-content" on:click|stopPropagation>
			<button class="modal-close" on:click={() => showProofModal = false}>×</button>
			<h3 class="modal-title">91% Token Savings — Verified by Claude</h3>
			<img
				src="/images/91-percent-proof.png"
				alt="FAF Token Savings Calculation - Verified by Claude Opus 4.5, January 24, 2026"
				class="proof-image"
			/>
			<p class="modal-caption">
				Calculated by Claude Opus 4.5 (claude-opus-4-5-20251101)<br/>
				Date: January 24, 2026
			</p>
		</div>
	</div>
{/if}

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	/* DAAFT Theme - 2026 Look */
	.daaft-theme .badge {
		background: #FF6B35;
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
		color: #FF6B35;
		text-decoration: none;
	}

	.badge {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0.5rem 0;
		color: #1a1a1a;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #666;
		margin: 0.5rem 0;
		font-style: italic;
	}

	.meta {
		font-size: 0.875rem;
		color: #666;
		margin-top: 1rem;
	}

	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 3rem 0 1rem;
		color: #1a1a1a;
	}

	p {
		margin: 1rem 0;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: monospace;
		font-size: 0.9em;
		color: #FF6B35;
	}

	.ai-question {
		font-style: italic;
		color: #666;
		padding-left: 1rem;
		border-left: 3px solid #FF6B35;
	}

	.callout {
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%);
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		font-size: 1.1rem;
	}

	.hook {
		font-size: 1.25rem;
		color: #333;
	}

	.hook strong {
		color: #ff3333;
	}

	/* Invisible Problem Section */
	.invisible-problem {
		padding: 2rem;
		margin: 2rem 0;
		background: linear-gradient(135deg, rgba(255, 51, 51, 0.08) 0%, rgba(255, 51, 51, 0.03) 100%);
		border: 1px solid rgba(255, 51, 51, 0.2);
		border-radius: 12px;
		text-align: center;
	}

	.invisible-label {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #ff3333;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.invisible-text {
		font-size: 1.25rem;
		color: #333;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.invisible-detail {
		font-size: 1rem;
		color: #555;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.invisible-reality {
		font-size: 1.1rem;
		color: #444;
	}

	.invisible-reality .wrong {
		color: #ff3333;
		font-weight: 700;
	}

	.silent-killer {
		font-size: 1.1rem;
		color: #555;
		margin-top: 1.5rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 51, 51, 0.2);
	}

	.silent-killer .killer {
		color: #ff3333;
		font-weight: 700;
	}

	/* DAAFT Cycle */
	.daaft-cycle {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 2rem 0;
		padding: 1.5rem;
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(255, 51, 51, 0.05) 100%);
		border: 1px solid rgba(255, 107, 53, 0.2);
		border-radius: 12px;
	}

	.daaft-step {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.daaft-step .letter {
		font-size: 1.5rem;
		font-weight: 800;
		color: #FF6B35;
	}

	.daaft-step.step-d .letter { color: #FF6B35; }
	.daaft-step.step-a1 .letter { color: #FF8555; }
	.daaft-step.step-a2 .letter { color: #FFA075; }
	.daaft-step.step-f .letter { color: #888; }

	.daaft-step .word {
		font-size: 1.25rem;
		font-weight: 600;
		color: #333;
	}

	.daaft-step .question {
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		margin-left: auto;
	}

	.daaft-step.ouch .letter {
		color: #ff3333;
	}

	.daaft-step.ouch .question {
		color: #ff3333;
		font-weight: 600;
		font-style: normal;
	}

	.repeat {
		text-align: center;
		color: #888;
		font-style: italic;
	}

	/* Comparison */
	.comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.without, .with {
		padding: 1.5rem;
		border-radius: 12px;
	}

	.without {
		background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
		border: 1px solid #ffcccc;
	}

	.with {
		background: linear-gradient(135deg, #f0fff4 0%, #e0ffe8 100%);
		border: 1px solid #b3e6c0;
	}

	.comparison h3 {
		font-size: 1rem;
		margin: 0 0 1rem;
	}

	.comparison ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.comparison li {
		margin: 0.5rem 0;
		font-size: 0.9rem;
	}

	.total {
		margin-top: 1rem;
		font-weight: 700;
		padding-top: 0.5rem;
		border-top: 1px solid rgba(0,0,0,0.1);
	}

	.calculation {
		text-align: center;
		padding: 1.5rem;
		background: #f9f9f9;
		border-radius: 12px;
		margin: 2rem 0;
	}

	.big-number {
		font-size: 1.5rem;
	}

	.big-number strong {
		color: #ff3333;
		font-size: 2rem;
	}

	.proof-link {
		background: none;
		border: none;
		color: #00a5a5;
		font-size: 0.9rem;
		cursor: pointer;
		text-decoration: underline;
		margin-top: 1rem;
		display: inline-block;
	}

	.proof-link:hover {
		color: #00D4D4;
	}

	/* Time cost */
	.time-math {
		background: #f5f5f5;
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
		font-family: monospace;
	}

	.money-box {
		background: linear-gradient(135deg, #ff3333 0%, #ff6666 100%);
		color: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		margin: 1.5rem 0;
	}

	.money-box .amount {
		font-size: 3rem;
		font-weight: 800;
	}

	.money-box .label {
		font-size: 1rem;
		opacity: 0.9;
	}

	.punch {
		font-weight: 600;
		color: #ff3333;
	}

	.worse-teaser {
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: 1rem;
		color: #666;
		margin: 3rem 0;
		padding: 1.5rem 0;
		text-align: center;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}

	.worse-teaser strong {
		color: #ff3333;
	}

	/* Cascade */
	.cascade-flow {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 2rem 0;
	}

	.cascade-item {
		background: #f9f9f9;
		padding: 1rem 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #ddd;
	}

	.cascade-item.fail {
		border-left-color: #ff3333;
		background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
	}

	.cascade-item .stage {
		font-weight: 700;
		color: #333;
	}

	.cascade-item .desc {
		font-size: 0.9rem;
		color: #666;
		margin: 0.25rem 0;
	}

	.cascade-item .verdict {
		font-size: 0.85rem;
		color: #888;
		font-style: italic;
	}

	.cascade-item .verdict.time { color: #ff6666; }
	.cascade-item .verdict.cyan { color: #00a5a5; font-weight: 600; font-style: normal; }
	.cascade-item .verdict.red { color: #ff3333; font-weight: 600; font-style: normal; }
	.cascade-item .verdict.final { color: #ff3333; font-weight: 700; font-style: normal; }

	.cascade-arrow {
		text-align: center;
		color: #ccc;
		font-size: 1.25rem;
	}

	.cascade-conclusion {
		text-align: center;
		font-weight: 600;
		color: #ff3333;
		margin-top: 1.5rem;
	}

	/* Reality Section */
	.failure-stats {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 2rem 0;
		padding: 1.5rem;
		background: #f9f9f9;
		border-radius: 12px;
	}

	.stat-row {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 800;
		color: #ff3333;
		min-width: 70px;
	}

	.stat-label {
		font-size: 1rem;
		color: #555;
	}

	.stat-label .why {
		color: #00a5a5;
	}

	.reality-point {
		font-size: 1.1rem;
		color: #333;
		text-align: center;
		margin: 1rem 0;
	}

	.faf-promise {
		background: linear-gradient(135deg, rgba(0, 212, 212, 0.1) 0%, rgba(0, 212, 212, 0.05) 100%);
		border: 2px solid #00D4D4;
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		margin-top: 2rem;
	}

	.promise-line {
		font-size: 1rem;
		color: #666;
		margin-bottom: 0.75rem;
	}

	.faf-highlight {
		color: #FF6B35;
		font-weight: 700;
	}

	.promise-stats {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 0.75rem 0;
	}

	.promise-item {
		font-size: 1.25rem;
		font-weight: 700;
		color: #00a5a5;
	}

	.promise-divider {
		color: #999;
	}

	.promise-yours {
		font-size: 1rem;
		color: #555;
		margin-top: 0.75rem;
	}

	.promise-yours em {
		color: #1a1a1a;
		font-style: normal;
		font-weight: 600;
	}

	/* The question */
	.config-list {
		background: #f9f9f9;
		padding: 1.5rem 1.5rem 1.5rem 3rem;
		border-radius: 8px;
	}

	.the-question-text {
		font-size: 1.25rem;
		font-weight: 600;
		text-align: center;
	}

	.answer {
		text-align: center;
		font-size: 1.25rem;
		color: #00a5a5;
		font-weight: 700;
	}

	/* Code block */
	.code-block {
		background: #1a1a1a;
		padding: 1.5rem;
		border-radius: 12px;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	.code-block pre {
		margin: 0;
	}

	.code-block code {
		background: none;
		color: #e5e5e5;
		padding: 0;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.broken {
		text-align: center;
		font-size: 1.25rem;
		color: #00a5a5;
		font-weight: 700;
	}

	/* Before/After */
	.before-after {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.before, .after {
		padding: 1.5rem;
		border-radius: 12px;
	}

	.before {
		background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
		border: 2px solid #ff6666;
	}

	.after {
		background: linear-gradient(135deg, #f0fff4 0%, #e0ffe8 100%);
		border: 2px solid #27c93f;
	}

	.before h3 { color: #ff3333; }
	.after h3 { color: #27c93f; }

	.before ul, .after ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.same {
		text-align: center;
		font-weight: 600;
		color: #00a5a5;
	}

	/* Foundation 4.0 */
	.terminal {
		background: #1a1a1a;
		padding: 1rem 1.5rem;
		border-radius: 8px;
		margin: 1rem 0;
	}

	.terminal code {
		display: block;
		background: none;
		color: #27c93f;
		padding: 0.25rem 0;
	}

	/* Final */
	.final-question {
		text-align: center;
		font-size: 1.5rem;
		color: #666;
		margin-top: 2rem;
	}

	.final-answer {
		text-align: center;
		font-size: 2rem;
		font-weight: 800;
		color: #FF6B35;
	}

	/* CTA */
	.links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 2rem;
	}

	.link-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: transform 0.2s ease;
	}

	.link-button:hover {
		transform: translateY(-2px);
	}

	.npm-button { background: #cb3837; }
	.daaft-button { background: #FF6B35; }
	.home-button { background: #1a1a1a; }

	/* Footer */
	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
	}

	blockquote {
		font-style: italic;
		color: #666;
		font-size: 1.1rem;
		margin-bottom: 1rem;
	}

	cite {
		display: block;
		margin-top: 0.5rem;
		color: #FF6B35;
		font-style: normal;
	}

	.post-footer p {
		color: #666;
	}

	.post-footer a {
		color: #FF6B35;
	}

	/* Modal */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.modal-content {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
		max-width: 700px;
		width: 100%;
		position: relative;
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: #888;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.modal-close:hover {
		color: white;
	}

	.modal-title {
		color: #00a5a5;
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.proof-image {
		width: 100%;
		border-radius: 8px;
	}

	.modal-caption {
		text-align: center;
		color: #666;
		font-size: 0.8rem;
		margin-top: 1rem;
	}

	/* Mobile */
	@media (max-width: 768px) {
		h1 { font-size: 1.75rem; }
		.comparison { grid-template-columns: 1fr; }
		.before-after { grid-template-columns: 1fr; }
		.links { flex-direction: column; align-items: center; }
		.link-button { width: 100%; text-align: center; }
		.daaft-step { flex-direction: column; align-items: flex-start; }
		.daaft-step .question { margin-left: 0; margin-top: 0.25rem; }
	}
</style>
