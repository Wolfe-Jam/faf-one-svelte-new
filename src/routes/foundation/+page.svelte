<script>
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Foundation 4.0 | FAF</title>
	<meta name="description" content="FAF Foundation 4.0: The Format That Became a Standard. Persistent AI context for every project." />
</svelte:head>

<div class="booklet" class:visible>
	<!-- Hero -->
	<section class="hero">
		<div class="hero-content">
			<p class="date">January 2025</p>
			<h1>FAF Foundation 4.0</h1>
			<p class="subtitle">The Format That Became a Standard</p>
			<div class="badges">
				<span class="badge iana">IANA Registered</span>
				<span class="badge anthropic">Anthropic MCP</span>
				<span class="badge downloads">20,000+ downloads</span>
			</div>
		</div>
	</section>

	<!-- The Idea -->
	<section class="section">
		<div class="section-content">
			<h2>The Idea</h2>
			<p class="lead">In late 2024, we had a simple observation: <strong>AI assistants forget.</strong></p>
			<p>Every new session, every new file, every new developer—AI starts fresh. Context leaks away. Yesterday's collaborator becomes today's stranger.</p>
			<p>We thought: what if project context could persist? Not in AI memory (which resets), but in the project itself.</p>
			<p class="highlight">That idea became <code>.faf</code>—the Foundational AI-context Format.</p>
		</div>
	</section>

	<!-- What FAF Is -->
	<section class="section alt">
		<div class="section-content">
			<h2>What FAF Is</h2>
			<div class="code-block">
				<pre>project/
├── package.json     ← npm reads this
├── project.faf      ← AI reads this
└── src/</pre>
			</div>
			<p>A <code>project.faf</code> file sits alongside your <code>package.json</code>. It contains your project's DNA: the stack, the goals, the conventions, the context that AI needs to understand <em>your</em> project specifically.</p>
			<blockquote>Every building requires a foundation. <code>project.faf</code> is AI's foundation.</blockquote>
			<p>When AI loads your <code>project.faf</code>, it doesn't guess. It knows.</p>
		</div>
	</section>

	<!-- The DAAFT Problem -->
	<section class="section daaft">
		<div class="section-content">
			<h2>Why This Matters</h2>
			<p class="lead">Without persistent context, AI operates in the <strong>DAAFT cycle</strong>:</p>
			<div class="daaft-cycle">
				<div class="cycle-item"><span class="letter d">D</span>iscover — "What is this project?"</div>
				<div class="cycle-item"><span class="letter a">A</span>ssume — "Probably React? Maybe TypeScript?"</div>
				<div class="cycle-item"><span class="letter a">A</span>sk — "Which API are you using?"</div>
				<div class="cycle-item"><span class="letter f">F</span>orget — Next session, repeat from step 1</div>
				<div class="cycle-item"><span class="letter t">T</span>okens — LOST <span class="and-time">(and TIME!)</span></div>
			</div>
			<p class="dont-be">Don't be <a href="/daaft">DAAFT</a>.</p>

			<div class="stats-comparison">
				<div class="stat-box bad">
					<h4>Without project.faf</h4>
					<p class="stat-number">~1,750</p>
					<p class="stat-label">tokens per session</p>
				</div>
				<div class="stat-box good">
					<h4>With project.faf</h4>
					<p class="stat-number">~150</p>
					<p class="stat-label">tokens once</p>
				</div>
			</div>
			<p class="result"><strong>91% fewer tokens. Zero risk. No drift.</strong></p>
		</div>
	</section>

	<!-- The Journey -->
	<section class="section">
		<div class="section-content">
			<h2>The Journey: Format to Standard</h2>
			<p>It was borne out of pure frustration—one day AI even changed the Auth system! I started looking for the Industry format... the <code>package.json</code> for AI context, if you will—to my utter astonishment there wasn't one? AI needed a format for Context, so I built one.</p>
			<p><code>.faf</code> was born. F1-inspired software engineering became <a href="/" class="cyan-link">faf.one</a>.</p>
			<p>We designed the format, then the engine. Developers started using it. Feedback came in. Edge cases emerged. We refined the structure, added scoring, built tooling, launched the CLI on npm. The rest is history.</p>

			<div class="timeline">
				<div class="timeline-item">
					<span class="timeline-date">Aug 7, 2025</span>
					<span class="timeline-event">First <code>.faf</code> created (Day 0)</span>
				</div>
				<div class="timeline-item">
					<span class="timeline-date">Sep 18, 2025</span>
					<span class="timeline-event">Claude: "This should become the standard" (Day 42)</span>
				</div>
				<div class="timeline-item">
					<span class="timeline-date">Oct 9, 2025</span>
					<span class="timeline-event"><code>faf-cli</code> launches on npm (Day 62)</span>
				</div>
				<div class="timeline-item">
					<span class="timeline-date">Oct 16, 2025</span>
					<span class="timeline-event">Anthropic merges PR #2759 into MCP registry (Day 69)</span>
				</div>
				<div class="timeline-item">
					<span class="timeline-date">Oct 30, 2025</span>
					<span class="timeline-event">IANA registers <code>application/vnd.faf+yaml</code> (Day 84)</span>
				</div>
				<div class="timeline-item">
					<span class="timeline-date">Jan 24, 2026</span>
					<span class="timeline-event">Foundation 4.0 released</span>
				</div>
			</div>

			<blockquote>.faf — The Persistent AI Context Standard</blockquote>
			<p class="full-story"><a href="/blog/42-42" class="cyan-link">Read the full story: 42|42 →</a></p>
		</div>
	</section>

	<!-- What's in 4.0 -->
	<section class="section alt">
		<div class="section-content">
			<h2>What's in Foundation 4.0</h2>

			<h3>The Core: project.faf</h3>
			<div class="code-block yaml">
				<pre>project:
  name: "my-app"
  goal: "Real-time dashboard for team metrics"
  main_language: typescript

