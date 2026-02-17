<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	let email = '';
	let submitted = false;

	onMount(() => {
		mounted = true;
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		// TODO: Integrate with email service
		console.log('Email signup:', email);
		submitted = true;
		email = '';
		setTimeout(() => submitted = false, 3000);
	}

	function scrollToSignup() {
		const signup = document.getElementById('signup');
		if (signup) {
			signup.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>WJTTC: Championship-Grade Testing | FAF</title>
	<meta name="description" content="F1-inspired testing framework. 15x faster commits. Zero quality loss. Free Community Edition. Pro modules launching Q2 2026." />
	<meta property="og:title" content="WJTTC: Championship-Grade Testing" />
	<meta property="og:description" content="When brakes must work flawlessly, so must our tests. F1-inspired tiered testing framework." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="wjttc-page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="breadcrumb">
			<a href="/">Home</a> / WJTTC
		</div>
		<h1>🏎️ WJTTC</h1>
		<p class="wjttc-full-name">WOLFEJAM TECHNICAL TESTING CERTIFICATION</p>
		<p class="subtitle">Championship-Grade Testing Framework</p>
		<p class="tagline">"When brakes must work flawlessly, so must our tests"</p>

		<div class="hero-stats">
			<div class="stat">
				<div class="stat-value">15x</div>
				<div class="stat-label">Faster Commits</div>
			</div>
			<div class="stat">
				<div class="stat-value">100%</div>
				<div class="stat-label">Quality Maintained</div>
			</div>
			<div class="stat">
				<div class="stat-value">9</div>
				<div class="stat-label">Test Tiers</div>
			</div>
		</div>
	</section>

	<!-- Problem/Solution -->
	<section class="problem-solution">
		<div class="problem">
			<h2>❌ The Testing Dilemma</h2>
			<p>Most teams face a painful trade-off:</p>
			<ul>
				<li><strong>Run all tests on every commit</strong> → 3-5 minute wait → developers bypass tests</li>
				<li><strong>Run few tests on commits</strong> → fast feedback → bugs slip through</li>
				<li><strong>No middle ground</strong> → frustration → technical debt</li>
			</ul>
		</div>

		<div class="solution">
			<h2>✅ The F1-Inspired Solution</h2>
			<p>WJTTC introduces tiered testing inspired by Formula 1 engineering:</p>
			<ul>
				<li><strong>Brake Tests</strong> - Critical safety (fast, pre-commit ~20s)</li>
				<li><strong>Engine Tests</strong> - Performance validation (build, ~2-5min)</li>
				<li><strong>Aero Tests</strong> - Full optimization (pre-release, ~5-10min)</li>
			</ul>
			<p class="highlight">Fast feedback loops. Comprehensive validation. Zero compromises.</p>
		</div>
	</section>

	<!-- Proof Point -->
	<section class="proof">
		<h2>🏆 Proven in Production</h2>
		<div class="case-study">
			<div class="case-study-header">
				<h3>faf-enterprise</h3>
				<span class="badge">100% 🏆 Trophy</span>
			</div>
			<div class="metrics">
				<div class="metric">
					<div class="before">Before: 3-5 min</div>
					<div class="arrow">→</div>
					<div class="after">After: 20 sec</div>
					<div class="improvement">15x faster</div>
				</div>
			</div>
			<p class="case-study-desc">
				Real-world implementation with 833 tests. Pre-commit hook runs 9 critical "brake" tests in 20 seconds.
				Full suite runs during build and pre-publish. Zero quality loss. Zero developer frustration.
			</p>
			<a href="/blog/wjttc-faf-aware" class="read-more">Read the full story →</a>
		</div>

		<div class="video-demo">
			<video autoplay loop muted playsinline>
				<source src="/blog/wjttc-testing-scroll.mov" type="video/mp4">
				Your browser does not support the video tag.
			</video>
			<p class="video-caption">WJTTC Testing Philosophy - Championship standards in action 🏎️</p>
		</div>
	</section>

	<!-- Product Tiers -->
	<section class="tiers">
		<h2>Choose Your Championship Level</h2>

		<div class="tier-cards">
			<!-- Community -->
			<div class="tier-card community">
				<div class="tier-header">
					<h3>Community Edition</h3>
					<div class="price">FREE</div>
					<div class="price-note">Forever</div>
				</div>
				<ul class="features">
					<li>✅ MCP server certification</li>
					<li>✅ 9-tier test framework</li>
					<li>✅ Score calculator (0-100%)</li>
					<li>✅ Badge generation</li>
					<li>✅ CLI tool</li>
					<li>✅ Open source</li>
				</ul>
				<div class="cta">
					<code class="install">npm install -g wjttc</code>
					<a href="https://www.npmjs.com/package/wjttc" target="_blank" class="btn btn-secondary">View on npm →</a>
				</div>
			</div>

			<!-- Professional -->
			<div class="tier-card pro">
				<div class="tier-badge">Most Popular</div>
				<div class="tier-header">
					<h3>Professional</h3>
					<div class="price">$99-299</div>
					<div class="price-note">per project/year</div>
				</div>
				<ul class="features">
					<li>✅ Everything in Community</li>
					<li>✅ Pre-commit optimizer</li>
					<li>✅ 4-layer enforcer</li>
					<li>✅ Test suite generator</li>
					<li>✅ Smart test selection</li>
					<li>✅ CI/CD templates</li>
				</ul>
				<div class="cta">
					<div class="launch-badge">Launching Q2 2026</div>
					<button class="btn btn-primary" onclick={scrollToSignup}>Get Notified</button>
				</div>
			</div>

			<!-- Enterprise -->
			<div class="tier-card enterprise">
				<div class="tier-header">
					<h3>Enterprise</h3>
					<div class="price">$2,500+</div>
					<div class="price-note">per year</div>
				</div>
				<ul class="features">
					<li>✅ Everything in Pro</li>
					<li>✅ Monorepo support (33-slot)</li>
					<li>✅ Custom test generation</li>
					<li>✅ Flake detection & fixing</li>
					<li>✅ À la carte modules</li>
					<li>✅ White-glove service</li>
				</ul>
				<div class="cta">
					<div class="launch-badge">Launching Q3 2026</div>
					<button class="btn btn-secondary" onclick={scrollToSignup}>Get Notified</button>
				</div>
			</div>
		</div>
	</section>

	<!-- 4-Layer Architecture -->
	<section class="architecture">
		<h2>The 4-Layer Enforcement System</h2>

		<div class="layers">
			<div class="layer-group-wrapper">
				<div class="layer-group">
					<div class="layer">
						<div class="layer-badge">
							<div class="layer-number">1</div>
							<div class="layer-label">Layer</div>
						</div>
						<h3>TypeScript Strict</h3>
						<p>Type safety checks.<br>Zero errors allowed.</p>
						<div class="layer-time rapid">~5s</div>
					</div>
					<div class="layer brake-layer">
						<div class="layer-badge">
							<div class="layer-number">2</div>
							<div class="layer-label">Layer</div>
						</div>
						<h3>Brake Tests</h3>
						<p>Critical paths only.<br>Pre-commit.</p>
						<div class="layer-time rapid">~20s</div>
					</div>
				</div>
				<div class="group-label">⚡ Rapid Testing (&lt; 30s)</div>
			</div>

			<div class="layer-group-wrapper">
				<div class="layer-group">
					<div class="layer">
						<div class="layer-badge">
							<div class="layer-number">3</div>
							<div class="layer-label">Layer</div>
						</div>
						<h3>Full Test Suite</h3>
						<p>Comprehensive.<br>Build process.</p>
						<div class="layer-time">3-5 min</div>
					</div>
					<div class="layer verify-layer">
						<div class="layer-badge">
							<div class="layer-number">4</div>
							<div class="layer-label">Layer</div>
						</div>
						<h3>Verification</h3>
						<p>Complete validation.<br>Pre-publish.</p>
						<div class="layer-time">3-5 min</div>
					</div>
				</div>
				<div class="group-label">🔍 Comprehensive (3-5 min)</div>
			</div>
		</div>

		<div class="race-quote">
			<p class="quote">"If your car can go 220 MPH, your brakes better fucking work!"</p>
			<p class="attribution">--wolfejam</p>
			<p class="context">[pure race track, pure energy]</p>
		</div>
	</section>

	<!-- Big Orange -->
	<section class="big-orange">
		<div class="orange-hero">
			<img src="/blog/wjttc-orange-cars.png" alt="McLaren F1 and Ford Escort Mk2 in papaya orange" />
		</div>
		<div class="orange-story">
			<h2>🍊 The Big Orange Philosophy</h2>
			<p class="lead">
				WJTTC is inspired by McLaren Formula One Racing and their iconic <strong>Papaya Orange</strong>
				introduced in 1968—the same year the founder was born.
			</p>
			<p>
				The Big Orange 🍊 is our badge of excellence—the "Michelin Star for Repos."
				It's not calculated. It's earned through championship-grade engineering.
			</p>

			<div class="orange-badge-system">
				<h3>Badge System</h3>
				<div class="badges">
					<div class="badge-item">
						<div class="badge-icon">🏆</div>
						<div class="badge-name">Trophy</div>
						<div class="badge-score">100%</div>
					</div>
					<div class="badge-item special">
						<div class="badge-icon">🍊</div>
						<div class="badge-name">Big Orange</div>
						<div class="badge-score">Awarded</div>
					</div>
				</div>
				<p class="badge-note">
					<strong>100% 🏆🍊 = Best-in-Class</strong><br>
					Must score 100% + demonstrate championship-grade engineering
				</p>
			</div>

			<div class="orange-holders">
				<h3>Current Big Orange Holders</h3>
				<ul>
					<li>claude-faf-mcp - 100% 🏆🍊</li>
					<li>faf-mcp - 100% 🏆🍊</li>
					<li>grok-faf-mcp - 100% 🏆🍊</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Email Signup -->
	<section class="signup" id="signup">
		<h2>Get Notified When Pro Launches</h2>
		<p>Be the first to know when WJTTC Professional Edition launches in Q2 2026.</p>

		<form onsubmit={handleSubmit}>
			<div class="form-group">
				<input
					type="email"
					bind:value={email}
					placeholder="your@email.com"
					required
					disabled={submitted}
				/>
				<button type="submit" class="btn btn-primary" disabled={submitted}>
					{submitted ? '✓ Subscribed!' : 'Notify Me'}
				</button>
			</div>
		</form>

		{#if submitted}
			<p class="success-message">✓ You're on the list! We'll notify you when Pro launches.</p>
		{/if}
	</section>

	<!-- Related -->
	<section class="related">
		<h2>Learn More</h2>
		<div class="related-links">
			<a href="/blog/wjttc-faf-aware" class="related-card">
				<h3>🍊 WJTTC Goes FAF-Aware</h3>
				<p>How WJTTC tested itself and earned 100% 🏆</p>
				<span class="read-more">Read the story →</span>
			</a>
			<a href="https://www.npmjs.com/package/wjttc" target="_blank" class="related-card">
				<h3>📦 npm Package</h3>
				<p>Install WJTTC Community Edition</p>
				<span class="read-more">View on npm →</span>
			</a>
			<a href="https://github.com/Wolfe-Jam/wjttc" target="_blank" class="related-card">
				<h3>💻 GitHub</h3>
				<p>Source code and documentation</p>
				<span class="read-more">View on GitHub →</span>
			</a>
		</div>
	</section>

	<!-- Footer Note -->
	<section class="footer-note">
		<p>Built with .faf ☑️ The McLaren-Inspired standard for testing 🏎️🍊</p>
		<p class="ecosystem">Part of the <a href="/">FAF Ecosystem</a></p>
	</section>
</div>

<style>
	.wjttc-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	/* Breadcrumb */
	.breadcrumb {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #000;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	/* Hero */
	.hero {
		text-align: center;
		padding: 3rem 0;
		border-bottom: 2px solid #eee;
		margin-bottom: 3rem;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		margin: 0;
		color: #000;
	}

	.hero .wjttc-full-name {
		font-family: 'Roboto Mono', monospace;
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: 0.15em;
		color: #333;
		margin: 0.75rem 0;
	}

	.hero .subtitle {
		font-size: 1.5rem;
		color: #666;
		margin: 0.5rem 0;
	}

	.hero .tagline {
		font-size: 1.2rem;
		font-style: italic;
		color: #FF6B35;
		margin: 1rem 0 2rem 0;
	}

	.hero-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 2rem;
		max-width: 600px;
		margin: 2rem auto 0;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		font-size: 3rem;
		font-weight: 700;
		color: #FF6B35;
		line-height: 1;
	}

	.stat-label {
		font-size: 0.9rem;
		color: #666;
		margin-top: 0.5rem;
	}

	/* Problem/Solution */
	.problem-solution {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 4rem;
	}

	.problem h2 {
		color: #ff3333;
	}

	.solution h2 {
		color: #27c93f;
	}

	.problem-solution h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	.problem-solution ul {
		list-style: none;
		padding: 0;
	}

	.problem-solution li {
		margin: 1rem 0;
		padding-left: 1.5rem;
		position: relative;
	}

	.problem-solution li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.5rem;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: #666;
	}

	.highlight {
		background: #fff;
		padding: 1rem;
		border-left: 4px solid #FF6B35;
		border-radius: 4px;
		margin-top: 1rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.problem-solution {
			grid-template-columns: 1fr;
		}
	}

	/* Proof */
	.proof {
		margin-bottom: 4rem;
	}

	.proof h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.case-study {
		background: linear-gradient(135deg, #fafafa 0%, #fff 100%);
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #FF6B35;
		margin-bottom: 2rem;
	}

	.case-study-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.case-study-header h3 {
		font-size: 1.5rem;
		margin: 0;
	}

	.badge {
		background: #FF6B35;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.metrics {
		margin: 1.5rem 0;
	}

	.metric {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		font-size: 1.2rem;
	}

	.before {
		color: #ff3333;
		font-weight: 600;
	}

	.arrow {
		color: #666;
		font-size: 1.5rem;
	}

	.after {
		color: #27c93f;
		font-weight: 600;
	}

	.improvement {
		background: #27c93f;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.case-study-desc {
		color: #333;
		line-height: 1.6;
		margin: 1rem 0;
	}

	.read-more {
		color: #000;
		font-weight: 600;
		text-decoration: none;
	}

	.read-more:hover {
		text-decoration: underline;
	}

	.video-demo {
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.video-demo video {
		width: 100%;
		height: auto;
		display: block;
	}

	.video-caption {
		text-align: center;
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		margin-top: 0.5rem;
	}

	/* Tiers */
	.tiers {
		margin-bottom: 4rem;
	}

	.tiers h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 3rem;
	}

	.tier-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.tier-card {
		background: white;
		border: 2px solid #eee;
		border-radius: 12px;
		padding: 2rem;
		position: relative;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.tier-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}

	.tier-card.pro {
		border-color: #FF6B35;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
	}

	.tier-badge {
		position: absolute;
		top: -12px;
		right: 20px;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 1rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.tier-header {
		text-align: center;
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 2px solid #eee;
	}

	.tier-header h3 {
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
	}

	.price {
		font-size: 2.5rem;
		font-weight: 700;
		color: #FF6B35;
		line-height: 1;
	}

	.price-note {
		font-size: 0.9rem;
		color: #666;
		margin-top: 0.5rem;
	}

	.features {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
	}

	.features li {
		padding: 0.5rem 0;
		color: #333;
	}

	.tier-card .cta {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.install {
		background: #fafafa;
		padding: 0.75rem;
		border-radius: 6px;
		font-family: 'SF Mono', Monaco, monospace;
		font-size: 0.9rem;
		text-align: center;
		display: block;
	}

	.launch-badge {
		background: #000;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		text-align: center;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		font-weight: 600;
		text-decoration: none;
		text-align: center;
		cursor: pointer;
		border: none;
		font-size: 1rem;
		transition: all 0.2s;
	}

	.btn-primary {
		background: #FF6B35;
		color: white;
	}

	.btn-primary:hover {
		background: #e55a2a;
	}

	.btn-secondary {
		background: white;
		color: #FF6B35;
		border: 2px solid #FF6B35;
	}

	.btn-secondary:hover {
		background: #fafafa;
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* Architecture */
	.architecture {
		background: #fafafa;
		padding: 3rem 2rem;
		border-radius: 12px;
		margin-bottom: 4rem;
	}

	.architecture h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 3.5rem;
	}

	.race-quote {
		text-align: center;
		margin: 5rem auto 0;
		max-width: 700px;
	}

	.race-quote .quote {
		font-size: 1.5rem;
		font-weight: 700;
		color: #000;
		margin: 0 0 0.5rem 0;
		line-height: 1.4;
	}

	.race-quote .attribution {
		font-size: 1rem;
		font-weight: 600;
		color: #333;
		margin: 0 0 0.5rem 0;
	}

	.race-quote .context {
		font-size: 0.9rem;
		font-style: italic;
		color: #666;
		margin: 0;
	}

	.layers {
		display: flex;
		gap: 3rem;
		align-items: flex-start;
		justify-content: center;
	}

	.layer-group-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.layer-group {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
	}

	.group-label {
		font-size: 1rem;
		font-weight: 600;
		color: #666;
		text-align: center;
	}

	.layer-separator {
		width: 2px;
		background: linear-gradient(to bottom, transparent 0%, #ddd 20%, #ddd 80%, transparent 100%);
		align-self: stretch;
		margin: 0 1.5rem;
	}

	.layer {
		background: white;
		padding: 3.5rem 2rem;
		border-radius: 8px;
		text-align: center;
		border: 2px solid #eee;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 260px;
	}

	.layer.highlight {
		border-color: #FF6B35;
		background: #fafafa;
		padding: 3.5rem 1.5rem;
	}

	.layer-badge {
		margin-bottom: 1rem;
	}

	.layer-number {
		background: #000;
		color: white;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.5rem;
		margin: 0 auto 0.5rem;
	}

	.layer-label {
		font-size: 0.85rem;
		font-weight: 600;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.layer.highlight .layer-number {
		background: #FF6B35;
	}

	.layer.brake-layer .layer-number {
		background: #ff3333;
	}

	.layer.verify-layer .layer-number {
		background: #27c93f;
	}

	.layer h3 {
		font-size: 1.2rem;
		margin: 0.5rem 0;
	}

	.layer p {
		color: #666;
		font-size: 0.9rem;
		margin: 0.5rem 0 1rem 0;
		flex-grow: 1;
		min-height: 2.5rem;
	}

	.layer-time {
		background: #eee;
		color: #333;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.85rem;
		font-weight: 600;
		display: inline-block;
		margin-top: auto;
	}

	.layer-time.rapid {
		font-weight: 700;
		font-size: 0.9rem;
	}

	.layer.highlight .layer-time {
		background: #FF6B35;
		color: white;
	}

	/* Big Orange */
	.big-orange {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 4rem;
	}

	.orange-hero img {
		width: 100%;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.orange-story h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.orange-story .lead {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.orange-badge-system {
		background: #fff;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		margin: 2rem 0;
	}

	.orange-badge-system h3 {
		font-size: 1.3rem;
		margin: 0 0 1rem 0;
	}

	.badges {
		display: flex;
		gap: 2rem;
		margin-bottom: 1rem;
	}

	.badge-item {
		text-align: center;
	}

	.badge-item.special {
		background: linear-gradient(135deg, #FFA075 0%, #FF6B35 100%);
		padding: 1rem;
		border-radius: 8px;
	}

	.badge-item.special .badge-icon,
	.badge-item.special .badge-name,
	.badge-item.special .badge-score {
		color: white;
	}

	.badge-icon {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.badge-name {
		font-weight: 600;
		font-size: 0.9rem;
	}

	.badge-score {
		font-size: 0.85rem;
		color: #666;
		margin-top: 0.25rem;
	}

	.badge-note {
		font-size: 0.9rem;
		color: #666;
		margin-top: 1rem;
	}

	.orange-holders {
		margin-top: 2rem;
	}

	.orange-holders h3 {
		font-size: 1.2rem;
		margin-bottom: 0.75rem;
	}

	.orange-holders ul {
		list-style: none;
		padding: 0;
	}

	.orange-holders li {
		padding: 0.5rem 0;
		color: #333;
	}

	@media (max-width: 768px) {
		.big-orange {
			grid-template-columns: 1fr;
		}
	}

	/* Signup */
	.signup {
		background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
		color: white;
		padding: 3rem 2rem;
		border-radius: 12px;
		text-align: center;
		margin-bottom: 4rem;
	}

	.signup h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: white;
	}

	.signup p {
		font-size: 1.1rem;
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.form-group {
		display: flex;
		gap: 1rem;
		max-width: 500px;
		margin: 0 auto;
	}

	.form-group input {
		flex: 1;
		padding: 0.75rem 1rem;
		border-radius: 6px;
		border: 2px solid white;
		font-size: 1rem;
	}

	.form-group input:focus {
		outline: none;
		border-color: #FF6B35;
	}

	.success-message {
		margin-top: 1rem;
		font-weight: 600;
		font-size: 1.1rem;
	}

	@media (max-width: 600px) {
		.form-group {
			flex-direction: column;
		}
	}

	/* Related */
	.related {
		margin-bottom: 4rem;
	}

	.related h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	.related-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.related-card {
		background: white;
		border: 2px solid #eee;
		border-radius: 8px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
	}

	.related-card:hover {
		border-color: #000;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.related-card h3 {
		font-size: 1.3rem;
		margin: 0 0 0.5rem 0;
	}

	.related-card p {
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.related-card .read-more {
		color: #000;
		font-weight: 600;
	}

	/* Footer */
	.footer-note {
		text-align: center;
		padding: 2rem 0;
		border-top: 2px solid #eee;
		color: #666;
	}

	.footer-note p {
		margin: 0.5rem 0;
		font-style: italic;
	}

	.footer-note a {
		color: #000;
		text-decoration: none;
	}

	.footer-note a:hover {
		text-decoration: underline;
	}

	.ecosystem {
		font-size: 0.9rem;
	}
</style>
