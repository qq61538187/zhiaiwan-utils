import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
	{ user: "pebbles", age: 1, active: true },
];
zhiaiwanUtils.find(users, (o) => o.age < 40);
// => object for 'barney'
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.find(users, { age: 1, active: true });
// => object for 'pebbles'
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.find(users, ["active", false]);
// => object for 'fred'
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.find(users, "active");
// => object for 'barney'
