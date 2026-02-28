import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toString(null);
// => ''
zhiaiwanUtils.toString(-0);
// => '-0'
zhiaiwanUtils.toString([1, 2, 3]);
// => '1,2,3'
