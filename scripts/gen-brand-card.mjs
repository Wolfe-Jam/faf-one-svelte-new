#!/usr/bin/env node
/**
 * gen-brand-card.mjs — on-demand FAF series OG cards (1200×630)
 *
 * RULE: ONLY approved Fam marks. Never invent / redraw / AI-generate logos.
 *
 * Templates (for now):
 *   dark  — series release card (VP / Provable Receipt style)
 *   light — clean light card (Memory Edition style)
 *
 * Marks:
 *   DotFaf  → context (.faf)     --mark faf
 *   Nelly   → memory  (.fafm)   --mark fafm
 *   FAFA    → agent   (.fafa)   --mark fafa
 *   Trophy  → 100% / social     --mark trophy
 *
 * Source of truth: ~/FAF-GOLD/Fam-Marks/ (override with FAF_MARKS_DIR)
 *
 * Dark:
 *   node scripts/gen-brand-card.mjs --template dark --mark faf \
 *     --title "Verifiable Provenance" --subtitle "..." --pill "..." --terminal "..." \
 *     --out static/blog-assets/foo-hero.png
 *
 * Light (single mark):
 *   node scripts/gen-brand-card.mjs --template light --mark fafm \
 *     --title "faf-cli v7.2.0 · The Memory Edition" \
 *     --subtitle ".faf is context. .fafm is memory." \
 *     --out static/blog/memory-edition-hero.png
 *
 * Light (dual marks — Memory Edition pair):
 *   node scripts/gen-brand-card.mjs --template light --pair faf,fafm \
 *     --title "faf-cli v7.2.0 · The Memory Edition" \
 *     --subtitle ".faf is context. .fafm is memory." \
 *     --out static/blog/memory-edition-hero.png
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

const C = {
	cyan: '#00D4D4',
	orange: '#FF6B35',
	darkBg: '#1a1a1a',
	lightBg: '#f0f0f0',
	terminalBg: '#111111',
	white: '#ffffff',
	green: '#3ddc84',
	ink: '#1a1a1a',
	muted: '#666666',
	black: '#0a0a0a'
};

/** Approved marks only */
const MARKS = {
	faf: { file: 'dotfaf.png', label: 'DotFaf', role: 'context', ext: '.faf' },
	dotfaf: { file: 'dotfaf.png', label: 'DotFaf', role: 'context', ext: '.faf' },
	fafm: { file: 'nelly.png', label: 'Nelly', role: 'memory', ext: '.fafm' },
	nelly: { file: 'nelly.png', label: 'Nelly', role: 'memory', ext: '.fafm' },
	fafa: { file: 'fafa.png', label: 'FAFA', role: 'agent', ext: '.fafa' },
	agent: { file: 'fafa.png', label: 'FAFA', role: 'agent', ext: '.fafa' },
	trophy: { file: 'trophy.png', label: 'Trophy', role: '100%', ext: '' }
};

const TEMPLATES = new Set(['dark', 'light']);

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
			`Unknown mark "${key}". Allowed: faf | fafm | fafa | trophy (aliases: dotfaf, nelly, agent).\n` +
				`No invented logos. Use approved Fam-Marks only.`
		);
	}
	const dir = marksDir();
	const tryNames = [spec.file, spec.file.replace('.png', '-1024.png'), spec.file.replace('.png', '-from-svg.png')];
	if (key === 'trophy') {
		tryNames.push('trophy-mark.png', 'trophy-mark-1024.png', 'trophy-1024.png');
	}
	for (const name of tryNames) {
		const p = path.join(dir, name);
		if (fs.existsSync(p)) return { path: p, key, ...spec };
		const p2 = path.join(os.homedir(), 'FAF-GOLD/marks', name);
		if (fs.existsSync(p2)) return { path: p2, key, ...spec };
	}
	throw new Error(
		`Approved mark file missing for ${spec.label}.\n` +
			`Looked in ${dir} for: ${tryNames.join(', ')}\n` +
			`Set FAF_MARKS_DIR or restore Fam-Marks. NEVER substitute a generated face.`
	);
}

