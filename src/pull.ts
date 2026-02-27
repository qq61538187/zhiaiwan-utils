import { pull } from "./internal/array-native.js";

/**
 * Exposes `pull` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `pull`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * pull(1)
 * // => 1
 */
export { pull };

export default pull;
