import { sortedIndex } from "./internal/array-native.js";

/**
 * Exposes `sortedIndex` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `sortedIndex`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sortedIndex(1)
 * // => undefined
 */
export { sortedIndex };

export default sortedIndex;
