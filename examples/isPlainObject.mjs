import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
}
zhiaiwanUtils.isPlainObject(new Foo());
// => false
zhiaiwanUtils.isPlainObject([1, 2, 3]);
// => false
zhiaiwanUtils.isPlainObject({ x: 0, y: 0 });
// => true
zhiaiwanUtils.isPlainObject(Object.create(null));
// => true
