import { intersectionBy } from "./internal/array-native.js";

/**
 * Exposes `intersectionBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `intersectionBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * intersectionBy([1, 2], [2, 3])
 * // => [ 1, 2 ]
 */
export { intersectionBy };

export default intersectionBy;
