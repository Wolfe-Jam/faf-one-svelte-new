<script>
	import { onMount } from 'svelte';

	let isVisible = $state(false);

	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>FAF Foundation Membership</title>
	<meta name="description" content="Join the FAF Foundation - stewards of the IANA-registered AI-context standard" />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">←</a>
</div>

<div class="membership-container" class:visible={isVisible}>
	<!-- Hero -->
	<section class="hero-section">
		<div class="container">
			<h1>Join the FAF Foundation</h1>
			<p class="hero-subtitle">Stewards of the IANA-registered AI-context standard</p>
		</div>
	</section>

	<!-- Why Join -->
	<section class="why-section">
		<div class="container">
			<h2>Why Join</h2>
			<p class="section-description">
				FAF is infrastructure. As the IANA-registered standard for AI context (<code>application/vnd.faf+yaml</code>),
				it's becoming the universal format for project understanding across all AI systems.
			</p>

			<div class="benefits-grid">
				<div class="benefit-card">
					<h3>📜 IANA Registered</h3>
					<p>Permanent standard status</p>
				</div>
				<div class="benefit-card">
					<h3>🤖 MCP Merged</h3>
					<p>Official Anthropic integration</p>
				</div>
				<div class="benefit-card">
					<h3>⚡ Production Ready</h3>
					<p>300/300 tests, sub-10ms</p>
				</div>
				<div class="benefit-card">
					<h3>🔓 Open Standard</h3>
					<p>MIT licensed, vendor-neutral</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Membership Tiers -->
	<section class="tiers-section">
		<div class="container">
			<h2>Membership Tiers</h2>

			<div class="tiers-grid">
				<!-- Strategic -->
				<div class="tier-card">
					<h3>Strategic Partner</h3>
					<div class="tier-price">Contact Us</div>
					<p class="tier-subtitle">For AI platform providers (xAI, Anthropic, Google)</p>

					<ul class="tier-features">
						<li>Custom MCP development</li>
						<li>Foundation board seat</li>
						<li>White-label rights</li>
						<li>Dedicated support</li>
						<li>Roadmap influence</li>
					</ul>

					<div class="tier-proof">
						<strong>Reference:</strong> xAI Elite Palace<br />
						<small>650K binary, 300/300 tests, &lt;10ms</small>
					</div>

					<a href="mailto:team@faf.one?subject=Strategic Partnership" class="btn btn-primary">
						Contact Sales
					</a>
				</div>

				<!-- Enterprise -->
				<div class="tier-card">
					<h3>Enterprise</h3>
					<div class="tier-price">Contact</div>
					<p class="tier-subtitle">1000+ employees</p>

					<ul class="tier-features">
						<li>Validation API access</li>
						<li>Custom schemas</li>
						<li>Priority support</li>
						<li>Compliance certification</li>
						<li>Early access</li>
					</ul>

					<a href="mailto:team@faf.one?subject=Enterprise Membership" class="btn btn-secondary">
						Request Quote
					</a>
				</div>

				<!-- Professional -->
				<div class="tier-card">
					<h3>Professional</h3>
					<div class="tier-price">Contact</div>
					<p class="tier-subtitle">10-1000 people</p>

					<ul class="tier-features">
						<li>Commercial use</li>
						<li>Web validation</li>
						<li>Community priority</li>
						<li>Member directory</li>
						<li>Roadmap updates</li>
					</ul>

					<a href="mailto:team@faf.one?subject=Professional Membership" class="btn btn-secondary">
						Learn More
					</a>
				</div>

				<!-- Individual -->
				<div class="tier-card">
					<h3>Individual</h3>
					<div class="tier-price">Free</div>
					<p class="tier-subtitle">Open source & developers</p>

					<ul class="tier-features">
						<li>MIT license</li>
						<li>Community validation</li>
						<li>Full SDK access</li>
						<li>Documentation</li>
						<li>CLI tools</li>
					</ul>

					<p class="tier-note"><small>Public projects only</small></p>

					<a href="https://docs.faf.one/getting-started" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
						Get Started
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Case Study -->
	<section class="case-section">
		<div class="container">
			<h2>Case Study: xAI Elite Palace</h2>
			<p class="section-description">Championship-grade reference implementation</p>

			<div class="case-stats">
				<div class="stat">
					<div class="stat-number">300/300</div>
					<div class="stat-label">Tests Passing</div>
				</div>
				<div class="stat">
					<div class="stat-number">&lt;10ms</div>
					<div class="stat-label">Context Switch</div>
				</div>
				<div class="stat">
					<div class="stat-number">650K</div>
					<div class="stat-label">Binary Size</div>
				</div>
				<div class="stat">
					<div class="stat-number">IANA</div>
					<div class="stat-label">Registered</div>
				</div>
			</div>

			<div class="case-features">
				<h4>What We Built:</h4>
				<ul>
					<li>Rust MCP server with 8 championship features</li>
					<li>Interactive CLI terminal for Grok integration</li>
					<li>Glass Hood transparency</li>
					<li>Production deployment at fafdev.tools/vip/xai</li>
				</ul>
			</div>

			<a href="https://fafdev.tools/vip/xai" class="btn btn-primary">View Demo →</a>
		</div>
	</section>

	<!-- ROI -->
	<section class="roi-section">
		<div class="container">
			<h2>The Value Calculation</h2>
			<div class="roi-grid">
				<div class="roi-option">
					<h4>Build Your Own</h4>
					<ul>
						<li>2+ years engineering</li>
						<li>IANA registration (6-12 months)</li>
						<li>Ecosystem adoption (3+ years)</li>
						<li>Competitive risk</li>
					</ul>
					<div class="roi-cost">$2M+ investment</div>
				</div>

				<div class="roi-vs">vs</div>

				<div class="roi-option highlight">
					<h4>FAF Foundation</h4>
					<ul>
						<li>IANA standard (day 1)</li>
						<li>Proven MCP integration</li>
						<li>Production-ready</li>
						<li>300/300 tests passing</li>
					</ul>
					<div class="roi-cost">Contact for pricing</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Governance -->
	<section class="governance-section">
		<div class="container">
			<h2>Governance</h2>
			<div class="governance-grid">
				<div>
					<h4>Structure</h4>
					<ul>
						<li><strong>Steward:</strong> James Wolfe</li>
						<li><strong>Board:</strong> Strategic Partners</li>
						<li><strong>Spec:</strong> Open RFC process</li>
					</ul>
				</div>
				<div>
					<h4>Inspired By</h4>
					<ul>
						<li><strong>Rust Foundation</strong> - Governance</li>
						<li><strong>Linux Foundation</strong> - Neutrality</li>
						<li><strong>W3C</strong> - Specification</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="faq-section">
		<div class="container">
			<h2>FAQ</h2>

			<div class="faq-item">
				<h4>Why pay for an open standard?</h4>
				<p>You're paying for validation authority, custom development, support, and roadmap influence. The standard stays open (MIT).</p>
			</div>

			<div class="faq-item">
				<h4>What if FAF doesn't become ubiquitous?</h4>
				<p>IANA registration = permanent status. MCP approval = ecosystem validation. Early members help make it ubiquitous.</p>
			</div>

			<div class="faq-item">
				<h4>Can I try first?</h4>
				<p>Yes. Individual tier is free. Professional/Enterprise pilots available. Strategic includes proof-of-concept.</p>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="cta-section">
		<div class="container">
			<h2>Join the Foundation</h2>
			<p>The future of AI context is being built now.</p>

			<div class="cta-buttons">
				<a href="mailto:team@faf.one?subject=Strategic Partnership" class="btn btn-primary">Strategic Partner</a>
				<a href="mailto:team@faf.one?subject=Enterprise" class="btn btn-secondary">Enterprise</a>
				<a href="mailto:team@faf.one?subject=Professional" class="btn btn-secondary">Professional</a>
				<a href="https://docs.faf.one/getting-started" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Individual (Free)</a>
			</div>

			<p class="cta-footer">
				<small>IANA-registered | Anthropic-merged | xAI-integrated</small>
			</p>
		</div>
	</section>
