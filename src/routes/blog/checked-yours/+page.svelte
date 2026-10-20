<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '#lib/shareIntent.js';

	let mounted = false;
	onMount(() => { mounted = true; });

	const shareText = `MCP Server Cards went Final on Oct 6. We counted every remote server in the MCP Registry on Oct 12, and again on Oct 20.

Hosts with a valid card: 1.9% → 2.7%.

Registry hosts: +18%.
Hosts with a valid card: +66%.
Nearly four times faster.

We checked twice. Checked yours?`;
	const shareUrl = 'https://faf.one/blog/checked-yours';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Checked Yours? - MCP Server Cards, Counted Twice | FAF</title>
	<meta name="description" content="We counted every remote MCP server in the registry on October 12 and again on October 20. Hosts with a valid Server Card rose from 1.9% to 2.7%, nearly four times faster than the registry grew." />
	<meta property="og:title" content="Checked Yours? - MCP Server Cards, Counted Twice" />
	<meta property="og:description" content="Hosts with a valid MCP Server Card: 1.9% to 2.7% in eight days. Two read-only counts of the MCP Registry, and how to make yours pass." />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content="2026-10-13" />
	<meta property="article:modified_time" content="2026-10-20" />
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
		<p class="subtitle">MCP Server Cards, counted twice</p>
		<div class="meta">
			<time datetime="2026-10-13">Published October 13, 2026</time>
			<span class="separator">•</span>
			<time datetime="2026-10-20">Updated October 20, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/checked-yours-hero.png" alt="Checked Yours? Hosts with a valid MCP Server Card: 1.9% to 2.7% in eight days" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> MCP Server Cards went Final on October 6. We counted every remote
				MCP server in the registry on October 12, and again eight days later with the same method.
				The share of hosts with a valid card rose from <strong>1.9% to 2.7%</strong>. The registry
				added 18% more hosts in eight days. Hosts with a valid card? 66% more. Nearly four times
				faster. We checked twice. Most cards still leave browsers out, but the number that don't
				nearly doubled.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>What a Server Card is.</strong> A small public file that tells an AI app who an
					MCP server is and how to connect, before it connects. Think of it as the server's
					business card, pinned to the door.
				</p>
				<p>
					<strong>What two counts found.</strong> Still very few servers have one, but more each
					week. Of the cards that exist, most are missing something browsers need to read them.
				</p>
				<p>
					<strong>What you can do.</strong> Paste your server's address into
					<a href="https://servercard.wolfejam.dev">Server Card Check</a>. It tells you, rule by
					rule, what passes and what to fix.
				</p>
			</div>
			<p><em>The facts follow below.</em></p>
		</section>

		<section>
			<h2>The count, twice</h2>
			<p>
				<a href="https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127">SEP-2127</a>
				merged as Final on October 6. It gives every MCP server a card: a JSON document with the
				server's name, version, description and connection details. Clients find it at
				<code>&lt;server-url&gt;/server-card</code>, or through an AI Catalog at
				<code>/.well-known/ai-catalog.json</code>.
			</p>
			<p>
				We read the whole MCP Registry and kept the latest version of every server with a remote
				endpoint. Then we checked each address the way a client would, read-only: GET and OPTIONS
				requests, nothing that changes state. Twice, with the same scripts.
			</p>
			<div class="table-wrap">
				<table class="rot-table">
					<thead>
						<tr><th>What we counted</th><th>Oct 12</th><th>Oct 20</th></tr>
					</thead>
					<tbody>
						<tr><td>Registry entries read</td><td>145,157</td><td>162,532</td></tr>
						<tr><td>Endpoints checked</td><td>26,105</td><td>29,838</td></tr>
						<tr><td>Something answered at a card location</td><td>3,609</td><td>4,184</td></tr>
						<tr><td>…a web page, not a card</td><td>637</td><td>733</td></tr>
						<tr><td>Schema-valid cards</td><td>2,194 (8.4%)</td><td>2,539 (8.5%)</td></tr>
						<tr class="hot"><td>Valid, by distinct host</td><td>352 of 18,268 (1.9%)</td><td>586 of 21,526 (2.7%)</td></tr>
						<tr class="hot"><td>Valid, by registry namespace</td><td>344 of 15,926 (2.2%)</td><td>528 of 18,856 (2.8%)</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				<strong>Entries are not servers.</strong> 8.5% looks healthy until you see where it comes
				from. One gateway publishes a card for each of its registry entries: 1,791 on October 12,
				1,872 now. Its cards are real, but they are one deployment. Count by host, by publisher, or
				leave that gateway out, and the answer lands in the same place: under 3%.
			</p>
			<p>
				<strong>What moved.</strong> In eight days the registry added 12% more entries and 18% more
				hosts. Hosts with a valid card went from 352 to 586, up 66%. 246 hosts gained one, 197 of
				them on servers that weren't in the registry a week earlier. 12 lost theirs. Leaving the
				large gateway out, valid cards went from 403 to 667.
			</p>
		</section>

		<section>
			<h2>Valid is not the same as working</h2>
			<p>A card can pass the schema and still let its users down.</p>
			<ul>
				<li>
					<strong>Web pages where the card should be.</strong> 733 endpoints answer the card's
					address with <code>200 OK</code> and an HTML page, usually a catch-all route. A client
					asked for JSON and got a website. 37 of last week's are gone; 133 new ones appeared.
				</li>
				<li>
					<strong>Browsers left out.</strong> The spec says hosted cards MUST send CORS headers
					and lists four. By the method we used on October 12, the number of JSON cards sending all
					four rose from <strong>179 to 324</strong> (6.0% to 9.4%). We checked that the yardstick
					hadn't moved: both versions of the checker, run on the same 200 endpoints in the same
					minute, agreed on every card. Under the stricter rule the checker uses now, the figure is
					298.
				</li>
				<li>
					<strong>Repeat visits.</strong> 553 cards answer a repeat request with
					<code>304 Not Modified</code>, up from 433. The rest send the whole card every time.
				</li>
			</ul>
			<p>
				We checked ours too, on October 12. Our card at <code>context.faf.one</code> passed the
				schema and failed two CORS rules. It's fixed, and the fix is the worked example below.
			</p>
		</section>

		<section>
			<h2>How to make yours pass</h2>
			<p>
				The most common failures on October 20, across the 1,579 JSON cards outside the large
				gateway:
			</p>
			<div class="table-wrap">
				<table class="rot-table">
					<thead>
						<tr><th>Failure</th><th>Cards</th><th>Fix</th></tr>
					</thead>
					<tbody>
						<tr><td><code>ETag</code> not exposed (MUST)</td><td>1,174</td><td>Send <code>Access-Control-Expose-Headers: ETag</code> on the GET</td></tr>
						<tr><td>Preflight doesn't allow <code>If-None-Match</code> (MUST)</td><td>1,172</td><td>Answer <code>OPTIONS</code> with <code>Access-Control-Allow-Headers: Content-Type, If-None-Match</code></td></tr>
						<tr><td>No <code>ETag</code>, no <code>304</code> (SHOULD)</td><td>1,005</td><td>Send an <code>ETag</code>; answer a matching <code>If-None-Match</code> with <code>304</code></td></tr>
						<tr><td>Not schema-valid (MUST)</td><td>912</td><td>Run the checker; it names the field</td></tr>
						<tr><td>Wrong content type (SHOULD)</td><td>888</td><td>Serve it as <code>application/mcp-server-card+json</code></td></tr>
						<tr><td><code>$schema</code> missing or wrong (MUST)</td><td>791</td><td>Use the v1 Server Card schema URL exactly</td></tr>
						<tr><td><code>description</code> too long or empty (MUST)</td><td>722</td><td>1 to 100 characters</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				And the web pages: serve the JSON at <code>/server-card</code>, or return 404 there. Not a
				200 with your homepage.
			</p>
			<p>
				<strong>A worked example: ours.</strong> Our card carries a <code>generated_at</code> time
				that changes on every request, by design, so a strong ETag would never repeat. The card now
				sends a <em>weak</em> ETag, hashed without that one field. Weak validators mean "the same
				meaning", and that's what a client needs to get a <code>304</code>. One field left out of a
				hash; two new tests.
			</p>
			<div class="terminal-block">
				<code>npx mcp-server-card-check https://your-server.example/mcp</code>
			</div>
			<p>
				<a href="https://github.com/Wolfe-Jam/mcp-server-card-check">Server Card Check</a> is the
				census's checker, made into a tool: MIT-licensed, vendor-neutral, 39 checks, each marked
				MUST or SHOULD and linked to the spec section it comes from. Read-only by default. It runs
				in the browser, from the command line, or as a library, and exits 1 on any MUST failure, so
				it fits in CI.
			</p>
		</section>

		<section>
			<h2>A shared test</h2>
			<p>
				MCP's official conformance suite doesn't test Server Cards yet. There's an open proposal
				for that scenario
				(<a href="https://github.com/modelcontextprotocol/conformance/issues/550">conformance #550</a>),
				and the offer to help write it stands. A shared test is better than anyone's private one,
				including ours.
			</p>
		</section>

		<section>
			<h2>Method</h2>
			<p>
				Registry read at 12:02 UTC on October 20; checks ran until 15:14 UTC, with no errors. 304
				addresses were templates (such as <code>&#123;tenant&#125;</code>) and were skipped. The
				checker was v0.4.1. Its rules changed between the two counts (it was reviewed independently
				twice in between), so every figure compared here was counted by the October 12 method, and
				that method was re-checked against both versions. Both summaries are in the
				<a href="https://github.com/Wolfe-Jam/mcp-server-card-check/blob/main/docs/reference.md">repository</a>,
				with the scripts, so every number on this page can be reproduced.
			</p>
			<p>We'll count again while it's moving.</p>
		</section>

		<section>
			<h2>Checked yours?</h2>
			<p>
				If you run a remote MCP server, paste its address into
				<a href="https://servercard.wolfejam.dev">the checker</a>. No card yet? The report tells
				you what a valid one needs. Have one? It takes ten seconds to see if browsers can read it.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				<strong>What changed on October 20.</strong> This post first appeared on October 13 with the
				October 12 count. It now carries both counts. No October 12 figure was corrected.
			</p>
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
		color: #fff; /* literal-ok: Story pill text, paired with its category bg */
	}
	.category.story {
		background: #8b5a2b; /* literal-ok: Story category colour */
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
		border-left: 4px solid #8b5a2b; /* literal-ok: Story category accent border */
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

	.post-content ul {
		line-height: 1.9;
		padding-left: 1.25rem;
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
		color: var(--faf-black);
	}
	.rot-table td {
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--faf-border);
	}
	.rot-table .hot {
		color: var(--faf-black);
		font-weight: 700;
	}

	.terminal-block {
		background: var(--faf-solid-bg);
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
	.post-content a.share-btn {
		display: inline-block;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
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
