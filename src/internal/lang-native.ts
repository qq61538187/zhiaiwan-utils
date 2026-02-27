import { isEqualCore } from "./equal-core.js";

const MAX_ARRAY_LENGTH = 4294967295;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

const objectToString = Object.prototype.toString;

const isObjectLike = (value: unknown): value is Record<PropertyKey, unknown> =>
	typeof value === "object" && value !== null;

const baseToNumber = (value: unknown): number => {
	if (typeof value === "number") {
		return value;
	}
	if (typeof value === "symbol") {
		return Number.NaN;
	}
	if (isObjectLike(value)) {
		const primitive =
			typeof value.valueOf === "function" ? value.valueOf() : value;
		return baseToNumber(primitive);
	}
	if (typeof value === "string") {
		const trimmed = value.trim();
		if (trimmed === "") {
			return 0;
		}
		return Number(trimmed);
	}
	return Number(value);
};

const cloneDeepInternal = (
	value: unknown,
	customizer?: (value: unknown) => unknown,
	visited: WeakMap<object, unknown> = new WeakMap(),
): unknown => {
	if (customizer) {
		const customized = customizer(value);
		if (customized !== undefined) {
			return customized;
		}
	}
	if (!isObjectLike(value)) {
		return value;
	}
	if (visited.has(value)) {
		return visited.get(value);
	}
	if (Array.isArray(value)) {
		const result: unknown[] = [];
		visited.set(value, result);
		for (const item of value) {
			result.push(cloneDeepInternal(item, customizer, visited));
		}
		return result;
	}
	if (value instanceof Date) {
		return new Date(value.getTime());
	}
	if (value instanceof Map) {
		const mapped = new Map();
		visited.set(value, mapped);
		for (const [k, v] of value) {
			mapped.set(
				cloneDeepInternal(k, customizer, visited),
				cloneDeepInternal(v, customizer, visited),
			);
		}
		return mapped;
	}
	if (value instanceof Set) {
		const set = new Set();
		visited.set(value, set);
		for (const item of value) {
			set.add(cloneDeepInternal(item, customizer, visited));
		}
		return set;
	}
	if (ArrayBuffer.isView(value)) {
		return new (value.constructor as new (source: unknown) => unknown)(value);
	}
	const result = Object.create(Object.getPrototypeOf(value)) as Record<
		PropertyKey,
		unknown
	>;
	visited.set(value, result);
	for (const key of Reflect.ownKeys(value)) {
		result[key] = cloneDeepInternal(
			(value as Record<PropertyKey, unknown>)[key],
			customizer,
			visited,
		);
	}
	return result;
};

export const castArray = (...args: unknown[]): unknown[] => {
	if (args.length === 0) {
		return [];
	}
	const value = args[0];
	return Array.isArray(value) ? (value as unknown[]) : [value];
};

export const clone = (value: unknown): unknown => {
	if (!isObjectLike(value)) {
		return value;
	}
	if (Array.isArray(value)) {
		return [...value];
	}
	if (value instanceof Date) {
		return new Date(value.getTime());
	}
	if (value instanceof Map) {
		return new Map(value);
	}
	if (value instanceof Set) {
		return new Set(value);
	}
	if (ArrayBuffer.isView(value)) {
		return new (value.constructor as new (source: unknown) => unknown)(value);
	}
	return { ...(value as Record<PropertyKey, unknown>) };
};

export const cloneDeep = (value: unknown): unknown => cloneDeepInternal(value);

export const cloneWith = (
	value: unknown,
	customizer?: (value: unknown) => unknown,
): unknown => {
	if (customizer) {
		const customized = customizer(value);
		if (customized !== undefined) {
			return customized;
		}
	}
	return clone(value);
};

export const cloneDeepWith = (
	value: unknown,
	customizer?: (value: unknown) => unknown,
): unknown => cloneDeepInternal(value, customizer);