</div>

<style>
	/* Reset & Container */
	.back-nav {
		padding: 1rem 2rem;
		background: #ffffff;
		border-bottom: 1px solid #e5e5e5;
	}

	.back-button {
		color: #1a1a1a;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.back-button:hover {
		color: #00bf63;
	}

	.membership-container {
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.membership-container.visible {
		opacity: 1;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	section {
		padding: 5rem 0;
	}

	h1 {
		font-size: 3.5rem;
		font-weight: bold;
		margin: 0;
		color: #ffffff;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: #1a1a1a;
	}

	h4 {
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: #1a1a1a;
	}

	code {
		background: #1a1a1a;
		color: #00ff88;
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-family: monospace;
		font-size: 0.9em;
	}

	/* Hero */
	.hero-section {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		color: #ffffff;
		text-align: center;
		padding: 6rem 0;
	}

	.hero-subtitle {
		font-size: 1.3rem;
		color: #00ff88;
		margin-top: 1rem;
	}

	/* Why Join */
	.why-section {
		background: #fefcf8;
	}

	.section-description {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 3rem;
		font-size: 1.1rem;
		color: #4a4a4a;
		line-height: 1.6;
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.benefit-card {
		background: #ffffff;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #00bf63;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.benefit-card h3 {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.benefit-card p {
		color: #7a7a7a;
		margin: 0;
		font-size: 0.95rem;
	}

	/* Tiers */
	.tiers-section {
		background: #f9f6f1;
	}

	.tiers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.tier-card {
		background: #ffffff;
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #e5e5e5;
		display: flex;
		flex-direction: column;
		transition: all 0.3s ease;
	}

	.tier-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		border-color: #00bf63;
	}

	.tier-price {
		font-size: 2rem;
		font-weight: bold;
		color: #00bf63;
		margin: 0.5rem 0;
	}

	.tier-subtitle {
		color: #7a7a7a;
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}

	.tier-features {
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
		flex-grow: 1;
	}

	.tier-features li {
		padding: 0.5rem 0;
		color: #4a4a4a;
		border-bottom: 1px solid #e5e5e5;
		font-size: 0.95rem;
	}

	.tier-features li:last-child {
		border-bottom: none;
	}

	.tier-proof {
		background: #f9f6f1;
		padding: 1rem;
		border-radius: 8px;
		margin: 1rem 0;
		font-size: 0.9rem;
		color: #4a4a4a;
	}

	.tier-note {
		color: #7a7a7a;
		margin: 1rem 0;
	}

	/* Buttons */
	.btn {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: all 0.3s ease;
		text-align: center;
	}

	.btn-primary {
		background: #00bf63;
		color: #ffffff;
	}

	.btn-primary:hover {
		background: #00a855;
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		color: #00bf63;
		border: 2px solid #00bf63;
	}

	.btn-secondary:hover {
		background: #00bf63;
		color: #ffffff;
	}

	/* Case Study */
	.case-section {
		background: #fefcf8;
	}

	.case-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 2rem;
		margin: 2rem 0;
		text-align: center;
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: bold;
		color: #00bf63;
		font-family: monospace;
	}

	.stat-label {
		color: #7a7a7a;
		font-size: 0.9rem;
		margin-top: 0.5rem;
	}

	.case-features {
		background: #ffffff;
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
		border-left: 4px solid #00bf63;
	}

	.case-features ul {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	.case-features li {
		margin: 0.5rem 0;
		color: #4a4a4a;
	}

	/* ROI */
	.roi-section {
		background: #f9f6f1;
	}

	.roi-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		align-items: center;
		margin-top: 2rem;
	}

	.roi-option {
		background: #ffffff;
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #e5e5e5;
	}

	.roi-option.highlight {
		border-color: #00bf63;
		border-width: 3px;
	}

	.roi-option ul {
		list-style: none;
		padding: 0;
		margin: 1rem 0;
	}

	.roi-option li {
		padding: 0.5rem 0;
		color: #4a4a4a;
	}

	.roi-cost {
		font-size: 1.5rem;
		font-weight: bold;
		color: #00bf63;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 2px solid #e5e5e5;
	}

	.roi-vs {
		font-size: 1.5rem;
		font-weight: bold;
		color: #7a7a7a;
	}

	/* Governance */
	.governance-section {
		background: #1a1a1a;
		color: #ffffff;
	}

	.governance-section h2 {
		color: #ffffff;
	}

	.governance-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 3rem;
		margin-top: 2rem;
	}

	.governance-grid ul {
		list-style: none;
		padding: 0;
	}

	.governance-grid li {
		padding: 0.5rem 0;
		color: #e5e5e5;
	}

	.governance-grid strong {
		color: #00ff88;
	}

	/* FAQ */
	.faq-section {
		background: #fefcf8;
	}

	.faq-item {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e5e5e5;
	}

	.faq-item:last-child {
		border-bottom: none;
	}

	.faq-item p {
		color: #4a4a4a;
		line-height: 1.6;
		margin: 0.5rem 0 0 0;
	}

	/* CTA */
	.cta-section {
		background: linear-gradient(135deg, #00bf63 0%, #00a855 100%);
		color: #ffffff;
		text-align: center;
	}

	.cta-section h2 {
		color: #ffffff;
	}

	.cta-section p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 2rem 0;
	}

	.cta-section .btn-primary {
		background: #ffffff;
		color: #00bf63;
	}

	.cta-section .btn-primary:hover {
		background: #f9f6f1;
	}

	.cta-section .btn-secondary {
		border-color: #ffffff;
		color: #ffffff;
	}

	.cta-section .btn-secondary:hover {
		background: #ffffff;
		color: #00bf63;
	}

	.cta-footer {
		color: rgba(255, 255, 255, 0.8);
		margin-top: 2rem;
	}

	/* Mobile */
	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		section {
			padding: 3rem 0;
		}

		.roi-grid {
			grid-template-columns: 1fr;
		}

		.roi-vs {
			text-align: center;
			margin: 1rem 0;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
