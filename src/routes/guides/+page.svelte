<script>
	const guides = [
		{
			href: '/guides/new-project',
			title: 'New Project',
			tag: 'Start here',
			blurb: 'init → auto → go. Three paths to 100%. README optional.'
		},
		{
			href: '/guides/dogfooding',
			title: 'Dogfooding',
			tag: 'Discipline',
			blurb: 'README first, .faf second, code third — when you want the full ritual.'
		},
		{
			href: '/guides/dogfooding/standard',
			title: 'Standard workflow',
			tag: 'Greenfield',
			blurb: 'Step-by-step greenfield path with score progression.'
		},
		{
			href: '/guides/dogfooding/wasm',
			title: 'WASM workflow',
			tag: 'Rust / WASM',
			blurb: 'Same order, stack-specific notes for WASM projects.'
		}
	];
</script>

<svelte:head>
	<title>Guides | FAF</title>
	<meta
		name="description"
		content="FAF guides — new project core loop, dogfooding, and stack-specific paths."
	/>
</svelte:head>

<main class="page">
	<section class="hero">
		<p class="eyebrow"><a href="/">Home</a> · Guides</p>
		<h1>Guides</h1>
		<p class="sub">Run faf. Answer what it asks. Context grows.</p>
	</section>

	<section class="list">
		{#each guides as g}
			<a class="card" href={g.href}>
				<span class="tag">{g.tag}</span>
				<h2>{g.title}</h2>
				<p>{g.blurb}</p>
				<span class="cta">Open →</span>
			</a>
		{/each}
	</section>

	<section class="also">
		<p>
			Also: <a href="/try">Try it</a> · <a href="/6ws">6Ws</a> ·
			<a href="/cli">CLI</a> · <a href="https://docs.faf.one">Docs</a>
		</p>
	</section>
</main>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem 3rem;
	}
	.hero {
		padding: 3rem 0 1.5rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 1.5rem;
	}
	.eyebrow {
		font-size: 0.85rem;
		color: var(--faf-dark);
		margin: 0 0 0.75rem;
	}
	.eyebrow a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}
	h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}
	.sub {
		font-size: 1.05rem;
		color: var(--faf-dark);
		margin: 0;
	}
	.list {
		display: grid;
		gap: 1rem;
	}
	.card {
		display: block;
		background: var(--faf-surface);
		border: 1px solid var(--faf-light-gray);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
		transition: transform 0.15s ease;
	}
	.card:hover {
		transform: translateY(-2px);
	}
	.tag {
		display: inline-block;
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--faf-orange);
		margin-bottom: 0.35rem;
	}
	.card h2 {
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.35rem;
	}
	.card p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.55;
		margin: 0;
	}
	.cta {
		display: inline-block;
		margin-top: 0.75rem;
		font-weight: 700;
		color: var(--faf-orange);
	}
	.also {
		margin-top: 2rem;
		text-align: center;
		font-size: 0.95rem;
		color: var(--faf-dark);
	}
	.also a {
		color: var(--faf-orange);
		font-weight: 600;
		text-decoration: none;
	}
</style>
