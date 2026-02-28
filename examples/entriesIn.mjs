import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.entriesIn(new Foo());
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
