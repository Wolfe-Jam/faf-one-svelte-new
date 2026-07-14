<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>FAF Dogfooding Guides | FAF</title>
	<meta
		name="description"
		content="Learn how to add project.faf to your projects. README first, .faf second, code third."
	/>
	<meta property="og:title" content="FAF Dogfooding Guides" />
	<meta
		property="og:description"
		content="README first, .faf second, code third — championship workflow for any stack."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="page">
	<section class="hero">
		<h1>Dogfooding <span class="faf">Guides</span></h1>
		<p class="sub">README first, .faf second, code third.</p>
		<div class="hero-receipts">
			<span class="receipt">Any stack</span>
			<span class="receipt">Honest scores</span>
			<span class="receipt">Day-one context</span>
		</div>
	</section>

	<section class="content">
		<h2>Pick a workflow</h2>
		<div class="cards">
			<a href="/guides/dogfooding/standard" class="card link-card">
				<div class="card-head">
					<h3>Standard Workflow</h3>
					<span class="pill recommended">Recommended</span>
				</div>
				<p>
					Complete guide for any project type. Works with TypeScript, Python, Rust, Go, and more.
				</p>
				<ul class="features">
					<li>8-step workflow</li>
					<li>Language-specific examples</li>
					<li>FAQ + quick reference</li>
				</ul>
				<span class="card-cta">Read Standard Guide →</span>
			</a>

			<a href="/guides/dogfooding/wasm" class="card link-card">
				<div class="card-head">
					<h3>WASM Workflow</h3>
					<span class="pill advanced">Advanced</span>
				</div>
				<p>
					Specialized guide for Rust WASM projects. Example: faf-wasm-gen.
				</p>
				<ul class="features">
					<li>WASM project focus</li>
					<li>Rust-specific setup</li>
					<li>Browser/edge context</li>
				</ul>
				<span class="card-cta">Read WASM Guide →</span>
			</a>
		</div>
	</section>

	<section class="content">
		<h2>Philosophy</h2>
		<div class="callout">
			<p>
				You can't generate meaningful AI context from an empty repository.
				<strong>Foundation doesn't mean empty. Foundation means you know what you're building.</strong>
			</p>
		</div>
	</section>

	<section class="content">
		<h2>Quick start</h2>
		<div class="faq">
			<div class="faq-item">
				<h3>Install faf-cli</h3>
				<pre><code>npm install -g faf-cli</code></pre>
				<p>Then follow the Standard Workflow guide to add <code>project.faf</code> to your project.</p>
			</div>
			<div class="faq-item">
				<h3>New project?</h3>
				<p>
					Start with the <a href="/guides/new-project">New Project Guide</a> — three commands from
					README to AI-ready context.
				</p>
			</div>
		</div>
	</section>

	<PageActions
		headline="README first, .faf second, code third."
		point1="Honest scores from day one — 30% → 80% → 100%."
		point2="Dogfood the standard before you ship."
		url="https://faf.one/guides/dogfooding"
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
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-gray);
		margin: 0 0 1.25rem;
		font-weight: 600;
		font-style: italic;
	}

	.hero-receipts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
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

	.cards {
		display: grid;
		gap: 1rem;
	}

	.card {
		background: var(--faf-surface);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
	}

	.link-card {
		text-decoration: none;
		color: inherit;
		transition: transform 0.15s ease;
	}

	.link-card:hover {
		transform: translateY(-2px);
	}

	.card-head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.card h3 {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0;
	}

	.card p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0 0 0.75rem;
	}

	.pill {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		padding: 0.2rem 0.55rem;
		border-radius: 6px;
		white-space: nowrap;
	}

	.pill.recommended {
		background: var(--faf-pill-success-bg);
		color: var(--faf-pill-success-fg);
		border: 1px solid var(--faf-pill-success-border);
	}

	.pill.advanced {
		background: var(--faf-pill-info-bg);
		color: var(--faf-pill-info-fg);
		border: 1px solid var(--faf-pill-info-border);
	}

	.features {
		list-style: none;
		padding: 0;
		margin: 0 0 0.75rem;
	}

	.features li {
		font-size: 0.9rem;
		color: var(--faf-dark);
		padding: 0.2rem 0 0.2rem 1.1rem;
		position: relative;
	}

	.features li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--faf-orange);
		font-weight: 700;
	}

	.card-cta {
		display: block;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--faf-orange);
		padding-top: 0.75rem;
		border-top: 1px solid var(--faf-light-gray);
	}

	.callout {
		background: var(--faf-orange-tint);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
	}

	.callout p {
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
		background: var(--faf-surface);
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
		margin: 0.5rem 0 0;
	}

	.faq-item a {
		color: var(--faf-orange);
	}

	pre {
		background: var(--faf-locked-dark-elevated);
		color: var(--faf-locked-dark-text);
		padding: 0.85rem 1rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 0.5rem 0;
		font-family: var(--font-mono);
		font-size: 0.9rem;
	}

	pre code {
		background: none;
		padding: 0;
		color: inherit;
	}

	code {
		font-family: var(--font-mono);
		font-size: 0.9em;
		color: var(--faf-orange);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.9rem;
		}
	}
</style>