import { invokeMap } from "./internal/collection-native.js";

/**
 * Exposes `invokeMap` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `invokeMap`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * invokeMap()
 * // => []
 */
export { invokeMap };

export default invokeMap;
