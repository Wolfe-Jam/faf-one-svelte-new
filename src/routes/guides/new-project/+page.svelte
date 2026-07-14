<script>
	import PageActions from '$lib/components/PageActions.svelte';

	let copiedCommand = $state('');

	async function copyCommand(cmd, id) {
		await navigator.clipboard.writeText(cmd);
		copiedCommand = id;
		setTimeout(() => (copiedCommand = ''), 2000);
	}

	const steps = [
		{
			num: 1,
			title: 'Initial Extraction',
			file: 'faf init OR faf git',
			when: 'First step — choose based on context',
			why: 'Extract initial context from your project or any GitHub repo.'
		},
		{
			num: 2,
			title: 'Auto-Enhance',
			file: 'faf auto',
			when: 'After initial extraction',
			why: 'Turbo-Cat discovers 153+ formats. Grows from 30% → 80%.'
		},
		{
			num: 3,
			title: 'The Last 10–20%',
			file: 'faf go',
			when: 'When score is 80–90% (optional if already 100%)',
			why: 'Usually fills 1–2 missing 6 Ws. Stack detection is robust — blocker is almost always human context.'
		}
	];
</script>

<svelte:head>
	<title>New Project Guide — Start with AI-Ready Context | FAF</title>
	<meta
		name="description"
		content="Step-by-step guide to starting a new project with AI-ready context from day one. README first, .faf second, code third."
	/>
	<meta property="og:title" content="New Project Guide" />
	<meta
		property="og:description"
		content="Three commands from README to championship-grade AI context."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="page">
	<section class="hero">
		<h1>New <span class="faf">Project</span> Guide</h1>
		<p class="sub">Start with AI-ready context from day one</p>
		<div class="hero-receipts">
			<span class="receipt">faf init</span>
			<span class="receipt">faf auto</span>
			<span class="receipt">faf go</span>
		</div>
		<p class="golden-rule">README first, .faf second, code third.</p>
	</section>

	<section class="content">
		<h2>Why this order matters</h2>
		<div class="cards">
			<div class="card">
				<h3>README first</h3>
				<p>
					Forces you to articulate purpose before code. Human-readable definition that you can't fake.
				</p>
			</div>
			<div class="card">
				<h3>project.faf second</h3>
				<p>AI-readable version of your README context. Structured YAML that machines can parse.</p>
			</div>
			<div class="card">
				<h3>Code third</h3>
				<p>
					Implementation follows definition. AI has context to help from the start. No documentation
					debt.
				</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>README generation tools</h2>
		<p class="section-intro">Don't have a README yet? Two easy options:</p>
		<div class="cards">
			<div class="card accent-cyan">
				<h3>Web tool: The 6 Ws</h3>
				<p>Fill out a simple form answering who/what/why/where/when/how. Copy the generated README.</p>
				<a href="https://www.faf.one/6ws" class="inline-link" target="_blank" rel="noopener noreferrer">
					faf.one/6ws →
				</a>
			</div>
			<div class="card accent-cyan">
				<h3>CLI tool</h3>
				<p>Interactive command-line tool that asks the 6 Ws and generates a README for you.</p>
				<pre><code>faf readme</code></pre>
				<p class="note">Asks questions, writes README.md instantly</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>The 3 magic tools</h2>
		<p class="section-intro">Simple, powerful, championship-grade workflow.</p>
		<div class="cards">
			{#each steps as step}
				<div class="card step-card">
					<div class="step-head">
						<span class="step-num">{step.num}</span>
						<div>
							<h3>{step.title}</h3>
							<p class="step-file">{step.file}</p>
						</div>
					</div>
					<div class="meta">
						<span><strong>When:</strong> {step.when}</span>
						<span><strong>Why:</strong> {step.why}</span>
					</div>

					{#if step.num === 1}
						<div class="code-block">
							<p class="code-label">Decision: choose your path</p>
							<div class="decision">
								<h4>Have a GitHub repo URL?</h4>
								<div class="command-row">
									<pre><code>npx faf-cli git https://github.com/facebook/react</code></pre>
									<button
										class="copy-btn"
										onclick={() =>
											copyCommand(
												'npx faf-cli git https://github.com/facebook/react',
												'git'
											)}
									>
										{copiedCommand === 'git' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<p class="note">2 seconds → 30–50% score. No clone needed.</p>
							</div>
							<p class="or">OR</p>
							<div class="decision">
								<h4>Working locally?</h4>
								<div class="command-row">
									<pre><code>faf init</code></pre>
									<button class="copy-btn" onclick={() => copyCommand('faf init', 'init')}>
										{copiedCommand === 'init' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<p class="note">Extracts from local files (README, package.json, etc.)</p>
							</div>
						</div>
					{/if}

					{#if step.num === 2}
						<div class="code-block">
							<div class="command-row">
								<pre><code>faf auto</code></pre>
								<button class="copy-btn" onclick={() => copyCommand('faf auto', 'auto')}>
									{copiedCommand === 'auto' ? 'Copied!' : 'Copy'}
								</button>
							</div>
							<ul class="bullets">
								<li>Turbo-Cat discovers 153+ format types</li>
								<li>Auto-fills detected stack slots</li>
								<li>Grows score from 30% → 80%</li>
								<li>Zero questions asked — fully automated</li>
							</ul>
						</div>
					{/if}

					{#if step.num === 3}
						<div class="code-block">
							<div class="command-row">
								<pre><code>faf go</code></pre>
								<button class="copy-btn" onclick={() => copyCommand('faf go', 'go')}>
									{copiedCommand === 'go' ? 'Copied!' : 'Copy'}
								</button>
							</div>
							<ul class="bullets">
								<li>Usually fills 1–2 missing 6 Ws (who/what/why/where/when/how)</li>
								<li>Stack detection is robust — blocker is human context</li>
								<li>80–90% → 100% ✪ Trophy</li>
								<li>Skip if <code>faf auto</code> already got you to 100%</li>
							</ul>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<section class="content">
		<h2>Score progression</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>Step</th>
						<th>Command</th>
						<th>Score</th>
						<th>What happens</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td><code>faf init</code> or <code>faf git</code></td>
						<td><strong>30–50%</strong></td>
						<td>Initial extraction from README + package files</td>
					</tr>
					<tr>
						<td>2</td>
						<td><code>faf auto</code></td>
						<td><strong>80%</strong></td>
						<td>Turbo-Cat auto-discovers formats and fills slots</td>
					</tr>
					<tr>
						<td>3</td>
						<td><code>faf go</code></td>
						<td><strong>100% ✪</strong></td>
						<td>Interactive polish to championship grade</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="content">
		<h2>AI-specific context files</h2>
		<p class="section-intro">
			<code>project.faf</code> works with all AIs. Each AI also has its own prose version:
		</p>
		<div class="cards three-up">
			<div class="card">
				<h3>CLAUDE.md</h3>
				<p>For Anthropic Claude</p>
				<code>faf bi-sync</code>
			</div>
			<div class="card">
				<h3>GEMINI.md</h3>
				<p>For Google Gemini</p>
				<code>faf gemini</code>
			</div>
			<div class="card">
				<h3>project.faf</h3>
				<p>Universal (all AIs)</p>
				<code>Always authored</code>
			</div>
		</div>
		<div class="callout">
			<p><strong>Tip:</strong> <code>project.faf</code> is the source of truth. AI-specific files are authored from it.</p>
		</div>
	</section>

	<section class="content">
		<h2>Common mistakes</h2>
		<div class="cards">
			<div class="card bad">
				<h3>✗ Skipping the magic tools</h3>
				<pre><code>faf init
# Stop here, start coding
# Score: 30% (incomplete)</code></pre>
				<p><strong>Problem:</strong> Missing 70% of potential context. <code>faf auto</code> and <code>faf go</code> are free wins.</p>
			</div>
			<div class="card bad">
				<h3>✗ Using faf init on GitHub repos</h3>
				<pre><code>git clone https://github.com/facebook/react
cd react
faf init  # Slow! Wrong tool!</code></pre>
				<p><strong>Problem:</strong> Use <code>faf git</code> instead — no clone needed, 2 seconds.</p>
			</div>
			<div class="card good">
				<h3>✓ All 3 magic tools</h3>
				<pre><code>faf init  # or: faf git &lt;url&gt;
faf auto
faf go
# Result: 100% ✪</code></pre>
				<p><strong>Result:</strong> Championship-grade AI context in 3 commands.</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Quick reference</h2>
		<div class="faq">
			<div class="faq-item highlight">
				<h3>What blocks 100%?</h3>
				<p>
					With a <strong>good README</strong>, <code>faf auto</code> can often reach 100% without
					<code>faf go</code>. <code>faf git</code> on well-documented repos can score 100% on its own.
				</p>
				<p>
					<strong>When stuck at 80–90%:</strong> It's very often 1–2 missing 6 Ws. Tech stack detection
					is robust — the blocker is almost always human context. <code>faf go</code> asks targeted
					questions and you're at 100%.
				</p>
			</div>
			<div class="faq-item">
				<h3>The decision tree</h3>
				<ul>
					<li>Have a GitHub URL? → <code>faf git</code> (might be 100% already)</li>
					<li>Working locally? → <code>faf init</code> then <code>faf auto</code></li>
					<li>Want to polish? → <code>faf go</code> (if not already 100%)</li>
				</ul>
			</div>
			<div class="faq-item">
				<h3>One-liner</h3>
				<p class="one-liner">faf init → faf auto → faf go = 100% ✪</p>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>Next steps</h2>
		<div class="cards">
			<a
				href="https://docs.faf.one/getting-started"
				class="card link-card"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h3>Existing project?</h3>
				<p>Use <code>faf git</code> or <code>faf auto</code> to add context to any repo</p>
				<span class="card-cta">→</span>
			</a>
			<a href="/try" class="card link-card">
				<h3>Try it now</h3>
				<p>Author context for any GitHub repo in 2 seconds</p>
				<span class="card-cta">→</span>
			</a>
			<a
				href="/guides/dogfooding"
				class="card link-card"
			>
				<h3>Dogfooding guides</h3>
				<p>Full 8-step workflow for README-first foundation</p>
				<span class="card-cta">→</span>
			</a>
			<a
				href="https://docs.faf.one"
				class="card link-card"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h3>Full documentation</h3>
				<p>Complete reference for all FAF commands</p>
				<span class="card-cta">→</span>
			</a>
		</div>
	</section>

	<PageActions
		headline="README first, .faf second, code third."
		point1="Three commands: faf init → faf auto → faf go."
		point2="Championship-grade AI context from day one."
		url="https://faf.one/guides/new-project"
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
		margin-bottom: 1rem;
	}

	.receipt {
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--faf-dark);
		background: var(--faf-gray-light);
		padding: 0.35rem 0.65rem;
		border-radius: 6px;
	}

	.golden-rule {
		font-size: 1.05rem;
		font-weight: 700;
		font-style: italic;
		color: var(--faf-orange);
		margin: 0;
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

	.section-intro {
		text-align: center;
		font-size: 0.95rem;
		color: var(--faf-gray);
		margin: -0.5rem 0 1.25rem;
		line-height: 1.6;
	}

	.cards {
		display: grid;
		gap: 1rem;
	}

	.three-up {
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}

	.card {
		background: var(--faf-surface);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
	}

	.card.accent-cyan {
		border-left-color: var(--faf-cyan-dark);
	}

	.card.bad {
		border-left-color: #dc2626;
		background: var(--faf-card-error-bg);
	}

	.card.good {
		border-left-color: #16a34a;
		background: var(--faf-card-success-bg);
	}

	.link-card {
		text-decoration: none;
		color: inherit;
		transition: transform 0.15s ease;
	}

	.link-card:hover {
		transform: translateY(-2px);
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

	.card code {
		display: inline-block;
		margin-top: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--faf-orange);
		background: var(--faf-gray-light);
		padding: 0.35rem 0.65rem;
		border-radius: 6px;
	}

	.card-cta {
		display: block;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--faf-orange);
		margin-top: 0.75rem;
	}

	.inline-link {
		display: inline-block;
		margin-top: 0.75rem;
		font-weight: 700;
		color: var(--faf-orange);
		text-decoration: none;
	}

	.inline-link:hover {
		text-decoration: underline;
	}

	.note {
		font-size: 0.85rem !important;
		color: var(--faf-gray) !important;
		font-style: italic;
	}

	.step-head {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	.step-num {
		width: 2rem;
		height: 2rem;
		background: var(--faf-orange);
		color: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		flex-shrink: 0;
	}

	.step-file {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--faf-cyan-text);
		margin: 0.25rem 0 0 !important;
	}

	.meta {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-size: 0.85rem;
		color: var(--faf-gray);
		margin-bottom: 0.75rem;
	}

	.code-block {
		background: var(--faf-section-alt);
		border: 1px solid var(--faf-light-gray);
		border-radius: 8px;
		padding: 1rem;
		margin-top: 0.5rem;
	}

	.code-label {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--faf-cyan-text);
		margin: 0 0 0.75rem;
	}

	.decision h4 {
		font-size: 0.95rem;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.or {
		text-align: center;
		font-weight: 700;
		color: var(--faf-orange);
		margin: 0.75rem 0;
	}

	.command-row {
		display: flex;
		align-items: stretch;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.command-row pre {
		flex: 1;
		min-width: 0;
		margin: 0;
	}

	.copy-btn {
		padding: 0.5rem 0.85rem;
		background: var(--faf-orange);
		color: #fff;
		border: none;
		border-radius: 6px;
		font-weight: 700;
		font-size: 0.75rem;
		cursor: pointer;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		align-self: stretch;
	}

	.copy-btn:hover {
		background: var(--faf-orange-dark);
	}

	.bullets {
		margin: 0.75rem 0 0 1.1rem;
		padding: 0;
	}

	.bullets li {
		font-size: 0.9rem;
		color: var(--faf-dark);
		line-height: 1.6;
		margin-bottom: 0.35rem;
	}

	.callout {
		margin-top: 1rem;
		background: var(--faf-orange-tint);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1rem 1.25rem;
	}

	.callout p {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
		margin: 0;
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
		padding: 0.75rem 1rem;
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

	.faq-item.highlight {
		border-left-color: var(--faf-cyan-dark);
	}

	.faq-item h3 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}

	.faq-item p,
	.faq-item li {
		font-size: 0.95rem;
		color: var(--faf-dark);
		line-height: 1.65;
	}

	.faq-item p {
		margin: 0.5rem 0 0;
	}

	.faq-item ul {
		margin: 0.5rem 0 0 1.25rem;
	}

	.one-liner {
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--faf-cyan-text) !important;
		font-size: 1.05rem !important;
		margin: 0 !important;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.9rem;
		}

		.command-row {
			flex-direction: column;
		}

		.copy-btn {
			width: 100%;
		}
	}
</style>