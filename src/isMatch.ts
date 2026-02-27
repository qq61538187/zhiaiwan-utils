import { isMatch } from "./internal/lang-native.js";

/**
 * Exposes `isMatch` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isMatch`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isMatch([1, 2, 3], 2)
 * // => true
 */
export { isMatch };

export default isMatch;
