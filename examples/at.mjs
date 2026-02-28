import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: [{ b: { c: 3 } }, 4] };
zhiaiwanUtils.at(object, ["a[0].b.c", "a[1]"]);
// => [3, 4]
