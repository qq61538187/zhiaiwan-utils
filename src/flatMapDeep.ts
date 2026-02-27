import { flatMapDeep } from "./internal/collection-native.js";

/**
 * Exposes `flatMapDeep` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `flatMapDeep`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * flatMapDeep()
 * // => []
 */
export { flatMapDeep };

export default flatMapDeep;