export const conformsTo = (
	object: Record<PropertyKey, unknown>,
	source: Record<PropertyKey, (value: unknown) => boolean>,
): boolean => {
	for (const [key, predicate] of Object.entries(source)) {
		if (typeof predicate !== "function") {
			return false;
		}
		if (!predicate(object[key])) {
			return false;
		}
	}
	return true;
};

export const eq = (left: unknown, right: unknown): boolean =>
	left === right ||
	(Number.isNaN(left as number) && Number.isNaN(right as number));
export const gt = (value: unknown, other: unknown): boolean =>
	(value as number | string) > (other as number | string);
export const gte = (value: unknown, other: unknown): boolean =>
	(value as number | string) >= (other as number | string);
export const lt = (value: unknown, other: unknown): boolean =>
	(value as number | string) < (other as number | string);
export const lte = (value: unknown, other: unknown): boolean =>
	(value as number | string) <= (other as number | string);

export const isArguments = (value: unknown): boolean =>
	objectToString.call(value) === "[object Arguments]";
export const isArray = Array.isArray;
export const isArrayBuffer = (value: unknown): boolean =>
	value instanceof ArrayBuffer;
export const isArrayLike = (value: unknown): boolean =>
	value != null &&
	typeof (value as { length?: unknown }).length === "number" &&
	(value as { length: number }).length >= 0 &&
	(value as { length: number }).length <= MAX_SAFE_INTEGER &&
	!isFunction(value);
export const isArrayLikeObject = (value: unknown): boolean =>
	isObjectLike(value) && isArrayLike(value);
export const isBoolean = (value: unknown): boolean =>
	value === true ||
	value === false ||
	objectToString.call(value) === "[object Boolean]";
export const isBuffer = (value: unknown): boolean =>
	typeof Buffer !== "undefined" && Buffer.isBuffer(value);
export const isDate = (value: unknown): boolean => value instanceof Date;
export const isElement = (value: unknown): boolean =>
	isObjectLike(value) && (value as { nodeType?: unknown }).nodeType === 1;
export const isEqual = (left: unknown, right: unknown): boolean =>
	isEqualCore(left, right);
export const isEqualWith = (
	left: unknown,
	right: unknown,
	customizer?: (leftValue: unknown, rightValue: unknown) => boolean | undefined,
): boolean => {
	if (customizer) {
		const customized = customizer(left, right);
		if (customized !== undefined) {
			return customized;
		}
	}
	return isEqualCore(left, right);
};
export const isError = (value: unknown): boolean =>
	value instanceof Error ||
	/\[object .*Error\]/.test(objectToString.call(value));
const isFiniteFn = (value: unknown): boolean =>
	typeof value === "number" && Number.isFinite(value);
export const isFunction = (value: unknown): boolean =>
	typeof value === "function";
export const isInteger = (value: unknown): boolean => Number.isInteger(value);
export const isLength = (value: unknown): boolean =>
	typeof value === "number" &&
	value >= 0 &&
	value % 1 === 0 &&
	value <= MAX_SAFE_INTEGER;
export const isMap = (value: unknown): boolean => value instanceof Map;
export const isMatch = (
	object: Record<PropertyKey, unknown>,
	source: Record<PropertyKey, unknown>,
): boolean => {
	for (const [key, expected] of Object.entries(source)) {
		if (!isEqualCore(object[key], expected)) {
			return false;
		}
	}
	return true;
};
export const isMatchWith = (
	object: Record<PropertyKey, unknown>,
	source: Record<PropertyKey, unknown>,
	customizer?: (
		objValue: unknown,
		srcValue: unknown,
		key: string,
		objectValue: Record<PropertyKey, unknown>,
		sourceValue: Record<PropertyKey, unknown>,
	) => boolean | undefined,
): boolean => {
	for (const [key, expected] of Object.entries(source)) {
		const current = object[key];
		if (customizer) {
			const customized = customizer(current, expected, key, object, source);
			if (customized !== undefined) {
				if (!customized) {
					return false;
				}
				continue;
			}
		}
		if (!isEqualCore(current, expected)) {
			return false;
		}
	}
	return true;
};
const isNaNFn = (value: unknown): boolean =>
	typeof value === "number" && Number.isNaN(value);
