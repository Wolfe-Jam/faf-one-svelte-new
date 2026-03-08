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
</script>

<svelte:head>
	<title>WJTTC Goes FAF-Aware - Testing the Tester | FAF</title>
	<meta name="description" content="WJTTC now validates project.faf files during MCP certification. The championship standard gets smarter. 100% 🏆🍊 Best-in-Class." />
	<meta property="og:title" content="WJTTC Goes FAF-Aware - Testing the Tester" />
	<meta property="og:description" content="The championship MCP testing standard now validates FAF documentation. Enterprise capabilities on the FAF Foundation." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / WJTTC Goes FAF-Aware
		</div>
		<h1>🍊 WJTTC Goes FAF-Aware</h1>
		<p class="subtitle">Testing the Tester - The McLaren Standard Gets Smarter</p>
		<div class="meta">
			<time datetime="2026-02-02">February 2, 2026</time>
			<span class="separator">•</span>
			<span class="category wjttc">WJTTC Ecosystem</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/wjttc-orange-cars.png" alt="1977 Ford Escort Mexico Mk2 rally car and McLaren F1 car racing side by side in papaya orange - Heritage meets innovation" />
		<p class="image-caption">Heritage meets innovation: 1977 Ford Escort Mk2 & McLaren F1 in papaya orange 🏎️🍊</p>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> WJTTC—the championship-grade MCP server certification tool—now validates FAF documentation during testing. The testing standard understands project DNA. FAF and WJTTC working together to demonstrate enterprise capabilities on the FAF Foundation.
			</p>
		</section>

		<section>
			<h2>WJTTC = The McLaren-Inspired Technology Centre for AI</h2>
			<p>
				WJTTC is finding its own identity. It's the F1-inspired testing arm of the ecosystem—championship-grade standards, precision engineering, and zero tolerance for failures.
			</p>
			<p>
				<strong>FAF is WJTTC's default client.</strong> As we grow, we demonstrate enterprise capabilities on the FAF Foundation itself.
			</p>

			<p class="highlight">
				<strong>The WJTTC Philosophy:</strong><br>
				"We break it, so others don't even know it was ever broke!"
			</p>
		</section>

		<section>
			<h2>The Orange Story</h2>
			<p>
				WJTTC = <strong>Wolfe-Jam Technical+Testing Center</strong> is inspired by McLaren Formula One Racing.
			</p>
			<p>
				Wolfejam, an F1-nut, discovered that McLaren introduced <strong>Papaya Orange</strong> in 1968—the same year he was born. The coincidence became a philosophy.
			</p>
			<p>
				Today, he uses the <strong>Big Orange 🍊</strong> as his Sign of Quality—"The Michelin Star for Repos." In his xAI/Grok work for Elon Musk, he also refers to planet Mars as the Big Orange 🚀🍊.
			</p>
			<p>
				<strong>Fun fact:</strong> Wolfejam's first car was orange—a 1977 Ford Escort Mexico Mk2 in Signal Orange 77 (Paint Code L or HN) with a black vinyl roof. Championship-grade attention to detail, even down to paint codes. 🏎️
			</p>

			<div class="video-container">
				<video autoplay loop muted playsinline>
					<source src="/blog/wjttc-testing-scroll.mov" type="video/mp4">
					Your browser does not support the video tag.
				</video>
				<p class="video-caption">WJTTC Testing Center documentation - Championship-grade testing philosophy in action 🏎️</p>
			</div>
		</section>

		<section>
			<h2>What Changed</h2>
			<p>WJTTC v1.1.0 now includes FAF-awareness:</p>

			<div class="terminal-block">
				<code>npx wjttc certify --mcp "npx your-server"

# Now includes FAF validation:
FAF Documentation:
   File: /path/to/project.faf
   Embedded Score: 98%
   Current Score: 100%
   💡 Run with --update-faf to update score</code>
			</div>

			<p>During MCP certification, WJTTC now:</p>
			<ul>
				<li>✅ Detects <code>project.faf</code> in the repo</li>
				<li>✅ Parses the embedded <code>ai_score</code></li>
				<li>✅ Rescores using current <code>faf-cli</code></li>
				<li>✅ Compares embedded vs current score</li>
				<li>✅ Optionally updates with <code>--update-faf</code></li>
			</ul>
		</section>

		<section>
			<h2>The Philosophy: Test the Testing</h2>
			<p><strong>WJTTC tested itself.</strong></p>

			<p>On December 2, 2025, WJTTC launched with a FAF score of <strong>98%</strong>. The project was new, unproven, and had room to grow.</p>

			<p>Two months later (February 2, 2026), WJTTC had:</p>
			<ul>
				<li>✅ Shipped v1.1.0 to npm</li>
				<li>✅ Published to MCP Registry</li>
				<li>✅ Certified 3 Big Orange servers (100% 🏆🍊)</li>
				<li>✅ Passed 105/105 tests</li>
				<li>✅ Built FAF-awareness feature</li>
			</ul>

			<p><strong>Then WJTTC rescored itself:</strong></p>

			<div class="terminal-block">
				<code>cd /path/to/wjttc
