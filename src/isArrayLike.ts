import { isArrayLike } from "./internal/lang-native.js";

/**
 * Exposes `isArrayLike` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isArrayLike`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isArrayLike(1)
 * // => false
 */
export { isArrayLike };

export default isArrayLike;
