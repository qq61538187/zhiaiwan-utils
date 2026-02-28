import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isDate(new Date());
// => true
zhiaiwanUtils.isDate("Mon April 23 2012");
// => false
