webpackJsonp([0],{"/JlQ":function(t,e){},"/Xp4":function(t,e){},"3EWg":function(t,e,n){t.exports=n.p+"static/img/facebook.5909b94.svg"},"8h8j":function(t,e,n){t.exports=n.p+"static/img/twitter.27d425c.svg"},"8uzc":function(t,e){},AqYs:function(t,e,n){t.exports=n.p+"static/img/logo.706d993.svg"},DN2v:function(t,e){},EpmH:function(t,e){},Ff1x:function(t,e){},GnO9:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:n("AqYs")}})])},staticRenderFns:[]};var r={data:function(){return{isActive:!1}},methods:{toggleMenu:function(){this.isActive=!this.isActive,console.log("menu item clicked ",this)},toggleActive:function(){this.isActive=!this.isActive,document.querySelector(".active").classList.toggle("active")}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("input",{attrs:{id:"menu-toggle",type:"checkbox"}}),t._v(" "),n("label",{staticClass:"menu-button-container",attrs:{for:"menu-toggle"}},[n("div",{staticClass:"menu-button",on:{click:function(e){return t.toggleMenu()}}})]),t._v(" "),n("ul",{staticClass:"menu",class:{active:t.isActive}},[n("li",[n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.toggleActive()}}},[t._v("About Us")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/history"},nativeOn:{click:function(e){return t.toggleActive()}}},[t._v("Our History")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/leaders"},nativeOn:{click:function(e){return t.toggleActive()}}},[t._v("Meet Our Leaders")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/roster"},nativeOn:{click:function(e){return t.toggleActive()}}},[t._v("Competitive Roster")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/join"},nativeOn:{click:function(e){return t.toggleActive()}}},[t._v("Join sKILLed-IT")])],1)])])},staticRenderFns:[]};var o={components:{Logo:n("VU/8")(null,i,!1,function(t){n("8uzc")},"data-v-524ab81b",null).exports,Nav:n("VU/8")(r,a,!1,function(t){n("Ff1x")},"data-v-60a520bb",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("Logo"),this._v(" "),e("Nav")],1)])},staticRenderFns:[]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"menu"},[e("li",[e("a",{attrs:{href:"https://www.facebook.com/skilleditclan",target:"_new"}},[e("img",{attrs:{src:n("3EWg")}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/sKILLedITClan",target:"_new"}},[e("img",{attrs:{src:n("8h8j")}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.tiktok.com/@skilleditclan",target:"_new"}},[e("img",{attrs:{src:n("kRPE")}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/channel/UC1qzIaUjgSiXOmjWvPDni7g",target:"_new"}},[e("img",{attrs:{src:n("ijs4")}})])])])])])}]};var l={name:"App",components:{Header:n("VU/8")(o,c,!1,function(t){n("d1bv")},"data-v-4e274d19",null).exports,Footer:n("VU/8")(null,u,!1,function(t){n("/JlQ")},"data-v-489562b5",null).exports},methods:{getClass:function(){var t=this.$route.path;return t.split("/")[1]?t.split("/")[1]:"home"}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.getClass(),attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var h=n("VU/8")(l,v,!1,function(t){n("XAOH")},null,null).exports,d=n("/ocq"),m={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v(this._s(this.msg))])},staticRenderFns:[]};var f=n("VU/8")({name:"Hero",data:function(){return{msg:"Our organization began with a vision, but the story is still being written"}}},m,!1,function(t){n("/Xp4")},"data-v-f7c9f286",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v(this._s(this.msg))])},staticRenderFns:[]};var g=n("VU/8")({name:"About",data:function(){return{msg:"About Us"}}},_,!1,function(t){n("Xyth")},"data-v-796da4cc",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v(this._s(this.msg))])},staticRenderFns:[]};var b=n("VU/8")({name:"History",data:function(){return{msg:"Our History"}}},p,!1,function(t){n("EpmH")},"data-v-1f5d97d4",null).exports,A={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v(this._s(this.msg))])},staticRenderFns:[]};var C=n("VU/8")({name:"Leaders",data:function(){return{msg:"Meet Our Leaders"}}},A,!1,function(t){n("ZTBZ")},"data-v-20026fa1",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v(this._s(this.msg))])},staticRenderFns:[]};var k=n("VU/8")({name:"Roster",data:function(){return{msg:"Competitive Roster"}}},x,!1,function(t){n("DN2v")},"data-v-a4e5546a",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h3",[t._v(t._s(t.joinMsg))]),t._v(" "),n("h5",[t._v("*Must be 18 Years or Older.*")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"games"},[s("div",{staticClass:"warzone"},[s("img",{attrs:{src:n("ZMvt")}}),t._v(" "),s("div",{staticClass:"games__leaders"},[s("h4",[t._v("Director of Call of Duty: Warzone")]),t._v(" "),s("h6",[t._v("Casey - "),s("span",[t._v("NoneYuhhhBiZz#1597")])]),t._v(" "),s("h4",[t._v("Call of Duty: Warzone Competitive Coordinator")]),t._v(" "),s("h6",[t._v("Morgan - "),s("span",[t._v("MisterVortex#5603")])])])]),t._v(" "),s("span",[t._v("\n      For Assistance, Questions, or Concerns regarding our Warzone or Apex Legends Branches, you may contact the following members via Discord Direct Message.\n    ")]),t._v(" "),s("div",{staticClass:"apex"},[s("img",{attrs:{src:n("g2iO")}}),t._v(" "),s("div",{staticClass:"games__leaders"},[s("h4",[t._v("Director of Apex Legends:")]),t._v(" "),s("h6",[t._v("Rodney - "),s("span",[t._v("icedademonking#4619")])]),t._v(" "),s("h4",[t._v("Apex Legends Competitive Coordinator:")]),t._v(" "),s("h6",[t._v("Alex - "),s("span",[t._v("Swift#9951")])])])])])}]};var y=n("VU/8")({name:"Join",data:function(){return{msg:"Apply Today to become a sKILLed-IT Member!",joinMsg:"Select the application you would like to complete now!"}}},w,!1,function(t){n("GnO9")},"data-v-2d2d8cbc",null).exports;s.a.use(d.a);var E=new d.a({routes:[{path:"/",name:"Hero",component:f},{path:"/about",name:"About",component:g},{path:"/history",name:"History",component:b},{path:"/leaders",name:"Leaders",component:C},{path:"/roster",name:"Roster",component:k},{path:"/join",name:"Join",component:y}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:E,components:{App:h},template:"<App/>"})},XAOH:function(t,e){},Xyth:function(t,e){},ZMvt:function(t,e,n){t.exports=n.p+"static/img/warzone-art.5f9a72e.svg"},ZTBZ:function(t,e){},d1bv:function(t,e){},g2iO:function(t,e,n){t.exports=n.p+"static/img/apex-art.6365c53.svg"},ijs4:function(t,e,n){t.exports=n.p+"static/img/youtube.0b1d7a1.svg"},kRPE:function(t,e,n){t.exports=n.p+"static/img/tiktok.9a0ce23.svg"}},["NHnr"]);