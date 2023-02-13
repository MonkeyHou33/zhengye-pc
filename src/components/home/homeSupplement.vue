<template>
  <div>
    <el-form style="margin:0 20px">
      <el-form-item>
        <div class="addSupplement">
          <div> 
            <el-radio-group v-model="radio1" size="mini" @input="chooseSupplementList">
              <el-radio-button v-for="item in addSupplementList" :key="item.id" :label="item.value">{{'补充协议'+item.value}}</el-radio-button>
            </el-radio-group>
          </div>
          <div>
            <el-button size="mini" @click="addSupplementListPush" type="primary">新增</el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item style="background-color:#fff;">
        <el-row type="flex" class="row-bg" justify="center" style="border:solid 1px #dddddd;padding-bottom:30px;">
          <el-col :span="23">
            <div>
              <div style="display: flex;justify-content: space-between;align-items:center">
                <div>
                  <p style="margin:0px;padding:10px 0">协议内容：</p>
                </div>
                <div>
                  <el-button size="mini" style="color:#ffaa35" @click="deleteSupplementList">删除</el-button>
                </div>
              </div>
              <el-input style="width:100%;" v-model="supplementListCount" @change="changeInput($event)"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1:'',
      addSupplementList:[
        {
          value:'1',
          id:1
        },
        {
          value:'2',
          id:2
        },
        {
          value:'3',
          id:3
        },
      ],
      supplementListCount:'',
    }
  },
  created(){
    this.radio1 = '1'
  },
  methods:{
    addSupplementListPush(){
      this.addSupplementList.push({
        value:`${this.addSupplementList.length + 1}`,
        id:this.addSupplementList.length + 1
      })
    },
    deleteSupplementList(){
      let arr = this.addSupplementList.findIndex(item => {
        if(item.value == this.radio1){
          return true
        }
      })
      this.addSupplementList.splice(arr,1)
      for(let i =0;i<this.addSupplementList.length;i++){
        console.log(i)
        this.addSupplementList[i].value = `${i + 1}`
        this.addSupplementList[i].id = i + 1
      }
      console.log(this.addSupplementList)
    },
    chooseSupplementList(){
      this.radioInput = this.radio1
    },
    changeInput(val){
    }
  }
}
</script>
<style lang="less" scoped>
.addSupplement{
  display: flex;
  justify-content: space-between;
}
/deep/.el-input__inner{
  background-color: #f8f8f8;
  height: 100px;
}
.el-form-item {
  margin:0px;
}
/deep/.el-form-item__content {
  line-height:30px
}
.select-name {
    color:#a3a3a3;
    font-size:10px;
  }
</style>