import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toFinite(3.2);
// => 3.2
zhiaiwanUtils.toFinite(Number.MIN_VALUE);
// => 5e-324
zhiaiwanUtils.toFinite(Infinity);
// => 1.7976931348623157e+308
zhiaiwanUtils.toFinite("3.2");
// => 3.2
