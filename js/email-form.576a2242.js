(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["email-form"],{"030f":function(e,t){var i={send:function(e){return new Promise((function(t,n){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var a=JSON.stringify(e);i.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",a,(function(e){t(e)}))}))},ajaxPost:function(e,t,n){var a=i.createCORSRequest("POST",e);a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onload=function(){var e=a.responseText;null!=n&&n(e)},a.send(t)},ajax:function(e,t){var n=i.createCORSRequest("GET",e);n.onload=function(){var e=n.responseText;null!=t&&t(e)},n.send()},createCORSRequest:function(e,t){var i=new XMLHttpRequest;return"withCredentials"in i?i.open(e,t,!0):"undefined"!=typeof XDomainRequest?(i=new XDomainRequest).open(e,t):i=null,i}};e.exports={Email:i}},"05cd":function(e,t,i){},"16f8":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("title-bar",{attrs:{"title-stack":e.titleStack}}),i("hero-bar",[e._v(" "+e._s(e.heroTitle)+" "),i("router-link",{staticClass:"button",attrs:{slot:"right",to:e.heroRouterLinkTo},slot:"right"},[e._v(" "+e._s(e.heroRouterLinkLabel)+" ")])],1),i("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),i("section",{staticClass:"section is-main-section"},[i("tiles",[i("card-component",{staticClass:"tile is-child",attrs:{title:e.formCardTitle,icon:"file-edit"}},[i("b-field",{attrs:{label:"Email",message:"From email"}},[i("b-input",{attrs:{icon:"email",placeholder:"",name:"title",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),i("b-field",{attrs:{label:"Subject",message:"Message subject"}},[i("b-input",{attrs:{icon:"email",placeholder:"",name:"title",required:""},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}})],1),i("b-field",{staticClass:"email-card",attrs:{label:"Recipients"}},[i("b-taginput",{attrs:{ellipsis:"",type:"email",icon:"email-plus",placeholder:"Add email","aria-close-label":"Delete this email"},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}})],1),i("b-field",{attrs:{label:"Message"}},[i("ckeditor",{attrs:{editor:e.editor,value:e.body,config:e.editorConfig}})],1),i("b-field",[i("b-button",{attrs:{type:"is-primary",loading:e.isLoading,"native-type":"submit"},on:{click:e.submit}},[e._v("Send")])],1)],1)],1)],1)],1)},a=[],r=i("1e1d"),s=i("503b"),o=i("9e7c"),l=i("fb3d"),u=i.n(l),c=i("030f"),d={name:"EmailModal",props:{event:{type:Object,default:null},isActive:{type:Boolean,default:!1}},components:{Tiles:o["a"],HeroBar:s["a"],TitleBar:r["a"]},data(){return{isModalActive:!1,isLoading:!1,to:[],email:"AAAIMX Student Chapter <raul.novelo@aaaimx.org>",subject:"AAAIMX Student Chapter",body:"",editor:u.a,editorConfig:{}}},computed:{titleStack(){let e;return e=this.id?this.form.uuid:"New email",["Admin","Email",e]},heroTitle(){return this.id?this.form.to:"Send email"},heroRouterLinkTo(){return this.id?{name:"email.new"}:"/"},heroRouterLinkLabel(){return this.id?"New email":"Dashboard"},formCardTitle(){return this.id?"Edit email":"New Email"}},methods:{submit(){this.isLoading=!0,c["Email"].send({SecureToken:"9bae29bc-1cbc-41c5-a289-6156d9190086",To:this.to,From:this.email,Subject:this.subject,Body:this.body}).then(e=>{this.isLoading=!1,this.$buefy.toast.open({message:"Email sent!",type:"is-success",queue:!1})})}}},f=d,m=(i("c2a8"),i("2877")),p=Object(m["a"])(f,n,a,!1,null,null,null);t["default"]=p.exports},"2b10":function(e,t){function i(e,t,i){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),i=i>a?a:i,i<0&&(i+=a),a=t>i?0:i-t>>>0,t>>>=0;var r=Array(a);while(++n<a)r[n]=e[n+t];return r}e.exports=i},"4b17":function(e,t,i){var n=i("6428");function a(e){var t=n(e),i=t%1;return t===t?i?t-i:t:0}e.exports=a},6428:function(e,t,i){var n=i("b4b0"),a=1/0,r=17976931348623157e292;function s(e){if(!e)return 0===e?e:0;if(e=n(e),e===a||e===-a){var t=e<0?-1:1;return t*r}return e===e?e:0}e.exports=s},"91c8":function(e,t,i){var n=i("2b10"),a=i("9aff"),r=i("4b17"),s=Math.ceil,o=Math.max;function l(e,t,i){t=(i?a(e,t,i):void 0===t)?1:o(r(t),0);var l=null==e?0:e.length;if(!l||t<1)return[];var u=0,c=0,d=Array(s(l/t));while(u<l)d[c++]=n(e,u,u+=t);return d}e.exports=l},"9aff":function(e,t,i){var n=i("9638"),a=i("30c9"),r=i("c098"),s=i("1a8c");function o(e,t,i){if(!s(i))return!1;var o=typeof t;return!!("number"==o?a(i)&&r(t,i.length):"string"==o&&t in i)&&n(i[t],e)}e.exports=o},"9e7c":function(e,t,i){"use strict";var n,a,r=i("91c8"),s=i.n(r),o={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},data(){return{windowOuterWidth:0}},computed:{newMaxPerRow(){return this.windowOuterWidth>=769&&this.windowOuterWidth<=1024?2:this.maxPerRow}},mounted(){this.updateWindowOuterWidth(),window.addEventListener("resize",this.updateWindowOuterWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowOuterWidth)},methods:{renderAncestor(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map(t=>e("div",{attrs:{class:"tile is-parent"}},[t])))},updateWindowOuterWidth(){this.windowOuterWidth=window.outerWidth}},render(e){return this.$slots.default.length<=this.newMaxPerRow?this.renderAncestor(e,this.$slots.default):e("div",{attrs:{class:"is-tiles-wrapper"}},s()(this.$slots.default,this.newMaxPerRow).map(t=>this.renderAncestor(e,t)))}},l=o,u=i("2877"),c=Object(u["a"])(l,n,a,!1,null,null,null);t["a"]=c.exports},b4b0:function(e,t,i){var n=i("1a8c"),a=i("ffd6"),r=NaN,s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;function d(e){if("number"==typeof e)return e;if(a(e))return r;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=l.test(e);return i||u.test(e)?c(e.slice(2),i?2:8):o.test(e)?r:+e}e.exports=d},c2a8:function(e,t,i){"use strict";var n=i("05cd"),a=i.n(n);a.a}}]);
//# sourceMappingURL=email-form.576a2242.js.map