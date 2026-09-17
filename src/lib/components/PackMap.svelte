<script lang="ts">
	/**
	 * The Pack of Cards map. The two <svg> strings are machine-written by the
	 * card-evolution pipeline and land in pack-of-cards.json; everything around
	 * them is this component's own markup. The CSS below is ported from the
	 * pipeline's MAP_CSS with site tokens swapped in — `verify_public.py` checks
	 * every class the SVG uses still has a rule here.
	 */
	import { pack } from '$lib/data/pack-of-cards';

	const { key, views, positions, method, counts, as_of } = pack.map;
	let view = $state(views[0].id);
</script>

<section id="map" class="pack-map">
	<div class="section-head">
		<h2>The map</h2>
		<p>
			West to east, one line per card. The dashed line is the centre: the choices most cards share.
			A line's distance from it is how many of its choices no other card makes. Stations are spaced
			by order, not by calendar. Ticks link to the spec at that commit.
		</p>
	</div>

	<div class="map-controls">
		<ul class="map-key">
			{#each key as row}
				<li>
					<svg width="46" height="14" aria-hidden="true">
						{#if row.hollow}
							<line class="line casing {row.style}" x1="2" y1="7" x2="44" y2="7" />
							<line class="line core {row.style}" x1="2" y1="7" x2="44" y2="7" />
						{:else}
							<line class="line {row.style}" x1="2" y1="7" x2="44" y2="7" />
						{/if}
					</svg>
					{row.card}
				</li>
			{/each}
		</ul>
		<div class="view-switch" role="group" aria-label="Map view">
			{#each views as v}
				<button
					type="button"
					class="view-btn"
					aria-pressed={view === v.id}
					onclick={() => (view = v.id)}
				>
					{v.label}
				</button>
			{/each}
		</div>
	</div>

	<div class="map-scroll">
		{#each views as v}
			<div class="map-view" hidden={view !== v.id}>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- machine-written by the pipeline, gated by verify_public.py -->
				{@html v.svg}
			</div>
		{/each}
	</div>

	<details class="map-table">
		<summary>Positions as of {as_of} (table)</summary>
		<table>
			<thead>
				<tr><th>Card</th><th>Distance (of 8)</th><th>Choices only it makes</th><th>Required fields</th></tr>
			</thead>
			<tbody>
				{#each positions as p}
					<tr>
						<th scope="row">{p.card}</th>
						<td>{p.distance}</td>
						<td>{p.unique.join(', ') || 'none'}</td>
						<td>{p.required_count}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</details>

	<details class="map-method">
		<summary>How the map is drawn</summary>
		<ul>
			{#each method as note}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- pipeline copy, <b> only -->
				<li>{@html note}</li>
			{/each}
		</ul>
		<p class="checked">
			{counts.checkpoints} spec versions · {counts.quotes} quotes, each checked against the line it cites.
		</p>
	</details>
</section>

<style>
	/* Data-mark hues — the named exception in CLAUDE.md Rule 4, scoped to this
	   component so they never leak into the global palette. Data marks only. */
	.pack-map {
		--line-a2a: #2a78d6;
		--line-aicat: #eda100;
		--line-fafa: #1bb4c4;
	}
	:global([data-theme='dark']) .pack-map {
		--line-a2a: #2068cb;
		--line-aicat: #c98500;
		--line-fafa: #20a7ba;
	}

	.pack-map {
		margin-top: 44px;
	}
	.section-head h2 {
		margin: 0 0 0.5rem;
	}
	.section-head p {
		max-width: 74ch;
		color: var(--faf-black);
	}

	.map-controls {
		display: flex;
		flex-wrap: wrap;
		gap: 12px 24px;
		align-items: center;
		justify-content: space-between;
		margin-top: 14px;
	}
	.map-key {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 6px 18px;
		font-family: var(--font-condensed);
		font-size: 0.92rem;
	}
	.map-key li {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.view-switch {
		display: inline-flex;
		border: 1px solid var(--faf-border-strong);
		border-radius: 999px;
		overflow: hidden;
	}
	.view-btn {
		font: 600 0.86rem var(--font-sans);
		color: var(--faf-black);
		background: var(--faf-surface);
		border: 0;
		padding: 6px 14px;
		cursor: pointer;
	}
	/* Paired from the same flipping set, per Rule 2. */
	.view-btn[aria-pressed='true'] {
		background: var(--faf-black);
		color: var(--faf-page-bg);
	}
	.view-btn:focus-visible {
		outline: 2px solid var(--faf-cyan-text);
		outline-offset: -2px;
	}

	/* The SVG halos are painted in the page ground — this must match it exactly,
	   or every label sits in a mismatched box. Not --faf-surface. */
	.map-scroll {
		overflow-x: auto;
		margin-top: 12px;
		border-block: 1px solid var(--faf-hairline);
		background: var(--faf-page-bg);
	}
	.map-view[hidden] {
		display: none;
	}

	.pack-map :global(.map-svg) {
		display: block;
	}
	.pack-map :global(.map-svg text) {
		fill: var(--faf-black);
	}
	.pack-map :global(.map-svg .centre) {
		stroke: var(--faf-black);
		stroke-width: 1.5;
		stroke-dasharray: 2 5;
	}
	.pack-map :global(.map-svg .col) {
		stroke: var(--faf-hairline);
		stroke-width: 1;
	}
	.pack-map :global(.map-svg .date) {
		font: 10px var(--font-mono);
		font-variant-numeric: tabular-nums;
	}
	.pack-map :global(.map-svg .year) {
		font: 700 13px var(--font-condensed);
	}
	.pack-map :global(.map-svg .pole) {
		font: 700 12px var(--font-condensed);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.pack-map :global(.map-svg .centre-label) {
		font: 11px var(--font-mono);
	}
	.pack-map :global(.map-svg .note) {
		font: italic 11px var(--font-sans);
	}
	.pack-map :global(.map-svg .solo) {
		stroke: var(--faf-page-bg);
		stroke-width: 2;
		stroke-dasharray: 3 4;
	}
	.pack-map :global(.map-svg .line),
	.pack-map :global(.map-key .line) {
		fill: none;
		stroke-width: 6;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	.pack-map :global(.map-svg .terminus) {
		stroke-width: 5;
		stroke-linecap: round;
	}
	.pack-map :global(.map-svg .tick) {
		stroke-width: 4;
		stroke-linecap: round;
	}
	.pack-map :global(.a2a) {
		stroke: var(--line-a2a);
	}
	.pack-map :global(.mcp) {
		stroke: var(--faf-black);
	}
	.pack-map :global(.aicat) {
		stroke: var(--line-aicat);
	}
	.pack-map :global(.fafa) {
		stroke: var(--line-fafa);
	}
	.pack-map :global(.ard.casing),
	.pack-map :global(.ard.terminus),
	.pack-map :global(.ard.tick) {
		stroke: var(--faf-black);
	}
	.pack-map :global(.line.casing) {
		stroke-width: 8;
	}
	.pack-map :global(.line.core) {
		stroke: var(--faf-page-bg);
		stroke-width: 3;
	}
	.pack-map :global(.map-svg .line-label) {
		font: 700 13px var(--font-condensed);
	}
	.pack-map :global(.map-svg .station) {
		font: 10.5px var(--font-condensed);
	}
	.pack-map :global(.map-svg .station),
	.pack-map :global(.map-svg .line-label),
	.pack-map :global(.map-svg .note) {
		paint-order: stroke;
		stroke: var(--faf-page-bg);
		stroke-width: 4px;
		stroke-linejoin: round;
	}
	.pack-map :global(.map-svg .hit) {
		fill: transparent;
		cursor: pointer;
	}
	.pack-map :global(.map-svg a:focus-visible .hit) {
		stroke: var(--faf-cyan-text);
		stroke-width: 2;
	}
	.pack-map :global(.map-svg .interchange .link) {
		stroke: var(--faf-black);
		stroke-width: 2;
	}
	.pack-map :global(.map-svg .interchange.split .link) {
		stroke-dasharray: 3 3;
	}
	.pack-map :global(.map-svg .interchange .ring) {
		fill: var(--faf-page-bg);
		stroke: var(--faf-black);
		stroke-width: 2.5;
	}
	.pack-map :global(.map-svg .interchange:hover .ring) {
		stroke-width: 3.5;
	}

	.map-method ul {
		margin: 8px 0 0;
		padding-left: 18px;
		max-width: 74ch;
		display: grid;
		gap: 6px;
		font-size: 0.9rem;
	}
	.map-method .checked {
		margin: 12px 0 0;
		font-size: 0.86rem;
		color: var(--faf-dark);
	}
	.map-table table {
		border-collapse: collapse;
		margin-top: 8px;
		font-size: 0.86rem;
	}
	.map-table th,
	.map-table td {
		text-align: left;
		padding: 4px 12px 4px 0;
		border-bottom: 1px solid var(--faf-hairline);
		vertical-align: top;
	}
	.map-table td {
		font-variant-numeric: tabular-nums;
	}
	summary {
		cursor: pointer;
		font-weight: 600;
		margin-top: 18px;
	}
</style>
