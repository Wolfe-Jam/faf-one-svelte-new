<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-cli v4.2.2 — Context Quality Edition

Slot-ignore mechanism fully documented. Like .gitignore for files, slot-ignore for context slots. The perfect way to handle app types.`;
	const shareUrl = 'https://faf.one/blog/context-quality';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Context Quality Edition - faf-cli v4.2.2 | FAF</title>
	<meta name="description" content="Slot-ignore mechanism fully documented. Like .gitignore for files, slot-ignore for context slots. The perfect way to handle app types." />
	<meta property="og:title" content="Context Quality Edition - faf-cli v4.2.2" />
	<meta property="og:description" content="Slot-ignore mechanism fully documented. The perfect way to handle app types." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Context Quality Edition
		</div>

		<h1>Context Quality Edition</h1>
		<p class="version-tag">faf-cli v4.2.2</p>
		<p class="subtitle">Slot-ignore: The perfect way to handle app types.</p>
		<div class="meta">
			<time datetime="2026-02-08">February 8, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We built slot-ignore years ago but never properly documented it. Like <code>.gitignore</code> for files and <code>.fafignore</code> for scanning, slot-ignore marks context slots as "not applicable" to your project type. Now it's fully documented with comprehensive specs and examples.
			</p>
		</section>

		<section>
			<h2>What's Slot-Ignore?</h2>

			<p>FAF has 21 context slots. Not all slots apply to every project type. Slot-ignore handles this elegantly:</p>

			<pre><code>{`# CLI Tool - 21 slots total
stack:
  database: None           # ✅ Ignored (CLI doesn't need database)
  css_framework: None      # ✅ Ignored (no web UI)
  backend: Node.js         # ✅ Filled (has value)
  # ... other slots

Score: (Filled + Ignored) / 21 = 100% 🏆`}</code></pre>

			<h3>The Formula</h3>

			<div class="insight-box">
				<p><strong>Total Slots: 21</strong> (constant)</p>
				<p>├── Filled: 15 (has values)</p>
				<p>├── Ignored: 6 (set to 'None' - not applicable)</p>
				<p>└── Missing: 0 (undefined - needs attention)</p>
				<p style="margin-top: 1rem; font-size: 1.2rem;"><strong>Score: (15 + 6) / 21 = 100%</strong></p>
			</div>

			<h3>Common Patterns</h3>

			<p><strong>CLI Tools:</strong> Ignore <code>database</code>, <code>css_framework</code>, <code>frontend</code></p>
			<p><strong>Backend APIs:</strong> Ignore <code>css_framework</code>, <code>frontend</code>, <code>ui_library</code></p>
			<p><strong>Static Sites:</strong> Ignore <code>backend</code>, <code>database</code>, <code>api_type</code></p>
			<p><strong>Libraries:</strong> Ignore <code>hosting</code>, <code>cicd</code>, <code>database</code></p>
		</section>

		<section>
			<h2>What's New in v4.2.2</h2>

			<h3>✨ Comprehensive Documentation</h3>
			<ul>
				<li>Full specification in <code>docs/SLOT-IGNORE.md</code></li>
				<li>Quick reference in <code>docs/SLOT-IGNORE-QUICK-REF.md</code></li>
				<li>README section with examples</li>
				<li>🎯 SLOT-IGNORE markers throughout codebase</li>
			</ul>

			<h3>✨ Improvements</h3>

			<h4>6 Ws Extraction - Transformed</h4>
			<ul>
				<li><strong>WHO:</strong> Checks package.json author first (TIER 1 authoritative)</li>
				<li><strong>WHAT:</strong> package.json description now TIER 1 (was TIER 2)</li>
				<li><strong>WHY:</strong> Targets Mission sections, uses keywords as fallback</li>
				<li><strong>WHERE:</strong> npm packages → "npm registry + GitHub" (authoritative)</li>
				<li><strong>WHEN:</strong> Version number is TIER 1 (0.x = beta, ≥1.0 = production)</li>
				<li><strong>HOW:</strong> Tech stack analysis is TIER 1 (inferred from dependencies)</li>
				<li>Added <code>getCleanedReadme()</code> helper to strip HTML/badges/noise</li>
			</ul>

			<h4>Slot-Ignore Mechanism - Overhauled</h4>
			<ul>
				<li>Standardized to <code>'None'</code> (was inconsistent: 'N/A (CLI)', 'None', etc.)</li>
				<li>Added <code>database: 'None'</code> for Node.js CLI projects</li>
				<li>Improved yaml-generator logic: <code>if (!database && database !== 'None')</code></li>
				<li>CLI projects now correctly exclude non-applicable slots from missing_context</li>
			</ul>

			<h4>README - Added WHO Section</h4>
			<p>Better target audience extraction for the WHO field.</p>

			<h3>📈 Results</h3>
			<ul>
				<li>Score improvement: <strong>74% → 86% → 100%</strong> (after <code>faf auto</code>)</li>
				<li>All dogfooding tests passing (7/7)</li>
				<li>missing_context: <strong>None</strong> - fully specified!</li>
				<li>673/687 tests passing (14 dev-only tests)</li>
			</ul>
		</section>

		<section>
			<h2>The Philosophy</h2>

			<div class="insight-box">
				<h3>Ignored ≠ Missing</h3>
				<p>Ignored = "Doesn't apply, and that's correct."</p>
				<p style="margin-top: 0.5rem;">Missing = "Should be filled but isn't."</p>
			</div>

			<p>Slot-ignore makes the 21-slot system work for any project type. A CLI tool doesn't need a database slot. A static site doesn't need a backend slot. Setting these to <code>'None'</code> tells the scoring engine: "We checked. Doesn't apply. That's correct."</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@4.2.2', 'install')}>
				<code class="copy-code">npm install -g faf-cli@4.2.2</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Or update:</p>

			<div class="copy-box" onclick={() => copyText('npm update -g faf-cli', 'update')}>
				<code class="copy-code">npm update -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'update' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>View the source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v4.2.2" class="cta-link">v4.2.2 Release</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">faf-cli</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v4.2.2</strong> - Released February 8, 2026</li>
				<li><strong>673/687</strong> - Tests passing (14 dev-only)</li>
				<li><strong>100%</strong> - Trophy score 🏆</li>
				<li><strong>21,000+</strong> - npm downloads</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ The perfect way to handle app types. 🏎️
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
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
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
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
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #FF6B35;
		color: white;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	h4 {
		font-size: 1.1rem;
		margin: 1.5rem 0 0.75rem 0;
		color: #555;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	.insight-box {
		background: #f0fff0;
		border: 2px solid #00aa44;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.insight-box h3 {
		color: #00aa44;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0.5rem 0;
		font-size: 1.1rem;
		color: #006622;
	}

	.terminal-block {
		background: #1a1a1a;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.terminal-block code {
		display: block;
		color: #00ff88;
		background: none;
		padding: 0.25rem 0;
		font-size: 1rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

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
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-code-multi {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.6;
	}
	.code-comment { color: #666; font-weight: 400; }
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
