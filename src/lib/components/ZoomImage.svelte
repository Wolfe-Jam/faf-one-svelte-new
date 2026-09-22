<script lang="ts">
	/**
	 * Click-to-enlarge image. Native <dialog> + showModal() — no dependency,
	 * free focus trap, free Esc-to-close.
	 *
	 * Use for any blog image too dense to read at column width (maps, diagrams,
	 * dashboards). Retrofits onto an existing `.hero-image` block by swapping the
	 * <div> for this component with the same src/alt/width/height.
	 *
	 *   <ZoomImage src="/blog/x-hero.png" alt="…" width={1200} height={630} />
	 *
	 * Theming: the dialog is a deliberately locked-dark frame, so every element
	 * with a background sets its own colour literal (the paired-colour rule) —
	 * nothing inherits theme-aware text into a locked-bg context.
	 */
	let {
		src,
		alt,
		width = undefined,
		height = undefined,
		caption = '',
		hint = 'Click to enlarge'
	}: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
		caption?: string;
		hint?: string;
	} = $props();

	let dlg: HTMLDialogElement | undefined = $state();

	function open() {
		dlg?.showModal();
	}
	function close() {
		dlg?.close();
	}
	// The <img> sits inside the dialog, so a click landing on the dialog itself
	// is a click on the surrounding backdrop area — close.
	function onDialogClick(event: MouseEvent) {
		if (event.target === dlg) close();
	}
</script>

<figure class="zoom-figure">
	<button type="button" class="zoom-trigger" onclick={open} aria-label="Enlarge image: {alt}">
		<img {src} {alt} {width} {height} loading="eager" decoding="async" />
		<span class="zoom-hint">{hint}</span>
	</button>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<dialog bind:this={dlg} class="zoom-dialog" onclick={onDialogClick}>
	<img {src} {alt} class="zoom-full" />
	<button type="button" class="zoom-close" onclick={close}>Close</button>
</dialog>

<style>
	.zoom-figure {
		margin: 0 0 2.5rem;
	}

	.zoom-trigger {
		display: block;
		position: relative;
		width: 100%;
		padding: 0;
		border: 0;
		background: none;
		cursor: zoom-in;
		border-radius: 12px;
		overflow: hidden;
		line-height: 0;
	}
	.zoom-trigger img {
		width: 100%;
		height: auto;
		display: block;
	}
	.zoom-trigger:focus-visible {
		outline: 3px solid #00d4d4;
		outline-offset: 3px;
	}

	.zoom-hint {
		position: absolute;
		right: 0.6rem;
		bottom: 0.6rem;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		background: #1a1a1a;
		color: #fff;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		line-height: 1.6;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	figcaption {
		margin-top: 0.6rem;
		font-size: 0.85rem;
		color: #555;
		line-height: 1.5;
	}

	.zoom-dialog {
		/* app.css has a global `* { margin: 0 }`, which beats the UA's
		   `dialog:modal { margin: auto }` and pins the dialog top-left.
		   Restore it explicitly or the modal is not centred. */
		margin: auto;
		max-width: 96vw;
		max-height: 96vh;
		padding: 0;
		border: 0;
		border-radius: 12px;
		background: #1a1a1a;
		color: #fff;
		overflow: visible;
	}
	.zoom-dialog::backdrop {
		background: rgba(0, 0, 0, 0.88);
	}

	.zoom-full {
		display: block;
		max-width: 96vw;
		/* leaves room under the centred dialog for the close button at -3rem */
		max-height: 84vh;
		width: auto;
		height: auto;
		border-radius: 12px;
	}

	.zoom-close {
		position: absolute;
		right: 0.75rem;
		bottom: -3rem;
		padding: 0.5rem 1.1rem;
		border: 2px solid #fff;
		border-radius: 6px;
		background: #1a1a1a;
		color: #fff;
		font-size: 0.85rem;
		font-weight: 700;
		cursor: pointer;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	.zoom-close:hover {
		background: #fff;
		color: #1a1a1a;
	}
	.zoom-close:focus-visible {
		outline: 3px solid #00d4d4;
		outline-offset: 2px;
	}

	/* On short viewports the close button has no room below the image — sit it inside. */
	@media (max-height: 640px) {
		.zoom-close {
			bottom: 0.75rem;
		}
	}
</style>
