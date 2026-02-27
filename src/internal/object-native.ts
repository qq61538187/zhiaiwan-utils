import { toIterateeCore } from "./iteratee-core.js";
import {
	getAtPath,
	hasAtPath,
	invokeAtPath,
	setAtPath,
	toPathCore,
} from "./path-core.js";

const isObjectLike = (value: unknown): value is Record<PropertyKey, unknown> =>
	typeof value === "object" && value !== null;

const cloneShallow = (value: unknown): unknown => {
	if (Array.isArray(value)) {
		return [...value];
	}
	if (isObjectLike(value)) {
		return { ...(value as Record<PropertyKey, unknown>) };
	}
	return value;
};

const mergeChild = (
	objValue: unknown,
	srcValue: unknown,
	customizer?: (
		objValue: unknown,
		srcValue: unknown,
		key: PropertyKey,
		object: Record<PropertyKey, unknown>,
		sourceObject: Record<PropertyKey, unknown>,
	) => unknown,
): unknown => {
	if (Array.isArray(objValue) && Array.isArray(srcValue)) {
		const output = [...objValue];
		for (let index = 0; index < srcValue.length; index += 1) {
			const sourceItem = srcValue[index];
			const objectItem = output[index];
			if (isObjectLike(objectItem) && isObjectLike(sourceItem)) {
				output[index] = mergeDeep(
					objectItem as Record<PropertyKey, unknown>,
					sourceItem as Record<PropertyKey, unknown>,
					customizer,
				);
			} else if (sourceItem !== undefined) {
				output[index] = cloneShallow(sourceItem);
			}
		}
		return output;
	}
	if (isObjectLike(objValue) && isObjectLike(srcValue)) {
		return mergeDeep(
			objValue as Record<PropertyKey, unknown>,
			srcValue as Record<PropertyKey, unknown>,
			customizer,
		);
	}
	if (Array.isArray(srcValue)) {
		return srcValue.map((item) => cloneShallow(item));
	}
	if (isObjectLike(srcValue)) {
		return mergeDeep({}, srcValue as Record<PropertyKey, unknown>, customizer);
	}
	return srcValue;
};

const mergeDeep = (
	target: Record<PropertyKey, unknown>,
	source: Record<PropertyKey, unknown>,
	customizer?: (
		objValue: unknown,
		srcValue: unknown,
		key: PropertyKey,
		object: Record<PropertyKey, unknown>,
		sourceObject: Record<PropertyKey, unknown>,
	) => unknown,
): Record<PropertyKey, unknown> => {
	for (const key of Reflect.ownKeys(source)) {
		const srcValue = source[key];
		const objValue = target[key];
		if (customizer) {
			const customized = customizer(objValue, srcValue, key, target, source);
			if (customized !== undefined) {
				target[key] = customized;
				continue;
			}
		}
		target[key] = mergeChild(objValue, srcValue, customizer);
	}
	return target;
};

export const assignIn = <T extends object>(
	object: T,
	...sources: unknown[]
): T & Record<PropertyKey, unknown> => {
	for (const source of sources) {
		if (!isObjectLike(source)) continue;
		for (const key in source) {
			(object as Record<PropertyKey, unknown>)[key] = source[key];
		}
	}
	return object as T & Record<PropertyKey, unknown>;
};

export const assignWith = <T extends object>(
	object: T,
	source: Record<PropertyKey, unknown>,
	customizer?: (
		objValue: unknown,
		srcValue: unknown,
		key: PropertyKey,
		object: T,
		source: Record<PropertyKey, unknown>,
	) => unknown,
): T => {
	for (const key of Reflect.ownKeys(source)) {
		const current = (object as Record<PropertyKey, unknown>)[key];
		const value = source[key];
		const customized = customizer?.(current, value, key, object, source);
		(object as Record<PropertyKey, unknown>)[key] =
			customized === undefined ? value : customized;
	}
	return object;
};

