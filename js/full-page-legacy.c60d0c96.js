(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["full-page"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?a(t):o(n(t))}},"3ca3d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card-component",{attrs:{title:"Login",icon:"lock","has-card-header-background":!1,"has-title-slot":""}},[r("h1",{staticClass:"title is-5 has-text-white",attrs:{slot:"title"},slot:"title"},[t._v("Sign In your Account")]),r("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-field",[r("b-input",{attrs:{icon:"account",name:"username",type:"username",placeholder:"Username",required:"",autofocus:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("b-field",[r("b-input",{attrs:{icon:"lock","password-reveal":"",type:"password",placeholder:"Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-field",[r("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"}},[t._v(" Remember me ")])],1),r("hr"),r("b-field",[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Login ")])])])],1)])},o=[],s=(r("96cf"),r("1da1")),i=(r("13d5"),r("b64b"),{data:function(){return{redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},methods:{getOtherQuery:function(t){return Object.keys(t).reduce((function(e,r){return"redirect"!==r&&(e[r]=t[r]),e}),{})}}}),a=i,c={name:"Login",mixins:[a],data:function(){return{isLoading:!1,form:{username:"",password:""}}},methods:{submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.$store.dispatch("login",t.form);case 4:t.$router.push({path:t.redirect||"/",query:t.otherQuery}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),t.$buefy.snackbar.open({message:e.t0.data.detail,position:"is-bottom",type:"is-danger"});case 10:return e.prev=10,t.isLoading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})))()}}},u=c,l=r("2877"),f=Object(l["a"])(u,n,o,!1,null,null,null);e["default"]=f.exports},5035:function(t,e){t.exports={mounted:function(){this.$store.commit("fullPage",!0),this.$store.commit("asideRightToggle",!1)},beforeDestroy:function(){this.$store.commit("fullPage",!1)}}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},5673:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section hero is-fullheight is-error-section login-container",staticStyle:{background:"url('https://www.aaaimx.org/img/sections-background/hero.jpg')","background-size":"cover"}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-two-fifths"},[r("router-view")],1)])])]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-foot has-text-centered"},[r("div",{staticClass:"logo"})])}],s=r("5035"),i=r.n(s),a={name:"FullPage",mixins:[i.a]},c=a,u=r("2877"),l=Object(u["a"])(c,n,o,!1,null,null,null);e["default"]=l.exports},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),s=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:s.f(t)})}},"808f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"is-user-avatar"},[r("img",{attrs:{src:t.newUserAvatar,alt:t.userName}})])},o=[],s=(r("ac1f"),r("5319"),r("5530")),i=r("2f62"),a={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:Object(s["a"])({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var t="somename";return this.userName&&(t=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(t,".svg?options[mood][]=happy")}},Object(i["b"])(["userAvatar","userName"]))},c=a,u=r("2877"),l=Object(u["a"])(c,n,o,!1,null,null,null);e["a"]=l.exports},"8fc8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"has-text-centered"},[r("user-avatar",{staticClass:"has-max-width is-aligned-center error-page-icon"}),r("div",{staticClass:"error-page-caption"},[r("h1",[t._v(t._s(t.userName))])]),r("div",{staticClass:"error-page-action"},[t.isPasswordInputActive?r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-field",{attrs:{position:"is-centered"}},[r("b-input",{ref:"input",attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),r("div",{staticClass:"control"},[r("button",{staticClass:"button is-black",class:{"is-loading":t.isLoading},attrs:{type:"submit",disabled:!t.form.password}},[r("b-icon",{attrs:{icon:"lock-open","custom-size":"default"}})],1)])],1)],1):r("div",{staticClass:"buttons is-centered"},[r("button",{staticClass:"button is-black",attrs:{type:"button"},on:{click:t.passwordActivate}},[t._v(" Unlock ")])])])],1)},o=[],s=r("5530"),i=r("2f62"),a=r("808f"),c={name:"LockScreen",components:{UserAvatar:a["a"]},data:function(){return{isPasswordInputActive:!1,isLoading:!1,form:{password:null}}},computed:Object(s["a"])({},Object(i["b"])(["userName"])),methods:{passwordActivate:function(){var t=this;this.isPasswordInputActive=!0,this.$nextTick((function(){t.$refs.input.focus()}))},submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$router.push("/")}),750)}}},u=c,l=r("2877"),f=Object(l["a"])(u,n,o,!1,null,null,null);e["default"]=f.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),s=r("d066"),i=r("c430"),a=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),p=r("861d"),b=r("825a"),m=r("7b0b"),h=r("fc6a"),v=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),O=r("241c"),k=r("057f"),j=r("7418"),C=r("06cf"),P=r("9bf2"),_=r("d1e7"),S=r("9112"),x=r("6eeb"),$=r("5692"),E=r("f772"),N=r("d012"),A=r("90e3"),L=r("b622"),D=r("e538"),B=r("746f"),F=r("d44e"),I=r("69f3"),Q=r("b727").forEach,T=E("hidden"),U="Symbol",z="prototype",q=L("toPrimitive"),J=I.set,R=I.getterFor(U),G=Object[z],W=o.Symbol,H=s("JSON","stringify"),K=C.f,M=P.f,V=k.f,X=_.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),nt=o.QObject,ot=!nt||!nt[z]||!nt[z].findChild,st=a&&l((function(){return 7!=y(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(G,e);n&&delete G[e],M(t,e,r),n&&t!==G&&M(G,e,n)}:M,it=function(t,e){var r=Y[t]=y(W[z]);return J(r,{type:U,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,r){t===G&&ct(Z,e,r),b(t);var n=v(e,!0);return b(r),f(Y,n)?(r.enumerable?(f(t,T)&&t[T][n]&&(t[T][n]=!1),r=y(r,{enumerable:g(0,!1)})):(f(t,T)||M(t,T,g(1,{})),t[T][n]=!0),st(t,n,r)):M(t,n,r)},ut=function(t,e){b(t);var r=h(e),n=w(r).concat(bt(r));return Q(n,(function(e){a&&!ft.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===G&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,T)&&this[T][e])||r)},dt=function(t,e){var r=h(t),n=v(e,!0);if(r!==G||!f(Y,n)||f(Z,n)){var o=K(r,n);return!o||!f(Y,n)||f(r,T)&&r[T][n]||(o.enumerable=!0),o}},pt=function(t){var e=V(h(t)),r=[];return Q(e,(function(t){f(Y,t)||f(N,t)||r.push(t)})),r},bt=function(t){var e=t===G,r=V(e?Z:h(t)),n=[];return Q(r,(function(t){!f(Y,t)||e&&!f(G,t)||n.push(Y[t])})),n};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===G&&r.call(Z,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),st(this,e,g(1,t))};return a&&ot&&st(G,e,{configurable:!0,set:r}),it(e,t)},x(W[z],"toString",(function(){return R(this).tag})),x(W,"withoutSetter",(function(t){return it(A(t),t)})),_.f=ft,P.f=ct,C.f=dt,O.f=k.f=pt,j.f=bt,D.f=function(t){return it(L(t),t)},a&&(M(W[z],"description",{configurable:!0,get:function(){return R(this).description}}),i||x(G,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),Q(w(rt),(function(t){B(t)})),n({target:U,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:l((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(m(t))}}),H){var mt=!c||l((function(){var t=W();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,o=[t],s=1;while(arguments.length>s)o.push(arguments[s++]);if(n=e,(p(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,H.apply(null,o)}})}W[z][q]||S(W[z],q,W[z].valueOf),F(W,U),N[T]=!0},b914:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"has-text-centered"},[t.isInCard?r("card-component",{attrs:{title:"404 Not Found",icon:"alert","has-button-slot":!0,"has-card-header-background":!0}},[r("router-link",{staticClass:"button is-small",attrs:{slot:"button",to:"/"},slot:"button"},[r("b-icon",{attrs:{icon:"desktop-mac","custom-size":"default"}})],1),r("error-content",{attrs:{title:"404 Not Found"},on:{"go-back":t.goBack}})],1):r("error-content",{attrs:{title:"404 Not Found"},on:{"go-back":t.goBack}})],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"error-page-icon"},[r("b-icon",{attrs:{icon:"power-plug","custom-size":"default"}})],1),t._m(0),r("div",{staticClass:"error-page-action"},[r("div",{staticClass:"buttons is-centered"},[r("button",{staticClass:"button is-black",attrs:{type:"button"},on:{click:t.emitGoBack}},[t._v(" Go Back ")]),t._t("buttons")],2)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-page-caption"},[r("h1",[t._v("404 Page Not Found")])])}],a={name:"ErrorContent",props:{icon:{type:String,default:"power-plug"},title:{type:String,default:"Error"}},methods:{emitGoBack:function(){this.$emit("go-back")}}},c=a,u=r("2877"),l=Object(u["a"])(c,s,i,!1,null,null,null),f=l.exports,d={name:"Error",components:{ErrorContent:f},props:{isInCard:{type:Boolean,default:!0}},methods:{goBack:function(){this.$router.go(-1)}}},p=d,b=Object(u["a"])(p,n,o,!1,null,null,null);e["default"]=b.exports},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),s=r("56ef"),i=r("fc6a"),a=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=a.f,u=s(n),l={},f=0;while(u.length>f)r=o(n,e=u[f++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),s=r("fc6a"),i=r("06cf").f,a=r("83ab"),c=o((function(){i(1)})),u=!a||c;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=full-page-legacy.c60d0c96.js.map