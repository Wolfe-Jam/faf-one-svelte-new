<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: WJTTC v1.2.0 — The TAF-Aware Edition

Tier 9 validates .taf receipts (Detection, Format, Integrity). Receipts aren't scored — they're proof.

52 tests across 9 tiers.`;
	const shareUrl = 'https://faf.one/blog/wjttc-taf-aware';
	const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>TAF-Aware Edition - WJTTC v1.2.0 | FAF</title>
	<meta name="description" content="WJTTC v1.2.0 adds Tier 9: TAF Receipt Validation. Receipts aren't scored - they're proof." />
	<meta property="og:title" content="TAF-Aware Edition - WJTTC v1.2.0" />
	<meta property="og:description" content="Tier 9 validates .taf receipts. 52 tests across 9 tiers." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / TAF-Aware Edition
		</div>
		<h1>TAF-Aware Edition</h1>
		<p class="subtitle">Tier 9 validates receipts. Trust builds over time.</p>
		<div class="meta">
			<time datetime="2026-02-03">February 3, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> WJTTC v1.2.0 adds Tier 9: TAF Receipt Validation. Three checks validate .taf files (Detection, Format, Integrity). Receipts aren't scored - they're proof. 52 tests across 9 tiers.
			</p>
		</section>

		<section>
			<h2>What's New</h2>

			<p><strong>Tier 9: TAF Receipt Validation</strong> - Receipt validator (not tester)</p>

			<p>Three validation checks:</p>
			<ul>
				<li><strong>T9.1: Receipt Detection</strong> - .taf file exists, readable, not empty</li>
				<li><strong>T9.2: Format Validation</strong> - Valid YAML, required fields, TAF v1.0.0 spec</li>
				<li><strong>T9.3: Data Integrity</strong> - ISO timestamps, valid results (PASSED/FAILED), consistent test counts</li>
			</ul>

			<p>When a project has a .taf receipt file, WJTTC now validates it and displays the history:</p>

			<div class="terminal-block">
				<pre><code>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIER 9: TAF RECEIPT ✓ VALID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Receipt: /path/to/project/.taf
Format: TAF v1.0.0
Total Runs: 47
Pass Rate: 97.8%
Current Streak: 12 consecutive passes
Last Run: 2026-02-02T18:30:00Z (PASSED)
First Run: 2025-12-15T10:00:00Z
Days Active: 49

Validation Checks:
   ✅ T9.1: Receipt Detection
   ✅ T9.2: Format Validation
   ✅ T9.3: Data Integrity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</code></pre>
			</div>

			<h3>The Philosophy</h3>
			<p><strong>Receipts aren't scored - they're proof.</strong></p>
			<p>Tier 9 is informational only. It doesn't affect the 0-100% score. A receipt is either valid or invalid (binary check). The receipt itself contains the performance data. WJTTC validates authenticity, not results.</p>

			<h3>Progressive Adoption</h3>
			<p><strong>7, 8, or 9 tiers - all work. Any level is fine.</strong></p>
			<ul>
				<li><strong>Tiers 1-7:</strong> Core MCP testing (foundation)</li>
				<li><strong>Tier 8:</strong> FAF (Claim - what you say you are)</li>
				<li><strong>Tier 9:</strong> TAF Receipt (Proof - builds trust over time)</li>
			</ul>
			<p>You don't need all 9 to be legitimate. Choose your level.</p>
		</section>

		<section>
			<h2>The CAR Framework</h2>
			<p>WJTTC is now aware of all three components:</p>
			<ul>
				<li><strong>C</strong>laim (.faf file) - Developer declares what project does</li>
				<li><strong>A</strong>udit (WJTTC tests) - Proves it works</li>
				<li><strong>R</strong>eceipt (.taf file) - Permanent record</li>
			</ul>
			<p><em>"No CAR = No transport."</em></p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g wjttc@1.2.0', 'install')}>
				<code class="copy-code">npm install -g wjttc@1.2.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('npx wjttc certify --mcp "npx your-server"', 'certify')}>
				<code class="copy-code">npx wjttc certify --mcp "npx your-server"</code>
				<button class="copy-btn">{copiedId === 'certify' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>If your project has a .taf file, Tier 9 will validate it automatically.</p>

			<div class="tip-box">
				<p><strong>💡 Pre-Certification Tip:</strong> Run <a href="/blog/boris-flow">Boris-Flow</a> before certification to validate your <code>project.faf</code> structure. Boris-Flow's 12 tests ensure your .faf file is ready for Tier 8 validation.</p>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.2.0</strong> - Released February 3, 2026</li>
				<li><strong>52 tests</strong> - 49 scored + 3 validation checks</li>
				<li><strong>9 tiers</strong> - Progressive adoption model</li>
				<li><strong>105/105</strong> - Internal tests passing</li>
				<li><strong>100%</strong> - FAF Score (maintained)</li>
			</ul>
		</section>

		<section>
			<h2>What's Next</h2>
			<p>The WJTTC product page is now live at <a href="/wjttc">/wjttc</a> - explore the 4-Layer Enforcement System and see how championship-grade testing achieves 15x faster commits. Professional Edition launches Q2 2026.</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Receipts aren't scored - they're proof. 🏎️</p>
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
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
		color: #1a1a1a;
		background: #FEFCF8;
		min-height: 100vh;
	}

	.post-header {
		margin-bottom: 3rem;
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

	h1 {
		font-size: 3rem;
		margin: 0.5rem 0;
		color: #000;
		font-weight: 700;
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
		background: #00bf63;
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

	p {
		margin-bottom: 1.25rem;
	}

	ul {
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

	.terminal-block {
		background: #1a1a1a;
		padding: 1.5rem;
		border-radius: 8px;
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.terminal-block pre {
		margin: 0;
		background: transparent;
	}

	.terminal-block code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		color: #00ff88;
		background: transparent;
		padding: 0;
		font-size: 0.85rem;
		line-height: 1.5;
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
		padding: 1.5rem;
		background: #f9f9f9;
		border-radius: 8px;
		text-align: center;
		font-size: 1rem;
		color: #666;
	}

	strong {
		color: #000;
		font-weight: 600;
	}

	em {
		font-style: italic;
		color: #555;
	}

	.tip-box {
		background: linear-gradient(135deg, rgba(0, 212, 212, 0.1) 0%, rgba(0, 212, 212, 0.05) 100%);
		border: 1px solid #00D4D4;
		border-left: 4px solid #00D4D4;
		border-radius: 8px;
		padding: 1.25rem;
		margin: 1.5rem 0;
	}

	.tip-box p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.tip-box a {
		color: var(--faf-cyan-text);
		font-weight: 600;
		text-decoration: none;
	}

	.tip-box a:hover {
		text-decoration: underline;
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
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-code-multi {
		flex: 1;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
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
		.blog-post {
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.lead {
			font-size: 1.1rem;
		}
	}
</style>
