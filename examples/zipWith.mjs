import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
// => [111, 222]
