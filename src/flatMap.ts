import { flatMap } from "./internal/collection-native.js";

/**
 * Exposes `flatMap` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `flatMap`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * flatMap()
 * // => []
 */
export { flatMap };

export default flatMap;