npx wjttc certify --mcp "..." --update-faf

FAF Documentation:
   Embedded Score: 98%
   Current Score: 100%
   ✅ Score updated in project.faf</code>
			</div>

			<p class="highlight">
				<strong>Result:</strong> 100% 🏆<br>
				The score was <strong>earned</strong> through shipping, testing, and validation.
			</p>

			<p><em>The system doesn't play favorites. Even for its creator.</em></p>
		</section>

		<section>
			<h2>Big Orange Truth: 100% 🏆🍊 = Best-in-Class</h2>

			<h3>Score: 0-100% (Hard Maximum)</h3>
			<ul>
				<li>100% 🏆 = Trophy (perfect MCP compliance)</li>
				<li>99% 🥇 = Gold</li>
				<li>95% 🥈 = Silver</li>
				<li>85% 🥉 = Bronze</li>
			</ul>

			<p><strong>There is no 105%. No percentages above 100%.</strong></p>

			<h3>Big Orange 🍊 = Badge (Awarded)</h3>
			<p>Big Orange is a <strong>badge</strong> awarded for excellence beyond metrics:</p>
			<ul>
				<li>Must score 100% 🏆 (gate requirement)</li>
				<li>Must demonstrate championship-grade engineering</li>
				<li>Awarded by maintainers, not auto-calculated</li>
			</ul>

			<p class="highlight"><strong>Format: 100% 🏆🍊 = Best-in-Class</strong></p>

			<h3>Current Big Orange Holders</h3>
			<ul>
				<li><strong>claude-faf-mcp</strong> - 100% 🏆🍊</li>
				<li><strong>faf-mcp</strong> - 100% 🏆🍊</li>
				<li><strong>grok-faf-mcp</strong> - 100% 🏆🍊</li>
			</ul>
		</section>

		<section>
			<h2>How to Use It</h2>

			<h3>Read-Only Validation (Default)</h3>
			<div class="copy-box" onclick={() => copyText('npx wjttc certify --mcp "npx your-server"', 'certify')}>
				<code class="copy-code">npx wjttc certify --mcp "npx your-server"</code>
				<button class="copy-btn">{copiedId === 'certify' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Detects and scores FAF file. No modifications.</p>

			<h3>Update Score if Improved</h3>
			<div class="copy-box" onclick={() => copyText('npx wjttc certify --mcp "npx your-server" --update-faf', 'certify-update')}>
				<code class="copy-code">npx wjttc certify --mcp "npx your-server" --update-faf</code>
				<button class="copy-btn">{copiedId === 'certify-update' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Updates embedded score if current > embedded.</p>

			<h3>Safety Features</h3>
			<ul>
				<li>✅ Read-only by default</li>
				<li>✅ Creates backup: <code>{`project.faf.backup-{timestamp}`}</code></li>
				<li>✅ Surgical updates (only score fields)</li>
				<li>✅ Preserves all other data</li>
			</ul>
		</section>

		<section>
			<h2>The 98% → 100% Journey</h2>

			<div class="code-comparison">
				<div>
					<h4>December 2, 2025 (Launch)</h4>
					<div class="terminal-block">
						<code>ai_score: 98%</code>
					</div>
					<p>Why 98%? The project was brand new—not yet battle-tested, no production usage, needed to prove itself.</p>
					<p><em>The system told the truth: "You're excellent, but not done yet."</em></p>
				</div>

				<div>
					<h4>February 2, 2026 (Earned)</h4>
					<div class="terminal-block">
						<code>ai_score: 100%
ai_scoring_details:
  last_rescored: 2026-02-02T23:55:51.233Z
  rescored_by: wjttc-certifier</code>
					</div>
					<p>Score earned through shipping v1.1.0, publishing to MCP Registry, certifying servers, and building FAF-awareness.</p>
					<p><em>The system doesn't play favorites.</em></p>
				</div>
			</div>
		</section>

		<section>
			<h2>The Quote</h2>
			<blockquote class="big-quote">
				<p>"If your car can do 220 mph, your brakes better fucking work!"</p>
				<cite>— wolfejam</cite>
			</blockquote>
			<p>WJTTC does 220 mph (championship-grade testing).<br>The brakes work (FAF validation).</p>
			<p><strong>The system proves itself.</strong></p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g wjttc', 'install')}>
				<code class="copy-code">npm install -g wjttc</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('npx wjttc certify --mcp "npx your-server"', 'try-certify')}>
				<code class="copy-code">npx wjttc certify --mcp "npx your-server"</code>
				<button class="copy-btn">{copiedId === 'try-certify' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="tip-box">
				<p><strong>💡 Pre-Certification Tip:</strong> Run <a href="/blog/boris-flow">Boris-Flow</a> before certification to validate your <code>project.faf</code> structure. Boris-Flow's 12 tests ensure your .faf file is ready for Tier 8 validation.</p>
			</div>
		</section>

		<section>
			<h2>The WJTTC Ecosystem</h2>

			<h3>WJTTC Certifier (npm)</h3>
			<p>
				The core certification tool. 49 tests across 8 weighted tiers for MCP server compliance. Automated scoring, badge generation, and now FAF validation. Install globally or run via npx.
			</p>

			<h3>WJTTC Skills (Claude Code)</h3>
			<p>
				<strong>/wjttc-builder</strong> - Auto-generate championship-grade test suites for any project. Analyzes codebases, identifies critical test tiers (Brake/Engine/Aero), creates comprehensive test plans.
			</p>
			<p>
				<strong>/wjttc-tester</strong> - F1-inspired testing expert. Tests software with championship standards, finds bugs, validates functionality, performs edge case analysis, writes detailed WJTTC reports.
			</p>

			<h3>WJTTC Testing Centers</h3>
			<p>
				The testing philosophy scales across languages and platforms. See <a href="https://github.com/Wolfe-Jam/faf-rust-sdk/blob/main/WJTTC-TESTING-CENTER.md" target="_blank">faf-rust-sdk</a> for Rust implementation with corruption recovery suite and 19ms average execution time.
			</p>

			<p class="highlight">
				<strong>The philosophy:</strong> "We break it, so others don't even know it was ever broke!"
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.1.0</strong> - Released December 2, 2025</li>
				<li><strong>FAF-Aware</strong> - February 2, 2026</li>
				<li><strong>105/105</strong> - Tests passing</li>
				<li><strong>100% 🏆</strong> - WJTTC's earned score</li>
				<li><strong>3 servers</strong> - Big Orange certified (100% 🏆🍊)</li>
				<li><strong>261 lines</strong> - Clean FAF validation code</li>
			</ul>
		</section>

		<section>
			<h2>Links</h2>
			<ul>
				<li><a href="https://www.npmjs.com/package/wjttc" target="_blank">npm: wjttc</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc" target="_blank">GitHub: Wolfe-Jam/wjttc</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc/blob/main/SPECIFICATION.md" target="_blank">Specification</a></li>
				<li><a href="https://github.com/modelcontextprotocol/servers" target="_blank">MCP Registry</a></li>
			</ul>
		</section>

		<section>
			<h2>Coming Next: The Golden Triangle</h2>
			<p class="highlight">
				<strong>WJTTC now has the Claim (FAF).</strong><br>
				Next: The Receipt (TAF).
			</p>
			<p>
				<strong>C</strong>laim → <strong>A</strong>udit → <strong>R</strong>eceipt
			</p>
			<p>
				The CAR Framework. The Golden Triangle. Git-tracked test history. Permanent proof.
			</p>
			<p>
				<strong>"No CAR = No transport."</strong>
			</p>
			<p style="text-align: center; font-style: italic; color: #666;">
				Part II coming soon. 🏎️
			</p>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ The McLaren-Inspired standard for MCP testing 🏎️🍊</p>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 2px solid #eee;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: 0 -1rem 3rem -1rem;
		overflow: hidden;
		border-radius: 8px;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 8px;
	}

	.image-caption {
		text-align: center;
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		margin-top: 0.5rem;
		padding: 0 1rem;
	}

	.video-container {
		margin: 2rem 0;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.video-container video {
		width: 100%;
		height: auto;
		display: block;
	}

	.video-caption {
		text-align: center;
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		margin-top: 0.5rem;
		padding: 0 1rem;
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

	ul {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin: 0.5rem 0;
		color: #333;
	}

	.code-comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
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
		color: #00D4D4;
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
		font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-code-multi {
		flex: 1;
		font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
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
		.code-comparison {
			grid-template-columns: 1fr;
		}
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
