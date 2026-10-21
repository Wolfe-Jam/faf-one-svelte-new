<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '#lib/shareIntent.js';

	let mounted = false;
	onMount(() => { mounted = true; });

	const shareText = `How to Shuffle the Pack: run the MCP Server Card census yourself.

3 scripts. 166 lines. Read-only.
Node 22, no keys, about three and a half hours.

Same rows, five ways to count:
8.51% by endpoint. Under 3% the other four ways.

Checked yours?`;
	const shareUrl = 'https://faf.one/blog/shuffle-the-pack';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });

	const setup = `git clone https://github.com/Wolfe-Jam/mcp-server-card-check
cd mcp-server-card-check
npm ci && npm run build
export CENSUS_DIR=./census-data && mkdir -p "$CENSUS_DIR"`;
	const step1 = 'node scripts/census/registry.mjs';
	const step2 = 'CONCURRENCY=16 node scripts/census/probe.mjs';
	const guard = `const readOnlyFetch = (url, init = {}) => {
  const method = (init.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "OPTIONS") return Promise.reject(new Error(\`census is read-only: \${method} refused\`));
  return fetch(url, { ...init, redirect: "follow", headers: { ...(init.headers ?? {}), "User-Agent": UA } });
};`;
	const step3 = 'node scripts/census/summarize.mjs';
	const step4 = 'CENSUS_DIR=./census-data A=0.1.1 B=0.4.1 SAMPLE=200 npm run census:diff';
	const template = 'https://{tenant}.example.com/mcp';
</script>

