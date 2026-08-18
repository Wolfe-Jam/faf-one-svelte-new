<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `We said the A2A extension was the same context as MCP.

The wire said otherwise.

https://one.faf/context + raw provenance
→ https://faf.one/context + fafContextBlock()

One projector. Every door.
Does not invent a door.

#AAIF #A2A

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/one-block';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>One block - Why the projector exists | FAF</title>
	<meta
		name="description"
		content="We said the A2A extension was the same context as MCP. The wire said otherwise. That's why faf cards exists."
	/>
	<meta property="og:title" content="One block — Why the projector exists" />
	<meta
		property="og:description"
		content="We said the A2A extension was the same context as MCP. The wire said otherwise."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/one-block" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/one-block-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/one-block-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="One block — we said the same context. The wire said otherwise."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="One block — Why the projector exists" />
	<meta
		name="twitter:description"
		content="We said the A2A extension was the same context as MCP. The wire said otherwise."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/one-block-hero.png" />
	<meta
		name="twitter:image:alt"
		content="One block — we said the same context. The wire said otherwise."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / One block
		</div>
		<h1>One block</h1>
		<p class="subtitle">We said the A2A extension was the same context as MCP. The wire said otherwise.</p>
		<div class="meta">
			<time datetime="2026-08-18">August 18, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/one-block-hero.png"
			alt="One block — we said the same context. The wire said otherwise."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> A2A, MCP, the registry, and the catalog all ask for a card about
				the same project. We answered A2A with a copy. The comment said one context, every door.
				The wire said raw <code>.fafa</code> provenance at the wrong URI. That's why
				<code>faf cards</code> exists.
			</p>
		</section>

		<section>
			<h2>What we told ourselves</h2>
			<p>
				Claude FAF already mapped <code>.fafa</code> onto an A2A Agent Card. The file comment was
				clean: the FAF context block rides as an A2A extension, byte-equivalent to MCP
				<code>_meta["one.faf/context"]</code>. One context, every door.
			</p>
			<p>That sentence is the product. It was not what left the function.</p>
		</section>

		<section>
			<h2>What the wire had</h2>
			<p>Two lines. That's the whole receipt.</p>
			<table class="rot-table">
				<thead>
					<tr>
						<th></th>
						<th>We said</th>
						<th>On the wire</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>URI</td>
						<td>the same context as MCP</td>
						<td class="hot"><code>https://one.faf/context</code></td>
					</tr>
					<tr>
						<td>params</td>
						<td><code>fafContextBlock()</code></td>
						<td class="hot"><code>fafa.provenance</code></td>
					</tr>
				</tbody>
			</table>
			<p>
				MCP already used the dereference key <code>one.faf/context</code> and the durable block.
				A2A used a lookalike URI and dumped whatever was in provenance — including unofficial
				fields like <code>provenance.version</code>. Same project. Two doors. Two truths.
			</p>
			<div class="insight-box">
				<h3>The rule</h3>
				<p>
					A comment that says “byte-equivalent” is not a check. If two doors can disagree, the
					project is lying. FAF don't lie has to hold on the wire, not in the file header.
				</p>
			</div>
		</section>

		<section>
			<h2>That's the README bug, on a protocol</h2>
			<p>
				We already measured this in
				<a href="/blog/nineteen-hours">Nineteen Hours</a>. A fact copied into a second file is a
				fact with a half-life. Discipline doesn't stop it. Shipping another host makes it worse.
			</p>
			<p>
				A card on the wire is just another file. A2A wanted a card. MCP wanted
				<code>_meta</code>. The registry wanted <code>server.json</code>. The catalog wanted a
				row. The instinct is to answer each one. That's four writers and a promise they will stay
				in sync.
			</p>
			<p>They will not.</p>
		</section>

		<section>
			<h2>So we built one projector</h2>
			<p>
				Not four better mappers. One function that writes the host cards from
				<code>.faf</code> + <code>.fafa</code>.
			</p>
			<ul>
				<li>
					<strong>Same params</strong> — <code>fafContextBlock()</code> on A2A
					<code>extensions[].params</code>, MCP <code>_meta["one.faf/context"]</code>, and
					registry <code>publisher-provided</code>.
				</li>
				<li>
					<strong>A2A URI</strong> is the dereference
					<a href="/context">https://faf.one/context</a> — never
					<code>https://one.faf/context</code>.
				</li>
				<li>
					<strong>No invented door.</strong> Authored endpoints win.
					<code>--door-url</code> is allowed when you already have a door.
					No door, no flag: it refuses.
				</li>
			</ul>
			<p>
				<code>faf server-card</code> still exists. It now wraps the same projector. Claude FAF
				5.22 is the floor: <code>fafaToA2ACard</code> is a thin adapter. The door is the caller's
				URL. Unofficial <code>provenance.version</code> is dropped. Core is still 12 tools.
				Display title stays Claude FAF.
			</p>
			<p>The adapter is a door. It does not get a second story.</p>
		</section>

		<section>
			<h2>WITH, not MORE</h2>
			<p>
				This is not a fifth card format. The format did not grow. A2A did not get replaced. MCP
				did not get replaced. Complementary — we fill the slot the host already has.
			</p>
			<p>
				A projection is a view. <code>.faf</code> stays the source. If you change the file and
				the A2A params no longer match MCP <code>_meta</code>, the projector is broken. That is
				the test.
			</p>
		</section>

		<section>
			<h2>The two ships</h2>
			<p>The release notes are the versions. This is why they exist.</p>
			<ul>
				<li>
					<a href="/blog/projector-edition">The Projector Edition</a> — faf-cli 7.8.0.
					<code>faf cards</code>.
				</li>
				<li>
					<a href="/blog/projector-floor">The Projector Floor</a> — claude-faf-mcp 5.22.0.
					The mapper uses the projector. Not raw provenance.
				</li>
			</ul>
			<div class="terminal-block">
				<code>faf cards --check</code>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf + .fafa ☑️ one projector, every door.</p>
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
	.breadcrumb a {
		color: #00d4d4;
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

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
	.separator {
		color: #333;
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff;
	}
	.category.story {
		background: #8b5a2b;
	}

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
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

	.post-content a {
		color: #00d4d4;
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: #fff;
		border-left: 4px solid #8b5a2b;
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.post-content ul {
		line-height: 1.9;
		padding-left: 1.25rem;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

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
	.rot-table .hot {
		color: #c0392b;
	}

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
		border: 2px solid #8b5a2b;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}
	.insight-box h3 {
		margin: 0 0 0.5rem;
		color: #8b5a2b;
		font-size: 1.1rem;
	}
	.insight-box p {
		margin: 0;
		line-height: 1.7;
	}

	.share-section {
		text-align: center;
		margin: 3rem 0 2rem;
	}
	.share-btn {
		display: inline-block;
		background: #000;
		color: #fff;
		padding: 0.75rem 2rem;
		border-radius: 999px;
		text-decoration: none;
		font-weight: 600;
	}
	.share-btn:hover {
		opacity: 0.85;
	}

	.footer-note {
		text-align: center;
		color: #1a1a1a;
		font-size: 0.95rem;
		border-top: 1px solid #eee;
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
		.rot-table {
			font-size: 0.85rem;
		}
		.rot-table th,
		.rot-table td {
			padding: 0.5rem 0.6rem;
		}
	}
</style>
