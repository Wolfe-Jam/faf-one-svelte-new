<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>FAF Dogfooding Guide — Standard Workflow | FAF</title>
	<meta
		name="description"
		content="How to add project.faf to any project. README first, .faf second, code third."
	/>
	<meta property="og:title" content="FAF Dogfooding — Standard Workflow" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="page">
	<section class="hero">
		<h1>Standard <span class="faf">Workflow</span></h1>
		<p class="sub">Dogfooding guide for any project type</p>
		<div class="hero-receipts">
			<span class="receipt">TypeScript</span>
			<span class="receipt">Python</span>
			<span class="receipt">Rust</span>
			<span class="receipt">Go</span>
		</div>
	</section>

	<section class="content">
		<div class="callout">
			<p class="quote">"README first, .faf second, code third."</p>
			<p>
				You can't generate meaningful AI context from an empty repository. Start with what you're
				building, then add context, then code.
			</p>
		</div>
	</section>

	<section class="content">
		<h2>Quick start</h2>
		<div class="faq">
			<div class="faq-item">
				<h3>Prerequisites</h3>
				<pre><code>npm install -g faf-cli</code></pre>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>The 8-step workflow</h2>
		<div class="cards">
			<div class="card">
				<h3>Step 1: Create your README</h3>
				<div class="meta">
					<span><strong>When:</strong> Day 1, before any code</span>
					<span><strong>Time:</strong> 5–10 minutes</span>
				</div>
				<p>Write a README that answers:</p>
				<ul>
					<li><strong>WHAT</strong> — What does this project do?</li>
					<li><strong>WHY</strong> — Why does it exist? What problem does it solve?</li>
					<li><strong>WHO</strong> — Who is building it? Who is it for?</li>
					<li><strong>HOW</strong> — How do you install/use it?</li>
				</ul>
				<pre><code># Example README.md

# My Awesome CLI

A command-line tool for managing project tasks efficiently.

## Why

Tired of juggling multiple task managers? This CLI brings everything into your terminal.

## Installation

npm install -g my-awesome-cli

## Usage

my-cli add "Write documentation"
my-cli list</code></pre>
				<p class="result"><strong>Result:</strong> Human-readable project definition</p>
			</div>

			<div class="card">
				<h3>Step 2: Add basic project structure</h3>
				<div class="meta"><span><strong>When:</strong> After README</span></div>
				<p>Create your language-specific configuration:</p>
				<pre><code># For TypeScript/JavaScript:
npm init -y

# For Python:
poetry init  # or create pyproject.toml

# For Rust:
cargo init

# For Go:
go mod init github.com/user/project</code></pre>
				<p>This gives faf-cli the context it needs to detect language, package manager, and project type.</p>
			</div>

			<div class="card">
				<h3>Step 3: Generate project.faf</h3>
				<div class="meta">
					<span><strong>Command:</strong> <code>faf init</code></span>
					<span><strong>Expected score:</strong> 30–50%</span>
				</div>
				<pre><code>cd your-project
faf init</code></pre>
				<p><strong>What happens:</strong></p>
				<ul>
					<li>Reads your README (extracts WHO, WHAT, WHY, HOW)</li>
					<li>Detects project type from files</li>
					<li>Detects stack from package files</li>
					<li>Generates <code>project.faf</code> with honest initial score</li>
				</ul>
				<pre><code>✓ Generated project.faf (42% - 9/21 slots filled)

Missing context:
  - Database (if applicable)
  - CI/CD pipeline
  - Hosting platform

Run `faf go` to improve your score!</code></pre>
				<p class="result"><strong>Result:</strong> project.faf created with 30–50% score (honest baseline)</p>
			</div>

			<div class="card">
				<h3>Step 4: Commit the foundation</h3>
				<div class="meta">
					<span><strong>When:</strong> Before writing implementation code</span>
				</div>
				<pre><code>git add README.md package.json project.faf
git commit -m "Add project foundation

- README defines purpose and usage
- package.json defines dependencies
- project.faf provides AI context (42%)

AI-ready before first line of code."</code></pre>
				<p>Records birth DNA, shows AI context is first-class, foundation committed before implementation.</p>
			</div>

			<div class="card">
				<h3>Step 5: Build your project</h3>
				<div class="meta"><span><strong>When:</strong> After foundation committed</span></div>
				<pre><code>src/
  index.ts
  cli.ts
  commands/
