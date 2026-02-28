import { assignInWith } from "./internal/object-native.js";

/**
 * Assigns own and inherited enumerable string-keyed properties with a customizer.
 *
 * @since +0.1.0
 * @category Object
 * @param {object} object The destination object.
 * @param {object} source The source object.
 * @param {Function} customizer The value customizer.
 * @returns {object} Returns the mutated destination object.
 * @example
 *
 * const source = Object.create({ inherited: 1 })
 * source.own = 2
 * assignInWith({}, source, (_objValue, srcValue) =>
 *   typeof srcValue === "number" ? srcValue * 2 : srcValue
 * )
 * // => { inherited: 2, own: 4 }
 *
 * assignInWith({ safe: true }, { __proto__: { polluted: "x" } }, () => undefined)
 * // => { safe: true }
 */
export { assignInWith };

export default assignInWith;
