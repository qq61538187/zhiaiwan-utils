import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.upperCase("--foo-bar");
// => 'FOO BAR'
zhiaiwanUtils.upperCase("fooBar");
// => 'FOO BAR'
zhiaiwanUtils.upperCase("__foo_bar__");
// => 'FOO BAR'
