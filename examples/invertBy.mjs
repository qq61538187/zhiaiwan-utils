import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: 2, c: 1 };
zhiaiwanUtils.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }
zhiaiwanUtils.invertBy(object, (value) => `group${value}`);
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
