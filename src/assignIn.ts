import { assignIn } from "./internal/object-native.js";

/**
 * Assigns own and inherited enumerable string-keyed properties from source objects.
 *
 * @since +0.1.0
 * @category Object
 * @param {object} object The destination object.
 * @param {...unknown[]} sources The source objects.
 * @returns {object} Returns the mutated destination object.
 * @example
 *
 * const target = { a: 1 }
 * const source = Object.create({ inherited: 2 })
 * source.b = 3
 * assignIn(target, source)
 * // => { a: 1, b: 3, inherited: 2 }
 *
 * assignIn({ safe: true }, { __proto__: { polluted: "x" } })
 * // => { safe: true }
 */
export { assignIn };

export default assignIn;
