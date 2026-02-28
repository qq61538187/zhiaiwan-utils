import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.values(new Foo());
// => [1, 2] (iteration order is not guaranteed)
zhiaiwanUtils.values("hi");
// => ['h', 'i']
