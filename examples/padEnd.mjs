import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.padEnd("abc", 6);
// => 'abc   '
zhiaiwanUtils.padEnd("abc", 6, "_-");
// => 'abc_-_'
zhiaiwanUtils.padEnd("abc", 3);
// => 'abc'