export const isNative = (value: unknown): boolean =>
	typeof value === "function" &&
	/\{\s*\[native code\]\s*\}/.test(Function.prototype.toString.call(value));
export const isNull = (value: unknown): value is null => value === null;
export const isObject = (value: unknown): boolean =>
	value !== null && (typeof value === "object" || typeof value === "function");
export const isObjectLikeFn = isObjectLike;
export const isRegExp = (value: unknown): boolean => value instanceof RegExp;
export const isSafeInteger = (value: unknown): boolean =>
	Number.isSafeInteger(value);
export const isSet = (value: unknown): boolean => value instanceof Set;
export const isSymbol = (value: unknown): boolean =>
	typeof value === "symbol" || objectToString.call(value) === "[object Symbol]";
export const isTypedArray = (value: unknown): boolean =>
	ArrayBuffer.isView(value) && !(value instanceof DataView);
export const isUndefined = (value: unknown): value is undefined =>
	value === undefined;
export const isWeakMap = (value: unknown): boolean => value instanceof WeakMap;
export const isWeakSet = (value: unknown): boolean => value instanceof WeakSet;

export const toArray = (value: unknown): unknown[] => {
	if (value == null) {
		return [];
	}
	if (Array.isArray(value)) {
		return [...value];
	}
	if (typeof value === "string") {
		return Array.from(value);
	}
	if (value instanceof Map) {
		return Array.from(value.values());
	}
	if (value instanceof Set) {
		return Array.from(value.values());
	}
	if (isArrayLike(value)) {
		return Array.from(value as ArrayLike<unknown>);
	}
	if (isObjectLike(value)) {
		return Object.values(value);
	}
	return [];
};

export const toNumber = (value: unknown): number => baseToNumber(value);

export const toFinite = (value: unknown): number => {
	const n = toNumber(value);
	if (Number.isNaN(n)) {
		return 0;
	}
	if (n === Number.POSITIVE_INFINITY) {
		return MAX_SAFE_INTEGER;
	}
	if (n === Number.NEGATIVE_INFINITY) {
		return -MAX_SAFE_INTEGER;
	}
	return n;
};

export const toInteger = (value: unknown): number => {
	const n = toFinite(value);
	if (n === 0) {
		return 0;
	}
	return n < 0 ? Math.ceil(n) : Math.floor(n);
};

export const toLength = (value: unknown): number => {
	const n = toInteger(value);
	if (n < 0) {
		return 0;
	}
	if (n > MAX_ARRAY_LENGTH) {
		return MAX_ARRAY_LENGTH;
	}
	return n;
};

export const toPlainObject = (
	value: Record<PropertyKey, unknown> | null | undefined,
): Record<PropertyKey, unknown> => {
	if (value == null) {
		return {};
	}
	const result: Record<PropertyKey, unknown> = {};
	for (const key in value) {
		result[key] = value[key];
	}
	return result;
};

export const toSafeInteger = (value: unknown): number => {
	const n = toInteger(value);
	if (n > MAX_SAFE_INTEGER) {
		return MAX_SAFE_INTEGER;
	}
	if (n < -MAX_SAFE_INTEGER) {
		return -MAX_SAFE_INTEGER;
	}
	return n;
};

const toStringFn = (value: unknown): string => {
	if (value == null) {
		return "";
	}
	if (typeof value === "string") {
		return value;
	}
	if (Array.isArray(value)) {
		return value.map((item) => toStringFn(item)).join(",");
	}
	if (typeof value === "symbol") {
		return value.toString();
	}
	const result = String(value);
	return result === "0" && 1 / (value as number) === -Infinity ? "-0" : result;
};

export { isFiniteFn as isFinite, isNaNFn as isNaN, toStringFn as toString };
