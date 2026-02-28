import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [1, [2, [3, [4]], 5]];
zhiaiwanUtils.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
zhiaiwanUtils.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
