<template>
  <div>
    <el-form>
      <div style="display:flex;justify-content: space-between;align-items: center;width:84%;height:40px">
        <el-form-item>
          <span class="select-name">销售区域：</span>
          <el-button size="mini" style="width:100px" @click="chooseRegion">选择区域</el-button>
          <el-button
            type="primary" plain
            size="mini"
            v-for="item in confirmCities"
            :key="item.id"
            @click="cancleCityName(item)">
              <span>{{item.cityName}}</span>
              <span style="padding-left:10px">x</span>
          </el-button>
        </el-form-item>
        <el-form-item>
          <span class="select-name">签订时间：</span>
          <el-date-picker
            size="mini"
            v-model="signingTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
      </div>
    </el-form>
    <el-dialog
      title="选择区域"
      :visible.sync="region"
      height="60%"
      width="40%">
      <div>
        <el-radio-group v-model="checkboxGroup">
          <el-radio :label="item.value" v-for="item in cities" :key="item.id" @change="changeCity(item)">{{item.cityName}}</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        <el-checkbox-group v-model="checkboxGroup" >
          <el-checkbox v-for="item in cities" :key="item.id" :label="item.value" @change="changeCity(item)">{{item.cityName}}</el-checkbox>
        </el-checkbox-group>
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
import { getChooseCity } from '@/api'
export default {
  data() {
    return {
      region:false,
      checkboxGroup:'',
      cities:[],
      confirmCities:[],
      signingTime:'',
    }
  },
  methods:{
    //获取城市接口数据
    chooseRegion(){
      this.region = true
      getChooseCity().then(({data}) => {
        this.cities = data.data
      })
    },
    //点击城市选中
    changeCity(val){
      this.confirmCities = val
    },
    //取消城市弹窗
    cancle(){
      this.checkboxGroup = ''
      this.confirmCities = [],
      this.$emit('cancleCity',this.confirmCities)
      this.region = false
    },
    //确认选择城市
    confirm(){
      if(this.confirmCities === ''){
        this.$alert('请选择销售区域', {
          confirmButtonText: '确定',
        });
      } else {
        this.$emit('confirmCity',this.confirmCities)
        this.checkboxGroup = ''
        this.region = false
      }
    },
    //删除选好的城市
    cancleCityName(val){
      console.log(val)
      if(this.confirmCities.length == 1){
        this.confirmCities = []
      }
      this.confirmCities.forEach(res => {
        console.log(res.id)
        console.log(val.id)
        if(res.id !== val.id){
          console.log(res,'res')
        }
      })
      console.log(this.confirmCities)
    }
  }
}
</script>
<style scoped lang="less">
.select-name {
    color:#7a7a7a;
    margin-left: 16px;
  }
.confirm-cancle{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top:20px
}

</style>