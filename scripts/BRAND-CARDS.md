# Brand cards — on-demand, real assets only

**Never invent logos.** Every OG / series card uses **approved Fam marks** only.

## Marks (locked)

| `--mark` | Asset | Role | Format |
|----------|--------|------|--------|
| `faf` / `dotfaf` | `FAF-GOLD/Fam-Marks/dotfaf.png` | context · knows | `.faf` |
| `fafm` / `nelly` | `FAF-GOLD/Fam-Marks/nelly.png` | memory · remembers | `.fafm` |
| `fafa` / `agent` | `FAF-GOLD/Fam-Marks/fafa.png` | agent · acts | `.fafa` |
| `trophy` | `FAF-GOLD/Fam-Marks/trophy.png` | 100% / social seal | Trophy / ✪ |

Source of truth: `~/FAF-GOLD/Fam-Marks/README.md`  
Doctrine: `PLANET-FAF/memory/fafa-agent-mark-doctrine.md`

If a file is missing, **`gen-brand-card.mjs` fails** — it will not draw a lookalike smiley.

## Generate

```bash
cd ~/FAF/faf-one-svelte-new

node scripts/gen-brand-card.mjs \
  --mark faf \
  --title "Verifiable Provenance" \
  --subtitle "1.3 proved a packet travels intact; 1.4 proves which key sealed it." \
  --pill "claude-fafm-sdk v1.4.0" \
  --terminal "pip install 'claude-fafm-sdk[sign]'  ·  verify -k → signature OK" \
  --badge both \
  --out static/blog-assets/verifiable-provenance-hero.png
```

**Memory posts** → prefer `--mark fafm` (Nelly).  
**Context / CLI / format** → `--mark faf` (DotFaf).  
**Agent / FAFA** → `--mark fafa`.  
**100% / celebration** → `--mark trophy` (or DotFaf hero + trophy badge later).

## After generate

1. Copy to `static/blog/` if the post uses `/blog/...-hero.png`
2. Bump `?v=N` on `og:image` / hero `src` in the post `+page.svelte`
3. Commit PNG + page together

## What went wrong (1.4 lesson)

`verifiable-provenance` shipped a **redrawn** smiley. Series card 4 drifted from Fam-Marks. Fix: recompose with real `dotfaf.png` + this generator so it never happens again.

Archive of the bad asset: `static/blog-assets/verifiable-provenance-hero.FAKE-SMILEY-ARCHIVE.png`
