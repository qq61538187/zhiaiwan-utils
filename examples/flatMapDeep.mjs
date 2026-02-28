import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function duplicate(n) {
	return [[[n, n]]];
}
zhiaiwanUtils.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
