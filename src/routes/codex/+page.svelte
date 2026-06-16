<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>Codex + .faf — is your agent grounded?</title>
	<meta name="description" content="Codex (gpt-5.5) graded its own grounding on faf-cli: 2/9 without context, 9/9 with the .faf. This is a blind spot — measure yours free in one command. IANA-registered, in Anthropic's MCP Registry, 94,000+ downloads." />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Codex grounding: this is a blind spot." />
	<meta property="og:description" content="Codex graded its own grounding on faf-cli: 2/9 without context, 9/9 with the .faf. Measure yours free: npx faf-cli@latest bench" />
	<meta property="og:url" content="https://www.faf.one/codex" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Codex grounding: this is a blind spot." />
	<meta name="twitter:description" content="Codex graded its own grounding: 2/9 without context, 9/9 with the .faf. Measure yours free in one command." />
</svelte:head>

<main class="page">

	<section class="score-hero">
		<p class="eyebrow">For Codex · gpt-5.5 · faf-cli</p>
		<div class="score-pair">
			<div class="score">
				<span class="score-num cold">2<span class="denom">/9</span></span>
				<span class="score-label">without context</span>
			</div>
			<span class="arrow">&rarr;</span>
			<div class="score">
				<span class="score-num win">9<span class="denom">/9</span></span>
				<span class="score-label">with context</span>
			</div>
		</div>
	</section>

	<section class="hero">
		<h1>This is a blind spot.</h1>
		<p class="sub">Don't make it yours!</p>
	</section>

	<section class="content qa">
		<p class="q">What is this?</p>
		<p>A free bench that scores how grounded your Codex agent really is on your project — and the tiny file that enhances <code>AGENTS.md</code> instantly, deterministically and on-demand.</p>
	</section>

	<section class="content qa">
		<p class="q">Why should I use it?</p>
		<p class="lanes-intro">Choose a lane.</p>
		<div class="lanes">
			<div class="lane faf">
				<span class="lane-tag">Context</span>
				<span class="lane-file">project.faf</span>
				<p>AI thrives on it. Structured YAML — fast facts, deterministic, a single source of truth. Instantly, on-demand.</p>
			</div>
			<div class="lane md">
				<span class="lane-tag">Instructions</span>
				<span class="lane-file">AGENTS.md</span>
				<p>The agent's playbook. Conventions, commands, the house style. AGENTS.md rules here.</p>
			</div>
		</div>
		<p class="lanes-doctrine">FAF defines. MD Instructs.</p>
		<p class="blind-reveal">Can you see your blind-spot?<br />AGENTS.md is doing your Context.<br />There are two lanes, not one.</p>
		<p class="lanes-doctrine">Stay in lane.</p>
	</section>

	<section class="content qa">
		<p class="q">Is it legit?</p>
		<p class="proof-lead">Receipts, not adjectives.</p>
		<div class="proof">
			<div class="proof-chip">
				<span class="proof-key">IANA</span>
				<span class="proof-val">registered media type</span>
			</div>
			<div class="proof-chip">
				<span class="proof-key">Anthropic</span>
				<span class="proof-val">merged Oct 2025 · #2759</span>
			</div>
			<div class="proof-chip">
				<span class="proof-key">94,000+</span>
				<span class="proof-val">downloads</span>
			</div>
		</div>
	</section>

	<section class="content cta-section">
		<h2>Measure your own — free, one command</h2>
		<p>Run the bench on your repo. Keep your <code>AGENTS.md</code>. Nothing replaced.</p>
		<div class="terminal">
			<code class="cmd">npx faf-cli@latest bench</code>
		</div>
		<p class="cmd-note">Get your two numbers — cold, and with a <code>.faf</code>.<br />The gap is what your agent's been guessing.</p>
		<a class="cta" href="/bench">See every receipt on the wall &rarr;</a>
	</section>

	<section class="content faq">
		<h2>"What does it do that AGENTS.md doesn't?"</h2>
		<p>The fair question, and the honest answer isn't an argument — it's a number. AGENTS.md is a keeper, but why waste tokens and leave context to guesswork? We measured it and fixed it, so you don't have to.</p>
		<p>The <code>.faf</code> adds the structured layer AGENTS.md was never meant to be: deterministic facts, same every read, <a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener">IANA-registered</a>. Run the bench, keep both files, and let the gap decide.</p>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">Don't argue context. Measure it.</p>
		<p class="footer-iana">Share the number with your team — it's their agent too.</p>
	</section>

	<PageActions
		headline="Codex graded its own grounding: 2/9 without context, 9/9 with the .faf."
		point1="Your AGENTS.md instructs. The .faf grounds. Keep both."
		point2="Measure your repo free: npx faf-cli@latest bench"
		url="https://www.faf.one/codex"
		hashtags="Codex,OpenAI,AI,Context"
	/>

