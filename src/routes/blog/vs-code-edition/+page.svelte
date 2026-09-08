<!-- pubblog Release — spine copied from mcp-better-matching-client (GOLD). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v7.11.0 — The VS Code Edition

Your drift check is now a function you import, not a CLI you scrape.

computeDrift() joins the public API · faf drift --json for the shell
Plus faf export --llms → llms.txt

bunx faf-cli@7.11.0 drift --json

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/vs-code-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The VS Code Edition - faf-cli v7.11.0 | FAF</title>
	<meta
		name="description"
		content="faf-cli becomes a library a VS Code extension can import — computeDrift() joins the public API and faf drift --json mirrors it on the CLI. Plus faf export --llms."
	/>
	<meta property="og:title" content="The VS Code Edition - faf-cli v7.11.0" />
	<meta
		property="og:description"
		content="faf-cli becomes a library a VS Code extension can import — computeDrift() joins the public API and faf drift --json mirrors it on the CLI."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/vs-code-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/vs-code-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/vs-code-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The VS Code Edition — faf-cli v7.11.0 · computeDrift() from faf-cli"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The VS Code Edition - faf-cli v7.11.0" />
	<meta
		name="twitter:description"
		content="faf-cli becomes a library a VS Code extension can import — computeDrift() joins the public API and faf drift --json mirrors it on the CLI."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/vs-code-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The VS Code Edition — faf-cli v7.11.0 · computeDrift() from faf-cli"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The VS Code Edition
		</div>
		<h1>The VS Code Edition</h1>
		<p class="version-tag">faf-cli v7.11.0</p>
		<p class="subtitle">faf-cli becomes a library an editor extension can import.</p>
		<div class="meta">
			<time datetime="2026-09-07">September 7, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/vs-code-edition-hero.png"
			alt="The VS Code Edition — faf-cli v7.11.0 · computeDrift() from faf-cli"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli's drift check is now a function you import, not a command you
				scrape. <code>computeDrift()</code> joins the public API next to
				<code>scoreFafYaml</code>, <code>findFafFile</code>, and
				<code>generateProjectHtml</code>. <code>faf drift --json</code> is the CLI mirror. Plus
				<code>faf export --llms</code> for an <code>llms.txt</code> view.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>faf drift</code> printed a table — is your
					<code>CLAUDE.md</code> ahead of your <code>project.faf</code>? Any other tool that wanted
					the answer had to run the CLI and parse text.
				</p>
				<p>
					<strong>Fix.</strong> The comparison moved into a pure function,
					<code>computeDrift(fafPath)</code>, exported from the package. And
					<code>faf drift --json</code> for scripts and CI.
				</p>
				<p>
					<strong>New state.</strong> An editor extension reads your score, tier, and drift
					in-process — <code>import &#123; computeDrift &#125; from 'faf-cli'</code>. No subprocess,
					no text-scraping.
				</p>
			</div>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.11.0" /></code>
				<code>faf drift --json</code>
			</div>
			<p class="muted-note">
				<strong>Try it without installing:</strong>
				<code>bunx <NpmPkg name="faf-cli" version="7.11.0" /> drift --json</code> (or
				<code>npx --yes <NpmPkg name="faf-cli" version="7.11.0" /></code>). Pin the version in
				scripts — <code>@latest</code> drifts.
			</p>
		</section>

		<section>
			<h2>faf-cli is a library now, not only a CLI</h2>
			<p>
				faf-cli has quietly exported its engine for a while —
				<code>scoreFafYaml</code>, <code>findFafFile</code>, <code>generateProjectHtml</code>. The
				scoring is a Rust&nbsp;→&nbsp;WASM kernel; you compose it, you never reimplement it. 7.11.0
				adds drift to that surface.
			</p>
			<div class="terminal-block">
				<code>import &#123; computeDrift, scoreFafYaml, findFafFile &#125; from 'faf-cli';</code>
				<code>const report = computeDrift('/path/to/project.faf');</code>
			</div>
			<p>
				<code>computeDrift(fafPath, dir?)</code> takes an explicit path — it never reads
				<code>process.cwd()</code>. It compares the modification time of <code>project.faf</code>
				against the four files your AI actually reads (<code>CLAUDE.md</code>,
				<code>AGENTS.md</code>, <code>.cursorrules</code>, <code>GEMINI.md</code>) and returns a plain
				object: per-file status, raw mtimes, deltas, and the counts.
			</p>
		</section>

		<section>
			<h2>The extension is live</h2>
			<p>
				<strong>Update — September 8.</strong> The reason for the edition name:
				<a
					href="https://marketplace.visualstudio.com/items?itemName=faf.faf-context"
					target="_blank"
					rel="noopener">FAF — Project Context</a
				> is on the VS Code Marketplace and
				<a href="https://open-vsx.org/extension/faf/faf-context" target="_blank" rel="noopener"
					>Open VSX</a
				> (Cursor / VSCodium / Windsurf). Score, tier, and drift in the status bar and a sidebar;
				the context card rendered in a webview — all of it <code>computeDrift</code>,
				<code>scoreFafYaml</code>, and <code>generateProjectHtml</code> called in process, no
				shell-out.
			</p>
			<div class="terminal-block">
				<code>code --install-extension faf.faf-context</code>
			</div>
		</section>

		<section>
			<h2>faf drift --json</h2>
			<p>The same report, on the command line, self-describing:</p>
			<div class="terminal-block">
				<code>{`{`}</code>
				<code>{`  "faf_version": "3.0",`}</code>
				<code>{`  "project": "my-app",`}</code>
				<code>{`  "source": "/abs/project.faf",`}</code>
				<code>{`  "targets": [`}</code>
				<code>{`    { "file": "CLAUDE.md", "status": "newer", "delta_ms": 12043 },`}</code>
				<code>{`    { "file": "AGENTS.md", "status": "in-sync", "delta_ms": 0 }`}</code>
				<code>{`  ],`}</code>
				<code>{`  "drifted": 1, "in_sync": 1, "missing": 2`}</code>
				<code>{`}`}</code>
			</div>
			<p>
				Raw <code>*_ms</code> numbers — no <code>Date.now()</code> in the payload, so the shape is
				stable and the consumer formats its own "5d ago". A <code>newer</code> target means someone
				edited the context file and the <code>.faf</code> hasn't caught up; run
				<code>faf sync</code>. With no <code>project.faf</code>, <code>--json</code> returns
				<code>&#123; error, hint &#125;</code> and exits <code>2</code> — a
				<code>--json</code> consumer never has to parse a stderr string. Bare
				<code>faf drift</code> output is unchanged.
			</p>
		</section>

		<section>
			<h2>faf export --llms</h2>
			<p>
				A new export target: <code>faf export --llms</code> writes <code>llms.txt</code> in the
				<a href="https://llmstxt.org" target="_blank" rel="noopener">llmstxt.org</a> shape, from the
				authored six W's in your <code>project.faf</code>. Opt-in, like <code>--grok</code> — not on
				bare <code>faf export</code> or <code>--all</code>. A view, not a format.
			</p>
		</section>

		<section>
			<h2>Also in 7.11.0</h2>
			<p>
				<code>faf hooks --install</code> and <code>faf diff --install</code> now wire the canonical
				<code>faf-cli</code> bin, not the <code>faf</code> alias — so the pre-commit hook and the git
				diff driver can't be shadowed by another <code>faf</code> on your PATH.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong> (global):</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.11.0" /></code>
				<code># short name, same bits: npm install -g <NpmPkg name="faf" version="7.11.0" /></code>
			</div>
			<p><strong>Try</strong> (no install):</p>
			<div class="terminal-block">
				<code>bunx <NpmPkg name="faf-cli" version="7.11.0" /> auto</code>
				<code>bunx <NpmPkg name="faf-cli" version="7.11.0" /> score</code>
			</div>
			<p class="muted-note">
				More: <a href="https://docs.faf.one/drift" target="_blank" rel="noopener">docs.faf.one/drift</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v7.11.0"
					target="_blank"
					rel="noopener">v7.11.0 release</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.11.0 (September 7, 2026)</li>
				<li>
					<strong>New export:</strong> <code>computeDrift</code> + <code>DriftReport</code> /
					<code>DriftTarget</code> types, from <code>faf-cli</code>
				</li>
				<li><strong>CLI:</strong> <code>faf drift --json</code> · <code>faf export --llms</code></li>
				<li>
					<strong>Packages:</strong> dual-published — <code>faf-cli</code> and <code>faf</code>, same
					version
				</li>
				<li><strong>Tests:</strong> 1402/1402</li>
				<li><strong>Score:</strong> ✪ Trophy 100%</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Define once. Every tool reads it. 🏎️</p>
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
	.category.release {
		background: #00b8b8;
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
		overflow-x: auto;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.95rem;
		white-space: pre;
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
