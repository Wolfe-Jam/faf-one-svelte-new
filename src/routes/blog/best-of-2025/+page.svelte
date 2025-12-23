<script>
	const timeline = [
		{ day: 0, date: 'AUG 08', tech: 'faf-engine', achievement: 'First .faf created (Mk1)' },
		{ day: 47, date: 'SEP 24', tech: '.faf', achievement: 'Press Release launch' },
		{ day: 53, date: 'SEP 30', tech: 'Chrome', achievement: '1st Google approval' },
		{ day: 54, date: 'OCT 01', tech: 'Brand', achievement: '"Project DNA for ANY AI"' },
		{ day: 62, date: 'OCT 09', tech: 'faf-cli', achievement: 'npm launch' },
		{ day: 69, date: 'OCT 16', tech: 'MCP', achievement: 'Anthropic merged' },
		{ day: 73, date: 'OCT 20', tech: 'Chrome', achievement: '2nd Google approval' },
		{ day: 82, date: 'OCT 29', tech: 'npm', achievement: '10,000+ downloads' }
	];

	const timelineAfter = [
		{ day: 98, date: 'NOV 14', tech: 'Anthropic', achievement: '"The C in MCP" — The Missing Format' },
		{ day: 103, date: 'NOV 19', tech: 'Grok', achievement: 'First MCP server for xAI' },
		{ day: 105, date: 'NOV 21', tech: 'Python', achievement: 'SDK on PyPI' },
		{ day: 114, date: 'NOV 30', tech: 'xAI', achievement: 'Grok "Embed me" on X' },
		{ day: 121, date: 'DEC 07', tech: 'Rust', achievement: 'SDK launched' },
		{ day: 123, date: 'DEC 09', tech: 'Zig', achievement: 'WASM module' },
		{ day: 136, date: 'DEC 22', tech: 'Bun', achievement: 'bun-sticky-faf v1.0.6' },
		{ day: 137, date: 'DEC 23', tech: 'Zig', achievement: 'bun-sticky-zig 77KB binary' },
		{ day: 137, date: 'DEC 23', tech: 'npm', achievement: '18,000+ downloads' }
	];
</script>

<svelte:head>
	<title>.faf — 2025: Year of FAF | The 84-Day IANA Sprint</title>
	<meta name="description" content="From first code to IANA-registered standard in 84 days. YAML took 22 years. JSON took 5 years. FAF took 84 days." />
</svelte:head>

<div class="back-nav">
	<a href="/blog" class="back-button">← Back to Blog</a>
</div>

