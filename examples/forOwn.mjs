import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.forOwn(new Foo(), (_value, key) => {
	console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
