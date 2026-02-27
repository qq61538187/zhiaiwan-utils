import { deburr } from "./internal/string-native.js";

/**
 * Exposes `deburr` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `deburr`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * deburr()
 * // => ''
 */
export { deburr };

export default deburr;
