import { clone } from "./internal/lang-native.js";

/**
 * Exposes `clone` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `clone`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * clone({ a: 1 })
 * // => { a: 1 }
 */
export { clone };

export default clone;
