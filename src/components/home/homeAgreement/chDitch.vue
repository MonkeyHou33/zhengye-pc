<template>
  <div>
    <el-form>
      <div style="display:flex;justify-content: space-between;align-items: center;width:84%;height:40px">
        <el-form-item>
          <span class="select-name">购进渠道：</span>
          <el-select
            size="mini"
            style="width:100px"
            v-model="buyDitch"
            placeholder="请选择"
            @change="chooseDitch($event)">
            <el-option
              v-for="item in buyDitchValue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <div style="display:flex;justify-content:center;align-items: center;width:90%；text-align:center">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="ditchNumber"
          label="指定渠道编码"/>
        <el-table-column
          prop="ditchName"
          label="指定渠道编码"/>
        <el-table-column
          prop="ditchProvince"
          label="指定渠道编码"/>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getChooseDitch } from '@/api'
export default {
  data() {
    return {
      buyDitch:'',
      buyDitchValue:[
        {
          label:'指定渠道',
          value:'1'
        },
        {
          label:'其他渠道',
          value:'0'
        },
      ],
      tableData:[]
    }
  },
  methods:{
    chooseDitch(val){
      console.log(val)
      if(val === '1' ){
        getChooseDitch().then(({data}) => {
          console.log(data.data)
          this.tableData = data.data
        })
      }
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