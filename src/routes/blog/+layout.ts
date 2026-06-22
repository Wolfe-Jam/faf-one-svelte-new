// Rule 2: blog posts are light or dark BY DESIGN (a light blog, a dark blog) —
// they don't flip, so the theme spinner is pointless here. Hide it across the
// whole /blog section. (Home + app pages keep the spinner and flip — Rule 1.)
export const load = () => ({ hideThemeToggle: true });
