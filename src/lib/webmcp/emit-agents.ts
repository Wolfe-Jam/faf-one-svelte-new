import { parse } from 'yaml';
import { ToolError } from './errors';

// Minimal renderer — not the full faf-cli AGENTS.md compiler.
// Ships project name, goal, commands, stack, 6Ws, plus a one-line IANA stamp.
// Command sections mirror faf-cli src/interop/agents.ts: same split, order, and headings.

type Mapping = Record<string, unknown>;

function isMapping(value: unknown): value is Mapping {
	return !!value && typeof value === 'object' && !Array.isArray(value);
}

function str(value: unknown): string {
	if (value === undefined || value === null) return '';
	if (typeof value === 'string') return value.trim();
	if (typeof value === 'number' || typeof value === 'boolean') return String(value);
	return '';
}

function stackLines(stack: Mapping): string[] {
	const lines: string[] = [];
	for (const [key, value] of Object.entries(stack)) {
		const s = str(value);
		if (!s || s === 'slotignored') continue;
		lines.push(`- ${key}: ${s}`);
	}
	return lines;
}

/** Setup order: install → build → dev → start → other (as faf-cli). */
function setupRank(key: string): number {
	const n = key.toLowerCase();
	if (/install|deps/.test(n)) return 0;
	if (/build/.test(n) && !/rebuild/.test(n)) return 1;
	if (/^dev$|develop/.test(n)) return 2;
	if (/^start$|run/.test(n)) return 3;
	return 4;
}

/** `## Setup & build` and `## Run the tests` from the commands block. */
function commandSections(commands: Mapping): string[] {
	const entries = Object.entries(commands)
		.map(([key, value]) => [key, str(value)] as const)
		.filter(([, value]) => value && value !== 'slotignored');
	// Mutually exclusive, so a key like `test:check` classifies once, as a test.
	const tests = entries.filter(([key]) => /test/i.test(key));
	const lint = entries.filter(([key]) => /lint|check/i.test(key) && !/test/i.test(key));
	const setup = entries
		.filter(([key]) => !/test|lint|check/i.test(key))
		.sort((a, b) => setupRank(a[0]) - setupRank(b[0]) || a[0].localeCompare(b[0]));
	const verify = [...tests, ...lint];

	const out: string[] = [];
	if (setup.length) {
		out.push('## Setup & build', '', '```bash');
		out.push(...setup.map(([key, value]) => `${value}    # ${key}`));
		out.push('```', '');
	}
	if (verify.length) {
		out.push('## Run the tests', '', '```bash');
		out.push(...verify.map(([, value]) => value));
		out.push('```', '');
	}
	return out;
}

function wsLines(human: Mapping): string[] {
	const keys = ['who', 'what', 'why', 'where', 'when', 'how'] as const;
	const lines: string[] = [];
	for (const key of keys) {
		const s = str(human[key]);
		if (!s || s === 'slotignored') continue;
		lines.push(`- ${key}: ${s}`);
	}
	return lines;
}

export function emitAgentsMd(yamlText: string): { markdown: string } {
	let doc: unknown;
	try {
		doc = parse(yamlText);
	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		throw new ToolError('invalid_yaml', `YAML parse error: ${message}`);
	}
	if (!isMapping(doc)) {
		throw new ToolError('invalid_yaml', '.faf YAML must be a mapping');
	}

	const project = isMapping(doc.project) ? doc.project : {};
	const name = str(project.name) || 'Project';
	const goal = str(project.goal);
	const language = str(project.main_language);
	const commands = isMapping(doc.commands) ? commandSections(doc.commands) : [];
	const stack = isMapping(doc.stack) ? stackLines(doc.stack) : [];
	const human = isMapping(doc.human_context) ? wsLines(doc.human_context) : [];

	const out: string[] = [`# AGENTS.md — ${name}`, ''];
	if (goal) {
		out.push(goal);
		out.push('');
	}
	if (language) {
		out.push(`Language: ${language}`);
		out.push('');
	}
	out.push(...commands);
	if (stack.length) {
		out.push('## Stack');
		out.push('');
		out.push(...stack);
		out.push('');
	}
	if (human.length) {
		out.push('## 6Ws');
		out.push('');
		out.push(...human);
		out.push('');
	}
	out.push('compiled from application/vnd.faf+yaml');
	out.push('');
	return { markdown: out.join('\n') };
}
