import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isNative(Array.prototype.push);
// => true
zhiaiwanUtils.isNative(undefined);
// => false
