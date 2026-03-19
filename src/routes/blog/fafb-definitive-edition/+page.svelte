<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>FAFb The Definitive Edition - faf-rust-sdk v2.0.0 | FAF</title>
	<meta name="description" content="The definitive binary format for AI context. String table, chunk classification, enterprise scale. IFF architecture meets the AI era." />
	<meta property="og:title" content="FAFb The Definitive Edition - faf-rust-sdk v2.0.0" />
	<meta property="og:description" content="The definitive binary format for AI context. IFF architecture meets the AI era." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/fafb-definitive-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/fafb-definitive-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / FAFb The Definitive Edition
		</div>

		<h1>FAFb The Definitive Edition</h1>
		<p class="version-tag">faf-rust-sdk v2.0.0</p>
		<p class="subtitle">The definitive binary format for AI context.</p>
		<div class="meta">
			<time datetime="2026-03-19">March 19, 2026</time>
			<span class="separator">•</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/fafb-definitive-edition-hero.png" alt="FAFb architecture diagram — compile flow from .faf YAML to FAFb binary with string table, DNA/Context/Pointer classification" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-rust-sdk v2.0.0 ships the FAFb binary format — built for enterprise scale, future-proofed for any repo size, complexity, or organization. Every YAML key becomes a named binary section. No hardcoded limits. No artificial ceiling. Free upgrade, MIT license, IANA-registered open standard.
			</p>
		</section>

		<section>
			<h2>Why This Exists</h2>

			<p>In the early 90s, I was working with computer graphics engines and apps on the Amiga. The file format underneath everything was IFF — the Interchange File Format that Commodore created. Chunked binary. Named sections. Extensible without breaking readers. It was elegant. It worked.</p>

			<p>That architecture influenced everything that came after. Microsoft literally riffed on it with RIFF. ELF uses the same pattern for executables. Decades later, these formats still work because the core idea was right: named chunks, a table of contents, and the freedom to add new chunk types without breaking old readers.</p>

			<p>When FAF needed a binary format, that knowledge was already there. The insight was simple: every YAML key in a <code>.faf</code> file can just become a named section in the binary. No hardcoded enum with 11 types. No "Unknown" fallback. A string table — the same pattern IFF and ELF have used for decades — indexing unlimited section names.</p>

			<p>v1 was the proof of concept. It worked, but it had a ceiling. v2 removes the ceiling. A solo developer's <code>.faf</code> file compiles to the exact same binary format as a Fortune 500's. Same header. Same sections. Same classification. The format doesn't care about your org chart — it scales from a side project all the way to xAI or SpaceX, and all the way back to earth. This is the format we always wanted to ship.</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>String Table</h3>
			<p>Every YAML key becomes a named binary section via a string table — up to 256 sections per file. No hardcoded types. Custom fields like <code>compliance</code>, <code>security</code>, or <code>agents</code> serialize just as cleanly as <code>project</code> or <code>tech_stack</code>.</p>

			<h3>Chunk Classification</h3>
			<p>Every section is automatically classified:</p>
			<ul>
				<li><strong>DNA</strong> — core project identity (<code>project</code>, <code>tech_stack</code>, <code>commands</code>, <code>faf_version</code>)</li>
				<li><strong>Context</strong> — supplementary chunks (<code>compliance</code>, <code>security</code>, <code>agents</code>, custom fields)</li>
				<li><strong>Pointer</strong> — documentation references (<code>docs</code>)</li>
			</ul>
			<p>Classification is baked into the binary at compile time. AI readers can prioritize DNA sections first, load context on demand, and follow pointers when needed.</p>

			<h3>Enterprise Scale</h3>
			<p>Tested against Titan fixtures — 680 engineers, 62 teams, 240 repos. The format handles it. Priority truncation means an AI with a 4K context window gets the DNA sections first. An AI with 200K gets everything.</p>

			<h3>Deterministic Output</h3>
			<p>Same YAML in, same binary out. Every time. CRC32 of the source YAML is sealed into the header. No timestamps unless you ask for them.</p>
		</section>

		<section>
			<h2>The Binary Layout</h2>

			<pre><code>{`HEADER (32 bytes)
  Magic: "FAFB"
  Version, flags, section count, CRC32 checksum

SECTION DATA (variable)
  Each YAML key → one section, priority-ordered

STRING TABLE (appended)
  Section name index — unlimited names, O(1) lookup

SECTION TABLE (at end)
  16 bytes per entry: name, priority, offset,
  length, token count, classification`}</code></pre>
		</section>

		<section>
			<h2>Use It</h2>

			<h3>Rust</h3>
			<div class="copy-box" onclick={() => copyText('cargo add faf-rust-sdk', 'install-rust')}>
				<code class="copy-code">cargo add faf-rust-sdk</code>
				<button class="copy-btn">{copiedId === 'install-rust' ? 'Copied!' : 'Copy'}</button>
			</div>

			<pre><code>{`use faf_rust_sdk::binary::{compile, decompile, CompileOptions};

let yaml = "faf_version: 2.5.0\\nproject:\\n  name: my-project\\n";
let opts = CompileOptions { use_timestamp: false };
let bytes = compile(yaml, &opts).unwrap();

let result = decompile(&bytes).unwrap();
let dna = result.dna_sections();
let ctx = result.context_sections();`}</code></pre>

			<h3>WASM (Browser / Edge)</h3>
			<div class="copy-box" onclick={() => copyText('npm install @faf/wasm-sdk', 'install-wasm')}>
				<code class="copy-code">npm install @faf/wasm-sdk</code>
				<button class="copy-btn">{copiedId === 'install-wasm' ? 'Copied!' : 'Copy'}</button>
			</div>

			<pre><code>{`import init, { compile_fafb, decompile_fafb } from '@faf/wasm-sdk';

await init();
const bytes = compile_fafb(yamlContent);
const json = decompile_fafb(bytes);`}</code></pre>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v2.0.0</strong> — Released March 19, 2026</li>
				<li><strong>175/175</strong> — faf-rust-sdk tests passing</li>
				<li><strong>138/138</strong> — faf-wasm-sdk tests passing</li>
				<li><strong>313 total</strong> — across both SDKs</li>
				<li><strong>MIT</strong> — free, open, forever</li>
			</ul>
		</section>

		<section>
			<h2>The Links</h2>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>crates.io</h3>
					<p>Rust SDK — the canonical implementation.</p>
					<a href="https://crates.io/crates/faf-rust-sdk" class="cta-link">faf-rust-sdk</a>
				</div>
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-rust-sdk/releases/tag/v2.0.0" class="cta-link">v2.0.0 Release</a>
				</div>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>IANA</h3>
					<p>Registered media type.</p>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" class="cta-link">application/vnd.faf+yaml</a>
				</div>
				<div class="cta-box">
					<h3>Zenodo</h3>
					<p>Academic paper.</p>
					<a href="https://doi.org/10.5281/zenodo.18251362" class="cta-link">DOI 10.5281/zenodo.18251362</a>
				</div>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ IFF got it right in 1985. FAFb brings it to the AI era. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #CE422B;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #CE422B;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #CE422B;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.milestone {
		background: #FFD700;
		color: #000;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #CE422B;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #CE422B;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #CE422B;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #CE422B;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #CE422B;
	}

	a:hover {
		text-decoration: none;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(206, 66, 43, 0.2);
		border: 1px solid rgba(206, 66, 43, 0.4);
		color: #CE422B;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(206, 66, 43, 0.3); border-color: #CE422B; }
	.copy-btn:active { transform: scale(0.95); }

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
