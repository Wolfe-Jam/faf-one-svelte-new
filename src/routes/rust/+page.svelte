<script lang="ts">
	function selectPlan(plan: string) {
		if (plan === 'monthly') {
			window.open('https://buy.stripe.com/9B6eVfakl5V48j12IEbV60j', '_blank');
		} else if (plan === 'annual') {
			window.open('https://buy.stripe.com/4gM8wR789bfofLt2IEbV60l', '_blank');
		} else if (plan === 'global') {
			window.open('https://buy.stripe.com/dRm14pakl83c56P5UQbV60m', '_blank');
		}
	}
</script>

<svelte:head>
	<title>FAF Compiler Pro — Rust-native AI-Readiness | FAF</title>
	<meta name="description" content="Unlock Glass Hood diagnostics, FAFb compilation, SVG scorecards, and multi-target sync. Rust-native FAF compiler. From $3/mo." />
</svelte:head>

<div class="rust-page">
	<div class="back-nav">
		<a href="/" class="back-link">&larr; faf.one</a>
	</div>

	<main class="content">
		<!-- Hero -->
		<section class="hero">
			<div class="badge">rust-faf-cli Pro</div>
			<h1 class="title">Compiler</h1>
			<p class="subtitle">Score it. See it. Ship it.</p>
			<p class="subtitle-detail">
				Glass Hood diagnostics. FAFb binary compilation. SVG scorecards.
				Multi-target sync. 288x faster than YAML.
			</p>
		</section>

		<!-- Free vs Pro -->
		<section class="explanation">
			<h2 class="section-title">What Pro unlocks</h2>
			<div class="free-pro-grid">
				<div class="tier-card free-card">
					<h3>Free</h3>
					<p class="tier-tagline">Always. No trial. No expiry.</p>
					<ul class="tier-list">
						<li><code>faf init</code> &mdash; create project.faf</li>
						<li><code>faf status</code> &mdash; score + tier + suggestion</li>
						<li><code>faf completions</code> &mdash; shell completions</li>
					</ul>
				</div>
				<div class="tier-card pro-card">
					<h3>Pro</h3>
					<p class="tier-tagline">14-day free trial. Then unlock.</p>
					<ul class="tier-list">
						<li><code>faf status --verbose</code> &mdash; Glass Hood deep-dive</li>
						<li><code>faf status --card</code> &mdash; SVG scorecard</li>
						<li><code>faf status --json</code> &mdash; machine-readable</li>
						<li><code>faf sync</code> &mdash; multi-target (GROK/CLAUDE/GEMINI)</li>
						<li><code>faf gold</code> &mdash; gap analysis to 100%</li>
						<li><code>faf compile</code> &mdash; .faf &rarr; .fafb binary</li>
						<li><code>faf bench</code> &mdash; race benchmark</li>
						<li><code>faf embed</code> &mdash; context headers</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Pricing Cards -->
		<section class="pricing">
			<h2 class="section-title">Early-Adopter Pricing</h2>
			<p class="pricing-note">You're early. Lock in these rates &mdash; they go up for everyone else.</p>

			<div class="pricing-grid">
				<!-- Monthly -->
				<div class="pricing-card">
					<div class="card-header">
						<h3>Monthly</h3>
						<div class="price">
							<span class="price-strike">$10</span>
							<span class="price-current">$3</span>
							<span class="price-period">/mo</span>
						</div>
						<div class="discount">70% off</div>
						<p class="price-tagline">A dime a day.</p>
					</div>
					<ul class="features">
						<li>All Pro compiler features</li>
						<li>Glass Hood + SVG + JSON</li>
						<li>Unlimited projects</li>
						<li>Cancel anytime</li>
					</ul>
					<button class="cta-btn" onclick={() => selectPlan('monthly')}>
						Start with $3/mo
					</button>
				</div>

				<!-- Annual (recommended) -->
				<div class="pricing-card recommended">
					<div class="recommended-badge">Best Value</div>
					<div class="card-header">
						<h3>Annual</h3>
						<div class="price">
							<span class="price-strike">$120</span>
							<span class="price-current">$19</span>
							<span class="price-period">/yr</span>
						</div>
						<div class="discount">84% off</div>
						<p class="price-tagline">A nickel a day.</p>
					</div>
					<ul class="features">
						<li>Everything in Monthly</li>
						<li>Unlimited projects</li>
						<li>Lock in the lowest rate</li>
						<li>Annual billing</li>
					</ul>
					<button class="cta-btn cta-primary" onclick={() => selectPlan('annual')}>
						Get Pro &mdash; $19/yr
					</button>
				</div>

				<!-- Global Bundle -->
				<div class="pricing-card global">
					<div class="global-badge">You're using Rust. You're early.</div>
					<div class="card-header">
						<h3>FAF Pro Global</h3>
						<div class="price">
							<span class="price-strike">$240</span>
							<span class="price-current">$29</span>
							<span class="price-period">/yr</span>
						</div>
						<div class="discount">88% off</div>
					</div>
					<ul class="features">
						<li>Rust compiler &mdash; everything above</li>
						<li>TypeScript CLI tri-sync (included)</li>
						<li>MCP server Pro (when available)</li>
						<li>Early-adopter rate locked forever</li>
					</ul>
					<button class="cta-btn cta-global" onclick={() => selectPlan('global')}>
						Lock in Global &mdash; $29/yr
					</button>
				</div>
			</div>
		</section>

		<!-- How it works -->
		<section class="how-it-works">
			<h2 class="section-title">How it works</h2>
			<div class="steps">
				<div class="step">
					<div class="step-number">1</div>
					<div class="step-content">
						<h4>Subscribe</h4>
						<p>Pick a plan above. License key arrives via email.</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">2</div>
					<div class="step-content">
						<h4>Activate</h4>
						<div class="code-box">faf pro activate FAF-PRO-XXXX-XXXX-XXXX</div>
					</div>
				</div>
				<div class="step">
					<div class="step-number">3</div>
					<div class="step-content">
						<h4>Use</h4>
						<div class="code-box">faf status --verbose</div>
						<p>Glass Hood shows exactly how your score is calculated &mdash; weights, categories, projections. Nothing hidden.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- FAQ -->
		<section class="faq">
			<h2 class="section-title">FAQ</h2>

			<div class="faq-item">
				<h4>What stays free?</h4>
				<p>
					<code>faf init</code>, <code>faf status</code> (basic score + tier + one suggestion), and shell completions. Free forever.
				</p>
			</div>

			<div class="faq-item">
				<h4>Same key as faf-cli?</h4>
				<p>
					Yes. One key, one <code>~/.faf/license.json</code>. Activate in either CLI &mdash; both read the same file. If you already have faf-cli Pro, you're already unlocked.
				</p>
			</div>

			<div class="faq-item">
				<h4>What happens after the trial?</h4>
				<p>
					Free features keep working. Pro features lock. Your existing files stay &mdash; they just won't update until you subscribe.
				</p>
			</div>

			<div class="faq-item">
				<h4>Will the price go up?</h4>
				<p>
					Yes. Early-adopter pricing locks in your rate forever. When we raise prices for new subscribers, yours stays the same.
				</p>
			</div>

			<div class="faq-item">
				<h4>Can I cancel?</h4>
				<p>
					Anytime. Monthly cancels at end of billing cycle. Annual/Global cancels at end of year. No questions asked.
				</p>
			</div>
		</section>

		<!-- Install -->
		<section class="install-section">
			<div class="divider"></div>
			<h2 class="section-title">Install</h2>
			<div class="code-box install-box">brew install Wolfe-Jam/faf/rust-faf-cli</div>
			<p class="install-alt">
				Or grab a binary from <a href="https://github.com/Wolfe-Jam/rust-faf-cli/releases" class="rust-link">GitHub Releases</a>
			</p>
		</section>
	</main>
