<script>
	import ledger from '$lib/grounding-receipts.json';

	const runs = ledger.receipts;
	const pct = (s) => { const [a, b] = s.split('/').map(Number); return Math.round((a / b) * 100); };
	const avgCold = Math.round(runs.reduce((s, r) => s + pct(r.cold), 0) / runs.length);
	const avgFaf = Math.round(runs.reduce((s, r) => s + pct(r.faf), 0) / runs.length);
</script>

<svelte:head>
	<title>The Context Bench — how well does your AI know your repo | FAF</title>
	<meta name="description" content="Every AI re-reads your repo and guesses. We measured it — cold vs with one file of context. Mechanically graded, sha-stamped, falsifiable. Run it on your repo." />
	<meta property="og:title" content="The Context Bench — FAF Grounding" />
	<meta property="og:description" content="Without context vs with .faf. Real runs, mechanically graded, sha-stamped. Run it on your repo." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://faf.one/cards/faf-cli-claude-real.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/cards/faf-cli-claude-real.png" />
</svelte:head>

<main class="bench">
	<header class="hero">
		<p class="eyebrow">The Context Bench</p>
		<h1>How well does your AI know your repo?</h1>
		<p class="lead">
			Every AI re-reads your repo and guesses. We measured it — the same questions answered
			<strong>cold</strong>, then with <strong>one file</strong> of context. Graded against the repo's own answer key.
		</p>

		<div class="headline">
			<div class="stat">
				<span class="num cold">{avgCold}%</span>
				<span class="lbl">without context</span>
			</div>
			<span class="arrow">→</span>
			<div class="stat">
				<span class="num faf">{avgFaf}%</span>
				<span class="lbl">with <code>.faf</code></span>
			</div>
		</div>

		<p class="sub">{runs.length} real runs · mechanically graded · sha-stamped. <strong>FAF don't lie.</strong></p>
	</header>

	<section class="wall" aria-label="Grounding receipts">
		{#each runs as r}
			<article class="receipt">
				<div class="rtop">
					<span class="repo">{r.repo}</span>
					<span class="model">{r.model}</span>
				</div>
				<div class="scores">
					<span class="cold">{r.cold}</span>
					<span class="ar">→</span>
					<span class="faf">{r.faf}</span>
				</div>
				<div class="rmeta">
					<span class="seal">✪ {r.sha256}</span>
					<span class="track">{r.track}</span>
				</div>
			</article>
		{/each}
	</section>

	<section class="run">
		<h2>Run it on your repo</h2>
		<div class="term"><span class="p">$</span> <code>npx faf-cli bench</code></div>
		<p class="runsub">Your AI answers cold, then reads your <code>.faf</code> and answers again. You get the score — and a receipt.</p>
	</section>

	<section class="how">
		<h2>Why it doesn't lie</h2>
		<ul>
			<li><strong>Deterministic.</strong> The questions come from your <code>.faf</code>; grading is mechanical token-matching — no judge, no opinion.</li>
			<li><strong>Falsifiable.</strong> Every run is sha-stamped. Same repo, same answer key, every time.</li>
			<li><strong>Fair across models.</strong> Same repo → same questions → a like-for-like comparison.</li>
		</ul>
		<p class="note">These runs are <code>in-session</code> — honest, self-reported. The authoritative leaderboard runs each model under controlled conditions.</p>
	</section>
</main>

<style>
	:global(body) { background: var(--faf-cream); }

	.bench {
		max-width: 920px;
		margin: 0 auto;
		padding: 4rem 1.5rem 6rem;
		color: var(--faf-black);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.eyebrow {
		color: var(--faf-orange);
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		font-size: 0.85rem;
		margin-bottom: 0.75rem;
	}
	h1 { font-size: 2.6rem; line-height: 1.1; font-weight: 800; margin-bottom: 1rem; }
	.lead { font-size: 1.25rem; line-height: 1.5; max-width: 40ch; }
	.lead strong { color: var(--faf-orange); }

	.headline {
		display: flex; align-items: center; gap: 1.5rem;
		margin: 2.5rem 0 1rem;
	}
	.stat { display: flex; flex-direction: column; }
	.num { font-size: 3.4rem; font-weight: 800; font-family: Menlo, monospace; line-height: 1; }
	.num.cold { color: var(--faf-black); }
	.num.faf { color: var(--faf-cyan-text); }
	.lbl { font-size: 1rem; margin-top: 0.4rem; }
	.lbl code { font-family: Menlo, monospace; }
	.arrow { font-size: 2rem; color: var(--faf-orange); }
	.sub { margin-top: 0.5rem; font-size: 1rem; }
	.sub strong { color: var(--faf-cyan-text); }

	.wall {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1rem;
		margin: 3rem 0;
	}
	.receipt {
		border: 1px solid var(--faf-light-gray);
		border-radius: 12px;
		padding: 1.1rem 1.25rem;
		background: var(--faf-cream);
	}
	.rtop { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.75rem; }
	.repo { font-weight: 700; font-family: Menlo, monospace; font-size: 1.05rem; }
	.model { font-size: 0.8rem; }
	.scores { display: flex; align-items: baseline; gap: 0.6rem; font-family: Menlo, monospace; font-size: 1.7rem; font-weight: 700; }
	.scores .cold { color: var(--faf-black); }
	.scores .ar { color: var(--faf-orange); font-size: 1.2rem; }
	.scores .faf { color: var(--faf-cyan-text); }
	.rmeta { display: flex; justify-content: space-between; align-items: center; margin-top: 0.85rem; font-size: 0.72rem; font-family: Menlo, monospace; }
	.seal { color: var(--faf-orange); }
	.track { border: 1px solid var(--faf-light-gray); border-radius: 5px; padding: 1px 7px; }

	.run { margin: 3.5rem 0; }
	h2 { font-size: 1.6rem; font-weight: 800; margin-bottom: 1rem; }
	.term {
		background: #0a0a0a; border-radius: 10px; padding: 1rem 1.25rem;
		width: fit-content; font-family: Menlo, monospace; font-size: 1.15rem;
	}
	.term .p { color: var(--faf-orange); }
	.term code { color: #00ff88; font-weight: 600; }
	.runsub { margin-top: 1rem; font-size: 1.05rem; }
	.runsub code, .lead code { font-family: Menlo, monospace; background: var(--faf-light-gray); padding: 1px 6px; border-radius: 4px; }

	.how ul { list-style: none; padding: 0; margin: 1rem 0; }
	.how li { padding: 0.5rem 0; font-size: 1.05rem; line-height: 1.5; }
	.how li strong { color: var(--faf-cyan-text); }
	.how code { font-family: Menlo, monospace; }
	.note { font-size: 0.95rem; margin-top: 1rem; }
	.note code { font-family: Menlo, monospace; }

	@media (max-width: 600px) {
		h1 { font-size: 2rem; }
		.headline { gap: 1rem; }
		.num { font-size: 2.6rem; }
	}
</style>
