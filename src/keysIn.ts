import { keysIn } from "./internal/object-native.js";

/**
 * Exposes `keysIn` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `keysIn`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * keysIn()
 * // => []
 */
export { keysIn };

export default keysIn;
