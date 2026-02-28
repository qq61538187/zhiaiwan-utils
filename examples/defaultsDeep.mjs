import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }
