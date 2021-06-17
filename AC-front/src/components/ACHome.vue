<template>
    <div class="htmleaf-container">
        <div class="wrapper">
            <div>
              <el-card class="login-form-layout">
                <h1  style="color: #2c3e50">动态访问控制系统</h1>
                <p style="color: white; margin-top: -20px">__________________________________</p>
                <i class="el-icon-s-promotion" style="font-size:60px;margin-top: 20px;color: #2c3e50"></i>
                <br/>
                <br/>
                <form class="form">
                    <div>
                        <button type="button" @click="goLogin">用户登录</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <button type="button" @click="goSign">注册页面</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <button type="button" @click="goAdmin">管理员登录</button>
                    </div>
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
    export default {
        data() {
            return {
                msg : '',

            }
        },
        methods: {
            goSign() {
                this.$router.push("/sign")
            },
            goLogin() {
                this.$router.push("/login")
            },
            goAdmin() {
                this.$router.push("/adminLog")
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
