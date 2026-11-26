<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `MCP Server Cards, six weeks on.

Outside the largest gateway, endpoints with a valid card: 1.7% → 8.5%.
Five times over.

And the first count of AI Catalogs: 4,144 found.

Checked yours?`;
	const shareUrl = 'https://faf.one/blog/five-times-over';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Five Times Over - MCP Server Cards, Six Weeks On | FAF</title>
	<meta name="description" content="Six weeks after the first count, the share of MCP Registry endpoints with a valid Server Card, outside the largest gateway, rose from 1.7% to 8.5%. Plus the first count of AI Catalogs." />
	<meta property="og:title" content="Five Times Over - MCP Server Cards, Six Weeks On" />
	<meta property="og:description" content="Endpoints with a valid MCP Server Card, outside the largest gateway: 1.7% to 8.5% in six weeks. And 4,144 AI Catalogs, counted for the first time." />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content="2026-11-26" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/five-times-over-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/five-times-over-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Five Times Over
		</div>
		<h1>Five Times Over</h1>
		<p class="subtitle">MCP Server Cards, six weeks on</p>
		<div class="meta">
			<time datetime="2026-11-26">Published November 26, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/five-times-over-hero.png" alt="Five Times Over: endpoints with a valid MCP Server Card, outside the largest gateway, 1.7% to 8.5% in six weeks" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Six weeks after the first count, we counted every remote MCP server
				in the registry again. Outside the largest gateway, the share of endpoints with a valid
				Server Card rose from <strong>1.7% to 8.5%</strong>: five times over. By distinct host, 1.9%
				to 8.0%. A few large publishers account for much of the rise; leave the three largest out
				and 4.9% of hosts have one. And for the first time, the census counted AI Catalogs:
				<strong>4,144</strong> found.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>What a Server Card is.</strong> A small public file that tells an AI app who an
					MCP server is and how to connect, before it connects. The server's business card, pinned
					to the door.
				</p>
				<p>
					<strong>What six weeks changed.</strong> Far more servers have one than in October, and
					more of them work in a browser. Most still don't have one at all.
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
			<h2>The count, six weeks on</h2>
			<p>
				Same idea as <a href="/blog/checked-yours">the first two counts</a>: read the whole MCP
				Registry, keep the latest version of every server with a remote endpoint, and check each
				address the way a client would, read-only.
			</p>
			<div class="table-wrap">
				<table class="rot-table">
					<thead>
						<tr><th>What we counted</th><th>Oct 12</th><th>Nov 20</th><th>Nov 25</th></tr>
					</thead>
					<tbody>
						<tr><td>Registry entries read</td><td>145,157</td><td>275,546</td><td>290,771</td></tr>
						<tr><td>Endpoints checked</td><td>26,105</td><td>46,118</td><td>49,441</td></tr>
						<tr><td>Something answered at a card location</td><td>3,609</td><td>8,469</td><td>9,190</td></tr>
						<tr><td>…a web page, not a card</td><td>637</td><td>1,147</td><td>1,233</td></tr>
						<tr><td>Schema-valid cards</td><td>2,194 (8.4%)</td><td>5,544 (12.0%)</td><td>5,973 (12.1%)</td></tr>
						<tr class="hot"><td>Valid, outside the largest gateway</td><td>403 of 24,314 (1.7%)</td><td>3,608 of 44,182 (8.2%)</td><td>4,037 of 47,505 (8.5%)</td></tr>
						<tr class="hot"><td>Valid, by distinct host</td><td>352 of 18,268 (1.9%)</td><td>2,616 of 34,654 (7.5%)</td><td>3,026 of 37,594 (8.0%)</td></tr>
						<tr><td>Valid, by registry namespace</td><td>344 of 15,926 (2.2%)</td><td>1,429 of 29,714 (4.8%)</td><td>1,662 of 32,189 (5.2%)</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				<strong>Who is dealing.</strong> Three publishers carry 3,960 of the 5,973 valid cards: one
				gateway (1,936) and two others (1,230 and 794). Their cards are real, but they come from three
				publishers. Leave all three out and 4.9% of hosts have a valid card (1,794 of 36,362),
				still more than double October's 1.9%.
			</p>
			<figure class="dealers" aria-labelledby="dealers-cap">
				<div class="dealers-bar" role="img" aria-label="Valid Server Cards on November 25 by publisher: one gateway 1,936 (32%), io.usefulapi 1,230 (21%), dev.cotlet 794 (13%), everyone else 2,013 (34%), of 5,973.">
					<div class="seg three" style="flex: 1936" title="Largest gateway: 1,936 cards (32%)"><span class="seg-name">gateway</span><span class="seg-pct">32%</span></div>
					<div class="seg three" style="flex: 1230" title="io.usefulapi: 1,230 cards (21%)"><span class="seg-name">usefulapi</span><span class="seg-pct">21%</span></div>
					<div class="seg three" style="flex: 794" title="dev.cotlet: 794 cards (13%)"><span class="seg-name">cotlet</span><span class="seg-pct">13%</span></div>
					<div class="seg rest" style="flex: 2013" title="Everyone else: 2,013 cards (34%)"><span class="seg-name">everyone else</span><span class="seg-pct">34%</span></div>
				</div>
				<figcaption id="dealers-cap">
					<span class="key"><i class="sw three"></i>Three largest publishers: 3,960</span>
					<span class="key"><i class="sw rest"></i>Everyone else: 2,013</span>
					<span class="key total">5,973 valid cards, November 25</span>
				</figcaption>
			</figure>
		</section>

		<section>
			<h2>Valid is not the same as working</h2>
			<ul>
				<li>
					<strong>Web pages where the card should be.</strong> 1,233 endpoints answer the card's
					address with <code>200 OK</code> and a body that isn't JSON. A client asked for a card
					and got something else.
				</li>
				<li>
					<strong>Browsers.</strong> Of 7,957 JSON cards, 6,538 send
					<code>Access-Control-Allow-Origin: *</code>, but far fewer send all four CORS headers the
					spec lists. By the rule we used on October 12, <strong>179 → 1,383</strong>. Under
					today's stricter rule (the last two read from the preflight, as browsers do), 1,320.
				</li>
				<li>
					<strong>Repeat visits.</strong> 3,655 cards answer a repeat request with
					<code>304 Not Modified</code>, up from 433. The rest send the whole card every time.
				</li>
			</ul>
		</section>

		<section>
			<h2>New: AI Catalogs</h2>
			<p>
				<a href="https://github.com/Agent-Card/ai-catalog">AI Catalog</a> v0.9.0 was released on
				November 22. A catalog lists what a host serves, at
				<code>/.well-known/ai-catalog.json</code>, and can point at Server Cards. This was the first
				census to count them.
			</p>
			<ul>
				<li><strong>4,144</strong> catalogs found; <strong>3,705</strong> pass every MUST of v0.9.0.</li>
				<li>
					61 declare <code>specVersion</code> "0.9". 3,644 say "1.0", the version the final spec
					will use; 48 say "0.91".
				</li>
				<li>
					10 put trust manifests in the new <code>trustManifests</code> array; 255 still carry the
					single <code>trustManifest</code> of earlier drafts, which a v0.9 reader treats as
					unrecognized.
				</li>
			</ul>
		</section>

		<section>
			<h2>See it run</h2>
			<div class="video-frame">
				<video
					src="/blog/five-times-over.mp4"
					poster="/blog/five-times-over-hero.png"
					controls
					muted
					loop
					playsinline
					preload="metadata"
					aria-label="11-second film: the census figures, October 12 to November 25"
				></video>
			</div>
		</section>

		<section>
			<h2>A shared test</h2>
			<p>
				In October, MCP's official conformance suite didn't test Server Cards, and we offered to
				help write the scenario
				(<a href="https://github.com/modelcontextprotocol/conformance/issues/550">conformance #550</a>).
				A draft is now open for the maintainers' review
				(<a href="https://github.com/modelcontextprotocol/conformance/pull/605">conformance #605</a>).
				A shared test is better than anyone's private one, including ours.
			</p>
		</section>

		<section>
			<h2>Method</h2>
			<p>
				Registry read at 16:37 UTC on November 25; checks ran until 20:12 UTC, with no errors. 451
				addresses were templates (such as <code>&#123;tenant&#125;</code>) and were skipped. The
				checker was v0.7.1, which follows AI Catalog v0.9.0; the November 20 count used v0.4.1 and
				the October 12 count v0.1.1. Since October the CORS rule got stricter (v0.3.4, see above),
				and since November 20 the schema snapshot gained the optional
				<code>Remote.extensionsInfo</code> field (v0.5.0). The Server Card figures are in the
				<a href="https://github.com/Wolfe-Jam/mcp-server-card-check/tree/main/docs/census">repository</a>,
				with the scripts, so they can be reproduced. The AI Catalog figures were counted from the
				same run's raw output, one catalog per host.
			</p>
			<p>We count every week now.</p>
		</section>

		<section>
			<h2>Checked yours?</h2>
			<p>
				If you run a remote MCP server, paste its address into
				<a href="https://servercard.wolfejam.dev">the checker</a>. No card yet? The report tells
				you what a valid one needs. Have one? Ten seconds to see if browsers can read it.
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
	.video-frame {
		background: #0a0a0a; /* literal-ok: media frame behind the film */
		border-radius: 12px;
		overflow: hidden;
		margin: 0 auto;
	}
	.video-frame video {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1200 / 630;
	}
	.dealers {
		margin: 1.5rem 0 2rem;
	}
	.dealers-bar {
		display: flex;
		gap: 2px;
		height: 4.25rem;
		background: var(--faf-page-bg);
	}
	.seg {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: 0;
		padding: 0 0.5rem;
		border-radius: 4px;
		line-height: 1.2;
		overflow: hidden;
		white-space: nowrap;
	}
	.seg.three {
		background: var(--faf-dark);
		color: var(--faf-surface);
	}
	.seg.rest {
		background: var(--faf-orange);
		color: var(--faf-locked-dark);
	}
	.seg-name {
		font-size: 0.8rem;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.seg-pct {
		font-size: 1.15rem;
		font-weight: 800;
	}
	.dealers figcaption {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 1.25rem;
		margin-top: 0.6rem;
		font-size: 0.85rem;
		color: var(--faf-black);
	}
	.dealers .key {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}
	.dealers .key.total {
		font-weight: 600;
	}
	.dealers .sw {
		display: inline-block;
		width: 0.85rem;
		height: 0.85rem;
		border-radius: 3px;
	}
	.dealers .sw.three {
		background: var(--faf-dark);
	}
	.dealers .sw.rest {
		background: var(--faf-orange);
	}
</style>
