(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11],{428:function(t,e,n){"use strict";n(21),n(61);var o=n(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}}),r=n(56),l=n(5),c=n(10);e.a=Object(l.a)(o,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},430:function(t,e,n){"use strict";n.r(e);var o={props:["i"],data:function(){return{}}},r=n(27),l=n(37),c=n.n(l),d=n(185),v=n(152),m=n(115),h=n(428),f=n(149),y=n(183),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("a",{staticClass:"text-decoration-none",attrs:{href:t.i.url,target:"_blank"}},[n("v-card",{staticClass:"rounded-0",staticStyle:{cursor:"pointer"},attrs:{color:"transparent"}},[n("v-img",{staticClass:"rounded-0",attrs:{height:"",src:t.i.img}},[n("v-fade-transition",[o?n("v-overlay",{attrs:{absolute:"",color:"primary"}},[t._v("\n                            👉 Learn more\n                        ")]):t._e()],1)],1),t._v(" "),n("v-card-text",[n("v-card-title",{staticClass:"white--text"},[t._v(t._s(t.i.title))])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.c,VCardTitle:v.d,VFadeTransition:m.b,VHover:h.a,VImg:f.a,VOverlay:y.a})},462:function(t,e,n){"use strict";n.r(e);n(52),n(22),n(6),n(62),n(269);var o={data:function(){return{items:[],show:2,more:!1}},computed:{updatedItems:function(){var t=this.more?this.items.length:3;return this.items.slice(0,t)}},mounted:function(){this.posts()},methods:{posts:function(){var t=this;fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/polygonum-online").then((function(t){return t.json()})).then((function(data){if(data&&data.items){var e=data.items.filter((function(i){return i.categories.length>0&&i.thumbnail}));t.items=e.map((function(i){return{title:i.title,url:i.link,img:i.thumbnail}}))}}))}},components:{item:n(430).default}},r=n(27),l=n(37),c=n.n(l),d=n(413),v=n(407),m=n(414),h=n(409),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h50"},[n("titleSection",[t._v("📝 Blog")]),t._v(" "),n("v-container",[n("v-row",{staticClass:"d-flex"},t._l(t.updatedItems,(function(i,t){return n("v-col",{key:t,attrs:{cols:"12",lg:"4",sm:"12"}},[n("item",{attrs:{i:i}})],1)})),1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{text:""},on:{click:function(e){t.more=!t.more}}},[t._v(t._s(t.more?"❌ Close":"👇 Load more"))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VContainer:m.a,VRow:h.a})}}]);