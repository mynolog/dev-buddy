(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64995c64"],{"5c74":function(t,e,s){"use strict";s("b124")},"6e73":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("new-post-form")],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vs-row",{attrs:{"vs-justify":"center"}},[s("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-w":"6"}},[s("vs-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("h3",[t._v("스터디 모집")])]),s("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[s("vs-input",{attrs:{type:"text",placeholder:"제목"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),s("div",[s("vs-textarea",{attrs:{rows:"6",placeholder:"내용"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),s("vs-button",{attrs:{button:"submit",color:"primary",type:"filled"}},[t._v("작성하기")])],1)])],1)],1)},i=[],l={name:"NewPostForm",data:function(){return{title:"",content:"",userId:this.$store.getters.getUserId,loading:!1}},methods:{submit:function(){var t=this;this.loading=!0,this.$vs.loading();var e=this.title,s=this.content,n=this.userId;""!==e&&""!==s?this.$axios.post("/api/new-post",{title:e,content:s,userId:n}).then((function(e){var s=e.data;t.loading=!1,t.$vs.loading.close();var n=s.result,o=s.message,r=s.pid;1===n&&(t.$vs.notify({title:"포스팅 완료",text:o,color:"success"}),t.$router.push("/posts/".concat(r))),0===n&&t.$vs.notify({title:"포스팅 실패",text:o,color:"danger"})})):alert("제목과 내용을 입력하세요.")}}},a=l,c=(s("5c74"),s("2877")),u=Object(c["a"])(a,r,i,!1,null,"f8622cac",null),d=u.exports,v={name:"NewPost",components:{NewPostForm:d}},p=v,f=Object(c["a"])(p,n,o,!1,null,null,null);e["default"]=f.exports},b124:function(t,e,s){}}]);
//# sourceMappingURL=chunk-64995c64.25533106.js.map