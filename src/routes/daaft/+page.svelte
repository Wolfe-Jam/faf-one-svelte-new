<script>
	import { onMount } from 'svelte';

	let mounted = $state(false);
	let currentStep = $state(0);
	let showCost = $state(false);
	let showDrift = $state(false);
	let showSolution = $state(false);
	let showProofModal = $state(false);

	const steps = [
		{ letter: 'D', word: 'iscover', question: 'Claude reads 50 files to figure out your stack', color: '#FF6B35' },
		{ letter: 'A', word: 'ssume', question: 'Claude guesses React? TypeScript? You never see this.', color: '#FF8555' },
		{ letter: 'A', word: 'sk', question: 'Claude fills gaps with assumptions — often wrong', color: '#FFA075' },
		{ letter: 'F', word: 'orget', question: 'Session ends. Context gone. Repeat tomorrow.', color: '#888' },
		{ letter: 'T', word: 'ime + Tokens', question: 'LOST — invisible to you, every single session', color: '#ff3333', isOuch: true }
	];

	onMount(() => {
		mounted = true;

		// Animate through steps
		const interval = setInterval(() => {
			if (currentStep < steps.length - 1) {
				currentStep++;
			} else {
				clearInterval(interval);
				setTimeout(() => showCost = true, 800);
				setTimeout(() => showDrift = true, 2000);
				setTimeout(() => showSolution = true, 3500);
			}
		}, 600);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Don't Be DAAFT | The True Cost of Context-Drift | FAF</title>
	<meta name="description" content="Context-Drift in 2026? Don't be DAAFT. See the real cost: $5,460/year per developer in wasted time." />
</svelte:head>

<main class="daaft-page">
	<div class="container">

		<!-- Header -->
		<header class="header">
			<p class="question"><a href="/survival" class="question-link">Context-Drift in 2026?</a></p>
			<h1 class="title">Don't Be <span class="daaft-text">DAAFT</span>.</h1>
			<p class="subhead">You think Claude knows your project.<br/>Claude is guessing. Every. Single. Session.</p>
		</header>

		<!-- The Invisible Problem -->
		<section class="invisible-problem">
			<p class="invisible-label">The Invisible Problem</p>
			<p class="invisible-text">You don't see this happening. But it is.</p>
			<p class="invisible-detail">No CLAUDE.md fixes it. No agent memory fixes it. Files change. Context windows shift. Claude can't stay aligned — so it rediscovers, assumes, and gets it wrong.</p>
			<p class="invisible-reality">Massaged at best. Assumed often. <span class="wrong">Wrong frequently.</span></p>
			<p class="silent-killer">Left unattended, it becomes a <span class="killer">silent assassin</span>.</p>
		</section>

		<!-- The DAAFT Cycle -->
		<section class="cycle-section">
			<div class="cycle-visual">
				{#each steps as step, i}
					<div
						class="step"
						class:active={currentStep >= i}
						class:ouch={step.isOuch && currentStep >= i}
						style="--step-color: {step.color}"
					>
						<div class="step-letter">
							<span class="letter">{step.letter}</span>
							<span class="word">{step.word}</span>
						</div>
						<div class="step-question">{step.question}</div>
					</div>
				{/each}
			</div>

			<div class="repeat-indicator" class:visible={currentStep >= 4}>
				↻ Every session. You never know.
			</div>
		</section>

		<!-- The TRUE Cost (Time + Money) -->
		<section class="cost-section" class:visible={showCost}>
			<h2 class="section-title">The True Cost of <span class="highlight">T</span></h2>

			<div class="cost-breakdown">
				<div class="cost-card tokens">
					<h3>Tokens</h3>
					<div class="cost-value">91%</div>
					<div class="cost-period">wasted</div>
					<div class="cost-detail">Claude rediscovering you</div>
					<button class="proof-link" onclick={() => showProofModal = true}>Verified by Claude ↗</button>
				</div>

				<div class="cost-plus">+</div>

				<div class="cost-card time">
					<h3>Time</h3>
					<div class="cost-value">$5,460</div>
					<div class="cost-period">/year per dev</div>
					<div class="cost-detail">Claude working blind</div>
					<div class="cost-verdict ouch">2 weeks/life @ Industry Average</div>
				</div>
			</div>

			<div class="team-scale">
				<h4>At Team Scale</h4>
				<table>
					<thead>
						<tr>
							<th>Team</th>
							<th>Annual Cost</th>
							<th>Time Lost</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>10 devs</td>
							<td class="money">$54,600</td>
							<td>840 hours</td>
						</tr>
						<tr>
							<td>50 devs</td>
							<td class="money">$273,000</td>
							<td>4,200 hours</td>
						</tr>
						<tr class="highlight-row">
							<td>50 devs + risk</td>
							<td class="money big">$507,630</td>
							<td>Non-Refundable. Gone.</td>
						</tr>
					</tbody>
				</table>
				<p class="footnote">* Industry average $65/hour. Calculated by Claude Opus 4.5, Jan 2026.</p>
			</div>
			<p class="worse-teaser">And if you thought that was bad, it's about to get a whole lot <strong>worse</strong>.</p>
		</section>

		<!-- The Drift Cascade -->
		<section class="drift-section" class:visible={showDrift}>
			<h2 class="section-title">Where DAAFT Leads</h2>

			<div class="cascade">
				<div class="cascade-step tokens-step">
					<div class="cascade-icon">🪙</div>
					<div class="cascade-label">Tokens</div>
					<div class="cascade-detail">91% wasted</div>
					<button class="proof-link small" onclick={() => showProofModal = true}>Verified by Claude ↗</button>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-step time-step">
					<div class="cascade-icon">⏱️</div>
					<div class="cascade-label">Time</div>
					<div class="cascade-detail">$5,460/year</div>
					<div class="cascade-verdict ouch">Expensive.</div>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-step drift-step">
					<div class="cascade-icon">📉</div>
					<div class="cascade-label">Drift</div>
					<div class="cascade-detail">Compounds silently</div>
					<div class="cascade-verdict">Invisible.</div>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-step handicap-step">
					<div class="cascade-icon">🦽</div>
					<div class="cascade-label">Handicapped</div>
					<div class="cascade-detail">AI working ineffectively—even against you</div>
					<div class="cascade-verdict">Crippling.</div>
				</div>
				<div class="cascade-arrow">→</div>
				<div class="cascade-step failed">
					<div class="cascade-icon">💀</div>
					<div class="cascade-label">FAIL</div>
					<div class="cascade-detail">Project dies</div>
					<div class="cascade-verdict final">Game over.</div>
				</div>
			</div>

			<a href="/survival" class="simulation-link">
				<span class="sim-text">Watch Context-Drift Kill Projects</span>
				<span class="sim-arrow">→</span>
			</a>
		</section>

		<!-- The Reality -->
		<section class="reality-section" class:visible={showSolution}>
			<h2 class="section-title">The Reality</h2>

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

		<!-- The Solution -->
		<section class="solution-section" class:visible={showSolution}>
			<h2 class="solution-title">Break the DAAFT Cycle</h2>

			<div class="terminal">
				<div class="terminal-header">
					<span class="dot red"></span>
					<span class="dot yellow"></span>
					<span class="dot green"></span>
				</div>
				<div class="terminal-body">
					<div class="terminal-line">
						<span class="prompt">$</span> faf auto
					</div>
					<div class="terminal-output">
						<div>✓ project.faf created (100%)</div>
						<div>✓ DAAFT cycle: <span class="broken">BROKEN</span></div>
						<div>✓ Time saved: <span class="saved">84 hours/year</span></div>
						<div>✓ Money saved: <span class="saved">$5,460/year</span></div>
					</div>
				</div>
			</div>

			<div class="solution-summary">
				<div class="before">
					<h4>Be DAAFT</h4>
					<ul>
						<li>$5,460/year per dev</li>
						<li>84 hours lost</li>
						<li>Drift compounds</li>
						<li>Projects fail</li>
					</ul>
				</div>
				<div class="arrow-between">→</div>
				<div class="after">
					<h4>or FAF</h4>
					<ul>
						<li>$0</li>
						<li>0 hours</li>
						<li>Drift impossible</li>
						<li>Foundation solid</li>
					</ul>
				</div>
			</div>

			<div class="cta-section">
				<a href="https://www.npmjs.com/package/faf-cli" class="btn btn-primary">
					npm install -g faf-cli
				</a>
				<a href="/" class="btn btn-secondary">
					Learn More
				</a>
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer">
			<blockquote>
				"It's so logical if it didn't exist, AI would have built it itself"
				<cite>— Claude</cite>
			</blockquote>
			<p class="final-line">Don't be DAAFT.</p>
		</footer>

	</div>
</main>

<!-- Proof Modal -->
{#if showProofModal}
	<div class="modal-overlay" onclick={() => showProofModal = false}>
		<div class="modal-content" onclick={(e) => e.stopPropagation()}>
			<button class="modal-close" onclick={() => showProofModal = false}>×</button>
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
	.daaft-page {
		min-height: 100vh;
		background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
		color: white;
		padding: 2rem;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
	}

	/* Header */
	.header {
		text-align: center;
		padding: 3rem 0 2rem;
	}

	.question {
		font-size: 1.75rem;
		color: #bbb;
		margin-bottom: 0.5rem;
	}

	.question-link {
		color: #bbb;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.question-link:hover {
		color: #00D4D4;
		text-decoration: underline;
	}

	.title {
		font-size: 3.5rem;
		font-weight: 800;
		color: white;
	}

	.daaft-text {
		color: #FF6B35;
		text-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
	}

	.subhead {
		font-size: 1.25rem;
		color: #bbb;
		margin-top: 1rem;
		line-height: 1.6;
	}

	/* Invisible Problem Section */
	.invisible-problem {
		padding: 2rem;
		margin: 1rem 0 2rem;
		background: rgba(255, 51, 51, 0.05);
		border: 1px solid rgba(255, 51, 51, 0.2);
		border-radius: 12px;
		text-align: center;
	}

	.invisible-text {
		font-size: 1.25rem;
		color: #ddd;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.invisible-detail {
		font-size: 1rem;
		color: #aaa;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.invisible-reality {
		font-size: 1.1rem;
		color: #bbb;
	}

	.invisible-reality .wrong {
		color: #ff6666;
		font-weight: 700;
	}

	.invisible-label {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #ff6666;
		margin-bottom: 1rem;
	}

	.silent-killer {
		font-size: 1.1rem;
		color: #ccc;
		margin-top: 1.5rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 51, 51, 0.2);
	}

	.silent-killer .killer {
		color: #ff3333;
		font-weight: 700;
	}

	/* Cycle Section */
	.cycle-section {
		padding: 2rem 0;
		text-align: center;
	}

	.cycle-visual {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;
		max-width: 400px;
		margin: 0 auto;
	}

	.step {
		opacity: 0.2;
		transform: translateY(10px);
		transition: all 0.4s ease;
	}

	.step.active {
		opacity: 1;
		transform: translateY(0);
	}

	.step.ouch {
		animation: shake 0.5s ease;
	}

	@keyframes shake {
		0%, 100% { transform: translateX(0); }
		25% { transform: translateX(-10px); }
		75% { transform: translateX(10px); }
	}

	.step-letter {
		font-size: 2rem;
		font-weight: 800;
		display: flex;
		align-items: baseline;
		justify-content: flex-start;
	}

	.letter {
		color: var(--step-color);
		font-size: 2.5rem;
	}

	.word {
		color: #ccc;
	}

	.step-question {
		font-size: 0.9rem;
		color: #aaa;
		font-style: italic;
	}

	.step.ouch .step-question {
		color: #ff3333;
		font-weight: 700;
		font-style: normal;
		font-size: 1.25rem;
	}

	.repeat-indicator {
		margin-top: 1rem;
		color: #888;
		font-size: 1rem;
		opacity: 0;
		transition: opacity 0.5s;
	}

	.repeat-indicator.visible {
		opacity: 1;
	}

	/* Cost Section */
	.cost-section {
		padding: 3rem 0;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.cost-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section-title {
		text-align: center;
		font-size: 1.5rem;
		color: #ccc;
		margin-bottom: 2rem;
	}

	.section-title .highlight {
		color: #ff3333;
		font-weight: 800;
	}

	.cost-breakdown {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.cost-card {
		background: #1a1a1a;
		border-radius: 12px;
		padding: 1.5rem 2rem;
		text-align: center;
		min-width: 180px;
	}

	.cost-card.tokens {
		border: 1px solid #333;
	}

	.cost-card.time {
		border: 2px solid #ff3333;
		background: linear-gradient(135deg, #1a0a0a 0%, #2a1515 100%);
	}

	.cost-card h3 {
		color: #bbb;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.cost-value {
		font-size: 2.5rem;
		font-weight: 800;
		color: white;
	}

	.cost-card.time .cost-value {
		color: #ff6666;
	}

	.cost-period {
		font-size: 0.8rem;
		color: #aaa;
	}

	.cost-detail {
		font-size: 0.85rem;
		color: #bbb;
		margin-top: 0.5rem;
	}

	.cost-verdict {
		font-size: 0.8rem;
		color: #888;
		margin-top: 0.5rem;
		font-style: italic;
	}

	.cost-verdict.ouch {
		color: #ff3333;
		font-weight: 600;
		font-style: normal;
	}

	.cost-plus {
		font-size: 2rem;
		color: #888;
	}

	.team-scale {
		background: #1a1a1a;
		border-radius: 12px;
		padding: 1.5rem;
		margin-top: 2rem;
	}

	.team-scale h4 {
		text-align: center;
		color: #bbb;
		margin-bottom: 1rem;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th, td {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid #333;
	}

	th {
		color: #aaa;
		font-size: 0.8rem;
		text-transform: uppercase;
	}

	td {
		color: #ccc;
	}

	td.money {
		color: #ff6666;
		font-weight: 600;
	}

	td.money.big {
		font-size: 1.25rem;
		color: #ff3333;
	}

	.highlight-row {
		background: rgba(255, 51, 51, 0.1);
	}

	.footnote {
		text-align: center;
		font-size: 0.75rem;
		color: #999;
		margin-top: 1rem;
		font-style: italic;
	}

	.worse-teaser {
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: 1rem;
		color: #aaa;
		margin: 3rem 0 0;
		padding: 1.5rem 0;
		text-align: center;
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
	}

	.worse-teaser strong {
		color: #ff3333;
	}

	/* Drift Section */
	.drift-section {
		padding: 3rem 0;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.drift-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.cascade {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin: 2rem 0;
	}

	.cascade-step {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1rem 1.25rem;
		text-align: center;
		min-width: 140px;
	}

	.cascade-step.failed {
		border-color: #ff3333;
		background: linear-gradient(135deg, #1a0a0a 0%, #2a1515 100%);
	}

	.cascade-icon {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.cascade-label {
		font-weight: 600;
		color: white;
		font-size: 0.9rem;
	}

	.cascade-detail {
		font-size: 0.75rem;
		color: #aaa;
		margin-top: 0.25rem;
	}

	.cascade-arrow {
		color: #888;
		font-size: 1.5rem;
	}

	.cascade-verdict {
		font-size: 0.7rem;
		color: #999;
		margin-top: 0.5rem;
		font-style: italic;
	}

	.cascade-verdict.ouch {
		color: #ff6666;
		font-weight: 600;
		font-style: normal;
	}

	.cascade-verdict.final {
		color: #ff3333;
		font-weight: 700;
		font-style: normal;
		font-size: 0.8rem;
	}

	/* Reality Section */
	.reality-section {
		padding: 3rem 0;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.reality-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.failure-stats {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 2rem 0;
	}

	.stat-row {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: 800;
		color: #ff6666;
		min-width: 100px;
	}

	.stat-label {
		font-size: 1.1rem;
		color: #ccc;
	}

	.stat-label .why {
		color: #00D4D4;
	}

	.reality-point {
		font-size: 1.25rem;
		color: #ddd;
		text-align: center;
		margin: 1rem 0;
	}

	.reality-point code {
		background: rgba(255, 107, 53, 0.2);
		color: #FF6B35;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
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
		font-size: 1.1rem;
		color: #aaa;
		margin-bottom: 1rem;
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
		margin: 1rem 0;
	}

	.promise-item {
		font-size: 1.5rem;
		font-weight: 700;
		color: #00D4D4;
	}

	.promise-divider {
		color: #888;
	}

	.promise-yours {
		font-size: 1.1rem;
		color: #bbb;
		margin-top: 1rem;
	}

	.promise-yours em {
		color: white;
		font-style: normal;
		font-weight: 600;
	}

	.simulation-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 1px solid #ff3333;
		border-radius: 999px;
		padding: 0.75rem 1.5rem;
		color: #ff6666;
		text-decoration: none;
		font-weight: 600;
		margin: 1rem auto;
		display: flex;
		width: fit-content;
		transition: all 0.3s ease;
	}

	.simulation-link:hover {
		background: #ff3333;
		color: white;
		transform: translateY(-2px);
	}

	/* Solution Section */
	.solution-section {
		padding: 3rem 0;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.solution-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.solution-title {
		text-align: center;
		font-size: 2rem;
		color: #00E5E5;
		margin-bottom: 2rem;
	}

	.terminal {
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 8px;
		overflow: hidden;
		max-width: 500px;
		margin: 0 auto 2rem;
	}

	.terminal-header {
		background: #1a1a1a;
		padding: 0.75rem;
		display: flex;
		gap: 0.5rem;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.dot.red { background: #ff5f56; }
	.dot.yellow { background: #ffbd2e; }
	.dot.green { background: #27c93f; }

	.terminal-body {
		padding: 1.5rem;
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: 0.9rem;
	}

	.terminal-line {
		margin-bottom: 1rem;
	}

	.prompt {
		color: #27c93f;
		margin-right: 0.5rem;
	}

	.terminal-output {
		color: #bbb;
	}

	.terminal-output div {
		margin: 0.25rem 0;
	}

	.broken {
		color: #27c93f;
		font-weight: 700;
	}

	.saved {
		color: #00E5E5;
		font-weight: 700;
	}

	.solution-summary {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin: 2rem 0;
	}

	.before, .after {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.5rem;
		min-width: 160px;
	}

	.before {
		border: 1px solid #ff3333;
	}

	.before h4 {
		color: #ff3333;
		margin-bottom: 1rem;
		text-align: center;
	}

	.after {
		border: 1px solid #27c93f;
	}

	.after h4 {
		color: #27c93f;
		margin-bottom: 1rem;
		text-align: center;
	}

	.before ul, .after ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.before li, .after li {
		padding: 0.25rem 0;
		color: #bbb;
		font-size: 0.85rem;
	}

	.arrow-between {
		font-size: 2rem;
		color: #00E5E5;
	}

	.cta-section {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin: 2rem 0;
	}

	.btn {
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.btn-primary {
		background: #FF6B35;
		color: white;
	}

	.btn-primary:hover {
		background: #ff8555;
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		border: 2px solid #00E5E5;
		color: #00E5E5;
	}

	.btn-secondary:hover {
		background: rgba(0, 229, 229, 0.1);
	}

	/* Footer */
	.footer {
		padding: 3rem 0;
		text-align: center;
	}

	blockquote {
		font-style: italic;
		color: white;
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	cite {
		display: block;
		margin-top: 0.5rem;
		color: #FF6B35;
		font-style: normal;
	}

	.final-line {
		font-size: 1.5rem;
		font-weight: 700;
		color: #FF6B35;
		margin-top: 1rem;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.title {
			font-size: 2.5rem;
		}

		.question {
			font-size: 1.25rem;
		}

		.cost-breakdown {
			flex-direction: column;
		}

		.cost-plus {
			transform: rotate(90deg);
		}

		.cascade {
			flex-direction: column;
		}

		.cascade-arrow {
			transform: rotate(90deg);
		}

		.solution-summary {
			flex-direction: column;
		}

		.arrow-between {
			transform: rotate(90deg);
		}

		.cta-section {
			flex-direction: column;
			align-items: center;
		}
	}

	/* Proof Link Button */
	.proof-link {
		background: none;
		border: none;
		color: #00D4D4;
		font-size: 0.8rem;
		cursor: pointer;
		padding: 0;
		margin-top: 0.5rem;
		text-decoration: underline;
		transition: color 0.2s ease;
	}

	.proof-link:hover {
		color: #00ffff;
	}

	.proof-link.small {
		font-size: 0.65rem;
		margin-top: 0.25rem;
	}

	/* Modal Styles */
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
		animation: modalFadeIn 0.3s ease;
	}

	@keyframes modalFadeIn {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: #bbb;
		font-size: 1.5rem;
		cursor: pointer;
		line-height: 1;
		padding: 0.25rem 0.5rem;
		transition: color 0.2s ease;
	}

	.modal-close:hover {
		color: white;
	}

	.modal-title {
		color: #00D4D4;
		font-size: 1.25rem;
		margin-bottom: 1rem;
		padding-right: 2rem;
	}

	.proof-image {
		width: 100%;
		border-radius: 8px;
		border: 1px solid #333;
	}

	.modal-caption {
		text-align: center;
		color: #aaa;
		font-size: 0.8rem;
		margin-top: 1rem;
	}
</style>