</div>

<style>
	:global(body) {
		background: #0a0a0a !important;
	}

	.rust-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a0f0a 50%, #0a0a0a 100%);
		color: #e5e0d8;
	}

	.back-nav {
		padding: 1rem 2rem;
		border-bottom: 1px solid rgba(232, 149, 106, 0.2);
	}

	.back-link {
		color: #E8956A;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		transition: opacity 0.2s;
	}

	.back-link:hover {
		opacity: 0.8;
	}

	.content {
		max-width: 960px;
		margin: 0 auto;
		padding: 1.5rem 2rem 4rem;
	}

	/* Hero */
	.hero {
		text-align: center;
		margin-bottom: 3rem;
		padding-top: 1rem;
	}

	.badge {
		display: inline-block;
		background: rgba(232, 149, 106, 0.12);
		border: 1px solid rgba(232, 149, 106, 0.4);
		color: #E8956A;
		padding: 0.35rem 1rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 1.25rem;
		letter-spacing: 0.05em;
	}

	.title {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 900;
		color: #e5e0d8;
		margin: 0 0 0.75rem 0;
		letter-spacing: -0.03em;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #E8956A;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
	}

	.subtitle-detail {
		font-size: 1.1rem;
		color: #999;
		margin: 0;
		line-height: 1.6;
	}

	/* Free vs Pro */
	.explanation {
		margin-bottom: 3rem;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: #e5e0d8;
		text-align: center;
		margin-bottom: 2rem;
	}

	.free-pro-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.tier-card {
		background: #141210;
		border: 1px solid #2a2420;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.tier-card h3 {
		color: #e5e0d8;
		font-size: 1.25rem;
		margin: 0 0 0.25rem 0;
	}

	.tier-tagline {
		color: #777;
		font-size: 0.85rem;
		margin: 0 0 1rem 0;
	}

	.tier-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tier-list li {
		padding: 0.4rem 0;
		color: #aaa;
		font-size: 0.9rem;
		border-bottom: 1px solid #1e1a16;
	}

	.tier-list li:last-child {
		border-bottom: none;
	}

	.tier-list code {
		background: #0a0908;
		color: #E8956A;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.free-card {
		border-color: #2a2420;
	}

	.pro-card {
		border-color: #E8956A;
		box-shadow: 0 0 20px rgba(232, 149, 106, 0.08);
	}

	/* Pricing */
	.pricing {
		margin-bottom: 3rem;
	}

	.pricing-note {
		text-align: center;
		color: #999;
		font-size: 1.05rem;
		margin: -1rem 0 2rem 0;
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.pricing-card {
		background: #141210;
		border: 2px solid #2a2420;
		border-radius: 12px;
		padding: 2rem 1.5rem;
		display: flex;
		flex-direction: column;
		position: relative;
		transition: all 0.3s;
	}

	.pricing-card:hover {
		border-color: #4a3a2a;
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
	}

	.pricing-card.recommended {
		border-color: #E8956A;
		box-shadow: 0 0 20px rgba(232, 149, 106, 0.12);
	}

	.pricing-card.recommended:hover {
		border-color: #F5A87A;
		box-shadow: 0 0 30px rgba(232, 149, 106, 0.2);
	}

	.pricing-card.global {
		border-color: #4682B4;
	}

	.pricing-card.global:hover {
		border-color: #5A9AC8;
		box-shadow: 0 0 30px rgba(70, 130, 180, 0.15);
	}

	.recommended-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: #E8956A;
		color: #0a0a0a;
		padding: 0.25rem 1rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.global-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: #4682B4;
		color: #fff;
		padding: 0.25rem 1rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}

	.card-header {
		margin-bottom: 1.5rem;
	}

	.card-header h3 {
		color: #e5e0d8;
		font-size: 1.25rem;
		margin: 0 0 0.5rem 0;
	}

	.price {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.price-strike {
		color: #555;
		text-decoration: line-through;
		font-size: 1.1rem;
	}

	.price-current {
		font-size: 3rem;
		font-weight: 900;
		color: #e5e0d8;
		line-height: 1;
	}

	.price-period {
		color: #888;
		font-size: 1rem;
	}

	.price-tagline {
		color: #E8956A;
		font-size: 1.1rem;
		font-weight: 600;
		font-style: italic;
		margin: 0.5rem 0 0 0;
	}

	.discount {
		display: inline-block;
		background: rgba(39, 201, 63, 0.12);
		color: #27c93f;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 700;
		margin-top: 0.5rem;
	}

	.features {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem 0;
		flex: 1;
	}

	.features li {
		padding: 0.5rem 0;
		color: #999;
		font-size: 0.9rem;
		border-bottom: 1px solid #1e1a16;
		padding-left: 1.25rem;
		position: relative;
	}

	.features li:before {
		content: '\2713';
		position: absolute;
		left: 0;
		color: #E8956A;
		font-weight: 700;
		font-size: 0.85rem;
	}

	.features li:last-child {
		border-bottom: none;
	}

	.cta-btn {
		width: 100%;
		padding: 0.9rem 1.5rem;
		background: rgba(255, 255, 255, 0.05);
		border: 2px solid #3a3028;
		color: #e5e0d8;
		border-radius: 8px;
		font-weight: 700;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.cta-btn:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: #5a4a3a;
		transform: translateY(-1px);
	}

	.cta-btn.cta-primary {
		background: rgba(232, 149, 106, 0.12);
		border-color: #E8956A;
		color: #E8956A;
	}

	.cta-btn.cta-primary:hover {
		background: rgba(232, 149, 106, 0.2);
		border-color: #F5A87A;
	}

	.cta-btn.cta-global {
		background: rgba(70, 130, 180, 0.12);
		border-color: #4682B4;
		color: #4682B4;
	}

	.cta-btn.cta-global:hover {
		background: rgba(70, 130, 180, 0.2);
		border-color: #5A9AC8;
	}

	/* How it works */
	.how-it-works {
		margin-bottom: 3rem;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		background: #141210;
		border: 1px solid #2a2420;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.step-number {
		width: 40px;
		height: 40px;
		background: rgba(232, 149, 106, 0.1);
		border: 2px solid #E8956A;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		color: #E8956A;
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-content h4 {
		color: #e5e0d8;
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.step-content p {
		color: #999;
		margin: 0.5rem 0 0 0;
		font-size: 0.95rem;
	}

	.code-box {
		background: #0a0908;
		border: 1px solid #2a2420;
		border-radius: 6px;
		padding: 0.75rem 1rem;
		font-family: 'Courier New', monospace;
		color: #E8956A;
		font-size: 0.9rem;
		font-weight: 600;
	}

	/* FAQ */
	.faq {
		margin-bottom: 3rem;
	}

	.faq-item {
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid #1e1a16;
	}

	.faq-item:last-child {
		border-bottom: none;
	}

	.faq-item h4 {
		color: #E8956A;
		margin: 0 0 0.5rem 0;
		font-size: 1.05rem;
	}

	.faq-item p {
		color: #999;
		margin: 0;
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.faq-item code {
		background: #141210;
		color: #E8956A;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	/* Install */
	.install-section {
		text-align: center;
		padding: 1rem 0 2rem;
	}

	.divider {
		width: 100px;
		height: 2px;
		background: linear-gradient(90deg, transparent, #E8956A, transparent);
		margin: 0 auto 2rem;
	}

	.install-box {
		max-width: 500px;
		margin: 0 auto 1rem;
		text-align: center;
	}

	.install-alt {
		color: #777;
		font-size: 0.95rem;
	}

	.rust-link {
		color: #E8956A;
		text-decoration: none;
		font-weight: 600;
	}

	.rust-link:hover {
		text-decoration: underline;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.content {
			padding: 1rem 1.25rem 3rem;
		}

		.title {
			font-size: 3rem;
		}

		.subtitle {
			font-size: 1.25rem;
		}

		.free-pro-grid {
			grid-template-columns: 1fr;
		}

		.pricing-grid {
			grid-template-columns: 1fr;
		}

		.step {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
