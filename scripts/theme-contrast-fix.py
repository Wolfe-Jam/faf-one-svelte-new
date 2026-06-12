#!/usr/bin/env python3
"""Apply doctrine-mapped fixes for the 61 hard theme-contrast breaks.

Fix categories (per CLAUDE.md Theming Rules):
  PAIR    rule 2: black box flips with theme -> color: white => var(--faf-white)
  LOCKD   terminal/code blocks stay near-black both themes (named exception)
  LOCKT   locked light surface keeps literal dark text
  LOCKW   colored (teal/red) bg keeps literal white text
  LOCKB   white chip/button on colored section: lock bg white
  TAB     tabs: tokenize bg + retire mid-gray text (rule 6)

Each entry: (file, selector-substring, property, old-value, new-value).
Codemod fails loudly if any entry matches zero rule blocks.
"""
import re, os, sys

ROOT = os.path.join(os.path.dirname(__file__), '..', 'src')

FIXES = [
    # --- lib/components/AIAutomation.svelte (white chips/buttons on teal: lock) ---
    ('lib/components/AIAutomation.svelte', '.arrow-text', 'background', 'var(--faf-white)', 'white'),
    ('lib/components/AIAutomation.svelte', '.platform-tag', 'background', 'var(--faf-white)', 'white'),
    ('lib/components/AIAutomation.svelte', '.availability', 'color', 'var(--faf-white)', 'white'),
    ('lib/components/AIAutomation.svelte', '.availability-badge', 'background', 'var(--faf-white)', 'white'),
    ('lib/components/AIAutomation.svelte', '.btn-primary', 'background', 'var(--faf-white)', 'white'),
    # --- lib/components/EmailCapture.svelte (red status: lock white text) ---
    ('lib/components/EmailCapture.svelte', '.status.error', 'color', 'var(--faf-white)', 'white'),
    # --- lib/components/Hero.svelte ---
    ('lib/components/Hero.svelte', '.badge-item', 'background', 'white', 'var(--faf-white)'),
    ('lib/components/Hero.svelte', '.badge-item', 'color', 'var(--faf-gray-dark)', 'var(--faf-dark)'),
    ('lib/components/Hero.svelte', '.official-badge', 'color', 'white', 'var(--faf-white)'),
    # --- lib/components/N8nPainPoints.svelte ---
    ('lib/components/N8nPainPoints.svelte', '.reality-with .reality-header', 'color', 'var(--faf-white)', 'white'),
    ('lib/components/N8nPainPoints.svelte', '.code-badge', 'color', 'var(--faf-white)', 'white'),
    ('lib/components/N8nPainPoints.svelte', '.cta-section', 'color', 'var(--faf-white)', 'white'),
    ('lib/components/N8nPainPoints.svelte', '.btn-incident', 'color', 'var(--faf-white)', 'white'),
    ('lib/components/N8nPainPoints.svelte', '.btn-incident:hover', 'background', 'var(--faf-white)', 'white'),
    ('lib/components/N8nPainPoints.svelte', '.btn-primary', 'background', 'var(--faf-white)', 'white'),
    # --- lib/components/SideNav.svelte (pair-flip) ---
    ('lib/components/SideNav.svelte', '.side-nav', 'color', 'white', 'var(--faf-white)'),
    # --- routes/6ws (tab: tokenize + retire mid-gray) ---
    ('routes/6ws/+page.svelte', '.tab', 'background', '#e5e5e5', 'var(--faf-light-gray)'),
    ('routes/6ws/+page.svelte', '.tab', 'color', 'var(--faf-gray)', 'var(--faf-dark)'),
    # --- calculators: black-pill locked demonstrative; sections pair-flip ---
    ('routes/automation-calculator/+page.svelte', '.black-pill', 'background', 'var(--faf-black)', '#1a1a1a'),
    ('routes/automation-calculator/+page.svelte', '.roi-section', 'color', 'white', 'var(--faf-white)'),
    ('routes/incident-calculator/+page.svelte', '.black-pill', 'background', 'var(--faf-black)', '#1a1a1a'),
    ('routes/incident-calculator/+page.svelte', '.annual-impact', 'color', 'white', 'var(--faf-white)'),
    ('routes/calculator/+page.svelte', '.cta-section', 'color', 'white', 'var(--faf-white)'),
    # --- blog 42-42 ---
    ('routes/blog/42-42/+page.svelte', '.timeline-header', 'color', 'white', 'var(--faf-white)'),
    # --- blog drafts: terminal blocks lock near-black + brighter cyan ---
    ('routes/blog/drafts/context-rot-is-real/+page.svelte', '.code-block', 'background', 'var(--faf-dark)', '#1a1a1a'),
    ('routes/blog/drafts/context-rot-is-real/+page.svelte', '.code-block', 'color', '#009999', '#00d4d4'),
    ('routes/blog/drafts/stop-explaining-start-jamming/+page.svelte', '.code-example', 'background', 'var(--faf-dark)', '#1a1a1a'),
    ('routes/blog/drafts/stop-explaining-start-jamming/+page.svelte', '.code-example', 'color', '#009999', '#00d4d4'),
    ('routes/blog/drafts/stop-explaining-start-jamming/+page.svelte', '.code-block', 'background', 'var(--faf-dark)', '#1a1a1a'),
    ('routes/blog/drafts/stop-explaining-start-jamming/+page.svelte', '.code-block', 'color', '#009999', '#00d4d4'),
    # --- blog posts: category chips / quote boxes pair-flip ---
    ('routes/blog/iana-registration/+page.svelte', '.category', 'color', 'white', 'var(--faf-white)'),
    ('routes/blog/iana-registration/+page.svelte', '.creator-statement', 'color', 'white', 'var(--faf-white)'),
    ('routes/blog/iana-registration/+page.svelte', '.creator-philosophy', 'color', 'white', 'var(--faf-white)'),
    ('routes/blog/mcp-v3-standalone/+page.svelte', '.category', 'color', 'white', 'var(--faf-white)'),
    ('routes/blog/mcp-v3-standalone/+page.svelte', 'thead', 'color', 'white', 'var(--faf-white)'),
    ('routes/blog/python-sdk-launch/+page.svelte', '.category', 'color', 'white', 'var(--faf-white)'),
    ('routes/blog/python-sdk-launch/+page.svelte', '.achievement-quote', 'color', 'white', 'var(--faf-white)'),
    # --- drift ---
    ('routes/drift/+page.svelte', '.btn-secondary:hover', 'color', 'var(--faf-black)', '#1a1a1a'),
    ('routes/drift/+page.svelte', '.comparison-delta', 'color', 'white', 'var(--faf-white)'),
    ('routes/drift/+page.svelte', '.calculator-results', 'color', 'var(--faf-black)', '#1a1a1a'),
    # --- ecosystem: locked light link + terminal blocks ---
    ('routes/ecosystem/+page.svelte', '.link-secondary', 'color', 'var(--faf-black)', '#1a1a1a'),
    ('routes/ecosystem/+page.svelte', '.install-box', 'background', 'var(--faf-black)', '#1a1a1a'),
    ('routes/ecosystem/+page.svelte', '.code-block', 'background', 'var(--faf-black)', '#1a1a1a'),
    # --- founders ---
    ('routes/founders/+page.svelte', '.community-card.full-width', 'color', 'white', 'var(--faf-white)'),
    ('routes/founders/+page.svelte', '.founders-stats', 'color', 'white', 'var(--faf-white)'),
    # --- mcp ---
    ('routes/mcp/+page.svelte', '.breakdown-header', 'color', 'white', 'var(--faf-white)'),
    ('routes/mcp/+page.svelte', '.tab ', 'background', 'white', 'var(--faf-white)'),
    ('routes/mcp/+page.svelte', '.tab ', 'color', 'var(--faf-gray-dark)', 'var(--faf-dark)'),
    ('routes/mcp/+page.svelte', '.pattern-examples code', 'background', 'var(--faf-black)', '#1a1a1a'),
    ('routes/mcp/+page.svelte', '.btn-secondary:hover', 'color', 'white', 'var(--faf-white)'),
    # --- press / press-center ---
    ('routes/press/+page.svelte', '.press-hero', 'color', 'white', 'var(--faf-white)'),
    ('routes/press/+page.svelte', '.press-quotes', 'color', 'white', 'var(--faf-white)'),
    ('routes/press/+page.svelte', '.social-link', 'color', 'white', 'var(--faf-white)'),
    ('routes/press-center/+page.svelte', '.quick-link', 'color', 'var(--faf-black)', '#1a1a1a'),
    # --- risk-assessment: pills locked, active states pair-flip ---
    ('routes/risk-assessment/+page.svelte', '.black-pill', 'background', 'var(--faf-black)', '#1a1a1a'),
    ('routes/risk-assessment/+page.svelte', '.white-pill', 'color', 'var(--faf-black)', '#1a1a1a'),
    ('routes/risk-assessment/+page.svelte', '.toggle-btn.active', 'color', 'white', 'var(--faf-white)'),
    ('routes/risk-assessment/+page.svelte', '.scale-item.active', 'color', 'white', 'var(--faf-white)'),
    ('routes/risk-assessment/+page.svelte', '.buffer-explanation', 'color', 'white', 'var(--faf-white)'),
    ('routes/risk-assessment/+page.svelte', '.impact-summary', 'color', 'white', 'var(--faf-white)'),
    # --- sponsors: metallic badges are locked light surfaces ---
    ('routes/sponsors/+page.svelte', '.tier-badge.silver', 'color', 'var(--faf-black)', '#1a1a1a'),
    ('routes/sponsors/+page.svelte', '.tier-badge.gold', 'color', 'var(--faf-black)', '#1a1a1a'),
    ('routes/sponsors/+page.svelte', '.tier-badge.platinum', 'color', 'var(--faf-black)', '#1a1a1a'),
    # --- sync / uniqueness ---
    ('routes/sync/+page.svelte', '.cta-section', 'color', 'white', 'var(--faf-white)'),
    ('routes/uniqueness/+page.svelte', '.comparison-table thead', 'color', 'white', 'var(--faf-white)'),
    ('routes/uniqueness/+page.svelte', '.matrix-table thead', 'color', 'white', 'var(--faf-white)'),
    ('routes/uniqueness/+page.svelte', '.final-statement', 'color', 'white', 'var(--faf-white)'),
]

