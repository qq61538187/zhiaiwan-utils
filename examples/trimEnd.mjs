import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.trimEnd("  abc  ");
// => '  abc'
zhiaiwanUtils.trimEnd("-_-abc-_-", "_-");
// => '-_-abc'
