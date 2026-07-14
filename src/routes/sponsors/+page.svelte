<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>Sponsor .faf | Support the AI-Context Standard</title>
	<meta
		name="description"
		content="Sponsor FAF on GitHub. MIT-licensed, IANA-registered, Anthropic-merged — sponsorship funds maintenance of the open standard."
	/>
	<meta property="og:title" content="Sponsor .faf" />
	<meta
		property="og:description"
		content="MIT licensed. IANA-registered. Sponsorship on GitHub keeps the standard free and maintained."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="page">
	<section class="hero">
		<h1>Sponsor <span class="faf">.faf</span></h1>
		<p class="sub">The standard stays free. Sponsorship funds maintenance.</p>
		<div class="hero-receipts">
			<span class="receipt">IANA-registered</span>
			<span class="receipt">Anthropic MCP #2759</span>
			<span class="receipt">MIT licensed</span>
		</div>
		<a
			href="https://github.com/sponsors/Wolfe-Jam"
			target="_blank"
			rel="noopener noreferrer"
			class="cta"
		>
			Sponsor on GitHub →
		</a>
		<p class="cta-note">Monthly or one-time — tiers and amounts live on GitHub Sponsors.</p>
	</section>

	<section class="content">
		<h2>Why sponsor</h2>
		<div class="cards">
			<div class="card">
				<h3>Infrastructure, not a product</h3>
				<p>
					Like JSON or Markdown — a format devs depend on. Sponsorship keeps the spec, tooling, and
					registrations maintained.
				</p>
			</div>
			<div class="card">
				<h3>Free stays free</h3>
				<p>
					faf-cli, MCP servers, and SDKs stay MIT. Sponsorship pays for upkeep — domains, CI, IANA —
					not access.
				</p>
			</div>
			<div class="card">
				<h3>Built in the open</h3>
				<p>One maintainer, public repos, public receipts. GitHub Sponsors is the only sponsorship path.</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>FAQ</h2>
		<div class="faq">
			<div class="faq-item">
				<h3>Will .faf stay free?</h3>
				<p>Yes. The format and dev tools stay MIT. Sponsorship never gates the standard.</p>
			</div>
			<div class="faq-item">
				<h3>Can't afford it?</h3>
				<p>Use .faf for free. Sponsor only if you want to fund continued maintenance.</p>
			</div>
			<div class="faq-item">
				<h3>Sponsoring as a company?</h3>
				<p>GitHub Sponsors supports org accounts. Pick any tier or amount on the sponsor page.</p>
			</div>
			<div class="faq-item">
				<h3>Where does it go?</h3>
				<p>Domains, edge hosting, CI, IANA upkeep, and time on the spec and tooling.</p>
			</div>
		</div>
	</section>

	<PageActions
		headline="Back the open AI-context standard."
		point1="IANA-registered · Anthropic MCP #2759 · MIT licensed."
		point2="Sponsor on GitHub — free software stays free."
		url="https://faf.one/sponsors"
		hashtags="AI,OpenSource,FAF"
	/>
</main>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem 2rem;
	}

	.hero {
		text-align: center;
		padding: 3.5rem 0 2.5rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 0.5rem;
	}

	.hero h1 {
		font-size: 2.4rem;
		font-weight: 800;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.faf {
		color: var(--faf-orange);
		font-family: var(--font-mono);
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-gray);
		margin: 0 0 1.25rem;
		font-weight: 600;
	}

	.hero-receipts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.receipt {
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--faf-dark);
		background: var(--faf-gray-light);
		padding: 0.35rem 0.65rem;
		border-radius: 6px;
	}

	.cta-note {
		margin: 1rem 0 0;
		font-size: 0.85rem;
		color: var(--faf-gray);
	}

	.content {
		padding: 2rem 0;
	}

	.content h2 {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 1.25rem;
		text-align: center;
	}

	.cards {
		display: grid;
		gap: 1rem;
	}

	.card {
		background: var(--faf-white);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
	}

	.card h3 {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.card p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0;
	}

	.faq {
		display: grid;
		gap: 0.85rem;
	}

	.faq-item {
		background: var(--faf-white);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
	}

	.faq-item h3 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.faq-item p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0;
	}

	.cta {
		display: inline-block;
		padding: 0.9rem 1.75rem;
		background: var(--faf-orange);
		color: #fff;
		text-decoration: none;
		font-weight: 700;
		border-radius: 8px;
		font-size: 1.05rem;
		transition: transform 0.15s ease;
	}

	.cta:hover {
		transform: translateY(-1px);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.9rem;
		}
	}
</style>