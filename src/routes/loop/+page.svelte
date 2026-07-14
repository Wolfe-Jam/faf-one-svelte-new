<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>FAF is loop engineering for context</title>
	<meta name="description" content="Cram context into your instruction file and it drifts — re-derived every run, paid for in tokens. FAF splits context (.faf) from instructions (CLAUDE.md/AGENTS.md) and keeps them in sync — bi-sync is the loop. One hit, no drift, instant, on-demand. Don't argue it — ask Claude how it's set up." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="FAF is loop engineering for context" />
	<meta property="og:description" content="Loops made agents act. FAF makes context loop — bi-sync, no drift. Don't ask us, ask Claude how it's grounded." />
	<meta property="og:url" content="https://www.faf.one/loop" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FAF is loop engineering for context" />
	<meta name="twitter:description" content="bi-sync is the loop: context split from instructions, kept in sync, no drift. Ask Claude how it's set up." />
</svelte:head>

<main class="page">

	<section class="hero">
		<p class="eyebrow">Loop engineering · for context</p>
		<h1>Context is a loop.</h1>
		<p class="sub">Most repos leave it open. FAF closes it.</p>
	</section>

	<!-- The two-bar diagram -->
	<section class="bars">
		<div class="bar-block">
			<div class="bar-head"><span>Without FAF</span><span class="out bad">effort · tokens · drift</span></div>
			<div class="bar">
				<span class="seg crammed">Context + Instructions — crammed into one .md</span>
			</div>
			<p class="bar-note">One file re-derives your context every run. It drifts. You pay the tokens.</p>
		</div>

		<div class="bar-block">
			<div class="bar-head"><span>With FAF</span><span class="out good">one hit · no drift · instant</span></div>
			<div class="bar">
				<span class="seg faf">.faf · Context</span>
				<span class="seg instr">CLAUDE.md / AGENTS.md · Instructions</span>
			</div>
			<p class="bar-note">Context split out, structured, kept in sync. Read once, on-demand. AI trusts it; the project benefits.</p>
		</div>
	</section>

	<section class="content qa">
		<p class="q">TL;DR</p>
		<p>Your instruction file is doing two jobs — telling the agent <em>what to do</em> and carrying <em>what's true</em>. The second job is the leak: context re-derived every run, drifting, burning tokens. <strong>FAF splits it out into <code>.faf</code> and keeps the two in sync. That sync is the loop.</strong></p>
	</section>

	<section class="content qa">
		<p class="q">bi-sync is the loop</p>
		<p>Loops made <em>agents</em> act — Boris Cherny's Claude Code, Peter Steinberger's OpenClaw put the doing-loop on the map. FAF loops the layer underneath: <strong>knowing.</strong></p>
		<p><code>.faf ⇄ CLAUDE.md / AGENTS.md</code>, continuously reconciled. The context is the single source of truth; the instruction file is a projection of it. Change the project, the loop re-grounds — no manual re-explaining, no drift. <strong>Loops for <em>doing</em> got popular; FAF looped <em>context</em> before it had a name.</strong></p>
	</section>

	<section class="content qa">
		<p class="q">Don't ask me. Ask Claude.</p>
		<p>You don't have to take our word that the loop works — <strong>ask the AI you already trust.</strong> A Claude set up on the loop is the witness. Ask it how it's grounded, and it will tell you:</p>
		<div class="terminal">
			<code class="cmd">instructions  →  CLAUDE.md  (STATUS: BI-SYNC ACTIVE — synced from .faf)</code><br />
			<code class="cmd">context       →  project.faf  (read directly · structured · no re-derivation)</code><br />
			<code class="cmd">memory        →  MEMORY.md  (persists across sessions — the longer loop)</code>
		</div>
		<p class="cmd-note">Set up FAF, then ask your agent how it's running. It'll show you the loop — instant context, no drift, grounded. The AI is the dogfood, and the witness.</p>
	</section>

	<section class="content qa">
		<p class="q">Is FAF legit?</p>
		<p class="proof-lead">Receipts, not adjectives.</p>
		<div class="proof">
			<div class="proof-chip"><span class="proof-key">Deterministic</span><span class="proof-val">same read, every time</span></div>
			<div class="proof-chip"><span class="proof-key">IANA</span><span class="proof-val">registered media type</span></div>
			<div class="proof-chip"><span class="proof-key">SSOT</span><span class="proof-val">one source, projected</span></div>
			<div class="proof-chip"><span class="proof-key">96.1k</span><span class="proof-val">downloads</span></div>
		</div>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">Loops made agents act. FAF makes context loop.</p>
		<p class="footer-iana">Don't argue context. Ask Claude.</p>
	</section>

	<PageActions
		headline="FAF is loop engineering for context — bi-sync is the loop."
		point1="Split context (.faf) from instructions. Keep them in sync. No drift."
		point2="Don't ask us — ask Claude how it's grounded."
		url="https://www.faf.one/loop"
		hashtags="AI,Context,AgentLoop,FAF"
	/>

</main>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.hero {
		text-align: center;
		padding: 3.5rem 0 1.5rem;
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
		font-size: 2.6rem;
		font-weight: 800;
		color: var(--faf-black);
		line-height: 1.1;
		margin-bottom: 0.5rem;
	}

	.sub {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--faf-dark);
	}

	/* Two-bar diagram */
	.bars {
		padding: 1rem 0 1.5rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 1rem;
	}

	.bar-block {
		margin-bottom: 1.5rem;
	}

	.bar-block:last-child {
		margin-bottom: 0;
	}

	.bar-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--faf-dark);
		margin-bottom: 0.45rem;
	}

	.out.bad {
		color: #c0392b;
	}

	.out.good {
		color: #008B5B;
	}

	.bar {
		display: flex;
		height: 52px;
		border-radius: 8px;
		overflow: hidden;
	}

	.seg {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 700;
		color: #fff;
		text-align: center;
		padding: 0 0.6rem;
		line-height: 1.2;
	}

	.seg.crammed {
		width: 100%;
		background: #a07a55;
	}

	.seg.faf {
		width: 38%;
		background: #008B8B;
	}

	.seg.instr {
		width: 62%;
		background: #475569;
	}

	.bar-note {
		font-size: 0.88rem;
		color: var(--faf-dark);
		margin-top: 0.5rem;
		line-height: 1.6;
	}

	.content {
		padding: 1.25rem 0;
	}

	.content p {
		color: var(--faf-dark);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.qa .q {
		font-size: 1.3rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.qa p:last-child {
		margin-bottom: 0;
	}

	/* Terminal — the "ask Claude" witness block */
	.terminal {
		background: var(--faf-locked-dark);
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1rem 0 0.75rem;
		text-align: left;
		overflow-x: auto;
		line-height: 1.9;
	}

	.cmd {
		font-family: var(--font-mono);
		color: #00ff88;
		font-size: 0.9rem;
		background: none;
		padding: 0;
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

	/* Proof */
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
			font-size: 2rem;
		}
		.seg {
			font-size: 0.7rem;
		}
	}
</style>
