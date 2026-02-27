import type { Collection, PropertyPath } from "../types.js";
import { isEqualCore } from "./equal-core.js";
import { getAtPath } from "./path-core.js";

type IterateeResolver<TValue, TResult> = (
	value: TValue,
	key: string | number,
	collection: Collection<TValue>,
) => TResult;

const toMatcher = (
	source: Record<PropertyKey, unknown>,
): ((value: unknown) => boolean) => {
	return (value: unknown) => {
		if (value === null || typeof value !== "object") {
			return false;
		}
		const objectValue = value as Record<PropertyKey, unknown>;
		for (const [entryKey, entryValue] of Object.entries(source)) {
			if (!isEqualCore(objectValue[entryKey], entryValue)) {
				return false;
			}
		}
		return true;
	};
};

export const toIterateeCore = <TValue, TResult = unknown>(
	iteratee: unknown,
): IterateeResolver<TValue, TResult> => {
	if (typeof iteratee === "function") {
		return iteratee as IterateeResolver<TValue, TResult>;
	}
	if (Array.isArray(iteratee) && iteratee.length === 2) {
		const [path, srcValue] = iteratee as unknown as readonly [
			PropertyPath,
			unknown,
		];
		return ((value: TValue) =>
			isEqualCore(
				getAtPath(value, path),
				srcValue,
			)) as unknown as IterateeResolver<TValue, TResult>;
	}
	if (iteratee !== null && typeof iteratee === "object") {
		const matcher = toMatcher(iteratee as Record<PropertyKey, unknown>);
		return ((value: TValue) => matcher(value)) as unknown as IterateeResolver<
			TValue,
			TResult
		>;
	}
	return ((value) =>
		getAtPath(value, iteratee as PropertyPath) as TResult) as IterateeResolver<
		TValue,
		TResult
	>;
};
