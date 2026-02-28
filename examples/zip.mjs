import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.zip(["a", "b"], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
