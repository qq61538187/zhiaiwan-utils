import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function duplicate(n) {
	return [[[n, n]]];
}
zhiaiwanUtils.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
