(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{379:function(t,e,r){"use strict";r(9),r(10),r(75),r(32),r(242),r(377),r(77),r(82);var n=r(0);var o,c=r(98);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},398:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{items:[{icon:"mdi-hammer-screwdriver",title:"Craft",subtitle:"Create, upgrade, repare items"},{icon:"mdi-cart-outline",title:"NFT + NPC Marketplace",subtitle:"Buy/Sell in-game items"},{icon:"mdi-circle-multiple-outline",title:"Staking",subtitle:"POG for NFT items"},{icon:"mdi-airballoon",title:"Rewards",subtitle:"FARM, Quests, PVP fight etc."}]}}},o=r(26),c=r(41),l=r.n(c),d=r(432),f=r(379),m=r(168),v=r(433),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{fluid:"","no-gutters":""}},t._l(t.items,(function(i,e){return r("v-col",{key:e,attrs:{cols:"12",lg:"6",sm:"12"}},[r("square",{style:"background: "+i.color},[r("div",{staticClass:"text-center"},[r("v-icon",{staticClass:"mb-5",staticStyle:{"font-size":"4rem"},attrs:{"x-large":""}},[t._v(t._s(i.icon))]),t._v(" "),r("div",{staticClass:"section-title"},[t._v(" "+t._s(i.title))]),t._v(" "),r("div",{staticClass:"section-subtitle mt-5"},[t._v(" "+t._s(i.subtitle))])],1)])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VIcon:m.a,VRow:v.a})}}]);