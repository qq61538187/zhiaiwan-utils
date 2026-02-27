import { sortedIndexBy } from "./internal/array-native.js";

/**
 * Exposes `sortedIndexBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `sortedIndexBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sortedIndexBy()
 * // => 0
 */
export { sortedIndexBy };

export default sortedIndexBy;
