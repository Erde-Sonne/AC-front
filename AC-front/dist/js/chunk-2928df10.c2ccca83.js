(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2928df10"],{"3c71":function(t,e,n){"use strict";n("9f0b")},"9f0b":function(t,e,n){},ede4:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"htmleaf-container"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"container"},[n("h1",[t._v("登录页面")]),n("form",{ref:"loginForm",staticClass:"form",attrs:{model:t.loginForm}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.username,expression:"loginForm.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.loginForm.username},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"username",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:t.handleLogin}},[t._v("登录")]),n("span",[t._v(t._s(" "))]),n("button",{attrs:{type:"button"},on:{click:t.handleReturn}},[t._v("返回")]),n("div",[t._v(t._s(t.msg))])])]),t._m(0)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"bg-bubbles"},[n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li")])}],r={data:function(){return{msg:"",loginForm:{username:"",password:""}}},methods:{handleLogin:function(){var t=this;axios.post("http://192.168.1.136:8888/user/login",t.loginForm).then((function(e){"登录成功"===e.data?t.$router.push("/success"):alert(e.data)}))},handleReturn:function(){this.$router.push("/")}}},a=r,i=(n("3c71"),n("2877")),l=Object(i["a"])(a,o,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2928df10.c2ccca83.js.map