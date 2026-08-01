<script lang="ts">
	import { onMount } from 'svelte';
	import {
		npmPackages,
		pypiPackages,
		cratesPackages,
		npmTotal,
		pypiTotal,
		cratesTotal,
		grandTotal,
		formatNumber,
		formatTotal,
		allPackages
	} from '$lib/data/packages';

	let isVisible = $state(false);
	let copiedIndex = $state(-1);
	let email = $state('');
	let emailStatus = $state('');
	let isSubmitting = $state(false);

	onMount(() => {
		isVisible = true;
	});

	async function copyInstall(command: string, index: number) {
		try {
			await navigator.clipboard.writeText(command);
			copiedIndex = index;
			setTimeout(() => { copiedIndex = -1; }, 2000);
		} catch {
			// Fallback for older browsers
			const el = document.createElement('textarea');
			el.value = command;
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
			copiedIndex = index;
			setTimeout(() => { copiedIndex = -1; }, 2000);
		}
	}

	async function handleEmail(e: Event) {
		e.preventDefault();
		if (!email || isSubmitting) return;
		isSubmitting = true;
		emailStatus = 'sending';
		try {
			const response = await fetch('https://formspree.io/f/xnngaegg', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					type: 'Downloads Hub Signup',
					timestamp: new Date().toISOString(),
					source: 'faf.one/downloads'
				})
			});
			if (!response.ok) throw new Error('fail');
			emailStatus = 'success';
			email = '';
			setTimeout(() => { emailStatus = ''; }, 5000);
		} catch {
			emailStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}

</script>

<svelte:head>
	<title>Downloads - FAF Ecosystem | 3 Registries · Hard Floor</title>
	<meta
		name="description"
		content="Ecosystem downloads hard floor: npm + crates.io + PyPI without_mirrors only. No mirror inflation. Install FAF CLI, MCP servers, SDKs."
	/>
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">&larr;</a>
</div>

