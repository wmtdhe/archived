(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{386:function(_,v,e){"use strict";e.r(v);var t=e(25),c=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"tcp三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[_._v("#")]),_._v(" TCP三次握手")]),_._v(" "),e("p",[e("img",{attrs:{src:"//",alt:"三次握手"}})]),_._v(" "),e("p",[_._v("客户端与服务端建立连接。")]),_._v(" "),e("ul",[e("li",[_._v("第一次握手：客户端将"),e("code",[_._v("SYN")]),_._v("置为1，并随机产生一个初识序列号"),e("code",[_._v("seq")]),_._v("发送给服务端，进入"),e("code",[_._v("SYN_SENT")]),_._v("状态")]),_._v(" "),e("li",[_._v("第二次握手：服务端收到客户端发来的"),e("code",[_._v("SYN=1")]),_._v("后，知道客户端请求建立连接，服务端将自己的"),e("code",[_._v("SYN")]),_._v("也置为1，"),e("code",[_._v("ACK")]),_._v("置为1，产生一个"),e("code",[_._v("acknowledge number = sequence number+1")]),_._v("，并产生一个随机初识序列发送给客户端，进入"),e("code",[_._v("SYN_RCVD")]),_._v("状态")]),_._v(" "),e("li",[_._v("第三次握手：客户端检查"),e("code",[_._v("acknowledge number")]),_._v("是否为自己之前产生的序列号+1， "),e("code",[_._v("ACK")]),_._v("是否为1，检查正确之后，将自己的"),e("code",[_._v("ACK")]),_._v("置为1，并产生一个"),e("code",[_._v("acknowledge number = 服务端序列号+1")]),_._v("返回给服务端，进入"),e("code",[_._v("ESTABLISHED")]),_._v("状态。服务端检查客户端发来的"),e("code",[_._v("ACK")]),_._v("和"),e("code",[_._v("acknowledge number")]),_._v("后，也进入"),e("code",[_._v("ESTABLISHED")]),_._v("状态，完成三次握手建立连接。")])]),_._v(" "),e("h3",{attrs:{id:"tcp为什么不两次握手建立连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp为什么不两次握手建立连接"}},[_._v("#")]),_._v(" TCP为什么不两次握手建立连接")]),_._v(" "),e("ul",[e("li",[_._v("两次握手可能会出现"),e("strong",[_._v("已经失效的连接请求报文段又传到了服务端")])])]),_._v(" "),e("blockquote",[e("p",[_._v("比如，客户端发出了一个连接请求报文段并没有丢失，而是在某个网络结点长时间滞留了，以致延误到连接释放后的某个时间才到达服务端。这本来应该是一个"),e("strong",[_._v("失效的连接请求")]),_._v("，但服务端收到之后误以为客户端再次发来一个连接请求，从而向客户端发送确认报文并建立连接。因为没有三次握手，只要第二次服务端确认建立连接，那么连接便建立了。然而客户端并没有请求建立连接，因此不会理睬服务端但确认，不会向服务端发送数据。但服务端却以为连接已建立而一直等待客户端的数据。这样服务端就白白浪费了很多资源。")])]),_._v(" "),e("ul",[e("li",[_._v("两次握手无法保证客户端正确接收第二次握手的报文（服务端无法确认客户端是否收到），也无法保证客户端和服务端的初识序列号互换成功。")])]),_._v(" "),e("h2",{attrs:{id:"tcp四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[_._v("#")]),_._v(" TCP四次挥手")]),_._v(" "),e("p",[e("img",{attrs:{src:"//",alt:"四次挥手"}})]),_._v(" "),e("p",[_._v("客户端与服务端断开连接。")]),_._v(" "),e("ul",[e("li",[_._v("第一次挥手：Client将"),e("code",[_._v("FIN")]),_._v("置为1，发送一个"),e("code",[_._v("序列号seq")]),_._v("给Server；进入"),e("code",[_._v("FIN_WAIT_1")]),_._v("状态；")]),_._v(" "),e("li",[_._v("第二次挥手：Server收到"),e("code",[_._v("FIN")]),_._v("之后，发送一个"),e("code",[_._v("ACK=1，acknowledge number=收到的序列号+1")]),_._v("；进入"),e("code",[_._v("CLOSE_WAIT")]),_._v("状态。此时客户端已经没有要发送的数据了，但仍可以接受服务器发来的数据。")]),_._v(" "),e("li",[_._v("第三次挥手：Server将"),e("code",[_._v("FIN")]),_._v("置1，发送一个序列号给Client；进入"),e("code",[_._v("LAST_ACK")]),_._v("状态；")]),_._v(" "),e("li",[_._v("第四次挥手：Client收到服务器的"),e("code",[_._v("FIN")]),_._v("后，进入"),e("code",[_._v("TIME_WAIT")]),_._v("状态；接着将"),e("code",[_._v("ACK")]),_._v("置1，发送一个"),e("code",[_._v("acknowledge number=序列号+1")]),_._v("给服务器；服务器收到后，确认"),e("code",[_._v("acknowledge number")]),_._v("后，变为"),e("code",[_._v("CLOSED")]),_._v("状态，不再向客户端发送数据。客户端等待2*MSL（报文段最长寿命）时间后，也进入"),e("code",[_._v("CLOSED")]),_._v("状态。完成四次挥手。")])]),_._v(" "),e("h3",{attrs:{id:"为什么不三次挥手断开连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不三次挥手断开连接"}},[_._v("#")]),_._v(" 为什么不三次挥手断开连接")]),_._v(" "),e("p",[_._v("因为服务器收到客户端断开连接的请求时，可能还有一些数据没有发完，这时先回复"),e("code",[_._v("ACK")]),_._v("，表示接收到了断开连接的请求。等到数据发完之后再发"),e("code",[_._v("FIN")]),_._v("，断开服务器到客户端的数据传送。")]),_._v(" "),e("h2",{attrs:{id:"tcp流量控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp流量控制"}},[_._v("#")]),_._v(" TCP流量控制")]),_._v(" "),e("h2",{attrs:{id:"tcp如何实现拥塞控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp如何实现拥塞控制"}},[_._v("#")]),_._v(" TCP如何实现拥塞控制")]),_._v(" "),e("h2",{attrs:{id:"tcp和udp的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp的区别"}},[_._v("#")]),_._v(" TCP和UDP的区别")]),_._v(" "),e("h2",{attrs:{id:"tcp如何保证传输的可靠性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp如何保证传输的可靠性"}},[_._v("#")]),_._v(" TCP如何保证传输的可靠性")])])}),[],!1,null,null,null);v.default=c.exports}}]);