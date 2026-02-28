import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = zhiaiwanUtils.times(3, zhiaiwanUtils.constant),
	object = { a: array, b: array, c: array };
zhiaiwanUtils.map(["a[2]", "c[0]"], zhiaiwanUtils.methodOf(object));
// => [2, 0]
zhiaiwanUtils.map(
	[
		["a", "2"],
		["c", "0"],
	],
	zhiaiwanUtils.methodOf(object),
);
// => [2, 0]
