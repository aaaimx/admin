(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["event-form"],{"2b9d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},s=[],n={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},l=n,o=a("2877"),r=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports},6432:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return l}));var i=a("780a");function s(t){return Object(i["a"])({url:"/participants/",method:"GET",params:t})}function n(t){return Object(i["a"])({url:"/participants/".concat(t,"/"),method:"DELETE"})}function l(t){return Object(i["a"])({url:"/participants/register/",method:"POST",data:t})}},"71c3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" "+t._s(t.heroTitle)+" ")]),a("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[a("div",[a("span",[a("b",[t._v("Edit event.")]),t._v(" Data will be updated")])])]),a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"calendar-edit"}},[t.event.id?a("EventForm",{attrs:{event:t.event}}):t._e()],1),t.event.title?a("card-component",{staticClass:"tile is-child",attrs:{title:"Event details",icon:"calendar"}},[a("EventPreview",{attrs:{event:t.event}})],1):t._e()],1),a("ParticipantsTable",{attrs:{event_id:t.id}})],1)],1)},s=[],n=a("1e1d"),l=a("503b"),o=a("9e7c"),r=a("2b9d"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table",attrs:{title:t.total+" Participants",icon:"account-multiple","has-button-slot":!0}},[a("action-button",{attrs:{slot:"button",icon:"account-plus",label:"Create participant"},on:{"button-click":t.actionSample},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("form",{attrs:{slot:"left"},slot:"left"},[a("SearchInput",{attrs:{listQuery:t.listQuery}})],1)]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!1,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort}},[t._l(t.headers,(function(e){return a("b-table-column",{key:e.field,attrs:{label:e.label,field:e.field,sortable:e.sortable},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row[e.field])+" ")]}}],null,!0)})})),a("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons is-right"},[a("b-tooltip",{attrs:{label:"Validate hours"}},[a("button",{staticClass:"button is-small is-success",attrs:{type:"button"}},[a("b-icon",{attrs:{icon:"check-circle",size:"is-small"}})],1)]),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),a("template",{slot:"detail"}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("EmptyData",{attrs:{isLoading:t.isLoading}})],1),a("template",{slot:"footer"},[a("div",{staticClass:"is-flex is-justify-content-space-between"},[a("div",{staticStyle:{margin:"0.5rem"}},[a("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var i=e.active;return a("button",{staticClass:"button is-primary is-small"},[a("span",[t._v("Actions")]),a("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}])},[a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media"},[a("b-icon",{staticClass:"has-text-success media-left",attrs:{icon:"email-send"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Send confirmation")])])],1)]),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media"},[a("b-icon",{staticClass:"has-text-primary media-left",attrs:{icon:"file-excel-box"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Export as xlsx")])])],1)])],1)],1),a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)])],2)],1)],1)},d=[],u=(a("96cf"),a("1da1")),f=a("6432"),b=a("fa9b"),m=a("fab6"),p=a.n(m),h={name:"ParticipantsTable",components:{ModalBox:b["a"]},mixins:[p.a],props:{event_id:{default:null}},data:function(){return{headers:[{label:"Email",field:"email",sortable:!0},{label:"Name",field:"fullname",sortable:!0},{label:"Adscription",field:"adscription",sortable:!0},{label:"Career",field:"career",sortable:!0},{label:"Enroll",field:"enrollment",sortable:!0}],listQuery:{event:this.event_id,ordering:null,page:1,limit:10,offset:0},key:"id",sortField:"name"}},methods:{getData:function(){var t=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(f["a"])(this.listQuery).then((function(e){t.list=e.results,t.total=e.count,t.isLoading=!1}))},trashConfirm:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isModalActive=!1,e.prev=1,e.next=4,Object(f["c"])(t.trashObject.uuid);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:return e.prev=9,t.getList(),e.finish(9);case 12:t.$buefy.snackbar.open({message:"Confirmed",queue:!1});case 13:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))()},handleClick:function(t){console.log(t),this.listQuery.type=t},actionSample:function(){}}},v=h,g=a("2877"),C=Object(g["a"])(v,c,d,!1,null,null,null),_=C.exports,y=a("aa38"),k=a("6882"),w=a("1962"),O={name:"EventDetail",components:{Tiles:o["a"],HeroBar:l["a"],TitleBar:n["a"],Notification:r["a"],EventPreview:y["a"],EventForm:k["a"],ParticipantsTable:_},props:{id:{default:null}},data:function(){return{isLoading:!1,isModalActive:!1,event:this.getClearFormObject(),createdReadable:null}},computed:{titleStack:function(){var t;return t=this.id?this.event.title:"New event",["Admin","Events",t]},heroTitle:function(){return this.id?this.event.title:"Create event"},heroRouterLinkTo:function(){return this.id?{name:"event.new"}:"/"},heroRouterLinkLabel:function(){return this.id?"New event":"Dashboard"},formCardTitle:function(){return this.id?"Edit event":"New event"}},created:function(){this.getData()},methods:{getClearFormObject:function(){return{}},getData:function(){var t=this;this.id&&(this.isLoading=!0,Object(w["b"])(this.id).then((function(e){t.event=e,t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e),type:"is-danger",queue:!1})})))}}},j=O,E=Object(g["a"])(j,i,s,!1,null,null,null);e["default"]=E.exports},aa38:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",{attrs:{label:(t.event.type||"Title")+": "+t.event.title+" ("+(t.event.place||"AAAIMX")+")"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t._f("longDate")(t.event.date_start))+" - "+t._s(t._f("longDate")(t.event.date_end))+" ("+t._s(t.event.hours||0)+" horas para CC) ")])]),a("b-field",{attrs:{label:"Aditional information"}},[a("p",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"subtitle is-6",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.event.description)}})]),a("b-field",{attrs:{label:"Availability (Participants)"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.event.corum||"No establecido")+" ")])])],1)},s=[],n={props:["event"]},l=n,o=a("2877"),r=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports},fa9b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},s=[],n={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},l=n,o=a("2877"),r=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports},fab6:function(t,e,a){a("b0c0"),t.exports={data:function(){return{total:0,list:[],checkedRows:[],defaultOpenedDetails:[],trashObject:null,isModalActive:!1,isLoading:!1,sortOrder:"desc",defaultSortOrder:"desc"}},mounted:function(){this.getData()},watch:{listQuery:{handler:function(){this.getData()},deep:!0}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},methods:{onSort:function(t,e){var a=t;this.sortField=t,this.sortOrder=e,"desc"===e&&(a="-"+t),this.listQuery.ordering=a},onCollapse:function(t){this.defaultOpenedDetails=[t[this.key]]},trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashCancel:function(){this.isModalActive=!1}}}}}]);
//# sourceMappingURL=event-form-legacy.bfb57120.js.map