<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-cli v5.0.0 — The RAM Edition

Bi-sync is core. Tri-sync adds more. It adds RAM — auto-syncing with Claude's MEMORY.md.

npm i -g faf-cli`;
	const shareUrl = 'https://faf.one/blog/ram-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The RAM Edition - faf-cli v5.0.0 | FAF</title>
	<meta name="description" content="Bi-sync is core. Tri-sync adds more. What does it add? It adds RAM — auto-syncing with Claude's MEMORY.md. The first major version in 2026." />
	<meta property="og:title" content="The RAM Edition - faf-cli v5.0.0" />
	<meta property="og:description" content="Bi-sync is core. Tri-sync adds more. It adds RAM — auto-syncing with Claude's MEMORY.md." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The RAM Edition
		</div>

		<h1>The RAM Edition</h1>
		<p class="version-tag">faf-cli v5.0.0</p>
		<p class="subtitle">Bi-sync is core. Tri-sync adds more.</p>
		<div class="meta">
			<time datetime="2026-03-01">March 1, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>.faf</code> is ROM &mdash; persistent, portable, yours forever. tri-sync adds RAM: it auto-syncs with Claude's MEMORY.md. For builders, serious coders, and app-makers.
			</p>
		</section>

		<!-- ============================================================ -->
		<!-- WHAT IS .faf?                                                -->
		<!-- ============================================================ -->

		<section>
			<h2>What is .faf?</h2>

			<p>Think of <code>package.json</code>. Every developer knows it. It tells Node what your project needs. Now imagine a file that tells <em>AI</em> what your project is.</p>

			<p>That's <code>project.faf</code>. The <strong>README for AI</strong>. The <strong>package.json for AI context</strong>.</p>

			<div class="screenshot-box">
				<img src="/project-faf-screenshot.png" alt="project.faf sitting alongside package.json in a project directory" class="screenshot" />
				<p class="screenshot-caption">project.faf sits at the root, right next to package.json. One file. Always there.</p>
			</div>

			<p>It lives at the root of your project. It's YAML. It's structured. And every AI tool &mdash; Claude, Gemini, Grok, Cursor &mdash; can read it instantly. No more explaining your project from scratch every session.</p>
		</section>

		<!-- ============================================================ -->
		<!-- THE 3Ws — EVERYONE CAN HAVE AN APP                          -->
		<!-- ============================================================ -->

		<section>
			<h2>The 3Ws &mdash; Everyone Can Have an App</h2>

			<p>You don't need to be a developer to describe an app idea. You just need 3 answers.</p>

			<div class="w-cards">
				<div class="w-card w1">
					<div class="w-number">1W</div>
					<div class="w-label">WHO</div>
					<div class="w-desc">Who is it for?</div>
				</div>
				<div class="w-card w2">
					<div class="w-number">2W</div>
					<div class="w-label">WHAT</div>
					<div class="w-desc">What does it do?</div>
				</div>
				<div class="w-card w3">
					<div class="w-number">3W</div>
					<div class="w-label">WHY</div>
					<div class="w-desc">Why build it?</div>
				</div>
			</div>

			<p>That's it. Three questions anyone can answer. A teacher, a chef, a parent with an idea for an app &mdash; they don't need to know TypeScript or React. They just need WHO, WHAT, WHY.</p>

			<p>We built a page for this: <a href="/ideas"><strong>faf.one/ideas</strong></a>. Type 3 answers, get a project.faf. Hand it to any AI and start building.</p>

			<div class="insight-box">
				<h3>The first 3 = the idea</h3>
				<p>Anyone can answer WHO, WHAT, WHY. That's the whole point.</p>
			</div>
		</section>

		<!-- ============================================================ -->
		<!-- THE 6Ws — THE FULL PICTURE                                  -->
		<!-- ============================================================ -->

		<section>
			<h2>The 6Ws &mdash; The Full Picture</h2>

			<p>The 3Ws describe the idea. The next 3 describe the implementation. Together they're the <a href="/6ws"><strong>6Ws</strong></a> &mdash; the complete DNA of any project.</p>

			<div class="w-cards">
				<div class="w-card w4">
					<div class="w-number">4W</div>
					<div class="w-label">WHERE</div>
					<div class="w-desc">Where does it live? (npm, Vercel, AWS)</div>
				</div>
				<div class="w-card w5">
					<div class="w-number">5W</div>
					<div class="w-label">WHEN</div>
					<div class="w-desc">When? (Phase, timeline, status)</div>
				</div>
				<div class="w-card w6">
					<div class="w-number">6W</div>
					<div class="w-label">HOW</div>
					<div class="w-desc">How is it built? (Stack, tools, testing)</div>
				</div>
			</div>

			<p>In v5.0.0 we reordered the 6Ws. WHY moved from 4W to 3W. The split is now clean:</p>

			<div class="split-box">
				<div class="split-half idea-half">
					<strong>1W&ndash;3W = The Idea</strong>
					<p>WHO, WHAT, WHY</p>
					<span class="split-note">Anyone can answer these</span>
				</div>
				<div class="split-half impl-half">
					<strong>4W&ndash;6W = The Implementation</strong>
					<p>WHERE, WHEN, HOW</p>
					<span class="split-note">Developer fills these in</span>
				</div>
			</div>

			<p>All 6 answers live in one file: <code>project.faf</code>. The README for AI. The package.json for AI context.</p>
		</section>

		<!-- ============================================================ -->
		<!-- TRI-SYNC — ROM MEETS RAM                                    -->
		<!-- ============================================================ -->

		<section>
			<h2>tri-sync &mdash; ROM meets RAM</h2>

			<p><code>.faf</code> has always been ROM. Persistent project context that survives anything. bi-sync mirrors it to CLAUDE.md. That's free, and always will be.</p>
			<p>tri-sync adds the third leg: RAM. It auto-syncs your project context to Claude's MEMORY.md &mdash; the file Claude Code auto-loads into every session. Your AI remembers across sessions.</p>

			<div class="flow-diagram">
				<div class="flow-box rom-ram">
					<code>bi-sync  = ROM (.faf) &harr; CLAUDE.md</code><br/>
					<code>tri-sync = ROM &harr; CLAUDE.md &harr; RAM (MEMORY.md)</code>
				</div>
			</div>

			<div class="copy-box" onclick={() => copyText('faf tri-sync', 'trisync')}>
				<code class="copy-code">faf tri-sync</code>
				<button class="copy-btn">{copiedId === 'trisync' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('faf ram', 'ram')}>
				<code class="copy-code">faf ram</code>
				<button class="copy-btn">{copiedId === 'ram' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('faf bi-sync --ram', 'bisyncram')}>
				<code class="copy-code">faf bi-sync --ram</code>
				<button class="copy-btn">{copiedId === 'bisyncram' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<!-- ============================================================ -->
		<!-- PRO GATE                                                     -->
		<!-- ============================================================ -->

		<section>
			<h2>Pro Gate &mdash; Zero Friction</h2>

			<p>tri-sync is a Pro feature. 14-day free trial, no signup, no credit card. Run a Pro command and you're in.</p>
			<p>After the trial? bi-sync keeps working. You just lose the RAM leg. No crash, no guilt trip, no dark patterns.</p>

			<div class="copy-box" onclick={() => copyText('faf pro', 'pro')}>
				<code class="copy-code">faf pro</code>
				<button class="copy-btn">{copiedId === 'pro' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p class="pricing-note">Early-bird: $3/mo &middot; $19/yr (normally $10/mo &mdash; 70% off)</p>
		</section>

		<!-- ============================================================ -->
		<!-- THE TRIANGLE                                                 -->
		<!-- ============================================================ -->

		<section>
			<h2>The Triangle</h2>

			<div class="sync-table">
				<table>
					<thead>
						<tr>
							<th>Sync</th>
							<th>Target</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>bi-sync</td>
							<td><code>.faf</code> &harr; CLAUDE.md</td>
							<td class="free">Free forever</td>
						</tr>
						<tr>
							<td>bi-sync</td>
							<td><code>.faf</code> &harr; AGENTS.md, .cursorrules, GEMINI.md</td>
							<td class="free">Free forever</td>
						</tr>
						<tr class="pro-row">
							<td><strong>tri-sync</strong></td>
							<td><code>.faf</code> &harr; CLAUDE.md &harr; <strong>MEMORY.md</strong></td>
							<td class="pro">Pro</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- ============================================================ -->
		<!-- TRY IT                                                       -->
		<!-- ============================================================ -->

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@5.0.0', 'install')}>
				<code class="copy-code">npm install -g faf-cli@5.0.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('npx faf-cli@latest tri-sync', 'npx')}>
				<code class="copy-code">npx faf-cli@latest tri-sync</code>
				<button class="copy-btn">{copiedId === 'npx' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli" class="cta-link">faf-cli</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">faf-cli@5.0.0</a>
				</div>
			</div>
		</section>

		<!-- ============================================================ -->
		<!-- THE NUMBERS                                                  -->
		<!-- ============================================================ -->

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v5.0.0</strong> &mdash; Released March 1, 2026</li>
				<li><strong>1,100/1,100</strong> &mdash; Tests passing (49 suites)</li>
				<li><strong>100%</strong> &mdash; FAF Score (Trophy) &#127942;</li>
				<li><strong>33,000+</strong> &mdash; Total downloads (11 packages, 3 registries)</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf &#9745; Bi-sync is core. Tri-sync adds more. &#127956;
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

	/* Screenshot */
	.screenshot-box {
		margin: 2rem 0;
		text-align: center;
	}

	.screenshot {
		max-width: 100%;
		border-radius: 12px;
		border: 2px solid #ddd;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
	}

	.screenshot-caption {
		font-size: 0.9rem;
		color: #888;
		margin-top: 0.75rem;
		font-style: italic;
	}

	/* W Cards */
	.w-cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		margin: 2rem 0;
	}

	.w-card {
		padding: 1.25rem;
		border-radius: 10px;
		text-align: center;
		border: 2px solid #eee;
		background: #fafafa;
	}

	.w-number {
		font-size: 0.8rem;
		font-weight: 700;
		color: #999;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.25rem;
	}

	.w-label {
		font-size: 1.4rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
	}

	.w-desc {
		font-size: 0.9rem;
		color: #666;
	}

	.w1 { border-color: #FF6B35; }
	.w1 .w-label { color: #FF6B35; }
	.w2 { border-color: #00D4D4; }
	.w2 .w-label { color: var(--faf-cyan-text); }
	.w3 { border-color: #00aa55; }
	.w3 .w-label { color: #00aa55; }
	.w4 { border-color: #888; }
	.w4 .w-label { color: #555; }
	.w5 { border-color: #888; }
	.w5 .w-label { color: #555; }
	.w6 { border-color: #888; }
	.w6 .w-label { color: #555; }

	/* Insight box */
	.insight-box {
		background: #f0fff0;
		border: 2px solid #00aa55;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00aa55;
		margin: 0 0 0.5rem 0;
		font-size: 1.3rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.1rem;
		color: #006622;
	}

	/* Split box */
	.split-box {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
		margin: 2rem 0;
		border-radius: 10px;
		overflow: hidden;
		border: 2px solid #ddd;
	}

	.split-half {
		padding: 1.5rem;
		text-align: center;
	}

	.split-half strong {
		display: block;
		font-size: 1rem;
		margin-bottom: 0.25rem;
	}

	.split-half p {
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	.split-note {
		font-size: 0.85rem;
		color: #888;
		font-style: italic;
	}

	.idea-half {
		background: #fff5f0;
		border-right: 2px solid #ddd;
	}

	.idea-half strong { color: #FF6B35; }
	.idea-half p { color: #FF6B35; }

	.impl-half {
		background: #f8f8f8;
	}

	.impl-half strong { color: #555; }
	.impl-half p { color: #555; }

	/* Flow diagram */
	.flow-diagram {
		background: #f8f8f8;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		text-align: center;
	}

	.flow-box {
		display: inline-block;
		padding: 1.5rem 2rem;
		border-radius: 8px;
		text-align: left;
	}

	.flow-box.rom-ram {
		background: #1a1a1a;
		color: #00D4D4;
		border: 2px solid #00D4D4;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.95rem;
		line-height: 2;
	}

	.flow-box.rom-ram code {
		background: none;
		color: #00D4D4;
		padding: 0;
		font-size: 1em;
	}

	.pricing-note {
		font-size: 0.95rem;
		color: #888;
		font-style: italic;
	}

	/* Sync table */
	.sync-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.sync-table table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}

	.sync-table th {
		text-align: left;
		padding: 0.75rem 1rem;
		background: #f8f8f8;
		border-bottom: 2px solid #ddd;
		font-weight: 600;
	}

	.sync-table td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #eee;
	}

	.sync-table .free {
		color: #00aa44;
		font-weight: 600;
	}

	.sync-table .pro {
		color: #FF6B35;
		font-weight: 600;
	}

	.sync-table .pro-row {
		background: #fff5f0;
	}

	/* CTA grid */
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

		.w-cards {
			grid-template-columns: 1fr;
		}

		.split-box {
			grid-template-columns: 1fr;
		}

		.idea-half {
			border-right: none;
			border-bottom: 2px solid #ddd;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
