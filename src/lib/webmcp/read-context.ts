import { parse } from 'yaml';

export type SixView = {
	who: string;
	what: string;
	why: string;
	where: string;
	when: string;
	how: string;
};

export type ContextView = {
	name: string;
	goal: string;
	language: string;
	version: string;
	six: SixView;
	stack: Array<{ key: string; value: string }>;
};

const SIX_KEYS = ['who', 'what', 'why', 'where', 'when', 'how'] as const;

function isMapping(value: unknown): value is Record<string, unknown> {
	return !!value && typeof value === 'object' && !Array.isArray(value);
}

function str(value: unknown): string {
	if (value === undefined || value === null) return '';
	if (typeof value === 'string') return value.trim();
	if (typeof value === 'number' || typeof value === 'boolean') return String(value);
	return '';
}

/** project.faf as a Context Card — identity, 6Ws, stack. Not a score. */
export function readContext(yamlText: string): ContextView | null {
	if (!yamlText.trim()) return null;
	let doc: unknown;
	try {
		doc = parse(yamlText);
	} catch {
		return null;
	}
	if (!isMapping(doc)) return null;
	const project = isMapping(doc.project) ? doc.project : {};
	const human = isMapping(doc.human_context) ? doc.human_context : {};
	const stackIn = isMapping(doc.stack) ? doc.stack : {};
	const six = {} as SixView;
	for (const key of SIX_KEYS) {
		six[key] = str(human[key]) === 'slotignored' ? '' : str(human[key]);
	}
	const stack: Array<{ key: string; value: string }> = [];
	for (const [key, value] of Object.entries(stackIn)) {
		const s = str(value);
		if (!s || s === 'slotignored') continue;
		stack.push({ key, value: s });
	}
	return {
		name: str(project.name),
		goal: str(project.goal),
		language: str(project.main_language),
		version: str(doc.faf_version) || str(project.version),
		six,
		stack
	};
}

export function contextCardText(card: ContextView): string {
	const lines: string[] = [];
	if (card.name) lines.push(card.name);
	if (card.goal) lines.push(card.goal);
	if (card.language) lines.push(`Language: ${card.language}`);
	if (card.version) lines.push(`project.faf ${card.version}`);
	const sixBits = SIX_KEYS.filter((k) => card.six[k]).map((k) => `${k}: ${card.six[k]}`);
	if (sixBits.length) {
		lines.push('');
		lines.push(...sixBits);
	}
	if (card.stack.length) {
		lines.push('');
		lines.push('Stack');
		for (const row of card.stack) lines.push(`${row.key}: ${row.value}`);
	}
	return lines.join('\n');
}
