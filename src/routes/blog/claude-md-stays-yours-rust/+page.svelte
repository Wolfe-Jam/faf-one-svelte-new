<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	// Cloudflare Scrape Shield mangles package@version as "email" — always use NpmPkg in HTML.
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: rust-faf-mcp v0.9.0 — The Your-Files-Stay-Yours Edition

faf_sync keeps your hand-written CLAUDE.md, refuses what it can't write safely, and says so.

Same rules as faf-cli and the other FAF servers, now in Rust.

cargo install rust-faf-mcp --version 0.9.0

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/claude-md-stays-yours-rust';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Your CLAUDE.md stays yours, in Rust - rust-faf-mcp v0.9.0 | FAF</title>
	<meta
		name="description"
		content="faf_sync keeps your hand-written CLAUDE.md, refuses what it can't write safely, and says so. rust-faf-mcp v0.9.0."
	/>
	<meta property="og:title" content="Your CLAUDE.md stays yours, in Rust - rust-faf-mcp v0.9.0" />
	<meta
		property="og:description"
		content="faf_sync keeps your hand-written CLAUDE.md, refuses what it can't write safely, and says so."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/claude-md-stays-yours-rust" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/claude-md-stays-yours-rust-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/claude-md-stays-yours-rust-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="rust-faf-mcp v0.9.0: Your files stay yours." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Your CLAUDE.md stays yours, in Rust - rust-faf-mcp v0.9.0" />
	<meta
		name="twitter:description"
		content="faf_sync keeps your hand-written CLAUDE.md, refuses what it can't write safely, and says so."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/claude-md-stays-yours-rust-hero.png" />
	<meta name="twitter:image:alt" content="rust-faf-mcp v0.9.0: Your files stay yours." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Your CLAUDE.md stays yours, in Rust
		</div>
		<h1>Your CLAUDE.md stays yours, in Rust</h1>
		<p class="version-tag">rust-faf-mcp v0.9.0 · The Your-Files-Stay-Yours Edition</p>
		<p class="subtitle">
			CLAUDE.md holds how you work. The Rust server now writes next to your words, never over them.
		</p>
		<div class="meta">
			<time datetime="2026-11-06">November 6, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/claude-md-stays-yours-rust-hero.mp4"
			poster="/blog/claude-md-stays-yours-rust-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="rust-faf-mcp v0.9.0: a rusty cog turns beside the card, Your files stay yours."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>faf_sync keeps your hand-written CLAUDE.md, refuses what it can't write safely, and says
					so.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> rust-faf-mcp had its own code for writing faf's section into
					CLAUDE.md. In a few cases it cut or replaced your text: a marker quoted in prose matched
					mid-line, and a CLAUDE.md that wasn't UTF-8 was read as empty and replaced.
				</p>
				<p>
					<strong>Fix.</strong> It now follows faf-cli's rules, the same ones faf-mcp, grok-faf-mcp and
					gemini-faf-mcp use. faf replaces only the section between its own marker lines. Everything
					else in the file is yours.
				</p>
				<p>
					<strong>New state.</strong> Run <code>faf_sync</code> any time. Your lines stay. A file faf
					can't safely write is left exactly as it was, and the reply says why.
				</p>
			</div>
		</section>

		<section>
			<h2>What happened since The Lineage Edition</h2>
			<p>
				Last write-up was <a href="/blog/lineage-edition">The Lineage Edition</a> (v0.8.0). Short
				tour to today:
			</p>
			<ul>
				<li><strong>0.8.1 – 0.8.3</strong> — patches. See the <a href="https://github.com/Wolfe-Jam/rust-faf-mcp/blob/main/CHANGELOG.md" target="_blank" rel="noopener">CHANGELOG</a>.</li>
				<li>
					<strong>0.9.0</strong> — <code>faf_sync</code> keeps your hand-written CLAUDE.md. This post.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 0.9.0 is</h2>
			<p>
				faf writes its section between two marker lines, <code>&lt;!-- FAF-SYNC-START --&gt;</code>
				and <code>&lt;!-- FAF-SYNC-END --&gt;</code>.
				<strong>faf replaces only text it can prove it wrote.</strong> Only a whole-line pair of markers
				outside code counts. Markers quoted in prose, fences or indented code are left alone.
			</p>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>When your CLAUDE.md…</th>
							<th>Before</th>
							<th>Now</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>quotes a marker in prose above the real section</td>
							<td>matched mid-line, text cut</td>
							<td>only whole-line markers outside code count</td>
						</tr>
						<tr>
							<td>has markers in a code fence or indented code</td>
							<td>counted</td>
							<td>ignored</td>
						</tr>
						<tr>
							<td>isn't UTF-8 text</td>
							<td>read as empty, replaced</td>
							<td>refused, left byte for byte as it was</td>
						</tr>
						<tr>
							<td>is a dangling link, or links out of the project or into <code>.git</code></td>
							<td>written through</td>
							<td>refused, nothing written</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				Every refusal comes back with MCP's <code>isError</code> flag and the reason. Writes land in
				one step, and keep the file's permissions, a leading BOM and Windows line endings.
				<code>faf_auto</code> and <code>faf_go</code> report a refusal instead of claiming success.
			</p>
		</section>

		<section>
			<h2>Also in 0.9.0</h2>
			<ul>
				<li>
					<strong>Server instructions</strong> on how the tools fit together, sent at initialize (634
					characters).
				</li>
				<li>
					<strong>App types <code>skills</code> (9 slots) and <code>skills-plugin</code> (12 slots)</strong>,
					the same as faf-cli.
				</li>
				<li>rustls 0.23.46 and rustls-webpki 0.103.16 (security, lockfile only).</li>
			</ul>
		</section>

		<section>
			<h2>How we got it right</h2>
			<ul>
				<li>An audit of the five FAF MCP servers found the problem, with exact reproductions.</li>
				<li>
					We fixed it once, in faf-cli's rules, then ported those rules to Rust. Two review rounds
					followed, and their findings were fixed before merge.
				</li>
				<li>
					After publishing, we ran 0.9.0 from npm in clean folders: a hand-written CLAUDE.md kept, a
					marker quoted in prose ignored, a second run idempotent, a non-UTF-8 file and a link out of
					the project both refused and left untouched. 0 findings.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Rust toolchain</strong> (1.88 or newer):</p>
			<div class="terminal-block">
				<code>cargo install rust-faf-mcp --version 0.9.0</code>
			</div>
			<p><strong>No toolchain:</strong> npx downloads the release binary.</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="rust-faf-mcp" version="0.9.0" /></code>
			</div>
			<p><strong>Homebrew</strong> (macOS):</p>
			<div class="terminal-block">
				<code>brew install Wolfe-Jam/faf/rust-faf-mcp</code>
			</div>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add rust-faf-mcp -- npx --yes <NpmPkg name="rust-faf-mcp" version="0.9.0" /></code>
			</div>
			<p class="muted-note">Then ask Claude to run <code>faf_sync</code>.</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li>
					<strong>Version:</strong> rust-faf-mcp 0.9.0 (November 5, 2026), The Your-Files-Stay-Yours
					Edition
				</li>
				<li><strong>Where:</strong> crates.io · npm · Homebrew · the MCP Registry</li>
				<li>
					<strong>Changes:</strong>
					<a href="https://github.com/Wolfe-Jam/rust-faf-mcp/pull/22" target="_blank" rel="noopener">#22</a>
					·
					<a href="https://github.com/Wolfe-Jam/rust-faf-mcp/releases/tag/v0.9.0" target="_blank" rel="noopener"
						>release notes</a
					>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/rust-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ faf writes next to your words, never over them.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: var(--faf-black);
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 1.5rem;
	}
	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-header h1 {
		font-size: 2.6rem;
		margin: 0 0 0.5rem;
		color: var(--faf-black);
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: var(--faf-black);
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 2.5rem;
	}
	.separator {
		color: var(--faf-dark);
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff; /* literal-ok: Release pill text, paired with its category bg */
	}
	.category.release {
		background: #00b8b8; /* literal-ok: Release category colour */
	}

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image video {
		width: 100%;
		height: auto;
		display: block;
	}

	/* The site-wide section rule adds 96px top and bottom; posts need none. */
	.post-content section {
		padding: 0;
		margin-bottom: 2.5rem;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.post-content a {
		color: var(--faf-cyan-text);
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-left: 4px solid #00b8b8; /* literal-ok: Release category accent border */
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
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
		color: var(--faf-black);
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		line-height: 1.9;
		padding-left: 1.25rem;
	}

	.post-content code {
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.terminal-block {
		background: var(--faf-solid-bg);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.25rem 0;
		overflow-x: auto;
	}
	.terminal-block code {
		display: block;
		background: none;
		border: none; /* the site-wide code pill adds a hairline border */
		color: #00ff88; /* literal-ok: terminal-green inside the solid terminal block */
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
		white-space: pre;
	}

	.muted-note {
		font-size: 0.95rem;
		color: var(--faf-dark);
	}

	.table-wrap {
		overflow-x: auto;
		margin: 0 0 1rem;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		background: var(--faf-surface);
		color: var(--faf-black);
		font-size: 0.98rem;
	}
	th,
	td {
		text-align: left;
		padding: 0.6rem 0.85rem;
		border: 1px solid var(--faf-border);
	}
	th {
		background: var(--faf-section-alt);
		color: var(--faf-black);
		font-weight: 700;
	}

	/* section-qualified: the post-wide `.post-content section { padding: 0 }` would win otherwise. */
	.post-content section.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border-radius: 10px;
		border-left: 4px solid #00b8b8; /* literal-ok: Release category accent border */
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
	.post-content a.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border: 2px solid var(--faf-solid-bg);
	}
	.post-content a.feedback-btn:hover {
		opacity: 0.85;
	}
	.post-content a.feedback-btn.secondary {
		background: transparent;
		color: var(--faf-black);
		border: 2px solid var(--faf-black);
	}

	.post-content section.footer-note {
		text-align: center;
		color: var(--faf-dark);
		font-size: 0.95rem;
		border-top: 1px solid var(--faf-border);
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
	}
</style>
