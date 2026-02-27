import { isEqualCore } from "./equal-core.js";
import { toIterateeCore } from "./iteratee-core.js";
import { setAtPath } from "./path-core.js";

const toArray = <T>(value: readonly T[] | null | undefined): T[] =>
	Array.isArray(value) ? [...value] : [];

const binaryIndex = (
	array: readonly unknown[],
	value: unknown,
	retHighest = false,
): number => {
	let low = 0;
	let high = array.length;
	while (low < high) {
		const mid = (low + high) >>> 1;
		const computed = array[mid] as number | string;
		const target = value as number | string;
		if (computed < target || (retHighest && computed === target)) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}
	return high;
};

export const compact = <T>(
	array: readonly T[],
): Array<Exclude<T, false | 0 | "" | null | undefined>> =>
	toArray(array).filter(Boolean) as Array<
		Exclude<T, false | 0 | "" | null | undefined>
	>;

export const concat = <T>(
	array: readonly T[],
	...values: unknown[]
): unknown[] => {
	const result = toArray(array);
	for (const value of values) {
		if (Array.isArray(value)) {
			result.push(...value);
		} else {
			result.push(value as T);
		}
	}
	return result;
};

export const differenceBy = (
	array: readonly unknown[],
	values: readonly unknown[],
	iteratee: unknown,
): unknown[] => {
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	const excludes = new Set(values.map((v, i) => fn(v, i, values)));
	return toArray(array).filter(
		(item, index) => !excludes.has(fn(item, index, array)),
	);
};

export const differenceWith = (
	array: readonly unknown[],
	values: readonly unknown[],
	comparator: ((a: unknown, b: unknown) => boolean) | undefined,
): unknown[] => {
	const cmp = comparator ?? ((a, b) => isEqualCore(a, b));
	return toArray(array).filter((item) => !values.some((v) => cmp(item, v)));
};

export const drop = <T>(array: readonly T[], n = 1): T[] =>
	toArray(array).slice(Math.max(0, Math.trunc(n)));
export const dropRight = <T>(array: readonly T[], n = 1): T[] => {
	const list = toArray(array);
	return list.slice(0, Math.max(0, list.length - Math.max(0, Math.trunc(n))));
};
export const dropWhile = <T>(array: readonly T[], predicate: unknown): T[] => {
	const list = toArray(array);
	const fn = toIterateeCore<T, unknown>(predicate);
	let index = 0;
	while (index < list.length && fn(list[index], index, list)) {
		index += 1;
	}
	return list.slice(index);
};
export const dropRightWhile = <T>(
	array: readonly T[],
	predicate: unknown,
): T[] => {
	const list = toArray(array);
	const fn = toIterateeCore<T, unknown>(predicate);
	let index = list.length - 1;
	while (index >= 0 && fn(list[index], index, list)) {
		index -= 1;
	}
	return list.slice(0, index + 1);
};

export const fill = <T>(
	array: T[],
	value: unknown,
	start = 0,
	end = array.length,
): T[] => {
	array.fill(value as T, Math.trunc(start), Math.trunc(end));
	return array;
};

export const findIndex = <T>(
	array: readonly T[],
	predicate: unknown,
	fromIndex = 0,
): number => {
	const list = toArray(array);
	const fn = toIterateeCore<T, unknown>(predicate);
	for (
		let index = Math.max(0, Math.trunc(fromIndex));
		index < list.length;
		index += 1
	) {
		if (fn(list[index], index, list)) return index;
	}
	return -1;
};
export const findLastIndex = <T>(
	array: readonly T[],
	predicate: unknown,
	fromIndex?: number,
): number => {
	const list = toArray(array);
	const fn = toIterateeCore<T, unknown>(predicate);
	let index =
		fromIndex === undefined
			? list.length - 1
			: Math.min(list.length - 1, Math.trunc(fromIndex));
	for (; index >= 0; index -= 1) {
		if (fn(list[index], index, list)) return index;
	}
	return -1;
};

export const flattenDepth = (array: readonly unknown[], depth = 1): unknown[] =>
	toArray(array).flat(Math.max(0, Math.trunc(depth)));
