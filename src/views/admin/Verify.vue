<template>
  <div>
    <h1>已审核用户列表</h1>
    <el-card class="login-form-layout" align="middle" >
    <div>
      <el-table
          :data="users.slice((currentPage-1)*pageSize, currentPage*pageSize)"
          style="width: 850px">
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
        <!-- <el-table-column
            prop="time"
            label="使用时段"
            width="140">
        </el-table-column> -->
        <!-- <el-table-column
            prop="ip"
            label="IP地址"
            width="140">
        </el-table-column> -->
        <el-table-column
            fixed="right"
            label="操作"
            width="140">
          <template slot-scope="scope">
            <el-button  type="primary"  style="width: 50px;height: 25px" @click="handleEdit(scope.$index, scope.row),dialogVisible = true">编辑</el-button>
            <el-popconfirm confirm-button-text='删除' cancel-button-text='取消' icon="el-icon-info" icon-color="red" title="确认删除该用户？" @confirm="handleDelete(scope.$index, scope.row)">
              <el-button  slot="reference" type="danger"  style="width: 50px;height: 25px;margin-left: 10px">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog  align="center" title="用户属性更改" style="width: 1400px;margin-left: 250px" :visible.sync="dialogVisible" :append-to-body="true">
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
          <!-- <el-form-item>
            <p>访问时间</p><input type="text" placeholder="请输入访问时间" v-model="time">
          </el-form-item> -->
          <el-form-item><p>MAC</p><input type="text" placeholder="请输入MAC地址" v-model="mac"></el-form-item>
          <el-form-item><p>入口交换机</p><input type="text" placeholder="请输入交换机" v-model="switcher"></el-form-item>
          <!-- <el-form-item><p>接入端口</p><input type="text" placeholder="请输入端口" v-model="port"></el-form-item> -->
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button style="width: 80px;height: 30px" @click="dialogVisible = false">取 消</el-button>
          <el-button style="width: 80px;height: 30px;margin-right: 250px" type="primary" @click="pushEdit(),dialogVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>


    <div class="container">
      <form class="form">
        <el-button type="primary"  style="width: 200px;margin-top:10px " @click="handleReqVerifyUser">获取用户列表</el-button>
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
        :current-page="currentPage">
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
      dialogVisible:false,
      editUser: {
        username: '',
        password: ''
      },
      deleteUser: {
        phone: '',
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
    handleCurrentChange(val){
      this.currentPage = val;
    },
    handleReqVerifyUser() {
      const _this = this
      axios.get('http://'+ this.GLOBAL.backendIp + '/administrator/reqVerifyUser').then( function(response) {
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
    handleDelete(index, row) {
      const _this = this
      console.log(index, row);
      _this.deleteUser.phone = row.phone;
      _this.deleteUser.password = row.password;
      _this.users.splice(index, 1);
      axios.post('http://'+ this.GLOBAL.backendIp + '/administrator/deleteVerifyUser', _this.deleteUser).then( function(response) {
        console.log("从授权库中删除")
        _this.$message({
          showClose:true,
          message:'用户信息已删除',
          type:"info"
        })
      });
    },
    handleEdit(index, row) {
      const _this = this
      console.log(index, row);
      _this.username = row.username;
      _this.phone = row.phone;
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
    },
    pushEdit() {
      const _this = this
      _this.editForm.username = _this.username;
      _this.editForm.phone = _this.phone;
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
      _this.phone = '';
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
      axios.post('http://'+ this.GLOBAL.backendIp + '/administrator/updateVerifyUser', _this.editForm).then( function(response) {
        console.log("更改成功")
        _this.$message({
          showClose:true,
              message:'更改成功',
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