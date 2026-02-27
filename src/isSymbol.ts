import { isSymbol } from "./internal/lang-native.js";

/**
 * Exposes `isSymbol` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isSymbol`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isSymbol(1)
 * // => false
 */
export { isSymbol };

export default isSymbol;
