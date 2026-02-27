const normalizeStep = (start: number, end: number, step?: number): number => {
	if (step === undefined) {
		return start < end ? 1 : -1;
	}
	if (!Number.isFinite(step) || step === 0) {
		return 0;
	}
	return step;
};

/**
 * Creates an array of numbers progressing from `start` up to, but not including, `end`.
 *
 * If `end` is omitted, `start` is set to `0` and `end` is set to the first argument.
 *
 * @since +0.1.0
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} [end] The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {number[]} Returns the range of numbers.
 * @example
 *
 * range(1, 5)
 * // => [1, 2, 3, 4]
 */
export function range(start = 0, end?: number, step?: number): number[] {
	let normalizedStart = Number(start) || 0;
	const normalizedEnd = end === undefined ? normalizedStart : Number(end) || 0;
	if (end === undefined) {
		normalizedStart = 0;
	}

	const normalizedStep = normalizeStep(normalizedStart, normalizedEnd, step);
	if (normalizedStep === 0) {
		const length = Math.max(0, Math.ceil(normalizedEnd - normalizedStart));
		return Array.from({ length }, () => normalizedStart);
	}

	const result: number[] = [];
	if (normalizedStep > 0) {
		for (
			let value = normalizedStart;
			value < normalizedEnd;
			value += normalizedStep
		) {
			result.push(value);
		}
		return result;
	}

	for (
		let value = normalizedStart;
		value > normalizedEnd;
		value += normalizedStep
	) {
		result.push(value);
	}
	return result;
}

export default range;
