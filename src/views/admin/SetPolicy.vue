<template>
  <div>
    <div><h1 style="font-family:'Source Sans Pro';font-weight: 300;margin-top: -5px">资源属性设置</h1></div>
    <div style="padding-top:6px;padding-left: 30px;padding-right:30px;border-bottom: #efefef solid 1px;">
      <el-button style="margin-top: -20px;background-color:gray;float: right;border-color: gray;margin-left: 5px" type="success" @click="helpDialog = true" icon="el-icon-s-opportunity"></el-button>
      <el-button style="margin-top: -20px;background-color:#409EFF;float: right;border-color: #61A4C5;margin-left: 5px" type="success" @click="manualVisible = true">手动输入</el-button>
      <el-button style="margin-top: -20px;background-color:#409EFF;float: right;border-color: #61A4C5" type="success" @click="pushContent">提交设置</el-button>
    </div>
    <div class="prompt">
      <el-tag style="font-size: medium" effect="dark">常用属性：</el-tag>
      <el-tag type="info"style="font-size: medium;margin-left: 5px" effect="plain">节点门限</el-tag>
      <el-tag type="success"style="font-size: medium;margin-left: 5px" effect="plain">所属部门</el-tag>
      <el-tag type="warning"style="font-size: medium;margin-left: 5px" effect="plain">用户类型</el-tag>
      <el-tag style="font-size: medium;margin-left: 5px" effect="plain">安全级别</el-tag>
      <el-tag type="danger"style="font-size: medium;margin-left: 5px" effect="plain">访问时段</el-tag>
      <el-tag style="font-size: medium;margin-left: 5px;color: plum;border-color: plum" effect="plain">访问设备</el-tag>
    </div>

    <div ref="myPage" style="height:calc(100vh - 50px);" @click="isShowNodeMenuPanel = false">
      <SeeksRelationGraph
          ref="seeksRelationGraph"
          :options="graphOptions"
          :on-node-click="onNodeClick"
          :on-line-click="onLineClick">
        <div slot="node" slot-scope="{node}">
          <div style="height:30px;cursor: pointer;" @click="showNodeMenus(node, $event)" @contextmenu.prevent.stop="showNodeMenus(node, $event)">
            <div style="margin-left:-5px;color: #409EFF;font-size: 16px;width: 160px;height:25px;line-height: 25px;text-align: center;">
              {{ node.text }}
            </div>
          </div>
        </div>
      </SeeksRelationGraph>
    </div>
    <div v-show="isShowNodeMenuPanel" :style="{left: nodeMenuPanelPosition.x + 'px', top: nodeMenuPanelPosition.y + 'px' }" style="z-index: 999;padding:10px;background-color: #ffffff;border:#eeeeee solid 1px;box-shadow: 0px 0px 8px #cccccc;position: absolute;">
      <div style="line-height: 25px;padding-left: 10px;color: #888888;font-size: 12px;">对该节点进行操作：</div>
      <div class="c-node-menu-item" @click.stop="pushEdit()">编辑此节点</div>
      <div class="c-node-menu-item" @click.stop="CreateNewNode()">创建子节点</div>
      <div class="c-node-menu-item" @click.stop="doDelete('操作1')">删除此节点</div>
    </div>

    <el-dialog  align="center" title="输入节点内容" style="width: 1400px;margin-left: 250px" :visible.sync="dialogVisible" :append-to-body="true">
      <el-input v-model="NodeContent" placeholder="请输入内容"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button style="width: 80px;height: auto" @click="dialogVisible = false">取 消</el-button>
        <el-button style="width: 80px;height: auto;margin-right: 250px" type="primary" @click="doEdit(),dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog align="center" title="提 示" style="width: 3000px;margin-left: -400px;margin-top: -100px" :visible.sync="helpDialog" :append-to-body="true">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../Images/example.png" style="width: 1030px;height: 658px">
        <div style="padding: 14px;">
          <span style="font-family:'Source Sans Pro';font-weight: 300;">请在根节点输入IP地址，并为根节点创建一个子节点，如上图所示</span>
        </div>
      </el-card>
      <div>
        <el-button style="width: 80px;margin-top: 20px" type="primary" @click="helpDialog = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog  align="center" title="请输入IP地址及对应属性策略" style="width: 1400px;margin-left: 250px" :visible.sync="manualVisible" :append-to-body="true">
      <el-form :inline="true" class="el-form-item">
        <el-form-item>
          <el-input v-model="IpAddr" placeholder="请输入IP" style="width: 110px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="PolicyStr" placeholder="请输入属性策略" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item>
        <el-tooltip effect="light" content="请输入属性树的后续遍历，并在末尾输入逗号" placement="right-start">
          <i class="el-icon-question" />
        </el-tooltip>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button style="width: 80px;height: auto" @click="manualVisible = false">取 消</el-button>
        <el-button style="width: 80px;height: auto;margin-right: 250px" type="primary" @click="pushPolicy(),manualVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