export const fromPairs = (
	pairs: readonly (readonly [PropertyKey, unknown])[],
): Record<PropertyKey, unknown> => Object.fromEntries(toArray(pairs));
export const head = <T>(array: readonly T[]): T | undefined => array[0];
export const indexOf = <T>(
	array: readonly T[],
	value: T,
	fromIndex = 0,
): number => toArray(array).indexOf(value, Math.trunc(fromIndex));
export const initial = <T>(array: readonly T[]): T[] =>
	toArray(array).slice(0, -1);

export const intersectionBy = (
	array: readonly unknown[],
	values: readonly unknown[],
	iteratee: unknown,
): unknown[] => {
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	const set = new Set(values.map((v, i) => fn(v, i, values)));
	return toArray(array).filter((item, i) => set.has(fn(item, i, array)));
};
export const intersectionWith = (
	array: readonly unknown[],
	values: readonly unknown[],
	comparator: ((a: unknown, b: unknown) => boolean) | undefined,
): unknown[] => {
	const cmp = comparator ?? ((a, b) => isEqualCore(a, b));
	return toArray(array).filter((item) => values.some((v) => cmp(item, v)));
};

export const join = (array: readonly unknown[], separator = ","): string =>
	toArray(array).join(separator);
export const last = <T>(array: readonly T[]): T | undefined =>
	array.length === 0 ? undefined : array[array.length - 1];
export const lastIndexOf = <T>(
	array: readonly T[],
	value: T,
	fromIndex?: number,
): number => toArray(array).lastIndexOf(value, fromIndex);
export const nth = <T>(array: readonly T[], n = 0): T | undefined => {
	const list = toArray(array);
	const index = n < 0 ? list.length + n : n;
	return list[Math.trunc(index)];
};

export const pull = <T>(array: T[], ...values: T[]): T[] => {
	for (let index = array.length - 1; index >= 0; index -= 1) {
		if (values.includes(array[index])) array.splice(index, 1);
	}
	return array;
};
export const pullAll = <T>(array: T[], values: readonly T[]): T[] =>
	pull(array, ...toArray(values));
export const pullAllBy = <T>(
	array: T[],
	values: readonly T[],
	iteratee: unknown,
): T[] => {
	const fn = toIterateeCore<T, unknown>(iteratee);
	const set = new Set(values.map((v, i) => fn(v, i, values)));
	for (let index = array.length - 1; index >= 0; index -= 1) {
		if (set.has(fn(array[index], index, array))) array.splice(index, 1);
	}
	return array;
};
export const pullAllWith = <T>(
	array: T[],
	values: readonly T[],
	comparator: ((a: T, b: T) => boolean) | undefined,
): T[] => {
	const cmp = comparator ?? ((a, b) => isEqualCore(a, b));
	for (let index = array.length - 1; index >= 0; index -= 1) {
		if (values.some((v) => cmp(array[index], v))) array.splice(index, 1);
	}
	return array;
};
export const pullAt = <T>(array: T[], indexes: readonly number[]): T[] => {
	const sorted = [...indexes].map((n) => Math.trunc(n)).sort((a, b) => b - a);
	const removed: T[] = [];
	for (const index of sorted) {
		if (index >= 0 && index < array.length) {
			const [item] = array.splice(index, 1);
			removed.unshift(item);
		}
	}
	return removed;
};
export const remove = <T>(array: T[], predicate: unknown): T[] => {
	const fn = toIterateeCore<T, unknown>(predicate);
	const removed: T[] = [];
	for (let index = array.length - 1; index >= 0; index -= 1) {
		if (fn(array[index], index, array)) {
			removed.unshift(array[index]);
			array.splice(index, 1);
		}
	}
	return removed;
};

export const reverse = <T>(array: T[]): T[] => array.reverse();
export const slice = <T>(
	array: readonly T[],
	start?: number,
	end?: number,
): T[] => toArray(array).slice(start, end);

