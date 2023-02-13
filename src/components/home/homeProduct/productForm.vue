<template>
  <div>
    <el-form>
      <div class="agreement">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div>
              <span class="select-name">产品：</span>
              <el-button size="mini" style="margin-right:10px">选择产品</el-button>
              <span class="select-name" style="color:#409EFF">美复胶丸  24粒/盒</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <span class="select-name">协议有效期：</span>
              <el-date-picker
                v-model="agreementValidity"
                style="width:200px"
                size="mini"
                type="daterange"
                range-separator="-">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="display:flex;justify-content:end;align-items: center;">
              <el-button size="mini" style="color:#ffaa35">删除</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div class="agreement-last">
        <el-form-item style="border:solid 1px #dddddd">
          <el-row 
            type="flex" 
            class="select-name"
            justify="space-around"
            style="background-color:#f8f8f8;padding-left:10px;border-bottom:solid 1px #dddddd">
            <el-col :span="3"><div><b>协议价（元）</b></div></el-col>
            <el-col :span="3"><div><b>票折（元）</b></div></el-col>
            <el-col :span="4"><div><b>购进指标量（大单位）</b></div></el-col>
            <el-col :span="4"><div><b>购进指标量（小单位）</b></div></el-col>
            <el-col :span="3"><div><b>购进金额（万元）</b></div></el-col>
            <el-col :span="4"><div><b>纯销指标量（小单位）</b></div></el-col>
            <el-col :span="4"><div><b>纯销指标金额（万元）</b></div></el-col>
          </el-row>
          <el-row 
            type="flex" 
            class="select-name"
            justify="space-around"
            style="background-color:#ffffff;padding-left:10px;">
            <el-col :span="3">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="border:solid 1px #dddddd">
          <el-row 
            type="flex" 
            class="select-name"
            justify="space-around"
            style="background-color:#f8f8f8;padding-left:10px;border-bottom:solid 1px #dddddd">
            <el-col :span="3"><div><b>分销奖励</b></div></el-col>
            <el-col :span="3"><div><b>费用科目</b></div></el-col>
            <el-col :span="3"><div><b>零售配送</b></div></el-col>
            <el-col :span="3"><div><b>费用科目</b></div></el-col>
            <el-col :span="3"><div><b>医疗配送商</b></div></el-col>
            <el-col :span="3"><div><b>费用科目</b></div></el-col>
            <el-col :span="3"><div><b>自定义7</b></div></el-col>
            <el-col :span="3"><div><b>自定义8</b></div></el-col>
          </el-row>
          <el-row 
            type="flex" 
            class="select-name"
            justify="space-around"
            style="background-color:#ffffff;padding-left:10px;">
            <el-col :span="3">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-select v-model="singleOptions" placeholder="请选择" size="mini" style="width:90%">
                  <el-option
                    v-for="item in singleOptionsValue"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-select v-model="multipleSelectionOne" placeholder="请选择" size="mini" style="width:90%" multiple>
                  <el-option
                    v-for="item in multipleSelectionOneValue"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-input size="mini" style="width:90%" placeholder="请输入" :disabled="true"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-select v-model="multipleSelectionTwo" placeholder="请选择" size="mini" style="width:90%" multiple>
                  <el-option
                    v-for="item in multipleSelectionTwoValue"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-date-picker
                  size="mini"
                  style="width:90%"
                  v-model="dataOne"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-date-picker
                  size="mini"
                  style="width:90%"
                  v-model="dataTwo"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      agreementValidity:'',//协议有效期
      singleOptions:'1',//单选框
      singleOptionsValue:[
        {
          label:'单选框1',
          value:'1'
        },
        {
          label:'单选框2',
          value:'2'
        },
      ],
      multipleSelectionOne:[],//多选框1
      multipleSelectionOneValue:[
        {
          label:'多选框1-1',
          value:'1'
        },
        {
          label:'多选框1-2',
          value:'2'
        },
        {
          label:'多选框1-3',
          value:'3'
        },
      ],
      multipleSelectionTwo:[],//多选框2
      multipleSelectionTwoValue:[
        {
          label:'多选框2-1',
          value:'1'
        },
        {
          label:'多选框2-2',
          value:'2'
        },
        {
          label:'多选框2-3',
          value:'3'
        },
      ],
      dataOne:'',//日期选择框1
      dataTwo:'',//日期选择框2
    }
  }
}
</script>
<style lang="less" scoped>
.agreement {
  background-color: #fff;
  padding: 6px 20px 10px 6px;
  margin:10px 20px 0px 20px ;
  border-radius: 10px 10px 0px 0px;
}
.agreement-last {
  background-color: #fff;
  padding: 10px 20px 10px 20px;
  margin:0px 20px 0px 20px ;
  border-radius: 0px 0px 10px 10px;
}
.el-divider--horizontal{
    height:1px;
    margin:0 0;
    padding:0;
    background-color:#f5f5f5;
  }
.select-name {
    color:#7a7a7a;
    font-size:12px;
  }
</style>