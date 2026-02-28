import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toLength(3.2);
// => 3
zhiaiwanUtils.toLength(Number.MIN_VALUE);
// => 0
zhiaiwanUtils.toLength(Infinity);
// => 4294967295
zhiaiwanUtils.toLength("3.2");
// => 3
