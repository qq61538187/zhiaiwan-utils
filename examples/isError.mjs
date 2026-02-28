import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isError(new Error());
// => true
zhiaiwanUtils.isError(Error);
// => false