import axios from 'axios'
export default {
  name: 'Demo',
  components: { SeeksRelationGraph },
  data() {
    return {
      //layout setting
      dialogVisible:false,
      manualVisible:false,
      isShowCodePanel: false,
      isShowNodeMenuPanel: false,
      helpDialog: false,
      PolicyStr:'',
      IpAddr: '',
      nodeMenuPanelPosition: { x: 0, y: 0 },
      NodeContent:'',
      graphOptions: {
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultJunctionPoint: 'border',
        layouts: [
          {
            "layoutName": "tree",
            "layoutClassName": "seeks-layout-center",
            "defaultJunctionPoint": "border",
            "defaultNodeShape": 0,
            "defaultLineShape": 1
          }
        ],
        defaultLineMarker: {
          "markerWidth": 12,
          "markerHeight": 12,
          "refX": 6,
          "refY": 6,
          "data": "M2,2 L10,6 L2,10 L6,6 L2,2"
        },
        "defaultNodeShape": 1,
        "defaultNodeWidth": "150",
        "defaultNodeHeight": "25"
      },
      policy:{
        IpAddr:'',
        policyString:''
      }
    }
  },
  mounted() {
    this.showSeeksGraph()
  },
  methods: {
    showSeeksGraph(query) {
      var __graph_json_data = {
        rootId: 'IpAddr',
        nodes: [
          { id: 'IpAddr', text: '请在此处点输入IP地址' ,color: 'white',borderColor: '#409EFF',data:{child:0},fixed:true, x:792, y:20,}
        ],
        links: [
        ]
      }
      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
      })
    },//gragph init
    onNodeClick(nodeObject, $event) {
      console.log('onNodeClick:', nodeObject)
    },
    onLineClick(lineObject, $event) {
      console.log('onLineClick:', lineObject)
    },
    showNodeMenus(nodeObject, $event) {
      this.currentNode = nodeObject
      var _base_position = this.$refs.myPage.getBoundingClientRect()
      console.log('showNodeMenus:', $event, _base_position)
      this.isShowNodeMenuPanel = true
      this.nodeMenuPanelPosition.x = $event.clientX - _base_position.x
      this.nodeMenuPanelPosition.y = $event.clientY - _base_position.y
    },//delete node
    doDelete(actionName) {
      if(this.currentNode.id == 'IpAddr'){
        this.$notify({
          title: '提示',
          message: '请勿删除根节点',
          type: 'error'
        })
        this.isShowNodeMenuPanel = false
        return
      }
      var graph = this.$refs.seeksRelationGraph
      graph.removeNodeById(this.currentNode.id)
      this.$notify({
        title: '提示',
        message: '删除节点"' + this.currentNode.text + '"',
        type: 'warning'
      })
      this.isShowNodeMenuPanel = false
    },
    CreateNewNode(){
      var graph = this.$refs.seeksRelationGraph
      var _new_node_id =this.currentNode.id + '.leaf' + this.currentNode.data.child
      this.currentNode.data.child += 1
      var __graph_json_data = {
        nodes: [
          { id: _new_node_id, text:_new_node_id,color: 'white',borderColor: '#409EFF',data:{child:0}}
        ],
        links: [
          { from: this.currentNode.id, to: _new_node_id }
        ]
      }
      graph.appendJsonData(__graph_json_data, true, (seeksRGGraph) => {
        ;
      })
      this.$notify({
        title: '提示',
        message: '为节点："'+this.currentNode.text+'"创建子节点',
        type: 'success'
      })
      this.isShowNodeMenuPanel = false
    },
    pushEdit(){
      this.dialogVisible = true
      this.NodeContent = this.currentNode.text
    },
    doEdit(){
      const _this = this;
      this.currentNode.text = _this.NodeContent;
      this.$notify({
        title: '提示',
        message: '编辑成功',
        type: 'success'
      })
      this.isShowNodeMenuPanel = false
    },
    pushContent(){
      var nodeContent = this.$refs.seeksRelationGraph.graphData.nodes
      if (nodeContent[0].targetTo.length == 0){
        this.$notify({
          title: '提示',
          message: '请勿提交空策略',
          type: 'error'
        })
        return
      }
      if(nodeContent[1].targetTo == 0){
        this.$notify({
          title: '提示',
          message: '请至少输入一个属性值',
          type: 'error'
        })
        return
      }
      this.policy.IpAddr = nodeContent[0].text
      this.dfs(nodeContent[1])
      axios.post('http://' + this.GLOBAL.backendIp + '/administrator/setPolicy',this.policy).then(response => {
        if(response.data == 'success'){
          this.$notify({
            title: '提示',
            message: '成功提交',
            type: 'success'
          })
        }else {
          this.$notify({
            title: '提示',
            message: '提交错误',
            type: 'error'
          })
        }
        this.policy.policyString = ''
        this.policy.IpAddr = ''
        this.showSeeksGraph()
      })
    },//get postorder of tree
    dfs(node){
      if(node.length == 0)
        return
      for(var i = 0;i < node.targetTo.length;i++){
        this.dfs(node.targetTo[i])
      }
      this.policy.policyString += (node.text + ',')
    },
    pushPolicy(){
      this.policy.IpAddr = this.IpAddr
      this.policy.policyString = this.PolicyStr
      axios.post('http://' + this.GLOBAL.backendIp + '/administrator/setPolicy',this.policy).then(response => {
        if(response.data == 'success'){
          this.$notify({
            title: '提示',
            message: '成功提交',
            type: 'success'
          })
        }else {
          this.$notify({
            title: '提示',
            message: '提交错误',
            type: 'error'
          })
        }
        this.policy.policyString = ''
        this.policy.IpAddr = ''
        this.showSeeksGraph()
      })
    }
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.c-node-menu-item{
  line-height: 30px;padding-left: 10px;cursor: pointer;color: #444444;font-size: 14px;border-top:#efefef solid 1px;
}
.c-node-menu-item:hover{
  background-color: rgb(225,235,250);
}
</style>

<style>
.prompt{
  font-family:'Source Sans Pro';
  font-weight: 400;
  position: absolute;
  left: 250px;
  top: 90px;
}
</style>
