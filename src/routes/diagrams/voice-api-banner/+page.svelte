<svelte:head>
	<title>Voice API Edition - Hero Banner | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>Voice API Edition - Hero Banner</h1>
		<p>5:2 aspect ratio (1200x480px) - For X, LinkedIn, blog headers</p>
	</div>

	<!-- THE BANNER - Screenshot this area -->
	<div class="banner-container">
		<div class="hero-banner">
			<!-- Top badge -->
			<div class="version-badge">faf-cli v4.2.0</div>

			<!-- Main title -->
			<div class="hero-content">
				<h1 class="hero-title">Voice API Edition</h1>
				<p class="hero-subtitle">Save Our Souls 👻</p>

				<!-- The answer tagline -->
				<div class="answer-box">
					<span class="answer-text">The answer is 4.2.0 = 42</span>
				</div>

				<!-- Bottom tech stack -->
				<div class="tech-stack">
					<span class="tech-item">🍊 FAF Foundation</span>
					<span class="tech-divider">•</span>
					<span class="tech-item">🚀 xAI Grok</span>
					<span class="tech-divider">•</span>
					<span class="tech-item">👻 Eternal Memory</span>
				</div>
			</div>

			<!-- Decorative code snippet (bottom right) -->
			<div class="code-snippet">
				<code>faf init --xai</code>
			</div>
		</div>
	</div>

	<div class="usage-note">
		<p><strong>Usage:</strong> Take screenshot of the banner area (1200x480px) for X posts, blog headers, LinkedIn articles.</p>
		<p><strong>Tip:</strong> Use browser zoom to ensure exact 1200x480px output when screenshotting.</p>
	</div>
</div>

<style>
	.diagram-page {
		min-height: 100vh;
		background: #f8f9fa;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.diagram-header {
		max-width: 1200px;
		margin: 0 auto 2rem auto;
	}

	.back-link {
		color: #FF6B35;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2rem;
		margin: 1rem 0 0.5rem 0;
		color: #000;
	}

	.banner-container {
		max-width: 1200px;
		margin: 0 auto;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.12);
		padding: 2rem;
	}

	/* THE BANNER - 1200x480px */
	.hero-banner {
		width: 1200px;
		height: 480px;
		background: linear-gradient(135deg,
			#0a0a0a 0%,
			#1a1a1a 25%,
			#1a2a1a 50%,
			#2a1a0a 75%,
			#1a1a1a 100%);
		position: relative;
		overflow: hidden;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem;
	}

	/* Subtle grid pattern overlay */
	.hero-banner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image:
			linear-gradient(rgba(74, 222, 128, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(74, 222, 128, 0.03) 1px, transparent 1px);
		background-size: 50px 50px;
		opacity: 0.3;
	}

	/* Glow effects */
	.hero-banner::after {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle,
			rgba(74, 222, 128, 0.15) 0%,
			transparent 50%);
		animation: pulse 8s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.3; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.1); }
	}

	/* Version badge (top) */
	.version-badge {
		position: absolute;
		top: 2rem;
		right: 2rem;
		background: linear-gradient(135deg, var(--faf-green-light) 0%, #22c55e 100%);
		color: #0a0a0a;
		padding: 0.5rem 1.25rem;
		border-radius: 8px;
		font-size: 0.95rem;
		font-weight: 700;
		letter-spacing: 0.5px;
		box-shadow: 0 4px 12px rgba(74, 222, 128, 0.4);
		z-index: 10;
	}

	/* Main content */
	.hero-content {
		position: relative;
		z-index: 10;
		text-align: center;
	}

	.hero-title {
		font-size: 5rem;
		font-weight: 900;
		margin: 0;
		background: linear-gradient(135deg,
			var(--faf-green-light) 0%,
			#FF6B35 50%,
			var(--faf-green-light) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: -2px;
		line-height: 1.1;
		text-transform: uppercase;
		filter: drop-shadow(0 0 30px rgba(74, 222, 128, 0.3));
	}

	.hero-subtitle {
		font-size: 2.25rem;
		color: #f5f5f5;
		margin: 1rem 0 0 0;
		font-weight: 300;
		letter-spacing: 1px;
	}

	/* The answer box */
	.answer-box {
		margin: 2rem auto;
		display: inline-block;
		background: rgba(26, 26, 26, 0.8);
		border: 2px solid var(--faf-green-light);
		border-radius: 12px;
		padding: 1rem 2rem;
		backdrop-filter: blur(10px);
	}

	.answer-text {
		font-family: 'SF Mono', monospace;
		font-size: 1.5rem;
		color: var(--faf-green-light);
		font-weight: 600;
		letter-spacing: 1px;
	}

	/* Tech stack */
	.tech-stack {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 2rem;
		font-size: 1.1rem;
		color: #888;
	}

	.tech-item {
		font-weight: 500;
	}

	.tech-divider {
		color: #444;
	}

	/* Code snippet (bottom right) */
	.code-snippet {
		position: absolute;
		bottom: 2rem;
		left: 2rem;
		background: rgba(10, 10, 10, 0.9);
		border: 1px solid #333;
		border-left: 4px solid #FF6B35;
		border-radius: 8px;
		padding: 0.75rem 1.5rem;
		backdrop-filter: blur(10px);
		z-index: 10;
	}

	.code-snippet code {
		font-family: 'SF Mono', monospace;
		font-size: 1.25rem;
		color: var(--faf-green-light);
		font-weight: 600;
	}

	/* Usage note */
	.usage-note {
		max-width: 1200px;
		margin: 2rem auto 0 auto;
		padding: 1rem;
		background: #fff3cd;
		border-left: 4px solid #ffc107;
		border-radius: 8px;
		font-size: 0.9rem;
	}

	.usage-note p {
		margin: 0.5rem 0;
	}

	/* Responsive (maintain aspect ratio) */
	@media (max-width: 1280px) {
		.hero-banner {
			width: 100%;
			height: auto;
			aspect-ratio: 5 / 2;
		}

		.hero-title {
			font-size: 3.5rem;
		}

		.hero-subtitle {
			font-size: 1.75rem;
		}

		.answer-text {
			font-size: 1.2rem;
		}

		.tech-stack {
			font-size: 0.95rem;
		}

		.code-snippet code {
			font-size: 1rem;
		}
	}
</style>
