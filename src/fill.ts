import { fill } from "./internal/array-native.js";

/**
 * Exposes `fill` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `fill`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * fill([1, 2, 3])
 * // => [ undefined, undefined, undefined ]
 */
export { fill };

export default fill;
