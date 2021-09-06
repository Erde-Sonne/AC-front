<template>
  <div>
    <h1>资源策略列表</h1>
    <el-card class="login-form-layout" align="middle" >
      <div>
        <el-table
            :data="policys.slice((currentPage-1)*pageSize, currentPage*pageSize)"
            style="width: 850px">
          <el-table-column
              fixed
              prop="dstIP"
              label="IP地址"
              width="100">
          </el-table-column>
          <el-table-column
              prop="policycol"
              label="策略"
              width="600">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="140">
            <template slot-scope="scope">
              <el-button  type="primary"  style="width: 50px;height: 25px" @click="handleEdit(scope.$index, scope.row),dialogVisible = true">编辑</el-button>
              <el-popconfirm confirm-button-text='删除' cancel-button-text='取消' icon="el-icon-info" icon-color="red" title="确认删除该资源？" @confirm="handleDelete(scope.$index, scope.row)">
                <el-button  slot="reference" type="danger"  style="width: 50px;height: 25px;margin-left: 10px">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog  align="center" title="资源属性更改" style="width: 1400px;margin-left: 250px" :visible.sync="dialogVisible" :append-to-body="true">
          <el-form :inline="true" class="el-form-item" >
            <el-form-item>
              <p>当前策略</p><input type="text" placeholder="请输入策略" v-model="policyStr" style="width: 600px">
            </el-form-item>
          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button style="width: 80px;height: 30px" @click="dialogVisible = false">取 消</el-button>
            <el-button style="width: 80px;height: 30px;margin-right: 250px" type="primary" @click="pushEdit(),dialogVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="container">
        <form class="form">
          <el-button type="primary"  style="width: 200px;margin-top:10px " @click="handleReqPolicy">获取资源列表</el-button>
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
  name: 'PolicyUpdate',
  data() {
    return {
      pageSize:14,
      totalCount:0,
      currentPage:1,
      index:'',
      IpAddr:'',
      policyStr:'',
      policys:'',
      dialogVisible:false,
      deletePolicy: {
        IpAddr: '',
        policyStr: ''
      },
      editForm: {
        IpAddr: '',
        policyStr:''
      }
    }
  },
  methods: {
    handleCurrentChange(val){
      this.currentPage = val;
    },
    handleReqPolicy() {
      const _this = this
      axios.get('http://' + this.GLOBAL.backendIp + '/policy').then( function(response) {
        console.log(response)
        _this.totalCount = response.data.page.totalElements
        _this.policys = response.data._embedded.policies
        _this.$message({
          showClose:true,
          message:'获取成功',
          type:"success"
        })
      })
    },
    handleDelete(index, row) {
      const _this = this
      index += (this.currentPage - 1)*this.pageSize
      _this.deletePolicy.IpAddr = row.dstIP;
      _this.deletePolicy.policyStr = row.policycol;
      _this.policys.splice(index, 1);
      axios.post('http://' + this.GLOBAL.backendIp + '/administrator/deletePolicy', _this.deletePolicy).then( function(response) {
        _this.$message({
          showClose:true,
          message:'资源已删除',
          type:"info"
        })
      });
    },
    handleEdit(index, row) {
      this.IpAddr = row.dstIP;
      this.policyStr = row.policycol;
    },
    pushEdit() {
      const _this = this
      _this.editForm.IpAddr = _this.IpAddr;
      _this.editForm.policyStr = _this.policyStr;
      _this.policys.splice(_this.index, 1);
      _this.IpAddr = '';
      _this.policyStr = '';
      axios.post('http://' + this.GLOBAL.backendIp + '/administrator/updatePolicy', _this.editForm).then( function(response) {
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