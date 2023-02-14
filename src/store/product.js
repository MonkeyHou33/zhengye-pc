export default {
  state:{
    productName:''
  },
  mutations:{
    selectProduct(state,value){
      state.productName = value
    }
  }
}