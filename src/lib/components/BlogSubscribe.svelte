<script>
	/**
	 * Sitewide one-line capture — above footer on every page.
	 * "Stay in the loop: [email] [Subscribe]"
	 * Theme-aware: light = white field/black text; dark = dark field/light text.
	 */
	let email = $state('');
	/** @type {'idle' | 'loading' | 'success' | 'error'} */
	let status = $state('idle');

	/** @param {Event} e */
	async function handleSubmit(e) {
		e.preventDefault();
		if (!email || status === 'loading') return;
		status = 'loading';
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ email: email.trim(), source: 'faf.one/site' })
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || data?.subscribed === false) throw new Error(data?.error || 'fail');
			status = 'success';
			email = '';
		} catch {
			status = 'error';
			setTimeout(() => {
				status = 'idle';
			}, 4000);
		}
	}
</script>

<div class="loop">
	{#if status === 'success'}
		<p class="ok">You're on the list.</p>
	{:else}
		<form class="row" onsubmit={handleSubmit}>
			<label class="label" for="site-loop-email">Stay in the loop:</label>
			<input
				id="site-loop-email"
				type="email"
				bind:value={email}
				placeholder="your@email.com"
				required
				disabled={status === 'loading'}
				class="input"
			/>
			<button type="submit" disabled={!email || status === 'loading'} class="btn">
				{status === 'loading' ? '…' : 'Subscribe'}
			</button>
		</form>
		{#if status === 'error'}
			<p class="err">Something went wrong — try again.</p>
		{/if}
	{/if}
</div>

<style>
	.loop {
		max-width: 700px;
		margin: 0 auto;
		/* +1rem vertical breathing room above footer (was 0.85 / 0.5) */
		padding: 1.85rem 1.5rem 1.5rem;
		text-align: center;
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.label {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--faf-dark);
		white-space: nowrap;
		flex-shrink: 0;
	}
	/* Light: white field + black type. Dark: surface field + light type. Never black-on-black. */
	.input {
		width: 11rem;
		max-width: 100%;
		padding: 0.4rem 0.65rem;
		font-size: 0.85rem;
		background: var(--faf-surface);
		color: var(--faf-dark);
		border: 1px solid var(--faf-gray);
		border-radius: 4px;
	}
	.input::placeholder {
		color: var(--faf-gray);
		opacity: 0.85;
	}
	.input:focus {
		outline: none;
		border-color: var(--faf-orange);
	}
	.btn {
		padding: 0.4rem 0.85rem;
		background: var(--faf-dark);
		color: var(--faf-page-bg);
		border: 1px solid var(--faf-dark);
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
		white-space: nowrap;
	}
	.btn:hover:not(:disabled) {
		opacity: 0.9;
	}
	.btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
	.ok {
		margin: 0;
		font-size: 0.85rem;
		color: var(--faf-dark);
	}
	.err {
		margin: 0.3rem 0 0;
		font-size: 0.75rem;
		color: #c53030;
	}

	/* Explicit dark overrides — belt + suspenders for contrast */
	:global([data-theme='dark']) .label,
	:global([data-theme='dark']) .ok {
		color: #e5e5e5;
	}
	:global([data-theme='dark']) .input {
		background: #1e1e1e;
		color: #f0f0f0;
		border-color: #555;
	}
	:global([data-theme='dark']) .input::placeholder {
		color: #888;
	}
	:global([data-theme='dark']) .btn {
		background: #f0f0f0;
		color: #121212;
		border-color: #f0f0f0;
	}
</style>
