import { invoke } from "./internal/object-native.js";

/**
 * Exposes `invoke` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `invoke`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * invoke()
 * // => undefined
 */
export { invoke };

export default invoke;
