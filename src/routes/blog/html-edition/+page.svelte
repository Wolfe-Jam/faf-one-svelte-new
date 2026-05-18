<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	const shareText = 'We rendered a .faf. faf-cli v6.7.0 — The HTML Edition. FAF defines. MD instructs. AI codes. HTML shows.';
	const shareUrl = 'https://faf.one/blog/html-edition';
	const shareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>The HTML Edition - faf-cli v6.7.0 | FAF</title>
	<meta name="description" content="We rendered a .faf. The day we saw FAF. faf show renders project.faf to project.html, on-demand, for human and team review. FAF became a team event — with a Pit Crew." />
	<meta property="og:title" content="The HTML Edition - faf-cli v6.7.0" />
	<meta property="og:description" content="A .faf was always machine-readable. v6.7 is the day it became human-visible. The 4th pillar: FAF defines. MD instructs. AI codes. HTML shows." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/html-edition-hero.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/html-edition-hero.jpg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The HTML Edition
		</div>

		<h1>The HTML Edition</h1>
		<p class="version-tag">faf-cli v6.7.0</p>
		<p class="subtitle">FAF became a team event. With a Pit Crew.</p>
		<div class="meta">
			<time datetime="2026-05-17">May 17, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/html-edition-hero.jpg" alt="The HTML Edition — Dorothy smiley at center, a .faf file rendering into a browser window, pit-wall telemetry motif, FAF defines / MD instructs / AI codes / HTML shows across the bottom." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> 🔥 The day we <em>saw</em> FAF &mdash; A <code>.faf</code> was always machine-readable &mdash; scoring, versioning with your code. v6.7 is the day it became <strong>human-visible</strong>. <code>faf show</code> renders the current <code>project.faf</code> to a self-contained <code>project.html</code> and opens it &mdash; on-demand, in any browser, for human <em>and team</em> review. The same context your AI reads, shown to you.
			</p>
		</section>

		<section>
			<h2>The 4th Pillar</h2>

			<p>FAF has always run on three lanes:</p>

			<pre><code>{`FAF defines.   MD instructs.   AI codes.`}</code></pre>

			<p>One owned thing &mdash; FAF, the definition &mdash; and non-owned mediums doing one job each. v6.7 adds the fourth, and it was always going to be reached:</p>

			<pre><code>{`FAF defines.   MD instructs.   AI codes.   HTML shows.`}</code></pre>

			<p>The first three are <em>told</em>. README explains in prose, <code>.faf</code> declares in YAML, the AI executes. But a design isn't described &mdash; it's <strong>seen</strong>. HTML is the one render target the whole world already has. <code>project.html</code> introduces nothing to register: no mime-type, no IANA application, no new format. It is a <em>view</em>, not a member. A "show-me" for <code>.faf</code>.</p>
		</section>

		<section>
			<h2>.faf &rarr; .html, for the Dev and the Crew</h2>

			<p>One verb:</p>

			<pre><code>{`faf show`}</code></pre>

			<p>Renders the current <code>project.faf</code> to a self-contained, zero-dependency, HTML-escaped <code>project.html</code> and opens it &mdash; the score, the tier, the 6 W's, the stack. Scored by the real scorer, never a reimplementation. Deterministic: no timestamps, so a regenerate only differs when the <code>.faf</code> actually changed. <code>.faf</code> for the machine; <code>.html</code> so the dev &mdash; and the crew &mdash; sees the same truth.</p>

			<p>Trophy renders the earned award line. Sub-Trophy renders the honest gaps. The same <code>.faf</code>, two forms: one the machine parses, one a human reviews. <code>faf export --html</code> emits it alongside <code>AGENTS.md</code> / <code>.cursorrules</code> / <code>GEMINI.md</code>; a public render API (<code>generateProjectHtml</code>) means consumers render from the single source instead of reinventing it.</p>
		</section>

		<section>
			<h2>The Cross-Check</h2>

			<p><code>project.html</code> is not a vanity card. It is a <strong>cross-check</strong>: see what your AI sees, then improve what it is working with <strong>at the root</strong> &mdash; the <code>project.faf</code> itself, not the symptoms.</p>

			<p>A human opens the render, sees <code>55%</code>, and instantly sees <em>which</em> slots are empty &mdash; <em>who</em>, <em>what</em>, <em>why</em>. They draw the causation themselves: the AI wasn't flawed, it was starved &mdash; and here is a picture of exactly what it wasn't given. The score is the score. A RED <code>.faf</code> renders RED. The render doesn't flatter; it shows the truth, and the empty slots <em>are</em> the to-do list.</p>

			<p>That reframes the work, and it is honest about whose work it is:</p>

			<pre><code>{`Be vague, get random results.
Be precise, get great code.`}</code></pre>

			<p>Take a stale <code>project.faf</code> &mdash; empty 6 W's, empty stack &mdash; and it renders ○ RED. Fill those slots with the project's real context and the <em>same</em> render climbs to 🏆 Trophy. Same project, same FAF, same <code>faf show</code> &mdash; an incomplete <code>.faf</code> made complete. Not a conversion story. A precision story.</p>
		</section>

		<section>
			<h2>FAF Became a Team Event &mdash; With a Pit Crew</h2>

			<p>On May 17, FAF became a team event. With a Pit Crew.</p>

			<p>The car is your project. A <code>.faf</code> at 🏆 Trophy / 100% is the car set up perfectly &mdash; and that is <strong>the goal</strong>, because AI codes best with 100% context. Not vanity: the only setup the crew can win on. The lanes are the crew's roles:</p>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>Lane</th><th>Pit Crew role</th></tr>
					</thead>
					<tbody>
						<tr><td><strong>FAF defines</strong></td><td>The setup spec &mdash; the car at Trophy</td></tr>
						<tr><td><strong>MD / Agents-MD instructs</strong></td><td>The crew-chief call sheet &mdash; <code>CLAUDE.md</code> + <code>AGENTS.md</code></td></tr>
						<tr><td><strong>AI codes</strong></td><td>The crew, executing &mdash; choreographed, timed</td></tr>
						<tr><td><strong>HTML shows</strong></td><td>The pit wall &mdash; telemetry the driver and crew read, on-demand</td></tr>
					</tbody>
				</table>
			</div>

			<p>You are the driver <em>and</em> the team principal: you set the goal, you own the call. And everything downstream is <strong>gated on the Trophy</strong>. The crew chief's call sheet only instructs well because it derives from a 100% <code>.faf</code>. An incomplete <code>.faf</code> is a pit crew working blind on a miscalibrated car. Get the Trophy first; then the crew flows.</p>

			<p>That is the through-line of v6.7. The pit wall went up. Humans like visuals. We gave them one.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<p>Install or update &mdash; one line:</p>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@latest', 'install')}>
				<code class="copy-code">npm install -g faf-cli@latest</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Then, in any project directory:</p>

			<div class="copy-box" onclick={() => copyText('faf show', 'show')}>
				<code class="copy-code">faf show</code>
				<button class="copy-btn">{copiedId === 'show' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Zero-install &mdash; <code>faf</code> is the verb, every surface:</p>

			<div class="copy-box" onclick={() => copyText('bunx faf show', 'bunx')}>
				<code class="copy-code">bunx faf show</code>
				<button class="copy-btn">{copiedId === 'bunx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('npx faf show', 'npx')}>
				<code class="copy-code">npx faf show</code>
				<button class="copy-btn">{copiedId === 'npx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('brew install faf-cli', 'brew')}>
				<code class="copy-code">brew install faf-cli</code>
				<button class="copy-btn">{copiedId === 'brew' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>The workflow stays: <strong><code>init &rarr; auto &rarr; go &rarr; 🏆</code></strong> &mdash; then <code>faf show</code> to see it.</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v6.7.0</strong> &mdash; released May 17, 2026</li>
				<li><strong>696/696</strong> tests passing (2,308 expect() calls, 55 files)</li>
				<li><strong>🏆 Trophy 100%</strong> &mdash; faf-cli's own <code>project.faf</code></li>
				<li><strong>513.2 kB</strong> npm tarball, 8 files</li>
				<li><strong>1</strong> new verb (<code>faf show</code>), <strong>1</strong> new export surface (<code>--html</code>), <strong>7</strong> public API exports</li>
			</ul>
		</section>

		<section>
			<h2>The Receipts</h2>

			<p>None of this is a brand promise &mdash; it's measurement.</p>

			<ul>
				<li><strong>IANA-registered:</strong> <a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener"><code>application/vnd.faf+yaml</code></a> &mdash; registered 2025-10-30</li>
				<li><strong>Anthropic-listed:</strong> claude-faf-mcp shipped as <em>"Persistent Project Context Server"</em> in <a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener">modelcontextprotocol/servers PR #2759</a></li>
				<li><strong>MCP Registry:</strong> FAF Ecosystem #2759</li>
				<li><strong>Single-sourced:</strong> tier colours from one <code>FAF_HEX</code> record &mdash; <code>tiers.ts</code> (ANSI) and <code>project.html</code> (hex) both derive from it. Bronze is now deep cyan <code>#0E8C8C</code>, distinct from Silver.</li>
			</ul>

			<p>FAF defines. MD instructs. AI codes. <strong>HTML shows.</strong></p>
		</section>

		<section class="share-section">
			<a class="x-share" href={shareHref} target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with <code>.faf</code> &check; <code>v6.7.0</code> &mdash; The HTML Edition. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #0a0a0a !important;
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
		margin-bottom: 2rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: 0 -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #999;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0.5rem 0;
		color: #fff;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
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
		color: #aaa;
		margin: 0.5rem 0 1rem 0;
		font-style: italic;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #999;
	}

	.separator {
		color: #555;
	}

	.category {
		background: #00B8B8;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #1a1a1a;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		color: #e5e5e5;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #fff;
		border-bottom: 1px solid #333;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #ddd;
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
		background: #1a1a1a;
		color: #e5e5e5;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		border: 1px solid #333;
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
		border: none;
	}

	.api-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.api-table table {
		width: 100%;
		border-collapse: collapse;
	}

	.api-table th, .api-table td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid #333;
	}

	.api-table th {
		background: #1a1a1a;
		font-weight: 600;
		color: #fff;
	}

	.api-table td code {
		font-size: 0.85em;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.x-share {
		display: inline-block;
		padding: 0.6rem 1.5rem;
		background: #1a1a1a;
		color: #fff;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		transition: background 0.2s;
	}

	.x-share:hover {
		background: #FF6B35;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #333;
		font-size: 0.95rem;
		color: #999;
		text-align: center;
	}

	a {
		color: #FF6B35;
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
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
