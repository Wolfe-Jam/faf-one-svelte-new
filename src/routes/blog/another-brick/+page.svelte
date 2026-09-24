<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `A yank does not edit a crate's description.

We yanked a stale crate in March. Six months later the page and search still read "IANA-registered" — a claim that was never true. Yanking stops installs and touches nothing else.

Three more like it: every tracked file ships in your tarball, a caret range can move the bytes your content hash is built on, and your public download can be a generation behind your source.

We swept our own estate and wrote down what it cost.`;
	const shareUrl = 'https://faf.one/blog/another-brick';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>All in all, another Brick in the Wall | FAF</title>
	<meta name="description" content="We swept our own estate: a yanked crate that kept showing a false claim for six months, a doc error baked into a published tarball, a caret range that could move our content hashes, and a public binary a generation behind the source. Four mechanics lessons, with receipts." />
	<meta property="og:title" content="All in all, another Brick in the Wall" />
	<meta property="og:description" content="A yank does not edit a crate's description. Every tracked file ships in your tarball. A caret range can move the bytes your identity is built on. Four things a self-audit turned up." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/another-brick-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/another-brick-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / All in all, another Brick in the Wall
		</div>
		<h1>All in all, another Brick in the Wall</h1>
		<p class="subtitle">We audited our own estate. Four things we found that every maintainer should know.</p>
		<div class="meta">
			<time datetime="2026-09-23">September 23, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/another-brick-hero.png" alt="All in all, another Brick in the Wall — four mechanics lessons from a self-audit" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We pointed an audit at our own published surfaces. A crate we
				yanked in <strong>March</strong> was still advertising that our binary format was
				IANA-registered. <strong>In September!</strong> Three more findings followed, and none
				of them were bugs in our code — they were things about registries, tarballs and version
				ranges that we only learned by getting them wrong.
			</p>
		</section>

		<section class="insight-box">
			<p><strong>In Plain English.</strong> Publishing something is not like editing a web page.
			Once it's out, parts of it are set in stone — and the tools that look like an undo button
			mostly aren't. Here is what that actually costs, measured on our own work.</p>
		</section>

		<section>
			<h2>1. A yank does not edit anything</h2>
			<p>
				We published a small crate in March under the name <code>fafb</code>. Its description
				said the binary format was IANA-registered. It isn't, and it doesn't need to be:
				<code>.fafb</code> is the compiled form of <code>.faf</code>, and <code>.faf</code> is
				the registered one — <code>application/vnd.faf+yaml</code>. The sentence was simply
				pointing at the wrong half.
			</p>
			<p>
				We yanked it. That felt like the fix. It wasn't. <strong>A yank stops new installs and
				changes nothing else</strong> — not the crate page, not the search result, not the
				description. The sentence sat there for six months, in the first place anyone searching
				that name would look.
			</p>
			<p>
				The only remedy is to publish again. So we did: a deliberately empty crate whose whole
				job is to carry a correct sentence and point at the real implementation.
			</p>
			<table class="rot-table">
				<thead>
					<tr><th>Action</th><th>What it changed</th></tr>
				</thead>
				<tbody>
					<tr><td>Yank the version</td><td class="hot">Installs only. Description untouched.</td></tr>
					<tr><td>Publish a corrected version</td><td>Description, page, search result</td></tr>
				</tbody>
			</table>
		</section>

		<section>
			<h2>2. Every tracked file ships in your tarball</h2>
			<p>
				A Rust crate with no <code>include</code> or <code>exclude</code> in its manifest packages
				<em>every file git tracks</em> in that directory. We knew that. We had not thought about
				what it meant for a design-notes file sitting quietly next to the code.
			</p>
			<p>
				That file carried the same wrong registration claim, plus a "canonical spec" link pointing
				at a repository that no longer exists. Both went out inside the published tarball, where
				anyone vendoring the crate or auditing the supply chain would find them.
			</p>
			<p>
				A README you can at least see on the crate page. A markdown file three directories down
				is invisible until someone unpacks it — and it is just as permanent.
			</p>
		</section>

		<section>
			<h2>3. A caret range can move the bytes your identity is built on</h2>
			<p>
				Our binary format has a content identity: a hash over the compiled chunks, so two files
				can be compared without reading them. That hash is computed over the <em>exact bytes</em>
				our compiler emits — and those bytes come out of a YAML serializer we depended on as
				<code>"0.10"</code>.
			</p>
			<p>
				A caret range is the normal, polite thing to write. It also means a patch release of that
				serializer — one that re-quotes a single scalar, say <code>yes</code> or <code>007</code> —
				would change our payload bytes, and therefore every content ID, with no change to our
				specification at all.
			</p>
			<p>
				It is now pinned exactly. And because a pin is only as good as the test behind it, we
				added a second golden file carrying the quoting cases a serializer upgrade actually
				moves: bool-like strings, number-like strings, block scalars, embedded colons, tabs,
				unicode, a line long enough to tempt wrapping. Flip one byte and the suite fails.
			</p>
			<div class="chain" role="img" aria-label="A patch release of the YAML serializer re-quotes one scalar, which changes the payload bytes, which changes the Content ID — so every published identity moves. Pinning the serializer exactly stops the chain at the first step.">
				<div class="chain-row">
					<span class="chain-step">serde_yaml_ng 0.10.0 <span class="arrow">&rarr;</span> 0.10.1</span>
					<span class="chain-note">a patch. polite. routine.</span>
				</div>
				<div class="chain-link">&darr;</div>
				<div class="chain-row">
					<span class="chain-step">looks_bool: yes <span class="arrow">&rarr;</span> looks_bool: 'yes'</span>
					<span class="chain-note">one scalar, re-quoted</span>
				</div>
				<div class="chain-link">&darr;</div>
				<div class="chain-row">
					<span class="chain-step">payload bytes change</span>
					<span class="chain-note">our compiler is unchanged</span>
				</div>
				<div class="chain-link">&darr;</div>
				<div class="chain-row break">
					<span class="chain-step">Content ID changes</span>
					<span class="chain-note">every published identity, silently</span>
				</div>
				<div class="chain-stop">
					<span class="chain-step">serde_yaml_ng = "=0.10.0"</span>
					<span class="chain-note">stops it at step one</span>
				</div>
			</div>
		</section>

		<section>
			<h2>4. Your public download can be a generation behind your source</h2>
			<p>
				Our compiler moved to a new wire format on a Sunday. The source said so, the tests said so,
				the spec said so. But the only binary a stranger could actually download still wrote the
				<em>old</em> format — because the release assets had been cut a week earlier, and nothing
				connects those two facts automatically.
			</p>
			<p>
				A public repository's CI even pinned that build. Nothing failed, which is the uncomfortable
				part: that job never compiled anything, so the version gap was invisible. Drift between
				what you build and what people download does not announce itself.
			</p>
			<p>
				Fixed by cutting the release from current source and verifying it the only way that counts
				— a cold install into an empty home directory, then comparing the file it produced against
				the reference byte for byte. Identical.
			</p>
		</section>

		<section>
			<h2>What it cost, and what it bought</h2>
			<p>
				Four publishes, four repositories corrected, and a page we did not have before. The
				findings were not exotic. Every one of them is a property of tooling that thousands of
				projects use daily, and every one of them was invisible until something made us look.
			</p>
			<p>
				If you take one thing: <strong>the undo buttons are narrower than they look.</strong>
				A yank is not an edit. A tarball is not a branch. A version range is not a promise about
				bytes. Assume each of those is permanent until you have checked, because the cheapest
				moment to find out is before someone else does.
			</p>
			<p>
				The brick itself, and why it is shaped the way it is, is on its own page now:
				<a href="/bricks">Anatomy of a Brick</a>.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Context you can check. 🏎️</p>
		</section>
	</article>
