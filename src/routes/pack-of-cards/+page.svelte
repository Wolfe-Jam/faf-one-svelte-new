<script lang="ts">
	import { pack } from '$lib/data/pack-of-cards';
	import PackMap from '$lib/components/PackMap.svelte';
	import ChoiceGrid from '$lib/components/ChoiceGrid.svelte';

	const { counts, receipts, server_json, also_out_there, lanes, as_of } = pack;
	const drawn = pack.map.key;
	const groups = also_out_there.groups;
	// #77 is the pair that tells the whole story: how fast we answered, and how
	// long the answer was wrong. Both numbers come from the data.
	const bySpec = receipts.filter((r) => r.ref === '#77').sort((a, b) => a.lag_days - b.lag_days);
	const fastest = receipts.reduce((a, b) => (b.lag_days < a.lag_days ? b : a), receipts[0]);
</script>

<svelte:head>
	<title>Pack of Cards — five agent-card specs, mapped | FAF</title>
	<meta
		name="description"
		content="Five cards help machines find an agent or a server: A2A, MCP Server Card, AI Catalog, ARD and .fafa. Every spec lives in public git, so we read every version and drew them as one map."
	/>
	<meta property="og:title" content="Pack of Cards — five agent-card specs, mapped" />
	<meta
		property="og:description"
		content="Five specs, all in public git. 30 spec versions, 269 quotes, each checked against the line it cites."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/pack-of-cards" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="proof-page">
	<div class="breadcrumb"><a href="/">Home</a> / Pack of Cards</div>

	<header>
		<h1>Pack of Cards</h1>
		<p class="subtitle">Five cards. One map.</p>
	</header>

	<div class="proof-content">
		<section class="intro">
			<p class="lead">
				Machines find an agent or a server through cards — small files they read. There are
				several, they overlap, and they ask the same things in different words. Every one of these
				specs lives in public git, so we read every version and drew them as one map.
			</p>
		</section>

		<!-- Not a card. First, because it is the one FAF writes today. -->
		<section class="not-a-card">
			<h2>First, the one that is not a card</h2>
			<p>
				<strong>{server_json.name}</strong> is the MCP Registry entry — how a server is published
				to a registry, rather than a card a server serves at its own door. It is not on the map,
				and it is the piece FAF writes today:
			</p>
			<div class="terminal-block"><code>faf cards --target registry</code></div>
			{#if server_json.adoption}
				<p class="adoption">{server_json.adoption}</p>
			{/if}
			{#if server_json.link}
				<p>
					<a href={server_json.link} target="_blank" rel="noopener">{server_json.spec_repo}</a>
					{#if server_json.first_date}· first in git {server_json.first_date}{/if}
				</p>
			{/if}
		</section>

		<section>
			<h2>Then the cards</h2>
			<p>
				Five, in the order the map draws them. No ranking: distance on the map means different, not
				better.
			</p>
			<ul class="drawn">
				{#each drawn as row}<li>{row.card}</li>{/each}
			</ul>
		</section>

		<PackMap />

		<ChoiceGrid />

		<section id="lanes">
			<h2>Two lanes</h2>
			<p>
				The specs move, and we move with them. Every FAF change below sits in a public repo, so
				each links to the commit. {counts.spec_events} spec events, {lanes.faf.length} FAF surfaces.
			</p>

			<div class="receipts">
				{#if fastest}
					<article class="receipt good">
						<h3>{fastest.lag_days} day{fastest.lag_days === 1 ? '' : 's'}</h3>
						<p>
							<a href={fastest.spec_link} target="_blank" rel="noopener">
								{fastest.spec} {fastest.ref}</a
							>
							merged {fastest.spec_date}.
						</p>
						<p class="says">
							<a href={fastest.faf_link} target="_blank" rel="noopener">{fastest.faf_sha}</a>
							{fastest['commit says']}
						</p>
					</article>
				{/if}
				{#if bySpec.length === 2}
					<article class="receipt bad">
						<h3>{bySpec[1].lag_days} days</h3>
						<p>
							<a href={bySpec[0].spec_link} target="_blank" rel="noopener">
								{bySpec[0].spec} {bySpec[0].ref}</a
							>
							merged {bySpec[0].spec_date}. We answered in {bySpec[0].lag_days} days — and used the
							wrong container.
						</p>
						<p class="says">
							<a href={bySpec[0].faf_link} target="_blank" rel="noopener">{bySpec[0].faf_sha}</a>
							{bySpec[0]['commit says']}
						</p>
						<p class="says">
							<a href={bySpec[1].faf_link} target="_blank" rel="noopener">{bySpec[1].faf_sha}</a>
							{bySpec[1]['commit says']}
						</p>
						<p class="lesson">
							Working group parsers rejected the document in between. Speed is not currency on its
							own — the check is.
						</p>
					</article>
				{/if}
			</div>

			<details class="all-receipts">
				<summary>Every citation we can point at ({receipts.length})</summary>
				<table>
					<thead>
						<tr><th>Spec</th><th>Merged</th><th>FAF</th><th>Lag</th><th>Commit says</th></tr>
					</thead>
					<tbody>
						{#each receipts as r}
							<tr>
								<td><a href={r.spec_link} target="_blank" rel="noopener">{r.spec} {r.ref}</a></td>
								<td>{r.spec_date}</td>
								<td><a href={r.faf_link} target="_blank" rel="noopener">{r.faf_date}</a></td>
								<td>{r.lag_days}d</td>
								<td>{r['commit says']}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</details>
		</section>

		<section id="also">
			<h2>Also out there</h2>
			<p>
				The map draws five. These are the others we looked at, and why each is or is not drawn. The
				test: a public spec with git history, describing an agent or a server so machines can find
				it.
			</p>
			{#each [['draw', 'Passes the test'], ['consider', 'Borderline'], ['not drawn', 'Not drawn']] as [k, heading]}
				{#if groups[k]?.length}
					<h3>{heading} ({groups[k].length})</h3>
					<ul class="candidates">
						{#each groups[k] as c}
							<li>
								<span class="name">
									{#if c.link}<a href={c.link} target="_blank" rel="noopener">{c.name}</a>
									{:else}{c.name}{/if}
								</span>
								<span class="reason">{c.reason}</span>
							</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</section>

		<section class="checked">
			<h2>Checked</h2>
			<p>
				{counts.checkpoints} spec versions across {counts.cards} cards. {counts.linked} of {counts.entries}
				values link to the line they were quoted from; each quote is re-checked against that line, so
				a spec that moves shows up as a failed check rather than a wrong page. As of {as_of}.
			</p>
			<p><a class="deep" href="/pack-of-cards/register">Every value, every quote, every version →</a></p>
		</section>
	</div>
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
	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
		font-weight: 600;
	}
	h1 {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.4rem;
		letter-spacing: -0.02em;
	}
	.subtitle {
		font-size: 1.2rem;
		margin: 0 0 1.5rem;
	}
	h2 {
		font-size: 1.6rem;
		font-weight: 700;
		margin: 0 0 0.6rem;
	}
	h3 {
		font-size: 1.05rem;
		margin: 1.2rem 0 0.4rem;
	}
	section {
		margin-bottom: 2.5rem;
	}
	p {
		max-width: 74ch;
		line-height: 1.7;
	}
	.lead {
		font-size: 1.12rem;
		padding: 1.2rem 1.35rem;
		background: var(--faf-section-alt);
		border-radius: 8px;
		border-left: 4px solid var(--faf-orange);
	}
	.terminal-block {
		background: var(--faf-solid-bg);
		border-radius: 8px;
		padding: 0.9rem 1.2rem;
		margin: 1rem 0;
		max-width: 74ch;
	}
	.terminal-block code {
		color: #00ff88;
		font-family: var(--font-mono);
		font-size: 0.95rem;
	}
	.adoption {
		font-size: 0.9rem;
		color: var(--faf-dark);
	}
	.drawn {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.4rem;
		padding-left: 1.1rem;
		max-width: 74ch;
	}
	.drawn li {
		font-weight: 600;
	}

	.receipts {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		margin: 1.2rem 0;
	}
	.receipt {
		padding: 1.1rem 1.25rem;
		border-radius: 8px;
		background: var(--faf-section-alt);
		border-left: 4px solid var(--faf-hairline);
	}
	.receipt.good {
		border-left-color: var(--faf-green);
	}
	.receipt.bad {
		border-left-color: var(--faf-orange);
	}
	.receipt h3 {
		margin: 0 0 0.4rem;
		font-size: 1.8rem;
		font-weight: 800;
	}
	.receipt p {
		margin: 0 0 0.5rem;
		font-size: 0.92rem;
	}
	.says {
		font-family: var(--font-mono);
		font-size: 0.8rem !important;
		color: var(--faf-dark);
	}
	.lesson {
		font-style: italic;
	}

	.all-receipts table {
		border-collapse: collapse;
		font-size: 0.84rem;
		margin-top: 0.7rem;
	}
	.all-receipts th,
	.all-receipts td {
		text-align: left;
		padding: 5px 14px 5px 0;
		border-bottom: 1px solid var(--faf-hairline);
		vertical-align: top;
	}

	.candidates {
		list-style: none;
		padding: 0;
		margin: 0.4rem 0 0;
		display: grid;
		gap: 0.6rem;
	}
	.candidates li {
		max-width: 92ch;
		padding-bottom: 0.6rem;
		border-bottom: 1px solid var(--faf-hairline);
	}
	.name {
		display: block;
		font-weight: 700;
		font-size: 0.94rem;
	}
	.reason {
		display: block;
		font-size: 0.86rem;
		color: var(--faf-dark);
	}

	a {
		color: var(--faf-cyan-text);
		font-weight: 600;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	.deep {
		color: var(--faf-orange);
		font-size: 1.02rem;
	}
	summary {
		cursor: pointer;
		font-weight: 600;
	}
</style>
