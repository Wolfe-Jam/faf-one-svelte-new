// The milestone banner now auto-hides site-wide by default (see +layout.svelte),
// so /spec needs no banner flag. It only hides the theme gizmo: this page is
// locked-dark, so a light/dark toggle is pointless and renders wrong in light mode.
export const load = () => ({ hideThemeToggle: true });