<div class="dl-page" class:visible={isVisible}>
	<!-- Hero -->
	<section class="hero">
		<div class="container">
			<h1 class="big-number">{formatTotal(grandTotal)}</h1>
			<p class="hero-sub">Ecosystem Downloads · Hard Floor</p>
			<p class="hero-detail">
				{allPackages.length} packages &middot; 3 registries &middot; PyPI without_mirrors only &middot; All
				open source
			</p>

			<div class="registry-badges">
				<a href="#npm" class="registry-badge npm-badge">
					<span class="badge-icon">npm</span>
					<span class="badge-count">{formatTotal(npmTotal)}</span>
				</a>
				<a href="#pypi" class="registry-badge pypi-badge">
					<span class="badge-icon">PyPI</span>
					<span class="badge-count">{formatTotal(pypiTotal)}</span>
				</a>
				<a href="#crates" class="registry-badge crates-badge">
					<span class="badge-icon">crates.io</span>
					<span class="badge-count">{formatTotal(cratesTotal)}</span>
				</a>
			</div>
		</div>
	</section>

	<!-- Try It Now -->
	<section class="try-section">
		<div class="container">
			<div class="try-card">
				<p class="try-label">Try it now — zero install, any public repo</p>
				<div class="try-box">
					<code class="try-cmd">$ npx faf-cli@latest git https://github.com/facebook/react</code>
					<button
						class="copy-btn"
						class:copied={copiedIndex === 99}
						onclick={() => copyInstall('npx faf-cli@latest git https://github.com/facebook/react', 99)}
					>
						{copiedIndex === 99 ? 'Copied' : 'Copy'}
					</button>
				</div>
				<p class="try-note">Instant Project DNA for React — works with any GitHub URL. <a href="/try" class="try-link">See more examples</a></p>
			</div>
		</div>
	</section>

	<!-- Quick-nav pills -->
	<nav class="quick-nav">
		<a href="#npm" class="nav-pill">npm ({npmPackages.length})</a>
		<a href="#pypi" class="nav-pill">Python ({pypiPackages.length})</a>
		<a href="#crates" class="nav-pill">Rust ({cratesPackages.length})</a>
		<a href="#notify" class="nav-pill notify-pill">Get Notified</a>
	</nav>

	<!-- npm Section -->
	<section class="pkg-section" id="npm">
		<div class="container">
			<h2 class="section-title">
				<span class="section-icon">npm</span>
				<span>npm Packages</span>
				<span class="section-count">{npmPackages.length} packages &middot; {formatTotal(npmTotal)}</span>
			</h2>
			<div class="cards-grid">
				{#each npmPackages as pkg, i}
					<div class="pkg-card">
						<div class="card-top">
							<span class="card-icon">{pkg.icon}</span>
							<span class="card-name">{pkg.name}</span>
							<span class="card-dl">{formatNumber(pkg.downloads)}</span>
						</div>
						<p class="card-desc">{pkg.description}</p>
						<div class="install-box">
							<code class="install-cmd">$ {pkg.install}</code>
							<button
								class="copy-btn"
								class:copied={copiedIndex === i}
								onclick={() => copyInstall(pkg.install, i)}
							>
								{copiedIndex === i ? 'Copied' : 'Copy'}
							</button>
						</div>
						<div class="card-links">
							<a href={pkg.registryUrl} target="_blank" rel="noopener" class="card-link registry-link">npm</a>
							<a href={pkg.githubUrl} target="_blank" rel="noopener" class="card-link github-link">GitHub</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- PyPI Section -->
	<section class="pkg-section" id="pypi">
		<div class="container">
			<h2 class="section-title">
				<span class="section-icon pypi-icon">PyPI</span>
				<span>Python Packages</span>
				<span class="section-count">{pypiPackages.length} packages &middot; {formatTotal(pypiTotal)}</span>
			</h2>
			<div class="cards-grid">
				{#each pypiPackages as pkg, j}
					{@const idx = npmPackages.length + j}
					<div class="pkg-card">
						<div class="card-top">
							<span class="card-icon">{pkg.icon}</span>
							<span class="card-name">{pkg.name}</span>
							<span class="card-dl">{formatNumber(pkg.downloads)}</span>
						</div>
						<p class="card-desc">{pkg.description}</p>
						<div class="install-box">
							<code class="install-cmd">$ {pkg.install}</code>
							<button
								class="copy-btn"
								class:copied={copiedIndex === idx}
								onclick={() => copyInstall(pkg.install, idx)}
							>
								{copiedIndex === idx ? 'Copied' : 'Copy'}
							</button>
						</div>
						<div class="card-links">
							<a href={pkg.registryUrl} target="_blank" rel="noopener" class="card-link registry-link pypi-link">PyPI</a>
							<a href={pkg.githubUrl} target="_blank" rel="noopener" class="card-link github-link">GitHub</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- crates.io Section -->
	<section class="pkg-section" id="crates">
		<div class="container">
			<h2 class="section-title">
				<span class="section-icon crates-icon">crates</span>
				<span>Rust Packages</span>
				<span class="section-count">{cratesPackages.length} package &middot; {cratesTotal}</span>
			</h2>
			<div class="cards-grid">
				{#each cratesPackages as pkg, k}
					{@const idx = npmPackages.length + pypiPackages.length + k}
					<div class="pkg-card">
						<div class="card-top">
							<span class="card-icon">{pkg.icon}</span>
							<span class="card-name">{pkg.name}</span>
							<span class="card-dl">{formatNumber(pkg.downloads)}</span>
						</div>
						<p class="card-desc">{pkg.description}</p>
						<div class="install-box">
							<code class="install-cmd">$ {pkg.install}</code>
							<button
								class="copy-btn"
								class:copied={copiedIndex === idx}
								onclick={() => copyInstall(pkg.install, idx)}
							>
								{copiedIndex === idx ? 'Copied' : 'Copy'}
							</button>
						</div>
						<div class="card-links">
							<a href={pkg.registryUrl} target="_blank" rel="noopener" class="card-link registry-link crates-link">crates.io</a>
							<a href={pkg.githubUrl} target="_blank" rel="noopener" class="card-link github-link">GitHub</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta-section" id="notify">
		<div class="container">
			<div class="cta-grid">
				<!-- Email Signup -->
				<div class="cta-card">
					<h3>Get Notified</h3>
					<p>New packages, milestones, and releases.</p>
					<form class="email-form" onsubmit={handleEmail}>
						<input
							type="email"
							bind:value={email}
							placeholder="you@email.com"
							required
							class="email-input"
							disabled={isSubmitting}
						/>
						<button type="submit" class="email-btn" disabled={isSubmitting || !email}>
							{isSubmitting ? '...' : 'Subscribe'}
						</button>
					</form>
					{#if emailStatus === 'success'}
						<p class="email-ok">Subscribed.</p>
					{:else if emailStatus === 'error'}
						<p class="email-err">Something went wrong. Try again.</p>
					{/if}
					<p class="email-note">No spam. Unsubscribe anytime.</p>
				</div>

				<!-- Star on GitHub -->
				<div class="cta-card">
					<h3>Star on GitHub</h3>
					<p>Help others discover FAF.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="cta-btn github-cta">
						<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
						</svg>
						Star faf-cli
					</a>
				</div>

				<!-- Sponsor / Tip -->
				<div class="cta-card">
					<h3>Support</h3>
					<p>Sponsor monthly or leave a one-time tip.</p>
					<div class="support-btns">
						<a href="https://github.com/sponsors/Wolfe-Jam" target="_blank" rel="noopener" class="cta-btn sponsor-cta">
							💜 Sponsor
						</a>
						<a href="https://github.com/sponsors/Wolfe-Jam?frequency=one-time" target="_blank" rel="noopener" class="cta-btn tip-cta">
							☕ Tip
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.2s;
	}

	.back-button:hover {
		color: #FF5722;
		text-shadow: none;
	}

	.dl-page {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s ease;
		background: var(--faf-cream);
		min-height: 100vh;
	}

	.dl-page.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		max-width: 960px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* ── Hero ────────────────────────────────────────── */

	.hero {
		text-align: center;
		padding: 3rem 2rem 1.5rem;
		background: var(--faf-cream);
	}

	.big-number {
		font-size: 5rem;
		font-weight: 900;
		color: #FF6B35;
		line-height: 1;
		margin-bottom: 0.25rem;
		letter-spacing: -0.03em;
	}

	.hero-sub {
		font-size: 1.5rem;
		color: var(--faf-black);
		font-weight: 700;
		margin-bottom: 0.25rem;
	}

	.hero-detail {
		font-size: 1rem;
		color: var(--faf-dark);
		margin-bottom: 1.5rem;
	}

	.registry-badges {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.registry-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.9rem;
		transition: all 0.2s;
	}

	.npm-badge {
		background: rgba(203, 56, 55, 0.15);
		border: 1px solid rgba(203, 56, 55, 0.4);
		color: #cb3837;
	}

	.npm-badge:hover {
		background: rgba(203, 56, 55, 0.25);
		box-shadow: 0 0 12px rgba(203, 56, 55, 0.3);
	}

	.pypi-badge {
		background: rgba(53, 114, 165, 0.15);
		border: 1px solid rgba(53, 114, 165, 0.4);
		color: #3572a5;
	}

	.pypi-badge:hover {
		background: rgba(53, 114, 165, 0.25);
		box-shadow: 0 0 12px rgba(53, 114, 165, 0.3);
	}

	.crates-badge {
		background: rgba(222, 165, 43, 0.15);
		border: 1px solid rgba(222, 165, 43, 0.4);
		color: #dea52b;
	}

	.crates-badge:hover {
		background: rgba(222, 165, 43, 0.25);
		box-shadow: 0 0 12px rgba(222, 165, 43, 0.3);
	}

	.badge-icon {
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}

	.badge-count {
		font-size: 0.85rem;
	}

	/* ── Try It Now ──────────────────────────────────── */

	.try-section {
		padding: 0 0 0.5rem;
	}

	.try-card {
		background: var(--faf-gray-light);
		border: 1.5px solid var(--faf-border-strong);
		border-radius: 12px;
		padding: 1.25rem 1.5rem;
		text-align: center;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	}

	.try-label {
		color: var(--faf-black);
		font-size: 0.95rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	/* Soft code strip — light mode: warm code-bg, not locked-black voids.
	   Dark mode: --faf-code-bg elevates to #222 (still quieter than #0a0a0a). */
	.try-box {
		display: flex;
		align-items: center;
		background: var(--faf-code-bg);
		border: 1px solid var(--faf-hairline);
		border-radius: 6px;
		padding: 0.75rem 1rem;
		gap: 0.75rem;
		max-width: 640px;
		margin: 0 auto;
	}

	.try-cmd {
		flex: 1;
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--faf-cyan-text);
		background: none;
		padding: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.try-note {
		color: var(--faf-dark);
		font-size: 0.8rem;
		margin-top: 0.5rem;
	}

	.try-note :global(.try-link) {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.try-note :global(.try-link:hover) {
		text-decoration: underline;
	}

	/* ── Quick-nav ───────────────────────────────────── */

	.quick-nav {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem 1.5rem;
		flex-wrap: wrap;
	}

	.nav-pill {
		padding: 0.5rem 1rem;
		background: var(--faf-surface);
		border: 1.5px solid var(--faf-border-strong);
		border-radius: 999px;
		color: var(--faf-ink);
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 600;
		transition: all 0.2s;
	}

	.nav-pill:hover {
		background: var(--faf-orange);
		border-color: var(--faf-border-strong);
		color: var(--faf-on-accent);
		box-shadow: none;
		transform: translateY(-1px);
	}

	.notify-pill {
		background: rgba(0, 212, 212, 0.1);
		border-color: rgba(0, 212, 212, 0.3);
		color: #00D4D4;
	}

	.notify-pill:hover {
		background: rgba(0, 212, 212, 0.2);
		border-color: #00D4D4;
		box-shadow: 0 0 12px rgba(0, 212, 212, 0.3);
	}

	/* ── Package Sections ────────────────────────────── */

	.pkg-section {
		padding: 2rem 0 1rem;
	}

	.section-title {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1.25rem;
		color: var(--faf-black);
		font-size: 1.3rem;
		flex-wrap: wrap;
	}

	.section-icon {
		padding: 0.25rem 0.6rem;
		border-radius: 6px;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 800;
		background: #cb3837;
		color: white;
	}

	.pypi-icon {
		background: #3572a5;
	}

	.crates-icon {
		background: #dea52b;
		color: #111;
	}

	.section-count {
		font-size: 0.85rem;
		color: var(--faf-dark);
		font-weight: 400;
		margin-left: auto;
	}

	/* ── Cards Grid ──────────────────────────────────── */

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.pkg-card {
		background: var(--faf-white);
		border: 1px solid var(--faf-light-gray);
		border-radius: 12px;
		padding: 1.25rem;
		transition: all 0.25s ease;
	}

	.pkg-card:hover {
		transform: translateY(-4px);
		border-color: #FF6B35;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	}

	.card-top {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.card-icon {
		font-size: 1.25rem;
	}

	.card-name {
		font-weight: 700;
		color: #FF6B35;
		font-family: var(--font-mono);
		font-size: 0.95rem;
		flex: 1;
	}

	.card-dl {
		font-size: 0.85rem;
		color: var(--faf-dark);
		font-family: var(--font-mono);
		white-space: nowrap;
	}

	.card-desc {
		color: var(--faf-dark);
		font-size: 0.875rem;
		margin-bottom: 0.75rem;
		line-height: 1.4;
	}

	/* ── Install Box ─────────────────────────────────── */
	/* Soft code strip (not locked-dark). Light: warm #F3F1EB. Dark: #222. */

	.install-box {
		display: flex;
		align-items: center;
		background: var(--faf-code-bg);
		border: 1px solid var(--faf-hairline);
		border-radius: 6px;
		padding: 0.5rem 0.75rem;
		margin-bottom: 0.75rem;
		gap: 0.5rem;
	}

	.install-cmd {
		flex: 1;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--faf-cyan-text);
		background: none;
		padding: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.copy-btn {
		background: var(--faf-surface);
		color: var(--faf-gray);
		border: 1px solid var(--faf-hairline);
		border-radius: 4px;
		padding: 0.25rem 0.6rem;
		font-size: 0.75rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.15s;
		white-space: nowrap;
		font-family: var(--font-mono);
	}

	.copy-btn:hover {
		background: var(--faf-section-alt);
		color: var(--faf-ink);
		border-color: var(--faf-border-strong);
	}

	.copy-btn.copied {
		background: rgba(0, 191, 99, 0.12);
		color: var(--faf-foundation-green);
		border-color: rgba(0, 191, 99, 0.35);
	}

	/* ── Card Links ──────────────────────────────────── */

	.card-links {
		display: flex;
		gap: 0.5rem;
	}

	.card-link {
		padding: 0.3rem 0.7rem;
		border-radius: 4px;
		text-decoration: none;
		font-size: 0.75rem;
		font-weight: 600;
		transition: all 0.15s;
	}

	.registry-link {
		background: rgba(203, 56, 55, 0.15);
		color: #cb3837;
		border: 1px solid rgba(203, 56, 55, 0.3);
	}

	.registry-link:hover {
		background: rgba(203, 56, 55, 0.25);
	}

	.pypi-link {
		background: rgba(53, 114, 165, 0.15);
		color: #3572a5;
		border-color: rgba(53, 114, 165, 0.3);
	}

	.pypi-link:hover {
		background: rgba(53, 114, 165, 0.25);
	}

	.crates-link {
		background: rgba(222, 165, 43, 0.15);
		color: #dea52b;
		border-color: rgba(222, 165, 43, 0.3);
	}

	.crates-link:hover {
		background: rgba(222, 165, 43, 0.25);
	}

	.github-link {
		background: var(--faf-gray-light);
		color: var(--faf-black);
		border: 1px solid var(--faf-light-gray);
	}

	.github-link:hover {
		background: var(--faf-gray-light);
		color: var(--faf-orange);
	}

	/* ── CTA Section ─────────────────────────────────── */

	.cta-section {
		padding: 2.5rem 0 3rem;
		border-top: 1px solid var(--faf-light-gray);
	}

	.cta-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.cta-card {
		background: var(--faf-white);
		border: 1px solid var(--faf-light-gray);
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
	}

	.cta-card h3 {
		color: var(--faf-black);
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.cta-card p {
		color: var(--faf-dark);
		font-size: 0.875rem;
		margin-bottom: 1rem;
		line-height: 1.4;
	}

	/* ── Email Form ──────────────────────────────────── */

	.email-form {
		display: flex;
		gap: 0.5rem;
	}

	.email-input {
		flex: 1;
		padding: 0.6rem 0.75rem;
		background: var(--faf-white);
		border: 1px solid var(--faf-light-gray);
		border-radius: 6px;
		color: var(--faf-black);
		font-family: var(--font-mono);
		font-size: 0.85rem;
	}

	.email-input:focus {
		outline: none;
		border-color: #FF6B35;
		box-shadow: 0 0 0 2px var(--faf-border-strong);
	}

	.email-input:disabled {
		opacity: 0.5;
	}

	.email-btn {
		padding: 0.6rem 1rem;
		background: #FF6B35;
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 700;
		font-size: 0.85rem;
		cursor: pointer;
		transition: all 0.2s;
		white-space: nowrap;
	}

	.email-btn:hover:not(:disabled) {
		background: #FF5722;
		transform: translateY(-1px);
	}

	.email-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.email-ok {
		color: var(--faf-foundation-green);
		font-size: 0.8rem;
		margin-top: 0.5rem;
		font-weight: 600;
	}

	.email-err {
		color: #ff5252;
		font-size: 0.8rem;
		margin-top: 0.5rem;
	}

	.email-note {
		color: var(--faf-dark) !important;
		font-size: 0.75rem !important;
		margin-top: 0.5rem;
		margin-bottom: 0 !important;
	}

	/* ── CTA Buttons ─────────────────────────────────── */

	.cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.7rem 1.25rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.9rem;
		transition: all 0.2s;
	}

	.github-cta {
		background: var(--faf-gray-light);
		color: var(--faf-black);
		border: 1px solid var(--faf-light-gray);
	}

	.github-cta:hover {
		background: var(--faf-gray-light);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.sponsor-cta {
		background: rgba(219, 97, 162, 0.15);
		color: #db61a2;
		border: 1px solid rgba(219, 97, 162, 0.3);
	}

	.sponsor-cta:hover {
		background: rgba(219, 97, 162, 0.25);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(219, 97, 162, 0.2);
	}

	.tip-cta {
		background: var(--faf-surface);
		color: var(--faf-ink);
		border: 1.5px solid var(--faf-border-strong);
	}

	.tip-cta:hover {
		background: var(--faf-orange);
		color: var(--faf-on-accent);
		border-color: var(--faf-border-strong);
		transform: translateY(-1px);
		box-shadow: none;
	}

	.support-btns {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
	}

	/* ── Responsive ──────────────────────────────────── */

	@media (max-width: 768px) {
		.big-number {
			font-size: 3.5rem;
		}

		.cards-grid {
			grid-template-columns: 1fr;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.section-count {
			margin-left: 0;
			flex-basis: 100%;
		}

		.email-form {
			flex-direction: column;
		}
	}

	@media (max-width: 480px) {
		.big-number {
			font-size: 2.75rem;
		}

		.registry-badges {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
