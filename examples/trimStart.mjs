import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.trimStart("  abc  ");
// => 'abc  '
zhiaiwanUtils.trimStart("-_-abc-_-", "_-");
// => 'abc-_-'
