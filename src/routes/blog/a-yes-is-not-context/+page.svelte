<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `A yes is not context.

Guest post by Arthur Teboul: an agent asked a person before emailing a client. What should it keep from that yes?

Keep the fact that a decision was made. Don't keep the decision itself as something to act on again.`;
	const shareUrl = 'https://faf.one/blog/a-yes-is-not-context';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>A yes is not context: what an agent should remember about an approval | FAF</title>
	<meta
		name="description"
		content="An agent asked a person before emailing a client. Then we had to decide what it could keep from that yes. Facts, decisions, version hashes, and what belongs in a log instead of memory."
	/>
	<meta property="og:title" content="A yes is not context: what an agent should remember about an approval" />
	<meta
		property="og:description"
		content="Guest post by Arthur Teboul (DokuTrak). Facts an agent can prove, decisions only a person can make, and tying a yes to one exact action."
	/>
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content="2026-10-22" />
	<meta property="article:author" content="Arthur Teboul" />
	<meta name="author" content="Arthur Teboul" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/a-yes-is-not-context-social.png" />
	<meta name="twitter:image" content="https://faf.one/blog/a-yes-is-not-context-social.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / A yes is not context
		</div>
		<h1>A yes is not context</h1>
		<p class="subtitle">What an agent should remember about an approval</p>
		<div class="meta">
			<span class="byline">By Arthur Teboul</span>
			<span class="separator">•</span>
			<time datetime="2026-10-22">October 22, 2026</time>
			<span class="separator">•</span>
			<span class="category story">Story</span>
			<span class="guest">Guest post</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/a-yes-is-not-context-hero.png"
			alt="A checklist, an arrow to a fingerprint, a check mark, and an arrow to an envelope: one approved version of one message, sent once"
		/>
	</div>

	<article class="post-content">
		<section>
			<p>I build DokuTrak, which sends clients of accountants and law firms a list of the files they owe and chases them until everything is in. Our MCP connector lets an agent set up one of those requests. One of its tools sends an email to a real client, and once that email leaves, it can't be pulled back.</p>
			<p>So the agent has to ask first. It shows the professional who the email goes to, what's being asked for and by when, and it waits for a yes. That part is easy to agree on.</p>
			<p>The question I didn't see coming was what happens after. The person says yes, the email goes out, the conversation goes on. What is the agent allowed to keep from that yes?</p>
		</section>

		<section>
			<h2>Where the yes was living</h2>
			<p>Version 0.1.1 of our connector, released on 23 September, handles confirmation in the conversation. The tool description asks the model to read back where the email goes, the due date, every item on the list and any note, and to call the tool only once the professional has confirmed, "even when the request already looks complete". DokuTrak's <code>create_request</code> tool carries the MCP annotations <code>destructiveHint: true</code> and <code>openWorldHint: true</code>, plus a separate Claude-specific <code>_meta["anthropic/requiresUserInteraction"]: true</code>. These are hints, and hosts decide for themselves whether to prompt on them, so they won't produce a prompt on every host.</p>
			<p>When I reread it later, I noticed what the yes actually was: a line in the transcript. Nothing tied it to one request. It was a sentence the model had read, sitting next to all the other sentences.</p>
			<p>That's fine while the chat stays short. It gets less fine once the transcript stops being the only place things live. Assistants now summarise long sessions, write memories, and update project files so the next session starts with context. If something like "Arthur approved sending the request to the Hendersons" ends up in one of those, the next session doesn't read it as something that happened once on a Tuesday. It reads it as a fact about how things are. And to a model looking for permission, a fact about how things are can look a lot like permission.</p>
			<p>I haven't seen a model reuse a yes that way. I didn't want to find out what the first time looked like.</p>
		</section>

		<section>
			<h2>Things an agent can prove, things only a person can say</h2>
			<p>The way out, for us, was to sort what an agent might remember into two piles.</p>
			<p>The first pile is facts the agent can check for itself. The client list. Which checklist template a firm uses. The fact that a request for the Hendersons exists and is still missing a bank statement. If the agent writes these down and they go stale, it can look again and correct them. Nobody is harmed by a model re-reading a database.</p>
			<p>The second pile is decisions. "Send this." "This client gets two weeks, not one." "Don't chase them before the end of the month." Only a person can make those, and the agent has no way to check them later. If it remembers one, it's taking the memory's word for it.</p>
			<p>FAF's rust-faf-mcp ran into the same split in its <a href="https://faf.one/blog/table-of-8">v0.7.0 release, the Table-of-8 Edition</a>, from the context-file side, and it still works that way in v0.8.3. The release note describes the old behaviour plainly: setup used to mark empty human slots as not applicable, so the score went up without anyone saying who, what or why. A slot nobody has answered now stays empty instead of being marked not applicable. The fix was to let setup write only what the file tree can prove, and to leave the human fields, the name, the goal and the six Ws, empty until someone states them. Suggestions drawn from the goal stay ghosts, never typed and never scored, until a person ticks them. In their words: AI confirms the stack, you approve the humans.</p>
			<p>I liked that because it puts the line in the same place. The stack is something a tool can prove. The goal of a project and the decision to email a client aren't.</p>
		</section>

		<section>
			<h2>Tying the yes to one exact action</h2>
			<p>On our remote server, the one ChatGPT connects to, the confirmation no longer lives in the chat. It lives in our database, and it's bound to one version of one action.</p>
			<p>Preparing a request gives the agent a preview plus a fingerprint of it: a SHA-256 hash of the exact content. Asking for approval creates a record keyed to that fingerprint and returns a review URL. The professional opens it while signed in to our app and reads the email their client would get. The yes is given there, by the person, and the route that records it won't accept the token the agent was issued.</p>
			<p>Sending takes two things, the record and the fingerprint, and it goes through only when they match what was confirmed. Edit a single word and the fingerprint is different, so the approval no longer fits and a fresh review is needed. A send that breaks in the middle can be retried against the same record without anyone being asked again, and the client never gets a second email.</p>
			<p>Approvals don't last, either. A review that nobody answers lapses after a day and is deleted the next time the workspace asks for one. A confirmed one stays valid for a day, for that fingerprint, for that single send.</p>
		</section>

		<section>
			<h2>What's worth keeping</h2>
			<p>After all that, here's what the agent is left holding: an operation ID, a version string and a link. It can write all three to memory, to a summary or to a context file. None of them will send anything. A comment in our code puts it in five words: IDs alone never grant access. The next session can use the ID to ask what happened, and that's all it can do with it.</p>
			<p>The record of the approval does need to last, just not in the agent. Our audit log keeps a row when a person confirms or cancels, with the version and the connection that asked, and further rows when the send starts and when it's accepted. If a client later asks why they got that email, we can say which account approved it, when, and which version of the message it approved.</p>
			<p>So the record stays and the permission goes. I think that's the rule for anything an agent might write down after a human decision: keep the fact that a decision was made, and don't keep the decision itself as something to act on again.</p>
		</section>

		<section>
			<h2>The part I haven't solved</h2>
			<p>What the server can vouch for is the account. It can't vouch for the human. Picture an agent that controls a browser in which the professional is still logged in: it could load the review URL and click the button itself, and the log entry would be identical to one left by someone who read every line.</p>
			<p>I haven't found a fix I like. Asking for a password on every approval would guard the occasional dangerous send and irritate people on all the ordinary ones. What the server-side check does solve is the problem this piece started with, a yes that outlives the action it was given for. Who actually clicked is a separate question, and it's still open.</p>
		</section>

		<section class="author-bio">
			<p>Arthur Teboul is the founder of <a href="https://dokutrak.com">DokuTrak</a>. It collects, for accountants and law firms, the documents their clients still have to send, gives those clients one place to upload, and keeps reminding them until nothing is missing.</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
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
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 2.5rem;
	}
	.byline {
		font-weight: 700;
		color: var(--faf-black);
	}
	.separator {
		color: var(--faf-dark);
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff; /* literal-ok: Story pill text, paired with its category bg */
	}
	.category.story {
		background: #8b5a2b; /* literal-ok: Story category colour */
	}
	.guest {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		border: 1px solid var(--faf-black);
		color: var(--faf-black);
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

	.post-content code {
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.post-content section.author-bio {
		border-top: 1px solid var(--faf-border);
		padding-top: 1.5rem;
		font-style: italic;
		color: var(--faf-dark);
	}

	.post-content section.share-section {
		text-align: center;
		margin: 3rem 0 2rem;
	}
	.post-content a.share-btn {
		display: inline-block;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		padding: 0.75rem 2rem;
		border-radius: 999px;
		text-decoration: none;
		font-weight: 600;
	}
	.post-content a.share-btn:hover {
		opacity: 0.85;
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
	}
</style>