function parseArgs(argv) {
	const out = {
		template: 'dark',
		mark: null,
		pair: null,
		title: null,
		subtitle: '',
		pill: '',
		terminal: '',
		badge: 'none',
		footer: '.faf  faf.one',
		out: null,
		dryRun: false,
		help: false
	};
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		const next = () => argv[++i];
		switch (a) {
			case '--template':
			case '--tpl':
				out.template = (next() || 'dark').toLowerCase();
				break;
			case '--mark':
				out.mark = next()?.toLowerCase();
				break;
			case '--pair':
				out.pair = next()?.toLowerCase();
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
	return lines.slice(0, 5);
}

function help() {
	return `Usage: node scripts/gen-brand-card.mjs --template dark|light --title "..." --out path.png

TEMPLATES
  dark   Series release card (dark ground, left mark, pill, terminal)
  light  Clean light card (Memory Edition style; single or dual marks)

MARKS (Fam-Marks only — never invented)
  faf / dotfaf  → DotFaf (context)
  fafm / nelly  → Nelly (memory)
  fafa / agent  → FAFA (agent)
  trophy        → Trophy (100%)

  --mark faf                 single hero mark
  --pair faf,fafm            light dual-mark layout (context <|> memory)

OPTIONS
  --title --subtitle --pill --terminal --badge none|nelly|python|both
  --footer ".faf  faf.one"   --dry-run

Examples
  # Dark (VP-style)
  node scripts/gen-brand-card.mjs --template dark --mark faf \\
    --title "Verifiable Provenance" --pill "claude-fafm-sdk v1.4.0" \\
    --subtitle "..." --terminal "..." --out static/blog-assets/vp-hero.png

  # Light dual (Memory Edition-style)
  node scripts/gen-brand-card.mjs --template light --pair faf,fafm \\
    --title "faf-cli v7.2.0 · The Memory Edition" \\
    --subtitle ".faf is context. .fafm is memory." \\
    --out static/blog/memory-edition-hero.png
`;
}

// ─── DARK template (series release) ─────────────────────────────────────────

function buildDarkSvg({ title, subtitle, pill, terminal, footer, markSize, markX }) {
	const textLeft = markX + markSize + 36;
	const pillTop = 130;
	const pillH = 36;
	let y = pill ? pillTop + pillH + 52 : 210;

	const titleLines = wrapText(title, 28);
	const subLines = wrapText(subtitle, 48);
	const termLines = terminal ? wrapText(terminal, 52) : [];

	const titleTs = titleLines
		.map((line, i) => `<tspan x="${textLeft}" y="${y + i * 58}">${escapeXml(line)}</tspan>`)
		.join('');
	y += titleLines.length * 58 + 16;

	const subTs = subLines
		.map((line, i) => `<tspan x="${textLeft}" y="${y + i * 34}">${escapeXml(line)}</tspan>`)
		.join('');
	y += Math.max(subLines.length, 1) * 34 + 28;

	const termBlockH = termLines.length ? 28 + termLines.length * 28 + 20 : 0;
	const termY = Math.min(Math.max(y, 400), H - 80 - termBlockH);
	const termW = W - textLeft - 48;

	const pillW = pill ? Math.min(20 + pill.length * 10.5, 440) : 0;
	const pillSvg = pill
		? `<rect x="${textLeft}" y="${pillTop}" rx="8" ry="8" width="${pillW}" height="${pillH}" fill="${C.orange}"/>
       <text x="${textLeft + 14}" y="${pillTop + 24}" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="16" font-weight="700" fill="${C.white}">${escapeXml(pill)}</text>`
		: '';

	const termSvg = termLines.length
		? `<rect x="${textLeft}" y="${termY}" rx="12" ry="12" width="${termW}" height="${termBlockH}" fill="${C.terminalBg}"/>
       <circle cx="${textLeft + 22}" cy="${termY + 22}" r="5" fill="#ff5f57"/>
       <circle cx="${textLeft + 42}" cy="${termY + 22}" r="5" fill="#febc2e"/>
       <circle cx="${textLeft + 62}" cy="${termY + 22}" r="5" fill="#28c840"/>
       <text font-family="SF Mono, Menlo, Monaco, Consolas, monospace" font-size="18" fill="${C.green}">
         ${termLines.map((line, i) => `<tspan x="${textLeft + 24}" y="${termY + 52 + i * 28}">${escapeXml(line)}</tspan>`).join('')}
       </text>`
		: '';

	return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${C.darkBg}"/>
  <rect width="${W}" height="8" fill="${C.orange}"/>
  ${pillSvg}
  <text font-family="SF Pro Display, -apple-system, Helvetica Neue, Arial Black, sans-serif" font-size="52" font-weight="800" fill="${C.white}">
    ${titleTs}
  </text>
  <text font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="24" font-weight="500" fill="${C.cyan}">
    ${subTs}
  </text>
  ${termSvg}
  <text x="36" y="${H - 28}" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="18" font-weight="600" fill="${C.orange}">${escapeXml(footer)}</text>
</svg>`;
}

// ─── LIGHT template (Memory Edition style) ──────────────────────────────────

function buildLightSvg({ title, subtitle, dual }) {
	// Centered composition on light ground
	const titleLines = wrapText(title, 42);
	const subLines = wrapText(subtitle, 50);

	// Title / subtitle sit below the mark zone
	const textBlockTop = dual ? 430 : 400;
	const titleTs = titleLines
		.map((line, i) => `<tspan x="${W / 2}" y="${textBlockTop + i * 32}">${escapeXml(line)}</tspan>`)
		.join('');
	const subY0 = textBlockTop + titleLines.length * 32 + 18;
	const subTs = subLines
		.map((line, i) => `<tspan x="${W / 2}" y="${subY0 + i * 36}">${escapeXml(line)}</tspan>`)
		.join('');

	// Dual labels live near marks (drawn in SVG; marks composited later)
	const dualLabels = dual
		? `<text x="360" y="168" text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="18" fill="${C.muted}">context</text>
       <text x="840" y="168" text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="18" fill="${C.muted}">memory</text>
       <text x="360" y="400" text-anchor="middle" font-family="SF Mono, Menlo, Monaco, monospace" font-size="22" font-weight="700" fill="${C.ink}">.faf</text>
       <text x="840" y="400" text-anchor="middle" font-family="SF Mono, Menlo, Monaco, monospace" font-size="22" font-weight="700" fill="${C.ink}">.fafm</text>
       <text x="${W / 2}" y="300" text-anchor="middle" font-family="SF Mono, Menlo, Monaco, monospace" font-size="28" fill="${C.muted}">&lt;|&gt;</text>`
		: '';

	// Single-mark ext label under mark
	const singleLabel = !dual
		? '' // role/ext can be in subtitle; keep clean
		: '';

	// Subtitle coloring: if contains ".faf is context" pattern, use multi-color spans
	// Keep simple: full subtitle in ink, or split cyan/orange if " . " separates two claims
	let subSvg;
	if (subtitle.includes('.faf is context') && subtitle.includes('.fafm is memory')) {
		subSvg = `<text text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="28" font-weight="700">
      <tspan x="${W / 2}" y="${subY0}" fill="${C.cyan}">.faf is context.</tspan>
      <tspan x="${W / 2}" y="${subY0 + 36}" fill="${C.orange}">.fafm is memory.</tspan>
    </text>`;
	} else {
		subSvg = `<text text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="600" fill="${C.ink}">
      ${subTs}
    </text>`;
	}

	return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${C.lightBg}"/>
  ${dualLabels}
  ${singleLabel}
  <text text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="600" fill="${C.ink}">
    ${titleTs}
  </text>
  ${subSvg}
</svg>`;
}

async function resizeMark(markPath, size) {
	return sharp(markPath)
		.resize(size, size, {
			fit: 'contain',
			background: { r: 0, g: 0, b: 0, alpha: 0 }
		})
		.png()
		.toBuffer();
}

async function loadCornerBadge(kind) {
	const dir = marksDir();
	if (kind === 'nelly' || kind === 'both') {
		const p = path.join(dir, 'nelly.png');
		if (fs.existsSync(p)) {
			return sharp(p)
				.resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
				.png()
				.toBuffer();
		}
	}
	return null;
}

async function renderDark(args, mark) {
	const markSize = 280;
	const markX = 56;
	const markY = 160;

	const svg = buildDarkSvg({
		title: args.title,
		subtitle: args.subtitle,
		pill: args.pill,
		terminal: args.terminal,
		footer: args.footer,
		markSize,
		markX
	});

	const base = await sharp(Buffer.from(svg)).png().toBuffer();
	const markBuf = await resizeMark(mark.path, markSize);
	const composites = [{ input: markBuf, left: markX, top: markY }];

	if (args.badge === 'nelly' || args.badge === 'both') {
		const b = await loadCornerBadge('nelly');
		if (b) composites.push({ input: b, left: W - 120, top: 28 });
	}
	if (args.badge === 'python' || args.badge === 'both') {
		const pySvg = Buffer.from(`<?xml version="1.0"?>
<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#3776AB"/>
  <text x="24" y="32" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="20" font-weight="800" fill="#FFD43B">Py</text>
</svg>`);
		composites.push({ input: await sharp(pySvg).png().toBuffer(), left: W - 64, top: 28 });
	}

	return sharp(base).composite(composites).png().toBuffer();
}

async function renderLight(args, marks) {
	const dual = marks.length === 2;
	const svg = buildLightSvg({
		title: args.title,
		subtitle: args.subtitle,
		dual
	});
	const base = await sharp(Buffer.from(svg)).png().toBuffer();
	const composites = [];

	if (dual) {
		// Memory Edition geometry: left DotFaf, right Nelly
		const size = 200;
		const leftX = 260;
		const rightX = 740;
		const top = 190;
		composites.push({ input: await resizeMark(marks[0].path, size), left: leftX, top });
		composites.push({ input: await resizeMark(marks[1].path, size), left: rightX, top });
	} else {
		const size = 220;
		const left = Math.round((W - size) / 2);
		const top = 140;
		composites.push({ input: await resizeMark(marks[0].path, size), left, top });
	}

	return sharp(base).composite(composites).png().toBuffer();
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	if (args.help) {
		console.log(help());
		process.exit(0);
	}
	if (!args.title || !args.out) {
		console.error(help());
		process.exit(1);
	}
	if (!TEMPLATES.has(args.template)) {
		throw new Error(`Unknown --template "${args.template}". Use: dark | light`);
	}

	// Resolve marks
	let marks = [];
	if (args.pair) {
		const parts = args.pair.split(',').map((s) => s.trim()).filter(Boolean);
		if (parts.length !== 2) throw new Error('--pair needs two marks: e.g. faf,fafm');
		marks = parts.map(resolveMarkFile);
		if (args.template !== 'light') {
			console.warn('note: --pair is designed for --template light (dual layout)');
		}
	} else if (args.mark) {
		marks = [resolveMarkFile(args.mark)];
	} else {
		throw new Error('Provide --mark or --pair (e.g. --pair faf,fafm)');
	}

	const outPath = path.isAbsolute(args.out) ? args.out : path.join(ROOT, args.out);

	if (args.dryRun) {
		console.log(JSON.stringify({ template: args.template, marks, outPath, args }, null, 2));
		return;
	}

	const png =
		args.template === 'light'
			? await renderLight(args, marks)
			: await renderDark(args, marks[0]);

	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, png);

	console.log(`✓ ${args.template} card → ${outPath}`);
	for (const m of marks) {
		console.log(`  mark: ${m.label} (${m.role}) ← ${m.path}`);
	}
	console.log(`  size: ${W}×${H}  bytes: ${png.length}`);
}

main().catch((e) => {
	console.error('✗', e.message || e);
	process.exit(1);
});