<article class="blog-post">
	<div class="container">
		<header class="post-header">
			<div class="post-meta">
				<span class="category">Year in Review</span>
				<span class="date">December 31, 2025</span>
			</div>
			<h1>.faf — 2025: Year of FAF</h1>
			<p class="subtitle">The 84-Day IANA Sprint</p>
		</header>

		<div class="hero-stat">
			<div class="stat-number">84</div>
			<div class="stat-label">DAYS TO IANA STANDARD</div>
			<div class="stat-comparison">YAML took 22 years. JSON took 5 years.</div>
		</div>

		<section class="timeline-section">
			<h2>The Timeline</h2>

			<div class="timeline-table">
				<div class="timeline-header">
					<span class="col-day">Day</span>
					<span class="col-date">Date</span>
					<span class="col-tech">Tech</span>
					<span class="col-achievement">Achievement</span>
				</div>
				{#each timeline as row}
					<div class="timeline-row" class:highlight={row.day === 0}>
						<span class="col-day">{row.day}</span>
						<span class="col-date">{row.date}</span>
						<span class="col-tech">{row.tech}</span>
						<span class="col-achievement">{row.achievement}</span>
					</div>
				{/each}
			</div>

			<div class="iana-banner">
				<div class="banner-icon">🏛️</div>
				<div class="banner-content">
					<div class="banner-title">DAY 84: IANA REGISTERED</div>
					<div class="banner-subtitle">application/vnd.faf+yaml</div>
					<div class="banner-tagline">YAML TOOK 22 YEARS. FAF TOOK 84 DAYS.</div>
				</div>
				<div class="banner-icon">🏛️</div>
			</div>

			<div class="timeline-table">
				{#each timelineAfter as row}
					<div class="timeline-row" class:gold={row.achievement.includes('18,000')}>
						<span class="col-day">{row.day}</span>
						<span class="col-date">{row.date}</span>
						<span class="col-tech">{row.tech}</span>
						<span class="col-achievement">{row.achievement}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="comparison-section">
			<h2>The Comparison</h2>
			<div class="comparison-graphic">
				<div class="comparison-row">
					<span class="format-name">YAML</span>
					<div class="bar-container">
						<div class="bar yaml-bar"></div>
					</div>
					<span class="time-label">22 YEARS</span>
				</div>
				<div class="comparison-subtext">Created 2001 → Registered Feb 2024</div>

				<div class="comparison-row">
					<span class="format-name">JSON</span>
					<div class="bar-container">
						<div class="bar json-bar"></div>
					</div>
					<span class="time-label">5 YEARS</span>
				</div>
				<div class="comparison-subtext">Created ~2001 → Registered 2006</div>

				<div class="comparison-row faf-row">
					<span class="format-name">.faf</span>
					<div class="bar-container">
						<div class="bar faf-bar"></div>
					</div>
					<span class="time-label">84 DAYS</span>
				</div>
				<div class="comparison-subtext faf-subtext">Created Aug 8 → Registered Oct 31, 2025</div>
			</div>
		</section>

		<section class="numbers-section">
			<h2>By The Numbers</h2>
			<div class="numbers-grid">
				<div class="number-card orange">
					<div class="number">84</div>
					<div class="label">Days to IANA</div>
				</div>
				<div class="number-card gold">
					<div class="number">18K+</div>
					<div class="label">npm Downloads</div>
				</div>
				<div class="number-card cyan">
					<div class="number">52</div>
					<div class="label">MCP Tools</div>
				</div>
				<div class="number-card">
					<div class="number">5</div>
					<div class="label">SDKs</div>
				</div>
			</div>
		</section>

		<section class="sdks-section">
			<h2>The SDKs</h2>
			<div class="sdk-grid">
				<div class="sdk-card">
					<div class="sdk-name">faf-cli</div>
					<div class="sdk-runtime">Node.js</div>
					<div class="sdk-stat">16,600+ downloads</div>
				</div>
				<div class="sdk-card">
					<div class="sdk-name">faf-python-sdk</div>
					<div class="sdk-runtime">Python</div>
					<div class="sdk-stat">PyPI</div>
				</div>
				<div class="sdk-card">
					<div class="sdk-name">faf-rust-sdk</div>
					<div class="sdk-runtime">Rust</div>
					<div class="sdk-stat">Crates.io</div>
				</div>
				<div class="sdk-card">
					<div class="sdk-name">bun-sticky-faf</div>
					<div class="sdk-runtime">Bun</div>
					<div class="sdk-stat">npm</div>
				</div>
				<div class="sdk-card">
					<div class="sdk-name">bun-sticky-zig</div>
					<div class="sdk-runtime">Zig</div>
					<div class="sdk-stat">77KB binary</div>
				</div>
			</div>
		</section>

		<section class="story-section">
			<h2>The Story</h2>
			<div class="story-content">
				<p>In 2024, AI coding was chaos. Every tool wanted different context. Every session started from zero. There was no standard.</p>
				<p>On August 8, 2025, the first .faf file was created.</p>
				<p>84 days later, it was an IANA-registered standard.</p>
				<p>YAML — the format .faf is built on — took 22 years to get IANA registration. JSON took 5 years.</p>
				<p class="highlight-text">FAF took 84 days.</p>
				<p>Not because it was rushed. Because it was needed.</p>
			</div>
		</section>

		<section class="future-section">
			<div class="future-card">
				<h2>What's Next</h2>
				<p>2026: The year .faf becomes the default.</p>
			</div>
		</section>

		<footer class="post-footer">
			<div class="tagline">Project DNA for ANY AI</div>
			<div class="closing">84 days. One format. The standard.</div>
		</footer>
	</div>
</article>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
	}

	.blog-post {
		background: white;
		min-height: 100vh;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	.post-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.post-meta {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.category {
		background: var(--faf-orange);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.date {
		color: #888;
		font-style: italic;
	}

	h1 {
		font-size: 3rem;
		font-weight: 900;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 1.5rem;
		color: var(--faf-orange);
		font-weight: 600;
	}

	h2 {
		font-size: 2rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	/* Hero Stat */
	.hero-stat {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border-radius: 16px;
		padding: 3rem;
		text-align: center;
		margin-bottom: 3rem;
	}

	.stat-number {
		font-size: 8rem;
		font-weight: 900;
		color: var(--faf-orange);
		line-height: 1;
		font-family: 'Roboto Mono', monospace;
	}

	.stat-label {
		font-size: 1.5rem;
		color: white;
		font-weight: 700;
		letter-spacing: 0.1em;
		margin-top: 1rem;
	}

	.stat-comparison {
		font-size: 1.1rem;
		color: #888;
		margin-top: 1rem;
	}

	/* Timeline */
	.timeline-section {
		margin-bottom: 3rem;
	}

	.timeline-table {
		font-family: 'Roboto Mono', monospace;
		font-size: 0.9rem;
	}

	.timeline-header {
		display: grid;
		grid-template-columns: 60px 80px 100px 1fr;
		gap: 1rem;
		padding: 0.75rem 1rem;
		background: var(--faf-black);
		color: white;
		font-weight: 700;
		border-radius: 8px 8px 0 0;
	}

	.timeline-row {
		display: grid;
		grid-template-columns: 60px 80px 100px 1fr;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--faf-light-gray);
		transition: background 0.2s;
	}

	.timeline-row:hover {
		background: var(--faf-cream);
	}

	.timeline-row.highlight {
		background: rgba(255, 107, 53, 0.1);
		font-weight: 600;
	}

	.timeline-row.gold {
		background: rgba(255, 215, 0, 0.15);
		font-weight: 600;
	}

	.col-day {
		text-align: right;
		color: var(--faf-orange);
		font-weight: 700;
	}

	.col-tech {
		color: #00D4D4;
		font-weight: 600;
	}

	/* IANA Banner */
	.iana-banner {
		background: linear-gradient(135deg, var(--faf-orange) 0%, #e85a2c 100%);
		color: white;
		padding: 2rem;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin: 2rem 0;
		box-shadow: 0 8px 32px rgba(255, 107, 53, 0.3);
	}

	.banner-icon {
		font-size: 3rem;
	}

	.banner-content {
		text-align: center;
	}

	.banner-title {
		font-size: 1.75rem;
		font-weight: 900;
		letter-spacing: 0.05em;
	}

	.banner-subtitle {
		font-family: 'Roboto Mono', monospace;
		font-size: 1rem;
		opacity: 0.9;
		margin: 0.5rem 0;
	}

	.banner-tagline {
		font-size: 1.1rem;
		font-weight: 700;
	}

	/* Comparison */
	.comparison-section {
		margin-bottom: 3rem;
	}

	.comparison-graphic {
		background: #1a1a1a;
		border-radius: 12px;
		padding: 2rem;
	}

	.comparison-row {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.format-name {
		width: 60px;
		color: white;
		font-weight: 700;
		font-family: 'Roboto Mono', monospace;
	}

	.bar-container {
		flex: 1;
		height: 24px;
		background: #333;
		border-radius: 4px;
		overflow: hidden;
	}

	.bar {
		height: 100%;
		border-radius: 4px;
	}

	.yaml-bar {
		width: 100%;
		background: linear-gradient(90deg, #666 0%, #888 100%);
	}

	.json-bar {
		width: 23%;
		background: linear-gradient(90deg, #4a90e2 0%, #357abd 100%);
	}

	.faf-bar {
		width: 1%;
		background: linear-gradient(90deg, var(--faf-orange) 0%, #e85a2c 100%);
		min-width: 8px;
	}

	.time-label {
		width: 100px;
		text-align: right;
		color: white;
		font-weight: 700;
		font-family: 'Roboto Mono', monospace;
	}

	.comparison-subtext {
		color: #666;
		font-size: 0.85rem;
		margin-left: 76px;
		margin-bottom: 1.5rem;
	}

	.faf-row .format-name,
	.faf-row .time-label {
		color: var(--faf-orange);
	}

	.faf-subtext {
		color: var(--faf-orange);
		opacity: 0.8;
	}

	/* Numbers */
	.numbers-section {
		margin-bottom: 3rem;
	}

	.numbers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1.5rem;
	}

	.number-card {
		background: var(--faf-cream);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		transition: transform 0.3s;
	}

	.number-card:hover {
		transform: translateY(-4px);
	}

	.number-card .number {
		font-size: 3rem;
		font-weight: 900;
		color: var(--faf-black);
		font-family: 'Roboto Mono', monospace;
	}

	.number-card .label {
		color: #666;
		font-weight: 600;
		margin-top: 0.5rem;
	}

	.number-card.orange .number { color: var(--faf-orange); }
	.number-card.gold .number { color: #FFD700; }
	.number-card.cyan .number { color: #00D4D4; }

	/* SDKs */
	.sdks-section {
		margin-bottom: 3rem;
	}

	.sdk-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 1rem;
	}

	.sdk-card {
		background: #f9f9f9;
		border: 2px solid var(--faf-light-gray);
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s;
	}

	.sdk-card:hover {
		border-color: var(--faf-orange);
		transform: translateY(-2px);
	}

	.sdk-name {
		font-weight: 700;
		color: var(--faf-black);
		font-family: 'Roboto Mono', monospace;
		font-size: 0.9rem;
	}

	.sdk-runtime {
		color: #00D4D4;
		font-weight: 600;
		font-size: 0.85rem;
		margin: 0.5rem 0;
	}

	.sdk-stat {
		color: #888;
		font-size: 0.85rem;
	}

	/* Story */
	.story-section {
		margin-bottom: 3rem;
	}

	.story-content {
		background: var(--faf-cream);
		border-radius: 12px;
		padding: 2rem;
		font-size: 1.15rem;
		line-height: 1.8;
	}

	.story-content p {
		margin-bottom: 1rem;
	}

	.story-content p:last-child {
		margin-bottom: 0;
	}

	.highlight-text {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--faf-orange);
	}

	/* Future */
	.future-section {
		margin-bottom: 3rem;
	}

	.future-card {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border-radius: 12px;
		padding: 3rem;
		text-align: center;
	}

	.future-card h2 {
		color: white;
		margin-bottom: 1rem;
	}

	.future-card p {
		color: var(--faf-orange);
		font-size: 1.5rem;
		font-weight: 700;
	}

	/* Footer */
	.post-footer {
		text-align: center;
		padding-top: 2rem;
		border-top: 2px solid var(--faf-light-gray);
	}

	.tagline {
		color: #00D4D4;
		font-weight: 600;
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.closing {
		font-size: 1.25rem;
		font-weight: 900;
		color: var(--faf-black);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.stat-number {
			font-size: 5rem;
		}

		.timeline-header,
		.timeline-row {
			grid-template-columns: 50px 70px 80px 1fr;
			font-size: 0.8rem;
			gap: 0.5rem;
		}

		.iana-banner {
			flex-direction: column;
			gap: 1rem;
		}

		.banner-icon {
			display: none;
		}
	}
</style>
