(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["event-form"],{"2b10":function(t,e){function s(t,e,s){var a=-1,i=t.length;e<0&&(e=-e>i?0:i+e),s=s>i?i:s,s<0&&(s+=i),i=e>s?0:s-e>>>0,e>>>=0;var r=Array(i);while(++a<i)r[a]=t[a+e];return r}t.exports=s},"4b17":function(t,e,s){var a=s("6428");function i(t){var e=a(t),s=e%1;return e===e?s?e-s:e:0}t.exports=i},6428:function(t,e,s){var a=s("b4b0"),i=1/0,r=17976931348623157e292;function n(t){if(!t)return 0===t?t:0;if(t=a(t),t===i||t===-i){var e=t<0?-1:1;return e*r}return t===t?t:0}t.exports=n},7185:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Certificates",icon:"certificate","has-button-slot":!0}},[s("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("form",{attrs:{slot:"left"},slot:"left"},[s("SearchInput",{attrs:{listQuery:t.listQuery}})],1),s("div",{staticClass:"columns",attrs:{slot:"right"},slot:"right"},[s("b-field",{staticClass:"ml-2"},[s("b-datepicker",{attrs:{type:"month",icon:"calendar-today",size:"is-small",placeholder:"Select date range...",range:""},model:{value:t.listQuery.range,callback:function(e){t.$set(t.listQuery,"range",e)},expression:"listQuery.range"}})],1),s("b-field",{staticClass:"ml-2"},[s("b-select",{attrs:{placeholder:"Type",size:"is-small",expanded:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[s("option",{attrs:{value:"RECOGNITION"}},[t._v("RECOGNITION")]),s("option",{attrs:{value:"APPRECIATION"}},[t._v("APPRECIATION")]),s("option",{attrs:{value:"PARTICIPATION"}},[t._v("PARTICIPATION")]),s("option",{attrs:{value:""}},[t._v("All")])])],1),s("b-field",{staticClass:"mx-2"},[s("b-select",{attrs:{placeholder:"Status",size:"is-small",expanded:""},model:{value:t.listQuery.published,callback:function(e){t.$set(t.listQuery,"published",e)},expression:"listQuery.published"}},[s("option",{attrs:{value:"true"}},[t._v("Online")]),s("option",{attrs:{value:"false"}},[t._v("Draft")]),s("option",{attrs:{value:""}},[t._v("All")])])],1)],1)]),s("div",[s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[s("Preview",{attrs:{cert:t.row,styleMode:"single"}})]}}])},[s("b-table-column",{attrs:{label:"To",field:"to",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[s("router-link",{attrs:{tag:"a",to:"/certificates/"+e.row.uuid}},[s("small",[t._v(t._s(e.row.to))])])]]}}])}),s("b-table-column",{attrs:{label:"Type",sortable:"",field:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",[t._v(t._s(e.row.type))])]}}])}),s("b-table-column",{attrs:{label:"Event",field:"event"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.event?s("small",[t._v(t._s(e.row.event.title.length>15?e.row.event.title.slice(0,30)+"...":e.row.event.title))]):s("small",{staticClass:"has-text-grey is-abbr-like"},[t._v("No event")])]}}])}),s("b-table-column",{attrs:{label:"Date",sortable:"",field:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created_at}},[t._v(t._s(new Date(e.row.created_at).toLocaleDateString()))])]}}])}),s("b-table-column",{attrs:{field:"published",label:"Status",sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"tag is-rounded",class:{"is-success":e.row.published,"is-danger":!e.row.published}},[t._v(" "+t._s(e.row.published?"Online":"Draft")+" ")])]}}])}),s("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-small is-info",attrs:{tag:"a",target:"_blank",href:"https://www.aaaimx.org/certificates/?id="+e.row.uuid}},[s("b-tooltip",{attrs:{type:"is-info",label:"View online"}},[s("b-icon",{attrs:{icon:"open-in-new",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.generateCert(e.row)}}},[s("b-tooltip",{attrs:{type:"is-link",label:"Generate image"}},[s("b-icon",{attrs:{icon:"refresh",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-light",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.sendCertMessage(e.row)}}},[s("b-tooltip",{attrs:{type:"is-primary",label:"Send a Discord"}},[s("b-icon",{attrs:{icon:"discord",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.trashModal(e.row)}}},[s("b-tooltip",{attrs:{type:"is-danger",label:"Delete"}},[s("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("EmptyData",{attrs:{isLoading:t.isLoading}})],1),s("div",{staticStyle:{padding:"1%"},attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"columns is-desktop"},[s("div",{staticClass:"column is-one-third-desktop"},[s("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var a=e.active;return s("button",{staticClass:"button is-primary is-small"},[s("span",[t._v("Actions")]),s("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[s("div",{staticClass:"media has-text-dark"},[s("b-icon",{staticClass:"media-left",attrs:{type:"is-success",icon:"web"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Publish selected")])])],1)]),s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[s("div",{staticClass:"media has-text-dark"},[s("b-icon",{staticClass:"media-left",attrs:{type:"is-danger",icon:"web"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Mark as draft")])])],1)])],1)],1),s("div",{staticClass:"column"},[s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)])])],1)],1)],1)},i=[],r=(s("ddb0"),s("a6c5")),n=s("b743"),l=s("fa9b"),o=s("8644"),c=s("fab6"),d=s.n(c),u={name:"CertificatesTable",components:{ModalBox:l["a"],Preview:o["a"]},props:{event:{type:Number,default:null}},mixins:[d.a],data(){return{listQuery:{type:null,event:this.event,ordering:null,page:1,limit:10,offset:0},key:"uuid",sortField:"date_created",defaultSortOrder:"asc",action:""}},methods:{handleClick(t){console.log(t),this.listQuery.type=t},clearFilters(){this.listQuery={type:"",event:this.event,ordering:null,page:1,limit:10,offset:0},this.sortField="date_created",this.defaultSortOrder="asc"},actionSample(){this.$router.push("/certificates/new")},getData(){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(r["c"])(this.listQuery).then(t=>{this.list=t.results,this.total=t.count,this.isLoading=!1})},async generateCert(t){this.isLoading=!0;try{await Object(r["g"])(t.uuid,t),this.getData()}catch(e){console.log(e),this.$buefy.dialog.alert({title:"Something went wrong :(",message:"Please navigate to the certificate detail and cofirm the required information not be empty",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0})}finally{this.isLoading=!1}},async onAction(t){switch(console.log(t),t){case"certs":this.isLoading=!0;try{const t=this.checkedRows.map(t=>Object(r["g"])(t.uuid,t));Promise.all(t).then(t=>{this.getData()})}catch(e){console.log(e)}finally{this.isLoading=!1}break;default:break}},async sendCertMessage(t){this.isLoading=!0;try{console.log("production"),await Object(n["b"])(t),this.$buefy.snackbar.open({message:"Message sent to Discord",queue:!1})}catch(e){console.log(e),this.$buefy.toast.open({type:"is-danger",message:"Something went wrong :(. Try later!!!",queue:!1})}finally{this.isLoading=!1}},async trashConfirm(){this.isModalActive=!1;try{await Object(r["f"])(this.trashObject.uuid)}catch(t){console.log(t)}finally{this.getData()}this.$buefy.snackbar.open({message:"Confirmed",queue:!1})}}},b=u,p=s("2877"),h=Object(p["a"])(b,a,i,!1,null,null,null);e["a"]=h.exports},"71c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-bar",{attrs:{"title-stack":t.titleStack}}),s("hero-bar",[t._v(" "+t._s(t.heroTitle)+" "),s("router-link",{attrs:{slot:"right",to:"/certificates/new"},slot:"right"},[s("b-button",{attrs:{"icon-left":"pencil-plus",type:"is-success"}},[t._v(" New certificate ")])],1)],1),s("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),s("section",{staticClass:"section is-main-section"},[s("tiles",[s("card-component",{staticClass:"tile is-child",attrs:{title:"Event details",icon:"calendar","has-button-slot":""}},[s("action-button",{attrs:{slot:"button",icon:"calendar-edit",label:t.isEdit?"Detail":"Edit"},on:{"button-click":function(e){t.isEdit=!t.isEdit}},slot:"button"}),t.event.id&&t.isEdit?s("EventForm",{attrs:{event:t.event}}):t.event.title?s("EventPreview",{attrs:{event:t.event}}):t._e()],1)],1),t.event.id?s("ParticipantsTable",{attrs:{event:t.event}}):t._e(),t.event.id?s("CertTable",{attrs:{event:t.event.id}}):t._e()],1)],1)},i=[],r=s("1e1d"),n=s("503b"),l=s("9e7c"),o=s("0441"),c=s("7185"),d=s("aa38"),u=s("6882"),b=s("1962"),p={name:"EventDetail",components:{Tiles:l["a"],HeroBar:n["a"],TitleBar:r["a"],EventPreview:d["a"],EventForm:u["a"],ParticipantsTable:o["a"],CertTable:c["a"]},props:{id:{default:null}},data(){return{isEdit:!1,isLoading:!1,isModalActive:!1,event:this.getClearFormObject(),createdReadable:null}},computed:{titleStack(){let t="";return t=this.event?"#"+this.event.id:"New event",["Admin","Events",t]},heroTitle(){return this.id?this.event.title:"Create event"},heroRouterLinkTo(){return this.id?{name:"event.new"}:"/"},heroRouterLinkLabel(){return this.id?"New event":"Dashboard"},formCardTitle(){return this.id?"Edit event":"New event"}},created(){this.getData()},methods:{getClearFormObject(){return{}},getData(){this.id&&(this.isLoading=!0,Object(b["b"])(this.id).then(t=>{this.event=t,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.$buefy.toast.open({message:"Error: "+t,type:"is-danger",queue:!1})}))}}},h=p,f=s("2877"),v=Object(f["a"])(h,a,i,!1,null,null,null);e["default"]=v.exports},"91c8":function(t,e,s){var a=s("2b10"),i=s("9aff"),r=s("4b17"),n=Math.ceil,l=Math.max;function o(t,e,s){e=(s?i(t,e,s):void 0===e)?1:l(r(e),0);var o=null==t?0:t.length;if(!o||e<1)return[];var c=0,d=0,u=Array(n(o/e));while(c<o)u[d++]=a(t,c,c+=e);return u}t.exports=o},"9aff":function(t,e,s){var a=s("9638"),i=s("30c9"),r=s("c098"),n=s("1a8c");function l(t,e,s){if(!n(s))return!1;var l=typeof e;return!!("number"==l?i(s)&&r(e,s.length):"string"==l&&e in s)&&a(s[e],t)}t.exports=l},"9e7c":function(t,e,s){"use strict";var a,i,r=s("91c8"),n=s.n(r),l={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},data(){return{windowOuterWidth:0}},computed:{newMaxPerRow(){return this.windowOuterWidth>=769&&this.windowOuterWidth<=1024?2:this.maxPerRow}},mounted(){this.updateWindowOuterWidth(),window.addEventListener("resize",this.updateWindowOuterWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowOuterWidth)},methods:{renderAncestor(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map(e=>t("div",{attrs:{class:"tile is-parent"}},[e])))},updateWindowOuterWidth(){this.windowOuterWidth=window.outerWidth}},render(t){return this.$slots.default.length<=this.newMaxPerRow?this.renderAncestor(t,this.$slots.default):t("div",{attrs:{class:"is-tiles-wrapper"}},n()(this.$slots.default,this.newMaxPerRow).map(e=>this.renderAncestor(t,e)))}},o=l,c=s("2877"),d=Object(c["a"])(o,a,i,!1,null,null,null);e["a"]=d.exports},b4b0:function(t,e,s){var a=s("1a8c"),i=s("ffd6"),r=NaN,n=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(i(t))return r;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var s=o.test(t);return s||c.test(t)?d(t.slice(2),s?2:8):l.test(t)?r:+t}t.exports=u}}]);
//# sourceMappingURL=event-form.3d8a5c49.js.map