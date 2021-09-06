<template>
    <div class="htmleaf-container">
        <div class="wrapper">
            <div>
              <el-card class="login-form-layout">
                <h1>管理员登录</h1>
                <p style="color: white; margin-top: -20px">______________________</p>
                <i class="el-icon-s-custom" style="font-size:60px;margin-top: 20px;color: #2c3e50"></i>
                <form class="form" :model="loginForm" ref="loginForm">
                    <input type="text" placeholder="请输入电话号码" v-model="loginForm.username">
                    <input type="password" placeholder="请输入密码" v-model="loginForm.password">
                    <button type="button" @click="handleLogin">登录</button>
                    <span>{{"  "}}</span>
                  <br/>
                    <button type="button" @click="handleReturn" style="margin-top: 10px">返回</button>
                    <div>{{msg}}</div>
                </form>
              </el-card>
            </div>

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
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            handleLogin() {
                const _this = this
                _this.loginData = {
                    username:'',
                    password: ''
                }
                _this.loginData.username = _this.loginForm.username
                // _this.loginData.password = this.$md5(_this.loginForm.password)
                 _this.loginData.password = _this.loginForm.password
                axios.post('http://' + this.GLOBAL.backendIp + '/admin/login', _this.loginData).then( function(response) {
                         let message = response.data;
                    if(response.data.code === 2001) {
                        // _this.$message({
                        //   showClose:true,
                        //   message:"登录成功",
                        //   type:'success'
                        // })
                    _this.$router.push("/admin")
                    } else {
                        _this.$message({
                          showClose:true,
                          message:message,
                          type:'error'
                        })
                    }
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
.login-form-layout {
  position: absolute;
  background-color: transparent;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 20px solid #61A4C5;
  border-radius: 10px;
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
  background-color: whitesmoke;
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
