(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e934a1b"],{"0792":function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));var s=r("61f7"),a={required:!0,message:"This field is required",trigger:"blur"},i={validator:function(e,t,r){!Object(s["d"])(t)&&t.trim()?r(new Error("Please enter the correct email")):r()}},o={validator:function(e,t,r){t.length?r():r(new Error("The password can not be less than 6 digits"))}}},"1c1f":function(e,t,r){"use strict";var s={methods:{compare:function(e,t){return e.position>t.position?1:-1}}};t["a"]=s},"407f":function(e,t,r){"use strict";var s={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},a=s,i=r("532b"),o=void 0,n={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[a],created:function(){this.$store.commit("app/SET_STEPS",i["a"])},methods:{validateRequire:function(e,t,r){""===t?(o.$message({message:e.field+" is required",type:"error"}),r(new Error("Required field"))):r()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,r){t?validURL(t)?r():(o.$message({message:"Invalid URL format",type:"error"}),r(new Error("Invalid URL"))):r()}}};t["a"]=n},"532b":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return a}));var s=[{element:".filter-container",popover:{title:"Table filters",description:"Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.",position:"bottom"}},{element:".el-table",popover:{title:"Table",description:"Resources, items, list, result of filters applied.",position:"top"}},{element:".el-select--mini",popover:{title:"Quick actions",description:"Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.",position:"top"}},{element:".pagination-container",popover:{title:"Pagination",description:"Choose items quantity or page will be listed.",position:"top"}}],a=[{element:".postInfo-container",popover:{title:"Create/Update Form",description:'Edit or enter each field and click <b>Save/Save changes</b>. <br>\n        <span style="color: red;">*</span> Indicates required field and can not be empty.\n        ',position:"top"}},{element:".el-button--success",popover:{title:"Save button",description:'Click this button when all required fields or changes are ready and wait to save into database. <br>\n      Input errors will be displayed in <span style="color: red;">red</span>.\n      \n      ',position:"left"}}]},"828d":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var s=r("780a");function a(e){return Object(s["a"])({url:"/projects/",method:"GET",params:{title:e}})}function i(e){return Object(s["a"])({url:"/members/",method:"GET",params:{name:e}})}},abd9:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"createPost-container"},[r("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[r("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.type}},[r("TypeDropdown",{model:{value:e.postForm.type,callback:function(t){e.$set(e.postForm,"type",t)},expression:"postForm.type"}}),e._v(" "),r("BannerUrlDropdown",{model:{value:e.postForm.link,callback:function(t){e.$set(e.postForm,"link",t)},expression:"postForm.link"}}),e._v(" "),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deleteResearch}},[e._v("Delete")])],1),e._v(" "),r("div",{staticClass:"createPost-main-container"},[r("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e.isEdit?r("code-loader"):r("el-tab-pane",{attrs:{label:"Preview",name:"preview"}},[r("keep-alive",[r("ResearchPreview",{attrs:{research:e.postForm}})],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"Edit",name:"edit"}},[r("keep-alive",[r("div",{staticClass:"box-item"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"postInfo-container"},[r("el-row",[r("el-col",{attrs:{span:24,xs:24}},[r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Title:",prop:"title"}},[r("el-input",{attrs:{placeholder:"i.e: Segmentación de tumores cerebrales utilizando optimización...",type:"textarea",rows:"3"},model:{value:e.postForm.title,callback:function(t){e.$set(e.postForm,"title",t)},expression:"postForm.title"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:24,xs:24}},[r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Resume/Abstract:",prop:"resume"}},[r("el-input",{attrs:{placeholder:"",type:"textarea",rows:"7"},model:{value:e.postForm.resume,callback:function(t){e.$set(e.postForm,"resume",t)},expression:"postForm.resume"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8,xs:24}},[r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Year:",prop:"year"}},[r("br"),e._v(" "),r("el-input",{staticClass:"filter-item",attrs:{type:"number",min:"2018",placeholder:"Year",clearable:""},model:{value:e.postForm.year,callback:function(t){e.$set(e.postForm,"year",t)},expression:"postForm.year"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8,xs:24}},[r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Related projects:",prop:"projects"}},[r("br"),e._v(" "),r("el-select",{attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"","remote-method":e.fetchProjects,loading:e.searching,clearable:"",placeholder:"Search and select projects"},model:{value:e.postForm.projects,callback:function(t){e.$set(e.postForm,"projects",t)},expression:"postForm.projects"}},e._l(e.projects,(function(t){return r("el-option",{key:t.uuid,attrs:{label:t.title.slice(0,30).concat("..."),value:t.uuid}},[r("small",{staticStyle:{color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.title.slice(0,100).concat("...")))])])})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:8,xs:24}},[r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Áreas de interés:",prop:"lines"}},[r("br"),e._v(" "),r("el-select",{attrs:{multiple:"",placeholder:"Select interest areas"},model:{value:e.postForm.lines,callback:function(t){e.$set(e.postForm,"lines",t)},expression:"postForm.lines"}},e._l(e.lines,(function(t){return r("el-option",{key:t.id,attrs:{label:t.topic.slice(0,30).concat("..."),value:t.id}},[e._v(e._s(t.topic))])})),1),e._v(" "),r("LineModal")],1)],1),e._v(" "),r("h2",[e._v(e._s(e.postForm.type))]),e._v(" "),r("el-col",{attrs:{span:8,xs:24}},["Thesis"==e.postForm.type?r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Grade:",prop:"grade"}},[r("br"),e._v(" "),r("el-select",{staticClass:"filter-item",attrs:{placeholder:"Licenciatura",clearable:"","allow-create":"",filterable:""},model:{value:e.postForm.grade,callback:function(t){e.$set(e.postForm,"grade",t)},expression:"postForm.grade"}},e._l(["Licenciatura","Maestría","Doctorado","Postdoctorado"],(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):e._e()],1),e._v(" "),"Presentation"==e.postForm.type?r("el-col",{attrs:{span:24,xs:24}},[r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Event:",prop:"event"}},[r("br"),e._v(" "),r("el-input",{staticClass:"filter-item",attrs:{clearable:""},model:{value:e.postForm.event,callback:function(t){e.$set(e.postForm,"event",t)},expression:"postForm.event"}})],1)],1):e._e(),e._v(" "),r("el-col",{attrs:{span:12,xs:24}},["Article"==e.postForm.type?r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Article type:",prop:"pub_type"}},[r("el-input",{staticClass:"filter-item",attrs:{clearable:""},model:{value:e.postForm.pub_type,callback:function(t){e.$set(e.postForm,"pub_type",t)},expression:"postForm.pub_type"}})],1):e._e()],1),e._v(" "),"Article"==e.postForm.type?r("el-col",{attrs:{span:12,xs:24}},[r("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Published in:",prop:"púb_in"}},[r("el-input",{staticClass:"filter-item",attrs:{clearable:""},model:{value:e.postForm.pub_in,callback:function(t){e.$set(e.postForm,"pub_in",t)},expression:"postForm.pub_in"}})],1)],1):e._e()],1)],1)])],1)],1)])],1),e._v(" "),e.isEdit?r("el-tab-pane",{attrs:{label:"Collaborators",name:"colls"}},[r("keep-alive",[r("el-row",[r("el-col",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{span:12,lg:12,xs:24}},[r("Authors",{attrs:{authors:e.postForm.authors,title:"Authors"}})],1),e._v(" "),r("el-col",{directives:[{name:"show",rawName:"v-show",value:"Thesis"===e.postForm.type&&e.isEdit,expression:"postForm.type === 'Thesis' && isEdit"}],attrs:{span:12,lg:12,xs:24}},[r("Advisors",{attrs:{advisors:e.postForm.advisors,title:"Advisors"}})],1)],1)],1)],1):e._e()],1)],1)],1)],1)},a=[],i=(r("5df3"),r("ac6a"),r("55dd"),r("96cf"),r("3b8d")),o=r("db72"),n=r("2f62"),l=r("e330"),c=r("896b"),p=r("24d2"),u=r("828d"),d=(r("61f7"),r("407f")),m=r("1c1f"),h=r("0792"),f={title:[h["c"]],year:[h["c"]],type:[h["c"]]},b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-tag",{attrs:{size:"mini",type:"success",effect:"plain"}},[e._v("\n      "+e._s(e.research.type)+"\n    ")]),e._v(" "),r("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v("\n      "+e._s(e.research.pub_type||e.research.grade||e.research.year)+"\n    ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("strong",[e._v(e._s(e.research.title))]),e._v(" "),r("br"),e._v(" "),r("small",{staticStyle:{color:"gray"}},[e._v("Jan "+e._s(e.research.year))]),e._v(" "),r("br"),e._v(" "),e.research.projects[0]?r("small",{staticStyle:{color:"gray"}},[e._v("Project:\n      "),r("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{tag:"a",to:{name:"EditProject",params:{id:e.research.projects[0]}}}},[e._v(e._s(e.research.projects[0]))])],1):e._e(),e._v(" "),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v(e._s(e.research.pub_in||e.research.event||"Full-text"))]),e._v(" "),e._l(e.research.authors.concat(e.research.advisors),(function(t){return r("a",{key:t.id,staticClass:"text item"},[r("router-link",{staticClass:"link-type",attrs:{to:"/members/"+t.member,tag:"a"}},[e._v(e._s(t.name)+" "+e._s(t.surname)+"\n        "),r("sup",{staticClass:"link-type"},[e._v(e._s(t.position))]),r("br")])],1)}))],2),e._v(" "),e.research.resume?r("aside",{staticStyle:{"margin-top":"15px","line-height":"21px"}},[r("small",[e._v("\n      "+e._s(e.research.resume)+"\n    ")])]):e._e(),e._v(" "),r("div",e._l(e.lines.filter((function(t){return-1!==e.research.lines.indexOf(t.id)})),(function(t){return r("el-tag",{key:t.id,attrs:{size:"small",type:"info"}},[e._v("\n      "+e._s(t.topic)+"\n    ")])})),1)])},v=[],y={props:["research"],computed:Object(o["a"])({},Object(n["c"])("projects",["lines"]))},g=y,_=r("2877"),x=Object(_["a"])(g,b,v,!1,null,null,null),w=x.exports,F={title:"",resume:"",year:2018,grade:"",event:"",pub_in:"",pub_type:"",type:"",link:"",lines:[],projects:[]},k={name:"ResearchDetail",mixins:[m["a"],d["a"]],components:{ListLoader:l["b"],CodeLoader:l["a"],ResearchPreview:w,MDinput:function(){return r.e("chunk-6790f463").then(r.bind(null,"1aba"))},Sticky:function(){return r.e("chunk-2d210590").then(r.bind(null,"b804"))},TypeDropdown:function(){return r.e("chunk-2d21de80").then(r.bind(null,"d2fb"))},BannerUrlDropdown:function(){return Promise.all([r.e("chunk-20fe472d"),r.e("chunk-2d0c1b28")]).then(r.bind(null,"46c3"))},LineModal:function(){return r.e("chunk-2d0e13f0").then(r.bind(null,"7a2b"))},Authors:function(){return Promise.all([r.e("chunk-70f339e8"),r.e("chunk-28deb58a")]).then(r.bind(null,"1ff4"))},Advisors:function(){return Promise.all([r.e("chunk-70f339e8"),r.e("chunk-6f23c901")]).then(r.bind(null,"f9dc"))}},data:function(){return{rules:f,tempRoute:{},activeName:"edit",id:null,projects:[],tabMapOptions:[{label:"Details",key:"CN"},{label:"Authors",key:"US"},{label:"Advisors",key:"JP"},{label:"Info",key:"EU"}]}},computed:Object(o["a"])({},Object(n["c"])("members",["partners","collaborators","divisions","roles"]),{},Object(n["c"])("research",["postForm"]),{},Object(n["c"])("projects",["lines"])),created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.lines.length){e.next=3;break}return e.next=3,this.$store.dispatch("projects/fetchLines");case 3:this.isEdit?(this.activeName="edit",this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("research/SET_RESEARCH_FORM",F),this.tempRoute=Object.assign({},this.$route);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{fetchProjects:function(e){var t=this;this.searching=!0,Object(u["b"])(e).then((function(e){t.projects=e.results,t.searching=!1}))},sortAuthors:function(e){return e.sort(this.compare),e},fetchData:function(e){var t=this,r=this.loadingFullPage();Object(c["b"])(e).then((function(e){e.authors.sort(t.compare),e.advisors.sort(t.compare);var s=[];e.projects.forEach((function(e){s.push(Object(p["e"])(e))})),Promise.all(s).then((function(e){t.projects=e,r.close()})),t.$store.commit("research/SET_RESEARCH_FORM",e)})).catch((function(e){r.close()}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return!1;var r,s=e.loadingFullPage();r=e.isEdit?Object(c["f"])(e.postForm):Object(c["a"])(e.postForm);var a=new Date(e.postForm.start),i=new Date(e.postForm.end);e.postForm.start="".concat(a.getFullYear(),"-").concat(a.getMonth(),"-").concat(a.getDate()),e.postForm.end="".concat(i.getFullYear(),"-").concat(i.getMonth(),"-").concat(i.getDate()),r.then((function(t){e.handleSave("".concat(e.namespace," <b>").concat(e.postForm.title,"</b> was sucessfully saved")),s.close(),e.isEdit||e.$store.dispatch("tagsView/delAllVisitedViews"),e.$router.push("/research/"+t.uuid)})).catch((function(e){s.close()}))}))},deleteResearch:function(){var e=this;Object(c["d"])(this.$route.params.id).then((function(t){e.handleError(),e.$store.dispatch("tagsView/delAllVisitedViews"),e.$router.push({name:"ResearchList"})}),(function(e){}))}}},C=k,j=Object(_["a"])(C,s,a,!1,null,null,null);t["a"]=j.exports},e330:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return l}));var s=r("92fa"),a=r.n(s),i=function(){return Math.random().toString(36).substring(2)},o={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(e,t){var r=t.props,s=t.data,o=t.children,n=r.uniqueKey?r.uniqueKey+"-idClip":i(),l=r.uniqueKey?r.uniqueKey+"-idGradient":i();return e("svg",a()([s,{attrs:{viewBox:"0 0 "+r.width+" "+r.height,version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[e("rect",{style:{fill:"url("+r.baseUrl+"#"+l+")"},attrs:{"clip-path":"url("+r.baseUrl+"#"+n+")",x:"0",y:"0",width:r.width,height:r.height}}),e("defs",[e("clipPath",{attrs:{id:n}},[o||e("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),e("linearGradient",{attrs:{id:l}},[e("stop",{attrs:{offset:"0%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?e("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),e("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor,"stop-opacity":r.secondaryOpacity}},[r.animate?e("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),e("stop",{attrs:{offset:"100%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?e("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:r.speed+"s",repeatCount:"indefinite"}}):null])])])])}},n={name:"CodeLoader",functional:!0,render:function(e,t){var r=t.data;return e(o,r,[e("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"}}),e("rect",{attrs:{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"}}),e("rect",{attrs:{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"}}),e("rect",{attrs:{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"}}),e("rect",{attrs:{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"}}),e("rect",{attrs:{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"}}),e("rect",{attrs:{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"}}),e("rect",{attrs:{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"}}),e("rect",{attrs:{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"}})])}},l={name:"ListLoader",functional:!0,render:function(e,t){var r=t.data;return e(o,r,[e("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}}),e("rect",{attrs:{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}}),e("rect",{attrs:{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}}),e("rect",{attrs:{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}}),e("rect",{attrs:{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}}),e("rect",{attrs:{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}})])}}}}]);