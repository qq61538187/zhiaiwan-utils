import { forEach } from "./internal/collection-native.js";

/**
 * Exposes `forEach` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `forEach`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * forEach()
 * // => undefined
 */
export { forEach };

export default forEach;
