/**
 * Converts `value` to a string.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toString`.
 * @returns {unknown} Returns the string result.
 * @example
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
import { toString as toStringFn } from "./internal/lang-native.js";

export { toStringFn as toString };

export default toStringFn;
