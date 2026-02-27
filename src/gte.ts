import { gte } from "./internal/lang-native.js";

/**
 * Exposes `gte` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `gte`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * gte(3, 3)
 * // => true
 */
export { gte };

export default gte;
