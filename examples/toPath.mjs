import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toPath("a.b.c");
// => ['a', 'b', 'c']
zhiaiwanUtils.toPath("a[0].b.c");
// => ['a', '0', 'b', 'c']
