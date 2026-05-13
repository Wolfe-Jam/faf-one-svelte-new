<svelte:head>
	<title>ZEPH — The Zig delivery engine for FAF context</title>
	<meta name="description" content="ZEPH is the Zig delivery engine for FAF context. 2.7 KB WASM. Single-digit-nanosecond validate and tier on consumer hardware. Three packet exports: score, validate, tier." />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="ZEPH — The Zig delivery engine for FAF context" />
	<meta property="og:description" content="2.7 KB WASM. Single-digit-nanosecond validate and tier on consumer hardware. Live demo at zeph.faf.one." />
	<meta property="og:url" content="https://www.faf.one/zeph" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="ZEPH — The Zig delivery engine for FAF context" />
	<meta name="twitter:description" content="2.7 KB WASM. Single-digit-nanosecond validate and tier on consumer hardware." />
</svelte:head>

<main class="page">

	<section class="hero">
		<h1>ZEPH</h1>
		<p class="sub">The Zig delivery engine for FAF context</p>
	</section>

	<section class="content">
		<h2>What it is</h2>
		<p>A pure-Zig engine that compiles to WebAssembly and delivers FAF context at consumer-hardware speeds. Three packet exports: <code>score</code>, <code>validate</code>, <code>tier</code>.</p>
		<p>Ships as a single <code>.wasm</code> file. Runs anywhere WebAssembly runs — browsers, Node, Bun, Deno, Cloudflare Workers, anywhere.</p>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>FAF defines the context format. Something has to <em>deliver</em> that context — fast enough that AI tools never pause, small enough to ship with anything.</p>
		<p>That delivery layer is ZEPH. Built in Zig because Zig is deterministic: no hidden allocations, no garbage collector, no surprises. Compiled to WASM because WASM is the universal runtime — write the engine once, run it everywhere.</p>
	</section>

	<section class="content">
		<h2>Receipts</h2>
		<ul class="receipts">
			<li><strong>2.7 KB</strong> compiled WASM</li>
			<li><strong>6.7 ns</strong> validate · <strong>4.44 ns</strong> tier — native, on a 2019 iMac</li>
			<li><strong>Three exports</strong> — <code>score</code> · <code>validate</code> · <code>tier</code></li>
			<li><strong>Pure Zig</strong> — no runtime, no allocator, no hidden cost</li>
		</ul>
	</section>

	<section class="content cta-section">
		<h2>Try it</h2>
		<p>Click the button. The engine loads in your browser and benchmarks itself live.</p>
		<a class="cta" href="https://zeph.faf.one" target="_blank" rel="noopener">
			Live demo at zeph.faf.one →
		</a>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">FAF defines. ZEPH delivers.</p>
		<p class="footer-iana">Zig ⚡️ WebAssembly · cascade.wasm</p>
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
