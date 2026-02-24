<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>WJTTC v1.3.0 - Championship Testing for Everyone | FAF</title>
	<meta name="description" content="WJTTC adds wjttc init command - Self-hosting infrastructure brings championship-grade testing to any project. Service to the army of free devs." />
	<meta property="og:title" content="WJTTC v1.3.0 - Championship Testing for Everyone" />
	<meta property="og:description" content="Free devs get championship-grade testing infrastructure. One command sets up Rocket Science Grade standards." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / WJTTC Self-Hosting
		</div>
		<h1>🏎️ Championship Testing for Everyone</h1>
		<p class="subtitle">WJTTC v1.3.0: Self-Hosting Infrastructure</p>
		<div class="meta">
			<time datetime="2026-02-17">February 17, 2026</time>
			<span class="separator">•</span>
			<span class="category wjttc">WJTTC Ecosystem</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> WJTTC v1.3.0 adds <code>wjttc init</code>—one command that sets up championship-grade testing infrastructure in any project. Free MCP certification + free testing setup = service to the army of free devs.
			</p>
		</section>

		<section>
			<h2>What Changed</h2>
			<p>WJTTC is now both a <strong>certification tool</strong> AND a <strong>testing infrastructure provider</strong>.</p>

			<div class="terminal-block">
				<code>npm install -g wjttc@1.3.0
wjttc init

🚀 WJTTC Initialization Complete!

✅ Test directories created (brake/engine/aero)
✅ Pre-commit hook installed (Rocket Science Grade)
✅ package.json scripts added
✅ Example brake test generated
✅ WJTTC-TESTING.md created

Your project now has championship-grade testing infrastructure.</code>
			</div>

			<p>One command. Five setup steps. Championship standards installed.</p>
		</section>

		<section>
			<h2>The Philosophy: Service to Free Devs</h2>
			<p><strong>"Give away the razor, sell the blades."</strong></p>

			<p>WJTTC already provides free MCP certification—52 tests across 9 tiers, scoring from 0-100%, published to npm with zero ads or announcements.</p>

			<p>Now WJTTC gives away the testing infrastructure too:</p>

			<ul>
				<li>✅ Test directory structure (Brake/Engine/Aero)</li>
				<li>✅ Pre-commit hooks with Rocket Science Grade branding</li>
				<li>✅ package.json scripts (test:brake, test:wjttc)</li>
				<li>✅ Example tests with helpful comments</li>
				<li>✅ Full testing documentation</li>
			</ul>

			<p class="highlight">
				<strong>Free Community Edition:</strong> Test your MCP server + Set up your testing<br>
				<strong>Paid Team/Enterprise:</strong> Advanced features for organizations<br>
				<br>
				Same model as FAF. Professional. Trusted.
			</p>
		</section>

		<section>
			<h2>What Gets Installed</h2>

			<h3>1. Test Directory Structure</h3>
			<div class="terminal-block">
				<code>tests/
├── brake/          # Fast, critical tests (&lt;30s)
├── engine/         # Core functionality
└── aero/           # Performance benchmarks</code>
			</div>

			<h3>2. Pre-Commit Hook</h3>
			<p>Extracted from <code>faf-enterprise</code> with Rocket Science Grade branding:</p>
			<div class="terminal-block">
				<code>#!/bin/bash
# WJTTC Pre-Commit Hook
# Rocket Science-Grade Testing Enforcement

echo "🚀 WJTTC Pre-Commit Certification"

# Step 1: TypeScript strict mode check
npm run typecheck || exit 1

# Step 2: Brake tests (&lt;30s execution)
npm run test:brake || exit 1

