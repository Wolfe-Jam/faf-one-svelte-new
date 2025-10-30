<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let { isOpen = $bindable(false) } = $props();

	const dispatch = createEventDispatcher();

	let email = $state('');
	let message = $state('');
	let name = $state('');
	let category = $state('');
	let company = $state('');
	let showDetails = $state(false);
	let sending = $state(false);
	let success = $state(false);
	let error = $state('');

	function close() {
		isOpen = false;
		// Reset form after close animation
		setTimeout(() => {
			email = '';
			message = '';
			name = '';
			category = '';
			company = '';
			showDetails = false;
			success = false;
			error = '';
		}, 300);
	}

	async function handleSubmit() {
		if (!email || !message) return;

		sending = true;
		error = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					message,
					name: name || undefined,
					category: category || undefined,
					company: company || undefined
				})
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Failed to send message');
			}

			success = true;
			setTimeout(() => close(), 2000);

		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to send message';
		} finally {
			sending = false;
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}
</script>

{#if isOpen}
	<div class="modal-backdrop" onclick={handleBackdropClick}>
		<div class="modal-content">
			<button class="modal-close" onclick={close} aria-label="Close">&times;</button>

			{#if success}
				<div class="success-message">
					<div class="success-icon">✓</div>
					<h3>Message Sent!</h3>
					<p>We'll get back to you within 24 hours.</p>
				</div>
			{:else}
				<h2>Contact Us</h2>
				<p class="modal-subtitle">Quick message to team@faf.one</p>

				<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
					<!-- Quick Fields -->
					<div class="form-group">
						<label for="email">Your Email *</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							placeholder="your@email.com"
							disabled={sending}
						/>
					</div>

					<div class="form-group">
						<label for="message">Message *</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="4"
							placeholder="What can we help with?"
							disabled={sending}
						></textarea>
					</div>

					<!-- More Details Expander -->
					<button
						type="button"
						class="expander"
						onclick={() => showDetails = !showDetails}
					>
						{showDetails ? '▲' : '▼'} More Details (optional)
					</button>

					{#if showDetails}
						<div class="expandable-fields">
							<div class="form-group">
								<label for="name">Name</label>
								<input
									type="text"
									id="name"
									bind:value={name}
									placeholder="Your name"
									disabled={sending}
								/>
							</div>

							<div class="form-group">
								<label for="category">Category</label>
								<select id="category" bind:value={category} disabled={sending}>
									<option value="">General</option>
									<option value="bug">🐛 Bug Report</option>
									<option value="feature">✨ Feature Request</option>
									<option value="question">❓ Question</option>
									<option value="feedback">💬 Feedback</option>
								</select>
							</div>

							<div class="form-group">
								<label for="company">Company/Project</label>
								<input
									type="text"
									id="company"
									bind:value={company}
									placeholder="Optional"
									disabled={sending}
								/>
							</div>
						</div>
					{/if}

					{#if error}
						<div class="error-message">{error}</div>
					{/if}

					<button type="submit" class="btn-submit" disabled={sending || !email || !message}>
						{sending ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 1rem;
		animation: fadeIn 0.2s ease;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.modal-content {
		background: var(--faf-white);
		border-radius: 12px;
		padding: 2rem;
		max-width: 500px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		animation: slideUp 0.3s ease;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
	}

	@keyframes slideUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 2rem;
		line-height: 1;
		color: var(--faf-gray);
		cursor: pointer;
		padding: 0;
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.2s ease;
	}

	.modal-close:hover {
		color: var(--faf-orange);
	}

	h2 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
		font-size: 1.75rem;
	}

	.modal-subtitle {
		margin: 0 0 1.5rem 0;
		color: var(--faf-gray);
		font-size: 0.9rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: var(--faf-black);
		font-size: 0.9rem;
	}

	input,
	textarea,
	select {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--faf-gray-medium);
		border-radius: 8px;
		font-size: 1rem;
		transition: border-color 0.2s ease;
		font-family: inherit;
	}

	input:focus,
	textarea:focus,
	select:focus {
		outline: none;
		border-color: var(--faf-orange);
	}

	input:disabled,
	textarea:disabled,
	select:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	textarea {
		resize: vertical;
		min-height: 100px;
	}

	.expander {
		background: none;
		border: none;
		color: var(--faf-orange);
		cursor: pointer;
		padding: 0.5rem 0;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0 1rem 0;
		transition: opacity 0.2s ease;
	}

	.expander:hover {
		opacity: 0.8;
	}

	.expandable-fields {
		animation: expandDown 0.3s ease;
		overflow: hidden;
	}

	@keyframes expandDown {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 500px;
		}
	}

	.btn-submit {
		width: 100%;
		padding: 1rem;
		background: var(--faf-orange);
		color: var(--faf-white);
		border: none;
		border-radius: 8px;
		font-size: 1.125rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-top: 0.5rem;
	}

	.btn-submit:hover:not(:disabled) {
		background: #ff5a20;
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
	}

	.btn-submit:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}

	.error-message {
		background: #fee;
		color: #c33;
		padding: 0.75rem;
		border-radius: 8px;
		margin: 1rem 0;
		font-size: 0.9rem;
	}

	.success-message {
		text-align: center;
		padding: 2rem 0;
	}

	.success-icon {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: var(--faf-orange);
		color: white;
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		animation: scaleIn 0.4s ease;
	}

	@keyframes scaleIn {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	.success-message h3 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
	}

	.success-message p {
		margin: 0;
		color: var(--faf-gray);
	}

	@media (max-width: 600px) {
		.modal-content {
			padding: 1.5rem;
		}

		h2 {
			font-size: 1.5rem;
		}
	}
</style>
