import { isEqualWith } from "./internal/lang-native.js";

/**
 * Exposes `isEqualWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isEqualWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isEqualWith(1)
 * // => false
 */
export { isEqualWith };

export default isEqualWith;
