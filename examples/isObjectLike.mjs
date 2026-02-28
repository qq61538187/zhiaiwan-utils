import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isObjectLike({});
// => true
zhiaiwanUtils.isObjectLike([1, 2, 3]);
// => true
zhiaiwanUtils.isObjectLike(zhiaiwanUtils.noop);
// => false
zhiaiwanUtils.isObjectLike(null);
// => false
