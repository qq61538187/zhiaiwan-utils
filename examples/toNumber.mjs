import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toNumber(3.2);
// => 3.2
zhiaiwanUtils.toNumber(Number.MIN_VALUE);
// => 5e-324
zhiaiwanUtils.toNumber(Infinity);
// => Infinity
zhiaiwanUtils.toNumber("3.2");
// => 3.2
