import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isEmpty(null);
// => true
zhiaiwanUtils.isEmpty(true);
// => true
zhiaiwanUtils.isEmpty(1);
// => true
zhiaiwanUtils.isEmpty([1, 2, 3]);
// => false
zhiaiwanUtils.isEmpty({ a: 1 });
// => false
