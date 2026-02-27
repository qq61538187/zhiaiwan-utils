/**
 * Converts characters `&`, `<`, `>`, `"`, and `'` in `string` to HTML entities.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `escape`.
 * @returns {unknown} Returns the escaped string.
 * @example
 *
 * escape('a&b')
 * // => 'a&amp;b'
 */
import { escape as escapeFn } from "./internal/string-native.js";

export { escapeFn as escape };

export default escapeFn;
