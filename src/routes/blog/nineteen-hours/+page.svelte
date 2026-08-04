<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	onMount(() => { mounted = true; });

	const shareText = `Documentation rot isn't neglect. It's a function of how fast you ship.

We measured it on our newest repo — 19 hours old, 44 commits.

A README claim was false 29 minutes after it was written.
57% of new docs added a fresh copy of an existing fact.

.faf + a gate fixed the shape. The bar still holds.`;
	const shareUrl = 'https://faf.one/blog/nineteen-hours';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Nineteen Hours - Measuring Documentation Rot | FAF</title>
	<meta name="description" content="We pointed .faf at our own newest repo. It was 19 hours old and already lying about itself. A README claim died in 29 minutes. Rot rate isn't neglect — it's productivity. Canonical file + gate fixed the shape." />
	<meta property="og:title" content="Nineteen Hours - Measuring Documentation Rot" />
	<meta property="og:description" content="A 19-hour-old repo was already lying about itself. One claim was false 29 minutes after it was written — by someone actively trying to keep it accurate." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/nineteen-hours-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/nineteen-hours-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Nineteen Hours
		</div>
		<h1>Nineteen Hours</h1>
		<p class="subtitle">We pointed .faf at our own newest repo. It was already lying about itself.</p>
		<div class="meta">
			<time datetime="2026-08-04">August 4, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/nineteen-hours-hero.png" alt="Nineteen Hours — rot rate isn't neglect, it's productivity" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Documentation rot is normally blamed on neglect. We measured it
				on a repo that was 19 hours old and shipping hard. One README claim was false
				<strong>29 minutes</strong> after it was written — by someone actively trying to keep it
				accurate. Rot rate isn't a function of neglect. It's a function of productivity.
			</p>
		</section>

		<section>
			<h2>The setup</h2>
			<p>
				pc-ai is our newest project — agent card intelligence (Declare · Enforce · Optimize), with a
				public validate API at
				<a href="https://validate.platinumcard.ai">validate.platinumcard.ai</a> and brand at
				<a href="https://platinumcard.ai">platinumcard.ai</a>. It is not a FAF product. It's the
				thing we pointed FAF <em>at</em>.
			</p>
			<p>
				At the measurement window it had every advantage: a growing WJTTC suite, a documented review,
				gates on the rules themselves. <strong>Nineteen hours old. Forty-four commits.</strong> One
				person, paying attention.
			</p>
			<p>And it was already lying about itself.</p>
		</section>

		<section>
			<h2>Time-to-rot, measured</h2>
			<p>
				Two documented facts, with the commit that wrote them and the commit that made them
				false:
			</p>
			<table class="rot-table">
				<thead>
					<tr><th>Claim</th><th>Written</th><th>False by</th><th>Lifespan</th></tr>
				</thead>
				<tbody>
					<tr>
						<td><code>README.md</code> — tests <strong>16/16</strong></td>
						<td>19:34</td><td>20:03</td>
						<td class="hot"><strong>29 minutes</strong></td>
					</tr>
					<tr>
						<td><code>PHASE-1-STATUS.md</code> — <strong>12/12</strong>, WASM open</td>
						<td>14:48</td><td>19:22</td>
						<td>4h 34m</td>
					</tr>
				</tbody>
			</table>
			<p>
				The 29-minute claim wasn't neglected. It was written, correctly, by someone maintaining
				that document — and invalidated half an hour later by <em>their own next commit</em>.
			</p>
		</section>

		<section>
			<h2>The compounding part</h2>
			<p>Counting markdown files against files restating one fact — the schema version:</p>
			<table class="rot-table">
				<thead><tr><th>Time</th><th>.md files</th><th>Restating <code>0.1.1</code></th></tr></thead>
				<tbody>
					<tr><td>Aug 3, 14:48</td><td>38</td><td>14</td></tr>
					<tr><td>Aug 3, 22:31</td><td>44</td><td>17</td></tr>
					<tr><td>Aug 4, 09:49</td><td>45</td><td><strong>18</strong></td></tr>
				</tbody>
			</table>
			<p>
				<strong>+7 documents produced +4 new copies.</strong> Roughly 57% of every new document
				added another place that fact could go stale — and the proportion was drifting up.
			</p>
			<div class="insight-box">
				<h3>The uncomfortable bit</h3>
				<p>
					Rot rate scales with output. Shipping faster makes it worse. Writing more docs makes
					it worse. <strong>Being thorough makes it worse.</strong>
				</p>
			</div>
		</section>

		<section>
			<h2>It's the same bug we'd fixed that morning</h2>
			<p>
				Earlier the same day, pc-ai had a real defect. Its CLI carried its own inline copy of the
				validation rules instead of importing the canonical ones. The copy drifted — a denylist
				missing entries, a version check absent — and documents that should have been rejected
				were passing. It's fixed, gated, and can't silently return.
			</p>
			<p>
				Then we found six markdown files each holding their own copy of the project's status. A
				forked validator and a forked status table are <strong>the same bug</strong>: a copy of
				canon that stops matching canon, with nothing checking.
			</p>
			<p>
				We'd gated the rules. We had not gated the prose. There was no reason for that except
				habit.
			</p>
		</section>

		<section>
			<h2>What actually fixed it</h2>
			<p>Two halves, and the honest version is that neither works alone.</p>
			<p>
				<strong>The canonical file makes the problem finite.</strong> Without one, the claim
				surface grows with every document you write — audit 55 files, then 60, then 100. That
				work never converges. A <code>.faf</code> turns it into one enumerable file, and gives
				new documents somewhere to <em>point</em> instead of somewhere to copy.
			</p>
			<p>
				<strong>The gate makes it enforced.</strong> A canonical source nobody checks is just the
				next copy. So every claim the file makes that <em>can</em> be computed, is — key files
				exist, package counts match, versions match the code, hosts match the deploy config.
				Checked against the filesystem and the code, never against another document. Two
				documents agreeing only proves they were written together.
			</p>
			<p>
				And <code>.fafm</code> holds the half that isn't facts — <em>why</em> the decisions were
				made. That reasoning had been living in commit messages, which is exactly where nobody
				looks when deciding whether to change something.
			</p>
		</section>

		<section>
			<h2>It happened again while we wrote this</h2>
			<p>
				Adding the gate moved the test count from 25 to 26. The README had been corrected to 25
				roughly one commit earlier. So the claim went stale <em>inside a single commit</em>,
				while we were building the mechanism meant to stop it.
			</p>
			<div class="terminal-block">
				<code>FAIL  README.md states the bar as 26/26<br />      → claims 25 but tests/wjttc/cases has 26</code>
			</div>
			<p>Nobody staged that. It's just what the failure mode looks like from the inside.</p>
		</section>

		<section>
			<h2>The transferable finding</h2>
			<ul>
				<li><strong>Rot begins immediately</strong> — 29 minutes, on day two.</li>
				<li><strong>Discipline doesn't prevent it</strong> — every stale claim was written by someone trying to be accurate.</li>
				<li><strong>The surface compounds</strong> — ~57% of new documents added a fresh copy.</li>
				<li><strong>A canonical file is the load-bearing half</strong> — the gate then keeps that one file honest.</li>
			</ul>
			<div class="insight-box">
				<h3>The rule</h3>
				<p>
					If a fact in your prose can be computed, <strong>either gate it or delete it</strong>.
					A number in a README that no test reads isn't documentation. It's a claim with a
					half-life.
				</p>
			</div>
		</section>

		<section>
			<h2>Where it stands</h2>
			<p>
				The measurement window was real. What happened after it is the receipt that the fix held:
			</p>
			<ul>
				<li>
					<strong><code>project.faf</code> + <code>project.fafm</code></strong> — facts and
					decisions in one place each; FAF score at Trophy on the context file.
				</li>
				<li>
					<strong>WJTTC FAF-01</strong> — claims checked against filesystem and code, not against
					other docs. Live bar: <strong>26/26</strong>.
				</li>
				<li>
					<strong>Phase 1 closed</strong> — pure validate, true WASM from core, public validate API,
					brand site. Rank stays private (product decision, not a docs bug).
				</li>
				<li>
					<strong>~50 commits</strong> on the subject repo as of the last edit of this post — still
					one bar, still one canonical facts file. The surface compounds; the check does not.
				</li>
			</ul>
			<p>
				Division of labour, stated plainly:
				<strong>FAF defines. MD instructs. AI codes.</strong>
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>faf init<br />faf score</code>
			</div>
			<p>
				<code>.faf</code> is context — what the project is. <code>.fafm</code> is memory — why
				it's like that. The gate is yours to write; it's usually a few dozen lines, and it only
				has to check the things a computer can already answer.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf + .fafm ☑️ Context you can check. Memory you can keep. 🏎️</p>
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

	@media (max-width: 600px) {
		.post-header h1 { font-size: 2rem; }
		.rot-table { font-size: 0.85rem; }
		.rot-table th, .rot-table td { padding: 0.5rem 0.6rem; }
	}
</style>
