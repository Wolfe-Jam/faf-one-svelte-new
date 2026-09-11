import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { FIXTURE_YAML } from './fixture';
import { mapScoreResult } from './map-score';
import { runScoreFafSafe } from './score-faf';

/**
 * Loads the vendored Mk4 wasm with initSync (no fetch).
 * Skips if wasm-bindgen glue cannot instantiate in this Node.
 */
describe('Mk4 wasm score_faf', () => {
	it('returns a numeric score for the fixture', async () => {
		const dir = dirname(fileURLToPath(import.meta.url));
		const wasmPath = join(dir, 'kernel', 'faf_wasm_sdk_bg.wasm');
		const bytes = readFileSync(wasmPath);
		const mod = await import('./kernel/faf_wasm_sdk.js');
		mod.initSync({ module: bytes });
		const raw = mod.score_faf(FIXTURE_YAML);
		const mapped = mapScoreResult(JSON.parse(raw), FIXTURE_YAML);
		expect(typeof mapped.score).toBe('number');
		expect(mapped.score).toBeGreaterThan(0);
		expect(mapped.total).toBe(21);
		expect(mapped.faf_version).toBe('3.0');
		expect(mapped.populated).toBeGreaterThan(0);
	});

	it('throws a YAML parse error on broken input', async () => {
		const dir = dirname(fileURLToPath(import.meta.url));
		const wasmPath = join(dir, 'kernel', 'faf_wasm_sdk_bg.wasm');
		const bytes = readFileSync(wasmPath);
		const mod = await import('./kernel/faf_wasm_sdk.js');
		mod.initSync({ module: bytes });
		expect(() => mod.score_faf('{ this is not: yaml: [[[')).toThrow(/yaml/i);
	});

	it('runScoreFafSafe maps the fixture to score 100 and structured-errors bad YAML', async () => {
		const dir = dirname(fileURLToPath(import.meta.url));
		const wasmPath = join(dir, 'kernel', 'faf_wasm_sdk_bg.wasm');
		const bytes = readFileSync(wasmPath);
		const mod = await import('./kernel/faf_wasm_sdk.js');
		mod.initSync({ module: bytes });
		const deps = { scoreYaml: mod.score_faf, fetchText: async () => '' };
		const ok = await runScoreFafSafe({ yaml: FIXTURE_YAML }, deps);
		expect(ok).toMatchObject({
			score: 100,
			populated: 13,
			active: 13,
			total: 21,
			faf_version: '3.0'
		});
		if (!('error' in ok)) {
			expect(`${ok.populated} / ${ok.active}`).toBe('13 / 13');
		}
		expect('error' in ok).toBe(false);
		const bad = await runScoreFafSafe({ yaml: '{ this is not: yaml: [[[' }, deps);
		expect(bad).toMatchObject({ error: 'invalid_yaml' });
	});
});
