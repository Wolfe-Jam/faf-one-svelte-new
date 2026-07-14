<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>FAF Foundation | Stewardship of the AI-Context Standard</title>
	<meta
		name="description"
		content="Stewardship of the IANA-registered .faf format lives at foundation.faf.one. faf.one is the format hub; the Foundation stewards the open standard."
	/>
	<meta property="og:title" content="FAF Foundation" />
	<meta
		property="og:description"
		content="Governance, mission, and community for the open AI-context standard — at foundation.faf.one."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://foundation.faf.one" />
</svelte:head>

<main class="page">
	<section class="hero">
		<h1>FAF <span class="foundation">Foundation</span></h1>
		<p class="sub">Stewardship of the open AI-context standard.</p>
		<div class="hero-receipts">
			<span class="receipt">IANA-registered</span>
			<span class="receipt">Anthropic MCP #2759</span>
			<span class="receipt">Vendor-neutral</span>
		</div>
		<a
			href="https://foundation.faf.one"
			target="_blank"
			rel="noopener noreferrer"
			class="cta"
		>
			foundation.faf.one →
		</a>
		<p class="cta-note">
			Governance, mission, founding sponsors, and how to get involved — all on the Foundation site.
		</p>
	</section>

	<section class="content">
		<h2>Two sites, one standard</h2>
		<div class="cards">
			<div class="card">
				<h3>faf.one</h3>
				<p>
					The format hub: blog, docs, CLI downloads, MCP registry, tools, and release editions. Built for
					developers using .faf day to day.
				</p>
			</div>
			<div class="card">
				<h3>foundation.faf.one</h3>
				<p>
					Stewardship: mission, open governance, IANA registration upkeep, ecosystem adoption, founding
					sponsors, and community join.
				</p>
			</div>
			<div class="card">
				<h3>Standard stays free</h3>
				<p>
					The spec and dev tools are MIT. Foundation work funds maintenance and stewardship — not access to
					the format.
				</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Get involved</h2>
		<nav class="involve" aria-label="Foundation links">
			<a href="https://foundation.faf.one#join" target="_blank" rel="noopener noreferrer">
				Join the Foundation
			</a>
			<a href="https://github.com/Wolfe-Jam/faf/discussions" target="_blank" rel="noopener noreferrer">
				GitHub Discussions
			</a>
			<a href="/sponsors">Sponsor on GitHub</a>
			<a href="https://docs.faf.one" target="_blank" rel="noopener noreferrer">Documentation</a>
		</nav>
	</section>

	<section class="content">
		<h2>FAQ</h2>
		<div class="faq">
			<div class="faq-item">
				<h3>Is this the same as GitHub Sponsors?</h3>
				<p>
					Related but different. <a href="/sponsors">GitHub Sponsors</a> funds open-source maintenance on
					faf-cli and MCP servers. The Foundation stewards the IANA-registered standard itself — see
					<a href="https://foundation.faf.one" target="_blank" rel="noopener noreferrer">foundation.faf.one</a>
					for governance and founding sponsors.
				</p>
			</div>
			<div class="faq-item">
				<h3>Do I need a membership to use .faf?</h3>
				<p>
					No. <code>faf init</code>, MCP servers, and the format spec are free (MIT). Foundation involvement
					is optional — for stewardship, sponsorship, or enterprise guidance.
				</p>
			</div>
			<div class="faq-item">
				<h3>Why keep /membership on faf.one?</h3>
				<p>
					Bookmarks and the site map still land here. This page is a short bridge; the canonical Foundation
					home is <strong>foundation.faf.one</strong>.
				</p>
			</div>
		</div>
	</section>

	<PageActions
		headline="Stewardship of the open AI-context standard."
		point1="IANA-registered · Anthropic MCP #2759 · MIT licensed."
		point2="Governance and community at foundation.faf.one."
		url="https://foundation.faf.one"
		hashtags="AI,OpenSource,FAF"
		sponsor={false}
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

	.foundation {
		color: var(--faf-foundation-green);
		font-family: var(--font-mono);
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-gray);
		margin: 0 0 1.25rem;
		font-weight: 600;
	}

	.hero-receipts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.receipt {
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--faf-dark);
		background: var(--faf-gray-light);
		padding: 0.35rem 0.65rem;
		border-radius: 6px;
	}

	.cta-note {
		margin: 1rem 0 0;
		font-size: 0.85rem;
		color: var(--faf-gray);
		max-width: 32rem;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.5;
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
		background: var(--faf-white);
		border-left: 4px solid var(--faf-foundation-green);
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
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0;
	}

	.involve {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.65rem;
	}

	.involve a {
		display: inline-block;
		padding: 0.55rem 1rem;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		color: var(--faf-dark);
		background: var(--faf-gray-light);
		border-radius: 8px;
		transition: background 0.15s ease, color 0.15s ease;
	}

	.involve a:hover {
		background: var(--faf-foundation-green);
		color: var(--faf-chrome-fg);
	}

	.faq {
		display: grid;
		gap: 0.85rem;
	}

	.faq-item {
		background: var(--faf-white);
		border-left: 4px solid var(--faf-foundation-green);
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
		margin: 0;
	}

	.faq-item a {
		color: var(--faf-foundation-green);
		font-weight: 600;
	}

	.faq-item a:hover {
		text-decoration: underline;
	}

	.cta {
		display: inline-block;
		padding: 0.9rem 1.75rem;
		background: var(--faf-foundation-green);
		color: var(--faf-chrome-fg);
		text-decoration: none;
		font-weight: 700;
		border-radius: 8px;
		font-size: 1.05rem;
		transition: transform 0.15s ease, background 0.15s ease;
	}

	.cta:hover {
		transform: translateY(-1px);
		background: var(--faf-foundation-green-dark);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.9rem;
		}
	}
</style>