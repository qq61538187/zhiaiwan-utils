import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.keysIn(new Foo());
// => ['a', 'b', 'c'] (iteration order is not guaranteed)
