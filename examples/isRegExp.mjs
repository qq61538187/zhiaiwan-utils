import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isRegExp(/abc/);
// => true
zhiaiwanUtils.isRegExp("/abc/");
// => false
