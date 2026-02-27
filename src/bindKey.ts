/**
 * Creates a function that invokes `object[key]` with bound `object` and prepended args.
 *
 * @since +0.1.0
 * @category Function
 * @param {TObject} object The object to bind as `this`.
 * @param {TKey} key The property key to resolve at call time.
 * @param {...unknown[]} partials Arguments prepended to future calls.
 * @returns {(...args: unknown[]) => unknown} Returns the bound invoker.
 * @example
 *
 * const obj = { x: 2, add(y: number) { return this.x + y } }
 * const f = bindKey(obj, 'add', 3)
 * f()
 * // => 5
 */
export function bindKey<
	TObject extends Record<PropertyKey, unknown>,
	TKey extends keyof TObject,
>(
	object: TObject,
	key: TKey,
	...partials: unknown[]
): (...args: unknown[]) => unknown {
	return (...args: unknown[]) => {
		const target = object[key];
		if (typeof target !== "function") {
			throw new TypeError("bindKey target is not a function");
		}
		return (target as (...fnArgs: unknown[]) => unknown).apply(object, [
			...partials,
			...args,
		]);
	};
}

export default bindKey;
