import { sortedIndexOf } from "./internal/array-native.js";

/**
 * Exposes `sortedIndexOf` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `sortedIndexOf`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sortedIndexOf(1)
 * // => undefined
 */
export { sortedIndexOf };

export default sortedIndexOf;
