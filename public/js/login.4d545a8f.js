(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"206d":function(s,e,t){"use strict";t("4413")},4413:function(s,e,t){},a55b:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"form__wrapper"},[t("h1",[s._v("Login")]),t("form",{on:{submit:function(e){return e.preventDefault(),s.loginUser.apply(null,arguments)}}},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[s._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],staticClass:"form-control username",attrs:{type:"username",for:"username",id:"username",placeholder:"Username"},domProps:{value:s.username},on:{input:function(e){e.target.composing||(s.username=e.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[s._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control password",attrs:{type:"password",for:"password",id:"password",placeholder:"Password"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),t("div",{staticClass:"submit__wrapper"},[t("button",{staticClass:"btn-submit btn btn-primary",attrs:{type:"submit"}},[s._v("Submit")]),t("router-link",{attrs:{to:"/register"}},[s._v("Need an account?")])],1)])])},r=[],o=t("5530"),n=t("2f62"),i={data:function(){return{username:"",password:"",errorMessage:""}},components:{},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["login"])),{},{loginUser:function(){var s=this,e={username:this.username,password:this.password};this.login(e).then((function(e){e&&s.$router.push("/profile")})).catch((function(e){console.log(e),s.errorMessage="errore"}))}})},l=i,u=(t("206d"),t("2877")),p=Object(u["a"])(l,a,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=login.4d545a8f.js.map