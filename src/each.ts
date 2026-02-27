import { forEach } from "./forEach.js";

/**
 * Alias of forEach. Thin wrapper around method each/forEach.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `each`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * each([1, 2], (v) => v)
 * // => [1, 2]
 */
export const each = forEach;
export default each;
