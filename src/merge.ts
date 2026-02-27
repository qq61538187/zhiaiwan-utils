import { merge } from "./internal/object-native.js";

/**
 * Exposes `merge` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `merge`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * merge()
 * // => undefined
 */
export { merge };

export default merge;
