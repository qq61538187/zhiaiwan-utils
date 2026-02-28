import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isSymbol(Symbol.iterator);
// => true
zhiaiwanUtils.isSymbol("abc");
// => false
