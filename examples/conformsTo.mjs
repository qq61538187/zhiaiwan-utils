import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: 2 };
zhiaiwanUtils.conformsTo(object, { b: (n) => n > 1 });
// => true
zhiaiwanUtils.conformsTo(object, { b: (n) => n > 2 });
// => false
