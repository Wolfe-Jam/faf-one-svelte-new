import { ToolError } from './errors';
import init, { score_faf } from './kernel/faf_wasm_sdk.js';

let ready = false;

export async function initKernel(): Promise<void> {
	if (ready) return;
	await init();
	ready = true;
}

export function isKernelReady(): boolean {
	return ready;
}

export function scoreYaml(yaml: string): string {
	if (!ready) {
		throw new ToolError('kernel_not_ready', 'WASM scoring kernel is not initialized');
	}
	return score_faf(yaml);
}
