import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
