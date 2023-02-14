<template>
  <div class="saveList">
    <el-button type="primary" style="margin-left:30px" @click="save">保存</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span v-if=" ifProduct == '1' ">保存成功</span>
      <span v-if=" ifProduct == '0' ">请选择协议客户再保存</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      dialogVisible:false,
      ifProduct:''
    }
  },
  computed:{
    ...mapState({
      productName:state => state.product.productName
    }),
  },
  methods:{
    save(){
      console.log(this.$store.state.product.productName)
      this.dialogVisible = true
      if(this.$store.state.product.productName ==''){
        this.ifProduct = '0'
      } else {
        this.ifProduct = '1'
      }
    },
    handleClose(){
      
    }
  }
}
</script>
<style lang="less" scoped>
.saveList {
  margin-top:6px;
  background-color: #fff;
  padding: 8px 0px;
}
</style>