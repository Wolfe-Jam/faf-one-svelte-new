<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Sponsor .faf | Support the AI-Context Standard</title>
	<meta name="description" content="FAF is free software, IANA-registered, and Anthropic-merged — built and maintained in the open. Sponsorship funds the development and maintenance of the standard. Sponsor on GitHub." />
	<meta property="og:title" content="Sponsor .faf" />
	<meta property="og:description" content="Free, open, IANA-registered, Anthropic-merged. Sponsorship keeps the AI-context standard free and moving." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Navigation />

<main>
	<section class="hero">
		<div class="container">
			<h1>Sponsor <span class="faf-highlight">.faf</span></h1>
			<p class="subtitle">Free software. Built in the open. Funded by you.</p>
			<a href="https://github.com/sponsors/Wolfe-Jam" target="_blank" rel="noopener noreferrer" class="cta-button large">
				Sponsor on GitHub
			</a>
		</div>
	</section>

	<section class="why">
		<div class="container">
			<h2>Why Sponsor</h2>
			<div class="why-grid">
				<div class="why-card">
					<h3>A Format, Not a Tool</h3>
					<p>You back infrastructure — like JSON, YAML, or Markdown. The standard that gives any AI your project context.</p>
				</div>
				<div class="why-card">
					<h3>Free Stays Free</h3>
					<p>MIT licensed. IANA-registered twice. Anthropic-merged. The format and dev tools stay free — no paywalls, no lock-in. Sponsorship keeps it that way.</p>
				</div>
				<div class="why-card">
					<h3>Maintained in the Open</h3>
					<p>The CLI, the MCP server fleet, the spec, the IANA registrations — built and maintained solo, in the open. Your support makes it sustainable.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="funnel">
		<div class="container">
			<h2>Pick a Tier on GitHub</h2>
			<p class="funnel-text">Monthly from $5. One-time from $20. Custom amounts welcome. Every sponsor is a receipt that open AI-context infrastructure is worth backing.</p>
			<a href="https://github.com/sponsors/Wolfe-Jam" target="_blank" rel="noopener noreferrer" class="cta-button large">
				Sponsor on GitHub
			</a>
		</div>
	</section>

	<section class="faq">
		<div class="container">
			<h2>FAQ</h2>
			<div class="faq-list">
				<div class="faq-item">
					<h3>Will .faf stay free?</h3>
					<p>Yes. faf-cli, the MCPs and SDKs will stay MIT licensed and free for all devs. Sponsorship funds sustainable maintenance — it never gates the format. Team versions and Enterprise licenses are paid.</p>
				</div>
				<div class="faq-item">
					<h3>Can't afford to sponsor?</h3>
					<p>That's fine. Keep using .faf for free. Sponsorship is for those who want to back continued development.</p>
				</div>
				<div class="faq-item">
					<h3>Sponsoring as a company?</h3>
					<p>The Works Team and Title Sponsor tiers are built for companies — logo placement, a direct line, and a say in what gets built next.</p>
				</div>
				<div class="faq-item">
					<h3>Where does it go?</h3>
					<p>Straight to keeping FAF alive — domains, edge hosting, CI, the IANA upkeep, and real time on the standard.</p>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	main {
		background: var(--faf-cream);
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	section {
		padding: 4rem 0;
	}

	/* Hero — flat, no gradient (rule #10) */
	.hero {
		background: var(--faf-black);
		color: var(--faf-white);
		text-align: center;
		padding: 6rem 0;
	}

	.hero h1 {
		font-size: 3rem;
		font-weight: 800;
		margin: 0 0 1rem 0;
	}

	.faf-highlight {
		color: var(--faf-orange);
		font-family: monospace;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-white);
		font-weight: 600;
		margin: 0 0 2.5rem 0;
	}

	/* Why */
	.why {
		background: var(--faf-cream);
	}

	.why h2,
	.funnel h2,
	.faq h2 {
		text-align: center;
		font-size: 2.5rem;
		margin: 0 0 3rem 0;
		color: var(--faf-black);
	}

	.why-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.why-card {
		background: var(--faf-white);
		padding: 2rem;
		border-radius: 8px;
		border-left: 4px solid var(--faf-orange);
	}

	.why-card h3 {
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
		color: var(--faf-black);
	}

	.why-card p {
		font-size: 1rem;
		line-height: 1.6;
		margin: 0;
		color: var(--faf-dark);
	}

	/* Funnel */
	.funnel {
		background: var(--faf-white);
		text-align: center;
	}

	.funnel-text {
		max-width: 640px;
		margin: 0 auto 2.5rem;
		font-size: 1.125rem;
		line-height: 1.7;
		color: var(--faf-dark);
	}

	/* FAQ */
	.faq {
		background: var(--faf-cream);
	}

	.faq-list {
		max-width: 800px;
		margin: 0 auto;
	}

	.faq-item {
		background: var(--faf-white);
		padding: 2rem;
		border-radius: 8px;
		margin: 0 0 1.5rem 0;
		border-left: 4px solid var(--faf-orange);
	}

	.faq-item h3 {
		font-size: 1.25rem;
		margin: 0 0 1rem 0;
		color: var(--faf-black);
	}

	.faq-item p {
		font-size: 1rem;
		line-height: 1.6;
		margin: 0;
		color: var(--faf-dark);
	}

	/* CTA */
	.cta-button {
		display: inline-block;
		padding: 1rem 2.5rem;
		background: var(--faf-orange);
		color: var(--faf-white);
		text-align: center;
		font-weight: 700;
		font-size: 1rem;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.cta-button:hover {
		background: #ff8555;
		transform: translateY(-2px);
	}

	.cta-button.large {
		padding: 1.25rem 3rem;
		font-size: 1.25rem;
	}

	@media (max-width: 768px) {
		.hero h1 { font-size: 2rem; }
		.why h2, .funnel h2, .faq h2 { font-size: 2rem; }
		.why-grid { grid-template-columns: 1fr; }
	}
</style>
