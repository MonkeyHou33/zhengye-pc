import Vue from 'vue'
import VueRouter from 'vue-router'

//1.创建路由组件
import layout from '../views/layout'
import home from '../views/home'
import pageAOne from '../views/pageA/pageAOne'
import pageATwo from '../views/pageA/pageATwo'
import pageBOne from '../views/pageB/pageBOne'
import pageBTwo from '../views/pageB/pageBTwo'

Vue.use(VueRouter)

const routes = [
  //主路由
  {
    path:'/',component:layout,
    redirect:'/home',//重定向
    children:[
      { path:'home',component:home },//面试项目展示页
      { path:'pageAOne',component:pageAOne },//功能A1页面
      { path:'pageATwo',component:pageATwo },//功能A2页面
      { path:'pageBOne',component:pageBOne },//功能A1页面
      { path:'pageBTwo',component:pageBTwo },//功能A2页面
      // { path:'mall',component:mall },//商品管理
      // { path:'page1',component:pageOne },//其他
      // { path:'page2',component:pageTwo },//其他
    ]
  },
]

const router = new VueRouter({
  routes
})

//4.将router实例暴露
export default router