<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-cli v6.15.0 — The Copilot Edition

FAF now writes the file GitHub Copilot reads. faf export --copilot emits .github/copilot-instructions.md from your scored .faf.

npm i -g faf-cli`;
	const shareUrl = 'https://faf.one/blog/copilot-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Copilot Edition - faf-cli v6.15.0 | FAF</title>
	<meta name="description" content="FAF now writes the file GitHub Copilot reads. faf export --copilot emits .github/copilot-instructions.md — the widest-surface Copilot instruction file — straight from your scored .faf." />
	<meta property="og:title" content="The Copilot Edition - faf-cli v6.15.0" />
	<meta property="og:description" content="One .faf, every instruction file. Now including .github/copilot-instructions.md — honored across every Copilot surface, on by default." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/copilot-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/copilot-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Copilot Edition
		</div>
		<h1>The Copilot Edition</h1>
		<p class="version-tag">faf-cli v6.15.0</p>
		<p class="subtitle">FAF now writes the file GitHub Copilot reads.</p>
		<div class="meta">
			<time datetime="2026-06-24">June 24, 2026</time>
			<span class="separator">•</span>
			<span class="category interop">Interop</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/copilot-edition-hero.png" alt="faf-cli v6.15.0 The Copilot Edition — one scored .faf emitting GitHub Copilot's instruction file" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf export --copilot</code> now emits <code>.github/copilot-instructions.md</code> — the widest-surface Copilot instruction file — straight from your scored <code>.faf</code>. And <code>faf git</code> is hardened against URL command injection on the way in.
			</p>
		</section>

		<section>
			<h2>The file GitHub Copilot reads</h2>
			<p>
				GitHub spent 2025 consolidating. Copilot Extensions and the GitHub-App path were sunset. What survived: <strong>two surfaces</strong> — MCP servers and instruction files. There is no "instruction provider API." GitHub's supported model is literally <em>write the file into the repo</em>. So the tool that <em>generates</em> the file is first-class.
			</p>
			<p>
				<code>.github/copilot-instructions.md</code> is the widest of those files — honored <strong>by default</strong> across web chat, code review, VS Code, JetBrains, the Copilot CLI, and the coding agent. Broader reach than AGENTS.md, which only the agentic surfaces read.
			</p>
			<p>FAF already emitted CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md. Now it emits the Copilot file too — from the same scored source:</p>

			<div class="terminal-block">
				<code>faf export --copilot</code>
			</div>

			<p>
				Non-destructive faf-block injection, idempotent, auto-creates <code>.github/</code>. It's in the default <code>export</code> and in <code>--all</code>, so you don't have to think about it:
			</p>

			<div class="terminal-block">
				<code>faf export --all</code>
			</div>

			<p>
				Five instruction files. One <code>.faf</code>. AGENTS.md and copilot-instructions.md coexist — no override, both honored — so emitting both is the maximum-surface move. <strong>FAF defines; the files instruct.</strong>
			</p>
		</section>

		<section>
			<h2>Hardened on the way in</h2>
			<p>
				<code>faf git</code> takes a GitHub URL and turns it into a scored <code>.faf</code>. It used to build <code>git clone … $&#123;url&#125;</code> and run it through a shell — a crafted URL could execute arbitrary commands.
			</p>
			<p>
				Fixed at the structure level: a strict <code>normalizeGitUrl</code> (allowlist, rejects shell metacharacters) plus a no-shell <code>execFileSync</code> clone. Injection isn't blocked by a filter you can outwit — it's <strong>structurally impossible</strong>.
			</p>
		</section>

		<section>
			<h2>All five WJTTC tiers</h2>
			<p>
				The audit was running blind in one lane. <code>faf wjttc</code> now recognizes all five tiers — <strong>TYRE</strong> (live, the real road) was missing, so live tests were mislabeled untiered.
			</p>
			<p>The new Git suite exercises every tier on the real path: a real <code>git clone</code> → a real <code>.faf</code> → a real score.</p>
			<div class="terminal-block">
				<code>BRAKE · ENGINE · AERO · TYRE · PIT</code>
			</div>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g faf-cli@6.15.0</code>
				<code>faf export --copilot</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v6.15.0</strong> — released June 24, 2026</li>
				<li><strong>5 instruction files</strong> — CLAUDE.md, AGENTS.md, .cursorrules, GEMINI.md, copilot-instructions.md — from one <code>.faf</code></li>
				<li><strong>6 Copilot surfaces</strong> — web chat, code review, VS Code, JetBrains, CLI, coding agent — all read the one file</li>
				<li><strong>5 WJTTC tiers</strong> — BRAKE · ENGINE · AERO · TYRE · PIT</li>
				<li><strong>URL injection</strong> — structurally impossible</li>
				<li><strong>IANA-registered</strong> — <code>.faf</code> is a registered media type</li>
			</ul>
		</section>

		<section>
			<h2>Next: 7.0, The Git Edition</h2>
			<p>
				This edition ships the Copilot file and hardens the door. The full story — <code>faf git</code> as the GitHub-native engine (URL → scored <code>.faf</code>, no clone), a reusable Action, PR checks and a README badge — is the run-up to <strong>7.0, The Git Edition</strong>. The name is reserved. The work is underway.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>If you like our work, consider a star on the repo — it helps others find us too.</p>
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="star-btn">Star faf-cli on GitHub</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Define once. Sync everywhere. 🏎️</p>
		</section>
	</article>
</div>

<style>
	/* Light theme — plain :global(body), no !important (prevents nav flash) */
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		color: #1a1a1a;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
	}

	.post-header {
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		color: #333;
	}
	.breadcrumb a {
		color: #00D4D4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.6rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #FF6B35;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #333;
		font-weight: 500;
		margin: 0 0 1rem;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator { color: #1a1a1a; }
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.interop { background: #7D3C98; }

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.7rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: #1a1a1a;
		letter-spacing: -0.01em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.lead {
		font-size: 1.15rem;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.5rem;
		color: #1a1a1a;
	}

	/* Inline code — bg + color paired (theming rule: never inherit text on a styled bg) */
	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	/* Terminal block — dark bg, terminal-green command text (the one carve-out) */
	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.95rem;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}
	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.5rem;
		border-radius: 6px;
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.share-btn:hover {
		background: #000;
	}

	.star-cta {
		margin-top: 2.5rem;
		text-align: center;
	}
	.star-cta p {
		color: #333;
		margin: 0 0 1rem;
	}
	.star-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.5rem;
		border-radius: 6px;
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		background: #FF6B35;
		color: #1a1a1a;
	}
	.star-btn:hover {
		background: #ff7d4d;
	}

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
	}
	.footer-note p {
		color: #333;
		font-weight: 600;
	}

	@media (max-width: 640px) {
		h1 { font-size: 2rem; }
		h2 { font-size: 1.4rem; }
	}
</style>
