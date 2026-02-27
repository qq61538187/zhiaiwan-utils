/**
 * Converts `string` to an integer of the specified radix.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `parseInt`.
 * @returns {unknown} Returns the parsed integer.
 * @example
 *
 * parseInt('08', 10)
 * // => 8
 */
import { parseInt as parseIntFn } from "./internal/string-native.js";

export { parseIntFn as parseInt };

export default parseIntFn;
