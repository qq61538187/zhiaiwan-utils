import { conformsTo } from "./internal/lang-native.js";

/**
 * Exposes `conformsTo` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `conformsTo`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * conformsTo({ a: 1 }, { a: (v) => v === 1 })
 * // => true
 */
export { conformsTo };

export default conformsTo;
