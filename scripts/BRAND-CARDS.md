# Brand cards — on-demand, real assets only

**Never invent logos.** Every OG / series card uses **approved Fam marks** only.

## Templates (now)

| Template | Look | Reference |
|----------|------|-----------|
| **`dark`** | Dark ground · left mark · pill · terminal · orange top bar | Provable Receipt / Verifiable Provenance |
| **`light`** | Light ground · centered mark(s) · clean type | [Memory Edition](https://faf.one/blog/memory-edition) |

More templates later. These two cover release + edition cards.

## Marks (locked)

| `--mark` | Asset | Role |
|----------|--------|------|
| `faf` / `dotfaf` | `Fam-Marks/dotfaf.png` | context |
| `fafm` / `nelly` | `Fam-Marks/nelly.png` | memory |
| `fafa` / `agent` | `Fam-Marks/fafa.png` | agent |
| `trophy` | `Fam-Marks/trophy.png` | 100% / seal |

Source: `~/FAF-GOLD/Fam-Marks/`  
If missing → **script fails** (no lookalike).

## Generate

### Dark (series release)

```bash
cd ~/FAF/faf-one-svelte-new

node scripts/gen-brand-card.mjs \
  --template dark \
  --mark faf \
  --title "Verifiable Provenance" \
  --subtitle "1.3 proved a packet travels intact; 1.4 proves which key sealed it." \
  --pill "claude-fafm-sdk v1.4.0" \
  --terminal "pip install 'claude-fafm-sdk[sign]'  ·  verify -k → signature OK" \
  --badge both \
  --out static/blog-assets/verifiable-provenance-hero.png
```

### Light — single mark

```bash
node scripts/gen-brand-card.mjs \
  --template light \
  --mark fafm \
  --title "Product line · Edition name" \
  --subtitle "One clear claim." \
  --out static/blog/example-light-hero.png
```

### Light — dual marks (Memory Edition)

```bash
node scripts/gen-brand-card.mjs \
  --template light \
  --pair faf,fafm \
  --title "faf-cli v7.2.0 · The Memory Edition" \
  --subtitle ".faf is context. .fafm is memory." \
  --out static/blog/memory-edition-hero.png
```

`--pair faf,fafm` places DotFaf (context) + Nelly (memory) with labels — same structure as the live Memory Edition card.

## After generate

1. Copy to `static/blog/` if needed  
2. Bump `?v=N` on OG/hero URLs  
3. Commit PNG + page  

## Rule of thumb

| Content | Template | Mark |
|---------|----------|------|
| SDK / release ladder | `dark` | `faf` or `fafm` |
| Memory edition / dual format | `light` + `--pair` | `faf,fafm` |
| Agent / FAFA | `dark` or `light` | `fafa` |
| Trophy / 100% | either | `trophy` |
