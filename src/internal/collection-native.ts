import { toCollectionEntries } from "./collection-core.js";
import { toIterateeCore } from "./iteratee-core.js";
import { invokeAtPath } from "./path-core.js";

export const forEach = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratee: (
		value: T,
		key: string | number,
		collection: readonly T[] | Record<string, T>,
	) => unknown,
): readonly T[] | Record<string, T> | null | undefined => {
	if (collection == null) return collection;
	for (const [key, value] of toCollectionEntries(collection)) {
		if (iteratee(value, key, collection) === false) break;
	}
	return collection;
};

export const forEachRight = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratee: (
		value: T,
		key: string | number,
		collection: readonly T[] | Record<string, T>,
	) => unknown,
): readonly T[] | Record<string, T> | null | undefined => {
	if (collection == null) return collection;
	const entries = toCollectionEntries(collection).reverse();
	for (const [key, value] of entries) {
		if (iteratee(value, key, collection) === false) break;
	}
	return collection;
};

export const find = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	predicate: unknown,
	fromIndex = 0,
): T | undefined => {
	if (collection == null) return undefined;
	const fn = toIterateeCore<T, unknown>(predicate);
	const entries = toCollectionEntries(collection).slice(
		Math.max(0, Math.trunc(fromIndex)),
	);
	for (const [key, value] of entries) {
		if (fn(value, key, collection)) return value;
	}
	return undefined;
};

export const findLast = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	predicate: unknown,
): T | undefined => {
	if (collection == null) return undefined;
	const fn = toIterateeCore<T, unknown>(predicate);
	const entries = toCollectionEntries(collection).reverse();
	for (const [key, value] of entries) {
		if (fn(value, key, collection)) return value;
	}
	return undefined;
};

export const flatMap = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratee: unknown,
): unknown[] => {
	if (collection == null) return [];
	const fn = toIterateeCore<T, unknown>(iteratee);
	return toCollectionEntries(collection).flatMap(([key, value]) => {
		const mapped = fn(value, key, collection);
		return Array.isArray(mapped) ? mapped : [mapped];
	});
};
export const flatMapDepth = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratee: unknown,
	depth = 1,
): unknown[] =>
	flatMap(collection, iteratee).flat(Math.max(0, Math.trunc(depth)));
export const flatMapDeep = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratee: unknown,
): unknown[] => flatMap(collection, iteratee).flat(Infinity);

export const invokeMap = (
	collection: readonly unknown[] | Record<string, unknown> | null | undefined,
	path: string | readonly (string | number | symbol)[],
	...args: unknown[]
): unknown[] => {
	if (collection == null) return [];
	return toCollectionEntries(collection).map(([, value]) =>
		invokeAtPath(value, path, args),
	);
};

export const partition = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	predicate: unknown,
): [T[], T[]] => {
	const matched: T[] = [];
	const unmatched: T[] = [];
	if (collection == null) return [matched, unmatched];
	const fn = toIterateeCore<T, unknown>(predicate);
	for (const [key, value] of toCollectionEntries(collection)) {
		if (fn(value, key, collection)) matched.push(value);
		else unmatched.push(value);
	}
	return [matched, unmatched];
};

export const reduceRight = <T, TResult>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratee: (
		accumulator: TResult,
		value: T,
		key: string | number,
		collection: readonly T[] | Record<string, T>,
	) => TResult,
	accumulator: TResult,
): TResult => {
	if (collection == null) return accumulator;
	let current = accumulator;
	for (const [key, value] of toCollectionEntries(collection).reverse()) {
		current = iteratee(current, value, key, collection);
	}
	return current;
};

export const reject = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	predicate: unknown,
): T[] => {
	const [_, unmatched] = partition(collection, predicate);
	return unmatched;
};

export const sample = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
): T | undefined => {
	const entries = collection == null ? [] : toCollectionEntries(collection);
	if (entries.length === 0) return undefined;
	const index = Math.floor(Math.random() * entries.length);
	return entries[index][1];
};
export const sampleSize = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	n = 1,
): T[] => shuffle(collection).slice(0, Math.max(0, Math.trunc(n)));

export const shuffle = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
): T[] => {
	const array = (
		collection == null
			? []
			: toCollectionEntries(collection).map(([, value]) => value)
	) as T[];
	for (let i = array.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const sortBy = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratees: unknown | unknown[],
): T[] => {
	const list = (
		collection == null
			? []
			: toCollectionEntries(collection).map(([, value]) => value)
	) as T[];
	const iterateeList = Array.isArray(iteratees) ? iteratees : [iteratees];
	return [...list].sort((left, right) => {
		for (const iteratee of iterateeList) {
			const fn = toIterateeCore<T, unknown>(iteratee);
			const leftValue = fn(left, 0, list) as number | string;
			const rightValue = fn(right, 0, list) as number | string;
			if (leftValue > rightValue) return 1;
			if (leftValue < rightValue) return -1;
		}
		return 0;
	});
};

export const orderBy = <T>(
	collection: readonly T[] | Record<string, T> | null | undefined,
	iteratees: unknown[] = [],
	orders: Array<"asc" | "desc"> = [],
): T[] => {
	const list = (
		collection == null
			? []
			: toCollectionEntries(collection).map(([, value]) => value)
	) as T[];
	return [...list].sort((left, right) => {
		for (let index = 0; index < iteratees.length; index += 1) {
			const iteratee = iteratees[index];
			const order = orders[index] ?? "asc";
			const fn = toIterateeCore<T, unknown>(iteratee);
			const leftValue = fn(left, 0, list) as number | string;
			const rightValue = fn(right, 0, list) as number | string;
			if (leftValue === rightValue) continue;
			const result = leftValue > rightValue ? 1 : -1;
			return order === "desc" ? -result : result;
		}
		return 0;
	});
};
