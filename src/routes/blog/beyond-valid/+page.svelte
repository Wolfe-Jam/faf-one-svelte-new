<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `A SKILL.md can pass the validator and still leave an agent guessing.

Valid is the floor, not the goal.

Six steps, by hand, on one worked skill:
what and when · not for · needs and touches · steps · done`;
	const shareUrl = 'https://faf.one/blog/beyond-valid';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });

	const before = `---
name: release-notes
description: Helps with releases.
---

Write release notes.`;

	const validate = `uvx --from skills-ref agentskills validate release-notes`;
	const validOut = `Valid skill: release-notes`;
	const toPrompt = `uvx --from skills-ref agentskills to-prompt release-notes`;
	const toPromptOut = `<available_skills>
<skill>
<name>
release-notes
</name>
<description>
Helps with releases.
</description>
...`;

	const invalid = `---
name: Release_Notes
description: Helps with releases.
author: me
---`;
	const invalidOut = `Validation failed for Release_Notes:
  - Unexpected fields in frontmatter: author. Only ['allowed-tools',
    'compatibility', 'description', 'license', 'metadata', 'name'] are allowed.
  - Skill name 'Release_Notes' must be lowercase
  - Skill name 'Release_Notes' contains invalid characters. Only letters,
    digits, and hyphens are allowed.`;

	const step2 = `description: Drafts release notes for a new version from the git log
  and the pull requests merged since the previous tag. Use when the user
  asks for release notes, a changelog entry, or "what changed since v1.2".`;
	const step3 = `... Not for commit messages or pull request descriptions.`;
	const step4 = `**Needs:** git, and the GitHub CLI (\`gh\`) signed in to the repo.

**Touches:** reads tags, the git log and merged pull requests.
Writes \`RELEASE_NOTES.md\` only. Publishes nothing: the user creates the release.`;
	const step5 = `## Steps

1. Find the previous tag: \`git describe --tags --abbrev=0\`.
2. List the commits since it: \`git log <tag>..HEAD --oneline\`.
3. List the pull requests merged since it:
   \`gh pr list --state merged --search "merged:>=<tag date>"\`.
4. Group them under Added, Changed and Fixed, one line each,
   in words a user would use.
5. Write \`RELEASE_NOTES.md\` and show it to the user.`;
	const step6 = `**Done when:** \`RELEASE_NOTES.md\` lists every pull request merged
since the previous tag, and the user has seen it.`;

	const result = `---
name: release-notes
description: Drafts release notes for a new version from the git log and the pull requests merged since the previous tag. Use when the user asks for release notes, a changelog entry, or "what changed since v1.2". Not for commit messages or pull request descriptions.
---

# Release notes

**Needs:** git, and the GitHub CLI (\`gh\`) signed in to the repo.

**Touches:** reads tags, the git log and merged pull requests. Writes \`RELEASE_NOTES.md\` only. Publishes nothing: the user creates the release.

## Steps

1. Find the previous tag: \`git describe --tags --abbrev=0\`.
2. List the commits since it: \`git log <tag>..HEAD --oneline\`.
3. List the pull requests merged since it: \`gh pr list --state merged --search "merged:>=<tag date>"\`.
4. Group them under Added, Changed and Fixed, one line each, in words a user would use.
5. Write \`RELEASE_NOTES.md\` and show it to the user.

**Done when:** \`RELEASE_NOTES.md\` lists every pull request merged since the previous tag, and the user has seen it.`;

	const block = `<!-- faf:start -->
\`\`\`yaml
v: 1
needs: [git, "gh, signed in"]
reads: [tags, "git log", "merged pull requests"]
writes: [RELEASE_NOTES.md]
network: [github.com]
publishes: false
done_when: "RELEASE_NOTES.md lists every pull request merged since the previous tag, and the user has seen it"
\`\`\`
<!-- faf:end -->`;
</script>

