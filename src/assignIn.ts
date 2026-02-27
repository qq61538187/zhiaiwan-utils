import { assignIn } from "./internal/object-native.js";

/**
 * Exposes `assignIn` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `assignIn`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * assignIn()
 * // => undefined
 */
export { assignIn };

export default assignIn;
