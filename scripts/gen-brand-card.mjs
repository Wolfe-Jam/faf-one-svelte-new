#!/usr/bin/env node
/**
 * gen-brand-card.mjs — on-demand FAF series OG cards (1200×630)
 *
 * RULE: ONLY approved Fam marks. Never invent / redraw / AI-generate logos.
 *
 * Templates:
 *   dark  — series release card (Provable Receipt / VP style)
 *           hero mark from Fam-Marks; badges/star/footer from locked chrome
 *   light — clean light card (Memory Edition style)
 *
 * Marks (Fam-Marks only):
 *   faf / dotfaf  → DotFaf (context)
 *   fafm / nelly  → Nelly (memory)
 *   fafa / agent  → FAFA (agent)
 *   trophy        → Trophy (100%)
 *
 * Chrome (dark only): scripts/brand-card-chrome/
 *   dark-badges-nelly-python.png  — full Nelly + Python (from proven 1.3 card)
 *   dark-star.png                 — full star seal
 *   dark-footer.png               — .faf faf.one wordmark
 *
 * Source of truth for faces: ~/FAF-GOLD/Fam-Marks/ (FAF_MARKS_DIR override)
 *
 * Examples:
 *   node scripts/gen-brand-card.mjs --template dark --mark faf \
 *     --title "Verifiable Provenance" \
 *     --subtitle "1.3 proved a packet travels intact; 1.4 proves which key sealed it." \
 *     --pill "claude-fafm-sdk v1.4.0" \
 *     --terminal "pip install 'claude-fafm-sdk[sign]'  ·  verify -k → signature OK" \
 *     --badge both \
 *     --out static/blog-assets/verifiable-provenance-hero.png
 *
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
const CHROME_DIR = path.join(__dirname, 'brand-card-chrome');

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
	muted: '#666666'
};

/** Approved marks only */
const MARKS = {
	faf: { file: 'dotfaf.png', label: 'DotFaf', role: 'context' },
	dotfaf: { file: 'dotfaf.png', label: 'DotFaf', role: 'context' },
	fafm: { file: 'nelly.png', label: 'Nelly', role: 'memory' },
	nelly: { file: 'nelly.png', label: 'Nelly', role: 'memory' },
	fafa: { file: 'fafa.png', label: 'FAFA', role: 'agent' },
	agent: { file: 'fafa.png', label: 'FAFA', role: 'agent' },
	trophy: { file: 'trophy.png', label: 'Trophy', role: '100%' }
};

const TEMPLATES = new Set(['dark', 'light']);

