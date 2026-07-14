<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>Sponsor .faf | Support the AI-Context Standard</title>
	<meta
		name="description"
		content="FAF is free software, IANA-registered, and Anthropic-merged — built and maintained in the open. Sponsorship funds development of the standard."
	/>
	<meta property="og:title" content="Sponsor .faf" />
	<meta
		property="og:description"
		content="Free, open, IANA-registered, Anthropic-merged. Sponsorship keeps the AI-context standard free and moving."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="page">
	<section class="hero">
		<h1>Sponsor <span class="faf">.faf</span></h1>
		<p class="sub">Free software. Built in the open. Funded by you.</p>
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
			Sponsor on GitHub
		</a>
	</section>

	<section class="content">
		<h2>Why Sponsor</h2>
		<div class="cards">
			<div class="card">
				<h3>A Format, Not a Tool</h3>
				<p>
					You back infrastructure — like JSON, YAML, or Markdown. The standard that gives any AI
					your project context.
				</p>
			</div>
			<div class="card">
				<h3>Free Stays Free</h3>
				<p>
					MIT licensed. IANA-registered. Anthropic-merged. The format and dev tools stay free — no
					paywalls, no lock-in. Sponsorship keeps it that way.
				</p>
			</div>
			<div class="card">
				<h3>Maintained in the Open</h3>
				<p>
					The CLI, the MCP server fleet, the spec, the IANA registrations — built and maintained in
					the open. Your support makes it sustainable.
				</p>
			</div>
		</div>
	</section>

	<section class="content funnel">
		<h2>Pick a Tier on GitHub</h2>
		<p>
			Monthly from $5. One-time from $20. Custom amounts welcome. Every sponsor is a receipt that
			open AI-context infrastructure is worth backing.
		</p>
		<a
			href="https://github.com/sponsors/Wolfe-Jam"
			target="_blank"
			rel="noopener noreferrer"
			class="cta"
		>
			Sponsor on GitHub
		</a>
	</section>

	<section class="content">
		<h2>FAQ</h2>
		<div class="faq">
			<div class="faq-item">
				<h3>Will .faf stay free?</h3>
				<p>
					Yes. faf-cli, the MCPs and SDKs stay MIT licensed and free for all devs. Sponsorship funds
					sustainable maintenance — it never gates the format. Team and Enterprise licenses are paid
					products on top.
				</p>
			</div>
			<div class="faq-item">
				<h3>Can't afford to sponsor?</h3>
				<p>That's fine. Keep using .faf for free. Sponsorship is for those who want to back continued development.</p>
			</div>
			<div class="faq-item">
				<h3>Sponsoring as a company?</h3>
				<p>
					The Works Team and Title Sponsor tiers are built for companies — logo placement, a direct
					line, and a say in what gets built next.
				</p>
			</div>
			<div class="faq-item">
				<h3>Where does it go?</h3>
				<p>
					Straight to keeping FAF alive — domains, edge hosting, CI, IANA upkeep, and real time on
					the standard.
				</p>
			</div>
		</div>
	</section>

	<PageActions
		headline="Back open AI-context infrastructure."
		point1="FAF is IANA-registered, Anthropic-merged, MIT licensed."
		point2="Sponsorship keeps the standard free and moving."
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
		font-size: 1.15rem;
		color: var(--faf-gray);
		margin: 0 0 1.25rem;
		font-weight: 600;
	}

	.hero-receipts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 1.75rem;
	}

	.receipt {
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--faf-dark);
		background: var(--faf-gray-light);
		padding: 0.35rem 0.65rem;
		border-radius: 6px;
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

	.content p {
		color: var(--faf-dark);
		line-height: 1.7;
		margin: 0;
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
	}

	.funnel {
		text-align: center;
		border-top: 1px solid var(--faf-light-gray);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.funnel p {
		max-width: 36rem;
		margin: 0 auto 1.5rem;
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