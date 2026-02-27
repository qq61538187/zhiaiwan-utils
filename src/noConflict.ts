import { utilsGlobalKey } from "./internal/instance-core.js";

const NO_CONFLICT_GLOBAL_KEY = utilsGlobalKey;
const NO_CONFLICT_PREVIOUS = (globalThis as Record<PropertyKey, unknown>)[
	NO_CONFLICT_GLOBAL_KEY
];

/**
 * Reverts the `_`-style global variable to its previous value.
 *
 * This method is primarily meaningful in global script/UMD scenarios.
 *
 * @since +0.1.0
 * @category Util
 * @param {unknown} [thisArg] Optional current utility object passed via `Function.call`.
 * @returns {unknown} Returns the current utility object.
 * @example
 *
 * const current = noConflict.call(globalThis.zhiaiwanUtils)
 * // => restores previous global and returns current object
 */
export function noConflict(this: unknown): unknown {
	const globalObject = globalThis as Record<PropertyKey, unknown>;
	const currentValue = this ?? globalObject[NO_CONFLICT_GLOBAL_KEY];
	if (globalObject[NO_CONFLICT_GLOBAL_KEY] === currentValue) {
		globalObject[NO_CONFLICT_GLOBAL_KEY] = NO_CONFLICT_PREVIOUS;
	}
	return currentValue;
}

export default noConflict;
