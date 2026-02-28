import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.every([true, 1, null, "yes"], Boolean);
// => false
var users = [
	{ user: "barney", age: 36, active: false },
	{ user: "fred", age: 40, active: false },
];
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.every(users, { user: "barney", active: false });
// => false
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.every(users, ["active", false]);
// => true
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.every(users, "active");
// => false
