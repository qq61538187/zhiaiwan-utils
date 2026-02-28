import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = {};
zhiaiwanUtils.setWith(object, "[0][1]", "a", Object);
// => { '0': { '1': 'a' } }
