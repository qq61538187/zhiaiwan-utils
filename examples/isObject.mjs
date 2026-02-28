import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isObject({});
// => true
zhiaiwanUtils.isObject([1, 2, 3]);
// => true
zhiaiwanUtils.isObject(zhiaiwanUtils.noop);
// => true
zhiaiwanUtils.isObject(null);
// => false
