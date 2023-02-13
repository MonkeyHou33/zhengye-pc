export default {
  state: {
    powerAttrList:[
      {
        fieldName:'',
      }
    ]
  },
  mutations: {
    addProduct(state,value){
      state.powerAttrList.push(value)
    },
  }
}