import { setWith } from "./internal/object-native.js";

/**
 * Exposes `setWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `setWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * setWith([1, 2, 3])
 * // => [ 1, 2, 3, undefined: undefined ]
 */
export { setWith };

export default setWith;
