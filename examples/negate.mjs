import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function isEven(n) {
	return n % 2 === 0;
}
zhiaiwanUtils.filter([1, 2, 3, 4, 5, 6], zhiaiwanUtils.negate(isEven));
// => [1, 3, 5]
