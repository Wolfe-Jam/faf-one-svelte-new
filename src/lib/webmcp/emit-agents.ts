import { parse } from 'yaml';
import { ToolError } from './errors';

// Minimal renderer — not the full faf-cli AGENTS.md compiler.
// Ships project name, goal, stack, 6Ws, plus a one-line IANA stamp.

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
