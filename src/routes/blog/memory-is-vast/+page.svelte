<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	import PageActions from '$lib/components/PageActions.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Memory is vast. .fafm maps it.

One format. Two edges. Knowledge + voice. Remember and forget.`;
	const shareUrl = 'https://faf.one/blog/memory-is-vast';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Memory is vast · .fafm maps it | FAF</title>
	<meta
		name="description"
		content="Memory is vast. .fafm maps it — knowledge and voice, remember and forget. One IANA format for the AI era."
	/>
	<meta property="og:title" content="Memory is vast · .fafm maps it" />
	<meta
		property="og:description"
		content="One format. Two edges. Knowledge and voice. Remember and forget."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/memory-is-vast" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/memory-is-vast-hero.png?v=4" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/memory-is-vast-hero.png?v=4" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Memory is vast · .fafm maps it — orange Nelly · knowledge + voice"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Memory is vast · .fafm maps it" />
	<meta
		name="twitter:description"
		content="One format. Two edges. Knowledge and voice. Remember and forget."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/memory-is-vast-hero.png?v=4" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Memory is vast
		</div>
		<h1>Memory is vast</h1>
		<p class="version-tag">.fafm maps it · knowledge + voice · Permanent Memory · Instant Recall</p>
		<p class="subtitle">
			One format. Two edges. The things we need to hold — and the things we need to let go.
		</p>
		<div class="meta">
			<time datetime="2026-07-31">July 31, 2026</time>
			<span class="separator">•</span>
			<span class="category memory">MEMORY</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/memory-is-vast-hero.png?v=4"
			alt="Memory is vast · .fafm maps it — orange Nelly · knowledge and voice"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Memory is vast. A human lives in the tension between what must be
				remembered and what must be forgotten — often with a cost either way. AI does not erode
				like flesh… until we build systems that can forget on purpose. <code>.fafm</code> is
				double-edged by design: <strong>knowledge</strong> and <strong>voice</strong>. Our job is a
				format that has already shown it can navigate both sides — to aid human and machine in the
				AI era, with unerring consideration for past, present, and future.
			</p>
		</section>

		<section>
			<h2>The human tension</h2>
			<p>
				You already know this in your bones. There are things you <em>need</em> to remember — a
				partner’s anniversary (a deadly miss for the unlucky male, as tradition and comedy both
				agree). There are things you <em>need</em> to forget — a bad experience that still arrives
				uninvited at 3 a.m. Remembering has a cost when you fail. Forgetting has a cost when you
				cannot.
			</p>
			<p>
				That is not a product requirements document. That is the human condition. Any memory
				system that only ever appends is lying about half of life. Any system that pretends
				delete is secure erase is lying about the other half.
			</p>
		</section>

		<section>
			<h2>Time erodes us. Does it erode AI?</h2>
			<p>
				Biological memory is soft. Time softens edges, rearranges emphasis, mercifully blurs some
				nights and cruelly sharpens others. AI memory, left alone, is hard: bits do not fade;
				context windows fill; logs and vectors and “memories” accumulate until the past is a
				warehouse with no fire exits.
			</p>
			<p>
				Or do they fade?
			</p>
			<p>
				Here is the gray area. Models forget when you truncate the window. RAG “forgets” when you
				never retrieve a chunk. Vendor memory “forgets” when the product ships a new store and the
				old one is not migrated. That is not forgetfulness — that is <strong>accident</strong>,
				<strong>product churn</strong>, or <strong>absence mistaken for policy</strong>.
			</p>
			<p>
				A grown-up format has to say the quiet part out loud: <em>what does forget mean?</em> Not
				“we hope the merge doesn’t resurrect it.” Not “the UI hid the row.” Lattice truth:
				<strong>delete is state</strong> (tombstones travel). Debt is visible. When the graveyard
				must be paid, <strong>epoch compact</strong> breaks lineage on purpose so lagging peers
				cannot silently resurrect the dead — refuse, don’t hope. Compact is not secure erase.
				Time does not “naturally” clean an AI’s soul unless you design the law.
			</p>
			<p>
				So: AI does not erode like we do. <em>Unless</em> we give it laws that honor both holding
				on and letting go. That is not philosophy bolted onto a feature list. That is the
				requirement.
			</p>
		</section>

		<section>
			<h2>Yin and yang — one media type</h2>
			<p>
				<code>.fafm</code> (<code>application/vnd.fafm+yaml</code>) is one IANA-registered format
				with two profiles — not two products that happen to share a logo.
			</p>
			<div class="dual">
				<div class="dual-col">
					<h3>Knowledge</h3>
					<p>
						Typed, cross-linked agent memory. Etch. Recall. Forget. Debt. Compact. The lattice
						arc that just closed a hard cut: <strong>Forgettable</strong>, then
						<strong>Compactable</strong>. Reference:
						<a href="https://pypi.org/project/claude-fafm-sdk/">claude-fafm-sdk</a> ·
						<a href="/blog/compactable-memory">Compactable</a>.
					</p>
				</div>
				<div class="dual-col">
					<h3>Voice</h3>
					<p>
						The Voice Memory Layer — so the assistant remembers you across calls. Conversation
						first; consequence (hide / archive / delete) belongs in UI, never a misheard
						command. Reference:
						<a href="https://pypi.org/project/grok-faf-voice/">grok-faf-voice</a> ·
						<a href="/blog/voice-memory-layer">VML</a>.
					</p>
				</div>
			</div>
			<p>
				That is the yin-yang. Same soul file. Same verbs at the core. Different surfaces for how
				humans meet the machine — keyboard and runtime on one edge; spoken presence on the other.
				<a href="/blog/permanent-memory-instant-recall">Permanent Memory. Instant Recall.</a>
				was never a single-SDK slogan. It was the thesis of a <em>vast</em> medium.
			</p>
		</section>

		<section>
			<h2>Focus was a gift</h2>
			<p>
				We just finished a pure knowledge cut — Compactable on
				<code>claude-fafm-sdk</code> — as if Voice did not exist for a while. That was not
				forgetfulness of the other edge. That was how you finish a lattice law without diluting
				it. Only when the knowledge edge holds can you turn and say, honestly: Memory is vast.
				The other edge is still here.
			</p>
			<p>
				Voice still means: we will not casually erase you mid-conversation. Knowledge now means:
				when forget is required, it converges; when debt is paid, it is deliberate. The format
				has to be strong enough for both morals without forking into two incompatible files.
			</p>
		</section>

		<section>
			<h2>Past, present, future</h2>
			<ul>
				<li>
					<strong>Past</strong> — what was etched and sealed; packets and namepoints that already
					traveled; archives before compact; the human history we refuse to romanticize or
					sanitize into “wipe.”
				</li>
				<li>
					<strong>Present</strong> — the live soul: what is observable after tombstones; what
					voice can say in this call; what an agent can recall without lying about the join.
				</li>
				<li>
					<strong>Future</strong> — lagging peers, new devices, epoch barriers, optional
					watermark when frontiers exist; multi-writer horizons not yet frozen. Always the same
					north star: forgotten stays forgotten, or the merge <em>refuses</em> — never silent
					resurrection.
				</li>
			</ul>
			<p>
				Our job is not to maximize tokens stored. It is to
				<strong>maximize memory for the AI era</strong> — usefulness, portability, honesty —
				with unerring consideration for that full timeline. Aid the human who must remember an
				anniversary and must release a scar. Aid the AI that must hold project truth across models
				and still let a secret stay dead after forget.
			</p>
		</section>

		<section>
			<h2>What the format already demonstrated</h2>
			<p>
				<code>.fafm</code> is not a pitch deck. It has already shown, in shipping code and frozen
				spec:
			</p>
			<ul>
				<li>One media type, two profiles — no fork</li>
				<li>Offline-first soul file; optional hosted namepoint</li>
				<li>Dual transport (packet + hosted) under one merge law</li>
				<li>Convergent forget (tombstones) and deliberate compact (epoch)</li>
				<li>Honesty bounds: lattice marker ≠ secure erase; compact ≠ wipe</li>
			</ul>
			<p>
				That is navigation on both sides of the blade — remember and forget, knowledge and voice
				— not a feature checklist pretending to be a philosophy.
			</p>
		</section>

		<section>
			<h2>Read more</h2>
			<ul>
				<li>
					<a href="/blog/permanent-memory-instant-recall">Permanent Memory. Instant Recall.</a>
					— the dual-profile launch thesis
				</li>
				<li>
					<a href="/blog/voice-memory-layer">The Voice Memory Layer</a> — voice edge
				</li>
				<li>
					<a href="/blog/forgettable-memory">Forgettable Memory</a> ·
					<a href="/blog/compactable-memory">Compactable</a> — knowledge lattice arc
				</li>
				<li>
					<a href="https://faf.one/memory">memory.faf.one</a> ·
					<a href="https://github.com/Wolfe-Jam/claude-fafm-sdk">claude-fafm-sdk</a> ·
					<a href="https://pypi.org/project/grok-faf-voice/">grok-faf-voice</a>
				</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<PageActions
			headline="🏁 Memory is vast."
			point1="One format. Two edges. Remember and forget."
			point2=".fafm — knowledge + voice. Past, present, future."
			cta="faf.one/blog/memory-is-vast"
			ctaPrefix="Read →"
			url="https://faf.one/blog/memory-is-vast"
			hashtags="AI,Memory,fafm,FAF"
		/>

		<section class="footer-note">
			<p>
				Built with .faf + .fafm ☑️ Context defines. Memory holds — and sometimes lets go. 🏎️
			</p>
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
		font-size: 2.6rem;
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
		font-size: 1.25rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #333;
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
	.category.memory {
		background: #1a1a1a;
		color: #fff;
	}

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
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

	h3 {
		font-size: 1.15rem;
		font-weight: 700;
		margin: 0 0 0.65rem;
		color: #1a1a1a;
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
		margin-bottom: 0.55rem;
		color: #1a1a1a;
	}

	.post-content a {
		color: #008b8b;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.dual {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.85rem;
		margin: 1.25rem 0;
	}
	@media (max-width: 640px) {
		.dual {
			grid-template-columns: 1fr;
		}
	}
	.dual-col {
		border-radius: 10px;
		padding: 1rem 1.1rem;
		border: 1px solid #e0e0e0;
		background: #fafafa;
	}
	.dual-col p {
		margin: 0;
		font-size: 0.98rem;
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

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
		color: #333;
		font-weight: 600;
	}
</style>
