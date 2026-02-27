import { isTypedArray } from "./internal/lang-native.js";

/**
 * Exposes `isTypedArray` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isTypedArray`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isTypedArray(1)
 * // => false
 */
export { isTypedArray };

export default isTypedArray;
