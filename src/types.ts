export type AnyFunction = (...args: never[]) => unknown;
export type FirstArgument<T extends AnyFunction> =
	Parameters<T> extends [infer A, ...(readonly unknown[])] ? A : unknown;

export interface DebouncedFunction<T extends AnyFunction> {
	(this: ThisParameterType<T>, ...args: Parameters<T>): void;
	cancel: () => void;
	flush: () => ReturnType<T> | undefined;
}

export interface MemoizedFunction<
	T extends AnyFunction,
	TKey = FirstArgument<T>,
> {
	(this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T>;
	cache: Map<TKey, ReturnType<T>>;
}
