import { isWeakSet } from "./internal/lang-native.js";

/**
 * Exposes `isWeakSet` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isWeakSet`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isWeakSet(1)
 * // => false
 */
export { isWeakSet };

export default isWeakSet;
