import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isWeakMap(new WeakMap());
// => true
zhiaiwanUtils.isWeakMap(new Map());
// => false
