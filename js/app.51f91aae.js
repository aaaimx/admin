(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},s={app:0},n={app:0},r=[];function o(e){return l.p+"js/"+({"certificate-form~certificates~event-form~events":"certificate-form~certificates~event-form~events","certificate-form":"certificate-form",certificates:"certificates","event-form":"event-form",events:"events",default:"default","full-page":"full-page",profile:"profile"}[e]||e)+"."+{"certificate-form~certificates~event-form~events":"53f57196","certificate-form":"5a4e1c62",certificates:"d05d7495","event-form":"8d90d4b4",events:"a4740bb7",default:"85976707","full-page":"3ef80c03",profile:"c8b219cb"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"certificate-form~certificates~event-form~events":1,"certificate-form":1,certificates:1,"event-form":1,events:1,profile:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var i="css/"+({"certificate-form~certificates~event-form~events":"certificate-form~certificates~event-form~events","certificate-form":"certificate-form",certificates:"certificates","event-form":"event-form",events:"events",default:"default","full-page":"full-page",profile:"profile"}[e]||e)+"."+{"certificate-form~certificates~event-form~events":"be4fa277","certificate-form":"4c75dd5e",certificates:"776d7141","event-form":"776d7141",events:"776d7141",default:"31d6cfe0","full-page":"31d6cfe0",profile:"006daab7"}[e]+".css",n=l.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===n))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===i||u===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete s[e],f.parentNode.removeChild(f),a(r)},f.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[e]=0})));var i=n[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise((function(t,a){i=n[e]=[t,a]}));t.push(i[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,a[1](d)}n[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/aaaimx-admin/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0622":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:e.title,icon:e.icon,"is-scrollable":!0,"has-button-slot":!0,"has-footer-slot":!0},on:{"ps-ready":e.psReady}},[a("action-button",{attrs:{slot:"button","is-loading":e.isLoading},on:{"button-click":e.delayedFetch},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",class:e.status.toolbarClass?e.status.toolbarClass:null,attrs:{slot:"toolbar"},slot:"toolbar"},[e.status.text?a("div",{attrs:{slot:"left"},slot:"left"},[e._v(e._s(e.status.text))]):e._e(),e.status.label||e.status.labelIcon?a("span",{staticClass:"tag",class:e.status.labelClass,attrs:{slot:"right"},slot:"right"},[e.status.labelIcon?a("b-icon",{attrs:{icon:e.status.labelIcon,"custom-size":"default"}}):e._e(),e.status.label?a("span",[e._v(e._s(e.status.label))]):e._e()],1):e._e()]),a("div",{staticClass:"media-list"},[a("b-loading",{attrs:{"is-full-page":!1,active:e.isLoading}}),e._l(e.items,(function(t){return a("media-item",{key:t.id,attrs:{item:t,"has-share-buttons":e.hasShareButtons,"has-dismiss":e.hasDismiss}})}))],2),a("a",{staticClass:"card-footer-item",attrs:{slot:"footer"},on:{click:function(t){return t.preventDefault(),e.delayedFetch(t)}},slot:"footer"},[a("b-icon",{attrs:{icon:"autorenew","custom-size":"default"}}),a("span",[e._v("Load more")])],1)],1)},s=[],n=a("bc3a"),r=a.n(n),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isDismissed?e._e():a("article",{staticClass:"media"},[e.item.avatar?a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image is-64x64"},[a("img",{staticClass:"is-rounded",attrs:{src:e.item.avatar}})])]):e._e(),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",{staticClass:"media-meta"},[a("strong",[e._v(e._s(e.item.name))]),e.item.login?a("small",[e._v("@"+e._s(e.item.login))]):e._e(),a("small",{staticClass:"has-text-grey"},[e._v(e._s(e.item.ago))])]),a("p",[e._v(" "+e._s(e.item.text)+" ")])]),e.hasShareButtons?a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[a("a",{staticClass:"level-item"},[a("b-icon",{attrs:{icon:"reply","custom-size":"default"}})],1),a("a",{staticClass:"level-item"},[a("b-icon",{attrs:{icon:"twitter-retweet","custom-size":"default"}})],1),a("a",{staticClass:"level-item"},[a("b-icon",{attrs:{icon:"heart-outline","custom-size":"default"}})],1)])]):e._e()]),e.hasDismiss?a("div",{staticClass:"media-right",on:{click:e.dismiss}},[a("button",{staticClass:"delete"})]):e._e()])},l=[],c={name:"MediaItem",props:{item:{type:Object,default:()=>{}},hasShareButtons:{type:Boolean,default:!1},hasDismiss:{type:Boolean,default:!1}},data(){return{isDismissed:!1}},methods:{dismiss(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},u=c,d=a("2877"),f=Object(d["a"])(u,o,l,!1,null,null,null),m=f.exports,p=a("3f6e"),h={name:"CardScrollable",components:{ActionButton:p["default"],MediaItem:m},props:{title:{type:String,default:null},icon:{type:String,default:null},dataUrl:{type:String,default:null},hasShareButtons:{type:Boolean,default:!1},hasDismiss:{type:Boolean,default:!1}},data(){return{isLoading:!1,items:[],status:{}}},mounted(){this.fetchData()},methods:{psReady(e){this.ps=e},delayedFetch(){this.isLoading=!0,this.items=[],this.status={text:"Fetching data...",labelClass:"is-info",labelIcon:"shuffle-variant"},setTimeout(()=>{this.fetchData()},500)},fetchData(){this.isLoading=!0,this.items=[],this.status={text:"Fetching data...",labelClass:"is-info",labelIcon:"shuffle-variant"},r.a.get(this.dataUrl).then(e=>{this.isLoading=!1,e.data&&(e.data.data&&(this.items=e.data.data),e.data.status&&(this.status=e.data.status)),this.$nextTick(()=>{this.ps&&this.ps.update()})}).catch(e=>{this.isLoading=!1,this.$buefy.toast.open({message:"Error: "+e.message,type:"is-danger"})})},loadMore(){this.$buefy.toast.open({message:"Some action happened",type:"is-info",queue:!1})}}},v=h,b=Object(d["a"])(v,i,s,!1,null,null,null);t["default"]=b.exports},"07ef":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-flex is-justify-content-space-between"},[a("b-dropdown",{staticStyle:{margin:"0.5rem"},attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:e._u([{key:"trigger",fn:function(t){var i=t.active;return a("button",{staticClass:"button is-secondary is-small"},[a("span",[e._v("Per page: "+e._s(e.listQuery.limit))]),a("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}]),model:{value:e.listQuery.limit,callback:function(t){e.$set(e.listQuery,"limit",t)},expression:"listQuery.limit"}},[a("b-dropdown-item",{attrs:{"aria-role":"listitem",value:5}},[e._v("5")]),a("b-dropdown-item",{attrs:{"aria-role":"listitem",value:10}},[e._v("10")]),a("b-dropdown-item",{attrs:{"aria-role":"listitem",value:25}},[e._v("25")]),a("b-dropdown-item",{attrs:{"aria-role":"listitem",value:50}},[e._v("50")])],1),e._v(" "),a("b-pagination",{attrs:{total:e.total,simple:!1,rounded:!1,size:"is-small","per-page":e.listQuery.limit,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:e.listQuery.page,callback:function(t){e.$set(e.listQuery,"page",t)},expression:"listQuery.page"}})],1)},s=[],n={props:{total:{type:Number,default:0},listQuery:{type:Object}}},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},"0a3d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.listQuery.search,expression:"listQuery.search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.listQuery.search},on:{input:function(t){t.target.composing||e.$set(e.listQuery,"search",t.target.value)}}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a("b-icon",{attrs:{icon:"magnify","custom-size":"default"}})],1)])])},s=[],n={name:"SearchInput",props:["listQuery"]},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},"2cad":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,i){return a("div",{key:i,staticClass:"control"},[a("b-radio",{attrs:{"native-value":i,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},s=[],n={name:"RadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:null}},data(){return{newValue:null}},created(){this.newValue=this.value},methods:{input(){this.$emit("input",this.newValue)}},watch:{value(e){this.newValue=e}}},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},"32aa":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content has-text-grey has-text-centered"},[e.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[e._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[e._v("Nothing's here…")])]],2)},s=[],n={props:["isLoading"]},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},"3d1d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{staticClass:"is-card-widget",attrs:{icon:e.trendingIcon,"has-button-slot":!0,"has-title-slot":!0}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("b",[e._v(e._s(e.previousValue))]),e._v(" in "),a("b",[e._v(e._s(e.previousPeriod))])]),a("button",{staticClass:"button is-small",attrs:{slot:"button",type:"button"},on:{click:e.buttonClick},slot:"button"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}})],1),a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[e._v(" "+e._s(e.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])]),e.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e()])])},s=[],n=a("6612"),r=a.n(n),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" "+e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix)+" ")])},l=[],c={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data(){return{newValue:0,step:0}},computed:{newValueFormatted(){return this.newValue<1e3?this.newValue:r()(this.newValue).format("0,0")}},mounted(){this.growInit()},methods:{growInit(){const e=this.value/(this.duration/25);this.grow(e)},grow(e){const t=Math.ceil(this.newValue+e);if(t>this.value)return this.newValue=this.value,!1;this.newValue=t,setTimeout(()=>{this.grow(e)},25)}},watch:{value(){this.growInit()}}},u=c,d=a("2877"),f=Object(d["a"])(u,o,l,!1,null,null,null),m=f.exports,p={name:"CardWidget",components:{GrowingNumber:m},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null},previousNumber:{type:Number,default:0},previousPeriod:{type:String,default:null}},computed:{trendingIcon(){return this.previousNumber<this.number?"arrow-up-bold":"arrow-down-bold"},previousValue(){let e=this.previousNumber<1e3?this.previousNumber:r()(this.previousNumber).format("0,0");return this.prefix&&(e=this.prefix+e),this.suffix&&(e+=this.suffix),e}},methods:{buttonClick(){this.$buefy.snackbar.open({message:"Got click",queue:!1})}}},h=p,v=Object(d["a"])(h,i,s,!1,null,null,null);t["default"]=v.exports},"3f6e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"button is-small",class:{"is-loading":e.isLoading},attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.click(t)}}},[a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}),a("span",[e._v(e._s(e.label))])],1)},s=[],n={name:"ActionButton",props:{icon:{type:String,default:"refresh"},label:{type:String,default:"Refresh"},isLoading:{type:Boolean,default:!1}},methods:{click(e){this.$emit("button-click",e)}}},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},"56d7":function(e,t,a){"use strict";a.r(t);var i={};a.r(i),a.d(i,"timeAgo",(function(){return x})),a.d(i,"timeSince",(function(){return E})),a.d(i,"numberFormatter",(function(){return S})),a.d(i,"toThousandFilter",(function(){return O})),a.d(i,"uppercaseFirst",(function(){return j})),a.d(i,"longDate",(function(){return T}));a("5319"),a("ddb0"),a("a79d"),a("b107");var s=a("2b0e"),n=a("289d"),r=a("9aa5"),o=a.n(r),l=a("8c4f"),c=a("2f62"),u=a("c641"),d=a.n(u),f=a("780a");function m(e){return Object(f["a"])({url:"/token/",method:"post",data:e})}function p(e){return Object(f["a"])({url:`/users/${e}/`,method:"GET"})}function h(e){return Object(f["a"])({url:"/refresh/",method:"post",data:{refresh:e}})}function v(){return Object(f["a"])({url:"/divisions/",method:"get",params:{all:""}})}var b=a("5f87");s["default"].use(c["a"]);var g=new c["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,userLastLogin:null,divisions:[],token:Object(b["c"])(),refresh:Object(b["c"])(),isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideExpanded:!1,isAsideMobileExpanded:!1,asideActiveForcedKey:null,isAsideRightVisible:!1,hasUpdates:!1,isOverlayVisible:!1,isDarkModeActive:!1},mutations:{basic(e,t){e[t.key]=t.value},user(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},fullPage(e,t){e.isNavBarVisible=!t,e.isAsideVisible=!t,e.isFooterBarVisible=!t,d()(["has-aside-left","has-navbar-fixed-top"],e=>{t?document.documentElement.classList.remove(e):document.documentElement.classList.add(e)})},asideStateToggle(e,t=null){const a="has-aside-expanded";let i;i=null!==t?t:!e.isAsideExpanded,i?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideExpanded=i},asideMobileStateToggle(e,t=null){const a="has-aside-mobile-expanded";let i;i=null!==t?t:!e.isAsideMobileExpanded,i?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideMobileExpanded=i},asideActiveForcedKeyToggle(e,t){e.asideActiveForcedKey=t&&t.menuSecondaryKey?t.menuSecondaryKey:null},asideRightToggle(e,t=null){const a="has-aside-right";let i;i=null!==t?t:!e.isAsideRightVisible,i?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideRightVisible=i,e.hasUpdates=!1},overlayToggle(e,t=null){null===t&&(t=!e.isOverlayVisible),e.isOverlayVisible=!!t},darkModeEnable(e){const t="is-dark-mode-active";e.isDarkModeActive=!0,document.documentElement.classList.add(t)},SET_TOKEN:(e,t)=>{e.token=t},SET_REFRESH:(e,t)=>{e.refresh=t}},actions:{login({commit:e},t){const{username:a,password:i}=t;return new Promise((t,s)=>{m({username:a.trim(),password:i}).then(a=>{const{access:i,refresh:s}=a;e("SET_TOKEN",i),Object(b["f"])(i),Object(b["e"])(s),t()}).catch(e=>{s(e)})})},getInfo({commit:e,state:t}){return new Promise((a,i)=>{let s=t.token;s=Object(b["a"])(s),p(s.user_id).then(t=>{const i=t.groups;console.log(t),e("basic",{key:"userLastLogin",value:t.last_login}),a(i)}).catch(e=>{console.log(e)})})},async getData({commit:e,state:t}){const a=await v();e("basic",{key:"divisions",value:a})},logout({commit:e,state:t}){return new Promise((t,a)=>{e("SET_TOKEN",""),Object(b["d"])(),t()})},resetToken({commit:e}){return new Promise(t=>{e("SET_TOKEN",""),Object(b["d"])(),t()})},refreshToken({commit:e}){return new Promise((t,a)=>{const i=Object(b["b"])();h(i).then(a=>{e("SET_TOKEN",""),Object(b["d"])(),Object(b["f"])(a.access),t()}).catch(e=>{a(e)})})}}});s["default"].use(l["a"]);const y=[{name:"Dashboard",path:"/",redirect:"/home",component:()=>a.e("default").then(a.bind(null,"7b3d")),children:[{meta:{title:"Dashboard"},path:"/home",name:"home",component:()=>a.e("profile").then(a.bind(null,"bb51"))},{meta:{title:"Profile"},path:"/profile",name:"profile",component:()=>a.e("profile").then(a.bind(null,"c66d"))},{meta:{title:"Certificates"},path:"/certificates",name:"certificates",component:()=>Promise.all([a.e("certificate-form~certificates~event-form~events"),a.e("certificates")]).then(a.bind(null,"41f3"))},{meta:{title:"Events"},path:"/events",name:"events",component:()=>Promise.all([a.e("certificate-form~certificates~event-form~events"),a.e("events")]).then(a.bind(null,"aa9c"))},{meta:{title:"New Certificate"},path:"/certificates/new",name:"certificate.new",component:()=>Promise.all([a.e("certificate-form~certificates~event-form~events"),a.e("certificate-form")]).then(a.bind(null,"711f"))},{meta:{title:"Edit Certificate"},path:"/certificates/:id",name:"certificate.edit",component:()=>Promise.all([a.e("certificate-form~certificates~event-form~events"),a.e("certificate-form")]).then(a.bind(null,"711f")),props:!0},{meta:{title:"Edit Event"},path:"/events/:id",name:"event.edit",component:()=>Promise.all([a.e("certificate-form~certificates~event-form~events"),a.e("event-form")]).then(a.bind(null,"71c3")),props:!0}]},{path:"/full-page",component:()=>a.e("full-page").then(a.bind(null,"5673")),children:[{meta:{title:"Login",isPublic:!0},path:"/login",name:"login",component:()=>a.e("full-page").then(a.bind(null,"3ca3d"))},{meta:{title:"Error 404",isPublic:!0},path:"/404",name:"404NotFound",component:()=>a.e("full-page").then(a.bind(null,"b914")),props:{isInCard:!1}},{meta:{title:"Lock screen"},path:"/lock",name:"lock-screen",component:()=>a.e("full-page").then(a.bind(null,"8fc8"))}]},{path:"*",redirect:"/404"}],_=new l["a"]({base:"/aaaimx-admin/",routes:y,scrollBehavior(e,t,a){return a||{x:0,y:0}}});_.beforeEach(async(e,t,a)=>{const i=Object(b["c"])();if(i)if("/login"===e.path)a({path:"/"});else try{await g.dispatch("refreshToken"),a()}catch(s){console.log(s),await g.dispatch("logout"),a("/login?redirect="+e.path)}else e.meta.isPublic?a():a("/login?redirect="+e.path)});var C=_,w=a("9483");function k(e,t){return 1===e?e+t:e+t+"s"}function x(e){const t=Date.now()/1e3-Number(e);return t<3600?k(~~(t/60)," minute"):t<86400?k(~~(t/3600)," hour"):k(~~(t/86400)," day")}function E(e){var t=Math.floor((new Date-new Date(e))/1e3),a=t/31536e3;return a>1?Math.floor(a)+" years":(a=t/2592e3,a>1?Math.floor(a)+" months":(a=t/86400,a>1?Math.floor(a)+" days":(a=t/3600,a>1?Math.floor(a)+" hours":(a=t/60,a>1?Math.floor(a)+" minutes":a<0?"just now":Math.floor(t)+" seconds"))))}function S(e,t){const a=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}];for(let i=0;i<a.length;i++)if(e>=a[i].value)return(e/a[i].value+.1).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+a[i].symbol;return e.toString()}function O(e){return(+e||0).toString().replace(/^-?\d+/g,e=>e.replace(/(?=(?!\b)(\d{3})+$)/g,","))}function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function T(e){var t=new Date(e);t.setDate(t.getDate());const a={weekday:"short",year:"numeric",month:"short",day:"numeric",hour12:!1};return t.toLocaleString("es-MX",a)}Object(w["a"])("/aaaimx-admin/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const N={};function P(e,t){const a=document.createElement("style");a.type="text/css",a.appendChild(document.createTextNode("@media screen{#printSection{display:none}}@media print{#printSection,body{overflow:visible!important}body *{visibility:hidden}#printSection,#printSection *{visibility:visible}#printSection{position:absolute;left:0;top:0;right:0}#printSection table{width:100%!important}}")),document.body.appendChild(a);let i=document.getElementById("printSection");function s(e){const t=e.cloneNode(!0);i.appendChild(t),window.print()}i||(i=document.createElement("div"),i.id="printSection",document.body.appendChild(i)),e.addEventListener("click",()=>{var e=document.getElementById(t.value);e&&(i.innerHTML="",s(e))})}N.install=function(e){e.directive("print",{bind(e,t){P(e,t)}})};var $=N,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},L=[],V=a("2877"),D={},B=Object(V["a"])(D,A,L,!1,null,null,null),M=B.exports,F=a("6930"),I=a.n(F);s["default"].use($),s["default"].use(I.a);const z=a("e94a");z.keys().reduce((e,t)=>{const a=t.replace(/^\.\/(.*)\.\w+$/,"$1"),i=z(t);return s["default"].component(a,i.default),e},{}),Object.keys(i).forEach(e=>{s["default"].filter(e,i[e])}),s["default"].directive("linkified",o.a);const Q="AAAIMX Productivity Manager";C.afterEach(e=>{g.commit("asideMobileStateToggle",!1),g.commit("overlayToggle",!1),g.commit("asideActiveForcedKeyToggle",null),e.meta&&e.meta.title?document.title=`${e.meta.title} — ${Q}`:document.title=Q}),s["default"].config.productionTip=!1,s["default"].use(n["a"]),new s["default"]({router:C,store:g,render:e=>e(M),mounted(){document.documentElement.classList.remove("has-spinner-active")}}).$mount("#app")},"5f87":function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return f})),a.d(t,"a",(function(){return m}));var i=a("a78e"),s=a.n(i),n=a("1232");const r="Access-Token",o="Refresh-Token";function l(){return s.a.get(r)}function c(){return s.a.get(o)}function u(e){return s.a.set(r,e)}function d(e){return s.a.set(o,e)}function f(){return s.a.remove(r)}function m(e){return Object(n["a"])(e)}},6307:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notification is-card-toolbar"},[a("div",{staticClass:"level",class:{"is-mobile":e.isMobile}},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[e._t("left")],2)]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[e._t("right")],2)])])])},s=[],n={name:"CardToolbar",props:{isMobile:{type:Boolean,default:!1}}},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},"780a":function(e,t,a){"use strict";var i=a("bc3a"),s=a.n(i),n=a("5f87");const r=s.a.create({baseURL:"https://aaaimx-admin.herokuapp.com/api",mode:"cors",credentials:"same-origin",timeout:4e4,headers:{Accept:"application/json; version=1"}});r.interceptors.request.use(e=>{const t=Object(n["c"])();return t&&(e.headers.Authorization="Bearer "+t),e},e=>(console.log(e),Promise.reject(e))),r.interceptors.response.use(e=>200!==e.status&&201!==e.status&&204!==e.status?(401===e.status||e.status,Promise.reject(new Error(e.message||"Error"))):e.data,e=>{const{response:t,message:a}=e;return console.log(t,a),401===t.status||t.status,Promise.reject(t)}),t["a"]=r},a887:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vue-copy-to-clipboard",{attrs:{text:e.text},on:{copy:e.handleCopy}},[e._t("default")],2)},s=[],n=a("b384"),r=a.n(n),o={props:["text"],components:{VueCopyToClipboard:r.a},methods:{handleCopy(e){console.log("onCopy",e),this.$buefy.toast.open({message:"Copied!",type:"is-success",queue:!1})}}},l=o,c=a("2877"),u=Object(c["a"])(l,i,s,!1,null,null,null);t["default"]=u.exports},b107:function(e,t,a){},b2eb:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",class:{"has-height-medium":e.isScrollable,"has-card-header-background":e.hasCardHeaderBackground}},[e.title||e.hasTitleSlot?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e.hasTitleSlot?e._t("title"):e.title?a("span",[e._v(e._s(e.title))]):e._e()],2),e.hasButtonSlot?e._t("button"):e.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[a("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()],2):e._e(),e._t("toolbar"),a("div",{ref:"cardContent",staticClass:"card-content"},[e._t("default")],2),e.hasFooterSlot?a("footer",{staticClass:"card-footer"},[e._t("footer")],2):e._e()],2)},s=[],n=a("b7f5"),r={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},hasTitleSlot:{type:Boolean,default:!1},hasButtonSlot:{type:Boolean,default:!1},hasFooterSlot:{type:Boolean,default:!1},hasCardHeaderBackground:{type:Boolean,default:!1},isScrollable:{type:Boolean,default:!1}},methods:{headerIconClick(){this.$emit("header-icon-click")}},mounted(){this.isScrollable&&(this.ps=new n["a"](this.$refs.cardContent),this.$emit("ps-ready",this.ps))}},o=r,l=a("2877"),c=Object(l["a"])(o,i,s,!1,null,null,null);t["default"]=c.exports},bafb:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isDismissed?e._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[e._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:e.dismiss}},[e._v("Dismiss")])])])])},s=[],n={name:"Notification",data(){return{isDismissed:!1}},methods:{dismiss(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},c760:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,i){return a("div",{key:i,staticClass:"control"},[a("b-checkbox",{attrs:{"native-value":i,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},s=[],n={name:"CheckboxPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:[]}},data(){return{newValue:[]}},created(){this.newValue=this.value},methods:{input(){this.$emit("input",this.newValue)}},watch:{value(e){this.newValue=e}}},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=l.exports},e94a:function(e,t,a){var i={"./ActionButton.vue":"3f6e","./CardComponent.vue":"b2eb","./CardScrollable.vue":"0622","./CardToolbar.vue":"6307","./CardWidget.vue":"3d1d","./CheckboxPicker.vue":"c760","./CopyToClipboard.vue":"a887","./EmptyData.vue":"32aa","./Notification.vue":"bafb","./Pagination.vue":"07ef","./RadioPicker.vue":"2cad","./SearchInput.vue":"0a3d"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=n,e.exports=s,s.id="e94a"}});
//# sourceMappingURL=app.51f91aae.js.map