/**
 * Converts HTML entities in `string` back to characters.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `unescape`.
 * @returns {unknown} Returns the unescaped string.
 * @example
 *
 * unescape('a&amp;b')
 * // => 'a&b'
 */
import { unescape as unescapeFn } from "./internal/string-native.js";

export { unescapeFn as unescape };

export default unescapeFn;
