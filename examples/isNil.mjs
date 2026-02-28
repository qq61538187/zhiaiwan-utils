import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isNil(null);
// => true
zhiaiwanUtils.isNil(void 0);
// => true
zhiaiwanUtils.isNil(NaN);
// => false
