import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var func = zhiaiwanUtils.overEvery([Boolean, Number.isFinite]);
func("1");
// => true
func(null);
// => false
func(NaN);
// => false
