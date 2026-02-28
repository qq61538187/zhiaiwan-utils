import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: [{ b: { c: 3 } }] };
zhiaiwanUtils.get(object, "a[0].b.c");
// => 3
zhiaiwanUtils.get(object, ["a", "0", "b", "c"]);
// => 3
zhiaiwanUtils.get(object, "a.b.c", "default");
// => 'default'
