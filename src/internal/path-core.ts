import type { PathSegment, PropertyPath } from "../types.js";

const PATH_REGEX = /[^.[\]]+|\[(?:(-?\d+)|(["'])(.*?)\2)\]/g;

const toPathSegment = (value: string): PathSegment => {
	if (value === "") {
		return "";
	}
	const numeric = Number(value);
	return Number.isInteger(numeric) && String(numeric) === value
		? numeric
		: value;
};

const isIndex = (segment: PathSegment): boolean =>
	typeof segment === "number" ||
	(typeof segment === "string" && /^\d+$/.test(segment));

const isUnsafeSegment = (segment: PathSegment): boolean =>
	segment === "__proto__" ||
	segment === "constructor" ||
	segment === "prototype";

export const toPathCore = (path: PropertyPath): PathSegment[] => {
	if (Array.isArray(path)) {
		return [...path];
	}
	const result: PathSegment[] = [];
	String(path).replace(
		PATH_REGEX,
		(
			match: string,
			numberMatch: string,
			quote: string,
			quotedValue: string,
		) => {
			if (quote) {
				result.push(quotedValue);
			} else if (numberMatch !== undefined) {
				result.push(Number(numberMatch));
			} else {
				result.push(toPathSegment(match));
			}
			return match;
		},
	);
	return result;
};

export const getAtPath = <TDefault = undefined>(
	object: unknown,
	path: PropertyPath,
	defaultValue?: TDefault,
): unknown | TDefault => {
	const segments = toPathCore(path);
	let current = object as Record<PropertyKey, unknown> | null | undefined;
	for (const segment of segments) {
		if (isUnsafeSegment(segment)) {
			return defaultValue as TDefault;
		}
		if (current == null) {
			return defaultValue as TDefault;
		}
		current = current[segment as PropertyKey] as
			| Record<PropertyKey, unknown>
			| null
			| undefined;
	}
	return current === undefined ? (defaultValue as TDefault) : current;
};

export const hasAtPath = (object: unknown, path: PropertyPath): boolean => {
	const segments = toPathCore(path);
	if (segments.length === 0) {
		return false;
	}
	let current = object as Record<PropertyKey, unknown> | null | undefined;
	for (const segment of segments) {
		if (isUnsafeSegment(segment)) {
			return false;
		}
		if (current == null || !Object.hasOwn(current, segment as PropertyKey)) {
			return false;
		}
		current = current[segment as PropertyKey] as
			| Record<PropertyKey, unknown>
			| null
			| undefined;
	}
	return true;
};

export const setAtPath = <T extends Record<PropertyKey, unknown>>(
	object: T,
	path: PropertyPath,
	value: unknown,
): T => {
	const segments = toPathCore(path);
	if (segments.length === 0) {
		return object;
	}
	let current: Record<PropertyKey, unknown> = object;
	for (let index = 0; index < segments.length; index += 1) {
		const segment = segments[index] as PropertyKey;
		if (isUnsafeSegment(segment as PathSegment)) {
			return object;
		}
		if (index === segments.length - 1) {
			current[segment] = value;
			break;
		}
		const existing = current[segment];
		if (existing !== null && typeof existing === "object") {
			current = existing as Record<PropertyKey, unknown>;
			continue;
		}
		const nextSegment = segments[index + 1];
		const nextValue = isIndex(nextSegment) ? [] : {};
		current[segment] = nextValue;
		current = nextValue as Record<PropertyKey, unknown>;
	}
	return object;
};

export const unsetAtPath = (
	object: Record<PropertyKey, unknown>,
	path: PropertyPath,
): void => {
	const segments = toPathCore(path);
	if (segments.length === 0) {
		return;
	}
	let current: Record<PropertyKey, unknown> | undefined = object;
	for (let index = 0; index < segments.length - 1; index += 1) {
		const segment = segments[index] as PropertyKey;
		if (isUnsafeSegment(segment as PathSegment)) {
			return;
		}
		const next = current[segment];
		if (next === null || typeof next !== "object") {
			return;
		}
		current = next as Record<PropertyKey, unknown>;
	}
	const last = segments[segments.length - 1];
	if (isUnsafeSegment(last)) {
		return;
	}
	if (current) {
		if (Array.isArray(current) && isIndex(last)) {
			current.splice(Number(last), 1);
		} else {
			delete current[last as PropertyKey];
		}
	}
};

export const invokeAtPath = (
	object: unknown,
	path: PropertyPath,
	args: readonly unknown[],
): unknown => {
	const segments = toPathCore(path);
	let current = object as Record<PropertyKey, unknown> | null | undefined;
	for (let index = 0; index < segments.length; index += 1) {
		if (current == null) {
			return undefined;
		}
		const segment = segments[index] as PropertyKey;
		if (isUnsafeSegment(segment as PathSegment)) {
			return undefined;
		}
		const next = current[segment];
		if (index === segments.length - 1) {
			if (typeof next !== "function") {
				return undefined;
			}
			return (next as (...params: readonly unknown[]) => unknown).apply(
				current,
				[...args],
			);
		}
		current = next as Record<PropertyKey, unknown> | null | undefined;
	}
	return undefined;
};
