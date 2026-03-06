<script lang="ts">
	const FRIENDS_TOTAL = 100;
	let friendsClaimed = $state(0);

	async function loadFriendsCount() {
		try {
			const res = await fetch('/api/friends-count');
			const data = await res.json();
			friendsClaimed = data.claimed;
		} catch { /* silent */ }
	}

	$effect(() => { loadFriendsCount(); });

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
	<title>FAF Pro - tri-sync for faf-cli | FAF</title>
	<meta name="description" content="Unlock tri-sync: persistent project context across Claude, Cursor, and Gemini. Early-adopter pricing from $3/mo." />
</svelte:head>

<div class="pro-page">
	<div class="back-nav">
		<a href="/" class="back-link">← Back to Home</a>
	</div>

	<main class="content">
		<!-- Hero -->
		<section class="hero">
			<div class="badge">faf-cli v5 Pro</div>
			<h1 class="title">tri-sync</h1>
			<p class="subtitle">Define once. Remember forever.</p>
			<p class="subtitle-detail">
				Persistent project context (ROM) and session memory (RAM) that survives across every AI session.
			</p>
		</section>

		<!-- What is tri-sync -->
		<section class="explanation">
			<h2 class="section-title">What tri-sync does</h2>
			<div class="rom-ram">
				<div class="concept-card">
					<div class="concept-icon">💾</div>
					<h3>ROM: Your .faf file</h3>
					<p>The single source of truth. Your project DNA — stack, conventions, architecture — defined once in structured YAML.</p>
				</div>
				<div class="concept-arrow">→</div>
				<div class="concept-card">
					<div class="concept-icon">⚡</div>
					<h3>RAM: Session memory</h3>
					<p>CLAUDE.md becomes persistent memory — your AI remembers project context, decisions, and conventions across every session. No re-explaining.</p>
				</div>
			</div>
			<p class="explanation-note">
				bi-sync (free) keeps <code>.faf</code> ↔ <code>CLAUDE.md</code> in sync.<br/>
				<strong>tri-sync</strong> adds AGENTS.md, .cursorrules, and GEMINI.md — so every AI tool gets the same persistent memory.
			</p>
		</section>

		<!-- Pricing Cards -->
		<section class="pricing">
			<h2 class="section-title">Early-Adopter Pricing</h2>
			<p class="pricing-note">Persistent project context (ROM) and session memory (RAM) — unlimited projects.<br/>The only IANA-registered solution. Lock in these rates forever.</p>

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
						<li>tri-sync: .faf → CLAUDE.md + AGENTS.md + .cursorrules</li>
						<li>GEMINI.md generation</li>
						<li>Unlimited projects</li>
						<li>Cancel anytime</li>
					</ul>
					<button class="cta-btn" onclick={() => selectPlan('monthly')}>
						Get tri-sync — $3/mo
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
						Get tri-sync — $19/yr
					</button>
				</div>

				<!-- Global Bundle — Friends of FAF -->
				<div class="pricing-card global">
					<div class="global-badge">Friends of FAF</div>
					<div class="card-header">
						<h3>FAF Pro &mdash; All Areas</h3>
						<div class="price">
							<span class="price-strike">$240</span>
							<span class="price-current">$29</span>
							<span class="price-period">/yr</span>
						</div>
						<div class="discount">88% off</div>
						<p class="price-tagline">Full access. Every tool.</p>
					</div>
					<ul class="features">
						<li>CLI tri-sync &mdash; everything above</li>
						<li>Rust compiler Pro (included)</li>
						<li>MCP server Pro included</li>
						<li>Multi-version license &mdash; one key, all CLIs</li>
						<li>Early-adopters get rewarded &mdash; rate locked forever</li>
					</ul>
					<div class="friends-counter">
						<span class="friends-text"><span class="friends-claimed">{friendsClaimed}</span> of {FRIENDS_TOTAL} claimed</span>
						<div class="friends-bar">
							<div class="friends-fill" style="width: {(friendsClaimed / FRIENDS_TOTAL) * 100}%"></div>
						</div>
					</div>
					<button class="cta-btn cta-global" onclick={() => selectPlan('global')}>
						Get Full Access — $29/yr
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
						<p>Pick a plan above. You'll get a license key via email.</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">2</div>
					<div class="step-content">
						<h4>Activate</h4>
						<div class="code-box">faf pro activate FAF-XXXX-XXXX-XXXX-XXXX</div>
					</div>
				</div>
				<div class="step">
					<div class="step-number">3</div>
					<div class="step-content">
						<h4>Sync</h4>
						<div class="code-box">faf tri-sync</div>
						<p>ROM (project DNA) + RAM (session memory via CLAUDE.md) — persistent context that survives across every session. That's the real unlock.</p>
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
					<code>faf init</code>, <code>faf go</code>, <code>faf git</code>, <code>faf score</code>,
					bi-sync (.faf ↔ CLAUDE.md), and all core CLI features. Free forever.
				</p>
			</div>

			<div class="faq-item">
				<h4>What happens after the trial?</h4>
				<p>
					bi-sync keeps working. tri-sync locks. Your existing generated files stay — they just won't auto-update until you subscribe.
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
					Anytime. Monthly cancels at end of billing cycle. Annual cancels at end of year. No questions asked.
				</p>
			</div>
		</section>

		<!-- Blog link -->
		<section class="blog-link">
			<div class="divider"></div>
			<p class="blog-text">
				Want the full story? Read the <a href="/blog" class="blog-anchor">release blog post</a>.
			</p>
		</section>
	</main>
