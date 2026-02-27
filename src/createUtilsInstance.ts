import { createUtilsInstance as createUtilsInstanceCore } from "./internal/instance-core.js";

/**
 * Creates a standalone utility instance object from `context`.
 *
 * @since +0.1.0
 * @category Util
 * @param {Record<PropertyKey, unknown>} [context={}] Seed methods/properties for the instance.
 * @returns {Record<string, unknown>} Returns the created utility instance.
 * @example
 *
 * const custom = createUtilsInstance({ version: '1.0.0' })
 * // => { version: '1.0.0', ...chain helpers }
 */
export function createUtilsInstance(
	context: Record<PropertyKey, unknown> = {},
): Record<string, unknown> {
	return createUtilsInstanceCore(context);
}

export default createUtilsInstance;
