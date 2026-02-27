const rangeRightNormalizeStep = (
	start: number,
	end: number,
	step?: number,
): number => {
	if (step === undefined) {
		return start < end ? 1 : -1;
	}
	if (!Number.isFinite(step) || step === 0) {
		return 0;
	}
	return step;
};

/**
 * Creates an array of numbers like `range`, but populated in descending order.
 *
 * @since +0.1.0
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} [end] The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {number[]} Returns the range of numbers in reverse order.
 * @example
 *
 * rangeRight(1, 5)
 * // => [4, 3, 2, 1]
 */
export function rangeRight(start = 0, end?: number, step?: number): number[] {
	let normalizedStart = Number(start) || 0;
	const normalizedEnd = end === undefined ? normalizedStart : Number(end) || 0;
	if (end === undefined) {
		normalizedStart = 0;
	}

	const normalizedStep = rangeRightNormalizeStep(
		normalizedStart,
		normalizedEnd,
		step,
	);
	const base: number[] = [];

	if (normalizedStep === 0) {
		const length = Math.max(0, Math.ceil(normalizedEnd - normalizedStart));
		for (let index = 0; index < length; index += 1) {
			base.push(normalizedStart);
		}
		return base.reverse();
	}

	if (normalizedStep > 0) {
		for (
			let value = normalizedStart;
			value < normalizedEnd;
			value += normalizedStep
		) {
			base.push(value);
		}
		return base.reverse();
	}

	for (
		let value = normalizedStart;
		value > normalizedEnd;
		value += normalizedStep
	) {
		base.push(value);
	}
	return base.reverse();
}

export default rangeRight;
