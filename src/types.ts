export type AnyFunction = (...args: never[]) => unknown;
export type Primitive =
	| string
	| number
	| boolean
	| bigint
	| symbol
	| null
	| undefined;
export type PathSegment = string | number | symbol;
export type PropertyPath = string | readonly PathSegment[];
export type FirstArgument<T extends AnyFunction> =
	Parameters<T> extends [infer A, ...(readonly unknown[])] ? A : unknown;

export type Collection<TValue> = readonly TValue[] | Record<string, TValue>;
export type Iteratee<TValue, TResult = unknown> =
	| ((
			value: TValue,
			key: string | number,
			collection: Collection<TValue>,
	  ) => TResult)
	| readonly [PropertyPath, unknown]
	| Partial<TValue>
	| keyof TValue
	| string;

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

export interface ThrottledFunction<T extends AnyFunction> {
	(
		this: ThisParameterType<T>,
		...args: Parameters<T>
	): ReturnType<T> | undefined;
	cancel: () => void;
	flush: () => ReturnType<T> | undefined;
}
