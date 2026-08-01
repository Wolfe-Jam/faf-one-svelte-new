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
	<title>xAI gave Grok Voice. We gave Grok memory. | grok-faf-voice v0.1.3 | FAF</title>
	<meta name="description" content="xAI gave Grok Voice. We gave Grok memory. The Voice Memory Layer (VML) ships today — pip install grok-faf-voice. Sibling grok-faf-mcp also out as FAST⚡️AF Context." />
	<meta property="og:title" content="xAI gave Grok Voice. We gave Grok memory." />
	<meta property="og:description" content="The Voice Memory Layer (VML) ships today. grok-faf-voice 0.1.3 on PyPI. grok-faf-mcp 1.2.2 on npm." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/voice-memory-layer" />
	<meta property="og:image" content="https://faf.one/blog/voice-memory-layer-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/voice-memory-layer-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Voice Memory Layer Edition (VML)
		</div>

		<h1>xAI gave Grok Voice. We gave Grok memory.</h1>
		<p class="version-tag">grok-faf-voice v0.1.3 + grok-faf-mcp v1.2.2</p>
		<p class="subtitle">The Voice Memory Layer Edition (VML).</p>
		<div class="meta">
			<time datetime="2026-04-30">April 30, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/voice-memory-layer-hero.png" alt="The Voice Memory Layer Edition — grok-faf-voice v0.1.3 + grok-faf-mcp v1.2.2. xAI gave Grok Voice. We gave Grok memory." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Voice agents forget. <strong>VML fixes it.</strong> Today
				<code>grok-faf-voice 0.1.3</code> ships to PyPI &mdash; the reference SDK for the
				Voice Memory Layer. Sibling <code>grok-faf-mcp 1.2.2</code> also lands on npm
				with a sharper H1: <strong>FAST⚡️AF Context</strong>. Two packages, two scopes,
				one family. <code>.faf 🐘</code> for context. <code>.fafm 🐘🎙️</code> for memory.
			</p>
		</section>

		<section>
			<h2>The Two-Line Shape</h2>

			<p>That's the entire setup for the consumer-first install path:</p>

			<div class="copy-box" onclick={() => copyText('pip install grok-faf-voice', 'install')}>
				<code class="copy-code">pip install grok-faf-voice</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<pre><code>{`from grok_faf_voice import VoiceAgent

VoiceAgent().run()`}</code></pre>

			<p>
				That's it. First run, the agent gets a <strong>namepoint</strong> &mdash;
				your <code>@handle</code> for AI memory, the way <code>@username</code> is for X.
				Auto-generated free, no email needed. Persisted at
				<code>~/.grok-faf-voice/identity.json</code> with mode <code>0600</code>.
			</p>

			<p>
				On the second run, the agent loads what was etched in past sessions.
				Talk. Close. Come back. It remembers. <strong>Cross-session, cross-device,
				cross-model</strong> &mdash; your namepoint is the address.
			</p>
		</section>

		<section>
			<h2>Two Layers, One Family</h2>

			<p>The FAF family now ships in two scopes:</p>

			<div class="api-table">
				<table>
					<thead>
						<tr>
							<th>Package</th>
							<th>Scope</th>
							<th>What it does</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>grok-faf-mcp</code></td>
							<td><strong>FAST⚡️AF Context</strong></td>
							<td>What the project <em>is</em> &mdash; static, read once. <code>.faf 🐘</code></td>
						</tr>
						<tr>
							<td><code>grok-faf-voice</code></td>
							<td><strong>Fast⚡️AF memory</strong></td>
							<td>What the agent <em>remembers</em> &mdash; mutating, persisted. <code>.fafm 🐘🎙️</code></td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Same family mark, different microphone. Same FAST⚡️AF house style, different
				surface. <code>.faf</code> is IANA-registered (<code>application/vnd.faf+yaml</code>);
				<code>.fafm</code> is on the path (<code>application/vnd.fafm+yaml</code> planned).
				Read the spec; the agent reads them both.
			</p>
		</section>

		<section>
			<h2>The Triangle</h2>

			<p>
				<code>.faf</code> starts with a dot. That dot <strong>is</strong> the foundation.
				The file extension was always telling this story.
			</p>

			<pre><code>{`·faf   →   Grok   →   fafm / voice
 dot       beam        outer beam
foundation  central       global`}</code></pre>

			<div class="api-table">
				<table>
					<thead>
						<tr>
							<th>Layer</th>
							<th>Role</th>
							<th>What it is</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><strong>·faf</strong></td>
							<td>Foundational</td>
							<td>The format. The standard. <em>Everywhere you build.</em></td>
						</tr>
						<tr>
							<td><strong>Grok</strong></td>
							<td>Central</td>
							<td>The agent. The voice. <em>Everywhere you talk.</em></td>
						</tr>
						<tr>
							<td><strong>fafm</strong></td>
							<td>Global</td>
							<td>The memory. The persistence. <em>Everywhere you've been.</em></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="favicon-demo">
				<img src="/blog/voice-favicon.png" alt="The Voice favicon — gold dot at the bottom (.faf foundation), inner indigo arc (Grok central), outer indigo arcs (FAFmem global). Three nested layers radiating outward." />
				<p class="favicon-caption">The Voice favicon — gold dot, inner beam, outer beam. The architecture in one glyph.</p>
			</div>

			<p>
				Look at the favicon. The gold dot is <code>.faf</code>. The inner beam is
				Grok. The outer beam is the Voice Memory Layer. <strong>Three independent
				symbols turned out to be the same symbol.</strong> No layer competes &mdash;
				they sit at different stack levels. Without FAF, the agent has no project DNA.
				Without Grok, there's no one to talk to. Without FAFmem, every conversation
				starts from zero.
			</p>
		</section>

		<section>
			<h2>The Namepoint: Your @Handle</h2>

			<p>
				Voice memory has three identity primitives, mirroring social platforms:
			</p>

			<div class="api-table">
				<table>
					<thead>
						<tr>
							<th>Role</th>
							<th>VML</th>
							<th>X / Discord</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Identity (public)</td>
							<td><strong>Namepoint</strong></td>
							<td><code>@username</code></td>
						</tr>
						<tr>
							<td>Recovery (private)</td>
							<td>Email</td>
							<td>Email</td>
						</tr>
						<tr>
							<td>Credential</td>
							<td>Voice API key</td>
							<td>Password</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Talk now anonymously, claim a real handle whenever you want at
				<a href="https://mcpaas.live/voice/setup">mcpaas.live/voice/setup</a>.
				One per valid email address.
			</p>
		</section>

		<section>
			<h2>FAFm Has Two Verbs</h2>

			<p><strong>Etch</strong> puts memory in. <strong>Recall</strong> gets it out.</p>

			<p>Three scopes for each. The <em>etch</em> family ships in stages:</p>

			<div class="api-table">
				<table>
					<thead>
						<tr>
							<th>Function</th>
							<th>Granularity</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><strong>etch memory</strong></td>
							<td>Single fact &mdash; "remember this"</td>
							<td>Shipped today</td>
						</tr>
						<tr>
							<td><strong>etch session</strong></td>
							<td>Bounded recording &mdash; "start recording" / "stop recording"</td>
							<td>v0.2</td>
						</tr>
						<tr>
							<td><strong>etch all</strong></td>
							<td>Continuous capture (Premium)</td>
							<td>v0.3+</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				The architecture matters: voice = conversational, but admin
				(hide / archive / delete) is UI-only, never voice. <strong>Voice for
				conversation. UI for consequence.</strong> Mishearing a destructive command
				shouldn't cost you a memory.
			</p>
		</section>

		<section>
			<h2>What You Need</h2>

			<ul>
				<li><strong>Python 3.10+</strong></li>
				<li>An <code>XAI_API_KEY</code> &mdash; <a href="https://x.ai/api">get one at x.ai/api</a></li>
				<li>That's it. The namepoint and Voice key are provisioned for you.</li>
			</ul>

			<p>Run it locally, no LiveKit cloud needed:</p>

			<div class="copy-box" onclick={() => copyText('python my_bot.py console', 'run')}>
				<code class="copy-code">python my_bot.py console</code>
				<button class="copy-btn">{copiedId === 'run' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>The MCP Side: FAST⚡️AF Context</h2>

			<p>
				While Voice ships its first PyPI release, <code>grok-faf-mcp</code> also rolled
				to <strong>v1.2.2</strong> on npm with a tighter brand surface:
			</p>

			<ul>
				<li>New H1: <code>FAST⚡️AF Context</code> &mdash; pure positioning, no package-name redundancy</li>
				<li>README: <code>WHO / WHAT / WHERE / WHY / WHEN / HOW</code> table cleaned up</li>
				<li>New <code>CONTRIBUTING.md</code> for xAI-side contributors</li>
				<li>Tier ladder canonical alignment with <code>faf-cli/src/core/tiers.ts</code></li>
				<li>Voice variant cross-link &mdash; routes existing context-side traffic to the new memory-side product</li>
			</ul>

			<p>
				Same Dorothy Faff at the top of both READMEs. Same FAST⚡️AF house style.
				The two ⚡️ eyes in her face have always been waiting for this moment.
			</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>Voice (PyPI)</h3>
					<p><code>pip install grok-faf-voice</code></p>
					<a class="cta-link" href="https://pypi.org/project/grok-faf-voice/">PyPI &rarr;</a>
				</div>

				<div class="cta-box">
					<h3>Context (npm)</h3>
					<p><code>npm i -g grok-faf-mcp</code></p>
					<a class="cta-link" href="https://www.npmjs.com/package/grok-faf-mcp">npm &rarr;</a>
				</div>
			</div>

			<p>Or claim your branded handle directly:</p>

			<div class="copy-box" onclick={() => copyText('https://mcpaas.live/voice/setup', 'setup')}>
				<code class="copy-code">https://mcpaas.live/voice/setup</code>
				<button class="copy-btn">{copiedId === 'setup' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>The Slogan</h2>

			<p style="font-size: 1.15rem; line-height: 1.6; padding: 1.5rem; background: var(--faf-surface)5f0; border-radius: 8px; border-left: 4px solid #FF6B35;">
				<strong>We are the Open-Ended answer to Voice memory, and don't you Forget It.</strong>
				<span style="color: #FF6B35; font-weight: 700;">We won't.</span>
			</p>

			<p>
				The phrase carries the brand: position + imperative + double-meaning closer.
				<em>Open-Ended</em> is the load-bearing word &mdash; voice provider swappable,
				memory permanent. Leading with xAI today (Ara &middot; Eve &middot; Leo &middot;
				Rex &middot; Sal). ElevenLabs, Hume, and custom voice cloning land in upcoming
				releases.
			</p>
		</section>

		<section>
			<h2>Read more</h2>
			<p>
				<a href="/blog/memory-is-vast">Memory is vast</a> — .fafm maps it. One format. Two edges.
				One soul. Voice is one edge of the same dual. ·
				<a href="/blog/permanent-memory-instant-recall">PM.IR.</a> — Permanent Memory. Instant
				Recall.
			</p>
		</section>

		<section class="footer-note">
			<p>
				<strong>FAF defines. MD instructs. AI codes.</strong>
			</p>
			<p>
				Built with <code>.faf 🐘</code> &mdash; persistent across sessions, devices, models. 🏎️
			</p>
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
		margin: 0 -1rem 2.5rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.favicon-demo {
		text-align: center;
		margin: 2.5rem 0;
	}

	.favicon-demo img {
		width: 200px;
		height: 200px;
		border-radius: 16px;
		display: inline-block;
	}

	.favicon-caption {
		font-size: 0.9rem;
		color: #666;
		margin: 0.75rem 0 0;
		font-style: italic;
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
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.launch {
		background: #FF6B35;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--faf-surface)5f0;
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

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
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
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
