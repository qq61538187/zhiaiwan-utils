import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.dropRight([1, 2, 3]);
// => [1, 2]
zhiaiwanUtils.dropRight([1, 2, 3], 2);
// => [1]
zhiaiwanUtils.dropRight([1, 2, 3], 5);
// => []
zhiaiwanUtils.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
