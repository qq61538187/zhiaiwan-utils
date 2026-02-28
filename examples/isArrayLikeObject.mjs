import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isArrayLikeObject([1, 2, 3]);
// => true
zhiaiwanUtils.isArrayLikeObject(document.body.children);
// => true
zhiaiwanUtils.isArrayLikeObject("abc");
// => false
zhiaiwanUtils.isArrayLikeObject(zhiaiwanUtils.noop);
// => false
