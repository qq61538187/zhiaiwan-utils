/**
 * Creates an array of own and inherited enumerable string-keyed `[key, value]` pairs.
 *
 * This method is an alias of `toPairsIn`.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `entriesIn`.
 * @returns {unknown} Returns the key-value pairs array.
 * @example
 *
 * entriesIn(Object.create({ a: 1 }))
 * // => includes ['a', 1]
 */
import { toPairsIn } from "./toPairsIn.js";

export const entriesIn = toPairsIn;

export default entriesIn;