/** Dark layout — locked to match Provable Receipt / fixed VP card */
const DARK = {
	markSize: 280,
	markX: 56,
	markY: 160,
	textLeft: 410,
	pillTop: 144,
	pillH: 36,
	titleY: 250,
	titleSize: 54,
	subY0: 312,
	subLine: 32,
	subSize: 23,
	termX: 410,
	termY: 390,
	termW: 700,
	termH: 100,
	badge: { left: 1020, top: 12 },
	star: { left: 1065, top: 508 },
	footer: { left: 0, top: 560 }
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

function requireChrome(name) {
	const p = path.join(CHROME_DIR, name);
	if (!fs.existsSync(p)) {
		throw new Error(
			`Dark chrome missing: ${p}\n` +
				`Restore scripts/brand-card-chrome/ from the proven series card (see BRAND-CARDS.md).`
		);
	}
	return p;
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
		// dark corner seal: star (locked chrome) | proof (✪ Proof Seal) | none
		seal: 'star',
		footer: true, // use chrome footer when true
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
			case '--seal':
				out.seal = (next() || 'star').toLowerCase();
				break;
			case '--no-footer':
				out.footer = false;
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
  dark   Series release (1.3 chrome + Fam mark + text) — Provable Receipt / VP
  light  Clean light (Memory Edition); --pair faf,fafm for dual marks

MARKS (Fam-Marks only)
  faf|dotfaf  DotFaf   fafm|nelly  Nelly   fafa|agent  FAFA   trophy  Trophy

DARK chrome (locked PNGs in scripts/brand-card-chrome/)
  --badge both|nelly|none   corner PyPI elephant+Python crop (default none — prefer none)
  --seal star|proof|none    BR seal: locked star · ✪ Proof Seal · none (default star)
  footer always placed on dark unless --no-footer

Examples
  node scripts/gen-brand-card.mjs --template dark --mark faf \\
    --title "Verifiable Provenance" --pill "claude-fafm-sdk v1.4.0" \\
    --subtitle "..." --terminal "..." --badge both \\
    --out static/blog-assets/verifiable-provenance-hero.png

  # Forgettable Memory — no PyPI chrome; Proof Seal ✪ not X/star
  node scripts/gen-brand-card.mjs --template dark --mark faf \\
    --title "Forgettable Memory" --pill "claude-fafm-sdk v1.5.1" \\
    --subtitle "A delete is state. Tombstones travel. Forget converges." \\
    --terminal "forget  ·  tombstone wins  ·  both transports" \\
    --badge none --seal proof \\
    --out static/blog/forgettable-memory-hero.png

  node scripts/gen-brand-card.mjs --template light --pair faf,fafm \\
    --title "faf-cli v7.2.0 · The Memory Edition" \\
    --subtitle ".faf is context. .fafm is memory." \\
    --out static/blog/memory-edition-hero.png
`;
}

/**
 * Proof Seal ✪ (U+272A CIRCLED WHITE STAR) — geometric, no font.
 * Work-surface 100% mark. Never an X / close glyph.
 */
async function renderProofSeal(size = 100) {
	const cx = size / 2;
	const cy = size / 2;
	const outerR = size * 0.42;
	const ring = size * 0.045;
	// 5-point star (circled white star geometry)
	const outer = size * 0.28;
	const inner = size * 0.12;
	const pts = [];
	for (let i = 0; i < 10; i++) {
		const r = i % 2 === 0 ? outer : inner;
		const a = -Math.PI / 2 + (i * Math.PI) / 5;
		pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
	}
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${cx}" cy="${cy}" r="${outerR}" fill="none" stroke="${C.white}" stroke-width="${ring}"/>
  <polygon points="${pts.join(' ')}" fill="${C.white}"/>
</svg>`;
	return sharp(Buffer.from(svg)).png().toBuffer();
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

// ─── DARK: canvas text + Fam hero + locked chrome ───────────────────────────

function buildDarkTextSvg({ title, subtitle, pill, terminal }) {
	const L = DARK;
	const titleLines = wrapText(title, 28);
	const subLines = wrapText(subtitle, 48);
	const termLines = terminal ? wrapText(terminal, 52) : [];

	// Title baseline
	const titleY = L.titleY;
	const titleTs = titleLines
		.map((line, i) => `<tspan x="${L.textLeft}" y="${titleY + i * 58}">${escapeXml(line)}</tspan>`)
		.join('');

	const subY0 = L.subY0 + (titleLines.length > 1 ? (titleLines.length - 1) * 20 : 0);
	const subTs = subLines
		.map((line, i) => `<tspan x="${L.textLeft}" y="${subY0 + i * L.subLine}">${escapeXml(line)}</tspan>`)
		.join('');

	const pillW = pill ? Math.min(20 + pill.length * 10.5, 440) : 0;
	const pillSvg = pill
		? `<rect x="${L.textLeft}" y="${L.pillTop}" rx="8" ry="8" width="${pillW}" height="${L.pillH}" fill="${C.orange}"/>
       <text x="${L.textLeft + 14}" y="${L.pillTop + 24}" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="16" font-weight="700" fill="${C.white}">${escapeXml(pill)}</text>`
		: '';

	const termSvg = termLines.length
		? `<rect x="${L.termX}" y="${L.termY}" rx="12" ry="12" width="${L.termW}" height="${L.termH}" fill="${C.terminalBg}"/>
       <circle cx="${L.termX + 30}" cy="${L.termY + 28}" r="5" fill="#ff5f57"/>
       <circle cx="${L.termX + 50}" cy="${L.termY + 28}" r="5" fill="#febc2e"/>
       <circle cx="${L.termX + 70}" cy="${L.termY + 28}" r="5" fill="#28c840"/>
       <text font-family="SF Mono, Menlo, Monaco, Consolas, monospace" font-size="19" fill="${C.green}">
         ${termLines
						.map(
							(line, i) =>
								`<tspan x="${L.termX + 90}" y="${L.termY + 35 + i * 30}">${escapeXml(line)}</tspan>`
						)
						.join('')}
       </text>`
		: '';

	return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${C.darkBg}"/>
  <rect width="${W}" height="8" fill="${C.orange}"/>
  ${pillSvg}
  <text font-family="SF Pro Display, -apple-system, Helvetica Neue, Arial Black, sans-serif" font-size="${L.titleSize}" font-weight="800" fill="${C.white}">
    ${titleTs}
  </text>
  <text font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="${L.subSize}" font-weight="500" fill="${C.cyan}">
    ${subTs}
  </text>
  ${termSvg}
</svg>`;
}

async function renderDark(args, mark) {
	const L = DARK;
	const svg = buildDarkTextSvg(args);
	const canvas = await sharp(Buffer.from(svg)).png().toBuffer();

	const markBuf = await resizeMark(mark.path, L.markSize);
	const composites = [{ input: markBuf, left: L.markX, top: L.markY }];

	// Corner badges — locked full crop (never regenerate). Prefer --badge none (no PyPI).
	if (args.badge === 'both' || args.badge === 'nelly' || args.badge === 'python') {
		const badgePath = requireChrome('dark-badges-nelly-python.png');
		composites.push({
			input: await sharp(badgePath).png().toBuffer(),
			left: L.badge.left,
			top: L.badge.top
		});
	}

	// BR seal: star (locked chrome) | proof (✪) | none — never an X / close glyph
	const seal = args.seal || 'star';
	if (seal === 'star') {
		const starPath = requireChrome('dark-star.png');
		composites.push({
			input: await sharp(starPath).png().toBuffer(),
			left: L.star.left,
			top: L.star.top
		});
	} else if (seal === 'proof' || seal === 'trophy' || seal === 'paz') {
		// ✪ Proof Seal — work surface 100% mark (doctrine: not 🏆 on work surfaces)
		composites.push({
			input: await renderProofSeal(100),
			left: L.star.left,
			top: L.star.top
		});
	} else if (seal !== 'none') {
		throw new Error(`Unknown --seal "${seal}". Use: star | proof | none`);
	}

	// Footer wordmark — locked crop
	if (args.footer !== false) {
		const footerPath = requireChrome('dark-footer.png');
		composites.push({
			input: await sharp(footerPath).png().toBuffer(),
			left: L.footer.left,
			top: L.footer.top
		});
	}

	return sharp(canvas).composite(composites).png().toBuffer();
}

// ─── LIGHT (Memory Edition) ─────────────────────────────────────────────────

function buildLightSvg({ title, subtitle, dual }) {
	const titleLines = wrapText(title, 42);
	const subLines = wrapText(subtitle, 50);
	const textBlockTop = dual ? 430 : 400;
	const titleTs = titleLines
		.map((line, i) => `<tspan x="${W / 2}" y="${textBlockTop + i * 32}">${escapeXml(line)}</tspan>`)
		.join('');
	const subY0 = textBlockTop + titleLines.length * 32 + 18;
	const subTs = subLines
		.map((line, i) => `<tspan x="${W / 2}" y="${subY0 + i * 36}">${escapeXml(line)}</tspan>`)
		.join('');

	const dualLabels = dual
		? `<text x="360" y="168" text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="18" fill="${C.muted}">context</text>
       <text x="840" y="168" text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="18" fill="${C.muted}">memory</text>
       <text x="360" y="400" text-anchor="middle" font-family="SF Mono, Menlo, Monaco, monospace" font-size="22" font-weight="700" fill="${C.ink}">.faf</text>
       <text x="840" y="400" text-anchor="middle" font-family="SF Mono, Menlo, Monaco, monospace" font-size="22" font-weight="700" fill="${C.ink}">.fafm</text>
       <text x="${W / 2}" y="300" text-anchor="middle" font-family="SF Mono, Menlo, Monaco, monospace" font-size="28" fill="${C.muted}">&lt;|&gt;</text>`
		: '';

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
  <text text-anchor="middle" font-family="SF Pro Text, -apple-system, Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="600" fill="${C.ink}">
    ${titleTs}
  </text>
  ${subSvg}
</svg>`;
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
		const size = 200;
		composites.push({ input: await resizeMark(marks[0].path, size), left: 260, top: 190 });
		composites.push({ input: await resizeMark(marks[1].path, size), left: 740, top: 190 });
	} else {
		const size = 220;
		composites.push({
			input: await resizeMark(marks[0].path, size),
			left: Math.round((W - size) / 2),
			top: 140
		});
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

	let marks = [];
	if (args.pair) {
		const parts = args.pair
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean);
		if (parts.length !== 2) throw new Error('--pair needs two marks: e.g. faf,fafm');
		marks = parts.map(resolveMarkFile);
		if (args.template !== 'light') {
			console.warn('note: --pair is designed for --template light');
		}
	} else if (args.mark) {
		marks = [resolveMarkFile(args.mark)];
	} else {
		throw new Error('Provide --mark or --pair (e.g. --pair faf,fafm)');
	}

	const outPath = path.isAbsolute(args.out) ? args.out : path.join(ROOT, args.out);

	if (args.dryRun) {
		console.log(
			JSON.stringify(
				{
					template: args.template,
					marks: marks.map((m) => ({ label: m.label, path: m.path })),
					chrome: CHROME_DIR,
					outPath,
					layout: args.template === 'dark' ? DARK : 'light'
				},
				null,
				2
			)
		);
		return;
	}

	const png =
		args.template === 'light' ? await renderLight(args, marks) : await renderDark(args, marks[0]);

	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, png);

	console.log(`✓ ${args.template} card → ${outPath}`);
	for (const m of marks) {
		console.log(`  mark: ${m.label} (${m.role}) ← ${m.path}`);
	}
	if (args.template === 'dark') {
		console.log(`  chrome: ${CHROME_DIR}`);
	}
	console.log(`  size: ${W}×${H}  bytes: ${png.length}`);
}

main().catch((e) => {
	console.error('✗', e.message || e);
	process.exit(1);
});
