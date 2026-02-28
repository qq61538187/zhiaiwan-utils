import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: "2", c: 3 };
zhiaiwanUtils.pick(object, ["a", "c"]);
// => { 'a': 1, 'c': 3 }
