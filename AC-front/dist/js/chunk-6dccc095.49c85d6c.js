(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dccc095"],{3286:function(e,n,t){"use strict";t("7e72")},"7e72":function(e,n,t){},cb67:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"htmleaf-container"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"container"},[t("h1",[e._v("注册页面")]),t("form",{ref:"signinForm",staticClass:"form",attrs:{model:e.signinForm}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.username,expression:"signinForm.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.signinForm.username},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"username",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.password,expression:"signinForm.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.signinForm.password},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"password",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.department,expression:"signinForm.department"}],attrs:{type:"text",placeholder:"请输入部门"},domProps:{value:e.signinForm.department},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"department",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.type,expression:"signinForm.type"}],attrs:{type:"text",placeholder:"请输入类型"},domProps:{value:e.signinForm.type},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"type",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.device,expression:"signinForm.device"}],attrs:{type:"text",placeholder:"请输入设备"},domProps:{value:e.signinForm.device},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"device",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.safe,expression:"signinForm.safe"}],attrs:{type:"text",placeholder:"安全级别(0-9)"},domProps:{value:e.signinForm.safe},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"safe",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.time,expression:"signinForm.time"}],attrs:{type:"text",placeholder:"访问时间(00:00-24:00)"},domProps:{value:e.signinForm.time},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"time",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.ip,expression:"signinForm.ip"}],attrs:{type:"text",placeholder:"请输入IP地址"},domProps:{value:e.signinForm.ip},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"ip",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.mac,expression:"signinForm.mac"}],attrs:{type:"text",placeholder:"请输入MAC地址"},domProps:{value:e.signinForm.mac},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"mac",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.switcher,expression:"signinForm.switcher"}],attrs:{type:"text",placeholder:"请输入交换机"},domProps:{value:e.signinForm.switcher},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"switcher",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.signinForm.port,expression:"signinForm.port"}],attrs:{type:"text",placeholder:"请输入端口"},domProps:{value:e.signinForm.port},on:{input:function(n){n.target.composing||e.$set(e.signinForm,"port",n.target.value)}}}),t("button",{attrs:{type:"button"},on:{click:e.handleSignIn}},[e._v("注册")]),t("span",[e._v(e._s(" "))]),t("button",{attrs:{type:"button"},on:{click:e.handleReturn}},[e._v("返回")])])]),e._m(0)])])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"bg-bubbles"},[t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li")])}],r={data:function(){return{msg:"",signinForm:{username:"",password:"",department:"",type:"",device:"",safe:"",time:"",ip:"",mac:"",switcher:"",port:""}}},methods:{handleSignIn:function(){var e=this;axios.post("http://192.168.1.136:8888/unverify",e.signinForm).then((function(n){e.msg=n,alert("注册已经提交，请等待审核")}))},handleReturn:function(){this.$router.push("/")}}},s=r,a=(t("3286"),t("2877")),m=Object(a["a"])(s,i,o,!1,null,null,null);n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-6dccc095.49c85d6c.js.map