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
	<title>The Day of the GRID — Package.json got a UI | mcpaas-cf v1.5.0 | FAF</title>
	<meta name="description" content="May the 4th. The GRID at mcpaas.live/grid generalized today — point it at any npm package or GitHub repo and see what's there. See what's not. React was the demo. The truth-printing rule did the rest." />
	<meta property="og:title" content="The Day of the GRID — Package.json got a UI" />
	<meta property="og:description" content="mcpaas.live/grid generalized today. Point it at any npm package. See what's there. See what's not. React showed 11/33 filled — we don't soften that." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/the-day-of-the-grid" />
	<meta property="og:image" content="https://faf.one/blog/the-day-of-the-grid-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/the-day-of-the-grid-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Day of the GRID
		</div>

		<h1>The Day of the GRID 🌐</h1>
		<p class="version-tag">mcpaas-cf v1.5.0 — May the 4th be with You ⚡️</p>
		<p class="subtitle">Package.json got a UI. Point the GRID at any package. See what&rsquo;s there. See what&rsquo;s not.</p>
		<div class="meta">
			<time datetime="2026-05-04">May 4, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/the-day-of-the-grid-hero.png" alt="GRID — Package.json got a UI. mcpaas.live/grid?npm=react. v1.5.0 · May the 4th. A periodic-table grid with cyan filled cells (react, lodash, jest, build, dev, prod, main, test) and dashed-outline empty cells with glowing question marks." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Yesterday the GRID drew itself &mdash; a periodic
				table of FAF skills at <a href="https://mcpaas.live/grid">mcpaas.live/grid</a>.
				Today the GRID became a verb. Point it at any npm package or GitHub repo
				and the same renderer reads the structure. <code>?npm=react</code>,
				<code>?gh=facebook/react</code>, <code>?npm=lodash</code>. <strong>Same renderer.
				Swappable adapters.</strong> A debugging surface for package.json, drawn
				honestly &mdash; empty cells stay empty.
			</p>
		</section>

		<section>
			<h2>Try it</h2>

			<div class="copy-box" onclick={() => copyText('https://mcpaas.live/grid?npm=react', 'react')}>
				<code class="copy-code">https://mcpaas.live/grid?npm=react</code>
				<button class="copy-btn">{copiedId === 'react' ? 'Copied!' : 'Open'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('https://mcpaas.live/grid?gh=facebook/react', 'gh')}>
				<code class="copy-code">https://mcpaas.live/grid?gh=facebook/react</code>
				<button class="copy-btn">{copiedId === 'gh' ? 'Copied!' : 'Open'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('https://mcpaas.live/grid.txt?npm=react', 'txt')}>
				<code class="copy-code">https://mcpaas.live/grid.txt?npm=react</code>
				<button class="copy-btn">{copiedId === 'txt' ? 'Copied!' : 'Open'}</button>
			</div>

			<p>
				Three views, one URL primitive. HTML for the browser, plain text for the
				terminal/PR/email/IETF thread, GitHub repo for things outside npm. No install.
				No auth. No JS in the page itself &mdash; pure CSS Grid. Just paste a URL.
			</p>
		</section>

		<section>
			<h2>Yesterday: the grid drew itself</h2>

			<p>
				May 3 was an internal-architecture day. We&rsquo;d been writing a 2-line FAF
				stamp into every markdown file across the FAF ecosystem &mdash; one stamp per
				skill, one per repo doc. A small comment block, invisible to humans, parseable
				by any AI.
			</p>

			<p>
				When we ran a script over those stamps, something showed up that we hadn&rsquo;t
				designed. Plotted by <code>(family, layer)</code>, the stamps formed a periodic
				table. <strong>4 families emerged from the data</strong> &mdash; FAF, TAF, WJTTC,
				xAI &mdash; none of them enumerated anywhere. <strong>9 layers</strong>. <strong>58 stamped
				nodes.</strong> <strong>25 honest empty cells.</strong>
			</p>

			<p>
				The empty cells weren&rsquo;t aesthetic gaps. They were <em>questions the
				architecture was asking.</em> Mendeleev&rsquo;s periodic table didn&rsquo;t just predict
				gallium &mdash; it caught data inconsistencies. Same here. The GRID surfaced
				its own stamp bug within an hour of going live (a misclassified
				<code>family=FAF</code> on a <code>faf-taf-git</code> CONTRIBUTING.md that
				should have been <code>family=TAF</code>). We fixed it in v1.4.1. The grid drew
				itself, then the grid found its own bug.
			</p>

			<p>
				Yesterday&rsquo;s post: <a href="/blog/the-grid-drew-itself">none</a>. Yesterday
				was the architecture. Today is the product.
			</p>
		</section>

		<section>
			<h2>Today: the noun became a verb</h2>

			<p>
				The renderer was already general. The data sources just needed to be
				swappable. v1.5.0 ships three:
			</p>

			<div class="api-table">
				<table>
					<thead>
						<tr>
							<th>URL</th>
							<th>Source</th>
							<th>What it shows</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>/grid</code></td>
							<td>FAF skills (baked)</td>
							<td>The original periodic table — 58 stamps, 4 families, 9 layers, 25 empty cells</td>
						</tr>
						<tr>
							<td><code>/grid?npm=&lt;pkg&gt;</code></td>
							<td>registry.npmjs.org</td>
							<td>package.json across 6 blocks — identity, distribution, scripts, deps, engines, signals</td>
						</tr>
						<tr>
							<td><code>/grid?gh=&lt;owner&gt;/&lt;repo&gt;</code></td>
							<td>GitHub API</td>
							<td>package.json + project.faf + repo metadata, fetched in parallel</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Same renderer. Different adapters. Each source produces the same
				<code>GridSource</code> shape (blocks of slots); the renderer doesn&rsquo;t know or
				care where the data came from. Add a new source &mdash; add an adapter. Add a
				new view &mdash; add a transform. Architecture clicks into place.
			</p>
		</section>

		<section>
			<h2>React, our story</h2>

			<p>
				React was the demo. Most-famous package on npm. We pointed the GRID at it
				and let the truth-printing rule do its job:
			</p>

			<div class="copy-box" onclick={() => copyText('https://mcpaas.live/grid?npm=react', 'react-demo')}>
				<code class="copy-code">https://mcpaas.live/grid?npm=react</code>
				<button class="copy-btn">{copiedId === 'react-demo' ? 'Copied!' : 'Open'}</button>
			</div>

			<p>
				At the time of writing, react@19.2.5 renders <strong>11 of 33 slots filled</strong>,
				<strong>22 empty</strong>, <strong>1 warn</strong>. Those numbers are real, not
				curated.
			</p>

			<p>
				<strong>What&rsquo;s filled:</strong> name, version, description, license, main,
				exports, repository, homepage, bugs, keywords, sideEffects.
			</p>

			<p>
				<strong>What&rsquo;s empty:</strong> author (no individual attribution),
				contributors (none declared), funding (no sponsorship link), module (no
				ESM-specific entry), types (no TypeScript types declared at the package level),
				bin (no CLI), files (no whitelist), test/build/lint/typecheck/start/prepublish
				scripts (none declared), engines.node (no Node version pin),
				engines.npm/yarn (no pin), packageManager (no Corepack pin), publishConfig.
			</p>

			<p>
				<strong>What&rsquo;s warn:</strong> the missing <code>engines.node</code> pin.
				A package this widely consumed not declaring its supported Node range is a
				signal worth noticing.
			</p>

			<p>
				This is <em>react.</em> The biggest package on npm. None of those facts are
				secret &mdash; they&rsquo;re all in the published package.json. They&rsquo;ve just never
				been rendered as a debugging surface before. <strong>npmjs.com renders package.json
				as marketing</strong> (downloads, popularity, install CTA). bundlephobia renders one
				slice (size). depcheck renders dependency health. None of them treat package.json
				as a spec to be drawn.
			</p>

			<p>
				The GRID does. Empty cells stay empty. Sparse blocks stay sparse. We don&rsquo;t
				pad. We don&rsquo;t soften. We don&rsquo;t grade on a curve. <strong>We print what we
				see.</strong>
			</p>
		</section>

		<section>
			<h2>The format draws itself</h2>

			<p>
				There&rsquo;s a quieter doctrine landing alongside this ship. The text view at
				<code>/grid.txt</code> is itself a parseable format with its own grammar &mdash;
				header, table, empty-cells list, footer. Anyone can write a parser for it
				and reconstruct the underlying data.
			</p>

			<p>
				That makes <code>application/vnd.faf.grid+text</code> a candidate IANA media
				type &mdash; sister to <code>application/vnd.faf+yaml</code>, the FAF format
				registered in October. Same author. Same registry. Two levels of recursion:
				FAF defines stamps; stamps emit a grid; the grid is itself a self-authored
				format.
			</p>

			<p>
				Every <code>?source=</code> we add inherits this media type. The renderer is
				one implementation of the spec. The format is the moat.
			</p>
		</section>

		<section>
			<h2>What&rsquo;s next: ?view=tsa</h2>

			<p>
				v1.5.0 only ships one view: <code>?view=structure</code> (the default identity
				transform). The architecture is now in place to add more.
			</p>

			<p>
				<strong>v1.6.0 will add <code>?view=tsa</code></strong> &mdash; a behavioral view
				that reads source files and classifies declared dependencies as CORE, ACTIVE,
				DORMANT, or LEGACY based on actual import counts. The TSA engine
				(&ldquo;the TSA of package.json&rdquo;, removed from faf-cli in the v6.0 cleanup)
				ports almost verbatim &mdash; pure regex logic, easy to run in a Cloudflare Worker.
				Its real home was always a URL surface, not a CLI command.
			</p>

			<p>
				After TSA: <code>?pypi=requests</code>, <code>?crate=tokio</code>, and a
				<code>?view=score</code> for FAF score breakdowns. Each adapter is ~150 lines.
				Each view is ~80 lines. The renderer doesn&rsquo;t change.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v1.5.0</strong> &mdash; mcpaas-cf, deployed 2026-05-04</li>
				<li><strong>63/63</strong> &mdash; post-deploy WJTTC tests passed first try</li>
				<li><strong>864 KiB / 200 KiB gzip</strong> &mdash; bundle size (+26 raw, +6 gzip vs v1.4.1)</li>
				<li><strong>2 ms</strong> &mdash; Worker startup time</li>
				<li><strong>33 slots / 6 blocks</strong> &mdash; per npm package</li>
				<li><strong>FAF skills grid</strong> &mdash; byte-identical to v1.4.1, verified</li>
				<li><strong>1 hour</strong> &mdash; KV cache TTL for npm + GitHub fetches</li>
				<li><strong>5000 req/hr</strong> &mdash; GitHub API ceiling with server-side PAT</li>
			</ul>
		</section>

		<section>
			<h2>Source</h2>

			<ul>
				<li><a href="https://github.com/Wolfe-Jam/faf-mcpaas/releases/tag/v1.5.0" target="_blank" rel="noopener">v1.5.0 release notes on GitHub</a></li>
				<li><a href="https://github.com/Wolfe-Jam/faf-mcpaas" target="_blank" rel="noopener">Wolfe-Jam/faf-mcpaas</a></li>
				<li>Architecture: <code>src/grid/sources/npm.ts</code>, <code>src/grid/sources/github.ts</code>, <code>src/grid/views/structure.ts</code></li>
				<li>Memory: <em>cli-vs-url-migration-pattern</em>, <em>vnd-faf-grid-recursive-self-authoring</em>, <em>faf-truth-printing-applied-to-grid</em></li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=The%20GRID%20at%20mcpaas.live%2Fgrid%20generalized%20today.%20Point%20it%20at%20any%20npm%20package%20%E2%80%94%20%2Fgrid%3Fnpm%3Dreact%20%E2%80%94%20see%20what%27s%20there%2C%20see%20what%27s%20not.%20React%3A%2011%2F33%20filled%2C%2022%20empty%2C%201%20warn.%20We%20print%20what%20we%20see.%20%F0%9F%8C%90%E2%9A%A1%EF%B8%8F&url=https%3A%2F%2Ffaf.one%2Fblog%2Fthe-day-of-the-grid" target="_blank" rel="noopener">
				Share on X
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ The grid drew itself. Then the grid became a verb. 🏎️⚡️</p>
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
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: 0 -1rem 2.5rem -1rem;
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
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.launch {
		background: #FF6B35;
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

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
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
