import Vue from 'vue'
import Vuex from 'vuex'
import aside from './aside'
import addProduct from './addProduct'

Vue.use(Vuex)

//创建vuex实例
export default new Vuex.Store({
  modules:{
    aside,
    addProduct
  }
})