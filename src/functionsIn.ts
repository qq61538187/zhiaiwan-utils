import { functionsIn } from "./internal/object-native.js";

/**
 * Exposes `functionsIn` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `functionsIn`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * functionsIn()
 * // => []
 */
export { functionsIn };

export default functionsIn;
