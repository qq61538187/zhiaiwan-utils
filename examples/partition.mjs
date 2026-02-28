import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", age: 36, active: false },
	{ user: "fred", age: 40, active: true },
	{ user: "pebbles", age: 1, active: false },
];
zhiaiwanUtils.partition(users, (o) => o.active);
// => objects for [['fred'], ['barney', 'pebbles']]
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.partition(users, { age: 1, active: false });
// => objects for [['pebbles'], ['barney', 'fred']]
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.partition(users, ["active", false]);
// => objects for [['barney', 'pebbles'], ['fred']]
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.partition(users, "active");
// => objects for [['fred'], ['barney', 'pebbles']]
