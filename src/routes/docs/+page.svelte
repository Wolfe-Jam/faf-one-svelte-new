<script>
	import { onMount } from 'svelte';
	
	let activeSection = $state('quickstart');
	
	function scrollToSection(id) {
		activeSection = id;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>.faf Documentation - Project DNA ✨ for ANY AI</title>
	<meta name="description" content="Complete documentation for .faf format - IANA-registered, persistent project context for AI">
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="docs-layout">
	<aside class="docs-sidebar">
		<div class="sidebar-header">
			<h3>.faf Docs</h3>
			<span class="version">v3.1.0</span>
		</div>
		
		<nav class="sidebar-nav">
			<button class="nav-item" class:active={activeSection === 'quickstart'} onclick={() => scrollToSection('quickstart')}>
				Quick Start
			</button>
			<button class="nav-item" class:active={activeSection === 'why'} onclick={() => scrollToSection('why')}>
				Why .faf?
			</button>
			<button class="nav-item" class:active={activeSection === 'installation'} onclick={() => scrollToSection('installation')}>
				Installation
			</button>
			<button class="nav-item" class:active={activeSection === 'usage'} onclick={() => scrollToSection('usage')}>
				Basic Usage
			</button>
			<button class="nav-item" class:active={activeSection === 'format'} onclick={() => scrollToSection('format')}>
				Format Spec
			</button>
			<button class="nav-item" class:active={activeSection === 'cli'} onclick={() => scrollToSection('cli')}>
				CLI Commands
			</button>
			<button class="nav-item" class:active={activeSection === 'mcp'} onclick={() => scrollToSection('mcp')}>
				MCP Server
			</button>
			<button class="nav-item" class:active={activeSection === 'extension'} onclick={() => scrollToSection('extension')}>
				Chrome Extension
			</button>
			<button class="nav-item" class:active={activeSection === 'api'} onclick={() => scrollToSection('api')}>
				API Reference
			</button>
			<button class="nav-item" class:active={activeSection === 'developers'} onclick={() => scrollToSection('developers')}>
				For Developers
			</button>
		</nav>
	</aside>
	
	<main class="docs-content">
		<section id="quickstart" class="doc-section">
			<h1>📚 .faf Documentation</h1>
			<p class="lead">Project DNA ✨ for ANY AI</p>

			<div class="iana-badge">
				<h3>🏆 IANA-Registered Format</h3>
				<p>.faf is now an Internet-standard format (<code>application/vnd.faf+yaml</code>)</p>
			</div>

			<div class="positioning-grid">
				<div class="position-card">
					<h4>IANA Definition</h4>
					<p>Official AI Context format</p>
				</div>
				<div class="position-card">
					<h4>Anthropic MCP</h4>
					<p>Only Persistent Project Context Server</p>
				</div>
				<div class="position-card">
					<h4>Universal Standard</h4>
					<p>Sits with package.json and README.md in every repo</p>
				</div>
			</div>

			<div class="file-tree-box">
				<h3>Where project.faf Lives</h3>
				<p>Right alongside your existing project files:</p>
				<div class="file-tree">
					<pre><code>your-project/
├── node_modules/
├── src/
├── tests/
├── .gitignore
├── LICENSE
├── package.json          ← npm knows this
├── package-lock.json
├── <strong>project.faf</strong>           ← AI knows this ✨
├── README.md             ← humans know this
└── tsconfig.json</code></pre>
				</div>
				<p class="file-tree-caption">Three essential files: package.json (dependencies), README.md (humans), project.faf (AI)</p>
			</div>

			<div class="quickstart-box">
				<h2>⚡ Quick Start</h2>
				<p>Universal CLI for FAF (Foundational AI-context Format) using project.faf:</p>

				<div class="code-block">
					<pre><code># Install globally
npm install -g faf-cli

# Create your first project.faf
faf init my-project

# Add to existing project
cd your-project
faf init .

# Migrate from .faf to project.faf
faf migrate</code></pre>
				</div>
			</div>
		</section>

		<section id="why" class="doc-section">
			<h2>🔥 Why .faf?</h2>

			<div class="problem-box">
				<h3>The Problem Devs Don't See</h3>
				<p class="lead-small">
					"AI already has everything - it can read my <code>package.json</code> and <code>README.md</code>"
				</p>
				<p><strong>No. It doesn't. And the variables are NOT in your favor.</strong></p>
			</div>

			<h3>Without .faf: Token Hemorrhage</h3>
			<p>Every session, AI searches your codebase from scratch:</p>

			<div class="comparison-grid">
				<div class="comparison-bad">
					<h4>Without .faf</h4>
					<ul class="token-list">
						<li>Reads <code>package.json</code> (500 tokens)</li>
						<li>Reads <code>README.md</code> (800 tokens)</li>
						<li>Scans random files (2,000 tokens)</li>
						<li>Reads <code>tsconfig.json</code> (300 tokens)</li>
						<li>Directory listings (400 tokens)</li>
					</ul>
					<p class="total-bad">Total: 4,000 tokens wasted</p>
					<p class="waste-label">95% waste searching for context</p>
				</div>

				<div class="comparison-good">
					<h4>With .faf</h4>
					<ul class="token-list">
						<li>Reads <code>project.faf</code> once (120 tokens)</li>
						<li>Has complete context</li>
						<li>Starts working immediately</li>
					</ul>
					<p class="total-good">Total: 120 tokens</p>
					<p class="savings-label">90% productive tokens</p>
				</div>
			</div>

			<div class="stats-highlight">
				<div class="stat">
					<span class="stat-number">76%</span>
					<span class="stat-label">Token Reduction</span>
				</div>
				<div class="stat">
					<span class="stat-number">190K</span>
					<span class="stat-label">Tokens Saved Weekly</span>
				</div>
				<div class="stat">
					<span class="stat-number">&lt;50ms</span>
					<span class="stat-label">Processing Time</span>
				</div>
			</div>

			<h3>The Variables Are NOT in Your Favor</h3>
			<p>Without .faf, AI controls everything:</p>
			<ul>
				<li>AI decides what to read (different every time)</li>
				<li>AI decides what's relevant (often wrong)</li>
				<li>AI starts from zero (every single session)</li>
				<li>You pay tokens for guessing (not building)</li>
			</ul>

			<p>With .faf: <strong>You control the context. AI gets it right, first time, every time.</strong></p>

			<p class="attribution">By Claude. No BS.</p>
		</section>

		<section id="installation" class="doc-section">
			<h2>🔧 Installation</h2>
			
			<h3>CLI Installation</h3>
			<div class="code-block">
				<pre><code># NPM
npm install -g faf-cli

# Yarn
yarn global add faf-cli

# PNPM
pnpm add -g faf-cli

# Homebrew (macOS/Linux)
brew install faf-cli</code></pre>
			</div>
			
			<h3>Chrome Extension</h3>
			<p>Install directly from the Chrome Web Store:</p>
			<a href="https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm" class="btn-docs" target="_blank">
				Install Chrome Extension →
			</a>
			
			<h3>MCP Server</h3>
			<div class="code-block">
				<pre><code># Clone and setup
git clone https://github.com/Wolfe-Jam/faf
cd faf
npm install
npm run build</code></pre>
			</div>
		</section>
		
		<section id="usage" class="doc-section">
			<h2>💻 Basic Usage</h2>

			<h3>Creating a project.faf file</h3>
			<div class="code-block">
				<pre><code># Interactive mode
faf init

# With project name
faf init my-awesome-project

# In current directory
faf init .</code></pre>
			</div>

			<h3>Migrating from .faf to project.faf</h3>
			<div class="code-block">
				<pre><code># Migrate single project
faf migrate

# Bulk migrate entire monorepo
faf rename</code></pre>
			</div>

			<h3>Updating project.faf</h3>
			<div class="code-block">
				<pre><code># Auto-detect and update
faf update

# Force regeneration
faf update --force

# Custom depth
faf update --depth 5</code></pre>
			</div>
		</section>
		
		<section id="format" class="doc-section">
			<h2>📋 Format Specification</h2>
			
			<h3>Structure</h3>
			<p>A .faf file uses YAML format with these key sections:</p>
			
			<div class="code-block">
				<pre><code>project: "Your Project Name"
version: "1.0.0"
description: "Project description"
stack:
  - technology: "Framework/Language"
    version: "x.x.x"

structure:
  type: "tree"
  root: "."
  
rules:
  include:
    - "src/**"
    - "*.config.js"
  exclude:
    - "node_modules"
    - ".git"
    
context: |
  Additional context about your project
  Can be multiple lines</code></pre>
			</div>
			
			<h3>.fafignore</h3>
			<p>Control what gets included in your context:</p>
			<div class="code-block">
				<pre><code># Dependencies
node_modules/
vendor/

# Build outputs  
dist/
build/

# Environment
.env
.env.local

# IDE
.vscode/
.idea/</code></pre>
			</div>
		</section>
		
		<section id="cli" class="doc-section">
			<h2>⌨️ CLI Commands</h2>
			
			<table class="command-table">
				<thead>
					<tr>
						<th>Command</th>
						<th>Description</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>faf init</code></td>
						<td>Initialize a new project.faf file</td>
						<td><code>--force</code>, <code>--minimal</code></td>
					</tr>
					<tr>
						<td><code>faf migrate</code></td>
						<td>Migrate .faf to project.faf</td>
						<td>None</td>
					</tr>
					<tr>
						<td><code>faf rename</code></td>
						<td>Bulk migrate monorepo (recursive)</td>
						<td>None</td>
					</tr>
					<tr>
						<td><code>faf update</code></td>
						<td>Update existing project.faf</td>
						<td><code>--force</code>, <code>--depth</code></td>
					</tr>
					<tr>
						<td><code>faf validate</code></td>
						<td>Validate .faf format</td>
						<td><code>--strict</code></td>
					</tr>
					<tr>
						<td><code>faf score</code></td>
						<td>Show AI-readiness score</td>
						<td><code>--json</code></td>
					</tr>
					<tr>
						<td><code>faf export</code></td>
						<td>Export to other formats</td>
						<td><code>--format</code></td>
					</tr>
				</tbody>
			</table>
		</section>
		
		<section id="mcp" class="doc-section">
			<h2>🤖 MCP Server</h2>
			<p><strong>Persistent Project Context</strong> - The only MCP server focused on persistent, format-first, holistic project context.</p>

			<div class="mcp-tagline">
				<p><strong>Push 'project.faf defines, Claude interprets'</strong></p>
			</div>
			
			<h3>Configuration</h3>
			<div class="code-block">
				<pre><code>{`{
  "mcpServers": {
    "faf": {
      "command": "node",
      "args": ["path/to/faf-mcp/dist/index.js"],
      "env": {
        "FAF_ROOT": "/path/to/projects"
      }
    }
  }
}`}</code></pre>
			</div>
			
			<h3>Available Tools</h3>
			<ul>
				<li><code>faf_read</code> - Read .faf file contents</li>
				<li><code>faf_update</code> - Update .faf file</li>
				<li><code>faf_validate</code> - Validate format</li>
				<li><code>faf_stats</code> - Get project statistics</li>
			</ul>
		</section>
		
		<section id="extension" class="doc-section">
			<h2>🌐 Chrome Extension</h2>
			<p>The Chrome Extension adds .faf support directly to your browser.</p>
			
			<h3>Features</h3>
			<ul>
				<li>☑️ Auto-detect .faf files on GitHub</li>
				<li>☑️ One-click copy to clipboard</li>
				<li>☑️ Format validation</li>
				<li>☑️ Stats overlay</li>
			</ul>
			
			<h3>Keyboard Shortcuts</h3>
			<table class="command-table">
				<thead>
					<tr>
						<th>Shortcut</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>Alt+F</code></td>
						<td>Toggle .faf viewer</td>
					</tr>
					<tr>
						<td><code>Alt+C</code></td>
						<td>Copy .faf content</td>
					</tr>
					<tr>
						<td><code>Alt+S</code></td>
						<td>Show stats</td>
					</tr>
				</tbody>
			</table>
		</section>
		
		<section id="api" class="doc-section">
			<h2>🔌 API Reference</h2>
			
			<h3>Node.js API</h3>
			<div class="code-block">
				<pre><code>{`import { FAF } from 'faf-cli';

// Read .faf file
const faf = await FAF.read('./project.faf');

// Generate .faf
const generated = await FAF.generate({
  path: './my-project',
  depth: 3,
  exclude: ['node_modules']
});

// Validate
const isValid = await FAF.validate(fafContent);

// Get stats
const stats = await FAF.stats('./project.faf');`}</code></pre>
			</div>
			
			<h3>Response Format</h3>
			<div class="code-block">
				<pre><code>{`{
  "success": true,
  "data": {
    "project": "string",
    "version": "string",
    "files": number,
    "directories": number,
    "score": number
  },
  "performance": {
    "time": "45ms"
  }
}`}</code></pre>
			</div>
		</section>

		<section id="developers" class="doc-section">
			<h2>👩‍💻 For Developers</h2>
			<p class="lead">Want to understand how .faf works under the hood or extend it?</p>

			<div class="dev-grid">
				<div class="dev-card">
					<h3>📖 Architecture Philosophy</h3>
					<p>Learn the foundational principles behind .faf:</p>
					<ul class="dev-list">
						<li>Foundation First (no reverse)</li>
						<li>Variables Not Complexity</li>
						<li>The F1 Brake Analogy</li>
					</ul>
					<a href="https://github.com/Wolfe-Jam/faf-skills/blob/main/docs/PHILOSOPHY.md" target="_blank" class="btn-dev">
						Read Philosophy →
					</a>
				</div>

				<div class="dev-card">
					<h3>🔧 Extensibility</h3>
					<p>Four ways to extend .faf for your workflow:</p>
					<ul class="dev-list">
						<li>Skills (Claude Code)</li>
						<li>Plugins (IDE/Browser)</li>
						<li>MCP Tools (Claude Desktop)</li>
						<li>Agent SDK (Future)</li>
					</ul>
					<a href="https://github.com/Wolfe-Jam/faf-skills/blob/main/docs/SKILLS-VS-MCP-VS-AGENTS.md" target="_blank" class="btn-dev">
						Read Comparison →
					</a>
				</div>

				<div class="dev-card">
					<h3>💡 Token Waste Analysis</h3>
					<p>Deep-dive into the problem .faf solves:</p>
					<ul class="dev-list">
						<li>Complete session breakdowns</li>
						<li>Real token measurements</li>
						<li>ROI calculations</li>
					</ul>
					<a href="https://github.com/Wolfe-Jam/faf-skills/blob/main/docs/WITH-WITHOUT-FAF.md" target="_blank" class="btn-dev">
						Read Analysis →
					</a>
				</div>
			</div>

			<div class="contribute-box">
				<h3>🤝 Contribute to .faf</h3>
				<p>All FAF Skills and development documentation is open source:</p>
				<a href="https://github.com/Wolfe-Jam/faf-skills" target="_blank" class="btn-contribute">
					View faf-skills Repository →
				</a>
			</div>
		</section>

		<div class="docs-footer">
			<p>Need help? <a href="/support">Contact Support</a> or check our <a href="https://github.com/Wolfe-Jam/faf" target="_blank">⭐ GitHub</a></p>
		</div>
	</main>
</div>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
		transform: translateX(-2px);
	}

	.docs-layout {
		display: grid;
		grid-template-columns: 250px 1fr;
		min-height: calc(100vh - 80px);
		background: var(--faf-white);
	}
	
	.docs-sidebar {
		background: #f8f8f8;
		border-right: 1px solid #e0e0e0;
		padding: 2rem 0;
		position: sticky;
		top: 80px;
		height: calc(100vh - 80px);
		overflow-y: auto;
	}
	
	.sidebar-header {
		padding: 0 1.5rem 1.5rem;
		border-bottom: 1px solid #e0e0e0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.sidebar-header h3 {
		margin: 0;
		font-size: 1.25rem;
		color: var(--faf-black);
	}
	
	.version {
		background: var(--faf-orange);
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 700;
	}
	
	.sidebar-nav {
		padding: 1.5rem 0;
	}
	
	.nav-item {
		display: block;
		width: 100%;
		padding: 0.75rem 1.5rem;
		background: none;
		border: none;
		text-align: left;
		color: #666;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 0.925rem;
	}
	
	.nav-item:hover {
		background: #f0f0f0;
		color: var(--faf-black);
	}
	
	.nav-item.active {
		background: var(--faf-orange);
		color: white;
		font-weight: 600;
	}
	
	.docs-content {
		padding: 3rem;
		max-width: 900px;
		margin: 0 auto;
	}
	
	.doc-section {
		margin-bottom: 4rem;
		scroll-margin-top: 100px;
	}
	
	.doc-section h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}
	
	.doc-section h2 {
		font-size: 1.75rem;
		margin: 2rem 0 1rem;
		color: var(--faf-black);
		border-bottom: 2px solid var(--faf-orange);
		padding-bottom: 0.5rem;
	}
	
	.doc-section h3 {
		font-size: 1.25rem;
		margin: 1.5rem 0 1rem;
		color: var(--faf-black);
	}
	
	.lead {
		font-size: 1.25rem;
		color: #666;
		margin-bottom: 2rem;
	}
	
	.iana-badge {
		background: linear-gradient(135deg, #fff9e6 0%, white 100%);
		border: 3px solid #ffd700;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.iana-badge h3 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
		font-size: 1.3rem;
	}

	.iana-badge p {
		margin: 0;
		color: #666;
		font-size: 1rem;
	}

	.iana-badge code {
		background: #f0f0f0;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9rem;
	}

	.positioning-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.position-card {
		background: white;
		border: 2px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.25rem;
		text-align: center;
	}

	.position-card h4 {
		margin: 0 0 0.5rem 0;
		font-size: 1rem;
		color: var(--faf-orange);
	}

	.position-card p {
		margin: 0;
		font-size: 0.875rem;
		color: #666;
	}

	.mcp-tagline {
		background: linear-gradient(135deg, #f0f4ff 0%, white 100%);
		border-left: 4px solid var(--faf-orange);
		padding: 1rem 1.5rem;
		margin: 1rem 0;
		border-radius: 4px;
	}

	.mcp-tagline p {
		margin: 0;
		font-size: 1.1rem;
		color: var(--faf-black);
	}

	.file-tree-box {
		background: linear-gradient(135deg, #f8f9fa 0%, white 100%);
		border: 2px solid #e0e0e0;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}

	.file-tree-box h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
		font-size: 1.25rem;
	}

	.file-tree-box > p {
		margin: 0 0 1rem 0;
		color: #666;
	}

	.file-tree {
		background: #1e1e1e;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.file-tree pre {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.9rem;
		line-height: 1.6;
		color: #d4d4d4;
	}

	.file-tree code {
		color: #d4d4d4;
	}

	.file-tree strong {
		color: var(--faf-orange);
		font-weight: 700;
	}

	.file-tree-caption {
		margin: 1rem 0 0 0;
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		text-align: center;
	}

	.quickstart-box {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border: 3px solid var(--faf-orange);
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}
	
	.code-block {
		background: var(--faf-black);
		color: white;
		padding: 1.5rem;
		border-radius: 8px;
		margin: 1rem 0;
		overflow-x: auto;
	}
	
	.code-block pre {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		line-height: 1.6;
	}
	
	.code-block code {
		color: white;
	}
	
	.btn-docs {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: var(--faf-orange);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: all 0.2s ease;
	}
	
	.btn-docs:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0,0,0,0.2);
	}
	
	.command-table {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}
	
	.command-table th {
		background: var(--faf-black);
		color: white;
		padding: 0.75rem;
		text-align: left;
		font-weight: 600;
	}
	
	.command-table td {
		padding: 0.75rem;
		border-bottom: 1px solid #e0e0e0;
	}
	
	.command-table code {
		background: #f0f0f0;
		padding: 0.125rem 0.375rem;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.875rem;
	}
	
	.doc-section ul {
		list-style: none;
		padding: 0;
		margin: 1rem 0;
	}
	
	.doc-section ul li {
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		position: relative;
	}
	
	.doc-section ul li:before {
		content: "☑️";
		position: absolute;
		left: 0;
	}
	
	.docs-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e0e0e0;
		text-align: center;
		color: #666;
	}
	
	.docs-footer a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}
	
	.docs-footer a:hover {
		text-decoration: underline;
	}
	
	.problem-box {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border-left: 4px solid #ff0000;
		padding: 1.5rem;
		margin: 1.5rem 0;
		border-radius: 8px;
	}

	.problem-box h3 {
		margin-top: 0;
		color: var(--faf-black);
	}

	.lead-small {
		font-size: 1.1rem;
		color: #666;
		font-style: italic;
		margin: 1rem 0;
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}

	.comparison-bad,
	.comparison-good {
		padding: 1.5rem;
		border-radius: 8px;
	}

	.comparison-bad {
		background: #fff5f5;
		border: 2px solid #ff6b6b;
	}

	.comparison-good {
		background: #f0fff4;
		border: 2px solid #51cf66;
	}

	.comparison-bad h4,
	.comparison-good h4 {
		margin-top: 0;
		font-size: 1.1rem;
	}

	.token-list {
		list-style: none;
		padding: 0;
		margin: 1rem 0;
	}

	.token-list li {
		padding: 0.5rem 0;
		padding-left: 0;
	}

	.token-list li:before {
		content: "";
	}

	.total-bad {
		font-weight: 700;
		color: #c92a2a;
		font-size: 1.1rem;
		margin-top: 1rem;
	}

	.total-good {
		font-weight: 700;
		color: #2b8a3e;
		font-size: 1.1rem;
		margin-top: 1rem;
	}

	.waste-label {
		color: #c92a2a;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.savings-label {
		color: #2b8a3e;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.stats-highlight {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin: 3rem 0;
		padding: 2rem;
		background: var(--faf-cream);
		border-radius: 12px;
	}

	.stat {
		text-align: center;
	}

	.stat-number {
		display: block;
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--faf-orange);
		margin-bottom: 0.5rem;
	}

	.stat-label {
		display: block;
		font-size: 0.9rem;
		color: #666;
		font-weight: 600;
	}

	.attribution {
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 1px solid #e0e0e0;
		font-size: 0.9rem;
		color: #666;
		font-weight: 600;
	}

	.dev-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.dev-card {
		background: white;
		border: 2px solid #e0e0e0;
		border-radius: 12px;
		padding: 1.5rem;
		transition: all 0.3s ease;
	}

	.dev-card:hover {
		border-color: var(--faf-orange);
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}

	.dev-card h3 {
		margin-top: 0;
		font-size: 1.1rem;
		color: var(--faf-black);
	}

	.dev-list {
		list-style: none;
		padding: 0;
		margin: 1rem 0;
	}

	.dev-list li {
		padding: 0.25rem 0;
		padding-left: 1.25rem;
		position: relative;
		font-size: 0.9rem;
	}

	.dev-list li:before {
		content: "→";
		position: absolute;
		left: 0;
		color: var(--faf-orange);
	}

	.btn-dev {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--faf-orange);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.875rem;
		transition: all 0.2s ease;
	}

	.btn-dev:hover {
		background: #e65a25;
		transform: translateY(-2px);
	}

	.contribute-box {
		background: linear-gradient(135deg, #f8f9fa 0%, white 100%);
		border: 2px solid var(--faf-orange);
		border-radius: 12px;
		padding: 2rem;
		margin-top: 2rem;
		text-align: center;
	}

	.contribute-box h3 {
		margin-top: 0;
		color: var(--faf-black);
	}

	.btn-contribute {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: var(--faf-black);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: all 0.2s ease;
		margin-top: 1rem;
	}

	.btn-contribute:hover {
		background: var(--faf-orange);
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0,0,0,0.2);
	}

	@media (max-width: 768px) {
		.docs-layout {
			grid-template-columns: 1fr;
		}

		.docs-sidebar {
			display: none;
		}

		.docs-content {
			padding: 2rem 1rem;
		}

		.positioning-grid {
			grid-template-columns: 1fr;
		}

		.comparison-grid {
			grid-template-columns: 1fr;
		}

		.stats-highlight {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.dev-grid {
			grid-template-columns: 1fr;
		}
	}
</style>