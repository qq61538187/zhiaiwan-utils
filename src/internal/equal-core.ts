const isObjectLike = (value: unknown): value is Record<PropertyKey, unknown> =>
	typeof value === "object" && value !== null;

/**
 * Performs a minimal deep equality check for arrays and plain objects.
 */
export const isEqualCore = (left: unknown, right: unknown): boolean => {
	if (Object.is(left, right)) {
		return true;
	}
	if (Array.isArray(left) && Array.isArray(right)) {
		if (left.length !== right.length) {
			return false;
		}
		for (let index = 0; index < left.length; index += 1) {
			if (!isEqualCore(left[index], right[index])) {
				return false;
			}
		}
		return true;
	}
	if (isObjectLike(left) && isObjectLike(right)) {
		const keys = Object.keys(right);
		for (const key of keys) {
			if (!isEqualCore(left[key], right[key])) {
				return false;
			}
		}
		return true;
	}
	return false;
};
