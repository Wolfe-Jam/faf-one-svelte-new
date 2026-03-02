<script lang="ts">
	import { onMount } from 'svelte';

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
</script>

<svelte:head>
	<title>FAF Pro Launch - tri-sync for Loyal Builders | FAF</title>
	<meta name="description" content="FAF Pro is live. Persistent session memory (RAM) across every AI session. Steel blue means business. From $3/mo." />
	<meta property="og:title" content="FAF Pro Launch - tri-sync for Loyal Builders" />
	<meta property="og:description" content="Persistent session memory across every AI session. Steel blue means business. From $3/mo." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / FAF Pro Launch
		</div>

		<h1>Loyal Builders Show Steel</h1>
		<p class="version-tag">FAF Pro</p>
		<p class="subtitle">Define once. Remember forever.</p>
		<div class="meta">
			<time datetime="2026-03-02">March 2, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> FAF Pro is live. tri-sync gives you persistent project context (ROM) and session memory (RAM) that survives across every AI session. No re-explaining. No context drift. Your AI remembers. Early-adopter pricing from a dime a day.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>Every time you start a new Claude session, you re-explain. Your stack. Your conventions. Your architecture decisions. The context you carefully built last session? Gone.</p>

			<p>bi-sync solved half of this — <code>.faf</code> and <code>CLAUDE.md</code> stay mirrored, free, forever. But what about AGENTS.md? What about .cursorrules? What about GEMINI.md? What about session memory that persists across every tool?</p>

			<p>That's tri-sync.</p>
		</section>

		<section>
			<h2>ROM + RAM</h2>

			<div class="rom-ram-diagram">
				<div class="rom-box">
					<h3>ROM: Your .faf file</h3>
					<p>The single source of truth. Project DNA — stack, conventions, architecture — defined once in structured YAML.</p>
				</div>
				<div class="arrow">→</div>
				<div class="ram-box">
					<h3>RAM: Session memory</h3>
					<p>CLAUDE.md becomes persistent memory. Your AI remembers project context, decisions, and conventions across every session. No re-explaining.</p>
				</div>
			</div>

			<p>tri-sync keeps your .faf in sync with CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md — so every AI tool gets the same persistent memory.</p>
		</section>

		<section>
			<h2>Steel Blue Means Business</h2>

			<p>You'll notice something different. Pro doesn't wear orange.</p>

			<p>Orange is fun, free, and friendly — the original FAF brand for every developer. Pro wears steel blue. Derived from the faf.one banner. Hard-cutting. We mean business.</p>

			<p>The license email arrives in steel blue. The <a href="/pro">Pro page</a> is steel blue. It's a different tier, a different energy.</p>
		</section>

		<section>
			<h2>Early-Adopter Pricing</h2>

			<div class="pricing-summary">
				<div class="price-row">
					<div class="price-label">Monthly</div>
					<div class="price-amount">$3/mo</div>
					<div class="price-note">A dime a day. 70% off.</div>
				</div>
				<div class="price-row recommended-row">
					<div class="price-label">Annual</div>
					<div class="price-amount">$19/yr</div>
					<div class="price-note">A nickel a day. 84% off.</div>
				</div>
				<div class="price-row">
					<div class="price-label">Global (CLI + MCP)</div>
					<div class="price-amount">$29/yr</div>
					<div class="price-note">Two apps, one price. 88% off.</div>
				</div>
			</div>

			<p>These rates lock in forever. When prices go up for new subscribers, yours stays the same. The more you commit, the more you save.</p>
		</section>

		<section>
			<h2>How It Works</h2>

			<p><strong>Step 1:</strong> Subscribe at <a href="/pro">faf.one/pro</a>. License key arrives via email.</p>

			<p><strong>Step 2:</strong> Activate.</p>

			<div class="copy-box" onclick={() => copyText('faf pro activate FAF-XXXX-XXXX-XXXX-XXXX', 'activate')}>
				<code class="copy-code">faf pro activate FAF-XXXX-XXXX-XXXX-XXXX</code>
				<button class="copy-btn">{copiedId === 'activate' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p><strong>Step 3:</strong> Sync.</p>

			<div class="copy-box" onclick={() => copyText('faf tri-sync', 'sync')}>
				<code class="copy-code">faf tri-sync</code>
				<button class="copy-btn">{copiedId === 'sync' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>ROM (project DNA) + RAM (session memory) — persistent context that survives across every session. That's the real unlock.</p>
		</section>

		<section>
			<h2>What Stays Free</h2>

			<p>Everything that's free today stays free forever:</p>

			<ul>
				<li><code>faf init</code>, <code>faf go</code>, <code>faf git</code>, <code>faf score</code></li>
				<li>bi-sync (.faf ↔ CLAUDE.md) — the foundation</li>
				<li>All 153+ format detections</li>
				<li>All core CLI features</li>
			</ul>

			<p>tri-sync is the Pro feature. bi-sync stays free. Your existing generated files stay even if you don't subscribe — they just won't auto-update.</p>
		</section>

		<section>
			<h2>The Pipeline</h2>

			<p>The whole flow is wired end-to-end:</p>

			<ol>
				<li>Stripe Payment Link → checkout</li>
				<li>Webhook fires → license key generated (<code>FAF-XXXX-XXXX-XXXX-XXXX</code>)</li>
				<li>License emailed via Resend (steel blue for Pro)</li>
				<li><code>faf pro activate</code> → tri-sync unlocked</li>
			</ol>

			<p>No database dependency. No account creation. No login. Just a license key in your inbox, 30 seconds after checkout.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@latest', 'install')}>
				<code class="copy-code">npm install -g faf-cli@latest</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>Subscribe</h3>
					<p>Early-adopter pricing. Lock in your rate.</p>
					<a href="/pro" class="cta-link">faf.one/pro →</a>
				</div>
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Star the repo. Read the source.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli" class="cta-link">faf-cli →</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>faf-cli v5</strong> — Pro Gate ships with tri-sync</li>
				<li><strong>1,100+</strong> — Tests passing</li>
				<li><strong>33,000+</strong> — Downloads across 3 registries</li>
				<li><strong>IANA-registered</strong> — The only standardized AI context format</li>
				<li><strong>3 tiers</strong> — $3/mo, $19/yr, $29/yr</li>
			</ul>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Loyal Builders show steel. 🏎️
			</p>
		</section>
	</article>
</div>

<style>
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
		border-bottom: 3px solid #4682B4;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #4682B4;
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
		background: #4682B4;
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
		background: #4682B4;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f0f5fa;
		border-radius: 8px;
		border-left: 4px solid #4682B4;
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

	a {
		color: #4682B4;
	}

	a:hover {
		text-decoration: none;
	}

	/* ROM/RAM diagram */
	.rom-ram-diagram {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1.5rem;
		align-items: center;
		margin: 2rem 0;
	}

	.rom-box, .ram-box {
		background: #f8f8f8;
		border: 2px solid #ddd;
		border-radius: 8px;
		padding: 1.5rem;
		text-align: center;
	}

	.rom-box {
		border-color: #4682B4;
	}

	.rom-box h3 {
		color: #4682B4;
		margin: 0 0 0.75rem 0;
	}

	.ram-box {
		border-color: #4682B4;
		background: #f0f5fa;
	}

	.ram-box h3 {
		color: #4682B4;
		margin: 0 0 0.75rem 0;
	}

	.rom-box p, .ram-box p {
		margin: 0;
		font-size: 0.95rem;
		color: #555;
	}

	.arrow {
		font-size: 2rem;
		color: #4682B4;
		font-weight: 700;
	}

	/* Pricing summary */
	.pricing-summary {
		background: #f8f8f8;
		border: 2px solid #4682B4;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.price-row {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		align-items: center;
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
	}

	.price-row:last-child {
		border-bottom: none;
	}

	.recommended-row {
		background: rgba(70, 130, 180, 0.08);
		border-radius: 4px;
		margin: 0 -0.5rem;
		padding: 0.75rem 0.5rem;
	}

	.price-label {
		font-weight: 700;
		color: #333;
	}

	.price-amount {
		font-weight: 900;
		font-size: 1.3rem;
		color: #4682B4;
	}

	.price-note {
		color: #666;
		font-size: 0.95rem;
		margin: 0;
	}

	/* Copy boxes */
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
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(70, 130, 180, 0.2);
		border: 1px solid rgba(70, 130, 180, 0.4);
		color: #4682B4;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(70, 130, 180, 0.3); border-color: #4682B4; }
	.copy-btn:active { transform: scale(0.95); }

	/* CTA grid */
	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #4682B4;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #4682B4;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #4682B4;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.rom-ram-diagram {
			grid-template-columns: 1fr;
		}

		.arrow {
			transform: rotate(90deg);
			text-align: center;
		}

		.price-row {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
