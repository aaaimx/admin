(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certificates"],{"41f3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-bar",{attrs:{"title-stack":t.titleStack}}),s("hero-bar",[t._v(" Certificates "),s("router-link",{attrs:{slot:"right",to:"/certificates/new"},slot:"right"},[s("b-button",{attrs:{"icon-left":"pencil-plus",type:"is-success"}},[t._v(" New certificate ")])],1)],1),s("section",{staticClass:"section is-main-section"},[s("card-component",{staticClass:"has-table"},[s("Table")],1)],1)],1)},i=[],l=s("7185"),o=s("1e1d"),r=s("503b"),n={name:"Certificates",components:{HeroBar:r["a"],TitleBar:o["a"],Table:l["a"]},computed:{titleStack(){return["Admin","Certificates"]}},methods:{actionSample(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},c=n,d=s("2877"),u=Object(d["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},7185:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Certificates",icon:"certificate","has-button-slot":!0}},[s("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("form",{attrs:{slot:"left"},slot:"left"},[s("SearchInput",{attrs:{listQuery:t.listQuery}})],1),s("div",{staticClass:"columns",attrs:{slot:"right"},slot:"right"},[s("b-field",{staticClass:"ml-2"},[s("b-datepicker",{attrs:{type:"month",icon:"calendar-today",size:"is-small",placeholder:"Select date range...",range:""},model:{value:t.listQuery.range,callback:function(e){t.$set(t.listQuery,"range",e)},expression:"listQuery.range"}})],1),s("b-field",{staticClass:"ml-2"},[s("b-select",{attrs:{placeholder:"Type",size:"is-small",expanded:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[s("option",{attrs:{value:"RECOGNITION"}},[t._v("RECOGNITION")]),s("option",{attrs:{value:"APPRECIATION"}},[t._v("APPRECIATION")]),s("option",{attrs:{value:"PARTICIPATION"}},[t._v("PARTICIPATION")]),s("option",{attrs:{value:""}},[t._v("All")])])],1),s("b-field",{staticClass:"mx-2"},[s("b-select",{attrs:{placeholder:"Status",size:"is-small",expanded:""},model:{value:t.listQuery.published,callback:function(e){t.$set(t.listQuery,"published",e)},expression:"listQuery.published"}},[s("option",{attrs:{value:"true"}},[t._v("Online")]),s("option",{attrs:{value:"false"}},[t._v("Draft")]),s("option",{attrs:{value:""}},[t._v("All")])])],1)],1)]),s("div",[s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[s("Preview",{attrs:{cert:t.row,styleMode:"single"}})]}}])},[s("b-table-column",{attrs:{label:"To",field:"to",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[s("router-link",{attrs:{tag:"a",to:"/certificates/"+e.row.uuid}},[s("small",[t._v(t._s(e.row.to))])])]]}}])}),s("b-table-column",{attrs:{label:"Type",sortable:"",field:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",[t._v(t._s(e.row.type))])]}}])}),s("b-table-column",{attrs:{label:"Event",field:"event"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.event?s("small",[t._v(t._s(e.row.event.title.length>15?e.row.event.title.slice(0,30)+"...":e.row.event.title))]):s("small",{staticClass:"has-text-grey is-abbr-like"},[t._v("No event")])]}}])}),s("b-table-column",{attrs:{label:"Date",sortable:"",field:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created_at}},[t._v(t._s(new Date(e.row.created_at).toLocaleDateString()))])]}}])}),s("b-table-column",{attrs:{field:"published",label:"Status",sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"tag is-rounded",class:{"is-success":e.row.published,"is-danger":!e.row.published}},[t._v(" "+t._s(e.row.published?"Online":"Draft")+" ")])]}}])}),s("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-small is-info",attrs:{tag:"a",target:"_blank",href:"https://www.aaaimx.org/certificates/?id="+e.row.uuid}},[s("b-tooltip",{attrs:{type:"is-info",label:"View online"}},[s("b-icon",{attrs:{icon:"open-in-new",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.generateCert(e.row)}}},[s("b-tooltip",{attrs:{type:"is-link",label:"Generate image"}},[s("b-icon",{attrs:{icon:"refresh",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-light",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.sendCertMessage(e.row)}}},[s("b-tooltip",{attrs:{type:"is-primary",label:"Send a Discord"}},[s("b-icon",{attrs:{icon:"discord",size:"is-small"}})],1)],1),s("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.trashModal(e.row)}}},[s("b-tooltip",{attrs:{type:"is-danger",label:"Delete"}},[s("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("EmptyData",{attrs:{isLoading:t.isLoading}})],1),s("div",{staticStyle:{padding:"1%"},attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"columns is-desktop"},[s("div",{staticClass:"column is-one-third-desktop"},[s("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var a=e.active;return s("button",{staticClass:"button is-primary is-small"},[s("span",[t._v("Actions")]),s("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[s("div",{staticClass:"media has-text-dark"},[s("b-icon",{staticClass:"media-left",attrs:{type:"is-success",icon:"web"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Publish selected")])])],1)]),s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[s("div",{staticClass:"media has-text-dark"},[s("b-icon",{staticClass:"media-left",attrs:{type:"is-danger",icon:"web"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Mark as draft")])])],1)])],1)],1),s("div",{staticClass:"column"},[s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)])])],1)],1)],1)},i=[],l=(s("ddb0"),s("a6c5")),o=s("b743"),r=s("fa9b"),n=s("8644"),c=s("fab6"),d=s.n(c),u={name:"CertificatesTable",components:{ModalBox:r["a"],Preview:n["a"]},props:{event:{type:Number,default:null}},mixins:[d.a],data(){return{listQuery:{type:null,event:this.event,ordering:null,page:1,limit:10,offset:0},key:"uuid",sortField:"date_created",defaultSortOrder:"asc",action:""}},methods:{handleClick(t){console.log(t),this.listQuery.type=t},clearFilters(){this.listQuery={type:"",event:this.event,ordering:null,page:1,limit:10,offset:0},this.sortField="date_created",this.defaultSortOrder="asc"},actionSample(){this.$router.push("/certificates/new")},getData(){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(l["c"])(this.listQuery).then(t=>{this.list=t.results,this.total=t.count,this.isLoading=!1})},async generateCert(t){this.isLoading=!0;try{await Object(l["g"])(t.uuid,t),this.getData()}catch(e){console.log(e),this.$buefy.dialog.alert({title:"Something went wrong :(",message:"Please navigate to the certificate detail and cofirm the required information not be empty",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0})}finally{this.isLoading=!1}},async onAction(t){switch(console.log(t),t){case"certs":this.isLoading=!0;try{const t=this.checkedRows.map(t=>Object(l["g"])(t.uuid,t));Promise.all(t).then(t=>{this.getData()})}catch(e){console.log(e)}finally{this.isLoading=!1}break;default:break}},async sendCertMessage(t){this.isLoading=!0;try{console.log("production"),await Object(o["b"])(t),this.$buefy.snackbar.open({message:"Message sent to Discord",queue:!1})}catch(e){console.log(e),this.$buefy.toast.open({type:"is-danger",message:"Something went wrong :(. Try later!!!",queue:!1})}finally{this.isLoading=!1}},async trashConfirm(){this.isModalActive=!1;try{await Object(l["f"])(this.trashObject.uuid)}catch(t){console.log(t)}finally{this.getData()}this.$buefy.snackbar.open({message:"Confirmed",queue:!1})}}},b=u,p=s("2877"),f=Object(p["a"])(b,a,i,!1,null,null,null);e["a"]=f.exports}}]);
//# sourceMappingURL=certificates.095bc4e9.js.map