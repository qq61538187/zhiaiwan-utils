/**
 * Checks if `value` is `NaN`.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isNaN`.
 * @returns {unknown} Returns `true` when value is `NaN`.
 * @example
 *
 * isNaN(Number.NaN)
 * // => true
 */
import { isNaN as isNaNFn } from "./internal/lang-native.js";

export { isNaNFn as isNaN };

export default isNaNFn;
