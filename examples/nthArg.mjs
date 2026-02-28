import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var func = zhiaiwanUtils.nthArg(1);
func("a", "b", "c", "d");
// => 'b'
func = zhiaiwanUtils.nthArg(-2);
func("a", "b", "c", "d");
// => 'c'
