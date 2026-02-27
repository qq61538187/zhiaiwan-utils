import { transform } from "./internal/object-native.js";

/**
 * Exposes `transform` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `transform`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * transform(1)
 * // => {}
 */
export { transform };

export default transform;
