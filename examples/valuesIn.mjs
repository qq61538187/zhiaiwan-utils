import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.valuesIn(new Foo());
// => [1, 2, 3] (iteration order is not guaranteed)
