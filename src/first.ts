import { head } from "./head.js";

/**
 * Alias of head. Thin wrapper around method first/head.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `first`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * first([1, 2, 3])
 * // => 1
 */
export const first = head;
export default first;
