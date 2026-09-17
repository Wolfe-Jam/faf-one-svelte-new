#!/usr/bin/env node
/**
 * The gate that lives where the risk is.
 *
 * src/lib/data/pack-of-cards*.json are machine-written by the card-evolution
 * pipeline, which filters private-repo rows at build time. This re-checks the
 * files that are actually committed here — catching a hand-edit, a bad merge,
 * or a stale payload — and it runs on every build, including CI, with no
 * access to the vault.
 *
 * Runs from `prebuild`. Exits non-zero on any problem.
 */
import { readFileSync, existsSync } from 'node:fs';

const PAGE = 'src/lib/data/pack-of-cards.json';
const REGISTER = 'src/lib/data/pack-of-cards-register.json';
const COMPONENT = 'src/lib/components/PackMap.svelte';

// Exact slugs. Wolfe-Jam/faf-agent is private; Wolfe-Jam/faf-agent-public is
// public and supplies register links — a substring match would ban both.
const PRIVATE_REPOS = ['Wolfe-Jam/FAF-Voice', 'Wolfe-Jam/faf-agent', 'Wolfe-Jam/faf-mcpaas'];
const LEAK_MARKERS = ['/Users/', 'PLANET-FAF', '03-TECHNICAL', 'card-evolution', 'mcpaas-cf'];
const EXPECT = { cards: 5, checkpoints: 30, entries: 270, linked: 269 };

const problems = [];

if (!existsSync(PAGE) || !existsSync(REGISTER)) {
	console.error(`pack-of-cards: ${PAGE} or ${REGISTER} missing — run the pipeline's refresh.sh`);
	process.exit(1);
}

const pageText = readFileSync(PAGE, 'utf-8');
const regText = readFileSync(REGISTER, 'utf-8');
const page = JSON.parse(pageText);
const both = pageText + regText;

// 1. Vault paths and local markers.
for (const marker of LEAK_MARKERS) {
	if (both.includes(marker)) problems.push(`leak: ${marker} appears in the payload`);
}

// 2. Private repos, matched as whole slugs.
for (const slug of PRIVATE_REPOS) {
	const re = new RegExp(`${slug.replace('/', '\\/')}(?![A-Za-z0-9._-])`, 'g');
	const hits = both.match(re);
	if (hits) problems.push(`PRIVATE REPO in payload: ${slug} (${hits.length}x)`);
}

// 3. Privacy markers that should have been filtered out, not carried through.
if (/"public"\s*:\s*false/.test(both)) problems.push('an unfiltered private row ("public": false)');
if (/"(link|faf_link|spec_link)"\s*:\s*null/.test(both)) problems.push('a null link (private rows carry link: null)');
if (/"is-private"|"tag-private"|\bpublic-only\b/.test(both)) problems.push('a private CSS class survived');

// 4. Every commit row must carry its public link.
for (const artifact of page.lanes?.faf ?? []) {
	for (const v of artifact.versions ?? []) {
		if (!v.link) problems.push(`commit ${v.sha} in ${artifact.repo} has no link`);
	}
}

// 5. Counts floor — silent truncation must not ship.
for (const [k, want] of Object.entries(EXPECT)) {
	const got = page.counts?.[k];
	if (got !== want) problems.push(`count moved: ${k} = ${got}, expected ${want}`);
}

// 6. Map class drift: a class the SVG uses that the component cannot style.
if (existsSync(COMPONENT)) {
	const css = readFileSync(COMPONENT, 'utf-8');
	const missing = (page.map?.classes ?? []).filter((c) => !css.includes(`.${c}`));
	if (missing.length) problems.push(`map classes with no rule in PackMap.svelte: ${missing.join(', ')}`);
}

if (problems.length) {
	console.error('pack-of-cards gate FAILED:');
	for (const p of problems) console.error(`  ✗ ${p}`);
	process.exit(1);
}
console.log(
	`pack-of-cards gate: ${page.counts.cards} cards · ${page.counts.checkpoints} checkpoints · ` +
		`${page.counts.linked}/${page.counts.entries} linked · ${page.counts.public_artifacts} public surfaces · clean`
);
