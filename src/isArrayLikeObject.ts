import { isArrayLikeObject } from "./internal/lang-native.js";

/**
 * Exposes `isArrayLikeObject` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isArrayLikeObject`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isArrayLikeObject(1)
 * // => false
 */
export { isArrayLikeObject };

export default isArrayLikeObject;
