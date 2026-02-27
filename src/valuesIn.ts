import { valuesIn } from "./internal/object-native.js";

/**
 * Exposes `valuesIn` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `valuesIn`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * valuesIn()
 * // => []
 */
export { valuesIn };

export default valuesIn;
