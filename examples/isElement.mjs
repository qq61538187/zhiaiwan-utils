import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isElement(document.body);
// => true
zhiaiwanUtils.isElement("<body>");
// => false
