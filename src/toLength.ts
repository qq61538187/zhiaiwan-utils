import { toLength } from "./internal/lang-native.js";

/**
 * Exposes `toLength` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toLength`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toLength(Infinity)
 * // => 4294967295
 */
export { toLength };

export default toLength;
