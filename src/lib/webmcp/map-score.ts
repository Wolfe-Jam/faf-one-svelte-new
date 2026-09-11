import { parse } from 'yaml';

export type ScoreResult = {
	score: number;
	tier: string;
	populated: number;
	total: number;
	active?: number;
	gaps?: string[];
	faf_version?: string;
};

function asNumber(value: unknown): number | undefined {
	if (typeof value === 'number' && Number.isFinite(value)) return value;
	if (typeof value === 'string' && value.trim() !== '') {
		const n = Number(value);
		if (Number.isFinite(n)) return n;
	}
	return undefined;
}

function extractFafVersion(yaml: string): string | undefined {
	try {
		const doc = parse(yaml);
		if (doc && typeof doc === 'object' && !Array.isArray(doc)) {
			const v = (doc as Record<string, unknown>).faf_version;
			if (v === undefined || v === null) return undefined;
			const s = String(v).trim();
			return s || undefined;
		}
	} catch {
		// Mapping still succeeds from kernel JSON; version is optional.
	}
	return undefined;
}

function gapsFromSlots(slots: unknown): string[] | undefined {
	if (!slots || typeof slots !== 'object' || Array.isArray(slots)) return undefined;
	const gaps = Object.entries(slots as Record<string, unknown>)
		.filter(([, state]) => state === 'empty')
		.map(([name]) => name);
	return gaps.length ? gaps : undefined;
}

/** Map kernel JSON onto the playground return shape. Do not invent slots. */
export function mapScoreResult(kernel: unknown, yaml: string): ScoreResult {
	if (!kernel || typeof kernel !== 'object' || Array.isArray(kernel)) {
		throw new Error('kernel JSON was not an object');
	}
	const k = kernel as Record<string, unknown>;
	const score = asNumber(k.score);
	const populated = asNumber(k.populated);
	const total = asNumber(k.total);
	if (score === undefined || populated === undefined || total === undefined) {
		throw new Error('kernel JSON missing score, populated, or total');
	}
	const result: ScoreResult = {
		score,
		tier: typeof k.tier === 'string' && k.tier ? k.tier : '',
		populated,
		total
	};
	const active = asNumber(k.active);
	if (active !== undefined) result.active = active;
	const gaps = gapsFromSlots(k.slots);
	if (gaps) result.gaps = gaps;
	const version = extractFafVersion(yaml);
	if (version) result.faf_version = version;
	return result;
}