<svelte:head>
	<title>Beyond Valid: What an Agent Needs From a SKILL.md | FAF</title>
	<meta
		name="description"
		content="A skill can pass the validator and still leave an agent guessing. Validate it, then add the five things an agent needs: what and when, needs, touches, steps, done."
	/>
	<meta property="og:title" content="Beyond Valid: What an Agent Needs From a SKILL.md" />
	<meta
		property="og:description"
		content="Valid is the floor, not the goal. Six steps from a valid SKILL.md to one an agent can choose, run safely and finish."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/beyond-valid" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/beyond-valid-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/beyond-valid-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="2000" />
	<meta property="og:image:height" content="840" />
	<meta property="og:image:alt" content="Valid is the floor, not the goal. What an agent needs from a SKILL.md" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Beyond Valid: What an Agent Needs From a SKILL.md" />
	<meta
		name="twitter:description"
		content="Valid is the floor, not the goal. Six steps from a valid SKILL.md to one an agent can choose, run safely and finish."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/beyond-valid-hero.png" />
	<meta name="twitter:image:alt" content="Valid is the floor, not the goal. What an agent needs from a SKILL.md" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Beyond Valid
		</div>
		<h1>Beyond Valid: What an Agent Needs From a SKILL.md</h1>
		<p class="subtitle">A skill can pass the validator and still leave an agent guessing.</p>
		<div class="meta">
			<time datetime="2026-10-26">October 26, 2026</time>
			<span class="separator">•</span>
			<span class="category interop">Interop</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/beyond-valid-hero.png"
			alt="Valid is the floor, not the goal. What an agent needs from a SKILL.md"
			width="2000"
			height="840"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The Agent Skills validator tells you a <code>SKILL.md</code> is well
				formed. It can't tell you whether an agent will pick the skill at the right moment, run it
				safely, and know when to stop. This tutorial takes one skill from <em>valid</em> to
				<em>useful</em> in six steps, by hand, using only the
				<a href="https://agentskills.io/specification" target="_blank" rel="noopener"
					>Agent Skills specification</a
				> and its reference validator.
			</p>
			<p>
				<em>New here?</em>
				<a href="https://agentskills.io" target="_blank" rel="noopener">Agent Skills</a> is an open
				format for giving AI agents new abilities: a folder with a <code>SKILL.md</code> file (YAML
				frontmatter, then Markdown instructions), plus any scripts or references it needs. It's an
				AAIF project, and many agent products read it.
			</p>
		</section>

		<section>
			<h2>The skill we'll fix</h2>
			<p>Here's a complete, valid skill:</p>
			<div class="terminal-block"><code>{before}</code></div>
			<p>
				Check it with <code>skills-ref</code>, the specification's reference validator. With
				<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener">uv</a> installed, no setup
				is needed:
			</p>
			<div class="terminal-block"><code>{validate}</code></div>
			<div class="terminal-block"><code>{validOut}</code></div>
			<p>
				It passes. The specification's own description guidance calls <code>Helps with PDFs.</code> a
				poor example, and ours has the same problem. <strong>Valid is the floor, not the goal.</strong>
			</p>
		</section>

		<section>
			<h2>How an agent meets your skill</h2>
			<p>
				Two moments matter, and the specification describes both under <em>progressive disclosure</em>:
			</p>
			<ol>
				<li>
					<strong>Choosing.</strong> At startup the agent loads only each skill's <code>name</code> and
					<code>description</code> (about 100 tokens). That's all it has when deciding whether your skill
					fits the task.
				</li>
				<li>
					<strong>Doing.</strong> Once it picks your skill, it loads the whole body (under 5,000 tokens
					recommended) and follows it.
				</li>
			</ol>
			<p>You can see the choosing view yourself:</p>
			<div class="terminal-block"><code>{toPrompt}</code></div>
			<div class="terminal-block"><code>{toPromptOut}</code></div>
			<p>
				That's the agent's whole view while it chooses. "Helps with releases" could mean tagging,
				publishing, versioning or notes. Steps 2 and 3 fix the choosing; steps 4 to 6 fix the doing.
			</p>
		</section>

		<section>
			<h2>Step 1: Make it valid</h2>
			<p>
				Run the validator on every skill, and fix every error before anything else. Here's what it
				catches:
			</p>
			<div class="terminal-block"><code>{invalid}</code></div>
			<div class="terminal-block"><code>{invalidOut}</code></div>
			<p>The usual fixes:</p>
			<ul>
				<li>
					<strong><code>name</code></strong>: lowercase letters, digits and single hyphens, 64 characters
					at most, and the same as the folder's name.
				</li>
				<li><strong><code>description</code></strong>: 1 to 1,024 characters.</li>
				<li>
					<strong>Extra fields</strong> (<code>author</code>, <code>version</code>, a client's own
					settings): move them under <code>metadata</code>, which takes any string keys.
				</li>
			</ul>
		</section>

		<section>
			<h2>Step 2: Say what it does, then when to use it</h2>
			<p>
				The specification says the description <em>should</em> cover both what the skill does and when
				to use it, with keywords that match real tasks. Put what it does first, in the third person (as
				the specification's good example does), then the trigger:
			</p>
			<div class="terminal-block"><code>{step2}</code></div>
			<p>
				The trigger words are the ones a user would actually type: <em>release notes</em>,
				<em>changelog</em>, <em>what changed</em>.
			</p>
		</section>

		<section>
			<h2>Step 3: Say what it's not for (when a neighbour could trigger it)</h2>
			<p>
				If a nearby task could pick your skill by mistake, say so in the description. Release notes sit
				close to commit messages and pull request descriptions:
			</p>
			<div class="terminal-block"><code>{step3}</code></div>
			<p>Skip this when nothing nearby is easily confused. It's a guard, not a requirement.</p>
		</section>

		<section>
			<h2>Step 4: Say what it needs and what it touches</h2>
			<p>These are the facts an agent should have <strong>before step 1</strong>, not partway through:</p>
			<div class="terminal-block"><code>{step4}</code></div>
			<p>
				<strong>Needs</strong> tells the agent to check its tools first, rather than failing at step 3.
				<strong>Touches</strong> tells it (and the person approving its actions) what will change: which
				files it writes, and whether anything leaves the machine. "Publishes nothing" matters as much as
				"publishes": it tells the agent where to stop and hand back.
			</p>
			<p>
				The specification has an optional <code>compatibility</code> field for environment requirements,
				such as <code>Requires git, docker, jq, and access to the internet</code>. Use it if you like.
				It's one free-text line, so the reads, writes and publishing still belong in the body.
			</p>
		</section>

		<section>
			<h2>Step 5: Give the steps, in order</h2>
			<p>
				The specification recommends step-by-step instructions. Number them, and put the exact command
				in each one where there is one:
			</p>
			<div class="terminal-block"><code>{step5}</code></div>
		</section>

		<section>
			<h2>Step 6: Say when it's done</h2>
			<p>
				An agent without a finish line keeps polishing, or stops early. Name the finished state of the
				<em>work</em> (a file, a result), not a step in the conversation:
			</p>
			<div class="terminal-block"><code>{step6}</code></div>
			<p>That's also a check the agent can run on itself before it reports back.</p>
		</section>

		<section>
			<h2>The result</h2>
			<div class="terminal-block"><code>{result}</code></div>
			<p>Still valid:</p>
			<div class="terminal-block"><code>{validate}</code></div>
			<div class="terminal-block"><code>{validOut}</code></div>
			<p>
				Twenty lines. The specification asks for under 500 lines and about 5,000 tokens; if yours grows
				past that, move reference material into <code>references/</code> and link it, one level deep,
				as the specification recommends. Then check those links point at files that exist.
			</p>
		</section>

		<section>
			<h2>The checklist</h2>
			<p>Run down this for any <code>SKILL.md</code>, yours or one you're about to install:</p>
			<table>
				<thead>
					<tr><th>#</th><th>Check</th><th>Why the agent cares</th></tr>
				</thead>
				<tbody>
					<tr><td>1</td><td><code>skills-ref validate</code> passes</td><td>Clients may skip or reject an invalid skill</td></tr>
					<tr><td>2</td><td>Description: what it does, then "Use when…"</td><td>It's all the agent sees while choosing</td></tr>
					<tr><td>3</td><td>"Not for…", if a neighbour could trigger it</td><td>Stops the wrong skill being picked</td></tr>
					<tr><td>4</td><td>Needs and Touches, before the steps</td><td>Tools checked first; side effects known before they happen</td></tr>
					<tr><td>5</td><td>Numbered steps</td><td>The order is part of the instructions</td></tr>
					<tr><td>6</td><td>Done when</td><td>The agent knows when to stop and report</td></tr>
					<tr><td>7</td><td>Under 500 lines; local links resolve</td><td>The whole body loads at once; a missing file is a dead end</td></tr>
				</tbody>
			</table>
			<p>
				Check 1 is the specification's hard rules. Checks 2 to 7 come from its <em>should</em> guidance
				and recommendations, plus three facts an agent needs that the specification leaves to you:
				needs, touches and done.
			</p>
		</section>

		<section>
			<h2>Optional: the same facts as data</h2>
			<p>
				Steps 4 to 6 are prose, which suits a model reading the body. If you also want tools to read
				those facts, some authors put them in a small YAML block at the top of the body, called a
				<strong>FAF Block</strong> (also called a Context Block):
			</p>
			<div class="terminal-block"><code>{block}</code></div>
			<p>
				It's valid in any skill today: the specification puts no restrictions on the body, and the body
				loads only after the skill is chosen, so the block costs nothing while the agent is choosing.
				Further reading on the format it comes from: <a href="/links">faf.one/links</a>.
			</p>
		</section>

		<section>
			<h2>Where to go deeper</h2>
			<ul>
				<li>
					<strong>Specification:</strong>
					<a href="https://agentskills.io/specification" target="_blank" rel="noopener"
						>agentskills.io/specification</a
					>
				</li>
				<li>
					<strong>Reference validator:</strong>
					<a
						href="https://github.com/agentskills/agentskills/tree/main/skills-ref"
						target="_blank"
						rel="noopener">skills-ref</a
					>
					(<code>uvx --from skills-ref agentskills --help</code>)
				</li>
				<li>
					<strong>What Agent Skills are:</strong>
					<a href="https://agentskills.io" target="_blank" rel="noopener">agentskills.io</a>
				</li>
			</ul>
			<p>
				Valid gets your skill loaded. The rest gets it chosen at the right moment, run safely, and
				finished.
			</p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, a check you'd add? Tell us.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Valid is the floor. 🏎️</p>
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
		color: #fff; /* literal-ok: Interop pill text, paired with its category bg */
	}
	.category.interop {
		background: #7d3c98; /* literal-ok: Interop category colour, paired with #fff text */
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
		border-left: 4px solid var(--faf-orange);
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.post-content ul,
	.post-content ol {
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

	.post-content table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.25rem 0;
		font-size: 0.95rem;
		background: var(--faf-surface);
		color: var(--faf-black);
	}
	.post-content th,
	.post-content td {
		border: 1px solid var(--faf-border);
		padding: 0.55rem 0.7rem;
		text-align: left;
		vertical-align: top;
	}
	.post-content th {
		background: var(--faf-section-alt);
		color: var(--faf-black);
	}


	/* section-qualified: the post-wide `.post-content section { padding: 0 }` would win otherwise. */
	.post-content section.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border-radius: 10px;
		border-left: 4px solid var(--faf-orange);
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
