import { isWeakMap } from "./internal/lang-native.js";

/**
 * Exposes `isWeakMap` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isWeakMap`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isWeakMap(1)
 * // => false
 */
export { isWeakMap };

export default isWeakMap;
