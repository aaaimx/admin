(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function s(e){return l.p+"js/"+({"certificate-form~event-form~profile":"certificate-form~event-form~profile","certificate-form":"certificate-form","event-form":"event-form",profile:"profile",certificates:"certificates",default:"default","full-page":"full-page"}[e]||e)+"-legacy."+{"certificate-form~event-form~profile":"48fafba4","certificate-form":"940acb88","event-form":"5feeaf65",profile:"ac21a89b",certificates:"f2ac825d",default:"2e39f5d8","full-page":"3262f26e"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"certificate-form~event-form~profile":1,profile:1,certificates:1,"full-page":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({"certificate-form~event-form~profile":"certificate-form~event-form~profile","certificate-form":"certificate-form","event-form":"event-form",profile:"profile",certificates:"certificates",default:"default","full-page":"full-page"}[e]||e)+"."+{"certificate-form~event-form~profile":"006daab7","certificate-form":"31d6cfe0","event-form":"31d6cfe0",profile:"89611cf6",certificates:"1fc78545",default:"31d6cfe0","full-page":"8033d790"}[e]+".css",r=l.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===r))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],c=u.getAttribute("data-href");if(c===a||c===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],d.parentNode.removeChild(d),n(o)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var f=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",f.name="ChunkLoadError",f.type=a,f.request=i,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/aaaimx-admin/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0622":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card-component",{attrs:{title:e.title,icon:e.icon,"is-scrollable":!0,"has-button-slot":!0,"has-footer-slot":!0},on:{"ps-ready":e.psReady}},[n("refresh-button",{attrs:{slot:"button","is-loading":e.isLoading},on:{"button-click":e.delayedFetch},slot:"button"}),n("card-toolbar",{staticClass:"is-upper",class:e.status.toolbarClass?e.status.toolbarClass:null,attrs:{slot:"toolbar"},slot:"toolbar"},[e.status.text?n("div",{attrs:{slot:"left"},slot:"left"},[e._v(e._s(e.status.text))]):e._e(),e.status.label||e.status.labelIcon?n("span",{staticClass:"tag",class:e.status.labelClass,attrs:{slot:"right"},slot:"right"},[e.status.labelIcon?n("b-icon",{attrs:{icon:e.status.labelIcon,"custom-size":"default"}}):e._e(),e.status.label?n("span",[e._v(e._s(e.status.label))]):e._e()],1):e._e()]),n("div",{staticClass:"media-list"},[n("b-loading",{attrs:{"is-full-page":!1,active:e.isLoading}}),e._l(e.items,(function(t){return n("media-item",{key:t.id,attrs:{item:t,"has-share-buttons":e.hasShareButtons,"has-dismiss":e.hasDismiss}})}))],2),n("a",{staticClass:"card-footer-item",attrs:{slot:"footer"},on:{click:function(t){return t.preventDefault(),e.delayedFetch(t)}},slot:"footer"},[n("b-icon",{attrs:{icon:"autorenew","custom-size":"default"}}),n("span",[e._v("Load more")])],1)],1)},i=[],r=n("bc3a"),o=n.n(r),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isDismissed?e._e():n("article",{staticClass:"media"},[e.item.avatar?n("figure",{staticClass:"media-left"},[n("p",{staticClass:"image is-64x64"},[n("img",{staticClass:"is-rounded",attrs:{src:e.item.avatar}})])]):e._e(),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("p",{staticClass:"media-meta"},[n("strong",[e._v(e._s(e.item.name))]),e.item.login?n("small",[e._v("@"+e._s(e.item.login))]):e._e(),n("small",{staticClass:"has-text-grey"},[e._v(e._s(e.item.ago))])]),n("p",[e._v(" "+e._s(e.item.text)+" ")])]),e.hasShareButtons?n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("a",{staticClass:"level-item"},[n("b-icon",{attrs:{icon:"reply","custom-size":"default"}})],1),n("a",{staticClass:"level-item"},[n("b-icon",{attrs:{icon:"twitter-retweet","custom-size":"default"}})],1),n("a",{staticClass:"level-item"},[n("b-icon",{attrs:{icon:"heart-outline","custom-size":"default"}})],1)])]):e._e()]),e.hasDismiss?n("div",{staticClass:"media-right",on:{click:e.dismiss}},[n("button",{staticClass:"delete"})]):e._e()])},l=[],u={name:"MediaItem",props:{item:{type:Object,default:function(){}},hasShareButtons:{type:Boolean,default:!1},hasDismiss:{type:Boolean,default:!1}},data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},c=u,f=n("2877"),d=Object(f["a"])(c,s,l,!1,null,null,null),m=d.exports,p=n("7b7e"),h={name:"CardScrollable",components:{RefreshButton:p["default"],MediaItem:m},props:{title:{type:String,default:null},icon:{type:String,default:null},dataUrl:{type:String,default:null},hasShareButtons:{type:Boolean,default:!1},hasDismiss:{type:Boolean,default:!1}},data:function(){return{isLoading:!1,items:[],status:{}}},mounted:function(){this.fetchData()},methods:{psReady:function(e){this.ps=e},delayedFetch:function(){var e=this;this.isLoading=!0,this.items=[],this.status={text:"Fetching data...",labelClass:"is-info",labelIcon:"shuffle-variant"},setTimeout((function(){e.fetchData()}),500)},fetchData:function(){var e=this;this.isLoading=!0,this.items=[],this.status={text:"Fetching data...",labelClass:"is-info",labelIcon:"shuffle-variant"},o.a.get(this.dataUrl).then((function(t){e.isLoading=!1,t.data&&(t.data.data&&(e.items=t.data.data),t.data.status&&(e.status=t.data.status)),e.$nextTick((function(){e.ps&&e.ps.update()}))})).catch((function(t){e.isLoading=!1,e.$buefy.toast.open({message:"Error: ".concat(t.message),type:"is-danger"})}))},loadMore:function(){this.$buefy.toast.open({message:"Some action happened",type:"is-info",queue:!1})}}},v=h,b=Object(f["a"])(v,a,i,!1,null,null,null);t["default"]=b.exports},"07ef":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"is-flex is-justify-content-space-between"},[n("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:e._u([{key:"trigger",fn:function(t){var a=t.active;return n("button",{staticClass:"button is-secondary is-small"},[n("span",[e._v("Per page: "+e._s(e.listQuery.limit))]),n("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}]),model:{value:e.listQuery.limit,callback:function(t){e.$set(e.listQuery,"limit",t)},expression:"listQuery.limit"}},[n("b-dropdown-item",{attrs:{"aria-role":"listitem",value:5}},[e._v("5")]),n("b-dropdown-item",{attrs:{"aria-role":"listitem",value:10}},[e._v("10")]),n("b-dropdown-item",{attrs:{"aria-role":"listitem",value:25}},[e._v("25")]),n("b-dropdown-item",{attrs:{"aria-role":"listitem",value:50}},[e._v("50")])],1),n("b-pagination",{attrs:{total:e.total,simple:!1,rounded:!1,size:"is-small","per-page":e.listQuery.limit,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:e.listQuery.page,callback:function(t){e.$set(e.listQuery,"page",t)},expression:"listQuery.page"}})],1)},i=[],r=(n("a9e3"),{props:{total:{type:Number,default:0},listQuery:{type:Object}}}),o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);t["default"]=l.exports},"2cad":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,a){return n("div",{key:a,staticClass:"control"},[n("b-radio",{attrs:{"native-value":a,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},i=[],r={name:"RadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:null}},data:function(){return{newValue:null}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}},watch:{value:function(e){this.newValue=e}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);t["default"]=l.exports},"3d1d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card-component",{staticClass:"is-card-widget",attrs:{icon:e.trendingIcon,"has-button-slot":!0,"has-title-slot":!0}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("b",[e._v(e._s(e.previousValue))]),e._v(" in "),n("b",[e._v(e._s(e.previousPeriod))])]),n("button",{staticClass:"button is-small",attrs:{slot:"button",type:"button"},on:{click:e.buttonClick},slot:"button"},[n("b-icon",{attrs:{icon:"settings","custom-size":"default"}})],1),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item"},[n("div",{staticClass:"is-widget-label"},[n("h3",{staticClass:"subtitle is-spaced"},[e._v(" "+e._s(e.label)+" ")]),n("h1",{staticClass:"title"},[n("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])]),e.icon?n("div",{staticClass:"level-item has-widget-icon"},[n("div",{staticClass:"is-widget-icon"},[n("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e()])])},i=[],r=(n("a9e3"),n("6612")),o=n.n(r),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix)+" ")])},l=[],u={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data:function(){return{newValue:0,step:0}},computed:{newValueFormatted:function(){return this.newValue<1e3?this.newValue:o()(this.newValue).format("0,0")}},mounted:function(){this.growInit()},methods:{growInit:function(){var e=this.value/(this.duration/25);this.grow(e)},grow:function(e){var t=this,n=Math.ceil(this.newValue+e);if(n>this.value)return this.newValue=this.value,!1;this.newValue=n,setTimeout((function(){t.grow(e)}),25)}},watch:{value:function(){this.growInit()}}},c=u,f=n("2877"),d=Object(f["a"])(c,s,l,!1,null,null,null),m=d.exports,p={name:"CardWidget",components:{GrowingNumber:m},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null},previousNumber:{type:Number,default:0},previousPeriod:{type:String,default:null}},computed:{trendingIcon:function(){return this.previousNumber<this.number?"arrow-up-bold":"arrow-down-bold"},previousValue:function(){var e=this.previousNumber<1e3?this.previousNumber:o()(this.previousNumber).format("0,0");return this.prefix&&(e=this.prefix+e),this.suffix&&(e+=this.suffix),e}},methods:{buttonClick:function(){this.$buefy.snackbar.open({message:"Got click",queue:!1})}}},h=p,v=Object(f["a"])(h,a,i,!1,null,null,null);t["default"]=v.exports},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"timeAgo",(function(){return E})),n.d(a,"numberFormatter",(function(){return O})),n.d(a,"toThousandFilter",(function(){return S})),n.d(a,"uppercaseFirst",(function(){return j})),n.d(a,"longDate",(function(){return T}));n("99af"),n("4de4"),n("4160"),n("13d5"),n("b64b"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b107");var i=n("2b0e"),r=n("289d"),o=n("9aa5"),s=n.n(o),l=(n("96cf"),n("1da1")),u=n("8c4f"),c=(n("b0c0"),n("498a"),n("2f62")),f=n("c641"),d=n.n(f),m=n("780a");function p(e){return Object(m["a"])({url:"/token/",method:"post",data:e})}function h(e){return Object(m["a"])({url:"/users/".concat(e,"/"),method:"get"})}function v(e){return Object(m["a"])({url:"/refresh/",method:"post",data:{refresh:e}})}function b(){return Object(m["a"])({url:"/divisions/",method:"get",params:{all:""}})}var g=n("5f87");i["a"].use(c["a"]);var y=new c["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,divisions:[],token:Object(g["c"])(),refresh:Object(g["c"])(),isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideExpanded:!1,isAsideMobileExpanded:!1,asideActiveForcedKey:null,isAsideRightVisible:!1,hasUpdates:!1,isOverlayVisible:!1,isDarkModeActive:!1},mutations:{basic:function(e,t){e[t.key]=t.value},user:function(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},fullPage:function(e,t){e.isNavBarVisible=!t,e.isAsideVisible=!t,e.isFooterBarVisible=!t,d()(["has-aside-left","has-navbar-fixed-top"],(function(e){t?document.documentElement.classList.remove(e):document.documentElement.classList.add(e)}))},asideStateToggle:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a="has-aside-expanded";t=null!==n?n:!e.isAsideExpanded,t?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideExpanded=t},asideMobileStateToggle:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a="has-aside-mobile-expanded";t=null!==n?n:!e.isAsideMobileExpanded,t?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideMobileExpanded=t},asideActiveForcedKeyToggle:function(e,t){e.asideActiveForcedKey=t&&t.menuSecondaryKey?t.menuSecondaryKey:null},asideRightToggle:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a="has-aside-right";t=null!==n?n:!e.isAsideRightVisible,t?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideRightVisible=t,e.hasUpdates=!1},overlayToggle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===t&&(t=!e.isOverlayVisible),e.isOverlayVisible=!!t},darkModeToggle:function(e){var t="is-dark-mode-active";e.isDarkModeActive=!e.isDarkModeActive,e.isDarkModeActive?document.documentElement.classList.add(t):document.documentElement.classList.remove(t)},SET_TOKEN:function(e,t){e.token=t},SET_REFRESH:function(e,t){e.refresh=t}},actions:{login:function(e,t){var n=e.commit,a=t.username,i=t.password;return new Promise((function(e,t){p({username:a.trim(),password:i}).then((function(t){var a=t.access,i=t.refresh,r=Object(g["a"])(a);console.log(r),n("SET_TOKEN",a),Object(g["f"])(a),Object(g["e"])(i),e()})).catch((function(e){t(e)}))}))},getInfo:function(e){var t=e.commit,n=e.state;return new Promise((function(e,a){var i=n.token;i=Object(g["a"])(i),h(i.user_id).then((function(n){var a=n.groups;t("user",n),e(a)})).catch((function(e){a(e)}))}))},getData:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,e.state,t.next=3,b();case 3:a=t.sent,n("basic",{key:"divisions",value:a});case 5:case"end":return t.stop()}}),t)})))()},logout:function(e){var t=e.commit;e.state;return new Promise((function(e,n){t("SET_TOKEN",""),Object(g["d"])(),e()}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){t("SET_TOKEN",""),Object(g["d"])(),e()}))},refreshToken:function(e){var t=e.commit;return new Promise((function(e,n){var a=Object(g["b"])();v(a).then((function(n){t("SET_TOKEN",""),Object(g["d"])(),Object(g["f"])(n.access),e()})).catch((function(e){n(e)}))}))}}});i["a"].use(u["a"]);var _=[{name:"Dashboard",path:"/",redirect:"/home",component:function(){return n.e("default").then(n.bind(null,"7b3d"))},children:[{meta:{title:"Dashboard"},path:"/home",name:"home",component:function(){return Promise.all([n.e("certificate-form~event-form~profile"),n.e("profile")]).then(n.bind(null,"bb51"))}},{meta:{title:"Profile"},path:"/profile",name:"profile",component:function(){return Promise.all([n.e("certificate-form~event-form~profile"),n.e("profile")]).then(n.bind(null,"c66d"))}},{meta:{title:"Certificates"},path:"/certificates",name:"certificates",component:function(){return n.e("certificates").then(n.bind(null,"41f3"))}},{meta:{title:"New Certificate"},path:"/certificates/new",name:"certificate.new",component:function(){return Promise.all([n.e("certificate-form~event-form~profile"),n.e("certificate-form")]).then(n.bind(null,"711f"))}},{meta:{title:"Edit Certificate"},path:"/certificates/:id",name:"certificate.edit",component:function(){return Promise.all([n.e("certificate-form~event-form~profile"),n.e("certificate-form")]).then(n.bind(null,"711f"))},props:!0},{meta:{title:"Edit Event"},path:"/events/:id",name:"event.edit",component:function(){return Promise.all([n.e("certificate-form~event-form~profile"),n.e("event-form")]).then(n.bind(null,"71c3"))},props:!0}]},{meta:{title:"Form",isPublic:!0},path:"/form",name:"form",component:function(){return n.e("full-page").then(n.bind(null,"c109"))}},{path:"/full-page",component:function(){return n.e("full-page").then(n.bind(null,"5673"))},children:[{meta:{title:"Login",isPublic:!0},path:"/login",name:"login",component:function(){return n.e("full-page").then(n.bind(null,"3ca3d"))}},{meta:{title:"Error 404",isPublic:!0},path:"/404",name:"404NotFound",component:function(){return n.e("full-page").then(n.bind(null,"b914"))},props:{isInCard:!1}},{meta:{title:"Lock screen"},path:"/lock",name:"lock-screen",component:function(){return n.e("full-page").then(n.bind(null,"8fc8"))}}]},{path:"*",redirect:"/404"}],w=new u["a"]({base:"/aaaimx-admin/",routes:_,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});w.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=Object(g["c"])(),!i){e.next=20;break}if("/login"!==t.path){e.next=6;break}a({path:"/"}),e.next=18;break;case 6:return e.prev=6,e.next=9,y.dispatch("refreshToken");case 9:a(),e.next=18;break;case 12:return e.prev=12,e.t0=e["catch"](6),console.log(e.t0),e.next=17,y.dispatch("logout");case 17:a("/login?redirect=".concat(t.path));case 18:e.next=21;break;case 20:t.meta.isPublic?a():a("/login?redirect=".concat(t.path));case 21:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t,n,a){return e.apply(this,arguments)}}());var C=w,k=n("9483");Object(k["a"])("".concat("/aaaimx-admin/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("fb6a"),n("a9e3"),n("b680"),n("25f0");function x(e,t){return 1===e?e+t:e+t+"s"}function E(e){var t=Date.now()/1e3-Number(e);return t<3600?x(~~(t/60)," minute"):t<86400?x(~~(t/3600)," hour"):x(~~(t/86400)," day")}function O(e,t){for(var n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],a=0;a<n.length;a++)if(e>=n[a].value)return(e/n[a].value+.1).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[a].symbol;return e.toString()}function S(e){return(+e||0).toString().replace(/^-?\d+/g,(function(e){return e.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))}function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function T(e){var t=new Date(e);t.setDate(t.getDate());var n={weekday:"short",year:"numeric",month:"short",day:"numeric",hour12:!1};return t.toLocaleString("es-MX",n)}var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},A=[],V=n("2877"),N={},$=Object(V["a"])(N,P,A,!1,null,null,null),B=$.exports,L=n("e94a");L.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),a=L(t);return i["a"].component(n,a.default),e}),{}),Object.keys(a).forEach((function(e){i["a"].filter(e,a[e])})),i["a"].directive("linkified",s.a);var D="AAAIMX Productivity Manager";C.afterEach((function(e){y.commit("asideMobileStateToggle",!1),y.commit("overlayToggle",!1),y.commit("asideActiveForcedKeyToggle",null),e.meta&&e.meta.title?document.title="".concat(e.meta.title," — ").concat(D):document.title=D})),i["a"].config.productionTip=!1,i["a"].use(r["a"]),new i["a"]({router:C,store:y,render:function(e){return e(B)},mounted:function(){document.documentElement.classList.remove("has-spinner-active")}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return m}));var a=n("a78e"),i=n.n(a),r=n("1232"),o="Access-Token",s="Refresh-Token";function l(){return i.a.get(o)}function u(){return i.a.get(s)}function c(e){return i.a.set(o,e)}function f(e){return i.a.set(s,e)}function d(){return i.a.remove(o)}function m(e){return Object(r["a"])(e)}},6307:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification is-card-toolbar"},[n("div",{staticClass:"level",class:{"is-mobile":e.isMobile}},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[e._t("left")],2)]),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[e._t("right")],2)])])])},i=[],r={name:"CardToolbar",props:{isMobile:{type:Boolean,default:!1}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);t["default"]=l.exports},"780a":function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),i=n.n(a),r=n("5f87"),o=i.a.create({baseURL:"https://aaaimx-admin.herokuapp.com/api",mode:"cors",credentials:"same-origin",timeout:4e4,headers:{Accept:"application/json; version=1"}});o.interceptors.request.use((function(e){var t=Object(r["c"])();return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return console.log(e),Promise.reject(e)})),o.interceptors.response.use((function(e){return 200!==e.status&&201!==e.status&&204!==e.status?(401===e.status||e.status,Promise.reject(new Error(e.message||"Error"))):e.data}),(function(e){var t=e.response,n=e.message;return console.log(t,n),401===t.status||t.status,Promise.reject(t)})),t["a"]=o},"7b7e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button is-small",class:{"is-loading":e.isLoading},attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.click(t)}}},[n("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}),n("span",[e._v(e._s(e.label))])],1)},i=[],r={name:"RefreshButton",props:{icon:{type:String,default:"refresh"},label:{type:String,default:"Refresh"},isLoading:{type:Boolean,default:!1}},methods:{click:function(e){this.$emit("button-click",e)}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);t["default"]=l.exports},a887:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-copy-to-clipboard",{attrs:{text:e.text},on:{copy:e.handleCopy}},[e._t("default")],2)},i=[],r=n("b384"),o=n.n(r),s={props:["text"],components:{VueCopyToClipboard:o.a},methods:{handleCopy:function(e){console.log("onCopy",e),this.$buefy.toast.open({message:"Copied!",type:"is-success",queue:!1})}}},l=s,u=n("2877"),c=Object(u["a"])(l,a,i,!1,null,null,null);t["default"]=c.exports},b107:function(e,t,n){},b2eb:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",class:{"has-height-medium":e.isScrollable,"has-card-header-background":e.hasCardHeaderBackground}},[e.title||e.hasTitleSlot?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e.icon?n("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e.hasTitleSlot?e._t("title"):e.title?n("span",[e._v(e._s(e.title))]):e._e()],2),e.hasButtonSlot?e._t("button"):e.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[n("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()],2):e._e(),e._t("toolbar"),n("div",{ref:"cardContent",staticClass:"card-content"},[e._t("default")],2),e.hasFooterSlot?n("footer",{staticClass:"card-footer"},[e._t("footer")],2):e._e()],2)},i=[],r=n("b7f5"),o={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},hasTitleSlot:{type:Boolean,default:!1},hasButtonSlot:{type:Boolean,default:!1},hasFooterSlot:{type:Boolean,default:!1},hasCardHeaderBackground:{type:Boolean,default:!1},isScrollable:{type:Boolean,default:!1}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}},mounted:function(){this.isScrollable&&(this.ps=new r["a"](this.$refs.cardContent),this.$emit("ps-ready",this.ps))}},s=o,l=n("2877"),u=Object(l["a"])(s,a,i,!1,null,null,null);t["default"]=u.exports},c760:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,a){return n("div",{key:a,staticClass:"control"},[n("b-checkbox",{attrs:{"native-value":a,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},i=[],r={name:"CheckboxPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:[]}},data:function(){return{newValue:[]}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}},watch:{value:function(e){this.newValue=e}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);t["default"]=l.exports},e94a:function(e,t,n){var a={"./CardComponent.vue":"b2eb","./CardScrollable.vue":"0622","./CardToolbar.vue":"6307","./CardWidget.vue":"3d1d","./CheckboxPicker.vue":"c760","./CopyToClipboard.vue":"a887","./Pagination.vue":"07ef","./RadioPicker.vue":"2cad","./RefreshButton.vue":"7b7e"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="e94a"}});
//# sourceMappingURL=app-legacy.e33bfa70.js.map