import { cloneWith } from "./internal/lang-native.js";

/**
 * Exposes `cloneWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `cloneWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * cloneWith({ a: 1 }, (value) => (Array.isArray(value) ? value.slice() : undefined))
 * // => { a: 1 }
 */
export { cloneWith };

export default cloneWith;
