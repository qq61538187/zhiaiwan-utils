import type { Collection } from "../types.js";

export const toCollectionEntries = <TValue>(
	collection: Collection<TValue> | null | undefined,
): Array<[string | number, TValue]> => {
	if (collection == null) {
		return [];
	}
	if (Array.isArray(collection)) {
		return collection.map((value, index) => [index, value]);
	}
	const objectCollection = collection as Record<string, TValue>;
	return Object.keys(objectCollection).map((key) => [
		key,
		objectCollection[key],
	]);
};
