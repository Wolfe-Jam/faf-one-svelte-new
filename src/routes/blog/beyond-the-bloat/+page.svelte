<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>Beyond the Bloat: How FAF Transforms AI Context from Liability to Superpower | FAF</title>
	<meta name="description" content="Two pivotal papers pair critique with blueprint. The arXiv AGENTS.md study exposes prose bloat. FAF provides the structured fix. Facts first, logic follows." />
	<meta property="og:title" content="Beyond the Bloat: How FAF Transforms AI Context from Liability to Superpower" />
	<meta property="og:description" content="ArXiv exposes the AGENTS.md bloat problem. FAF solves it with structured Project DNA. Two papers, one roadmap." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://www.faf.one/blog-assets/beyond-the-bloat-hero.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://www.faf.one/blog-assets/beyond-the-bloat-hero.jpg" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Beyond the Bloat
		</div>

		<h1>Beyond the Bloat</h1>
		<p class="subtitle">How FAF Transforms AI Context from Liability to Superpower</p>
		<p class="tagline">FAF defines. AI interprets.</p>
		<div class="meta">
			<time datetime="2026-02-24">February 24, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category research">Research</span>
			<span class="separator">&bull;</span>
			<span class="reading-time">10 min read</span>
		</div>
		<div class="byline">By English James | <a href="https://twitter.com/wolfe_jam">@wolfe_jam</a> | <a href="https://wolfejam.dev">wolfejam.dev</a></div>
	</header>

	<div class="hero-image">
		<img src="/blog-assets/beyond-the-bloat-hero.jpg" alt="Chaos of dev tools and frameworks on the left, clean .faf on the right — noise to clarity" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Two complementary, pivotal papers from early 2026 challenge how we think about AI context. The arXiv study proves prose context files hurt performance and inflate cost. The FAF paper provides the structured fix. Together they signal: ditch the junk drawer, embrace standards.
			</p>
		</section>

		<!-- ============================================ -->
		<!-- INTRO -->
		<!-- ============================================ -->
		<section>
			<p>In the fast-evolving world of AI-assisted coding, context is king&mdash;or so we thought. The arXiv paper <em>&ldquo;Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?&rdquo;</em> (arXiv:2602.11988) delivers a wake-up call, revealing how popular context files like AGENTS.md often hinder rather than help. My Zenodo-archived work, <em>&ldquo;Format-Driven AI Context Architecture: The .faf Standard for Persistent Project Understanding&rdquo;</em> (DOI: 10.5281/zenodo.18251362), builds on this by proposing FAF&mdash;a user-owned, IANA-registered standard that eliminates bloat while ensuring persistent, portable understanding.</p>

			<p>These papers aren't rivals &mdash; they're complementary. The arXiv study spotlights the problems, FAF provides the fix. Facts first, logic follows.</p>
		</section>

		<!-- ============================================ -->
		<!-- ARXIV PAPER -->
		<!-- ============================================ -->
		<section>
			<h2>The Wake-Up Call: The arXiv Paper</h2>

			<p>Published February 12, 2026, this paper by researchers at ETH Zurich's Secure, Reliable, and Intelligent Systems Lab rigorously tests a widespread practice: using repository-level context files (e.g., AGENTS.md, CLAUDE.md) to guide coding agents.</p>

			<h3>Key Methodology</h3>

			<p>The authors introduce AGENTbench, a novel benchmark curating real-world issues from repositories with developer-committed context files. They complement this with SWE-bench Lite (established tasks from popular repos). Evaluations span multiple coding agents and LLMs for generating files.</p>

			<ul>
				<li><strong>Experiments:</strong> Compare agent performance with/without context files. LLM-generated files use varied prompts/models; developer files are real-world samples.</li>
				<li><strong>Metrics:</strong> Task success rates, inference costs (tokens), behavioral traces (exploration, testing depth).</li>
				<li><strong>Scale:</strong> Tested on 100+ repos, multiple LLMs&mdash;robust and reproducible.</li>
			</ul>

			<blockquote>
				&ldquo;Across multiple coding agents and LLMs, we find that context files tend to reduce task success rates compared to providing no repository context, while also increasing inference cost by over 20%.&rdquo;
			</blockquote>

			<h3>Core Findings</h3>

			<div class="findings-grid">
				<div class="finding-card finding-bad">
					<div class="finding-number">-3%</div>
					<div class="finding-label">LLM-Generated</div>
					<div class="finding-detail">Performance drop from machine-written context files</div>
				</div>
				<div class="finding-card finding-neutral">
					<div class="finding-number">+4%</div>
					<div class="finding-label">Human-Written</div>
					<div class="finding-detail">Marginal gain from developer-authored files</div>
				</div>
				<div class="finding-card finding-bad">
					<div class="finding-number">+20%</div>
					<div class="finding-label">Cost Spike</div>
					<div class="finding-detail">Inference cost increase from broader exploration</div>
				</div>
				<div class="finding-card finding-bad">
					<div class="finding-number">Bloat</div>
					<div class="finding-label">Root Cause</div>
					<div class="finding-detail">Unnecessary requirements make tasks harder</div>
				</div>
			</div>

			<p><strong>Limitations:</strong> Focuses on coding agents; doesn't test structured formats beyond MD. <strong>Strengths:</strong> Real-world data, agent trace analysis&mdash;a foundational critique that flips assumptions.</p>

			<p>It validates what developers already feel &mdash; <a href="https://t3.gg">Theo Browne (t3.gg)</a> dissected this paper publicly, spotlighting how AI crushes structured data like package.json but struggles with prose bloat. This sets the stage for better solutions.</p>
		</section>

		<!-- ============================================ -->
		<!-- DIAGRAM 3: THE PROSE PROBLEM (Warning Box) -->
		<!-- ============================================ -->
		<section>
			<div class="prose-warning">
				<div class="warning-stripe"></div>
				<div class="warning-content">
					<h3>Why Prose Is the Problem</h3>
					<p>In addition to bloat, MDs are <strong>subjective</strong>, <strong>unvalidated</strong>, and potentially <strong>misleading</strong>. Agents follow them literally &mdash; even when they're wrong. The arXiv data proves it: prose context is a disguised liability. FAF replaces prose with structure. That's not a style choice &mdash; it's a common-sense safety decision.</p>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- FAF PAPER -->
		<!-- ============================================ -->
		<section>
			<h2>The Solution Blueprint: The FAF Paper</h2>

			<p>My Zenodo paper (published January 15, 2026, on CERN's open platform) addresses the sovereignty gap in AI context. It proposes FAF as a portable, user-controlled format&mdash;think &ldquo;package.json for your project's context.&rdquo;</p>

			<h3>Key Methodology</h3>

			<p>Drawing from 27,000+ ecosystem downloads and 1,051+ tests, the paper validates FAF across platforms (Claude, OpenAI Codex, Google Gemini). It includes schema specs, performance benchmarks (e.g., 220x faster binary loading), and GDPR alignment analysis.</p>

			<ul>
				<li><strong>Structure:</strong> YAML-based with sections for mission, tech_stack, key_files, context (architecture, conventions).</li>
				<li><strong>Tools:</strong> faf-cli (41 commands), MCP server integration (Anthropic-approved merge #2759), Rust SDK.</li>
				<li><strong>Validation:</strong> Cross-platform scores (9.0-9.5/10), IANA registration (<code>application/vnd.faf+yaml</code>, Oct 2025).</li>
				<li><strong>Binary Companion:</strong> .fafb for efficient loading&mdash;32-byte header, priority sections for token budgets.</li>
			</ul>

			<blockquote>
				&ldquo;We present FAF... an IANA-registered format that enables user-controlled, portable AI context. Like Solid pods for personal data, FAF files give users sovereignty over their AI context.&rdquo;
			</blockquote>

			<h3>Core Contributions</h3>

			<div class="contributions-grid">
				<div class="contrib-card">
					<div class="contrib-icon">&#x1f512;</div>
					<h4>User Ownership</h4>
					<p>Local files invert vendor control&mdash;transparent, portable, no cloud dependency.</p>
				</div>
				<div class="contrib-card">
					<div class="contrib-icon">&#x26a1;</div>
					<h4>Performance</h4>
					<p>91% token reclaim, minimal &lt;2KB size. Scoring system ensures AI-readiness.</p>
				</div>
				<div class="contrib-card">
					<div class="contrib-icon">&#x1f6e1;</div>
					<h4>Privacy</h4>
					<p>Aligns with GDPR (access, portability, erasure); enables offline workflows.</p>
				</div>
				<div class="contrib-card">
					<div class="contrib-icon">&#x1f30d;</div>
					<h4>Ecosystem</h4>
					<p>8 SDKs, Anthropic MCP merge (PR #2759), enterprise features.</p>
				</div>
			</div>

			<p>FAF isn't just theory; it's live infrastructure enhancing AI tools today.</p>
		</section>

		<!-- ============================================ -->
		<!-- DIAGRAM 4: FAF SCHEMA HIERARCHY -->
		<!-- ============================================ -->
		<section>
			<h2>The Structure</h2>
			<p>Human-readable YAML as the single source of truth, branching to AI-specific outputs:</p>

			<div class="schema-diagram">
				<div class="schema-root">
					<span class="schema-file">.faf</span>
					<span class="schema-desc">Project DNA</span>
				</div>
				<div class="schema-tree">
					<div class="schema-branch">
						<span class="branch-key">faf_version</span>
						<span class="branch-val">"2.5.0"</span>
					</div>
					<div class="schema-branch">
						<span class="branch-key">project</span>
						<span class="branch-val">{`{name, mission}`}</span>
					</div>
					<div class="schema-branch">
						<span class="branch-key">tech_stack</span>
						<span class="branch-val">{`{languages, frameworks}`}</span>
					</div>
					<div class="schema-branch">
						<span class="branch-key">key_files</span>
						<span class="branch-val">{`[{path, purpose}]`}</span>
					</div>
					<div class="schema-branch">
						<span class="branch-key">context</span>
						<span class="branch-val">{`{architecture, conventions}`}</span>
					</div>
					<div class="schema-branch schema-branch-output">
						<span class="branch-key">outputs</span>
						<span class="branch-val">{`{claude_md, agents_md, cursorrules, gemini_md}`}</span>
					</div>
				</div>
				<div class="schema-outputs">
					<div class="output-node output-claude">CLAUDE.md</div>
					<div class="output-node output-agents">AGENTS.md</div>
					<div class="output-node output-cursor">.cursorrules</div>
					<div class="output-node output-gemini">GEMINI.md</div>
				</div>
				<p class="diagram-caption">One source. Four native formats. Zero drift.</p>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- DIAGRAM 1: PIPELINE COMPARISON -->
		<!-- ============================================ -->
		<section>
			<h2>Head-to-Head: How FAF Elevates the arXiv Findings</h2>

			<p>The arXiv paper exposes the pitfalls of unstructured MD files. FAF directly addresses them. Here's how they complete each other:</p>

			<div class="pipeline-comparison">
				<div class="pipeline pipeline-bad">
					<h3>Traditional MD Flow</h3>
					<div class="pipeline-steps">
						<div class="pipe-step">
							<span class="pipe-label">Repo</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-bad">
							<span class="pipe-label">Bloated MD</span>
							<span class="pipe-detail">Prose, subjective, unvalidated</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-bad">
							<span class="pipe-label">Agent Explores Broadly</span>
							<span class="pipe-detail">+20% cost, over-testing</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-result pipe-result-bad">
							<span class="pipe-stat">-3% Performance</span>
							<span class="pipe-verdict">Task harder, cost higher</span>
						</div>
					</div>
				</div>

				<div class="pipeline-vs">vs</div>

				<div class="pipeline pipeline-good">
					<h3>FAF Standard Flow</h3>
					<div class="pipeline-steps">
						<div class="pipe-step">
							<span class="pipe-label">Repo</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-good">
							<span class="pipe-label">.faf (Project DNA)</span>
							<span class="pipe-detail">Structured, scored, validated</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-step pipe-step-good">
							<span class="pipe-label">Lean Outputs</span>
							<span class="pipe-detail">Agent focuses on essentials</span>
						</div>
						<div class="pipe-arrow">&darr;</div>
						<div class="pipe-result pipe-result-good">
							<span class="pipe-stat">Persistent Context</span>
							<span class="pipe-verdict">Minimal, portable, fast</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- DIAGRAM 2: HEAD-TO-HEAD TABLE -->
		<!-- ============================================ -->
		<section>
			<div class="h2h-table-wrapper">
				<table class="h2h-table">
					<thead>
						<tr>
							<th>Aspect</th>
							<th class="col-bad">arXiv Critique</th>
							<th class="col-good">FAF Solution</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="aspect-label">Bloat</td>
							<td>MD files add noise, confusing agents with generic docs</td>
							<td>Structured YAML fields enforce minimal, essential context&mdash;compiler trims fluff, scoring flags low-quality</td>
						</tr>
						<tr>
							<td class="aspect-label">Success Rates</td>
							<td>-3% to +4% marginal; over-exploration hurts</td>
							<td>Empirical +6.7x response speed; priority loading fits token windows, focusing agents on essentials</td>
						</tr>
						<tr>
							<td class="aspect-label">Costs</td>
							<td>+20% inference from broader traces</td>
							<td>Binary .fafb parses 220x faster; minimal size (&lt;1K tokens) cuts overhead</td>
						</tr>
						<tr>
							<td class="aspect-label">Human vs LLM</td>
							<td>Humans slight edge, but still risky</td>
							<td>Auto-gen lean outputs from .faf project DNA; human-verified timestamps ensure accountability</td>
						</tr>
						<tr>
							<td class="aspect-label">Portability</td>
							<td>Vendor-siloed (e.g., .cursorrules only for Cursor)</td>
							<td>IANA-standard, cross-AI (Claude/Grok/Gemini); user-owned like Solid pods&mdash;no lock-in</td>
						</tr>
						<tr>
							<td class="aspect-label">Exploration</td>
							<td>Encourages over-testing, lowering success</td>
							<td>Contextual primitives guide without mandating&mdash;minimal requirements by design</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>arXiv urges <em>&ldquo;human-written context files should describe only minimal requirements.&rdquo;</em> FAF delivers: One .faf (Project DNA for any AI), multiple expressions (CLAUDE.md, AGENTS.md, .cursorrules, .windsurf)&mdash;playbook, not rulebook.</p>

			<div class="benchmark-note">
				<strong>Note:</strong> ArXiv metrics measure coding agent task resolution rates. FAF metrics measure AI-Readiness &mdash; persistent project context scoring as defined in Anthropic's MCP ecosystem (merge #2759). Complementary benchmarks, not direct comparisons.
			</div>
		</section>

		<!-- ============================================ -->
		<!-- CONCLUSION -->
		<!-- ============================================ -->
		<section>
			<h2>The Future of AI Context</h2>

			<p>The arXiv paper is a foundational critique &mdash; credit to the authors for AGENTbench and their data-driven debunking. My FAF paper is the next chapter, enhancing those insights into infrastructure. Together, they signal: ditch the junk drawer, embrace standards.</p>

			<div class="cta-section">
				<h3>Try FAF</h3>
				<div class="terminal-block">
					<code>npm i faf-cli</code>
					<code>faf init</code>
					<code>faf bi-sync --all</code>
				</div>
				<p>Cite these papers. Build on them. Make every repo AI-ready.</p>
				<p>Questions? DM <a href="https://twitter.com/wolfe_jam">@wolfe_jam</a>.</p>
			</div>
		</section>

		<!-- ============================================ -->
		<!-- REFERENCES -->
		<!-- ============================================ -->
		<section>
			<h2>References</h2>
			<ol class="references">
				<li>Gloaguen, T., M&uuml;ndler, N., M&uuml;ller, M., Raychev, V., &amp; Vechev, M. (2026). <em>Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?</em> <a href="https://arxiv.org/abs/2602.11988">arXiv:2602.11988</a>.</li>
				<li>Wolfe Harrison, J. (2026). <em>Format-Driven AI Context Architecture: The .faf Standard for Persistent Project Understanding.</em> <a href="https://zenodo.org/records/18251362">DOI: 10.5281/zenodo.18251362</a>.</li>
			</ol>

			<h3>Further Reading</h3>
			<ul>
				<li><a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml">Official IANA Media Type Registration for FAF</a></li>
				<li><a href="https://grokipedia.com/page/faf-file-format#faf-file-format">Grokipedia Entry on FAF File Format</a></li>
			</ul>
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
	/* Hero Image */
	/* ======================================== */
	.hero-image {
		margin: 0 -1rem 2.5rem -1rem;
		border-radius: 10px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
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
	/* Findings Grid (arXiv numbers) */
	/* ======================================== */
	.findings-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.finding-card {
		background: #111;
		border-radius: 10px;
		padding: 1.25rem 1rem;
		text-align: center;
	}

	.finding-number {
		font-size: 1.8rem;
		font-weight: 800;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		line-height: 1.2;
	}

	.finding-bad .finding-number { color: #ff4444; }
	.finding-neutral .finding-number { color: #eab308; }

	.finding-label {
		display: block;
		color: #aaa;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0.25rem 0;
	}

	.finding-detail {
		color: #777;
		font-size: 0.75rem;
		line-height: 1.4;
	}

	/* ======================================== */
	/* DIAGRAM 3: Prose Warning Box */
	/* ======================================== */
	.prose-warning {
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

	/* ======================================== */
	/* Contributions Grid (FAF paper) */
	/* ======================================== */
	.contributions-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.contrib-card {
		background: #fafafa;
		border: 1px solid #e0e0e0;
		border-radius: 10px;
		padding: 1.25rem;
	}

	.contrib-icon {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.contrib-card h4 {
		margin: 0 0 0.25rem 0;
		font-size: 1rem;
		color: #111;
	}

	.contrib-card p {
		margin: 0;
		font-size: 0.85rem;
		color: #555;
		line-height: 1.5;
	}

	/* ======================================== */
	/* DIAGRAM 4: Schema Hierarchy */
	/* ======================================== */
	.schema-diagram {
		background: #0d1117;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}

	.schema-root {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.schema-file {
		display: inline-block;
		background: #FF6B35;
		color: white;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-weight: 800;
		font-size: 1.2rem;
		padding: 0.5rem 1.25rem;
		border-radius: 8px;
	}

	.schema-desc {
		display: block;
		color: #8b949e;
		font-size: 0.85rem;
		margin-top: 0.35rem;
		font-style: italic;
	}

	.schema-tree {
		max-width: 500px;
		margin: 0 auto 1.5rem auto;
	}

	.schema-branch {
		display: flex;
		align-items: center;
		padding: 0.4rem 0;
		border-left: 2px solid #30363d;
		margin-left: 2rem;
		padding-left: 1rem;
	}

	.schema-branch::before {
		content: '├─';
		color: #30363d;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		margin-right: 0.5rem;
		font-size: 0.85rem;
	}

	.schema-branch:last-child::before {
		content: '└─';
	}

	.schema-branch-output {
		border-left-color: #FF6B35;
	}

	.branch-key {
		color: #79c0ff;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.85rem;
		font-weight: 600;
		margin-right: 0.5rem;
	}

	.schema-branch-output .branch-key {
		color: #FF6B35;
	}

	.branch-val {
		color: #8b949e;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
	}

	.schema-outputs {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	.output-node {
		padding: 0.4rem 0.9rem;
		border-radius: 6px;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
		font-weight: 600;
		border: 1px solid;
	}

	.output-claude { background: rgba(0,212,212,0.1); border-color: #00D4D4; color: #00D4D4; }
	.output-agents { background: rgba(88,166,255,0.1); border-color: #58a6ff; color: #58a6ff; }
	.output-cursor { background: rgba(240,136,62,0.1); border-color: #f0883e; color: #f0883e; }
	.output-gemini { background: rgba(155,114,203,0.1); border-color: #9B72CB; color: #9B72CB; }

	.diagram-caption {
		text-align: center;
		color: #8b949e;
		font-size: 0.85rem;
		margin: 1.25rem 0 0 0;
		font-style: italic;
	}

	/* ======================================== */
	/* DIAGRAM 1: Pipeline Comparison */
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
	/* DIAGRAM 2: Head-to-Head Table */
	/* ======================================== */
	.h2h-table-wrapper {
		overflow-x: auto;
		margin: 2rem 0;
		border-radius: 10px;
		border: 1px solid #e0e0e0;
	}

	.h2h-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.h2h-table th {
		padding: 0.85rem 1rem;
		text-align: left;
		font-weight: 700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.h2h-table th:first-child {
		background: #111;
		color: #fff;
		width: 120px;
	}

	.col-bad {
		background: #1a0808;
		color: #ff8888 !important;
	}

	.col-good {
		background: #081a08;
		color: #88ff88 !important;
	}

	.h2h-table td {
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

	.h2h-table tbody tr:hover {
		background: #fafafa;
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

		.findings-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.contributions-grid {
			grid-template-columns: 1fr;
		}

		.pipeline-comparison {
			grid-template-columns: 1fr;
		}

		.pipeline-vs {
			padding-top: 0;
			transform: rotate(0deg);
		}

		.schema-branch {
			margin-left: 0.5rem;
		}

		.blog-post {
			padding: 1rem;
		}

		.h2h-table {
			font-size: 0.8rem;
		}
	}
</style>