tests/
  cli.test.ts</code></pre>
				<p>AI assistants have context from day 1. No "add docs later" technical debt.</p>
			</div>

			<div class="card">
				<h3>Step 6: Auto-detect new context</h3>
				<div class="meta">
					<span><strong>Command:</strong> <code>faf auto</code></span>
					<span><strong>Expected score:</strong> 70–85%</span>
				</div>
				<pre><code>faf auto</code></pre>
				<p>Turbo-Cat scans your codebase (153 format types), detects frameworks and config, grows score 42% → 78%.</p>
				<pre><code>✓ Found: vitest.config.ts → Testing: Vitest
✓ Found: .github/workflows → CI/CD: GitHub Actions
✓ Found: vercel.json → Hosting: Vercel

Updated project.faf (78% - 16/21 slots filled)</code></pre>
			</div>

			<div class="card">
				<h3>Step 7: Refine to 100%</h3>
				<div class="meta">
					<span><strong>Command:</strong> <code>faf go</code></span>
					<span><strong>Target:</strong> 85%+ (◇ Bronze) or 100% (✪ Trophy)</span>
				</div>
				<pre><code>faf go</code></pre>
				<pre><code>? What database does this project use?
  › PostgreSQL
    MongoDB
    None

? Where is this deployed?
  › Vercel
    AWS
    Self-hosted</code></pre>
				<p class="result"><strong>Result:</strong> 85%+ ◇ Bronze (production-ready) or 100% ✪ Trophy (perfect)</p>
			</div>

			<div class="card">
				<h3>Step 8: Keep context fresh</h3>
				<div class="meta"><span><strong>Frequency:</strong> Before major releases</span></div>
				<pre><code># After adding new features
faf auto

# Before releases
faf go</code></pre>
				<p>Your <code>project.faf</code> stays synchronized with your codebase.</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Score progression</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>Stage</th>
						<th>Score</th>
						<th>Tier</th>
						<th>Meaning</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>After <code>faf init</code></td>
						<td>30–50%</td>
						<td>● Yellow</td>
						<td>Honest baseline</td>
					</tr>
					<tr>
						<td>After <code>faf auto</code></td>
						<td>70–85%</td>
						<td>◇ Bronze</td>
						<td>Production-ready</td>
					</tr>
					<tr>
						<td>After <code>faf go</code></td>
						<td>85–100%</td>
						<td>★ Gold / ✪ Trophy</td>
						<td>Excellent / Perfect</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="content">
		<h2>Common mistakes</h2>
		<div class="cards">
			<div class="card bad">
				<h3>✗ Code first, docs later</h3>
				<pre><code># Write 1000 lines of code...
git commit -m "Initial implementation"

# Then try to add docs
echo "# Project" > README.md
faf init  # Score: 15%</code></pre>
				<p><strong>Problem:</strong> Low score, missed context during development</p>
			</div>
			<div class="card bad">
				<h3>✗ Empty repo init</h3>
				<pre><code>mkdir new-project && cd new-project
git init
faf init  # Score: 0% - Nothing to extract!</code></pre>
				<p><strong>Problem:</strong> Can't extract WHO/WHAT/WHY from empty repo</p>
			</div>
			<div class="card bad">
				<h3>✗ Never update</h3>
				<pre><code>faf init  # 6 months ago...
# Add Vite, Vitest, Vercel, tests...
# Never run faf auto
# project.faf still shows 42% (outdated!)</code></pre>
				<p><strong>Problem:</strong> Stale context doesn't reflect current project</p>
			</div>
			<div class="card good">
				<h3>✓ Correct workflow</h3>
				<pre><code># 1. README (WHO/WHAT/WHY)
# 2. Structure — npm init -y
# 3. Generate .faf (42%) — faf init
# 4. Commit foundation
# 5. Build (weeks of work...)
# 6. Update context (78%) — faf auto
# 7. Refine before v1.0 (100%) — faf go</code></pre>
				<p><strong>Result:</strong> Perfect context from day 1, grows with your project</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Language-specific examples</h2>
		<div class="cards">
			<div class="card">
				<h3>TypeScript / Node.js</h3>
				<pre><code>npm init -y
npm install typescript @types/node
faf init
# Detects: TypeScript, npm, Node.js</code></pre>
			</div>
			<div class="card">
				<h3>Python</h3>
				<pre><code>poetry init
faf init
# Detects: Python, poetry</code></pre>
			</div>
			<div class="card">
				<h3>Rust</h3>
				<pre><code>cargo init
faf init
# Detects: Rust, cargo, Native runtime</code></pre>
			</div>
			<div class="card">
				<h3>Go</h3>
				<pre><code>go mod init github.com/user/project
