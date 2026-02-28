import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var func = zhiaiwanUtils.cond([
	[zhiaiwanUtils.matches({ a: 1 }), zhiaiwanUtils.constant("matches A")],
	[zhiaiwanUtils.conforms({ b: zhiaiwanUtils.isNumber }), zhiaiwanUtils.constant("matches B")],
	[zhiaiwanUtils.stubTrue, zhiaiwanUtils.constant("no match")],
]);
func({ a: 1, b: 2 });
// => 'matches A'
func({ a: 0, b: 1 });
// => 'matches B'
func({ a: "1", b: "2" });
// => 'no match'
