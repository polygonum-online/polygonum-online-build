(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{428:function(e,t,o){"use strict";o(21),o(61);var n=o(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var o=this;this.clearDelay();var n=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){o.isActive={open:!0,close:!1}[e]},n)}}}),l=o(56),r=o(5),c=o(10);t.a=Object(r.a)(n,l.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},466:function(e,t,o){"use strict";o.r(t);var n=o(27),l=o(37),r=o.n(l),c=o(407),v=o(428),d=o(183),h=o(409),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{margin:"2rem 0"}},[o("v-row",{attrs:{fluid:"","no-gutters":""}},[o("v-col",{staticClass:"p-relative",attrs:{cols:"12",lg:"6",sm:"12"}},[o("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[o("square",{staticClass:"section-fullsize",staticStyle:{background:"#121212"}},[o("a",{attrs:{target:"_blank",href:"https://docs.google.com/presentation/d/11jlo-kyGmODtYgAUz0f6iaoP0H5uqn8q2ci3D3oa1QI/"}},[e._v("\n                                🎤 + 📜 = Pitch Deck\n                                "),n?o("v-overlay",{attrs:{absolute:"",color:"primary"}}):e._e()],1)])]}}])})],1),e._v(" "),o("v-col",{staticClass:"p-relative",attrs:{cols:"12",lg:"6",sm:"12"}},[o("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[o("square",{staticClass:"section-fullsize"},[o("a",{attrs:{target:"_blank",href:"https://drive.google.com/file/d/1S-3m99z_mKIsOi6WA5e8tyGwhnnqZo2B/view"}},[e._v("\n                            🧻 Witepaper\n                            "),n?o("v-overlay",{attrs:{absolute:"",color:"primary"}}):e._e()],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;r()(component,{VCol:c.a,VHover:v.a,VOverlay:d.a,VRow:h.a})}}]);