echo "✅ Pre-commit checks passed"</code>
			</div>

			<h3>3. package.json Scripts</h3>
			<div class="terminal-block">
				<code>{`{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "test:brake": "jest tests/brake --maxWorkers=4 --no-coverage",
    "test:engine": "jest tests/engine --maxWorkers=4",
    "test:aero": "jest tests/aero",
    "test:wjttc": "jest && echo [WJTTC CERTIFICATION BANNER]"
  }
}`}</code>
			</div>

			<h3>4. Example Brake Test</h3>
			<p>Generated with helpful comments explaining the WJTTC philosophy:</p>
			<div class="terminal-block">
				<code>{`// TIER 1: BRAKE Tests
// Fast, critical tests that MUST pass before commit
// Target: &lt;30s total execution time

describe('BRAKE: Critical Path', () => {
  it('should validate core functionality', () => {
    // Your critical test here
    expect(true).toBe(true);
  });
});`}</code>
			</div>

			<h3>5. Documentation</h3>
			<p>Full <code>WJTTC-TESTING.md</code> explaining the 3-tier system, pre-commit workflow, and certification process.</p>
		</section>

		<section>
			<h2>The Rocket Science Grade Standard</h2>
			<p>This infrastructure was extracted from <code>faf-enterprise</code>—a monorepo running 833 tests with 4-layer enforcement:</p>

			<div class="code-layers">
				<div class="layer">
					<h4>Layer 1: TypeScript Strict Mode</h4>
					<p>Zero runtime errors. Strict null checks. No implicit any.</p>
				</div>

				<div class="layer">
					<h4>Layer 2: Brake Tests (&lt;30s)</h4>
					<p>Fast, critical tests run on every commit. Pre-commit hook enforced.</p>
				</div>

				<div class="layer">
					<h4>Layer 3: Full Test Suite</h4>
					<p>Engine + Aero tiers. Comprehensive validation before merge.</p>
				</div>

				<div class="layer">
					<h4>Layer 4: Verification</h4>
					<p>Production build check. Final gate before release.</p>
				</div>
			</div>

			<p class="highlight">
				<strong>faf-enterprise status:</strong> 788/833 tests passing ✅<br>
				(44 skipped - Enterprise license-gated monorepo tests)
			</p>
		</section>

		<section>
			<h2>Try It Now</h2>

			<h3>New Project</h3>
			<div class="terminal-block">
				<code>npm install -g wjttc@1.3.0
cd your-project
wjttc init</code>
			</div>

			<h3>Existing Project</h3>
			<div class="terminal-block">
				<code># Preserves existing tests
wjttc init

# Creates:
# - tests/brake (if not exists)
# - .githooks/pre-commit
# - Adds scripts to package.json
# - Generates example tests</code>
			</div>

			<h3>Then Certify</h3>
			<div class="terminal-block">
				<code>npx wjttc certify --mcp "npx your-server"

