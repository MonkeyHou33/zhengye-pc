<template>
  <div>
    <el-row style="margin:0 20px">
      <el-col :span="8">
        <div>
          <el-button
            type="primary"
            size="mini"
            style="margin-right:20px"
            @click="addProduct">添加产品</el-button>
          <span class="select-name">购进总指标(万元):¥152.65</span>
        </div>
      </el-col>
      <el-col :span="11">
        <div>
          <span class="select-name">指标按季度分解(万元):</span>
          <b v-for="(item) in quarterList" :key="item.label" style="font-size:10px">
            【{{item.label}}】¥{{ item.count }}
            <span v-if="item.label !== 'Q4'">,</span>
          </b>
        </div>
      </el-col>
      <el-col :span="5">
        <div>
          <span class="select-name">购进总指标(万元):¥152.65</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getQuarterList } from '@/api'
export default {
  data() {
    return {
      quarterList:[]
    }
  },
  created(){
    getQuarterList().then(({data}) => {
      this.quarterList = data.data
    })
  },
  methods:{
    addProduct(){

    }
  }
}
</script>
<style lang="less" scoped>
.select-name {
    color:#7a7a7a;
    font-size: 12px;
  }
</style>