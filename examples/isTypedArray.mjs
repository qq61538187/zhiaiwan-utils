import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isTypedArray(new Uint8Array());
// => true
zhiaiwanUtils.isTypedArray([]);
// => false