</div>

<style>
	:global(body) {
		background: #0a0a0a !important;
	}

	.pro-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		color: #f5f5dc;
	}

	.back-nav {
		padding: 1rem 2rem;
		border-bottom: 1px solid #333;
	}

	.back-link {
		color: #4682B4;
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
		background: rgba(70, 130, 180, 0.15);
		border: 1px solid rgba(70, 130, 180, 0.4);
		color: #4682B4;
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
		color: #f5f5dc;
		margin: 0 0 0.75rem 0;
		letter-spacing: -0.03em;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #00d4d4;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
	}

	.subtitle-detail {
		font-size: 1.1rem;
		color: #aaa;
		margin: 0;
		line-height: 1.6;
	}

	.subtitle-detail code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		font-size: 0.95rem;
	}

	/* Explanation / ROM-RAM */
	.explanation {
		margin-bottom: 3rem;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: #f5f5dc;
		text-align: center;
		margin-bottom: 2rem;
	}

	.rom-ram {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1.5rem;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.concept-card {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
	}

	.concept-icon {
		font-size: 2.5rem;
		margin-bottom: 0.75rem;
	}

	.concept-card h3 {
		color: #4682B4;
		font-size: 1.15rem;
		margin: 0 0 0.75rem 0;
	}

	.concept-card p {
		color: #aaa;
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.concept-arrow {
		font-size: 2rem;
		color: #00d4d4;
		font-weight: 700;
	}

	.explanation-note {
		text-align: center;
		color: #aaa;
		font-size: 1rem;
		line-height: 1.7;
	}

	.explanation-note code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9rem;
	}

	.explanation-note strong {
		color: #f5f5dc;
	}

	/* Pricing */
	.pricing {
		margin-bottom: 3rem;
	}

	.pricing-note {
		text-align: center;
		color: #aaa;
		font-size: 1.05rem;
		margin: -1rem 0 2rem 0;
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.pricing-card {
		background: #1a1a1a;
		border: 2px solid #333;
		border-radius: 12px;
		padding: 2rem 1.5rem;
		display: flex;
		flex-direction: column;
		position: relative;
		transition: all 0.3s;
	}

	.pricing-card:hover {
		border-color: #555;
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
	}

	.pricing-card.recommended {
		border-color: #00d4d4;
		box-shadow: 0 0 20px rgba(0, 212, 212, 0.15);
	}

	.pricing-card.recommended:hover {
		border-color: #00ffff;
		box-shadow: 0 0 30px rgba(0, 212, 212, 0.25);
	}

	.pricing-card.global {
		border-color: #4682B4;
	}

	.pricing-card.global:hover {
		border-color: #5A9AC8;
		box-shadow: 0 0 30px rgba(70, 130, 180, 0.2);
	}

	.recommended-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: #00d4d4;
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
		color: #f5f5dc;
		font-size: 1.25rem;
		margin: 0 0 0.5rem 0;
	}

	.price {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.price-strike {
		color: #666;
		text-decoration: line-through;
		font-size: 1.1rem;
	}

	.price-current {
		font-size: 3rem;
		font-weight: 900;
		color: #f5f5dc;
		line-height: 1;
	}

	.price-period {
		color: #aaa;
		font-size: 1rem;
	}

	.price-tagline {
		color: #00d4d4;
		font-size: 1.1rem;
		font-weight: 600;
		font-style: italic;
		margin: 0.5rem 0 0 0;
	}

	.discount {
		display: inline-block;
		background: rgba(39, 201, 63, 0.15);
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
		color: #aaa;
		font-size: 0.9rem;
		border-bottom: 1px solid #222;
		padding-left: 1.25rem;
		position: relative;
	}

	.features li:before {
		content: '☑️';
		position: absolute;
		left: 0;
		font-size: 0.75rem;
	}

	.features li:last-child {
		border-bottom: none;
	}

	.cta-btn {
		width: 100%;
		padding: 0.9rem 1.5rem;
		background: rgba(255, 255, 255, 0.08);
		border: 2px solid #555;
		color: #f5f5dc;
		border-radius: 8px;
		font-weight: 700;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.cta-btn:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: #888;
		transform: translateY(-1px);
	}

	.cta-btn.cta-primary {
		background: rgba(0, 212, 212, 0.15);
		border-color: #00d4d4;
		color: #00d4d4;
	}

	.cta-btn.cta-primary:hover {
		background: rgba(0, 212, 212, 0.25);
		border-color: #00ffff;
	}

	.cta-btn.cta-global {
		background: rgba(70, 130, 180, 0.15);
		border-color: #4682B4;
		color: #4682B4;
	}

	.cta-btn.cta-global:hover {
		background: rgba(70, 130, 180, 0.25);
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
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.step-number {
		width: 40px;
		height: 40px;
		background: rgba(70, 130, 180, 0.15);
		border: 2px solid #4682B4;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		color: #4682B4;
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-content h4 {
		color: #f5f5dc;
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.step-content p {
		color: #aaa;
		margin: 0.5rem 0 0 0;
		font-size: 0.95rem;
	}

	.code-box {
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 6px;
		padding: 0.75rem 1rem;
		font-family: 'Courier New', monospace;
		color: #00d4d4;
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
		border-bottom: 1px solid #222;
	}

	.faq-item:last-child {
		border-bottom: none;
	}

	.faq-item h4 {
		color: #4682B4;
		margin: 0 0 0.5rem 0;
		font-size: 1.05rem;
	}

	.faq-item p {
		color: #aaa;
		margin: 0;
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.faq-item code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	/* Blog link */
	.blog-link {
		text-align: center;
		padding: 1rem 0 2rem;
	}

	.divider {
		width: 100px;
		height: 2px;
		background: linear-gradient(90deg, transparent, #4682B4, transparent);
		margin: 0 auto 2rem;
	}

	.blog-text {
		color: #aaa;
		font-size: 1rem;
	}

	.blog-anchor {
		color: #4682B4;
		text-decoration: none;
		font-weight: 600;
	}

	.blog-anchor:hover {
		text-decoration: underline;
	}

	/* Friends counter */
	.friends-counter {
		margin-bottom: 1.25rem;
		text-align: center;
	}

	.friends-text {
		font-size: 0.85rem;
		color: #aaa;
	}

	.friends-claimed {
		color: #4682B4;
		font-weight: 700;
	}

	.friends-bar {
		height: 4px;
		background: #222;
		border-radius: 2px;
		margin-top: 0.5rem;
		overflow: hidden;
	}

	.friends-fill {
		height: 100%;
		background: #4682B4;
		border-radius: 2px;
		transition: width 0.6s ease;
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

		.rom-ram {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.concept-arrow {
			transform: rotate(90deg);
			text-align: center;
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
