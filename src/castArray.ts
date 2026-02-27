import { castArray } from "./internal/lang-native.js";

/**
 * Exposes `castArray` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `castArray`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * castArray(1)
 * // => [ 1 ]
 */
export { castArray };

export default castArray;
