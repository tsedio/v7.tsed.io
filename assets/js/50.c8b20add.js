(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{806:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"create-your-first-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-controller"}},[t._v("#")]),t._v(" Create your first controller")]),t._v(" "),e("p",[t._v("Create a new "),e("code",[t._v("CalendarCtrl.ts")]),t._v(" in your controllers directory (by default "),e("code",[t._v("root/controllers")]),t._v(").\nAll controllers declared with "),e("ApiSymbolName",[t._v("Controller")]),t._v(" decorators are considered as Platform routers (Express.Router, Koa.Router, ...).\nA Platform router requires a path (here, the path is "),e("code",[t._v("/calendars")]),t._v(") to expose an url on your server.\nMore precisely, it's a part of a path, and the entire exposed url depends on the Server configuration (see "),e("RouterLink",{attrs:{to:"/docs/configuration.html"}},[t._v("Configuration")]),t._v(")\nand the "),e("RouterLink",{attrs:{to:"/docs/controllers.html"}},[t._v("children controllers")]),t._v(".")],1),t._v(" "),e("p",[t._v("In this case, we have no dependencies and the root endpoint is set to "),e("code",[t._v("/rest")]),t._v(".\nSo the controller's url will be "),e("code",[t._v("http://host/rest/calendars")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/schema"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/di"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token decorator"}},[e("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/calendars"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CalendarCtrl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token decorator"}},[e("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This action returns all calendars"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Decorators "),e("ApiSymbolName",[t._v("Get")]),t._v(", "),e("ApiSymbolName",[t._v("Post")]),t._v(", "),e("ApiSymbolName",[t._v("Delete")]),t._v(", "),e("ApiSymbolName",[t._v("Put")]),t._v(", etc., support dynamic pathParams (eg: "),e("code",[t._v("/:id")]),t._v(") and "),e("code",[t._v("RegExp")]),t._v(" like Express API.")],1),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/docs/controllers.html"}},[t._v("Controllers")]),t._v(" section for more details")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("You have to configure "),e("a",{attrs:{href:"/tutorials/templating"}},[t._v("engine rendering")]),t._v(" if you want to use the decorator "),e("ApiSymbolName",[t._v("Render")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("CalendarCtrl")]),t._v(" you just added needs to be connected by exporting it. Find a "),e("code",[t._v("index.ts")]),t._v(" in my case in the "),e("code",[t._v("/rest/")]),t._v(" folder and add the following line:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('export * from "./CalendarCtrl";\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("To test your method, just run your "),e("code",[t._v("server.ts")]),t._v(" and send an HTTP request on "),e("code",[t._v("/rest/calendars/")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"ready-for-more"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ready-for-more"}},[t._v("#")]),t._v(" Ready for More?")]),t._v(" "),e("p",[t._v("We’ve briefly introduced the most basic features of Ts.ED - the rest of this guide will cover them and other advanced features with much finer details, so make sure to read through it all!")])])}),[],!1,null,null,null);s.default=r.exports}}]);