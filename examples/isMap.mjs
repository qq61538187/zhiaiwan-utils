import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isMap(new Map());
// => true
zhiaiwanUtils.isMap(new WeakMap());
// => false
