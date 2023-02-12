<template>
  <div class="agreement">
    <el-form class="demo-ruleForm">
      <div style="display:flex;justify-content: space-between;align-items: center;width:80%;height:40px;margin-top:10px">
        <el-form-item>
          <i style="color:#ff100f;">*</i>
          <span class="select-name">协议客户：</span>
          <el-button size="mini" style="width:100px" @click="chooseCustomer">选择客户</el-button>
          <span style="color:#666666;text-align:center;font-size:12px;margin-left:10px">{{ customerName }}</span>
        </el-form-item>
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
      <div style="width:100%">
        <ch-target @chTarget="chTarget" />
      </div>
      <div style="width:100%">
        <chTerritory 
          @cancleCity="cancleCity"
          @confirmCity="confirmCity"
        />
      </div>
      <div style="width:100%">
        <ch-ditch />
      </div>
    </el-form>
    <el-dialog
      title="选择客户"
      :visible.sync="customer"
      height="60%"
      width="40%">
      <ch-customer
        @cancleCustomer="cancleCustomer"
        @confirmCustomer="confirmCustomer"
      />
    </el-dialog>
  </div>
</template>
<script>
import chCustomer from './homeAgreement/chCustomer.vue'
import chTarget from './homeAgreement/chTarget.vue'
import chTerritory from './homeAgreement/chTerritory.vue'
import chDitch from './homeAgreement/chDitch.vue'
export default {
  data() {
    return {
      customer:false,//选择协议公司
      customerCount:'',
      customerName:'',//协议公司名称
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
  components: {
    chCustomer,
    chTarget,
    chTerritory,
    chDitch
  },
  methods:{
    //选择客户弹窗
    chooseCustomer(){
      this.customer = true  
    },
    //取消选择客户弹窗
    cancleCustomer(val){
      console.log(val)
      this.customer = val.colseDialog
    },
    //确认选择客户页面回显
    confirmCustomer(val){
      this.customerCount = val.CustomerSure
      this.customerName = val.CustomerSure.customerName
      this.customer = val.customer
    },
    //选择协议状态
    chooseProtocolStatus(val){
      console.log(val)
    },
    chTarget(val){
      console.log(val,'1')
    },
    cancleCity(val){

    },
    confirmCity(val){
      console.log(val,'销售区域')
    },
  }
}
</script>
<style scoped lang="less">
.agreement {
  background-color: #fff;
  padding: 10px 20px;
  .select-name {
    color:#7a7a7a;
    margin-left:8px;
  }
}
</style>