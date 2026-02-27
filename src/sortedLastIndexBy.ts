import { sortedLastIndexBy } from "./internal/array-native.js";

/**
 * Exposes `sortedLastIndexBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `sortedLastIndexBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sortedLastIndexBy()
 * // => 0
 */
export { sortedLastIndexBy };

export default sortedLastIndexBy;
