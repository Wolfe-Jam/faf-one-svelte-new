<script>
	/**
	 * Blog email capture — used on index and every post page.
	 * Inline colors so theme tokens cannot hide it.
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
				body: JSON.stringify({ email: email.trim(), source: 'faf.one/blog' })
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

<div
	class="blog-subscribe"
	id="blog-subscribe"
	style="margin:2rem auto;max-width:760px;padding:1.5rem 1.25rem;border:2px solid #FF6B35;border-radius:10px;background:#ffffff;text-align:center;box-shadow:0 4px 16px rgba(255,107,53,0.15);"
>
	{#if status === 'success'}
		<p style="margin:0;color:#1a1a1a;font-size:1rem;font-weight:600;">
			You're on the list. New posts land in your inbox.
		</p>
	{:else}
		<p style="margin:0 0 1rem;color:#1a1a1a;font-size:1.05rem;font-weight:700;">
			Never miss a post.
		</p>
		<form
			onsubmit={handleSubmit}
			style="display:flex;gap:0.5rem;justify-content:center;max-width:420px;margin:0 auto;flex-wrap:wrap;"
		>
			<input
				type="email"
				bind:value={email}
				placeholder="your@email.com"
				required
				disabled={status === 'loading'}
				style="flex:1;min-width:200px;padding:0.75rem 1rem;font-size:0.95rem;background:#FEFCF8;color:#1a1a1a;border:2px solid #ccc;border-radius:6px;"
			/>
			<button
				type="submit"
				disabled={!email || status === 'loading'}
				style="padding:0.75rem 1.5rem;background:#FF6B35;color:#ffffff;border:none;border-radius:6px;font-weight:700;cursor:pointer;font-size:0.95rem;"
			>
				{status === 'loading' ? '…' : 'Subscribe'}
			</button>
		</form>
		{#if status === 'error'}
			<p style="margin:0.75rem 0 0;color:#c53030;font-size:0.9rem;">
				Something went wrong — try again.
			</p>
		{/if}
	{/if}
</div>
