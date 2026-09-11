<svelte:head>
	<title>Privacy Policy | FAF</title>
	<meta
		name="description"
		content="Your code and context stay on your machine. What each FAF tool, website, and hosted service does with your data."
	/>
</svelte:head>

<main class="legal-page">
	<div class="container">
		<h1>Privacy Policy</h1>
		<p class="last-updated">Last Updated: September 11, 2026</p>

		<section class="promise">
			<p class="promise-lead">Your code and context stay on your machine.</p>
			<p>FAF tools run locally and send nothing to FAF. A few features go online — only when you use them, and only to the service you pick.</p>
			<ul>
				<li>No telemetry from the CLI, the extensions, or the MCP servers</li>
				<li>No tracking cookies on faf.one</li>
				<li>No training — FAF has no training pipeline</li>
				<li>Never sold</li>
			</ul>
		</section>

		<section>
			<h2>Tools on Your Machine</h2>
			<p><strong>faf-cli</strong>, <strong>FAF Context</strong> for VS Code, the <strong>Stack Grabber</strong> Chrome extension, and the MCP servers <strong>claude-faf-mcp</strong>, <strong>faf-mcp</strong>, <strong>grok-faf-mcp</strong>, <strong>gemini-faf-mcp</strong>, <strong>rust-faf-mcp</strong>, and <strong>faf-memory-mcp</strong>.</p>
			<ul>
				<li>They read your <code>project.faf</code> and project files locally</li>
				<li>The WASM scoring kernel runs in-process — nothing leaves the process</li>
				<li>Your <code>project.faf</code> holds only what you and the tools write into it — never source code</li>
				<li>Stack Grabber reads the page you're on when you use it, and keeps its results and usage logs (including page URLs) in your browser's local storage</li>
			</ul>
		</section>

		<section>
			<h2>Only When You Ask</h2>
			<p>These features go online when you use them, and only to the service named:</p>
			<ul>
				<li><strong>GitHub:</strong> <code>faf git</code>, the <code>faf_git</code> MCP tool, and the VS Code “Score a GitHub Repo” command read the repo you name from GitHub. If <code>GITHUB_TOKEN</code> or <code>GH_TOKEN</code> is set, claude-faf-mcp and faf-mcp send it to GitHub with the request</li>
				<li><strong>Anthropic:</strong> the optional <code>faf ai</code> commands send your <code>project.faf</code> to Anthropic, using your own API key</li>
				<li><strong>xAI:</strong> grok-faf-mcp's <code>rag_query</code> tool sends your question to xAI, using your own API key</li>
				<li><strong>FAF bench:</strong> <code>faf bench grade --submit</code> sends your bench result (date, model, project name, scores) to mcpaas.live, where it is kept</li>
				<li><strong>rust-faf-mcp via npm:</strong> downloads its binary from GitHub Releases on first run</li>
				<li><strong>gemini-faf-mcp Python client:</strong> <code>FAFClient</code> (not used by the MCP server) sends a start-up ping — package name and version — to our Google Cloud service only if you set <code>FAF_TELEMETRY=1</code>. Its remote mode sends your requests there. Versions before 2.8.2 sent the ping by default; set <code>FAF_TELEMETRY_OFF=1</code> on those</li>
			</ul>
		</section>

		<section>
			<h2>What Our Websites and Hosted Services See</h2>
			<p>Like any website, ours see some request data. Here is what they see and keep.</p>

			<h3>faf.one</h3>
			<ul>
				<li>Cloudflare hosts it and counts visits without cookies. Serving pages means it processes request data, such as your IP address</li>
				<li>If you sign up or use the contact form: your email, via Formspree and Resend</li>
				<li>FAFb Drive: if you request access, we email you a password through Resend. Signing in sets a sign-in cookie for 14 days</li>
				<li>If you buy FAF Pro or n8n.faf: Stripe takes the payment, and we keep a license record (email, license key, Stripe customer ID) in Supabase</li>
				<li>Some pages show GitHub's Sponsors button, loaded from github.com</li>
				<li>faf.one/webmcp scores in your browser — what you paste isn't sent to us</li>
			</ul>

			<h3>mcpaas.live and ide.faf.one</h3>
			<p>Hosted MCP endpoints (including hosted claude, grok, and gemini FAF servers) and namepoints. They process the tool arguments you send, and keep:</p>
			<ul>
				<li>Request counts per Cloudflare location (for the <a href="https://mcpaas.live/globe">Globe</a>) and per host, for about 13 months</li>
				<li>IP addresses, in short-lived rate-limit keys. Cloudflare Turnstile (bot protection) also sees your IP</li>
				<li>Task inputs and results, for 1 hour</li>
				<li>Your GitHub profile (username, name, email), for 1 hour after you sign in with GitHub</li>
				<li>Your email: for 90 days if you register interest in a namepoint, and with your Stripe IDs if you claim one or buy slash. A free claim adds you to our update list</li>
			</ul>
			<p>The slash feature forwards your prompt to the AI provider you pick: Anthropic, OpenAI, or xAI.</p>

			<h3>builder.faf.one</h3>
			<ul>
				<li>Your browser fetches the public repo you enter straight from GitHub</li>
				<li>GitHub sign-in is used once, to commit your <code>project.faf</code> — the token isn't kept</li>
				<li>We count page views and browser user-agents, and keep the names of repos that reach 100%. Cloudflare keeps request logs</li>
			</ul>

			<h3>gemini-faf-mcp hosted service (Google Cloud)</h3>
			<ul>
				<li>Update requests, including what you send, are stored in Google BigQuery</li>
			</ul>
		</section>

		<section>
			<h2>Email</h2>
			<p>If you give us your email, we use it only to talk about your account or purchase, and to send rare product updates. We never sell or share it. Unsubscribe anytime.</p>
		</section>

		<section>
			<h2>Services We Use</h2>
			<ul>
				<li><strong>Cloudflare:</strong> hosting, visit counts (no cookies), and bot protection</li>
				<li><strong>Google Cloud:</strong> the gemini-faf-mcp hosted service</li>
				<li><strong>Formspree:</strong> email signup</li>
				<li><strong>Resend:</strong> email delivery</li>
				<li><strong>Stripe:</strong> payments — we never see your card details</li>
				<li><strong>Supabase:</strong> license records</li>
				<li><strong>Upstash:</strong> FAF Builder counters</li>
				<li><strong>GitHub:</strong> repos you ask for, GitHub sign-in, and the Sponsors button</li>
				<li><strong>Anthropic, OpenAI, xAI:</strong> only when you use a feature that sends to them</li>
			</ul>
			<p>Each has its own privacy policy.</p>
		</section>

		<section>
			<h2>Cookies</h2>
			<ul>
				<li>faf.one: no tracking cookies. FAFb Drive sets a sign-in cookie for 14 days when you sign in. The GitHub Sponsors button on some pages loads from github.com, under GitHub's own policy</li>
				<li>mcpaas.live: a sign-in cookie, for 1 hour, when you sign in with GitHub</li>
				<li>No advertising cookies</li>
			</ul>
		</section>

		<section>
			<h2>Your Rights</h2>
			<p>You can always access, correct, export, or delete your data, and opt out of communications. Email <a href="mailto:team@faf.one">team@faf.one</a> for any data request.</p>
		</section>

		<section>
			<h2>Children's Privacy</h2>
			<p>FAF products are not intended for users under 13. We don't knowingly collect data from children.</p>
		</section>

		<section>
			<h2>Changes to This Policy</h2>
			<p>We update the date above when this page changes. If you've given us your email, we'll tell you about significant changes.</p>
		</section>

		<section>
			<h2>Contact Us</h2>
			<p>Privacy questions or concerns? Email <a href="mailto:team@faf.one">team@faf.one</a>.</p>
			<p>Location: Atlanta, GA, USA</p>
		</section>

		<section class="privacy-commitment">
			<h2>Our Commitment — All FAF Products</h2>
			<p>Across every FAF product — faf-cli, the MCP servers, the VS Code and Chrome extensions, MCPaaS, and FAF Builder — we will never:</p>
			<ul>
				<li>Upload your source code to FAF — local tools read it on your machine; hosted tools see only what you send them</li>
				<li>Use your data for AI training — we have no training pipeline</li>
				<li>Sell your data</li>
				<li>Add telemetry without listing it on this page</li>
				<li>Use dark patterns</li>
				<li>Hide important details</li>
			</ul>
			<p><strong>Your code is yours. Your context is yours. No BS. No exceptions.</strong></p>
		</section>

		<div class="legal-footer">
			<p>© {new Date().getFullYear()} FAF. The Context Standard for AI.</p>
			<p>Your privacy matters. No BS.</p>
		</div>
	</div>
</main>

<style>
	.legal-page {
		min-height: calc(100vh - 200px);
		padding: 4rem 0;
		background: var(--faf-page-bg);
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.last-updated {
		color: var(--faf-gray-dark);
		font-size: 1rem;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid var(--faf-gray-light);
	}

	section {
		margin-bottom: 2.5rem;
		padding: 0; /* the app.css section padding (96px) leaves big gaps on a text page */
	}

	.promise {
		margin-bottom: 3rem;
	}

	.promise-lead {
		font-size: clamp(1.6rem, 3.5vw, 2.2rem);
		font-weight: 800;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: var(--faf-black);
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--faf-orange);
	}

	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.75rem;
		margin-top: 1.5rem;
		color: var(--faf-black);
	}

	p {
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	ul {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	a:hover {
		text-decoration: underline;
	}

	.privacy-commitment {
		background: var(--faf-white);
		color: var(--faf-black);
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid var(--faf-orange);
		margin-top: 3rem;
	}

	.legal-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 2px solid var(--faf-gray-light);
		text-align: center;
		color: var(--faf-gray-dark);
	}

	.legal-footer p {
		margin-bottom: 0.5rem;
	}
</style>
