(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5357"],{9406:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-container"},[n(e.currentRole,{tag:"component"}),e._v(" "),n("Guide")],1)},i=[],r=n("db72"),a=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-editor-container"})},l=[],c=n("2877"),p={},u=Object(c["a"])(p,s,l,!1,null,null,null),d=u.exports,b=[{element:".sidebar-container",popover:{title:"Sidebar",description:"Modules & Quick external links",position:"right"}},{element:"#hamburger-container",popover:{title:"Hamburger",description:"Open && Close sidebar",position:"bottom"}},{element:"#breadcrumb-container",popover:{title:"Breadcrumb",description:"Indicate the current page location",position:"bottom"}},{element:"#avatar",popover:{title:"User options",description:"Quick options available in all views: <br>\n      - <b>Help Guide</b>: If you need help in any view, form or table select this option to launch \n      the step by step explained guide. <br>\n      - <b>Log Out</b>: Close current session and re-login.\n      ",position:"left"},padding:0},{element:"#tags-view-container",popover:{title:"Tags view",description:"The history of the page you visited",position:"bottom"},padding:0}],m=b,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("h1",[e._v("Wellcome to AAAIMX Admin Dashboard ")]),e._v(" "),e._m(0),e._v(" "),n("el-button",{attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.guide(t)}}},[e._v("\n    Show Guide\n  ")])],1)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",[e._v("\n    The guide is useful for some people who entered the project for the first time. You can briefly introduce the\n    features of the project. "),n("br"),e._v(" Atte.:\n    "),n("span",{staticClass:"link-type"},[e._v("AAAIMX Team")])])}],f=n("8a4d"),_={name:"DashboardGuide",mixins:[f["a"]]},g=_,w=Object(c["a"])(g,h,v,!1,null,null,null),y=w.exports,k={name:"Dashboard",components:{adminDashboard:d,Guide:y},data:function(){return{currentRole:"adminDashboard"}},computed:Object(r["a"])({},Object(a["b"])(["roles"])),created:function(){this.$store.commit("app/SET_STEPS",m)}},A=k,j=Object(c["a"])(A,o,i,!1,null,null,null);t["default"]=j.exports}}]);