# Get your score (0-100%)
# See tier badge (🏆/🥇/🥈/🥉/🟢/🟡/🔴)
# Validate FAF file (if present)
# Check TAF Receipt (if present)</code>
			</div>
		</section>

		<section>
			<h2>The Full Ecosystem</h2>

			<h3>Three Ways to Use WJTTC</h3>
			<ol>
				<li><strong>Certification Only:</strong> Test your MCP server, get a score (free)</li>
				<li><strong>Infrastructure Setup:</strong> <code>wjttc init</code> in your project (free)</li>
				<li><strong>Team/Enterprise:</strong> Advanced features, support, custom certification (paid)</li>
			</ol>

			<h3>WJTTC Tools</h3>
			<ul>
				<li><strong>wjttc</strong> (npm) - Certifier + infrastructure provider</li>
				<li><strong>/wjttc-builder</strong> (Claude Code skill) - Auto-generate test suites</li>
				<li><strong>/wjttc-tester</strong> (Claude Code skill) - F1-inspired testing expert</li>
			</ul>

			<h3>Integration with FAF Ecosystem</h3>
			<ul>
				<li>Works with or without <code>project.faf</code> files</li>
				<li>Validates FAF scores (Tier 8)</li>
				<li>Checks TAF Receipts (Tier 9)</li>
				<li>Progressive adoption: 7, 8, or 9 tiers—all valid</li>
			</ul>
		</section>

		<section>
			<h2>The Army of Free Devs</h2>
			<blockquote class="big-quote">
				<p>"We are a service to the army of free devs!"</p>
				<cite>— wolfejam</cite>
			</blockquote>

			<p>WJTTC has 100+ free downloads with zero ads or announcements. The tool works. The certification is real. The standards are championship-grade.</p>

			<p>Now the infrastructure is free too.</p>

			<p><strong>Why?</strong> Because testing should be accessible. Championship standards shouldn't require enterprise budgets. Free devs deserve F1-grade tools.</p>

			<p class="highlight">
				<strong>The business model:</strong><br>
				Free Community = Testing certification + Infrastructure setup<br>
				Paid Team/Enterprise = Professional support + Advanced features<br>
				<br>
				Same as FAF. Professional. Boring. Trusted.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.3.0</strong> - Released February 17, 2026</li>
				<li><strong>103/103</strong> - Tests passing</li>
				<li><strong>100% 🏆</strong> - WJTTC's FAF score (earned)</li>
				<li><strong>52 tests</strong> - Across 9 tiers (49 scored + 3 validation checks)</li>
				<li><strong>3 servers</strong> - Big Orange certified (100% 🏆🍊)</li>
				<li><strong>100+</strong> - Free downloads (zero ads)</li>
			</ul>
		</section>

		<section>
			<h2>What's New in v1.3.0</h2>
			<ul>
				<li>✅ <code>wjttc init</code> command - Self-hosting infrastructure setup</li>
				<li>✅ Pre-commit hook template - Extracted from faf-enterprise</li>
				<li>✅ Testing infrastructure templates - Enable universal adoption</li>
				<li>✅ Example tests with helpful comments</li>
				<li>✅ Full documentation generation</li>
			</ul>
		</section>

		<section>
			<h2>Links</h2>
			<ul>
				<li><a href="https://www.npmjs.com/package/wjttc" target="_blank">npm: wjttc</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc" target="_blank">GitHub: Wolfe-Jam/wjttc</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc/releases/tag/v1.3.0" target="_blank">Release Notes</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc/blob/main/SPECIFICATION.md" target="_blank">Specification</a></li>
			</ul>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Service to the army of free devs 🏎️</p>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 2px solid #eee;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #00D4D4;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0.5rem 0;
		color: #000;
	}

	.subtitle {
		font-size: 1.3rem;
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
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-weight: 500;
		font-size: 0.85rem;
	}

	.category.wjttc {
		background: #00bf63;
		color: white;
	}

	.intro {
		background: #fff5f0;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		margin-bottom: 2rem;
	}

	.lead {
		font-size: 1.1rem;
		margin: 0;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.8rem;
		color: #000;
		margin: 2rem 0 1rem 0;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		color: #333;
		margin: 1.5rem 0 0.75rem 0;
	}

	h4 {
		font-size: 1.1rem;
		color: #FF6B35;
		margin: 1rem 0 0.5rem 0;
	}

	p {
		margin: 1rem 0;
		color: #333;
	}

	.highlight {
		background: #fffaf0;
		border-left: 4px solid #FF6B35;
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 4px;
	}

	.terminal-block {
		background: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 6px;
		padding: 1rem;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.terminal-block code {
		font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
		font-size: 0.9rem;
		color: #333;
		white-space: pre;
		display: block;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'SF Mono', Monaco, monospace;
		font-size: 0.9em;
		color: #c7254e;
	}

	ul, ol {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin: 0.5rem 0;
		color: #333;
	}

	.code-layers {
		display: grid;
		gap: 1rem;
		margin: 2rem 0;
	}

	.layer {
		background: #f9f9f9;
		border-left: 4px solid #00bf63;
		padding: 1rem;
		border-radius: 4px;
	}

	.layer h4 {
		margin: 0 0 0.5rem 0;
		color: #00bf63;
	}

	.layer p {
		margin: 0;
		font-size: 0.95rem;
	}

	.big-quote {
		background: #fffaf0;
		border-left: 4px solid #FF6B35;
		padding: 1.5rem 2rem;
		margin: 2rem 0;
		border-radius: 8px;
	}

	.big-quote p {
		font-size: 1.4rem;
		font-weight: 500;
		font-style: italic;
		color: #000;
		margin: 0 0 1rem 0;
	}

	.big-quote cite {
		font-size: 1rem;
		color: #666;
		font-style: normal;
	}

	blockquote {
		border-left: 4px solid #ddd;
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		color: #666;
		font-style: italic;
	}

	a {
		color: #00D4D4;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.footer-note {
		text-align: center;
		padding: 2rem 0;
		border-top: 2px solid #eee;
		margin-top: 3rem;
	}

	.footer-note p {
		color: #666;
		font-style: italic;
	}
</style>
