<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `Two skills. The same 100/100 grade. One earns the flag, one doesn't.

The grade is what you can read. The gate is what decides.

You can't fake or buy your way in.`;
	const shareUrl = 'https://faf.one/blog/same-grade-opposite-flag';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Same Grade. Opposite Flag. | FAF</title>
	<meta name="description" content="Two skills score a perfect 100/100. One earns the flag, one doesn't. Why the grade isn't the gate — and why a skill test gets weaker as the models get stronger." />
	<meta property="og:title" content="Same Grade. Opposite Flag." />
	<meta property="og:description" content="Two skills, the same perfect grade, opposite outcome. The grade is what you can read; the gate is what decides." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/same-grade-opposite-flag-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/same-grade-opposite-flag-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Same Grade. Opposite Flag.
		</div>

		<h1>Same Grade. Opposite Flag.</h1>
		<p class="subtitle">The grade is what you can read. The gate is what decides.</p>
		<div class="meta">
			<time datetime="2026-06-30">June 30, 2026</time>
			<span class="separator">•</span>
			<span class="category wjttc">WJTTC</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/same-grade-opposite-flag-hero.png" alt="Two WJTTC scorecards: faf-context flies the flag, faf-vague is locked, both scoring 100 out of 100." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Two skills score a perfect 100 out of 100. One earns the flag. One doesn't. Here is why the grade isn't the gate — and why a skill test gets weaker as the models get stronger.
			</p>
		</section>

		<section>
			<h2>Two cards, one puzzle</h2>
			<p>
				Up top are two WJTTC scorecards. Both skills score <strong>100 out of 100</strong> — a perfect grade, top tier. The card on the left flies the flag. The card on the right is locked. Same grade, opposite flag. The difference is the whole point of the suite.
			</p>
		</section>

		<section>
			<h2>A grade is what you can read</h2>
			<p>
				The grade measures what you can read in a skill: is it safe, is it honest, is it well made. That is a durable signal — the text doesn't change when the model changes. But a grade can't see one thing: whether the skill actually fires when a real person needs it.
			</p>
		</section>

		<section>
			<h2>The test that gets weaker as the models get stronger</h2>
			<p>
				To check that, you have to run the skill. And running it revealed something we did not expect: a behavioral test gets weaker as the model gets stronger. A capable model quietly covers for a weak skill — it ignores bad instructions, works around broken steps, and produces a good answer regardless. The smarter the model, the more it hides.
			</p>

			<div class="insight-box">
				<h3>Reading a skill is timeless. Running it is borrowed time.</h3>
				<p>What you can read about a skill stays true as models improve. What you observe by running one decays.</p>
			</div>
		</section>

		<section>
			<h2>The one thing only running can catch</h2>
			<p>
				There is exactly one thing the model cannot cover for: a description that doesn't signal. The skill on the right does the same job as the skill on the left — but its description is vague, so the assistant never reaches for it. It under-activates. A model can't fix a trigger that doesn't point at anything.
			</p>
			<p>
				That is the activation gate, and it is the one behavioral signal worth keeping. We checked it three times, across three different ways a real person might ask. The good skill was chosen every time. The vague one, never — once, the assistant even called its description opaque, and declined to guess.
			</p>
		</section>

		<section>
			<h2>The honesty surprise</h2>
			<p>
				We tried to break it the other way too — a skill that ordered the assistant to invent details and never admit a guess. The assistant refused. Told to fake a complete, perfect file for a project that didn't exist, it explained why it wouldn't, in almost the exact words the standard uses: a real answer beats a fake one, and empty beats wrong.
			</p>
			<p>
				The honesty rule isn't a rule we impose. It is what a well-aligned model already does. We just wrote it down.
			</p>
		</section>

		<section>
			<h2>So you can't fake your way in</h2>
			<p>
				That is why the flag is not the grade. The grade is what you can read; the flag also needs the gates — the skill must be safe, and it must actually fire. A polished skill that never activates is exactly the one the card on the right is warning you about.
			</p>
			<p>
				Same grade. Opposite flag. You can't fake, and you can't buy, your way in.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>100/100</strong> - both skills, the same perfect grade</li>
				<li><strong>Two gates</strong> - Safety and Activation; a skill must clear both to fly</li>
				<li><strong>Three runs</strong> - the activation check, across three real phrasings</li>
				<li><strong>Re-verifiable</strong> - the grade is mechanical; run it yourself, get the same answer</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ You can't fake or buy your way in. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #E74C3C;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.breadcrumb a { color: #FF6B35; text-decoration: none; }
	.breadcrumb a:hover { text-decoration: underline; }

	h1 {
		font-size: 2.4rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.2;
		letter-spacing: -0.01em;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator { color: #e5e5e5; }

	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.wjttc { background: #E74C3C; color: #fff; }

	.hero-image {
		margin: 0 0 2.5rem 0;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
	}
	.hero-image img { width: 100%; height: auto; display: block; }

	.post-content { font-size: 1.1rem; }

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fdecea;
		border-radius: 8px;
		border-left: 4px solid #E74C3C;
		color: #1a1a1a;
	}

	h2 {
		font-size: 1.7rem;
		margin: 2.75rem 0 1.25rem 0;
		color: #000;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
	}

	h3 { font-size: 1.3rem; margin: 2rem 0 1rem 0; color: #1a1a1a; }
	p { margin-bottom: 1.25rem; }
	ul { margin: 1rem 0 1.5rem 1.5rem; }
	li { margin-bottom: 0.5rem; }

	.insight-box {
		background: #f0fff0;
		border: 2px solid #00aa55;
		border-radius: 8px;
		padding: 1.75rem;
		margin: 2rem 0;
		text-align: center;
	}
	.insight-box h3 { color: #00aa55; margin: 0 0 0.75rem 0; font-size: 1.4rem; }
	.insight-box p { margin: 0; font-size: 1.1rem; color: #1a1a1a; }

	.share-section { margin-top: 3rem; text-align: center; }

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}
	.share-btn:hover { opacity: 0.85; text-decoration: none; color: #fff; }

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #1a1a1a;
		text-align: center;
	}

	a { color: #FF6B35; }
	a:hover { text-decoration: none; }

	@media (max-width: 768px) {
		h1 { font-size: 1.9rem; }
		.blog-post { padding: 1rem; }
	}
</style>
