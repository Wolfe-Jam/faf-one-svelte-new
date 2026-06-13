#!/usr/bin/env python3
"""Theme contrast audit — finds CSS rules that break in one theme.

A rule breaks when it mixes theme-aware tokens with literals on
background/color, so one side flips with the theme and the other doesn't:

  bg THEME-AWARE + color LITERAL-DARK   -> dark-on-dark in dark mode
  bg THEME-AWARE + color LITERAL-LIGHT  -> light-on-light in light mode
  bg LITERAL-DARK + color THEME-AWARE   -> dark-on-dark in light mode
  bg LITERAL-LIGHT + color THEME-AWARE  -> white-on-light in dark mode

Also flags color-only rules whose literal color matches the body bg of
one theme (body bg is theme-aware cream/near-black).
"""
import re, sys, os, json

ROOT = os.path.join(os.path.dirname(__file__), '..', 'src')

# Tokens that flip between themes (from app.css :root vs [data-theme=dark])
THEME_TOKENS = {
    '--faf-cream', '--faf-dark', '--faf-black', '--faf-white',
    '--faf-gray', '--faf-gray-dark', '--faf-gray-medium',
    '--faf-gray-light', '--faf-light-gray', '--faf-cyan-text',
}
# Brand tokens that do NOT flip (same both themes)
STATIC_TOKENS = {
    '--faf-orange', '--faf-orange-dark', '--faf-cyan', '--faf-cyan-dark',
    '--faf-green', '--faf-green-hover',
}

DARK_LITERALS = re.compile(
    r'^(#(0[0-9a-f]|1[0-9a-f]|2[0-9a-f]|3[0-3])[0-9a-f]{4}|#(000|111|222|333)|black|#0a0a0a|#1a1a1a|#121212|#16213e|#1a1a2e|#2c2c2c)$', re.I)
LIGHT_LITERALS = re.compile(
    r'^(#f[0-9a-f]{2}[0-9a-f]{3}|#(fff|eee|fefcf8)|#e[0-9a-f]{5}|white|#fff(fff)?|#fafafa|#f5f5f5|#fdfdfd)$', re.I)

def classify(value):
    """Classify a CSS color value."""
    v = value.strip().lower().rstrip(';').strip()
    # strip !important
    v = v.replace('!important', '').strip()
    m = re.match(r'var\((--[a-z0-9-]+)', v)
    if m:
        tok = m.group(1)
        if tok in THEME_TOKENS: return 'THEME'
        if tok in STATIC_TOKENS: return 'BRAND'
        return 'VAR_OTHER'
    if 'gradient' in v or 'url(' in v: return 'COMPLEX'
    if 'transparent' in v or v == 'none' or v == 'inherit' or v == 'currentcolor': return 'NEUTRAL'
    if re.match(r'rgba?\(', v):
        nums = re.findall(r'[\d.]+', v)
        if len(nums) >= 3:
            r, g, b = float(nums[0]), float(nums[1]), float(nums[2])
            alpha = float(nums[3]) if len(nums) > 3 else 1.0
            if alpha < 0.5: return 'NEUTRAL'
            lum = 0.299*r + 0.587*g + 0.114*b
            return 'LIT_DARK' if lum < 100 else ('LIT_LIGHT' if lum > 180 else 'LIT_MID')
    if DARK_LITERALS.match(v): return 'LIT_DARK'
    if LIGHT_LITERALS.match(v): return 'LIT_LIGHT'
    if v.startswith('#'):
        h = v.lstrip('#')
        if len(h) == 3: h = ''.join(c*2 for c in h)
        if len(h) >= 6:
            try:
                r, g, b = int(h[0:2],16), int(h[2:4],16), int(h[4:6],16)
                lum = 0.299*r + 0.587*g + 0.114*b
                return 'LIT_DARK' if lum < 100 else ('LIT_LIGHT' if lum > 180 else 'LIT_MID')
            except ValueError: return 'OTHER'
    return 'OTHER'

