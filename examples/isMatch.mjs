import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: 2 };
zhiaiwanUtils.isMatch(object, { b: 2 });
// => true
zhiaiwanUtils.isMatch(object, { b: 1 });
// => false
