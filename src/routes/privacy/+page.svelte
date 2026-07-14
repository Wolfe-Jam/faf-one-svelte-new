<script>
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<svelte:head>
	<title>Privacy Policy | .faf - The JPEG for AI</title>
</svelte:head>

<Navigation />

<main class="legal-page">
	<div class="container">
		<h1>Privacy Policy</h1>
		<p class="last-updated">Last Updated: March 27, 2026</p>

		<section>
			<h2>Our Promise</h2>
			<p><strong>NO BS Privacy:</strong> We collect only what's necessary, protect it fiercely, and never sell your data. Period.</p>
		</section>

		<section>
			<h2>Developer Tools (faf-cli)</h2>
			<p><strong>faf-cli runs 100% locally on your machine.</strong> When you run <code>faf init</code>, <code>faf auto</code>, or <code>faf score</code>:</p>
			<ul>
				<li>No source code is read, collected, or transmitted</li>
				<li>No data leaves your machine — no API calls, no telemetry, no phone-home</li>
				<li>The WASM scoring kernel runs locally — no cloud processing</li>
				<li>Your <code>project.faf</code> file contains only metadata you control — never source code</li>
				<li>Private repos stay private — we never see them</li>
			</ul>
			<p><strong>No training. No retention. No exceptions.</strong></p>
			<p>FAF has no training pipeline. Your code, your data, and your project metadata are never used to train any AI model, improve any service, or feed any analytics system. We do not have access to your code — faf-cli is an offline tool.</p>
		</section>

		<section>
			<h2>MCP Servers (claude-faf-mcp, faf-mcp, grok-faf-mcp, gemini-faf-mcp)</h2>
			<p>FAF MCP servers run as local processes on your machine, invoked by your AI tool (Claude, Cursor, etc.). They read your local <code>project.faf</code> file and serve it via the MCP protocol to your AI. No data is sent to FAF servers — the MCP connection is between your AI tool and your local filesystem.</p>
		</section>

		<section>
			<h2>WASM Scoring Kernel</h2>
			<p>The faf-scoring-kernel (Rust to WASM) and Zig WASM ghost binary run entirely in-process — inside your Node.js runtime, your browser, or your edge function. No network calls. No data exfiltration. The WASM binary scores your <code>.faf</code> YAML locally and returns a result. Nothing leaves the process.</p>
		</section>

		<section>
			<h2>Web Properties (faf.one, builder, mcpaas.live)</h2>
			<p>When you visit our websites:</p>
			<ul>
				<li><strong>Vercel Analytics:</strong> Anonymous page view counts — no personal data, no cookies, no tracking</li>
				<li><strong>FAF Builder:</strong> When you score a public GitHub repo, we fetch its file tree via the GitHub API. We do not store the results or your repo data</li>
				<li><strong>MCPaaS:</strong> Edge location logging (Cloudflare data center code only — e.g. "ATL") for our <a href="https://mcpaas.live/globe">Globe</a> visualization. No personal data is logged</li>
			</ul>
		</section>

		<section>
			<h2>Email</h2>
			<p>If you provide your email (namepoint claims, contact forms, or purchases), we use it only to:</p>
			<ul>
				<li>Communicate about your account or purchase</li>
				<li>Send important product updates (rare, no spam)</li>
			</ul>
			<p>We never sell, share, or use email addresses for marketing without consent. Unsubscribe anytime.</p>
		</section>

		<section>
			<h2>1. Information We Collect</h2>
			<h3>When You Sign Up:</h3>
			<ul>
				<li>Email address (for account access)</li>
				<li>Payment information (processed by Stripe - we never see your card details)</li>
			</ul>
			
			<h3>When You Use .faf:</h3>
			<ul>
				<li>Project metadata (to calculate your FAF score)</li>
				<li>Usage statistics (to improve the service)</li>
				<li>Error logs (to fix bugs)</li>
			</ul>
		</section>

		<section>
			<h2>2. How We Use Your Information</h2>
			<ul>
				<li>Process your subscription</li>
				<li>Send important updates (no spam, ever)</li>
				<li>Improve the .faf format and tools</li>
				<li>Provide customer support</li>
			</ul>
		</section>

		<section>
			<h2>3. Data Storage & Security</h2>
			<ul>
				<li><strong>Encryption:</strong> All data encrypted in transit and at rest</li>
				<li><strong>Location:</strong> Stored on secure servers in the United States</li>
				<li><strong>Access:</strong> Limited to essential personnel only</li>
				<li><strong>Retention:</strong> Deleted 30 days after account closure</li>
			</ul>
		</section>

		<section>
			<h2>4. Third-Party Services</h2>
			<p>We use trusted partners:</p>
			<ul>
				<li><strong>Stripe:</strong> Payment processing (PCI compliant)</li>
				<li><strong>Formspree:</strong> Email capture (GDPR compliant)</li>
				<li><strong>Vercel:</strong> Website hosting (SOC 2 compliant)</li>
			</ul>
			<p>Each has their own privacy policy. We chose them for their security standards.</p>
		</section>

		<section>
			<h2>5. Your Rights</h2>
			<p>You can always:</p>
			<ul>
				<li>Access your data</li>
				<li>Correct inaccuracies</li>
				<li>Delete your account</li>
				<li>Export your information</li>
				<li>Opt-out of communications</li>
			</ul>
			<p>Email <a href="mailto:team@faf.one">team@faf.one</a> for any data requests.</p>
		</section>

		<section>
			<h2>6. Cookies</h2>
			<p>We use minimal cookies:</p>
			<ul>
				<li>Essential cookies for authentication</li>
				<li>Analytics to improve the service (anonymous)</li>
				<li>No tracking cookies</li>
				<li>No advertising cookies</li>
			</ul>
		</section>

		<section>
			<h2>7. Children's Privacy</h2>
			<p>The Service is not intended for users under 13. We don't knowingly collect data from children.</p>
		</section>

		<section>
			<h2>8. Changes to This Policy</h2>
			<p>We'll notify you of significant changes via email. Continued use means acceptance of updates.</p>
		</section>

		<section>
			<h2>9. Contact Us</h2>
			<p>Privacy questions or concerns?</p>
			<p>Email: <a href="mailto:team@faf.one">team@faf.one</a></p>
			<p>Location: Atlanta, GA, USA</p>
		</section>

		<section class="privacy-commitment">
			<h2>🧡 Our Commitment — All FAF Products</h2>
			<p>Across every FAF product — faf-cli, all MCP servers, MCPaaS, FAF Builder — your trust is everything. We will never:</p>
			<ul>
				<li>Read, collect, or retain your source code</li>
				<li>Use your data for AI training — we have no training pipeline</li>
				<li>Sell or share your data with third parties</li>
				<li>Send telemetry without your knowledge</li>
				<li>Use dark patterns</li>
				<li>Hide important details</li>
			</ul>
			<p><strong>Your code is yours. Your context is yours. No BS. No exceptions.</strong></p>
		</section>

		<div class="legal-footer">
			<p>© {new Date().getFullYear()} FAF. The Context Standard for AI.</p>
			<p>Your privacy matters. No BS. 🧡</p>
		</div>
	</div>
</main>

<style>
	.legal-page {
		min-height: calc(100vh - 200px);
		padding: 4rem 0;
		background: var(--faf-white);
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
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--faf-orange);
	}

	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.75rem;
		margin-top: 1rem;
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