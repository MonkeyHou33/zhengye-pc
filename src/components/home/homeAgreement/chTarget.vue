<template>
  <div>
    <el-form>
      <div style="display:flex;justify-content: space-between;align-items: center;width:86%;height:40px">
        <el-form-item>
          <span class="select-name">购进指标：</span>
          <el-select size="mini" style="width:100px" v-model="purchaseTarget" placeholder="请选择" @change="changePurchase($event)">
            <el-option
              v-for="item in purchaseTargetValue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input
            size="mini"
            style="width:150px;margin-left:10px"
            placeholder="输入金额/数量"
            v-model="inputPurchase"
            :disabled="Purchase"
            @change="changeInputPurchase($event)">
          </el-input>
        </el-form-item>
        <el-form-item>
          <span class="select-name">纯销指标：</span>
          <el-select size="mini" style="width:80px" v-model="saleTarget" placeholder="请选择" @change="changeSale($event)">
            <el-option
              v-for="item in saleTargetValue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input
            size="mini"
            style="width:150px;margin-left:10px"
            placeholder="输入金额/数量"
            v-model="inputSale"
            :disabled="sale"
            @change="changeInputSale($event)">
          </el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      purchaseTarget:'',//购进指标
      inputPurchase:'',
      Purchase:true,
      purchaseTargetValue:[
        {
          label:'金额',
          value:'0'
        },
        {
          label:'数量',
          value:'1'
        },
      ],
      saleTarget:'',//纯销指标
      inputSale:'',
      sale:true,
      saleTargetValue:[
        {
          label:'金额',
          value:'0'
        },
        {
          label:'数量',
          value:'1'
        },
      ],
      //传值
      children:{
        purchaseTarget:'',
        inputPurchase:'',
        saleTarget:'',
        inputSale:''
      }
    }
  },
  methods:{
    //购进指标选择数量时 输入框解锁
    changePurchase(val){
      if(val === '1'){
        this.Purchase = false
        this.children.purchaseTarget = val
        this.$emit('chTarget',this.children)
      } else {
        this.Purchase = true
        this.children.purchaseTarget = val
        this.$emit('chTarget',this.children)
      }
    },
    //纯销指标选择数量时，输入框解锁
    changeSale(val){
      if(val === '1'){
        this.sale = false
        this.children.saleTarget = val
        this.$emit('chTarget',this.children)
      } else {
        this.sale = true
        this.children.saleTarget = val
        this.$emit('chTarget',this.children)
      }
    },
    //购进输入框
    changeInputPurchase(val){
      this.children.inputPurchase = val
      this.$emit('chTarget',this.children)
    },
    //纯销输入框
    changeInputSale(val){
      this.children.inputSale = val
      this.$emit('chTarget',this.children)
    }
  }
}
</script>
<style scoped lang="less">
.select-name {
    color:#7a7a7a;
    margin-left: 16px;
  }
</style>