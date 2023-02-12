<template>
  <div style="height:300px">
    <el-form>
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
    </el-form>
  </div>
</template>
<script>
import { getChooseCustomer } from '@/api'
export default {
  name:'chCustomer',
  data() {
    return {
      customerList:[],
      children:{
        colseDialog:true,
        CustomerSure:'',
      },
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
      this.children = {
        colseDialog:false,
        CustomerSure:item
      }
    },
    //取消关闭弹窗
    cancle(){
      this.children = {
        CustomerSure:'',
        colseDialog:false
      }
      this.$emit('cancleCustomer',this.children)
    },
    //确认选择此公司
    confirm(){
      if(this.children.CustomerSure === ''){
        this.$alert('请选择协议客户', {
          confirmButtonText: '确定',
        });
      } else {
        this.$emit('confirmCustomer',this.children)
      }
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
</style>