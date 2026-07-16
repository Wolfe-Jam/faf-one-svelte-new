<script>
	const tools = [
		{
			href: '/calculator',
			title: 'ROI Calculator',
			blurb: 'Team size, hours, rate — rough savings from less context thrash.'
		},
		{
			href: '/automation-calculator',
			title: 'Automation Calculator',
			blurb: 'Workflow / automation context cost model.'
		},
		{
			href: '/incident-calculator',
			title: 'Incident Calculator',
			blurb: 'Incident response time and cost sketch.'
		},
		{
			href: '/risk-assessment',
			title: 'Risk Assessment',
			blurb: 'Project risk framing around context quality.'
		}
	];
</script>

<svelte:head>
	<title>Calculators | FAF</title>
	<meta
		name="description"
		content="FAF calculators — ROI, automation, incident, and risk tools in one place."
	/>
</svelte:head>

<main class="page">
	<section class="hero">
		<p class="eyebrow"><a href="/">Home</a> · Tools</p>
		<h1>Calculators</h1>
		<p class="sub">
			Interactive sketches. Models, not guarantees. Prefer
			<a href="/try">Try</a> and the <a href="/guides/new-project">New Project guide</a> for real
			context work.
		</p>
	</section>

	<section class="list">
		{#each tools as t}
			<a class="card" href={t.href}>
				<h2>{t.title}</h2>
				<p>{t.blurb}</p>
				<span class="cta">Open →</span>
			</a>
		{/each}
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
		font-size: 1rem;
		color: var(--faf-dark);
		line-height: 1.6;
		margin: 0;
	}
	.sub a {
		color: var(--faf-orange);
		font-weight: 600;
		text-decoration: none;
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
	}
	.card:hover {
		transform: translateY(-2px);
	}
	.card h2 {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.35rem;
	}
	.card p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		margin: 0;
		line-height: 1.55;
	}
	.cta {
		display: inline-block;
		margin-top: 0.75rem;
		font-weight: 700;
		color: var(--faf-orange);
	}
</style>
