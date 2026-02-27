/**
 * Gets the function property names of `object`.
 *
 * This method is an alias of `functions`.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `methods`.
 * @returns {unknown} Returns the method names array.
 * @example
 *
 * methods({ a() {}, b: 1 })
 * // => ['a']
 */
import { functions } from "./functions.js";

export const methods = functions;

export default methods;
