/**
 * Assigns own and inherited enumerable properties of source objects to `object`.
 *
 * This method is an alias of `assignIn`.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `extend`.
 * @returns {unknown} Returns the destination object.
 * @example
 *
 * extend({ a: 1 }, { b: 2 })
 * // => { a: 1, b: 2 }
 */
import { assignIn } from "./assignIn.js";

export const extend = assignIn;

export default extend;
