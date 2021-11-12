<template>
    <div class="htmleaf-container">
        <div class="wrapper">
            <div class="container" style="margin-top:300px">
              <div id="message">
                <h1>~~登录成功~~</h1>
                <h1>尊敬的用户{{name}},您好！
                    请不要关闭此页面！！！</h1>
              </div>
                <br/>
                <br/>
                <form class="form">
                    <button type="button" @click="handleLogout">登出</button>
                </form>
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
        name: "Success",
      data() {
            return {
              name: this.$route.query.username,
              logoutForm: {
                    phone: ''
                }
            }
        },
        methods: {
            handleLogout() {
                const _this = this
                this.logoutForm.phone = this.$route.query.username
                axios.post('http://'+ this.GLOBAL.backendIp + '/user/logout', _this.logoutForm).then( function(response) {
                    _this.msg = response
                    alert("登出成功")
                })
                this.$router.push("/")
            }
        }
    }
</script>

<style rel="stylesheet">
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-weight: 300;
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
