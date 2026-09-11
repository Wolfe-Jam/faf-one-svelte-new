export {};

/** WebMCP declarative attributes (declarative-api-explainer.md). */
declare module 'svelte/elements' {
	interface HTMLFormAttributes {
		toolname?: string;
		tooldescription?: string;
		toolautosubmit?: boolean;
	}
	interface HTMLInputAttributes {
		toolparamdescription?: string;
	}
}

declare global {
	interface SubmitEvent {
		readonly agentInvoked?: boolean;
		respondWith?(agentResponse: Promise<unknown>): void;
	}

	interface Document {
		modelContext?: {
			registerTool: (
				tool: {
					name: string;
					description: string;
					inputSchema: object;
					annotations?: { readOnlyHint?: boolean };
					execute: (
						input: Record<string, unknown>,
						extras?: { signal?: AbortSignal }
					) => Promise<unknown>;
				},
				options?: { signal?: AbortSignal }
			) => Promise<void> | void;
			getTools?: (options?: { fromOrigins?: string[] }) => Promise<Array<{ name: string }>>;
			executeTool?: (tool: unknown, input: string) => Promise<unknown>;
		};
	}
}
