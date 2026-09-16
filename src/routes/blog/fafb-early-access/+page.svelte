<!-- pubblog: early access. Spine from mcp-better-matching-client (gold). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `🏁 FAFb 0.9 — early access

faf-cli is MIT and free, 21 slots. FAFb is the full Rust version for teams: 33 slots across a monorepo, compiled to a ROM your agent boots.

Invite-only drive: free access, one honest hour, your answers shape 1.0.
compile runs on a 14-day trial — no card, no signup.

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/fafb-early-access';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Context, compiled — FAFb 0.9 early access | FAF</title>
	<meta
		name="description"
		content="FAFb is FAF compiled: your project's 33 facts sealed to a ROM your agent boots. The full Rust version, for teams. Invite-only drives are open before 1.0."
	/>
	<meta property="og:title" content="Context, compiled — FAFb 0.9 early access" />
	<meta
		property="og:description"
		content="faf-cli is MIT and free, 21 slots. FAFb is the full Rust version for teams: 33 slots across a monorepo, compiled to a ROM your agent boots."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/fafb-early-access" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/fafb-early-access-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/fafb-early-access-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Context, compiled — FAFb 0.9, the full Rust version for teams" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Context, compiled — FAFb 0.9 early access" />
	<meta
		name="twitter:description"
		content="The full Rust version, for teams: 33 slots across a monorepo, compiled to a ROM your agent boots. Invite-only drives open before 1.0."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/fafb-early-access-hero.png" />
	<meta name="twitter:image:alt" content="Context, compiled — FAFb 0.9, the full Rust version for teams" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Context, compiled
		</div>
		<h1>Context, compiled.</h1>
		<p class="version-tag">FAFb 0.9 · early access</p>
		<p class="subtitle">The full Rust version, for teams.</p>
		<div class="meta">
			<time datetime="2026-09-16">September 16, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/fafb-early-access-hero.png"
			alt="Context, compiled — FAFb 0.9, the full Rust version for teams"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> FAFb is FAF compiled — your project's 33 facts sealed to a ROM your
				agent boots, with memory and an agent that read from it. It is the full Rust version, for
				teams and monorepos. 0.9 is the last stretch before 1.0, and we are inviting early drivers:
				free access, one honest hour, and your answers shape the launch.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> faf-cli is MIT and free, scores 21 slots, and never has to
					think about monorepos. A team repo has more to say than 21 slots, and the answer has to
					hold across every package.
				</p>
				<p>
					<strong>Fix.</strong> FAFb runs every faf-cli app-type, plus app-types up to 33 slots for
					monorepos and teams. It reads the workspace, scores it under one roof, and compiles the
					result to a <code>.fafb</code> ROM your agent boots without re-reading the essay.
				</p>
				<p>
					<strong>New state.</strong> One score across the repo, one file your agent loads, and the
					same <code>.faf</code> your free tooling wrote. FAFb reads that DNA and never downscores
					it.
				</p>
			</div>
		</section>

		<section>
			<h2>What you would be driving</h2>
			<p>Three files, one order:</p>
			<ul>
				<li><strong><code>.faf</code> — Context.</strong> The editable source of truth: what the project actually is.</li>
				<li><strong><code>.fafm</code> — Memory.</strong> Decisions worth keeping.</li>
				<li><strong><code>.fafa</code> — Agent.</strong> Reads your context and memory, answers or says it can't.</li>
			</ul>
			<p>
				<code>.fafb</code> is that context <strong>compiled</strong>: a ROM of locked decisions the
				machine loads without re-parsing the essay every session. Not a fourth file.
			</p>
			<p class="muted-note">
				The order is the point: <strong>context, then memory, then ask.</strong> You do not ask
				first. You do not invent memory before context exists.
			</p>
		</section>

		<section>
			<h2>The hour</h2>
			<p>
				Every driver drives the same reference first: <code>hello-faf</code>, a real SvelteKit +
				FastAPI monorepo whose <code>project.faf</code> fills all 33 slots on purpose. Not your
				project — what "done" looks like.
			</p>
			<div class="terminal-block">
				<code>faf git https://github.com/Wolfe-Jam/hello-faf</code>
				<code>faf status      # the 33-slot score</code>
				<code>faf check       # validate the DNA</code>
				<code>faf export      # AGENTS.md / CLAUDE.md from the structure</code>
				<code>faf compile     # .faf → .fafb — the ROM</code>
				<code>fafm add "a fact worth keeping"</code>
				<code>fafa "why FastAPI, not Django?"</code>
			</div>
			<p>
				Then the part that matters: open your own AI in that folder — Claude Code, Cursor, whatever
				you use daily — and ask it the same question. After that, run it on a repo you would
				actually author context for.
			</p>
		</section>

		<section>
			<h2>Free and paid, plainly</h2>
			<ul>
				<li><strong>faf-cli is MIT and free forever.</strong> 21 slots. Nothing about that changes.</li>
				<li><strong>FAFb is a paid licence.</strong> 33 slots — the full Rust version, for teams.</li>
				<li>
					<strong>Inside FAFb</strong>, authoring, validating, exporting and reading are free.
					<code>compile</code> and the other Pro commands run on a <strong>14-day trial: no card, no
					signup</strong>. The first Pro command starts it, and <code>compile</code> is in the hour,
					so expect it.
				</li>
				<li>
					<strong>Your faf-cli work ports straight in.</strong> FAFb reads the same DNA — a
					<code>project.faf</code> you already authored is not re-scored downward.
				</li>
			</ul>
		</section>

		<section>
			<h2>What early access is</h2>
			<p>
				Invite-only for now. Ask for a drive and we send you in — installing takes one line, no Rust
				toolchain, no GitHub account, no token.
			</p>
			<ul>
				<li><strong>Free access</strong> for the drive.</li>
				<li><strong>A blunt, honest hour</strong> on a real project. A monorepo or team repo is a plus.</li>
				<li><strong>Comfortable in a terminal</strong> — macOS, Linux or Windows.</li>
				<li><strong>The same questions for everyone</strong>, so we can compare answers.</li>
				<li><strong>What you tell us shapes 1.0.</strong></li>
			</ul>
		</section>

		<section>
			<h2>Straight answers</h2>
			<ul>
				<li><strong>0.9 is pre-launch.</strong> 1.0.0 is the launch; this is the final stretch.</li>
				<li>
					<strong>The compiler's source is private.</strong> The binary you drive is public, and it
					reports what it can and can't do rather than guessing.
				</li>
				<li>
					<strong>Don't drive inside the FAFb repo itself</strong> — <code>faf</code> walks up to the
					nearest <code>project.faf</code> and would find the compiler's own.
				</li>
				<li><strong>When something breaks, keep going</strong> and write down what you ran, what happened, and what you expected. That is the useful part.</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Take a drive</h2>
			<p>
				Ask for a drive and we will send you in. Questions and nits are welcome either way —
				<a href="mailto:team@faf.one">team@faf.one</a>.
			</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a href="/fafb-drive" class="feedback-btn secondary">Request a drive</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Context, compiled. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
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
		color: #00d4d4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #1a1a1a;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator {
		color: #1a1a1a;
	}
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.launch {
		background: #ff6b35;
	}

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
	.post-content a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8b5a2b;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.65rem;
		color: #1a1a1a;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.muted-note {
		font-size: 0.9rem;
		color: #555;
	}

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

	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #00d4d4;
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff !important;
	}
	.feedback-btn:hover {
		background: #000;
		text-decoration: none !important;
	}
	.feedback-btn.secondary {
		background: transparent;
		color: #1a1a1a !important;
		border: 2px solid #1a1a1a;
	}
	.feedback-btn.secondary:hover {
		background: #1a1a1a;
		color: #fff !important;
		text-decoration: none !important;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}
</style>