export const assignInWith = <T extends object>(
	object: T,
	source: Record<PropertyKey, unknown>,
	customizer?: (
		objValue: unknown,
		srcValue: unknown,
		key: PropertyKey,
		object: T,
		source: Record<PropertyKey, unknown>,
	) => unknown,
): T => {
	for (const key in source) {
		const current = (object as Record<PropertyKey, unknown>)[key];
		const value = source[key];
		const customized = customizer?.(current, value, key, object, source);
		(object as Record<PropertyKey, unknown>)[key] =
			customized === undefined ? value : customized;
	}
	return object;
};

export const create = (
	prototype: object | null,
	properties?: PropertyDescriptorMap,
): Record<PropertyKey, unknown> =>
	(properties
		? Object.create(prototype, properties)
		: Object.create(prototype)) as Record<PropertyKey, unknown>;

export const defaultsDeep = <T extends object>(
	object: T,
	...sources: unknown[]
): T => {
	const apply = (
		target: Record<PropertyKey, unknown>,
		source: Record<PropertyKey, unknown>,
	): Record<PropertyKey, unknown> => {
		for (const key of Reflect.ownKeys(source)) {
			const srcValue = source[key];
			const objValue = target[key];
			if (objValue === undefined) {
				target[key] = srcValue;
				continue;
			}
			if (isObjectLike(objValue) && isObjectLike(srcValue)) {
				apply(objValue, srcValue);
			}
		}
		return target;
	};
	for (const source of sources) {
		if (isObjectLike(source))
			apply(object as Record<PropertyKey, unknown>, source);
	}
	return object;
};

export const findLastKey = (
	object: Record<string, unknown> | null | undefined,
	predicate: unknown,
): string | undefined => {
	if (!object) return undefined;
	const fn = toIterateeCore<unknown, unknown>(predicate);
	const keys = Object.keys(object).reverse();
	for (const key of keys) {
		if (fn(object[key], key, object)) return key;
	}
	return undefined;
};

export const forIn = <T extends object>(
	object: T,
	iteratee: (value: unknown, key: string, object: T) => unknown,
): T => {
	for (const key in object) {
		if (
			iteratee((object as Record<string, unknown>)[key], key, object) === false
		)
			break;
	}
	return object;
};

export const forInRight = <T extends object>(
	object: T,
	iteratee: (value: unknown, key: string, object: T) => unknown,
): T => {
	const keys: string[] = [];
	for (const key in object) keys.push(key);
	for (const key of keys.reverse()) {
		if (
			iteratee((object as Record<string, unknown>)[key], key, object) === false
		)
			break;
	}
	return object;
};

export const forOwn = <T extends object>(
	object: T,
	iteratee: (value: unknown, key: string, object: T) => unknown,
): T => {
	for (const key of Object.keys(object as Record<string, unknown>)) {
		if (
			iteratee((object as Record<string, unknown>)[key], key, object) === false
		)
			break;
	}
	return object;
};

export const forOwnRight = <T extends object>(
	object: T,
	iteratee: (value: unknown, key: string, object: T) => unknown,
): T => {
	for (const key of Object.keys(object as Record<string, unknown>).reverse()) {
		if (
			iteratee((object as Record<string, unknown>)[key], key, object) === false
		)
			break;
	}
	return object;
};

export const functions = (object: Record<string, unknown>): string[] =>
	Object.keys(object).filter((key) => typeof object[key] === "function");
export const functionsIn = (object: Record<string, unknown>): string[] => {
	const result: string[] = [];
	for (const key in object) {
		if (typeof object[key] === "function") result.push(key);
	}
	return result;
};

export const invertBy = (
	object: Record<string, unknown>,
	iteratee?: (value: unknown) => PropertyKey,
): Record<PropertyKey, string[]> => {
	const fn = iteratee ?? ((value: unknown) => String(value));
	const result: Record<PropertyKey, string[]> = {};
	for (const [key, value] of Object.entries(object)) {
		const groupedKey = fn(value);
		if (!result[groupedKey]) result[groupedKey] = [];
		result[groupedKey].push(key);
	}
	return result;
};

