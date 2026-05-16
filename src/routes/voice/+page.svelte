<svelte:head>
	<title>VML — Voice Memory Layer for AI agents</title>
	<meta name="description" content="VML is the Voice Memory Layer for AI agents. Drop-in Python SDK for LiveKit + xAI Grok voice agents. Memory survives sessions, devices, and model switches. FAF-powered." />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="VML — Voice Memory Layer for AI agents" />
	<meta property="og:description" content="xAI gave Grok Voice. We gave Grok memory. Drop-in Python SDK on PyPI." />
	<meta property="og:url" content="https://www.faf.one/voice" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="VML — Voice Memory Layer for AI agents" />
	<meta name="twitter:description" content="xAI gave Grok Voice. We gave Grok memory." />
</svelte:head>

<main class="page">

	<section class="hero">
		<h1>VML</h1>
		<p class="sub">xAI gave Grok Voice. We gave Grok memory.</p>
	</section>

	<section class="content">
		<h2>What it is</h2>
		<p>A drop-in Python SDK that adds persistent memory to LiveKit + xAI Grok voice agents. One import, one binding — the agent stops forgetting between sessions.</p>
		<p>Install: <code>pip install grok-faf-voice</code></p>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>Voice AI agents start every conversation from zero. Names, preferences, context — gone. Every. Time.</p>
		<p>VML is the memory layer that fixes that. Persistent state lives outside the agent, etched to a private namespace, recalled on demand. Memory survives sessions, devices, and model switches. The agent gets continuity it never had.</p>
	</section>

	<section class="content">
		<h2>Receipts</h2>
		<ul class="receipts">
			<li><strong>On PyPI</strong> — <code>grok-faf-voice</code> v0.2.2</li>
			<li><strong>LiveKit-enabled</strong> — cascaded pipeline, drop-in</li>
			<li><strong>Sessionless MCP transport</strong> — talks to <code>mcpaas.live</code> via X-MCP-Mode: flexi</li>
			<li><strong>FAFm-powered</strong> — memories stored as <a href="https://www.iana.org/assignments/media-types/application/vnd.fafm+yaml" target="_blank" rel="noopener"><code>application/vnd.fafm+yaml</code></a>, IANA-registered May 13, 2026</li>
		</ul>
	</section>

	<section class="content cta-section">
		<h2>Try it</h2>
		<p>The multi-model voice frontend uses VML for its memory layer. Speak to Leo, switch models, your facts persist.</p>
		<a class="cta" href="https://faf-voice.vercel.app/agent" target="_blank" rel="noopener">
			Talk to FAFA →
		</a>
		<p class="cta-sub">FAF Agent is called FAFA (rhymes with RAFA).</p>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">FAF defines. VML remembers.</p>
		<p class="footer-iana">IANA-registered: <a href="https://www.iana.org/assignments/media-types/application/vnd.fafm+yaml" target="_blank" rel="noopener"><code>application/vnd.fafm+yaml</code></a> · 2026-05-13</p>
	</section>

</main>

<style>
	.page {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.hero {
		text-align: center;
		padding: 4rem 0 2rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 2rem;
	}

	.hero h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-gray);
	}

	.content {
		padding: 1.5rem 0;
	}

	.content h2 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
	}

	.content p {
		color: var(--faf-dark);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.receipts {
		list-style: none;
		padding: 0;
	}

	.receipts li {
		padding: 0.5rem 0;
		color: var(--faf-dark);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.receipts li:last-child {
		border-bottom: none;
	}

	.receipts strong {
		color: var(--faf-black);
	}

	code {
		font-family: var(--font-mono);
		background: var(--faf-gray-light);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		color: var(--faf-cyan-text);
	}

	.cta-section {
		text-align: center;
		padding: 2rem 0;
	}

	.cta {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.9rem 1.75rem;
		background: var(--faf-orange);
		color: white;
		text-decoration: none;
		font-weight: 600;
		border-radius: 8px;
		font-size: 1.05rem;
		transition: transform 0.15s ease;
	}

	.cta:hover {
		transform: translateY(-1px);
	}

	.cta-sub {
		font-size: 0.85rem;
		color: var(--faf-gray);
		margin-top: 0.6rem;
	}

	.footer-section {
		text-align: center;
		padding: 3rem 0;
		border-top: 1px solid var(--faf-light-gray);
		margin-top: 2rem;
	}

	.footer-tagline {
		font-weight: 600;
		color: var(--faf-black);
	}

	.footer-iana {
		font-size: 0.8rem;
		color: var(--faf-gray);
		margin-top: 0.5rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.8rem;
		}
	}
</style>