<svelte:head>
	<title>How to Shuffle the Pack - MCP Server Card census reproduction guidance | FAF</title>
	<meta name="description" content="The numbers in Checked Yours? come from three small scripts, 166 lines in all, that only ever read. How to run the MCP Server Card census yourself, step by step, and the four choices that move the answer from 8.5% to under 3%." />
	<meta property="og:title" content="How to Shuffle the Pack - MCP Server Card census reproduction guidance" />
	<meta property="og:description" content="Three scripts, 166 lines, read-only. Run the MCP Server Card census yourself, and see which choices move the answer." />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content="2026-10-21" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/shuffle-the-pack-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/shuffle-the-pack-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / How to Shuffle the Pack
		</div>
		<h1>How to Shuffle the Pack</h1>
		<p class="subtitle">MCP Server Card census reproduction guidance</p>
		<div class="meta">
			<time datetime="2026-10-21">October 21, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/shuffle-the-pack-hero.png" alt="How to Shuffle the Pack: three scripts, 166 lines, read-only" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The numbers in <a href="/blog/checked-yours">"Checked Yours?"</a>
				come from three small scripts, 166 lines in all, that only ever read. You can run them
				yourself in an afternoon. This is how, step by step, and the four choices that move the
				answer from 8.5% to under 3%.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>What the census is.</strong> A count of how many MCP servers in the public
					registry publish a Server Card, the small file that tells an AI app who a server is and
					how to connect.
				</p>
				<p>
					<strong>What this post does.</strong> Walks through the count in three steps: read the
					registry, check each server, add it up. Then a fourth, to compare two runs.
				</p>
				<p>
					<strong>Why you'd run it.</strong> To check our numbers, to count again next week, or to
					point the same scripts at your own list of servers.
				</p>
			</div>
			<p><em>The steps follow below.</em></p>
		</section>

		<section>
			<h2>What you need</h2>
			<ul>
				<li>Node.js 22 or later, and git.</li>
				<li>
					About three and a half hours, mostly waiting. Step 2 is resumable: stop it and start it
					again, and it picks up where it left off.
				</li>
				<li>Nothing else. No keys, no accounts. Everything it reads is public.</li>
			</ul>
			<pre class="terminal-block"><code>{setup}</code></pre>
		</section>

		<section>
			<h2>Step 1: read the deck</h2>
			<pre class="terminal-block"><code>{step1}</code></pre>
			<p>
				The <a href="https://registry.modelcontextprotocol.io/v0.1/servers">MCP Registry</a> lists
				every published version of every server, 100 to a page. <code>registry.mjs</code> reads every
				page (about 20 minutes) and keeps one card per server:
			</p>
			<ul>
				<li><strong>the latest version only</strong>, not every release;</li>
				<li>
					<strong>only servers with a remote endpoint</strong> (<code>streamable-http</code>). A
					server you install and run locally has no URL to check;
				</li>
				<li><strong>each URL once.</strong> Many entries point at the same address.</li>
			</ul>
			<p>
				On October 20 that took <strong>162,532 entries</strong> down to
				<strong>30,142 unique addresses</strong>. 304 of those were templates, like
				<code>{template}</code>. They can't be requested as written, so they're set aside, not
				guessed. That leaves <strong>29,838</strong> to check.
			</p>
			<p>
				If a page fails, the script waits and tries again, up to five times. It saves a checkpoint
				as it goes, so a dropped connection costs a page, not the whole read.
			</p>
		</section>

		<section>
			<h2>Step 2: check every card, read-only</h2>
			<pre class="terminal-block"><code>{step2}</code></pre>
			<p>
				For each address, <code>probe.mjs</code> runs the same discovery checks as the
				<a href="https://servercard.wolfejam.dev">Server Card Check</a> web page: it looks for a card
				at <code>&lt;url&gt;/server-card</code>, then in the AI Catalog at
				<code>/.well-known/ai-catalog.json</code>, and checks what it finds against the v1 schema and
				the hosting rules (CORS, caching).
			</p>
			<p>
				<strong>It can't change anything, by construction.</strong> Every request goes through this
				guard:
			</p>
			<pre class="terminal-block"><code>{guard}</code></pre>
			<p>
				GET and OPTIONS only. The checker's transport checks send a POST, so for the census they're
				recorded as skipped, and nothing is ever sent to a server's MCP endpoint.
			</p>
			<p>
				<strong>Be a good guest.</strong> At most 16 requests at a time, a 10-second timeout each, and
				a User-Agent that names the project and links to it, so anyone who sees the traffic knows
				what it is.
			</p>
			<p>
				Results go to <code>census.jsonl</code>, one line per address. Stop it whenever you like;
				addresses already in the file are skipped next time. On October 20 the checks ran from 12:02
				to 15:14 UTC, with no errors.
			</p>
		</section>

		<section>
			<h2>Step 3: count the hand</h2>
			<pre class="terminal-block"><code>{step3}</code></pre>
			<p>
				No network. <code>summarize.mjs</code> is arithmetic over the two files from steps 1 and 2,
				and writes <code>summary.json</code>. A <strong>card</strong> is a <code>200</code> at a card
				location that parses as JSON. A <strong>valid card</strong> also passes the v1 schema. A
				<code>200</code> that isn't JSON (usually a website's catch-all page) is counted separately.
			</p>
			<p>
				That gives four outcomes for every address, and they are different problems with different
				fixes. A reader asked for this split after the October 20 post. Here it is for the 27,966
				endpoints outside the largest publisher:
			</p>
			<div class="table-wrap">
				<table class="rot-table">
					<thead>
						<tr><th>Outcome</th><th>Endpoints</th><th>Share</th><th>The fix</th></tr>
					</thead>
					<tbody>
						<tr><td>No card</td><td>25,654</td><td>91.7%</td><td>Publish one</td></tr>
						<tr><td>A web page where the card should be</td><td>733</td><td>2.6%</td><td>Serve JSON there, or a 404</td></tr>
						<tr><td>A card that fails validation</td><td>912</td><td>3.3%</td><td>The checker names the field</td></tr>
						<tr><td>A valid card</td><td>667</td><td>2.4%</td><td></td></tr>
					</tbody>
				</table>
			</div>
			<p>
				More cards fail than pass. Every row comes from <code>summary.json</code>: no card is checked
				minus answered; failing is JSON cards minus valid ones.
			</p>
		</section>

		<section>
			<h2>Shuffle the pack: four choices that move the answer</h2>
			<p>The same rows give very different headlines, depending on what you divide by. October 20:</p>
			<div class="table-wrap">
				<table class="rot-table">
					<thead>
						<tr><th>Count by</th><th>Valid</th><th>Share</th></tr>
					</thead>
					<tbody>
						<tr><td>Endpoint</td><td>2,539 of 29,838</td><td><strong>8.51%</strong></td></tr>
						<tr><td>Endpoint, leaving out the largest publisher</td><td>667 of 27,966</td><td><strong>2.39%</strong></td></tr>
						<tr><td>Distinct host</td><td>586 of 21,526</td><td><strong>2.72%</strong></td></tr>
						<tr><td>Registry namespace</td><td>528 of 18,856</td><td><strong>2.80%</strong></td></tr>
						<tr><td>Namespaces with a single endpoint</td><td>471 of 17,519</td><td><strong>2.69%</strong></td></tr>
					</tbody>
				</table>
			</div>
			<ol>
				<li>
					<strong>Entries are not servers.</strong> One publisher put 1,872 valid cards behind one
					gateway. Count endpoints and they're 74% of the valid cards. Count hosts, namespaces, or
					leave that publisher out, and every answer lands under 3%. The script reports the largest
					publisher separately, so you can see the effect, but it doesn't name it in the headline.
				</li>
				<li>
					<strong>Latest version only.</strong> Counting every release would count the same server
					many times.
				</li>
				<li>
					<strong>Templates are skipped, not filled in.</strong> Guessing a tenant name would be
					checking a server that may not exist.
				</li>
				<li>
					<strong>A web page isn't a card.</strong> 733 addresses answered the card's URL with
					<code>200 OK</code> and HTML. Count every <code>200</code> as "has a card" and the figure
					goes up by about a fifth (4,184 instead of 3,451).
				</li>
			</ol>
			<p>
				None of these is hidden. Each one is a line in <code>summarize.mjs</code>, and
				<code>summary.json</code> carries every denominator, so you can pick another one and say so.
			</p>
		</section>

		<section>
			<h2>Step 4: compare two runs, or two checkers</h2>
			<pre class="terminal-block"><code>{step4}</code></pre>
			<p>
				When the checker's rules change between two counts, is a change in the numbers the servers
				or the checker? <code>census:diff</code> answers that. It installs both versions from npm and
				checks each sampled endpoint with A and then B, <strong>in the same minute</strong>, so a
				changed verdict comes from the code, not from the server changing in between. The sample is
				seeded (<code>SEED</code>), so the same command picks the same endpoints again.
			</p>
			<p>
				Before the October 20 post we ran it on 200 endpoints. The October 12 way of counting CORS
				gave the same verdict on every JSON card in the sample under both versions. So 179 → 324
				cards sending all four CORS headers was the servers, not the yardstick.
			</p>
		</section>

		<section>
			<h2>Run yours</h2>
			<p>
				Point the same scripts at your own servers, or count the registry again next week and
				compare. If your numbers differ from ours, open an issue on the
				<a href="https://github.com/Wolfe-Jam/mcp-server-card-check/issues">repository</a>. A count
				anyone can repeat is worth more than one only we can.
			</p>
			<p>
				Run a remote MCP server? Paste its address into
				<a href="https://servercard.wolfejam.dev">Server Card Check</a>. Checked yours?
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
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

	.post-content ul,
	.post-content ol {
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
		border: none; /* the site-wide code pill adds a hairline border */
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
