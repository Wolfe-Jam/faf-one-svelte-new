<svelte:head>
	<title>Bricks — inside a .fafb | FAF</title>
	<meta name="description" content="A .fafb is a .faf compiled: the same project context in a binary a machine can index without reading. Nine things about the brick, each with the run it came from." />
	<meta property="og:title" content="Bricks — inside a .fafb" />
	<meta property="og:description" content="Nine things about the compiled form of .faf: why there is no chunk 14, why a comment changes the file but not the context, and why it is not a compressor." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/bricks" />
	<meta property="og:image" content="https://faf.one/cards/spec-og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Bricks — inside a .fafb" />
	<meta name="twitter:description" content="Context, compiled. Nine things about the brick — the binary form of .faf — each with the run it came from." />
	<meta name="twitter:image" content="https://faf.one/cards/spec-og.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<p class="eyebrow">Did you know</p>
		<h1>Anatomy of a Brick</h1>
		<p class="subtitle">A <code>.fafb</code> is a <code>.faf</code> compiled.</p>
		<p class="media-type">The same context, in a binary a machine can index without reading it.</p>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				Here are the first 32 bytes of the reference file, and nine things about them
				that surprise people. Every figure came from a run.
			</p>

			<div class="hex">
<pre><span class="w">4641 4642</span>  <span class="on">02</span><span class="cy">00</span> <span class="on">4000</span>  cb88 71ed  0000 0000
0000 0000  <span class="cy">0800</span> <span class="on">d001 0000</span>  <span class="cy">0700</span> <span class="on">5002 0000</span></pre>
			</div>
			<p class="legend">
				<span class="k-w">FAFB, the magic</span> &middot;
				<span class="k-on">version 2, flags, source CRC, offsets</span> &middot;
				<span class="k-cy">counts and indexes</span>
			</p>
		</section>

		<section>
			<h2>The idea is from 1985</h2>
			<p>Magic bytes, named chunks, a table that indexes them — that is <strong>IFF</strong>, the Amiga Interchange File Format, the design RIFF later riffed on. A brick is that pattern pointed at AI context instead of sampled audio.</p>
		</section>

		<section>
			<h2>There is no chunk 14</h2>
			<p>Thirteen content chunks, closed. Anything else an author writes folds into <code>context</code>, losslessly, sorted. A format with a fixed shape can be <strong>finished</strong>. An open one never can, because the output depends on which optional keys happened to be present.</p>
		</section>

		<section>
			<h2>All 32 bytes are spoken for</h2>
			<p>There is no spare room, by design, and the layout is frozen. Every new capability arrives as a chunk or a flag bit that older readers skip — which is what chunks were invented for.</p>
		</section>

		<section>
			<h2>A comment changes the file, not the context</h2>
			<p>Add one comment line to the source and the compiled file gets a new hash: four bytes of CRC move. Every content chunk stays byte-for-byte identical, because the compiler re-serializes the YAML and the comment never reaches a chunk.</p>
			<p>So a brick has <strong>two identities</strong>. A <strong>Content ID</strong> over what the AI actually reads, and a <strong>file digest</strong> over every byte. Dedupe on the first. Sign the second.</p>
			<pre>same content, one comment apart
sha256  e88c3966dc100026...
sha256  f5cfe2e264d594f3...
differing bytes: 4  ·  chunk payloads: identical</pre>
		</section>

		<section>
			<h2>It is not a compressor</h2>
			<p>On a small <code>.faf</code> the brick comes out <strong>bigger than its source</strong>. A 32-byte header, a section table, a string table and per-chunk framing cost more than they save when there is nothing to save.</p>
			<p>What you buy instead: any chunk located without parsing the file, a truncation order decided in advance, and a CRC sealed to the source it came from.</p>
			<pre>faf compile  ·  drive folder
1246 -> 1414 bytes (113.5% of source)  ·  7 chunks  ·  wire v2.0</pre>
		</section>

		<section>
			<h2>It cuts from the tail, never the middle</h2>
			<p>Every chunk carries a priority, and a reader fitting a brick into a token budget drops <strong>whole tiers from the end</strong> — 64, then 128, then 150&ndash;200 — so what is left is always a prefix of the full rendering. Identity chunks at 255 never drop.</p>
			<p>Cutting one chunk out of the middle would be smaller and wrong: it leaves a hole that shifts everything after it, and a prompt cache keyed on the prefix would miss.</p>
		</section>

		<section>
			<h2>The token count is a hint, and it under-counts</h2>
			<p>Each section stores <code>bytes/4</code> as a size hint. Measured across 79 real <code>project.faf</code> files, that under-counts by about a tenth on GPT tokenizers and a fifth on Gemma's — so budgeting with it overflows.</p>
			<pre>79 files  ·  199,110 bytes of YAML
