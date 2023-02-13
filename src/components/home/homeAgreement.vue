<template>
  <div class="agreement">
    <ch-customer
      @confCustomer="confCustomer"
      @protocolState="protocolState"/>
    <ch-target @chTarget="chTarget" />
    <chTerritory 
      @cancleCity="cancleCity"
      @confirmCity="confirmCity"/>
    <ch-ditch />
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
      customerCount:'',//客户公司
      protocolStatus:'',//客户状态
      targetList:'',
    }
  },
  components: {
    chCustomer,
    chTarget,
    chTerritory,
    chDitch
  },
  methods:{
    //选择客户页面回显
    confCustomer(val){
      this.customerCount = val
    },
    //客户状态数据
    protocolState(val){
      this.protocolStatus = val
    },
    //购进指标和纯销指标数据
    chTarget(val){
      this.targetList = val
    },
    //销售区域
    cancleCity(val){
      console.log(val,'1')
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
  border-radius: 10px;
}
</style>