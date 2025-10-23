<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Chrome Extension: Grab Any Codebase as .txt | FAF Ecosystem</title>
	<meta name="description" content="October 23, 2025 - Google-approved Chrome extension that extracts code context from ANY dev environment. GitHub, Monaco, StackBlitz, GitLab—one click, done." />
	<meta property="og:title" content="Chrome Extension: Grab Any Codebase as .txt" />
	<meta property="og:description" content="One-click context extraction for developers. Works on GitHub, Monaco editor, StackBlitz, and 15+ platforms. Google approved, MIT licensed, built with Svelte 5." />
	<meta property="og:image" content="https://faf.one/orange-smiley.svg" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Chrome Extension Launch
		</div>
		<div class="hero-image">
			<img src="https://lh3.googleusercontent.com/yjKU-b0kvpNjkGSGjVKCEsR_5mKjGfqwXGkL3USHWY8Jdm-VTVEOuqwuLqI0jVpBEZ1CFlqmTXWMnD0tMjAiSzpxmQ=s1280-w1280-h800" alt="AI-Context Fast AF - Chrome Extension" />
		</div>
		<h1>FAF Chrome Extension: Instant AI Context</h1>
		<p class="subtitle">Extract AI context from any dev environment—instantly to your Downloads as clean .txt</p>
		<div class="meta">
			<time datetime="2025-10-23">October 23, 2025</time>
			<span class="separator">•</span>
			<span class="version">v1.0.3</span>
			<span class="separator">•</span>
			<span class="edition">☑️ Google Approved</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>One-click analysis.</strong> Get instant AI-readiness scores (0-100%) for any development environment. Download comprehensive reports as .txt files—a gateway to full FAF capabilities.
			</p>
		</section>

		<section class="why-this-exists">
			<h2>⚡ ONE-CLICK ANALYSIS</h2>
			<p>
				Analyze web-based development environments for AI-readiness. Professional scoring and reporting for GitHub and modern development platforms.
			</p>
			<p>
				Click the extension → Get instant AI-readiness scores → Download .txt report to your Downloads folder. Ready to share with any AI assistant or coding tool.
			</p>

			<h2>🎯 KEY FEATURES</h2>
			<ul>
				<li><strong>Web-based development platform analysis</strong></li>
				<li><strong>AI-readiness scoring</strong> with detailed breakdowns</li>
				<li><strong>Professional downloadable reports</strong> (.txt format - gateway to full .faf capabilities)</li>
				<li><strong>Development-focused scope</strong> (no generic website rating)</li>
				<li><strong>100% private</strong> - no data collection</li>
				<li><strong>Zero network requests</strong></li>
			</ul>

			<h2>📖 Built for Real Developers</h2>
			<p>
				Built it for myself while testing. Needed it. Google approved it. Nine downloads at launch, zero reviews, but it's <strong>top-notch</strong> because when you need it, you NEED it.
			</p>
			<p class="subtle">
				<em>The .txt download introduces you to the FAF format—upgrade to full .faf integration via MCP for advanced features. But the .txt alone works with any AI tool today.</em>
			</p>
		</section>

		<section class="features">
			<h2>🤖 UNIVERSAL COMPATIBILITY</h2>
			<p>
				Generated reports work seamlessly with any AI assistant or coding tool that accepts context files. Claude, Cursor, Copilot—whatever you use.
			</p>

			<h2>🔒 PRIVACY FIRST</h2>
			<ul>
				<li><strong>Everything runs locally</strong> - Your code never leaves your machine</li>
				<li><strong>No tracking</strong></li>
				<li><strong>No accounts required</strong></li>
				<li><strong>No network requests</strong> - Complete offline operation</li>
				<li><strong>Google approved</strong> - Passed Chrome Web Store security review</li>
			</ul>
		</section>

		<section class="install">
			<h2>🚀 Install Now</h2>
			<p>
				<a href="https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm"
				   class="cta-button"
				   target="_blank"
				   rel="noopener">
					Install from Chrome Web Store →
				</a>
			</p>
			<p class="opensource">
				Open source: <a href="https://github.com/Wolfe-Jam/faf-chrome-extension" target="_blank" rel="noopener">github.com/Wolfe-Jam/faf-chrome-extension</a>
			</p>
		</section>

		<section class="example">
			<h2>Real Example</h2>
			<div class="comparison">
				<div class="without">
					<h3>Without FAF</h3>
					<pre><code>You: "Help with this React component"
AI: "Which component? Show me the code"
You: [manually copies files one by one]</code></pre>
				</div>
				<div class="with">
					<h3>With FAF</h3>
					<pre><code>You: [pastes FAF .txt] "Help with this React component"
