import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: [{ b: { c: [1, 2, 3, 4] } }] };
zhiaiwanUtils.invoke(object, "a[0].b.c.slice", 1, 3);
// => [2, 3]
