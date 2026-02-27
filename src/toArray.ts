import { toArray } from "./internal/lang-native.js";

/**
 * Exposes `toArray` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toArray`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toArray({ a: 1, b: 2 })
 * // => [ 1, 2 ]
 */
export { toArray };

export default toArray;
