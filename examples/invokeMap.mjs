import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.invokeMap(
	[
		[5, 1, 7],
		[3, 2, 1],
	],
	"sort",
);
// => [[1, 5, 7], [1, 2, 3]]
zhiaiwanUtils.invokeMap([123, 456], String.prototype.split, "");
// => [['1', '2', '3'], ['4', '5', '6']]
