import { update } from "./internal/object-native.js";

/**
 * Exposes `update` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `update`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * update([1, 2], [2, 3], (a, b) => a + b)
 * // => [ 1, 2, [ <3 empty items>, NaN ] ]
 */
export { update };

export default update;
