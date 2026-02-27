import { findLast } from "./internal/collection-native.js";

/**
 * Exposes `findLast` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `findLast`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * findLast()
 * // => undefined
 */
export { findLast };

export default findLast;
