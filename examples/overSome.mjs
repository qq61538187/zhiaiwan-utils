import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var func = zhiaiwanUtils.overSome([Boolean, Number.isFinite]);
func("1");
// => true
func(null);
// => true
func(NaN);
// => false
var _matchesFunc = zhiaiwanUtils.overSome([{ a: 1 }, { a: 2 }]);
var _matchesPropertyFunc = zhiaiwanUtils.overSome([
	["a", 1],
	["a", 2],
]);
