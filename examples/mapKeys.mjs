import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.mapKeys({ a: 1, b: 2 }, (value, key) => key + value);
// => { 'a1': 1, 'b2': 2 }
