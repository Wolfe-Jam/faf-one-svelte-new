// Rule 2: blog posts are light or dark BY DESIGN (a light blog, a dark blog) —
// they don't flip, so the theme spinner is pointless here. Hide it across the
// whole /blog section. (Home + app pages keep the spinner and flip — Rule 1.)
// bg:'self' — each blog paints its own body (101 light, 10 dark, by design); the
// central layout guard leaves their :global(body) alone instead of forcing flip.
export const load = () => ({ hideThemeToggle: true, bg: 'self' });
