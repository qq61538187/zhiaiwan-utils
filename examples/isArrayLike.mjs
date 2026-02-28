import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isArrayLike([1, 2, 3]);
// => true
zhiaiwanUtils.isArrayLike(document.body.children);
// => true
zhiaiwanUtils.isArrayLike("abc");
// => true
zhiaiwanUtils.isArrayLike(zhiaiwanUtils.noop);
// => false
