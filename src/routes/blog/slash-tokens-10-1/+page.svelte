<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The 10:1 Edition - slash-tokens v1.2.1 | FAF</title>
	<meta name="description" content="For every $1 you pay Slash, you get $10 back. 186 tests. 4 providers. Zero failures. The math works." />
	<meta property="og:title" content="The 10:1 Edition - slash-tokens v1.2.1" />
	<meta property="og:description" content="For every $1 you pay Slash, you get $10 back. The math works." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The 10:1 Edition
		</div>

		<h1>The 10:1 Edition</h1>
		<p class="version-tag">slash-tokens v1.2.1</p>
		<p class="subtitle">For every $1 you pay, you get $10 back</p>
		<div class="meta">
			<time datetime="2026-04-15">April 15, 2026</time>
			<span class="separator">|</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We spent a full day testing /slash against live traffic. 3,451 API calls. $477 sunk cost prevented. Slash took $47. User kept $429. That's a <strong>10:1 return</strong>. Not a promise. Receipts.
			</p>
		</section>

		<section>
			<h2>The Dashboard Went Dark</h2>
			<p>It started with a bug report: "The dashboard isn't updating."</p>
			<p>Activity was flowing. Claude Code was running. But the stats panel was frozen. We traced it to a single line:</p>
			<div class="example-box">
				<span class="red">if (data.costSaved <= 0) return;</span>
			</div>
			<p>Pass-through calls — the kind Claude Code makes hundreds of times a day — were silently dropped from transaction records. The live feed showed ticks. The numbers didn't move.</p>
			<p>We fixed it. Then we asked: <em>what else is wrong?</em></p>
		</section>

		<section>
			<h2>The Audit</h2>
			<p>One bug turned into a full-day audit across all 4 providers:</p>
			<ul>
				<li><strong>Gemini proxy had no Gate</strong> — duplicate detection, rapid fire, context overflow all bypassed</li>
				<li><strong>Legacy model names fell through</strong> — gpt-4-turbo, o1-mini, gpt-3.5 got no pricing data</li>
				<li><strong>xAI detection was fragile</strong> — relied solely on API key prefix</li>
				<li><strong>100KB model names rendered in full</strong> — adversarial input from our own test suite</li>
				<li><strong>No purchase confirmation email</strong> — you buy credits, hear nothing</li>
				<li><strong>Low-balance alerts fired once, forever</strong> — top up and drain again, silence</li>
			</ul>
			<p>Every one fixed. Every one tested. Every one deployed.</p>
		</section>

		<section>
			<h2>The Ratio</h2>
			<p>After the fixes, we watched the dashboard all day. Real traffic. Real money.</p>
			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-value green">$477.27</div>
					<div class="stat-label">Sunk cost prevented</div>
				</div>
				<div class="stat-card">
					<div class="stat-value">$47.69</div>
					<div class="stat-label">Slash 10%</div>
				</div>
				<div class="stat-card">
					<div class="stat-value green">$429.58</div>
					<div class="stat-label">Net salvaged</div>
				</div>
				<div class="stat-card">
					<div class="stat-value">3,451</div>
					<div class="stat-label">Transactions</div>
				</div>
			</div>
			<p style="text-align:center;color:#888;margin-top:0.5rem;">One day. One user. One dashboard.</p>
			<p>The ratio holds: for every <strong>$1</strong> Slash takes, the user keeps <strong>$10</strong>. That's not a marketing claim. It's arithmetic. <code>cost_saved * 0.10 = fee</code>.</p>
		</section>

		<section>
			<h2>The $5 User</h2>
			<p>We built the lifecycle for someone buying $5 top-ups:</p>
			<div class="example-box" style="line-height:2.2;">
				<span class="green">$5.00</span> &nbsp;Start<br>
				<span style="color:#888;">$3.00</span> &nbsp;Email: balance running low<br>
				<span style="color:#888;">$2.00</span> &nbsp;Email: getting lower<br>
				<span style="color:#eab308;">$1.00</span> &nbsp;Email: last warning<br>
				<span class="red">$0.00</span> &nbsp;Email: routing paused<br>
				<span style="color:#888;">↓ calls still flow through (no routing, no fees)</span><br>
				<span class="green">$5.00</span> &nbsp;Stripe top-up + confirmation email<br>
				<span style="color:#888;">↓ alerts reset, cycle starts fresh</span>
			</div>
			<p>At $0, your calls still work. You just stop saving. Top up when you're ready.</p>
		</section>

		<section>
			<h2>186 Tests. Zero Failures.</h2>
			<p>This release introduced a cross-repo integration test suite — the SDK proving it speaks the same protocol as the backend.</p>
			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-value">118</div>
					<div class="stat-label">slash-tokens (SDK)</div>
				</div>
				<div class="stat-card">
					<div class="stat-value">68</div>
					<div class="stat-label">mcpaas-cf (backend)</div>
				</div>
			</div>
			<p>The integration tests are self-contained — they register their own trial key, run against live mcpaas.live, and cost less than $0.01 per run. No secrets. No mocks. Real API, real money, real proof.</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="example-box">
				<code style="color:#FF4400;">npm install slash-tokens</code>
			</div>
			<p>Or one line — every API call optimized:</p>
			<div class="example-box">
				<code style="color:#FF4400;">import 'slash-tokens/auto'</code>
			</div>
			<p>Dashboard at <a href="https://mcpaas.live/slash/dashboard">mcpaas.live/slash/dashboard</a>. Free $5 key at <a href="https://mcpaas.live/slash/setup">setup</a>.</p>
		</section>

		<section class="footer-note">
			<p>10:1 — the more you build, the more you save.</p>
			<p style="margin-top:0.5rem;"><a href="https://slashtokens.com">slashtokens.com</a></p>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 720px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
		color: #f5f5f5;
	}

	.breadcrumb {
		font-size: 0.85rem;
		color: #555;
		margin-bottom: 1.5rem;
	}
	.breadcrumb a { color: #666; text-decoration: none; }
	.breadcrumb a:hover { color: #f5f5f5; }

	h1 {
		font-size: 2.5rem;
		font-weight: 900;
		margin: 0 0 0.25rem 0;
		line-height: 1.1;
	}

	.version-tag {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		color: #FF4400;
		margin: 0.25rem 0;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #888;
		margin-bottom: 1rem;
	}

	.meta {
		font-size: 0.85rem;
		color: #666;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.category {
		padding: 0.15rem 0.6rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.category.release { background: rgba(0, 184, 184, 0.15); color: #00B8B8; }

	.post-content { font-size: 1.1rem; }

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: rgba(255, 68, 0, 0.08);
		border-radius: 8px;
		border-left: 4px solid #FF4400;
	}

	h2 {
		font-size: 1.6rem;
		margin: 3rem 0 1.5rem 0;
		color: #f5f5f5;
		border-bottom: 1px solid #222;
		padding-bottom: 0.5rem;
	}

	p { margin-bottom: 1.25rem; }
	ul { margin: 1rem 0 1.5rem 1.5rem; }
	li { margin-bottom: 0.5rem; }
	a { color: #FF4400; }
	a:hover { text-decoration: none; }

	.red { color: #dc2626; font-weight: 700; }
	.green { color: #4ade80; font-weight: 700; }

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: rgba(255, 68, 0, 0.1);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.example-box {
		background: #111;
		border: 1px solid #222;
		border-radius: 10px;
		padding: 1.2rem 1.5rem;
		margin: 1.5rem 0;
		font-family: 'SF Mono', monospace;
		font-size: 0.95rem;
		line-height: 2;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
		margin: 1.5rem 0;
	}

	.stat-card {
		background: #111;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1.25rem;
		text-align: center;
	}

	.stat-value {
		font-size: 1.8rem;
		font-weight: 900;
		color: #f5f5f5;
		margin-bottom: 0.25rem;
	}

	.stat-label {
		font-size: 0.8rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #222;
		font-size: 0.95rem;
		color: #888;
		text-align: center;
	}
</style>