stack:
  frontend: react
  backend: node
  database: postgres
  hosting: vercel

human_context:
  who: "Engineering team at Acme Corp"
  what: "Internal tool replacing spreadsheet workflows"
  why: "Manual reporting takes 10 hours/week"</pre>
			</div>

			<div class="features-grid">
				<div class="feature">
					<h4>Foundation, not configuration</h4>
					<p>This isn't settings. It's the ground your AI builds on.</p>
				</div>
				<div class="feature">
					<h4>Persistent, not cached</h4>
					<p>Lives in your repo, versioned, shared, permanent.</p>
				</div>
				<div class="feature">
					<h4>Universal, not tool-specific</h4>
					<p>Works with Claude, Gemini, ChatGPT, any AI.</p>
				</div>
			</div>

			<h3>Bi-Sync</h3>
			<div class="bisync-visual">
				<span class="file">project.faf</span>
				<span class="arrow">←── 8ms ──→</span>
				<span class="file">CLAUDE.md</span>
			</div>
			<p>One source of truth. Both files aligned. Context drift prevented at root cause.</p>

			<h3>Developer Loop Skills</h3>
			<div class="skills-list">
				<div class="skill"><code>/commit</code> — Context-aware git commits</div>
				<div class="skill"><code>/pr</code> — Context-aware pull requests</div>
				<div class="skill"><code>/review</code> — Context-aware code reviews</div>
			</div>
		</div>
	</section>

	<!-- Foundation Optimized -->
	<section class="section optimized">
		<div class="section-content">
			<h2>What "Foundation Optimized" Means</h2>
			<div class="status-display">
				<code>🏆 project.faf 100% | bi-sync ✓ | foundation optimized</code>
			</div>
			<ul>
				<li>Your <code>project.faf</code> is complete for your stack</li>
				<li>AI has everything it needs to understand your project</li>
				<li>No clarifying questions required</li>
				<li>Build with confidence on this base</li>
			</ul>
			<p class="tagline">The foundation is solid. Add great things above it.</p>
		</div>
	</section>

	<!-- Philosophy -->
	<section class="section">
		<div class="section-content">
			<h2>The Philosophy</h2>
			<div class="philosophy-items">
				<div class="philosophy-item">
					<h4>FAF first.</h4>
					<p>The earlier AI has your <code>project.faf</code>, the more tokens you save. Add it day one.</p>
				</div>
				<div class="philosophy-item">
					<h4>Foundation, then features.</h4>
					<p>Get to 100%, then build. Every session after that starts with full context.</p>
				</div>
				<div class="philosophy-item">
					<h4>Trust, not hope.</h4>
					<p>With FAF, you're not hoping AI understands. You know it does.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- What .faf Is NOT -->
	<section class="section honest">
		<div class="section-content">
			<h2>What .faf Is (And Isn't)</h2>
			<p class="lead">Setting honest expectations:</p>

			<div class="limitations">
				<div class="limitation not">
					<h4><span class="x">✕</span> .faf is NOT automatic</h4>
					<p>You must run <code>faf auto</code> or <code>faf init</code> to create context. AI won't automatically reference .faf without being told.</p>
				</div>
				<div class="limitation not">
					<h4><span class="x">✕</span> .faf is NOT documentation</h4>
					<p>It's <em>project</em> context, not API documentation. Use tools like context7 for library docs.</p>
				</div>
				<div class="limitation not">
					<h4><span class="x">✕</span> Scoring is a guide, not a certification</h4>
					<p>It's free software (MIT). Quality depends on your project structure. A 95% score might still miss something specific to your workflow.</p>
				</div>
			</div>

			<div class="limitations is-list">
				<div class="limitation yes">
					<h4><span class="check">✓</span> .faf IS:</h4>
					<ul class="is-items">
						<li>A format for storing project context</li>
						<li>A measurable way to track AI-readiness</li>
						<li>A tool for giving AI project-specific knowledge</li>
						<li>Free forever, open source</li>
					</ul>
				</div>
			</div>

			<div class="when-grid">
				<div class="when-box use">
					<h4>When to use .faf</h4>
					<ul>
						<li>Multi-file projects</li>
						<li>Team collaboration</li>
						<li>Persistent AI context needed</li>
						<li>Want AI to know your conventions</li>
					</ul>
				</div>
				<div class="when-box skip">
					<h4>When to skip .faf</h4>
					<ul>
						<li>Single-file scripts (overkill)</li>
						<li>Temporary prototypes</li>
						<li>Already have perfect docs</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Getting Started -->
	<section class="section cta">
		<div class="section-content">
			<h2>Getting Started</h2>
			<div class="code-block install">
				<pre># Install
npm install -g faf-cli

# Initialize (do this FIRST on any project)
cd your-project
faf auto

# Verify
faf status --oneline
# 🏆 project.faf 100% | bi-sync ✓ | foundation optimized

# Now plan. Now build.</pre>
			</div>
			<div class="cta-buttons">
				<a href="https://npmjs.com/package/faf-cli" class="btn primary" target="_blank">npm: faf-cli</a>
				<a href="https://github.com/Wolfe-Jam/faf-cli" class="btn secondary" target="_blank">GitHub</a>
				<a href="/daaft" class="btn secondary">Learn about DAAFT</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<section class="section footer">
		<div class="section-content">
			<p class="closing">FAF Foundation 4.0</p>
			<p class="closing-sub">The Persistent AI Context Standard</p>
			<p class="closing-tag">Project DNA for ANY AI</p>
		</div>
	</section>
</div>

<style>
	.booklet {
		opacity: 0;
		transition: opacity 0.5s ease;
	}

	.booklet.visible {
		opacity: 1;
	}

	/* Hero */
	.hero {
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		text-align: center;
		padding: 4rem 2rem;
	}

	.hero-content {
		max-width: 800px;
	}

	.date {
		color: #888;
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	.hero h1 {
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 800;
		color: white;
		margin-bottom: 1rem;
		line-height: 1.1;
	}

	.subtitle {
		font-size: clamp(1.2rem, 3vw, 1.8rem);
		color: #00D4D4;
		margin-bottom: 2rem;
	}

	.badges {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.badge {
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.badge.iana { background: #FF6B35; color: white; }
	.badge.anthropic { background: #00D4D4; color: #0a0a0a; }
	.badge.downloads { background: #333; color: white; border: 1px solid #555; }

	/* Sections */
	.section {
		padding: 6rem 2rem;
		background: #111;
	}

	.section.alt {
		background: #1a1a1a;
	}

	.section-content {
		max-width: 800px;
		margin: 0 auto;
		color: #ddd;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 2rem;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #FF6B35;
		margin-top: 3rem;
		margin-bottom: 1rem;
	}

	h4 {
		font-size: 1.2rem;
		font-weight: 600;
		color: white;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1.1rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
	}

	.lead {
		font-size: 1.3rem;
		color: white;
	}

	.highlight {
		color: #00D4D4;
		font-size: 1.2rem;
	}

	.cyan-link {
		color: #00D4D4;
		text-decoration: none;
		font-weight: 600;
	}

	.cyan-link:hover {
		color: #00ffff;
		text-decoration: underline;
	}

	code {
		background: #2a2a2a;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', monospace;
		color: #FF6B35;
	}

	blockquote {
		border-left: 4px solid #FF6B35;
		padding-left: 1.5rem;
		margin: 2rem 0;
		font-size: 1.2rem;
		color: #aaa;
		font-style: italic;
	}

	/* Code blocks */
	.code-block {
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 2rem 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.95rem;
		line-height: 1.6;
		color: #ddd;
	}

	.code-block.yaml pre {
		color: #00D4D4;
	}

	/* DAAFT section */
	.section.daaft {
		background: linear-gradient(135deg, #1a0a0a 0%, #1a1a1a 100%);
	}

	.daaft-cycle {
		margin: 2rem 0;
	}

	.cycle-item {
		padding: 0.8rem 0;
		font-size: 1.1rem;
		border-bottom: 1px solid #333;
	}

	.letter {
		font-weight: 800;
		font-size: 1.3rem;
		margin-right: 0.3rem;
	}

	.letter.d { color: #FF6B35; }
	.letter.a { color: #FF8555; }
	.letter.f { color: #fff; }
	.letter.t { color: #ff3333; }

	.and-time {
		color: #ff3333;
		font-weight: 600;
	}

	.dont-be {
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		margin: 2rem 0;
	}

	.dont-be a {
		color: #FF6B35;
		text-decoration: none;
	}

	.dont-be a:hover {
		text-decoration: underline;
	}

	/* Stats comparison */
	.stats-comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 3rem 0;
	}

	.stat-box {
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
	}

	.stat-box.bad {
		background: rgba(255, 51, 51, 0.1);
		border: 1px solid #ff3333;
	}

	.stat-box.good {
		background: rgba(0, 212, 212, 0.1);
		border: 1px solid #00D4D4;
	}

	.stat-box h4 {
		font-size: 1rem;
		color: #888;
		margin-bottom: 1rem;
	}

	.stat-number {
		font-size: 3rem;
		font-weight: 800;
		margin: 0;
	}

	.stat-box.bad .stat-number { color: #ff3333; }
	.stat-box.good .stat-number { color: #00D4D4; }

	.stat-label {
		font-size: 0.9rem;
		color: #888;
		margin: 0;
	}

	.result {
		text-align: center;
		font-size: 1.5rem;
		color: #00D4D4;
	}

	/* Timeline */
	.timeline {
		margin: 2rem 0;
		border-left: 2px solid #FF6B35;
		padding-left: 2rem;
	}

	.timeline-item {
		margin-bottom: 1.5rem;
	}

	.timeline-date {
		display: block;
		color: #FF6B35;
		font-weight: 600;
		font-size: 0.9rem;
		margin-bottom: 0.3rem;
	}

	.timeline-event {
		color: #ddd;
	}

	/* Features grid */
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.feature {
		background: #0a0a0a;
		padding: 1.5rem;
		border-radius: 12px;
		border: 1px solid #333;
	}

	.feature p {
		font-size: 0.95rem;
		margin: 0;
		color: #aaa;
	}

	/* Bi-sync visual */
	.bisync-visual {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 2rem 0;
		padding: 2rem;
		background: #0a0a0a;
		border-radius: 12px;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}

	.bisync-visual .file {
		background: #FF6B35;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-weight: 600;
	}

	.bisync-visual .arrow {
		color: #00D4D4;
	}

	/* Skills list */
	.skills-list {
		margin: 1.5rem 0;
	}

	.skill {
		padding: 1rem;
		background: #0a0a0a;
		border-radius: 8px;
		margin-bottom: 0.5rem;
	}

	/* Optimized section */
	.section.optimized {
		background: linear-gradient(135deg, #0a1a1a 0%, #1a1a1a 100%);
	}

	.status-display {
		background: #0a0a0a;
		padding: 1.5rem 2rem;
		border-radius: 12px;
		text-align: center;
		margin: 2rem 0;
		border: 1px solid #00D4D4;
	}

	.status-display code {
		background: none;
		font-size: 1.1rem;
		color: #00D4D4;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	ul li {
		padding: 0.8rem 0;
		padding-left: 2rem;
		position: relative;
		border-bottom: 1px solid #333;
	}

	ul li::before {
		content: "✓";
		position: absolute;
		left: 0;
		color: #00D4D4;
		font-weight: bold;
	}

	.tagline {
		text-align: center;
		font-size: 1.3rem;
		color: white;
		font-weight: 600;
		margin-top: 2rem;
	}

	/* Philosophy */
	.philosophy-items {
		display: grid;
		gap: 2rem;
		margin-top: 2rem;
	}

	.philosophy-item {
		padding: 1.5rem;
		background: #1a1a1a;
		border-radius: 12px;
		border-left: 4px solid #FF6B35;
	}

	.philosophy-item h4 {
		color: #FF6B35;
	}

	.philosophy-item p {
		margin: 0;
		color: #aaa;
	}

	/* CTA section */
	.section.cta {
		background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
	}

	.code-block.install {
		border-color: #00D4D4;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
	}

	.btn {
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.btn.primary {
		background: #FF6B35;
		color: white;
	}

	.btn.primary:hover {
		background: #e85a2c;
		transform: translateY(-2px);
	}

	.btn.secondary {
		background: #333;
		color: white;
		border: 1px solid #555;
	}

	.btn.secondary:hover {
		background: #444;
		transform: translateY(-2px);
	}

	/* What .faf Is NOT section */
	.section.honest {
		background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
	}

	.limitation.not h4 {
		color: #ff6666;
	}

	.limitation.yes h4 {
		color: #00D4D4;
	}

	.x {
		color: #ff3333;
		font-weight: 700;
		margin-right: 0.5rem;
	}

	.check {
		color: #00D4D4;
		font-weight: 700;
		margin-right: 0.5rem;
	}

	.is-list {
		margin-top: 2rem;
	}

	.is-items {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
	}

	.is-items li {
		padding: 0.5rem 0 0.5rem 1.5rem;
		position: relative;
		border-bottom: 1px solid #333;
	}

	.is-items li::before {
		content: "✓";
		position: absolute;
		left: 0;
		color: #00D4D4;
		font-weight: bold;
	}

	.when-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-top: 3rem;
	}

	.when-box {
		padding: 1.5rem;
		border-radius: 12px;
		background: #0a0a0a;
	}

	.when-box.use {
		border: 1px solid #00D4D4;
	}

	.when-box.skip {
		border: 1px solid #666;
	}

	.when-box h4 {
		margin-bottom: 1rem;
	}

	.when-box.use h4 {
		color: #00D4D4;
	}

	.when-box.skip h4 {
		color: #888;
	}

	.when-box ul {
		margin: 0;
	}

	.when-box ul li {
		padding: 0.4rem 0;
		border-bottom: none;
	}

	.when-box.skip ul li::before {
		content: "–";
		color: #666;
	}

	/* Footer */
	.section.footer {
		text-align: center;
		padding: 4rem 2rem;
		background: #0a0a0a;
	}

	.closing {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.5rem;
	}

	.closing-sub {
		font-size: 1.2rem;
		color: #00D4D4;
		margin-bottom: 0.5rem;
	}

	.closing-tag {
		color: #888;
		font-style: italic;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.hero {
			min-height: 60vh;
		}

		.section {
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.stats-comparison {
			grid-template-columns: 1fr;
		}

		.when-grid {
			grid-template-columns: 1fr;
		}

		.bisync-visual {
			flex-direction: column;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.btn {
			text-align: center;
		}
	}
</style>
