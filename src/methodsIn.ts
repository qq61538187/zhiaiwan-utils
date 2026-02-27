/**
 * Gets function property names of `object`, including inherited ones.
 *
 * This method is an alias of `functionsIn`.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `methodsIn`.
 * @returns {unknown} Returns the method names array.
 * @example
 *
 * methodsIn(Object.create({ a() {} }))
 * // => includes 'a'
 */
import { functionsIn } from "./functionsIn.js";

export const methodsIn = functionsIn;

export default methodsIn;
