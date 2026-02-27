/**
 * Like `extend`, but accepts a customizer function.
 *
 * This method is an alias of `assignInWith`.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `extendWith`.
 * @returns {unknown} Returns the destination object.
 * @example
 *
 * extendWith({ a: 1 }, { a: 2 }, (obj, src) => obj ?? src)
 * // => { a: 1 }
 */
import { assignInWith } from "./assignInWith.js";

export const extendWith = assignInWith;

export default extendWith;
