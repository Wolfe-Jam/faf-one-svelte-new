<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>.faf Officially Registered by IANA as application/vnd.faf+yaml | FAF</title>
	<meta name="description" content="IANA (Internet Assigned Numbers Authority) officially registers .faf as application/vnd.faf+yaml - the first AI context format with official media type designation." />
	<meta property="og:title" content=".faf Officially Registered by IANA as application/vnd.faf+yaml" />
	<meta property="og:description" content="From grassroots format to official Internet standard - IANA grants .faf official media type status alongside PDF, JSON, and XML." />
	<meta property="og:image" content="https://cdn.jsdelivr.net/npm/faf-cli@latest/assets/ai-human-balance-50-50.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / IANA Registration
		</div>
		<h1>.faf Officially Registered by IANA as <code>application/vnd.faf+yaml</code></h1>
		<p class="subtitle">From grassroots format to official Internet standard - IANA grants .faf the same status as PDF, JSON, and XML</p>
		<div class="meta">
			<time datetime="2025-10-31">October 31, 2025</time>
			<span class="separator">•</span>
			<span class="category">Press Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>IANA (Internet Assigned Numbers Authority)</strong>, the organization that manages global Internet protocol resources, has officially registered <code>application/vnd.faf+yaml</code> as a recognized media type. This places .faf alongside established Internet standards like PDF, JSON, and XML.
			</p>

			<div class="iana-notice">
				<h3>📧 Official IANA Notification</h3>
				<blockquote class="official-email">
					<p>Dear James,</p>
					<p>We've registered the following media type:</p>
					<p class="media-type"><strong>application/vnd.faf+yaml</strong></p>
					<p>Please see <a href="http://www.iana.org/assignments/media-types" target="_blank" rel="noopener">http://www.iana.org/assignments/media-types</a></p>
					<footer>
						— Amanda Baber, IANA Operations Sr. Manager
					</footer>
				</blockquote>
			</div>
		</section>

		<div class="uniqueness-callout">
			<h3>🏆 Unprecedented Achievement</h3>
			<p>
				.faf is the <strong>world's first and only</strong> format with both IANA registration AND an official Anthropic MCP server. After comprehensive research across both registries, no other format combines these achievements.
			</p>
			<a href="/uniqueness" class="proof-link">
				<strong>Read the Complete Research Proof →</strong>
			</a>
		</div>

		<section class="significance">
			<h2>What This Means</h2>

			<p>
				IANA registration is not a formality - it's recognition that a format has achieved Internet-scale significance. This is the same body that registered:
			</p>

			<ul class="comparison-list">
				<li><code>application/pdf</code> - PDF documents</li>
				<li><code>application/json</code> - JSON data</li>
				<li><code>text/xml</code> - XML documents</li>
				<li><code>image/jpeg</code> - JPEG images</li>
				<li><code>application/vnd.faf+yaml</code> - FAF AI context (just added)</li>
			</ul>

			<p>
				The <code>vnd.</code> prefix designates this as a <strong>vendor-specific media type</strong> - formats developed by organizations that have proven their utility and adoption in production environments.
			</p>
		</section>

		<section class="timeline">
			<h2>From Desktop Frustration to Internet Standard</h2>

			<div class="timeline-grid">
				<div class="timeline-event">
					<div class="timeline-date">August 8, 2024</div>
					<h3>Format Created</h3>
					<p>Born from frustration with Claude Desktop forgetting project context. Created .faf as universal AI context format.</p>
					<div class="screenshot-preview">
						<img src="/blog-assets/faf-creation-august-8-2024.png" alt="You Just Created THE Standard! - August 8, 2024" class="creation-screenshot" />
					</div>
				</div>

				<div class="timeline-event">
					<div class="timeline-date">September 1, 2025</div>
					<h3>Developer Platform Launch</h3>
					<p><a href="https://fafdev.tools" target="_blank" rel="noopener">fafdev.tools</a> and faf-engine-mk1 launched. Developer tools and engine testing platform go live. Built with Svelte 5 runes.</p>
				</div>

				<div class="timeline-event">
					<div class="timeline-date">September 11, 2025</div>
					<h3>First Google Approval</h3>
					<p>".faf - AI-Context⚡️Fast AF" v1.0.2 approved and published to Chrome Web Store. Google security review passed.</p>
				</div>

				<div class="timeline-event">
					<div class="timeline-date">September 16, 2025</div>
					<h3>MCP Server Launch</h3>
					<p>claude-faf-mcp v2.0.0 published to npm. First persistent project context server for Claude Desktop.</p>
				</div>

				<div class="timeline-event">
					<div class="timeline-date">September 24, 2025</div>
					<h3>CLI Launch</h3>
					<p>faf-cli v2.1.0 published to npm. Format discovery engine (TURBO-CAT) processes 153+ framework types.</p>
				</div>

				<div class="timeline-event">
					<div class="timeline-date">October 17, 2025</div>
					<h3>Anthropic MCP Registry Approval</h3>
					<p>claude-faf-mcp merged into official Anthropic MCP Registry (PR #2759). Official endorsement achieved.</p>
				</div>

				<div class="timeline-event">
					<div class="timeline-date">October 29, 2025</div>
					<h3>Second Google Approval + 10k Downloads</h3>
					<p>"Stack⚡️Grabber" v1.6.0 approved and published to Chrome Web Store. Same day: ecosystem reaches 10k milestone.</p>
				</div>

				<div class="timeline-event highlighted">
					<div class="timeline-date">October 31, 2025</div>
					<h3>IANA Registration</h3>
					<p><strong>application/vnd.faf+yaml</strong> officially registered by IANA. Internet standard status achieved.</p>
				</div>
			</div>
		</section>

		<section class="technical">
			<h2>Technical Specification</h2>

			<div class="spec-grid">
				<div class="spec-item">
					<h3>Media Type</h3>
					<code>application/vnd.faf+yaml</code>
				</div>

				<div class="spec-item">
					<h3>File Extension</h3>
					<code>.faf</code>
				</div>

				<div class="spec-item">
					<h3>Format</h3>
					<p>YAML with structured frontmatter + markdown content</p>
				</div>

				<div class="spec-item">
					<h3>Purpose</h3>
					<p>Persistent project context for AI development tools</p>
				</div>
			</div>

			<p>
				The <code>+yaml</code> suffix indicates .faf files are YAML-based, enabling standard YAML parsers to process them while the <code>vnd.faf</code> designation ensures AI tools recognize the semantic structure.
			</p>
		</section>

		<section class="how-to-use">
			<h2>How to Use: project.faf in Its Rightful Place</h2>

			<p>
				<code>project.faf</code> sits exactly where it belongs in your project structure - between <code>package.json</code> (dependencies) and <code>README.md</code> (human documentation). It's the README for AI.
			</p>

			<blockquote class="gemini-quote">
				"README evolution for AI era"
				<footer>— Google Gemini CLI (9.5/10 Rating)</footer>
			</blockquote>

			<div class="file-structure-screenshot">
				<img src="/blog-assets/project-faf-file-placement.png" alt="project.faf file highlighted in project structure between package.json and README.md" />
				<p class="screenshot-caption">project.faf in its rightful place - between dependencies and human docs</p>
			</div>

			<p>
				During BIG-3 Testing (Claude Anthropic, OpenAI Codex, Google Gemini) in September 2025, Google Gemini CLI rated .faf at 9.5/10, recognizing it as the natural evolution of README.md for the AI era. Just as package.json tells tools about dependencies, project.faf tells AI about your entire project in machine-readable YAML with 🍜 noodles as the creator says.
			</p>
		</section>

		<section class="validation">
			<h2>Quadruple Validation: Google (2x), Anthropic, IANA</h2>

			<div class="validation-boxes">
				<div class="validation-box">
					<div class="validation-icon">🏛️</div>
					<h3>IANA Registration</h3>
					<p>Official Internet media type alongside PDF, JSON, XML</p>
					<p class="validation-status">✓ Oct 31, 2025</p>
				</div>

				<div class="validation-box">
					<div class="validation-icon">🤖</div>
					<h3>Anthropic MCP</h3>
					<p>Merged into official Model Context Protocol registry</p>
					<p class="validation-status">✓ Oct 17, 2025</p>
				</div>

				<div class="validation-box">
					<div class="validation-icon">🏪</div>
					<h3>Google Chrome (First)</h3>
					<p>.faf - AI-Context⚡️Fast AF v1.0.2</p>
					<p class="validation-status">✓ Sep 11, 2025</p>
				</div>

				<div class="validation-box">
					<div class="validation-icon">⚡</div>
					<h3>Google Chrome (Second)</h3>
					<p>Stack⚡️Grabber v1.6.0</p>
					<p class="validation-status">✓ Oct 29, 2025</p>
				</div>
			</div>
		</section>

		<section class="ecosystem">
			<h2>Ecosystem Status</h2>

			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-number">10.5k+</div>
					<div class="stat-label">Total Downloads</div>
					<div class="stat-breakdown">5.8k CLI + 4.7k MCP (598/wk)</div>
				</div>

				<div class="stat-card">
					<div class="stat-number">153+</div>
					<div class="stat-label">Supported Frameworks</div>
					<div class="stat-breakdown">React, TypeScript, Next.js, Svelte, n8n...</div>
				</div>

				<div class="stat-card">
					<div class="stat-number">4</div>
					<div class="stat-label">Platform Approvals</div>
					<div class="stat-breakdown">IANA, Anthropic, Google (2x)</div>
				</div>

				<div class="stat-card">
					<div class="stat-number">33</div>
					<div class="stat-label">MCP Tools</div>
					<div class="stat-breakdown">Context operations via Claude Desktop</div>
				</div>
			</div>
		</section>

		<section class="quote">
			<blockquote class="creator-statement">
				"AI context needed a file format. Not a product, not a tool - a format. IANA registration confirms what we knew from day one: persistent project context belongs at the protocol level, not the application level."
				<footer>— .faf creator, October 2025</footer>
			</blockquote>
		</section>

		<section class="whats-next">
			<h2>What's Next</h2>

			<p>
				IANA registration enables:
			</p>

			<ul>
				<li><strong>HTTP Content-Type headers:</strong> Web servers can properly identify .faf files</li>
				<li><strong>API standardization:</strong> RESTful APIs can exchange .faf context with proper MIME types</li>
				<li><strong>Browser recognition:</strong> Browsers treat .faf files as first-class format</li>
				<li><strong>Tool integration:</strong> IDEs, editors, and AI tools can register as .faf handlers</li>
				<li><strong>Email attachments:</strong> Email clients properly handle .faf files</li>
			</ul>

			<p>
				This is infrastructure. The format works today across Claude Desktop, Claude Code, VS Code, Cursor, and any terminal. IANA registration ensures it continues working for decades.
			</p>
		</section>

		<section class="resources">
			<h2>Resources</h2>

			<div class="resources-grid">
				<a href="http://www.iana.org/assignments/media-types" target="_blank" rel="noopener" class="resource-link">
					<strong>IANA Media Types Registry</strong>
					<p>Official registry listing application/vnd.faf+yaml</p>
				</a>

				<a href="https://www.npmjs.com/package/faf-cli" target="_blank" rel="noopener" class="resource-link">
					<strong>faf-cli on npm</strong>
					<p>Command-line interface (5.8k downloads)</p>
				</a>

				<a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener" class="resource-link">
					<strong>claude-faf-mcp on npm</strong>
					<p>Official MCP server (4.7k downloads, 598/wk)</p>
				</a>

				<a href="https://github.com/Wolfe-Jam/faf" target="_blank" rel="noopener" class="resource-link">
					<strong>GitHub Repository</strong>
					<p>Open source, MIT licensed</p>
				</a>
			</div>
		</section>

		<section class="contact">
			<h2>Media Contact</h2>
			<p>
				<strong>Email:</strong> <a href="mailto:team@faf.one">team@faf.one</a><br>
				<strong>Website:</strong> <a href="https://faf.one">faf.one</a><br>
				<strong>GitHub:</strong> <a href="https://github.com/Wolfe-Jam/faf" target="_blank" rel="noopener">github.com/Wolfe-Jam/faf</a>
			</p>
		</section>

		<section class="about">
			<h2>About .faf</h2>
			<p>
				.faf (Foundational AI-context Format) is the first persistent project context format for AI development tools. Created on August 8, 2025, .faf provides universal, shareable AI context that works across Claude, Cursor, VS Code, and any AI tool. The format is free, open source (MIT), and now officially registered by IANA.
			</p>
		</section>

		<section class="format-expertise">
			<h2>30 Years of Format Design Expertise</h2>
			<p>
				.faf didn't emerge from nowhere - it's the culmination of three decades of format design experience.
			</p>

			<div class="expertise-timeline">
				<div class="expertise-event">
					<div class="expertise-year">1990s</div>
					<h3>.iff Format Obsession</h3>
					<p>Fell for Commodore Amiga's .iff (Interchange File Format). Became obsessed with understanding what makes formats elegant, enduring, and adoptable.</p>
				</div>

				<div class="expertise-event">
					<div class="expertise-year">2000s</div>
					<h3>Carpet Industry 3D Simulation Format</h3>
					<p>Created complex 3D simulation format for the Carpet Industry. <strong>Still in daily use today</strong> - proving that well-designed formats outlast trends and companies.</p>
				</div>

				<div class="expertise-event">
					<div class="expertise-year">2023</div>
					<h3>AI Discovery</h3>
					<p>Got interested in AI development. Immediately recognized the context problem through the lens of 20+ years of format expertise.</p>
				</div>

				<div class="expertise-event">
					<div class="expertise-year">2024-2025</div>
					<h3>Active AI Development</h3>
					<p>Building AI tools and projects. Experiencing context frustration firsthand. Drawing on decades of format knowledge to solve it.</p>
				</div>

				<div class="expertise-event highlighted">
					<div class="expertise-year">Summer 2025</div>
					<h3>August 8, 2025: .faf Created</h3>
					<p>Applied 30 years of format expertise to AI's context problem. Got it right immediately - not luck, but experience.</p>
				</div>
			</div>

			<blockquote class="creator-philosophy">
				"AI needed a format, it got one: .faf. This wasn't a lucky guess - it was three decades of format design expertise compressed into one solution. From .iff to Carpet Industry simulations to AI context, I've been preparing for this moment for 30 years."
				<footer>— .faf creator</footer>
			</blockquote>
		</section>

		<section class="origin-story">
			<h2>The Origin: August 8, 2024</h2>
			<p>
				This is the moment .faf was born - a celebration modal from the Chrome Extension showing "You Just Created THE Standard!" The screenshot captures the exact moment a format became reality.
			</p>
			<div class="full-screenshot">
				<img src="/blog-assets/faf-creation-august-8-2024.png" alt="Complete screenshot - You Just Created THE Standard! - August 8, 2024" />
				<p class="screenshot-caption">August 8, 2024 - The day .faf became the Universal AI Context Format</p>
			</div>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		min-height: 100vh;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid var(--faf-orange);
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: var(--faf-orange);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
		line-height: 1.3;
		font-weight: 900;
		overflow-wrap: break-word;
		word-wrap: break-word;
	}

	h1 code {
		background: var(--faf-cream);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-size: 0.9em;
		color: var(--faf-orange);
		font-family: var(--font-mono);
		display: inline-block;
		line-height: 1.4;
	}

	.subtitle {
		font-size: 1.3rem;
		color: #666;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.meta {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		font-size: 0.9rem;
		color: #888;
		margin-top: 1rem;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: var(--faf-black);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.post-content {
		font-size: 1.125rem;
		line-height: 1.8;
		color: #333;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 2rem;
		margin: 2.5rem 0 1.5rem;
		color: var(--faf-black);
		font-weight: 800;
	}

	h3 {
		font-size: 1.4rem;
		margin: 1.5rem 0 1rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.lead {
		font-size: 1.3rem;
		line-height: 1.7;
		color: #222;
		margin-bottom: 2rem;
	}

	.lead strong {
		color: var(--faf-orange);
	}

	code {
		background: var(--faf-cream);
		color: var(--faf-orange);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.iana-notice {
		background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
		border: 3px solid #0ea5e9;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}

	.iana-notice h3 {
		margin-top: 0;
		color: #0369a1;
	}

	.official-email {
		background: white;
		border-left: 4px solid #0ea5e9;
		padding: 1.5rem;
		margin: 1rem 0 0 0;
		font-style: normal;
	}

	.official-email p {
		margin: 0.75rem 0;
	}

	.media-type {
		font-size: 1.3rem;
		color: var(--faf-orange);
		font-weight: 700;
		font-family: var(--font-mono);
	}

	.official-email footer {
		margin-top: 1.5rem;
		color: #666;
		font-style: italic;
	}

	.comparison-list {
		background: #f9f9f9;
		border-radius: 8px;
		padding: 2rem;
		list-style: none;
		margin: 2rem 0;
	}

	.comparison-list li {
		padding: 0.75rem 0;
		border-bottom: 1px solid #e5e5e5;
		font-family: var(--font-mono);
		font-size: 1rem;
	}

	.comparison-list li:last-child {
		border-bottom: none;
		font-weight: 700;
		color: var(--faf-orange);
	}

	.timeline-grid {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.timeline-event {
		background: #f9f9f9;
		border-left: 4px solid var(--faf-orange);
		padding: 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.timeline-event.highlighted {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border-left-width: 6px;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.1);
	}

	.timeline-date {
		font-size: 0.9rem;
		color: var(--faf-orange);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.timeline-event h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
	}

	.timeline-event p {
		margin: 0;
		font-size: 1rem;
	}

	.screenshot-preview {
		margin-top: 1rem;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid var(--faf-orange);
	}

	.creation-screenshot {
		width: 100%;
		height: auto;
		display: block;
	}

	.spec-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.spec-item {
		background: #f9f9f9;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.spec-item h3 {
		margin: 0 0 0.75rem 0;
		font-size: 1.1rem;
		color: var(--faf-orange);
	}

	.spec-item code {
		display: block;
		font-size: 1.1rem;
		padding: 0.5rem;
	}

	.spec-item p {
		margin: 0;
		font-size: 1rem;
	}

	.validation-boxes {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.validation-box {
		background: white;
		border: 2px solid var(--faf-cream);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		transition: all 0.3s ease;
	}

	.validation-box:hover {
		border-color: var(--faf-orange);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
	}

	.validation-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.validation-box h3 {
		margin: 0 0 0.75rem 0;
		font-size: 1.2rem;
	}

	.validation-box p {
		margin: 0.5rem 0;
		font-size: 0.95rem;
	}

	.validation-status {
		color: #00d084;
		font-weight: 700;
		margin-top: 1rem !important;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.stat-card {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border: 2px solid var(--faf-orange);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
	}

	.stat-number {
		font-size: 3rem;
		font-weight: 900;
		color: var(--faf-orange);
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.stat-breakdown {
		font-size: 0.9rem;
		color: #666;
	}

	.creator-statement {
		background: var(--faf-black);
		color: white;
		border-left: 6px solid var(--faf-orange);
		padding: 2rem;
		margin: 2rem 0;
		font-size: 1.3rem;
		font-style: normal;
		line-height: 1.6;
	}

	.creator-statement footer {
		margin-top: 1.5rem;
		font-size: 1rem;
		color: var(--faf-orange);
	}

	.resources-grid {
		display: grid;
		gap: 1rem;
		margin: 2rem 0;
	}

	.resource-link {
		display: block;
		background: #f9f9f9;
		border: 2px solid var(--faf-cream);
		border-radius: 8px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.resource-link:hover {
		border-color: var(--faf-orange);
		transform: translateX(4px);
	}

	.resource-link strong {
		color: var(--faf-orange);
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}

	.resource-link p {
		margin: 0;
		font-size: 0.95rem;
		color: #666;
	}

	.contact p {
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.contact a {
		color: var(--faf-orange);
		text-decoration: none;
	}

	.contact a:hover {
		text-decoration: underline;
	}

	ul {
		margin: 1.5rem 0;
		padding-left: 2rem;
	}

	li {
		margin: 0.75rem 0;
	}

	li strong {
		color: var(--faf-black);
	}

	.full-screenshot {
		margin: 2rem 0;
		border-radius: 12px;
		overflow: hidden;
		border: 3px solid var(--faf-orange);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.2);
	}

	.full-screenshot img {
		width: 100%;
		height: auto;
		display: block;
	}

	.screenshot-caption {
		text-align: center;
		font-style: italic;
		color: #666;
		margin: 1rem 0 0 0;
		padding: 1rem;
		background: var(--faf-cream);
		font-size: 1rem;
	}

	.gemini-quote {
		background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
		border-left: 6px solid #4285f4;
		padding: 2rem;
		margin: 2rem 0;
		font-size: 1.3rem;
		font-style: normal;
		line-height: 1.6;
		color: #1a73e8;
	}

	.gemini-quote footer {
		margin-top: 1.5rem;
		font-size: 1rem;
		color: #666;
	}

	.file-structure-screenshot {
		margin: 2rem 0;
		border-radius: 12px;
		overflow: hidden;
		border: 3px solid #4285f4;
		box-shadow: 0 8px 24px rgba(66, 133, 244, 0.2);
		background: #1e1e1e;
	}

	.file-structure-screenshot img {
		width: 100%;
		height: auto;
		display: block;
	}

	.expertise-timeline {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.expertise-event {
		background: #f9f9f9;
		border-left: 4px solid #666;
		padding: 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.expertise-event.highlighted {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border-left: 6px solid var(--faf-orange);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.1);
	}

	.expertise-year {
		font-size: 0.9rem;
		color: #666;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.expertise-event.highlighted .expertise-year {
		color: var(--faf-orange);
	}

	.expertise-event h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
	}

	.expertise-event p {
		margin: 0;
		font-size: 1rem;
	}

	.creator-philosophy {
		background: var(--faf-black);
		color: white;
		border-left: 6px solid var(--faf-orange);
		padding: 2rem;
		margin: 2rem 0;
		font-size: 1.2rem;
		font-style: normal;
		line-height: 1.6;
	}

	.creator-philosophy footer {
		margin-top: 1.5rem;
		font-size: 1rem;
		color: var(--faf-orange);
	}

	.uniqueness-callout {
		background: linear-gradient(135deg, #fff5f0 0%, #fffbf0 100%);
		border: 3px solid var(--faf-orange);
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		text-align: center;
	}

	.uniqueness-callout h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}

	.uniqueness-callout p {
		margin: 0 0 1.5rem 0;
		font-size: 1.2rem;
		line-height: 1.6;
	}

	.proof-link {
		display: inline-block;
		background: var(--faf-orange);
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-size: 1.1rem;
		font-weight: 700;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}

	.proof-link:hover {
		background: var(--faf-black);
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(255, 107, 53, 0.4);
	}

	@media (max-width: 768px) {
		.blog-post {
			padding: 1rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.validation-boxes,
		.stats-grid,
		.spec-grid {
			grid-template-columns: 1fr;
		}

		.lead {
			font-size: 1.1rem;
		}

		.post-content {
			font-size: 1rem;
		}
	}
</style>
