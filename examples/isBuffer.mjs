import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isBuffer(new Buffer(2));
// => true
zhiaiwanUtils.isBuffer(new Uint8Array(2));
// => false
