<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `Recovered in Translation: Same Lab, Same Disease, Same Cure

Two ETH Zurich papers. One CERN paper. One solution. Semantic drift doesn't care what it corrupts — benchmarks or AI context. FAF fixes both.`;
	const shareUrl = 'https://faf.one/blog/recovered-in-translation';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Recovered in Translation: Same Lab, Same Disease, Same Cure | FAF</title>
	<meta name="description" content="ETH Zurich's second paper confirms it: semantic drift and context loss corrupt everything they touch. Benchmarks. AI context. The fix is the same — structure over prose." />
	<meta property="og:title" content="Recovered in Translation: Same Lab, Same Disease, Same Cure" />
	<meta property="og:description" content="Two ETH Zurich papers. One CERN paper. One solution. Semantic drift doesn't care what it corrupts — benchmarks or AI context. FAF fixes both." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Recovered in Translation
		</div>

		<div class="series-badge">Beyond the Bloat &mdash; Part II</div>
		<h1>Recovered in Translation</h1>
		<p class="subtitle">Same Lab, Same Disease, Same Cure</p>
		<p class="tagline">FAF defines. AI interprets.</p>
		<div class="meta">
			<time datetime="2026-02-28">February 28, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category research">Research</span>
			<span class="separator">&bull;</span>
			<span class="reading-time">8 min read</span>
		</div>
		<div class="byline">By English James | <a href="https://twitter.com/wolfe_jam">@wolfe_jam</a> | <a href="https://wolfejam.dev">wolfejam.dev</a></div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> ETH Zurich's SRI Lab just published their second paper in two weeks. The first proved prose AI context hurts performance. The second proves semantic drift and context loss corrupt multilingual benchmarks. Same lab. Same disease. Same cure: structure over prose.
			</p>
		</section>

		<!-- ============================================ -->
		<!-- RECAP -->
		<!-- ============================================ -->
		<section>
			<h2>Previously: The Bloat Problem</h2>

			<p>In <a href="/blog/beyond-the-bloat">Part I</a>, we covered the first paper from Professor Martin Vechev's Secure, Reliable, and Intelligent Systems Lab at ETH Zurich: <em>&ldquo;Evaluating AGENTS.md&rdquo;</em> (arXiv:2602.11988). The findings were damning &mdash; prose context files reduce performance by 3%, inflate costs by 20%, and encourage agents to over-explore.</p>

			<p>That paper answered the question: <strong>does giving AI more prose context help?</strong></p>

			<p>The answer was no.</p>
		</section>

		<!-- ============================================ -->
		<!-- NEW PAPER -->
		<!-- ============================================ -->
		<section>
			<h2>The Second Paper: Recovered in Translation</h2>

			<p>Two weeks later, the same lab publishes <em>&ldquo;Recovered in Translation: Efficient Pipeline for Automated Translation of Benchmarks and Datasets&rdquo;</em> (arXiv:2602.22207). Authors: Hanna Yukhymenko, Anton Alexandrov, and Martin Vechev.</p>

			<p>Different patient. Same disease.</p>

			<blockquote>
				&ldquo;The reliability of multilingual Large Language Model evaluation is currently compromised by the inconsistent quality of translated benchmarks.&rdquo;
			</blockquote>

			<p>The paper identifies that when benchmarks are translated from one language to another, two things happen:</p>

			<div class="disease-grid">
				<div class="disease-card">
					<div class="disease-icon">&#x1F4A8;</div>
					<h4>Semantic Drift</h4>
					<p>Meaning shifts during translation. The question asks something subtly different in the target language. The benchmark measures the wrong thing.</p>
				</div>
				<div class="disease-card">
					<div class="disease-icon">&#x1F573;</div>
					<h4>Context Loss</h4>
					<p>Nuance evaporates. Cultural references, technical precision, task structure &mdash; all degraded. The evaluation produces misleading metrics.</p>
				</div>
			</div>

			<p>Their solution: a structured pipeline that preserves &ldquo;original task structure and linguistic nuances during localization.&rdquo; They validated across eight languages with measurably better results.</p>
		</section>

		<!-- ============================================ -->
		<!-- THE PATTERN -->
		<!-- ============================================ -->
		<section>
			<h2>The Pattern: Drift Is Universal</h2>

			<p>Step back and look at what the same lab found in two weeks:</p>

			<div class="pattern-table-wrapper">
				<table class="pattern-table">
					<thead>
						<tr>
							<th></th>
							<th class="col-paper1">Paper 1: AGENTS.md</th>
							<th class="col-paper2">Paper 2: Benchmarks</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="aspect-label">Domain</td>
							<td>AI coding context</td>
							<td>Multilingual evaluation</td>
						</tr>
						<tr>
							<td class="aspect-label">Input</td>
							<td>Prose MD files</td>
							<td>English benchmarks</td>
						</tr>
						<tr>
							<td class="aspect-label">Disease</td>
							<td>Bloat, noise, over-exploration</td>
							<td>Semantic drift, context loss</td>
						</tr>
						<tr>
							<td class="aspect-label">Symptom</td>
							<td>-3% performance, +20% cost</td>
							<td>Misleading performance metrics</td>
						</tr>
						<tr>
							<td class="aspect-label">Root cause</td>
							<td>Unstructured prose</td>
							<td>Unstructured translation</td>
						</tr>
						<tr>
							<td class="aspect-label">Fix</td>
							<td>Structure over prose</td>
							<td>Structure over prose</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>The fix is the same both times: <strong>replace loose prose with structured pipelines that preserve meaning.</strong></p>

			<p>This isn't a coincidence. It's a law.</p>
		</section>

		<!-- ============================================ -->
		<!-- DRIFT WARNING BOX -->
		<!-- ============================================ -->
		<section>
			<div class="drift-warning">
				<div class="warning-stripe"></div>
				<div class="warning-content">
					<h3>Semantic Drift Doesn't Care What It Corrupts</h3>
					<p>Translate a benchmark &mdash; meaning drifts. Write a CLAUDE.md by hand &mdash; meaning drifts. Copy context between sessions &mdash; meaning drifts. Tell an LLM to generate your project context &mdash; meaning drifts <em>and</em> performance drops. Every time humans or LLMs convert structured knowledge into prose, information degrades. The vector is the same: <strong>lossy conversion from structure to text.</strong></p>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- THREE PAPERS -->
		<!-- ============================================ -->
		<section>
			<h2>Three Papers. One Roadmap.</h2>

			<p>The picture is now complete. Two papers diagnose. One prescribes.</p>

			<div class="papers-stack">
				<div class="paper-card paper-arxiv1">
					<div class="paper-badge">Diagnosis 1</div>
					<h4>Evaluating AGENTS.md</h4>
					<p class="paper-authors">Gloaguen, M&uuml;ndler, M&uuml;ller, Raychev &amp; Vechev</p>
					<p class="paper-finding">&ldquo;Prose context files reduce task success rates while increasing cost by 20%.&rdquo;</p>
					<a href="https://arxiv.org/abs/2602.11988" class="paper-link">arXiv:2602.11988</a>
				</div>

				<div class="paper-arrow">&darr;</div>

				<div class="paper-card paper-arxiv2">
					<div class="paper-badge">Diagnosis 2</div>
					<h4>Recovered in Translation</h4>
					<p class="paper-authors">Yukhymenko, Alexandrov &amp; Vechev</p>
					<p class="paper-finding">&ldquo;Semantic drift and context loss produce misleading performance metrics.&rdquo;</p>
					<a href="https://arxiv.org/abs/2602.22207" class="paper-link">arXiv:2602.22207</a>
				</div>

				<div class="paper-arrow">&darr;</div>

				<div class="paper-card paper-faf">
					<div class="paper-badge paper-badge-solution">Prescription</div>
					<h4>Format-Driven AI Context Architecture</h4>
					<p class="paper-authors">Wolfe Harrison, J.</p>
					<p class="paper-finding">&ldquo;IANA-registered structured format that enables user-controlled, portable AI context. 91% token reclaim. Zero drift.&rdquo;</p>
					<a href="https://zenodo.org/records/18251362" class="paper-link">DOI: 10.5281/zenodo.18251362</a>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- HOW FAF SOLVES IT -->
		<!-- ============================================ -->
		<section>
			<h2>How FAF Eliminates Drift</h2>

			<p>The &ldquo;Recovered in Translation&rdquo; paper solves benchmark drift with a structured pipeline. FAF solves AI context drift with a structured format. The engineering is parallel:</p>

			<div class="solution-grid">
				<div class="solution-card">
					<div class="solution-icon">&#x1F4CB;</div>
					<h4>Schema, Not Prose</h4>
					<p>YAML fields are unambiguous. <code>tech_stack.languages: [TypeScript]</code> can't drift into &ldquo;we mostly use TS but sometimes JS.&rdquo;</p>
				</div>
				<div class="solution-card">
					<div class="solution-icon">&#x1F504;</div>
					<h4>One Source, Many Outputs</h4>
					<p>Define once in .faf, generate CLAUDE.md, AGENTS.md, .cursorrules, GEMINI.md. No manual translation between formats. No drift between copies.</p>
				</div>
				<div class="solution-card">
					<div class="solution-icon">&#x2705;</div>
					<h4>Scored, Not Hoped</h4>
					<p>AI-Readiness scoring catches degradation. If context quality drops, you know immediately. Benchmarks should be this honest.</p>
				</div>
				<div class="solution-card">
					<div class="solution-icon">&#x1F512;</div>
					<h4>User-Owned, Not Vendor-Locked</h4>
					<p>Local files. IANA-registered standard. No cloud dependency. The user controls their context the way they control their source code.</p>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- THE TRANSLATION PARALLEL -->
		<!-- ============================================ -->
		<section>
			<h2>The Translation Parallel</h2>

			<p>Think about what <code>faf bi-sync --all</code> actually does:</p>

			<div class="pipeline-comparison">
				<div class="pipeline pipeline-bad">
					<h3>Manual &ldquo;Translation&rdquo;</h3>
					<div class="pipeline-steps">
						<div class="pipe-step">
							<span class="pipe-label">Project knowledge</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-bad">
							<span class="pipe-label">Human writes CLAUDE.md</span>
							<span class="pipe-detail">Subjective, incomplete</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-bad">
							<span class="pipe-label">Copy-paste to AGENTS.md</span>
							<span class="pipe-detail">Drift begins</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-result pipe-result-bad">
							<span class="pipe-stat">Semantic Drift</span>
							<span class="pipe-verdict">Each file tells a different story</span>
						</div>
					</div>
				</div>

				<div class="pipeline-vs">vs</div>

				<div class="pipeline pipeline-good">
					<h3>FAF Pipeline</h3>
					<div class="pipeline-steps">
						<div class="pipe-step">
							<span class="pipe-label">Project knowledge</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-good">
							<span class="pipe-label">.faf (structured YAML)</span>
							<span class="pipe-detail">Single source of truth</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-good">
							<span class="pipe-label">faf bi-sync --all</span>
							<span class="pipe-detail">Deterministic generation</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-result pipe-result-good">
							<span class="pipe-stat">Zero Drift</span>
							<span class="pipe-verdict">Every format tells the same story</span>
						</div>
					</div>
				</div>
			</div>

			<p>The parallel to benchmark translation is exact. The ETH Zurich team's solution &mdash; a structured pipeline that preserves task structure and nuance &mdash; is the same architecture FAF uses for AI context. One source. Deterministic outputs. No lossy prose conversion.</p>
		</section>

		<!-- ============================================ -->
		<!-- REINFORCEMENT -->
		<!-- ============================================ -->
		<section>
			<h2>Two Labs, One Direction</h2>

			<p>The evidence base for structured AI context just doubled. In two weeks, the same lab at ETH Zurich has independently confirmed, in two different domains, that:</p>

			<ul>
				<li>Prose degrades information</li>
				<li>Semantic drift is measurable and harmful</li>
				<li>Context loss produces misleading results</li>
				<li>Structured pipelines fix all three</li>
			</ul>

			<p>FAF has been shipping this fix since October 2025. IANA registered. Anthropic-merged (MCP #2759). 33,500+ ecosystem downloads across npm, PyPI, and crates.io. The architecture isn't theoretical &mdash; it's infrastructure.</p>

			<div class="benchmark-note">
				<strong>Note on benchmarks:</strong> The ETH Zurich papers measure coding agent task resolution (Paper 1) and multilingual benchmark reliability (Paper 2). FAF measures AI-Readiness &mdash; persistent project context scoring as defined in Anthropic's MCP ecosystem. Three complementary measurement systems, one shared enemy: drift.
			</div>
		</section>

		<!-- ============================================ -->
		<!-- CTA -->
		<!-- ============================================ -->
		<section>
			<div class="cta-section">
				<h3>Try FAF</h3>
				<div class="terminal-block">
					<code>npm i -g faf-cli</code>
					<code>faf init</code>
					<code>faf bi-sync --all</code>
				</div>
				<p>One source. Every AI format. Zero drift.</p>
				<p>Read <a href="/blog/beyond-the-bloat">Part I: Beyond the Bloat</a> for the full AGENTS.md analysis.</p>
				<p>Questions? DM <a href="https://twitter.com/wolfe_jam">@wolfe_jam</a>.</p>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- REFERENCES -->
		<!-- ============================================ -->
		<section>
			<h2>References</h2>
			<ol class="references">
				<li>Yukhymenko, H., Alexandrov, A., &amp; Vechev, M. (2026). <em>Recovered in Translation: Efficient Pipeline for Automated Translation of Benchmarks and Datasets.</em> <a href="https://arxiv.org/abs/2602.22207">arXiv:2602.22207</a>.</li>
				<li>Gloaguen, T., M&uuml;ndler, N., M&uuml;ller, M., Raychev, V., &amp; Vechev, M. (2026). <em>Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?</em> <a href="https://arxiv.org/abs/2602.11988">arXiv:2602.11988</a>.</li>
				<li>Wolfe Harrison, J. (2026). <em>Format-Driven AI Context Architecture: The .faf Standard for Persistent Project Understanding.</em> <a href="https://zenodo.org/records/18251362">DOI: 10.5281/zenodo.18251362</a>.</li>
			</ol>

			<h3>Further Reading</h3>
			<ul>
				<li><a href="/blog/beyond-the-bloat">Beyond the Bloat (Part I)</a> &mdash; Full analysis of the AGENTS.md paper</li>
				<li><a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml">Official IANA Media Type Registration for FAF</a></li>
				<li><a href="https://github.com/Wolfe-Jam/faf">FAF on GitHub</a></li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p class="closing-tagline">FAF defines. AI interprets.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	/* ======================================== */
	/* Base Layout */
	/* ======================================== */
	.blog-post {
		max-width: 840px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #222;
	}

	/* ======================================== */
	/* Header */
	/* ======================================== */
	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #111;
		padding-bottom: 2rem;
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

	.series-badge {
		display: inline-block;
		background: #111;
		color: #00D4D4;
		padding: 0.3rem 0.8rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 700;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		letter-spacing: 0.03em;
		margin-bottom: 0.75rem;
	}

	h1 {
		font-size: 2.4rem;
		margin: 0.5rem 0 0.25rem 0;
		color: #000;
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.15rem;
		color: #555;
		margin: 0 0 0.5rem 0;
	}

	.tagline {
		font-size: 1rem;
		color: #FF6B35;
		font-weight: 700;
		font-style: italic;
		margin: 0 0 1rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 0.5rem;
	}

	.separator { color: #ccc; }

	.category {
		background: #111;
		color: white;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.category.research {
		background: #00D4D4;
		color: #000;
	}

	.reading-time {
		color: #999;
		font-size: 0.85rem;
	}

	.byline {
		font-size: 0.9rem;
		color: #666;
	}

	.byline a {
		color: #FF6B35;
		text-decoration: none;
	}

	.byline a:hover {
		text-decoration: underline;
	}

	/* ======================================== */
	/* Content */
	/* ======================================== */
	.post-content {
		font-size: 1.05rem;
	}

	.lead {
		font-size: 1.15rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f8f8f8;
		border-radius: 8px;
		border-left: 4px solid #111;
	}

	h2 {
		font-size: 1.7rem;
		margin: 3rem 0 1.25rem 0;
		color: #000;
		border-bottom: 2px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.25rem;
		margin: 2rem 0 0.75rem 0;
		color: #222;
	}

	p { margin-bottom: 1.25rem; }

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li { margin-bottom: 0.5rem; }

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.15rem 0.4rem;
		border-radius: 3px;
		font-size: 0.88em;
	}

	blockquote {
		border-left: 4px solid #FF6B35;
		margin: 1.5rem 0;
		padding: 1rem 1.5rem;
		background: #fafafa;
		font-style: italic;
		color: #444;
	}

	blockquote p { margin: 0; }

	a { color: #FF6B35; }
	a:hover { text-decoration: none; }

	/* ======================================== */
	/* Disease Grid */
	/* ======================================== */
	.disease-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.disease-card {
		background: #111;
		border-radius: 10px;
		padding: 1.5rem;
		text-align: center;
		border: 1px solid #2a1515;
	}

	.disease-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.disease-card h4 {
		color: #ff6666;
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.disease-card p {
		color: #999;
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	/* ======================================== */
	/* Pattern Table */
	/* ======================================== */
	.pattern-table-wrapper {
		overflow-x: auto;
		margin: 2rem 0;
		border-radius: 10px;
		border: 1px solid #e0e0e0;
	}

	.pattern-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.pattern-table th {
		padding: 0.85rem 1rem;
		text-align: left;
		font-weight: 700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.pattern-table th:first-child {
		background: #111;
		color: #fff;
		width: 110px;
	}

	.col-paper1 {
		background: #1a0808;
		color: #ff8888 !important;
	}

	.col-paper2 {
		background: #0a0a1a;
		color: #8888ff !important;
	}

	.pattern-table td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #eee;
		vertical-align: top;
		font-size: 0.85rem;
		line-height: 1.5;
	}

	.aspect-label {
		background: #f8f8f8;
		font-weight: 700;
		color: #333;
		font-size: 0.8rem;
	}

	.pattern-table tbody tr:last-child td {
		font-weight: 700;
		color: #16a34a;
	}

	.pattern-table tbody tr:hover {
		background: #fafafa;
	}

	/* ======================================== */
	/* Drift Warning Box */
	/* ======================================== */
	.drift-warning {
		display: flex;
		margin: 2rem 0;
		border-radius: 10px;
		overflow: hidden;
		background: #1a0a0a;
		border: 1px solid #3a1515;
	}

	.warning-stripe {
		width: 6px;
		min-height: 100%;
		background: linear-gradient(180deg, #ff4444, #ff6666, #ff4444);
		flex-shrink: 0;
	}

	.warning-content {
		padding: 1.5rem 2rem;
	}

	.warning-content h3 {
		color: #ff6666;
		margin: 0 0 0.75rem 0;
		font-size: 1.15rem;
	}

	.warning-content p {
		color: #ccc;
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.7;
	}

	.warning-content strong {
		color: #ff9999;
	}

	.warning-content em {
		color: #ffaaaa;
	}

	/* ======================================== */
	/* Papers Stack */
	/* ======================================== */
	.papers-stack {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		margin: 2rem 0;
	}

	.paper-card {
		background: #0d1117;
		border-radius: 12px;
		padding: 1.5rem 2rem;
		width: 100%;
		max-width: 600px;
		border: 2px solid #30363d;
	}

	.paper-arxiv1 { border-color: #ff4444; }
	.paper-arxiv2 { border-color: #4444ff; }
	.paper-faf { border-color: #44dd44; }

	.paper-badge {
		display: inline-block;
		background: #ff4444;
		color: white;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.75rem;
	}

	.paper-arxiv2 .paper-badge {
		background: #4444ff;
	}

	.paper-badge-solution {
		background: #44dd44 !important;
		color: #000 !important;
	}

	.paper-card h4 {
		color: #fff;
		margin: 0 0 0.25rem 0;
		font-size: 1.1rem;
	}

	.paper-authors {
		color: #8b949e;
		font-size: 0.85rem;
		margin: 0 0 0.5rem 0;
		font-style: italic;
	}

	.paper-finding {
		color: #ccc;
		font-size: 0.9rem;
		margin: 0 0 0.5rem 0;
		line-height: 1.5;
	}

	.paper-link {
		color: #FF6B35 !important;
		font-size: 0.85rem;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.paper-arrow {
		color: #444;
		font-size: 1.5rem;
		padding: 0.5rem 0;
	}

	/* ======================================== */
	/* Solution Grid */
	/* ======================================== */
	.solution-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.solution-card {
		background: #fafafa;
		border: 1px solid #e0e0e0;
		border-radius: 10px;
		padding: 1.25rem;
	}

	.solution-icon {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.solution-card h4 {
		margin: 0 0 0.25rem 0;
		font-size: 1rem;
		color: #111;
	}

	.solution-card p {
		margin: 0;
		font-size: 0.85rem;
		color: #555;
		line-height: 1.5;
	}

	/* ======================================== */
	/* Pipeline Comparison */
	/* ======================================== */
	.pipeline-comparison {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
		align-items: start;
	}

	.pipeline {
		border-radius: 12px;
		padding: 1.5rem;
	}

	.pipeline-bad {
		background: #1a0a0a;
		border: 2px solid #3a1515;
	}

	.pipeline-good {
		background: #0a1a0a;
		border: 2px solid #153a15;
	}

	.pipeline h3 {
		text-align: center;
		margin: 0 0 1.25rem 0;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.pipeline-bad h3 { color: #ff6666; }
	.pipeline-good h3 { color: #44dd44; }

	.pipeline-vs {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		color: #666;
		font-size: 1.1rem;
		padding-top: 6rem;
	}

	.pipeline-steps {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}

	.pipe-step {
		text-align: center;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		width: 100%;
	}

	.pipe-step-bad {
		background: rgba(255,68,68,0.08);
		border: 1px solid rgba(255,68,68,0.2);
	}

	.pipe-step-good {
		background: rgba(68,221,68,0.08);
		border: 1px solid rgba(68,221,68,0.2);
	}

	.pipe-label {
		display: block;
		font-weight: 700;
		font-size: 0.9rem;
		color: #ddd;
	}

	.pipe-detail {
		display: block;
		font-size: 0.75rem;
		color: #888;
		margin-top: 0.15rem;
	}

	.pipe-arrow {
		text-align: center;
		color: #444;
		font-size: 1.2rem;
		padding: 0.25rem 0;
	}

	.pipe-result {
		text-align: center;
		padding: 0.75rem;
		border-radius: 8px;
		width: 100%;
	}

	.pipe-result-bad {
		background: rgba(255,68,68,0.15);
		border: 1px solid rgba(255,68,68,0.3);
	}

	.pipe-result-good {
		background: rgba(68,221,68,0.15);
		border: 1px solid rgba(68,221,68,0.3);
	}

	.pipe-stat {
		display: block;
		font-weight: 800;
		font-size: 1rem;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.pipe-result-bad .pipe-stat { color: #ff6666; }
	.pipe-result-good .pipe-stat { color: #44dd44; }

	.pipe-verdict {
		display: block;
		font-size: 0.75rem;
		color: #888;
		margin-top: 0.15rem;
	}

	/* ======================================== */
	/* Benchmark Note */
	/* ======================================== */
	.benchmark-note {
		background: #f8f8f8;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.5rem 0;
		font-size: 0.85rem;
		color: #555;
		line-height: 1.6;
	}

	.benchmark-note strong {
		color: #333;
	}

	/* ======================================== */
	/* CTA Section */
	/* ======================================== */
	.cta-section {
		background: #0d1117;
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		margin: 2rem 0;
	}

	.cta-section h3 {
		color: #fff;
		margin: 0 0 1rem 0;
		font-size: 1.3rem;
	}

	.cta-section p {
		color: #8b949e;
		font-size: 0.95rem;
	}

	.cta-section a {
		color: #FF6B35;
	}

	.terminal-block {
		background: #161b22;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1rem auto;
		max-width: 400px;
		text-align: left;
	}

	.terminal-block code {
		display: block;
		color: #44dd44;
		background: none;
		padding: 0.2rem 0;
		font-size: 0.95rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #555;
	}

	/* ======================================== */
	/* References */
	/* ======================================== */
	.references {
		font-size: 0.9rem;
		line-height: 1.7;
	}

	.references li {
		margin-bottom: 0.75rem;
	}

	/* ======================================== */
	/* Footer */
	/* ======================================== */
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
		border-top: 3px solid #111;
		text-align: center;
	}

	.closing-tagline {
		font-size: 1.2rem;
		font-weight: 800;
		color: #111;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		letter-spacing: 0.02em;
	}

	/* ======================================== */
	/* Responsive */
	/* ======================================== */
	@media (max-width: 768px) {
		h1 { font-size: 1.8rem; }

		.disease-grid {
			grid-template-columns: 1fr;
		}

		.solution-grid {
			grid-template-columns: 1fr;
		}

		.pipeline-comparison {
			grid-template-columns: 1fr;
		}

		.pipeline-vs {
			padding-top: 0;
		}

		.blog-post {
			padding: 1rem;
		}

		.pattern-table {
			font-size: 0.8rem;
		}
	}
</style>
