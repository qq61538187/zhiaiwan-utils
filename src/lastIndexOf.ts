import { lastIndexOf } from "./internal/array-native.js";

/**
 * Exposes `lastIndexOf` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `lastIndexOf`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * lastIndexOf()
 * // => -1
 */
export { lastIndexOf };

export default lastIndexOf;
