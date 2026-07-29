# Brand cards — on-demand, real assets only

**Never invent logos.** Every OG / series card uses **approved Fam marks** + locked chrome.

## Templates

| Template | Look | Reference |
|----------|------|-----------|
| **`dark`** | Dark ground · left Fam mark · pill · terminal · chrome badges/star/footer | Provable Receipt / Verifiable Provenance |
| **`light`** | Light ground · centered mark(s) · clean type | [Memory Edition](https://faf.one/blog/memory-edition) |

## Marks (Fam-Marks)

| `--mark` | Asset | Role |
|----------|--------|------|
| `faf` / `dotfaf` | `dotfaf.png` | context |
| `fafm` / `nelly` | `nelly.png` | memory |
| `fafa` / `agent` | `fafa.png` | agent |
| `trophy` | `trophy.png` | 100% / seal |

Source: `~/FAF-GOLD/Fam-Marks/` (override `FAF_MARKS_DIR`). Missing file → **fail**.

## Dark chrome (locked crops)

From the proven **Provable Receipt** card — **never regenerate these faces**:

| File | What |
|------|------|
| `scripts/brand-card-chrome/dark-badges-nelly-python.png` | Full Nelly + full Python |
| `scripts/brand-card-chrome/dark-star.png` | Full star seal |
| `scripts/brand-card-chrome/dark-footer.png` | `.faf faf.one` wordmark |

Layout constants live in `gen-brand-card.mjs` as `DARK` (textLeft, mark size/position, badge/star coords).

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

Copy to `static/blog/` if needed. Bump `?v=N` on OG/hero URLs.

### Light dual (Memory Edition)

```bash
node scripts/gen-brand-card.mjs \
  --template light \
  --pair faf,fafm \
  --title "faf-cli v7.2.0 · The Memory Edition" \
  --subtitle ".faf is context. .fafm is memory." \
  --out static/blog/memory-edition-hero.png
```

## After generate

1. Bump `?v=N`  
2. Commit PNG + page  
3. Push / deploy  

## Dark seals

| `--seal` | Asset | Use |
|----------|--------|-----|
| `star` (default) | `dark-star.png` | series chrome (filled star in circle) |
| `proof` | rendered **✪** | Proof Seal / work-surface 100% |
| `none` | — | no BR seal |

**Never** place an X / close glyph as a seal. **Never** default PyPI elephant unless the release is explicitly Py-registry marketing (`--badge both`).

### Forgettable Memory (1.5.1)

Series card: full Py chrome (elephant + Python) + Proof Seal ✪ — never X, never half-badge.

```bash
node scripts/gen-brand-card.mjs \
  --template dark \
  --mark faf \
  --title "Forgettable Memory" \
  --subtitle "A delete is state. Tombstones travel. Forget converges." \
  --pill "claude-fafm-sdk v1.5.1" \
  --terminal "forget  ·  tombstone wins  ·  both transports" \
  --badge both \
  --seal proof \
  --out static/blog/forgettable-memory-hero.png
cp static/blog/forgettable-memory-hero.png static/blog-assets/forgettable-memory-hero.png
# bump ?v=N on the page
```

## Lesson (1.4)

Do **not** redraw smileys or invent Py badges.  
Dark = **Fam mark** + **locked chrome**. Text is the only thing you rewrite.  
No PyPI chrome unless intentional. Seal is star or **✪** — never X.
