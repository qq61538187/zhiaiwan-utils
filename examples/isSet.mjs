import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isSet(new Set());
// => true
zhiaiwanUtils.isSet(new WeakSet());
// => false
