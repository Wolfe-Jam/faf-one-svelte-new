/* tslint:disable */
/* eslint-disable */
/**
 * Score FAF YAML content using Mk4 engine — returns JSON
 */
export function score_faf(yaml: string): string;
/**
 * Compile YAML to FAFb binary — returns Uint8Array
 */
export function compile_fafb(yaml: string): Uint8Array;
/**
 * Score a FAFb binary file — returns JSON string
 */
export function score_fafb(bytes: Uint8Array): string;
/**
 * Validate FAF YAML content — returns true if parseable as YAML mapping
 */
export function validate_faf(yaml: string): boolean;
/**
 * Get FAFb file info (header + section metadata, no content) — returns JSON string
 */
export function fafb_info(bytes: Uint8Array): string;
/**
 * Score FAF YAML with enterprise (33-slot) tier — returns JSON
 */
export function score_faf_enterprise(yaml: string): string;
/**
 * Get SDK version
 */
export function sdk_version(): string;
/**
 * Decompile FAFb binary to JSON (full content) — returns JSON string
 */
export function decompile_fafb(bytes: Uint8Array): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly compile_fafb: (a: number, b: number) => [number, number, number, number];
  readonly decompile_fafb: (a: number, b: number) => [number, number, number, number];
  readonly fafb_info: (a: number, b: number) => [number, number, number, number];
  readonly score_faf: (a: number, b: number) => [number, number, number, number];
  readonly score_faf_enterprise: (a: number, b: number) => [number, number, number, number];
  readonly score_fafb: (a: number, b: number) => [number, number, number, number];
  readonly sdk_version: () => [number, number];
  readonly validate_faf: (a: number, b: number) => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
