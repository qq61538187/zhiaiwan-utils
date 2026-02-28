import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.keys(new Foo());
// => ['a', 'b'] (iteration order is not guaranteed)
zhiaiwanUtils.keys("hi");
// => ['0', '1']
