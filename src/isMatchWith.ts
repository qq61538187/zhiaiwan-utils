import { isMatchWith } from "./internal/lang-native.js";

/**
 * Exposes `isMatchWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isMatchWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isMatchWith([1, 2, 3], 2)
 * // => true
 */
export { isMatchWith };

export default isMatchWith;