export const invoke = (
	object: unknown,
	path: string | readonly (string | number | symbol)[],
	...args: unknown[]
): unknown => invokeAtPath(object, path, args);

export const keysIn = (
	object: Record<string, unknown> | null | undefined,
): string[] => {
	if (!object) return [];
	const result: string[] = [];
	for (const key in object) result.push(key);
	return result;
};

export const merge = <T extends object>(
	object: T,
	...sources: Array<Record<PropertyKey, unknown>>
): T => {
	for (const source of sources) {
		mergeDeep(object as Record<PropertyKey, unknown>, source);
	}
	return object;
};

export const mergeWith = <T extends object>(
	object: T,
	source: Record<PropertyKey, unknown>,
	customizer?: (
		objValue: unknown,
		srcValue: unknown,
		key: PropertyKey,
		object: Record<PropertyKey, unknown>,
		source: Record<PropertyKey, unknown>,
	) => unknown,
): T => {
	mergeDeep(object as Record<PropertyKey, unknown>, source, customizer);
	return object;
};

export const setWith = (
	object: Record<PropertyKey, unknown>,
	path: string | readonly (string | number | symbol)[],
	value: unknown,
	customizer?: (
		nsValue: unknown,
		key: string | number | symbol,
		nsObject: unknown,
	) => unknown,
): Record<PropertyKey, unknown> => {
	if (customizer) {
		const segments = toPathCore(path);
		let current: unknown = object;
		for (let index = 0; index < segments.length - 1; index += 1) {
			const key = segments[index];
			if (!isObjectLike(current)) break;
			if (!hasAtPath(current, [key])) {
				(current as Record<PropertyKey, unknown>)[key] = customizer(
					undefined,
					key,
					current,
				);
			}
			current = (current as Record<PropertyKey, unknown>)[key];
		}
	}
	return setAtPath(object, path, value);
};

export const toPairs = (
	object: Record<PropertyKey, unknown>,
): Array<[string, unknown]> => Object.entries(object);
export const toPairsIn = (
	object: Record<string, unknown>,
): Array<[string, unknown]> => {
	const result: Array<[string, unknown]> = [];
	for (const key in object) result.push([key, object[key]]);
	return result;
};

export const transform = <T extends object, TResult extends object>(
	object: T,
	iteratee: (
		result: TResult,
		value: unknown,
		key: string,
		object: T,
	) => unknown,
	accumulator?: TResult,
): TResult => {
	const result =
		accumulator ??
		(Array.isArray(object) ? ([] as unknown as TResult) : ({} as TResult));
	for (const [key, value] of Object.entries(
		object as Record<string, unknown>,
	)) {
		if (iteratee(result, value, key, object) === false) break;
	}
	return result;
};

export const update = (
	object: Record<PropertyKey, unknown>,
	path: string | readonly (string | number | symbol)[],
	updater: (value: unknown) => unknown,
): Record<PropertyKey, unknown> => {
	const current = getAtPath(object, path);
	return setAtPath(object, path, updater(current));
};

export const updateWith = (
	object: Record<PropertyKey, unknown>,
	path: string | readonly (string | number | symbol)[],
	updater: (value: unknown) => unknown,
	customizer?: (
		nsValue: unknown,
		key: string | number | symbol,
		nsObject: unknown,
	) => unknown,
): Record<PropertyKey, unknown> => {
	if (customizer && !hasAtPath(object, path)) {
		setWith(object, path, undefined, customizer);
	}
	return update(object, path, updater);
};

export const valuesIn = (
	object: Record<string, unknown> | null | undefined,
): unknown[] =>
	keysIn(object).map((key) => (object as Record<string, unknown>)[key]);
