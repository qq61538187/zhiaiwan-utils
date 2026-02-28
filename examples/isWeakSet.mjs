import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isWeakSet(new WeakSet());
// => true
zhiaiwanUtils.isWeakSet(new Set());
// => false
