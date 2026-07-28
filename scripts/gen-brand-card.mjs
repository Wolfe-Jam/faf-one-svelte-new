#!/usr/bin/env node
/**
 * gen-brand-card.mjs — on-demand FAF series OG cards (1200×630)
 *
 * RULE: ONLY approved Fam marks. Never invent / redraw / AI-generate logos.
 *
 *   DotFaf  → context (.faf)     --mark faf
 *   Nelly   → memory  (.fafm)   --mark fafm
 *   FAFA    → agent   (.fafa)   --mark fafa
 *   Trophy  → 100% / social     --mark trophy
 *
 * Source of truth: ~/FAF-GOLD/Fam-Marks/ (override with FAF_MARKS_DIR)
 *
 * Usage:
 *   node scripts/gen-brand-card.mjs \
 *     --mark faf \
 *     --title "Verifiable Provenance" \
 *     --subtitle "1.3 proved a packet travels intact; 1.4 proves which key sealed it." \
 *     --pill "claude-fafm-sdk v1.4.0" \
 *     --terminal "pip install 'claude-fafm-sdk[sign]'  ·  verify -k → signature OK" \
 *     --out static/blog-assets/verifiable-provenance-hero.png
 *
 * Options:
 *   --mark faf|fafm|fafa|trophy   required (or alias: dotfaf|nelly|agent)
 *   --title "..."                 required
 *   --subtitle "..."              optional
 *   --pill "..."                  optional version/status pill
 *   --terminal "..."              optional green terminal strip
 *   --badge python|nelly|both|none   corner badges (default: none)
 *   --footer ".faf  faf.one"      optional bottom-left (default: .faf  faf.one)
 *   --out path.png                required
 *   --dry-run                     print resolved mark path + config, no write
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const W = 1200;
const H = 630;
const CYAN = '#00D4D4';
const ORANGE = '#FF6B35';
const BG = '#1a1a1a';
const TERMINAL_BG = '#111111';
const WHITE = '#ffffff';
const GREEN = '#3ddc84';

/** Approved marks only — file names under Fam-Marks */
const MARKS = {
	faf: { file: 'dotfaf.png', label: 'DotFaf', role: 'context' },
	dotfaf: { file: 'dotfaf.png', label: 'DotFaf', role: 'context' },
	fafm: { file: 'nelly.png', label: 'Nelly', role: 'memory' },
	nelly: { file: 'nelly.png', label: 'Nelly', role: 'memory' },
	fafa: { file: 'fafa.png', label: 'FAFA', role: 'agent' },
	agent: { file: 'fafa.png', label: 'FAFA', role: 'agent' },
	trophy: { file: 'trophy.png', label: 'Trophy', role: '100%' }
};

function marksDir() {
	if (process.env.FAF_MARKS_DIR) return path.resolve(process.env.FAF_MARKS_DIR);
	const home = os.homedir();
	const candidates = [
		path.join(home, 'FAF-GOLD/Fam-Marks'),
		path.join(home, 'FAF-GOLD/marks'),
		path.join(ROOT, 'static/images')
	];
	for (const c of candidates) {
		if (fs.existsSync(path.join(c, 'dotfaf.png')) || fs.existsSync(path.join(c, 'dotfaf-1024.png'))) {
			return c;
		}
	}
	return candidates[0];
}

function resolveMarkFile(key) {
	const spec = MARKS[key];
	if (!spec) {
		throw new Error(
			`Unknown --mark "${key}". Allowed: faf | fafm | fafa | trophy (aliases: dotfaf, nelly, agent).\n` +
				`No invented logos. Use approved Fam-Marks only.`
		);
	}
	const dir = marksDir();
	const tryNames = [spec.file, spec.file.replace('.png', '-1024.png'), spec.file.replace('.png', '-from-svg.png')];
	// trophy also lives as trophy-mark.png in marks/
	if (key === 'trophy') {
		tryNames.push('trophy-mark.png', 'trophy-mark-1024.png', 'trophy-1024.png');
	}
	for (const name of tryNames) {
		const p = path.join(dir, name);
		if (fs.existsSync(p)) return { path: p, ...spec };
		// secondary dir for trophy
		const p2 = path.join(os.homedir(), 'FAF-GOLD/marks', name);
		if (fs.existsSync(p2)) return { path: p2, ...spec };
	}
	throw new Error(
		`Approved mark file missing for ${spec.label}.\n` +
			`Looked in ${dir} for: ${tryNames.join(', ')}\n` +
			`Set FAF_MARKS_DIR or restore Fam-Marks. NEVER substitute a generated face.`
	);
}