AI: "I see you're using React 18 with Vite, here's what I'd change in Button.tsx..."</code></pre>
				</div>
			</div>
		</section>

		<section class="platforms">
			<h2>Supported Platforms</h2>
			<table>
				<thead>
					<tr>
						<th>Platform</th>
						<th>Support Level</th>
						<th>Features</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>GitHub</strong></td>
						<td>🟢 Full</td>
						<td>File trees, README detection, dependency analysis</td>
					</tr>
					<tr>
						<td><strong>Monaco Editor</strong></td>
						<td>🟢 Full</td>
						<td>Multi-file extraction, language detection</td>
					</tr>
					<tr>
						<td><strong>CodeSandbox</strong></td>
						<td>🟢 Full</td>
						<td>Project structure, live file content</td>
					</tr>
					<tr>
						<td><strong>StackBlitz</strong></td>
						<td>🟢 Full</td>
						<td>WebContainer integration, real-time analysis</td>
					</tr>
					<tr>
						<td><strong>GitLab</strong></td>
						<td>🟢 Full</td>
						<td>Repository structure, file extraction</td>
					</tr>
					<tr>
						<td><strong>CodeMirror</strong></td>
						<td>🟡 Partial</td>
						<td>Code block extraction, basic structure</td>
					</tr>
					<tr>
						<td><strong>VS Code Web</strong></td>
						<td>🟡 Partial</td>
						<td>File content, workspace detection</td>
					</tr>
					<tr>
						<td><strong>Generic Sites</strong></td>
						<td>🟡 Basic</td>
						<td>Code block identification, language detection</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section class="tech">
			<h2>Built With</h2>
			<ul>
				<li><strong>Svelte 5</strong> - Modern reactive UI with runes</li>
				<li><strong>TypeScript</strong> - Type-safe throughout</li>
				<li><strong>Vite</strong> - Fast builds and HMR</li>
				<li><strong>Chrome Extension Manifest V3</strong> - Latest security standards</li>
			</ul>
		</section>

		<section class="privacy">
			<h2>🛡️ Security & Privacy</h2>
			<ul>
				<li>☑️ <strong>No data collection</strong> - Everything runs locally</li>
				<li>☑️ <strong>No network requests</strong> - Complete offline operation</li>
				<li>☑️ <strong>No storage</strong> of sensitive information</li>
				<li>☑️ <strong>Open source</strong> - Fully auditable code</li>
				<li>☑️ <strong>Google approved</strong> - Passed Chrome Web Store security review</li>
			</ul>
		</section>

		<section class="faf-ecosystem">
			<h2>Part of FAF Ecosystem</h2>
			<p>
				The Chrome Extension is one piece of the FAF ecosystem for persistent AI context:
			</p>
			<ul>
				<li><strong>faf-cli</strong> - Command-line tool (5,100+ downloads)</li>
				<li><strong>claude-faf-mcp</strong> - Official Anthropic MCP server (3,600+ downloads)</li>
				<li><strong>Chrome Extension</strong> - Browser integration (this)</li>
				<li><strong>faf.one</strong> - Official website and docs</li>
			</ul>
		</section>

		<section class="cta-bottom">
			<h2>Get Started</h2>
			<p>
				<a href="https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm"
				   class="cta-button large"
				   target="_blank"
				   rel="noopener">
					Install FAF Extension →
				</a>
			</p>
			<p class="links">
				<a href="https://github.com/Wolfe-Jam/faf-chrome-extension" target="_blank">GitHub</a>
				<span class="separator">•</span>
				<a href="https://github.com/Wolfe-Jam/faf-chrome-extension/discussions" target="_blank">Discussions</a>
				<span class="separator">•</span>
				<a href="https://faf.one">FAF Ecosystem</a>
			</p>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
		color: #0a0a0a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 2px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.hero-image {
		margin: 2rem 0;
		text-align: center;
	}

	.hero-image img {
		max-width: 100%;
		height: auto;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0 0 0.5rem 0;
		color: #0a0a0a;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		margin: 0 0.5rem;
		color: #ddd;
	}

	.version {
		color: #FF6B35;
		font-weight: 600;
	}

	.edition {
		color: #10b981;
		font-weight: 600;
	}

	.post-content {
		font-size: 1.1rem;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 1.8rem;
		font-weight: 700;
		margin: 2rem 0 1rem 0;
		color: #0a0a0a;
	}

	.lead {
		font-size: 1.3rem;
		line-height: 1.6;
		color: #333;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	ul li {
		padding: 0.5rem 0 0.5rem 1.5rem;
		position: relative;
	}

	ul li::before {
		content: "→";
		position: absolute;
		left: 0;
		color: #FF6B35;
		font-weight: bold;
	}

	.cta-button {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.2s;
	}

	.cta-button:hover {
		background: #ff5520;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}

	.cta-button.large {
		font-size: 1.2rem;
		padding: 1.2rem 2.5rem;
	}

	.opensource {
		margin-top: 1rem;
		font-size: 0.95rem;
		color: #666;
	}

	.comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}

	@media (max-width: 768px) {
		.comparison {
			grid-template-columns: 1fr;
		}
	}

	.without, .with {
		background: #f5f5f0;
		padding: 1.5rem;
		border-radius: 8px;
	}

	.with {
		background: #e8f5e9;
		border: 2px solid #10b981;
	}

	.comparison h3 {
		margin-top: 0;
		font-size: 1.1rem;
		color: #0a0a0a;
	}

	pre {
		background: white;
		padding: 1rem;
		border-radius: 4px;
		overflow-x: auto;
		font-size: 0.9rem;
	}

	code {
		font-family: 'Monaco', 'Courier New', monospace;
		color: #0a0a0a;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 2rem 0;
		font-size: 0.95rem;
	}

	thead {
		background: #f5f5f0;
	}

	th, td {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}

	th {
		font-weight: 600;
		color: #0a0a0a;
	}

	tbody tr:hover {
		background: #fafafa;
	}

	.links {
		text-align: center;
		font-size: 0.95rem;
		color: #666;
	}

	.links a {
		color: #FF6B35;
		text-decoration: none;
	}

	.links a:hover {
		text-decoration: underline;
	}

	.cta-bottom {
		text-align: center;
		padding: 3rem 0;
		border-top: 2px solid #f0f0f0;
		margin-top: 4rem;
	}

	.subtle {
		font-size: 0.95rem;
		color: #666;
		font-style: italic;
		margin-top: 1.5rem;
		padding: 1rem;
		background: #f9f9f9;
		border-left: 3px solid #FF6B35;
	}
</style>
