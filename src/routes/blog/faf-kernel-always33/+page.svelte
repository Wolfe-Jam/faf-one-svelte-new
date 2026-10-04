<!-- pubblog Release — faf-kernel v1.1.1, the Always33 engine. Part VI (finale) of the Always33 series
     (overview: /blog/always33). Matrix run 2026-09-30; raw results in PLANET-FAF/cloud-briefs. -->
<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 The Always33 series, Part VI: faf-kernel v1.1

One kernel, every score.

We scored 9 public project.faf files through 6 engines:
the kernel, faf-cli, Python and 3 hosted MCP routes.
54 of 54 scores agree.

The youngest piece is the engine under all of them.

cargo add faf-kernel

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/faf-kernel-always33';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>One kernel, every score - faf-kernel v1.1 | FAF</title>
	<meta
		name="description"
		content="One kernel, every score. faf-kernel v1.1 is the engine under every FAF score. 9 public files through 6 engines: 54 of 54 scores agree."
	/>
	<meta property="og:title" content="One kernel, every score - faf-kernel v1.1" />
	<meta
		property="og:description"
		content="The youngest piece is the engine under all of them. 54 of 54 scores agree."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/faf-kernel-always33" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/faf-kernel-always33-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/faf-kernel-always33-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-kernel v1.1: one kernel, every score. The youngest piece is the engine under all of them. 54 of 54 agree."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="One kernel, every score - faf-kernel v1.1" />
	<meta
		name="twitter:description"
		content="The youngest piece is the engine under all of them. 54 of 54 scores agree."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/faf-kernel-always33-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-kernel v1.1: one kernel, every score. The youngest piece is the engine under all of them. 54 of 54 agree."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / faf-kernel v1.1
		</div>
		<h1>One kernel, every score</h1>
		<p class="version-tag">faf-kernel v1.1.1 · Always33 series, Part VI</p>
		<p class="subtitle">The youngest piece is the engine under all of them.</p>
		<div class="meta">
			<time datetime="2026-09-30">September 30, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/faf-kernel-always33-hero.png"
			alt="faf-kernel v1.1: one kernel, every score. The youngest piece is the engine under all of them. 54 of 54 agree."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-kernel is the engine under every FAF score. We scored 9 public
				<code>project.faf</code> files through 6 engines: the kernel itself, faf-cli, faf-python-sdk
				and three hosted MCP routes. <strong>54 of 54 scores agree.</strong>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Each FAF app grew its own way of scoring. They mostly agreed.
					Mostly isn't good enough for a number people rely on.
				</p>
				<p>
					<strong>Fix.</strong> One kernel. Every app either runs it, or matches it file for file
					and proves it with tests.
				</p>
				<p>
					<strong>New state.</strong> Ask any FAF tool about your project and you get the same
					number. The table below shows it.
				</p>
			</div>
			<div class="terminal-block">
				<code>cargo add faf-kernel</code>
			</div>
			<p class="muted-note">
				The same kernel, compiled to WebAssembly, is on npm as <code>faf-scoring-kernel</code>.
				That's the build faf-cli carries.
			</p>
		</section>

		<section>
			<h2>The matrix</h2>
			<p>
				Nine public <code>project.faf</code> files from FAF repos, each scored by six engines on
				September 30, 2026. The last row is the faf-cli file with its <code>slotignored</code>
				markers stripped, the way a file looks before <code>faf auto</code>.
			</p>
			<div class="table-wrap">
				<table class="matrix">
					<thead>
						<tr>
							<th>File</th>
							<th>faf-kernel</th>
							<th>faf-cli v8</th>
							<th>Python v2</th>
							<th>/claude</th>
							<th>/grok</th>
							<th>/faf</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>agents-md-facts</td><td>52</td><td>52</td><td>52</td><td>52</td><td>52</td><td>52</td></tr>
						<tr><td>mcp-context-card</td><td>56</td><td>56</td><td>56</td><td>56</td><td>56</td><td>56</td></tr>
						<tr><td>claude-faf-mcp</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td></tr>
						<tr><td>faf-cli</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td></tr>
						<tr><td>faf-mcp</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td></tr>
						<tr><td>faf-python-sdk</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td></tr>
						<tr><td>gemini-faf-mcp</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td></tr>
						<tr><td>grok-faf-mcp</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td><td>100</td></tr>
						<tr class="before"><td>faf-cli, no markers</td><td>36</td><td>36</td><td>36</td><td>36</td><td>36</td><td>36</td></tr>
					</tbody>
				</table>
			</div>
			<p class="muted-note">
				<code>/claude</code>, <code>/grok</code> and <code>/faf</code> are the hosted routes on
				mcpaas.live. claude-faf-mcp, faf-mcp and grok-faf-mcp score through faf-cli, and
				gemini-faf-mcp through faf-python-sdk, so the table covers them too.
			</p>
			<p>
				The no-markers row is the upgrade story in one line: 36 until <code>faf auto</code> marks
				the 12 enterprise slots <code>slotignored</code>, then 100.
			</p>
		</section>

		<section>
			<h2>The version numbers tell the story</h2>
			<p>
				faf-cli is at v8, claude-faf-mcp v7, faf-mcp v4, gemini-faf-mcp v3, grok-faf-mcp and
				faf-python-sdk v2, mcpaas.live v1.8. The kernel is at <strong>v1.1</strong>. It's the
				youngest piece, and it's the engine every other product now stands on.
			</p>
			<p>
				v1.1.1 made the last difference go away: <code>tbd</code> and <code>todo</code> count as
				empty, in the kernel and everywhere else.
			</p>
		</section>

		<section>
			<h2>The series</h2>
			<ul>
				<li><a href="/blog/always33">The Always33 Suite</a>: the overview</li>
				<li><a href="/blog/always33-edition">Part I, faf-cli v8</a>: where the engine was authored</li>
				<li><a href="/blog/claude-always33-edition">Part II, claude-faf-mcp v7</a>: Claude Code, Desktop and claude.ai</li>
				<li><a href="/blog/faf-mcp-always33-edition">Part III, faf-mcp v4</a>: every IDE</li>
				<li><a href="/blog/gemini-grok-always33-edition">Part IV, gemini-faf-mcp v3 and grok-faf-mcp v2</a>: frontier models</li>
				<li><a href="/blog/python-edge-always33-edition">Part V, faf-python-sdk v2 and mcpaas.live v1.8</a>: Python and the edge</li>
				<li><strong>Part VI, faf-kernel v1.1</strong>: the engine under all of them</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx faf-cli auto</code>
				<code>npx faf-cli score</code>
			</div>
			<p>
				Then ask Claude, your IDE, Gemini or Grok for the score. It will be the same number.
			</p>
			<p class="muted-note">
				More depth:
				<a href="https://crates.io/crates/faf-kernel" target="_blank" rel="noopener">crates.io</a>
				·
				<a href="https://docs.rs/faf-kernel" target="_blank" rel="noopener">docs.rs</a>
				·
				<a href="/blog/always33">The Always33 Suite</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> faf-kernel 1.1.1 (September 25, 2026)</li>
				<li><strong>Packages:</strong> crates.io <code>faf-kernel</code> · npm <code>faf-scoring-kernel</code> (WebAssembly)</li>
				<li><strong>Scoring:</strong> always-33; 21 slots filled, the 12 enterprise slots <code>slotignored</code> where they don't apply</li>
				<li><strong>Matrix:</strong> 9 files × 6 engines = 54 scores, all equal (September 30, 2026)</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions: guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-rust/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One kernel, every score. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		color: #1a1a1a;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
	}

	.post-header {
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		color: #333;
	}
	.breadcrumb a {
		color: #00d4d4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #1a1a1a;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator {
		color: #1a1a1a;
	}
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.release {
		background: #00b8b8;
	}

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.7rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: #1a1a1a;
		letter-spacing: -0.01em;
	}

	.post-content section > h3 {
		font-size: 1.3rem;
		font-weight: 800;
		color: #1a1a1a;
		margin: 2rem 0 0.75rem;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.post-content a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.intro .lead + .lead {
		margin-top: 2rem;
	}
	.intro .plain-english + p {
		margin-top: 2rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #1a1a1a;
	}
	/* In Plain English is black and white */
	.lead.plain-english {
		border-left-color: #1a1a1a;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.65rem;
		color: #1a1a1a;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.muted-note {
		font-size: 0.9rem;
		color: #333;
	}

	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		border: none; /* the global code rule adds a hairline */
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.95rem;
	}

	.table-wrap {
		overflow-x: auto;
		margin: 1.25rem 0;
	}
	.matrix {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}
	.matrix th,
	.matrix td {
		padding: 0.55rem 0.7rem;
		white-space: nowrap;
		text-align: right;
		border-bottom: 1px solid #e5e5e5;
		color: #1a1a1a;
	}
	.matrix th:first-child,
	.matrix td:first-child {
		text-align: left;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.88rem;
	}
	.matrix thead th {
		background: #1a1a1a;
		color: #ffffff;
		font-weight: 700;
		font-size: 0.82rem;
	}
	.matrix tr.before td {
		background: #f7f5f0;
		font-style: italic;
	}
	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #00d4d4;
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff !important;
	}
	.feedback-btn:hover {
		background: #000;
		text-decoration: none !important;
	}
	.feedback-btn.secondary {
		background: transparent;
		color: #1a1a1a !important;
		border: 2px solid #1a1a1a;
	}
	.feedback-btn.secondary:hover {
		background: #1a1a1a;
		color: #fff !important;
		text-decoration: none !important;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #333;
	}
</style>
