import { template } from "./internal/string-native.js";

/**
 * Exposes `template` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `template`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * template()
 * // => [Function (anonymous)]
 */
export { template };

export default template;
