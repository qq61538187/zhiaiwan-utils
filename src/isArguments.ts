import { isArguments } from "./internal/lang-native.js";

/**
 * Exposes `isArguments` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isArguments`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isArguments(1)
 * // => false
 */
export { isArguments };

export default isArguments;
