import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.assign({ a: 1 }, new Foo());
// => { 'a': 1, 'b': 2 }
zhiaiwanUtils.assign({ a: 1 }, zhiaiwanUtils.toPlainObject(new Foo()));
// => { 'a': 1, 'b': 2, 'c': 3 }
