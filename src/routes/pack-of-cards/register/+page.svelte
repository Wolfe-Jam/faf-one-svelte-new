<script lang="ts">
	/**
	 * The full register: every checkpoint of every card, with the words quoted
	 * from the spec and the line they came from. The learn page shows the latest
	 * value per choice; this is all of them.
	 */
	import { cardRegister, pack } from '$lib/data/pack-of-cards';

	const cards = pack.choices.cards; // keeps the map's order and slugs
	const reg = cardRegister.cards;
	const DIMS = pack.choices.dims;

	function entries(values: Record<string, { value: unknown; evidence?: string; link?: string; note?: string }>) {
		return DIMS.filter((d) => values[d]).map((d) => ({ dim: d, ...values[d] }));
	}
	function show(v: unknown): string {
		if (v === null || v === undefined) return '—';
		if (Array.isArray(v)) return v.join(', ') || 'none';
		if (typeof v === 'object') {
			return Object.entries(v as Record<string, unknown>)
				.map(([k, x]) => `${k}: ${x}`)
				.join(' · ');
		}
		return String(v);
	}
</script>

<svelte:head>
	<title>Pack of Cards — the register | FAF</title>
	<meta
		name="description"
		content="Every value on the Pack of Cards map, with the text quoted from the spec and a link to the line it came from. 30 spec versions, 269 quotes."
	/>
	<meta property="og:title" content="Pack of Cards — the register" />
	<meta property="og:url" content="https://faf.one/pack-of-cards/register" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="proof-page">
	<div class="breadcrumb">
		<a href="/">Home</a> / <a href="/pack-of-cards">Pack of Cards</a> / Register
	</div>

	<header>
		<h1>The register</h1>
		<p class="subtitle">Every value, the words it came from, and the line it sits on.</p>
	</header>

	<p class="lead">
		{pack.counts.checkpoints} spec versions across {pack.counts.cards} cards. Each value is quoted
		from the card's own spec at a commit, and re-checked against the line it cites — {pack.counts
			.linked} of {pack.counts.entries} carry a permalink. The one that does not is a value a spec
		never specified.
	</p>

	<nav class="jump">
		{#each cards as c}<a href="#{c.slug}">{c.card}</a>{/each}
	</nav>

	{#each cards as c}
		<section id={c.slug} class="card-block">
			<h2>{c.card}</h2>
			<p class="repo">
				<a href="https://github.com/{reg[c.card]?.spec_repo}" target="_blank" rel="noopener">
					{reg[c.card]?.spec_repo}
				</a>
			</p>

			{#if reg[c.card]?.notes?.length}
				<details class="notes">
					<summary>Reading notes ({reg[c.card].notes.length})</summary>
					<ul>{#each reg[c.card].notes as n}<li>{n}</li>{/each}</ul>
				</details>
			{/if}

			{#each reg[c.card]?.checkpoints ?? [] as cp}
				<article class="checkpoint">
					<h3>{cp.label} <span class="date">{cp.date}</span></h3>
					{#if cp.why_checkpoint}<p class="why">{cp.why_checkpoint}</p>{/if}
					<table>
						<thead>
							<tr><th>Choice</th><th>Value</th><th>Quoted from the spec</th></tr>
						</thead>
						<tbody>
							{#each entries(cp.values) as e}
								<tr id="{c.slug}-{e.dim}">
									<th scope="row">{e.dim}</th>
									<td class="value">{show(e.value)}</td>
									<td>
										{#if e.evidence}<blockquote>{e.evidence}</blockquote>{/if}
										{#if e.note}<p class="note">{e.note}</p>{/if}
										{#if e.link}
											<a href={e.link} target="_blank" rel="noopener">the line it cites</a>
										{:else}
											<span class="none">the spec does not say</span>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</article>
			{/each}
		</section>
	{/each}

	<p class="back"><a href="/pack-of-cards">← Back to the map</a></p>
</div>

<style>
	.proof-page {
		max-width: 1100px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		color: var(--faf-black);
	}
	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
	}
	h1 {
		font-size: 2.2rem;
		font-weight: 800;
		margin: 0 0 0.4rem;
	}
	.subtitle {
		font-size: 1.1rem;
		margin: 0 0 1.4rem;
	}
	.lead {
		font-size: 1.05rem;
		padding: 1.1rem 1.3rem;
		background: var(--faf-section-alt);
		border-radius: 8px;
		border-left: 4px solid var(--faf-orange);
		max-width: 80ch;
		line-height: 1.7;
	}
	.jump {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.2rem;
		margin: 1.5rem 0 2rem;
		font-size: 0.9rem;
	}
	.card-block {
		margin-bottom: 3rem;
		scroll-margin-top: 1.5rem;
	}
	h2 {
		font-size: 1.6rem;
		margin: 0 0 0.2rem;
		border-bottom: 2px solid var(--faf-orange);
		padding-bottom: 0.3rem;
	}
	.repo {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		margin: 0.4rem 0 1rem;
	}
	h3 {
		font-size: 1rem;
		margin: 1.4rem 0 0.3rem;
	}
	.date {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--faf-dark);
		font-weight: 400;
	}
	.why {
		font-size: 0.88rem;
		color: var(--faf-dark);
		max-width: 80ch;
		margin: 0 0 0.6rem;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 0.85rem;
	}
	th,
	td {
		text-align: left;
		padding: 7px 14px 7px 0;
		border-bottom: 1px solid var(--faf-hairline);
		vertical-align: top;
	}
	thead th {
		font-family: var(--font-condensed);
		text-transform: uppercase;
		font-size: 0.76rem;
		letter-spacing: 0.04em;
	}
	tbody th {
		white-space: nowrap;
		width: 9rem;
	}
	.value {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		width: 22%;
	}
	tr {
		scroll-margin-top: 1.5rem;
	}
	blockquote {
		margin: 0 0 0.4rem;
		padding-left: 10px;
		border-left: 3px solid var(--faf-hairline);
		max-width: 60ch;
	}
	.note {
		margin: 0 0 0.4rem;
		font-size: 0.82rem;
		color: var(--faf-dark);
		max-width: 60ch;
	}
	.none {
		font-size: 0.82rem;
		color: var(--faf-dark);
	}
	.notes ul {
		max-width: 80ch;
		display: grid;
		gap: 0.5rem;
		font-size: 0.86rem;
	}
	a {
		color: var(--faf-cyan-text);
		font-weight: 600;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	summary {
		cursor: pointer;
		font-weight: 600;
	}
	.back {
		margin-top: 2rem;
	}
</style>
