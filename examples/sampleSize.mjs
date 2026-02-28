import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.sampleSize([1, 2, 3], 2);
// => [3, 1]
zhiaiwanUtils.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
