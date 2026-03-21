<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Sponsor .faf Format | Support Open Source Development</title>
	<meta name="description" content="Support .faf format development. 43,000+ downloads, 100% free. Help us build the standard for AI project context." />
</svelte:head>

<Navigation />

<main>
	<section class="hero">
		<div class="container">
			<h1>Support <span class="faf-highlight">.faf</span> Format Development</h1>
			<p class="subtitle">43,000+ downloads • 100% free • $0 revenue (so far!)</p>
		</div>
	</section>

	<section class="story">
		<div class="container">
			<h2>The Story</h2>
			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">15,800+</div>
					<div class="stat-label">CLI Downloads</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">14,400+</div>
					<div class="stat-label">MCP Downloads</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">1,000+</div>
					<div class="stat-label">Hours Invested</div>
				</div>
				<div class="stat-card highlight">
					<div class="stat-number">$0</div>
					<div class="stat-label">Revenue (Until Now)</div>
				</div>
			</div>

			<div class="story-text">
				<p>I built .faf format to solve a problem: AI assistants needed better project context.</p>
				<p>Twelve months and 36,000 downloads later, .faf is becoming the standard for AI project understanding.</p>
				<p><strong>Everything is free. Everything is open source. But $0 revenue after 1,000+ hours isn't sustainable.</strong></p>
				<p>So I'm opening sponsorships — not to get rich, but to make this sustainable.</p>
			</div>
		</div>
	</section>

	<section class="why-sponsor">
		<div class="container">
			<h2>Why Sponsor?</h2>

			<div class="reason-grid">
				<div class="reason-card">
					<div class="reason-icon">☑️</div>
					<h3>Better AI Experiences</h3>
					<p>.faf adoption improves Claude, Copilot, Cursor, and every AI coding assistant. When developers use .faf, YOUR product gets better.</p>
				</div>

				<div class="reason-card">
					<div class="reason-icon">⚡</div>
					<h3>Strategic Infrastructure</h3>
					<p>You're not sponsoring a tool — you're sponsoring a FORMAT. Like JSON, YAML, or Markdown. Infrastructure that makes the ecosystem better.</p>
				</div>

				<div class="reason-card">
					<div class="reason-icon">🧡</div>
					<h3>Support Innovation</h3>
					<p>Open source infrastructure needs sustainable funding. Your sponsorship keeps .faf free for everyone while supporting continued development.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="tiers">
		<div class="container">
			<h2>Sponsorship Tiers</h2>

			<div class="tier-tabs">
				<div class="tab-buttons">
					<button class="tab-button active">For Individuals</button>
					<button class="tab-button">For Companies</button>
				</div>
			</div>

			<!-- Individual Tier -->
			<div class="tier-content">
				<div class="tier-card featured">
					<div class="tier-header">
						<h3>☕ Coffee Supporter</h3>
						<div class="tier-price">$3-10 one-time</div>
					</div>
					<div class="tier-body">
						<ul class="tier-benefits">
							<li>☑️ Thank you! Every coffee counts</li>
							<li>☑️ Support open source development</li>
							<li>☑️ Keep .faf free forever</li>
							<li>☑️ Public thank you on Twitter</li>
						</ul>
						<a href="https://ko-fi.com/wolfejam" target="_blank" rel="noopener noreferrer" class="cta-button">
							Buy Me a Coffee ☕
						</a>
					</div>
				</div>

				<div class="tier-card">
					<div class="tier-header">
						<h3>🧡 Monthly Supporter</h3>
						<div class="tier-price">$5-10/month</div>
					</div>
					<div class="tier-body">
						<ul class="tier-benefits">
							<li>☑️ Everything in Coffee tier</li>
							<li>☑️ Name in README (all repos)</li>
							<li>☑️ Supporter badge on Ko-fi</li>
							<li>☑️ Monthly thank you</li>
						</ul>
						<a href="https://ko-fi.com/wolfejam" target="_blank" rel="noopener noreferrer" class="cta-button secondary">
							Become a Supporter
						</a>
					</div>
				</div>
			</div>

			<!-- Company Tiers -->
			<div class="tier-content" style="display: none;">
				<div class="company-tiers">
					<div class="tier-card">
						<div class="tier-badge bronze">Bronze</div>
						<div class="tier-header">
							<div class="tier-price">$50/month</div>
						</div>
						<div class="tier-body">
							<ul class="tier-benefits">
								<li>☑️ Logo in README (all repos)</li>
								<li>☑️ Logo on faf.one/sponsors</li>
								<li>☑️ "Supported by [Company]" badge</li>
								<li>☑️ Public thank you</li>
							</ul>
						</div>
					</div>

					<div class="tier-card featured">
						<div class="tier-badge silver">Silver</div>
						<div class="tier-header">
							<div class="tier-price">$200/month</div>
						</div>
						<div class="tier-body">
							<ul class="tier-benefits">
								<li>☑️ Everything in Bronze</li>
								<li>☑️ Blog post mention</li>
								<li>☑️ Priority bug fixes</li>
								<li>☑️ Quarterly updates</li>
							</ul>
						</div>
					</div>

					<div class="tier-card">
						<div class="tier-badge gold">Gold</div>
						<div class="tier-header">
							<div class="tier-price">$500/month</div>
						</div>
						<div class="tier-body">
							<ul class="tier-benefits">
								<li>☑️ Everything in Silver</li>
								<li>☑️ Case study on faf.one</li>
								<li>☑️ Priority features</li>
								<li>☑️ Direct communication</li>
							</ul>
						</div>
					</div>

					<div class="tier-card">
						<div class="tier-badge platinum">Platinum</div>
						<div class="tier-header">
							<div class="tier-price">$1,000+/month</div>
						</div>
						<div class="tier-body">
							<ul class="tier-benefits">
								<li>☑️ Everything in Gold</li>
								<li>☑️ Custom integration support</li>
								<li>☑️ Roadmap input</li>
								<li>☑️ Joint marketing</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="company-cta">
					<p><strong>Interested in company sponsorship?</strong></p>
					<p>Email me at <a href="mailto:james@faf.one">james@faf.one</a> or DM on Twitter/GitHub</p>
				</div>
			</div>
		</div>
	</section>

	<section class="current-sponsors">
		<div class="container">
			<h2>Current Sponsors</h2>
			<p class="sponsors-intro">Thank you to everyone supporting .faf development!</p>

			<!-- Will populate as sponsors join -->
			<div class="sponsors-grid">
				<div class="sponsor-placeholder">
					<p>Be the first sponsor!</p>
					<p class="sponsor-subtitle">Your logo could be here 🧡</p>
				</div>
			</div>
		</div>
	</section>

	<section class="faq">
		<div class="container">
			<h2>FAQ</h2>

			<div class="faq-list">
				<div class="faq-item">
					<h3>Will .faf stay free?</h3>
					<p><strong>Yes, 100%.</strong> Everything stays MIT licensed and free forever. Sponsorships help me work on it sustainably, but won't change the free/open nature of .faf.</p>
				</div>

				<div class="faq-item">
					<h3>What if I can't afford to sponsor?</h3>
					<p><strong>That's completely fine!</strong> Keep using .faf for free. Sponsorships are optional, for those who want to support continued development.</p>
				</div>

				<div class="faq-item">
					<h3>Can I sponsor as a company?</h3>
					<p><strong>Absolutely!</strong> Email <a href="mailto:james@faf.one">james@faf.one</a> to discuss company sponsorship tiers. We have options from $50/month to custom enterprise arrangements.</p>
				</div>

				<div class="faq-item">
					<h3>Where does the money go?</h3>
					<p><strong>Directly to development.</strong> Hosting costs, domain fees, and my time building .faf tools. 100% transparent — I'll share updates on how sponsorships support the project.</p>
				</div>

				<div class="faq-item">
					<h3>Why not just get a job?</h3>
					<p><strong>Fair question!</strong> I have a job — but .faf development happens in my free time. Sponsorships help justify the 1,000+ hours I've invested (and will continue investing). Think of it as supporting infrastructure that makes your tools better.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="final-cta">
		<div class="container">
			<h2>Ready to Support?</h2>
			<p class="cta-subtitle">Every coffee helps keep .faf free and actively maintained.</p>
			<div class="cta-buttons">
				<a href="https://ko-fi.com/wolfejam" target="_blank" rel="noopener noreferrer" class="cta-button large">
					☕ Buy Me a Coffee
				</a>
				<a href="mailto:james@faf.one" class="cta-button large secondary">
					💼 Company Sponsorship
				</a>
			</div>
			<p class="thank-you">Thank you for supporting open source! 🧡⚡🏎️</p>
		</div>
	</section>
