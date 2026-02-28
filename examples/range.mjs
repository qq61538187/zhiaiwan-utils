import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.range(4);
// => [0, 1, 2, 3]
zhiaiwanUtils.range(-4);
// => [0, -1, -2, -3]
zhiaiwanUtils.range(1, 5);
// => [1, 2, 3, 4]
zhiaiwanUtils.range(0, 20, 5);
// => [0, 5, 10, 15]
zhiaiwanUtils.range(0, -4, -1);
// => [0, -1, -2, -3]
zhiaiwanUtils.range(1, 4, 0);
// => [1, 1, 1]
zhiaiwanUtils.range(0);
// => []
