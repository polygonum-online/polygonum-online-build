(window.webpackJsonp=window.webpackJsonp||[]).push([[29,20],{1031:function(e,t,n){"use strict";n.r(t);n(23),n(46),n(47);var r={head:function(){return{title:"Polygonum Online - Blockchain game with NFT Marketplace and Open World"}},jsonld:function(){return{"@context":"https://schema.org","@type":"Organization",url:"https://polygonum.online",email:"support@polygonum.online",founder:"Nikita Marcius",name:"Polygonum Online",legalName:"Polygonum Online",description:"Free-to-play, cross-platform multiplayer game with Crypto, NFT Marketplace and Open World. Earn money on everything!",parentOrganization:{"@type":"Organization",name:"Marcius Capital",legalName:"Marcius Capital",url:"https://marcius.capital",logo:"https://marcius.studio/logo.jpg"}}},components:{aboutSection:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,1032))},youtubeSection:function(){return n.e(13).then(n.bind(null,1037))},tmultiblock:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(14),n.e(33)]).then(n.bind(null,1021))},featuresSection:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,1033))},tokenSection:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,1039))},tokenomicsSection:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,1040))},teamSection:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,1036))},docsSection:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,1042))},blogSection:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,1038))},partnersSection:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,1034))},actionSection:function(){return n.e(5).then(n.bind(null,1041))}}},o=n(20),l=n(33),c=n.n(l),d=n(461),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("aboutSection"),e._v(" "),n("tmultiblock"),e._v(" "),n("featuresSection"),e._v(" "),n("tokenomicsSection"),e._v(" "),n("teamSection"),e._v(" "),n("docsSection"),e._v(" "),n("blogSection"),e._v(" "),n("v-divider",{staticStyle:{margin:"2rem 0"}}),e._v(" "),n("partnersSection")],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VDivider:d.a})},433:function(e,t,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("7132a15d",content,!0,{sourceMap:!1})},434:function(e,t,n){var r=n(11)(!1);r.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=r},461:function(e,t,n){"use strict";n(9),n(7),n(6),n(14),n(8),n(15);var r=n(2),o=(n(433),n(28));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})}}]);