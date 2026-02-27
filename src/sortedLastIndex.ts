import { sortedLastIndex } from "./internal/array-native.js";

/**
 * Exposes `sortedLastIndex` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `sortedLastIndex`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sortedLastIndex(1)
 * // => undefined
 */
export { sortedLastIndex };

export default sortedLastIndex;
