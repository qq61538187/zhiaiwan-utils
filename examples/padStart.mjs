import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.padStart("abc", 6);
// => '   abc'
zhiaiwanUtils.padStart("abc", 6, "_-");
// => '_-_abc'
zhiaiwanUtils.padStart("abc", 3);
// => 'abc'
