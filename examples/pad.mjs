import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.pad("abc", 8);
// => '  abc   '
zhiaiwanUtils.pad("abc", 8, "_-");
// => '_-abc_-_'
zhiaiwanUtils.pad("abc", 3);
// => 'abc'
