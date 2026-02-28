import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = {};
zhiaiwanUtils.updateWith(object, "[0][1]", zhiaiwanUtils.constant("a"), Object);
// => { '0': { '1': 'a' } }
