<template>
  <div>
    <el-form class="demo-ruleForm">
      <el-row type="flex" class="row-bg" justify="end" style="height:40px">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item>
              <span style="color:#ff100f;">*</span> 
              <span class="select-name">协议客户：</span>
              <el-button size="mini" style="width:100px" @click="chooseCustomer">选择客户</el-button>
              <span style="color:#666666;text-align:center;font-size:12px;margin-left:10px">{{ customerName }}</span>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item>
              <span class="select-name">协议状态：</span>
              <el-select size="mini" v-model="protocolStatus" placeholder="请选择" @change="chooseProtocolStatus($event)">
                <el-option
                  v-for="item in protocolStatusValue"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog 
      title="选择区域"
      :visible.sync="colseDialog"
      height="60%"
      width="40%">
      <div class="CustomerList">
        <el-button
          class="CustomerList-button"
          v-for="(item,index) in customerList "
          :key="item.id"
          :index="index"
          @click="confirmCustomer(item)"
        >
          {{item.customerName}}
        </el-button>
      </div>
      <div class="confirm-cancle">
        <el-button @click="cancle">
          取消
        </el-button>
        <el-button @click="confirm" type="primary">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getChooseCustomer } from '@/api'
export default {
  name:'chCustomer',
  data() {
    return {
      customerList:[],
      colseDialog:false,
      CustomerSure:'',
      customerName:'',
      protocolStatus:'',//协议状态
      protocolStatusValue:[
        {
          label:'正常',
          value:'1'
        },
        {
          label:'不正常',
          value:'2'
        },
      ]
    }
  },
  created(){
    //调取接口获取公司列表
    getChooseCustomer().then(({data}) => {
      this.customerList = data.data
    })
  },
  methods:{
    confirmCustomer(item){
      this.customerName = item.customerName
      this.CustomerSure = item
    },
    //选择客户弹窗
    chooseCustomer(){
      this.colseDialog = true  
    },
    //取消关闭弹窗
    cancle(){
      this.colseDialog = false
      this.CustomerSure = '',
      this.customerName = ''
      this.$emit('confCustomer',this.CustomerSure)
    },
    //确认选择此公司
    confirm(){
      if(this.CustomerSure === ''){
        this.$alert('请选择协议客户', {
          confirmButtonText: '确定',
        });
      } else {
        this.$emit('confCustomer',this.CustomerSure)
        this.colseDialog = false
      }
    },
    //选择协议状态
    chooseProtocolStatus(val){
      this.$emit('protocolState',val)
    }
  },
}
</script>
<style scoped lang="less">
.CustomerList {
  text-align: center;
  height: 240px;
  overflow:auto;
  .CustomerList-button{
    margin-bottom: 20px;
  }
}
.confirm-cancle{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top:20px
}
.select-name {
    color:#7a7a7a;
  }
</style>