<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>The Ghostty-Inspired Edition - faf-cli v6.3.0 | FAF</title>
	<meta name="description" content="Trophy unlocks pop in macOS Notification Center. Long auto scans ping you when ready. faf-cli now talks to your OS — inspired by Ghostty." />
	<meta property="og:title" content="The Ghostty-Inspired Edition - faf-cli v6.3.0" />
	<meta property="og:description" content="Trophy unlocks pop in macOS Notification Center. Long auto scans ping you when ready. faf-cli now talks to your OS — inspired by Ghostty." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/ghostty-inspired-edition-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/ghostty-inspired-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Ghostty-Inspired Edition
		</div>

		<h1>The Ghostty-Inspired Edition</h1>
		<p class="version-tag">faf-cli v6.3.0</p>
		<p class="subtitle">Trophy unlocks pop. Long scans ping you. faf-cli now talks to your OS.</p>
		<div class="meta">
			<time datetime="2026-04-27">April 27, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/ghostty-inspired-edition-hero.png" alt="Nelly the FAF elephant at her laptop, trunk raised, with a macOS notification reading FAF: Trophy unlocked at 100%" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli now fires native desktop notifications for the moments that matter &mdash; Trophy unlocks at 100%, tier upgrades, and long-running command completion. Inspired by Ghostty's notification model. Silent on terminals that don't support it. Opt out with one env var.
			</p>
		</section>

		<section>
			<h2>The Moment That Started It</h2>

			<p>You're running <code>faf auto</code> on a real project. The scan takes 15 seconds. You glance at Slack, answer a quick message, look up &mdash; was that done already? Did it work? You scroll back through the terminal to find the score.</p>

			<p>This release fixes that. When <code>faf auto</code> finishes a long scan, your OS notification center pops up with the result. When you cross 100%, you get a 🏆 Trophy notification regardless of how long the run took. When a tier upgrade happens (Bronze → Silver, Silver → Gold), you know.</p>

			<p>The mental model: <strong>one command, one notification, at the moment of payoff.</strong></p>
		</section>

		<section>
			<h2>How It Works</h2>

			<p>faf-cli emits an <strong>OSC 9 escape sequence</strong> &mdash; a tiny terminal control code that supported terminals forward to the OS notification center. Ghostty does it. iTerm2 does it. Wezterm and Kitty do it. Everywhere else, the sequence is silently ignored. No native bindings, no platform-specific code paths, no extra dependencies.</p>

			<p>This is how Claude Code's "waiting for your input" notifications appear in Ghostty. Same mechanism, same elegance. We borrowed the model.</p>
		</section>

		<section>
			<h2>The Three Rules</h2>

			<p>Notifications are easy to ship and easy to ruin. Three rules guided every decision:</p>

			<ol>
				<li><strong>Valuable</strong> &mdash; only fires when there's something worth interrupting a human for. Not every step. Not progress. Not errors that are already visible in the terminal.</li>
				<li><strong>Timely</strong> &mdash; fires at the moment of value, not before, not after. Quick commands (under 5 seconds) don't notify because you were probably watching.</li>
				<li><strong>One-click gone</strong> &mdash; never repeats for the same event. Dismissal is the OS's job, not ours.</li>
			</ol>

			<p>The 5-second duration guard is the key UX choice. It's calibrated for faf-cli's command profile &mdash; not the 10-second build-tool norm. <code>faf auto</code> on a small cached project finishes in 1&ndash;3 seconds, you see it, no notification needed. On a real project that takes 10&ndash;30 seconds, attention has drifted, the notification earns its space.</p>
		</section>

		<section>
			<h2>What Notifies, And When</h2>

			<div class="api-table">
				<table>
					<thead>
						<tr><th>Trigger</th><th>When</th></tr>
					</thead>
					<tbody>
						<tr><td><code>faf auto</code> Trophy</td><td>Always &mdash; reaching 100% is a celebration, not a duration question</td></tr>
						<tr><td><code>faf auto</code> tier upgrade</td><td>Always, only on score improvement (e.g. Silver &rarr; Gold)</td></tr>
						<tr><td><code>faf auto</code> long scan</td><td>If the run took 5 seconds or more</td></tr>
						<tr><td><code>faf go</code> completion</td><td>Always &mdash; interactive command, you almost certainly drifted between phases</td></tr>
						<tr><td><code>faf sync</code> completion</td><td>If the sync took 5 seconds or more</td></tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h2>Click-To-Dismiss On macOS</h2>

			<p>By default macOS treats OSC 9 notifications as banners &mdash; they auto-dismiss in a few seconds. Some users (myself included) prefer the click-to-dismiss model, where notifications stay top-right until you actually look at them.</p>

			<p>If <code>terminal-notifier</code> is on your PATH, faf-cli routes through it instead:</p>

			<div class="copy-box" onclick={() => copyText('brew install terminal-notifier', 'tn')}>
				<code class="copy-code">brew install terminal-notifier</code>
				<button class="copy-btn">{copiedId === 'tn' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Then in System Settings &rarr; Notifications &rarr; <strong>terminal-notifier</strong>, switch to "Alerts". Every faf-cli notification now stays until you click. Optional &mdash; OSC 9 still works without it.</p>
		</section>

		<section>
			<h2>Opt Out</h2>

			<p>One env var. No config file. No flag.</p>

			<div class="copy-box" onclick={() => copyText('export FAF_NO_NOTIFY=1', 'optout')}>
				<code class="copy-code">export FAF_NO_NOTIFY=1</code>
				<button class="copy-btn">{copiedId === 'optout' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>For users who want the OSC 9 path even when <code>terminal-notifier</code> is installed, <code>FAF_NOTIFY_OSC9=1</code> forces it.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@6.3.0', 'install')}>
				<code class="copy-code">npm install -g faf-cli@6.3.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Run <code>faf auto</code> in a real project from Ghostty or iTerm2. Watch your notification center.</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v6.3.0</strong> &mdash; released April 27, 2026</li>
				<li><strong>409/409</strong> &mdash; tests passing</li>
				<li><strong>100%</strong> &mdash; 🏆 Trophy score on project.faf</li>
				<li><strong>10 lines</strong> &mdash; the entire <code>notify()</code> helper</li>
				<li><strong>5 seconds</strong> &mdash; duration guard, calibrated for faf-cli's command profile</li>
				<li><strong>Zero new dependencies</strong> &mdash; OSC 9 is just an escape sequence</li>
			</ul>
		</section>

		<section>
			<h2>Why "Ghostty-Inspired"</h2>

			<p>Ghostty is the terminal that made me notice the notification model in the first place. Watching Claude Code emit "waiting for your input" pop-ups while I was in another window &mdash; that was the moment. Same mechanism, different consumer.</p>

			<p>Crediting the inspiration matters. Same pattern as F1-inspired engineering &mdash; we borrow what works, name where it came from, and keep building.</p>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=The%20Ghostty-Inspired%20Edition%20%E2%80%94%20faf-cli%20v6.3.0%20now%20fires%20native%20desktop%20notifications.%20Trophy%20unlocks%20pop.%20Long%20scans%20ping%20you.%20Inspired%20by%20Ghostty.%20%F0%9F%8F%8E%EF%B8%8F&url=https%3A%2F%2Ffaf.one%2Fblog%2Fghostty-inspired-edition" target="_blank" rel="noopener noreferrer" class="share-btn">
				Share on X
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Inspired by Ghostty 🏎️</p>
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
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
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

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #00B8B8;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	.api-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.api-table table {
		width: 100%;
		border-collapse: collapse;
	}

	.api-table th, .api-table td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	.api-table th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.api-table td code {
		font-size: 0.85em;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

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

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
