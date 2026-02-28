import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [0, 1, 2],
	object = { a: array, b: array, c: array };
zhiaiwanUtils.map(["a[2]", "c[0]"], zhiaiwanUtils.propertyOf(object));
// => [2, 0]
zhiaiwanUtils.map(
	[
		["a", "2"],
		["c", "0"],
	],
	zhiaiwanUtils.propertyOf(object),
);
// => [2, 0]
