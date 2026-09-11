/** Structured tool errors. Tools return these objects; they do not throw unnamed exceptions. */

export class ToolError extends Error {
	readonly error: string;

	constructor(error: string, message: string) {
		super(message);
		this.name = 'ToolError';
		this.error = error;
	}

	toJSON(): { error: string; message: string } {
		return { error: this.error, message: this.message };
	}
}

export type ToolErrorObject = { error: string; message: string };

export function toToolError(err: unknown): ToolErrorObject {
	if (err instanceof ToolError) return err.toJSON();
	const message = messageOf(err);
	if (/yaml parse/i.test(message) || /invalid yaml/i.test(message)) {
		return { error: 'invalid_yaml', message };
	}
	return { error: 'score_failed', message };
}

export function messageOf(err: unknown): string {
	if (typeof err === 'string' && err.trim()) return err;
	if (err instanceof Error && err.message) return err.message;
	if (err && typeof err === 'object' && 'message' in err) {
		const m = (err as { message: unknown }).message;
		if (typeof m === 'string' && m.trim()) return m;
	}
	return 'unknown error';
}
