import { isElement } from "./internal/lang-native.js";

/**
 * Exposes `isElement` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isElement`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isElement(1)
 * // => false
 */
export { isElement };

export default isElement;
