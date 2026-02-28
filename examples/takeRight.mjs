import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.takeRight([1, 2, 3]);
// => [3]
zhiaiwanUtils.takeRight([1, 2, 3], 2);
// => [2, 3]
zhiaiwanUtils.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
zhiaiwanUtils.takeRight([1, 2, 3], 0);
// => []
