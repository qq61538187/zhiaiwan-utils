import { functions } from "./internal/object-native.js";

/**
 * Exposes `functions` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `functions`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * functions(1)
 * // => []
 */
export { functions };

export default functions;
