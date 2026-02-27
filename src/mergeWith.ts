import { mergeWith } from "./internal/object-native.js";

/**
 * Exposes `mergeWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `mergeWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * mergeWith([1, 2, 3], (v) => v)
 * // => [ 1, name: '' ]
 */
export { mergeWith };

export default mergeWith;