export const sortedIndex = (
	array: readonly unknown[],
	value: unknown,
): number => binaryIndex(array, value);
export const sortedIndexBy = (
	array: readonly unknown[],
	value: unknown,
	iteratee: unknown,
): number => {
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	const transformed = toArray(array).map((item, index) =>
		fn(item, index, array),
	);
	return binaryIndex(transformed, fn(value, 0, [value]));
};
export const sortedIndexOf = (
	array: readonly unknown[],
	value: unknown,
): number => {
	const index = binaryIndex(array, value);
	return array[index] === value ? index : -1;
};
export const sortedLastIndex = (
	array: readonly unknown[],
	value: unknown,
): number => binaryIndex(array, value, true);
export const sortedLastIndexBy = (
	array: readonly unknown[],
	value: unknown,
	iteratee: unknown,
): number => {
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	const transformed = toArray(array).map((item, index) =>
		fn(item, index, array),
	);
	return binaryIndex(transformed, fn(value, 0, [value]), true);
};
export const sortedLastIndexOf = (
	array: readonly unknown[],
	value: unknown,
): number => {
	const index = binaryIndex(array, value, true) - 1;
	return array[index] === value ? index : -1;
};
export const sortedUniq = (array: readonly unknown[]): unknown[] =>
	toArray(array).filter(
		(item, index, list) => index === 0 || !isEqualCore(item, list[index - 1]),
	);
export const sortedUniqBy = (
	array: readonly unknown[],
	iteratee: unknown,
): unknown[] => {
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	const result: unknown[] = [];
	let prev: unknown = Symbol("init");
	for (let index = 0; index < array.length; index += 1) {
		const current = fn(array[index], index, array);
		if (index === 0 || !isEqualCore(prev, current)) {
			result.push(array[index]);
			prev = current;
		}
	}
	return result;
};

export const tail = <T>(array: readonly T[]): T[] => toArray(array).slice(1);
export const take = <T>(array: readonly T[], n = 1): T[] =>
	toArray(array).slice(0, Math.max(0, Math.trunc(n)));
export const takeRight = <T>(array: readonly T[], n = 1): T[] => {
	const list = toArray(array);
	const count = Math.max(0, Math.trunc(n));
	return count === 0 ? [] : list.slice(-count);
};
export const takeWhile = <T>(array: readonly T[], predicate: unknown): T[] => {
	const list = toArray(array);
	const fn = toIterateeCore<T, unknown>(predicate);
	const result: T[] = [];
	for (let index = 0; index < list.length; index += 1) {
		if (!fn(list[index], index, list)) break;
		result.push(list[index]);
	}
	return result;
};
export const takeRightWhile = <T>(
	array: readonly T[],
	predicate: unknown,
): T[] => {
	const list = toArray(array);
	const fn = toIterateeCore<T, unknown>(predicate);
	let index = list.length - 1;
	while (index >= 0 && fn(list[index], index, list)) index -= 1;
	return list.slice(index + 1);
};

export const unionBy = (...args: unknown[]): unknown[] => {
	if (args.length === 0) return [];
	const iteratee = args[args.length - 1];
	const arrays = args
		.slice(0, -1)
		.filter(Array.isArray) as readonly unknown[][];
	const flattened = arrays.flatMap((array) => toArray(array));
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	const seen = new Set<unknown>();
	const result: unknown[] = [];
	for (const [index, item] of flattened.entries()) {
		const key = fn(item, index, flattened);
		if (!seen.has(key)) {
			seen.add(key);
			result.push(item);
		}
	}
	return result;
};
export const unionWith = (...args: unknown[]): unknown[] => {
	if (args.length === 0) return [];
	const maybeComparator = args[args.length - 1];
	const comparator =
		typeof maybeComparator === "function"
			? (maybeComparator as (a: unknown, b: unknown) => boolean)
			: (a: unknown, b: unknown) => isEqualCore(a, b);
	const arrays = (
		typeof maybeComparator === "function" ? args.slice(0, -1) : args
	).filter(Array.isArray) as readonly unknown[][];
	const result: unknown[] = [];
	for (const item of arrays.flatMap((array) => toArray(array))) {
		if (!result.some((existing) => comparator(existing, item)))
			result.push(item);
	}
	return result;
};

