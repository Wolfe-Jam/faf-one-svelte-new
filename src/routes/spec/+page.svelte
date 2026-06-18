<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The FAF Format — .faf and .fafb | FAF</title>
	<meta name="description" content=".faf is to context what package.json is to dependencies. The Foundational AI-context Format: human-readable YAML, IANA-registered (application/vnd.faf+yaml), with a compiled binary form, .fafb." />
	<meta property="og:title" content="The FAF Format — .faf and .fafb" />
	<meta property="og:description" content="The Foundational AI-context Format. Human-readable YAML, IANA-registered, with a compiled binary form. The readable spec, pointing to BINARY-FORMAT.md." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<h1>The FAF Format</h1>
		<p class="subtitle"><code>.faf</code> is to context what <code>package.json</code> is to dependencies.</p>
		<p class="media-type"><code>application/vnd.faf+yaml</code> &middot; IANA-registered</p>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				A single, portable file that captures what a project is, how it's built, and why.
				Readable by humans, code, and AI assistants. <code>.faf</code> is the
				<strong>Foundational AI-context Format</strong>: plain, human-readable YAML, an open
				standard registered with IANA as <code>application/vnd.faf+yaml</code>.
			</p>
			<p>This page covers the <code>.faf</code> source format and its compiled binary form, <code>.fafb</code>.</p>
		</section>

		<section>
			<h2>Two files, one source of truth</h2>
			<ul>
				<li><strong><code>.faf</code></strong> — the source. Human-readable YAML. <code>faf init</code> creates it, <code>faf auto</code> and a human complete it. The standard.</li>
				<li><strong><code>.fafb</code></strong> — the compiled form. A small, sealed binary the <code>.faf</code> compiles to. The brick.</li>
			</ul>
			<p>YAML is the source code; <code>.fafb</code> is the object file. You never edit the binary — you <strong>recompile</strong> from the <code>.faf</code>.</p>
		</section>

		<section>
			<h2>Example</h2>
			<p>A minimal <code>.faf</code>:</p>
			<pre><code>{`faf_version: 2.5.0
project:
  name: my-app
  goal: Ship a fast CLI
  main_language: Rust
human_context:
  who: Rust developers
  what: A command-line tool
  why: Speed without ceremony
stack:
  build: cargo
tech_stack:
  - Rust
key_files:
  - src/main.rs
commands:
  build: cargo build --release`}</code></pre>
		</section>

		<section>
			<h2><code>.fafb</code> — context, compiled</h2>
			<p><code>.fafb</code> is the compiled binary form of a <code>.faf</code>. It's modeled on <strong>IFF</strong> — the chunked format Commodore created for the Amiga in the '80s (Microsoft's RIFF and the ELF executable format use the same idea): a magic number, a set of named chunks, and a table that indexes them.</p>
			<p>What the binary buys you:</p>
			<ul>
				<li><strong>Content-addressable</strong> — identical content compiles to identical bytes. The same project context yields the same hash on every machine, so a <code>.fafb</code> can be deduped, cached, and verified by hash. Context gets an identity.</li>
				<li><strong>O(1) lookup</strong> — the section table sits at the end of the file; a reader maps any chunk by name without scanning content.</li>
				<li><strong>Priority truncation</strong> — each chunk carries a truncation priority, so a reader deterministically drops lower-priority chunks to fit any token budget; identity chunks are kept longest.</li>
				<li><strong>Sealed</strong> — a CRC32 of the source <code>.faf</code> is sealed into the header.</li>
			</ul>
		</section>

		<section>
			<h2>Closed canonical</h2>
			<p>The single design rule: <strong>the writer is closed, the reader is graceful.</strong></p>
			<ul>
				<li><strong>Writer (closed)</strong> — a compiler emits exactly the canonical chunk set, in canonical order, and nothing else. Non-canonical keys fold into the <code>context</code> chunk — preserved in full, never given a section of their own. The format has a fixed shape, the way a JPEG does.</li>
				<li><strong>Reader (graceful)</strong> — an unknown section name is skipped, not rejected. A future minor version can add a chunk without breaking deployed readers.</li>
			</ul>
			<p>Closing the writer is what makes the output content-addressable: the same <code>.faf</code> always compiles to identical <code>.fafb</code> bytes.</p>
			<p>The canonical set is <strong>13 chunks — 11 DNA (core identity) + 2 Context</strong> — mirroring the <code>.faf</code> structure:</p>
			<ul>
				<li><strong>Identity</strong> — <code>faf_version</code> &middot; <code>project</code> &middot; <code>app_type</code> &middot; <code>about</code></li>
				<li><strong>Stack</strong> — <code>stack</code> &middot; <code>tech_stack</code> &middot; <code>key_files</code> &middot; <code>commands</code></li>
				<li><strong>Human &amp; structure</strong> — <code>human_context</code> &middot; <code>monorepo</code> &middot; <code>architecture</code></li>
				<li><strong>Context</strong> — <code>scores</code> &middot; <code>context</code> (the fold target)</li>
			</ul>
		</section>

		<section>
			<h2>The wire (v2)</h2>
			<p>A 32-byte little-endian header (magic <code>FAFB</code>, version, feature flags, source CRC32, and offsets), then section data in canonical order, a string table, and a 16-byte-per-entry <strong>section table at the end</strong> for O(1) access. Readers ignore unknown flag bits and skip unknown section names.</p>
			<p class="spec-pointer"><strong>Full specification → <a href="https://github.com/Wolfe-Jam/faf-rust/blob/main/crates/faf-fafb/BINARY-FORMAT.md">BINARY-FORMAT.md</a></strong></p>
		</section>

		<section>
			<h2>Stability — wire v2 is frozen</h2>
			<p>The byte layout is immutable, enforced by a byte-exact golden-master test. New capabilities ship only as forward-compatible additions — we do not break v2. Because the <code>.faf</code> source is always authoritative, you <strong>recompile, never migrate</strong>. Nothing gets trapped in an old binary.</p>
		</section>

		<section>
			<h2>Security &amp; interop</h2>
			<p><code>.faf</code> extends YAML — every <code>.faf</code> is a valid YAML document, so any standard YAML parser can read one; specialized parsers add validation and scoring. UTF-8, with no platform-specific path conventions in the core — portable by construction.</p>
			<p>Treat <code>.faf</code> content as <strong>untrusted input</strong>. Implementations should:</p>
			<ul>
				<li>validate the YAML structure before parsing,</li>
				<li>sanitize file paths (no directory traversal),</li>
				<li>keep score and confidence values in range (0–100, 0–1.0),</li>
				<li>never execute code found in a <code>.faf</code>.</li>
			</ul>
			<p><strong>Privacy:</strong> a <code>.faf</code> may carry dependencies, architecture, and workflow detail — don't put secrets in a publicly shared one.</p>
		</section>

		<section>
			<h2>Registration</h2>
			<p><code>.faf</code> is registered with IANA as the media type <strong><code>application/vnd.faf+yaml</code></strong> (registered 2025-10-30). The <a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml">IANA record</a> is the authoritative registration; the security and interop notes above mirror its considerations. Optional parameter: <code>version</code> (e.g. <code>version=1.0</code>).</p>
		</section>

		<section>
			<h2>Get it</h2>
			<p>Implemented in Rust — one kernel, many shells — so the same engine runs in the CLI, the browser, and at the edge, with nothing to drift:</p>
			<table>
				<thead><tr><th>Crate</th><th>What</th></tr></thead>
				<tbody>
					<tr><td><a href="https://crates.io/crates/faf-kernel"><code>faf-kernel</code></a></td><td>parse &middot; validate &middot; score</td></tr>
					<tr><td><a href="https://crates.io/crates/faf-fafb"><code>faf-fafb</code></a></td><td>the FAFb v2 binary format</td></tr>
					<tr><td><a href="https://crates.io/crates/faf-rust-sdk"><code>faf-rust-sdk</code></a></td><td>the facade</td></tr>
					<tr><td><a href="https://crates.io/crates/faf-wasm-sdk"><code>faf-wasm-sdk</code></a></td><td>WASM, for the edge</td></tr>
				</tbody>
			</table>
			<p>The fastest way in — one command writes (or refreshes) your <code>.faf</code>:</p>
			<pre><code>npx faf-cli auto</code></pre>
		</section>

		<section>
			<h2>Links</h2>
			<ul>
				<li><strong>Specification</strong> — <a href="https://github.com/Wolfe-Jam/faf-rust/blob/main/crates/faf-fafb/BINARY-FORMAT.md">BINARY-FORMAT.md</a></li>
				<li><strong>IANA</strong> — <a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"><code>application/vnd.faf+yaml</code></a></li>
				<li><strong>GitHub</strong> — <a href="https://github.com/Wolfe-Jam/faf-rust">Wolfe-Jam/faf-rust</a></li>
			</ul>
		</section>
	</article>
</div>

<style>
	/* Dark IANA register: almost-black background, white text, austere. Locked dark. */
	:global(body) {
		background: #0a0a0a;
	}

	/* Hide the global milestone banner on this austere spec page (reverts on navigation). */
	:global(.official-banner) {
		display: none;
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
		margin-bottom: 1.25rem;
	}

	strong {
		color: #ffffff;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
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
	}

	pre code {
		background: none;
		padding: 0;
		color: #e5e5e5;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
		font-size: 1rem;
	}

	th, td {
		text-align: left;
		padding: 0.6rem 0.75rem;
		border-bottom: 1px solid #222;
	}

	th {
		font-weight: 700;
		color: #ffffff;
	}

	.spec-pointer {
		font-size: 1.05rem;
		margin-top: 1rem;
	}

	a {
		color: #00ffff;
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
