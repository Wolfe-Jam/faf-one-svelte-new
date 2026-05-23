# CLAUDE.md - FAF Website Development

## 🛑 NO BS ZONE 🛑
**This is a NO BS Zone. We are credible, we have amazing FACTS, we can use our own stats. The whole brand is built on TRUST!**

**No fake team numbers, no made-up testimonials, no inflated statistics. Just the real, hard-earned achievements that took thousands of hours to build.**

## Project Overview
- **Project**: faf.one website
- **Stack**: SvelteKit with Svelte 5 runes
- **Purpose**: The official format authority for .faf - Project DNA ✨ for ANY AI - AI Context, On-Demand.

## Real Achievements Only
- ☑️ MCP (Model Context Protocol) with 1,000+ weekly downloads
- ☑️ Chrome Extension approved by Google and LIVE in Chrome Web Store  
- ☑️ 10,000+ projects tested (verified)
- ☑️ 9.3/10 AI average rating (from actual testing)
- ☑️ 154+ formats validated
- ☑️ <50ms processing time achieved

## The Real Journey
- From .iff (Commodore Amiga) to .faf - 4 decades of format expertise
- Complex formats for color and simulation in the Carpet Industry
- Thousands of hours of expert development work
- Not a product sale - this is THE format authority

## Brand Guidelines
- **Colors**: FAF orange (#FF6B35), cream, black, white
- **Cyan sweetspot**: #00D4D4 (when #00ffff is too bright)
- **Approved emojis**: 🧡 ⚡️ 🏁 🏆 🏎️ 🍊 ⌚ ☑️ (use ☑️ not ✅ wherever possible)

## DAAFT Palette (2026 Look)
The DAAFT page introduces a fresh salmon-red-cyan palette:
```
Warm (Danger/Warning):
- Salmon:  #FF6B35 → #FF8555 → #FFA075 (gradient)
- Red:     #ff3333 (danger), #ff6666 (softer)
- Dark red bg: linear-gradient(135deg, #1a0a0a 0%, #2a1515 100%)

Cool (Solution/Trust):
- Cyan:    #00D4D4 (primary), #00ffff (hover)
- Green:   #27c93f (success, terminal)

Grays (Brightened for dark bg):
- #aaa (was #666) - primary gray text
- #bbb (was #888) - secondary gray text
- #999 (was #555) - tertiary gray text
- #888 (was #444) - arrows, subtle elements

Contrast principle: Warm danger → Cool solution
```
Use this palette for warning/solution flows throughout faf.one.
- **Format**: YAML and 🍜 noodles for AI, converts to markdown/TXT for humans
- **Brand Name**: Always `.faf` (lowercase) when referring to the format
- **Tagline**: "Project DNA ✨ for ANY AI - AI Context, On-Demand." with 🧡 (human) and 🩵 (AI) heart emojis
- **Tagline Style**: White, bold, underlined for maximum impact
- **Tagline Alignment**: Can be left-aligned or right-aligned, but NEVER centered

## Theming Rules — MANDATORY (wolfejam doctrine, 2026-05-22)

> **The 11 rules below are the load-bearing site contract.** They supersede any earlier theming guidance in this file. The `WolfejamGizmo` toggle is a promise to every visitor that they can read the site how they prefer — these rules keep that promise.

### The 11 Rules

1. **Contrast over color.** The site works in pure black/white alone. Color is decoration. If your edit reads correctly with all color stripped to grayscale, you're on doctrine.
2. **Text is always the opposite of its background.** High contrast, always. Dark text on light bg; light text on dark bg. Never anything in between.
   - **Buttons with a black background → white text. No exceptions** *by default*. Including inline text button-graphics (code pills, badges, chips, button-shaped inline UI). White text is the canonical "readable on black" — brand-color text belongs on light/colored bgs, not on black-bg buttons. (Brand-color BUTTON BG with black text is the right place for orange/cyan; the inverse — black bg with brand-color text on a button — is the violation.)
   - **Named exception(s)** — explicit, never catch-all:
     - **Install-command CTA pattern** (`.install`, `.install-alt`, and equivalents): the `uvx … / pipx install … / pip install …` command text may use orange (`#FF6B35`) on the near-black button bg. This is the recognizable terminal/command-pop aesthetic — the orange IS the brand pop on the page's primary action. Scope is narrow: only the install-command text inside install CTA buttons. Inline code pills elsewhere (e.g. `.card p code`, `.defer-note code`) still follow the default white-on-black rule. New exceptions must be NAMED here — vibes-based brand-pop arguments don't qualify.
3. **Color is only for: brand, buttons, title text, highlights.** Not body text. Not body backgrounds.
4. **Brand colors only: orange + cyan.**
   - Orange: `#FF6B35` = `var(--faf-orange)`. Works both themes unchanged.
   - Cyan on light pages: **dark cyan `#00D4D4` = `var(--faf-cyan-dark)` / `var(--faf-cyan-text)`** (better contrast than bright cyan on cream).
   - Cyan on dark pages: bright cyan `#00ffff` = `var(--faf-cyan)`.
5. **Gray is allowed for stacked surfaces only** — almost-black on black, black on almost-black (e.g., a card slightly lifted from body bg). Stacking is fine; mid-gray contrast is not.
6. **No mid-gray text. Ever.** `var(--faf-gray)` (`#666` / `#999`) is **RETIRED for text content.** Use the opposites:
   - Light theme text → very dark gray / black (`var(--faf-black)` for primary, `var(--faf-dark)` for secondary)
   - Dark theme text → very light gray / white (same tokens flip to the right shade automatically)
   - For hierarchy below primary, use **font weight or size**, NOT a mid-gray color.
7. **Readability over all.** When a rule conflicts with anything else, readability wins.
8. **No tiny fonts.** If you can't read it comfortably, the font is too small.
9. **Copy = 3–4 words, not long sentences.** Headlines, buttons, badges, CTAs — terse.
10. **No gradients. Flat colors only.** (Exception: the brand-locked layout banner metallic shimmer; do not introduce new ones.)
11. **No emojis.** Sparing + pre-approved set only (🏆 is the only one in the brand emoji ladder per `feedback-tier-symbols` memory). Drawn flat icons preferred. If you must, an emoji is a placeholder for an unbuilt icon — replace at next opportunity.

### Token usage (the only legal palette)

| Surface | Token | Light | Dark |
|---|---|---|---|
| Body bg | `var(--faf-cream)` | `#FEFCF8` (classy with the black) | `#0a0a0a` |
| Card surface (aliased) | `var(--faf-white)` | `#FEFCF8` | `#0a0a0a` |
| Primary text | `var(--faf-black)` | `#1a1a1a` | `#ffffff` |
| Secondary text | `var(--faf-dark)` | `#1a1a1a` | `#e5e5e5` |
| Border / subtle stack | `var(--faf-light-gray)` | `#e5e5e5` | `#222` |
| Brand orange | `var(--faf-orange)` | `#FF6B35` (both themes) | |
| Brand cyan (light) | `var(--faf-cyan-text)` / `var(--faf-cyan-dark)` | `#00D4D4` | |
| Brand cyan (dark) | `var(--faf-cyan)` | | `#00ffff` |

**RETIRED for text:** `var(--faf-gray)`. It still exists in `app.css` for legacy components; do NOT use it on new text.

### Architectural rules (still in force)

- **NEVER `:global(body) { ... !important }`** on pages — creates cascade tug-of-war during client-side navigation. Plain rule replaces cleanly on unmount. (The old "every blog post MUST include `!important` body bg" doctrine WAS the flash source — retired 2026-05-21.)
- **Theme-locked pages** (a page designed only-light or only-dark) → use a plain `:global(body) { background: <token>; color: <token>; }` without `!important`. ANY child block with a locked bg MUST also explicitly set its text color to a literal — never inherit theme-aware text into a locked-bg context (creates dark-on-dark / light-on-light when the inherited text flips with the theme but the bg doesn't).
- **Locked-dark layout elements (intentional, do NOT convert):** `+layout.svelte` announcement banner (`.official-banner`, `.banner-section`, metallic shimmer `#5a5a5a → #3c4e60 → #1a1a1a → …`) is deliberately dark in both themes — brand chrome over any page below it. 13 literal colors in the layout style block are intentional, not theming bugs. Do NOT "fix" them. Confirmed locked-dark by wolfejam 2026-05-22.

### Blog Post Rules — MANDATORY
1. Blog posts follow the 11 rules above (especially #2 contrast, #6 no mid-gray text, #10 no gradients).
2. Every blog post MUST have OG meta tags (`og:title`, `og:description`, `twitter:card`) in `<svelte:head>` for proper X card previews.
3. Every blog post MUST have an X share button (web intent format).

## Development Rules - TRUST IS EVERYTHING
1. NEVER add fake statistics or claims
2. NEVER inflate numbers or achievements  
3. NEVER change carefully crafted text without permission
4. Every claim must be verifiable and earned
5. Respect the thousands of hours of work that created this
6. **We have AMAZING REAL facts - use them!**
7. **Our credibility is our superpower**
8. **TRUST is the foundation of the entire .faf brand**

## Testing & Performance
- Target: <50ms per operation (achieved)
- Status: Championship grade performance
- All features must work properly before claiming they do

## 🔧 Dev Server Issues (Common Problems)

### Problem 1: Server Crashes (Exit Code 137)
**Symptom:** `localhost refused to connect` or dev server stops responding

**Fix:**
```bash
# Restart dev server
cd /Users/wolfejam/FAF/faf-one-svelte-new && npm run dev
```

**Background Command:**
If running in background, kill old process first, then restart with `run_in_background: true`

### Problem 2: JSON Code Blocks Cause Syntax Errors
**Symptom:** `[plugin:vite-plugin-svelte] Expected token }` when adding JSON examples

**Wrong:**
```svelte
<code>{
  "key": "value"
}</code>
```

**Correct:**
```svelte
<code>{`{
  "key": "value"
}`}</code>
```

**Rule:** Always wrap JSON code blocks with template literals `{``}` in Svelte files

### Problem 3: Hot Reload Fails
**Symptom:** Changes don't appear after saving files

**Fix:**
1. Hard refresh browser (Cmd+Shift+R on macOS)
2. If that fails, restart dev server
3. Clear Vite cache: `rm -rf node_modules/.vite`

### Dev Server Best Practices
- Run dev server in background for long sessions
- Watch for exit code 137 (out of memory)
- Always escape curly braces in code examples
- Test new blog posts in browser before committing

## 🏁 GOLDEN RULES - Professional Standards

### 🚨 NPM PUBLISH PROTOCOL - DOES NOT APPLY

**This is a SvelteKit website, NOT an npm package.**
- No npm publish workflow
- Changes deploy via git push
- Professional git commits still required (see below)

**For FAF package publishes** (faf-cli, claude-faf-mcp, faf-mcp):
- See `/Users/wolfejam/FAF-GOLD/PLANET-FAF/PUBLISH-PROTOCOL.md`
- Never publish without "GO!" or "GREEN LIGHT" from wolfejam

### Git Commit Protocol (REQUIRED)
**Every commit must follow this exact format:**
```
<type>: <what changed>

- <specific change 1>
- <specific change 2>
```

**Types:** `fix:` `feat:` `docs:` `refactor:` `chore:` `test:`

**Examples:**
- `fix: Update PR reference to #2759`
- `feat: Add discussions link to navigation`
- `docs: Correct download statistics`

**NEVER:**
- No exclamation marks
- No emotion or excitement
- No marketing language
- No "finally" or "at last"
- No false claims about approval

### NPM Publish Protocol (APPROVAL REQUIRED)
**Before ANY npm publish:**
1. Get explicit approval from wolfejam
2. Verify all claims are factual
3. Update version following semver
4. Test in isolation first
5. Use boring release notes

**Release note format:**
```
v1.2.3

- Fix: Corrected dependency issue
- Feat: Added new command option
- Docs: Updated installation guide
```

### The Professional Standard
- **Boring is good**
- **Facts only**
- **Trust is everything**
- **If Anthropic reads it, would they approve?**
- **When in doubt, make it more boring**

### Critical: Publishing & Committing
- **Git commits**: Follow protocol or don't commit
- **NPM publishes**: Require explicit approval
- **False claims**: Could kill PR #2759
- **Trust violations**: Unforgivable

Remember: We're playing at the level where Anthropic might actually merge our PR. Act like it.

---
*This is serious work, not marketing fluff. Treat it with respect.*
*Professional. Boring. Trusted.*