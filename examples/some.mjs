import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.some([null, 0, "yes", false], Boolean);
// => true
var users = [
	{ user: "barney", active: true },
	{ user: "fred", active: false },
];
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.some(users, { user: "barney", active: false });
// => false
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.some(users, ["active", false]);
// => true
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.some(users, "active");
// => true
