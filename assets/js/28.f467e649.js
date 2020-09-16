(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{374:function(t,a,s){"use strict";s.r(a);var e=s(25),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("浏览器的本地存储主要分为"),s("code",[t._v("localStorage")]),t._v(","),s("code",[t._v("sessionStorage")]),t._v(","),s("code",[t._v("cookie")]),t._v("和"),s("code",[t._v("IndexedDB")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("p",[s("code",[t._v("Cookie")]),t._v("最开始并不是用来做本地存储的，而是为了弥补HTTP在"),s("strong",[t._v("状态管理上的不足")]),t._v("。")]),t._v(" "),s("p",[t._v("HTTP协议是"),s("strong",[t._v("无状态协议")]),t._v("，客户端向服务端发请求，服务端返回响应，故事就这么结束了，但下次请求如何让服务端知道客户端是谁呢？")]),t._v(" "),s("p",[t._v("这种背景下就产生了"),s("code",[t._v("Cookie")])]),t._v(" "),s("p",[t._v("Cookie本质上就是浏览器里存储的一个很小的文本文件，内部以键值对（key-value）的方式来存储。向同一个域名下发送请求，都会携带相同Cookie，服务器拿到后对其进行解析，变能知道客户端状态。")]),t._v(" "),s("p",[t._v("Cookie的作用很好理解，就是作为"),s("strong",[t._v("状态存储")]),t._v("的，但它也有许多缺点：")]),t._v(" "),s("ol",[s("li",[t._v("容量缺陷。Cookie体积只有"),s("code",[t._v("4KB")])]),t._v(" "),s("li",[t._v("性能缺陷。Cookie紧跟域名，不管该域名下的这个地址需不需要Cookie，请求都会携带上它，随着请求的增多，造成不必要的性能浪费。")]),t._v(" "),s("li",[t._v("安全缺陷。Cookie以纯文本的形式在浏览器与服务器间传递，很容易被非法劫持，然后进行篡改。另外在Cookie的"),s("code",[t._v("HttpOnly")]),t._v("属性为false时，Cookie信息可以直接通过JS脚本获取。")])]),t._v(" "),s("h4",{attrs:{id:"cookie属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie属性"}},[t._v("#")]),t._v(" Cookie属性")]),t._v(" "),s("ul",[s("li",[t._v("Name")]),t._v(" "),s("li",[t._v("Value")]),t._v(" "),s("li",[t._v("Domain")]),t._v(" "),s("li",[t._v("Path - 哪些地址下会接收这个cookie")]),t._v(" "),s("li",[t._v("Expires/Max-Age")]),t._v(" "),s("li",[t._v("HttpOnly - 为true时cookie不能在浏览器通过JS脚本获取。")]),t._v(" "),s("li",[t._v("Secure - 为true时cookie只有在有https协议下才会随请求发送给服务端。")])]),t._v(" "),s("h2",{attrs:{id:"localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),s("h3",{attrs:{id:"和cookie异同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和cookie异同"}},[t._v("#")]),t._v(" 和Cookie异同")]),t._v(" "),s("p",[s("code",[t._v("localStorage")]),t._v("和"),s("code",[t._v("Cookie")]),t._v("一样，在相同域名下，储存的东西一样。")]),t._v(" "),s("ol",[s("li",[t._v("容量。localStorage容量为"),s("code",[t._v("5MB")]),t._v("，大大高于Cookie的"),s("code",[t._v("4KB")]),t._v("容量.")]),t._v(" "),s("li",[t._v("只存在于客户端，localStorage默认不予服务端通信，避免了Cookie带来的"),s("strong",[t._v("性能和安全问题")]),t._v("。")]),t._v(" "),s("li",[t._v("接口方便。通过localStorage暴露全局，并通过它"),s("code",[t._v("setItem")]),t._v("和"),s("code",[t._v("getItem")]),t._v("等方法进行操作，非常方便。")])]),t._v(" "),s("h3",{attrs:{id:"操作方便，localstorage的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作方便，localstorage的操作"}},[t._v("#")]),t._v(" 操作方便，localStorage的操作")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wmtdhe'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wmtdhe'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在相同域名中可以拿到相应的值")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("可以看出"),s("code",[t._v("localStorage")]),t._v("存储的都是字符串，通过JSON.stringify和JSON.parse来将存储对象转化为字符串和进行解析。")]),t._v(" "),s("h3",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("p",[t._v("可以存储一些较大容量和内容比较稳定的资源。如Google下面的常用链接。")]),t._v(" "),s("h2",{attrs:{id:"sessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),s("p",[t._v("与"),s("code",[t._v("localStorage")]),t._v("相同的点：")]),t._v(" "),s("ul",[s("li",[t._v("容量也是"),s("code",[t._v("5MB")]),t._v("。")]),t._v(" "),s("li",[t._v("只存在于客户端，默认不与服务端通信。")]),t._v(" "),s("li",[t._v("接口封装，使用方便。")])]),t._v(" "),s("p",[s("code",[t._v("sessionStorage")]),t._v("存储并不持久，只存在于回话间，如果页面关闭，会话结束，sessionStorage遍不复存在了。")]),t._v(" "),s("h3",{attrs:{id:"应用场景-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-2"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("ol",[s("li",[t._v("可以对表单进行维护，将表单信息存储到sessionStorage中，即使页面刷新，表单信息也不会丢失。")]),t._v(" "),s("li",[t._v("可以存储本次浏览记录。页面关闭后就不需要的信息。")])]),t._v(" "),s("h2",{attrs:{id:"indexeddb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[t._v("#")]),t._v(" IndexedDB")]),t._v(" "),s("p",[s("code",[t._v("IndexedDB")]),t._v("是运行在浏览器上的"),s("strong",[t._v("非关系型数据库")]),t._v("，本质上是数据库，理论上容量没有上限。")]),t._v(" "),s("p",[t._v("使用参考"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN使用文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("credits to "),s("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69#heading-54",target:"_blank",rel:"noopener noreferrer"}},[t._v("(1.6w字)浏览器灵魂之问，请问你能接得住几个？"),s("OutboundLink")],1),t._v(" By 神三元")])])])}),[],!1,null,null,null);a.default=o.exports}}]);