</main>

<style>
	.page {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Scores ARE the hero — top of the page, nothing above */
	.score-hero {
		text-align: center;
		padding: 3.5rem 0 1rem;
	}

	.hero {
		text-align: center;
		padding: 1rem 0 1.5rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 1rem;
	}

	.eyebrow {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--faf-orange);
		margin-bottom: 0.75rem;
	}

	.hero h1 {
		font-size: 2.4rem;
		font-weight: 800;
		color: var(--faf-black);
		line-height: 1.15;
		margin-bottom: 0.5rem;
	}

	.sub {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--faf-dark);
	}

	/* Score pair — the page's reason to exist */
	.score-pair {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		margin-bottom: 0;
	}

	.score {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
	}

	.score-num {
		font-family: var(--font-mono);
		font-size: 3.6rem;
		font-weight: 800;
		line-height: 1;
	}

	.score-num.cold {
		color: var(--faf-black);
	}

	.score-num.win {
		color: var(--faf-cyan-text);
	}

	.denom {
		font-size: 1.7rem;
		font-weight: 600;
		opacity: 0.6;
	}

	.score-label {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--faf-dark);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.arrow {
		font-size: 2rem;
		color: var(--faf-orange);
		font-weight: 700;
	}

	.content {
		padding: 1.25rem 0;
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

	/* Q&A flow — the newcomer's questions, in their voice */
	.qa .q {
		font-size: 1.3rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.qa p:last-child {
		margin-bottom: 0;
	}

	/* Two lanes — Context vs Instructions, complementary */
	.lanes-intro {
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.85rem !important;
	}

	.blind-reveal {
		text-align: center;
		color: var(--faf-dark);
		line-height: 1.7;
		margin: 0.85rem 0 0 !important;
	}

	.lanes {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.lane {
		border: 1px solid var(--faf-light-gray);
		border-radius: 10px;
		padding: 1.1rem 1.25rem;
	}

	.lane.faf {
		border-left: 3px solid var(--faf-cyan-text);
	}

	.lane.md {
		border-left: 3px solid #4A90E2;
	}

	.lane.md .lane-file {
		color: #4A90E2;
	}

	.lane-tag {
		display: block;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faf-dark);
		margin-bottom: 0.2rem;
	}

	.lane-file {
		display: block;
		font-family: var(--font-mono);
		font-size: 1.05rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.lane.faf .lane-file {
		color: var(--faf-cyan-text);
	}

	.lane p {
		font-size: 0.9rem;
		line-height: 1.6;
		margin-bottom: 0;
	}

	.lanes-doctrine {
		text-align: center;
		font-weight: 800;
		font-size: 1.15rem;
		color: var(--faf-black);
		margin: 1.25rem 0 0;
	}

	/* Proof — receipts, not adjectives */
	.proof-lead {
		font-weight: 600;
		color: var(--faf-black);
		margin-bottom: 0.85rem !important;
	}

	.proof {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.proof-chip {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--faf-light-gray);
		border-left: 3px solid var(--faf-cyan-text);
		border-radius: 0 8px 8px 0;
		padding: 0.6rem 1rem;
	}

	.proof-key {
		font-family: var(--font-mono);
		font-size: 1.05rem;
		font-weight: 800;
		color: var(--faf-black);
	}

	.proof-val {
		font-size: 0.8rem;
		color: var(--faf-dark);
	}

	/* Terminal command — green on near-black, per theming carve-out */
	.terminal {
		background: #0a0a0a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1rem 0 0.75rem;
		text-align: left;
		overflow-x: auto;
	}

	.cmd {
		font-family: var(--font-mono);
		color: #00ff88;
		font-size: 1rem;
	}

	.cmd-note {
		font-size: 0.95rem;
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
		border-top: 1px solid var(--faf-light-gray);
		margin-top: 1rem;
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

	.faq h2 {
		font-style: italic;
		color: var(--faf-black);
	}

	.faq a {
		color: var(--faf-cyan-text);
		font-weight: 600;
	}

	.footer-section {
		text-align: center;
		padding: 3rem 0;
		border-top: 1px solid var(--faf-light-gray);
		margin-top: 2rem;
	}

	.footer-tagline {
		font-weight: 800;
		font-size: 1.5rem;
		color: var(--faf-black);
	}

	.footer-iana {
		font-size: 1.1rem;
		color: var(--faf-dark);
		margin-top: 0.85rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.9rem;
		}
		.score-num {
			font-size: 2.7rem;
		}
		.lanes {
			grid-template-columns: 1fr;
		}
	}
</style>
