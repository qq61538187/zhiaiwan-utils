import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

// Use the "interpolate" delimiter to create a compiled template.
var compiledInterpolate = zhiaiwanUtils.template("hello <%= user %>!");
compiledInterpolate({ user: "fred" });
// => 'hello fred!'
// Use the HTML "escape" delimiter to escape data property values.
var compiledEscape = zhiaiwanUtils.template("<b><%- value %></b>");
compiledEscape({ value: "<script>" });
// => '<b>&lt;script&gt;</b>'
// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
var compiledEvaluate = zhiaiwanUtils.template(
	"<% zhiaiwanUtils.forEach(users, function(user) { %><li><%- user %></li><% }); %>",
);
compiledEvaluate({ users: ["fred", "barney"] });
// => '<li>fred</li><li>barney</li>'
// Use the internal `print` function in "evaluate" delimiters.
var compiledPrint = zhiaiwanUtils.template('<% print("hello " + user); %>!');
compiledPrint({ user: "barney" });
// => 'hello barney!'
// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
var compiledEsDelimiter = zhiaiwanUtils.template(`hello \${ user }!`);
compiledEsDelimiter({ user: "pebbles" });
// => 'hello pebbles!'
// Use backslashes to treat delimiters as plain text.
var compiledEscapedDelimiter = zhiaiwanUtils.template('<%= "\\<%- value %\\>" %>');
compiledEscapedDelimiter({ value: "ignored" });
// => '<%- value %>'
// Use the `imports` option to import `jQuery` as `jq`.
var text = "<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>";
var compiledWithImports = zhiaiwanUtils.template(text, { imports: { jq: jQuery } });
compiledWithImports({ users: ["fred", "barney"] });
// => '<li>fred</li><li>barney</li>'
// Use the `sourceURL` option to specify a custom sourceURL for the template.
var compiledWithSourceUrl = zhiaiwanUtils.template("hello <%= user %>!", {
	sourceURL: "/basic/greeting.jst",
});
compiledWithSourceUrl(data);
// => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
// Use the `variable` option to ensure a with-statement isn't used in the compiled template.
var compiledWithVariable = zhiaiwanUtils.template("hi <%= data.user %>!", { variable: "data" });
compiledWithVariable.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }
// Use custom template delimiters.
zhiaiwanUtils.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiledCustomDelimiters = zhiaiwanUtils.template("hello {{ user }}!");
compiledCustomDelimiters({ user: "mustache" });
// => 'hello mustache!'
// Use the `source` property to inline compiled templates for meaningful
// line numbers in error messages and stack traces.
fs.writeFileSync(
	path.join(process.cwd(), "jst.js"),
	`\
  var JST = {\
    "main": ${zhiaiwanUtils.template(mainText).source}\
  };\
`,
);
