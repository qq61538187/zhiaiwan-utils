import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isArray([1, 2, 3]);
// => true
zhiaiwanUtils.isArray(document.body.children);
// => false
zhiaiwanUtils.isArray("abc");
// => false
zhiaiwanUtils.isArray(zhiaiwanUtils.noop);
// => false
