import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var view = {
	label: "docs",
	click: function () {
		console.log(`clicked ${this.label}`);
	},
};
zhiaiwanUtils.bindAll(view, ["click"]);
jQuery(element).on("click", view.click);
// => Logs 'clicked docs' when clicked.
