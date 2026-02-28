import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = {
	fred: { user: "fred", age: 40 },
	pebbles: { user: "pebbles", age: 1 },
};
zhiaiwanUtils.mapValues(users, (o) => o.age);
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.mapValues(users, "age");
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
