<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '#lib/shareIntent.js';

	let mounted = false;
	onMount(() => { mounted = true; });

	const shareText = `MCP Server Cards went Final on Oct 6.

Six days later we checked every remote endpoint in the MCP Registry: 26,105.

About 2% publish a valid Server Card.
Only 179 cards send all four CORS headers the spec lists.

Then we checked our own. It failed two.

Checked yours?`;
	const shareUrl = 'https://faf.one/blog/checked-yours';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Checked Yours? - MCP Server Cards, Counted | FAF</title>
	<meta name="description" content="SEP-2127 made MCP Server Cards final. We checked all 26,105 remote endpoints in the MCP Registry: about 2% publish a valid card. Then we checked our own, and it failed two CORS rules. So we built a checker." />
	<meta property="og:title" content="Checked Yours? - MCP Server Cards, Counted" />
	<meta property="og:description" content="About 2% of MCP servers publish a valid Server Card. Ours failed two CORS rules. A census, a fix, and a checker anyone can run." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/checked-yours-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/checked-yours-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Checked Yours?
		</div>
		<h1>Checked Yours?</h1>
		<p class="subtitle">MCP Server Cards went final. We counted who has one, then checked our own.</p>
		<div class="meta">
			<time datetime="2026-10-13">October 13, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/checked-yours-hero.png" alt="Checked Yours? About 2% of MCP servers publish a valid Server Card" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> SEP-2127 made MCP Server Cards final on October 6. Six days later
				we checked every remote endpoint in the MCP Registry, all 26,105 of them. About
				<strong>2%</strong> publish a valid Server Card. Then we checked our own card, and it
				failed two CORS rules. We fixed it the same day and turned the checks into a tool
				anyone can run.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>What a Server Card is.</strong> A small public file that tells an AI app who an
					MCP server is and how to connect, before it connects. Think of it as the server's
					business card, pinned to the door.
				</p>
				<p>
					<strong>What we found.</strong> Very few servers have one yet. Of the cards that exist,
					most are missing something browsers need to read them.
				</p>
				<p>
					<strong>What you can do.</strong> Paste your server's address into
					<a href="https://server-card-check.wolfejam2020.workers.dev">Server Card Check</a>. It
					tells you, rule by rule, what passes and what to fix.
				</p>
			</div>
		</section>

		<section>
			<h2>A new standard, six days old</h2>
			<p>
				<a href="https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127">SEP-2127</a>
				merged as Final on October 6. It gives every MCP server a card: a JSON document with the
				server's name, version, description and connection details. Clients find it at
				<code>&lt;server-url&gt;/server-card</code>, or through an AI Catalog at
				<code>/.well-known/ai-catalog.json</code>.
			</p>
			<p>
				We shipped a card within a day of Final. Then the obvious question: how many servers have
				one? Nobody was counting in public, so we did.
			</p>
		</section>

		<section>
			<h2>The census</h2>
			<p>
				On October 12 we read the whole MCP Registry (145,157 entries across all versions) and
				kept the latest version of every server with a remote endpoint. That gave
				<strong>26,105</strong> addresses. We checked each one the way a client would, read-only:
				GET and OPTIONS requests, nothing that changes state.
			</p>
			<table class="rot-table">
				<thead>
					<tr><th>What we counted</th><th>Result</th></tr>
				</thead>
				<tbody>
					<tr><td>Endpoints checked</td><td>26,105</td></tr>
					<tr><td>Something answered at a card location</td><td>3,609</td></tr>
					<tr><td>…a web page, not a card</td><td>637</td></tr>
					<tr><td>Schema-valid cards</td><td>2,194 (8.4%)</td></tr>
					<tr class="hot"><td>Valid, by distinct host</td><td>352 of 18,268 (1.9%)</td></tr>
					<tr class="hot"><td>Valid, by registry namespace</td><td>344 of 15,926 (2.2%)</td></tr>
				</tbody>
			</table>
			<p>
				8.4% looks healthy until you see where it comes from. One gateway publishes a card for
				each of its 1,791 registry entries. It was an early implementer of the draft, and its
				cards are real, but 1,791 entries on one host are one deployment. Take it out, or count by
				host, or by publisher, and the answer is the same: <strong>about 2%</strong>.
			</p>
			<p>
				That's the first lesson of counting a registry: entries are not servers. The honest
				figure needs more than one denominator.
			</p>
		</section>

		<section>
			<h2>Valid is not the same as working</h2>
			<p>
				A card can pass the schema and still let its users down. Three patterns stood out:
			</p>
			<ul>
				<li>
					<strong>Web pages where the card should be.</strong> 637 endpoints answer the card's
					address with <code>200 OK</code> and an HTML page, usually a catch-all route. A client
					asked for JSON and got a website.
				</li>
				<li>
					<strong>Browsers left out.</strong> The spec says hosted cards MUST send CORS headers
					and lists four. 2,731 of 2,972 JSON cards send the first one. Only
					<strong>179</strong> send all four. Without them, a browser-based client can't
					revalidate the card or read its ETag. Only 433 answer a repeat request with
					<code>304 Not Modified</code>.
				</li>
				<li>
					<strong>Plausible but wrong.</strong> The v1 schema accepts any string as a protocol
					version, so cards can list MCP versions that never existed. It also doesn't connect a
					card's <code>name</code> to the server's registry name, and some don't match.
				</li>
			</ul>
		</section>

		<section>
			<h2>Then we checked ours</h2>
			<p>
				Our own card at <code>context.faf.one</code> had shipped within a day of Final. It passed
				the schema. When we pointed the new checks at it, it failed two CORS rules: it didn't allow
				the <code>If-None-Match</code> header or expose <code>ETag</code>. And it had no ETag to
				expose.
			</p>
			<p>
				Our card isn't in the registry, so it wasn't in the census. If it had been, it would have
				been one of the 2,793 cards missing at least one of the four headers.
			</p>
			<p>
				We fixed it the same day. One wrinkle is worth sharing: our card carries a
				<code>generated_at</code> time that changes on every request, by design. A strong ETag would
				never repeat. So the card now sends a <em>weak</em> ETag, hashed without that one field.
				Weak validators mean "the same meaning", and that's what a client needs to get a
				<code>304</code>. Two new tests, deployed the same day. The checker now reports
				<strong>17 passed, 0 failed</strong> for it.
			</p>
			<p>
				If a card written by people who'd just read the spec closely missed two rules, the 2%
				figure isn't about effort. The rules are new, and nothing was checking them.
			</p>
		</section>

		<section>
			<h2>So we built the check</h2>
			<p>
				<a href="https://github.com/Wolfe-Jam/mcp-server-card-check">Server Card Check</a> is the
				census's checker, made into a tool. It's MIT-licensed and vendor-neutral.
			</p>
			<ul>
				<li><strong>31 checks</strong>, each marked MUST or SHOULD and linked to the spec section it comes from</li>
				<li><strong>Read-only by default.</strong> GET and OPTIONS only; the transport checks run only when you ask</li>
				<li><strong>Three ways to run it:</strong> in the browser, from the command line, or as a library</li>
				<li><strong>CI-ready.</strong> It exits 1 on any MUST failure</li>
			</ul>
			<div class="demo-video">
				<video src="/blog/checked-yours-demo.mp4" autoplay muted loop playsinline aria-label="Server Card Check running against context.faf.one: 17 passed, 0 failed"></video>
			</div>
			<div class="terminal-block">
				<code>npx mcp-server-card-check https://your-server.example/mcp</code>
			</div>
			<p>
				The census scripts are in the same repository, and the
				<a href="https://github.com/Wolfe-Jam/mcp-server-card-check/blob/main/docs/reference.md">method</a>
				reproduces every number on this page. We'll re-run it while adoption is moving and
				publish what changes.
			</p>
			<p>
				MCP's official conformance suite doesn't test Server Cards yet. We've offered to help
				write that scenario in the MCP conformance working group. A shared test is better than
				anyone's private one, including ours.
			</p>
		</section>

		<section>
			<h2>Checked yours?</h2>
			<p>
				If you run a remote MCP server, paste its address into
				<a href="https://server-card-check.wolfejam2020.workers.dev">the checker</a>. No card yet?
				The report tells you what a valid one needs. Have one? It takes ten seconds to see if
				browsers can read it.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ even the checks are checked.</p>
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
	}
	.terminal-block code {
		background: none;
		color: #00ff88;
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
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
	.demo-video {
		margin: 1.5rem 0;
		border-radius: 12px;
		overflow: hidden;
		background: #1e1f29;
	}
	.demo-video video {
		width: 100%;
		height: auto;
		display: block;
	}
</style>
