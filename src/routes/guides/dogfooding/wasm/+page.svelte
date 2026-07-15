<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>FAF Dogfooding Guide — WASM Workflow | FAF</title>
	<meta
		name="description"
		content="How to add project.faf + CLAUDE.md to a Rust WASM project. README first, .faf second, code third."
	/>
	<meta property="og:title" content="FAF Dogfooding — WASM Workflow" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="page">
	<section class="hero">
		<h1>WASM <span class="faf">Workflow</span></h1>
		<p class="sub">The right way to add AI context</p>
		<div class="hero-receipts">
			<span class="receipt">Rust WASM</span>
			<span class="receipt">faf-wasm-gen</span>
			<span class="receipt">Browser / edge</span>
		</div>
	</section>

	<section class="content">
		<div class="callout">
			<p class="quote">"README first, .faf second, code third."</p>
			<p>Foundation doesn't mean empty. Foundation means you know WHAT you're building.</p>
		</div>
	</section>

	<section class="content">
		<h2>The workflow</h2>
		<div class="cards">
			<div class="card">
				<h3>Step 1: Define your project (README.md)</h3>
				<div class="meta"><span><strong>When:</strong> Day 1, before any code</span></div>
				<pre><code>git init

# Write README (heredoc or editor)
# faf-wasm-gen
# Rust WASM generator for FAF
# Generate project.faf in the browser or at the edge</code></pre>
				<p>Defines WHO, WHAT, WHY. Gives AI context to extract from.</p>
				<p class="result"><strong>Result:</strong> Foundation in prose (human-readable)</p>
			</div>

			<div class="card">
				<h3>Step 2: Add basic structure</h3>
				<div class="meta"><span><strong>When:</strong> After README, before implementation</span></div>
				<pre><code>Cargo.toml          # For Rust
# OR
package.json        # For JavaScript/TypeScript
# OR
pyproject.toml      # For Python</code></pre>
				<p>Detects project type, stack, and package manager.</p>
				<p class="result"><strong>Result:</strong> Structure reveals intent</p>
			</div>

			<div class="card">
				<h3>Step 3: Generate project.faf</h3>
				<div class="meta">
					<span><strong>When:</strong> After README + structure</span>
					<span><strong>Score:</strong> 30–50%</span>
				</div>
				<pre><code>faf init</code></pre>
				<p>Reads README.md, reads package files, generates <code>project.faf</code> (YAML).</p>
				<p class="result"><strong>Result:</strong> AI-readable context file (30–50% score)</p>
			</div>

			<div class="card">
				<h3>Step 4: Generate CLAUDE.md <span class="pill">Optional</span></h3>
				<div class="meta"><span><strong>When:</strong> After project.faf exists</span></div>
				<pre><code>faf bi-sync</code></pre>
				<p>
					Only needed if working primarily with Claude. <code>project.faf</code> alone works with all
					AIs.
				</p>
			</div>

			<div class="card">
				<h3>Step 5: Commit the foundation</h3>
				<div class="meta"><span><strong>When:</strong> After .faf (and optionally CLAUDE.md)</span></div>
				<pre><code>git add README.md Cargo.toml project.faf CLAUDE.md
git commit -m "Add project foundation

- README defines purpose
- Cargo.toml defines structure
- project.faf provides AI context
- CLAUDE.md provides Claude-specific prose

AI-ready before first line of code."</code></pre>
			</div>

			<div class="card">
				<h3>Step 6: Build (implementation)</h3>
				<div class="meta"><span><strong>When:</strong> After foundation committed</span></div>
				<pre><code>src/lib.rs
tests/
# etc.</code></pre>
				<p>Definition before implementation. AI has context from day 1 of coding.</p>
			</div>

			<div class="card">
				<h3>Step 7: Grow context (during development)</h3>
				<div class="meta">
					<span><strong>When:</strong> After significant progress</span>
					<span><strong>Score:</strong> 30% → 80%</span>
				</div>
				<pre><code>faf auto</code></pre>
				<p>Turbo-Cat discovers formats (153 types), fills detected stack slots.</p>
			</div>

			<div class="card">
				<h3>Step 8: Refine (before release)</h3>
				<div class="meta">
					<span><strong>When:</strong> Before v1.0.0</span>
					<span><strong>Target:</strong> 85%+ (◇ Bronze) or 100% (✪ Trophy)</span>
				</div>
				<pre><code>faf go</code></pre>
				<p>Interactive questions, fill remaining gaps, human refinement.</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Timing summary</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>Step</th>
						<th>File</th>
						<th>When</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>README.md</td><td>Day 1</td><td>—</td></tr>
					<tr><td>2</td><td>Cargo.toml</td><td>Day 1–2</td><td>—</td></tr>
					<tr><td>3</td><td>project.faf</td><td>After docs</td><td>30–50%</td></tr>
					<tr><td>4</td><td>CLAUDE.md</td><td>Optional</td><td>—</td></tr>
					<tr><td>5</td><td>Git commit</td><td>Before code</td><td>—</td></tr>
					<tr><td>6</td><td>src/lib.rs</td><td>Implementation</td><td>—</td></tr>
					<tr><td>7</td><td>faf auto</td><td>Mid-dev</td><td>80%</td></tr>
					<tr><td>8</td><td>faf go</td><td>Pre-release</td><td>100%</td></tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="content">
		<h2>Common mistakes</h2>
		<div class="cards">
			<div class="card bad">
				<h3>✗ Code first, docs later</h3>
				<pre><code>git add src/
git commit -m "Initial implementation"
echo "# Project" > README.md
faf init  # Low score, missed context</code></pre>
				<p><strong>Problem:</strong> AI has no context during development</p>
			</div>
			<div class="card bad">
				<h3>✗ Empty repo .faf</h3>
				<pre><code>git init
