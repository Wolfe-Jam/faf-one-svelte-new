// Pin the milestone banner on the homepage: the credibility strip (downloads,
// Anthropic-merged, IANA) should land on first impression, so the homepage opts
// out of the site-wide auto-hide (see +layout.svelte). Every other page keeps
// the auto-hide default.
export const load = () => ({ pinBanner: true });
