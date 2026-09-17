<script lang="ts">
	/**
	 * The eight choices every card makes, as they stand today. One row per card.
	 * A cell shows the value; opening it reveals the text quoted from the spec
	 * and links to the line it came from. The full register — every checkpoint,
	 * not just the latest — lives at /pack-of-cards/register.
	 */
	import { pack } from '$lib/data/pack-of-cards';

	const { dims, cards } = pack.choices;
</script>

<section id="choices" class="choices">
	<div class="section-head">
		<h2>The eight choices</h2>
		<p>
			Every card picks a way to name itself, to identify what it describes, to be found, to declare
			its type, to encode, to extend, to carry trust, and to version. Where they agree is the
			centre of the map; where only one card picks a value, that is its distance. Open a cell for
			the words the spec uses.
		</p>
	</div>

	<div class="grid-scroll">
		<table>
			<thead>
				<tr>
					<th scope="col">Card</th>
					{#each dims as dim}<th scope="col">{dim}</th>{/each}
				</tr>
			</thead>
			<tbody>
				{#each cards as card}
					<tr>
						<th scope="row">
							<span class="card-name">{card.card}</span>
							<span class="cp">{card.checkpoint}</span>
						</th>
						{#each card.cells as cell}
							<td>
								{#if cell.evidence}
									<details>
										<summary>{cell.label}</summary>
										<blockquote>{cell.evidence}</blockquote>
										{#if cell.note}<p class="note">{cell.note}</p>{/if}
										{#if cell.link}
											<a href={cell.link} target="_blank" rel="noopener">the line it cites</a>
										{/if}
										<a class="deep" href="/pack-of-cards/register#{cell.anchor}">every version</a>
									</details>
								{:else}
									<span class="bare">{cell.label}</span>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.choices {
		margin-top: 44px;
	}
	.section-head h2 {
		margin: 0 0 0.5rem;
	}
	.section-head p {
		max-width: 74ch;
		color: var(--faf-black);
	}
	.grid-scroll {
		overflow-x: auto;
		margin-top: 16px;
		border-block: 1px solid var(--faf-hairline);
	}
	table {
		border-collapse: collapse;
		font-size: 0.86rem;
		min-width: 900px;
	}
	th,
	td {
		text-align: left;
		padding: 8px 14px 8px 0;
		border-bottom: 1px solid var(--faf-hairline);
		vertical-align: top;
		color: var(--faf-black);
	}
	thead th {
		font-family: var(--font-condensed);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		font-size: 0.78rem;
		border-bottom: 2px solid var(--faf-orange);
		white-space: nowrap;
	}
	tbody th {
		white-space: nowrap;
		padding-right: 20px;
	}
	.card-name {
		display: block;
		font-weight: 700;
	}
	.cp {
		display: block;
		font: 0.74rem var(--font-mono);
		color: var(--faf-dark);
	}
	summary {
		cursor: pointer;
	}
	blockquote {
		margin: 8px 0 6px;
		padding-left: 10px;
		border-left: 3px solid var(--faf-orange);
		font-size: 0.82rem;
		max-width: 46ch;
	}
	.note {
		margin: 0 0 6px;
		font-size: 0.8rem;
		color: var(--faf-dark);
		max-width: 46ch;
	}
	a {
		color: var(--faf-cyan-text);
		font-weight: 600;
		text-decoration: none;
		font-size: 0.8rem;
		margin-right: 12px;
	}
	a:hover {
		text-decoration: underline;
	}
	.deep {
		color: var(--faf-orange);
	}
	.bare {
		color: var(--faf-dark);
	}
</style>
