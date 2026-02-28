import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: 2, c: 1 };
zhiaiwanUtils.invert(object);
// => { '1': 'c', '2': 'b' }
