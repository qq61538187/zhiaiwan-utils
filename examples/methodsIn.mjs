import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = zhiaiwanUtils.constant("a");
	this.b = zhiaiwanUtils.constant("b");
}
Foo.prototype.c = zhiaiwanUtils.constant("c");
zhiaiwanUtils.methodsIn(new Foo());
// => ['a', 'b', 'c']
