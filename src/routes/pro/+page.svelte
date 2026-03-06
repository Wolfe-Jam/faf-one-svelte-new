<script lang="ts">
	const FRIENDS_TOTAL = 100;
	let friendsClaimed = $state(0);
	let activeTab = $state('cli');

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
	<title>FAF Pro - Full access. Every tool. | FAF</title>
	<meta name="description" content="FAF Pro: tri-sync for faf-cli, Glass Hood diagnostics for Rust compiler. Persistent project context across every AI. From $3/mo." />
</svelte:head>

<div class="pro-page">
	<div class="back-nav">
		<a href="/" class="back-link">&larr; faf.one</a>
	</div>

	<main class="content">
		<!-- Hero -->
		<section class="hero">
			<h1 class="title">FAF Pro</h1>
			<p class="subtitle">Full access. Every tool.</p>
		</section>

		<!-- Tab Bar -->
		<div class="tab-bar">
			<a
				href="#cli"
				class="tab tab-cli"
				class:active={activeTab === 'cli'}
				onclick={() => activeTab = 'cli'}
			>
				FAF-CLI &mdash; The Original
			</a>
			<a
				href="#rust"
				class="tab tab-rust"
				class:active={activeTab === 'rust'}
				onclick={() => activeTab = 'rust'}
			>
				Rust CLI &mdash; The Binary Beast
			</a>
		</div>

		<!-- ============ CLI SECTION ============ -->
		<section id="cli" class="product-section">
			<div class="badge cli-badge">faf-cli v5 Pro</div>

			<h2 class="section-title">Persistent memory for every session</h2>
			<div class="tri-sync-hero">
				<div class="sync-flow">
					<div class="sync-node">
						<span class="sync-label">ROM</span>
						<span class="sync-desc">.faf</span>
					</div>
					<div class="sync-arrow">&rarr;</div>
					<div class="sync-node">
						<span class="sync-label">BUS</span>
						<span class="sync-desc">CLAUDE.md</span>
					</div>
					<div class="sync-arrow">&rarr;</div>
					<div class="sync-node sync-node-pro">
						<span class="sync-label">RAM</span>
						<span class="sync-desc">MEMORY.md</span>
					</div>
				</div>
				<p class="tri-sync-explain">
					<strong>bi-sync</strong> (free forever) keeps <code>.faf</code> &harr; <code>CLAUDE.md</code> in sync.<br/>
					<strong>tri-sync</strong> adds RAM &mdash; your AI remembers context, decisions, and conventions across every session. No re-explaining. Ever.
				</p>
			</div>

			<div class="interops-section">
				<h3 class="interops-title">interops &mdash; no drift</h3>
				<p class="interops-desc">
					One <code>.faf</code> source generates <code>AGENTS.md</code>, <code>.cursorrules</code>, and <code>GEMINI.md</code>. Every AI tool reads the same truth. No copy-paste. No drift.
				</p>
			</div>
		</section>

		<!-- ============ RUST SECTION ============ -->
		<section id="rust" class="product-section rust-section">
			<div class="badge rust-badge">rust-faf-cli Pro</div>

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

			<div class="install-inline">
				<div class="code-box rust-code-box">brew install Wolfe-Jam/faf/rust-faf-cli</div>
				<p class="install-alt">
					Or grab a binary from <a href="https://github.com/Wolfe-Jam/rust-faf-cli/releases" class="rust-link">GitHub Releases</a>
				</p>
			</div>
		</section>

		<!-- ============ SHARED: Pricing ============ -->
		<section class="pricing">
			<h2 class="section-title">Early-Adopter Pricing</h2>
			<p class="pricing-note">Unlimited projects. Lock in these rates forever.</p>

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
						<li>tri-sync: .faf &rarr; CLAUDE.md + AGENTS.md + .cursorrules</li>
						<li>All Rust Pro compiler features</li>
						<li>Unlimited projects</li>
						<li>Cancel anytime</li>
					</ul>
					<button class="cta-btn" onclick={() => selectPlan('monthly')}>
						Get Pro &mdash; $3/mo
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
						Get Full Access &mdash; $29/yr
					</button>
				</div>
			</div>
		</section>

		<!-- ============ SHARED: How it works ============ -->
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
						<p>Same key works in both CLIs. One key, one <code>~/.faf/license.json</code>.</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">3</div>
					<div class="step-content">
						<h4>Use</h4>
						<div class="code-box">faf tri-sync</div>
						<p>Persistent context that survives across every session. Works in both CLIs.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- ============ SHARED: FAQ ============ -->
		<section class="faq">
			<h2 class="section-title">FAQ</h2>

			<div class="faq-item">
				<h4>What stays free?</h4>
				<p>
					<code>faf init</code>, <code>faf go</code>, <code>faf git</code>, <code>faf score</code>,
					<code>faf status</code>, bi-sync (.faf &harr; CLAUDE.md), and all core CLI features. Free forever.
				</p>
			</div>

			<div class="faq-item">
				<h4>Same key for both CLIs?</h4>
				<p>
					Yes. One key, one <code>~/.faf/license.json</code>. Activate in either CLI — both read the same file. If you already have Pro, you're already unlocked everywhere.
				</p>
			</div>

			<div class="faq-item">
				<h4>What happens after the trial?</h4>
				<p>
					Free features keep working. Pro features lock. Your existing files stay — they just won't auto-update until you subscribe.
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
		transition: background 0.4s ease;
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
		margin-bottom: 2rem;
		padding-top: 1rem;
	}

	.title {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 900;
		color: #f5f5dc;
		margin: 0 0 0.5rem 0;
		letter-spacing: -0.03em;
	}

	.subtitle {
		font-size: 1.35rem;
		color: #aaa;
		font-weight: 500;
		margin: 0;
	}

	/* Tab Bar */
	.tab-bar {
		display: flex;
		gap: 0;
		margin-bottom: 2.5rem;
		border-bottom: 2px solid #333;
	}

	.tab {
		flex: 1;
		padding: 1rem 1.5rem;
		background: none;
		border: none;
		border-bottom: 3px solid transparent;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-bottom: -2px;
		transform-origin: center bottom;
	}

	.tab-cli {
		color: rgba(70, 130, 180, 0.6);
		border-bottom-color: rgba(70, 130, 180, 0.3);
	}

	.tab-rust {
		color: rgba(232, 149, 106, 0.6);
		border-bottom-color: rgba(232, 149, 106, 0.3);
	}

	.tab-cli:hover {
		color: rgba(70, 130, 180, 0.85);
	}

	.tab-rust:hover {
		color: rgba(232, 149, 106, 0.85);
	}

	.tab-cli.active {
		color: #5A9AC8;
		border-bottom-color: #5A9AC8;
		transform: scale(1.03);
		text-shadow: 0 0 12px rgba(70, 130, 180, 0.4);
	}

	.tab-rust.active {
		color: #F5A87A;
		border-bottom-color: #F5A87A;
		transform: scale(1.03);
		text-shadow: 0 0 12px rgba(232, 149, 106, 0.4);
	}

	.tab {
		text-decoration: none;
	}

	/* Product sections */
	.product-section {
		text-align: center;
		margin-bottom: 3rem;
		scroll-margin-top: 80px;
	}

	.rust-section {
		padding-top: 2rem;
		border-top: 1px solid #2a2420;
	}

	/* Badge */
	.badge {
		display: inline-block;
		padding: 0.35rem 1rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		letter-spacing: 0.05em;
	}

	.cli-badge {
		background: rgba(70, 130, 180, 0.15);
		border: 1px solid rgba(70, 130, 180, 0.4);
		color: #4682B4;
	}

	.rust-badge {
		background: rgba(232, 149, 106, 0.12);
		border: 1px solid rgba(232, 149, 106, 0.4);
		color: #E8956A;
	}

	/* Section titles */
	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: #f5f5dc;
		text-align: center;
		margin-bottom: 2rem;
	}

	/* tri-sync hero (CLI tab) */
	.tri-sync-hero {
		margin-bottom: 2.5rem;
	}

	.sync-flow {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.sync-node {
		background: #1a1a1a;
		border: 2px solid #333;
		border-radius: 12px;
		padding: 1.25rem 1.5rem;
		text-align: center;
		min-width: 110px;
	}

	.sync-node-pro {
		border-color: #4682B4;
		box-shadow: 0 0 16px rgba(70, 130, 180, 0.15);
	}

	.sync-label {
		display: block;
		font-size: 1.4rem;
		font-weight: 900;
		color: #f5f5dc;
		letter-spacing: 0.05em;
	}

	.sync-node-pro .sync-label {
		color: #4682B4;
	}

	.sync-desc {
		display: block;
		font-size: 0.8rem;
		color: #888;
		margin-top: 0.25rem;
		font-family: 'Courier New', monospace;
	}

	.sync-arrow {
		font-size: 1.5rem;
		color: #00d4d4;
		font-weight: 700;
	}

	.tri-sync-explain {
		text-align: center;
		color: #aaa;
		font-size: 1rem;
		line-height: 1.7;
	}

	.tri-sync-explain code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9rem;
	}

	.tri-sync-explain strong {
		color: #f5f5dc;
	}

	/* Interops */
	.interops-section {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem 2rem;
		text-align: center;
	}

	.interops-title {
		color: #4682B4;
		font-size: 1.15rem;
		margin: 0 0 0.75rem 0;
	}

	.interops-desc {
		color: #aaa;
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.interops-desc code {
		background: #0a0a0a;
		color: #00d4d4;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	/* Free vs Pro grid (Rust tab) */
	.free-pro-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		text-align: left;
		margin-bottom: 2rem;
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

	/* Install inline (Rust tab) */
	.install-inline {
		text-align: center;
		margin-top: 2rem;
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

	.rust-code-box {
		background: #0a0a0a;
		border: 1px solid #2a2420;
		border-radius: 6px;
		padding: 0.75rem 1rem;
		font-family: 'Courier New', monospace;
		color: #E8956A;
		font-size: 0.9rem;
		font-weight: 600;
		max-width: 500px;
		margin: 0 auto 1rem;
		text-align: center;
	}

	.rust-link {
		color: #E8956A;
		text-decoration: none;
		font-weight: 600;
	}

	.rust-link:hover {
		text-decoration: underline;
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
		content: '\2713';
		position: absolute;
		left: 0;
		color: #00d4d4;
		font-weight: 700;
		font-size: 0.85rem;
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

	.step-content code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85rem;
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
			font-size: 1.15rem;
		}

		.tab-bar {
			flex-direction: column;
			gap: 0;
		}

		.tab {
			padding: 0.85rem 1rem;
			font-size: 0.9rem;
		}

		.sync-flow {
			flex-direction: column;
			gap: 0.75rem;
		}

		.sync-arrow {
			transform: rotate(90deg);
		}

		.sync-node {
			min-width: unset;
			width: 100%;
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
