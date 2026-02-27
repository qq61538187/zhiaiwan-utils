import { toNumber } from "./internal/lang-native.js";

/**
 * Exposes `toNumber` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toNumber`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toNumber("3.2")
 * // => 3.2
 */
export { toNumber };

export default toNumber;
