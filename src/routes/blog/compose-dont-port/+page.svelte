<!-- pubblog Story — spine copied from one-block (GOLD). Teaching, not a release. -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `Compose, don't port.

The CLI authors. The IDE door composes.
Authoring is more powerful than writing. That's what we call it.

Two copies of the same author is how a project starts lying about itself.

#AAIF #MCP

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/compose-dont-port';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Compose, don't port — what faf-cli and .FAF Context mean | FAF</title>
	<meta
		name="description"
		content="faf-cli opened the authoring. .FAF Context stopped carrying copies. One score, the same files, and the claims on the box are true."
	/>
	<meta property="og:title" content="Compose, don't port — what faf-cli and .FAF Context mean" />
	<meta
		property="og:description"
		content="The CLI authors. The IDE door composes. Authoring is more powerful than writing."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/compose-dont-port" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/compose-dont-port-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/compose-dont-port-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Compose, don't port — FAF-CLI authors AGENTS.md and CLAUDE.md; GEMINI.md and .cursorrules as wings"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Compose, don't port — what faf-cli and .FAF Context mean" />
	<meta
		name="twitter:description"
		content="The CLI authors. The IDE door composes. Authoring is more powerful than writing."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/compose-dont-port-hero.png" />
	<meta
		name="twitter:image:alt"
		content="Compose, don't port — FAF-CLI authors AGENTS.md and CLAUDE.md; GEMINI.md and .cursorrules as wings"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Compose, don't port
		</div>
		<h1>Compose, don't port</h1>
		<p class="subtitle">What the new faf-cli and .FAF Context mean.</p>
		<div class="meta">
			<time datetime="2026-09-10">September 10, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/compose-dont-port-hero.png"
			alt="Compose, don't port — FAF-CLI at the bottom authors AGENTS.md and CLAUDE.md; GEMINI.md and .cursorrules as wings"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli opened the authoring. .FAF Context
				(<code>faf-mcp</code>) stopped carrying copies. One score, the same files, and the claims
				on the box are true.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> You had a CLI that authored <code>project.faf</code>, scored
					it, and exported <code>AGENTS.md</code> / <code>GEMINI.md</code> /
					<code>.cursorrules</code> / <code>CLAUDE.md</code>. And you had an IDE MCP server that
					did the same jobs with its own copies. The copies drifted. The README described a
					hosted door this package does not run. Two authors. Two numbers. A project lying about
					itself.
				</p>
				<p>
					<strong>Fix.</strong> The CLI made that authoring public. The MCP server composes it
					in-process. Nothing ported. Nothing shelled out to whatever <code>faf</code> happens to
					be on PATH.
				</p>
				<p>
					<strong>New state.</strong> Terminal or editor, same bytes, same number. The CLI is the
					author. .FAF Context is the door into Cursor, VS Code, Windsurf, Cline — not a second
					product.
				</p>
			</div>
		</section>

		<section>
			<h2>Two packages. One author.</h2>
			<p>
				<strong>faf-cli</strong> is the author. It scores <code>project.faf</code>. It authors the
				instruction files. That is the tool.
			</p>
			<p>Authoring is more powerful than writing. That's what we call it.</p>
			<p>
				<strong>.FAF Context</strong> is the door. <code>faf-mcp</code> is how that same context
				shows up in the editor over MCP. Local stdio. The host already has the slot. We fill it.
			</p>
			<p>The adapter is a door. It does not get a second story.</p>
		</section>

		<section>
			<h2>What we told ourselves</h2>
			<p>
				A ported renderer would stay in sync with <code>faf export</code>. A local score would
				match the CLI. The docs would describe what the binary actually does.
			</p>
			<p>That sentence is the product. It was not what left the function.</p>
		</section>

		<section>
			<h2>What was on disk</h2>
			<p>Same project. Two authors. Two truths.</p>
			<table class="rot-table">
				<thead>
					<tr>
						<th></th>
						<th>CLI</th>
						<th>MCP, before 3.0</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Score</td>
						<td>the CLI scorer, on the bytes on disk</td>
						<td class="hot">a local heuristic — 29 points off, on the same file</td>
					</tr>
					<tr>
						<td>AGENTS.md · GEMINI.md · .cursorrules</td>
						<td><code>faf export</code></td>
						<td class="hot">a ported copy of the authoring</td>
					</tr>
					<tr>
						<td>What the box said</td>
						<td>local stdio</td>
						<td class="hot">a hosted endpoint this package does not run</td>
					</tr>
				</tbody>
			</table>
			<div class="insight-box">
				<h3>The rule</h3>
				<p>
					If the terminal and the IDE can disagree about the same project, the project is lying.
					FAF don't lie has to hold on disk, not in the README.
				</p>
			</div>
		</section>

		<section>
			<h2>So the CLI opened, and the door composed</h2>
			<p>
				Not a better copy. The same authoring the CLI already uses — public, so a consumer can
				call it instead of porting it.
			</p>
			<ul>
				<li>
					<strong>One score.</strong> Whatever path you take, the number is the CLI's number on
					the file on disk.
				</li>
				<li>
					<strong>Same files.</strong> The instruction files the editor authors are the files
					<code>faf export</code> authors.
				</li>
				<li>
					<strong>One injector.</strong> Re-export is one block, every run. A stacked file is
					repaired on the next export.
				</li>
			</ul>
			<p>
				That is the whole lesson. The rest is versions.
			</p>
		</section>

		<section>
			<h2>WITH, not MORE</h2>
			<p>
				This is not a fifth format. The format did not grow. Cursor did not get replaced. VS Code
				did not get replaced. Complementary — we fill the slot the host already has.
			</p>
			<p>
				.FAF Context runs locally over stdio. There is no hosted endpoint on this package. A door
				that pretends to be a product is how the copy starts lying again.
			</p>
		</section>

		<section>
			<h2>The two ships</h2>
			<p>The release notes are the versions. This is why they exist.</p>
			<ul>
				<li>
					<a href="/blog/open-renderers-edition">The Open Renderers Edition</a> — faf-cli 7.12.
					Consumers compose instead of port.
				</li>
				<li>
					<a href="/blog/faf-mcp-compose">The Compose Edition</a> — faf-mcp 3.0, .FAF Context.
					The door composes that authoring in-process.
				</li>
			</ul>
			<div class="terminal-block">
				<code>faf export --agents</code>
				<code>bunx faf-mcp</code>
			</div>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Compose, don't port.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
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
		font-weight: 600;
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
	.category.story {
		background: #8b5a2b;
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
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: #fff;
		border-left: 4px solid #8b5a2b;
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}
	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8b5a2b;
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
		margin: 0 0 1rem;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.rot-table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.25rem 0;
		font-size: 0.95rem;
		background: #fff;
		border-radius: 8px;
		overflow: hidden;
	}
	.rot-table th {
		text-align: left;
		padding: 0.75rem 1rem;
		background: #f4f1ec;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #1a1a1a;
	}
	.rot-table td {
		padding: 0.75rem 1rem;
		border-top: 1px solid #eee;
		vertical-align: top;
	}
	.rot-table .hot {
		color: #c0392b;
	}

	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.25rem 0;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: none;
		color: #00ff88;
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
		white-space: pre;
	}

	.insight-box {
		background: #fdf8f3;
		border: 2px solid #8b5a2b;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}
	.insight-box h3 {
		margin: 0 0 0.5rem;
		color: #8b5a2b;
		font-size: 1.1rem;
	}
	.insight-box p {
		margin: 0;
		line-height: 1.7;
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
		text-align: center;
		color: #1a1a1a;
		font-size: 0.95rem;
		border-top: 1px solid #eee;
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
		.rot-table {
			font-size: 0.85rem;
		}
		.rot-table th,
		.rot-table td {
			padding: 0.5rem 0.6rem;
		}
	}
</style>
