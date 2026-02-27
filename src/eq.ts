import { eq } from "./internal/lang-native.js";

/**
 * Exposes `eq` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `eq`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * eq(1, 1)
 * // => true
 */
export { eq };

export default eq;
