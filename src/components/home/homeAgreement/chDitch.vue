<template>
  <div>
    <el-form>
      <el-row>
        <el-col :span="12" type="flex" class="row-bg" justify="end" style="height:40px">
          <div class="grid-content bg-purple">
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
              <el-button size="mini" style="margin-left:10px">请选择渠道</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <div style="display:flex;justify-content:center;align-items: center;width:90%;margin:0 auto">
      <el-table
        :data="tableData"
        size="mini"
        style="width: 100%;">
        <el-table-column
          prop="ditchNumber"
          label="指定渠道编码"/>
        <el-table-column
          prop="ditchName"
          label="指定渠道编码"/>
        <el-table-column
          prop="ditchProvince"
          label="所在省"/>
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
  }
/deep/.el-table th.el-table__cell {
  background-color: #eee;
}
</style>