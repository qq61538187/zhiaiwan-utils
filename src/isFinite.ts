/**
 * Checks if `value` is a finite primitive number.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isFinite`.
 * @returns {unknown} Returns `true` when value is finite.
 * @example
 *
 * isFinite(3)
 * // => true
 */
import { isFinite as isFiniteFn } from "./internal/lang-native.js";

export { isFiniteFn as isFinite };

export default isFiniteFn;
