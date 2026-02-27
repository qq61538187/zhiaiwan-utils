import { cloneDeep } from "./internal/lang-native.js";

/**
 * Exposes `cloneDeep` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `cloneDeep`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * cloneDeep({ a: { b: 1 } })
 * // => { a: { b: 1 } }
 */
export { cloneDeep };

export default cloneDeep;
