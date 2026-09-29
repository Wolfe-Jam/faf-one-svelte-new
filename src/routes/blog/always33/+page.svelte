<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `The Always33 Suite: one engine, one number.

The same project.faf gets the same score in the CLI, Claude, Cursor, VS Code, Gemini, Grok, Python and at the edge.

FAF seeds your project, defining the roots before AI codes a single line.

npx faf-cli auto

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/always33';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Always33 Suite - One engine, one number | FAF</title>
	<meta
		name="description"
		content="Every FAF app now scores with one engine: the same file gets the same number in the CLI, every MCP server, Python and at the edge. The FAF Map, read bottom up."
	/>
	<meta property="og:title" content="The Always33 Suite — One engine, one number" />
	<meta
		property="og:description"
		content="Every platform gathers around the same score. The FAF Map, read bottom up."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/always33" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/always33-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/always33-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Always33 Suite — every platform gathers around the same score." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Always33 Suite — One engine, one number" />
	<meta
		name="twitter:description"
		content="Every platform gathers around the same score. The FAF Map, read bottom up."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/always33-hero.png" />
	<meta name="twitter:image:alt" content="The Always33 Suite — every platform gathers around the same score." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Always33 Suite
		</div>
		<h1>The Always33 Suite</h1>
		<p class="subtitle">One engine, one number. Every platform gathers around the same score.</p>
		<div class="meta">
			<time datetime="2026-09-29">September 29, 2026</time>
			<span class="separator">•</span>
			<span class="category foundation">Foundation</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/always33-hero.png"
			alt="The Always33 Suite — every platform gathers around the same score."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Every FAF app now scores with one engine. The same
				<code>project.faf</code> gets the same number in the terminal, in Claude, in Cursor and
				VS Code, in Gemini and Grok, in Python, and at the edge. We call it the Always33 Suite.
				This post opens a series, one release at a time.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> FAF grew one tool at a time. Each tool learned to score a
					project on its own, and they did not always agree. In the worst case noted, the same file could read 64 in one
					place and 100 in another.
				</p>
				<p>
					<strong>Fix.</strong> One engine underneath all of them. It scores every file against
					the same 33 slots. Slots that are not applicable to a project are marked
					<code>slotignored</code>, and do not score.
				</p>
				<p>
					<strong>New state.</strong> One number, wherever you ask. Every FAF tool gives the same file
					the same score, and the tests check it on every release.
				</p>
			</div>
		</section>

		<section>
			<h2>It starts at the root</h2>
			<p>
				Open any repo with FAF in it. Sort the root by name. <code>project.faf</code> lands between
				<code>package.json</code> and <code>README.md</code>.
			</p>
			<div class="root-listing" aria-label="A repo root, sorted by name">
				<span>package.json</span>
				<span class="here">project.faf</span>
				<span>README.md</span>
			</div>
			<p>
				That is exactly its job. <code>package.json</code> says what the code is built with, for
				machines. <code>README.md</code> tells the story, for people. <code>project.faf</code> says
				what the project <em>is</em>, for any AI. It sits between the manifest and the prose, and
				the alphabet put it there.
			</p>
			<blockquote class="pull">
				<code>project.faf</code> is to context what <code>package.json</code> is to dependencies.
			</blockquote>
			<p>
				Timing matters. You can't easily change your code trees once they've grown. If AI starts
				coding from guesses, the guesses become branches, and the branches become the project.
				Put the facts in first, and everything grows from them.
			</p>
			<div class="insight-box">
				<h3>FAF seeds your project</h3>
				<p>It defines the roots before AI codes a single line,<br class="wide-break" /> so AI codes from rooted facts and definitions.</p>
			</div>
		</section>

		<section>
			<h2>The FAF Map, bottom up</h2>
			<p>
				Everything FAF does fits on one map, and you read it from the bottom. The ground is the
				FAF Family: three IANA-registered formats. <code>.faf</code> knows the project,
				<code>.fafm</code> remembers, <code>.fafa</code> acts. Above the ground, the map grows: into
				code trees, into memory, and into the agentic layer, where one agent clues in another:
				use FAF like this, for that.
			</p>
			<figure class="map-figure">
				<img
					src="/blog/always33-map.png"
					alt="The FAF Map, read bottom up: the FAF Family formats as the ground, the Always33 Suite serving them on every platform, then code trees, memory and the agentic layer."
					width="1440"
					height="1296"
					loading="lazy"
					decoding="async"
				/>
			</figure>
			<p>
				The Always33 Suite is the band right above the ground. It doesn't add a new format. It
				makes the ground measure the same on every platform, so everything above it can trust
				what it stands on.
			</p>
		</section>

		<section>
			<h2>A congregation</h2>
			<p>
				Not a stack of separate tools. Every platform gathers around the same score.
			</p>
			<table class="suite-table">
				<thead>
					<tr>
						<th>Product</th>
						<th>Where it serves</th>
						<th>Version</th>
					</tr>
				</thead>
				<tbody>
					<tr><td>faf-kernel</td><td>the engine under all of them (Rust)</td><td>v1.1</td></tr>
					<tr><td>faf-cli</td><td>the terminal</td><td>v8</td></tr>
					<tr><td>claude-faf-mcp</td><td>Claude</td><td>v7</td></tr>
					<tr><td>faf-mcp</td><td>Cursor, VS Code, Windsurf</td><td>v4</td></tr>
					<tr><td>gemini-faf-mcp</td><td>Gemini</td><td>v3</td></tr>
					<tr><td>grok-faf-mcp</td><td>Grok</td><td>v2</td></tr>
					<tr><td>faf-python-sdk</td><td>Python</td><td>v2</td></tr>
					<tr><td>mcpaas.live</td><td>the edge, hosted</td><td>v1.8</td></tr>
				</tbody>
			</table>
		</section>

		<section>
			<h2>Why always 33</h2>
			<p>
				Every <code>.faf</code> is scored against the same 33 slots: the project, the human
				context, the stack, and 12 enterprise slots. A project marks the slots it doesn't use as
				<code>slotignored</code>, and they drop out of the count. The score is what the file
				actually says.
			</p>
			<ul>
				<li>21 slots filled, no markers: <strong>64%</strong> (21 of 33).</li>
				<li>The same 21, plus the 12 enterprise markers: <strong>100%</strong> (21 of 21).</li>
			</ul>
			<p>
				The 12 enterprise slots stay visible even when they're marked. Most projects mark them
				unused today. What they're for is coming.
			</p>
			<p>One command writes the markers and re-scores:</p>
			<div class="terminal-block">
				<code>npx faf-cli auto</code>
			</div>
		</section>

		<section>
			<h2>The version numbers tell the story</h2>
			<p>
				Nobody planned these numbers. Each one counts how many times that product changed in a
				big way. Read them in order and you get the build history: the CLI first at v8, then
				Claude at v7, the IDEs at v4, Gemini at v3, Grok and Python at v2, the edge at v1.8.
			</p>
			<p>
				The youngest piece is <strong>faf-kernel, at v1.1</strong>. It is also the engine every
				other product now stands on. Always33 is the moment the stack that grew over time came to
				rest on one foundation.
			</p>
		</section>

		<section>
			<h2>FAF don't lie, in practice</h2>
			<p>
				One engine is only a promise until something checks it. Before the Python SDK shipped,
				its score was compared with the engine on 845 test files, then on 80 real projects, and
				matched on every one. An independent review before the PyPI release still found three
				unusual YAML cases where it didn't. They were fixed before anyone installed it.
			</p>
			<p>That is the point of the congregation. When the number matters, it has to be the same number.</p>
		</section>

		<section>
			<h2>The series</h2>
			<p>One post per release, in the order it was built:</p>
			<ul>
				<li><strong>faf-cli v8</strong>: where it started, and the number is always 33</li>
				<li><strong>claude-faf-mcp v7</strong>: the first platform</li>
				<li><strong>faf-mcp v4</strong>: every IDE</li>
				<li><strong>gemini-faf-mcp v3 and grok-faf-mcp v2</strong>: one number across frontier models</li>
				<li><strong>faf-python-sdk v2 and mcpaas.live v1.8</strong>: beyond JavaScript, and out to the edge</li>
				<li><strong>faf-kernel v1.1</strong>: the engine under everything</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ one engine, one number.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: #1a1a1a;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #333;
		margin-bottom: 1.5rem;
	}
	.breadcrumb a {
		color: #00d4d4;
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-header h1 {
		font-size: 2.6rem;
		margin: 0 0 0.5rem;
		color: #000;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #1a1a1a;
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: #333;
		margin-bottom: 2.5rem;
	}
	.separator {
		color: #333;
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff;
	}
	.category.foundation {
		background: #1d8348;
		color: #fff;
	}

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

	.post-content section {
		margin-bottom: 2.5rem;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: #000;
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.post-content a {
		color: #00d4d4;
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: #fff;
		color: #1a1a1a;
		border-left: 4px solid #00bc61; /* FAF Foundation Green */
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}
	.intro .lead + .lead {
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
	/* In Plain English is black and white; the green stays on the TL;DR */
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
		line-height: 1.9;
		padding-left: 1.25rem;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.root-listing {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		max-width: 320px;
		margin: 1.25rem 0;
		padding: 1rem 1.25rem;
		background: #1a1a1a;
		color: #e5e5e5;
		border-radius: 8px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 1rem;
	}
	.root-listing span {
		padding: 0.1rem 0.6rem;
		color: #e5e5e5;
	}
	.root-listing .here {
		background: #ff6b35;
		color: #000;
		border-radius: 4px;
		font-weight: 600;
	}

	.map-figure {
		margin: 1.5rem -1rem;
	}
	.map-figure img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
	}

	.suite-table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.25rem 0;
		font-size: 0.95rem;
		background: #fff;
		color: #1a1a1a;
		border-radius: 8px;
		overflow: hidden;
	}
	.suite-table th {
		text-align: left;
		padding: 0.75rem 1rem;
		background: #f4f1ec;
		color: #1a1a1a;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.suite-table td {
		padding: 0.7rem 1rem;
		border-top: 1px solid #eee;
	}
	.suite-table td:first-child {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-weight: 600;
	}
	.suite-table td:last-child {
		text-align: right;
		font-weight: 700;
	}

	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.25rem 0;
		overflow-x: auto;
	}
	.terminal-block code {
		background: none;
		color: #00ff88;
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
	}

	.pull {
		margin: 1.75rem 0;
		padding: 0.25rem 0 0.25rem 1.25rem;
		border-left: 4px solid #1a1a1a;
		font-size: 1.3rem;
		font-weight: 700;
		line-height: 1.5;
		color: #1a1a1a;
	}
	.insight-box {
		background: #f3f9f5;
		color: #1a1a1a;
		border: 2px solid #00bc61;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}
	.insight-box h3 {
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		font-size: 1.1rem;
	}
	.insight-box p {
		margin: 0;
		line-height: 1.7;
		text-wrap: balance;
	}

	.share-section {
		text-align: center;
		margin: 3rem 0 2rem;
	}
	.share-btn {
		display: inline-block;
		background: #000;
		color: #fff;
		padding: 0.75rem 2rem;
		border-radius: 999px;
		text-decoration: none;
		font-weight: 600;
	}
	.share-btn:hover {
		opacity: 0.85;
	}

	.footer-note {
		text-align: center;
		color: #1a1a1a;
		font-size: 0.95rem;
		border-top: 1px solid #eee;
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.wide-break {
			display: none;
		}
		.post-header h1 {
			font-size: 2rem;
		}
		.suite-table {
			font-size: 0.85rem;
		}
		.suite-table th,
		.suite-table td {
			padding: 0.5rem 0.6rem;
		}
	}
</style>
