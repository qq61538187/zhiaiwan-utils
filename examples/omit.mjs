import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: "2", c: 3 };
zhiaiwanUtils.omit(object, ["a", "c"]);
// => { 'b': '2' }
