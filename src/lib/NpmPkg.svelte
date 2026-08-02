<script lang="ts">
	/**
	 * Renders `package@version` without Cloudflare Scrape Shield
	 * treating it as an email (rewrites to /cdn-cgi/l/email-protection).
	 * Split `@` into its own text node so the edge regex does not match.
	 */
	export let name: string;
	export let version: string;
</script>

{name}<span class="npm-at">@</span>{version}

<style>
	.npm-at {
		/* plain text; no special styling — copy-paste stays package@version */
	}
</style>
