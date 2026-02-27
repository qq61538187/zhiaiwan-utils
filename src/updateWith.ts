import { updateWith } from "./internal/object-native.js";

/**
 * Exposes `updateWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `updateWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * updateWith([1, 2], [2, 3], (a, b) => a + b)
 * // => [ 1, 2, [ <3 empty items>, NaN ] ]
 */
export { updateWith };

export default updateWith;
