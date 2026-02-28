import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: "2", c: 3 };
zhiaiwanUtils.omitBy(object, zhiaiwanUtils.isNumber);
// => { 'b': '2' }
