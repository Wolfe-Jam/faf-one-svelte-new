# Archived components

Legacy homepage-era components, orphaned when the homepage was rewritten
(the current standalone landing in `src/routes/+page.svelte`). None are
imported by any route or component — verified 2026-06-12.

Kept here as design reference. To revive one, `git mv` it back to
`src/lib/components/` and import it.

Note: `Hero.svelte` depends on `TypewriterText.svelte` (also archived)
and `ScrollRevealText.svelte` + `FafLogo.svelte` (still live in
`src/lib/components/`).

Still live in `src/lib/components/` despite being currently unused:
`CheckoutButton.svelte`, `CustomerPortal.svelte` — Stripe commerce,
held for Pro checkout's return.
