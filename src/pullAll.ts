import { pullAll } from "./internal/array-native.js";

/**
 * Exposes `pullAll` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `pullAll`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * pullAll(1)
 * // => 1
 */
export { pullAll };

export default pullAll;
