<script lang="ts">
	/**
	 * The FAF Trophy mark (100%). Replaces the 🏆 emoji wherever an image can go.
	 * Sized in em so it sits inline with text like an emoji. Canonical file:
	 * https://faf.one/trophy.svg (master: FAF-GOLD/logos/faf/trophy.svg).
	 */
	let { size = '1em', label = 'Trophy' }: { size?: string; label?: string } = $props();
</script>

<img class="faf-trophy" src="/trophy.svg" alt={label} width="16" height="16" style:width={size} style:height={size} />

<style>
	.faf-trophy {
		display: inline-block;
		vertical-align: -0.125em;
	}
</style>
