import { without } from "./internal/array-native.js";

/**
 * Exposes `without` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `without`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * without()
 * // => []
 */
export { without };

export default without;
