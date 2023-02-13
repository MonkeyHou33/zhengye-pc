<template>
  <div>
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
    <div class="agreement">
      <el-form>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div>
              <span class="select-name">产品：</span>
              <el-button size="mini" style="margin-right:10px">选择产品</el-button>
              <span class="select-name">美复胶丸  24粒/盒</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <span class="select-name">协议有效期：</span>
              <el-date-picker
                style="width:200px"
                size="mini"
                type="daterange"
                range-separator="-">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="display:flex;justify-content:end;align-items: center;">
              <el-button size="mini" style="margin-right:10px">删除</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-divider></el-divider>
    <div class="agreement-last">
      <el-form>
        <el-form-item style="border:solid 1px #000">
          <el-row type="flex" class="row-bg" justify="space-around" style="background-color:#ddd">
            <el-col :span="3"><div class="grid-content bg-purple">协议价（元）</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">票折（元）</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">购进指标量（大单位）</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">购进指标量（小单位）</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"></div>购进金额（万元）</el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">纯销指标量（小单位）</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">纯销指标金额（万元）</div></el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
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
      console.log(data.data)
      this.quarterList = data.data
    })
  },
  methods:{
    addProduct(){

    }
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