</main>

<Footer />

<style>
	:global(:root) {
		--faf-orange: #FF6B35;
		--faf-cream: #FFF8E7;
		--faf-black: #0a0a0a;
		--faf-white: #ffffff;
	}

	main {
		background: var(--faf-white);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	section {
		padding: 4rem 0;
	}

	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, var(--faf-black) 0%, #1a1a1a 100%);
		color: var(--faf-white);
		text-align: center;
		padding: 6rem 0;
	}

	.hero h1 {
		font-size: 3rem;
		font-weight: 800;
		margin: 0 0 1rem 0;
		line-height: 1.2;
	}

	.faf-highlight {
		color: var(--faf-orange);
		font-family: monospace;
	}

	.subtitle {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
	}

	/* Story Section */
	.story {
		background: var(--faf-cream);
	}

	.story h2 {
		text-align: center;
		font-size: 2.5rem;
		margin: 0 0 3rem 0;
		color: var(--faf-black);
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin: 0 0 3rem 0;
	}

	.stat-card {
		background: var(--faf-white);
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
		border: 2px solid rgba(0, 0, 0, 0.1);
	}

	.stat-card.highlight {
		border-color: var(--faf-orange);
		background: rgba(255, 107, 53, 0.05);
	}

	.stat-number {
		font-size: 3rem;
		font-weight: 800;
		color: var(--faf-orange);
		margin: 0 0 0.5rem 0;
	}

	.stat-label {
		font-size: 1rem;
		color: var(--faf-black);
		font-weight: 600;
	}

	.story-text {
		max-width: 800px;
		margin: 0 auto;
		font-size: 1.125rem;
		line-height: 1.8;
	}

	.story-text p {
		margin: 0 0 1rem 0;
	}

	.story-text strong {
		color: var(--faf-orange);
	}

	/* Why Sponsor Section */
	.why-sponsor {
		background: var(--faf-white);
	}

	.why-sponsor h2 {
		text-align: center;
		font-size: 2.5rem;
		margin: 0 0 3rem 0;
	}

	.reason-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.reason-card {
		background: var(--faf-cream);
		padding: 2rem;
		border-radius: 8px;
		border-left: 4px solid var(--faf-orange);
	}

	.reason-icon {
		font-size: 3rem;
		margin: 0 0 1rem 0;
	}

	.reason-card h3 {
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
		color: var(--faf-black);
	}

	.reason-card p {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(0, 0, 0, 0.7);
		margin: 0;
	}

	/* Tiers Section */
	.tiers {
		background: var(--faf-cream);
	}

	.tiers h2 {
		text-align: center;
		font-size: 2.5rem;
		margin: 0 0 3rem 0;
	}

	.tier-tabs {
		margin: 0 0 3rem 0;
	}

	.tab-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.tab-button {
		padding: 1rem 2rem;
		border: 2px solid var(--faf-orange);
		background: var(--faf-white);
		color: var(--faf-orange);
		font-size: 1rem;
		font-weight: 700;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.tab-button.active {
		background: var(--faf-orange);
		color: var(--faf-white);
	}

	.tier-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.tier-card {
		background: var(--faf-white);
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		overflow: hidden;
	}

	.tier-card.featured {
		border-color: var(--faf-orange);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
	}

	.tier-header {
		padding: 2rem 2rem 1rem 2rem;
		text-align: center;
	}

	.tier-badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.875rem;
		margin: 0 0 1rem 0;
	}

	.tier-badge.bronze {
		background: #CD7F32;
		color: white;
	}

	.tier-badge.silver {
		background: #C0C0C0;
		color: var(--faf-black);
	}

	.tier-badge.gold {
		background: #FFD700;
		color: var(--faf-black);
	}

	.tier-badge.platinum {
		background: #E5E4E2;
		color: var(--faf-black);
		border: 2px solid #B9B9B9;
	}

	.tier-card h3 {
		font-size: 1.5rem;
		margin: 0 0 0.5rem 0;
	}

	.tier-price {
		font-size: 1.75rem;
		font-weight: 800;
		color: var(--faf-orange);
	}

	.tier-body {
		padding: 1rem 2rem 2rem 2rem;
	}

	.tier-benefits {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
	}

	.tier-benefits li {
		padding: 0.5rem 0;
		font-size: 1rem;
		line-height: 1.6;
	}

	.cta-button {
		display: inline-block;
		width: 100%;
		padding: 1rem 2rem;
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
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}

	.cta-button.secondary {
		background: var(--faf-white);
		color: var(--faf-orange);
		border: 2px solid var(--faf-orange);
	}

	.cta-button.secondary:hover {
		background: var(--faf-orange);
		color: var(--faf-white);
	}

	/* Company Tiers */
	.company-tiers {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.company-cta {
		grid-column: 1 / -1;
		text-align: center;
		margin: 2rem 0 0 0;
		padding: 2rem;
		background: var(--faf-white);
		border-radius: 8px;
	}

	.company-cta a {
		color: var(--faf-orange);
		font-weight: 700;
	}

	/* Current Sponsors */
	.current-sponsors {
		background: var(--faf-white);
	}

	.current-sponsors h2 {
		text-align: center;
		font-size: 2.5rem;
		margin: 0 0 1rem 0;
	}

	.sponsors-intro {
		text-align: center;
		font-size: 1.125rem;
		color: rgba(0, 0, 0, 0.7);
		margin: 0 0 3rem 0;
	}

	.sponsors-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}

	.sponsor-placeholder {
		background: var(--faf-cream);
		padding: 3rem 2rem;
		border-radius: 8px;
		text-align: center;
		border: 2px dashed rgba(0, 0, 0, 0.2);
	}

	.sponsor-placeholder p {
		margin: 0.5rem 0 0 0;
		font-weight: 700;
		color: var(--faf-black);
	}

	.sponsor-subtitle {
		color: rgba(0, 0, 0, 0.5);
		font-weight: 400 !important;
	}

	/* FAQ Section */
	.faq {
		background: var(--faf-cream);
	}

	.faq h2 {
		text-align: center;
		font-size: 2.5rem;
		margin: 0 0 3rem 0;
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
		color: rgba(0, 0, 0, 0.7);
	}

	.faq-item a {
		color: var(--faf-orange);
		font-weight: 700;
	}

	/* Final CTA */
	.final-cta {
		background: linear-gradient(135deg, var(--faf-black) 0%, #1a1a1a 100%);
		color: var(--faf-white);
		text-align: center;
		padding: 6rem 0;
	}

	.final-cta h2 {
		font-size: 3rem;
		margin: 0 0 1rem 0;
	}

	.cta-subtitle {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0 0 3rem 0;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
		margin: 0 0 2rem 0;
	}

	.cta-button.large {
		padding: 1.5rem 3rem;
		font-size: 1.25rem;
		width: auto;
	}

	.thank-you {
		font-size: 1.5rem;
		color: rgba(255, 255, 255, 0.5);
		margin: 2rem 0 0 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2rem;
		}

		.stats-grid {
			grid-template-columns: 1fr 1fr;
		}

		.reason-grid,
		.tier-content,
		.company-tiers {
			grid-template-columns: 1fr;
		}

		.tab-buttons {
			flex-direction: column;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: stretch;
		}

		.final-cta h2 {
			font-size: 2rem;
		}
	}
</style>
