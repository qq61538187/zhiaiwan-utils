import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function square(n) {
	return n * n;
}
zhiaiwanUtils.map([4, 8], square);
// => [16, 64]
zhiaiwanUtils.map({ a: 4, b: 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
var users = [{ user: "barney" }, { user: "fred" }];
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.map(users, "user");
// => ['barney', 'fred']
