webpackJsonp([1],{Lvey:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"main-menu navbar-expand-md"},[s("div",{staticClass:"navbar-header"},[s("button",{staticClass:"navbar-toggler",attrs:{type:"button","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"})])]),t._v(" "),s("div",{staticClass:"navbar-collapse collapse clearfix",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navigation clearfix"},[s("li",{staticClass:"menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor\n            current-menu-parent menu-item-has-children menu-item-13 dropdown current",attrs:{id:"menu-item-13"}},[s("a",{staticClass:"hvr-underline-from-left1",attrs:{title:"Home",href:"http://commonsupport.net/newwp/limerick/portfolio-home/#","data-toggle":"dropdown1","aria-expanded":"false","data-scroll":"","data-options":"easing: easeOutQuart"}},[t._v("Home")]),t._v(" "),s("div",{staticClass:"dropdown-btn"},[s("span",{staticClass:"fa fa-angle-down"})])]),t._v(" "),s("li",{staticClass:"menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-27 dropdown",attrs:{id:"menu-item-27"}},[s("a",{staticClass:"hvr-underline-from-left1",attrs:{title:"About",href:"http://commonsupport.net/newwp/limerick/portfolio-home/#","data-toggle":"dropdown1","aria-expanded":"false","data-scroll":"","data-options":"easing: easeOutQuart"}},[t._v("About")]),t._v(" "),s("div",{staticClass:"dropdown-btn"},[s("span",{staticClass:"fa fa-angle-down"})])])])])])}]};var n={components:{CMenu:s("VU/8")({},i,!1,function(t){s("sH5X")},"data-v-3aaca29a",null).exports},props:{},methods:{bindHeader:function(){var t=document.getElementsByClassName("main-header");if(t.length){t=t[0];var a=document.getElementsByClassName("scroll-to-top")[0];window.addEventListener("scroll",function(){document.documentElement.scrollTop>120?(t.classList.add("fixed-header"),a.style.display="block"):(t.classList.remove("fixed-header"),a.style.display="none")},!1)}}},mounted:function(){this.bindHeader()}},o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"main-header header-style-three"},[a("div",{staticClass:"large-letter"},[this._v("PRODUTOS")]),this._v(" "),a("div",{staticClass:"header-upper"},[a("div",{staticClass:"outer-container"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"pull-left logo-box"},[a("div",{staticClass:"logo"},[a("a",{attrs:{href:""}},[this._v("\n              brechó"),a("span",{staticClass:"first"},[this._v("da")]),this._v("bella\n            ")])])]),this._v(" "),a("div",{staticClass:"nav-outer clearfix"},[a("div",{staticClass:"outer-box clearfix"},[a("div",{staticClass:"social-nav"},[a("a",{attrs:{href:"https://www.facebook.com/"}},[a("span",{staticClass:"fa fa-facebook"})]),this._v(" "),a("a",{attrs:{href:"https://www.twitter.com/"}},[a("span",{staticClass:"fa fa-instagram"})])])])])])])])])}]};var r={components:{CHeader:s("VU/8")(n,o,!1,function(t){s("Lvey")},"data-v-74f83c40",null).exports},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},name:"App"},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("c-header"),this._v(" "),a("router-view"),this._v(" "),a("div",{staticClass:"scroll-to-top scroll-to-target",staticStyle:{display:"none"},attrs:{"data-target":"html"},on:{click:this.scrollTop}},[a("span",{staticClass:"icon fa fa-angle-double-up"})])],1)},staticRenderFns:[]};var l=s("VU/8")(r,c,!1,function(t){s("wntx")},null,null).exports,d=s("/ocq"),p=s("Xxa5"),u=s.n(p),v=s("exGp"),m=s.n(v),f={data:function(){return{preloader:!1,products:[]}},methods:{getProducts:function(){var t=this;return m()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preloader=!0,a.next=3,window.axios.get("https://vue-flix-backend.herokuapp.com/sales/home").then(function(a){t.preloader=!1,t.products=a.data}).catch(function(a){console.log(a),t.preloader=!1});case 3:case"end":return a.stop()}},a,t)}))()}},mounted:function(){this.getProducts()}},h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.preloader?s("div",{staticClass:"preloader",staticStyle:{display:"block"}}):t._e(),t._v(" "),s("div",{staticClass:"kc_clfw"}),t._v(" "),s("section",{staticClass:"kc-elm kc-css-408608 kc_row"},[s("div",{staticClass:"kc-row-container"},[s("div",{staticClass:"kc-wrap-columns"},[s("div",{staticClass:"kc-elm kc-css-316878 kc_col-sm-12 kc_column kc_col-sm-12"},[s("div",{staticClass:"kc-col-container"},[t._m(0),t._v(" "),s("section",{staticClass:"gallery-section-two"},[s("div",{staticClass:"outer-container"},[s("div",{staticClass:"row clearfix"},t._l(t.products,function(a){return s("div",{key:"prod-"+a.id,staticClass:"gallery-block-three col-xl-2 col-lg-3 col-md-4 com-sm-12"},[s("div",{staticClass:"inner-box wow fadeInUp animated",staticStyle:{visibility:"visible","animation-delay":"400ms","animation-name":"fadeInUp"}},[s("div",{staticClass:"image"},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"corner-text-wrapper"},[s("div",{staticClass:"corner-text",class:{free:!a.price}},[s("span",[t._v(t._s(a.price?"R$ "+a.price:"GRÁTIS"))])])]),t._v(" "),s("img",{staticClass:"wp-post-image",attrs:{width:"200",height:"200",src:"../../static/img/"+a.image,alt:"",sizes:"(max-width: 200px) 100vw, 200px"}})])]),t._v(" "),s("div",{staticClass:"lower-box"},[s("h3",[s("a",{attrs:{href:"#"}},[t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"category"},[t._v(t._s(a.type)+" - Bloco 7 Apart 203")])])])])}),0)])])])])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"banner-section"},[s("div",{staticClass:"pattern-one paroller"}),t._v(" "),s("div",{staticClass:"pattern-two paroller"}),t._v(" "),s("div",{staticClass:"auto-container"},[s("div",{staticClass:"inner-section"},[s("div",{staticClass:"title style-two"},[s("span",[t._v("Seja bem vindo!")]),s("i",{staticClass:"paroller"})]),t._v(" "),s("h2",{staticClass:"style-two"},[s("strong",[t._v("Nossos produtos")]),t._v(" "),s("i",{staticClass:"paroller"})]),t._v(" "),s("div",{staticClass:"text"},[t._v("\n                    Temos itens usados e semi novos... todos em perfeito\n                    estado de uso\n                  ")])])])])}]};var C=s("VU/8")(f,h,!1,function(t){s("QWJq")},"data-v-494896b9",null).exports;e.a.use(d.a);var _=new d.a({routes:[{path:"/",name:"Home",component:C}]});window.axios=s("mtWM"),e.a.config.productionTip=!1,new e.a({el:"#app",router:_,components:{App:l},template:"<App/>"})},QWJq:function(t,a){},sH5X:function(t,a){},wntx:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.35cd4f9c1fd3bb122d15.js.map