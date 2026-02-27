import { lt } from "./internal/lang-native.js";

/**
 * Exposes `lt` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `lt`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * lt(1, 3)
 * // => true
 */
export { lt };

export default lt;