faf init  # Nothing to extract from!
# Score: 5% (basically empty)</code></pre>
				<p><strong>Problem:</strong> Can't extract 6 Ws from empty repo</p>
			</div>
			<div class="card good">
				<h3>✓ Definition → documentation → implementation</h3>
				<pre><code>README.md (WHO/WHAT/WHY)
faf init → project.faf (30-50%)
src/lib.rs (code)
faf auto → 80%</code></pre>
				<p><strong>Result:</strong> AI context available from day 1</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Why this order matters</h2>
		<div class="cards">
			<div class="card">
				<h3>README first</h3>
				<p>Forces you to articulate purpose. Human-readable definition you can't fake.</p>
			</div>
			<div class="card">
				<h3>project.faf second</h3>
				<p>AI-readable version of README context. Structured YAML, machine-parseable.</p>
			</div>
			<div class="card">
				<h3>Code third</h3>
				<p>Implementation follows definition. AI has context to help from the start.</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Key takeaways</h2>
		<div class="takeaways">
			<ol>
				<li><strong>Foundation ≠ empty</strong> — You must know what you're building</li>
				<li><strong>README defines for humans</strong> — Write this first, always</li>
				<li><strong>project.faf defines for AI</strong> — Auto-extracted from README</li>
				<li><strong>CLAUDE.md is optional</strong> — Only if working with Claude primarily</li>
				<li><strong>Code comes last</strong> — Implementation follows definition</li>
				<li><strong>Context grows</strong> — 30% → 80% → 100% over time</li>
				<li><strong>Bi-sync keeps prose in sync</strong> — Edit either, both update</li>
			</ol>
		</div>
	</section>

	<section class="content footer-section">
		<p><strong>Status:</strong> Championship workflow documented</p>
		<p><strong>Tested on:</strong> faf-wasm-gen (Feb 7, 2026)</p>
		<p class="tagline">"AI needed a format, it got one — .faf"</p>
	</section>

	<PageActions
		headline="README first, .faf second, code third."
		point1="Rust WASM workflow — tested on faf-wasm-gen."
		point2="Foundation before implementation, context that grows."
		url="https://faf.one/guides/dogfooding/wasm"
		hashtags="AI,Rust,WASM,FAF"
	/>
</main>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem 2rem;
	}

	.hero {
		text-align: center;
		padding: 3.5rem 0 2.5rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 0.5rem;
	}

	.hero h1 {
		font-size: 2.4rem;
		font-weight: 800;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.faf {
		color: var(--faf-orange);
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-gray);
		margin: 0 0 1.25rem;
		font-weight: 600;
	}

	.hero-receipts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	.receipt {
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--faf-dark);
		background: var(--faf-gray-light);
		padding: 0.35rem 0.65rem;
		border-radius: 6px;
	}

	.content {
		padding: 2rem 0;
	}

	.content h2 {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 1.25rem;
		text-align: center;
	}

	.callout {
		background: var(--faf-surface);
		border: 1px solid var(--faf-light-gray);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		text-align: center;
	}

	.callout .quote {
		font-size: 1.2rem;
		font-weight: 700;
		font-style: italic;
		color: var(--faf-orange);
		margin: 0 0 0.75rem;
	}

	.callout p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0;
	}

	.cards {
		display: grid;
		gap: 1rem;
	}

	.card {
		background: var(--faf-surface);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
	}

	.card.bad {
		border-left-color: #dc2626;
		background: var(--faf-card-error-bg);
	}

	.card.good {
		border-left-color: #16a34a;
		background: var(--faf-card-success-bg);
	}

	.card h3 {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.card p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0.5rem 0 0;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.5rem;
		font-size: 0.85rem;
		color: var(--faf-gray);
		margin-bottom: 0.5rem;
	}

	.pill {
		display: inline-block;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		background: var(--faf-gray-light);
		color: var(--faf-gray);
		padding: 0.15rem 0.45rem;
		border-radius: 4px;
		vertical-align: middle;
	}

	.result {
		margin-top: 0.75rem !important;
		padding: 0.65rem 0.85rem;
		background: var(--faf-card-success-bg);
		border: 1px solid var(--faf-card-success-border);
		border-radius: 6px;
	}

	.takeaways {
		background: var(--faf-locked-dark-elevated);
		color: var(--faf-locked-dark-text);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
	}

	.takeaways ol {
		margin: 0 0 0 1.25rem;
	}

	.takeaways li {
		margin: 0.5rem 0;
		line-height: 1.65;
		font-size: 0.95rem;
	}

	.table-wrap {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	th,
	td {
		padding: 0.65rem 0.75rem;
		text-align: left;
		border-bottom: 1px solid var(--faf-light-gray);
		color: var(--faf-dark);
	}

	th {
		background: var(--faf-orange);
		color: #fff;
		font-weight: 600;
	}

	pre {
		background: var(--faf-locked-dark-elevated);
		color: var(--faf-locked-dark-text);
		padding: 0.85rem 1rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 0.5rem 0;
		font-family: var(--font-mono);
		font-size: 0.82rem;
		line-height: 1.5;
		white-space: pre-wrap;
	}

	code {
		font-family: var(--font-mono);
		font-size: 0.9em;
		color: var(--faf-orange);
	}

	.footer-section {
		text-align: center;
		border-top: 1px solid var(--faf-light-gray);
		padding-top: 2rem;
	}

	.footer-section p {
		font-size: 0.95rem;
		color: var(--faf-gray);
		margin: 0.35rem 0;
	}

	.tagline {
		font-style: italic;
		color: var(--faf-orange) !important;
		margin-top: 1rem !important;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.9rem;
		}

		.meta {
			flex-direction: column;
			gap: 0.35rem;
		}
	}
</style>