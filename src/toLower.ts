import { toLower } from "./internal/string-native.js";

/**
 * Exposes `toLower` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `toLower`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toLower()
 * // => ''
 */
export { toLower };

export default toLower;
