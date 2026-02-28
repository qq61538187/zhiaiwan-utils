import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.rangeRight(4);
// => [3, 2, 1, 0]
zhiaiwanUtils.rangeRight(-4);
// => [-3, -2, -1, 0]
zhiaiwanUtils.rangeRight(1, 5);
// => [4, 3, 2, 1]
zhiaiwanUtils.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]
zhiaiwanUtils.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]
zhiaiwanUtils.rangeRight(1, 4, 0);
// => [1, 1, 1]
zhiaiwanUtils.rangeRight(0);
// => []
