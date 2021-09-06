<template>
  <div>
    <h1>待审核用户列表</h1>
    <el-card class="login-form-layout" align="middle" >
    <el-table
        :data="users.slice((currentPage-1)*pageSize, currentPage*pageSize)"
        style="width: 800px">
      <el-table-column
          fixed
          prop="username"
          label="用户名"
          width="140">
      </el-table-column>
      <el-table-column
          fixed
          prop="phone"
          label="电话"
          width="140">
      </el-table-column>
      <el-table-column
          prop="department"
          label="所属部门"
          width="140">
      </el-table-column>
      <el-table-column
          prop="type"
          label="用户类型"
          width="140">
      </el-table-column>
      <el-table-column
          prop="time"
          label="使用时段"
          width="140">
      </el-table-column>

      <el-table-column
          prop="ip"
          label="IP地址"
          width="140">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="80">
        <template slot-scope="scope">
          <el-button  type="danger"  style="width: 50px;height: 25px" @click="handleVerify(scope.$index, scope.row)">授权</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="container">
      <form class="form">
        <el-button type="primary"  style="width: 200px;margin-top: 20px " @click="handleReqUnVerifyUser">获取未授权用户列表</el-button>
        <sapn>{{" "}}</sapn>
        <el-button type="primary" style="width: 200px" @click="handleReturn">返回主页面</el-button>
      </form>
    </div>

    <div >
      <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="total, prev, pager, next"
          :page-size="pageSize"
          :total="totalCount"
          :current-page="currentPage" >
      </el-pagination>
    </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookManage',
  data() {
    return {
      pageSize:14,
      totalCount:0,
      currentPage:1,
      users : '',
      deleteUser: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    handleCurrentChange(val){
      this.currentPage = val;
    },
    handleReqUnVerifyUser() {
      const _this = this
      axios.get('http://'+ this.GLOBAL.backendIp + '/user/reqUnVerifyUser').then( function(response) {
        console.log(response)
        _this.totalCount = response.data.length
        _this.users = response.data
        _this.$message({
          showClose:true,
          message:'获取成功',
          type:"success"
        })
      })
    },
    handleVerify(index, row) {
      const _this = this
      console.log(index, row);
      _this.deleteUser.phone = row.phone;
      _this.deleteUser.password = row.password;
      _this.users.splice(index, 1);
      axios.post('http://'+ this.GLOBAL.backendIp + '/user/deleteUnVerifyUser', _this.deleteUser).then( function(response) {
        console.log("从未授权库中删除")
      });
      axios.post('http://'+ this.GLOBAL.backendIp + '/verify', row).then( function(response) {
        console.log("授权成功")
        _this.$message({
          showClose:true,
          message:"授权成功",
          type:"success"
        })
      });

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
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
form input {
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  border: 1px solid #C0C4CC;
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 15px;
  color: grey;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  font-weight: 300;
}form input:hover {
   background-color: rgba(255, 255, 255, 0.4);
 }
form input:focus {
  background-color: white;
  width: 300px;
  color: #409EFF;
  border: 1px solid #409EFF;
}
.form button {
  outline: 0;
  border: 0;
  padding: 10px 15px;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 14px;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
}
.login-form-layout {
  background-color: transparent;
  position: absolute;
  left: 600px;
  width:1000px;
  border-top: 20px solid #409EFF;
}
</style>