(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{435:function(e,t,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("7132a15d",content,!0,{sourceMap:!1})},436:function(e,t,r){var o=r(11)(!1);o.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=o},474:function(e,t,r){"use strict";r(9),r(7),r(6),r(14),r(8),r(15);var o=r(2),n=(r(435),r(32));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},491:function(e,t,r){"use strict";r(22),r(54);var o=r(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var r=this;this.clearDelay();var o=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){r.isActive={open:!0,close:!1}[e]},o)}}}),n=r(50),l=r(5),c=r(10);t.a=Object(l.a)(o,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},973:function(e,t,r){e.exports=r.p+"img/community-public-sale.3ae0470.jpg"},974:function(e,t,r){e.exports=r.p+"img/daomaker.29c2e16.jpg"},975:function(e,t,r){e.exports=r.p+"img/gamefi.545ff3b.jpg"},976:function(e,t,r){e.exports=r.p+"img/redkite.3383f75.jpg"},996:function(e,t,r){"use strict";r.r(t);var o=r(973),n=r.n(o),l=r(974),c=r.n(l),d=r(975),v=r.n(d),h=r(976),m=r.n(h),f={data:function(){return{items:[[n.a,"23th","https://gleam.io/A1I5e/po-ps",!0],[c.a,"15th ","https://daomaker.com/company/polygonum-online",!0],[v.a,"22th","https://hub.gamefi.org/#/buy-token/53"],[m.a,"26th","https://redkite.polkafoundry.com/#/buy-token/109"]]}}},y=r(20),x=r(33),O=r.n(x),j=r(177),w=r(150),k=r(987),_=r(417),D=r(474),S=r(491),P=r(147),T=r(176),V=r(988),component=Object(y.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("title-section",[e._v(" Roadmap ")]),e._v(" "),r("v-container",[r("v-row",e._l(e.items,(function(i,t){return r("v-col",{key:t,attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[r("a",{staticClass:"text-decoration-none",attrs:{href:i[2],target:"_blank"}},[r("v-card",{attrs:{color:"transparent"}},[r("v-img",{attrs:{src:i[0]}},[o?r("v-overlay",{attrs:{absolute:"",color:"primary"}}):e._e()],1),e._v(" "),r("v-card-title",{staticClass:"text-h5 justify-center",domProps:{textContent:e._s(i[1])}})],1)],1)]}}],null,!0)})],1)})),1)],1),e._v(" "),r("v-divider",{staticStyle:{margin:"2rem 0"}})],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VCard:j.a,VCardTitle:w.d,VCol:k.a,VContainer:_.a,VDivider:D.a,VHover:S.a,VImg:P.a,VOverlay:T.a,VRow:V.a})}}]);