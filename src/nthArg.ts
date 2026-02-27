/**
 * Creates a function that gets the argument at index `n`.
 *
 * If `n` is negative, the nth argument from the end is returned.
 *
 * @since +0.1.0
 * @category Util
 * @param {number} [n=0] The index of the argument to return.
 * @returns {(...args: TArgs) => TArgs[number] | undefined} Returns the new pass-through function.
 * @example
 *
 * nthArg(1)("a", "b", "c")
 * // => 'b'
 */
export function nthArg(n = 0) {
	const index = Math.trunc(n);
	return <TArgs extends readonly unknown[]>(
		...args: TArgs
	): TArgs[number] | undefined => {
		const resolvedIndex = index < 0 ? args.length + index : index;
		return args[resolvedIndex];
	};
}

export default nthArg;
