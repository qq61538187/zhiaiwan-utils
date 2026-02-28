import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: "2", c: 3 };
zhiaiwanUtils.pickBy(object, zhiaiwanUtils.isNumber);
// => { 'a': 1, 'c': 3 }
