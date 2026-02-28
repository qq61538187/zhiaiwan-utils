import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var p = zhiaiwanUtils.wrap(zhiaiwanUtils.escape, (func, text) => `<p>${func(text)}</p>`);
p("fred, barney, & pebbles");
// => '<p>fred, barney, &amp; pebbles</p>'
