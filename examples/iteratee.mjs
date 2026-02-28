import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
];
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.filter(users, zhiaiwanUtils.iteratee({ user: "barney", active: true }));
// => [{ 'user': 'barney', 'age': 36, 'active': true }]
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.filter(users, zhiaiwanUtils.iteratee(["user", "fred"]));
// => [{ 'user': 'fred', 'age': 40 }]
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.map(users, zhiaiwanUtils.iteratee("user"));
// => ['barney', 'fred']
// Create custom iteratee shorthands.
zhiaiwanUtils.iteratee = zhiaiwanUtils.wrap(zhiaiwanUtils.iteratee, (iteratee, func) =>
	!zhiaiwanUtils.isRegExp(func) ? iteratee(func) : (string) => func.test(string),
);
zhiaiwanUtils.filter(["abc", "def"], /ef/);
// => ['def']
