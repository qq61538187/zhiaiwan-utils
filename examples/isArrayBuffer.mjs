import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isArrayBuffer(new ArrayBuffer(2));
// => true
zhiaiwanUtils.isArrayBuffer(new Array(2));
// => false
