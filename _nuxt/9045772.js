(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1e3:function(t,e,n){t.exports=n.p+"img/zbscapital.3718325.png"},1001:function(t,e,n){t.exports=n.p+"img/raptor.5724a51.png"},1002:function(t,e,n){t.exports=n.p+"img/kyros.1e01b1c.png"},1003:function(t,e,n){t.exports=n.p+"img/reblock.1afc330.png"},1004:function(t,e,n){t.exports=n.p+"img/111PG.5387abe.png"},1005:function(t,e,n){t.exports=n.p+"img/moonboots.d50a7b0.png"},1006:function(t,e,n){t.exports=n.p+"img/redkite.70cd040.png"},1007:function(t,e,n){t.exports=n.p+"img/gamefi.0a93ad0.png"},1008:function(t,e,n){t.exports=n.p+"img/skynet.677adeb.png"},1009:function(t,e,n){t.exports=n.p+"img/coinmarketcap.f2ca2ed.png"},1010:function(t,e,n){t.exports=n.p+"img/gate.f0b0ae2.png"},1033:function(t,e,n){"use strict";n.r(e);var o=n(994),r=n.n(o),c=n(995),l=n.n(c),d=n(996),m=n.n(d),f=n(997),h=n.n(f),v=n(998),y=n.n(v),x=n(999),k=n.n(x),w=n(1e3),_=n.n(w),T=n(1001),D=n.n(T),S=n(1002),A=n.n(S),C=n(1003),O=n.n(C),V=n(1004),j=n.n(V),M=n(1005),$=n.n(M),E=n(1006),z=n.n(E),B=n(1007),G=n.n(B),J=n(1008),L=n.n(J),N=n(1009),P=n.n(N),F=n(1010),H=n.n(F),I={data:function(){return{items:[[r.a,"https://daomaker.com/"],[l.a,"https://icetea.io/",!0],[m.a,"https://morningstar.ventures/",!0],[h.a,"https://twitter.com/marciuscapital"],[y.a,"http://idoresearch.ventures",!0],[k.a,"https://metrix.capital/"],[_.a,"https://zbs.capital/"],[D.a,"https://raptorcapital.io/"],[A.a,"https://kyros.ventures/"],[O.a,"https://reblock.net/"],[z.a,"https://redkite.polkafoundry.com/"],[G.a,"https://gamefi.org/"],[$.a,"https://moonbootscapital.io/",!0],[j.a,"https://111pg.io/"],[L.a,"https://skynettrading.com/"],[P.a,"https://coinmarketcap.com/currencies/polygonum-online/",!1,"dofollow"],[H.a,"https://www.gate.io/trade/POG_USDT"]]}}},R=n(20),U=n(33),K=n.n(U),Q=n(1024),W=n(424),X=n(102),Y=n(522),Z=n(176),tt=n(1025),component=Object(R.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h50 d-flex align-center"},[n("v-container",[n("v-row",t._l(t.items,(function(i,e){return n("v-col",{key:e,staticClass:"d-flex justify-center align-center",attrs:{cols:"12",lg:"3",md:"6",sm:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("div",{staticClass:"p-relative"},[i[2]?n("svg-icon",{staticClass:"section-badge--advisor",attrs:{name:"advisor",width:"5rem",height:"2rem"}}):t._e(),t._v(" "),n("img",{attrs:{src:i[0],alt:""}}),t._v(" "),n("v-fade-transition",[n("a",{attrs:{href:i[1],target:"_blank",rel:i[3]||"nofollow"}},[o?n("v-overlay",{attrs:{absolute:"",color:"primary"}}):t._e()],1)])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;K()(component,{VCol:Q.a,VContainer:W.a,VFadeTransition:X.c,VHover:Y.a,VOverlay:Z.a,VRow:tt.a})},436:function(t,e,n){"use strict";n(21),n(54);var o=n(0);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}})},522:function(t,e,n){"use strict";var o=n(436),r=n(48),c=n(4),l=n(10);e.a=Object(c.a)(o.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},994:function(t,e,n){t.exports=n.p+"img/dao.d52194d.png"},995:function(t,e,n){t.exports=n.p+"img/icetea.0143fab.png"},996:function(t,e,n){t.exports=n.p+"img/morningstar.1b1fbd7.png"},997:function(t,e,n){t.exports=n.p+"img/marciuscapital.d04e8bf.png"},998:function(t,e,n){t.exports=n.p+"img/idoresearch.3ae9a9e.png"},999:function(t,e,n){t.exports=n.p+"img/metrixcapital.793855f.png"}}]);