def parse_rules(css, fname):
    """Very light CSS rule parser: selector { decls }"""
    issues = []
    # strip comments
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    # iterate rule blocks (non-nested; svelte style blocks are flat except media queries)
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', css):
        selector = ' '.join(m.group(1).split())
        decls = m.group(2)
        line = css[:m.start()].count('\n') + 1
        bg = color = None
        for d in decls.split(';'):
            if ':' not in d: continue
            prop, _, val = d.partition(':')
            prop = prop.strip().lower()
            if prop in ('background', 'background-color'): bg = val.strip()
            elif prop == 'color': color = val.strip()
        if not bg and not color: continue
        bgc = classify(bg) if bg else None
        cc = classify(color) if color else None
        verdict = None
        if bgc == 'THEME' and cc == 'LIT_DARK':
            verdict = 'BREAKS-DARK (theme bg + dark literal text)'
        elif bgc == 'THEME' and cc == 'LIT_LIGHT':
            verdict = 'BREAKS-LIGHT (theme bg + light literal text)'
        elif bgc == 'LIT_DARK' and cc == 'THEME':
            verdict = 'BREAKS-LIGHT (dark literal bg + theme text)'
        elif bgc == 'LIT_LIGHT' and cc == 'THEME':
            verdict = 'BREAKS-DARK (light literal bg + theme text)'
        elif bgc is None and cc == 'LIT_DARK':
            verdict = 'SUSPECT-DARK (dark literal text, bg inherited)'
        elif bgc is None and cc == 'LIT_LIGHT':
            verdict = 'SUSPECT-LIGHT (light literal text, bg inherited)'
        elif cc == 'LIT_MID':
            verdict = 'MID-GRAY text (retired by doctrine)'
        if verdict:
            issues.append({'file': fname, 'line': line, 'selector': selector[:60],
                           'bg': bg, 'color': color, 'verdict': verdict})
    return issues

def main():
    ci = '--ci' in sys.argv
    all_issues = []
    for dirpath, _, files in os.walk(ROOT):
        for f in files:
            if not f.endswith('.svelte'): continue
            path = os.path.join(dirpath, f)
            rel = os.path.relpath(path, ROOT)
            src = open(path, encoding='utf-8').read()
            for sm in re.finditer(r'<style[^>]*>(.*?)</style>', src, re.S):
                all_issues += parse_rules(sm.group(1), rel)
    # summary by file
    by_file = {}
    for i in all_issues:
        by_file.setdefault(i['file'], []).append(i)
    hard = [i for i in all_issues if i['verdict'].startswith('BREAKS')]
    print(f"TOTAL issues: {len(all_issues)}  HARD breaks: {len(hard)}  files: {len(by_file)}")
    if hard or not ci:
        print()
        for f in sorted(by_file, key=lambda f: -len([i for i in by_file[f] if i['verdict'].startswith('BREAKS')])):
            fi = by_file[f]
            h = len([i for i in fi if i['verdict'].startswith('BREAKS')])
            if ci and not h: continue
            print(f"== {f}  ({h} hard / {len(fi)} total)")
            for i in fi:
                if i['verdict'].startswith('BREAKS'):
                    print(f"   L{i['line']:4} {i['selector'][:50]:50} bg={str(i['bg'])[:30]:30} color={str(i['color'])[:25]:25} {i['verdict']}")
    if '--json' in sys.argv:
        json.dump(all_issues, open('/tmp/theme-audit.json', 'w'), indent=1)
        print("\nJSON: /tmp/theme-audit.json")
    if ci and hard:
        print(f"\nFAIL: {len(hard)} hard theme-contrast breaks — fix before deploy "
              "(see CLAUDE.md Theming Rules)")
        sys.exit(1)
    if ci:
        print("PASS: zero hard theme-contrast breaks")

main()