</div>
<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: #1a1a1a;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #333;
		margin-bottom: 1.5rem;
	}
	.breadcrumb a { color: #00d4d4; text-decoration: none; }
	.breadcrumb a:hover { text-decoration: underline; }

	.post-header h1 {
		font-size: 2.6rem;
		margin: 0 0 0.5rem;
		color: #000;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #1a1a1a;
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: #333;
		margin-bottom: 2.5rem;
	}
	.separator { color: #333; }
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff;
	}
	.category.story { background: #8B5A2B; }

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img { width: 100%; height: auto; display: block; }

	.post-content section { margin-bottom: 2.5rem; }

	.as-of {
		font-size: 0.7em;
		font-weight: 400;
		color: #333;
		letter-spacing: 0;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: #000;
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.post-content a { color: #00d4d4; }

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: #fff;
		border-left: 4px solid #8B5A2B;
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.post-content ul { line-height: 1.9; padding-left: 1.25rem; }

	.rot-table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.25rem 0;
		font-size: 0.95rem;
		background: #fff;
		border-radius: 8px;
		overflow: hidden;
	}
	.rot-table th {
		text-align: left;
		padding: 0.75rem 1rem;
		background: #f4f1ec;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #1a1a1a;
	}
	.rot-table td {
		padding: 0.75rem 1rem;
		border-top: 1px solid #eee;
	}
	.rot-table .hot { color: #c0392b; }


	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.25rem 0;
		overflow-x: auto;
	}
	.terminal-block code {
		background: none;
		color: #00ff88;
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
	}

	.insight-box {
		background: #fdf8f3;
		border: 2px solid #8B5A2B;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}
	.insight-box h3 {
		margin: 0 0 0.5rem;
		color: #8B5A2B;
		font-size: 1.1rem;
	}
	.insight-box p { margin: 0; line-height: 1.7; }

	.share-section { text-align: center; margin: 3rem 0 2rem; }
	.share-btn {
		display: inline-block;
		background: #000;
		color: #fff;
		padding: 0.75rem 2rem;
		border-radius: 999px;
		text-decoration: none;
		font-weight: 600;
	}
	.share-btn:hover { opacity: 0.85; }

	.footer-note {
		text-align: center;
		color: #1a1a1a;
		font-size: 0.95rem;
		border-top: 1px solid #eee;
		padding-top: 2rem;
	}

	/* Causal chain: a patch bump reaching a published identity. */
	.chain {
		background: #fff;
		border: 1px solid #e6e1d8;
		border-radius: 8px;
		padding: 1.5rem 1.5rem 1.25rem;
		margin: 1.75rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.chain-row,
	.chain-stop {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.35rem 1rem;
	}

	.chain-step {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a1a;
	}

	.chain-note {
		font-size: 0.85rem;
		color: #1a1a1a;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-style: italic;
	}

	.chain .arrow { color: #FF6B35; font-weight: 700; }

	.chain-link {
		color: #FF6B35;
		font-size: 1.1rem;
		line-height: 1.5;
		margin: 0.15rem 0 0.15rem 0.35rem;
	}

	.chain-row.break .chain-step { color: #FF6B35; }

	.chain-stop {
		margin-top: 1.1rem;
		padding-top: 1rem;
		border-top: 1px solid #e6e1d8;
	}
	.chain-stop .chain-step { color: #0E9AA0; }

	@media (max-width: 600px) {
		.post-header h1 { font-size: 2rem; }
		.rot-table { font-size: 0.85rem; }
		.rot-table th, .rot-table td { padding: 0.5rem 0.6rem; }
		.chain { padding: 1.15rem 1rem 1rem; }
		.chain-step { font-size: 0.85rem; }
		.chain-note { font-size: 0.8rem; }
	}
</style>
