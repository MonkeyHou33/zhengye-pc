import Vue from 'vue'
import VueRouter from 'vue-router'

//1.创建路由组件
import layout from '../views/layout'
import home from '../views/home'
import functionAOne from '../views/functionA/functionAOne'
import functionATwo from '../views/functionA/functionATwo'

Vue.use(VueRouter)

const routes = [
  //主路由
  {
    path:'/',component:layout,
    redirect:'/home',//重定向
    children:[
      { path:'home',component:home },//面试项目展示页
      { path:'functionAOne',component:functionAOne },//功能A1页面
      { path:'functionATwo',component:functionATwo },//功能A2页面
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