(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["events"],{aa38:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-field",{attrs:{label:(t.event.type||"Title")+": "+t.event.title+" ("+(t.event.place||"AAAIMX")+")"}},[s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t._f("longDate")(t.event.date_start))+" - "+t._s(t._f("longDate")(t.event.date_end))+" ("+t._s(t.event.hours||0)+" horas para CC) ")])]),s("b-field",{attrs:{label:"Aditional information"}},[s("p",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"subtitle is-6",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.event.description)}})]),s("b-field",{attrs:{label:"Availability (Participants)"}},[s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.event.corum||"No establecido")+" ")])])],1)},i=[],l={props:["event"]},o=l,r=s("2877"),n=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=n.exports},aa9c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-bar",{attrs:{"title-stack":t.titleStack}}),s("hero-bar",[t._v(" Events "),s("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),s("section",{staticClass:"section is-main-section"},[s("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[s("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1)],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Events",icon:"calendar-multiple","has-button-slot":!0}},[s("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("form",{attrs:{slot:"left"},slot:"left"},[s("SearchInput",{attrs:{listQuery:t.listQuery}})],1),s("div",{staticClass:"columns",attrs:{slot:"right"},slot:"right"},[s("b-field",{staticClass:"ml-2"},[s("b-datepicker",{attrs:{type:"month",icon:"calendar-today",size:"is-small",placeholder:"Click to select...",range:""},model:{value:t.listQuery.range,callback:function(e){t.$set(t.listQuery,"range",e)},expression:"listQuery.range"}})],1),s("b-field",{staticClass:"ml-2"},[s("b-select",{attrs:{placeholder:"Type",size:"is-small",expanded:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[s("option",{attrs:{value:"Workshop"}},[t._v("Workshop")]),s("option",{attrs:{value:"Course"}},[t._v("Course")]),s("option",{attrs:{value:"Webinar"}},[t._v("Webinar")]),s("option",{attrs:{value:"Simposium"}},[t._v("Simposium")]),s("option",{attrs:{value:""}},[t._v("All")])])],1),s("b-field",{staticClass:"ml-2"},[s("b-select",{attrs:{placeholder:"Place",size:"is-small",expanded:""},model:{value:t.listQuery.place,callback:function(e){t.$set(t.listQuery,"place",e)},expression:"listQuery.place"}},[s("option",{attrs:{value:"Online"}},[t._v("Online")]),s("option",{attrs:{value:"ITM"}},[t._v("ITM")]),s("option",{attrs:{value:"G4"}},[t._v("G4")]),s("option",{attrs:{value:"Norte"}},[t._v("Norte")]),s("option",{attrs:{value:"Poniente"}},[t._v("Poniente")]),s("option",{attrs:{value:""}},[t._v("All")])])],1),s("b-field",{staticClass:"ml-2"},[s("b-select",{attrs:{placeholder:"Division",size:"is-small",expanded:""},model:{value:t.listQuery.division,callback:function(e){t.$set(t.listQuery,"division",e)},expression:"listQuery.division"}},t._l(t.$store.state.divisions,(function(t){return s("option",{key:t.id,attrs:{label:t.name},domProps:{value:t.id}})})),0)],1)],1)]),s("div",[s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!0,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[s("EventPreview",{attrs:{event:t.row}}),s("hr"),s("CertList",{ref:"certlist",attrs:{event:t.row.title}})]}}])},[s("b-table-column",{attrs:{label:"Event",field:"title",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[s("router-link",{attrs:{tag:"a",to:"/events/"+e.row.id}},[s("small",[t._v(t._s(e.row.title.slice(0,50)))])])]]}}])}),s("b-table-column",{attrs:{label:"Type",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",[t._v(t._s(e.row.type))])]}}])}),s("b-table-column",{attrs:{label:"Division",field:"division",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",[t._v(t._s(e.row.division?e.row.division.name:"AAAIMX"))])]}}])}),s("b-table-column",{attrs:{label:"Place",field:"place",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",[t._v(t._s(e.row.place))])]}}])}),s("b-table-column",{attrs:{label:"Date start",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.date_start}},[t._v(t._s(new Date(e.row.date_start).toLocaleDateString()))])]}}])}),s("b-table-column",{attrs:{label:"Date end",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.date_end}},[t._v(t._s(new Date(e.row.date_end).toLocaleDateString()))])]}}])}),s("b-table-column",{attrs:{label:"Hours",field:"hours",centered:"",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",[t._v(t._s(e.row.hours))])]}}])}),s("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"event.edit",params:{id:e.row.id}}}},[s("b-tooltip",{attrs:{type:"is-link",label:"Edit event"}},[s("b-icon",{attrs:{icon:"calendar-edit",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-light",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.sendMessageReminder(e.row)}}},[s("b-tooltip",{attrs:{type:"is-primary",label:"Send a Discord"}},[s("b-icon",{attrs:{icon:"discord",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-info",attrs:{type:"button"}},[s("b-tooltip",{attrs:{type:"is-info",label:"Participants"}},[s("b-icon",{attrs:{icon:"download",size:"is-small"}})],1)],1)],1)]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("EmptyData",{attrs:{isLoading:t.isLoading}})],1),s("div",{staticStyle:{padding:"1%"},attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"columns is-desktop"},[s("div",{staticClass:"column is-one-third-desktop"},[s("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var a=e.active;return s("button",{staticClass:"button is-primary is-small"},[s("span",[t._v("Actions")]),s("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[s("div",{staticClass:"media has-text-dark"},[s("b-icon",{staticClass:"media-left",attrs:{type:"is-primary",icon:"file-excel"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Export as excel")])])],1)])],1)],1),s("Pagination",{staticClass:"column",attrs:{listQuery:t.listQuery,total:t.total}})],1)])],1)],1)],1)},o=[],r=s("1962"),n=s("b743"),c=s("fa9b"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.certificates.length?s("div",[s("div",{staticClass:"columns is-multiline is-desktop"},t._l(t.certificates,(function(t){return s("div",{key:t.uuid,staticClass:"column is-half-tablet is-one-quarter-desktop"},[s("CertPreview",{attrs:{cert:t,"hide-description":""}})],1)})),0),s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1):t._e()},d=[],p=s("8644"),b=s("a6c5"),m={props:["event"],components:{CertPreview:p["a"]},data(){return{certificates:[],total:0,isLoading:!1,listQuery:{page:1,limit:10,offset:0}}},mounted(){this.getData(this.event.id)},watch:{listQuery:{handler(t){this.getData(this.event.id)},deep:!0}},methods:{getData(t){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(b["c"])({event:t,...this.listQuery}).then(t=>{this.certificates=t.results,this.total=t.count})}}},f=m,v=s("2877"),h=Object(v["a"])(f,u,d,!1,null,null,null),y=h.exports,_=s("aa38"),g=s("fab6"),k=s.n(g),w={name:"EventsTable",components:{ModalBox:c["a"],CertList:y,EventPreview:_["a"]},mixins:[k.a],data(){return{listQuery:{search:"",ordering:null,page:1,limit:10,offset:0},key:"id",sortField:"date_start",defaultSortOrder:"desc",certificates:[],current_event:""}},methods:{clearFilters(){this.listQuery={search:"",ordering:null,page:1,limit:10,offset:0},this.sortField="date_start",this.defaultSortOrder="asc"},actionSample(){this.$buefy.toast.open({message:"Everything OK!",type:"is-info",queue:!1})},getData(){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(r["c"])(this.listQuery).then(t=>{this.isLoading=!1,this.total=t.count,this.list=t.results}).catch(t=>{this.isLoading=!1,this.$buefy.toast.open({message:"Error: "+t.message,type:"is-danger"})})},async sendMessageReminder(t){this.isLoading=!0;try{await Object(n["c"])(t),this.$buefy.snackbar.open({message:"Message sent to Discord",queue:!1})}catch(e){console.log(e),this.$buefy.toast.open({type:"is-danger",message:"Something went wrong :(. Try later!!!",queue:!1})}finally{this.isLoading=!1}},async trashConfirm(){await Object(r["d"])(this.trashObject.id),this.$buefy.snackbar.open({message:"Event removed",queue:!1}),this.isModalActive=!1,this.getData()}}},C=w,Q=Object(v["a"])(C,l,o,!1,null,null,null),S=Q.exports,D=s("1e1d"),x=s("503b"),E={name:"Events",components:{HeroBar:x["a"],TitleBar:D["a"],ClientsTableSample:S},computed:{titleStack(){return["Admin","Events"]}},methods:{actionSample(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},O=E,A=Object(v["a"])(O,a,i,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=events.c99ee68c.js.map