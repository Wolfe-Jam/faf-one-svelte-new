<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: faf-cli v7.0.0 — The GIT Version

FAF is to Context what Git is to Versions.

Diff, log, guard, and pull your project.faf at any ref. Git-native context — purely additive.

npm i -g faf-cli`;
	const shareUrl = 'https://faf.one/blog/git-version';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The GIT Version - faf-cli v7.0.0 | FAF</title>
	<meta name="description" content="FAF is to Context what Git is to Versions. v7.0 makes project.faf a git-native artifact you can diff, log, guard with a pre-commit hook, and pull at any ref — score delta and all. Purely additive." />
	<meta property="og:title" content="The GIT Version - faf-cli v7.0.0" />
	<meta property="og:description" content="Git gave code diff, log, blame, and hooks. v7.0 gives context the same. Diff, log, guard, and pull your project.faf at any ref." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/git-version-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/git-version-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The GIT Version
		</div>
		<h1>The GIT Version</h1>
		<p class="version-tag">faf-cli v7.0.0 · 🏆</p>
		<p class="subtitle">FAF is to Context what Git is to Versions.</p>
		<div class="meta">
			<time datetime="2026-06-27">June 27, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/git-version-hero.png" alt="faf-cli v7.0.0 The GIT Version — FAF is to Context what Git is to Versions" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Git gave <em>code</em> diff, log, blame, and hooks. <strong>v7.0 gives <em>context</em> the same.</strong> Your <code>project.faf</code> is now a git-native artifact you can <code>diff</code>, <code>log</code>, guard with a pre-commit hook, and pull at any ref — score delta and all. Purely additive: every existing command is unchanged, so it's a safe upgrade.
			</p>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.0.0</code>
			</div>
		</section>

		<section>
			<p class="thesis">FAF is to Context what Git is to Versions.</p>
			<p>
				For a decade, Git versioned your <strong>code</strong>. Every line has a history you can <code>diff</code>, <code>log</code>, <code>blame</code>, and gate in CI. But your <strong>context</strong> — the project DNA an AI reads to understand your repo — had none of that. It sat in a file and drifted.
			</p>
			<p>
				v7.0 closes the gap. <code>project.faf</code> stops merely <em>living</em> in your repo and becomes a first-class git citizen: <strong>diffable, loggable, guardable, and pullable at any ref.</strong> The thesis FAF was built on, made concrete in the tool you already run.
			</p>
		</section>

		<section>
			<h2>Teased in the Copilot Edition. Shipped here.</h2>
			<p>
				We closed <a href="/blog/copilot-edition">The Copilot Edition</a> with a promise: <em>"Next: 7.0, The Git Edition. The name is reserved. The work is underway."</em> Here it is.
			</p>
			<p>
				One change from that note — it shipped as <strong>The GIT Version</strong>, not an Edition. A round major number is earned, not scheduled, and git-native context earned 7.0. (More on that below.)
			</p>
		</section>

		<section>
			<h2>1 · <code>faf diff</code> — a semantic context diff</h2>
			<p>
				<code>faf diff</code> isn't a text diff. It's a <strong>semantic</strong> one. It reads two versions of your <code>.faf</code>, maps every change to its registry slot — added, changed, removed — and shows you what <em>meaning</em> changed, alongside the deterministic <strong>score delta</strong> between them.
			</p>
			<div class="terminal-block">
				<code>faf diff HEAD~5</code>
			</div>
			<p>
				<code>85% ● → 100% 🏆</code> right next to <code>tsc → vite</code>. Git-range aware — <code>&lt;ref&gt;</code>, <code>A..B</code>, <code>A...B</code> — and <code>--json</code> for your pipeline.
			</p>
		</section>

		<section>
			<h2>2 · The git diff-driver — native git, FAF-aware</h2>
			<p>
				Install it once and <strong>native git speaks FAF</strong>. <code>git diff</code>, <code>git log -p</code>, and <code>git show</code> render the <code>.faf</code> <em>delta</em> — slots and score — in place of a wall of raw YAML.
			</p>
			<div class="terminal-block">
				<code>faf diff --install-driver</code>
			</div>
			<p>
				It wires <code>.gitattributes</code> + <code>diff.faf.command</code>. A <em>command</em> driver, deliberately — a context delta is cross-file, not line-by-line.
			</p>
		</section>

		<section>
			<h2>3 · <code>faf log</code> — the score timeline</h2>
			<p>
				<code>faf log</code> is your <strong>score timeline</strong>: the <code>.faf</code> score at every commit that ever touched it, with per-commit deltas.
			</p>
			<div class="terminal-block">
				<code>faf log</code>
			</div>
			<p>
				This is <strong>Proof-Over-Time</strong>. Anyone can hit 100% once — the trend across your history is the thing that <em>can't</em> be gamed.
			</p>
		</section>

		<section>
			<h2>4 · <code>faf hooks</code> — a pre-commit context guard</h2>
			<p>
				<code>faf hooks --install</code> drops a pre-commit <strong>context guard</strong>. It scores the staged <code>.faf</code> against HEAD and warns on a regression — or, with <code>--strict</code>, blocks the commit.
			</p>
			<div class="terminal-block">
				<code>faf hooks --install</code>
			</div>
			<p>
				It <strong>fails open</strong>, it's husky-safe, and it never clobbers an existing hook. Your context can't quietly rot anymore — the gate is right where you commit.
			</p>
		</section>

		<section>
			<h2>The on-ramp, now versioned</h2>
			<p>
				<code>faf git</code> turns any GitHub URL into scored context in one command. In 7.0 it's <strong>versioned</strong>: pull a <code>.faf</code> at any <code>--ref</code> (branch or tag), write it <code>--output</code> anywhere, or stream it to <code>--stdout</code>.
			</p>
			<div class="terminal-block">
				<code>faf git https://github.com/owner/repo --ref v2.0</code>
			</div>
			<p>
				And it no longer overwrites an existing <code>project.faf</code> — it refuses. Your context is safe by default.
			</p>
		</section>

		<section>
			<h2>Why a Version, not an Edition</h2>
			<p>
				Since the Copilot Edition, every release has been a chapter heading pointing here. GIT is the major. So we treated 7.0 like a major.
			</p>
			<p>
				Before shipping, we ran a <strong>completeness audit</strong> that mined the whole FAF fleet's history of <code>.0.1</code> patches — every time a clean round number needed a quick fix — to predict and eliminate what would force one here. A version-ordering guard so the driver and hooks refuse to wire to a pre-7.0 <code>faf</code>. CRLF, lint, edge-hardening across the quartet. The goal: make the <strong>.0 last</strong>.
			</p>
			<p>
				One behaviour changed: <code>faf git</code> used to silently overwrite your <code>project.faf</code>. Now it refuses (use <code>--force</code>, <code>--output</code>, or <code>--stdout</code>). That's the single non-additive change in 7.0 — and it protects you. Everything else is purely additive, so upgrading is safe.
			</p>
		</section>

		<section>
			<h2>100%, every tier</h2>
			<p>
				The WJTTC test suite is now <strong>100% 5-tiered</strong> — every test classified BRAKE · ENGINE · AERO · TYRE · PIT (it was 45% untiered). The audit was running blind in some lanes; now every lane is named.
			</p>
			<div class="terminal-block">
				<code>BRAKE · ENGINE · AERO · TYRE · PIT</code>
			</div>
			<p>
				And a note on the marks you'll see: <strong>🏆 and ✪ both mean 100%.</strong> We use <strong>✪</strong> — the Proof Seal — on code surfaces like the CLI, the docs, and the skills, and <strong>🏆</strong> in posts, blogs, and cards like this one. Same score, two surfaces.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.0.0</code>
				<code>faf diff --install-driver</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v7.0.0</strong> — released June 27, 2026</li>
				<li><strong>4 git-native commands</strong> — diff · diff-driver · log · hooks</li>
				<li><strong>5 WJTTC tiers</strong> — BRAKE · ENGINE · AERO · TYRE · PIT, 100% classified</li>
				<li><strong>Score delta</strong> — deterministic, in every diff</li>
				<li><strong>4,796 + 1,780</strong> — last-30-day npm downloads (faf-cli + faf)</li>
				<li><strong>IANA-registered</strong> — <code>.faf</code> is <code>application/vnd.faf+yaml</code></li>
				<li><strong>Purely additive</strong> — safe upgrade, zero migration</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>If you like our work, consider a star on the repo — it helps others find us too.</p>
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="star-btn">
				<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
				Star faf-cli
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Define once. Run anywhere. 🏎️</p>
		</section>
	</article>
</div>

<style>
	/* Light theme — plain :global(body), no !important (prevents nav flash) */
	:global(body) {
		background: var(--faf-page-bg);
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
	.category.release { background: #00B8B8; }

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
	/* h2 inline code — keep the command in the heading legible, not a pill */
	h2 code {
		background: transparent;
		color: #FF6B35;
		padding: 0;
		font-size: 0.92em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.lead {
		font-size: 1.15rem;
	}

	/* Thesis pull-quote — the one big line, brand orange, no gradient */
	.thesis {
		font-size: 1.5rem;
		font-weight: 800;
		color: #FF6B35;
		letter-spacing: -0.01em;
		line-height: 1.3;
		margin: 0 0 1.25rem;
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
		gap: 0.45rem;
		padding: 0.45rem 0.9rem;
		border-radius: 6px;
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.star-btn svg {
		display: block;
	}
	.star-btn:hover {
		background: #000;
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
		.thesis { font-size: 1.25rem; }
	}
</style>
