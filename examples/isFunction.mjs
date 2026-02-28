import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isFunction(() => {});
// => true
zhiaiwanUtils.isFunction(/abc/);
// => false
