import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.drop([1, 2, 3]);
// => [2, 3]
zhiaiwanUtils.drop([1, 2, 3], 2);
// => [3]
zhiaiwanUtils.drop([1, 2, 3], 5);
// => []
zhiaiwanUtils.drop([1, 2, 3], 0);
// => [1, 2, 3]