function parseArgs(argv) {
	const out = {
		mark: null,
		title: null,
		subtitle: '',
		pill: '',
		terminal: '',
		badge: 'none',
		footer: '.faf  faf.one',
		out: null,
		dryRun: false
	};
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		const next = () => argv[++i];
		switch (a) {
			case '--mark':
				out.mark = next()?.toLowerCase();
				break;
			case '--title':
				out.title = next();
				break;
			case '--subtitle':
				out.subtitle = next() || '';
				break;
			case '--pill':
				out.pill = next() || '';
				break;
			case '--terminal':
				out.terminal = next() || '';
				break;
			case '--badge':
				out.badge = (next() || 'none').toLowerCase();
				break;
			case '--footer':
				out.footer = next() || '';
				break;
			case '--out':
				out.out = next();
				break;
			case '--dry-run':
				out.dryRun = true;
				break;
			case '-h':
			case '--help':
				out.help = true;
				break;
			default:
				if (a.startsWith('-')) throw new Error(`Unknown flag: ${a}`);
		}
	}
	return out;
}

function escapeXml(s) {
	return String(s)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/** Word-wrap for SVG tspan lines */
function wrapText(text, maxChars) {
	const words = String(text).split(/\s+/).filter(Boolean);
	const lines = [];
	let cur = '';
	for (const w of words) {
		const trial = cur ? `${cur} ${w}` : w;
		if (trial.length > maxChars && cur) {
			lines.push(cur);
			cur = w;
		} else {
			cur = trial;
		}
	}
	if (cur) lines.push(cur);
	return lines.slice(0, 4); // hard cap
}

function buildSvg({ title, subtitle, pill, terminal, footer, markSize, markX, markY }) {
	const titleLines = wrapText(title, 28);
	const subLines = wrapText(subtitle, 48);
	const termLines = terminal ? wrapText(terminal, 52) : [];

	const textLeft = markX + markSize + 36;
	// Pill sits above title; leave room so large display type does not collide
	const pillTop = 130;
	const pillH = 36;
	let y = pill ? pillTop + pillH + 52 : 210;

	const titleTs = titleLines
		.map((line, i) => {
			const ty = y + i * 58;
			return `<tspan x="${textLeft}" y="${ty}">${escapeXml(line)}</tspan>`;
		})
		.join('');
	y += titleLines.length * 58 + 16;

	const subTs = subLines
		.map((line, i) => {
			const ty = y + i * 34;
			return `<tspan x="${textLeft}" y="${ty}">${escapeXml(line)}</tspan>`;
		})
		.join('');
	y += Math.max(subLines.length, 1) * 34 + 28;

	const termBlockH = termLines.length ? 28 + termLines.length * 28 + 20 : 0;
	const termY = Math.min(Math.max(y, 400), H - 80 - termBlockH);
	const termW = W - textLeft - 48;

	const pillW = pill ? Math.min(20 + pill.length * 10.5, 440) : 0;
	const pillSvg = pill
		? `<rect x="${textLeft}" y="${pillTop}" rx="8" ry="8" width="${pillW}" height="${pillH}" fill="${ORANGE}"/>
       <text x="${textLeft + 14}" y="${pillTop + 24}" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="16" font-weight="700" fill="${WHITE}">${escapeXml(pill)}</text>`
		: '';

	const termSvg = termLines.length
		? `<rect x="${textLeft}" y="${termY}" rx="12" ry="12" width="${termW}" height="${termBlockH}" fill="${TERMINAL_BG}"/>
       <circle cx="${textLeft + 22}" cy="${termY + 22}" r="5" fill="#ff5f57"/>
       <circle cx="${textLeft + 42}" cy="${termY + 22}" r="5" fill="#febc2e"/>
       <circle cx="${textLeft + 62}" cy="${termY + 22}" r="5" fill="#28c840"/>
       <text font-family="SF Mono, Menlo, Monaco, Consolas, monospace" font-size="18" fill="${GREEN}">
         ${termLines
						.map((line, i) => `<tspan x="${textLeft + 24}" y="${termY + 52 + i * 28}">${escapeXml(line)}</tspan>`)
						.join('')}
       </text>`
		: '';

	return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="8" fill="${ORANGE}"/>
  ${pillSvg}
  <text font-family="SF Pro Display, -apple-system, Helvetica Neue, Arial Black, sans-serif" font-size="52" font-weight="800" fill="${WHITE}">
    ${titleTs}
  </text>
  <text font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="24" font-weight="500" fill="${CYAN}">
    ${subTs}
  </text>
  ${termSvg}
  <text x="36" y="${H - 28}" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="18" font-weight="600" fill="${ORANGE}">${escapeXml(footer)}</text>
</svg>`;
}

async function loadBadge(kind) {
	// Small corner badges from Fam-Marks — real assets only
	const dir = marksDir();
	if (kind === 'nelly' || kind === 'both') {
		const p = path.join(dir, 'nelly.png');
		if (fs.existsSync(p)) {
			return sharp(p).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
		}
	}
	return null;
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	if (args.help || !args.mark || !args.title || !args.out) {
		console.log(`Usage: node scripts/gen-brand-card.mjs --mark faf|fafm|fafa|trophy --title "..." --out path.png [options]

Approved marks only (Fam-Marks):
  faf / dotfaf  → DotFaf (context)
  fafm / nelly  → Nelly (memory)
  fafa / agent  → FAFA (agent)
  trophy        → Trophy (100%)

NEVER invent logos. If the file is missing, the script fails.`);
		process.exit(args.help ? 0 : 1);
	}

	const mark = resolveMarkFile(args.mark);
	const outPath = path.isAbsolute(args.out) ? args.out : path.join(ROOT, args.out);

	if (args.dryRun) {
		console.log(JSON.stringify({ mark, outPath, args }, null, 2));
		return;
	}

	// Layout: mark left, series card geometry
	const markSize = 280;
	const markX = 56;
	const markY = 160;

	const svg = buildSvg({
		title: args.title,
		subtitle: args.subtitle,
		pill: args.pill,
		terminal: args.terminal,
		footer: args.footer,
		markSize,
		markX,
		markY
	});

	const base = await sharp(Buffer.from(svg)).png().toBuffer();

	const markBuf = await sharp(mark.path)
		.resize(markSize, markSize, {
			fit: 'contain',
			background: { r: 0, g: 0, b: 0, alpha: 0 }
		})
		.png()
		.toBuffer();

	const composites = [{ input: markBuf, left: markX, top: markY }];

	// Optional corner badges — real Nelly only if requested (Python is drawn simple or skip)
	if (args.badge === 'nelly' || args.badge === 'both') {
		const nellyBadge = await loadBadge('nelly');
		if (nellyBadge) {
			composites.push({ input: nellyBadge, left: W - 120, top: 28 });
		}
	}

	// Simple Python badge as SVG (not a logo invention — language color chip, optional)
	if (args.badge === 'python' || args.badge === 'both') {
		const pySvg = Buffer.from(`<?xml version="1.0"?>
<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#3776AB"/>
  <text x="24" y="32" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="20" font-weight="800" fill="#FFD43B">Py</text>
</svg>`);
		const py = await sharp(pySvg).png().toBuffer();
		composites.push({ input: py, left: W - 64, top: 28 });
	}

	// Trophy small seal bottom-right optional when --mark trophy is hero; else small star skip
	if (args.mark === 'trophy') {
		// hero is trophy already
	}

	const final = await sharp(base).composite(composites).png().toBuffer();

	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, final);

	console.log(`✓ brand card → ${outPath}`);
	console.log(`  mark: ${mark.label} (${mark.role}) ← ${mark.path}`);
	console.log(`  size: ${W}×${H}  bytes: ${final.length}`);
}

main().catch((e) => {
	console.error('✗', e.message || e);
	process.exit(1);
});
