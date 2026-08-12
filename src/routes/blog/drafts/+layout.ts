// Overrides the /blog layout's prerender=true. Drafts are unlisted and
// unfinished — they must never be baked into the static build output where
// they'd become discoverable, deployed files. Keep them SSR-only, exactly
// as they behave today (reachable by direct URL, not statically generated).
export const prerender = false;
