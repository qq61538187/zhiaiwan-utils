import { reverse } from "./internal/array-native.js";

/**
 * Exposes `reverse` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `reverse`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * reverse([1, 2, 3])
 * // => [ 3, 2, 1 ]
 */
export { reverse };

export default reverse;
