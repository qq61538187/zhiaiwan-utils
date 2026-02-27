import { isEqual } from "./internal/lang-native.js";

/**
 * Exposes `isEqual` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isEqual`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isEqual(1)
 * // => false
 */
export { isEqual };

export default isEqual;
