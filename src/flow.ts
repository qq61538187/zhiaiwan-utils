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

type IsFlowable<Fns extends readonly Unary[]> = Fns extends readonly [
	infer Left extends Unary,
	infer Right extends Unary,
	...infer Rest extends Unary[],
]
	? ReturnType<Left> extends Parameters<Right>[0]
		? IsFlowable<readonly [Right, ...Rest]>
		: false
	: true;

type FlowResult<Fns extends readonly Unary[]> = Fns extends readonly []
	? <T>(value: T) => T
	: (value: Parameters<First<Fns>>[0]) => ReturnType<Last<Fns>>;

/**
 * Creates a function that performs left-to-right function composition.
 *
 * When no function is provided, an identity function is returned.
 *
 * @since +0.1.0
 * @category Function
 * @param {Fns} fns The functions to invoke from left to right.
 * @returns {IsFlowable<Fns> extends true ? FlowResult<Fns> : never} Returns the composed function.
 * @example
 *
 * flow((n) => n + 1, (n) => n * 2)(3)
 * // => 8
 */
export function flow<const Fns extends readonly Unary[]>(
	...fns: Fns
): IsFlowable<Fns> extends true ? FlowResult<Fns> : never;
export function flow(...fns: readonly Unary[]) {
	return (value: unknown) =>
		fns.reduce((acc, fn) => (fn as (input: unknown) => unknown)(acc), value);
}

export default flow;
