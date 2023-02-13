<template>
  <div>
    <add-product />
    <product-form />
  </div>
</template>
<script>
import addProduct from './homeProduct/addProduct.vue'
import productForm from './homeProduct/productForm.vue'
export default {
  data() {
    return {
    }
  },
  components:{
    addProduct,
    productForm
  }
}
</script>
<style scoped lang="less">
.agreement {
  background-color: #fff;
  padding: 10px 20px 10px 20px;
  margin:20px 20px 0px 20px ;
  border-radius: 10px 10px 0px 0px;
}
.el-divider--horizontal{
    height:1px;
    margin:0 0;
    padding:0;
    background-color:#f5f5f5;
  }
.select-name {
    color:#7a7a7a;
    font-size: 14px;
  }
.agreement-last {
  background-color: #fff;
  padding: 10px 20px 10px 20px;
  margin:0px 20px 20px 20px ;
  border-radius: 0px 0px 10px 10px;
}
</style>