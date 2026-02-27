type Unary<TInput = never, TOutput = unknown> = (input: TInput) => TOutput;

type First<T extends readonly Unary[]> = T extends readonly [
	infer F,
	...(readonly Unary[]),
]
	? F
	: never;
type Last<T extends readonly Unary[]> = T extends readonly [
	...(readonly Unary[]),
	infer L,
]
	? L
	: never;

type IsComposable<Fns extends readonly Unary[]> = Fns extends readonly [
	infer Left extends Unary,
	infer Right extends Unary,
	...infer Rest extends Unary[],
]
	? ReturnType<Right> extends Parameters<Left>[0]
		? IsComposable<readonly [Right, ...Rest]>
		: false
	: true;

type FlowRightResult<Fns extends readonly Unary[]> = Fns extends readonly []
	? <T>(value: T) => T
	: (value: Parameters<Last<Fns>>[0]) => ReturnType<First<Fns>>;

/**
 * Creates a function that performs right-to-left function composition.
 *
 * When no function is provided, an identity function is returned.
 *
 * @since +0.1.0
 * @category Util
 * @param {Fns} fns The functions to compose from right to left.
 * @returns {IsComposable<Fns> extends true ? FlowRightResult<Fns> : never} Returns the composed function.
 * @example
 *
 * flowRight((n) => n * 2, (n) => n + 1)(3)
 * // => 8
 */
export function flowRight<const Fns extends readonly Unary[]>(
	...fns: Fns
): IsComposable<Fns> extends true ? FlowRightResult<Fns> : never;
export function flowRight(...fns: readonly Unary[]) {
	return (value: unknown) =>
		fns.reduceRight(
			(acc, fn) => (fn as (input: unknown) => unknown)(acc),
			value,
		);
}

export default flowRight;
