(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1962:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return c}));var s=a("780a");function r(t){return Object(s["a"])({url:"/events/",method:"GET",params:t})}function n(t){return Object(s["a"])({url:"/events/".concat(t,"/"),method:"GET"})}function i(t){return Object(s["a"])({url:"/events/",method:"POST",data:t})}function o(t,e){return Object(s["a"])({url:"/events/".concat(t,"/"),method:"PUT",data:e})}function l(t,e){return Object(s["a"])({url:"/events/".concat(t,"/"),method:"PATCH",data:e})}function c(t){return Object(s["a"])({url:"/events/".concat(t,"/"),method:"DELETE"})}},"1e1d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",t._l(t.titleStack,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(e)+" ")])})),0)])]),a("EventModal",{attrs:{"is-active":t.isModalActive},on:{cancel:t.cancel}}),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-light",on:{click:function(e){t.isModalActive=!0}}},[a("b-icon",{attrs:{icon:"calendar-week","custom-size":"default"}}),a("span",[t._v("Create event")])],1)])])])],1)])},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":"",width:700,scroll:"keep"},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("New Event")])]),a("section",{staticClass:"modal-card-body"},[a("EventForm",{ref:"form"})],1),a("footer",{staticClass:"modal-card-foot"},[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading},on:{click:function(e){return e.preventDefault(),t.confirm(e)}}},[t._v(" Create event")]),a("button",{staticClass:"button is-danger",on:{click:t.cancel}},[t._v("Cancel")])],1)])])},i=[],o=(a("96cf"),a("1da1")),l=a("6882"),c={name:"EventModal",components:{EventForm:l["a"]},props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isLoading:!1,isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$refs.form.submit();case 3:t.isLoading=!1,t.isModalActive=!1,t.$emit("confirm");case 6:case"end":return e.stop()}}),e)})))()}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},u=c,d=(a("f572"),a("2877")),m=Object(d["a"])(u,n,i,!1,null,null,null),f=m.exports,p={name:"TitleBar",components:{EventModal:f},data:function(){return{isModalActive:!1}},props:{titleStack:{type:Array,default:function(){return[]}}},methods:{cancel:function(){this.isModalActive=!1}}},v=p,b=Object(d["a"])(v,s,r,!1,null,null,null);e["a"]=b.exports},"2b10":function(t,e){function a(t,e,a){var s=-1,r=t.length;e<0&&(e=-e>r?0:r+e),a=a>r?r:a,a<0&&(a+=r),r=e>a?0:a-e>>>0,e>>>=0;var n=Array(r);while(++s<r)n[s]=t[s+e];return n}t.exports=a},"4b17":function(t,e,a){var s=a("6428");function r(t){var e=s(t),a=e%1;return e===e?a?e-a:e:0}t.exports=r},"503b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title is-3"},[t._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[t._t("right")],2)])])])])},r=[],n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},i=n,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,null,null);e["a"]=l.exports},"5f5f":function(t,e,a){},6428:function(t,e,a){var s=a("b4b0"),r=1/0,n=17976931348623157e292;function i(t){if(!t)return 0===t?t:0;if(t=s(t),t===r||t===-r){var e=t<0?-1:1;return e*n}return t===t?t:0}t.exports=i},6882:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{label:"Title",message:"Event name"}},[a("b-input",{attrs:{placeholder:"e.g. SINABIA 2019",name:"title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("b-field",{attrs:{horizontal:"",label:"Place",message:"Event location"}},[a("b-select",{attrs:{placeholder:"Select location",expanded:""},model:{value:t.form.place,callback:function(e){t.$set(t.form,"place",e)},expression:"form.place"}},[a("option",{attrs:{value:"Online"}},[t._v("Online")]),a("option",{attrs:{value:"ITM"}},[t._v("ITM")]),a("option",{attrs:{value:"G4"}},[t._v("G4")]),a("option",{attrs:{value:"Norte"}},[t._v("Norte")]),a("option",{attrs:{value:"Poniente"}},[t._v("Poniente")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Type",message:"Event type"}},[a("b-select",{attrs:{placeholder:"Select a type",expanded:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("option",{attrs:{value:"Workshop"}},[t._v("Workshop")]),a("option",{attrs:{value:"Course"}},[t._v("Course")]),a("option",{attrs:{value:"Webinar"}},[t._v("Webinar")]),a("option",{attrs:{value:"Simposium"}},[t._v("Simposium")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Division",message:"Division event"}},[a("b-select",{attrs:{placeholder:"Select division",expanded:""},model:{value:t.form.division,callback:function(e){t.$set(t.form,"division",e)},expression:"form.division"}},t._l(t.$store.state.divisions,(function(t){return a("option",{key:t.id,attrs:{label:t.name},domProps:{value:t.id}})})),0)],1),t.form.open_to_public?t._e():a("b-field",{attrs:{label:"Quorum",message:"Max participants",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"0",max:"100",type:"number"},model:{value:t.form.corum,callback:function(e){t.$set(t.form,"corum",e)},expression:"form.corum"}})],1),a("b-field",{attrs:{horizontal:""}},[a("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"},model:{value:t.form.open_to_public,callback:function(e){t.$set(t.form,"open_to_public",e)},expression:"form.open_to_public"}},[t._v(" Open to the public ")])],1),a("b-field",{attrs:{horizontal:"",label:"Date start",message:"Event start"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_start,callback:function(e){t.date_start=e},expression:"date_start"}})],1),a("b-field",{attrs:{horizontal:"",label:"Date end",message:"Event end"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_end,callback:function(e){t.date_end=e},expression:"date_end"}})],1),a("b-field",{attrs:{label:"Hours",message:"Total hours (CC)",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"0",max:"100",type:"number"},model:{value:t.form.hours,callback:function(e){t.$set(t.form,"hours",e)},expression:"form.hours"}})],1),a("b-field",{attrs:{horizontal:""}},[a("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"},model:{value:t.form.is_draft,callback:function(e){t.$set(t.form,"is_draft",e)},expression:"form.is_draft"}},[t._v(" Draft Event ")])],1),a("b-field",{attrs:{label:"Description"}},[a("b-input",{attrs:{rows:10,type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t.event?a("b-field",[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("Save changes")])],1):t._e()],1)},r=[],n=(a("96cf"),a("1da1")),i=a("1962"),o={title:"",corum:0,hours:0,is_draft:!0,open_to_public:!1,date_start:null,date_end:null,description:"",type:"",place:"",flyer:"",division:null},l={name:"EventForm",props:["event"],data:function(){return{form:{},isLoading:!1,hourFormat:void 0,locale:void 0,date_start:null,date_end:null}},created:function(){this.event&&(this.date_start=new Date(this.event.date_start),this.date_end=new Date(this.event.date_end)),this.form=this.event||o},methods:{submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLoading=!0,e.prev=1,t.form.date_start=t.date_start,t.form.date_end=t.date_end,t.form.open_to_public&&(t.form.corum=0),!t.event){e.next=11;break}return e.next=8,Object(i["f"])(t.event.id,t.form);case 8:t.$buefy.snackbar.open({message:"Event updated",queue:!1}),e.next=17;break;case 11:return e.next=13,Object(i["a"])(t.form);case 13:a=e.sent,t.$buefy.snackbar.open({message:"Event created",queue:!1}),t.form=o,t.$router.push("/events/"+a.id);case 17:e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](1),console.log(e.t0),t.$buefy.toast.open({message:"Something went wrong :(... Try again!",type:"is-danger",queue:!1});case 23:return e.prev=23,t.isLoading=!1,e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[1,19,23,26]])})))()}}},c=l,u=a("2877"),d=Object(u["a"])(c,s,r,!1,null,null,null);e["a"]=d.exports},"808f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:t.newUserAvatar,alt:t.userName}})])},r=[],n=(a("ac1f"),a("5319"),a("5530")),i=a("2f62"),o={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:Object(n["a"])({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var t="somename";return this.userName&&(t=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(t,".svg?options[mood][]=happy")}},Object(i["b"])(["userAvatar","userName"]))},l=o,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,null,null);e["a"]=u.exports},"841c":function(t,e,a){"use strict";var s=a("d784"),r=a("825a"),n=a("1d80"),i=a("129f"),o=a("14c3");s("search",1,(function(t,e,a){return[function(e){var a=n(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var n=r(t),l=String(this),c=n.lastIndex;i(c,0)||(n.lastIndex=0);var u=o(n,l);return i(n.lastIndex,c)||(n.lastIndex=c),null===u?-1:u.index}]}))},"91c8":function(t,e,a){var s=a("2b10"),r=a("9aff"),n=a("4b17"),i=Math.ceil,o=Math.max;function l(t,e,a){e=(a?r(t,e,a):void 0===e)?1:o(n(e),0);var l=null==t?0:t.length;if(!l||e<1)return[];var c=0,u=0,d=Array(i(l/e));while(c<l)d[u++]=s(t,c,c+=e);return d}t.exports=l},9638:function(t,e){function a(t,e){return t===e||t!==t&&e!==e}t.exports=a},"9aff":function(t,e,a){var s=a("9638"),r=a("30c9"),n=a("c098"),i=a("1a8c");function o(t,e,a){if(!i(a))return!1;var o=typeof e;return!!("number"==o?r(a)&&n(e,a.length):"string"==o&&e in a)&&s(a[e],t)}t.exports=o},"9e7c":function(t,e,a){"use strict";a("d81d"),a("a9e3");var s,r,n=a("91c8"),i=a.n(n),o={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},data:function(){return{windowOuterWidth:0}},computed:{newMaxPerRow:function(){return this.windowOuterWidth>=769&&this.windowOuterWidth<=1024?2:this.maxPerRow}},mounted:function(){this.updateWindowOuterWidth(),window.addEventListener("resize",this.updateWindowOuterWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.updateWindowOuterWidth)},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(e){return t("div",{attrs:{class:"tile is-parent"}},[e])})))},updateWindowOuterWidth:function(){this.windowOuterWidth=window.outerWidth}},render:function(t){var e=this;return this.$slots.default.length<=this.newMaxPerRow?this.renderAncestor(t,this.$slots.default):t("div",{attrs:{class:"is-tiles-wrapper"}},i()(this.$slots.default,this.newMaxPerRow).map((function(a){return e.renderAncestor(t,a)})))}},l=o,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,null,null);e["a"]=u.exports},b4b0:function(t,e,a){var s=a("1a8c"),r=a("ffd6"),n=NaN,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;function d(t){if("number"==typeof t)return t;if(r(t))return n;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=l.test(t);return a||c.test(t)?u(t.slice(2),a?2:8):o.test(t)?n:+t}t.exports=d},b743:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return c}));a("d3b7");var s=a("bc3a"),r=a.n(s);console.log("https://aaaimx-discord.herokuapp.com/api","production");var n=r.a.create({baseURL:"https://aaaimx-discord.herokuapp.com/api",mode:"cors",credentials:"same-origin"});n.interceptors.response.use((function(t){return 200!==t.status&&201!==t.status&&204!==t.status?(401===t.status||t.status,Promise.reject(new Error(t.message||"Error"))):t.data}),(function(t){var e=t.response,a=t.message;return console.log(e,a),401===e.status||e.status,Promise.reject(e)}));var i=n;function o(){return i({url:"/members/",method:"GET"})}function l(t){return i({url:"/messages/events/reminder/",method:"POST",data:t})}function c(t){return i({url:"/messages/certificates/new/",method:"POST",data:t})}},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar-main"),a("section",{staticClass:"section is-main-section"},[a("MembersTable")],1)],1)},r=[],n=a("1e1d"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table",attrs:{title:t.total+" Members",icon:"account-multiple","has-button-slot":!0}},[a("action-button",{attrs:{slot:"button"},on:{"button-click":t.getData},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("form",{attrs:{slot:"left"},slot:"left"},[a("SearchInput",{attrs:{listQuery:t.listQuery}})],1),a("form",{attrs:{slot:"right"},slot:"right"},[a("b-dropdown",{attrs:{"max-height":500,scrollable:"","append-to-body":"",position:"is-bottom-left","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var s=e.active;return a("button",{staticClass:"button is-link is-small"},[a("span",[t._v(t._s(t.listQuery.role||"Select role"))]),a("b-icon",{attrs:{icon:s?"menu-up":"menu-down"}})],1)}}]),model:{value:t.listQuery.role,callback:function(e){t.$set(t.listQuery,"role",e)},expression:"listQuery.role"}},t._l(t.roles,(function(e){return a("b-dropdown-item",{key:e.name,attrs:{value:e.name,"aria-role":"listitem"}},[a("div",{staticClass:"media",style:{color:e.color}},[a("b-icon",{staticClass:"media-left",attrs:{size:"is-small",icon:"tag"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v(t._s(e.name))])])],1)])})),1)],1)]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:!0,loading:t.isLoading,paginated:t.paginated,"per-page":t.perPage,striped:!0,hoverable:!0,narrowed:!0,"default-sort":"name","show-detail-icon":!0,data:t.list,detailed:"","detail-key":"id"},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"detail",fn:function(e){return[a("article",{staticClass:"media"},[a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image "},[a("img",{staticClass:"is-rounded is-64x64",attrs:{src:e.row.avatar}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(e.row.name))]),t._v(" "),a("small",[t._v("@"+t._s(e.row.username))]),a("br"),t._l(e.row.roles,(function(e){return a("b-tag",{key:e,attrs:{rounded:"",type:"is-primary is-light",size:"is-small"}},[t._v(t._s(e))])}))],2)])])])]}}])},[a("b-table-column",{attrs:{"cell-class":"has-no-head-mobile is-image-cell"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"image"},[a("img",{staticClass:"is-rounded",attrs:{src:t.row.avatar}})])]}}])}),a("b-table-column",{attrs:{label:"Name",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("b-table-column",{attrs:{label:"Username",field:"username",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v("@"+t._s(e.row.username))])]}}])}),a("b-table-column",{attrs:{label:"ID",field:"id",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id.slice(0,10))+" ")]}}])}),a("b-table-column",{attrs:{label:"Date joined",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.dateJoined}},[t._v(t._s(e.row.dateJoined))])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[a("b-tooltip",{attrs:{type:"is-primary",label:"Kick member"}},[a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-icon",{attrs:{icon:"karate",size:"is-small"}})],1)])],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("EmptyData",{attrs:{isLoading:t.isLoading}})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticStyle:{margin:"0.5rem"}},[a("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var s=e.active;return a("button",{staticClass:"button is-primary is-small"},[a("span",[t._v("Actions")]),a("b-icon",{attrs:{icon:s?"menu-up":"menu-down"}})],1)}}])},[a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-danger",icon:"karate"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Kick selected")])])],1)])],1)],1)])],1)],1)],1)},o=[],l=(a("4de4"),a("c975"),a("b0c0"),a("ac1f"),a("841c"),a("96cf"),a("1da1")),c=a("fa9b"),u=a("b743"),d={name:"MembersTable",components:{ModalBox:c["a"]},props:{dataUrl:{type:String,default:"/data-sources/list.json"},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,listQuery:{search:null},total:0,members:[],list:[],roles:[],isLoading:!1,paginated:!0,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},watch:{listQuery:{handler:function(){this.handleFilters()},deep:!0}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.dataUrl){e.next=18;break}return t.isLoading=!0,e.prev=2,e.next=5,Object(u["a"])();case 5:a=e.sent,t.total=a.members.length,t.members=a.members,t.roles=a.roles,t.list=a.members,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](2),console.log(e.t0);case 15:return e.prev=15,t.isLoading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})))()},handleFilters:function(){var t=this;this.list=this.members,this.listQuery.role&&(this.list=this.list.filter((function(e){return-1!==e.roles.indexOf(t.listQuery.role)}))),this.listQuery.search&&(this.list=this.list.filter((function(e){return-1!==e.name.toUpperCase().indexOf(t.listQuery.search.toUpperCase())||-1!==e.username.toUpperCase().indexOf(t.listQuery.search.toUpperCase())||-1!==e.id.toUpperCase().indexOf(t.listQuery.search.toUpperCase())})))},trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},m=d,f=a("2877"),p=Object(f["a"])(m,i,o,!1,null,null,null),v=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar is-main-hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item is-hero-avatar-item"},[a("div",{staticClass:"image is-user-avatar"},[a("img",{attrs:{src:t.userAvatar}})])]),a("div",{staticClass:"level-item is-hero-content-item"},[a("div",[a("h1",{staticClass:"title is-spaced"},[t._v(" Welcome, "),a("b",[t._v(t._s(t.userName))]),t._v("! ")]),t._m(0),t._m(1)])])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("router-link",{staticClass:"button is-light",attrs:{to:"/profile",title:"Profile"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("Profile")])],1)],1)])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"subtitle"},[t._v(" Last login "),a("b",[t._v("just now")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("There are pendings "),a("b",[t._v("tasks")]),t._v(" and incoming "),a("b",[t._v("events")])])}],_=a("5530"),g=a("2f62"),w={name:"HeroBarMain",data:function(){return{lastLoginTimeString:"12 mins ago",lastLoginIpString:"192.168.1.1"}},computed:Object(_["a"])({},Object(g["b"])(["userName","userAvatar","userLastLogin"]))},y=w,C=Object(f["a"])(y,b,h,!1,null,null,null),k=C.exports,x={name:"home",components:{HeroBarMain:k,MembersTable:v,TitleBar:n["a"]},data:function(){return{}},computed:{titleStack:function(){return["Admin","Dashboard"]}},mounted:function(){this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{}},O=x,$=Object(f["a"])(O,s,r,!1,null,null,null);e["default"]=$.exports},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" Profile "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("profile-update-form",{staticClass:"tile is-child"}),a("card-component",{staticClass:"tile is-child",attrs:{title:"Profile",icon:"account"}},[a("user-avatar",{staticClass:"has-max-width is-aligned-center"}),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"E-mail"}},[a("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1),a("password-update-form",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]})],1)],1)},r=[],n=a("5530"),i=a("2f62"),o=a("1e1d"),l=a("503b"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[a("b-input",{attrs:{name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[a("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},u=[],d=(a("b0c0"),{name:"ProfileUpdateForm",data:function(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:Object(n["a"])({},Object(i["b"])(["userName","userEmail"])),mounted:function(){this.form.name=this.userName,this.form.email=this.userEmail},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$store.commit("user",t.form),t.$buefy.snackbar.open({message:"Updated",queue:!1})}),500)}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}}),m=d,f=a("2877"),p=Object(f["a"])(m,c,u,!1,null,null,null),v=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Change Password",icon:"lock"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[a("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[a("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[a("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},h=[],_={name:"PasswordUpdateForm",data:function(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Updated",queue:!1},500)}))}}},g=_,w=Object(f["a"])(g,b,h,!1,null,null,null),y=w.exports,C=a("9e7c"),k=a("808f"),x={name:"Profile",components:{UserAvatar:k["a"],Tiles:C["a"],PasswordUpdateForm:y,ProfileUpdateForm:v,HeroBar:l["a"],TitleBar:o["a"]},computed:Object(n["a"])({titleStack:function(){return["Admin","Profile"]}},Object(i["b"])(["userName","userEmail"]))},O=x,$=Object(f["a"])(O,s,r,!1,null,null,null);e["default"]=$.exports},c975:function(t,e,a){"use strict";var s=a("23e7"),r=a("4d64").indexOf,n=a("a640"),i=a("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?o.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,e,a){"use strict";var s=a("23e7"),r=a("b727").map,n=a("1dde"),i=a("ae40"),o=n("map"),l=i("map");s({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},f572:function(t,e,a){"use strict";var s=a("5f5f"),r=a.n(s);r.a},fa9b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},r=[],n={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},i=n,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,null,null);e["a"]=l.exports},ffd6:function(t,e,a){var s=a("3729"),r=a("1310"),n="[object Symbol]";function i(t){return"symbol"==typeof t||r(t)&&s(t)==n}t.exports=i}}]);
//# sourceMappingURL=profile-legacy.05d48be5.js.map