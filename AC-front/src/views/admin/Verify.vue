<template>
    <div class="htmleaf-container">
        <div class="wrapper">
            <div class="container">
                <h1>修改用户权限</h1>
                <br/>
                <br/>
                <form class="form">
                    <button type="button" @click="handleReqVerifyUser">获取用户列表</button>
                    <sapn>{{" "}}</sapn>
                    <button type="button" @click="handleReturn">返回主页面</button>
                    <!--                    <div>{{data}}</div>-->
                    <!--                    <div>{{users}}</div>-->
                </form>
            </div>

            <div>
                <el-form style="width: auto" >
                    <el-table
                            :data="users"
                            style="width: 100%">
                        <el-table-column
                                label="用户"
                                width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.username }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="部门"
                                width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.department }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="用户类型"
                                width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.type}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="时间"
                                width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.time}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="用户IP"
                                width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.ip}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form>
            </div>

            <el-form :inline="true" class="el-form-item" >
                <el-form-item>
                    <p>部门</p><input type="text" placeholder="请输入部门" v-model="department">
                </el-form-item>
                <el-form-item>
                    <p>类型</p><input type="text" placeholder="请输入类型" v-model="type">
                </el-form-item>
                <el-form-item>
                    <p>设备</p><input type="text" placeholder="请输入设备" v-model="device">
                </el-form-item>
                <el-form-item>
                    <p>安全级别</p><input type="text" placeholder="请输入安全级别" v-model="safe">
                </el-form-item>
                <el-form-item>
                    <p>访问时间</p><input type="text" placeholder="请输入访问时间" v-model="time">
                </el-form-item>
                <el-form-item><p>MAC</p><input type="text" placeholder="请输入MAC地址" v-model="mac"></el-form-item>
                <el-form-item><p>入口交换机</p><input type="text" placeholder="请输入交换机" v-model="switcher"></el-form-item>
                <el-form-item><p>接入端口</p><input type="text" placeholder="请输入端口" v-model="port"></el-form-item>
            </el-form>
            <el-form>
                <button type="button" @click="pushEdit">提交</button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Verify",
        data() {
            return {
                index:'',
                username: '',
                password: '',
                department: '',
                type: '',
                device: '',
                safe: '',
                time: '',
                ip: '',
                mac: '',
                switcher: '',
                port: '',
                users : '',
                editUser: {
                    username: '',
                    password: ''
                },
                editForm: {
                    username: '',
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
            handleReqVerifyUser() {
                const _this = this
                axios.get('http://192.168.1.50:8888/verify').then( function(response) {
                    console.log(response)
                    _this.users = response.data._embedded.userVerifies
                })
            },
            handleEdit(index, row) {
                const _this = this
                console.log(index, row);
                _this.username = row.username;
                _this.password = row.password;
                _this.department = row.department;
                _this.type = row.type;
                _this.device = row.device;
                _this.safe = row.safe;
                _this.time = row.time;
                _this.ip = row.ip;
                _this.mac = row.mac;
                _this.switcher = row.switcher;
                _this.port = row.port;
                _this.index = index;

                console.log(_this.editUser)
                // axios.post('http://192.168.1.202:8888/user/deleteUnVerifyUser', _this.editUser).then( function(response) {
                //     console.log("从未授权库中删除")
                // });
                // axios.post('http://192.168.1.202:8888/verify', row).then( function(response) {
                //     console.log("授权成功")
                // });

            },
            pushEdit() {
                const _this = this
                _this.editForm.username = _this.username;
                _this.editForm.password = _this.password;
                _this.editForm.department = _this.department;
                _this.editForm.type = _this.type;
                _this.editForm.device = _this.device;
                _this.editForm.safe = _this.safe;
                _this.editForm.time = _this.time;
                _this.editForm.ip = _this.ip;
                _this.editForm.mac = _this.mac;
                _this.editForm.switcher = _this.switcher;
                _this.editForm.port = _this.port;
                _this.users.splice(_this.index, 1);

                _this.username = '';
                _this.password = '';
                _this.department = '';
                _this.type = '';
                _this.device = '';
                _this.safe = '';
                _this.time = '';
                _this.ip = '';
                _this.mac = '';
                _this.switcher = '';
                _this.port = '';
                axios.post('http://192.168.1.202:8888/administrator/updateVerifyUser', _this.editForm).then( function(response) {
                    console.log("更改成功")
                });
            },
            handleReturn() {
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
    .wrapper {
        background: #50a3a2;
        background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
        background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .wrapper.form-success .container h1 {
        -webkit-transform: translateY(85px);
        -ms-transform: translateY(85px);
        transform: translateY(85px);
    }
    .container {
        max-width: 600px;
        margin: 0 auto;
        margin-top: 150px;
        padding: 80px 0;
        height: 400px;
        text-align: center;
    }
    .container h1 {
        font-size: 40px;
        -webkit-transition-duration: 1s;
        transition-duration: 1s;
        -webkit-transition-timing-function: ease-in-put;
        transition-timing-function: ease-in-put;
        font-weight: 200;
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
        color: #53e3a6;
    }
    form button {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: 0;
        background-color: white;
        border: 0;
        padding: 10px 15px;
        color: #53e3a6;
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
    .bg-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .bg-bubbles li {
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        bottom: -160px;
        -webkit-animation: square 25s infinite;
        animation: square 25s infinite;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
    }
    .bg-bubbles li:nth-child(1) {
        left: 10%;
    }
    .bg-bubbles li:nth-child(2) {
        left: 20%;
        width: 80px;
        height: 80px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 17s;
        animation-duration: 17s;
    }
    .bg-bubbles li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 4s;
        animation-delay: 4s;
    }
    .bg-bubbles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, 0.25);
    }
    .bg-bubbles li:nth-child(5) {
        left: 70%;
    }
    .bg-bubbles li:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .bg-bubbles li:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 7s;
        animation-delay: 7s;
    }
    .bg-bubbles li:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }
    .bg-bubbles li:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, 0.3);
    }
    .bg-bubbles li:nth-child(10) {
        left: 90%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 11s;
        animation-delay: 11s;
    }
    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
        }
    }
    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
        }
    }
</style>
