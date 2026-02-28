import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.trim("  abc  ");
// => 'abc'
zhiaiwanUtils.trim("-_-abc-_-", "_-");
// => 'abc'
zhiaiwanUtils.map(["  foo  ", "  bar  "], zhiaiwanUtils.trim);
// => ['foo', 'bar']
