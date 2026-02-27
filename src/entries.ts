/**
 * Creates an array of own enumerable string-keyed `[key, value]` pairs.
 *
 * This method is an alias of `toPairs`.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `entries`.
 * @returns {unknown} Returns the key-value pairs array.
 * @example
 *
 * entries({ a: 1, b: 2 })
 * // => [['a', 1], ['b', 2]]
 */
import { toPairs } from "./toPairs.js";

export const entries = toPairs;

export default entries;
