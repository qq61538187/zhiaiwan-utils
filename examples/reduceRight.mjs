import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [
	[0, 1],
	[2, 3],
	[4, 5],
];
zhiaiwanUtils.reduceRight(array, (flattened, other) => flattened.concat(other), []);
// => [4, 5, 2, 3, 0, 1]
