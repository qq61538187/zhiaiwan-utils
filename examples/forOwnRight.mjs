import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.forOwnRight(new Foo(), (_value, key) => {
	console.log(key);
});
// => Logs 'b' then 'a' assuming `zhiaiwanUtils.forOwn` logs 'a' then 'b'.
