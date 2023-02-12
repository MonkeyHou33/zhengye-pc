// mock数据模拟

export default {
  getChooseCustomerData: () => {
    return {
      code:200,
      data:[
        {
          customerName:'上海正也医药有限公司',
          id:'1'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'2'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'3'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'4'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'5'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'6'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'7'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'8'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'9'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'10'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'11'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'12'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'13'
        },
        {
          customerName:'上海正也医药有限公司',
          id:'14'
        },
      ]
    }
  },
  getChooseCityData: () =>{
    return {
      code:200,
      data:[
        {
          cityName:'全国',
          signingTime:'2023-02-11 20:21',
          id:1,
          value:'1'
        },
        {
          cityName:'上海',
          signingTime:'2023-02-12 14:31',
          id:2,
          value:'2'
        },
      ]
    }
  },
  getChooseDitchData: () => {
    return {
      code:200,
      data:[
        {
          ditchNumber:'BJ000090',
          ditchName:'宁波九州通药业有限公司',
          ditchProvince:'浙江省',
          id:'1'
        },
        {
          ditchNumber:'BJ000192',
          ditchName:'国药控股精华有限公司',
          ditchProvince:'浙江省',
          id:'2'
        },
        {
          ditchNumber:'BJ000283',
          ditchName:'老百姓药业有限公司',
          ditchProvince:'浙江省',
          id:'3'
        },
      ]
    }
  }
}