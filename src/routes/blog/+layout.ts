// Rule 2: blog posts are light or dark BY DESIGN (a light blog, a dark blog) —
// they don't flip, so the theme spinner is pointless here. Hide it across the
// whole /blog section. (Home + app pages keep the spinner and flip — Rule 1.)
// bg:'self' — each blog paints its own body (101 light, 10 dark, by design); the
// central layout guard leaves their :global(body) alone instead of forcing flip.
//
// Light freeze (three layers — all required; missing any reopens white-on-cream):
// 1. app.html FOUC: data-theme=light before first paint on /blog/*
// 2. root +layout: onMount + $effect never re-apply saved dark on /blog/*
// 3. blog +layout: onMount + $effect freeze light + cream body inline
// Index styles use #1a1a1a literals (not --faf-dark/--faf-black) so a one-frame
// token flip cannot wash out list titles/versions. Dark posts still force
// locked-dark body via their own :global(body) !important.
export const load = () => ({ hideThemeToggle: true, bg: 'self' });
