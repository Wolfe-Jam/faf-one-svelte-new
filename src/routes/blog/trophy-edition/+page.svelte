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
</script>

<svelte:head>
	<title>The Trophy Edition - faf-cli v6.6.0 | FAF</title>
	<meta name="description" content="Until now we had 85% as a recommended minimum. It's now 100. All or nothing. AI gets its best shot at assisting you." />
	<meta property="og:title" content="The Trophy Edition - faf-cli v6.6.0" />
	<meta property="og:description" content="How no-score became a score. The 20th app-type ships and 100% becomes the only state we recommend." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/trophy-edition-hero.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/trophy-edition-hero.jpg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Trophy Edition
		</div>

		<h1>The Trophy Edition</h1>
		<p class="version-tag">faf-cli v6.6.0</p>
		<p class="subtitle">How no-score became a score.</p>
		<div class="meta">
			<time datetime="2026-05-11">May 11, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/trophy-edition-hero.jpg" alt="The Trophy Edition — Dorothy smiley at center, constellation of npm, Bun, Homebrew, GitHub, IANA, OpenAI logos radiating outward, trophy in upper-right corner." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Until now we had 85% as a recommended minimum. It's now 100. <strong>All or nothing.</strong> AI gets its best shot at assisting you. We can ask this because we can now get you to 100% on virtually any app-type &mdash; 20 of them in the ladder, including the new <code>about</code> type that just took the count to a score.
			</p>
		</section>

		<section>
			<h2>The Shift</h2>

			<p>From v6.6 onward, faf-cli recommends only 🏆 Trophy.</p>

			<p>That's the change in one sentence. At 100%, AI never has to guess. At 99%, it guesses on one slot. There is no halfway &mdash; sub-Trophy is just a count of slots <em>from</em> Trophy, an interim state, never an endpoint.</p>

			<p>Why now? Because 100% used to be aspirational on certain project shapes &mdash; CLI tools that genuinely have no database, libraries that don't ship a build pipeline, documentation repos with no stack at all. The slot-ignore mechanic helped, but the catalogue of app-types was still incomplete. With v6.6's 20-type ladder, that gap closes.</p>
		</section>

		<section>
			<h2>The 20th Type</h2>

			<p>v6.6 adds <code>about</code> &mdash; the first non-app type in the ladder.</p>

			<p>An About Repo represents another codebase: a public-facing companion to a private source. <code>Wolfe-Jam/mcpaas-cf</code> represents the private <code>Wolfe-Jam/faf-mcpaas</code>. The pattern lets a private project earn verifiable FAF receipts (badges, scoring, AI context) without exposing the engine.</p>

			<pre><code>{`app_type: about
about:
  represents: Wolfe-Jam/faf-mcpaas
  source_score: 100`}</code></pre>

			<p>Zero slots, no auto-detection. The owner declares it; the CLI respects it. Scoring short-circuits to <code>about.source_score</code> &mdash; the About inherits the source's Trophy via owner attestation.</p>

			<p>Adding <code>about</code> brought the app-type ladder to <strong>20</strong>. A score, in the old English sense. Fitting, because v6.6 is when that score became the only one we recommend.</p>
		</section>

		<section>
			<h2>The CLI Follows Through</h2>

			<p><code>faf go</code> ramps to 100%, not 85%.</p>

			<p>The score line celebrates Trophy explicitly &mdash; <em>"Trophy. AI never has to guess."</em> Sub-Trophy is framed as <em>"N slots from Trophy"</em>, with the empty slot names printed inline so the next move is obvious.</p>

			<pre><code>{`$ faf score
🏆 TROPHY 100% 9/9 slots — project.faf
  Trophy. AI never has to guess.

$ faf score   # on a sub-Trophy project
◆ SILVER 95% 19/20 slots — project.faf
  1 slot from Trophy: human_context.where`}</code></pre>

			<p><code>faf sync --pull</code> (the MD &rarr; .faf direction) is now Trophy-gated. Below 100%, the gate refuses the operation with a helpful message:</p>

			<pre><code>{`$ faf sync --pull
× sync --pull blocked: requires 🏆 Trophy (currently 81%)
  MD → .faf backfill only runs at 100%. Reach Trophy with 'faf go', then retry.`}</code></pre>

			<p>Backfilling from CLAUDE.md into a sub-Trophy <code>.faf</code> would overwrite canonical slots with prose that wasn't derived from <code>.faf</code> in the first place. The gate keeps the foundation honest.</p>
		</section>

		<section>
			<h2>Why All-or-Nothing</h2>

			<p>The why is architectural, not aspirational:</p>

			<pre><code>{`Layer 4   AI tooling          ← AI optimised by complete FCL
Layer 3   Agents              ← can act because FCL is complete
Layer 2   MD instructions     ← can be regenerated correctly
Layer 1   .faf (FCL)          ← 🏆 Trophy = complete = foundation`}</code></pre>

			<p>100% on Layer 1 is what makes Layers 2&ndash;4 work. Sub-100% degrades every layer above it &mdash; instructions miss context, agents guess, AI optimisation can't happen because the foundation has holes. Halfway is the trap.</p>

			<p>"Bronze 85% &mdash; ship with note" was retired at v6.6.0. The <code>/pubpro</code> publish gate now requires Trophy. The README language shifted: <em>"Trophy 100% &mdash; all or nothing."</em> The tier ladder itself stays intact &mdash; the recommendation is what changed, not the math.</p>
		</section>

		<section>
			<h2>Slot Vocabulary &mdash; Mk4 Lands in Docs</h2>

			<p>The Mk4 canonical slot names landed in the code on 2026-03-18 (backward compatible on read). v6.6 flips the user-facing surfaces &mdash; READMEs, docs, help text &mdash; to match:</p>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>Old name</th><th>v6.6 canonical</th></tr>
					</thead>
					<tbody>
						<tr><td><code>frontend</code></td><td><code>framework</code></td></tr>
						<tr><td><code>database</code></td><td><code>db</code></td></tr>
						<tr><td><code>css_framework</code></td><td><code>css</code></td></tr>
						<tr><td><code>state_management</code></td><td><code>state</code></td></tr>
						<tr><td><code>api_type</code></td><td><code>api</code></td></tr>
						<tr><td><code>package_manager</code></td><td><code>pkg_manager</code></td></tr>
					</tbody>
				</table>
			</div>

			<p>36k+ existing <code>.faf</code> files keep scoring correctly &mdash; only the vocabulary shifted on user-facing surfaces.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<p><code>faf</code> is the verb &mdash; same word, every surface:</p>

			<div class="copy-box" onclick={() => copyText('bunx faf', 'bunx')}>
				<code class="copy-code">bunx faf</code>
				<button class="copy-btn">{copiedId === 'bunx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('npx faf', 'npx')}>
				<code class="copy-code">npx faf</code>
				<button class="copy-btn">{copiedId === 'npx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli', 'install')}>
				<code class="copy-code">npm install -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('brew install faf-cli', 'brew')}>
				<code class="copy-code">brew install faf-cli</code>
				<button class="copy-btn">{copiedId === 'brew' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Bare <code>faf</code> is shorthand for <code>faf auto</code> &mdash; same behaviour, fewer keystrokes. The workflow: <strong><code>init &rarr; auto &rarr; go &rarr; 100%</code></strong>.</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v6.6.0</strong> &mdash; released May 11, 2026</li>
				<li><strong>674/674</strong> tests passing (2,238 expect() calls)</li>
				<li><strong>🏆 Trophy 100%</strong> &mdash; the only recommended state</li>
				<li><strong>20</strong> canonical app-types (19 detectable + 1 owner-attested)</li>
				<li><strong>368.7 kB</strong> npm tarball, 1.6 MB unpacked, 8 files</li>
				<li><strong>26k+</strong> downloads on the path to here</li>
			</ul>
		</section>

		<section>
			<h2>The Receipts</h2>

			<p>None of this is a brand promise &mdash; it's measurement.</p>

			<ul>
				<li><strong>IANA-registered:</strong> <a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener"><code>application/vnd.faf+yaml</code></a> &mdash; registered 2025-10-30</li>
				<li><strong>Anthropic-listed:</strong> claude-faf-mcp shipped as <em>"Persistent Project Context Server"</em> in <a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener">modelcontextprotocol/servers PR #2759</a> &mdash; merged 2025-10-17</li>
				<li><strong>MCP Registry:</strong> FAF Ecosystem #2759 (Five Fingers)</li>
				<li><strong>xAI commission:</strong> ZEPH project, active this week</li>
				<li><strong>100+ repos</strong> under FAF discipline, ~80% with current <code>project.faf</code></li>
			</ul>

			<p>FAF defines. MD instructs. AI codes. <strong>FAF don't lie.</strong></p>
		</section>

		<section class="footer-note">
			<p>Built with <code>.faf</code> &check; <code>v6.6.0</code> &mdash; The Trophy Edition. 🏎️</p>
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
		color: #666;
	}

	.breadcrumb a {
		color: #FF6B35;
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
		color: #666;
		margin: 0.5rem 0 1rem 0;
		font-style: italic;
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
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
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
		border-bottom: 1px solid #eee;
	}

	.api-table th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.api-table td code {
		font-size: 0.85em;
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
