<script>
	const currentYear = new Date().getFullYear();

	const links = [
		{ label: 'GitHub', href: 'https://github.com/Wolfe-Jam/faf-cli', external: true },
		{ label: 'Docs', href: '/docs' },
		{ label: 'Links', href: '/links' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Sponsor', href: '/sponsors' },
		{ label: 'Privacy', href: '/privacy' },
		{ label: 'Terms', href: '/terms' }
	];
</script>

<footer class="footer" id="footer">
	<div class="container">
		<p class="tagline">The Context Standard for AI</p>

		<nav class="footer-nav" aria-label="Site footer">
			{#each links as link, i}
				{#if i > 0}<span class="sep" aria-hidden="true">·</span>{/if}
				<a
					href={link.href}
					target={link.external ? '_blank' : undefined}
					rel={link.external ? 'noopener noreferrer' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<p class="meta">IANA-registered · application/vnd.faf+yaml · Atlanta</p>

		<p class="copy">
			© {currentYear} FAF ·
			<a href="https://orcid.org/0009-0007-0801-3841" target="_blank" rel="noopener noreferrer">
				James Wolfe (ORCID)
			</a>
		</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 2.5rem 1.5rem 2rem;
		margin-top: 3rem;
		border-top: 3px solid var(--faf-orange);
		text-align: center;
	}

	.container {
		max-width: 700px;
		margin: 0 auto;
	}

	.tagline {
		margin: 0 0 1rem;
		font-weight: 600;
		font-size: 0.95rem;
		color: var(--faf-white);
	}

	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.35rem 0.5rem;
		margin-bottom: 1.25rem;
	}

	.footer-nav a {
		color: #bbb;
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.footer-nav a:hover {
		color: var(--faf-orange);
	}

	.sep {
		color: #555;
		user-select: none;
	}

	.meta {
		margin: 0 0 0.5rem;
		font-size: 0.8rem;
		color: #888;
		font-family: var(--font-mono);
	}

	.copy {
		margin: 0;
		font-size: 0.8rem;
		color: #666;
	}

	.copy a {
		color: var(--faf-orange);
		text-decoration: none;
	}

	.copy a:hover {
		text-decoration: underline;
	}
</style>