faf init
# Detects: Go, go modules</code></pre>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>FAQ</h2>
		<div class="faq">
			<div class="faq-item">
				<h3>When exactly should I run <code>faf init</code>?</h3>
				<p>
					After you have a README and basic structure (package.json, Cargo.toml, etc.), but before
					writing implementation code. This gives you 30–50% initial context.
				</p>
			</div>
			<div class="faq-item">
				<h3>Can I edit project.faf manually?</h3>
				<p>Yes. It's just YAML. But <code>faf go</code> provides a nicer interactive UI.</p>
			</div>
			<div class="faq-item">
				<h3>Do I need CLAUDE.md?</h3>
				<p>
					No. <code>project.faf</code> works with all AIs. CLAUDE.md is optional for Claude-specific
					prose.
				</p>
			</div>
			<div class="faq-item">
				<h3>How often should I run <code>faf auto</code>?</h3>
				<p>
					After significant changes — new frameworks, deployment setup, testing added. Usually once
					mid-development and before releases.
				</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Key takeaways</h2>
		<div class="takeaways">
			<ol>
				<li><strong>README first</strong> — Define what you're building (WHO/WHAT/WHY)</li>
				<li><strong>project.faf second</strong> — Generate AI context with <code>faf init</code></li>
				<li><strong>Code third</strong> — Build with AI context from day 1</li>
				<li><strong>Let it grow</strong> — Use <code>faf auto</code> to detect new context</li>
				<li><strong>Refine before release</strong> — Use <code>faf go</code> to reach 85%+</li>
				<li><strong>Honest scores</strong> — 30% → 70% → 100% is normal progression</li>
				<li><strong>Keep it fresh</strong> — Update as your project evolves</li>
			</ol>
		</div>
	</section>

	<section class="content">
		<h2>Quick reference</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>Command</th>
						<th>When</th>
						<th>Purpose</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>faf init</code></td>
						<td>After README + structure</td>
						<td>Generate initial project.faf (30–50%)</td>
					</tr>
					<tr>
						<td><code>faf auto</code></td>
						<td>Mid-development</td>
						<td>Auto-detect new context (→ 70–85%)</td>
					</tr>
					<tr>
						<td><code>faf go</code></td>
						<td>Before release</td>
						<td>Interactive refinement (→ 100%)</td>
					</tr>
					<tr>
						<td><code>faf score</code></td>
						<td>Anytime</td>
						<td>Check current score</td>
					</tr>
					<tr>
						<td><code>faf bi-sync</code></td>
						<td>Optional</td>
						<td>Generate CLAUDE.md</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="content footer-section">
		<p><strong>Install:</strong> <code>npm install -g faf-cli</code></p>
		<p><strong>Docs:</strong> <a href="https://faf.one">faf.one</a></p>
		<p class="tagline">"README first, .faf second, code third."</p>
	</section>

	<PageActions
		headline="README first, .faf second, code third."
		point1="8-step workflow for any stack — honest scores from day one."
		point2="Dogfood the standard before you ship."
		url="https://faf.one/guides/dogfooding/standard"
		hashtags="AI,OpenSource,FAF"
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

	/* Common mistakes — B&W reverse-out (match new-project) */
	.card.bad {
		background: var(--faf-surface);
		border: 1px solid var(--faf-light-gray);
		border-left: 4px solid var(--faf-chrome-bg);
	}

	.card.good {
		background: var(--faf-chrome-bg);
		border: 1px solid var(--faf-chrome-bg);
		border-left: 4px solid var(--faf-chrome-bg);
		box-shadow: none;
	}

	.card.good h3,
	.card.good p,
	.card.good strong {
		color: var(--faf-chrome-fg);
	}

	.card.good pre {
		background: #1a1a1a;
		color: var(--faf-chrome-fg);
		border-color: #333;
	}

	.card h3 {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.card p,
	.card li {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
	}

	.card p {
		margin: 0.5rem 0 0;
	}

	.card ul {
		margin: 0.5rem 0 0 1.25rem;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.5rem;
		font-size: 0.85rem;
		color: var(--faf-gray);
		margin-bottom: 0.5rem;
	}

	.result {
		margin-top: 0.75rem !important;
		padding: 0.65rem 0.85rem;
		background: var(--faf-card-success-bg);
		border: 1px solid var(--faf-card-success-border);
		border-radius: 6px;
	}

	.faq {
		display: grid;
		gap: 0.85rem;
	}

	.faq-item {
		background: var(--faf-surface);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
	}

	.faq-item h3 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.faq-item p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0;
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

	pre code {
		background: none;
		padding: 0;
		color: inherit;
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

	.footer-section a {
		color: var(--faf-orange);
		text-decoration: none;
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