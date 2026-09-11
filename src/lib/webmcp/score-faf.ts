import { ToolError, toToolError } from './errors';
import { mapScoreResult, type ScoreResult } from './map-score';
import { assertAllowedUrl, assertYamlSize, type FetchText } from './yaml-url';

export type ScoreInput = {
	yaml?: string;
	url?: string;
};

export type ScoreDeps = {
	scoreYaml: (yaml: string) => string;
	fetchText: FetchText;
};

function wrapKernelError(err: unknown): ToolError {
	const mapped = toToolError(err);
	return new ToolError(mapped.error, mapped.message);
}

export async function resolveYaml(
	input: ScoreInput,
	deps: Pick<ScoreDeps, 'fetchText'>,
	signal?: AbortSignal
): Promise<string> {
	const yaml = typeof input.yaml === 'string' ? input.yaml : '';
	const url = typeof input.url === 'string' ? input.url.trim() : '';
	if (yaml.trim()) {
		assertYamlSize(yaml);
		return yaml;
	}
	if (url) {
		const allowed = assertAllowedUrl(url);
		return deps.fetchText(allowed, signal);
	}
	throw new ToolError('invalid_input', 'require yaml or url');
}

export async function runScoreFaf(
	input: ScoreInput,
	deps: ScoreDeps,
	signal?: AbortSignal
): Promise<ScoreResult> {
	const yaml = await resolveYaml(input, deps, signal);
	let raw: string;
	try {
		raw = deps.scoreYaml(yaml);
	} catch (err) {
		throw wrapKernelError(err);
	}
	let parsed: unknown;
	try {
		parsed = JSON.parse(raw);
	} catch {
		throw new ToolError('score_failed', 'kernel did not return JSON');
	}
	try {
		return mapScoreResult(parsed, yaml);
	} catch (err) {
		throw wrapKernelError(err);
	}
}

export async function runScoreFafSafe(
	input: ScoreInput,
	deps: ScoreDeps,
	signal?: AbortSignal
): Promise<ScoreResult | { error: string; message: string }> {
	try {
		return await runScoreFaf(input, deps, signal);
	} catch (err) {
		return toToolError(err);
	}
}
