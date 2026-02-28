import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toUpper("--foo-bar--");
// => '--FOO-BAR--'
zhiaiwanUtils.toUpper("fooBar");
// => 'FOOBAR'
zhiaiwanUtils.toUpper("__foo_bar__");
// => '__FOO_BAR__'
