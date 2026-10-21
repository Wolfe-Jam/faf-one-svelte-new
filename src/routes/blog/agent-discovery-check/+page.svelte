<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const storeUrl =
		'https://chromewebstore.google.com/detail/agent-discovery-check/lnecebepmpjpilldfmndnaofbfjkjlkm';

	const shareText = `🏁 Just shipped: Agent Discovery Check v2.0.0

Is this site ready for AI agents? One click tells you.

AI Catalog. MCP Server Card. llms.txt. WebMCP tools.
Each verdict linked to the spec section it comes from.

Reads only when you click · keeps nothing · MIT

Free on the Chrome Web Store.

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/agent-discovery-check';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Agent Discovery Check - Chrome Extension v2.0.0 | FAF</title>
	<meta
		name="description"
		content="One click shows whether the site or repo you're on is ready for AI agents: AI Catalog, MCP Server Card, llms.txt and WebMCP tools, each verdict linked to its spec section. Free on the Chrome Web Store."
	/>
	<meta property="og:title" content="Agent Discovery Check - Is this site ready for AI agents?" />
	<meta
		property="og:description"
		content="One click checks the site you're on against the specs: AI Catalog, MCP Server Card, llms.txt, WebMCP tools. Free on the Chrome Web Store."
	/>
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content="2026-10-21" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/agent-discovery-check-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/agent-discovery-check-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Agent Discovery Check
		</div>
		<h1>Agent Discovery Check</h1>
		<p class="subtitle">Is this site ready for AI agents? One click tells you.</p>
		<div class="meta">
			<time datetime="2026-10-21">October 21, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
			<span class="separator">•</span>
			<span class="version-tag">Chrome extension v2.0.0</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/agent-discovery-check-hero.png"
			alt="Agent Discovery Check on faf.one: AI Catalog, MCP Server Card, llms.txt and WebMCP tools, all published"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Agent Discovery Check is live on the Chrome Web Store. One click
				shows whether the site or repo you're on is ready for AI agents: its AI Catalog, MCP Server
				Card, llms.txt and WebMCP tools, each verdict linked to the spec section it comes from. It
				reads only when you click, and keeps nothing. Free and MIT-licensed.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>The old way.</strong> Sites now publish small files for AI agents: a catalog of
					what they offer, a card for their MCP server, a summary for language models. To check
					them you open each address by hand, then read the spec to see if what's there is right.
				</p>
				<p>
					<strong>The fix.</strong> Click the smiley in your toolbar. It finds those files on the
					site you're on and checks them against the specs, rule by rule.
				</p>
				<p>
					<strong>What you get.</strong> A short list: what's published, what isn't, and what's
					off. Each rule says MUST or SHOULD and links to the line of the spec it comes from.
				</p>
			</div>
		</section>

		<section>
			<h2>See it run</h2>
			<div class="video-frame">
				<video
					src="/blog/agent-discovery-check.mp4"
					poster="/blog/agent-discovery-check-poster.jpg"
					controls
					muted
					playsinline
					preload="metadata"
					aria-label="32-second film: Agent Discovery Check checking faf.one, mcpaas.live and example.com"
				></video>
			</div>
		</section>

		<section>
			<h2>What it checks</h2>
			<div class="table-wrap">
				<table class="rot-table">
					<thead>
						<tr><th>On</th><th>Surface</th><th>How</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Any site</td>
							<td><strong>AI Catalog</strong> (<code>/.well-known/ai-catalog.json</code>)</td>
							<td>Published or not, plus its spec checks</td>
						</tr>
						<tr>
							<td>Any site</td>
							<td><strong>MCP Server Card</strong>, listed in the catalog</td>
							<td>
								The spec checks from
								<a href="https://github.com/Wolfe-Jam/mcp-server-card-check">mcp-server-card-check</a>
								(SEP-2127)
							</td>
						</tr>
						<tr>
							<td>Any site</td>
							<td><strong>llms.txt</strong></td>
							<td>Published or not, and its size; a soft 404 doesn't count</td>
						</tr>
						<tr>
							<td>Any site</td>
							<td><strong>WebMCP tools</strong></td>
							<td>
								Each tool on the page, against the
								<a href="https://webmachinelearning.github.io/webmcp/">WebMCP spec</a>: name,
								description, input schema; annotations as a note
							</td>
						</tr>
						<tr>
							<td>GitHub repo</td>
							<td><strong>AGENTS.md</strong>, <strong>project.faf</strong></td>
							<td>Present or not</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				<strong>Missing isn't failing.</strong> A surface the site doesn't publish shows as grey
				"Not published", not as an error.
			</p>
		</section>

		<section>
			<h2>How it works</h2>
			<ol>
				<li>Open the site or GitHub repo you want to check.</li>
				<li>Click the smiley in your toolbar (pin it from the puzzle piece).</li>
				<li>Read the verdicts. Each has a <strong>Spec ↗</strong> link to the section it comes from.</li>
			</ol>
			<p>
				Try it on <a href="https://faf.one/webmcp">faf.one/webmcp</a>, which publishes all four, or
				on <a href="https://github.com/Wolfe-Jam/faf-cli">github.com/Wolfe-Jam/faf-cli</a>, which
				has both AGENTS.md and project.faf.
			</p>
		</section>

		<section>
			<h2>What it doesn't do</h2>
			<ul>
				<li>
					<strong>Permissions:</strong> <code>activeTab</code> and <code>scripting</code> only. It
					runs when you click its icon, on that tab. No host permissions, no script on every page.
				</li>
				<li>
					<strong>Read-only:</strong> GET, HEAD and OPTIONS requests only, to the site you're on
					and, for a Server Card listed on another host, to that host. At most 30 requests per
					click.
				</li>
				<li><strong>Keeps nothing:</strong> no storage, no telemetry, no account.</li>
			</ul>
			<p>
				The full policy is on our <a href="/privacy">privacy page</a>, and the code is on
				<a href="https://github.com/Wolfe-Jam/faf-chrome-extension">GitHub</a>, MIT-licensed.
			</p>
		</section>

		<section class="install">
			<h2>Get it</h2>
			<a href={storeUrl} target="_blank" rel="noopener" class="store-link">
				<img src="/chrome-web-store-badge.png" alt="Available in the Chrome Web Store" />
			</a>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>
				A verdict that looks wrong, a spec it should check, a site that trips it up: tell us, and
				it guides the next version.
			</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-chrome-extension/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Each verdict, linked to its spec. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: var(--faf-black);
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 1.5rem;
	}
	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-header h1 {
		font-size: 2.6rem;
		margin: 0 0 0.5rem;
		color: var(--faf-black);
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 2.5rem;
	}
	.separator {
		color: var(--faf-dark);
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff; /* literal-ok: Launch pill text, paired with its category bg */
	}
	.category.launch {
		background: var(--faf-orange);
	}
	.version-tag {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.85rem;
		color: var(--faf-black);
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

	/* The site-wide section rule adds 96px top and bottom; posts need none. */
	.post-content section {
		padding: 0;
		margin-bottom: 2.5rem;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.post-content a {
		color: var(--faf-cyan-text);
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-left: 4px solid var(--faf-orange);
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
		color: var(--faf-black);
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.video-frame {
		background: #0a0a0a; /* literal-ok: media frame behind the film */
		border-radius: 12px;
		overflow: hidden;
		max-width: 540px;
		margin: 0 auto;
	}
	.video-frame video {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
	}

	.post-content ul,
	.post-content ol {
		line-height: 1.9;
		padding-left: 1.25rem;
		margin: 0 0 1rem;
	}

	.post-content code {
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.table-wrap {
		overflow-x: auto;
	}

	.rot-table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.25rem 0;
		font-size: 0.95rem;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-radius: 8px;
		overflow: hidden;
	}
	.rot-table th {
		text-align: left;
		padding: 0.75rem 1rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.rot-table td {
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--faf-border);
		vertical-align: top;
	}

	.install {
		text-align: center;
	}
	.store-link img {
		height: 58px;
		width: auto;
	}

	.post-content section.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-radius: 10px;
		border-left: 4px solid var(--faf-orange);
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
	.post-content a.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border: 2px solid var(--faf-solid-bg);
	}
	.post-content a.feedback-btn:hover {
		opacity: 0.85;
	}
	.post-content a.feedback-btn.secondary {
		background: transparent;
		color: var(--faf-black);
		border-color: var(--faf-black);
	}

	.post-content section.footer-note {
		text-align: center;
		color: var(--faf-dark);
		font-size: 0.95rem;
		border-top: 1px solid var(--faf-border);
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
