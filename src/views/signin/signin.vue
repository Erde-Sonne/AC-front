<template>
    <div class="htmleaf-container">
        <div class="wrapper">
          <el-card class="login-form-layout">
                <h1>注册页面</h1>

                <form class="form" :model="signinForm" ref="signinForm">
                    <input type="text" placeholder="请输入用户名" v-model="signinForm.username">
                    <input type="password" placeholder="请输入密码" v-model="signinForm.password">
                    <input type="text" placeholder="请输入手机号" v-model="signinForm.phone">
                    <input type="text" placeholder="请输入部门" v-model="signinForm.department">
                    <input type="text" placeholder="请输入类型" v-model="signinForm.type">
                    <input type="text" placeholder="请输入设备" v-model="signinForm.device">
                    <input type="text" placeholder="安全级别(0-9)" v-model="signinForm.safe">
                    <input type="text" placeholder="访问时间(00:00-24:00)" v-model="signinForm.time">
                    <input type="text" placeholder="请输入IP地址" v-model="signinForm.ip">
                    <input type="text" placeholder="请输入MAC地址" v-model="signinForm.mac">
                    <input type="text" placeholder="请输入交换机" v-model="signinForm.switcher">
                    <input type="text" placeholder="请输入端口" v-model="signinForm.port">
                    <button type="button" @click="handleSignIn">注册</button>
                    <span>{{"  "}}</span>
                    <button type="button" @click="handleReturn">返回</button>
                </form>
          </el-card>

            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                msg : '',
                signinForm: {
                    username: '',
                    phone:'',
                    password: '',
                    department: '',
                    type: '',
                    device: '',
                    safe: '',
                    time: '',
                    ip: '',
                    mac: '',
                    switcher: '',
                    port: ''
                }
            }
        },
        methods: {
            handleSignIn() {
                const _this = this
                axios.post('http://'+ this.GLOBAL.backendIp + '/user/saveUser', _this.signinForm).then( function(response) {
                    _this.msg = response
                    alert("注册已经提交，请等待审核")
                })
            },
            handleReturn() {
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-weight: 300;
    }
    body {
        font-family: "Source Sans Pro", sans-serif;
        color: white;
        font-weight: 300;
    }
    body ::-webkit-input-placeholder {
        /* WebKit browsers */
        font-family: "Source Sans Pro", sans-serif;
        color: white;
        font-weight: 300;
    }
    body :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        font-family: "Source Sans Pro", sans-serif;
        color: white;
        opacity: 1;
        font-weight: 300;
    }
    body ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        font-family: "Source Sans Pro", sans-serif;
        color: white;
        opacity: 1;
        font-weight: 300;
    }
    body :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        font-family: "Source Sans Pro", sans-serif;
        color: white;
        font-weight: 300;
    }
     .login-form-layout {
       position: absolute;
       background-color: transparent;
       left: 0;
       right: 0;
       width: 720px;
       margin: 140px auto;
       border-top: 20px solid #61A4C5;
     }
    .wrapper {
      background: #409EFF;
      background: -webkit-linear-gradient(top left, #50a3a2 0%, #409EFF 100%);
      background: linear-gradient(to bottom right, #50a3a2 0%, #409EFF 100%);
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    form {
        padding: 20px 0;
        position: relative;
        z-index: 2;
    }
    form input {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: 0;
        border: 1px solid rgba(255, 255, 255, 0.4);
        background-color: rgba(255, 255, 255, 0.2);
        width: 250px;
        border-radius: 3px;
        padding: 10px 15px;
        margin: 0 auto 10px auto;
        display: block;
        text-align: center;
        font-size: 18px;
        color: white;
        -webkit-transition-duration: 0.25s;
        transition-duration: 0.25s;
        font-weight: 300;
    }
    form input:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
    form input:focus {
        background-color: white;
        width: 300px;
        color: #5BA0FA;
    }
    form button {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: 0;
        background-color: white;
        border: 0;
        padding: 10px 15px;
        color: #9EAEB1;
        border-radius: 3px;
        width: 250px;
        cursor: pointer;
        font-size: 18px;
        -webkit-transition-duration: 0.25s;
        transition-duration: 0.25s;
    }
    form button:hover {
        background-color: #f5f7f9;
    }
</style>