export const uniq = (array: readonly unknown[]): unknown[] => [
	...new Set(array),
];
export const uniqBy = (
	array: readonly unknown[],
	iteratee: unknown,
): unknown[] => {
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	const seen = new Set<unknown>();
	const result: unknown[] = [];
	for (let index = 0; index < array.length; index += 1) {
		const item = array[index];
		const key = fn(item, index, array);
		if (!seen.has(key)) {
			seen.add(key);
			result.push(item);
		}
	}
	return result;
};
export const uniqWith = (
	array: readonly unknown[],
	comparator: ((a: unknown, b: unknown) => boolean) | undefined,
): unknown[] => {
	const cmp = comparator ?? ((a, b) => isEqualCore(a, b));
	const result: unknown[] = [];
	for (const item of array) {
		if (!result.some((existing) => cmp(existing, item))) result.push(item);
	}
	return result;
};

export const unzip = (array: readonly unknown[][]): unknown[][] => {
	const maxLength = Math.max(0, ...array.map((item) => item.length));
	return Array.from({ length: maxLength }, (_, index) =>
		array.map((group) => group[index]),
	);
};
export const unzipWith = (
	array: readonly unknown[][],
	iteratee?: (...args: unknown[]) => unknown,
): unknown[] => {
	const grouped = unzip(array);
	if (!iteratee) return grouped;
	return grouped.map((group) => iteratee(...group));
};

export const without = (
	array: readonly unknown[],
	...values: unknown[]
): unknown[] =>
	toArray(array).filter(
		(item) => !values.some((value) => isEqualCore(item, value)),
	);

const xorInternal = (
	comparator: (a: unknown, b: unknown) => boolean,
	...arrays: Array<readonly unknown[]>
): unknown[] => {
	const flattened = arrays.flatMap((array) => toArray(array));
	const result: unknown[] = [];
	for (const item of flattened) {
		const count = flattened.filter((candidate) =>
			comparator(candidate, item),
		).length;
		if (
			count % 2 === 1 &&
			!result.some((candidate) => comparator(candidate, item))
		) {
			result.push(item);
		}
	}
	return result;
};
export const xor = (...arrays: readonly unknown[][]): unknown[] =>
	xorInternal((a, b) => isEqualCore(a, b), ...arrays);
export const xorBy = (...args: unknown[]): unknown[] => {
	if (args.length === 0) return [];
	const iteratee = args[args.length - 1];
	const arrays = args
		.slice(0, -1)
		.filter(Array.isArray) as readonly unknown[][];
	const fn = toIterateeCore<unknown, unknown>(iteratee);
	return xorInternal(
		(a, b) => isEqualCore(fn(a, 0, [a]), fn(b, 0, [b])),
		...arrays,
	);
};
export const xorWith = (...args: unknown[]): unknown[] => {
	if (args.length === 0) return [];
	const maybeComparator = args[args.length - 1];
	const comparator =
		typeof maybeComparator === "function"
			? (maybeComparator as (a: unknown, b: unknown) => boolean)
			: (a: unknown, b: unknown) => isEqualCore(a, b);
	const arrays = (
		typeof maybeComparator === "function" ? args.slice(0, -1) : args
	).filter(Array.isArray) as readonly unknown[][];
	return xorInternal(comparator, ...arrays);
};

export const zip = (...arrays: readonly unknown[][]): unknown[][] =>
	unzip(arrays);
export const zipObject = (
	props: readonly PropertyKey[],
	values: readonly unknown[],
): Record<PropertyKey, unknown> =>
	Object.fromEntries(props.map((prop, index) => [prop, values[index]]));
export const zipObjectDeep = (
	props: readonly (PropertyKey | string)[],
	values: readonly unknown[],
): Record<PropertyKey, unknown> => {
	const result: Record<PropertyKey, unknown> = {};
	for (let index = 0; index < props.length; index += 1) {
		setAtPath(result, props[index] as string, values[index]);
	}
	return result;
};
export const zipWith = (
	...args: [
		...(readonly unknown[][]),
		((...args: unknown[]) => unknown) | undefined,
	]
): unknown[] => {
	const iteratee = args[args.length - 1];
	const arrays =
		typeof iteratee === "function"
			? (args.slice(0, -1) as readonly unknown[][])
			: (args as readonly unknown[][]);
	const grouped = unzip(arrays);
	if (typeof iteratee !== "function") return grouped;
	return grouped.map((group) => iteratee(...group));
};
