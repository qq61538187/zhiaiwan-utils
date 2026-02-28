import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", age: 36, active: false },
	{ user: "fred", age: 40, active: true },
];
zhiaiwanUtils.reject(users, (o) => !o.active);
// => objects for ['fred']
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.reject(users, { age: 40, active: true });
// => objects for ['barney']
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.reject(users, ["active", false]);
// => objects for ['fred']
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.reject(users, "active");
// => objects for ['barney']
