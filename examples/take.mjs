import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.take([1, 2, 3]);
// => [1]
zhiaiwanUtils.take([1, 2, 3], 2);
// => [1, 2]
zhiaiwanUtils.take([1, 2, 3], 5);
// => [1, 2, 3]
zhiaiwanUtils.take([1, 2, 3], 0);
// => []