o200k_base   55,259 tok   3.60 B/tok   bytes/4  -9.9%
Gemma 3      62,240 tok   3.20 B/tok   bytes/4 -20.0%</pre>
		</section>

		<section>
			<h2>The score is carried, not computed</h2>
			<p>A brick copies the source's <code>scores</code> block through, unchanged. It is a claim as of the source it was sealed to, not a number the compiler worked out. If you need a current score, run a scorer.</p>
			<p>The same discipline, one step further: a brick <strong>never signs itself</strong>. A file asserting its own signature proves nothing, so signatures live outside it, over the digest.</p>
		</section>

		<section>
			<h2>Drop the first line and it is YAML again</h2>
			<p>Each payload is the chunk name, a colon, a newline, then the value at column zero. Strip that first line and the rest parses straight back, nesting intact. Parse the whole payload and you get nonsense — the name binds to null.</p>
			<p>One trap worth knowing: payloads are YAML <strong>1.2</strong>, where <code>yes</code> and <code>off</code> are plain strings. A 1.1 parser such as PyYAML reads them as booleans.</p>
		</section>

		<section>
			<h2>Two programs, same bytes</h2>
			<p>The compiled brick is specified exactly enough that an independent build lands on the identical file: same 592 bytes, byte for byte, from the same source. The YAML serializer is version-pinned for the same reason — the payload bytes <strong>are</strong> the identity, so a patch bump that re-quotes one scalar would silently change it.</p>
			<pre>cmp  product CLI 0.9.5  &lt;-&gt;  reference golden master
592 bytes  ·  identical</pre>
		</section>

		<section>
			<h2>Read the bytes</h2>
			<p>This page is the tour. <a href="/spec">The FAF Format</a> is the readable specification, and <a href="https://github.com/Wolfe-Jam/faf-rust/blob/main/crates/faf-fafb/BINARY-FORMAT.md">BINARY-FORMAT.md</a> is the wire itself — header table, chunk table, identities, limits.</p>
			<p class="closing"><code>.faf</code> is the source. <code>.fafb</code> is the compiled form. Recompile, never migrate.</p>
		</section>
	</article>
</div>

<style>
	/* Locked dark — sibling to /spec. Plain body rule, no !important. */
	:global(body) {
		background: var(--faf-locked-dark);
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #e5e5e5;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 2px solid #333;
		padding-bottom: 2rem;
	}

	.eyebrow {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--faf-orange);
		margin: 0 0 0.75rem 0;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #ffffff;
		line-height: 1.3;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #ffffff;
		font-weight: 600;
		margin: 0.5rem 0;
	}

	.media-type {
		font-size: 0.9rem;
		color: #e5e5e5;
		margin: 0.75rem 0 0 0;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		color: #ffffff;
	}

	h2 {
		font-size: 1.6rem;
		margin: 3rem 0 1.5rem 0;
		color: #ffffff;
		border-bottom: 1px solid #222;
		padding-bottom: 0.5rem;
	}

	p {
		margin: 1rem 0;
	}

	strong {
		color: #ffffff;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #1f1f1f;
		color: #ffffff;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #161616;
		color: #e5e5e5;
		padding: 1.25rem;
		border: 1px solid #333;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.95rem;
		margin: 1.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		line-height: 1.7;
	}

	.hex {
		margin: 1.5rem 0 0.75rem 0;
	}

	.hex pre {
		margin: 0;
		font-size: 1rem;
		line-height: 2;
		color: #e5e5e5;
	}

	.hex .w { color: #ffffff; font-weight: 600; }
	.hex .on { color: var(--faf-orange); font-weight: 600; }
	.hex .cy { color: var(--faf-cyan); font-weight: 600; }

	.legend {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
		color: #e5e5e5;
		margin: 0 0 2rem 0;
	}

	.legend .k-w { color: #ffffff; }
	.legend .k-on { color: var(--faf-orange); }
	.legend .k-cy { color: var(--faf-cyan); }

	.closing {
		color: #ffffff;
		font-weight: 600;
	}

	a {
		color: #00ffff;
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}

	@media (max-width: 600px) {
		h1 { font-size: 1.8rem; }
		h2 { font-size: 1.35rem; }
		.blog-post { font-size: 1rem; }
		.hex pre { font-size: 0.8rem; }
	}
</style>
