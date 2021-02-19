(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["event-form"],{"2b10":function(t,e){function a(t,e,a){var i=-1,n=t.length;e<0&&(e=-e>n?0:n+e),a=a>n?n:a,a<0&&(a+=n),n=e>a?0:a-e>>>0,e>>>=0;var s=Array(n);while(++i<n)s[i]=t[i+e];return s}t.exports=a},"4b17":function(t,e,a){var i=a("6428");function n(t){var e=i(t),a=e%1;return e===e?a?e-a:e:0}t.exports=n},6428:function(t,e,a){var i=a("b4b0"),n=1/0,s=17976931348623157e292;function r(t){if(!t)return 0===t?t:0;if(t=i(t),t===n||t===-n){var e=t<0?-1:1;return e*s}return t===t?t:0}t.exports=r},7185:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Certificates",icon:"certificate","has-button-slot":!0}},[a("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("form",{attrs:{slot:"left"},slot:"left"},[a("SearchInput",{attrs:{listQuery:t.listQuery}})],1),a("div",{staticClass:"columns",attrs:{slot:"right"},slot:"right"},[a("b-field",{staticClass:"ml-2"},[a("b-datepicker",{attrs:{type:"month",icon:"calendar-today",size:"is-small",placeholder:"Select date range...",range:""},model:{value:t.listQuery.range,callback:function(e){t.$set(t.listQuery,"range",e)},expression:"listQuery.range"}})],1),a("b-field",{staticClass:"ml-2"},[a("b-select",{attrs:{placeholder:"Type",size:"is-small",expanded:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[a("option",{attrs:{value:"RECOGNITION"}},[t._v("RECOGNITION")]),a("option",{attrs:{value:"APPRECIATION"}},[t._v("APPRECIATION")]),a("option",{attrs:{value:"PARTICIPATION"}},[t._v("PARTICIPATION")]),a("option",{attrs:{value:""}},[t._v("All")])])],1),a("b-field",{staticClass:"mx-2"},[a("b-select",{attrs:{placeholder:"Status",size:"is-small",expanded:""},model:{value:t.listQuery.published,callback:function(e){t.$set(t.listQuery,"published",e)},expression:"listQuery.published"}},[a("option",{attrs:{value:"true"}},[t._v("Online")]),a("option",{attrs:{value:"false"}},[t._v("Draft")]),a("option",{attrs:{value:""}},[t._v("All")])])],1)],1)]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[a("Preview",{attrs:{cert:t.row,styleMode:"single"}})]}}])},[a("b-table-column",{attrs:{label:"To",field:"to",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[a("router-link",{attrs:{tag:"a",to:"/certificates/"+e.row.uuid}},[a("small",[t._v(t._s(e.row.to))])])]]}}])}),a("b-table-column",{attrs:{label:"Type",sortable:"",field:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v(t._s(e.row.type))])]}}])}),a("b-table-column",{attrs:{label:"Event",field:"event"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.event?a("small",[t._v(t._s(e.row.event.title.length>15?e.row.event.title.slice(0,30)+"...":e.row.event.title))]):a("small",{staticClass:"has-text-grey is-abbr-like"},[t._v("No event")])]}}])}),a("b-table-column",{attrs:{label:"Date",sortable:"",field:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created_at}},[t._v(t._s(new Date(e.row.created_at).toLocaleDateString()))])]}}])}),a("b-table-column",{attrs:{field:"published",label:"Status",sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"tag is-rounded",class:{"is-success":e.row.published,"is-danger":!e.row.published}},[t._v(" "+t._s(e.row.published?"Online":"Draft")+" ")])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-small is-info",attrs:{tag:"a",target:"_blank",href:"https://www.aaaimx.org/certificates/?id="+e.row.uuid}},[a("b-tooltip",{attrs:{type:"is-info",label:"View online"}},[a("b-icon",{attrs:{icon:"open-in-new",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.generateCert(e.row)}}},[a("b-tooltip",{attrs:{type:"is-link",label:"Generate image"}},[a("b-icon",{attrs:{icon:"refresh",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-light",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.sendCertMessage(e.row)}}},[a("b-tooltip",{attrs:{type:"is-primary",label:"Send a Discord"}},[a("b-icon",{attrs:{icon:"discord",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-tooltip",{attrs:{type:"is-danger",label:"Delete"}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("EmptyData",{attrs:{isLoading:t.isLoading}})],1),a("div",{staticStyle:{padding:"1%"},attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column is-one-third-desktop"},[a("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var i=e.active;return a("button",{staticClass:"button is-primary is-small"},[a("span",[t._v("Actions")]),a("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}])},[a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-success",icon:"web"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Publish selected")])])],1)]),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-danger",icon:"web"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Mark as draft")])])],1)])],1)],1),a("div",{staticClass:"column"},[a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)])])],1)],1)],1)},n=[],s=(a("d81d"),a("a9e3"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("1da1")),r=a("a6c5"),o=a("b743"),l=a("fa9b"),c=a("8644"),u=a("fab6"),d=a.n(u),f={name:"CertificatesTable",components:{ModalBox:l["a"],Preview:c["a"]},props:{event:{type:Number,default:null}},mixins:[d.a],data:function(){return{listQuery:{type:null,event:this.event,ordering:null,page:1,limit:10,offset:0},key:"uuid",sortField:"date_created",defaultSortOrder:"asc",action:""}},methods:{handleClick:function(t){console.log(t),this.listQuery.type=t},clearFilters:function(){this.listQuery={type:"",event:this.event,ordering:null,page:1,limit:10,offset:0},this.sortField="date_created",this.defaultSortOrder="asc"},actionSample:function(){this.$router.push("/certificates/new")},getData:function(){var t=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(r["c"])(this.listQuery).then((function(e){t.list=e.results,t.total=e.count,t.isLoading=!1}))},generateCert:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isLoading=!0,a.prev=1,a.next=4,Object(r["g"])(t.uuid,t);case 4:e.getData(),a.next=11;break;case 7:a.prev=7,a.t0=a["catch"](1),console.log(a.t0),e.$buefy.dialog.alert({title:"Something went wrong :(",message:"Please navigate to the certificate detail and cofirm the required information not be empty",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0});case 11:return a.prev=11,e.isLoading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,7,11,14]])})))()},onAction:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log(t),a.t0=t,a.next="certs"===a.t0?4:7;break;case 4:e.isLoading=!0;try{i=e.checkedRows.map((function(t){return Object(r["g"])(t.uuid,t)})),Promise.all(i).then((function(t){e.getData()}))}catch(n){console.log(n)}finally{e.isLoading=!1}return a.abrupt("break",8);case 7:return a.abrupt("break",8);case 8:case"end":return a.stop()}}),a)})))()},sendCertMessage:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isLoading=!0,a.prev=1,console.log("production"),a.next=6,Object(o["b"])(t);case 6:e.$buefy.snackbar.open({message:"Message sent to Discord",queue:!1}),a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](1),console.log(a.t0),e.$buefy.toast.open({type:"is-danger",message:"Something went wrong :(. Try later!!!",queue:!1});case 13:return a.prev=13,e.isLoading=!1,a.finish(13);case 16:case"end":return a.stop()}}),a,null,[[1,9,13,16]])})))()},trashConfirm:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isModalActive=!1,e.prev=1,e.next=4,Object(r["f"])(t.trashObject.uuid);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:return e.prev=9,t.getData(),e.finish(9);case 12:t.$buefy.snackbar.open({message:"Confirmed",queue:!1});case 13:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))()}}},p=f,b=a("2877"),h=Object(b["a"])(p,i,n,!1,null,null,null);e["a"]=h.exports},"71c3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" "+t._s(t.heroTitle)+" "),a("router-link",{attrs:{slot:"right",to:"/certificates/new"},slot:"right"},[a("b-button",{attrs:{"icon-left":"pencil-plus",type:"is-success"}},[t._v(" New certificate ")])],1)],1),a("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"calendar-edit"}},[t.event.id?a("EventForm",{attrs:{event:t.event}}):t._e()],1),t.event.title?a("card-component",{staticClass:"tile is-child",attrs:{title:"Event details",icon:"calendar"}},[a("EventPreview",{attrs:{event:t.event}})],1):t._e()],1),t.event.id?a("ParticipantsTable",{attrs:{event:t.event}}):t._e(),t.event.id?a("CertTable",{attrs:{event:t.event.id}}):t._e()],1)],1)},n=[],s=a("1e1d"),r=a("503b"),o=a("9e7c"),l=a("0441"),c=a("7185"),u=a("aa38"),d=a("6882"),f=a("1962"),p={name:"EventDetail",components:{Tiles:o["a"],HeroBar:r["a"],TitleBar:s["a"],EventPreview:u["a"],EventForm:d["a"],ParticipantsTable:l["a"],CertTable:c["a"]},props:{id:{default:null}},data:function(){return{isLoading:!1,isModalActive:!1,event:this.getClearFormObject(),createdReadable:null}},computed:{titleStack:function(){var t;return t=this.id?this.event.title:"New event",["Admin","Events",t]},heroTitle:function(){return this.id?this.event.title:"Create event"},heroRouterLinkTo:function(){return this.id?{name:"event.new"}:"/"},heroRouterLinkLabel:function(){return this.id?"New event":"Dashboard"},formCardTitle:function(){return this.id?"Edit event":"New event"}},created:function(){this.getData()},methods:{getClearFormObject:function(){return{}},getData:function(){var t=this;this.id&&(this.isLoading=!0,Object(f["b"])(this.id).then((function(e){t.event=e,t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e),type:"is-danger",queue:!1})})))}}},b=p,h=a("2877"),v=Object(h["a"])(b,i,n,!1,null,null,null);e["default"]=v.exports},"91c8":function(t,e,a){var i=a("2b10"),n=a("9aff"),s=a("4b17"),r=Math.ceil,o=Math.max;function l(t,e,a){e=(a?n(t,e,a):void 0===e)?1:o(s(e),0);var l=null==t?0:t.length;if(!l||e<1)return[];var c=0,u=0,d=Array(r(l/e));while(c<l)d[u++]=i(t,c,c+=e);return d}t.exports=l},"9aff":function(t,e,a){var i=a("9638"),n=a("30c9"),s=a("c098"),r=a("1a8c");function o(t,e,a){if(!r(a))return!1;var o=typeof e;return!!("number"==o?n(a)&&s(e,a.length):"string"==o&&e in a)&&i(a[e],t)}t.exports=o},"9e7c":function(t,e,a){"use strict";a("d81d"),a("a9e3");var i,n,s=a("91c8"),r=a.n(s),o={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},data:function(){return{windowOuterWidth:0}},computed:{newMaxPerRow:function(){return this.windowOuterWidth>=769&&this.windowOuterWidth<=1024?2:this.maxPerRow}},mounted:function(){this.updateWindowOuterWidth(),window.addEventListener("resize",this.updateWindowOuterWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.updateWindowOuterWidth)},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(e){return t("div",{attrs:{class:"tile is-parent"}},[e])})))},updateWindowOuterWidth:function(){this.windowOuterWidth=window.outerWidth}},render:function(t){var e=this;return this.$slots.default.length<=this.newMaxPerRow?this.renderAncestor(t,this.$slots.default):t("div",{attrs:{class:"is-tiles-wrapper"}},r()(this.$slots.default,this.newMaxPerRow).map((function(a){return e.renderAncestor(t,a)})))}},l=o,c=a("2877"),u=Object(c["a"])(l,i,n,!1,null,null,null);e["a"]=u.exports},b4b0:function(t,e,a){var i=a("1a8c"),n=a("ffd6"),s=NaN,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;function d(t){if("number"==typeof t)return t;if(n(t))return s;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=l.test(t);return a||c.test(t)?u(t.slice(2),a?2:8):o.test(t)?s:+t}t.exports=d}}]);
//# sourceMappingURL=event-form-legacy.a96cd922.js.map