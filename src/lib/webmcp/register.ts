import { toToolError } from './errors';
import { emitAgentsMd } from './emit-agents';
import { fill6wsYaml, type SixWs } from './fill-6ws';
import { runScoreFafSafe, type ScoreDeps } from './score-faf';

export const TOOL_NAMES = ['score_faf', 'fill_6ws', 'emit_agents_md'] as const;

export const SCORE_FAF_DESCRIPTION =
	'Score a Foundational AI-context Format (.faf) YAML document 0–100 and list missing slots. Input is YAML text or a https URL that returns YAML. Does not write files.';

export const FILL_6WS_DESCRIPTION =
	'Capture who, what, why, where, when, how for a project. Returns YAML slots only. Does not save a file.';

export const EMIT_AGENTS_DESCRIPTION =
	'Compile AGENTS.md text from .faf YAML. Returns markdown only. Does not write a repo file.';

export const SCORE_FAF_SCHEMA = {
	type: 'object',
	properties: {
		yaml: { type: 'string', description: 'Full .faf YAML' },
		url: { type: 'string', description: 'https URL of a .faf file' }
	}
};

export const FILL_6WS_SCHEMA = {
	type: 'object',
	properties: {
		who: { type: 'string', description: 'Who is this for?' },
		what: { type: 'string', description: 'What does it do?' },
		why: { type: 'string', description: 'Why does it exist?' },
		where: { type: 'string', description: 'Where does it run?' },
		when: { type: 'string', description: 'When is it happening?' },
		how: { type: 'string', description: 'How is it delivered?' }
	}
};

export const EMIT_AGENTS_SCHEMA = {
	type: 'object',
	properties: {
		yaml: { type: 'string', description: 'Full .faf YAML' }
	},
	required: ['yaml']
};

type RegisterTool = (tool: {
	name: string;
	description: string;
	inputSchema: object;
	annotations?: { readOnlyHint?: boolean };
	execute: (input: Record<string, unknown>, extras?: { signal?: AbortSignal }) => Promise<unknown>;
}) => Promise<void> | void;

export type ModelContextLike = {
	registerTool: RegisterTool;
	getTools?: () => Promise<Array<{ name: string }>>;
};

export type WebmcpSource = 'native' | 'polyfill' | 'none';

export async function ensureModelContext(): Promise<{
	context: ModelContextLike | null;
	source: WebmcpSource;
}> {
	const native = getDocumentContext();
	if (native && typeof native.registerTool === 'function') {
		return { context: native, source: 'native' };
	}
	try {
		const { initializeWebMCPPolyfill } = await import('@mcp-b/webmcp-polyfill');
		initializeWebMCPPolyfill();
	} catch {
		return { context: null, source: 'none' };
	}
	const polyfilled = getDocumentContext();
	if (polyfilled && typeof polyfilled.registerTool === 'function') {
		return { context: polyfilled, source: 'polyfill' };
	}
	return { context: null, source: 'none' };
}

function getDocumentContext(): ModelContextLike | null {
	if (typeof document === 'undefined') return null;
	const ctx = (document as unknown as { modelContext?: ModelContextLike }).modelContext;
	return ctx ?? null;
}

function asRecord(input: unknown): Record<string, unknown> {
	if (input && typeof input === 'object' && !Array.isArray(input)) {
		return input as Record<string, unknown>;
	}
	return {};
}

function asString(value: unknown): string {
	return typeof value === 'string' ? value : '';
}

export async function registerFafWebmcpTools(
	context: ModelContextLike,
	deps: ScoreDeps
): Promise<string[]> {
	await context.registerTool({
		name: 'score_faf',
		description: SCORE_FAF_DESCRIPTION,
		inputSchema: SCORE_FAF_SCHEMA,
		annotations: { readOnlyHint: true },
		execute: async (input, extras) => {
			const rec = asRecord(input);
			return runScoreFafSafe(
				{ yaml: asString(rec.yaml), url: asString(rec.url) },
				deps,
				extras?.signal
			);
		}
	});

	await context.registerTool({
		name: 'emit_agents_md',
		description: EMIT_AGENTS_DESCRIPTION,
		inputSchema: EMIT_AGENTS_SCHEMA,
		annotations: { readOnlyHint: true },
		execute: async (input) => {
			const rec = asRecord(input);
			const yaml = asString(rec.yaml);
			if (!yaml.trim()) {
				return { error: 'invalid_input', message: 'yaml is required' };
			}
			try {
				return emitAgentsMd(yaml);
			} catch (err) {
				return toToolError(err);
			}
		}
	});

	const listed = await listToolNames(context);
	if (!listed.includes('fill_6ws')) {
		await context.registerTool({
			name: 'fill_6ws',
			description: FILL_6WS_DESCRIPTION,
			inputSchema: FILL_6WS_SCHEMA,
			annotations: { readOnlyHint: true },
			execute: async (input) => {
				const rec = asRecord(input);
				const six: SixWs = {
					who: asString(rec.who),
					what: asString(rec.what),
					why: asString(rec.why),
					where: asString(rec.where),
					when: asString(rec.when),
					how: asString(rec.how)
				};
				return { yaml: fill6wsYaml(six) };
			}
		});
	}

	return listToolNames(context);
}

async function listToolNames(context: ModelContextLike): Promise<string[]> {
	if (typeof context.getTools !== 'function') return [...TOOL_NAMES];
	try {
		const tools = await context.getTools();
		return tools.map((t) => t.name);
	} catch {
		return [...TOOL_NAMES];
	}
}
