(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{426:function(t,e,n){"use strict";n(21),n(61);var o=n(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}}),r=n(56),c=n(5),l=n(10);e.a=Object(c.a)(o,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},439:function(t,e,n){t.exports=n.p+"img/dao.d52194d.png"},440:function(t,e,n){t.exports=n.p+"img/icetea.0143fab.png"},441:function(t,e,n){t.exports=n.p+"img/morningstar.1b1fbd7.png"},442:function(t,e,n){t.exports=n.p+"img/marciuscapital.d04e8bf.png"},443:function(t,e,n){t.exports=n.p+"img/idoresearch.3ae9a9e.png"},444:function(t,e,n){t.exports=n.p+"img/metrixcapital.793855f.png"},445:function(t,e,n){t.exports=n.p+"img/zbscapital.3718325.png"},446:function(t,e,n){t.exports=n.p+"img/raptor.5724a51.png"},447:function(t,e,n){t.exports=n.p+"img/kyros.1e01b1c.png"},448:function(t,e,n){t.exports=n.p+"img/reblock.1afc330.png"},449:function(t,e,n){t.exports=n.p+"img/111PG.5387abe.png"},450:function(t,e,n){t.exports=n.p+"img/redkite.70cd040.png"},451:function(t,e,n){t.exports=n.p+"img/gamefi.0a93ad0.png"},457:function(t,e,n){"use strict";n.r(e);var o=n(439),r=n.n(o),c=n(440),l=n.n(c),d=n(441),f=n.n(d),m=n(442),h=n.n(m),v=n(443),y=n.n(v),x=n(444),k=n.n(x),w=n(445),T=n.n(w),D=n(446),_=n.n(D),S=n(447),A=n.n(S),V=n(448),j=n.n(V),C=n(449),O=n.n(C),M=n(450),$=n.n(M),E=n(451),z=n.n(E),B={data:function(){return{items:[[r.a,"https://daomaker.com/"],[l.a,"https://icetea.io/"],[f.a,"https://morningstar.ventures/"],[h.a,"https://twitter.com/marciuscapital"],[y.a,"http://idoresearch.ventures"],[k.a,"https://metrix.capital/"],[T.a,"https://zbs.capital/"],[_.a,"https://www.raptorcapital.io/"],[A.a,"https://kyros.ventures/"],[j.a,"https://reblock.net/"],[$.a,"https://redkite.polkafoundry.com/"],[z.a,"https://gamefi.org/"],[O.a,"https://111pg.io/"]]}}},J=n(27),L=n(37),N=n.n(L),F=n(404),G=n(411),H=n(115),I=n(426),P=n(181),R=n(406),component=Object(J.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h50 d-flex align-center"},[n("v-container",[n("v-row",t._l(t.items,(function(i){return n("v-col",{key:i,staticClass:"d-flex justify-center align-center",attrs:{cols:"12",lg:"3",ms:"6",sm:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("div",{staticClass:"p-relative"},[n("img",{attrs:{src:i[0],alt:""}}),t._v(" "),n("v-fade-transition",[n("a",{attrs:{href:i[1],target:"_blank",rel:"nofollow"}},[o?n("v-overlay",{attrs:{absolute:"",color:"primary"}}):t._e()],1)])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;N()(component,{VCol:F.a,VContainer:G.a,VFadeTransition:H.b,VHover:I.a,VOverlay:P.a,VRow:R.a})}}]);