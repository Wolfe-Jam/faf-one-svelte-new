// Rule 2: this page is dark BY DESIGN — a light/dark toggle is pointless and
// renders wrong in light mode, so hide the theme spinner. (See /spec.)
export const load = () => ({ hideThemeToggle: true });