def apply_fix(src, selector_key, prop, old, new):
    """Replace prop:old with prop:new inside rule blocks whose selector
    contains selector_key. Returns (new_src, count)."""
    count = 0
    out = []
    pos = 0
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', src):
        selector = ' '.join(m.group(1).split())
        decls = m.group(2)
        if selector_key.strip() in selector:
            # tolerate whitespace inside the value
            pat = re.compile(
                r'(\b' + ('background(?:-color)?' if prop == 'background' else 'color')
                + r'\s*:\s*)' + re.escape(old) + r'(\s*[;}])', re.I)
            new_decls, n = pat.subn(r'\g<1>' + new + r'\g<2>', decls)
            if n:
                out.append(src[pos:m.start(2)])
                out.append(new_decls)
                pos = m.end(2)
                count += n
    out.append(src[pos:])
    return ''.join(out), count

def main():
    failures = []
    by_file = {}
    for entry in FIXES:
        by_file.setdefault(entry[0], []).append(entry[1:])
    total = 0
    for rel, fixes in by_file.items():
        path = os.path.join(ROOT, rel)
        src = open(path, encoding='utf-8').read()
        for selector_key, prop, old, new in fixes:
            src, n = apply_fix(src, selector_key, prop, old, new)
            if n == 0:
                failures.append(f"{rel} | {selector_key} | {prop}: {old} -> {new}")
            total += n
        open(path, 'w', encoding='utf-8').write(src)
    print(f"Applied {total} replacements across {len(by_file)} files")
    if failures:
        print(f"\nFAILED to match {len(failures)} entries:")
        for f in failures: print("  " + f)
        sys.exit(1)

main()
