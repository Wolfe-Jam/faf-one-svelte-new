#!/usr/bin/env node
/**
 * refresh-downloads.mjs — daily auto-refresh of packages.ts
 *
 * Fetches live download counts from npm, PyPI, and crates.io APIs and
 * updates ONLY the `downloads: N` field for each known package in
 * src/lib/data/packages.ts. Never adds or removes packages — the
 * file structure (descriptions, install commands, URLs, icons) stays
 * hand-curated.
 *
 * Package list mirrors the /downloads skill. To add a package to the
 * auto-refresh: add it here AND to packages.ts (with initial downloads
 * value); next run will start updating it.
 *
 * Run locally:  node scripts/refresh-downloads.mjs
 * Run in CI:    .github/workflows/refresh-downloads.yml (daily cron)
 */

import { readFile, writeFile } from 'node:fs/promises';

const PACKAGES_TS = 'src/lib/data/packages.ts';

const NPM = [
	'faf-cli', 'faf', 'claude-faf-mcp', 'faf-mcp', 'faf-scoring-kernel',
	'bun-sticky', 'slash-tokens', 'wjttc', 'grok-faf-mcp',
	'faf-wasm-core', 'faf-wasm-sdk', 'faf-wasm'
];
const PYPI = [
	'gemini-faf-mcp', 'faf-python-sdk', 'faf-agent-mcp',
	'grok-faf-voice', 'slash-tokens'
];
const CRATES = [
	'faf-rust-sdk', 'rust-faf-mcp', 'faf', 'faf-radio-rust', 'mcpaas'
];

async function fetchNpm(name) {
	try {
		const r = await fetch(`https://api.npmjs.org/downloads/point/2000-01-01:2099-12-31/${name}`);
		const d = await r.json();
		return typeof d.downloads === 'number' ? d.downloads : null;
	} catch { return null; }
}

async function fetchPypi(name) {
	try {
		const r = await fetch(`https://pypistats.org/api/packages/${name}/overall`);
		const d = await r.json();
		if (!Array.isArray(d.data)) return null;
		return d.data.reduce((s, x) => s + (x.downloads || 0), 0);
	} catch { return null; }
}

async function fetchCrates(name) {
	try {
		const r = await fetch(`https://crates.io/api/v1/crates/${name}`, {
			headers: { 'User-Agent': 'faf-refresh-bot/1.0 (team@faf.one)' }
		});
		const d = await r.json();
		return typeof d.crate?.downloads === 'number' ? d.crate.downloads : null;
	} catch { return null; }
}

function formatTsNumber(n) {
	// Match TypeScript underscore-separated convention: 26_643
	return n.toLocaleString('en-US').replace(/,/g, '_');
}

function updateSection(section, table) {
	let out = section;
	for (const [name, count] of Object.entries(table)) {
		if (count === null) continue;
		// Match: name: 'PKG_NAME', ...whitespace... downloads: <number>
		// Trailing comma after the name string anchors the match exactly,
		// so `name: 'faf',` doesn't accidentally match `name: 'faf-cli',`.
		const re = new RegExp(
			`(name:\\s+'${name}',[\\s\\S]*?downloads:\\s+)[\\d_]+`,
			'g'
		);
		out = out.replace(re, (_, prefix) => `${prefix}${formatTsNumber(count)}`);
	}
	return out;
}

// ── Fetch all live numbers ────────────────────────────────────────

console.log('Fetching live download counts from npm + PyPI + crates...\n');

const counts = {
	npm: Object.fromEntries(await Promise.all(NPM.map(async n => [n, await fetchNpm(n)]))),
	pypi: Object.fromEntries(await Promise.all(PYPI.map(async n => [n, await fetchPypi(n)]))),
	crates: Object.fromEntries(await Promise.all(CRATES.map(async n => [n, await fetchCrates(n)])))
};

let failures = 0;
let runningTotal = 0;
for (const [reg, m] of Object.entries(counts)) {
	let subtotal = 0;
	for (const [name, n] of Object.entries(m)) {
		if (n === null) {
			console.error(`  ⚠ ${reg}/${name}: fetch failed`);
			failures++;
		} else {
			console.log(`  ✓ ${reg}/${name.padEnd(22)} ${n.toLocaleString()}`);
			subtotal += n;
		}
	}
	console.log(`    ${reg} subtotal: ${subtotal.toLocaleString()}\n`);
	runningTotal += subtotal;
}

if (failures > 0) {
	console.error(`\n${failures} fetch failure(s) — aborting to avoid partial/stale write.`);
	console.error('(Existing packages.ts numbers preserved; next cron run will retry.)');
	process.exit(1);
}

console.log(`Live grand total (auto-tracked packages only): ${runningTotal.toLocaleString()}`);
console.log(`(Manually-tracked packages in packages.ts contribute additional counts.)\n`);

// ── Patch packages.ts in place ────────────────────────────────────

let src = await readFile(PACKAGES_TS, 'utf8');

// Section markers split packages.ts so we can scope replacements per
// registry (prevents the npm `faf` package from colliding with the
// crates `faf` package).
const sectionRe = /(\/\/ ── npm packages[\s\S]*?)(\/\/ ── PyPI packages[\s\S]*?)(\/\/ ── crates\.io packages[\s\S]*?)(\/\/ ── Computed totals)/;
const m = src.match(sectionRe);
if (!m) {
	console.error('Could not locate section markers in packages.ts');
	console.error('Expected: "// ── npm packages", "// ── PyPI packages", "// ── crates.io packages", "// ── Computed totals"');
	process.exit(1);
}

const newSrc = src.replace(
	sectionRe,
	updateSection(m[1], counts.npm) +
	updateSection(m[2], counts.pypi) +
	updateSection(m[3], counts.crates) +
	m[4]
);

// Only update the Verified: date when at least one number actually changed.
// Avoids daily noise-commits when numbers happen to be unchanged.
if (newSrc === src) {
	console.log('No number changes — packages.ts unchanged.');
	process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const newSrcWithDate = newSrc.replace(/Verified: \d{4}-\d{2}-\d{2}/, `Verified: ${today}`);

await writeFile(PACKAGES_TS, newSrcWithDate);
console.log(`✓ packages.ts updated (Verified: ${today})`);
