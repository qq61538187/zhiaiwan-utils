import { flatMapDepth } from "./internal/collection-native.js";

/**
 * Exposes `flatMapDepth` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `flatMapDepth`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * flatMapDepth()
 * // => []
 */
export { flatMapDepth };

export default flatMapDepth;
