import { assignWith } from "./internal/object-native.js";

/**
 * Exposes `assignWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `assignWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * assignWith([1, 2, 3], (v) => v)
 * // => [ 1, name: '' ]
 */
export { assignWith };

export default assignWith;
