import { sample } from "./internal/collection-native.js";

/**
 * Exposes `sample` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `sample`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sample()
 * // => undefined
 */
export { sample };

export default sample;
