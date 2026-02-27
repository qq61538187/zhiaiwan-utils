import { defaultsDeep } from "./internal/object-native.js";

/**
 * Exposes `defaultsDeep` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `defaultsDeep`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * defaultsDeep()
 * // => undefined
 */
export { defaultsDeep };

export default defaultsDeep;
